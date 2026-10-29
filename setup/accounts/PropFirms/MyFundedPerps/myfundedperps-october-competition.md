# MyFundedPerps October Competition — Rules, Strategy & Trade Ledger
> Sources: [October competition guide](https://docs.myfundedperpetuals.com/guides/october-competition) · [Competitions guide](https://docs.myfundedperpetuals.com/guides/competitions) · [Competition page](https://myfundedperpetuals.com/competitions/october-competition) · [Terms of Use](https://myfundedperpetuals.com/terms)
> **Account:** Christopher's free competition entry, **Classic path ($100K)**. Path locked: he traded on it before handing it to Fortuna.
> **Operator:** Fortuna (Claude Code CLI), trading via MyFundedPerps' hosted MCP server from Oct 23, 2026.
> Last updated: October 23, 2026

Related: [rules reference](myfundedperps-rules.md) · [API / MCP reference](myfundedperps-api-mcp-reference.md) · [Fortuna's story](fortuna-competition-story.md)

---

## Why This Account Exists

Christopher's framing: competition accounts **can't be copy-traded**, so this one is a clean, isolated account for Fortuna to learn perps execution end-to-end through MCP — order placement, protection, management and logging — before helping on real MFP evaluations and funded accounts.

**Priority order, in his words:** process test first, *"consistent profitability than risking for the biscuit"*, logged *"no different than any other eval we have (diligently)"*, and a story worth sharing with coaches. Placing on the leaderboard is a bonus, not the target.

---

## Competition Rules

| Item | Detail |
|---|---|
| Registration opens | Oct 1, 2026, 12:00 AM ET |
| Trading opens | Oct 5, 2026, 12:00 PM ET |
| **Trading + registration close** | **Oct 31, 2026, 12:00 PM ET** |
| Entry | Free, from the competition page |
| Markets | All markets (empty allowlist) |
| Ranking | **Highest account equity** (unrealized P&L included); ties broken by win rate |
| Run-ending limits | **None** — no profit target, drawdown or daily loss limit. Fees, swap, slippage, liquidation and leverage/exposure caps still apply. |
| Inactivity rule | Doesn't apply (competition products have no evaluation rules) |
| Free reset | One, unlocked by three social tasks (post on X, follow on YouTube + Instagram, repost on X). Requires a flat account; returns to $100K Classic; can't be undone. |
| Participants (Oct 22) | 22,205 |

### Paths

| Path | Starting balance | Leverage / exposure caps |
|---|---|---|
| Blitz | $50,000 | 4× standard |
| **Classic** ← ours | **$100,000** | **Standard** |
| Whale | $150,000 | 0.5× standard |

Scaled leverage rounds down, never below 1×. **Trading before choosing a path locks Classic** — which is what happened here.

### Prizes

| Rank | Prize |
|---|---|
| 1 | iPhone Duo + Select $100K account |
| 2 | PS5 + Select $50K |
| 3–4 | M1 MacBook + Select $50K |
| 5–6 | iPhone 14 + Select $50K |
| 7–11 | AirPods + Select $50K |
| 12–36 | Merch case + Select $25K |
| 37–49 | Select $25K |
| 50–100 | Select $10K |

For comparison, September's Launch Competition paired each MFP account with a **MyFundedFutures Rapid** account (1st: Signature 100K + MFF Rapid 150K). October's prizes are MFP Select accounts only.

### Disqualification red lines

"Standings count genuine, independent trading only." Disqualified for:
- **Operating more than one account.**
- **Copying or coordinating trades across accounts.** That rules out TradeCopia, native copy groups, and manually mirroring these trades into any other account.
- **Exploiting stale prices or platform errors.**

A disqualified account has its orders canceled and positions closed at market; other accounts aren't affected.

---

## Leaderboard Snapshot — Oct 22, 2026 (~23:35 ET, 8d 12h remaining)

| Rank | Equity | Implied path | Return vs own start |
|---|---|---|---|
| 1 | $618,311 | Blitz ($50K) | +1,137% |
| 2 | $463,997 | Blitz | +828% |
| 5 | $350,675 | Blitz | +601% |
| 10 | $283,965 | Blitz | +468% |
| 25 | $245,824 | Blitz | +392% |
| 36 | $233,317 | Classic | +133% |
| 50 | $215,919 | Blitz | +332% |
| 75 | $200,559 | Whale ($150K) | +34% |
| **100** | **$191,770** | **Whale** | **+28%** |

### The path lesson (for next time)

Because ranking uses **absolute equity**, Whale starts with a $50K head start over Classic. To reach today's top-100 cutoff:

| Path | Max notional (BTC) | Gain needed for $191,770 | Approx. BTC move at full size | Adverse move to liquidation at full size |
|---|---|---|---|---|
| Whale | $150K × 5× = $750K | +$41.8K (+28%) | ~5.6% | ~20% |
| Classic | $100K × 10× = $1.0M | +$91.8K (+92%) | ~9.2% | ~10% |
| Blitz | $50K × 40× = $2.0M | +$141.8K (+284%) | ~7.1% | ~2.5% |

**Takeaway:** for a top-100 goal, Whale needed the smallest gain and survived the largest adverse move. In any future equity-ranked competition, **choose the path before the first trade**.

---

## Fortuna's Operating Rules for This Account

**Authority:** autonomous order placement, management and closing on **this competition account only**. Never: any other MFP account, the free reset, purchases, copy-group changes, social tasks.

**Rehearsing a real eval** — the competition has no limits, so Fortuna imposes Prime-style ones:

| Self-imposed rule | Value | If breached |
|---|---|---|
| Risk per trade | 1% of equity (B grade) · 2% (A+ grade) · no trade below B | — |
| Daily loss limit | 3% of $100K = **$3,000** per NY day | Stop for the day; log it as a "simulated DLL breach" |
| Static floor | Handoff equity − 5% of $100K (**−$5,000**) | Log a "simulated eval fail" in the story, then keep trading for learning |
| Circuit breaker | Equity 6% below handoff, or 3 consecutive losses | Stop opening trades and check in with Christopher |
| Concurrency | At most 2 positions **carrying risk**, and total open risk ≤ 2%. BTC + ETH (or ETH + SOL) in the same direction count as one. *Clarified Oct 23, 05:20 ET:* a position whose stop sits at or beyond breakeven-plus-fees carries no risk and doesn't count toward the cap. | — |
| Trailing at +1R | Stop to **breakeven + fees**. If the nearest higher low (longs) / lower high (shorts) sits *inside* breakeven, the stop goes just beyond that swing instead, never looser than the original stop. It moves to breakeven once a new swing forms beyond entry. *Clarified Oct 23, 05:20 ET (trade #1).* *Added Oct 28 after the crude runner:* once a runner is past +1R the trail is checked on **15m closes**, not hourly reads, and a 1H candle that travels more than 1.5 ATR and closes at its low (longs) or high (shorts) under or over a daily level closes the runner at the next read. | — |
| Protection | **Every entry carries an attached server-side Stop Loss** (plus a Take Profit) | No exceptions |
| Margin | Isolated; leverage set so liquidation sits ≥ 3× the stop distance away | — |
| Wind-down | Flat by 11:45 AM ET, Oct 31 | — |
| Zone-pressing one-shot | When price is inside an armed trigger zone, or within 0.5× 15m ATR of it, at a check-in, **schedule a one-shot check one minute after the next 15m close** (as done for CL and gold). *Added Oct 23, 10:20 ET after missing the SOL trigger at the 10:00 close.* | — |
| High-impact news (FOMC, CPI, PPI, NFP, GDP, PCE, retail sales, ECB/BOE/BOJ) | MFP's firm rule binds only **Sim Funded** accounts (re-verified Oct 28 against docs.myfundedperpetuals.com/guides/elite-accounts): 10→2 min before the release no new exposure in the affected market, 2 min before → 2 min after no manual trades; evaluations and this competition are unrestricted. Fortuna rehearses the funded rule and widens it: **no new entries from 30 min before a red-folder release until 30 min after it (and after the press conference when there is one)**; an open position is held through the window only with its server-side stop in place and is not touched inside ±2 min. Christopher's standing preference on these days: flat except positions he names. *Added Oct 28 (FOMC day).* | Log it as a "simulated news breach" |
| **No cross-hedging Christopher** | Before any entry, check his live futures positions (`mcp__tradovate__get_positions`, read-only), **his other MFP accounts (Elite 5K + Select 1K via `list-open-positions`, read-only; MFP bans hedging between MFP accounts)**, and ask about BTCC/other crypto when relevant. **Never open the opposite side of a position he holds in a correlated market**, on any firm. Same-direction trades are allowed only as independent decisions (never copied). Correlation groups: **crypto** (BTC, ETH, SOL ↔ MBT/BTC futures); **oil** (CL, Brent ↔ MCL/CL); **gold** (XAU ↔ MGC/GC); **US indices** (NQ, ES, YM, RTY perps ↔ MNQ/MES/MYM/M2K). *Added Oct 23, 10:35 ET:* MFP's FAQ bans cross hedging "through economically equivalent or highly correlated instruments", judged on "economic substance", and MFP "may review activity across all accounts associated with a trader". | Skip the trade |

**Setups:** Christopher's framework adapted to perps:
- **Markets:** BTC, ETH and SOL first.
- **Bias:** HTF bias from 4H/1H structure plus the IT Foundation EMA gate.
- **Levels:** prior-day high/low, NY midnight open, weekly open, Asia/London ranges.
- **Triggers:** liquidity sweep / WASL reclaim, FVG displacement, BTC↔ETH SMT, 0.5–0.618 golden pocket, and NY 9:30 opening-range displacement standing in for FCR.

---

## Active Watchlist (the check-in reads this section)

> **Mon Oct 27, 20:37 ET — first competition order since the breaker was lifted.** Crude swept its daily low (feed 100.31) to 99.42 during the afternoon and spent the evening under it; the **20:15 15m candle closed 100.70**, back above the low on the evening's largest volume, with the 5/5 Auto Level (feed 100.25) inside the zone and Brent back above its own daily low (the SMT condition). Price had already run 0.4 ATR to the first target, so instead of chasing Fortuna rested a **limit long at MFP 100.45** (the zone top, the reclaimed daily low translated), attached **stop 99.18** (the evening cluster of lows 99.73 feed minus one 1H ATR plus offset; below every visible low) and **target 103.19** (PDH 103.08 feed, 2.2R), size 787.62 bbl = **1% risk** (B grade, $1,000), 8× isolated. Expires 00:40 ET. Management if filled: half off at the 101.46 overnight shelf when tagged at a read, stop to breakeven at +1R, runner to the PDH. Thesis exit (cancel, or close at the next read) on a 15m close back under 100.31 feed. One-shots each 15m close while the order is live.

> **21:31 ET — filled and working.** The retest came within four minutes: the 20:30 candle dipped to 100.29 feed and filled the limit at **100.45** at 20:41, then closed 100.34, back above the daily low (the thesis held by three cents). The 21:00 hour ran to 101.29 feed on the evening's largest volume. At the read: +$618 open (0.6R), stop 99.18 and target 103.19 both verified resting. Nothing to manage yet: the 101.46 shelf (half off) has not been tagged and +1R (101.72) is not reached. Next one-shot 21:46.

> **22:16 ET — half off at the shelf, stop to breakeven.** The 22:00 candle ran to 101.42 feed on the second-largest volume of the evening, tagging the 101.46 MFP shelf. Fortuna closed **393.81 bbl at 101.36** (+$357 net, +0.72R on that half) and moved the stop on the remaining 393.81 from 99.18 to **100.45** (entry), target 103.19 unchanged; both legs verified resting. Balance $100,380.37; the runner now risks nothing but fees. Plan: trail the stop under each new 1H higher low once price is past +1R (101.72); thesis exit still applies on a 15m close back under 100.31 feed.

> **Wed Oct 28, 02:34 ET — +1R printed, stop trailed above entry.** The 02:00 hour reached 101.72 feed (about 101.85 on MFP) and the quote sat at 101.77, past the +1R mark of 101.72. The closed 00:00 and 01:00 hours had built a low cluster at 101.22 feed above the entry, so the runner's stop moved from breakeven 100.45 to **101.15** MFP (cluster low minus 0.2, plus the offset), locking roughly +$275 on the remaining 393.81 bbl on top of the +$357 already banked. Target stays 102.86; the midnight-to-02:00 target had been rolled to the new prior-day high. From here the stop follows each closed 1H higher low and is never widened.

> **04:02 ET — runner closed, trade done: +$720.05 net (+0.72R).** The 03:00 hour ran to 102.20 feed (about 102.33 on MFP, half a dollar short of the 102.86 target and +1.48R at the high) on the heaviest volume since the entry, then closed at its low, 101.45. That low was still a higher low, so the trail rule put the stop at 101.38 MFP; by the 04:01 read the 04:00 hour had already traded down to that level, so a stop there would have sat at the market and I closed the runner at market instead, **101.39**, for +$369 on the half. Total for the trade: +$357 on the first half at 101.36, +$369 on the runner, $7.95 fees and $2.49 funding, balance 100,027.98 → **100,748.03**. The first competition win for Fortuna after three gold losses. Review: [20261027_CL-MFPCOMP_001](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261027_CL-MFPCOMP_001.md). Crude goes back to watch; a fresh daily structure is needed before another trade.

> ⛔ **BREAKER TRIPPED — Mon Oct 26, 10:55 ET.** Three straight competition losses by Fortuna (gold Oct 23 −1.13R, gold Oct 25 −1.06R, gold Oct 26 −0.52R). Per the handoff rules Fortuna opens **no new competition trades** until Christopher reviews; check-ins, reads and the terminal continue, and the Elite program is unaffected. Equity $100,027.98, still +$23.67 since the handoff.

> **Grade rule since Oct 26 — Auto Levels confluence.** Every zone is scored by the Auto Levels (Christopher's ZTH level engine, now running in the scanner) within half an ATR of it: KEY counts 2, 5/5 counts 1, 3/5 counts ½. **B** needs a 5/5 or KEY near the zone, or the stop placed beyond the next KEY. **A** needs a KEY inside the zone plus the SMT pair confirming plus higher-timeframe bias. **Thesis-invalidation exit:** when a closed candle on the trigger timeframe closes back through the level a trade was built on, Fortuna exits at the next read instead of waiting for the stop (the Oct 25 gold lesson).

> **Oct 25, 14:45 ET — market partition.** Christopher authorized Fortuna to trade his Elite 5K (and so the Select 1K follower) at very small size. To keep the competition's trades visibly independent (MFP disqualifies copied or coordinated competition trades), **crypto (BTC, ETH, SOL) now belongs to the Elite program** and **the competition keeps gold, crude and the indices**. One account per market per day. Elite rules and ledger: [`myfundedperps-elite-5k-program.md`](myfundedperps-elite-5k-program.md). The live view of all three accounts, the armed zones against live prices and the check-in log is the [Fortuna Terminal](https://drasticstatic.github.io/trading-assistant-public-preview/data/progression/terminal/).
>
> Gold and CL as of 20:53: gold's breakout above Friday's high **failed** — after four hourly closes above 4,000 (feed) the 18:00–20:00 candles rejected 4,007 and fell to 3,987, back under the 3,999–4,002 short zone, so the retrace short is **armed** again (needs a retrace into the zone and a 1H rejection close back under ~3,996; TP 3,975; no chase from below). CL sits at 101.8 (feed), two ATRs under its long zone; still **watch**. Offsets: gold +3.7, CL +0.065. Sunday evening tape is risk-off across the board (NQ/ES −3 ATR hours, BTC/ETH sliding toward the Elite long zones).
>
> **22:04 ET — first competition order since the handoff.** Gold's 21:00 hour wicked back into the Friday high (feed 4,002) and the 15m and 1H closes came back under 3,996, confirming the failed breakout. Fortuna rested a **limit short at MFP 4,003** (the translated Friday high), attached **stop 4,011** (rejection high + the $5 minimum + offset) and **target 3,979** (the 3,975 base low translated; 3R), size 63.182 oz = **0.5% risk** — half the B-grade cap, deliberately, because the Sunday-night book is thin (hourly volume a quarter of the afternoon's) and silver did not diverge at the sweep. Expires 00:02 ET if price never retraces. Management if filled: stop to breakeven at +1R, half off at 2R, runner to target.
>
> **23:01 ET — stopped at 4,011.05, −$535.51 (−1.06R).** The 22:00 hour closed back above the Friday high and the 23:00 hour ran the 18:00 swing high, one tick under the stop. Gold goes back to **watch**: no re-entry tonight, reassess at the Monday 08:00 read. Two straight gold stop-outs by Fortuna; one more loss trips the 3-straight breaker. New rules from the review: stops beyond the cluster of highs plus an ATR (size down to fit), and an exit at the next read when a closed trigger-timeframe candle closes back through the level the trade was built on.

> ▶️ **Check-ins RESUMED Sun Oct 25, 08:35 ET** at Christopher's go-ahead. No manual trades were placed on the competition account during the pause (fills unchanged, flat at $101,091.28), so nothing needed reconciling.

*Updated Sun Oct 25, 08:35 ET (full refresh after the weekend).* **⛔ Crypto SHORTS (BTC/ETH/SOL) still paused:** Christopher is long SOL on BTCC (6 @ $105.22, liq $96.92, no stop), MFP Elite (2.35 @ $103.65, TP $104.38, no stop) and Select (0.22). All 13 Tradovate accounts flat. Crypto *longs* allowed as independent decisions, modest size. **Weekend caveat:** thin liquidity Sat/Sun; crypto, Hyperliquid `xyz:` markets and Binance CL/XAU all quote 24/7 on MFP, but prefer B-grade-or-better with ATR-based stops until Sunday 18:00 ET futures open. Chart data comes from Hyperliquid public candles: the `xyz:` markets for indices, oil and gold, plus BTC/ETH/SOL. Execution levels come from the MFP quote; Binance CL and XAU trade within about $0.11 and $6 of the Hyperliquid prints.

| Market (MFP id) | Chart feed | Bias | Armed setup | Invalidation / targets |
|---|---|---|---|---|
| **SOL** ⭐ (`binance\|SOLUSDT`, max 5×) | `SOL` | Bear (4H+1H stacks); daily: below EMA20/50, **above daily EMA200 $99.31 and the 30-day low $98.64** | **Long only (shorts paused):** sweep of the **$98.64** PDL / $99.31 daily-200 cluster, then a 15m close back above $98.64, with BTC or ETH *not* making a matching new low (SMT). Max grade B. | Stop = sweep low − 1× 15m ATR (~$0.60) · TP1 $100.31 (1H HL) · TP2 $102.39 (midnight open). ETH/SOL/BTC same direction count as one position. |
| ETH (`binance\|ETHUSDT`) | `ETH` | Bear (all stacks); daily: sitting **on the daily EMA200 $2,339** | **Long only:** sweep of **$2,281.5** PDL then a 15m close back above, with BTC/SOL SMT | Stop = sweep low − 1× 15m ATR (~$13) · TP1 $2,317.7 (1H HL) · TP2 $2,361.7 (midnight open) |
| BTC (`binance\|BTCUSDT`) | `BTC` | Bear (4H+1H); daily: **on the daily EMA50 $80,808**, above EMA200 $76,466 | **Long only:** sweep of **$79,184** PDL then a 15m close back above, with ETH/SOL SMT | Stop = sweep low − 1× 15m ATR (~$260) · TP1 $80,051 · TP2 $80,828 (midnight open) |
| Gold (`binance\|XAUUSDT`) | `xyz:GOLD` | Bear 4H, 1H mixed; FOMC Oct 28 whipped it through the Oct 27 retest-long zone (5/5 Auto Level at feed 4,047, zone 4,051–4,056 MFP) and the day closed back underneath | **Paused.** Gold is A-grade only and a long against the bearish 4H is not an A; a short has no zone yet (the old 3,999–4,002 short zone is 1.5 ATR below, no retest limits after a >1.5 ATR displacement). Needs a fresh daily structure: a reclaim of the lost shelf with silver confirming, or a 15m rejection close at a higher level with the 4H still bearish. | Stops beyond the cluster + 1× 1H ATR (≈ $16 today, inflated); targets at the next daily level. MFP ≈ +$4 to +6 over `xyz:GOLD` Oct 28 (whippy; +7 to +8 in calm tape). |
| Crude (`binance\|CLUSDT`) + Brent SMT (`hyperliquid\|xyz:BRENTOIL`) | `xyz:CL`, `xyz:BRENTOIL` | Bull 4H and 1H; broke above the prior-day high 102.75 feed at 11:45 ET Oct 28 on the day's heaviest 15m volume, Brent took its own PDH (SMT confirms). Oct 27 reclaim long done (+0.72R) | **Paused (breakout failed)**: the 15:00 ET hour after the FOMC press conference closed back under the PDH 102.75 feed, so the retest thesis is void. The old zone 102.85–103.10 MFP (KEY Auto Level at feed 102.93) now sits overhead; a fresh daily structure (a new reclaim or a new breakout with Brent) is needed before another trade. Max grade B. | Stop below the base lows (feed 102.14–102.34) + 1× 1H ATR ≈ 101.6 MFP · TP1 103.85 (5/5 cluster). Re-grade when a higher level forms or the base tightens. MFP ≈ +$0.10 over `xyz:CL`. |
| Nasdaq-100 (`hyperliquid\|xyz:XYZ100`) + S&P (`hyperliquid\|xyz:SP500`) + RTY leg (IWM via Robinhood, weekdays) | same | Bear (all stacks); weekend range NQ 28,923–29,005, ES 7,614–7,634 | **No FCR until Monday 9:30 ET.** Weekend: no trade (thin). Monday: mark the 9:30–9:45 candle; Scenario A/B/C read with IWM. | — |
Not on the list:
- **Dow** (`ostium|DJI`) has a 23/5 session and the Friday 16:45 ET auto-close. Usable for an FCR confirmation read, not a weekend hold.
- **Russell 2000 (RTY/M2K)** ⭐ isn't tradable. MFP has no Russell market, and Hyperliquid's `xyz` list has none either.
  - It stays in the plan as the **third index for NQ/ES/RTY SMT**.
  - **Feed: Robinhood MCP, IWM 5-minute bars** (regular hours only). Live since Oct 23, ~02:40 ET.
    - The Robinhood MCP uses phone-approval 2FA. A login that fails with "empty result" means the in-app approval prompt wasn't confirmed in time; approve it on the phone and retry.
    - Tradovate MCP isn't usable for this: it returns contract metadata only (bid/ask is WebSocket-only).
  - Oct 22 context: IWM +0.07% while NQ −1.4%. IWM never revisited its 10:35 ET low while NQ kept making lows, so **RTY was the relative-strength leg**.

---

## Trade Ledger

Every trade gets a full 9-section review in `fortuna-exports/trade-reviews/2026/10-Oct/` (`review_YYYYMMDD_[SYMBOL]-MFPCOMP_NNN.md`). Times are ET; P&L is net of commissions and swap.

### Pre-handoff (Christopher, manual)

Imported from the account's fill history via MCP `list-fills` (Oct 23, 00:37 ET).

| Date (ET) | Market | Side | Fills | Net P&L | Notes |
|---|---|---|---|---|---|
| Oct 22 | ETH | Long | 17:19:47 market buy 0.417 @ $2,396.21 (1×) · 21:15:38 limit add 0.19 @ $2,385.07 (2×, attached TP) → 0.607 avg $2,392.72 · 21:46:42 TP 0.607 @ $2,401.91 | **+$5.58 gross / ≈ +$4.70 after $0.87 commission** | Scaled-in long, closed on take profit |
| Oct 22 → Oct 23 | BTC | Long | 16:45:23 limit placed · 20:13:17 filled 0.012 @ $81,129.38 (3× isolated) · **closed Oct 23 10:16:52 on the breakeven stop @ $81,184.50** | **−$0.09** (scratch) | SL was canceled by hand at 21:11:36 (Pattern 7). Fortuna restored it at 00:37, moved it to breakeven at +1R (01:04), and split the targets. The high of $82,088 missed TP1 by $42. [review](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261022_BTC-MFPCOMP_001.md) |
| Oct 25 | XAU | Short (Fortuna) | 22:05:24 limit filled 63.182 @ $4,003.00 (10× isolated, attached SL $4,011 / TP $3,979) · **23:01:30 stop filled @ $4,011.05** | **−$535.51 net (−1.06R at 0.5% risk)** | Failed-breakout retest on a thin Sunday book. The 22:00 hour closed back above the Friday high and the next hour ran the 18:00 swing high, where the stop sat one tick above. Lessons: stops beyond the high *cluster* + ATR, and a thesis-invalidation exit on a closed candle. [review](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261025_XAU-MFPCOMP_001.md) |
| Oct 26 | XAU | Short (Fortuna) | 10:19:28 limit filled 52.924 @ $4,021.00 (10× isolated, attached SL $4,040 / TP $3,989) · **10:54:54 closed at market @ $4,030.57 on thesis invalidation** (15m close back above the zone) | **−$527.79 net (−0.52R at 1% risk)** | A-read retest short after the 09:00–09:30 break ran without me (no-fade window); the retrace ran through the whole zone. New exit rule cut the loss to half the planned risk. **Third straight competition loss → breaker tripped.** [review](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261026_XAU-MFPCOMP_001.md) |
| Oct 27 → Oct 28 | CL | Long (Fortuna) | 20:41:18 limit filled 787.62 @ $100.45 (8× isolated, attached SL $99.18 / TP $103.19, maker) · 22:16:42 half 393.81 @ $101.36 at the overnight shelf, stop to breakeven · TP rolled to $102.86 after the daily roll · stop trailed to $101.15 (02:34) and $101.27 (03:02) under closed 1H higher lows · **04:02:05 runner 393.81 closed at market @ $101.39** at the trail level | **+$720.05 net (+0.72R at 1% risk)** | B-grade reclaim long of the swept daily low with a 5/5 Auto Level in the zone and Brent back above its own low; retest limit at the zone top after a 0.4-ATR run. Peak +1.48R (102.20 feed at 03:00) before the hour closed at its low. First competition win; the trail reached its level between hourly reads, so the runner left at the market rather than at the target. [review](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261027_CL-MFPCOMP_001.md) |

**Inherited BTC long — Fortuna's management (Oct 23, 01:04 ET):**
- **Where it stood:** R = $503 from entry to the original stop. The trade had already run to +1.83R (high $82,051 at 23:45) and was sitting at +1.07R with lower 15m highs.
- **Stop:** moved to **$81,185**, breakeven after fees, just under the 21:30 higher low ($81,197).
- **Target split:** **0.006 @ $82,130** (≈2R, just above the $82,012/82,051 equal highs) plus **0.006 @ $83,092.88** (Christopher's original, above the PDH).
- **Result:** worst case went from −$6 to ≈ $0. The working set was confirmed after the change.

**Handoff baseline (Oct 23, 00:37 ET):** realized balance **$100,004.31** · equity **$100,011.10** (incl. +$6.79 unrealized on the inherited BTC long).
**Self-imposed floors from that baseline:** simulated static floor **$95,004** · circuit breaker **≈ $94,011 equity** · daily loss allowance **$3,000** from each NY day's opening equity.

### Pipeline smoke test (Oct 23, 00:38 ET) ✅

| Step | Result |
|---|---|
| `create-order`: limit buy 0.001 BTC @ $70,000, 1× isolated, attached TP $72,000 / SL $69,000, idempotency key logged first | `201` → `resting`, attached exits held with the order |
| `list-orders` by `client_order_id` (lost-response recovery path) | Order found |
| `cancel-order` → `get-order` | `canceled` (reason `user`). The working set is back to the inherited BTC stop + target only. |

No fill and no fees. This proved the create → read → recover → cancel loop end to end.

### Fortuna

| # | Date | Market | Side | Grade | Risk | Entry → Exit | R | Net P&L | Equity after | Review |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Oct 23 | CL (`binance\|CLUSDT`) | Long | B | 0.85% ($851) | 2,127 @ $100.33 (05:02 ET) → TP1 1,063.5 @ $101.08 (05:23) · TP2 1,063.5 @ $101.47 (08:07) | **+2.33R** | **+$1,986.56** | $101,990.77 | [review](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261023_CL-MFPCOMP_001.md) |
| 2 | Oct 23 | Gold (`binance\|XAUUSDT`) | Short | B | 0.78% ($793) | 165.289 @ $4,037.45 (09:01 ET) → **stopped 09:22 @ $4,042.49** (stop $4,042.25; second sweep of the highs, then price fell $16) | **−1.13R** | **−$899.83** | $101,090.93 | [review](../../../../fortuna-exports/trade-reviews/2026/10-Oct/review_20261023_XAU-MFPCOMP_002.md) |
| 3 | Oct 23 | NQ (`hyperliquid\|xyz:XYZ100`) | Long | B | 1% ($1,010) | Resting limit 9.0178 @ 29,060 (placed 11:28, GTD 12:00) → **expired unfilled**: lows 29,063–29,067 missed it by 3 pts; NQ at 29,130 at 12:01 | 0R | $0 | $101,091.28 | — |

### Daily summary

| NY day | Trades | Net P&L | Equity close | Self-DLL used | Floor buffer | Note |
|---|---|---|---|---|---|---|
| Fri Oct 23 *(Fortuna paused 16:58)* | 2 Fortuna (CL ✅ · XAU ❌) + inherited BTC closed at scratch + NQ limit expired unfilled | +$1,086.64 | **$101,091.28 @ 16:58 ET (flat)** | $0 of $3,000 (day still net green) | +$6,087 above the $95,004 floor | CL +2.33R, gold −1.13R (stopped by a 20-cent second sweep; gold then ran through both targets), BTC −$0.09. 1 consecutive loss (the scratch doesn't count). **Missed:** SOL short trigger at the 10:00 close (check-in timing). Now flat. |
