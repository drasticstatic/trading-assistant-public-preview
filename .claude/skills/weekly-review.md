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

1. Identify the week — the trading week runs **Sunday 18:00 ET → Sunday 18:00 ET** (futures reopen). Ask if not provided.
2. Find all individual trade reviews for the week in `smarttrader-ai/reviews/YYYY/MM-Mon/`
3. Read `smarttrader-ai/reviews/pattern_tracker.md` for cumulative P&L and pattern status
4. Gather all screenshots from `data/screenshots/` for the week dates
5. Note account status for each active eval account

## File Path

```
smarttrader-ai/exports/YYYY/MM-Mon/STB_export_YYYYMMDD_weekly-review.md
```
Where `YYYYMMDD` is the **closing Sunday** — the Sunday at 18:00 ET when the week ends and the next opens.
Regardless of when the review is produced, it is always dated and named by its closing Sunday.
Example: week of Apr 19–26 (Sun 18:00 → Sun 18:00) → `STB_export_20260426_weekly-review.md`
The file lives in the month folder of that closing Sunday.

## Required Structure — In This Order

### 1. Jump link at top
```
[Jump to SmartTraderAI copy-paste ↓](#smarttraderai-copy-paste)
```

### 2. `## 📊 Week at a Glance`
Trade table covering all 7 days (Sun through Sat, plus closing Sun — include no-fill days):
`| Date | Day | Instrument | Dir | Entry | Exit | P&L | Notes |`
Sun and Sat rows are typically empty for futures but included for crypto. Closing Sunday row covers the pre-18:00 window only.
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

### 7. Screenshot grid (HTML table)
**Grid format for weeklies** — multiple days make full-size impractical.
```html
<table><tr>
<td width="33%"><img src="../../../../data/screenshots/file.png" width="100%"><br><sub>Caption</sub></td>
</tr></table>
```
Column widths: 25% for 4-up, 33% for 3-up, 50% for pairs.
Path: `../../../../data/screenshots/` (same depth as reviews YYYY/MM-Mon/).

### 8. SmartTraderAI Response Stub

```markdown
<a id="smarttraderai-response"></a>

## 📊 SmartTraderAI's Response to Christopher's Weekly Submission

*[Stub — Christopher to submit the copy-paste fields to SmartTraderAI and return with the response for Fortuna to add here.]*
```

### 9. SmartTraderAI Weekly Copy-Paste Fields

Anchor: `<a id="smarttraderai-copy-paste"></a>` before `## 🤖 SmartTraderAI Weekly Copy-Paste Fields`

**Write naturally — never third-person about Christopher.** He is submitting this directly to SmartTraderAI. Avoid "Christopher did X." Use first-person where a pronoun is genuinely needed ("I canceled my SL", "my mistake was..."), but omit it where the subject is naturally implied ("Pre-placed limits at key levels and sat on hands" not "I pre-placed limits"). Read each sentence — if it sounds natural without a pronoun, drop it.

7 questions (exact wording from `specs/SMARTTRADERAI_EXPORT_SPEC.md` — do not paraphrase):
1. What trade setups/tactics worked this week?
2. What didn't work this week?
3. What observable patterns did you see in the market this week?
4. What observable patterns did you see in your trades this week?
5. What mistakes did you make this week?
6. What recurring problems are you seeing week over week?
7. What solutions are you implementing to fix those problems?

Then:
- **Weekly Performance Questions (yes/no):** 9-item checklist — Did you trade your plan? / Did you follow your rules? / Did you overtrade? / Did you revenge trade? / Did you hold a position too long? / Did you exit too early? / Did you move your stop loss? / Did you add to a loser? / Did you take profit too early?
- **This week my action steps are:** (numbered list)
- **What I want to work on / improve / get better at:** (one focused thing)
- **How I plan to study the market this week:** (specific study method)
- `> Full weekly review: [GitHub URL to the file]`
- Footer: `*Produced with 🙏🏼 Fortuna — Wealth Warden | Claude Code CLI*` + date line

`---` immediately after `## 🤖` heading and between every question. Never use code blocks in the copy-paste section.

## Key Principles

**Behavioral Arc is central** — The "What is resolved / What is the work / What coaches should see / Broader context" structure is the heart of the review. This is where Christopher synthesizes the week's trading psychology and growth.

**Grid format for screenshots** — Weeklies cover multiple days, so full-size images would be overwhelming. Use grid layout with 2-4 images per row.

**Link to individual reviews** — Don't duplicate content. The weekly review *references* individual trade reviews and adds the behavioral/weekly synthesis layer.

**SmartTraderAI fields are structured** — 7 narrative questions + 9 yes/no performance questions + 3 action steps. Keep them consistent and clearly separated. Full canonical wording: `specs/SMARTTRADERAI_EXPORT_SPEC.md`.

**Account status matters** — Prop firm eval accounts have phases, rules, and statuses. Track these explicitly so Christopher and coaches can see where each account stands.

**No-fill days still get coverage** — A day with no trades is still part of the week's story. Note what was observed, why no trades were taken, or what was learned.

## After Creating the Review

1. Confirm all individual trade review links resolve correctly
2. Update `smarttrader-ai/reviews/pattern_tracker.md` if not already done
3. Commit: "Add weekly review week of [Mon date]"

## Related Specs

- `specs/FORTUNA_WORKFLOW.md` — Section 5: weekly review structure, behavioral arc format, timing
- `specs/SMARTTRADERAI_EXPORT_SPEC.md` — 9-question weekly format + yes/no checklist + action steps + study plan (canonical templates)

## Quick Commands

```bash
# Compress screenshots before committing
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Stage and commit
git add smarttrader-ai/exports/ smarttrader-ai/reviews/ data/screenshots/ && \
  git commit -m "Add weekly review week of YYYYMMDD — [net P&L or 'no fills']"
git push origin main
```
