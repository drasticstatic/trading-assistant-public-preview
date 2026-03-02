# Apex Trader Funding — New Rules Reference (EOD + Intraday Paths)
> Compiled from official Apex webcopy for the new EOD and Intraday Trailing evaluation paths.
> Source files: `apex-rules_new_webcopy_EOD.md`, `apex-rules_new_webcopy_Intraday.md`
> Last updated: March 2026
> ⚠️ **Max 6 payouts per PA — severely limited vs legacy rules.** After 6 payouts the PA closes.

---

## Quick-Reference: EOD vs Intraday Trailing

| Feature | EOD Path | Intraday Trailing Path |
|---------|----------|----------------------|
| **Drawdown type** | End-of-day; calculated at market close, enforced real-time next session | Real-time intraday trailing; follows peak balance (incl. unrealized P&L) |
| **Drawdown movement** | Trails highest EOD balance upward only; never moves down | Trails highest intraday balance upward only; never moves down |
| **DLL during Eval** | Yes — fixed per account size | No DLL |
| **DLL during PA** | Yes — tier-based scaling | Yes — tier-based scaling |
| **Eval access period** | 30 calendar days | 30 calendar days |
| **Min trading days (Eval)** | None — can pass in 1 day | None — can pass in 1 day |
| **PA activation window** | 7 calendar days after marked Passed | 7 calendar days after marked Passed |
| **PA scaling** | Tier-based (contracts + DLL) | Tier-based (contracts + DLL) |
| **Payout split** | 100% | 100% |
| **Max payouts per PA** | **6** | **6** |
| **50% consistency** | Yes | Yes |
| **Inactivity rule** | 2 days ≥$50 profit per rolling 30 days | 2 days ≥$50 profit per rolling 30 days |
| **Trailing stops (PA)** | At starting balance + $100 | At starting balance + $100 |
| **Trailing stops (Eval — Rithmic/WC)** | At profit target balance + $2,000 | At profit target balance + $2,000 |
| **Trailing stops (Eval — Tradovate)** | Trails indefinitely | Trails indefinitely |

---

## Evaluation Account Parameters (Both Paths)

| | 25K | 50K | 100K | 150K |
|---|---|---|---|---|
| **Profit Target** | $1,500 | $3,000 | $6,000 | $9,000 |
| **Max Drawdown** | $1,000 | $2,000 | $3,000 | $4,000 |
| **DLL (EOD only)** | $500 | $1,000 | $1,500 | $2,000 |
| **Max Contracts** | 4 | 6 | 8 | 12 |
| **Access Period** | 30 days | 30 days | 30 days | 30 days |
| **Consistency** | Not applied | Not applied | Not applied | Not applied |
| **Scaling** | Not applied | Not applied | Not applied | Not applied |

### Passing the Evaluation
- Reach the profit target while respecting drawdown rules
- No minimum trading days — may pass in 1 day
- EOD: must not touch or breach EOD Threshold at any time
- Intraday: must not touch or breach Trailing Threshold at any time
- 7 calendar days to activate PA after being marked Passed (after market close)
- PA activation fee is one-time, non-transferable

---

## EOD Drawdown — How It Works

1. **Calculated once per day** at market close (4:59:59 PM ET) based on EOD balance
2. **Enforced in real time** during the next trading session
3. Trails the highest achieved EOD balance — **never moves downward**
4. If account balance **touches or falls below** the EOD Threshold → immediate liquidation → eval fails / PA closes
5. **PA trailing stops** when threshold reaches starting balance + $100
   - Example (50K): threshold stops at $50,100 (when highest EOD balance reaches $52,600)
6. **Eval trailing stops (Rithmic/WC)**: at profit target balance + $2,000
7. **Eval trailing (Tradovate)**: trails indefinitely

### Daily Loss Limit (DLL) — EOD Path
- Fixed during evaluation; tier-based during PA
- If reached → positions auto-liquidated → trading paused for remainder of session
- **Does NOT fail the account** — trading resumes next session at 6 PM ET
- DLL and EOD Threshold are separate rules; DLL does not affect the threshold

---

## Intraday Trailing Drawdown — How It Works

