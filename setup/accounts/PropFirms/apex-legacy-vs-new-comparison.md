# Apex Trader Funding — Legacy vs New Path Comparison

> **Context:** Christopher's accounts (APEX-484839-05 and -06) are on the **Legacy Intraday Trailing** model. Apex has since introduced two new evaluation paths: **EOD Drawdown** and **Intraday Drawdown (New)**. This document compares all three side by side.
> Last updated: March 2026

---

## Side-by-Side Comparison (100K Account)

| Feature | Legacy (Intraday Trailing) | New — EOD Drawdown | New — Intraday Drawdown |
|---|---|---|---|
| **Drawdown Type** | Intraday trailing (real-time) | End-of-Day (calculated at close) | Intraday trailing (real-time) |
| **How It Trails** | Follows highest intraday live balance including unrealized P&L | Follows highest EOD closing balance; recalculated once/day at 4:59 PM ET | Follows highest intraday balance (Peak Balance) including unrealized P&L |
| **Max Drawdown (Eval)** | $3,000 trailing | $3,000 EOD | $3,000 intraday trailing |
| **Daily Loss Limit (Eval)** | ❌ None | ✅ $1,500 fixed | ❌ None |
| **Daily Loss Limit (PA)** | ❌ None | ✅ Tier-based (starts $1,750) | ✅ Tier-based (starts $1,750) |
| **Trailing Stops At (PA)** | Initial balance + $100 ($100,100) | Starting balance + $100 ($100,100) | Starting balance + $100 ($100,100) |
| **Min Trading Days (Eval)** | 7 days | ❌ None (can pass in 1 day) | ❌ None (can pass in 1 day) |
| **Eval Time Limit** | ♾️ Unlimited (monthly sub) | 30 calendar days | 30 calendar days |
| **Max Contracts (Eval)** | 14 minis / 140 micros | 8 minis | 8 minis |
| **Max Contracts (PA Start)** | 7 (half until threshold cleared) | 3 (Tier Level 1) | 3 (Tier Level 1) |
| **Max Contracts (PA Max)** | 14 | 6 (Tier Level 5) | 6 (Tier Level 5) |
| **Scaling System (PA)** | Binary: half contracts → full after threshold cleared | Tier-based: 5 levels based on EOD profit | Tier-based: 5 levels based on EOD profit |
| **Consistency Rule** | 30% (no single day > 30% of total profit) — first 5 payouts only | 50% (no single day > 50% of total profit) — all payouts | 50% (no single day > 50% of total profit) — all payouts |
| **Payout Split** | 100% first $25K, then 90%; 100% from 6th payout | 100% from first payout | 100% from first payout |
| **Max Payouts Per PA** | Unlimited | 6 (then PA closes) | 6 (then PA closes) |
| **Min Daily Profit for Payout** | $50/day on 5 of 8 days | $300/day on 5 days | $250/day on 5 days |
| **Payout Frequency** | Every 8 trading days | Weekly (after 5 qualifying days) | Weekly (after 5 qualifying days) |
| **Max Payout (1st)** | $2,500 | $2,000 | $2,000 |
| **Max Payout (6th)** | No max (from 6th onward) | $4,000 (PA closes after) | $4,000 (PA closes after) |
| **Safety Net** | Drawdown + $100 (first 3 payouts) | Drawdown + $100 (lifetime of PA) | Drawdown + $100 (lifetime of PA) |
| **PA Activation** | Lifetime or monthly fee | One-time fee (no subscription) | One-time fee (no subscription) |
| **Inactivity Rule** | Not specified | 2 days with $50+ profit per 30 days | 2 days with $50+ profit per 30 days |
| **30% MAE Rule** | ✅ Open loss < 30% of start-of-day profit | ❌ Not mentioned | ❌ Not mentioned |
| **5:1 Risk-Reward Rule** | ✅ SL cannot exceed 5× TP | ❌ Not mentioned | ❌ Not mentioned |
| **Contract Size Consistency** | ✅ Must maintain consistent sizing | ❌ Not mentioned | ❌ Not mentioned |

---

## All Account Sizes — Eval Parameters

| Size | Legacy Drawdown | Legacy Max Contracts | EOD Drawdown | EOD DLL | EOD Max Contracts | Intraday Drawdown | Intraday Max Contracts |
|------|----------------|---------------------|-------------|---------|-------------------|------------------|----------------------|
| 25K | $1,500 trailing | 4 | $1,000 EOD | $500 | 4 | $1,000 trailing | 4 |
| 50K | $2,500 trailing | 10 | $2,000 EOD | $1,000 | 6 | $2,000 trailing | 6 |
| 100K | $3,000 trailing | 14 | $3,000 EOD | $1,500 | 8 | $3,000 trailing | 8 |
| 150K | $5,000 trailing | 17 | $4,000 EOD | $2,000 | 12 | $4,000 trailing | 12 |

