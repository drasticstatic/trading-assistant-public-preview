---
name: smog-analysis
description: >
  Use to run a SMOG framework analysis on a specific trade or setup — checking all six
  entry criteria, evaluating the reversal quality, and grading the execution.
  TRIGGER when: "SMOG analysis", "run SMOG on this", "SMOG check", "was that a SMOG setup",
  "analyze this trade with SMOG", "SMOG grade", "SMOG 3.0 review".
  Do NOT use for: TCL/trend continuation setups (use /tcl-analysis), general trade reviews
  (use /trade-review), or non-Inevitrade strategies.
---

# Skill: /smog-analysis

Run a SMOG (Smart Money OG) framework analysis on a specific trade or setup.
SMOG is a **reversal strategy** targeting 1:4+ R:R on the 1-minute timeframe.
Full reference: `strategies/inevitrade/smog-reference.md`

## Core Framework Reminder

SMOG combines:
- **ADX < 25** — weakening trend = reversal probability high
- **OG Oscillator highlight** — buy/sell signal when ADX hits 25 or below
- **CHoCH or CISD** — structural reversal confirmation
- **Fair Value Gap** — entry zone
- **Fibonacci retracement** — 50%–61.8% golden pocket for entry
- **SMOG 3.0 additions**: 15-min OG bias + Heikin Ashi trailing

## Before Starting

1. Identify the trade: date, instrument, direction, entry/exit
2. Read the trade data (CSV or Christopher's description)
3. Read screenshots if available
4. Read `strategies/inevitrade/smog-reference.md` if clarification needed on any criterion

## Analysis Steps

### 1. Six-Criteria Checklist

Work through each criterion and mark as met (✅), partial (⚠️), or not met (❌):

| # | Criterion | Met? | Notes |
|---|-----------|------|-------|
| 1 | ADX < 25 on 1min or 5min | | |
| 2 | OG Oscillator highlight present | | |
| 3 | CHoCH or CISD confirmed | | |
| 4 | Fair Value Gap present as entry zone | | |
| 5 | Fibonacci golden pocket (50–61.8%) aligned | | |
| 6 | *(SMOG 3.0)* 15-min OG bias confirms direction | | |

**Grade:** All 6 ✅ = A+ setup. 5 = A. 4 = B. 3 or fewer = should not have been taken.

### 2. Trailing Method Review (SMOG 3.0)

If a TP was active:
- Was Heikin Ashi 15-min trailing applied?
- Was the first red HA close respected as the exit signal?
- Was the 4 PM hard stop honored?

### 3. Execution Assessment

- Entry: Was it at the FVG zone or chased above it?
- Stop placement: Was it beyond the CHoCH level?
- Target: Was the 1:4+ R:R target pre-defined before entry?
- Outcome vs. potential: Did the exit match the setup's structure?

### 4. Behavioral Notes

Did any active patterns fire during this setup?
- Pattern 7 (SL moved) — was the structural stop respected?
- Pattern 8 (exit passivity) — was the HA trailing method used or was it held passively?

## Output Format

```
SMOG Analysis — [Instrument] [Direction] [Date]

Criteria: [X/6] ✅
[Checklist table]

Setup Grade: [A+ / A / B / Should Not Trade]
Entry quality: [At FVG / Below FVG / Chased]
Trailing: [HA method applied / Not applied / N/A]

Key observation: [One sentence on the most important finding]
Coaching note: [One specific improvement for next SMOG setup]
```

## Quick Commands

```bash
# Reference file
# strategies/inevitrade/smog-reference.md

# No commit required for analysis-only runs
# If adding to a trade review: git add smarttrader-ai/reviews/ && git commit
```
