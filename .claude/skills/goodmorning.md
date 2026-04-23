---
name: goodmorning
description: >
  Use at the start of a trading session to run the session startup routine — check systems,
  confirm accounts, and orient for the day. TRIGGER when: "good morning", "start session",
  "let's trade", "session start", "morning routine", "fire up", "ready to trade", "begin trading",
  "start day", "session check", "systems check", "morning check", or any phrase indicating the
  trader is beginning their trading day. Do NOT use for: premarket summary creation (that's /premarket),
  general questions, mid-session check-ins, or non-trading repository sessions (use /startup for those).
---

# Skill: /goodmorning

Run the full trading session startup sequence. This is the live trading terminal routine — systems first, context second, orientation third.

## Step 1 — System Health

Run these MCP tools in sequence:

```
tv_health_check        — TradingView Desktop connected via CDP?
get_account            — [YOUR_APEX_ACCOUNT_ID] live? Note balance and trailing floor.
get_alerts             — Webhook pipeline active? Any stale alerts?
```

If any MCP fails: diagnose before any trading work begins. Do not skip to market analysis.

**Why this matters:** A failed health check means flying blind. If TradingView isn't connected, chart state can't be read. If the account API is down, real balance and drawdown status are unknown. If alerts are stale, signals might be missed or duplicated. Fix infrastructure before analyzing markets.

## Step 2 — Read Context

- Read `AGENT-SYNC/AGENT_SYNC.md` — pick up where last session left off
- Check for new agent prompts in `AGENT-SYNC/created-by-auggie/` and `AGENT-SYNC/created-by-kavanah/`
- Note any active behavioral patterns from memory (Pattern 7, 8, 9, reversal bias)

**Why this matters:** Trading sessions don't exist in isolation. The AGENT_SYNC file contains unfinished analysis, active hypotheses, and behavioral flags from the last session. Skipping this step means repeating work or missing critical context that could prevent a known mistake.

## Step 3 — Account Status Brief

Report:
- **[YOUR_APEX_ACCOUNT_ID]**: balance, trailing floor, distance to profit target, min days status
- **[YOUR_TPT_ACCOUNT_ID]**: status, reset date, any restrictions
- Any other active accounts

**Why this matters:** Apex accounts have dynamic trailing drawdowns and consistency rules. Knowing the current floor tells you how much risk is actually available today. Distance to profit target and min days tells you whether you're pacing correctly or need to adjust urgency.

## Step 4 — Session Orientation

- What day of the week is it? What is the macro context? (CPI week? FOMC? EIA Wednesday?)
- Check economic calendar for today's events and times
- If premarket file exists for today: summarize key levels and bias
- If no premarket file: note the gap and offer to build one now with /premarket

**Why this matters:** Trading the same setup on a quiet Tuesday vs. CPI Wednesday can have wildly different outcomes. Macro events compress volatility before release and expand it after. Knowing what's on the calendar prevents holding through a known catalyst or trading during a dead zone.

## Step 5 — Behavioral Reminder

State the one most active behavioral pattern and the rule to counteract it:

- **Pattern 8 active** → "If MFE reaches [X] and retraces 50%, exit. No waiting for exhaustion."
- **Pattern 9 active** → "Confirm TP and SL are live before stepping away from any position."
- **Reversal bias** → "Is the trend broken or pausing? Pausing = no short."

**Why this matters:** Behavioral patterns are the highest-ROI thing to fix. A trader who knows their Pattern 8 tendency but doesn't hear the reminder at session start will repeat it by 10:30 AM. The reminder is a pre-commitment device, not motivation.

## Output Format

Deliver as a brief morning brief: 3–4 sentences max per section. Actionable, not verbose.

If systems are all green, say so clearly. If there's a macro event today, state the time and expected impact. If there's an active behavioral pattern, state the specific exit rule.

Christopher can then ask for /premarket to go deeper, or begin trading.

## Edge Cases

**No premarket file exists:** Offer to generate one now with `/premarket`. Don't assume Christopher wants to trade without it — he might want the analysis first.

**Multiple accounts in different states:** If one account is approaching payout and another is in drawdown, highlight the contrast. The risk tolerance for each account is different.

**Macro event in <1 hour:** Flag it prominently. If CPI drops at 8:30 AM and it's currently 8:15 AM, that's not a normal session start — it's a hold-and-wait situation.

**Behavioral pattern conflict:** If Pattern 8 (hold too long) and Pattern 9 (forget stops) are both active, prioritize Pattern 9. A missing stop is more dangerous than a suboptimal exit.

## Quick Commands

These are reference commands — do not run them automatically:

```bash
# Launch TradingView Desktop with CDP debug port (required for tradingview MCP)
/Applications/TradingView.app/Contents/MacOS/TradingView --remote-debugging-port=9222 &

# If ngrok fallback needed (run in a separate terminal before starting Claude)
# ngrok http 8089

# Pull latest before session
git pull origin main
```

**When to suggest these:** If `tv_health_check` fails with `cdp_connected: false`, suggest the TradingView launch command. If ngrok is suspected, mention the ngrok command. If AGENT_SYNC is stale, suggest the git pull.
