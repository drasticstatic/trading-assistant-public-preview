---
name: pattern-review
description: >
  Analyze behavioral pattern trends from pattern_tracker.md and append a dated
  review block with one mechanical fix per active pattern. Use when the user says:
  "pattern review", "update pattern tracker", "analyze my patterns", "behavioral review",
  "pattern analysis", "how are my patterns doing", "pattern update", "review the tracker",
  "check my patterns", "pattern check-in", or mentions reviewing behavioral patterns from
  their trading tracker. Do NOT use for: individual trade reviews (use /trade-review),
  weekly reviews, or when pattern_tracker.md doesn't exist yet.
---

# Skill: /pattern-review

Read `smarttrader-ai/reviews/pattern_tracker.md`, analyze frequency and P&L impact of each active pattern, and append a dated review block with one mechanical fix per pattern. The output is actionable rules — not diagnosis.

## Before Starting

1. Read `smarttrader-ai/reviews/pattern_tracker.md` in full
2. Note the date range of trades — how many recent trades to analyze
3. Identify which patterns are marked active vs. resolved

## Workflow

### 1. Read the Tracker

Pull the full trade log and pattern frequency counts:
- How many times each active pattern appeared in the last 4 weeks
- Which patterns are improving (decreasing) vs. recurring (flat) vs. worsening (increasing)
- P&L impact per pattern — cost in dollars or behavioral drag
- Date range of trades analyzed

### 2. Analyze Each Active Pattern

For each active pattern:
- **Frequency:** Count occurrences in the review window
- **Trend:** Improving / Recurring / Worsening
- **P&L impact:** Net dollar impact when pattern fired
- **Last instance:** Most recent trade where it appeared

Current patterns to check:
- **Pattern 7** (SL modification) — moving stop after entry, rationalized as structural or noise survival
- **Pattern 8** (exit passivity) — zero active exit decisions; exits via SL, TP, or AutoLiq
- **Pattern 9** (order hygiene) — failing to cancel open orders before stepping away

### 3. Write Mechanical Fixes

Each fix must be **specific and executable** — not motivational.

**Good fixes:**
- "If MFE retraces 50%, exit immediately"
- "Before stepping away: check open orders, confirm SL is live, cancel all limit orders"
- "If SL has been moved once, no second move permitted"

**Bad fixes:**
- "Be more disciplined" / "Stick to the plan" / "Trust the process"

The fix is a rule the trader can follow mechanically, without willpower or judgment in the moment.

### 4. Append the Review Block

```markdown
---

## Pattern Review — YYYY-MM-DD

**Review window:** [N trades, date range]

### Pattern 7 — SL Modification
- Frequency: [N] occurrences in [date range]
- Trend: [Improving / Recurring / Worsening]
- P&L impact: $[XXX] net impact
- Mechanical fix: [Specific executable rule]

### Pattern 8 — Exit Passivity
- Frequency: [N] occurrences
- Trend: [...]
- P&L impact: [...]
- Mechanical fix: [Specific executable rule]

### Pattern 9 — Order Hygiene
- Frequency: [N] occurrences
- Trend: [...]
- Mechanical fix: [Specific executable rule]

**Summary:** [One sentence on overall behavioral trajectory]
```

## Example Review Block

```markdown
## Pattern Review — 2026-04-22

**Review window:** 18 trades, 2026-03-25 to 2026-04-22

### Pattern 7 — SL Modification
- Frequency: 4 occurrences in 18 trades
- Trend: Recurring (same rate as last review)
- P&L impact: -$240 net (avg -$60 per occurrence)
- Mechanical fix: If SL is moved once, set a 5-minute timer. If price hasn't validated the new level by then, exit the trade.

### Pattern 8 — Exit Passivity
- Frequency: 12 occurrences in 18 trades
- Trend: Worsening (was 8/15 last review)
- P&L impact: -$180 net (missed exits, gave back MFE)
- Mechanical fix: At 2R MFE, set alert at 1.5R. If alert fires, exit immediately — no evaluation, no waiting for "one more push."

### Pattern 9 — Order Hygiene
- Frequency: 2 occurrences in 18 trades
- Trend: Improving (was 5/15 last review)
- P&L impact: -$50 (one accidental fill)
- Mechanical fix: Before closing laptop or switching tasks: (1) Open orders? Cancel all. (2) SL live? Confirm. (3) Position size correct? Verify.

**Summary:** Exit passivity is the primary leak; SL modification stable but costly. Order hygiene improving.
```

## Review Cadence Notes

- Minimum window: 10 trades or 2 weeks
- If a pattern hasn't fired in 4 weeks, mark it resolved and move to archive section
- If a new pattern emerges during review, add it with initial frequency and a proposed fix
- Surface the most critical fix as the behavioral reminder in the next /goodmorning

## Why This Works

Patterns repeat because behavior is habitual. Vague reminders fail because they require willpower in high-pressure moments. Mechanical fixes remove judgment — the trader follows the rule, and the pattern stops firing. Frequency counts and P&L impact make the cost visible. Trends show whether fixes are working.

## After Running

```bash
git add smarttrader-ai/reviews/pattern_tracker.md && \
  git commit -m "Pattern review [date] — [brief summary of trajectory]"
git push origin main
```
