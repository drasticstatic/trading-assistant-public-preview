---
name: prop-firm-status
description: >
  Get a live snapshot of prop firm account progress — balance, trailing floor, gap to profit target,
  min days remaining, and daily-run-rate math. Covers both active evaluations and funded/live
  accounts. Use this whenever the user mentions: eval status, funded account status, prop firm status,
  where am I on the eval, how's the account, how close am I to payout, account check, balance check,
  floor check, drawdown check, how many days left, daily run rate, am I on pace, account snapshot,
  prop firm progress, profit target status, consistency check, risk check, or any question about
  current standing in a prop firm evaluation or funded account. Also use for: checking distance to
  trailing drawdown floor, verifying consistency rule compliance, calculating remaining buffer, or
  assessing risk level. Do NOT use for: full session startup (use /goodmorning — prop firm status is
  checked there), premarket analysis, trade planning, or non-prop-firm account checks.
---

# Skill: /prop-firm-status

Pull live account data and produce a concise status snapshot for prop firm evaluations and funded accounts.

**Account details and progression plan:** [`setup/accounts/PropFirms/prop-firm-progression.md`](../setup/accounts/PropFirms/prop-firm-progression.md)
→ [View on GitHub](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/setup/accounts/PropFirms/prop-firm-progression.md)

After running this skill, update `prop-firm-progression.md` if account status changed (new days counted, balance shift, or outcome change).

---

## Before Starting

Run `get_account` for each active account. Note:
- Current balance
- Starting balance (to calculate P&L to date)
- Trailing drawdown floor (current value)
- Any restrictions or flags

---

## Steps

### 1. Pull Account Data

```
get_account  — [YOUR_APEX_ACCOUNT_ID], [YOUR_TPT_ACCOUNT_ID], or any active prop firm account
```

### 2. Calculate Key Metrics

For each account:

| Metric | Formula |
|--------|---------|
| P&L to date | Current balance − Starting balance |
| Gap to profit target | Profit target − P&L to date |
| Distance above floor | Current balance − Trailing floor |
| Min days remaining | Target min days − Days traded |
| Daily run rate needed | Gap to target ÷ Trading days remaining |
| Floor risk level | "Safe" if >$1000 buffer; "⚠️ Caution" if $500–$1000; "🚨 Critical" if <$500 |

> Current account parameters (targets, min days, drawdown limits): see [`prop-firm-progression.md`](../setup/accounts/PropFirms/prop-firm-progression.md)

**Trailing drawdown mechanics:**
- **EOD trailing:** Floor updates once daily at market close based on highest closing balance. Intraday swings don't move it.
- **Intraday trailing:** Floor updates in real-time with highest unrealized equity. Far more restrictive — even profitable trades can breach if they retrace.
- **Static drawdown:** Floor never moves. Fixed distance below starting balance.

Confirm which type applies to each account. Most futures prop firms (Apex, Topstep) use EOD trailing; some forex/crypto firms use intraday or static.

### 3. Deliver Status Report

```
Prop Firm Status — [Date]

[Account Name / ID]
  Balance:         $X,XXX.XX
  P&L to date:     +$XXX.XX
  Gap to target:   $X,XXX.XX remaining
  Floor:           $X,XXX.XX (buffer: $XXX.XX — [Safe/⚠️ Caution/🚨 Critical])
  Floor type:      [EOD trailing / Intraday trailing / Static]
  Min days:        ✅ Met / ❌ N of X complete
  Run rate needed: $XX.XX/day over N trading days
  Consistency:     [if applicable: X% of profit from best day / 40% max]

Overall: [output to chat: brief overall status with a helpful/insightful statement if applicable]
```

### 4. Flag Risks

- **🚨 Floor Risk — Critical:** Buffer <$500. Reduce size immediately or stop trading.
- **⚠️ Floor Risk — Caution:** Buffer $500–$1000. Trade smaller, avoid volatility.
- **⚠️ Pace Risk:** Run rate needed exceeds $300/day — won't reach target at current pace without increasing risk.
- **⚠️ Consistency Risk:** (If firm enforces consistency rules) Best day accounts for >35% of profit. One bad day or withdrawal could trigger violation.
- **✅ On Track:** Adequate buffer, realistic daily target, min days on pace.

### 5. Update prop-firm-progression.md

If anything changed (new day counted, balance milestone, outcome):
- Update the relevant row in the Account Roster table
- Update the "see /prop-firm-status for current standing" note in the active account row

---

## Output Format

Clean and scannable. Include context that matters (risk flags, pace warnings, consistency checks) but stay concise — this is a snapshot, not a full account report.

## When NOT to Use

- Full session startup (use /goodmorning — prop firm status is checked there)
- Premarket analysis or trade planning
- Non-prop-firm account checks (Robinhood, BTCC)
- Detailed trade-by-trade review

## Quick Commands

```bash
# MCP tool (run via Claude — not bash)
# get_account
```
