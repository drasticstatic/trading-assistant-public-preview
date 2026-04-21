---
name: premarket
description: >
  Use when Christopher asks to build or create a premarket summary, pre-market analysis, morning
  brief, or pre-session plan. TRIGGER when: "create premarket", "build premarket summary",
  "premarket for [date]", "premarket plan", "morning brief", "pre-market", "build the plan for today".
  Do NOT use for: daily reviews, weekly reviews, individual trade reviews, post-session analysis,
  or when Christopher is asking about a past session rather than preparing for today.
---

# Skill: /premarket

Build a complete premarket summary following FORTUNA_WORKFLOW.md Section 2.

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

1. `## 📋 Session Dashboard` — Date, session type, key levels table, account status
2. `## ⚠️ Session Risk Alert` — prop firm trailing floor, max loss rules, any account-specific flags
3. `## 🌙 Overnight / ETH Context` — what happened overnight, ETH price action, key levels that held or broke
4. `## 🌤️ At the Open` — what to watch for at 9:30 AM ET, FCR setup conditions
5. `## 🔗 SMT Divergence Scenarios` — Scenario A (all confirm), B (NQ leading), C (mixed/flat)
6. `## 📅 Economic Calendar` — news events, times, expected figures, prior values, potential impact
7. `## 🎯 Today's Priority Instruments` — ranked list with rationale
8. Per-Instrument Analysis sections — one `##` per instrument (MNQ, RTY, CL, etc.)
   - Higher timeframe bias
   - Key levels (support/resistance, FCR reference, auto-levels output)
   - Setup conditions (what needs to happen for a trade)
   - Invalidation (what cancels the setup)
9. `## 🧠 Pre-Session Mental State / Behavioral Reminder`
   - Active pattern reminders (Pattern 7, 8, 9 as applicable)
   - One-sentence intention for the session
10. `## ⏱️ Live Session Updates` — **keep minimal at creation**: brief trade projection ideas and key level notes only. Detailed tracking goes in daily review.
11. `## 🤖 SmartTraderAI Pre-Market Copy-Paste Fields`

## SmartTraderAI Pre-Market Template (5 questions — verbatim)

Anchor: `<a id="smarttraderai-copy-paste"></a>` before `## 🤖` heading.
`---` after the `## 🤖` heading and between every question.

1. What is today's date, and what major news or events could impact the markets?
2. What are the expected figures? What effect has this event had on markets before?
3. What are the key higher-timeframe figures and their likely effect on price today?
4. What is your intraday bias and at what price levels do you expect to trade from?
5. What is your expectation for today's session based on the above?

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

## Quick Commands

```bash
# Stage and commit premarket file
git add smarttrader-ai/analysis/premarket/ && \
  git commit -m "Add premarket YYYYMMDD — [instrument(s)] [bias: long/short/neutral]"
git push origin main
```
