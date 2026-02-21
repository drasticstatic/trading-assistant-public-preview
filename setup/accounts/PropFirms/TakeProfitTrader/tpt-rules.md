# Take Profit Trader — Rules Reference
> Compiled from official TPT help center rule articles (all 6 rules).
> Source images: `TPT 50K.png`, `TPT 100K.png`
> Last updated: February 2026

---

## Plan Comparison

| Account Size | Max Contracts (Micros) | Profit Target | Max Trailing Drawdown | Daily Loss Limit | Monthly Cost |
|--------------|------------------------|---------------|-----------------------|------------------|--------------|
| $25,000 | 3 (30 micros) | $1,500 | $1,500 | ~~$X~~ **REMOVED** | — |
| $50,000 | 6 (60 micros) | $3,000 | $2,000 | ~~$1,100~~ **REMOVED** | $170 |
| $75,000 | 9 (90 micros) | $4,500 | $2,500 | ~~$X~~ **REMOVED** | — |
| $100,000 | 12 (120 micros) | $6,000 | $3,000 | ~~$2,200~~ **REMOVED** | $330 |
| $150,000 | 15 (150 micros) | $9,000 | $4,500 | ~~$X~~ **REMOVED** | — |

> **Note:** Daily Loss Limit has been officially removed across all plans. EOD Trailing Drawdown is the primary risk control.
> **Micros:** 10x multiplier — e.g., $50K account = up to 60 micro contracts.

---

## Rule 1 — Hit Your Profit Target

- Each account has a fixed profit target (see table above)
- Profit target must be hit **with all other rules intact**
- Profit is measured net of commissions and fees

---

## Rule 2 — Do Not Exceed Maximum Position Size

- Maximum position size is a **static number of contracts** open at any one time
- Applies across all instruments simultaneously
- Micros allowed at **10x** the contract limit (e.g., $100K = 12 contracts OR 120 micros)
- Exceeding the limit results in order rejection and potential account action

---

## Rule 3 — EOD Trailing Drawdown ⚠️ ACCOUNT KILLER

### How It Works
- The trailing drawdown level updates **once per day at end of day** (based on your highest EOD balance)
- However, **liquidation triggers in real time** — any time your account drops to the Minimum Account Balance, whether through realized OR unrealized losses, the account is **immediately liquidated**
- In the dashboard (Control Center) this appears as **"Minimum Account Balance"**

### Trailing Mechanism
- Minimum Account Balance starts at: Account Size − Trailing Drawdown
  - Example ($100K): $100,000 − $3,000 = **$97,000 minimum**
- If your EOD balance grows, the minimum account balance trails upward by the same amount
- Once the minimum account balance reaches the **original starting balance**, it stops trailing and locks in permanently

### Example ($25K account)
| Day | EOD Balance | Min Account Balance |
|-----|------------|---------------------|
| Start | $25,000 | $23,500 |
| Day 1 (+$1,000) | $26,000 | $24,500 |
| Day 2 (+$500) | $26,500 | $25,000 ← **locks here, stops trailing** |

### Key Distinction from Apex
- **TPT:** Trailing level updates at EOD only, but liquidation is real-time (intraday)
- **Apex:** Trailing threshold moves with intraday peak, not just EOD

> ⚠️ **Critical:** An open losing trade that hits the Minimum Account Balance mid-session = immediate liquidation. This is what caused the account auto-liquidation. The "EOD" in the rule name refers to when the level *updates*, not when liquidation is enforced.

---

## Rule 4 — Trade Approved Products, During Approved Hours

### Approved Exchanges
- CME, CBOT, NYMEX, COMEX
- Most standard futures products on these exchanges are permitted
- If an order is rejected on a product you believe should be allowed, contact support

### Trading Hours
- **Trading window:** 6:00 PM Eastern → 5:00 PM Eastern (next day)
- **Day ends:** 5:00 PM Eastern — positions must be closed before this
- **Holding past 5 PM ET = automatic failure and account loss**
- Trades opened at or after 6:00 PM ET count toward the **next** trading day

### Holiday Rules
- Market hours change on holidays — **trader's responsibility** to monitor
- Missing a holiday-adjusted close time = account liquidation

> ⚠️ Note: TPT close deadline is **5:00 PM ET**, not 4:59 PM ET like Apex. Know which account you're in.

---

## Rule 5 — Be Consistent

### Requirement 1: Minimum Trading Days
- **Minimum 5 trading days** required (a day = any day with at least one trade)
- No maximum time limit — take as long as needed
- If profit target is hit in 2 days, still need 3 more active trading days

### Requirement 2: Profit Consistency (50% Rule)
- **No single trading day may account for 50% or more of total net profits**
- Formula: `Highest Profit Day ÷ Net P/L < 50%`
- If this threshold is breached, the account is **not eligible for funding** — you must keep trading to dilute that day's percentage

### Auto-Adjusted Profit Goal
- Dashboard shows an **Updated Profit Goal** = `Net P/L × 2`
- This is the new minimum you must reach to get your highest day below 50%

### Example ($50K account, $3,000 target)
| | |
|---|---|
| Day 1 | +$2,000 |
| All other days | +$1,100 |
| Net P/L | $3,100 |
| Consistency % | $2,000 ÷ $3,100 = **65% — FAIL** |
| Updated goal | $3,100 × 2 = **$6,200** (keep trading) |
| At $4,001 net | $2,000 ÷ $4,001 = 49.9% ✅ |

> ⚠️ **Don't have one massive green day early in the eval.** It locks you into a higher profit requirement.

---

## Rule 6 — No Counter Positions

### Core Rule
- Cannot hold **opposite positions** (long on one account, short on another) in the same or closely related products across **any accounts under the same beneficial control**

### Related Contract Pairs (prohibited to trade opposite directions across accounts)
- ES ↔ MES
- NQ ↔ MNQ
- YM ↔ MYM
- *(List is not exhaustive — other correlated pairs may apply)*

### Consequences
- **Both accounts** are automatically liquidated
- All profits forfeited
- Repeated or severe violations = permanent ban
- TPT uses **near real-time detection technology** (CME Rules 432, 531, 533, 534, 539)

### Important Notes
- Applies even if positions are **unintentional** (e.g., misconfigured trade copier)
- **Trade copiers/automation:** Trader is fully responsible — TPT is not liable
- Multiple accounts are allowed, just never hold opposing positions across them
- Two people in the same household: allowed, as long as no coordinated opposite trades

---

## Claude's Enforcement Checklist (TPT)

When reviewing any TPT trade, flag if:
- [ ] Position size exceeded plan max (100K = 12 contracts / 120 micros)
- [ ] Account balance approached Minimum Account Balance during session (intraday real-time risk)
- [ ] Trade held past **4:00 PM ET** (personal EOD target — firm deadline is 5:00 PM ET, personal rule is more conservative)
- [ ] Single day P&L ≥ 50% of total net P/L (consistency violation risk)
- [ ] Fewer than 5 trading days completed before claiming profit target pass
- [ ] Counter/opposing positions detected across multiple TPT accounts
- [ ] Trade on non-approved instrument or outside approved hours
- [ ] Holiday schedule checked before session
- [ ] Emotional state suggests revenge trading or forced entry

---

## Notes / Open Items
> 📝 Add your specific TPT account number(s) and current balance tracking here
> 📝 Add approved instruments list confirmation from support if any non-standard products are traded
> 📝 Add account statement screenshots as accounts progress
