---
name: monthly-audit
description: >
  Use to build an end-of-month trading audit as a polished Marp slide deck for coach sharing.
  TRIGGER when: "monthly audit", "end of month", "April audit", "month in review",
  "monthly review", "monthly summary", "audit for [month]", "month-end review",
  "close out [month]", "wrap up the month". Do NOT use for: weekly reviews (use /weekly-review),
  daily reviews (use /daily-review), or mid-month check-ins.
---

# Skill: /monthly-audit

Build a polished end-of-month audit as a Marp slide deck. Unlike daily and weekly reviews
(standard markdown), the monthly audit is always Marp — it's a coach-facing synthesis document
designed to be shared directly with STB, ZTH, and IT coaching groups as a complete picture of
the month's development.

## What This Skill Does

Produces a `.marp.md` + `.marp.html` deck covering:
- Month P&L and account progression
- Behavioral arc and pattern evolution
- Strategy/course progression across all three coaching groups
- Trade highlights (best, worst, most instructive)
- Forward focus and coaching questions for next month

The deck gives each coach immediate context on how Christopher's development is progressing
across all mentorships without requiring them to read individual trade reviews.

## Before Starting

1. **Confirm the month and year** — default to the just-completed month
2. **Read `smarttrader-ai/reviews/pattern_tracker.md`** — full month's P&L and pattern log
3. **List all trade reviews** for the month in `smarttrader-ai/reviews/YYYY/MM-Mon/`
4. **Check account status** via `get_account` (or from latest daily/weekly reviews)
5. **Read weekly reviews** for the month if they exist — the behavioral arc lives there
6. **Identify any coaching milestones** (new concept introduced, rule drilled, feedback received)

## File Paths

```
smarttrader-ai/exports/YYYY/MM-Mon/monthly-audit_YYYYMM.marp.md
smarttrader-ai/exports/YYYY/MM-Mon/monthly-audit_YYYYMM.marp.html
```

Example: `smarttrader-ai/exports/2026/04-Apr/monthly-audit_202604.marp.md`

## Required Slides — In This Order

### Slide 1 — Title

```markdown
# [Month] [YYYY] — Monthly Trading Audit
**[Primary Account] · [Primary Instruments]**

<div class="subtitle">[Month] [YYYY] · Fortuna × Christopher Wilson</div>
```

### Slide 2 — Month at a Glance

Key stats table:

```markdown
| Metric | Value |
|--------|-------|
| Net P&L | $X,XXX.XX |
| Trades | N fills |
| Win Rate | X/N (XX%) |
| Best Day | [date] +$XXX |
| Worst Day | [date] -$XXX |
```

### Slide 3 — Account Status

One row per active account — platform, current balance, floor, status:

```markdown
| Account | Platform | Balance | Floor | Status |
|---------|----------|---------|-------|--------|
| APEX-06 | Apex | $X,XXX | $X,XXX | [Progressing / Near payout / At risk] |
| TPT | TakeProfitTrader | $X,XXX | — | [Active / Reset / Inactive] |
```

### Slide 4 — Behavioral Arc

The month's behavioral journey — what moved, what's still active:

```markdown
**What improved this month:**
- [Pattern that showed concrete progress]

**Still active:**
- Pattern 8 (exit passivity) — [specific recent instance]
- Pattern 7 (SL modification) — [specific recent instance]

**What the coaches should see:**
> "[One sentence that captures the month's arc]"
```

### Slide 5 — STB Progression (Smart Trading Blueprint)

Strategy: FCR (First Candle Rule) at 9:30 AM open.

```markdown
## STB — FCR Mastery Progress

**Concepts being drilled:**
- [e.g., Displacement above FCR high = LONG only; color irrelevant]

**Case study highlight:**
- [Date] — [what the setup was, what happened]

**Progress vs. last month:**
- [Honest one-liner]

**Coaching focus for [next month]:**
- [Specific question or gap]
```

### Slide 6 — ZTH Progression (ZeroToHero)

Strategy: ZTH setups looked for all day long.

```markdown
## ZTH — Setup Mastery

**Current focus / rule being drilled:**
- [e.g., 2R rule — what it means, how it's being applied]

**What clicked this month:**
- [Specific moment of clarity]

**What still needs work:**
- [Honest assessment]

**Coaching focus for [next month]:**
- [Specific question or ask]
```

