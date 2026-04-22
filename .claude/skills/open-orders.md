---
name: open-orders
description: >
  Pull a single-pane view of all open positions and working orders across connected exchanges and prop firm accounts. TRIGGER when: "open orders", "check all positions", "what's open", "any open trades", "positions check", "working orders", "what do I have on", "check all accounts", "show my positions", "position status", "what am I holding", "account status", "any fills", "check stops", "pre-rest check", before stepping away from desk. Do NOT use for: trade reviews, eval progress math (use /eval-progress), or single-exchange checks that don't need aggregation.
---

# Skill: /open-orders

Pull live positions and working orders from all connected exchanges and accounts, then
produce a single consolidated status report. The goal is one view — no switching between
platforms to know what's on.

## Connected Sources

| Source | MCP Tool | Status |
|--------|----------|--------|
| Tradovate (APEX, TPT) | `get_positions`, `get_orders` | ✅ Active |
| BTCC (SOL/USDT perp) | via hummingbot-mcp or manual | Check connection |
| Robinhood | `robinhood_get_positions` | ✅ Active |
| Other exchanges | Add as MCPs are connected | Per `memory/project_exchange_roster.md` |

## Steps

### 1. Tradovate — Futures Positions and Orders

```
get_positions   — all open futures positions (APEX-06, TPT)
get_orders      — all working orders (limit entries, stops, TPs)
```

For each open position note: instrument, direction, entry price, current price, unrealized P&L, SL/TP if set.

### 2. BTCC — Crypto Perp (if active)

If a BTCC position is open, report:
- Symbol (SOL/USDT), direction, entry, current price, unrealized P&L
- Whether TP and SL are set (Pattern 9 check)

### 3. Robinhood — Equities (if relevant)

```
robinhood_get_positions  — any open equity positions
robinhood_get_options_positions  — any open options
```

Report only if positions exist — skip if empty.

### 4. Consolidate into Status Report

```
Open Orders — [Time ET]

FUTURES (Tradovate)
  APEX-06: [instrument] [dir] @ [entry] · Current: [price] · P&L: $XXX · SL: [price] · TP: [price]
  TPT: [no positions / same format]

CRYPTO (BTCC)
  SOL/USDT: [no position / dir @ entry · Current: price · P&L: $XXX] ⚠️ TP/SL: [set/not set]

EQUITIES (Robinhood)
  [No positions / list positions]

Pattern 9 check: [✅ All stops set / ⚠️ [account] missing SL on [instrument]]
```

### 5. Pattern 9 Flag

If any open position is missing a SL or TP, flag it immediately — this is Pattern 9 (pre-rest order hygiene). Do not let Christopher step away without confirming all stops are live. If stops are missing, prompt to confirm whether they should be set or the position is intentionally unprotected.

## Example

```
Open Orders — 2:45 PM ET

FUTURES (Tradovate)
  APEX-06: MNQ long @ 18,245 · Current: 18,267 · P&L: $220 · SL: 18,210 · TP: 18,300
  TPT: No positions

CRYPTO (BTCC)
  SOL/USDT: Short @ 142.30 · Current: 141.85 · P&L: $67 ⚠️ TP/SL: TP set, SL missing

EQUITIES (Robinhood)
  No positions

Pattern 9 check: ⚠️ BTCC missing SL on SOL/USDT — confirm stop before stepping away
```

## When to Use

- Before stepping away from the desk (lunch, end of session, break)
- After entering a new position to confirm stops are live
- When unsure if an order filled or a position is still open
- Any time Christopher asks "what's open" or "check all accounts"

## When NOT to Use

- Trade reviews or performance analysis (use /trade-review)
- Eval progress calculations (use /eval-progress)
- Single-exchange checks that don't require cross-platform aggregation
- Historical fills or closed positions (use `get_fills` or account history)

## Quick Commands

```bash
# MCP tools (run via Claude — not bash)
# get_positions
# get_orders
# get_fills    — recent fills if needed
# robinhood_get_positions
# robinhood_get_options_positions
```
