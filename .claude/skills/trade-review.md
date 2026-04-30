---
name: trade-review
description: >
  Use when Christopher asks to create, write, build, fix, or redo an individual trade review
  for a completed futures or crypto trade. TRIGGER when: "create review for [date/instrument]",
  "write up the [instrument] trade", "trade review", "review for today's trade", "review_YYYYMMDD",
  "document the trade", "build the review". Do NOT use for: weekly reviews, daily reviews,
  premarket summaries, general trade analysis questions, pattern discussion without a specific
  completed trade to document, or pattern tracker updates without building a full review.
---

# Skill: /trade-review

Build complete, publication-ready individual trade reviews following Christopher's Fortuna workflow.
Each review documents a single completed trade with full context, data, screenshots, and actionable
coaching insights.

## What This Skill Does

Transforms raw trade data (CSVs, screenshots, notes) into a structured 9-section markdown review that:
- Reconstructs what happened and why
- Presents exact execution data from broker exports
- Embeds full-size screenshots with timeline context
- Provides coaching-focused analysis tied to behavioral patterns
- Updates pattern tracker and weekly review files
- Generates GitHub-ready public preview links

## Before Starting

1. Identify the trade date, instrument, and account (ask if not provided)
2. Read `data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv` — use for P&L, Zella score, emotions, entry/exit times
3. Read `data/imports/YYYY/MM-Mon/tradovate_orders_YYYYMMDD.csv` — use for exact fill prices, order types
4. List all screenshots in `data/screenshots/` matching the trade date — embed every one
5. Never estimate prices from notes — always cross-reference CSV values

## File Naming

```
smarttrader-ai/reviews/YYYY/MM-Mon/review_YYYYMMDD_[INSTRUMENT]-[PLATFORM]_[NNN].md
```
- `[INSTRUMENT]` = M2K, MNQ, ES, CL, SOLUSDT, etc.
- `[PLATFORM]` = APEX, APEX06, TPT, BTCC — include when disambiguation matters
- `[NNN]` = trade number for that calendar day (001, 002, 003...) — not instrument-specific
- Example: `review_20260417_M2K-APEX_001.md`

## Required Sections — All 9, In This Order

### 1. `## ⚡ What Happened in One Paragraph`
One dense paragraph covering: setup context, entry mechanics, what the trade did, how it ended.
Incorporate Christopher's post-session note about what he was thinking/expecting.

### 2. `## 📊 Trade Data`
Table with exact CSV values. Required rows:
Account, Platform, Instrument, Contract, Direction, Entry Price, Exit Price, Qty, Entry Time,
Exit Time, Duration, Order Set (if overnight limit), Venue, TP Set/Result, SL Set/Result,
MFE (price + points + $), MAE (price + points + $), Gross P&L, Net P&L, Realized R:R,
Zella Score, Rating, Emotionally Stable.

### 3. `## 📋 Order Execution`
Table from tradovate_orders CSV. Columns: Time (ET) | Order | Instrument | Price | Status.
List every order: entry, TP, SL, any additional orders, exit. Note if TP/SL were canceled, moved, or untouched.

### 4. `## 📖 Session Narrative`
Prose summary: what was happening in the broader session, why the setup made sense, what unfolded,
the emotional environment. Include broader context (news, other instruments, week context).
Link to premarket file if it exists: `> Pre-market plan: [public-preview URL]`

### 5. `## 📸 Screenshot Timeline`
**Full-size always** for individual reviews. Format:
```
**HH:MM ET — Description**
![Alt text](../../../../data/screenshots/FILENAME.png)
```
- Embed ALL screenshots Christopher added for this session
- URL-encode spaces: `%20` (e.g. `Screenshot%202026-04-17%20at%2015.33.22.png`)
- Path: `../../../../data/screenshots/` (4 levels up from `reviews/YYYY/MM-Mon/`)
- For unreferenced screenshots that belong to the session, add them here

### 6. `## 📝 Notes for Coaches + SmartTraderAI`
Preceded by `<a id="notes-for-coaches"></a>` on the line immediately before the heading.
Narrative analysis for coaches. Include:
- Verbatim Christopher quotes from TradeZella "Notes for Coaches" field (in blockquote)
- Analysis of what the setup intended vs what happened
- One concrete coaching recommendation per issue identified
- No copy-paste format here — this is narrative analysis only

### 7. `## 🧠 Behavioral Notes`
- Named behavioral patterns from TradeZella (emotions, mistakes, stability rating)
- Pattern Tracker status table: Pattern 7, 8, 9, any emerging patterns
- What went right (always include at least one)

### 8. `## 🔁 Pattern Tracker`
- One line: "Trade [file_id] logged." — use filename convention, e.g. `Trade 20260421_MCL-APEX_001 logged.`
- Blockquote: `> See full running progress tracker (all sessions, behavioral arc, compliance scores, statistical summary): [../../pattern_tracker.md](../../pattern_tracker.md)`
- Brief note if a pattern evolved or a new one emerged

### 9. `## 🎯 Forward Focus`
1–3 numbered, specific, actionable priorities for the next session.
No links here. Final section before footer.

## Required Header Elements

```
# 🔍 Trade Review — [INSTRUMENT] [DIRECTION] · [ACCOUNT ABBREVIATED] · [Weekday, Mon D, YYYY]
### [file_id] · [Net P&L] · [Key note 1]
### [Key note 2 · Key note 3] (second line only when there is genuinely more to surface)

[Jump to 📝 Notes for Coaches ↓](#notes-for-coaches)

---
```

