# analysis/ — Pre-Market Analysis & Level Marking

This directory holds pre-market preparation files and chart analysis methodology documents.

## 📂 Structure

```
analysis/
├── level-marking-methodology.md     ← How levels are marked and named
├── premarket/                        ← Daily pre-market summaries
│   └── YYYY/
│       └── MM-Mon/
│           ├── premarket_YYYYMMDD_summary.md
│           └── premarket_YYYYMMDD_[instrument].md
└── README.md (this file)
```

## 📋 Pre-Market Summary Sections

Each `premarket_YYYYMMDD_summary.md` covers:

| Section | Contents |
|---------|----------|
| `📋 Dashboard` | Account status, active positions, min-day tracking |
| `⚠️ Risk Alert` | Trailing drawdown proximity, account constraints |
| `🌙 Overnight/ETH` | Price action since last session close |
| `🌤️ At the Open` | HTF bias, key levels, FCR ray setup |
| `🔗 SMT Scenarios` | NQ/ES/YM triple-index divergence reads |
| `📅 Calendar` | News events, EIA windows, Fed dates |
| `🎯 Priority Instruments` | What to focus on + what to avoid |
| Per-Instrument sections | Bias, levels, trade projections |
| `🧠 Mental State` | Pre-session self-assessment |
| `⏱️ Live Updates` | Brief intraday notes (detail goes in daily review) |
| `🤖 Copy-Paste` | SmartTraderAI 5-question format ready to paste |

---

*Part of the [Trading Assistant](https://github.com/drasticstatic/trading-assistant-public-preview) public preview.*
