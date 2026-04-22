---
name: import-trades
description: >
  Use to process a TradeZella or Tradovate CSV export, verify the output, and flag any
  trades missing reviews. TRIGGER when: "import trades", "process the CSV", "import the
  TradeZella export", "tradezella sync", "import today's trades", "process fills",
  "run the import", "flag missing reviews". Do NOT use for: building the trade review
  itself (use /trade-review), premarket analysis, or when no CSV has been provided.
---

# Skill: /import-trades

Process a TradeZella or Tradovate CSV export: validate the data, move to the correct
`data/imports/` directory, cross-reference existing trade reviews, and flag any trades
that don't yet have a review file.

## Before Starting

1. Confirm the CSV file location — typically `~/Downloads/` after export from TradeZella or Tradovate
   - **TradeZella:** exported as `trades_YYYYMMDDHHmmss.csv` (e.g. `trades_20260421053241.csv`) — rename on copy
   - **Tradovate:** exported as `Orders.csv` — rename on copy
2. Identify the date range covered by the export
3. Note the export type: TradeZella summary or Tradovate orders

## File Naming and Location

```
data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv
data/imports/YYYY/MM-Mon/tradovate_orders_YYYYMMDD.csv
```

Date in filename = the trade date (or last date in range for multi-day exports).

## Steps

### 1. Read and Validate the CSV

For **TradeZella exports**, check:
- Required columns present: Date, Symbol, Direction, Entry, Exit, P&L, Zella Score, Notes
- No blank rows or malformed dates
- P&L figures match expected range (flag anything > $1,000 or < -$500 as unusual)

For **Tradovate orders exports**, check:
- Required columns: Time, Order Type, Instrument, Price, Filled Qty, Status
- All fills show "Filled" status (Working or Canceled rows are normal, just note them)
- Timestamps are in ET

### 2. Move to Correct Import Directory

Confirm `data/imports/YYYY/MM-Mon/` exists. Create if not:
```bash
mkdir -p data/imports/YYYY/MM-Mon/
```

### 3. Cross-Reference Trade Reviews

For each trade date in the CSV, check `smarttrader-ai/reviews/YYYY/MM-Mon/` for a matching review file:

```bash
ls smarttrader-ai/reviews/YYYY/MM-Mon/
```

Expected filename pattern: `review_YYYYMMDD_[INSTRUMENT]-[PLATFORM]_[NNN].md`

### 4. Flag Missing Reviews

Output a checklist of trades that need reviews:

```
Import Summary — [date]

✅ review_20260417_M2K-APEX_001.md — exists
❌ review_20260421_MCL-APEX_001.md — MISSING

Action needed: /trade-review for MCL Apr 21
```

### 5. Commit the Import Files

```bash
git add data/imports/
git commit -m "Import trade data [date] — [instrument(s)]"
git push origin main
```

## After Running

- If missing reviews flagged: use `/trade-review` to build them
- If all reviews exist: no further action required
- Update `pattern_tracker.md` Running P&L if not already current

## Quick Commands

```bash
# Create import directory if needed
mkdir -p data/imports/YYYY/MM-Mon/

# Move CSVs from Downloads (actual export filenames)
mv ~/Downloads/trades_YYYYMMDDHHmmss.csv data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv
mv ~/Downloads/Orders.csv data/imports/YYYY/MM-Mon/tradovate_orders_YYYYMMDD.csv

# Stage and commit
git add data/imports/ && \
  git commit -m "Import trade data YYYYMMDD — [instrument(s)]"
git push origin main
```
