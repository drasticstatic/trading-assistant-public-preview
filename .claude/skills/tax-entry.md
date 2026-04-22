---
name: tax-entry
description: >
  Log trades and documents to tax working files for the current year. Use this when the user says: 'log this for tax', 'add to tax log', 'tax entry for this trade', 'record for taxes', 'tax this trade', 'add to taxes', 'tax log [year]', 'file this for taxes', 'save for tax time', or mentions logging any taxable event (futures, crypto, stock trades, 1099s, platform statements). Also trigger when user pastes trade data or mentions tax documentation. Do NOT use for tax strategy discussions, P&L analysis, or trade reviews.
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

Crypto is a taxable event in the US. Log the same fields as futures, and add USD value at time of trade for cost-basis:

```markdown
| Date | Instrument | Platform | Direction | Entry (USD) | Exit (USD) | Gross P&L | Fees | Net P&L | Notes |
|------|-----------|----------|-----------|-------------|-----------|-----------|------|---------|-------|
| 2026-04-15 | SOL/USDT | BTCC | Short | 142.30 | 141.85 | +$67.00 | $1.20 | +$65.80 | Intraday perp |
```

## Edge Cases

- **Wash sales:** Log the trade normally. Add a note in the Notes column (e.g., "Potential wash sale — review at year-end"). Wash sale adjustments happen during tax prep, not at logging time.
- **Multi-leg trades:** Log each leg as a separate row, or combine into one row with a note describing the structure. Consistency matters more than the exact format — pick one approach per year.
- **Partial fills:** Log the final executed price and total P&L. If multiple fills across different prices, average them or log separately depending on what matches the 1099.
- **Platform discrepancies:** If TradeZella and Tradovate show different fees or P&L, prefer the platform's official data (Tradovate for futures). Note the discrepancy.

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
