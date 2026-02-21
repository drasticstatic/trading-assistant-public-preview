# Lucid Trader — Rules Reference
> Strategy: Inevitrade / SMC
> Platform: Lucid Trader
> Two account types available: LucidFlex and LucidPro — confirm which you hold
> Last updated: February 2026

---

## Account Type Quick Comparison

| Feature | LucidFlex | LucidPro |
|---------|-----------|----------|
| Eval Daily Loss Limit | None | Yes (except $25K) |
| Funded Daily Loss Limit | None | Yes (LucidScale grows with account) |
| Consistency (Eval) | 50% | None |
| Consistency (Funded) | None | 40% per payout cycle |
| Min Trading Days (Eval) | None stated (take your time) | None (can pass in 1 day) |
| Scaling Plan (Funded) | Yes — contract limits grow with profit | No — full max contracts immediately |
| Payout Split | 90/10 | 90/10 |
| Payouts before going live | 6 | 6 |

---

## Plan Parameters (Both Account Types)

| Account Size | Profit Target | Max Loss Limit | Max Size (Eval & Funded) |
|--------------|---------------|----------------|--------------------------|
| $25,000 | $1,250 | $1,000 | 2 mini / 20 micros |
| $50,000 | $3,000 | $2,000 | 4 mini / 40 micros |
| $100,000 | $6,000 | $3,000 | 6 mini / 60 micros |
| $150,000 | $9,000 | $4,500 | 10 mini / 100 micros |

---

## Drawdown — EOD System (Both Account Types)

Lucid uses an **End-of-Day Drawdown** system. The Max Loss Limit (MLL) trails your highest closing balance upward until it locks.

| Account Size | MLL Amount | Initial Trail Balance | Locked MLL Balance |
|--------------|------------|----------------------|-------------------|
| $25,000 | $1,000 | $26,100 | $25,100 |
| $50,000 | $2,000 | $52,100 | $50,100 |
| $100,000 | $3,000 | $103,100 | $100,100 |
| $150,000 | $4,500 | $154,600 | $150,100 |

**How it works:**
- MLL rises with your EOD closing balance until your account exceeds the Initial Trail Balance
- Once exceeded, MLL locks at the Locked MLL Balance permanently
- After a payout is requested, MLL automatically adjusts to the Locked MLL Balance
- **If your account balance reaches the MLL at any time → account breached**

---

# LUCID FLEX

## LucidFlex Evaluation

- **One-time fee, no monthly rebilling** — take as long as you need
- **No Daily Loss Limit** on evaluation accounts
- **No minimum trading days** — pass as quickly as you want (cushion allows 2-day pass)
- Real-time activation to funded within 5–30 minutes of hitting profit target
- No activation fee to upgrade

### Consistency Rule (Eval Only — 50%)
- Formula: `Largest Single Day Profit ÷ Account Profit ≤ 50%`
- Must be at or below 50% when you hit profit target
- **Cushion built in** — actual threshold is slightly above 50%:

| Account | Profit Target | Strict 50% | Cushion |
|---------|--------------|-----------|---------|
| $25K | $1,250 | $625 | $650 |
| $50K | $3,000 | $1,500 | $1,560 |
| $100K | $6,000 | $3,000 | $3,120 |
| $150K | $9,000 | $4,500 | $4,680 |

> The cushion is a percentage-based calculation on actual profit, not a fixed dollar amount.

---

## LucidFlex Funded

- **No Daily Loss Limit**
- **No Consistency Percentage** in funded phase
- Scaling plan controls max contracts based on simulated profits (updates EOD — not real-time)

### Scaling Plan (Funded Only)

| Simulated Profits | $25K Limits | $50K Limits | $100K Limits | $150K Limits |
|-------------------|-------------|-------------|--------------|--------------|
| $0 – $999 | 1 mini / 10 micros | 2 mini / 20 micros | 3 mini / 30 micros | 4 mini / 40 micros |
| $1,000 – $1,999 | 2 mini / 20 micros | 3 mini / 30 micros | 4 mini / 40 micros | 5 mini / 50 micros |
| $2,000 – $2,999 | — | 4 mini / 40 micros | 5 mini / 50 micros | 6 mini / 60 micros |
| $3,000 – $4,499 | — | — | 6 mini / 60 micros | 8 mini / 80 micros |
| $4,500+ | — | — | — | 10 mini / 100 micros |

> Scaling plan updates at END OF SESSION — not real-time during the day.

