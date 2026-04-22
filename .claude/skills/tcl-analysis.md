---
name: tcl-analysis
description: >
  Use to run a TCL (Trend Continuation Level) framework analysis on a trade or setup —
  checking entry criteria, DCA layer execution, asymmetrical stacking quality, and grade.
  TRIGGER when: "TCL analysis", "run TCL on this", "TCL check", "was that a TCL setup",
  "analyze this trade with TCL", "TCL grade", "TCL 2.0 review", "trend continuation check".
  Do NOT use for: SMOG reversal setups (use /smog-analysis), general trade reviews
  (use /trade-review), or non-Inevitrade strategies.
---

# Skill: /tcl-analysis

Run a TCL (Trend Continuation Level) framework analysis on a trade or setup.
TCL is a **trend continuation DCA strategy** using asymmetrical stacking on the 1–3 minute timeframe.
Full reference: `strategies/inevitrade/tcl-reference.md`

## Core Framework Reminder

TCL uses staggered limit orders at Fibonacci levels within a confirmed trend:
- **Entry** — initial position at trend continuation zone
- **Limit 1** — 3× size added at deeper Fibonacci level (improves avg cost)
- **Limit 2** — 5× size added at deeper level (further improves avg cost)
- **Stop** — beyond the invalidation level (max −1R)
- **Target** — adjusted TP based on filled layers; inverted R:R, 80%+ win rate model

Versions: TCL 1.0 (Max/Ultra) and TCL 2.0. Reference file covers both.

## Before Starting

1. Identify the trade: date, instrument, direction, which TCL version
2. Read the trade data (CSV + order execution table)
3. Read screenshots if available
4. Read `strategies/inevitrade/tcl-reference.md` if clarification needed

## Analysis Steps

### 1. Pre-Entry Checklist

| Criterion | Met? | Notes |
|-----------|------|-------|
| Top-down analysis complete (HTF context) | | |
| Trend direction confirmed (IT Foundation EMA gate) | | |
| Entry zone at Fibonacci level (38.2%, 50%, or 61.8%) | | |
| Limit 1 and Limit 2 pre-placed before entry | | |
| Stop placed beyond invalidation level | | |
| TP pre-calculated for each fill scenario | | |

### 2. Stacking Scenario — What Happened

Identify which scenario played out:

| Scenario | What Happened | Notes |
|----------|--------------|-------|
| **Entry Win** | Entry filled, hit TP directly | No averaging triggered |
| **Limit 1 Win** | Entry + Limit 1 filled, hit adjusted TP | Check avg cost calculation |
| **Limit 2 Win** | All three layers filled, hit further-adjusted TP | Check avg cost calculation |
| **Full Loss** | Price hit stop loss | Was stop at the right invalidation level? |

### 3. Execution Assessment

- Were all limit orders placed *before* the trade was entered (not after)?
- Was the stop loss set and left untouched (Pattern 7 check)?
- Did the TP adjust correctly when additional layers filled?
- Was the overall position size within account risk rules?

### 4. Behavioral Notes

- Pattern 7 (SL moved) — TCL stops should never move; if it moved, note it
- Pattern 8 (exit passivity) — TCL has pre-defined TPs per scenario; was the TP taken or held through?
- Pattern 9 (order hygiene) — were all limit orders and stops live before stepping away?

## Output Format

```
TCL Analysis — [Instrument] [Direction] [Date] · [TCL version]

Pre-entry: [X/6] ✅
Scenario: [Entry Win / L1 Win / L2 Win / Full Loss]
Avg cost (if averaged): [calculated]
TP achieved: [Yes / No — reason]

Execution grade: [A+ / A / B / Error]
Key observation: [One sentence on the most important finding]
Coaching note: [One specific improvement for next TCL setup]
```

## Quick Commands

```bash
# Reference files
# strategies/inevitrade/tcl-reference.md
# strategies/inevitrade/tc-reference.md  (TCL predecessor — TC1/TC2)

# No commit required for analysis-only runs
# If adding to a trade review: git add smarttrader-ai/reviews/ && git commit
```
