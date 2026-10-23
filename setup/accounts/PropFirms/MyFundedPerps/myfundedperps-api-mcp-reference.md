# MyFundedPerps — API, MCP & Automation Reference
> Compiled from the developer docs: [Quickstart](https://docs.myfundedperpetuals.com/quickstart) · [MCP Server](https://docs.myfundedperpetuals.com/mcp-server) · [API capabilities](https://docs.myfundedperpetuals.com/api-capabilities) · [Trading with the API](https://docs.myfundedperpetuals.com/trading-with-api) · [Trading policy](https://docs.myfundedperpetuals.com/trading-policy) · [Sandbox](https://docs.myfundedperpetuals.com/sandbox) · [Idempotency](https://docs.myfundedperpetuals.com/idempotency) · [Errors and rate limits](https://docs.myfundedperpetuals.com/errors-and-rate-limits) · [CLI](https://docs.myfundedperpetuals.com/cli) · [OpenAPI spec](https://docs.myfundedperpetuals.com/openapi.yaml) · full index at [llms.txt](https://docs.myfundedperpetuals.com/llms.txt)
> **⚠ The developer API is in beta. Breaking changes can land at any time.**
> Last updated: October 23, 2026

Related: [rules reference](myfundedperps-rules.md) · [October competition](myfundedperps-october-competition.md)

---

## Why This Matters to Us

MFP is the first prop firm in our roster that **officially supports an AI agent trading the account**. Its hosted MCP server is documented with Claude Code setup instructions. Everything our futures firms need Tradovate + TradeCopia + manual journaling for, MFP exposes through one API: orders, protective exits, fills, positions, account risk snapshot, trading policy and native copy groups.

This doc records how it works, so the in-house tooling vision (a Fortuna-side journal, copier and terminal) starts from real constraints.

---

## Access Methods

| Method | Auth | Host | Notes |
|---|---|---|---|
| **MCP server** | Browser **OAuth** (live) · `fp_test_` bearer key (sandbox) | `https://mcp.myfundedperpetuals.com` | Streamable HTTP, MCP revision 2026-07-28. Nothing to install. |
| REST API | API key `fp_live_…` (live) / `fp_test_…` (sandbox) | `developers.myfundedperpetuals.com` / `sandbox.myfundedperpetuals.com` | Keys created in [API Key Settings](https://myfundedperpetuals.com/settings?section=api-keys). The secret is shown once (only its hash is stored). |
| `fperp` CLI | `fperp login` (browser session) or `--with-api-key` | — | Installer: `curl -fsSL https://cli.myfundedperpetuals.com/install \| sh`. Signed releases; credentials in macOS Keychain. |
| SDKs | API key | — | TypeScript `@myfundedperps/sdk` (npm), Python `myfundedperps`, Go, Rust, Java, PHP |
| Account stream | Key | `wss://account-stream.myfundedperpetuals.com/v1/…` | Order, fill, position and balance pushes |
| Market stream | Public | WebSocket | Prices, books, trades, **candles**. REST has no candles endpoint. |

### MCP specifics
- **Claude Code setup (how we connected it):**
  ```sh
  claude mcp add --transport http myfundedperps https://mcp.myfundedperpetuals.com
  ```
  Then `/mcp` → myfundedperps → Authenticate → approve in the browser.
- **OAuth sessions** — access: trade on all accounts, or read-only if the client requests `read` scope. Expiry: 90 days. Ceiling: 5 active sessions (a new approval revokes the oldest). A live `fp_live_` key sent to the MCP server is refused.
- **Tools** are named after the CLI commands, e.g.:
  - `list-accounts`, `get-account`, `get-market-quote`
  - `create-order`, `cancel-order`, `close-position`
  - `replace-position-exit-orders`
  - `cancel-all-account-orders`, `close-all-account-positions`

  Arguments use the REST snake_case field names.
- **Results** are `{status, request_id, body}`. Failures come back as tool errors carrying the standard error envelope. A 429 includes `retry_after_seconds`.
- **Every trading write is flagged `destructiveHint: true`.** Read tools are read-only and idempotent.
- **Docs warning:** *"Tools placed under an AI assistant's control can cancel orders and close positions … prefer a sandbox key while you evaluate an agent."*

---

## What the API Covers (and Doesn't)

| ✅ Via API / MCP | ❌ Website only |
|---|---|
| List accounts + fresh risk snapshot (equity, uPnL, margin, exposure, **loss floors and room above each**, remaining profit target) | Signup, challenge purchases, identity verification, agreements |
| Markets, availability, size-aware execution quotes | **Payout requests**, billing, purchase history |
| Market, limit (GTC/IOC/FOK/GTD), chase, stop-market, stop-limit, take-market/limit, take-profit, cross-market conditional | API key creation, sandbox account creation/reset |
| Attached TP/SL on entries; atomic TP/SL batches with OCO pairing | Saved preferences, watchlists, notifications |
| Modify / cancel working orders; resumable cancel-all and close-all | **Journal notes and tags**, performance dashboards, equity-history charts |
| Partial or full position close; isolated-margin target | Competition join, path choice, resets |
| TWAP, VWAP, scaled price ladders | |
| Paginated fills (in settlement order) and order history | |
| **Native copy-trading groups** (list, save, disable) | |
| Effective trading policy per account | |

---

## Order Mechanics (REST field names)

`POST /v1/orders` — omitting `type` means market.

| `type` | Required price fields | Notes |
|---|---|---|
| `market` | `expected_price` (what you observed — never controls the fill) | `slippage_tolerance_bps`, attached TP/SL |
| `limit` | `limit_price` | attached TP/SL; `time_in_force` IOC/FOK/GTD (`gtd_expires_at` in ms). A limit at or through the market needs `marketable_limit_acknowledged: true`. |
| `stop_market` / `stop_limit` | `trigger_price` (+ `limit_price`) | attached TP/SL allowed |
| `take_market` / `take_limit` | `trigger_price` (+ `limit_price`) | opening conditionals |
| `take_profit` | `trigger_price`, `reduce_only: true` | position protection |
| `chase` | `chase_offset` | optional `chase_cap_price` |
| `conditional` | `trigger_price`, `trigger_market_id`, `trigger_direction` | **watch one market, execute on another**. A native building block for SMT-style triggers (e.g. ETH reclaims while BTC holds). |

**Common body fields:**
- Identity: `account_id`, `market_id` (contains a pipe, e.g. `binance|BTCUSDT`; URL-encode it in paths), `client_order_id`.
- Order: `side`, `size` (base-asset units, a multiple of `size_step`, ≥ `min_size` and ≥ `min_notional` USD).
- Margin: `leverage`, `margin_mode` (`cross` / `isolated`).
- Exits: `take_profit_price`, `stop_loss_price`.

**Adding to a protected position** with new attached exits is rejected (`exit-allocation`) unless `replace_overlapping_exits: true`.

**Lifecycle:** an accepted order starts `pending` → poll `GET /v1/orders/{id}` until `filled` / `rejected`. If the response is lost, recover the order with `GET /v1/orders?client_order_id=…`.

**Protective exits:** `PUT /v1/positions/{id}/exit-orders` (MCP: `replace-position-exit-orders`) atomically places, modifies and cancels TP/SL legs.
- The request must include `expected_position_size` and the current `expected_orders` snapshot; a stale snapshot returns `409`.
- New legs can be OCO-paired by operation index.
- For price-capped exits, use `execution_type: "limit"` here; create-order rejects reduce-only stop-limit and take-limit requests.

**Closing:**
- `POST /v1/positions/{id}/close` (omit `size` for a full close).
- `POST /v1/accounts/{id}/close-all-positions` is resumable via `202` + `Retry-After` and uses a 2.5% max-slippage policy.

---

## Idempotency — the Discipline

- **Required** on every order create, TWAP/VWAP/scaled create and position close (`Idempotency-Key` header; MCP `idempotency_key` argument). Printable ASCII, ≤ 128 chars.
- **Persist the key and the exact arguments *before* the first call.** Retry a lost response with the *same key, same arguments, same credential*. **Never mint a new key for an uncertain outcome** — that's a second order.
- A retry returns `200` with the order's *current* state. A rule rejection returns `422` on the original and every retry, keeping the original `order_id`.
- `client_order_id` is our own identifier for the resulting order; the idempotency key identifies the HTTP operation. Use both.

---

## Trading Policy Preflight

`GET /v1/accounts/{id}/trading-policy` returns an **advisory** snapshot, and placement remains authoritative. Read it once when selecting an account and again after any rejection; don't poll it.

| Field | Use |
|---|---|
| `manual_trading_blocked`, `opening_exposure_restricted`, `restriction` | Can this account open risk right now? |
| `trading_halt` | Platform-wide or category halts |
| `competition` | Competition window, ended-entry/DQ restriction, market allowlist (empty = all) |
| `copy_scope_blocked`, `copy_follower_locked`, `copy_stop` | Copy-group locks |
| `account_rules` | Effective rule IDs and parameters. **Use these instead of hard-coding plan numbers.** |
| `limits` | `max_open_positions`, `max_position_value_usd`, `max_resting_orders`, `min_order_notional_usd`, `order_cooldown_ms`, `trades_per_minute` |
| `maximum_total_notional_usd`, `slippage_tolerance_bps`, `fee_exempt` | Exposure ceiling, accepted slippage range, fee status |

---

## Rate Limits & Errors

- **~300 requests/minute per source IP**, shared across every key and bot on that IP. Live and sandbox count separately. MCP has the same limit.
- Account-wide cancel/close operations have their own global unit budgets.
- `422` = a trading rule rejected the order (response includes `rule_id` and `details`). Retry `429`, `500` and `503` with exponential backoff and jitter.
- **Trader Lockout** (a voluntary setting) also blocks API, bot and copied orders until it expires — `account_trader_lockout_active`, which Support can't lift early. Useful as a deliberate tilt brake.
- Docs explicitly say: **don't build a terminal by polling every second** — use the account stream.

---

## Sandbox

- Host `sandbox.myfundedperpetuals.com`; `fp_test_` keys. Same engine, rules and real market data as live.
- $100K simulated accounts (10 lifetime). They follow evaluation rules, so they can breach.
- **Access requires a challenge purchase** (active for 90 days after each purchase). With no purchase on file, there's no sandbox — which is why our first MCP testing runs on the competition account.
- Sandbox accounts never appear in live responses (and vice versa), and are excluded from leaderboards, certificates and payouts.

---

## Implications for In-House Tooling (Fortuna's notes — ideas, not plans)

1. **The perps leg of a copier is the easy part.** No EVM signing, no exchange key juggling: REST plus idempotency keys plus an account WebSocket. The AI-mode research Christopher shared rated a futures↔perps copier "8/10 difficulty", mostly because of crypto signing and state reconciliation. MFP removes the signing half.
2. **The policy risk is bigger than the engineering risk.** The Terms ban *"external copy trading, account mirroring, signal execution, or account-management arrangements that cause a third party to control your account, except for same-owner native copy trading."* An in-house copier run by the owner may be fine, and a vendor copier probably isn't. **Get MFP support's answer in writing before building or connecting anything**, and before pointing TradeCopia or any third-party copier (e.g. a GexLab copier) at MFP accounts.
3. **Native copy groups are API-manageable.** For MFP-to-MFP fan-out across our own accounts, use their groups rather than our own copier. Competition accounts are excluded.
4. **Journaling can be automated.** Fills, orders and closed positions (with `close_reason`) are all queryable, so trade reviews can be built from authoritative data instead of CSV exports. The competition is the first test of that.
5. **A JEV-style preflight maps cleanly onto this API.** Check policy → check market → get a size-aware quote → check size against caps and risk → require a stop → persist the idempotency key → place. This is the per-order gate Fortuna runs manually in the competition.
6. **Charting needs another source.** REST has no candles. Use the public market WebSocket, or the underlying venue's public klines (Binance/Bybit/Hyperliquid are the chart sources for their markets).
