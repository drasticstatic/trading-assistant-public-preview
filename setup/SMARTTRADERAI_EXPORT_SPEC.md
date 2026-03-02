# SmartTraderAI Export Format Specification

> **Single source of truth** for all SmartTraderAI export formats.
> Any agent building or reviewing export files must follow this spec.

---

## Table of Contents

1. [Pre-Market Daily Review (5 questions)](#pre-market-daily-review)
2. [Post-Market Daily Review (3 questions)](#post-market-daily-review)
3. [Weekly Review (9 questions + yes/no + action steps)](#weekly-review)
4. [Formatting Rules](#formatting-rules)
5. [Pre-Market Document Section Order](#pre-market-document-section-order)

---

## Pre-Market Daily Review

Five required fields. Fill before 9:30 ET each session.

### 1. What news releases today? *

List all scheduled economic releases, Fed speakers, and any macro events relevant to the session. Include timing (ET) and which instruments are affected.

### 2. What are the expected figures? What effect has this event had on the markets before? *

For each release listed in Q1: prior reading, expected figure, and historical market impact (which instruments move, in which direction, on beat vs miss).

### 3. List both your HTF bias and key levels *

Per instrument: HTF directional bias (bullish/bearish/neutral), EMA configuration, VRVP/FRVP positioning, key support/resistance levels, FVG zones, and any SMT divergence signals.

### 4. List your Intraday bias and levels *

Per instrument: intraday directional bias, FCR scenario (A/B/C), entry model, trigger conditions, SL placement, TP target, and confluence level grade.

### 5. Expectations for the day? *

Narrative summary of the primary and secondary expectations. Include scenario decision points, key levels that determine the day's character, and mental checklist.

End Q5 with a `>` blockquote linking to the full pre-market summary and per-instrument analysis files:

```markdown
> Full pre-market summary:
https://github.com/drasticstatic/trading-assistant/blob/main/smarttrader-ai/analysis/premarket_YYYYMMDD_summary.md

> Full pre-market analysis:
- NQ: `premarket_YYYYMMDD_NQ.md`
- ES: `premarket_YYYYMMDD_ES.md`
- YM: `premarket_YYYYMMDD_YM.md`
- GC: `premarket_YYYYMMDD_GC.md`
- CL: `premarket_YYYYMMDD_CL.md`
```

---

## Post-Market Daily Review

Three required fields. Complete after each trading session.

### 1. What actually happened?

Describe the market action and how you traded. Include: session bias confirmation, instruments traded, entry/exit details, directional read accuracy, and any notable market behavior.

### 2. What did you learn?

Key takeaways, insights, and lessons from today. Include pattern identification, behavioral observations, and any rule adjustments identified.

### 3. What were your results for the day?

List your profits, how many trades you took, and whether or not you round tripped any gains. Include: per-trade breakdown (instrument, direction, contracts, entry, SL, P&L), total session net, account standing, and rule compliance status.

---

## Weekly Review

Nine narrative questions, nine yes/no performance questions, and three action-step fields.

### Narrative Questions (7 required)

**What trade setups/tactics worked this week? ***
**What didn't work this week? ***
**What observable patterns did you see in the market this week? ***
**What observable patterns did you see in your trades this week? ***
**What mistakes did you make this week? ***
**What recurring problems are you seeing week over week? ***
**What solutions are you implementing to fix those problems? ***

### Weekly Performance Questions (yes/no) *

- Did you trade your plan? *
- Did you follow your rules? *
- Did you overtrade? *
- Did you revenge trade? *
- Did you hold a position too long? *
- Did you exit too early? *
- Did you move your stop loss? *
- Did you add to a loser? *
- Did you take profit too early? *

### Action Steps

**This week my action steps are: ***
**What I want to work on / improve / get better at: ***
**How I plan to study the market this week: ***

---

## Formatting Rules

### SmartTraderAI Section Placement

- The 🤖 SmartTraderAI copy-paste section goes at the **END** of the document, before the attribution footer
- Section title is always prefixed with 🤖 (e.g., `## 🤖 SmartTraderAI Pre-Market Copy-Paste Fields`)
- A jump link appears at the **top** of the document: `[Jump to 🤖 SmartTraderAI Copy-Paste](#smarttraderai-copy-paste)`
- An HTML anchor is placed immediately before the section heading: `<a id="smarttraderai-copy-paste"></a>`

### Section Separators

- Use `---` (horizontal rules) to separate each question/field
- Do **NOT** use fenced code blocks (`` ``` ``) around answer content in the copy-paste section
- Answers are plain markdown paragraphs directly under the bold question heading

### Blockquote Usage

- Q5 ("Expectations for the day?") ends with a `>` blockquote containing links to the full pre-market summary and per-instrument analysis files
- The blockquote format is: `> Full pre-market summary:` followed by the URL on the next line

### Question Formatting

- Each question is rendered as a bold line: `**Question text?**`
- Answer content follows immediately as plain paragraphs (no code fences)
- Each question/answer pair is separated by `---`

### Attribution Footer

- Always ends with an italicized attribution line
- Format: `*🙏🏼 Fortuna — Wealth Warden | Claude Code CLI*`
- Followed by model/date line: `*Anthropic [model] | [Date]*`

---

## Pre-Market Document Section Order

Pre-market summary documents follow this exact section order:

1. **📋 Session Dashboard** — Table with date, session bias, primary instrument, confirming instruments, macro reference, key risk
2. **⚠️ Session Risk Alert** — Paragraph summarizing the primary risk for the session
3. **🌙 Overnight Updates / ETH Context** — Overnight price action, EMA state, volume profile, FVG observations
4. **🌤️ At the Open** — FCR framework, first candle expectations, scenario triggers
5. **🔗 SMT Divergence Scenarios** — Cross-instrument divergence analysis and scenario implications
6. **📅 Economic Calendar** — Scheduled releases with timing and instrument impact
7. **🎯 Priority Instruments** — Tiered instrument list (Tier 1 cleanest, Tier 2 wait, Tier 3 monitor)
8. **Per-Instrument Analysis** — Individual instrument sections (NQ, ES, YM, GC, CL, etc.)
9. **🧠 Behavioral Reminder** — Pre-session mental state check and discipline reminders
10. **⏱️ Live Session Updates** — Real-time updates added during the session (FCR execution, screenshots)
11. **🤖 SmartTraderAI** — Copy-paste fields (always last content section, before attribution)

---

*Last updated: March 2026*

