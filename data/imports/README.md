# data/imports/ — Trade Data Imports

Raw and processed trade data imports from all platforms, organized by year/month.

## 📂 Structure

```
imports/
├── robinhood/              ← Robinhood equity portfolio snapshots + dividend history
│   └── robinhood_snapshot_20260405.md
├── 2024/
│   └── btcc_realized_pl_2024.md
├── 2025/
│   ├── btcc_realized_pl_2025.md
│   ├── tradezella_*.csv            ← TradeZella session imports
│   ├── PocketOption_export_history_as-of_20260326.xlsx
│   └── CoinLedger_Transactions_as-of_20260326.csv
└── 2026/
    └── MM-Mon/
        ├── tradezella_YYYYMMDD.csv
        └── tradovate_orders_YYYYMMDD.csv
```

## 📋 Platform Coverage

| Platform | Format | Status | Location |
|----------|--------|--------|----------|
| Robinhood | MCP live + MD snapshot | ✅ Connected Apr 2026 | `robinhood/` |
| BTCC | CSV export → MD P&L | ✅ Dec 2024–Mar 2026 | `2024/`, `2025/`, `2026/` |
| Tradovate (Apex/TPT) | CSV export | ✅ Ongoing | `2026/MM-Mon/` |
| TradeZella | CSV export | ✅ Ongoing | `2026/MM-Mon/` |
| PocketOption | XLSX export | ✅ May–Dec 2025 | `2025/` |
| CoinLedger | CSV export | ✅ 2020–2025 | `2025/` |

---

*Part of the [Trading Assistant](https://github.com/drasticstatic/trading-assistant-public-preview) public preview.*
