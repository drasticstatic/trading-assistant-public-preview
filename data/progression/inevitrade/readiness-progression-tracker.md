# 📊 Readiness Progression Tracker
### Built on INEVITRADE Framework | Christopher Wilson
*Living document — tracks progression through Information → Backtesting → Paper → Live phases*

> 📌 *The trade data below is **template/example data** from the INEVITRADE framework — NOT personal trade records. The structure shows how data collection works at each phase.*

---

## 🎯 Milestones

- [ ] ✅ Complete Information Phase
- [ ] 📋 **Backtesting:** Complete 30 Trading Days with Positive Expectancy
- [ ] 📋 **Paper Trading:** Complete 30 Trades with Positive Expectancy
- [ ] 📋 **Live Trading:** Complete 30 Live Trades & Compare with Paper Trade Data

---

## 📈 Progression Board

| Phase | Status | Progress | Target |
|---|---|---|---|
| 🧠 Information | ✅ Complete | 4/4 modules | Watch all lessons |
| 🔬 Backtesting | 🔄 In Progress | — / 30 days | Positive expectancy |
| 📝 Paper Trading | ⏳ Pending | — / 30 trades | Positive expectancy |
| 💰 Live Trading | ⏳ Pending | — / 30 trades | Compare to paper data |

> **Backtesting prereq — Apr 6, 2026:** IT strategy bot indicators (IT SMOG, IT OG, IT ADX, Inevitrade Pro+) have been removed from Fortuna tab 0 (main NQ chart). A **dedicated IT tab** must be set up before replay/backtesting sessions begin. IT Foundation + IT strategy bots currently live on Pane 1 (CL 5min right pane, entity IDs in FORTUNA_WORKFLOW.md). See PENDING-TASKS.md → "Dedicated IT strategy tab — setup".

---

## 📝 Daily Trade Plan Template

| Section | Time | Focus |
|---|---|---|
| 🌅 Pre-Session | Before market open | Mark levels, review bias, set alerts |
| 📊 Trading Session | 9:30–11:00 AM ET | Execute FCR, manage positions |
| 🧘 Personal Check | Mid-session | Emotional state, discipline check |
| 📓 Post-Session | After close | Journal trades, review execution |
| 📋 Planning | Evening | Prep next day's levels, review data |

---

## 💰 Account Risk & Rebalance to Scale

### 🔄 TCL Trading (Re-buy Stack Mechanism)

1. **Split your total capital:**
   - **40%** → Trading Account
   - **60%** → Reserve Account

2. **Risk 50% of Trading Account per trade**
   - On loss → pull from Reserve to restore Trading Account

3. **Rebalance at 50/50**
   - When Trading Account grows to equal Reserve → stop & split 40/60 again
   - Keeps risk controlled while capital grows

4. **Reserve = Insurance**
   - Holds enough for 2–3 losses at any time
   - After loss → move funds from Reserve to Trading Account
   - Replenish Reserve once wins recoup the loss

### 📊 Traditional Risk Models

| Model | Risk/Trade | When to Reduce | Goal |
|---|---|---|---|
| 🚀 **Growth** | 2–3% | Account drops 50%+ | Fast growth, high drawdown risk |
| 🛡️ **Preservation** | 0.5–1% | Always reduce on drops | Consistency, long-term safety |
| ⚖️ **Dynamic** | 1% → 1.5% → 2% | Drop to 0.5% at -25% | Balance growth & protection |

**Dynamic Model Details:**
- Start at **1%** risk per trade
- Increase to **1.5%** at +25% account growth
- Increase to **2%** at +50% account growth
- Drop to **0.5%** if account falls >25%
- Recheck every 10 trades

---

## 📊 Trading Stats (Template Structure)

> *These fields auto-calculate in Notion when Win/Loss checkboxes and R/Factor are filled*

| Metric | Formula | Notes |
|---|---|---|
| Win Rate | Wins ÷ Total Trades | Target: >50% |
| Avg R Factor | Sum(R) ÷ Total Trades | Target: >1.5R |
| Expectancy | (Win% × Avg Win) - (Loss% × Avg Loss) | Must be positive |
| Max Drawdown | Largest peak-to-trough decline | Track per phase |
| Profit Factor | Gross Profit ÷ Gross Loss | Target: >1.5 |

---

## 📋 Master Trade Log Structure

| Field | Description |
|---|---|
| Date | Trade date |
| Instrument | MNQ, MES, SOL, etc. |
| Direction | Long / Short |
| Entry | Entry price |
| Stop Loss | SL price |
| Take Profit | TP price |
| R/Factor | (TP - Entry) ÷ (Entry - SL) |
| Win/Loss | ✅ / ❌ |
| Notes | Setup type, confluences, emotional state |

---

*📌 This tracker is maintained in the [trading-assistant public repo](https://github.com/drasticstatic/trading-assistant).*
*Framework: INEVITRADE Readiness Progression System | Craig & Team*
*Note: Trade data shown is template/example data for structure reference.*

