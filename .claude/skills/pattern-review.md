---
name: pattern-review
description: >
  Use to analyze behavioral pattern trends from pattern_tracker.md and append a dated
  review block with one mechanical fix per active pattern. TRIGGER when: "pattern review",
  "update pattern tracker", "analyze my patterns", "behavioral review", "pattern analysis",
  "how are my patterns doing", "pattern update", "review the tracker". Do NOT use for:
  individual trade reviews (use /trade-review), weekly reviews, or when pattern_tracker.md
  doesn't exist yet.
---

# Skill: /pattern-review

Read `smarttrader-ai/reviews/pattern_tracker.md`, analyze the frequency and P&L impact
of each active pattern, and append a dated review block to the tracker with one specific,
mechanical fix per pattern. The goal is not diagnosis — it's the fix.

## Before Starting

1. Read `smarttrader-ai/reviews/pattern_tracker.md` in full
2. Note the date range of trades in the log — how many recent trades to analyze
3. Identify which patterns are marked as active vs. resolved

## Steps

### 1. Read the Tracker

Pull the full trade log table and pattern frequency counts. Note:
- How many times each active pattern appeared in the last 4 weeks
- Which patterns are improving (decreasing frequency) vs. recurring
- P&L impact per pattern — are they costing money or just behavioral issues?

### 2. Analyze Each Active Pattern

For each active pattern:
- **Frequency:** How many trades in the last N sessions?
- **P&L impact:** Positive/negative/neutral on the trades where it appeared
- **Trend:** Getting better, getting worse, or flat?
- **Last instance:** What specifically happened?

Current active patterns to check:
- **Pattern 7** (SL modification) — rationalized as structural, noise survival, or post-fill protection
- **Pattern 8** (exit passivity) — zero active exit decisions; exits via SL, TP, or AutoLiq
- **Pattern 9** (order hygiene) — cancel all orders before stepping away

### 3. Write the Mechanical Fix

For each pattern, the fix must be **mechanical** — not motivational. A good fix is:
- A specific price condition ("If MFE retraces 50%, exit")
- A specific rule ("Before stepping away: check open orders, confirm SL is live")
- A specific trigger ("If SL has been moved once, no second move permitted")

A bad fix is vague ("be more disciplined", "stick to the plan").

### 4. Append the Review Block

Add to the bottom of `pattern_tracker.md`:

```markdown
---

## Pattern Review — [YYYY-MM-DD]

**Review window:** [N trades, date range]

### Pattern 7 — SL Modification
- Frequency: [N] occurrences in [date range]
- Trend: [Improving / Recurring / Getting worse]
- P&L impact: [$XXX net impact when pattern fired]
- Mechanical fix: [Specific rule]

### Pattern 8 — Exit Passivity
- Frequency: [N] occurrences
- Trend: [...]
- P&L impact: [...]
- Mechanical fix: [Specific rule]

### Pattern 9 — Order Hygiene
- Frequency: [N] occurrences
- Trend: [...]
- Mechanical fix: [Specific rule]

**Summary:** [One sentence on overall behavioral trajectory]
```

## Output Format

The review block appended to pattern_tracker.md. No separate file created.

## After Running

1. Commit the updated tracker
2. Surface the most critical fix as the behavioral reminder in the next /goodmorning

## Quick Commands

```bash
# Stage and commit updated tracker
git add smarttrader-ai/reviews/pattern_tracker.md && \
  git commit -m "Pattern review [date] — [brief summary of trajectory]"
git push origin main
```
