# Apex Trader Funding — Rules Reference
> Compiled from official Apex evaluation and PA PDFs + plan comparison images.
> Source files: `Rules_Evaluation.pdf`, `Rules_Performance Account (PA).pdf`, `Apex 50K vs 100K vs 100K-static.png`
> Last updated: February 2026

---

## Plan Comparison

| Plan | Contracts (Micros) | Profit Goal | Trailing Threshold | Daily Drawdown | Monthly Cost |
|------|--------------------|-------------|-------------------|----------------|--------------|
| 50K Full | 10 (100 micros) | $3,000 | $2,500 trailing | None | $197 |
| 100K Full | 14 (140 micros) | $6,000 | $3,000 trailing | None | $297 |
| 100K Static | 2 (20 micros) | $2,000 | $625 fixed (never moves) | None | $297 |

> **Active account:** 100K Full (currently +$50 as of Feb 2026, on Tradovate)

---

## Full vs Static — Key Difference

**Full accounts:** Trailing threshold moves up with your intraday peak balance. Once threshold = initial balance + $100, it stops trailing (you're "safe" and can't blow from profits).

**Static accounts:** Drawdown level is permanently fixed at $99,375 on a $100K account ($625 below start). It never moves — even if you profit.

> Static = conservative safety net. Full = larger contracts, higher risk/reward.

---

## Evaluation Rules

### Minimum Trading Days
- **7 minimum trading days** required (non-consecutive) to qualify for pass
- **No maximum time limit** — take as long as you need
- **No weekly trading requirement** — you do NOT need to trade every week to keep the account active
- Account stays active as long as monthly subscription is paid
- Failed accounts not reset within 8 days will be disabled if no active subscription

### Drawdown
- **No daily drawdown limit**
- Trailing threshold is based on **highest intraday live balance** (not just end-of-day close)
- Example: balance peaks at $100,875 intraday → threshold moves to $97,875, even if you close lower
- **Tradovate:** trailing continues throughout the evaluation (does not stop at profit target)
- **Rithmic:** trailing stops when threshold reaches the profit target level

### Trade Close-Out
- All trades must be closed and pending orders cancelled by **4:59 PM ET**
- Apex has an auto-close safeguard at 4:59 PM ET — this is a last resort, NOT a primary tool
- Orders NOT attached to a position must be manually cancelled or they may liquidate the account
- Markets with earlier closes (e.g. GC, CL) must be closed at their designated earlier time
- **No overnight holds permitted**

### Holiday / Sunday Rules
- Sundays count as part of Monday's trading day (session = 6:00 PM ET Sunday → 4:59 PM ET Monday)
- You CAN trade on holidays if the market is open
- Half-day holidays do NOT count as a trading day

### Position Sizing
- Max contracts applies across all instruments simultaneously
  - Example (100K Full): 14 total — could be 10 NQ + 4 GC
- Micros available: MES, MNQ, MYM, M2K, MGC, M6A, M6E, M6J, MCL

### Account Violations
- Dropping below trailing threshold = failed evaluation
- Evaluation accounts: can be reset (cost applies)
- Reset allows fresh start with full balance and threshold

---

## Performance Account (PA) Rules

> These rules apply AFTER passing the evaluation. More strict than eval.

### 1. Contract Scaling Rule
- **Phase 1:** Restricted to **half** of maximum allowed contracts until threshold is cleared
- **Threshold cleared when:** EOD balance > initial balance + trailing drawdown + $100
  - 100K Static: full contracts allowed after reaching $2,600 safety net
- After threshold is cleared: full contract limit available from next full session

### 2. 30% Negative P&L Rule (MAE)
- Open (unrealized) negative P&L cannot exceed **30% of start-of-day profit balance**
- This is NOT a daily loss limit — it's a per-trade/open exposure rule
- Example: if start-of-day profit = $1,000, open loss cannot exceed $300 at any moment
- If EOD profit balance doubles the safety net: 50% limit applies instead of 30%

### 3. 5:1 Risk-Reward Ratio Rule
- Stop loss cannot exceed **5x your profit target** on any trade
- Example: if TP = $200, maximum SL = $1,000
- Prevents taking massive stop losses relative to targets

### 4. No Hedging
- Holding simultaneous long AND short positions on the same or correlated instrument is **strictly prohibited**
- Applies even during news events

### 5. One Direction Rule
- Only long OR short at any one time — never both
- Cannot have open orders for both sides of the market simultaneously

---

## Claude's Enforcement Checklist (Apex)

When reviewing any Apex trade, flag if:
- [ ] Position size exceeded plan max (100K Full = 14 contracts / 140 micros)
- [ ] Trade held past **4:00 PM ET** (personal EOD target — firm deadline is 4:59 PM ET, personal rule is more conservative)
- [ ] Trailing threshold approached within 20% — flag immediately
- [ ] PA: open loss exceeded 30% of start-of-day profit
- [ ] PA: stop loss exceeded 5x profit target
- [ ] PA: trading full contracts before threshold was cleared
- [ ] PA: simultaneous long/short (hedging)
- [ ] Emotional state suggests revenge trading or forced entry

---

## Notes / Open Items
> 📝 Add account statement screenshots and current balance tracking here as accounts progress
