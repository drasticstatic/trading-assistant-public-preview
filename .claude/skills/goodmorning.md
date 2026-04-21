---
name: goodmorning
description: >
  Use at the start of a trading session to run the session startup routine — check systems,
  confirm accounts, and orient for the day. TRIGGER when: "good morning", "start session",
  "let's trade", "session start", "morning routine", "fire up", "ready to trade".
  Do NOT use for: premarket summary creation (that's /premarket), general questions, mid-session
  check-ins, or non-trading repository sessions (use /startup for those).
---

# Skill: /goodmorning

Run the full trading session startup sequence. This is the live trading terminal routine.

## Step 1 — System Health

```
tv_health_check        — TradingView Desktop connected via CDP?
get_account            — APEX-484839-06 live? Note balance and trailing floor.
get_alerts             — Webhook pipeline active? Any stale alerts?
```

If any MCP fails: diagnose before any trading work begins. Do not skip to market analysis.

## Step 2 — Read Context

- Read `AGENT-SYNC/AGENT_SYNC.md` — pick up where last session left off
- Check for new agent prompts in `AGENT-SYNC/created-by-auggie/` and `AGENT-SYNC/created-by-kavanah/`
- Note any active patterns from memory (Pattern 7, 8, 9, reversal bias)

## Step 3 — Account Status Brief

Report:
- APEX-484839-06: balance, trailing floor, distance to profit target, min days status
- TAKEPROFIT558167553: status, reset date, any restrictions
- Any other active accounts

## Step 4 — Session Orientation

- What day of the week is it? What is the macro context? (CPI week? FOMC? EIA Wednesday?)
- Check economic calendar for today's events and times
- If premarket file exists for today: summarize key levels and bias
- If no premarket file: note the gap and offer to build one now with /premarket

## Step 5 — Behavioral Reminder

State the one most active behavioral pattern and the rule to counteract it:
- Pattern 8 active → "If MFE reaches [X] and retraces 50%, exit. No waiting for exhaustion."
- Pattern 9 active → "Confirm TP and SL are live before stepping away from any position."
- Reversal bias → "Is the trend broken or pausing? Pausing = no short."

## Output Format

Deliver as a brief morning brief: 3–4 sentences max per section. Actionable, not verbose.
If systems are all green, say so clearly. Christopher can then ask for /premarket to go deeper.

## Quick Commands

```bash
# Launch TradingView Desktop with CDP debug port (required for tradingview MCP)
/Applications/TradingView.app/Contents/MacOS/TradingView --remote-debugging-port=9222 &

# If ngrok fallback needed (run in a separate terminal before starting Claude)
# ngrok http 8089

# Pull latest before session
git pull origin main
```
