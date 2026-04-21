---
name: weekly-review
description: >
  Use when Christopher asks to create a weekly review, end-of-week summary, or STB weekly export.
  TRIGGER when: "create weekly review", "write up the week", "weekly review for week of [date]",
  "STB weekly export", "week ending [date]", "weekly wrap", "end of week", "weekly summary",
  "week in review", "wrap up the week", "export for STB", "SmartTraderAI weekly",
  "trading week summary", or mentions assembling a multi-day trading summary. Do NOT use for:
  individual trade reviews, daily reviews, premarket summaries, mid-week check-ins, or single
  trade analysis.
---

# Skill: /weekly-review

Build a complete weekly review following FORTUNA_WORKFLOW.md Section 5.

## Before Starting

1. Identify the week (Mon–Fri dates) — ask if not provided
2. Find all individual trade reviews for the week in `smarttrader-ai/reviews/YYYY/MM-Mon/`
3. Read `smarttrader-ai/reviews/pattern_tracker.md` for cumulative P&L and pattern status
4. Gather all screenshots from `data/screenshots/` for the week dates
5. Note account status for each active eval account

## File Path

```
smarttrader-ai/exports/YYYY/MM-Mon/STB_export_YYYYMMDD_weekly-review.md
```
Where `YYYYMMDD` is the **Monday** of the week.

## Required Structure — In This Order

### 1. Jump link at top
```
[Jump to SmartTraderAI copy-paste ↓](#smarttraderai-copy-paste)
```

### 2. `## 📊 Week at a Glance`
Trade table covering all 5 days (include no-fill days):
`| Date | Instrument | Dir | Entry | Exit | P&L | Notes |`
Week net P&L below table.

### 3. `## 🏦 Account Status`
Table: Account | Platform | Status | Notes — for every active eval account.

### 4. `## 📈 Behavioral Arc — The Week in One View`
Code block showing the recovery arc for the week. Then:
- **What is resolved** — patterns that improved or were corrected
- **What is the work** — active patterns still present
- **What the coaches should see** — key coaching insight from the week
- **Broader context** — life context that shaped trading decisions

### 5. `## 📎 Full Reviews + Pattern Tracker`
Links to pattern tracker and every individual trade review for the week:
```
- [pattern_tracker.md](../../reviews/pattern_tracker.md)
- [review_YYYYMMDD_INSTRUMENT_NNN.md](../../reviews/YYYY/MM-Mon/review_file.md) — one-line description
```

### 6. Day-by-day sections
One `##` heading per trading day, e.g. `## Apr 17 — "Trade Title"`.
Include: what happened, setups seen/missed, key decisions, emotional state.
No-fill days still get a brief note.

### 7. `## 📊 SmartTraderAI's Response to Christopher's Weekly Submission`
Stub — leave placeholder: `*[To be added after Christopher submits and receives SmartTraderAI response]*`

### 8. Screenshot grid (HTML table)
**Grid format for weeklies** — multiple days make full-size impractical.
```html
<table><tr>
<td width="33%"><img src="../../../../data/screenshots/file.png" width="100%"><br><sub>Caption</sub></td>
</tr></table>
```
Column widths: 25% for 4-up, 33% for 3-up, 50% for pairs.
Path: `../../../../data/screenshots/` (same depth as reviews YYYY/MM-Mon/).

### 9. SmartTraderAI Weekly Copy-Paste Fields

Anchor: `<a id="smarttraderai-copy-paste"></a>` before `## 🤖 SmartTraderAI Weekly Copy-Paste Fields`

9 Questions:
1. What did I trade this week and what were my results?
2. What setups did I honor and which did I skip?
3. What patterns repeated this week?
4. What did I learn this week?
5. Did I follow my rules?
6. Trade management notes
7. Emotional and psychological notes
8. What I want to work on
9. How I plan to study

Then:
- **Did I respect my stop loss?** Yes/No + detail
- **Did I respect my profit target?** Yes/No + detail
- **Action steps for next week:** (3–5 numbered items)
- **What I want to work on:** (one focused thing)
- **How I plan to study:** (specific study method)
- **GitHub:** (link to relevant public resource or pir-devine-news if community work was significant)

## Key Principles

**Behavioral Arc is central** — The "What is resolved / What is the work / What coaches should see / Broader context" structure is the heart of the review. This is where Christopher synthesizes the week's trading psychology and growth.

**Grid format for screenshots** — Weeklies cover multiple days, so full-size images would be overwhelming. Use grid layout with 2-4 images per row.

**Link to individual reviews** — Don't duplicate content. The weekly review *references* individual trade reviews and adds the behavioral/weekly synthesis layer.

**SmartTraderAI fields are structured** — These 9 questions + follow-ups are Christopher's submission format. Keep them consistent and clearly separated from the rest of the review.

**Account status matters** — Prop firm eval accounts have phases, rules, and statuses. Track these explicitly so Christopher and coaches can see where each account stands.

**No-fill days still get coverage** — A day with no trades is still part of the week's story. Note what was observed, why no trades were taken, or what was learned.

## After Creating the Review

1. Confirm all individual trade review links resolve correctly
2. Update `smarttrader-ai/reviews/pattern_tracker.md` if not already done
3. Commit: "Add weekly review week of [Mon date]"

## Quick Commands

```bash
# Compress screenshots before committing
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Stage and commit
git add smarttrader-ai/exports/ smarttrader-ai/reviews/ data/screenshots/ && \
  git commit -m "Add weekly review week of YYYYMMDD — [net P&L or 'no fills']"
git push origin main
```
