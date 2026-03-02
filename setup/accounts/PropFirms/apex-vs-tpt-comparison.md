# Apex Trader Funding vs TakeProfitTrader — Side-by-Side Comparison
> **Audience:** Trading classmates evaluating prop firms  
> **Last updated:** March 2026  
> **Lucid Futures Trading:** 🔜 Coming Soon — column will be added when rules are published

---

## Key Differences at a Glance

| Feature | Apex (New Rules) | TakeProfitTrader |
|---------|-----------------|------------------|
| **Evaluation paths** | Two: EOD Drawdown *or* Intraday Trailing | One path (EOD trailing) |
| **Drawdown type** | EOD: calculated at close, enforced next session · Intraday: real-time trailing on peak balance | EOD trailing — level updates at close, but liquidation is **real-time intraday** |
| **Daily Loss Limit** | EOD eval: Yes · Intraday eval: **No DLL** · PA: tier-based DLL | **Removed** across all plans |
| **Min trading days (eval)** | None — can pass in 1 day | 5 days required |
| **Consistency rule (eval)** | Not applied during eval | 50% rule applied during eval |
| **Consistency rule (PA)** | 50% rule for payouts only | 50% rule for eval pass + payouts |
| **Payout split** | 100% | 100% (after PRO account) |
| **Max payouts per PA** | 6 (then PA closes) | Unlimited (PRO account) |
| **Scaling in PA** | Tier-based (contracts + DLL grow) | Static contract limit |
| **Inactivity rule (PA)** | 2 days ≥ $50 profit per rolling 30 days | — |
| **Max simultaneous PAs** | 20 | — |

---

## Evaluation Comparison (50K Account Example)

| Parameter | Apex EOD | Apex Intraday | TPT | Lucid |
|-----------|----------|---------------|-----|-------|
| **Profit Target** | $3,000 | $3,000 | $3,000 | 🔜 Coming Soon |
| **Max Drawdown** | $2,000 (EOD) | $2,000 (intraday trailing) | $2,000 (EOD trailing) | 🔜 |
| **Daily Loss Limit** | $1,000 | None | None (removed) | 🔜 |
| **Min Trading Days** | None | None | 5 | 🔜 |
| **Max Contracts** | 6 | 6 | 6 (60 micros) | 🔜 |
| **Consistency Rule** | Not applied | Not applied | 50% rule | 🔜 |
| **Access Period** | 30 days | 30 days | No time limit | 🔜 |
| **Monthly Cost** | — | — | ~$170 | 🔜 |

---

## Full Account Size Comparison (Evaluation)

| Size | Profit Target | Apex Max DD | TPT Max DD | Apex DLL (EOD) | TPT DLL | Apex Max Contracts | TPT Max Contracts |
|------|--------------|-------------|------------|----------------|---------|-------------------|-------------------|
| 25K | $1,500 | $1,000 | $1,500 | $500 | None | 4 | 3 (30 micros) |
| 50K | $3,000 | $2,000 | $2,000 | $1,000 | None | 6 | 6 (60 micros) |
| 100K | $6,000 | $3,000 | $3,000 | $1,500 | None | 8 | 12 (120 micros) |
| 150K | $9,000 | $4,000 | $4,500 | $2,000 | None | 12 | 15 (150 micros) |

> **Notable:** TPT gives more drawdown room at 25K ($1,500 vs $1,000) and 150K ($4,500 vs $4,000). TPT also allows more contracts at 100K and 150K.

---

## ⚠️ Account-Killer Rules — Apex

> **These will end your account instantly. No second chances.**

### 🔴 Drawdown Breach (EOD or Intraday)
- **EOD path:** If your balance touches the EOD threshold at *any time* during the session → immediate liquidation → account failed/closed
- **Intraday path:** Trailing threshold follows your peak balance in real time (including unrealized P&L). Touch it → instant liquidation → done
- The threshold **never moves down** — as you profit, your safety cushion shrinks

