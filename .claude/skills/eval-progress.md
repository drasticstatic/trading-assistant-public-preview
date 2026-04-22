---
name: eval-progress
description: >
  Get a live snapshot of prop firm eval account progress — balance, trailing floor, gap to profit target, min days remaining, and daily-run-rate math. Use this whenever the user mentions: eval status, where am I on the eval, how's the account, eval progress, how close am I to payout, account check, balance check, floor check, how many days left, daily run rate, am I on pace, eval snapshot, account snapshot, prop firm progress, drawdown check, profit target status, or any question about current standing in a prop firm evaluation challenge. Do NOT use for: full session startup (use /goodmorning), premarket analysis, or non-prop-firm account checks.
---

# Skill: /eval-progress

Pull live account data and produce a concise eval status snapshot — where Christopher
stands relative to the profit target, trailing floor, min days requirement, and the
daily run rate needed to reach payout by the end of the eval window.

## Before Starting

Run `get_account` — this is the primary data source. Note:
- Current balance
- Starting balance (to calculate P&L to date)
- Trailing drawdown floor (current value)
- Any restrictions or flags on the account

## Steps

### 1. Pull Account Data

```
get_account  — APEX-484839-06 and TAKEPROFIT558167553
```

If multiple accounts are active, run for each.

### 2. Calculate Key Metrics

For each account, compute:

| Metric | Formula |
|--------|---------|
| P&L to date | Current balance − Starting balance |
| Gap to profit target | Profit target − P&L to date |
| Distance above floor | Current balance − Trailing floor |
| Min days remaining | Target min days − Days traded |
| Daily run rate needed | Gap to target ÷ Trading days remaining |

**APEX-06 targets (100K account):**
- Profit target: $6,000 (6%)
- Max trailing drawdown: $2,500 (2.5%)
- Min trading days: 7 (met Mar 25)

**TPT targets (50K account):**
- Profit target: $3,000 (6%)
- Check reset date and current rules

### 3. Deliver Status Report

```
Eval Progress — [Date]

APEX-484839-06
  Balance:        $X,XXX.XX
  P&L to date:    +$XXX.XX
  Gap to target:  $X,XXX.XX remaining
  Floor:          $X,XXX.XX (distance: $XXX.XX above)
  Min days:       ✅ Met / ❌ N of 7 complete
  Run rate needed: $XX.XX/day over N trading days

TAKEPROFIT558167553
  Status: [Active / Reset / Inactive]
  [Same metrics if active]

Overall: [One sentence — e.g., "On pace for APEX payout, TPT needs attention"]
```

### 4. Flag Risks

- If balance is within $500 of trailing floor: **⚠️ Floor Risk** — reduce size immediately
- If run rate needed exceeds $300/day: **⚠️ Pace Risk** — at current rate, won't reach target this window
- If consistency rule is close to violation: flag it

## Output Format

Compact table — designed to be read in 30 seconds. Not a full account report.

## When NOT to Use

- Full session startup (use /goodmorning instead — eval is checked there)
- Premarket analysis or trade planning
- Non-prop-firm account checks (Robinhood, BTCC)
- Detailed trade-by-trade review

## Quick Commands

```bash
# MCP tool (run via Claude — not bash)
# get_account
```
