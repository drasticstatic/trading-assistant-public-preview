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
| Trailing at +1R | Stop to **breakeven + fees**. If the nearest higher low (longs) / lower high (shorts) sits *inside* breakeven, the stop goes just beyond that swing instead, never looser than the original stop. It moves to breakeven once a new swing forms beyond entry. *Clarified Oct 23, 05:20 ET (trade #1).* | — |
| Protection | **Every entry carries an attached server-side Stop Loss** (plus a Take Profit) | No exceptions |
| Margin | Isolated; leverage set so liquidation sits ≥ 3× the stop distance away | — |
| Wind-down | Flat by 11:45 AM ET, Oct 31 | — |

**Setups:** Christopher's framework adapted to perps:
- **Markets:** BTC, ETH and SOL first.
- **Bias:** HTF bias from 4H/1H structure plus the IT Foundation EMA gate.
- **Levels:** prior-day high/low, NY midnight open, weekly open, Asia/London ranges.
- **Triggers:** liquidity sweep / WASL reclaim, FVG displacement, BTC↔ETH SMT, 0.5–0.618 golden pocket, and NY 9:30 opening-range displacement standing in for FCR.

---

## Active Watchlist (the check-in reads this section)

*Updated Oct 23, 01:55 ET.* Chart data comes from Hyperliquid public candles: the `xyz:` markets for indices, oil and gold, plus BTC/ETH/SOL. Execution levels come from the MFP quote; Binance CL and XAU trade within about $0.11 and $6 of the Hyperliquid prints.

| Market (MFP id) | Chart feed | Bias | Armed setup | Invalidation / targets |
|---|---|---|---|---|
| ETH (`binance\|ETHUSDT`) | `ETH` | Bear (4H+1H stacks) | Short on a sweep of $2,416.6 into $2,420–2,424, then a 15m close back below $2,416 · Long on a sweep-and-reclaim of the $2,380 equal lows | Short stop above the sweep high · TP $2,380, then $2,359 |
| **SOL** ⭐ (`binance\|SOLUSDT`, max 5×) | `SOL` | Bear (4H+1H stacks) | Short on a sweep of $104.80 into $104.90–105.20 (1H EMA50 plus week open), then a 15m close back below $104.80 · Long on a sweep-and-reclaim of the $102.98 PDL | Short stop above the sweep high · TP $103.80, then $102.98 · Long TP $104.21 midnight open. **ETH and SOL in the same direction count as one position**; take whichever triggers or grades better. |
| BTC (`binance\|BTCUSDT`) | `BTC` | Range / bear lean | **Inherited long being managed** (stop $81,185, TPs $82,130 / $83,092.88). No BTC short: it would flip the long. | — |
| Gold (`binance\|XAUUSDT`) | `xyz:GOLD` | Bear (all TFs) | ❌ **Trade #2 stopped 09:22 ET (−$899.83).** A second sweep (xyz 4,036.7) took the stop by $0.20 before the open, then price dropped to ~4,026. **No re-entry** without a fresh setup: a new lower high plus rejection, with the stop beyond ≥1× 15m ATR (hypothesis from this trade). MFP runs ≈ +$5.75 over `xyz:GOLD`. | — |
| Crude (`binance\|CLUSDT`) + Brent SMT (`hyperliquid\|xyz:BRENTOIL`) | `xyz:CL`, `xyz:BRENTOIL` | Bull (all TFs) | ✅ **Trade #1 closed +$1,986.56 (+2.33R), both targets filled.** No new CL setup armed: price is extended above the PDH ($100.95). Re-arm on the next pullback to the 15m EMA50 or the reclaimed PDH, with Brent SMT again. MFP runs ≈ +$0.06–0.16 over the `xyz:CL` print. | — |
| Nasdaq-100 (`hyperliquid\|xyz:XYZ100`) + S&P (`hyperliquid\|xyz:SP500`) + RTY leg (IWM via Robinhood) | same + IWM 5-minute bars | Bear (15m/1H/4H EMA stacks). **Oct 23 FCR read = Scenario C (mixed):** NQ green FCR closed at its high after sweeping and reclaiming its PDL; ES green but still under its PDL (7,635.7); IWM red FCR after a gap down (−0.86%) | **FCR levels (9:30–9:45 ET):** NQ **H 28,964 / L 28,829** · ES **H 7,629.5 / L 7,613.9** · IWM **H 275.24 / L 274.05**.<br>**SHORT (with trend, valid):** a 15m close below the NQ FCR low (28,829) with FVG, ES below 7,613.9 and IWM below 274.05 = Scenario A short. Stop above the FCR midpoint / FVG; TP next liquidity.<br>**LONG (counter-trend):** only if the EMA gate flips (15m close above EMA50 ~28,976 and EMA20 > EMA50) **and** ES reclaims its PDL 7,635.7 **and** IWM reclaims 275.24. Otherwise a push above the NQ FCR high is **no trade** (Scenario B without the gate). | Size to the stop; **risk ≤ 1%** (no A+ while Scenario C). |

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
| Oct 22 → open | BTC | Long | 16:45:23 limit placed · 20:13:17 filled 0.012 @ $81,129.38 (3× isolated) · TP $83,092.88 · SL $80,626.04 | open | SL was canceled by hand at 21:11:36 (see pattern tracker, Pattern 7). **Fortuna restored it at the original $80,626.04 on Oct 23 00:37 ET.** Christopher then handed over management. |

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
| 2 | Oct 23 | Gold (`binance\|XAUUSDT`) | Short | B | 0.78% ($793) | 165.289 @ $4,037.45 (09:01 ET) → **stopped 09:22 @ $4,042.49** (stop $4,042.25; second sweep of the highs, then price fell $16) | **−1.13R** | **−$899.83** | $101,090.93 | *review in progress* |

### Daily summary

| NY day | Trades | Net P&L | Equity close | Self-DLL used | Floor buffer | Note |
|---|---|---|---|---|---|---|
| Fri Oct 23 *(in progress)* | 2 (CL ✅ · XAU ❌) | +$1,086.73 | $101,098 @ 09:35 ET | $0 of $3,000 (day still net green) | +$6,087 above the $95,004 floor | CL +2.33R, then gold −1.13R (stopped by a 20-cent second sweep before the open). 1 consecutive loss. Inherited BTC long still open, risk-free. |
