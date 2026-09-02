# Top One Futures — Rules Reference
> Compiled from official Top One Futures help center rule articles (help.toponefutures.com).
> Christopher's active accounts (as of Aug 2026): 2× **Elite ACCESS** (BOGO deal, comparable price point to Apex Legacy).
> Elite DAILY V2 documented for reference/comparison — believed structurally similar to TakeProfitTrader; not currently held.
> Last updated: August 2026

---

## Account Types Overview

Top One Futures offers several funding pathways. The two most relevant to Christopher's accounts are **Elite ACCESS** (active) and **Elite DAILY V2** (reference, comparable to TPT). A third, plain **Elite** account also exists (1-Step Elite Evaluation, 25% consistency, no Daily Loss Limit at all) but is not held and not detailed here.

> Source: [Differences between Elite, Elite Access and Elite Daily Accounts](https://help.toponefutures.com/en/articles/14617600-differences-between-elite-elite-access-and-elite-daily-accounts) · [Account Comparison: Elite vs. Instant vs. S2F Sim Pro vs. Ignite](https://help.toponefutures.com/en/articles/13449146-top-one-futures-account-comparison-elite-vs-instant-vs-s2f-sim-pro-vs-ignite-accounts)

### Evaluation Phase — Quick Comparison

| Feature | Elite | Elite ACCESS | Elite DAILY (V2) |
|---|---|---|---|
| Profit Target | 6% | 6% | 6% |
| Drawdown Type | End of Day (EOD) | End of Day (EOD) | End of Day (EOD) |
| Daily Loss Limit | 2.5% | **None** | 2% – 1.23% (by size) |
| Consistency Rule | None | None | 40% Rule |
| Reset Fee | $29–$119 (by size) | $35 flat | $75–$242 (by size) |
| Time to Pass | No set limit | **30 Days** | No set limit |
| Activation Fee | $149 | $139–$359 (by size) | None |

### Funded Phase — Quick Comparison

| Feature | Elite Funded | Elite ACCESS Funded | Elite DAILY Funded |
|---|---|---|---|
| Profit Target | 6%/5%/4% per payout cycle | Buffer + $500 (first payout) | Buffer + $500 (first payout) |
| Consistency Rule | 25% | 40% | None |
| Daily Loss Limit | 2.5% | 2% – ~1.17% (by size) | 2% – 1.23% (by size) |
| News Rule | No restriction | 2-min rule | 2-min rule |
| Contract Scaling | None | Scaling plan applies | Scaling plan applies |
| Payout Buffer | N/A | Required | Required |
| 50% Daily Progression Rule | N/A | Required | Required |
| Min Trading Days | None | 5 profitable days | None |
| Min Payout | 2% of account size | $500 | $500 |
| Max Payout/Cycle | $1,500–$3,500 (by size) | $1,000–$2,500 (by size) | $750–$2,250 (by size) |
| Profit Split | 90/10 | 90/10 | 90/10 |
| Reset Fee | $299–$499 (by size) | $299–$1,349 (by size) | $299–$1,250 (by size) |

**Christopher's read (unverified, his own comparison):** Elite DAILY's goals/structure resemble TPT (daily payouts, EOD drawdown, no set time limit). Elite ACCESS resembles Apex Legacy (fast evaluation, low entry cost, on-demand payouts, 30-day window). This mapping is a personal heuristic, not an official TOF claim — verify rule-by-rule before assuming behavior transfers directly from one firm to the other.

---

## Elite ACCESS — Full Ruleset (Christopher's Active Accounts)

> Source: [Elite ACCESS Accounts – Overview](https://help.toponefutures.com/en/articles/14595016-elite-access-accounts-overview)

### Account Overview

| Feature | Details |
|---|---|
| One-Time Fee | $39 |
| Evaluation Period Time Limit | 30 Days |
| Profit Target | 6% |
| Max Accounts | 10 |
| Minimum Trading Days | 1 |
| Reset Fee (Evaluation) | $35 flat, all sizes |
| Activation Fee | $139–$359, depending on size |
| Profit Split | 90% / 10% |

### Account Sizes & Key Parameters

| Account Size | $25K | $50K | $100K | $150K |
|---|---|---|---|---|
| Profit Target | $1,500 | $3,000 | $6,000 | $9,000 |
| Max Contracts (funded, full scale) | 1 Mini / 10 Micros | 3 Minis / 30 Micros | 5 Minis / 50 Micros | 7 Minis / 70 Micros |
| Funded Daily Loss Limit | $500 | $1,000 | $1,250 | $1,750 |
| Eval Max Drawdown | $1,000 | $2,000 | $3,000 | $4,000 |
| Funded Max Drawdown | $1,000 | $2,000 | $3,000 | $3,500 |
| Funded Consistency % | 40% | 40% | 40% | 40% |

### Rule 1 — Evaluation Profit Target
> Source: [Elite ACCESS – Evaluation Profit Target](https://help.toponefutures.com/en/articles/14595073-elite-access-evaluation-profit-target)

- Fixed **6% of starting balance** — see table above for dollar amounts
- Must be reached **within 30 days**
- Only **1 profitable trading day required** — no minimum day count, no consistency rule during evaluation
- Profits must be **realized (closed trades only)** — open trades don't count
- Once hit, account is marked passed → activation fee required → funded account issued

### Rule 2 — Daily Loss Limit (DLL) — Funded Only
> Source: [Elite ACCESS – Daily Loss Limit (DLL)](https://help.toponefutures.com/en/articles/14595138-elite-access-daily-loss-limit-dll)

- **No DLL during evaluation** — only risk limit in eval is the EOD Trailing Drawdown (Rule 3)
- **DLL applies once funded only**

| Account Size | DLL ($) | DLL (%) |
|---|---|---|
| $25,000 | $500 | 2.00% |
| $50,000 | $1,000 | 2.00% |
| $100,000 | $1,250 | 1.25% |
| $150,000 | $1,750 | ~1.17% |

- Calculated on **starting balance for the day**; resets daily
- Counts: closed losses, open (floating) losses, commissions/fees
- **Violation = soft breach** — account paused for the rest of the day, resumes next rollover; open positions may be closed

### Rule 3 — Maximum Loss Limit (MLL) / EOD Trailing Drawdown ⚠️ ACCOUNT KILLER
> Source: [Elite ACCESS – Maximum Loss Limit (MLL) (EOD)](https://help.toponefutures.com/en/articles/14595145-elite-access-maximum-loss-limit-mll-eod)

Applies during **both evaluation and funded phases**, calculated **End-of-Day**.

**Evaluation MLL:**

| Account Size | Max Drawdown ($) | Max Drawdown (%) |
|---|---|---|
| $25,000 | $1,000 | 4.00% |
| $50,000 | $2,000 | 4.00% |
| $100,000 | $3,000 | 3.00% |
| $150,000 | $4,000 | ~2.67% |

**Funded MLL:**

| Account Size | Max Drawdown ($) | Max Drawdown (%) |
|---|---|---|
| $25,000 | $1,000 | 4.00% |
| $50,000 | $2,000 | 4.00% |
| $100,000 | $3,000 | 3.00% |
| $150,000 | $3,500 | ~2.33% |

- Drawdown is calculated on **EOD balance**, trails **upward only** with new highs — does not move down on losing days
- Example: $50K start, $2,000 max DD → initial floor $48,000. If EOD balance closes at $52,000, new trailing floor locks at **$50,000**
- **Drawdown Lock Level** — once account reaches breakeven + $100, trailing stops and floor is permanently fixed there:

| Account Size | Lock Level |
|---|---|
| $25K | $25,100 |
| $50K | $50,100 |
| $100K | $100,100 |
| $150K | $150,100 |

- Intraday drops below the level **do not count** unless the *day closes* below it (EOD basis — unlike TPT, which liquidates in real-time intraday even though the level itself updates EOD)
- **Violation = hard breach** — account terminated, ineligible for funding/payouts

### Rule 4 — Funded Consistency Rule (40%)
> Source: [Elite ACCESS – Funded Consistency Rule (40%)](https://help.toponefutures.com/en/articles/14595151-elite-access-funded-consistency-rule-40)

- **Funded accounts only** — no consistency rule during evaluation
- Formula: `(Largest Winning Day ÷ Total Profit in current payout cycle) × 100` must be **≤ 40%**
- Checked **at the moment of each payout request**, based on total profit at that moment
- Example (valid): $5,000 total profit, $2,000 largest day → 40% → OK
- Example (violation): $4,000 total profit, $2,200 largest day → 55% → not valid, keep trading to dilute
- After each payout, total profits reset and the rule restarts based on new profits

### Rule 5 — Minimum Profitable Trading Days (Funded Only, for Payout)
> Source: [Elite ACCESS – Minimum Profitable Trading Days](https://help.toponefutures.com/en/articles/14595155-elite-access-minimum-profitable-trading-days-funded-only) · [Elite ACCESS – Payout Requirements](https://help.toponefutures.com/en/articles/14595161-elite-access-payout-requirements)

- Minimum **5 profitable trading days** required before requesting a payout — need not be consecutive
- A day only counts if it clears the minimum daily profit threshold:

| Account Size | Min Daily Profit |
|---|---|
| $25,000 | $200 |
| $50,000 | $250 |
| $100,000 | $300 |
| $150,000 | $350 |

- No minimum-day requirement during evaluation

### Rule 6 — Payout Buffer + Profit Requirement
> Source: [Elite ACCESS – Buffer + Profit target](https://help.toponefutures.com/en/articles/14595108-elite-access-buffer-profit-target)

Funded accounts have **no profit target to stay active**, but do need to clear a threshold to request a payout.

| Account Size | Payout Buffer | Required Total Profit to Request Payout |
|---|---|---|
| $25,000 | $1,500 | $2,000 |
| $50,000 | $2,000 | $2,500 |
| $100,000 | $3,000 | $3,500 |
| $150,000 | $4,500 | $5,000 |

- The buffer itself must **remain in the account at all times**
- This threshold is required for **every** payout request, not just the first

### Rule 7 — Daily Progression Rule (50%)
> Source: [Elite ACCESS – Daily Progression Rule (50%)](https://help.toponefutures.com/en/articles/14595166-elite-access-daily-progression-rule-50)

- **Does not apply to the first payout**
- From the **second payout onward**: at least **50% of the requested amount** must be from profits generated **since the last payout**
- Example: prior payout $2,000, next request $2,000 → at least $1,000 must be new profit since last payout; remaining $1,000 can come from existing balance above buffer

### Rule 8 — Payout Requirements Summary
> Source: [Elite ACCESS – Payout Requirements](https://help.toponefutures.com/en/articles/14595161-elite-access-payout-requirements)

| Item | Value |
|---|---|
| Minimum payout request | $500 |
| Profit split | 90% trader / 10% firm |

**Max Payout Per Request:**

| Account Size | Max Payout |
|---|---|
| $25,000 | $1,000 |
| $50,000 | $1,500 |
| $100,000 | $2,000 |
| $150,000 | $2,500 |

All of Rules 4–7 above must be satisfied simultaneously for a payout to be approved.

### Rule 9 — News Trading Rule (Funded Only)
> Source: [Elite ACCESS – News Trading Rule](https://help.toponefutures.com/en/articles/14595174-elite-access-news-trading-rule)

- **No restriction during evaluation.** Restriction activates once funded.
- Funded restricted window: **2 min before + 2 min after** a high-impact news event (4-minute total window)
- Prohibited during the window: opening a trade, closing a trade, opening/modifying pending orders, modifying SL or TP
- **Holding through news is allowed** only if the trade was opened before the pre-news window — closing or modifying SL/TP during the window is still a violation even on a pre-existing position
- High-impact events include: FOMC, interest rate decisions, NFP, CPI, major central bank statements (anything marked "high impact/red" on the economic calendar TOF uses)
- Violation consequences: profits from the violating trade may be removed, payout request may be denied, account flagged for review; repeated/abusive violations → further action (not an automatic hard breach unless abuse detected)
- Suggested calendars: [Rebate King FX](https://www.rebatekingfx.com/tools/economic-calendar), [FXStreet](https://www.fxstreet.com/economic-calendar)

### Rule 10 — Contract Scaling Plan (Funded Only)
> Source: [Elite ACCESS – Contract Scaling Plan](https://help.toponefutures.com/en/articles/14595053-elite-access-contract-scaling-plan)

- **No scaling restriction during evaluation.** Applies once funded.
- Contract limit is based on **EOD closing balance / simulated profit**, updates once per day — intraday profit does **not** unlock a higher tier same-day; increase applies the *following* trading day

**$25K:** Full allocation (1 Mini / 10 Micros) from $0.

**$50K:**
| Simulated Profit | Max Contracts |
|---|---|
| $0–$1,499 | 1 Mini / 10 Micros |
| $1,500–$1,999 | 2 Minis / 20 Micros |
| $2,000+ | 3 Minis / 30 Micros (full) |

**$100K:**
| Simulated Profit | Max Contracts |
|---|---|
| $0–$1,499 | 2 Minis / 20 Micros |
| $1,500–$1,999 | 3 Minis / 30 Micros |
| $2,000–$2,999 | 4 Minis / 40 Micros |
| $3,000+ | 5 Minis / 50 Micros (full) |

**$150K:**
| Simulated Profit | Max Contracts |
|---|---|
| $0–$1,499 | 3 Minis / 30 Micros |
| $1,500–$2,499 | 4 Minis / 40 Micros |
| $2,500–$3,499 | 5 Minis / 50 Micros |
| $3,500–$4,499 | 6 Minis / 60 Micros |
| $4,500+ | 7 Minis / 70 Micros (full) |

- Scaling is **per account** — limits don't combine across multiple accounts
- Does not override DLL or Trailing Drawdown rules
- Exceeding allowed contract size = rule violation → trades may be rejected/reduced, account flagged, profits from violating trades may be removed, payouts denied

### Rule 11 — Activation Fee
> Source: [Elite ACCESS Accounts – Overview](https://help.toponefutures.com/en/articles/14595016-elite-access-accounts-overview) (dedicated "Activation Fees Explained" article now redirects to the Payout Requirements article — no separate fee breakdown found there beyond the range below)

- One-time activation fee required to transition from passed evaluation → funded: **$139 to $359, depending on account size**

### Rule 12 — Reset Fees
> Source: [Elite ACCESS - Reset Fees](https://help.toponefutures.com/en/articles/14623577-elite-access-reset-fees)

**Evaluation phase — flat $35, all sizes.**

**Funded phase:**

| Account Size | Funded Reset Fee |
|---|---|
| $25,000 | $299 |
| $50,000 | $499 |
| $100,000 | $849 |
| $150,000 | $1,349 |

- Reset restores original starting balance, clears P&L history
- **Eligibility window: within 14 days of the breach**
- Discounts/coupons do not apply to reset fees
- Reset recreates the account with the **same profit target and drawdown parameters** as the original

### Path to Live
> Source: [Elite ACCESS Accounts – Overview](https://help.toponefutures.com/en/articles/14595016-elite-access-accounts-overview) · [Path to Trading Live](https://help.toponefutures.com/en/articles/11003130-path-to-trading-live)

- **3 successful payouts required** before eligibility for live transition
- A risk manager reviews trading performance at that point; if approved, account transitions to live capital
- If holding multiple accounts, **only the highest-profit account transitions** — the rest are closed at that point

### Purchase Guidelines (Elite ACCESS)

- Up to **10 evaluation accounts** per rolling 30-day period from initial purchase date
- Each evaluation account may be reset **max 12 times** within a 30-day window
- **No more than 5 active funded accounts** at any time

---

## Elite DAILY V2 — Full Ruleset (Reference / Comparison to TPT)

> Christopher does not currently hold this account type. Documented for reference since he believes its structure (EOD drawdown, daily payouts, no fixed evaluation window) most closely resembles TakeProfitTrader.
> Source: [Elite DAILY V2 - Overview](https://help.toponefutures.com/en/articles/15056075-elite-daily-v2-overview) — *"launched on 5/11/26"*

### Evaluation Phase

| Rule | $25K | $50K | $100K | $150K |
|---|---|---|---|---|
| Profit Target | $1,500 (6%) | $3,000 (6%) | $6,000 (6%) | $9,000 (6%) |
| Daily Loss Limit | $500 (2%) | $1,000 (2%) | $1,250 (1.25%) | $1,850 (1.23%) |
| Max Accounts | 5 | 5 | 5 | 5 |
| Max Contracts | 1 | 3 | 5 | 7 |
| Drawdown Type | EOD | EOD | EOD | EOD |
| Trailing Max Drawdown | $1,000 (4%) | $2,000 (4%) | $3,000 (3%) | $4,500 (3%) |
| Consistency Rule | 40% | 40% | 40% | 40% |
| Activation Fee | None | None | None | None |
| Reset Fee (Eval) | $75 | $93 | $174 | $242 |

### Funded Phase

| Rule | $25K | $50K | $100K | $150K |
|---|---|---|---|---|
| Daily Loss Limit | $500 (2%) | $1,000 (2%) | $1,250 (1.25%) | $1,850 (1.23%) |
| Trailing Drawdown | $1,000 (4%) | $2,000 (4%) | $2,500 (2.5%) | $3,500 (~2.33%) |
| Drawdown Type | EOD | EOD | EOD | EOD |
| Drawdown Locks At | $25,100 | $50,100 | $100,100 | $150,100 |
| Profit Split | 90/10 | 90/10 | 90/10 | 90/10 |
| Payout Frequency | Daily | Daily | Daily | Daily |
| Contract Scaling Tiers | 1 | 1,2,3 | 2,3,4,5 | 3,4,5,6,7 |
| Min Trading Days (Funded) | 1 | 1 | 1 | 1 |
| Minimum Payout | $500 | $500 | $500 | $500 |
| Max Payout/Request | $750 | $1,000 | $1,500 | $2,250 |
| Payout Buffer | $1,500 | $2,500 | $3,500 | $4,500 |
| Payout Buffer % | 6% | 5% | 3.5% | 3% |
| Reset Fee (Funded) | $299 | $499 | $849 | $1,250 |

### Key Rule Highlights

- **One-phase evaluation** — only one phase required to pass (no second confirmation phase)
- **EOD Trailing Drawdown** — trails at end of day off highest closed balance, not intraday (protects from intraday swings, same EOD philosophy as Elite ACCESS)
- **Daily Loss Limit** applies in **both** evaluation and funded phases (unlike Elite ACCESS, which has none during eval) — see per-size table above
- **Daily payouts** — funded traders can request a payout every 24 hours starting Day 1, no consistency target on funded accounts
- **40% Consistency Rule — evaluation only.** No single day may exceed 40% of total evaluation profit. Not applied to funded accounts (a key structural difference from Elite ACCESS, where the 40% rule applies to the *funded* phase instead)
- **Daily Progression Rule (50%)** — for every payout after the first, ≥50% of the requested amount must be new profit since the last payout
- **News Rule (Funded only)** — same 2-min-before/2-min-after window as Elite ACCESS
- **No activation fee** (unlike Elite ACCESS's $139–$359 fee)

### Daily Loss Limit — Evaluation Phase Detail
> Source: [Elite Daily V2 – DLL (Evaluation Phase)](https://help.toponefutures.com/en/articles/15056388-elite-daily-v2-daily-loss-limit-dll-evaluation-phase)

- Calculated from **previous trading day's closing balance**, not current-day starting balance
- Example ($25K): DLL $500, prior close $26,000 → breach level for the day = $25,500
- Counts realized + unrealized/floating losses + commissions
- **Explicit disclaimer: the DLL is a risk rule, not a stop loss** — it may trigger later/earlier/at a different price than expected due to slippage/gaps; always use hard stops on individual trades
- Evaluation violation: account paused, auto-unpauses next trading day
- Funded violation: soft breach — paused for rest of day, resumes next day (provided Trailing Drawdown not also breached)

### Daily Payout Rules Detail
> Source: [Elite Daily V2 – Daily Payout Rules](https://help.toponefutures.com/en/articles/15056446-elite-daily-v2-daily-payout-rules)

- Minimum payout $500; requests below are not processed
- Payout buffer must remain in account at all times; only profit above buffer is withdrawable
- **If the account is breached, profit still inside the buffer is not withdrawable**
- **Path to Live: 5 successful payouts** is the standard guideline (higher bar than Elite ACCESS's 3)
- Payout review checks: Max Loss Limit compliance, 50% Progression Rule compliance, News Rule compliance — all must pass simultaneously

### Reset Fees Detail
> Source: [Elite Daily V2 - Reset Fees](https://help.toponefutures.com/en/articles/15069348-elite-daily-v2-reset-fees) — *for accounts purchased on/after 5/11/26*

- Same reset mechanics as Elite ACCESS: fresh start, cleared P&L, **14-day eligibility window from breach**, no discounts/coupons, same profit target/drawdown parameters recreated
- See fee tables above (Evaluation / Funded)

---

## General Rules (Apply Across TopOneFutures Account Types)

### Trading Hours & Overnight Holding
> Source: [Trading Hours at Top One Futures](https://help.toponefutures.com/en/articles/11165893-trading-hours-at-top-one-futures) · [Can I Hold Trades Overnight?](https://help.toponefutures.com/en/articles/10907901-can-i-hold-trades-overnight)

- **Trading window:** 6:00 PM ET → 4:10 PM ET the next day, Monday–Friday
- **Daily break:** 5:00 PM – 6:00 PM ET, trading paused
- **No weekend trading.** Final session of the week ends 4:00 PM ET Friday; markets reopen Sunday 6:00 PM ET
- **All open trades are force-closed at 4:10 PM ET daily** — overnight holding is **not allowed**, regardless of account type
- Applies uniformly across **all account types and instruments, including crypto futures**

> ⚠️ Note the close time differs slightly by source article: "Trading Hours" and "Overnight" articles both say **4:10 PM ET**. Compare to TPT's 5:00 PM ET and Apex's ~4:59 PM ET — confirm the exact cutoff in the live TOF dashboard before relying on this for a hard-stop rule.

### News Trading (General Policy)
> Source: [Can I Trade News?](https://help.toponefutures.com/en/articles/10907951-can-i-trade-news)

- News trading is **allowed generally** across TOF accounts
- **Exception:** Elite ACCESS Funded and Elite DAILY Funded accounts have the 2-min-before/2-min-after restriction (see account-specific sections above)
- All other account types have no news trading restriction

### Inactivity Rule
> Source: [Inactivity Rule Explained](https://help.toponefutures.com/en/articles/10907989-inactivity-rule-explained)

- Must place **at least 1 trade every 14 calendar days** (includes weekends/holidays)
- Violation = **hard breach**, account closed permanently, all progress/profit lost
- Example: last trade Apr 1 → next trade due by Apr 15

### Minimum Trade Duration (10-Second Rule)
> Source: [Minimum Trade Time Rule Explained](https://help.toponefutures.com/en/articles/10908016-minimum-trade-time-rule-explained) · [Prohibited Trading Practices §6](https://help.toponefutures.com/en/articles/11021584-prohibited-trading-practices)

- Every trade must stay open **≥ 10 seconds** (10.00s = violation, 10.01s = OK)
- Applies to **all account types and sizes**
- Occasional minor violations tolerated; but if ~50%+ of total/withdrawable profit OR ~50%+ of individual trades violate this, **all profits from those trades are removed**
- Adding to a position (scaling in) within 10 seconds is fine — only *closing* early is the violation
- ✅ Compliant example: open, add contracts at 5s, close everything at 15s
- ❌ Violation example: open 2 contracts, close 1 at 5s, hold the other

### Trading Instruments
> Source: [Trading Instruments Available at Top One Futures](https://help.toponefutures.com/en/articles/11021492-trading-instruments-available-at-top-one-futures)

| Category | Instruments |
|---|---|
| Stock Indices | ES, NQ, MES, MNQ, RTY, M2K, YM, MYM, NKD |
| Agriculture | ZM, ZS, ZW |
| Energy | CL, MCL, QM, NG, QG |
| Metals | GC, MGC, SI, SIL, PL, HG |
| Currencies | 6A, 6B, 6C, 6E, M6E, 6J, 6S, M6A |
| Crypto | MBT (Micro Bitcoin) |

### Commissions & Fees (Tradovate Round-Turn, per contract)
> Source: [Commissions and Fees on Tradovate Accounts](https://help.toponefutures.com/en/articles/12829687-top-one-futures-commissions-and-fees-on-tradovate-accounts)

| Instrument | Round-Turn |
|---|---|
| ES / NQ / RTY / YM | $5.76 |
| MES / MNQ / M2K / MYM | $1.90 |
| ZM / ZS / ZW | $7.20 |
| CL | $6.00 · MCL | $2.20 · QM | $5.40 |
| NG | $6.20 · QG | $4.00 |
| GC / SI / HG | $6.20 · MGC | $2.40 · SIL | $3.20 · MHG | $2.40 |
| 6A/6B/6C/6E/6J/6S | $6.20 · M6E/M6A | $1.68 |
| MBT | $3.20 |

### Contract Rollovers
> Source: [Contract Rollovers – Futures Contracts Explained](https://help.toponefutures.com/en/articles/13857152-contract-rollovers-futures-contracts-explained)

- Trading the wrong (low-volume/expiring) contract is the **trader's sole responsibility** — TOF is not liable for losses from thin-contract slippage
- Always confirm the **front month** (highest volume/open interest) before trading — check via CME volume pages or a rollover calendar (e.g. linnsoft.com)
- Standard month codes: F=Jan, G=Feb, H=Mar, J=Apr, K=May, M=Jun, N=Jul, Q=Aug, U=Sep, V=Oct, X=Nov, Z=Dec
- Equity index futures (ES/NQ/RTY/YM) roll **quarterly** (H/M/U/Z = Mar/Jun/Sep/Dec); commodities/some currencies roll **monthly**

### Prohibited Trading Practices
> Source: [Prohibited Trading Practices](https://help.toponefutures.com/en/articles/11021584-prohibited-trading-practices)

Key items most relevant to Christopher's live workflow (full list of 15 in the source article):

- **No EAs/bots/automated trading** — all entries must be manual or semi-manual (see also dedicated EA article below)
- **No copy trading / group trading / signal-following** — each trader's strategy must originate independently on their own TOF account. Copy trading *between your own accounts across firms* is allowed as long as the trade decision originates on the TOF account; mirroring someone else's trades (signals, Discord/Telegram calls) is not. Full policy: [Copy Trading Policy](https://help.toponefutures.com/en/articles/11680891-copy-trading-policy)
- **No hedging between accounts** — including across firms
- **Max 3 funded Instant/Elite Sim accounts per household** (S2F Pro allows 5–9 depending on promo). Exceeding this without contacting support first results in **automatic breach of the oldest account**, no refund, if a 4th account is activated
- **No "sim farming"** — deliberately breaching funded accounts to avoid live transition
- **No rolling/churning/gambling patterns** — repeatedly buying batches of accounts and letting most breach within 24–48h is explicitly flagged as disqualifiable behavior
- 10-second minimum trade rule (detailed above) is also listed here as a prohibited-practices item

### EA's / Bots Policy
> Source: [Can I Use EA's/Bots?](https://help.toponefutures.com/en/articles/10907920-can-i-use-ea-s-bots)

- **Not allowed** on any TOF account — manual, skill-based trading required
- Violation consequences: account suspension/termination, loss of funding privileges, status impact

---

## Claude's Enforcement Checklist (TopOneFutures — Elite ACCESS)

When reviewing any Elite ACCESS trade, flag if:
- [ ] Position size exceeded current scaling tier (check simulated profit level against the size-specific scaling table)
- [ ] Account balance approached the funded DLL threshold intraday (soft breach risk)
- [ ] EOD balance closed below the trailing MLL floor (hard breach — account termination risk)
- [ ] Trade held past **4:10 PM ET** (TOF firm deadline — note this differs from TPT's 5:00 PM ET and Apex's ~4:59 PM ET)
- [ ] Trade opened/closed/SL-TP-modified within the 2-min news window on a **funded** account (no restriction during eval)
- [ ] Trade held < 10 seconds
- [ ] No trade placed in the last 14 calendar days (inactivity risk)
- [ ] Single-day profit ≥ 40% of total funded-cycle profit (consistency risk, funded only)
- [ ] Fewer than 5 profitable days (each ≥ min daily profit) completed before a payout claim
- [ ] EA/bot or copy-trading/signal usage detected
- [ ] Trade on non-approved instrument or outside 6PM–4:10PM ET window
- [ ] Emotional state suggests revenge trading or forced entry

---

## Notes / Open Items

**Active accounts (as of Aug 2026, unconfirmed exact IDs pending backlog data):** 2× TopOneFutures Elite ACCESS accounts, purchased via BOGO promotion at a price point comparable to Apex Legacy.

**Open questions — verify with TOF support or live dashboard before relying on them:**
- Exact 4:10 PM ET vs. other-firm close time discrepancy — confirm which cutoff actually applies to Elite ACCESS specifically (general Trading Hours article vs. account-specific pages didn't show a distinct override)
- Whether subscription/evaluation progress carries over on renewal the way Apex's does (not covered in the scraped articles — TOF's model is a flat 30-day eval window + $35 reset rather than a recurring subscription, so this may not even apply the same way)
- The dedicated "Elite ACCESS – Activation Fees Explained" URL (article 14595161) now redirects to the Payout Requirements article content — the standalone activation-fee breakdown may have been merged/removed on TOF's side; the $139–$359 range is sourced from the Account Overview table instead

> 📝 Add account statement/certificate screenshots as accounts progress (matching the gallery pattern used for APEX-06 / TPT)
> 📝 Confirm exact Elite ACCESS account IDs and reset history once Christopher provides the backlog data
