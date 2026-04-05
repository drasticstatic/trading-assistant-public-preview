# Christopher Wilson — Unified P&L Ledger
**Maintained by Fortuna | Last updated: Apr 5, 2026**

This document is the source of truth for all trading P&L across all platforms and accounts. It feeds the `portfolio.html` public display page.

---

## 🏦 Active Accounts Summary

| Platform | Account | Type | Status | Notes |
|----------|---------|------|--------|-------|
| Apex Trader Funding | APEX-484839-06 | 100K Eval | ✅ Active | Min days met Mar 24/25 — payout pending |
| TakeProfitTrader | TPT 50K | 50K Eval | ✅ Active | Reset Apr 1, 2026 |
| BTCC | SOL/USDT Perp | Crypto | ✅ Account active | -$27.50 YTD 2026 |
| Robinhood | •••••••••• | Equities | ✅ Connected Apr 2026 | $1,731 equity · 70 positions |
| APEX-484839-05 | 100K Eval | — | ❌ Blown Mar 3, 2026 | — |

---

## 📊 Futures Trading — Prop Firm Accounts

**Platform:** Apex Trader Funding + TakeProfitTrader (Tradovate)
**Instrument:** Primarily MNQ · Also ES/MES, YM, RTY, CL

### 2026 Realized P/L (Feb 23 – Mar 26, 2026)

| Date | Account | Instrument | P/L | Grade | Review |
|------|---------|------------|-----|-------|--------|
| Feb 23, 2026 | APEX-05 | MNQ | — | — | Patterns 6+7 chain begins |
| Feb 25, 2026 | APEX-06 | MNQ | **+$565.00** | A+ | All rules honored |
| Mar 3, 2026 | APEX-05 | ES + CL | — | F | Blown — Patterns 6+7 |
| Mar 10, 2026 | APEX-06 | MNQ | **-$108.00** | A+ entry | SL held (Pattern 7 fix ✓), exit passive |
| Mar 16, 2026 | APEX-06 | RTY | **+$935.00** | A- | ✅ |
| Mar 16, 2026 | APEX-06 | MNQ | **-$268.50** | — | SL adjusted (Pattern 7 echo) |
| Mar 17, 2026 | APEX-06 | MNQ | **+$963.00** | — | Overnight; SL moved wide (Pattern 7 echo) |
| Mar 20, 2026 | APEX-06 | RTY | **+$525.00** | — | Unintentional fill; SL canceled (Pattern 9) |

| **2026 Futures Net (Feb 23–Mar 26)** | **+$93.00** |
|--------------------------------------|-------------|

> ⚠️ Prop firm accounts are evaluations — P/L reflects the eval score, not cash withdrawn. Payout pending for APEX-484839-06.

---

## ₿ Crypto Trading — BTCC

**Platform:** BTCC (perpetual futures)
**Instruments traded:** SOL, XRP, BTC, ETH, XLM, DOGE, API3, CRO, HBAR, SUI, ADA, GRT, NEO, OP, RON, BIGTIME, MANA, ACH

### All-Time BTCC Summary

| Year | Net P/L (USDT ≈ USD) | Notes |
|------|----------------------|-------|
| 2024 | **~-$2,115** | Dec 17–31 only; Dec 19 mass liquidation event ~-$1,500+ |
| 2025 | **~-$82** | 4 trades; API3 continuation from 2024 |
| 2026 YTD | **-$27.50** | SOL trades only (Feb–Mar) |
| **All-time** | **~-$2,224** | |

### 2026 BTCC Trades (Detailed)

| Date | Instrument | Direction | Entry | Exit | Net P/L | Pattern |
|------|------------|-----------|-------|------|---------|---------|
| Feb 25–26, 2026 | SOLUSDT | LONG 5×20x | $87.4701 | $91.5556 | **+$20.43** | A+ — only winning BTCC SOL trade |
| Mar 12, 2026 | SOLUSDT | SHORT 1×50x | $85.68 | $86.63 SL | **-$1.00** | SL hit cleanly ✓ |
| Mar 13, 2026 | SOLUSDT | SHORT 5×20x | $85.1332 | $91.6940 | **-$32.80** | Pattern 8 — 30.5h hold |
| Mar 25–26, 2026 | SOLUSDT | LONG 5×20x | $92.4686 | $89.6435 | **-$14.13** | Pattern 8+9 — voucher trade |

> Full detail: `data/imports/2026/03-Mar/btcc_realized_pl_2026.md`

---

## 📈 Robinhood — Equities Portfolio

**Platform:** Robinhood (equities, ETFs, ADRs)
**MCP Connection:** Live as of Apr 5, 2026
**Account:** ••••••••••

### Snapshot — Apr 5, 2026

| Metric | Value |
|--------|-------|
| Total Equity | **$1,731.01** |
| Extended Hours Equity | $1,734.39 |
| Positions | 70 |
| Dividends Received (2021–2026) | **$101.80** |

