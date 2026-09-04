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

1. **Confirm CSV location — check the iCloud staging folder first:**
   `~/Library/Mobile Documents/com~apple~CloudDocs/Trading/_csv-2B-filed/`
   This is the primary source going forward (Christopher drops fresh exports here so nothing is lost to a local failure before it reaches GitHub). Includes Tradovate `Orders-N.csv` dumps and BTCC transaction-history CSVs.
   **Fallback:** `~/Downloads/trades_YYYYMMDDHHmmss.csv` — check here if the file isn't in the iCloud folder (older workflow, still valid if that's where something landed).
2. Identify the date range and instruments covered
3. Note the export type:
   - **TradeZella:** exported from Trade Log page — contains summary data with P&L
   - **Tradovate:** exported from ORDERS tab (not Performance) — contains order-level data
   - **TopOneFutures:** own CSV schema (Ticket/Symbol/Side/Open-Close Price/Time/P&L/Lots/Commissions) — see the TopOne eval-pass edge case below before archiving
   - **BTCC:** normally "Trade History" export; if the download doesn't work, Christopher may hand over a browser-copy-paste routed through Apple Numbers (a `.numbers` file with a `.csv` sibling — read the `.csv`)
4. Confirm `~/code/TradeZella_STB/` is set up (script + template + venv + service_account.json)
5. **After a successful import, this is a true MOVE, not a copy.** Relocate the source file(s) — both CSVs and screenshots — into the repo (`data/imports/YYYY/MM-Mon/`, `data/screenshots/`), commit, push, then remove the originals from the iCloud staging folder. Do this only *after* confirming the push succeeded — the repo + its git history on GitHub is the actual backup once that's done, so leaving a duplicate copy sitting in iCloud afterward just creates two sources of truth to keep in sync. Don't leave anything in staging "renamed in place" as a halfway step — either it's been moved into the repo and pushed, or it's still an active, un-processed file in staging.

### TopOne eval-pass edge case

TopOneFutures revokes Tradovate access instantly the moment an eval is passed, so there's no way to re-pull a Tradovate-format export after a pass — only TopOne's own CSV schema is available. Reshape it to match Tradovate's `Orders-N.csv` column layout before archiving/importing, so the rest of this pipeline (STB push, TradeZella ingestion) works unchanged. Verify the conversion via P&L reconciliation math (contract multiplier × points = P&L) before trusting the output — this is how the Orders-102/103 conversion was verified.

## File Naming and Location

Each source system gets its own subfolder within the month directory — keeps
`data/imports/YYYY/MM-Mon/` scannable instead of one long flat file list:

```
data/imports/YYYY/MM-Mon/TradeZella/tradezella_YYYYMMDD.csv
data/imports/YYYY/MM-Mon/Tradovate/tradovate_orders_YYYYMMDD.csv
data/imports/YYYY/MM-Mon/BTCC/btcc-orders_YYYYMMDD_thru_YYYYMMDD.csv
```

Date in filename = the trade date (or last date in range for multi-day exports).
BTCC exports cover a date range, not a single day — name with the full
`_thru_` range the export actually spans. If a same-date collision happens
within a subfolder (e.g. two Tradovate exports both dated the same day),
append `_b`, `_c`, etc. — earliest export gets the bare name.

This subfolder split was applied retroactively across the whole `data/imports/`
tree in Sep 2026 (a 130-file archival + reorg pass) — any older doc, script,
or note referencing a bare `data/imports/YYYY/MM-Mon/tradovate_orders_*.csv`
path (no subfolder) is describing the pre-reorg layout; the subfolder is
canonical going forward.

## Steps

### 1. Push to SmartTraderAI Google Sheet (STB Conversion)

**Recommended — Automator shell script (after CSV is archived):**
```bash
bash ~/code/TradeZella_STB/automator_drop_handler.sh \
  ~/code/trading-assistant/data/imports/YYYY/MM-Mon/tradezella_YYYYMMDD.csv
```
No terminal output = Sheets mode (success). macOS notification center confirms the row landed. Check the STB Google Sheet to verify.

