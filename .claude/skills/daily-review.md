---
name: daily-review
description: >
  Use when Christopher asks to create a daily review, session review, or STB daily export for
  a completed trading session. TRIGGER when: "daily review for [date]", "session review",
  "STB daily export", "write up today's session", "daily wrap", "end of session review",
  "create session summary", "trading session writeup", "post-market review", "end-of-day review".
  Do NOT use for: individual trade reviews (single trade), weekly reviews, premarket summaries,
  or when Christopher asks about a specific trade only rather than the full session.
---

# Skill: /daily-review

Build a complete daily review following FORTUNA_WORKFLOW.md Section 4.

## Before Starting

1. Confirm the session date
2. Find all individual trade reviews for the day in `smarttrader-ai/reviews/YYYY/MM-Mon/`
3. Read the premarket summary if it exists (link it in Session Narrative)
4. Gather all screenshots from `data/screenshots/` for the session date
5. Check `data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv` for trade data

If any data is missing, note it and proceed with what's available. On no-trade days, adjust sections accordingly.

## File Path

```
smarttrader-ai/exports/YYYY/MM-Mon/STB_export_YYYYMMDD_daily-review.md
```

## Required Sections — All 9, In This Order

### 1. Jump link at top
```
[Jump to 🤖 SmartTraderAI Copy-Paste ↓](#smarttraderai-copy-paste)
```

### 2. `## 📋 Session Summary`
Key table: Date | Account | Session P&L | Instruments | Trade Count | Account Status

### 3. `## 📖 Session Narrative`
Prose session arc. Pre-market link **here only** — always use the public preview GitHub URL so coaches can click through from the blob view:
```
[Pre-market summary →](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/smarttrader-ai/analysis/premarket/YYYY/MM-Mon/premarket_YYYYMMDD_summary.md)
```
If no premarket file exists: `No formal pre-market plan on file for this session.`

### 4. `## 📊 Trade Log`
Trade table: # | Instrument | Dir | Entry | Exit | P&L | Grade | Review Link
Or `## 📊 Trade Summary` + `## 📋 Trade Details` if two levels of detail are needed.
On no-trade days: `No fills today. [Brief reason: infrastructure work, market conditions, etc.]`

### 5. `## 📸 Key Charts`
Session screenshots. Full-size for daily reviews. Grid only if excessive screenshots.
Omit on no-trade/infra-only days.

### 6. `## 🧠 Behavioral Notes`
Behavioral analysis, execution grades, pattern observations.

### 7. `## 🔑 Key Lessons`
Numbered learning points from the session.

### 8. `## 🤖 SmartTraderAI Post-Market Copy-Paste Fields`

Anchor: `<a id="smarttraderai-copy-paste"></a>` on the line before the `## 🤖` heading.
`---` immediately after the `## 🤖` heading and between every question — always.

**3 Questions (verbatim — exact bold wording):**
- **What actually happened?**
- **What did you learn?**
- **What were your results for the day?**

In Q3 ("What were your results"), end with:
```
> Full daily-review: [public-preview URL to this file]
> Full individual trade reviews:
> - [review_YYYYMMDD_INSTRUMENT_NNN.md](public-preview URL) — one-line description
```

### 9. `## 🎯 Forward Focus`
1–3 priorities for the next session. No links here. Always the final section.

### Footer
Immediately after `## 🎯 Forward Focus` content:
```
---

*Daily Review — Fortuna · [Date]*
```

## Screenshot Path

Full-size format:
```
**HH:MM ET — Description**
![Alt text](../../../../data/screenshots/filename.png)
```
URL-encode spaces: `%20`. Path: `../../../../data/screenshots/` (4 levels up from `exports/YYYY/MM-Mon/`).

## Common Scenarios

**No-Trade Day:**
- Session Summary: Note "0 fills"
- Trade Log: Replace with "No fills today. [Reason]"
- Key Charts: Omit entirely
- Behavioral Notes: Focus on decision to stay out
- Forward Focus: What conditions would trigger entry next session

**Missing Premarket Summary:**
In Session Narrative, note inline:
```
No formal premarket plan — impromptu session based on [context].
```

**Multiple Instruments:**
In Trade Log, group by instrument or chronologically — whichever tells the clearer story.

## Quality Checklist

- [ ] All 9 sections present and in order (+ footer)
- [ ] Jump link at top works
- [ ] Premarket link in Session Narrative (or noted as missing)
- [ ] All individual trade review links work
- [ ] Screenshots use correct relative path (4 levels up, spaces URL-encoded)
- [ ] SmartTraderAI anchor ID is correct
- [ ] Q3 ends with full review links
- [ ] Forward Focus is last section with no links
- [ ] Commit message follows format

## After Creating

1. Verify all individual trade review links work
2. Add premarket URL if not already in Session Narrative
3. Commit: "Add daily review [date] — [net P&L or 'no fills']"

## Quick Commands

```bash
# Compress screenshots before committing
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Stage and commit
git add smarttrader-ai/exports/ smarttrader-ai/reviews/ data/screenshots/ && \
  git commit -m "Add daily review YYYYMMDD — [net P&L or 'no fills']"
git push origin main
```
