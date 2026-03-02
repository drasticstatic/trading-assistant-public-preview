# Apex Trader Funding — Rules Reference (New Products)

> Compiled from official Apex webcopy for the new EOD and Intraday Trailing evaluation paths.
> Source files: `apex-rules_new_webcopy_EOD.md`, `apex-rules_new_webcopy_Intraday.md`
> Last updated: March 2026

Apex now offers **two evaluation paths** to a funded Performance Account (PA):

| Feature | EOD Drawdown Path | Intraday Trailing Path |
|---------|-------------------|------------------------|
| Drawdown type | Calculated once/day at close; enforced next session | Real-time trailing follows peak balance (incl. unrealized P&L) |
| DLL during eval | Yes — fixed by account size | No |
| DLL during PA | Yes — tier-based scaling | Yes — tier-based scaling |
| Trailing stops (PA) | When threshold = Starting Balance + $100 | When threshold = Starting Balance + $100 |
| Min trading days (eval) | None — may pass in 1 day | None — may pass in 1 day |
| Access period (eval) | 30 calendar days | 30 calendar days |
| PA activation window | 7 calendar days after pass | 7 calendar days after pass |

---

## 1 · Evaluation Accounts

### 1.1 Account Parameters (Both Paths)

| | 25K | 50K | 100K | 150K |
|---|---|---|---|---|
| **Profit Target** | $1,500 | $3,000 | $6,000 | $9,000 |
| **Max Drawdown** | $1,000 | $2,000 | $3,000 | $4,000 |
| **Max Contracts** | 4 | 6 | 8 | 12 |
| **Access Period** | 30 Days | 30 Days | 30 Days | 30 Days |
| **Consistency** | Not Applied | Not Applied | Not Applied | Not Applied |
| **Scaling** | Not Applied | Not Applied | Not Applied | Not Applied |

**EOD-only — Daily Loss Limit (fixed during eval):**

| | 25K | 50K | 100K | 150K |
|---|---|---|---|---|
| **DLL** | $500 | $1,000 | $1,500 | $2,000 |

> Intraday Trailing evaluations have **no DLL**. Risk is controlled entirely by the real-time trailing threshold.

### 1.2 Passing the Evaluation

- Reach the profit target while respecting all drawdown rules.
- **No minimum trading days** — you may pass in one day.
- Once passed, you have **7 calendar days** to activate your PA (same size/type).
- The 7-day window starts when the eval is marked Passed after market close (≥ 6 PM ET), not when the target is reached intraday.

### 1.3 EOD Drawdown Mechanics

- Threshold calculated once per day at **4:59:59 PM ET** based on closing balance.
- Trails the highest achieved EOD balance; **never moves downward**.
- Enforced in real time during the next session — touching or falling below = immediate liquidation + fail.
- **Tradovate:** EOD drawdown trails indefinitely.
- **Rithmic / Wealthcharts:** Trailing stops when threshold reaches Profit Target Balance + $2,000.

### 1.4 Intraday Trailing Drawdown Mechanics

- Threshold follows the account's **Peak Balance** (highest intraday balance including unrealized P&L) in real time.
- Maintains a fixed dollar distance behind the peak (see Max Drawdown table); **never moves downward**.
- Touching or falling below = immediate liquidation + fail.
- **Tradovate:** Trails indefinitely.
- **Rithmic / Wealthcharts:** Trailing stops when threshold reaches Profit Target Balance + $2,000.

### 1.5 Daily Loss Limit (EOD Eval Only)

- Fixed dollar amount per session; does not trail or adjust intraday.
- If reached → all positions auto-liquidated → trading paused for the day.
- **Account remains active** — trading resumes next session (6 PM ET reset).
- DLL and EOD Threshold are **separate rules** — hitting DLL does not affect the threshold.

---

## 2 · Performance Accounts (PA)

### 2.1 PA Parameters (Both Paths)

| | 25K | 50K | 100K | 150K |
|---|---|---|---|---|
| **Max Drawdown** | $1,000 | $2,000 | $3,000 | $4,000 |
| **Scaling** | Tier-based | Tier-based | Tier-based | Tier-based |
| **Max Contracts** | 2 | 4 | 6 | 10 |
| **DLL** | Tier-based | Tier-based | Tier-based | Tier-based |
| **Inactivity Rule** | Yes | Yes | Yes | Yes |