### Top Holdings

| Symbol | Name | Equity | % Chg |
|--------|------|--------|-------|
| AMZN | Amazon | $209.78 | +27.05% |
| PRI | Primerica | $192.05 | +68.67% |
| JCI | Johnson Controls | $147.40 | +114.50% |
| BE | Bloom Energy | $135.51 | +220.74% |
| NEE | NextEra Energy | $94.59 | +15.27% |
| SPOT | Spotify | $62.88 | +55.25% |
| GOOGL | Alphabet Class A | $59.63 | +182.59% |
| MPWR | Monolithic Power | $57.97 | +204.29% |
| MIELY | Mitsubishi Electric | $65.94 | +109.07% |
| KMT | Kennametal | $83.76 | +5.29% |

### Dividend History

| Year | Total Dividends Paid |
|------|---------------------|
| 2021 | $23.14 |
| 2022 | $16.03 |
| 2023 | $17.63 |
| 2024 | $19.97 |
| 2025 | $20.10 |
| 2026 YTD | $4.93 (+$1.00 pending) |
| **All-Time** | **$101.80** |

> Consistent ~$17–20/yr from PRI, NEE, KMT, JCI, CMCSA — solid passive income relative to portfolio size.

> ⚠️ Robinhood realized gains/losses from stock sales not available via MCP. Obtain official 1099-B for tax filing.
> Full snapshot: `data/imports/robinhood/robinhood_snapshot_20260405.md`

---

## 🎰 PocketOption — Binary Options

**Platform:** PocketOption (binary options, foreign platform)
**Period:** May–Dec 2025

| Year | Trades | Net P/L | Notes |
|------|--------|---------|-------|
| 2025 | ~741 | **-$151.62** | Exploratory; avg $1–2/trade; no 2026 activity |

> ⚠️ Binary options may be treated as ordinary income/loss for US tax purposes. Consult CPA.
> Full detail: `data/imports/2025/PocketOption_export_history_as-of_20260326.xlsx`

---

## 🔗 CoinLedger — Crypto On-Chain Activity

**Source:** `data/imports/2025/CoinLedger_Transactions_as-of_20260326.csv`
**Rows:** 2,666 | **Period:** 2020–2025

| Year | Activity Type | Notes |
|------|--------------|-------|
| 2020–2021 | Staking, DeFi interest | Early DeFi era; likely taxable interest income |
| 2021–2023 | Heavy staking/interest income | Significant taxable events for each year |
| 2024–2025 | SOL, CRO, HBAR trades | Coinbase + Solana DEX activity |

> ⚠️ This data requires full processing with CoinLedger.io or equivalent software to compute accurate tax basis. Raw CSV is available but needs P/L calculations applied. Phase 3 of the Fortuna Tax Assistant pipeline.

---

## 📋 Tax Summary (Working)

> ⚠️ These are working estimates. Verify all figures with BTCC official statements and CoinLedger software before filing. Consult a CPA.

| Tax Year | BTCC | Robinhood Divs | PocketOption | CoinLedger/On-Chain | Futures (Prop) | **Net** |
|----------|------|----------------|-------------|---------------------|----------------|---------|
| 2024 | ~-$2,115 | +$19.97 | N/A | TBD | N/A (pre-trading) | **~-$2,095+ TBD** |
| 2025 | ~-$82 | +$20.10 | -$151.62 | TBD | N/A | **~-$214 + TBD** |
| 2026 YTD | -$27.50 | +$4.93 | N/A | N/A | +$1,112.00 | **+$1,089+ TBD** |

**Key CPA questions:**
1. BTCC perp futures — Section 1256 (60/40 split) or ordinary capital gain/loss?
2. PocketOption — ordinary income/loss or gambling loss?
3. CoinLedger staking income — taxable in year received at FMV?
4. BTCC foreign account — FBAR required if balance > $10,000?
5. Dec 2024 force liquidation — any special treatment for exchange-initiated margin calls?

---

## 📁 Source Files

| File | Location |
|------|----------|
| BTCC CSV (2024–2026) | `data/imports/2026/03-Mar/btcc-orders_20241217_thru_20260326.csv` |
| BTCC P&L 2024 | `data/imports/2024/btcc_realized_pl_2024.md` |
| BTCC P&L 2025 | `data/imports/2025/btcc_realized_pl_2025.md` |
| BTCC P&L 2026 YTD | `data/imports/2026/03-Mar/btcc_realized_pl_2026.md` |
| PocketOption XLSX | `data/imports/2025/PocketOption_export_history_as-of_20260326.xlsx` |
| CoinLedger CSV | `data/imports/2025/CoinLedger_Transactions_as-of_20260326.csv` |

---

*Maintained by Fortuna (Claude Code CLI) | [trading-assistant](https://github.com/drasticstatic/trading-assistant)*
*Last full reconciliation: Mar 26, 2026*
