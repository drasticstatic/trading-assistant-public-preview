# Apex Trader Funding — Legacy Rules Reference
> Compiled from official Apex evaluation and PA PDFs + plan comparison images + legacy webcopy (Eval & PA pages).
> Source files: `Rules_Evaluation.pdf`, `Rules_Performance Account (PA).pdf`, `Apex 50K vs 100K vs 100K-static.png`, `apex-rules_legacy_webcopy_EVAL.md`, `apex-rules_legacy_webcopy_PA.md`
> Last updated: March 2026
> ⚠️ These are the **legacy intraday trailing** rules. Christopher's accounts (APEX-484839-05 and -06) are on this model.

---

## Plan Comparison (All Legacy Plans)

| Plan | Contracts (Minis) | Micros Equiv. | Profit Goal | Trailing Threshold | Monthly Cost |
|------|--------------------|---------------|-------------|-------------------|--------------|
| 25K Full | 4 | 40 | — | $1,500 trailing | — |
| 50K Full | 10 | 100 | $3,000 | $2,500 trailing | $197 |
| 75K Full | 12 | 120 | — | $2,750 trailing | — |
| 100K Full | 14 | 140 | $6,000 | $3,000 trailing | $297 |
| 150K Full | 17 | 170 | — | $5,000 trailing | — |
| 250K Full | 27 | 270 | — | $6,500 trailing | — |
| 300K Full | 35 | 350 | — | $7,500 trailing | — |
| 100K Static | 2 | 20 | $2,000 | $625 fixed (never moves) | $297 |

> **No daily drawdown limit** on any plan.

---

## Full vs Static — Key Differences

### FULL Accounts
- Trailing threshold moves up with your **highest intraday live balance** (not just closed trades)
- In **PA/funded accounts**, the trailing stops once the liquidation threshold reaches **initial balance + $100** (the "safety net")
  - Example (50K): trailing stops when threshold reaches $50,100
  - At that point, you can never blow from profits — only from going below starting balance + $100
- During **evaluation**: trailing behavior differs by platform (see below)

### STATIC Accounts
- Drawdown level is **permanently fixed** and never moves
  - 100K Static: fixed at $99,375 ($625 below start)
- Fewer contracts allowed (2 minis / 20 micros on 100K Static)
- Lower profit goal ($2,000 vs $6,000 on 100K)

> Static = conservative safety net, smaller position size. Full = larger contracts, higher risk/reward.

---

## Rithmic vs Tradovate — Trailing Differences

| Platform | Evaluation Trailing Behavior | PA/Funded Trailing Behavior |
|----------|-----------------------------|-----------------------------|
| **Rithmic** | Trailing **stops** when threshold reaches the profit target level (e.g., $53,000 on 50K) | Trailing stops at initial balance + $100 (same as Tradovate) |
| **Tradovate** | Trailing **continues indefinitely** — does NOT stop during evaluation | Trailing stops at initial balance + $100 (same as Rithmic) |

> ⚠️ This is a critical difference during evaluation. On Tradovate, a large intraday spike can permanently raise your threshold even if you close lower.

---

## Evaluation Rules

### Minimum Trading Days
- **7 minimum trading days** required (non-consecutive) to qualify for pass
- **No maximum time limit** — take as long as you need
- **No weekly trading requirement** — account stays active as long as monthly subscription is paid
- Failed accounts not reset within 8 days will be disabled if no active subscription

### Drawdown
- **No daily drawdown limit**
- Trailing threshold is based on **highest intraday live balance** (not just end-of-day close)
- Example: balance peaks at $100,875 intraday → threshold moves to $97,875, even if you close lower

### Trade Close-Out
- All trades must be closed and pending orders cancelled by **4:59 PM ET**
- Apex has an auto-close safeguard at 4:59 PM ET — this is a last resort, NOT a primary tool
- Orders NOT attached to a position must be manually cancelled or they may liquidate the account
- Markets with earlier closes (e.g. GC, CL) must be closed at their designated earlier time
- **No overnight holds permitted**
- ⚠️ Leaving trades open may result in gaps that affect your threshold, potentially causing account failure

