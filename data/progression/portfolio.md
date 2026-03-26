# Christopher Wilson — Unified P&L Ledger
**Maintained by Fortuna | Last updated: Mar 26, 2026**

This document is the source of truth for all trading P&L across all platforms and accounts. It feeds the `portfolio.html` public display page.

---

## 🏦 Active Accounts Summary

| Platform | Account | Type | Status | Current P/L (session) |
|----------|---------|------|--------|----------------------|
| Apex Trader Funding | APEX-484839-06 | 100K Eval | ✅ Active | Min days met Mar 24/25 — payout pending |
| TakeProfitTrader | TPT 50K | 50K Eval | ✅ Active | Day 1 of 5 completed Mar 25 |
| BTCC | SOL/USDT Perp | Crypto | ✅ Positive balance | +$20.43 YTD (after Mar losses) |
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

| Tax Year | BTCC | PocketOption | CoinLedger/On-Chain | Futures (Prop) | **Net** |
|----------|------|-------------|---------------------|----------------|---------|
| 2024 | ~-$2,115 | N/A | TBD | N/A (pre-trading) | **~-$2,115+ TBD** |
| 2025 | ~-$82 | -$151.62 | TBD | N/A | **~-$234 + TBD** |
| 2026 YTD | -$27.50 | N/A | N/A | +$93.00 | **+$65.50 + TBD** |

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
