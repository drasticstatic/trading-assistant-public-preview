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
| Concurrency | At most 2 positions. BTC + ETH in the same direction count as one. | — |
| Protection | **Every entry carries an attached server-side Stop Loss** (plus a Take Profit) | No exceptions |
| Margin | Isolated; leverage set so liquidation sits ≥ 3× the stop distance away | — |
| Wind-down | Flat by 11:45 AM ET, Oct 31 | — |

**Setups:** Christopher's framework adapted to perps:
- **Markets:** BTC, ETH and SOL first.
- **Bias:** HTF bias from 4H/1H structure plus the IT Foundation EMA gate.
- **Levels:** prior-day high/low, NY midnight open, weekly open, Asia/London ranges.
- **Triggers:** liquidity sweep / WASL reclaim, FVG displacement, BTC↔ETH SMT, 0.5–0.618 golden pocket, and NY 9:30 opening-range displacement standing in for FCR.

---

## Trade Ledger

Every trade gets a full 9-section review in `fortuna-exports/trade-reviews/2026/10-Oct/` (`review_YYYYMMDD_[SYMBOL]-MFPCOMP_NNN.md`). Times are ET; P&L is net of commissions and swap.

### Pre-handoff (Christopher, manual)

| Date | Market | Side | Net P&L | Notes |
|---|---|---|---|---|
| *pending import from account history* | | | | |

**Handoff baseline equity:** *recorded at MCP connect*

### Fortuna

| # | Date | Market | Side | Grade | Risk | Entry → Exit | R | Net P&L | Equity after | Review |
|---|---|---|---|---|---|---|---|---|---|---|
| — | | | | | | | | | | |

### Daily summary

| NY day | Trades | Net P&L | Equity close | Self-DLL used | Floor buffer | Note |
|---|---|---|---|---|---|---|
| — | | | | | | |
