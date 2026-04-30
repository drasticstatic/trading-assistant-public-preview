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

Build a complete weekly review merging the full section depth from both the template and the
Mar 23–27 review — the gold-standard reference at `smarttrader-ai/exports/2026/03-Mar/STB_export_20260327_weekly-review.md`.

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
Where `YYYYMMDD` is the **closing Sunday**

## Document Header

```
# 📅 Weekly Review — Week of [Mon D–Sun D, YYYY]
### [Brief arc description] | [Net P&L or "No Fills"]

[Jump links]

---
```

**Rules:**
- Emoji: always 📅
- Date range: Mon–Sun of the trading week (e.g., "Apr 27–May 3, 2026")
- Subtitle: arc-focused — accounts active, defining theme, net P&L
- No "Fortuna — Wealth Warden", "STB SmartTraderAI Export", "Prepared by: Fortuna...", or similar in header — all redundant
- Jump links go AFTER the subtitle, never before the title

**Example:**
```
# 📅 Weekly Review — Week of Apr 27–May 3, 2026
### TPT reset-3 deadline week · ZTH Bracket method | +$391

``` — the Sunday at 18:00 ET when the week ends and the next opens.
Regardless of when the review is produced, it is always dated and named by its closing Sunday.
Example: week of Apr 19–26 (Sun 18:00 → Sun 18:00) → `STB_export_20260426_weekly-review.md`
The file lives in the month folder of that closing Sunday.

## Required Structure — In This Order

### 1. Jump links at top

```
[Jump to 🕊️ Spiritual Lens ↓](#spiritual-lens) · [Jump to 📊 SmartTraderAI Response ↓](#smarttraderai-response) · [Jump to 🤖 Final STB Submission ↓](#smarttraderai-copy-paste)
```

### 2. `## 📊 Week at a Glance`

Trade table covering all 7 days (Sun through Sat — include no-fill days). Add a **Review** column with a relative link to each individual trade review. Use `—` for no-fill days.

```markdown
| Day | Session | Trades | Instrument | P&L | Account | Review |
|-----|---------|--------|-----------|-----|---------|--------|
| Mon Apr 27 | RTH | 1 | MGC Long | +$22 | TPT | [001](../../../reviews/2026/04-Apr/review_20260427_MGC-TPT_001.md) |
| Tue Apr 28 | RTH | 1 | MGC Long | +$14 | TPT | [001](../../../reviews/2026/04-Apr/review_20260428_MGC-TPT_001.md) |
| Wed Apr 29 | RTH | 3 | RTY · YM · MCL | +$355 | TPT | [001](../../../reviews/2026/04-Apr/review_20260429_RTY-TPT_001.md) · [002](../../../reviews/2026/04-Apr/review_20260429_YM-TPT_002.md) · [003](../../../reviews/2026/04-Apr/review_20260429_MCL-TPT_003.md) |
| Thu Apr 30 | Monitor | 0 | — | $0 | — | — |
| **WEEK NET** | | | | **+$391** | | |
```

**Correct relative path for review links:**
`../../../reviews/YYYY/MM-Mon/review_YYYYMMDD_INSTRUMENT-PLATFORM_NNN.md`
(3 levels up from `exports/YYYY/MM-Mon/` reaches `smarttrader-ai/`, then descend into `reviews/`)

Week net P&L as a totals row. Closing Sunday pre-18:00 can be included if relevant.

Also include an **Account Status** table immediately after the trade table:

```markdown
| Account | Status at Week End | Notes |
|---------|-------------------|-------|
| APEX-484839-06 (100K) | ✅ Active | Min days met · profit target in progress |
| TPT reset-3 50K | ⚠️ Active | 3/5 days · +$391 net · deadline May 1 |
```

### 3. `## 📈 Week Arc — The Full Picture`

2–4 paragraph narrative arc of the week. Not a trade list — a story. Capture:
- The defining moment(s) — what this week will be remembered for
- The high and the low, and what each reveals
- How the week connects to the recovery arc
- Any life context that shaped the session (without dwelling)