> **Note:** Legacy also offered 75K, 250K, 300K, and 100K Static plans. New paths only offer 25K–150K.

---

## What Changed

### Evaluation Phase
1. **No minimum trading days** — New paths let you pass in 1 day vs Legacy's 7-day minimum
2. **30-day time limit** — New evals expire after 30 days; Legacy had no time limit (just monthly subscription)
3. **Fewer contracts** — 100K eval went from 14 contracts (Legacy) to 8 (New), a 43% reduction
4. **Daily Loss Limit added** — EOD path has a fixed DLL during eval; Legacy and New Intraday have none
5. **Smaller drawdown amounts** — New 50K has $2,000 drawdown vs Legacy's $2,500; New 150K has $4,000 vs Legacy's $5,000
6. **EOD drawdown option** — Completely new; threshold only moves at market close, not intraday

### Performance Account (PA) Phase
1. **Tier-based scaling replaces binary scaling** — Legacy had simple half/full contracts; New has 5 progressive tiers
2. **DLL introduced on all new PAs** — Legacy had no daily loss limit at all; New paths have tier-based DLL
3. **6-payout cap** — New PAs close after 6 payouts; Legacy had unlimited payouts
4. **100% payout split from day one** — Legacy started at 90% (after first $25K); New gives 100% immediately
5. **Consistency rule relaxed** — 50% threshold (New) vs 30% (Legacy), but it never expires on New vs expiring after 6th payout on Legacy
6. **Higher minimum daily profit** — $250–$350/day (New) vs $50/day (Legacy) for payout qualification
7. **Safety net is permanent** — New PAs maintain safety net for life; Legacy only for first 3 payouts
8. **One-time PA fee** — No more monthly PA subscription option
9. **Specific PA rules removed/simplified** — 30% MAE rule, 5:1 risk-reward rule, and contract size consistency rule are not mentioned in new documentation
10. **Inactivity rule formalized** — Must have 2 profitable days ($50+) per rolling 30 days or PA closes

---

## Which Path for Which Trader

### Legacy Intraday Trailing *(Christopher's current path)*
**Best for:** Experienced traders comfortable with real-time trailing who want maximum flexibility
- ✅ More contracts (14 vs 8 on 100K) — better for scaling strategies
- ✅ No daily loss limit — full freedom to manage risk your way
- ✅ Unlimited payouts — no 6-payout cap forcing you to re-evaluate
- ✅ No time limit on eval — no pressure to pass within 30 days
- ⚠️ Stricter consistency (30%) and more PA rules (MAE, 5:1 R:R)
- ⚠️ Lower payout split initially (90% after first $25K)
- ⚠️ 7 minimum trading days to pass eval

### New EOD Drawdown
**Best for:** Traders who want protection from intraday spikes moving their threshold
- ✅ Threshold only moves at market close — intraday volatility doesn't raise your floor
- ✅ DLL protects against blowing up in a single session
- ✅ 100% payout split from the start
- ✅ Can pass eval in 1 day
- ⚠️ Fewer contracts (8 max on 100K eval, 6 max on PA)
- ⚠️ 30-day eval time limit
- ⚠️ 6-payout cap then PA closes
- ⚠️ Higher min daily profit requirement ($300 on 100K)

### New Intraday Drawdown
**Best for:** Traders who like real-time trailing but want the new payout structure
- ✅ Same trailing mechanic as Legacy (familiar to Christopher)
- ✅ 100% payout split from the start
- ✅ Can pass eval in 1 day
- ✅ Slightly lower min daily profit than EOD ($250 vs $300 on 100K)
- ⚠️ Fewer contracts than Legacy (8 eval / 6 PA max on 100K)
- ⚠️ DLL added on PA (not present on Legacy)
- ⚠️ 30-day eval time limit
- ⚠️ 6-payout cap then PA closes

### Bottom Line for Christopher
> **Stay on Legacy for existing accounts.** The unlimited payouts, higher contract limits, and no DLL make Legacy more favorable for a trader who already has funded PAs. For **new evaluations**, the New Intraday path is the closest equivalent but with meaningful trade-offs: fewer contracts, a 30-day deadline, and a 6-payout cap per PA. The EOD path is worth considering if intraday threshold spikes have been a pain point.

---

## 📖 Deep Dive — Full Rules Reference

For the complete rules documentation behind this comparison:

- [**Apex New Rules (EOD + Intraday)**](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/setup/accounts/PropFirms/ApexTrader/apex-rules.md) — Full reference for both new evaluation paths
- [**Apex Legacy Rules (Intraday Trailing)**](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/setup/accounts/PropFirms/ApexTrader/apex-rules_legacy.md) — Complete legacy model reference (Christopher's current accounts)