**Alternative — Automator drag-and-drop:**
Drag the `trades_*.csv` from Downloads onto the **TradeZella to STB** app on the Desktop.

**Alternative — Terminal (Python directly):**
```bash
cd ~/code/TradeZella_STB
source venv/bin/activate
python3 tradezella_to_stb.py ~/Downloads/trades_YYYYMMDDHHmmss.csv
```

The script accepts any `trades_*.csv` filename — no renaming needed before running.

> **If Google Sheet is not configured:** script falls back to creating
> `STB_Import_Merged_YYYYMMDD.xlsx` — upload that manually to SmartTraderAI.

**Non-pipeline imports (outside TradeZella scope):** TradeZella currently covers prop firm accounts and paper trading only. BTCC/Bybit voucher futures trades are documented via GitHub review journal and shared with coaches/SmartTraderAI directly — not tracked in TradeZella. This is intentional: coaches are focused on prop firm progress, and the voucher positions are not yet at a scale worth importing separately. Retroactive TradeZella + STB import for all BTCC futures trades is a pending task. Other platforms permanently outside this pipeline: Robinhood (stocks/options), Coinbase and DEX spot swaps, any investing accounts, and automated trading bots. For any trade outside the prop firm / paper trading scope, skip the automator and proceed to archive + cross-reference only.

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

Confirm the source-specific subfolder exists. Create if needed:

```bash
mkdir -p data/imports/YYYY/MM-Mon/TradeZella/
mkdir -p data/imports/YYYY/MM-Mon/Tradovate/
mkdir -p data/imports/YYYY/MM-Mon/BTCC/
```

Move (not copy) and rename to standard format — source is the iCloud staging folder (`_csv-2B-filed/`), falling back to `~/Downloads/` if not found there. Stage the move as copy-then-verify-then-delete-original, so nothing is ever lost mid-transition. **Verify with a hash check, not just a visual diff** — `shasum -a 256` the source and the destination and confirm they match before deleting anything from staging:

```bash
ICLOUD_CSV=~/"Library/Mobile Documents/com~apple~CloudDocs/Trading/_csv-2B-filed"

# TradeZella
cp "$ICLOUD_CSV"/trades_*.csv data/imports/YYYY/MM-Mon/TradeZella/tradezella_YYYYMMDD.csv

# Tradovate — single export
cp "$ICLOUD_CSV"/Orders.csv data/imports/YYYY/MM-Mon/Tradovate/tradovate_orders_YYYYMMDD.csv

# Tradovate — multiple exports (e.g. Orders.csv + Orders-2.csv from two different trade dates)
# Name each file after the trade date it covers:
cp "$ICLOUD_CSV"/Orders.csv   data/imports/YYYY/MM-Mon/Tradovate/tradovate_orders_20260506.csv
cp "$ICLOUD_CSV"/Orders-2.csv data/imports/YYYY/MM-Mon/Tradovate/tradovate_orders_20260508.csv
# If both cover the same date (e.g. split session), append a suffix:
cp "$ICLOUD_CSV"/Orders-2.csv data/imports/YYYY/MM-Mon/Tradovate/tradovate_orders_YYYYMMDD_b.csv

# BTCC — name with the full range the export actually covers
cp "$ICLOUD_CSV"/BTCC-Derivatives-TransactionHistory-*.csv data/imports/YYYY/MM-Mon/BTCC/btcc-orders_YYYYMMDD_thru_YYYYMMDD.csv

# Verify before deleting the source
shasum -a 256 "$ICLOUD_CSV"/Orders.csv data/imports/YYYY/MM-Mon/Tradovate/tradovate_orders_YYYYMMDD.csv

# Fallback if not found in iCloud staging:
cp ~/Downloads/trades_*.csv data/imports/YYYY/MM-Mon/TradeZella/tradezella_YYYYMMDD.csv
```

