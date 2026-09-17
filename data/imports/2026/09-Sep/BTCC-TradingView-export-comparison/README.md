# BTCC — TradingView export vs. native export (comparison reference)

`btcc-orders-all-2026-09-16T18_58_48.697Z_43794_export-from-trading-view.csv` was exported directly from **TradingView**, not from BTCC's own dashboard. Kept here specifically to compare against BTCC's own native export format once Christopher provides it for this window (he was still in an open SOL long position at the time this was captured — see `fortuna-exports/overview-summaries/2026/09-Sep/export_20260916_daily-review.md`).

## Why this is not used in the master trade ledger

The position this file documents was still open when captured. Beyond that, the two export formats aren't equivalent:

| | TradingView export (this file) | BTCC native export (e.g. `data/imports/2026/08-Aug/BTCC/btcc-orders_20260626_thru_20260829.csv`) |
|---|---|---|
| Columns | Symbol, Side, Type, Qty, Remaining Qty, Filled Qty, Limit Price, Stop Price, Take Profit, Stop Loss, Avg Fill Price, Status, Update Time, Order ID, Expiry, Multiple | Contracts, Leverage, Direction, Order No., Transaction Time(UTC+8), Order Type, Filled Type, Filled Qty, Filled Price, Fees, Liquidation fee, Position order no., **P/L, Margin, Close price, Swaps, Opening fee, Withholding profit, Net P/L** |
| Scope | Order-centric — every order placed, its fill status | Settlement-centric — actual P&L, fees, and margin computed per fill |
| Timestamps | Local (UTC-4 in this export) | UTC+8 |
| P&L / fees / margin | Not present | Present, per row |

TradingView's export is useful for confirming order placement/timing and cross-checking against what actually got submitted, but it cannot substitute for BTCC's own export when it comes to realized P&L, fees, or margin — those columns simply don't exist in this format. Once Christopher provides the real BTCC-native export for this trading window (after the open position closes), that becomes the authoritative source for any ledger update, same as every prior BTCC import.