1. **Adjusts in real time** based on highest intraday balance (Peak Balance)
2. Peak Balance includes **both realized and unrealized gains**
3. Threshold only moves upward — **never moves down**
4. If account balance **touches or falls below** the Trailing Threshold → immediate liquidation → eval fails / PA closes
5. **No DLL during Intraday Evaluation** — risk controlled entirely by trailing threshold
6. **PA trailing stops** when threshold reaches starting balance + $100
7. **Eval trailing stops (Rithmic/WC)**: at profit target balance + $2,000
8. **Eval trailing (Tradovate)**: trails indefinitely

---

## Performance Account (PA) Parameters (Both Paths)

| | 25K | 50K | 100K | 150K |
|---|---|---|---|---|
| **Max Drawdown** | $1,000 | $2,000 | $3,000 | $4,000 |
| **Scaling** | Tier-based | Tier-based | Tier-based | Tier-based |
| **Max Contracts (at max tier)** | 2 | 4 | 6 | 10 |
| **DLL** | Tier-based | Tier-based | Tier-based | Tier-based |
| **Inactivity Rule** | Yes | Yes | Yes | Yes |

---

## PA Tier-Based Scaling (Contracts + DLL)

Tiers are set daily at market close based on EOD balance. They do not change intraday.

### 25K PA
| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0–$999 | 1 | $500 | Level 1 |
| $1,000–$1,999 | 2 | $500 | Level 2 |
| $2,000+ | 2 | $1,250 | Level 3 |

### 50K PA
| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0–$1,499 | 2 | $1,000 | Level 1 |
| $1,500–$2,999 | 3 | $1,000 | Level 2 |
| $3,000–$5,999 | 4 | $2,000 | Level 3 |
| $6,000+ | 4 | $3,000 | Level 4 |

### 100K PA
| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0–$1,999 | 3 | $1,750 | Level 1 |
| $2,000–$2,999 | 4 | $1,750 | Level 2 |
| $3,000–$4,999 | 5 | $1,750 | Level 3 |
| $5,000–$9,999 | 6 | $2,500 | Level 4 |
| $10,000+ | 6 | $3,500 | Level 5 |

### 150K PA
| Profit Range | Max Contracts | DLL | Tier |
|---|---|---|---|
| $0–$1,999 | 4 | $2,500 | Level 1 |
| $2,000–$2,999 | 5 | $2,500 | Level 2 |
| $3,000–$4,999 | 7 | $2,500 | Level 3 |
| $5,000–$9,999 | 10 | $3,000 | Level 4 |

---

## PA Payout Rules (Both Paths)

### Payout Requirements

| | 25K | 50K | 100K | 150K |
|---|---|---|---|---|
| **Min Trade Days** | 5 | 5 | 5 | 5 |
| **Min Daily Profit (EOD)** | $100 | $250 | $300 | $350 |
| **Min Daily Profit (Intraday)** | $100 | $200 | $250 | $300 |
| **Safety Net** | $26,100 | $52,100 | $103,100 | $154,100 |
| **Min Balance to Request** | $26,600 | $52,600 | $103,600 | $154,600 |
| **Max Payouts** | **6** | **6** | **6** | **6** |

- **Payout split**: 100%
- **Minimum payout**: $500 per request
- **Frequency**: Up to weekly (after 5 qualifying days)
- **Safety Net**: Drawdown limit + $100 — must be maintained for lifetime of PA
- **50% Consistency**: No single profitable day may account for ≥50% of total profit since last approved payout
  - Formula: Highest Profit Day ÷ 0.5 = Minimum Total Profit Required
  - Resets after each approved payout

### Maximum Payout Per Request (EOD PA)

| Payout # | $25K | $50K | $100K | $150K |
|---|---|---|---|---|
| 1 | $1,000 | $1,500 | $2,000 | $2,500 |
| 2 | $1,000 | $1,500 | $2,500 | $3,000 |
| 3 | $1,000 | $2,000 | $2,500 | $3,000 |
| 4 | $1,000 | $2,500 | $3,000 | $3,000 |
| 5 | $1,000 | $2,500 | $4,000 | $4,000 |
| 6 | $1,000 | $3,000 | $4,000 | $5,000 |

### Maximum Payout Per Request (Intraday PA)