### 🔴 Holding Positions Past Market Close
- All positions must be flat before close. Holding through = account forfeiture

### 🔴 Hedging / Counter Positions
- No opposing positions across accounts. Detected = immediate closure of all involved accounts

### 🔴 Inactivity (PA only)
- Must record 2 days with ≥$50 profit every rolling 30 days or PA is permanently closed

---

## ⚠️ Account-Killer Rules — TakeProfitTrader

> **These will end your account instantly. No second chances.**

### 🔴 Minimum Account Balance Breach
- EOD trailing drawdown updates at close, but **liquidation is enforced in real time intraday**
- An open losing trade that hits the minimum mid-session = immediate liquidation
- The "EOD" in the name refers to when the level *updates*, not when enforcement happens

### 🔴 Holding Past 5:00 PM ET
- Positions must be closed before 5:00 PM ET (note: Apex deadline is 4:59 PM ET — know which account you're in)
- Holiday-adjusted hours are the trader's responsibility

### 🔴 Counter Positions Across Accounts
- Opposing positions on same/correlated products across any accounts under same control = both accounts liquidated, profits forfeited
- Uses near real-time detection (CME Rules 432, 531, 533, 534, 539)

---

## Apex — Plain English Summary

Apex now offers **two evaluation paths** to a funded (sim-funded) Performance Account:

**EOD Drawdown Path:** Your drawdown level is calculated once per day at market close. During the next session it's enforced in real time — touch it and you're done. You also have a Daily Loss Limit that pauses your trading for the day (but doesn't kill the account). No minimum trading days, no consistency rule during eval. Just hit the profit target without breaching drawdown or DLL.

**Intraday Trailing Path:** Your drawdown threshold follows your highest balance tick-by-tick in real time, including unrealized gains. There's no DLL — the trailing threshold is your only risk control. Same deal: no min days, no consistency during eval. Hit the target, don't breach the trail.

**Performance Account (both paths):** Once funded, you get tier-based scaling — your contract limit and DLL grow as your balance grows. Payouts require 5 qualifying trading days (each meeting a minimum daily profit), 50% consistency, and a $500 minimum. Max 6 payouts per PA, then it closes. 100% payout split. You can hold up to 20 PAs simultaneously.

---

## TakeProfitTrader — Plain English Summary

TPT uses a single evaluation model with **EOD trailing drawdown**. The trailing level updates at end of day, but here's the catch: **liquidation happens in real time**. If your balance drops to the minimum account balance at any point during the session — even from an unrealized loss — you're immediately liquidated.

**Key eval requirements:** Hit the profit target, stay above the minimum account balance, trade at least 5 days, and keep your best day under 50% of total profits (consistency rule). No time limit on the evaluation — take as long as you need.

**No Daily Loss Limit** — TPT removed DLL across all plans. The trailing drawdown is your only risk control.

**Payout structure:** After passing eval, you progress through Test Account → PRO Account with 100% profit split and unlimited payouts on PRO.

---

## Payout Comparison (PA — 50K Account)

| | Apex EOD | Apex Intraday | TPT |
|---|---------|---------------|-----|
| **Min trade days for payout** | 5 (≥$250/day) | 5 (≥$200/day) | 5 |
| **Consistency** | 50% rule | 50% rule | 50% rule |
| **Min payout** | $500 | $500 | — |
| **Safety net** | $52,100 | $52,100 | — |
| **Payout split** | 100% | 100% | 100% (PRO) |
| **Max payouts** | 6 | 6 | Unlimited (PRO) |
| **Payout #1 max** | $1,500 | $1,500 | — |
| **Payout #6 max** | $3,000 | $3,000 | — |

---

## 🔜 Lucid Futures Trading — Coming Soon

Lucid is an upcoming prop firm option we're tracking. Rules and comparison data will be added to this document once their program details are published. Watch this space.

---

*This comparison is for educational purposes. Always verify current rules directly with each firm — prop firm rules change frequently.*