This section uses the language of a coach writing about a student, not a journalist reporting facts.

### 4. `## 📊 Trade-by-Trade Summary`

One `###` heading per filled trade (or per trading day if multiple fills same day). Format:
```
### Mon Apr 27 — MGC Long · TPT · +$22 ✅
```

For each: what happened, setup quality, behavioral notes, and inline link to the full review:
```
Full review: [review_20260427_MGC-TPT_001.md](../../../reviews/2026/04-Apr/review_20260427_MGC-TPT_001.md)
```

No-fill days still get a brief note (what was watched, why no trade, what was learned).

### 5. `## 🧠 Behavioral Analysis — Week of [dates]`

Two subsections:

**### What held**
Patterns that improved, rules followed, disciplines maintained. Be specific — cite the trade.

**### What failed**
Active patterns, rule violations, behavioral regressions. Be direct — one clear paragraph per issue.

Optional third subsection if there's a cross-pattern insight:
**### Convergence / Compound Failure** — when multiple patterns operated in the same trade.

### 6. `## 📎 Full Reviews + Pattern Tracker`

Navigation links for quick reference (coaches and future Fortuna sessions can jump directly):

```markdown
- [pattern_tracker.md](../../../reviews/pattern_tracker.md)
- [review_YYYYMMDD_INSTRUMENT-PLATFORM_NNN.md](../../../reviews/YYYY/MM-Mon/review_file.md) — one-line description
```

**Path:** `../../../reviews/...` (3 levels up from `exports/YYYY/MM-Mon/`)

### 7. `## 🕊️ Spiritual Lens`

Anchor: `<a id="spiritual-lens"></a>` on the line before the heading.

Personal reflection — the human dimension behind the week's trading. Christopher writes or contributes this. It can be:
- A direct quote from his session journal
- A reflection on what the week meant outside the P&L
- Connection between trading discipline and broader life principles
- What he is grateful for or learning to trust

If Christopher hasn't provided material, include a brief placeholder:
*[Spiritual Lens — Christopher to complete from session journal.]*

This section is never omitted — even on a mechanical week, the human context matters to coaches and to the arc.

### 8. `## 📊 Running Statistics — Updated Through [date]`

Cumulative stats table updated through the last trade of the week:

```markdown
| Metric | Value |
|--------|-------|
| Total trade entries | N |
| Winners | N |
| Losers | N |
| Win rate (futures) | % |
| Avg winner | $N |
| Avg loser | -$N |
| Total P&L (futures) | $N |
| Total P&L (crypto) | $N USDT |
| SL respected | N/N |
| Stops moved/canceled | N |
| Eval accounts | N blown · N active |
| Active patterns | Pattern 7 · Pattern 8 · [etc.] |
| Best trade (week) | Instrument +$N (date) |
| Worst trade (week) | Instrument -$N (date) |
```

Pull from `pattern_tracker.md` — do not fabricate numbers. If a stat is uncertain, note it.

### 9. Screenshot grid (HTML table)

**Grid format for weeklies** — multiple days make full-size impractical.

```html
<table><tr>
<td width="33%"><img src="../../../../data/screenshots/file.png" width="100%"><br><sub>Caption</sub></td>
<td width="33%"><img src="../../../../data/screenshots/file.png" width="100%"><br><sub>Caption</sub></td>
<td width="33%"><img src="../../../../data/screenshots/file.png" width="100%"><br><sub>Caption</sub></td>
</tr></table>
```

Column widths: 25% for 4-up, 33% for 3-up, 50% for pairs.
Path from `exports/YYYY/MM-Mon/`: `../../../../data/screenshots/` (same as reviews at same depth).
Omit on no-trade / infra-only weeks.

### 10. SmartTraderAI Response

Anchor and heading:
```markdown
<a id="smarttraderai-response"></a>

## 📊 SmartTraderAI's Response to Christopher's Weekly Submission
```