### 2.2 PA Trading Rules

1. **Do not breach the drawdown threshold.** Balance (including unrealized P&L) may never touch or fall below the threshold. If breached → auto-liquidation → PA permanently closed.
2. **No prohibited trading activity.** All trading must follow Apex risk and conduct guidelines (see §5).

### 2.3 Drawdown Stops Trailing (PA)

Once the threshold reaches **Starting Balance + $100**, it stops increasing and becomes fixed.

Example (50K): Threshold stops at $50,100 — reached when highest balance hits $52,600.

---

## 3 · Scaling Tiers (PA — Both Paths)

Tier levels are updated once per day based on EOD balance at 4:59:59 PM ET. They determine **max contracts** and **DLL** for the next session. Tiers never change intraday.

### 25K PA

| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0 – $999 | 1 | $500 | Level 1 |
| $1,000 – $1,999 | 2 | $500 | Level 2 |
| $2,000+ | 2 | $1,250 | Level 3 |

### 50K PA

| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0 – $1,499 | 2 | $1,000 | Level 1 |
| $1,500 – $2,999 | 3 | $1,000 | Level 2 |
| $3,000 – $5,999 | 4 | $2,000 | Level 3 |
| $6,000+ | 4 | $3,000 | Level 4 |

### 100K PA

| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0 – $1,999 | 3 | $1,750 | Level 1 |
| $2,000 – $2,999 | 4 | $1,750 | Level 2 |
| $3,000 – $4,999 | 5 | $1,750 | Level 3 |
| $5,000 – $9,999 | 6 | $2,500 | Level 4 |
| $10,000+ | 6 | $3,500 | Level 5 |

### 150K PA

| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0 – $1,999 | 4 | $2,500 | Level 1 |
| $2,000 – $2,999 | 5 | $2,500 | Level 2 |
| $3,000 – $4,999 | 7 | $2,500 | Level 3 |
| $5,000 – $9,999 | 10 | $3,000 | Level 4 |
| $10,000+ | 10 | $4,000 | Level 5 |

---

## 4 · Payouts

- **100% payout split** on all approved payouts.
- **Maximum 6 payouts** per PA (PA closes after 6th payout).
- **Minimum payout amount:** $500.
- **50% consistency rule** applies (no single day ≥ 50% of total profit since last payout).
- **Safety Net:** Drawdown limit + $100 — must be maintained for lifetime of PA.
- **Minimum 5 qualifying trading days** before first payout request (allows weekly payouts).

### 4.1 EOD PA Payout Requirements

| Account | Min Trade Days | Min Daily Profit | Safety Net | Min Balance to Request | Max Payouts |
|---|---|---|---|---|---|
| $25K | 5 | $100 | $26,100 | $26,600 | 6 |
| $50K | 5 | $250 | $52,100 | $52,600 | 6 |
| $100K | 5 | $300 | $103,100 | $103,600 | 6 |
| $150K | 5 | $350 | $154,100 | $154,600 | 6 |

### 4.2 Intraday PA Payout Requirements

| Account | Min Trade Days | Min Daily Profit | Safety Net | Min Balance to Request | Max Payouts |
|---|---|---|---|---|---|
| $25K | 5 | $100 | $26,100 | $26,600 | 6 |
| $50K | 5 | $200 | $52,100 | $52,600 | 6 |
| $100K | 5 | $250 | $103,100 | $103,600 | 6 |
| $150K | 5 | $300 | $154,100 | $154,600 | 6 |

### 4.3 Maximum Payout Per Request — EOD PA

| Payout # | $25K | $50K | $100K | $150K |
|---|---|---|---|---|
| 1 | $1,000 | $1,500 | $2,000 | $2,500 |
| 2 | $1,000 | $1,500 | $2,500 | $3,000 |
| 3 | $1,000 | $2,000 | $2,500 | $3,000 |
| 4 | $1,000 | $2,500 | $3,000 | $3,000 |
| 5 | $1,000 | $2,500 | $4,000 | $4,000 |
| 6 | $1,000 | $3,000 | $4,000 | $5,000 |

### 4.4 Maximum Payout Per Request — Intraday PA

