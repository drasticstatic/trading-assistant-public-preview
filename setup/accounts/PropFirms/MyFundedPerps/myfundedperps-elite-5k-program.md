# MyFundedPerps Elite 5K + Select 1K — the small-size program

> **As of Oct 25, 2026.** Christopher's two purchased/prize MyFundedPerps evaluation accounts, which he trades himself.
> From **Oct 25, 2026 (14:30 ET)** Fortuna also trades the Elite at very small size, alongside him, under the rules below.
> Live view: [Fortuna Terminal](https://drasticstatic.github.io/trading-assistant-public-preview/data/progression/terminal/) ·
> Competition account: [`myfundedperps-october-competition.md`](myfundedperps-october-competition.md) · Firm rules: [`myfundedperps-rules.md`](myfundedperps-rules.md)

---

## The accounts

> **Grade rule since Oct 26 — Auto Levels confluence.** Every zone is scored by the Auto Levels (Christopher's ZTH level engine, now running in the scanner) within half an ATR of it: KEY counts 2, 5/5 counts 1, 3/5 counts ½. **B** needs a 5/5 or KEY near the zone, or the stop placed beyond the next KEY. **A** needs a KEY inside the zone plus the SMT pair confirming plus higher-timeframe bias. **Thesis-invalidation exit:** when a closed candle on the trigger timeframe closes back through the level a trade was built on, Fortuna exits at the next read instead of waiting for the stop (the Oct 25 gold lesson).

| Account | Model | Start | Daily loss | Max drawdown | Target | Role |
|---|---|---|---|---|---|---|
| **Elite 5K Challenge** | Elite (1-step), 3% DLL | $5,000 | 3% = $150 (from the day's start) | 5% **static** → floor $4,750 | 10% → $5,500 | Christopher trades it; Fortuna joins at very small size. **Lead** of the copy group. |
| **Select 1K Challenge** | Select (prize account) | $1,000 | 3% = $30 | 3% static → floor $970 | 9% → $1,090 | **Follower** of the Elite at **0.6×** (native MFP copy group). Never traded directly. |

The 0.6× multiplier aligns the Select's 3% floor with the Elite's 5%: a full Elite drawdown costs the Select 3%, not 5%.

## Christopher's instruction (Oct 25, 2026)

> "go ahead and trade those with me as well but at very small size for now to ensure we absolutely do not blow the account and if needed slowly grinding collecting base hits all the way up to funded for now while you experiment more on the competition account that has a reset still."

## Fortuna's operating rules for the Elite (and so the Select)

| Rule | Value | Why |
|---|---|---|
| Risk per trade | **0.25% of $5,000 = $12.50** (B grade) · 0.5% ($25) for A+ · nothing below B | "Very small size." Twelve consecutive full losses would still leave $100 of the $250 drawdown room. |
| Entries per day | **At most 2** | Base hits, not activity. |
| Self-imposed daily stop | **−1% ($50)**, a third of the firm's $150 | Never get near the firm's limit. |
| Weekly pause | **−2% ($100)** → stop and check in with Christopher | Half the static drawdown is a review point, not a surprise. |
| Base hits | Half off at **1R**, stop to breakeven, remainder to **2R** | The grind that compounds without needing a home run. |
| Protection | Attached server-side SL + TP on every entry; the stop verified in `list-orders status=working` after the fill | Same as the competition rules. |
| Margin | Isolated; leverage so liquidation sits ≥ 3× the stop distance away | A take-profit never protects against liquidation. |
| Lead size floor | Lead notional **≥ $84** | At 0.6× the Select copy must clear MFP's $10 minimum notional, or it's rejected and the two accounts diverge. |
| Markets | **BTC and ETH only** while Christopher's SOL long is open in this account | MFP has no hedge mode: an opposite-side SOL order would reduce *his* position; a same-side add would change his average and his take-profit sizing. His trades are his. |
| His positions | Fortuna never modifies or closes Christopher's own positions here | Co-pilot: alert, record his written exit plan, never execute for him unless he asks in writing. |
| Independence from the competition | **One account per market per day.** Never the same market and direction on the competition and the Elite; crypto is assigned to this program, commodities and indices to the competition. | MFP disqualifies competition accounts for copied or coordinated trades. Separate markets make the independence visible. |
| Cross-hedge | Full sweep before every entry (Tradovate, BTCC as reported, all MFP accounts) | MFP judges hedging on economic substance across all of a trader's accounts. |
| High-impact news | Firm rule applies only once funded (10→2 min before: no new exposure; ±2 min: no manual trades). Fortuna applies it now plus a 30-minute buffer either side of every red-folder release: no Elite entries in that window | Rehearse the funded account; the Select follows every fill |

Everything else (grading, the Perps Preflight Checklist, logging) follows the competition's rules and the terminal's checklist.

## Trade ledger (Fortuna's Elite trades; the Select mirrors each at 0.6×)

| # | Date (ET) | Market | Side | Grade | Risk | Entry | Exit | R | Elite P&L | Select P&L | Review |
|---|---|---|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — | — | — | *none yet* |

## Christopher's open positions here (read-only for Fortuna)

| Account | Market | Side | Size | Entry | Stop | Target | Note |
|---|---|---|---|---|---|---|---|
| Elite 5K | SOL | Long | 2.35 | $103.65 | none | $104.38 (resting TP) | Cross margin 3×. Opened Oct 23. |
| Select 1K | SOL | Long | 0.22 | $103.60 | none | — | Copy of the Elite position. |