| Payout # | $25K | $50K | $100K | $150K |
|---|---|---|---|---|
| 1 | $1,000 | $1,500 | $2,000 | $2,500 |
| 2 | $1,000 | $2,000 | $2,500 | $3,000 |
| 3 | $1,000 | $2,500 | $3,000 | $3,000 |
| 4 | $1,000 | $2,500 | $3,000 | $4,000 |
| 5 | $1,000 | $3,000 | $4,000 | $4,000 |
| 6 | $1,000 | $3,000 | $4,000 | $5,000 |

> ⚠️ **After 6 payouts, the PA is permanently closed.** Must pass a new evaluation to get another PA.
> Total max extractable per PA (100K EOD): $6K+$6K+$2.5K+$3K+$4K+$4K = **$18,000** — severely limited.

---

## Inactivity Rule (PA — Both Paths)

- Must record **at least 2 trading days with ≥$50 net profit** within every rolling 30-day period
- Measured continuously — if 30 consecutive calendar days pass without meeting threshold, PA closes
- Closure is **permanent and irreversible** — no reinstatement
- Breakeven or losing days do NOT count
- Simply placing trades without reaching $50 profit does NOT prevent closure

---

## Prohibited Activities (Both Paths)

All of the following result in immediate account closure:

1. **No hedging** — directional trading only; no simultaneous long/short on same or correlated instruments
2. **No account sharing** — only registered owner may trade; no sharing credentials, MACs, IPs, credit cards
3. **No multiple user accounts** — bannable offense
4. **No VPNs/proxies** to misrepresent identity, location, or evade rules
5. **No system manipulation** — no HFT, no exploitation of simulation environment
6. **No holding positions through market close** — all positions must be flat before close
7. **Stop losses required** — every trade must have pending or mental stop loss with defined risk management
8. **No high-risk strategies** — e.g., 5-tick TP with 150-tick SL
9. **No using threshold as stop loss** — prohibited from using full drawdown as loss absorption
10. **No stockpiling evals** — buying multiple discounted evals to cycle through and blow up for windfall
11. **No unsustainable strategies** — must demonstrate consistent growth
12. **No chargebacks in bad faith**
13. **No false/misleading information** — identity, residency, financial status
14. **News trading allowed** for normal strategy — but "chasing" or gambling both sides is prohibited

---

## Enforcement Checklist (New Rules)

When reviewing any Apex trade on the new EOD or Intraday path, flag if:

- [ ] Position size exceeded tier max for current scaling level
- [ ] EOD Path: account touched or fell below EOD Threshold
- [ ] Intraday Path: account touched or fell below Trailing Threshold
- [ ] DLL reached (EOD path) — note: does NOT fail account, just pauses trading
- [ ] Positions held through market close
- [ ] Hedging detected (simultaneous long/short, correlated instruments)
- [ ] Single day profit ≥50% of total profit since last payout (consistency violation)
- [ ] Trading without stop losses or defined risk management
- [ ] Inactivity risk: fewer than 2 qualifying profit days (≥$50) in rolling 30-day window
- [ ] Approaching max payout count (6 per PA) — plan for new eval if needed
- [ ] High-risk strategy detected (disproportionate SL vs TP)

---

## Key Differences from Legacy Rules

| Aspect | Legacy | New (EOD + Intraday) |
|--------|--------|---------------------|
| **Eval min trading days** | 7 days | None (can pass in 1 day) |
| **Drawdown model** | Intraday trailing only | Choice: EOD or Intraday Trailing |
| **DLL** | None | EOD: yes (fixed eval, tier PA); Intraday: PA only |
| **PA consistency rule** | 30% (no single day >30% of total) | 50% (no single day >50% of total) |
| **Max payouts per PA** | Unlimited (after 6th: no cap) | **6 total — then PA closes** |
| **Payout split** | 100% first $25K, then 90% (100% after 5th) | 100% from first payout |
| **Safety net** | First 3 payouts only | Lifetime of PA |
| **Contract scaling (PA)** | Half contracts until threshold cleared | Tier-based from day 1 |
| **30% negative P&L rule** | Yes | Not mentioned in new rules |
| **5:1 risk-reward rule** | Yes | Not mentioned in new rules |
| **Automation prohibition** | Explicit | Not explicitly mentioned |
| **Account sizes** | 25K–300K + 100K Static | 25K, 50K, 100K, 150K only |
| **Max active PAs** | 20 | 20 |

> ⚠️ The new payout caps are the most significant change. Legacy had uncapped payouts after the 6th; new rules close the PA after 6 payouts regardless of remaining profit.