### LucidFlex Payout Requirements
- **5 profitable trading days** in the payout cycle with minimum daily profit:
  - $25K = $100/day | $50K = $150/day | $100K = $200/day | $150K = $250/day
- Positive net profit in the payout cycle (even $1 counts)
- Minimum payout request: **$500**
- Maximum: 50% of profit up to cap ($25K→$1K | $50K→$2K | $100K→$2.5K | $150K→$3K)
- Up to **6 payouts** per account then moved to live
- No buffer balance requirement in LucidFlex funded
- Processing: within 2 business days after approval

### LucidFlex → Live Transition (after 6 payouts)
- Up to 5 live accounts
- Move-to-live cap per account: $25K→$4K | $50K→$8K | $100K→$12K | $150K→$16K
- Day 1 capital: $25K→$1.2K | $50K→$2.4K | $100K→$3.6K | $150K→$4.8K
- Remainder held in Escrow — released at $5K per $10K live profit earned
- Escrow review: weekly (not daily)
- Must complete 10 profitable live days + $10K live profit before Escrow begins releasing
- Escrow withdrawal: 60-day minimum wait from account opening

---

# LUCID PRO

## LucidPro Evaluation

- **One-time fee, no monthly rebilling**
- Can pass in **one trading day** (no minimum days)
- Real-time activation within 5–30 minutes
- No activation fee

### Daily Loss Limit (Eval)
| Account | Fixed DLL |
|---------|-----------|
| $25,000 | None |
| $50,000 | $1,200 |
| $100,000 | $1,800 |
| $150,000 | $2,700 |

- DLL is a **soft breach** — hitting it restricts trading for the day, does NOT blow the account (unless MLL is also hit)
- No consistency requirement in evaluation

---

## LucidPro Funded

- **No scaling plan** — full max contracts available immediately
- Fixed DLL applies until Initial Trail Balance is exceeded, then switches to **LucidScale DLL**

### LucidScale DLL Formula (kicks in once above Initial Trail Balance)
`Highest EOD Account Profit × 60% = LucidScale DLL`
- Grows as account grows
- Does NOT decrease even if account draws down
- Example: Highest EOD profit = $4,000 → DLL = $2,400

### LucidPro Payout Requirements (resets after every payout)
- **5 profitable trading days** with minimum daily profit:
  - $25K = $50/day | $50K = $100/day | $100K = $150/day | $150K = $200/day
- **Consistency: largest day ≤ 40% of total profit** for the payout cycle
- **Profit must exceed the Buffer Balance** (= Initial Trail Balance):
  - $25K→$26,100 | $50K→$52,100 | $100K→$103,100 | $150K→$154,600

### LucidPro Payout Maximums (scaling by payout number)
| Account | Payouts 1 & 2 | Payouts 3 & 4 | Payouts 5 & 6 |
|---------|--------------|--------------|--------------|
| $25K | $1,000 | $1,000 | $1,000 |
| $50K | $1,500 | $2,000 | $2,500 |
| $100K | $2,000 | $2,500 | $3,000 |
| $150K | $3,000 | $3,500 | $4,000 |

### LucidPro → Live Transition (after 6 payouts)
- Move-to-live cap: $25K→$15K | $50K→$20K | $100K→$25K | $150K→$30K
- Day 1 capital: $25K→$2K | $50K→$3K | $100K→$4K | $150K→$5K
- Escrow release: same structure as LucidFlex ($5K per $10K live profit)
- 10 profitable live days + $10K live profit required before Escrow begins

---

## Claude's Enforcement Checklist (Lucid)

When reviewing any Lucid trade, flag if:
- [ ] Confirm account type (LucidFlex or LucidPro) — rules differ significantly
- [ ] Position size exceeds current scaling plan limit (LucidFlex funded) or max size (LucidPro)
- [ ] MLL approached — flag if within 20% of Max Loss Limit
- [ ] **LucidPro only:** DLL hit or approached ($50K = $1,200 / $100K = $1,800)
- [ ] **LucidFlex eval:** Single day profit approaching 50% of total (consistency risk)
- [ ] **LucidPro funded:** Single day profit approaching 40% of total payout cycle profit
- [ ] Trade held past **4:00 PM ET** (personal EOD target)
- [ ] Emotional state suggests revenge trading or forced entry
- [ ] Inevitrade SMC strategy applied correctly (bias, rehearsal, multiple limits)

---

## Notes / Open Items
> 📝 Confirm which account type: LucidFlex or LucidPro
> 📝 Add your specific account size and current balance/MLL tracking here
> 📝 Add account statement screenshots as accounts progress