### Holiday / Sunday Rules
- Sundays count as part of Monday's trading day (session = 6:00 PM ET Sunday → 4:59 PM ET Monday)
- You CAN trade on holidays if the market is open
- Half-day holidays do NOT count as a trading day
- During early holiday closures, trades must be closed at the market's designated earlier time

### Position Sizing
- Max contracts applies across all instruments simultaneously
  - Example (100K Full): 14 total — could be 10 NQ + 4 GC
- Micros available: MES, MNQ, MYM, M2K, MGC, M6A, M6E, M6J, MCL

### Passing the Evaluation
- Account balance must close **at or above the profit goal** (net of commissions)
- Always check the provider account balance (RTrader Pro / Tradovate), not NinjaTrader (which may exclude commissions)
- After meeting profit goal + 7 trading days, wait for midnight ET report to update
- You'll receive an email confirming you passed; it will appear in the "Passed Eval" section of your dashboard

### Account Violations
- Dropping below trailing threshold = failed evaluation
- Evaluation accounts: can be reset (cost applies)
- Reset allows fresh start with full balance and threshold
- If account is in failed status at renewal, balance is reset as part of the renewal fee

### Maintaining the Profit Goal
- If you reach the profit goal before completing minimum trading days, ensure your balance stays above the goal until the requirement is met

---

## Evaluation Billing & Subscription

- Monthly fee includes: evaluation account, Level 1 data feed, NinjaTrader license key
- **No additional fees** besides the monthly evaluation fee
- **Reset fee**: optional — resets balance and drawdown to original state (does not change billing cycle)
- Failing does NOT automatically cancel your account — you must manually cancel in Members' Area
- Recurring billing continues until you cancel
- **72-hour grace period** for failed renewal payments — update payment info or manually renew
- Billing cycle starts on signup day regardless of when you start trading
- Non-professional data fees are included; selecting "Professional" incurs $115+/month per exchange

### Platform Conversion
- Cannot convert between Rithmic, Tradovate, or WealthCharts — must sign up for a new plan
- No refunds for selecting the wrong plan or platform

---

## PA Activation Procedure

1. **Automated detection**: System detects you've met trading days + profit target after market close
2. **Email notification**: You'll receive an email with instructions (check "Passed Evals" tab if no email after 2 days)
3. **Pay PA activation fee**: Select lifetime or monthly membership and complete payment
   - System automatically cancels your passed evaluation account — do NOT manually cancel it
4. **Account creation**: PA account ready within up to 4 hours; same username/password as evaluation
5. **Activate in order**: Activate passed evaluations sequentially (01, 02, 03...) — system processes lowest account number first
6. **Lifetime before monthly**: If mixing fee types, pay lifetime fees first

### PA Activation Fees

**Rithmic/WealthCharts:**
| Account Size | Monthly | Lifetime |
|-------------|---------|----------|
| 25K | $85 | $130 |
| 50K | $85 | $140 |
| 100K (Full & Static) | $85 | $220 |
| 150K | $85 | $260 |
| 250K | $85 | $300 |
| 300K | $85 | $340 |

**Tradovate:**
| Account Size | Monthly | Lifetime |
|-------------|---------|----------|
| 25K | $105 | $150 |
| 50K | $105 | $160 |

---

## Performance Account (PA) Rules

> These rules apply AFTER passing the evaluation. More strict than eval.
> ⚠️ Evaluation accounts have NO consistency rules. PA and Live accounts do.

### Account Update Notifications (Violation Alerts)
- Apex sends notifications when trading activity impacts payout eligibility
- Previously violations were only discovered at payout request — now you're notified the next trading day
- **If a violation is triggered:**
  - Payout request suspended for **8 trading days** from violation date
  - All profits from the violation day are **removed**
  - Payout eligibility limited to profits earned **after** the violation date
  - Must complete 5 qualifying trading days with min $150/day profit after suspension
  - Full eligibility restored after completing next approved payout at maximum amount for account size

