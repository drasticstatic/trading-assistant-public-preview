# BTCC Annual Trade Summary — 2024
**Account:** BTCC (crypto perp futures)
**Period:** Dec 17–31, 2024
**Created:** Mar 26, 2026 by Fortuna (backdated)

> ⚠️ BTCC CSV history only available from Dec 17, 2024 onward. No earlier 2024 trades in the export.
> All screenshots to be added by Christopher from personal archives when available.

---

## ⚡ What Happened

The 2024 BTCC history begins mid-December — the earliest rows in the CSV are Dec 17, 2024. The two-week window covers one of the most volatile periods in crypto: a BTC-driven alt-season surge followed by a violent Dec 19–21 liquidation event.

**Early trades (Dec 17–18):** Mixed positions opened across XRP, BTC, CRO, RON. The XRP short was profitable (+$30.74). BTC long captured upside (+$44.94).

**Dec 19 Mass Liquidation Event (Dec 18 ET ~9:12 PM):** At 10:12 AM UTC+8 on Dec 19 (equivalent to Dec 18, 9:12 PM ET), multiple highly-leveraged positions were simultaneously force-closed by the exchange, triggering a margin call cascade:

| Instrument | Leverage | Gross P/L |
|------------|----------|-----------|
| XLMUSDT | 40x | -$463.16 |
| XRPUSDT | 180x | -$812.35 (partial) |
| XRPUSDT | — | -$48.31 (separate lot) |
| API3USDT | 10x | -$62.84 |
| SOLUSDT | 500x | -$31.27 |
| SUIUSDT | 40x | -$40.21 |
| ADAUSDT | 40x | -$19.62 |
| ACHUSDT | 15x | -$66.70 |
| BIGTIMEUSDT | — | -$64.64 |

**Post-liquidation recovery (Dec 20–21):** Smaller, better-managed positions recovered ~$430 gross across XRP long, BTC, MANA, GRT. Did not offset the liquidation losses.

---

## 📊 Trade Data — 2024 Closed Positions

> Source: `data/imports/2024/btcc_realized_pl_2024.md` (full trade-by-trade breakdown)

| Period | Net P/L |
|--------|---------|
| Dec 17–18 (pre-liquidation wins) | ~+$158 |
| Dec 19 (mass liquidation event) | ~-$1,800+ |
| Dec 20–21 (partial recovery) | ~+$430 |
| **Estimated Net 2024** | **~-$2,115** |

---

## 🧠 Behavioral Notes

**Patterns present:**
- **Extreme leverage** — positions at 40x, 180x, 500x. No appropriate position sizing relative to account size.
- **Pattern 8 (exit passivity)** — no active management or SL adjustment as positions moved against entry.
- **Correlated positions** — holding multiple alt/crypto longs simultaneously amplified drawdown when BTC reversed.
- **No risk-per-trade framework** — the Dec 19 event wiped what was likely months of build-up in a single session.

This event predates the formal behavioral pattern tracking system, but Pattern 7 (no SL enforced) and Pattern 8 (passive exits) are clearly the dominant themes.

---

## 📝 Notes for Coaches

Not reviewed with coaches — occurred before STB/ZTH coaching began in earnest (Feb 2026). Documented here for tax record completeness.

Key details for CPA review:
- **All 2024 positions are short-term** (held days to weeks, all < 1 year)
- **Force liquidations** — the Dec 19 mass close was not voluntary; exchange auto-liquidated margin-called positions. This may have specific IRS treatment (consult CPA).
- **Question for CPA:** Do BTCC perpetual futures qualify as Section 1256 contracts (60/40 capital gains split)?
- **BTCC is a foreign exchange** — confirm FBAR/FINCA reporting requirements for the account balance.

---

## 📸 Screenshot Timeline

*Screenshots to be added by Christopher from personal archives.*

---

## 📋 Full Position Detail

See `data/imports/2024/btcc_realized_pl_2024.md` for complete row-by-row breakdown with entry/exit prices, fees, and estimated net P/L.

---

*BTCC history available from Dec 17, 2024 only. Earlier 2024 trades (if any) are not in the CSV export.*
*Document maintained in [trading-assistant](https://github.com/drasticstatic/trading-assistant). Working document — verify against BTCC official statements before filing taxes.*