### Slide 7 — IT Progression (Inevitrade Foundation)

Strategy: Foundation EMAs, outside NY AM session.

```markdown
## IT — Foundation EMA Execution

**Session focus:** Outside NY AM (afternoons, overnight, pre-market)

**Strategies active this month:**
- [e.g., EMA gate + FVG displacement on MNQ]

**SMOG / TCL work:**
- [Any framework analysis done this month]

**Progress:**
- [Honest one-liner]

**Coaching focus for [next month]:**
- [Specific question or ask]
```

### Slide 8 — Trade Highlights

3 trades worth discussing — best setup, toughest moment, most instructive:

```markdown
| Label | Date | Instrument | P&L | Why It Matters |
|-------|------|-----------|-----|----------------|
| Best setup | [date] | [instr] | +$XXX | [One sentence] |
| Toughest moment | [date] | [instr] | -$XXX | [One sentence] |
| Most instructive | [date] | [instr] | $XX | [One sentence] |
```

### Slide 9 — Key Lessons

Top 3 takeaways for the month — concrete and behavioral, not generic:

```markdown
1. **[Lesson title]** — [One sentence what was learned]
2. **[Lesson title]** — [One sentence what was learned]
3. **[Lesson title]** — [One sentence what was learned]
```

### Slide 10 — Forward Focus

Goals and intentions for the next month — one per coaching group:

```markdown
**STB:** [Specific FCR execution goal]
**ZTH:** [Specific rule or setup to master]
**IT:** [Specific EMA/session focus]

**Behavioral:** [One pattern to reduce or eliminate]
**Account:** [Milestone to hit by end of [next month]]
```

### Slide 11 — Questions for Coaches

Open coaching asks — not rhetorical, these are real questions to bring to sessions:

```markdown
**For STB:**
- [Specific question about FCR / displacement]

**For ZTH:**
- [Specific question about setup recognition or rules]

**For IT:**
- [Specific question about EMA framework or outside-NY execution]
```

## Front-Matter

Use the standard trading-assistant dark theme from `/marp-deck`:

```markdown
---
marp: true
theme: default
paginate: true
backgroundColor: '#1a1a2e'
color: '#e8e8f0'
style: |
  h1 { color: #7eb8f7; border-bottom: 2px solid #4a90d9; padding-bottom: 12px; }
  h2 { color: #a8d8a8; margin-bottom: 0.4em; }
  h3 { color: #f0c060; }
  strong { color: #f7c97e; }
  code { background: #2a2a4a; color: #c8e8c8; padding: 2px 6px; border-radius: 3px; }
  pre { background: #1e1e3a; border: 1px solid #4a4a7a; border-radius: 6px; padding: 1em; }
  table { border-collapse: collapse; width: 100%; font-size: 0.85em; }
  th { background: #2a3a5a; color: #a8d8f8; padding: 6px 12px; }
  td { border: 1px solid #3a3a5a; padding: 5px 12px; background: #1e1e3a; color: #e8e8f0; }
  blockquote { border-left: 4px solid #4a90d9; padding-left: 1em; color: #b0c0d8; font-style: italic; }
  .subtitle { color: #8899aa; font-size: 0.8em; margin-top: 0.5em; }
---
```

## After Creating

1. Generate HTML:
   ```bash
   marp smarttrader-ai/exports/YYYY/MM-Mon/monthly-audit_YYYYMM.marp.md \
        -o smarttrader-ai/exports/YYYY/MM-Mon/monthly-audit_YYYYMM.marp.html
   ```
2. Commit both files
3. Share the HTML file directly with coaches (not a GitHub Pages link — exports/ is private)

## Quick Commands

```bash
# Generate HTML
marp smarttrader-ai/exports/YYYY/MM-Mon/monthly-audit_YYYYMM.marp.md \
     -o smarttrader-ai/exports/YYYY/MM-Mon/monthly-audit_YYYYMM.marp.html

# Compress any screenshots before committing
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Stage and commit
git add smarttrader-ai/exports/ data/screenshots/ && \
  git commit -m "Add monthly audit [Month YYYY] — [net P&L]"
git push origin main
```
