---
name: premarket
description: >
  Use when Christopher asks to build or create a premarket summary, pre-market analysis, morning
  brief, or pre-session plan. TRIGGER when: "create premarket", "build premarket summary",
  "premarket for [date]", "premarket plan", "morning brief", "pre-market", "build the plan for today",
  "prep for the session", "session prep", "market prep", "morning plan", "today's plan".
  Do NOT use for: daily reviews, weekly reviews, individual trade reviews, post-session analysis,
  or when Christopher is asking about a past session rather than preparing for today.
---

# Skill: /premarket

Build a complete premarket summary following FORTUNA_WORKFLOW.md Section 2. Premarket prep is
**decision compression** — front-loading analysis to reduce cognitive load during live trading.

## Before Starting

1. Confirm the date (today's date unless specified)
2. Run `tv_health_check` — confirm TradingView Desktop is connected
3. Run `get_account` — note balance and trailing floor for APEX-06
4. Run `get_alerts` — confirm webhook pipeline is live
5. Check economic calendar for the session (use `morning_brief` if available)
6. Gather any overnight price action notes from Christopher

## File Path

```
smarttrader-ai/analysis/premarket/YYYY/MM-Mon/premarket_YYYYMMDD_summary.md
```
Add per-instrument files if warranted: `premarket_YYYYMMDD_[instrument].md`

## Required Sections — In This Order

### 1. `## 📋 Session Dashboard`

```markdown
## 📋 Session Dashboard

**Date:** [Day of week], [Month] [DD], [YYYY]
**Session Type:** [Regular / Volatile / News-Heavy / Choppy Expected]

| Metric | Value |
|--------|-------|
| APEX-06 Balance | $X,XXX.XX |
| Trailing Floor | $X,XXX.XX |
| Max Daily Loss | $XXX |
| Primary Instruments | MNQ, RTY, CL |
| Key Economic Events | [Time] - [Event] |
```

### 2. `## ⚠️ Session Risk Alert`

```markdown
## ⚠️ Session Risk Alert

- **Trailing Floor:** $X,XXX.XX — Do not let balance fall below this
- **Max Daily Loss:** $XXX — Stop trading if hit
- **Active Behavioral Patterns:** [Pattern 7 / 8 / 9 if applicable]
- **Account Notes:** [Any prop firm flags, recent violations, warnings]
```

### 3. `## 🌙 Overnight / ETH Context`

What happened overnight, ETH price action, key levels that held or broke:

```markdown
## 🌙 Overnight / ETH Context

**Asia Session:** [Key price action, range, direction]
**London Session:** [Key price action, any breakouts or rejections]
**ETH Price Action:** [What happened overnight, which levels held or broke]
**Overnight Catalysts:** [Any news, geopolitical events, or macro moves]
```

### 4. `## 🌤️ At the Open`

```markdown
## 🌤️ At the Open (9:30 AM ET)

**Watch for:**
- FCR setup conditions on [instruments]
- Initial direction: [bullish / bearish / neutral]
- Key levels to monitor: [specific prices]

**First 30 Minutes:**
- Avoid trading if: [conditions]
- Look for entries if: [conditions]
```

### 5. `## 🔗 SMT Divergence Scenarios`

```markdown
## 🔗 SMT Divergence Scenarios

**Scenario A — All Confirm (High Confidence)**
- NQ, ES, YM, RTY all make new highs/lows together → full size

**Scenario B — NQ Leading (Moderate Confidence)**
- NQ makes new high/low, ES/YM lag → reduce size, tighten stops

**Scenario C — Mixed / Flat (Low Confidence)**
- Indices not aligned → consider staying flat or paper trading only
```

### 6. `## 📅 Economic Calendar`

```markdown
## 📅 Economic Calendar

| Time (ET) | Event | Expected | Prior | Impact |
|-----------|-------|----------|-------|--------|
| 8:30 AM | [Event] | [Value] | [Value] | High |

**Session Impact:** [How these events could affect price action]
```

### 7. `## 🎯 Today's Priority Instruments`

```markdown
## 🎯 Today's Priority Instruments

1. **MNQ** — [Reason: strong trend, clear levels, etc.]
2. **RTY** — [Reason]
3. **CL** — [Reason]
```

### 8. Per-Instrument Analysis (one `##` per instrument)

```markdown
## [Instrument] — [Bias: Long / Short / Neutral]

**Higher Timeframe Context:**
- Daily: [trend, structure]
- 4H: [key levels, bias]

**Key Levels:**
- Resistance: [price]
- Support: [price]
- FCR Reference: [if applicable]
- Auto-levels output: [if available]

**Setup Conditions:**
- Long if: [specific conditions]
- Short if: [specific conditions]

**Invalidation:**
- Long invalidated if: [price action]
- Short invalidated if: [price action]
```

### 9. `## 🧠 Pre-Session Mental State / Behavioral Reminder`

```markdown
## 🧠 Pre-Session Mental State / Behavioral Reminder

**Active Pattern Reminders:** [Pattern 7 / 8 / 9 notes if applicable]
**Session Intention:** [One-sentence intention: e.g., "Wait for clear FCR confirmation before entering"]
```

### 10. `## ⏱️ Live Session Updates`

**Keep minimal at creation** — brief trade projection ideas and key level notes only.
Detailed tracking goes in daily review.

```markdown
## ⏱️ Live Session Updates

**Pre-Market Notes:**
- [Brief projection ideas]
- [Key level reminders]

*Detailed trade tracking and narrative belong in the daily review.*
```

### 11. `## 🤖 SmartTraderAI Pre-Market Copy-Paste Fields`

Jump link at top of file (exact format):
```
[Jump to 🤖 SmartTraderAI Copy-Paste ↓](#smarttraderai-copy-paste)
```

Anchor: `<a id="smarttraderai-copy-paste"></a>` on the line before `## 🤖` heading.
`---` immediately after the `## 🤖` heading and between every question — always.

**5 questions — use exact wording from `specs/SMARTTRADERAI_EXPORT_SPEC.md`:**

1. What news releases today?
2. What are the expected figures? What effect has this event had on the markets before?
3. List both your HTF bias and key levels
4. List your Intraday bias and levels
5. Expectations for the day?

After Q5, end with:
```
> Full pre-market summary: [public-preview URL to this file]
```

Footer (after final `---`):
```
*Fortuna — Wealth Warden | Claude Code CLI*
*Pre-Market Summary · [Date] · [Session context]*
```

## Key Concepts

**FCR (First Candle Range):** The high and low of the first 15-min candle after 9:30 AM ET.
Displacement ABOVE the high = LONG signal. Displacement BELOW the low = SHORT signal.
First candle color is irrelevant — only displacement outside the range matters.
Wait for confirmation; premature entries on the initial break often fail.

**SMT Divergence:** When correlated instruments (NQ/ES, RTY/YM) fail to confirm each other's highs
or lows. "ES makes a new high above a prior range. At the same time, NQ fails to break its own high
and starts reversing." Signals potential manipulation and reversal. Use as confirmation, not standalone entry.

**Auto-Levels:** TradingView Pine scripts that automatically plot support/resistance and institutional
levels. Reference when available but always validate with price action context.

## What NOT to Include

- Rigid predictions — markets are probabilistic, not deterministic
- Overconfident bias — always present both bull and bear cases
- Generic advice without defining what confirmation looks like
- Duplicate content across multiple sections
- Post-session analysis — that belongs in the daily review

## Common Pitfalls

1. Too much analysis, not enough actionable setups — focus on "if this, then that" logic
2. Ignoring overnight context — ETH and Asia/London action often sets the tone
3. Forgetting behavioral patterns — if Pattern 7/8/9 is active, it must be front and center
4. Weak invalidation criteria — always define what cancels the setup
5. No SMT analysis — divergence is a critical confirmation tool for futures traders

## Screenshots

Full-size always for premarket. Format:
```
**HH:MM ET — Description**
![Alt text](../../../../../data/screenshots/filename.png)
```
Path is 5 levels up from `analysis/premarket/YYYY/MM-Mon/`.

## After Creating

1. Commit: "Add premarket summary [date]"
2. Public-preview URL for this file (to reference in daily review Session Narrative):
   `https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/smarttrader-ai/analysis/premarket/YYYY/MM-Mon/premarket_YYYYMMDD_summary.md`

## Related Specs

- `specs/FORTUNA_WORKFLOW.md` — Section 2: pre-market workflow, session startup sequence
- `specs/SMARTTRADERAI_EXPORT_SPEC.md` — 5-question pre-market format (canonical templates — exact wording required)
- `specs/morning_brief_routine.md` — TradingView layout reference (tab IDs, pane layout), indicator toggle sequence, 5-slot limit protocol

## Quick Commands

```bash
# Stage and commit premarket file
git add smarttrader-ai/analysis/premarket/ && \
  git commit -m "Add premarket YYYYMMDD — [instrument(s)] [bias: long/short/neutral]"
git push origin main
```