**Rules:**
- Emoji: always 🔍
- Account abbreviated: "TPT 50K", "APEX-06", "BTCC" — never the full account ID; abbreviated avoids confusion with trade direction
- Weekday abbreviated: "Wed, Apr 29, 2026" — not "April 29, 2026"
- Subtitle line 1: `[file_id]` + P&L + primary note (pattern tag, Zella score, or execution grade)
- Subtitle line 2 (optional): additional notes — use when a second behavioral dimension or key context genuinely adds value
- No "Fortuna — Wealth Warden", "Christopher Wilson", or "Claude Code CLI" in header — all appear in the footer
- `[file_id]` = `YYYYMMDD_INSTRUMENT-PLATFORM_NNN` — no global sequential number

**Examples:**
```
# 🔍 Trade Review — RTY Short · TPT 50K · Wed, Apr 29, 2026
### 20260429_RTY-TPT_001 · +$1,540 · Active exit · Zella 85.56
### Pattern 8 improvement — first self-directed exit of the arc

# 🔍 Trade Review — MNQ Long · APEX-06 · Tue, Mar 10, 2026
### 20260310_MNQ-APEX_001 · -$108.00 · Pattern 7 fix confirmed · Zella -21.69
```

## Required Footer

After `## 🎯 Forward Focus` content, end with:
```
---

> See full trade review: https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/smarttrader-ai/reviews/YYYY/MM-Mon/review_YYYYMMDD_INSTRUMENT-PLATFORM_NNN.md

---

*Produced with 🙏🏼 Fortuna — Wealth Warden | Claude Code CLI*
*Trade Review — [INSTRUMENT] [DIRECTION] · [Month DD, YYYY] · [file_id]*
```
Where `[file_id]` = `YYYYMMDD_INSTRUMENT-PLATFORM_NNN` (matches the filename without `review_` and `.md`).

## Data Source Priorities

1. **TradeZella CSV** (`tradezella_YYYYMMDD.csv`):
   - P&L (gross and net), Zella score, rating, emotional stability
   - Entry/exit times (approximate), MFE/MAE (if available)
   - Notes for Coaches field

2. **Tradovate Orders CSV** (`tradovate_orders_YYYYMMDD.csv`):
   - Exact fill prices, order types (Market, Limit, Stop)
   - Precise timestamps (ET), order status (Filled, Canceled, Working)

3. **Screenshots** — visual confirmation of setup, context for decision-making, timeline reconstruction

4. **Christopher's verbal/written notes** — intent, expectations, emotional state, session context

## Common Patterns

**Overnight limit orders**: Note in Trade Data table under "Order Set". Explain in Session Narrative
why limit was chosen and what happened at open.

**Multiple entries**: Treat as single trade if same setup/thesis. Note in Order Execution table.
Discuss in Notes for Coaches if second entry was justified.

**Partial fills**: Show in Order Execution table. Calculate P&L based on actual filled quantity.

**Moved stops/targets**: Show original and modified orders in Order Execution table. Analyze in
Notes for Coaches whether move was disciplined or emotional.

## Quality Checklist

- [ ] All 9 sections present and in order
- [ ] Trade Data table has exact CSV values (no estimates)
- [ ] Order Execution table matches Tradovate CSV exactly
- [ ] All session screenshots embedded full-size
- [ ] Screenshot paths URL-encoded and correct (4 levels up)
- [ ] Notes for Coaches has anchor tag on line before heading
- [ ] Verbatim TradeZella quotes in blockquotes
- [ ] Pattern Tracker status table included
- [ ] Forward Focus is specific and actionable
- [ ] Header jump link present
- [ ] Footer GitHub link present with correct path
- [ ] File named correctly: `review_YYYYMMDD_INSTRUMENT-PLATFORM_NNN.md`

## Key Principles

**Accuracy over speed** — Cross-reference CSVs. Never estimate.

**Context over data** — Numbers tell what happened. Narrative tells why.

**Coaching-focused** — Every insight should help Christopher improve.

**Full transparency** — Show all orders, including mistakes and canceled stops.

**Behavioral patterns first** — Technical analysis is secondary to pattern recognition.

**Actionable forward focus** — Specific next steps, not vague advice.

## After Creating the Review

1. Run `pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png` if new screenshots were added
2. **Run the STB TradeZella Automator** — push `tradezella_YYYYMMDD.csv` to the STB Google Sheet:
   ```bash
   bash ~/TradeZella_STB/automator_drop_handler.sh \
     ~/ClaudeCodeCLI/trading-assistant/data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv
   ```
   No terminal output = Sheets mode (success notification goes to macOS notification center). Check the STB Google Sheet or macOS notifications to confirm the row landed. Spec: `specs/tradezella-automater.spec.md`
3. Update `smarttrader-ai/reviews/pattern_tracker.md` — add trade to log table, update Running P&L, update cumulative
4. Update weekly review file if it already exists — add trade to Week at a Glance table
5. Commit with message: "Add trade review #NNN — [INSTRUMENT] [DIR] [DATE] · [P&L]"

## Related Specs

- `specs/FORTUNA_WORKFLOW.md` — canonical session pipeline; trade review steps live in the post-session section
- `specs/tradezella-automater.spec.md` — full TradeZella → STB pipeline architecture; automator_drop_handler.sh is the current implementation
- `specs/SMARTTRADERAI_EXPORT_SPEC.md` — canonical SmartTraderAI copy-paste format for all review types

## Quick Commands

```bash
# Compress screenshots before committing
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Run TradeZella → STB Google Sheet pipeline
bash ~/TradeZella_STB/automator_drop_handler.sh \
  ~/ClaudeCodeCLI/trading-assistant/data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv
# No terminal output = success. Check STB Google Sheet to confirm row landed.
# macOS notification available but not currently configured — verify manually.

# Stage and commit
git add smarttrader-ai/reviews/ data/screenshots/ && \
  git commit -m "Add trade review YYYYMMDD — [INSTRUMENT]-[PLATFORM]_NNN"
git push origin main
```
