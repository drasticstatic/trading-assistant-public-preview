---
name: import-trades
description: >
  Process TradeZella or Tradovate CSV exports: run the STB conversion for Google Sheet
  push, archive to data/imports/, cross-reference trade reviews, flag missing reviews.
  TRIGGER when: "import trades", "process the CSV", "import the TradeZella export",
  "tradezella sync", "import today's trades", "process fills", "run the import",
  "flag missing reviews", "tradovate import", "sync trades", "upload trade data",
  "check for missing reviews", "organize trade files", "validate CSV", "import orders",
  "run the STB import", "push to SmartTraderAI". Do NOT use for: building trade reviews
  (use /trade-review), premarket analysis, or when no CSV is provided.
---

# Skill: /import-trades

Full trade import pipeline: convert TradeZella CSV to STB format (Google Sheet push),
archive the raw CSV to `data/imports/`, cross-reference existing trade reviews, and
flag any trades missing a review file.

## Before Starting

1. Confirm CSV location — typically `~/Downloads/trades_YYYYMMDDHHmmss.csv` after export
2. Identify the date range and instruments covered
3. Note the export type:
   - **TradeZella:** exported from Trade Log page — contains summary data with P&L
   - **Tradovate:** exported from ORDERS tab (not Performance) — contains order-level data
4. Confirm `~/TradeZella_STB/` is set up (script + template + venv + service_account.json)

## File Naming and Location

```
data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv
data/imports/YYYY/MM-Mon/tradovate_orders_YYYYMMDD.csv
```

Date in filename = the trade date (or last date in range for multi-day exports).

## Steps

### 1. Push to SmartTraderAI Google Sheet (STB Conversion)

**Recommended — Automator drag-and-drop:**
Drag the `trades_*.csv` from Downloads onto the **TradeZella to STB** app on the Desktop.
Result: trades append to the STB Google Sheet automatically ✅

**Alternative — Terminal:**
```bash
cd ~/TradeZella_STB
source venv/bin/activate
python3 tradezella_to_stb.py ~/Downloads/trades_YYYYMMDDHHmmss.csv
```

The script accepts any `trades_*.csv` filename — no renaming needed before running.

> **If Google Sheet is not configured:** script falls back to creating
> `STB_Import_Merged_YYYYMMDD.xlsx` — upload that manually to SmartTraderAI.

### 2. Validate the CSV

#### TradeZella

Check for:
- Required columns: Date, Symbol, Direction, Entry, Exit, P&L, Zella Score, Notes
- No blank rows or malformed dates
- P&L figures in expected range (flag anything > $1,000 or < -$500 as unusual)

#### Tradovate Orders

Check for:
- Required columns: Date, Fill Time, B/S, Contract/Product, Quantity, Filled Qty, Avg Fill Price, Status
- All relevant fills show "Filled" status (Working/Canceled rows are normal, just note them)
- Timestamps present (Tradovate exports in local timezone by default)
- **Note:** Tradovate does not include commissions in the Orders export by default

Flag any rows with missing critical data (symbol, date, price, quantity).

### 3. Archive CSV to Import Directory

Confirm `data/imports/YYYY/MM-Mon/` exists. Create if needed:

```bash
mkdir -p data/imports/YYYY/MM-Mon/
```

Copy and rename to standard format:

```bash
# TradeZella
cp ~/Downloads/trades_*.csv data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv

# Tradovate
cp ~/Downloads/Orders.csv data/imports/YYYY/MM-Mon/tradovate_orders_YYYYMMDD.csv
```

### 4. Cross-Reference Trade Reviews

For each trade date in the CSV, check `smarttrader-ai/reviews/YYYY/MM-Mon/` for matching review files:

```bash
ls smarttrader-ai/reviews/YYYY/MM-Mon/
```

Expected pattern: `review_YYYYMMDD_[INSTRUMENT]-[PLATFORM]_[NNN].md`

### 5. Generate Missing Review Report

Output a checklist:

```
Import Summary — [date range]

✅ review_20260417_M2K-APEX_001.md — exists
❌ review_20260421_MCL-APEX_001.md — MISSING
❌ review_20260422_MES-APEX_001.md — MISSING

Action needed:
- /trade-review for MCL Apr 21
- /trade-review for MES Apr 22
```

### 6. Commit Import Files

```bash
git add data/imports/ && git commit -m "Import trade data YYYYMMDD — [instruments]"
git push origin main
```

## After Running

- **If missing reviews flagged:** Use `/trade-review` to build them
- **If all reviews exist:** No further action required
- Update `pattern_tracker.md` Running P&L if not current

## Common Issues

**Automator does nothing:** Check that "Pass input: as arguments" is set in the Automator workflow (not "to stdin").

**Automator can't find Python:** Run `which python3` in Terminal and update `SCRIPT_DIR` in the automator script.

**TradeZella export has wrong columns:** Ensure export is from the Trade Log page with all columns selected.

**Tradovate missing commissions:** Normal — the Orders export doesn't include commissions. Merge Cash history data if needed, but this is typically handled during review analysis.

**Multiple trades same day:** Review filename pattern includes sequence number `_NNN` — e.g. `review_20260421_MNQ-APEX_001.md`, `_002.md`.

**CSV won't open:** Verify it's actual CSV format, not a renamed XLSX. Open in a text editor to confirm.

**SPREADSHEET_ID not set:** Edit `SPREADSHEET_ID` at the top of `tradezella_to_stb.py`.

**`service_account.json` not found:** Must be in `~/TradeZella_STB/` alongside the script.

## Quick Commands

```bash
# STB Google Sheet push (Terminal method)
cd ~/TradeZella_STB && source venv/bin/activate
python3 tradezella_to_stb.py ~/Downloads/trades_*.csv

# Archive CSV
mkdir -p data/imports/YYYY/MM-Mon/
cp ~/Downloads/trades_*.csv data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv

# Cross-reference reviews
ls smarttrader-ai/reviews/YYYY/MM-Mon/

# Commit
git add data/imports/ && git commit -m "Import trade data YYYYMMDD — [instruments]"
git push origin main
```
