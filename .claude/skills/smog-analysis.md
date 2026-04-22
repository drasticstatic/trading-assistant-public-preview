---
name: smog-analysis
description: >
  Run a SMOG (Smart Money OG) framework analysis on a specific trade or setup — checking all six entry criteria, evaluating reversal quality, and grading execution. Use for reversal trades on 1-minute timeframe targeting 1:4+ R:R. TRIGGER when: "SMOG analysis", "run SMOG on this", "SMOG check", "was that a SMOG setup", "analyze this trade with SMOG", "SMOG grade", "SMOG 3.0 review", "check SMOG criteria", "reversal setup analysis", "ADX reversal", "OG oscillator trade", "CHoCH setup", or any mention of SMOG framework, Inevitrade reversals, or Smart Money OG strategy. Do NOT use for TCL/trend continuation setups, general trade reviews without SMOG context, or non-Inevitrade strategies.
---

# Skill: /smog-analysis

Analyze reversal trades using the SMOG (Smart Money OG) framework — a six-criteria system for 1-minute reversals targeting 1:4+ R:R. Full reference: `strategies/inevitrade/smog-reference.md`

## What SMOG Is

A reversal strategy combining:
- **ADX < 25** — weakening trend increases reversal probability
- **OG Oscillator highlight** — buy/sell signal when ADX ≤ 25
- **CHoCH or CISD** — structural reversal confirmation
- **Fair Value Gap (FVG)** — entry zone
- **Fibonacci 50–61.8%** — golden pocket alignment
- **15-min OG bias** (SMOG 3.0) — higher timeframe confirmation

SMOG works because it waits for trend exhaustion (ADX), confirms structural shift (CHoCH), and enters at high-probability zones (FVG + Fib). Skipping any criterion significantly reduces win rate.

## Before Starting

1. Identify the trade: date, instrument, direction, entry/exit
2. Read the trade data (CSV or Christopher's description) and screenshots
3. Read `strategies/inevitrade/smog-reference.md` if any criterion is unclear

## Analysis Workflow

### 1. Six-Criteria Checklist

Evaluate each criterion as met (✅), partial (⚠️ = 0.5), or not met (❌):

| # | Criterion | Status | Notes |
|---|-----------|--------|-------|
| 1 | ADX < 25 on 1min or 5min | | Was ADX declining and below 25 at signal? |
| 2 | OG Oscillator highlight present | | Green (buy) or red (sell) highlight visible? |
| 3 | CHoCH or CISD confirmed | | Clear break of structure in reversal direction? |
| 4 | Fair Value Gap as entry zone | | FVG present and used for entry? |
| 5 | Fibonacci golden pocket (50–61.8%) | | Entry within or near golden pocket? |
| 6 | 15-min OG bias confirms direction | | Higher timeframe OG oscillator aligned? |

**Grading:**
- 6/6 ✅ = **A+** (textbook setup)
- 5/6 ✅ = **A** (strong setup, minor gap acceptable)
- 4/6 ✅ = **B** (marginal — review what was missing)
- ≤ 3/6 ✅ = **Should Not Trade** (insufficient confirmation)

### 2. Execution Quality

**Entry:**
- At FVG zone — ideal, waited for pullback into gap
- Below FVG — acceptable if still within golden pocket
- Chased above FVG — poor, reduces R:R and increases risk

**Stop placement:** Should be beyond the CHoCH swing point. If SL was moved before structural invalidation → Pattern 7.

**Target:** Was 1:4+ R:R defined before entry?

### 3. Trailing Method (SMOG 3.0)

- **Heikin Ashi 15-min trailing**: First red HA close = exit signal
- **16:58 ET hard stop**: Exit by 16:58 ET at the latest — do not let the prop firm close the position

## Output Format

```
SMOG Analysis — [Instrument] [Direction] [Date]

Criteria Met: [X/6] ✅
[Checklist table]

Setup Grade: [A+ / A / B / Should Not Trade]
Entry Quality: [At FVG / Below FVG / Chased]
Trailing: [HA method applied / Not applied / N/A]
Outcome: [Win/Loss, R:R achieved]

Key Observation: [One sentence on most important finding]
Coaching Note: [One specific improvement for next SMOG setup]
```

## Example

```
SMOG Analysis — NQ Short 2026-04-15

Criteria Met: 5/6 ✅
| 1 | ADX < 25       | ✅ | ADX at 22, declining               |
| 2 | OG highlight   | ✅ | Red sell signal present             |
| 3 | CHoCH          | ✅ | Clear lower high break              |
| 4 | FVG            | ✅ | Entry at top of gap                 |
| 5 | Fib 50–61.8%   | ⚠️ | 58% — within range but near edge   |
| 6 | 15-min OG bias | ✅ | Bearish on higher TF                |

Setup Grade: A
Entry Quality: At FVG
Trailing: HA method applied, exited on first red close
Outcome: Win, 1:5.2 R:R

Key Observation: Fibonacci entry near edge of golden pocket — tighter entry at 61.8% would have improved R:R to 1:6+.
Coaching Note: Wait for deeper retracement into golden pocket when ADX is still declining.
```

## Quick Commands

```bash
# Reference file
# strategies/inevitrade/smog-reference.md

# No commit required for analysis-only runs
# If adding to a trade review:
git add smarttrader-ai/reviews/ && git commit -m "Add SMOG analysis [date]"
git push origin main
```