**Multiple exports edge case:** Tradovate resets the filename to `Orders.csv` each export. If you export multiple sessions, the staging folder accumulates `Orders.csv`, `Orders-2.csv`, `Orders-3.csv`, etc. Archive in the order they were exported — the earliest trade date gets the base name, each subsequent date gets its own `YYYYMMDD` name. If a fill genuinely has no counterpart in the master trade ledger (check `fortuna-exports/master_trade_ledger_*.csv`'s `source` column) even though the file has `Filled` rows, don't archive-and-forget it — flag it as a possible ledger gap before moving on. That gap (mirror/copy-trading accounts especially — a leader export and a follower export can both have real fills, but only one side gets extracted) is exactly what a 2026-09-03 backlog cleanup found: 19 of ~105 backlogged files had real, un-ledgered fills hiding behind a "the data's already in the ledger" assumption.

**This is a true move — commit, push, then delete the original from the iCloud staging folder.** Once `git push` confirms the archived copy is safely in the repo (and therefore on GitHub), remove the source file from `_csv-2B-filed/` entirely — don't rename it in place or leave it sitting there "marked done." **GitHub is the canonical, sole source of truth for this data once pushed** — there is no expectation of a parallel copy anywhere else, iCloud staging included. A second copy left behind in iCloud just becomes a second source of truth to keep in sync, which is exactly what created the `_copy`/`_new`/`_new_copy`/`_new_again` workaround folders this convention exists to replace. Delete the staging original the moment the hash-verified push is confirmed — don't wait for a "just in case" cleanup pass later.

### 4. Cross-Reference Trade Reviews

For each trade date in the CSV, check `fortuna-exports/trade-reviews/YYYY/MM-Mon/` for matching review files (or `smarttrader-ai/reviews/YYYY/MM-Mon/` for pre-Jun 2026 dates):

```bash
ls fortuna-exports/trade-reviews/YYYY/MM-Mon/
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

### 6. Locate Screenshots

**Primary source — check the iCloud staging folder first:**
```bash
ls ~/"Library/Mobile Documents/com~apple~CloudDocs/Trading/_Screenshots-2B-filed"
```

**Fallback — uncommitted files in `data/screenshots/`** (older workflow, or a screenshot dropped straight into the repo):
```bash
git status data/screenshots/
```

Three naming conventions — match all:
- **TradingView capture:** `RTY1!_2026-04-23_17-32-24_65d3a.png` (instrument + date + time + hash)
- **macOS Sequoia screenshot tool:** `Screenshot 2026-04-23 at 17.32.24.png` (one word, spaces, dots in time)
- **macOS Big Sur screenshot tool:** `Screen Shot 2026-04-23 at 17.32.24.png` (two words, spaces, dots in time)

Match filenames to instruments and date. **Note:** some TradingView captures show more than one pane/instrument in a single screenshot (Christopher's TradingView plan supports up to 2 panes at once) — for confluence/divergence context on the traded instrument and its confirming pair. The same file may legitimately belong in more than one trade review — don't assume one screenshot maps to exactly one review. The ticker symbol for each pane is normally visible top-left of that pane, unless covered by an indicator or drawing.

If nothing is found in either location, ask Christopher before looking elsewhere. **This is a true move, same as CSVs (Step 3).** Once screenshots are embedded in reviews, committed, and pushed, delete the source files from `_Screenshots-2B-filed/` — don't rename in place or leave a copy behind. The repo is the archive going forward.

### 7. Create Trade Reviews

For each trade missing a review, run `/trade-review` using the CSV data and screenshots located in Step 6.

**One review per filled trade.** NNN numbering is day-sequential across all instruments:
- First filled trade of the day → `_001`
- Second filled trade (any instrument) → `_002`

If two trades are closely related (same day, cross-instrument setup), note that in both reviews and create a daily review as well.

### 8. Update Gallery.html's Trading Calendar & Metrics

`data/progression/gallery.html`'s "Trading Calendar & Metrics" section (the calendar grid, the day-strip, Net P&L / Win Rate / Profit Factor stat tiles) is driven by a hardcoded JS array, `const loggedTrades = [...]`, sourced from `pattern_tracker.md`'s Trade Log — **not** auto-generated from the CSVs or the master ledger. Every import that adds a newly-reviewed trade needs a matching entry appended to that array, or the gallery page silently falls behind what's actually been reviewed:

```js
{ date: '2026-MM-DD', instrument: 'XXX', pnl: NNN.NN },
```

- One entry per filled trade (same granularity as trade reviews — Step 7)
- `instrument` is the bare symbol root (`MNQ`, not `MNQU6`)
- Append in date order at the end of the array
- Do this in the same commit as the reviews (Step 9) so the calendar and the reviews it links out to land together — a review without a matching calendar entry (or vice versa) is a half-finished import

### 9. Commit Import Files + Reviews

```bash
git add data/imports/ fortuna-exports/trade-reviews/ fortuna-exports/overview-summaries/ data/screenshots/ data/progression/gallery.html data/progression/pattern_tracker.md && \
  git commit -m "Import trade data YYYYMMDD — [instruments]"
git push origin main
```

## After Running

- Update `data/progression/pattern_tracker.md` Running P&L if not current
- Confirm `data/progression/gallery.html`'s `loggedTrades` array (Step 8) actually landed — a quick `grep` for the new date range is enough
- Confirm the iCloud staging originals were actually deleted post-push, not just archived — a lingering original is the exact failure mode this whole convention exists to prevent

## Common Issues

**Automator does nothing:** Check that "Pass input: as arguments" is set in the Automator workflow (not "to stdin").

**Automator can't find Python:** Run `which python3` in Terminal and update `SCRIPT_DIR` in the automator script.

**TradeZella export has wrong columns:** Ensure export is from the Trade Log page with all columns selected.

**Tradovate missing commissions:** Normal — the Orders export doesn't include commissions. Merge Cash history data if needed, but this is typically handled during review analysis.

**Multiple trades same day:** Review filename pattern includes sequence number `_NNN` — e.g. `review_20260421_MNQ-APEX_001.md`, `_002.md`.

**CSV won't open:** Verify it's actual CSV format, not a renamed XLSX. Open in a text editor to confirm.

**SPREADSHEET_ID not set:** Edit `SPREADSHEET_ID` at the top of `tradezella_to_stb.py`.

**`service_account.json` not found:** Must be in `~/code/TradeZella_STB/` alongside the script.

## Related Specs

- `specs/tradezella-automater.spec.md` — Full pipeline architecture; `automator_drop_handler.sh` is the current implementation; `tradezella_to_stb.py` handles conversion + Sheets push
- `specs/SMARTTRADERAI_EXPORT_SPEC.md` — Output format for STB Google Sheet

## Quick Commands

```bash
ICLOUD_CSV=~/"Library/Mobile Documents/com~apple~CloudDocs/Trading/_csv-2B-filed"
ICLOUD_SCREENSHOTS=~/"Library/Mobile Documents/com~apple~CloudDocs/Trading/_Screenshots-2B-filed"

# STB Google Sheet push (Terminal method)
cd ~/code/TradeZella_STB && source venv/bin/activate
python3 tradezella_to_stb.py "$ICLOUD_CSV"/trades_*.csv

# Archive CSV (iCloud staging is primary; ~/Downloads/ is the fallback)
mkdir -p data/imports/YYYY/MM-Mon/TradeZella/
cp "$ICLOUD_CSV"/trades_*.csv data/imports/YYYY/MM-Mon/TradeZella/tradezella_YYYYMMDD.csv
shasum -a 256 "$ICLOUD_CSV"/trades_*.csv data/imports/YYYY/MM-Mon/TradeZella/tradezella_YYYYMMDD.csv  # verify before deleting the source

# Cross-reference reviews
ls fortuna-exports/trade-reviews/YYYY/MM-Mon/

# Commit (include gallery.html + pattern_tracker.md if Step 8 updated them)
git add data/imports/ data/progression/gallery.html data/progression/pattern_tracker.md && \
  git commit -m "Import trade data YYYYMMDD — [instruments]"
git push origin main
```