### 1. Contract Scaling Rule
- **Phase 1:** Restricted to **half** of maximum allowed contracts until threshold is cleared
- **Threshold cleared when:** EOD balance > initial balance + trailing drawdown + $100
  - 100K Full: full contracts after EOD balance > $103,100
  - 50K Full: full contracts after EOD balance > $52,600
  - 100K Static: full contracts after reaching $2,600 safety net
- After threshold is cleared: full contract limit available from next full session
- **Once cleared, full contracts remain available even if balance drops below threshold**
- **Single violation**: close excess contracts immediately; profits from violation removed; 8 additional compliant trading days required before next payout
- **Repeated violations**: account closure and forfeiture of all balances

### 2. 30% Negative P&L Rule (MAE)
- Open (unrealized) negative P&L cannot exceed **30% of start-of-day profit balance**
- This is NOT a daily loss limit — it's a per-trade/open exposure rule
- Example: if start-of-day profit = $4,000, open loss cannot exceed $1,200 at any moment
- **New/low profit accounts**: 30% is based on the trailing threshold (e.g., 30% of $2,500 on 50K = $750)
- If EOD profit balance doubles the safety net: **50% limit** applies instead of 30%
- **Static accounts below safety net ($2,600)**: max loss per trade = $187.50 (30% of $625 fixed drawdown)
- **Static accounts above safety net**: recalculated on current profit balance
- Minor/momentary breaches corrected promptly won't trigger automatic penalty, but repeated breaches lead to warnings/restrictions

### 3. 5:1 Risk-Reward Ratio Rule
- Stop loss cannot exceed **5x your profit target** on any trade
- Example: if TP = 10 ticks, maximum SL = 50 ticks; if TP = $100, max SL = $500
- Violations may result in warning, probation, or payout disqualification

### 4. No Hedging / Correlated Instruments
- Holding simultaneous long AND short positions on the same or correlated instrument is **strictly prohibited**
- Includes: opposite directions in micro vs mini of same market, spread trading correlated indices (e.g., long ES / short YM), opposing positions in correlated markets (indices, metals, grains, currencies)
- Applies across all accounts in same household
- **Violation = account closure**

### 5. One Direction Rule
- Only long OR short at any one time — never both
- Cannot have open orders for both sides of the market simultaneously
- No bracket orders in both directions without clear directional bias

### 6. 30% Consistency Rule (Windfall)
- No single trading day can account for more than **30% of total profit balance** at payout request
- Resets after each approved payout (only looks at profits since last approval)
- **Formula**: Highest Profit Day ÷ 0.3 = Minimum Total Profit Required
  - Example: highest day = $1,500 → need at least $5,000 total profit to request payout
- Applies until **6th payout** or transfer to Live Prop Account, then no longer in effect

### 7. Stop Losses & Risk Management
- **Stop losses are required** — trading without stops or relying on trailing threshold to "blow the account" is prohibited
- Every trade must have a pre-defined risk level (hard stop or mental stop)
- Mental stops are permitted but must be honored (hard stops required during Probation)
- Trail stops forward to protect profits — do NOT move stops backward to increase risk
- ATM strategies encouraged for automating stop/target management

### 8. Contract Size Consistency
- Must maintain consistent overall contract size across trades over time
- Cannot use large contracts early then downsize to coast to payout
- Growing balance warrants steady increase in contract size — that's normal
- Decreasing balance warrants responsible reduction in size
- Cycling through multiple PAs with large initial bets then blowing up = prohibited

### 9. Automation Prohibition
- **AI, autobots, algorithms, fully automated systems, HFT** — all prohibited on PA/Live accounts
- No hands-off, set-and-forget, or 24-hour continuous trading
- Violation = immediate account closure and forfeiture of all funds
- Trade copiers/external programs: results are trader's responsibility; submit software for approval before use

### 10. News Trading
- Allowed during significant market events
- Must take position in **one direction only** during a news event
- Must not violate other consistency rules (30% profit/day, 30% negative P&L, etc.)

### 11. Flipping Trades
- Opening and closing trades quickly within same day is allowed
- Must achieve minimum **$50 profit per day** on at least **5 trading days** to count toward payout eligibility

