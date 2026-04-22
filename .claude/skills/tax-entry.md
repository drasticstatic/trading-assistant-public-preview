---
name: tax-entry
description: >
  Use to log a trade or document to the taxes working files for the current year.
  TRIGGER when: "log this for tax", "add to tax log", "tax entry for this trade",
  "record for taxes", "tax this trade", "add to taxes", "tax log [year]".
  Do NOT use for: trade reviews (use /trade-review), P&L analysis, or when the
  user is asking about tax strategy rather than logging a specific entry.
---

# Skill: /tax-entry

Append a trade or document to the `taxes/YYYY/` working files. This is a logging
tool — it captures the taxable event data in the right place and format so nothing
falls through the cracks at year-end.

## File Structure

```
taxes/
  README.md         — overview and instructions
  YYYY/
    trades_YYYY.md  — running log of all taxable trade events
    docs_YYYY.md    — platform statements, 1099s, and document index
```

See `taxes/README.md` for the full structure and any year-specific notes.

## Steps

### For a Trade Entry

Append to `taxes/YYYY/trades_YYYY.md`:

```markdown
| Date | Instrument | Platform | Direction | Entry | Exit | Gross P&L | Fees | Net P&L | Notes |
|------|-----------|----------|-----------|-------|------|-----------|------|---------|-------|
| YYYY-MM-DD | MCL | APEX | Long | XX.XX | XX.XX | +$XX.XX | $X.XX | +$XX.XX | [e.g., limit order, overnight] |
```

Required fields: Date, Instrument, Platform, Direction, Entry price, Exit price, Gross P&L, Fees, Net P&L.
Optional: holding period (intraday / overnight / multi-day), any relevant notes.

**Data source:** Pull from TradeZella CSV or Tradovate orders CSV — never estimate.

### For a Document Entry

Append to `taxes/YYYY/docs_YYYY.md`:

```markdown
| Date Received | Document | Platform | Period | Location | Notes |
|---------------|----------|----------|--------|----------|-------|
| YYYY-MM-DD | 1099-B | Apex Trader Funding | 2025 full year | taxes/2025/apex_1099b_2025.pdf | Downloaded from portal |
```

### Crypto Trades (BTCC, Coinbase, etc.)

Crypto trades are taxable events in the US. Log the same fields as futures trades,
plus add the USD value at time of trade for cost-basis purposes.

## After Logging

1. Commit the updated tax file
2. If a new document was added, also commit the PDF or screenshot if applicable

## Quick Commands

```bash
# Stage and commit tax log update
git add taxes/ && \
  git commit -m "Tax log: add [instrument/document] [date]"
git push origin main
```
