---
name: marp-deck
description: >
  Use to generate a Marp slide deck from an existing review, briefing, or skill document.
  TRIGGER when: "create a deck for", "make slides from", "marp this", "turn [doc] into slides",
  "shareable deck for [date/topic]". Do NOT use for: creating the underlying document itself
  (build that first with /daily-review, /weekly-review, /premarket, or /trade-review),
  or when the user just wants a formatted markdown export rather than slides.
---

# Skill: /marp-deck

Convert any trading-assistant document into a shareable Marp slide deck and generate the HTML output.

## Quick Command

```bash
# Generate HTML from any .marp.md file
marp .claude/skills/[name].marp.md -o .claude/skills/[name].marp.html

# Or for any file in the repo
marp [input.marp.md] -o [output.html]
```

Marp is installed at: `~/.nvm/versions/node/v22.12.0/bin/marp`

## Before Starting

1. Confirm the source document exists and is complete — build it first if not
2. Confirm the output location: `.claude/skills/` for skill decks, `smarttrader-ai/exports/` for coach-share decks
3. Read the source document to extract key content

## Step 1 — Identify Content Type

| Source | Deck Type | Key Slides |
|--------|-----------|-----------|
| Weekly review | Coach-share summary | Week overview, trade table, behavioral notes, key lessons, forward focus |
| Daily review | Session summary | Session P&L, trade log, key charts (described), behavioral notes, forward focus |
| Pre-market | Session briefing | Date/catalyst, bias, key levels per instrument, SMT scenarios, behavioral reminder |
| Skill doc | Skills guide | One concept per slide — use existing `create-skill.marp.md` as the template |
| Pattern tracker | Behavioral review | Active patterns, frequency, P&L impact, mechanical fix per pattern |

## Step 2 — Create the .marp.md File

Use this front-matter for all trading-assistant decks:

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

**Slide rules:**
- One idea per slide — if a slide needs scrolling, split it
- Tables: max 6-7 rows before splitting or summarizing
- Screenshots: describe in text on slides; link to source file for actual images
- Each slide starts with `---` as separator
- Lead with the most actionable content — coaches read quickly

## Step 3 — Naming Convention

```
[source-type]_[YYYYMMDD]_[topic].marp.md
[source-type]_[YYYYMMDD]_[topic].marp.html
```

Examples:
- `weekly-review_20260414.marp.md` → coach-share for week Apr 14
- `premarket_20260421.marp.md` → morning briefing deck
- `pattern-review_20260420.marp.md` → behavioral pattern deck for ZTH coach

**Location:**
- Coach-share decks: `smarttrader-ai/exports/YYYY/MM-Mon/`
- Skill decks: `.claude/skills/`

## Step 4 — Generate HTML

```bash
marp [path/to/file.marp.md] -o [path/to/output.html]
```

Verify the output opens in a browser and all tables render with dark backgrounds.

## After Completing

1. Verify HTML opened and renders correctly (spot-check table text visibility)
2. Commit both `.marp.md` and `.marp.html` together:
   `"Add [type] Marp deck [date/topic]"`
3. Share the `.html` file path or GitHub Pages URL with the coach

## Reference

- Template: `.claude/skills/create-skill.marp.md` — the canonical dark-theme template
- Framework: [makemyskill.com](https://makemyskill.com) by [Ruben Hassid](https://ruben.substack.com/p/claude-skills)