### 12. Dollar Cost Averaging (DCA)
- Permitted with no restrictions on contract size for additional entries
- No specific rules for entry points, timeframes, or distances
- Must maintain responsible risk-to-reward ratios
- Must not violate other consistency rules

---

## PA Payout Parameters

### Payout Split
- **100% of first $25,000** per account
- **90% of profit** after that
- After 5 approved payouts: eligible for **100% payouts** from 6th payout onward

### Payout Requirements
- **8 trading days** minimum since last payout request
- At least **5 of those 8 days** must show profit of **$50 or more**
- Can continue trading immediately after requesting payout (don't wait for approval)
- If balance falls below minimum required after requesting, payout is simply denied

### Safety Net (First 3 Payouts Only)
- Safety net = drawdown amount + $100
- Must maintain safety net balance for first 3 approved payouts
- From 4th payout onward: safety net no longer applies
- Minimum $500 payout allowed even if it encroaches on safety net
- For payouts > $500: balance must exceed safety net by the additional amount above $500

### Minimum Required Balance for Payout

| Account Size | Min Required Balance |
|-------------|---------------------|
| $25K | $26,600 |
| $50K | $52,600 |
| $100K | $103,100 |
| $150K | $155,100 |
| $250K | $256,600 |
| $300K | $307,600 |
| $100K Static | $102,600 |

### Maximum Payout (First 5 Payouts)

| Account Size | Max Payout |
|-------------|-----------|
| $25K | $1,500 |
| $50K | $2,000 |
| $100K | $2,500 |
| $150K | $2,750 |
| $250K | $3,000 |
| $300K | $3,500 |
| $100K Static | $1,000 |

> From 6th payout: no maximum, provided minimum balance threshold remains after payout.

### Multiple Accounts
- Each account is independent — can request max payout from each every 8 trading days
- Example: 10 × $50K accounts = $20,000 every 8 trading days
- Max **20 active PA accounts** across all people in same household/companies
- Copy trading across your own PAs is allowed, but hedging rule still applies (all must trade same direction)

---

## Prohibited Activities (PA)

- Trading without stop losses or risk management
- High-risk strategies (e.g., 5-tick TP with 150-tick SL)
- Using trailing threshold as a stop loss to absorb large losses
- Stockpiling discounted evaluation accounts to cycle through
- Unsustainable strategies that don't demonstrate consistent growth
- Deviating from professional standards
- Manipulation of simulated trading environment (including HFT)
- Unauthorized users accessing the account
- Sharing MAC addresses, computers, IPs, credit cards, or trade copying with other traders
- Creating multiple user accounts
- Holding positions through market close

---

## Probation

- Account placed on probation = specific compliance guidelines need attention
- Hard stop-loss levels become **mandatory** during probation (mental stops not allowed)
- Non-compliance during probation → payout denial, profit removal, and/or account closure
- Probation is a chance to demonstrate consistent, responsible trading

---

## Claude's Enforcement Checklist (Apex Legacy)

When reviewing any Apex trade, flag if:
- [ ] Position size exceeded plan max (100K Full = 14 contracts / 140 micros)
- [ ] Trade held past **4:00 PM ET** (personal EOD target — firm deadline is 4:59 PM ET, personal rule is more conservative)
- [ ] Trailing threshold approached within 20% — flag immediately
- [ ] PA: open loss exceeded 30% of start-of-day profit
- [ ] PA: stop loss exceeded 5x profit target
- [ ] PA: trading full contracts before threshold was cleared (half-contract scaling rule)
- [ ] PA: simultaneous long/short (hedging) or correlated instrument hedging
- [ ] PA: single day profit > 30% of total profit balance (windfall rule)
- [ ] PA: contract size inconsistency (large early, small later)
- [ ] Emotional state suggests revenge trading or forced entry

---

## Notes / Open Items
> 📝 Add account statement screenshots and current balance tracking here as accounts progress
> 📝 Christopher's active accounts: APEX-484839-05 and -06 (legacy intraday trailing model)

