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
| 1 | Oct 28, 22:48 | ETH (`binance\|ETHUSDT`) | Long (Fortuna) | B | 0.25% ($12.50 planned; $13.84 at the fill after 3 pts of slippage) | 2,303.31 market · stop 2,272.2 → 2,303.5 after the half · TP 2,356 | half 2,344.24 (Oct 29, 10:46) · runner 2,356.80 at the target (11:09) | **+1.46R** (peak +2.02R) | **+$20.23** net | +$2.43 net (0.053 ETH) | [review](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261028_ETH-MFPELITE_001.md) |

> **Wed Oct 28, 22:48 ET — first Fortuna trade on the Elite program.** Crypto sold off two 1H ATRs in the 21:00 hour after FOMC day. ETH swept the prior-day low (2,296.2) to 2,292.1 on the 22:30 15m candle, on the evening's heaviest volume, and closed back above it at 2,298.9 while BTC and SOL held their own prior-day lows (the SMT condition). Two 5/5 Auto Levels (2,301.5, the week open, and 2,302.4) sit within half an ATR of the reclaimed level, so the read graded B. Long **0.445 ETH at 2,303.31** (market, 3 pts over the quote in a fast tape), 3× isolated (liquidation 1,650, twenty times the stop distance), attached **stop 2,272.2** (sweep low less one 1H ATR, below the Oct 27 low, not on a visible low) and **TP 2,356** (just under the midnight open 2,359.9, 1.7R from the fill). Counter-trend against a bearish 4H and a 5m downtrend reading ADX 59, which is exactly why this program trades the smallest size. Plan: half off at +1R (2,334) with the stop to breakeven, runner to the TP; thesis exit on a 15m close back below 2,296.2. One-shots each 15m close while the trade is young. The Select mirrored it at the copier's ratio (0.053 ETH).

> **Thu Oct 29, 10:46 ET — half off at +1R.** The long held through nine overnight reads, never closer than a point to the thesis level and never above +1R, until the 10:30 15m candle ran to 2,353 and closed at 2,345.8, the first close above the +1R mark (2,334.4). Half (0.222 ETH) came off at market at **2,344.24** (+1.32R on that half, $8.93 net). The stop on the runner (0.223 ETH) moved from 2,272.2 to **2,303.5**, breakeven plus fees, and the TP stays at 2,356; the trade can no longer lose. The first exit-order update bounced with a stale-snapshot error because the platform had already resized both exits to the runner size, which is worth knowing: re-read the working orders after any partial before modifying them. Runner reads at 11:31 and 12:33; the stop trails behind closed 1H lows once a swing forms, never farther from price.

> **Thu Oct 29, 11:09 ET — runner out at the target.** Twenty minutes after the half came off, the 11:00 15m candle ran from 2,344 to 2,365 and the resting take-profit filled the runner at **2,356.80**. The trade closed at **+$20.23 net, +1.46R on the $13.84 risked at the fill** (peak +2.02R), twelve hours and nineteen minutes from entry; balance 4,999.09 to 5,019.74. The Select mirror (0.053 ETH) netted +$2.43. First Elite trade, first win, every exit server-side and never widened. The runner left nothing on the table: the 11:15 candle topped at 2,366 and rolled over. Review: `fortuna-exports/trade-reviews/2026/10-Oct/review_20261028_ETH-MFPELITE_001.md`.

## Christopher's open positions here (read-only for Fortuna)

| Account | Market | Side | Size | Entry | Stop | Target | Note |
|---|---|---|---|---|---|---|---|
| Elite 5K | SOL | Long | 2.35 | $103.65 | none | $104.38 (resting TP) | Cross margin 3×. Opened Oct 23. |
| Select 1K | SOL | Long | 0.22 | $103.60 | none | — | Copy of the Elite position. |
