# MyFundedPerps — Rules Reference
> Compiled from the official MyFundedPerps documentation ([docs.myfundedperpetuals.com](https://docs.myfundedperpetuals.com)) and Terms of Use ([myfundedperpetuals.com/terms](https://myfundedperpetuals.com/terms)).
> MyFundedPerps (MFP) is the perpetual-futures division of the MyFundedFutures family: simulated perps on crypto, stocks, indices, FX and commodities, priced from real venue order books (Binance, Bybit, Hyperliquid, Veranta, Ostium).
> **Status (Oct 23, 2026):** Christopher holds three MFP accounts:
> - a free **October Competition** account (Classic $100K), traded by Fortuna via MCP — see [`myfundedperps-october-competition.md`](myfundedperps-october-competition.md);
> - a **1K Select** prize account;
> - an **Elite 5K 3% DLL (80/20)** evaluation.
>
> A native copy group has the Elite 5K leading and the 1K Select following at a 100% balance-adjusted multiplier. No MyFundedFutures (futures) accounts yet.
> The Elite purchase also unlocks the **API sandbox for 90 days** (free $100K test accounts).
> Last updated: October 23, 2026 — the platform and its developer API are new (API in beta), so re-verify anything money-related against the live docs before acting.

**Companion docs in this folder:**
- [`myfundedperps-october-competition.md`](myfundedperps-october-competition.md) — competition rules, path math, trade ledger
- [`myfundedperps-api-mcp-reference.md`](myfundedperps-api-mcp-reference.md) — MCP / REST API / CLI reference and what it means for automation
- [`fortuna-competition-story.md`](fortuna-competition-story.md) — Fortuna's running story of the competition, for sharing

---

## Evaluation Plans (all 1-Step)

> Source: [Challenges and Rules](https://docs.myfundedperpetuals.com/guides/challenges-and-rules)

Every sold challenge is a **1-Step evaluation**. No minimum trading days, no evaluation time limit. All percentages are of **starting balance**, never current equity. Profit target and loss rules use **equity** (open P&L included).

| Plan | Sizes | Profit target | Daily loss limit | Static max drawdown | Consistency |
|---|---|---|---|---|---|
| 1-Step Select | $10K / $25K / $50K / $100K | 9% | 3% | 3% | None |
| 1-Step Prime | $10K / $25K / $50K / $100K | 12% | 3% | 5% | None |
| 1-Step Signature | $10K / $25K / $50K / $100K | 10% | 3% | 6% | None |
| Elite, 3% DLL | $5K / $10K / $25K / $50K | 10% | 3% | 5% | None |
| Elite, No DLL | $5K / $10K / $25K / $50K | 10% | None | 5% | None |

- **$1K and $2.5K Select** accounts are giveaway/promo prizes only (can't be bought). Select rules, 90/10 split, paid entirely as store credit:

  | Rule | 1K Select | 2.5K Select |
  |---|---|---|
  | Max drawdown (3% static) | floor $970 — **$30 of room** | floor $2,425 — $75 of room |
  | Daily loss (3%, on equity) | $30 | $75 |
  | Profit target (9%) | $1,090 | $2,725 |
  | Minimum payout | $30 | $50 |
  | Payout form | Store credit only (expires 45 days) | Store credit only |
  | News | Funded news restriction applies | Same |
- **Daily loss reset:** midnight New York time (04:00 UTC in EDT, 05:00 UTC in EST). The new day's reference is equity *including* open P&L, taken after the midnight swap charge. A daily reset never reopens a failed account.
- **Static drawdown** — the MLL floor is starting balance minus the allowance and **does not trail** intraday or end-of-day highs. This is the big structural difference from most CeFi futures firms (Apex/TPT-style trailing drawdown).
- **Withdrawal lock (Select / Prime / Signature):** on the first withdrawal the MLL floor locks *permanently* to the starting balance. Before the lock, touching a floor breaches; after it, equity exactly at the floor is allowed. **Elite has no lock** — its floor stays at start − 5% for life.
- Stop Loss orders don't guarantee a fill before a loss-limit breach — a detected crossing still needs a fresh execution price.

**Christopher's read (unverified, framing only):** static drawdown + no consistency rule + no minimum days is the opposite end of the spectrum from the trailing-drawdown futures firms that have blown most of the Apex series. Verify rule-by-rule before assuming any futures habit transfers.

### Account states
Active → Passed (trading stops while the next stage is prepared) → Funded (after identity + agreement + review). Failed = a rule breach or authorized decision ended it. Closed/archived = history only.

### Inactivity rules
> Source: [Breaches and Next Steps](https://docs.myfundedperpetuals.com/guides/challenge-lifecycle/breaches-and-next-steps)

| Stage | Window | Outcome |
|---|---|---|
| Evaluation | 30 consecutive **calendar** days without an executed trade | Failed — "30-Day Inactivity Rule" |
| Funded | **7** consecutive calendar days without an executed trade | Closed — "7-Day Inactivity Rule" |

Logging in, placing an order that doesn't fill, or canceling does **not** reset the window — only an executed trade does. Competition products with no evaluation rules are exempt. **⚠ The 7-day funded rule is aggressive — a funded MFP account needs a fill at least weekly.**

---

## Allocation Limits

| Limit | Value |
|---|---|
| Active evaluations | Up to **$100K per model type** (Select, Prime, Signature, Elite each separate; both Elite options share one) |
| Funded allocation | Up to **$300K total**, max **$100K per model type** |
| Accounts per order | $5K Elite / $10K: up to 10 · $25K: 4 · $50K: 2 · $100K: 1 |
| Elite No DLL purchases | $250K of account size per rolling 7 days |

A passed account that would exceed a funded limit goes to **Funding Review** instead of auto-funding.

---

## Pricing & Discounts

> Sources: [Buying a Challenge](https://docs.myfundedperpetuals.com/guides/challenge-lifecycle/buying-a-challenge) · [Elite Accounts](https://docs.myfundedperpetuals.com/guides/elite-accounts) · [Second Chance](https://docs.myfundedperpetuals.com/guides/second-chance)

**Elite list prices (one-time):**

| | $5K | $10K | $25K | $50K |
|---|---|---|---|---|
| 3% DLL | $49 | $95 | $249 | $495 |
| No DLL | $99 | $194 | $482 | $965 |
| 3% DLL + 90/10 upgrade | $59 | $114 | $299 | $594 |
| No DLL + 90/10 upgrade | $119 | $233 | $578 | $1,158 |

Homepage sale prices with the current `PERPS` code on Oct 22: Elite 3% DLL $36 / $71 / $186 / $371 (~25% off). Select / Prime / Signature prices: check the [challenge selector](https://myfundedperpetuals.com/#pricing) — not published in the docs.

- **`PERPS` code** — must be entered manually; larger discount on the first purchase. Percentage codes don't stack; an affiliate code gives whichever first-purchase discount is larger.
- **⏰ Reduced Fees free launch week — Oct 21, 9 AM ET → Oct 28, 2026, 9 AM ET.** The Reduced Fees add-on (halves every commission and swap fee for the life of the account, *including the funded account issued after a pass*) is free at checkout on up to **3** Select/Prime/Signature accounts per customer. Not available on Elite. **After the window it costs +10% of the discounted challenge price ($10 minimum).**
- **Second Chance offer** ([page](https://myfundedperpetuals.com/second-chance)) — submit proof of an account bought at another **crypto, perpetuals, or CFD** prop firm → one-time **35% off your *first* MFP account**. **One submission per MFP account, ever** (a rejected submission can't be retried). Evidence: purchase email, dashboard screenshot, or invoice (PNG/JPG/PDF, ≤5 files, no edited/AI images). Code expires **72 hours** after issue, doesn't stack. **Not used:** Christopher bought the Elite 5K with PropFirmMatch's `MATCH` code before finding this offer again, and the offer is worded for the *first* MFP account. Our other prop firms are also *futures* firms, not crypto/perps/CFD firms. **For later:** per Christopher, the MyFundedFutures (futures) division runs a similar offer at about 70% off — worth checking before buying the planned MFF Builder account (unverified here).
- **Refunds:** within 48 hours of purchase only if the challenge has had **no activity at all** (no trades, positions, or even market-data access), minus a $25 fee.
- **Store credit expires after 45 days** · **FP Points expire after 90 days**. Store-credit payouts get a +10% boost (except on the 1K/2.5K Select prize accounts, which are store-credit-only at 90%).

---

## Which Plan Fits Us? (Fortuna's analysis, Oct 23, 2026)

**All four MFP plans use static drawdown.** Static vs trailing doesn't separate them. What does is the drawdown room relative to the target, what happens to the floor after the first payout, and fees on the markets we trade.

| | Select | Prime | Signature | Elite |
|---|---|---|---|---|
| Target ÷ drawdown room | 9% / 3% = **3.0×** (hardest) | 12% / 5% = 2.4× | 10% / 6% = **1.67×** (easiest) | 10% / 5% = 2.0× |
| Floor after first payout | Locks to starting balance | Locks | Locks | **Never moves** |
| Payout cadence | 1 per NY day | 1/day | 1/day | **On demand** |
| Index / gold / oil leverage | Standard | Standard | Standard | **40× / 20× / 10×** |
| Commission on NAS100, SP500, Gold, WTI | 0.005% (0.0025% with Reduced Fees) | same | same | **0.001%** |
| Crypto commission | 0.03% (**0.015% with Reduced Fees**) | same | same | 0.03% |
| Sizes | 10K–100K | 10K–100K | 10K–100K | 5K–50K |

**Read:**
- **Elite fits a futures trader's playbook best.** Its MNQ/MES/MGC/MCL-equivalent markets are where its near-zero fees and higher leverage apply. Its floor never locks after a payout, so the cushion survives withdrawals; on Select/Prime/Signature, the first payout leaves only retained profit above the floor. Payouts are on demand. The 3% DLL option is cheaper and doubles as a tilt brake.
- **Select is the tightest plan** — 3% room for a 9% target, and the 1K Select prize has only **$30** of room. The free Reduced Fees add-on mainly helps *crypto* traders, since index/commodity fees are already small. It isn't a strong reason to buy another Select.
- **If a standard plan gets bought during the free Reduced Fees week (ends Oct 28, 9 AM ET), Signature is the better pick** — the most drawdown room per unit of target. Lifetime half-price crypto fees would then carry into its funded account.
- **Copy group (Elite 5K lead → 1K Select follower) — re-scaled from 1.0× to 0.6× on Oct 23, 2026** (Fortuna, with Christopher's go-ahead; both accounts flat, so no copied exits were canceled).
  - **Why:** at 1.0× the follower mirrors the lead's percentage moves under tighter limits. A −3% move would fail the Select (3% max drawdown) while the Elite still had 2% of room, and one −3% day would breach both DLLs.
  - **At 0.6×**, the Select's 3% floor lines up with the Elite's 5% floor (3 ÷ 5 = 0.6), and an Elite −3% DLL day costs the Select only 1.8%. **The free account can no longer die before the paid one.**
  - **Trade-off:** the Select gains 6% while the Elite gains 10%. When the Elite passes, the group stops and follower positions are closed, so the Select carries its gains forward. It can then trade solo, or follow the funded Elite (evaluations may follow a funded lead).
  - **Mechanics to remember:**
    - Changing a follower's multiplier cancels that follower's copied SL/TP while leaving its positions open, so only re-scale when the follower is flat.
    - Copied sizes round down to the size step, so tiny lead orders may not copy at all.

---

## Funding & Payouts

> Sources: [Becoming Funded](https://docs.myfundedperpetuals.com/guides/challenge-lifecycle/becoming-funded) · [Payouts](https://docs.myfundedperpetuals.com/guides/challenge-lifecycle/payouts)

**Funding path:** Challenge Passed → Identity Verification (Sumsub; usually minutes, up to 12h) → Customer Agreement (e-sign) → Funded Account.

| Payout term | Select / Prime / Signature | Elite |
|---|---|---|
| Split | 80/20 standard, 90/10 upgrade at checkout only | 80/20 or 90/10 |
| Minimum request | $100 gross ($80 / $90 to you) | 1% of size: $50 / $100 / $250 / $500 |
| Frequency | 1 request per account per NY calendar day | On demand (no daily limit) |
| Consistency / min days | None | None |
| MLL after first withdrawal | Locks permanently to starting balance | Never moves |

- **Lifetime payout cap: $100,000 per user**, across every account and model, counted after the split. New purchases and resets don't reset it.
- Payouts require a **flat account** (no positions, no resting orders) and lock trading while pending. Submitted requests can't be canceled; a rejected request restores the day's allowance.
- Cash payouts go via **Rise** (invite → accept → account). 100% store-credit payouts skip Rise.
- After an approved payout a new cycle starts; undistributed profit below the new baseline becomes a non-withdrawable buffer.

---

## Fees

> Source: [Commissions and Fees](https://docs.myfundedperpetuals.com/guides/commissions-and-fees)

| Asset class | Commission per fill (maker = taker) | Daily swap (charged hourly, longs and shorts) |
|---|---|---|
| Crypto | 0.03% | 0.03% |
| Forex | 0.0025% | 0.005% |
| Stocks, commodities, indices | 0.005% | 0.015% |
| *With Reduced Fees add-on* | *half of each* | *half of each* |
| *Elite on NAS100 / SP500 / Gold / WTI* | *0.001%* | *0.01% (NAS100/SP500)* |

- Commission is charged on **fill notional** (not margin) on entry and exit. Example: $10K crypto round trip = $6.
- Swap is charged at each hourly boundary on the size held at that moment. Venue funding rates do **not** affect your balance.
- Limit orders don't get a lower rate.

---

## Markets, Hours & Execution

> Sources: [Tradable Assets](https://docs.myfundedperpetuals.com/guides/tradable-assets) · [Trading Guide](https://docs.myfundedperpetuals.com/guides/trading-guide) · [Asset Exposure Limits](https://docs.myfundedperpetuals.com/guides/asset-exposure-limits) · [Exposure Caps page](https://myfundedperpetuals.com/exposure-caps)

**122 markets (list dated Oct 16, 2026):** 66 crypto (BTC, ETH, SOL, HYPE, XRP, DOGE…), 31 stocks (incl. synthetic pre-IPO ANTHROPIC, OPENAI, SPCX), 7 indices (NAS100, SP500, US30, JP225, QQQ, SOXL, EWY), 6 FX, 12 commodities (CL, BRENTOIL, XAU, XAG, NATGAS, COPPER…).

**Standard leverage / exposure caps seen Oct 22 (All Products view):** BTC 10× / $1M · ETH 8× / $1M · CL 8× / $500K · US30 12× / $1.25M. Caps vary by product and account size — select them on the Exposure Caps page. Elite boosts NAS100/SP500 to 40×, US30 25×, gold 20×, oil 10×.

**Futures-equivalent sizing** — a direct bridge from our futures workflow: NAS100, SP500, Gold, Silver and WTI tickets can size in mini/micro contract equivalents (NAS100 = NQ $20/pt or **MNQ $2/pt**; SP500 = ES $50/pt or **MES $5/pt**; Gold MGC $10/pt; WTI MCL $100/pt). Sizing convenience only — nothing settles as a CME contract.

**Trading hours:**
- Crypto: 24/7.
- NAS100 / SP500 / XAU on Hyperliquid/Binance: 24/7. SP500/NAS100 also offered on Ostium with **standard market hours** (choose via the Trading Hours picker; a market can only be held on one option at a time).
- US30 + Ostium indices: Sun 18:00 → Fri 17:00 ET, daily break 17:00–18:00 Mon–Thu. FX (Veranta): Sun 17:00 → Fri 17:00 ET.
- **Weekend auto-close:** positions on session markets close automatically **15 minutes before the Friday close** (e.g. 16:45 ET) on every account type; entries are canceled; no new positions until reopen. The 24/7 option isn't affected.

**Execution mechanics worth remembering:**
- **One net position per market, no hedge mode.** An opposite order reduces, closes, or flips. A close or flip cancels that position's TP/SL.
- **Market orders** fill at best bid/ask, capped by a published max-slippage tier against the mark, and never better than the mark. Crypto majors with > $500M OI: 0.8 bps cap up to $100K notional, 1.2 bps to $500K, 2 bps above.
- **TP/SL can attach to market, limit, Stop Market and Stop Limit entries.** On resting entries the TP/SL waits and only goes live on fill. If a fill would put the TP/SL on the wrong side, the order is **rejected rather than opening unprotected**.
- **Trigger source:** last traded price on Binance/Bybit/Hyperliquid (one small print touching the level is enough — no candle close needed); mid on Veranta/Ostium. Liquidation and loss monitoring use separate references.
- **Adding to a position with a new attached TP/SL replaces the old exits** for the full resulting size (after confirmation). Adding without one resizes the existing exits.
- **Isolated vs cross margin** is stored per position; adds and reversals must match the position's mode.
- **⚠ Chart drawing tools can drag resting TP/SL lines** (happened Oct 23: a BTC take profit got bumped while drawing). Turn on the TP/SL **chart-drag confirmation** in [Trading Settings](https://docs.myfundedperpetuals.com/settings/trading) so a stray drag asks before it moves an exit.
- **Exposure caps** count long + short notional across your matching accounts (same product and size), valued at fill price. Over-cap orders are rejected, not resized. Reductions free capacity at the next refresh (~10s). Competition accounts use a **separate** allowance from purchased accounts.

---

## Copy Trading (native)

> Source: [Copy Trading Guide](https://docs.myfundedperpetuals.com/guides/copy-trading-guide)

- **Same-owner only:** one lead and one or more followers, all your own active accounts. An account can be in one enabled group. A funded account can't follow an evaluation lead.
- **Competition accounts cannot lead or follow** — the Competition Rules prohibit copying into or out of them.
- Followers are **locked against manual trading** while the group is enabled. Joining as a follower cancels that account's open orders (including its TP/SL) and stops its TWAP/VWAP.
- Balance-adjusted multipliers are set per follower. Manageable via the website or the API (`/v1/copy-trading`).

---

## Prohibited Conduct (Terms of Use — direct quotes)

> Source: [Terms of Use](https://myfundedperpetuals.com/terms) — fetched Oct 22, 2026. These can lead to restriction, suspension, or termination **without refund**.

- Exploiting platform latency, stale or delayed data, data-source differences, pricing or settlement errors, outages, freezes, race conditions, execution defects, or any other technical fault.
- Knowingly continuing to trade on a manifestly erroneous price or balance without promptly reporting it.
- Creating, registering, operating, or benefiting from multiple accounts to circumvent Trading Rules, risk limits, evaluation requirements, or payout limits — "including trading on behalf of another person's account, or using multiple accounts to hedge, mirror, or coordinate trades in a manner that provides an unfair advantage."
- Circumventing any Trading Rule, risk control, slippage check, margin requirement, exposure cap, rate limit, order limit, identity control, payout condition, or account restriction.
- Coordinating trades with another person or across accounts to manufacture performance, evade risk limits, hedge away genuine exposure, manipulate a leaderboard or payout calculation, or gain an advantage not available from genuine independent trading.
- **Sharing account credentials or API keys, allowing another person to trade or manage your account, or trading an account owned by another person.**
- **Using automated trading bots, scripts, high-frequency request patterns, mass account control, or other software to overwhelm the Platform, gain a latency advantage, or evade Platform controls.**
- **Using external copy trading, account mirroring, signal execution, or account-management arrangements that cause a third party to control your account, except for same-owner native copy trading permitted under this Agreement.**
- Wash trading, collusion, opposite-position schemes, artificial volume, or abusive concentration or sizing undertaken to exploit the simulated or payout environment.
- Trading during a Platform-designated restricted news or event window in violation of the published policy.

### FAQ additions ([myfundedperpetuals.com/faq](https://myfundedperpetuals.com/faq), fetched Oct 23, 2026)

**"Is automated trading allowed?"** — *"Automated trading must use the documented MyFundedPerps API. You must not attempt to access or call the internal APIs used by the website … The use of automation does not exempt a trader from any trading rule. Any algorithm, bot, Expert Advisor, API strategy, script, **trading agent**, or other automated system that engages in prohibited activity remains prohibited."* MFP may add limits on automation that uses excessive infrastructure.

**"Can someone else trade my account?"** — No. *"The individual who completes account registration and identity verification must be the person making the trading decisions and controlling the account."* This bars friends, family, mentors, signal providers, account managers, third-party traders, passing services, and selling or renting the account. Credentials, sessions, API keys and auth tokens must stay under the account holder's exclusive control. VPNs, proxies and remote desktops that disguise who or where the trader is aren't allowed.

**Funded-stage news restriction** (all funded accounts, including the 1K/2.5K Select prizes; evaluations are unrestricted). For every high-impact red-folder event — FOMC, CPI, PPI, NFP, GDP, Retail Sales, employment, PCE, ECB/BOE/BOJ rate decisions — plus earnings on single-stock perps:

| Window around release | Allowed |
|---|---|
| > 10 min before | Normal trading. Positions already open may be held through the release. |
| 10 → 2 min before | **No new exposure** (no new positions, adds, or reversals) in the affected market |
| 2 min before → 2 min after | **No manual trades of any kind** |

**Named prohibited strategies (FAQ):**
- Cross hedging across any accounts, including correlated-instrument hedges.
- HFT.
- Latency arbitrage.
- Exploiting the price feed or execution.
- Quote stuffing.
- Spoofing and layering.
- Wash trading.
- Group hedging.
- **Account cycling / sacrificial accounts.**
- **Evaluation gambling** — repeatedly buying or resetting evaluations to place max-risk, all-or-nothing trades. *"We may review activity across all accounts associated with a trader."*
- Risk-free exploitation.
- Exploiting bugs or loopholes (report them instead).

**Lifetime cap detail:** once combined payouts reach $100K you've "graduated" and can't buy new accounts. Existing funded accounts keep trading and paying out.

**How this reads for us (Fortuna's interpretation — not legal advice, verify with MFP support before relying on it):**
- **An AI agent trading the owner's own account through MFP's official MCP is the documented, intended use.**
  - The MCP docs name Claude Code explicitly.
  - The FAQ's automated-trading answer names "trading agent" as a permitted form of automation, provided it uses the documented API and stays clear of prohibited strategies.
  - The bot clause targets bots that overwhelm the platform, chase a latency edge, or evade controls, not automation itself.
- **The tension worth one support question:** the "someone else trade my account" answer says the verified individual must be *the person making the trading decisions*. It's written about other *people*, and Christopher configured, authorized and supervises this agent. Before running an agent autonomously on a **funded** account with payouts, get a one-line written confirmation from support. The competition account carries the least at stake.
- **Do not share API keys** with anyone or any third-party service.
- **TradeCopia, a vendor copier, or a signal service mirroring futures trades into MFP accounts sits close to the "external copy trading … third party" clause.** An in-house, same-owner copier is a grey area. Ask MFP support in writing before building or connecting one.
- **News restriction:** only Sim Funded **Elite** has a high-impact news restriction; evaluations (and the competition) don't.