| Payout # | $25K | $50K | $100K | $150K |
|---|---|---|---|---|
| 1 | $1,000 | $1,500 | $2,000 | $2,500 |
| 2 | $1,000 | $2,000 | $2,500 | $3,000 |
| 3 | $1,000 | $2,500 | $3,000 | $3,000 |
| 4 | $1,000 | $2,500 | $3,000 | $4,000 |
| 5 | $1,000 | $3,000 | $4,000 | $4,000 |
| 6 | $1,000 | $3,000 | $4,000 | $5,000 |

### 4.5 50% Consistency Rule

- No single profitable day may account for ≥ 50% of total profit since last approved payout.
- Quick calc: **Highest Profit Day ÷ 0.5 = Minimum Total Profit Required**.
- Resets after each approved payout.
- Being above 50% does **not** fail the account — payout option is simply unavailable until met.

---

## 5 · Inactivity Rule (PA)

- Must record **≥ 2 trading days with $50+ net profit** within every rolling 30-day period.
- Failure → account permanently closed; cannot be reinstated.
- Breakeven or losing days do not count.

---

## 6 · Prohibited Activities

1. **Account sharing** — May not share access credentials or accounts with anyone.
2. **Third-party payments** — Must use your own bank account / card for fees and payouts.
3. **Bad-faith chargebacks** — No disputes or refund requests in bad faith.
4. **False information** — No misleading identity, residency, or financial documents.
5. **VPN / proxy abuse** — No tools to misrepresent identity, device, or location to evade rules.
6. **System manipulation** — No tampering with trade logs, communications, or impersonating staff.
7. **Exploitative use** — No gaming or undermining the program's purpose.
8. **No stop losses** — All trades must have pending or mental stop losses with defined risk management.
9. **High-risk strategies** — No disproportionate risk (e.g., 5-tick TP with 150-tick SL).
10. **Using threshold as stop loss** — May not use full drawdown as a stop-loss mechanism.
11. **Stockpiling evals** — No cycling through discounted evals to chase windfall profits.
12. **Unsustainable strategies** — Must demonstrate consistent growth and sustainability.
13. **Deviating from professional standards** — Must trade as if using a personally funded account.
14. **HFT / simulation exploitation** — No high-frequency trading or exploitative strategies.
15. **Unauthorized users** — Only the registered owner may access or verify the account.
16. **Resource sharing** — No sharing MAC addresses, IPs, credit cards, or trade copying with others.
17. **Multiple user accounts** — Creating multiple accounts is a bannable offense.
18. **Holding through close** — All positions must be closed before market close.
19. **News gambling** — Normal news trading OK; "chasing" or straddling news outcomes is not.
20. **No hedging** — Directional trading only. No simultaneous long/short on same or correlated instruments.

---

## 7 · Enforcement Checklist

When reviewing any Apex trade, flag if:

- [ ] Position size exceeds current tier max contracts
- [ ] Trade held past **4:59 PM ET** (all positions must be flat before close)
- [ ] Drawdown threshold approached within 20% — flag immediately
- [ ] PA: DLL reached or exceeded for the session
- [ ] PA: trading above tier-allowed contract size
- [ ] PA: simultaneous long/short positions (hedging)
- [ ] PA: no stop loss or risk management on open trade
- [ ] PA: single day profit approaching 50% of total (consistency risk)
- [ ] Inactivity: fewer than 2 qualifying days ($50+ profit) in rolling 30-day window
- [ ] Emotional state suggests revenge trading or forced entry

---

## 8 · Key Differences: EOD vs Intraday Quick Reference

| | EOD Path | Intraday Trailing Path |
|---|---|---|
| **Eval drawdown** | Calculated at close, enforced next session | Real-time trailing with peak balance |
| **Eval DLL** | Yes (fixed) | No |
| **PA drawdown** | EOD-based, stops at Starting Balance + $100 | Intraday trailing, stops at Starting Balance + $100 |
| **PA DLL** | Tier-based | Tier-based |
| **Payout min daily profit (50K)** | $250 | $200 |
| **Payout min daily profit (100K)** | $300 | $250 |
| **Payout min daily profit (150K)** | $350 | $300 |
| **Max payouts** | 6 | 6 |
| **Payout split** | 100% | 100% |

---

> 📝 **Notes:** Max 20 PAs active simultaneously (across all types). PA activation fee is one-time, non-refundable. If PA is disqualified, a new eval must be passed.