If STB has responded: paste the full response here, preserving its section structure.
If not yet: use the stub:
```
*[Stub — Christopher to submit the copy-paste fields to SmartTraderAI and return with the response for Fortuna to add here.]*
```

### 11. SmartTraderAI Weekly Copy-Paste Fields

Anchor: `<a id="smarttraderai-copy-paste"></a>` before `## 🤖 SmartTraderAI Weekly Copy-Paste Fields`

`---` immediately after `## 🤖` heading and between every question. Never use code blocks in the copy-paste section.

**Write naturally — never third-person about Christopher.** He is submitting this directly to SmartTraderAI. Avoid "Christopher did X." Use first-person where a pronoun is genuinely needed ("I canceled my SL", "my mistake was..."), but omit it where the subject is naturally implied. Read each sentence — if it sounds natural without a pronoun, drop it.

**7 narrative questions** (exact wording from `specs/SMARTTRADERAI_EXPORT_SPEC.md` — do not paraphrase):
1. What trade setups/tactics worked this week?
2. What didn't work this week?
3. What observable patterns did you see in the market this week?
4. What observable patterns did you see in your trades this week?
5. What mistakes did you make this week?
6. What recurring problems are you seeing week over week?
7. What solutions are you implementing to fix those problems?

Then:
- **Weekly Performance Questions (yes/no):** 9-item checklist:
  Did you trade your plan? / Did you follow your rules? / Did you overtrade? / Did you revenge trade? / Did you hold a position too long? / Did you exit too early? / Did you move your stop loss? / Did you add to a loser? / Did you take profit too early?
- **This week my action steps are:** (numbered list — specific, measurable, time-bound where possible)
- **What I want to work on / improve / get better at:** (one focused thing — the single most important behavioral shift)
- **How I plan to study the market this week:** (specific study method, not generic)
- `> Full weekly review: [GitHub URL to the public preview file]`
- Footer: `*Produced with 🙏🏼 Fortuna — Wealth Warden | Claude Code CLI*` + date line

Full canonical wording for all questions: `specs/SMARTTRADERAI_EXPORT_SPEC.md`

## Key Principles

**Depth over brevity.** The Mar 27 weekly review is the gold standard — it has 11 sections and each one earns its place. Do not abbreviate sections to save space. A thorough brief is preferred over a fast one (this applies to weeklies as much as morning briefs).

**Merge, never remove.** If a later review has a section the template didn't, the template grows — it does not stay thin.

**Review links belong everywhere they're useful.** Week at a Glance table (Review column), Trade-by-Trade inline links, AND the dedicated `## 📎 Full Reviews` section — all three serve different navigation needs.

**Behavioral Arc is central** — Sections 3–5 (Week Arc, Trade-by-Trade, Behavioral Analysis) together tell the story coaches need. The stats and copy-paste fields are the formal submission layer on top of that story.

**Spiritual Lens is never optional.** Even a stub is better than omitting it. The human dimension is part of the review.

**Account status belongs in Week at a Glance** — immediately after the trade table so coaches see account standing before reading any narrative.

**No-fill days still get coverage** — A day with no trades is still part of the week's story. Note what was observed, why no trades were taken, or what was learned.

## After Creating the Review

1. Confirm all individual trade review relative links resolve correctly (`../../../reviews/...`)
2. Update `smarttrader-ai/reviews/pattern_tracker.md` if not already done
3. Commit: `"Add weekly review week of [Mon date] — [net P&L or 'no fills']"`
4. Push to origin main

## Related Specs

- `specs/SMARTTRADERAI_EXPORT_SPEC.md` — 7 narrative questions + yes/no checklist + action steps + study plan (canonical templates)
- `specs/FORTUNA_WORKFLOW.md` — Section 5: weekly review structure, behavioral arc format, timing

## Quick Commands

```bash
# Compress screenshots before committing
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Stage and commit
git add smarttrader-ai/exports/ smarttrader-ai/reviews/ data/screenshots/ && \
  git commit -m "Add weekly review week of YYYYMMDD — [net P&L or 'no fills']"
git push origin main
```
