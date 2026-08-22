# Lucid Trading — Rules Reference
> Compiled from official Lucid Trading help center rule articles (support.lucidtrading.com).
> **Reference / awareness only — Christopher does not currently hold a Lucid account.** Documented alongside active TopOneFutures and TPT accounts since he's active across many prop firms and follows prop-firm content closely (PropFirmMatchTV, TradeifyTV, etc.).
> Last updated: August 2026

---

## Account Types Overview

Lucid Trading offers several funding pathways. This doc covers the four Christopher asked for: **General Info** (platform-wide rules), **LucidFlex**, **LucidDaily**, and **LucidPro**. Lucid also offers LucidDirect (S2F), LucidMaxx (invite-only straight-to-live), and LucidBlack (legacy) — not covered here.

> Source: [Our Mission](https://support.lucidtrading.com/en/articles/11404612-our-mission)

LucidFlex, LucidDaily, and LucidPro share the same evaluation pricing/target structure (identical profit target, MLL, and 50% eval consistency tables) — they differ mainly in **funded-phase mechanics**: LucidFlex is optional-DLL with capped payouts, LucidDaily is intraday-drawdown with daily payouts and an "earn your way to live" ceiling, and LucidPro has a scaling DLL with no payout cap.

### Evaluation Phase — Quick Comparison (identical across Flex/Daily/Pro)

| Account Size | Profit Target | Max Loss Limit | Consistency % (Eval) | Max Size |
|---|---|---|---|---|
| $25,000 | $1,250 | $1,000 | 50% | 2 mini / 20 micros |
| $50,000 | $3,000 | $2,000 | 50% | 4 mini / 40 micros |
| $100,000 | $6,000 | $3,000 | 50% | 6 mini / 60 micros |
| $150,000 | $9,000 | $4,500 | 50% | 10 mini / 100 micros |

- One-time fee, no monthly rebilling — take as long as needed to pass
- No activation fee to upgrade evaluation → funded
- Real-time activation — funded account issued within 5–30 minutes of hitting the profit target
- 50% consistency has a built-in cushion so a 2-day pass is achievable (see each product's consistency article for exact cushion $ amounts)

### Funded Phase — Quick Comparison

| Feature | LucidFlex | LucidDaily | LucidPro |
|---|---|---|---|
| Daily Loss Limit | Optional (choose at purchase) | Depends on customization choice | Optional (choose at purchase) |
| Drawdown Type | EOD | Intraday (funded always; eval choice) | EOD |
| Consistency Rule (Funded) | None | None | 40% (35% legacy) |
| Payout Structure | Capped $ per request, up to 5 payouts then moved live | Daily requests, capped by Max Daily Profit — hit it and you're moved live | Uncapped payout amounts, scales up per cycle |
| Scaling Plan | Yes (tiered by simulated profit) | N/A (funded uses full/intraday model) | None — full size from day one |
| Payout Split | 90/10 | 90/10 | 90/10 (100% on first $10K if purchased/reset before 11/28/2025) |

**Christopher's read (unverified, personal comparison — matching the framing used in `topone-rules.md`):** LucidDaily's structure (intraday drawdown, daily payout requests, no consistency rule funded) has some overlap with TPT's daily-cadence feel, though TPT uses EOD trailing drawdown rather than intraday. LucidPro's uncapped, scaling-DLL funded model reads closer to a "grow into it" structure than Apex Legacy's. Verify rule-by-rule before assuming behavior transfers between firms.

---

## General Info & Platform Rules (Apply Across All Lucid Products)

### Mission & Philosophy
> Source: [Our Mission](https://support.lucidtrading.com/en/articles/11404612-our-mission) · [Trade with Integrity](https://support.lucidtrading.com/en/articles/11404732-trade-with-integrity)

Lucid frames itself as a bridge between funded firms and traditional prop desks — funding traders who are ready to go live with real capital, not rewarding traders for exploiting technicalities. Prohibits exploiting system errors, update delays, or simulated-price discrepancies; expects the same good-faith standard from traders that the firm brings to the relationship.

### Supported Platforms
> Source: [Lucid Trading Supported Platforms](https://support.lucidtrading.com/en/articles/11404614-lucid-trading-supported-platforms)

- **CQG:** NinjaTrader, Tradovate, TradingView
- **Rithmic:** MotiveWave, Quantower (Lucid partners), Tradesea, Sierra Chart, Jigsaw, Bookmap, ATAS, R|Trader Pro, MultiCharts
- All platforms work across all account types (LucidFlex, LucidPro, LucidDaily, etc.)

### Maximum Number of Accounts
> Source: [Maximum Number of Accounts](https://support.lucidtrading.com/en/articles/11404617-maximum-number-of-accounts)

- **Evaluation accounts:** up to 10 active per household; shared cap of 10 total across eval + funded (e.g., 5 evals + 5 funded max). Up to 5 evals may be held "in reserve" (and traded) while holding 5 funded accounts.
- **Funded accounts:** up to 5 active per household, combined across all funded product types (e.g., 3 LucidDirect + 2 LucidPro = 5, the max).
- **Live accounts:** up to 5 active LucidLive accounts per household.

### Fees & Resets
> Source: [Simulated Account Fees](https://support.lucidtrading.com/en/articles/11404620-simulated-account-fees)

- One-time fee for evaluation/LucidDirect accounts — no subscription, no auto-rebilling
- No activation fee to upgrade any evaluation to funded
- Resets are **not automatic or free** — must be purchased from the dashboard if an evaluation is breached

### Accepted Payment Methods
> Source: [Accepted Payment Methods](https://support.lucidtrading.com/en/articles/11404628-accepted-payments-methods)

Visa, Mastercard, American Express, Discover, Diners Club, Maestro. Processed securely, confirmed immediately.

### Payout Methods
> Source: [Payout Methods](https://support.lucidtrading.com/en/articles/12890325-payout-methods)

- **Plaid** — instant bank transfers, U.S.-based traders only
- **WorkMarket by ADP** — U.S. and international, bank transfer or PayPal, funds as early as next business day
- **Crypto** — international traders only: BTC, ETH, LTC, USDT, USDC

### Inactivity Policy
> Source: [Inactivity Policy](https://support.lucidtrading.com/en/articles/11404632-inactivity-policy)

- Accounts with no trade resulting in at least $1 net P&L within **30 calendar days** are deemed abandoned and permanently deleted (not daily/weekly trading required, just periodic activity)
- **Breached accounts:** eligible for reset, but auto-deleted after 30 days if not reset; can be manually removed from the dashboard any time before that

### Registering as a Business
> Source: [Registering as a Business](https://support.lucidtrading.com/en/articles/11404634-registering-as-a-business)

- A trader may hold only **one Lucid profile ever** — personal or business, and it **cannot be converted** between the two after registration
- Business payouts require compliance verification (Articles of Incorporation, Proof of Ownership, government ID for 25%+ owners) emailed to compliance@lucidtrading.com
- Business payouts available via WorkMarket (US + international) or Plaid (US only, instant transfer) once verified

### Restricted Countries
> Source: [Restricted Countries](https://support.lucidtrading.com/en/articles/11404636-restricted-countries)

Long list of ~90 countries where Lucid services are unavailable to citizens/residents — includes Russia, Iran, North Korea, Cuba, Syria, and a broad set of others (Afghanistan, Belarus, Nigeria, Pakistan, Philippines, Turkey, Ukraine, Venezuela, Vietnam, and more). Check the source article directly for the current full list before assuming eligibility.

### Other Activities Policy
> Source: [Other Activities](https://support.lucidtrading.com/en/articles/11404728-other-activities)

- **News trading:** not allowed on LucidDaily (hard breach); allowed on LucidFlex, LucidPro, LucidDirect
- **Scaling into trades / DCA:** allowed, no entry-method limits — but martingaling (adding to losers hoping for recovery) is discouraged as unsustainable, not prohibited outright
- **Genuine scalping:** allowed, as long as it reflects realistic execution and stays within microscalping guidelines (below)
- **Automated strategies / trade copiers:** permitted, but trader is fully responsible for software errors or unintended outcomes
- **Flipping** (quick in-and-out trades to meet minimum trading-day counts): explicitly allowed, not restricted

### Allowed Trading Times
> Source: [Allowed Trading Times](https://support.lucidtrading.com/en/articles/11404729-allowed-trading-times)

- **LucidPro / LucidFlex / LucidDirect:** all positions must be closed by **4:45 PM ET**, Mon–Fri; Lucid auto-closes anything still open. **Holding past this time does NOT fail the account** — unlike TPT/TopOneFutures, this appears to be a soft auto-flatten rather than a rule violation.
- Market reopens 6:00 PM ET Sunday–Thursday; holiday schedule changes require closing before the holiday-adjusted close, overriding the normal 4:45 cutoff
- **LucidLive:** swing trading not allowed; hold until 4:45 PM ET (Tradovate Live) or 4:15 PM ET (Rithmic Live); optional auto-liquidate available

> ⚠️ Compare close times across the firms Christopher trades: Lucid 4:45 PM ET (non-punitive) vs. TPT 5:00 PM ET (account failure if breached) vs. TopOneFutures 4:10 PM ET (all trades force-closed). Different enforcement philosophy — confirm per-firm before assuming a shared "hard stop" habit transfers cleanly.

### Prohibited: Hedging
> Source: [Prohibited: Hedging](https://support.lucidtrading.com/en/articles/11404734-prohibited-hedging)

- No opposing positions across multiple accounts (same user, different users, or different firms) — includes correlated-asset pairs (e.g., long ES in one account + short NQ in another)
- Same contract, same account, mixed mini/micro: **allowed**. Same contract across **separate** accounts in mini vs. micro: **prohibited**.
- First flag: account(s) reset to prior day's balance + email notice. Repeated offenses: accounts breached, possible permanent ban.

### Prohibited: High Frequency Trading
> Source: [Prohibited: High Frequency Trading](https://support.lucidtrading.com/en/articles/11404736-prohibited-high-frequency-trading)

- Algorithmic strategies submitting high trade volumes in seconds/milliseconds
- First offense: written warning. Repeated: profits removed, account closed, permanent restriction. Appeals available.

### Prohibited: Microscalping
> Source: [Prohibited: Microscalping](https://support.lucidtrading.com/en/articles/11404742-prohibited-microscalping)

- Flagged if **more than 50% of profits** come from trades held **5 seconds or less**
- Distinct from genuine scalping (short-term but realistic execution) — genuine scalping is allowed
- Manual review on flag → written warning if confirmed bad-faith → profits forfeited + possible permanent restriction on continued violation. Appeals available.

### Approved Products & Commissions (Round-Turn, Per Side)
> Source: [Approved Products and Commissions](https://support.lucidtrading.com/en/articles/11508978-approved-products-and-commissions)

| Category | Instruments (Commission) |
|---|---|
| Equity Index | ES $1.75 · MES $0.50 · NQ $1.75 · MNQ $0.50 · RTY $1.75 · M2K $0.50 · NKD $1.75 · YM $1.75 · MYM $0.50 |
| Currencies | 6A/6B/6C/6E/6J/6S/6N — all $2.40 |
| Energy | CL $2.00 · MCL $0.50 · QM $2.00 · QG $1.30 · NG $2.00 |
| Metals | PL $2.30 · HG $2.30 · GC $2.30 · MGC $0.80 · SI $2.30 · SIL $1.60 |
| Agriculture/Livestock | HE $2.80 · LE $2.80 · ZS/ZC/ZL/ZM/ZW — all $2.80 |

---

## LucidFlex — Full Ruleset

> LucidFlex is the "optional DLL, capped-payout, scaling-plan" product line — a middle-ground config between LucidDaily's intraday-drawdown/daily-payout model and LucidPro's uncapped/no-scaling model.

### Evaluation Account
> Source: [LucidFlex Evaluation Account](https://support.lucidtrading.com/en/articles/12945790-lucidflex-evaluation-account)

Uses the shared eval table above. No DLL during evaluation on LucidFlex specifically (DLL only applies once funded, and only if the DLL-ON configuration was purchased).

### Funded Account
> Source: [LucidFlex Funded Account](https://support.lucidtrading.com/en/articles/12945795-lucidflex-funded-account)

| Account Size | Max Loss Limit | DLL | Scaling Plan | Max Size |
|---|---|---|---|---|
| $25,000 | $1,000 | Optional | Yes | 2 mini / 20 micros |
| $50,000 | $2,000 | Optional | Yes | 4 mini / 40 micros |
| $100,000 | $3,000 | Optional | Yes | 6 mini / 60 micros |
| $150,000 | $4,500 | Optional | Yes | 10 mini / 100 micros |

No consistency rule on funded LucidFlex accounts. Dashboard objectives update in real-time (5–30 min after last closed trade).

### Customization (Daily Loss Limit On/Off)
> Source: [LucidFlex Customization](https://support.lucidtrading.com/en/articles/16226050-lucidflex-customization)

- **DLL ON:** enforced on both eval and funded — cheapest purchase price. DLL is a soft breach (locked out until next session, not account termination).
- **DLL OFF:** no DLL either phase — higher purchase price, more flexibility.
- Locked in at purchase — cannot be changed later; must buy a new account for the other config.

### Consistency Percentage (Evaluation Only)
> Source: [LucidFlex Consistency Percentage](https://support.lucidtrading.com/en/articles/12945805-lucidflex-consistency-percentage)

- Formula: `Largest Single Day Profit ÷ Account Profit ≤ 50%` to pass eval
- Built-in cushion allows passing in as few as 2 days:

| Account Size | Profit Target | 50% Consistency | Example Cushion |
|---|---|---|---|
| $25K | $1,250 | $625 | $650.00 |
| $50K | $3,000 | $1,500 | $1,560.00 |
| $100K | $6,000 | $3,000 | $3,120.00 |
| $150K | $9,000 | $4,500 | $4,680.00 |

No consistency requirement once promoted to live.

### Scaling Plan (Funded Only)
> Source: [LucidFlex Scaling Plan](https://support.lucidtrading.com/en/articles/12945808-lucidflex-scaling-plan)

- No scaling restriction during eval — full size available from trade one
- Funded max contract size is tied to simulated profit tier, updates **at end of session** (not real-time intraday)
- Attempts to circumvent limits are tracked; repeated abuse triggers account review

**$25K:** $0–999 → 1 mini/10 micros · $1,000–1,999 → 2 mini/20 micros (full)
**$50K:** $0–999 → 2 mini · $1,000–1,999 → 3 mini · $2,000+ → 4 mini (full)
**$100K:** $0–999 → 3 mini · $1,000–1,999 → 4 mini · $2,000–2,999 → 5 mini · $3,000+ → 6 mini (full)
**$150K:** $0–999 → 4 mini · $1,000–1,999 → 5 mini · $2,000–2,999 → 6 mini · $3,000–4,499 → 8 mini · $4,500+ → 10 mini (full)

### Payouts
> Source: [LucidFlex Payouts](https://support.lucidtrading.com/en/articles/12945796-lucidflex-payouts)

- 90/10 split. No buffer balance requirement (unlike LucidDaily/LucidPro).
- Two eligibility requirements, both reset after each approved payout:
  1. **5 separate profitable trading days**, each meeting a minimum daily profit: $25K→$100 · $50K→$150 · $100K→$200 · $150K→$250
  2. **Positive net profit** (even $1) for the current payout cycle
- Minimum request $500. Maximum: 50% of profit up to a flat cap (does NOT scale up with more payouts — unlike LucidPro/TopOneFutures): $25K→$1,000 · $50K→$2,000 · $100K→$2,500 · $150K→$3,000
- **Max 5 payouts per account**, after which the trader is moved live
- No fixed payout window — request any day once eligible. Funds deducted within minutes, disbursed within 2 business days.

### Drawdown (EOD)
> Source: [LucidFlex Drawdown](https://support.lucidtrading.com/en/articles/12945815-lucidflex-drawdown)

EOD trailing MLL, same mechanism/table as LucidPro (below) — locks at account size + $100 once the trail balance is exceeded, and re-locks to that level automatically after a payout request.

---

## LucidDaily — Full Ruleset

> LucidDaily's defining feature: **funded accounts always use intraday drawdown** (not EOD), daily payout requests, and a capped "Maximum Daily Profit" that — once hit — auto-promotes the trader to a live account rather than continuing to pay out sim profits indefinitely.

### Evaluation Account
> Source: [LucidDaily Evaluation](https://support.lucidtrading.com/en/articles/15996664-luciddaily-evaluation)

Same eval table as LucidFlex/Pro. Distinguishing feature: **customizable drawdown type at checkout** — Intraday (cheaper) or EOD (pricier, more flexible) — see Customization below.

### Funded Account
> Source: [LucidDaily Funded Account](https://support.lucidtrading.com/en/articles/15997244-luciddaily-funded-account)

| Account Size | Max Loss Limit | Daily Payouts | Drawdown | Max Size |
|---|---|---|---|---|
| $25,000 | $1,000 | Yes | Intraday | 2 mini / 20 micros |
| $50,000 | $2,000 | Yes | Intraday | 4 mini / 40 micros |
| $100,000 | $3,000 | Yes | Intraday | 6 mini / 60 micros |
| $150,000 | $4,500 | Yes | Intraday | 10 mini / 100 micros |

No consistency rule funded. **News trading is NOT permitted on funded LucidDaily** — must be flat 1 min before through 1 min after any high-impact USD news event; violation is a hard breach (account terminated). This is stricter than LucidFlex/Pro, where news trading is generally allowed.

### Customization (DLL + Evaluation Drawdown Type)
> Source: [LucidDaily Customization](https://support.lucidtrading.com/en/articles/16033858-luciddaily-customization)

Two independent settings create 4 configs — locked at purchase:
- **DLL:** On (cheaper) / Off (pricier)
- **Evaluation Drawdown:** Intraday (cheaper) / EOD (pricier) — **funded accounts always use Intraday regardless of this eval choice**

Cheapest → priciest: DLL-ON+Intraday-Eval < DLL-ON+EOD-Eval ≈ DLL-OFF+Intraday-Eval < DLL-OFF+EOD-Eval.

### Daily Loss Limit
> Source: [LucidDaily Daily Loss Limit](https://support.lucidtrading.com/en/articles/16085900-luciddaily-daily-loss-limit)

Fixed DLL (does not change with account growth), same table applies to both eval and funded if DLL-ON was selected:

| Account Size | Fixed DLL |
|---|---|
| $25,000 | $600 |
| $50,000 | $1,200 |
| $100,000 | $1,800 |
| $150,000 | $2,700 |

Soft breach — locked out until next session. **Important interaction:** the DLL stays fixed and does not trail with the MLL; if the trailing MLL rises above the DLL during the session, the MLL becomes the more restrictive (and hard-breach) threshold.

### Drawdown
> Source: [LucidDaily Drawdown](https://support.lucidtrading.com/en/articles/15998425-luciddaily-drawdown)

Same MLL/trail-balance/lock table as LucidPro/LucidFlex (below). Evaluation drawdown type (Intraday vs EOD) is a purchase-time choice; funded is always Intraday.

### Consistency (Evaluation Only)
> Source: [LucidDaily Consistency](https://support.lucidtrading.com/en/articles/15998336-luciddaily-consistency)

Identical mechanics/table to LucidFlex consistency (50% rule, same cushion table). No consistency requirement once funded or live.

### Payouts
> Source: [LucidDaily Payouts](https://support.lucidtrading.com/en/articles/15997266-luciddaily-payouts)

- 90/10 split, no fixed payout window
- Eligibility: (1) profit must exceed the **buffer balance** (Initial MLL + $100 — same $ figures as the drawdown lock table) and (2) positive net profit since last payout
- **No per-request payout cap** — instead, a **Maximum Daily Profit** ceiling that auto-promotes to live once hit:

| Account Size | Buffer Balance | Maximum Daily Profit |
|---|---|---|
| $25,000 | $26,100 | $6,000 |
| $50,000 | $52,100 | $8,000 |
| $100,000 | $103,100 | $10,000 |
| $150,000 | $154,600 | $12,000 |

- Minimum payout request $500. Funds deducted within minutes, disbursed within 2 business days.

### Live Transition
> Source: [LucidDaily Live](https://support.lucidtrading.com/en/articles/16010520-luciddaily-live)

- Entry to live review pool triggered by: hitting Maximum Daily Profit, significant lifetime payout total, exceptional sim performance, or prior live history. **Live transitions are entirely at the discretion of Lucid's risk team.**
- Each funded account needs **at least one payout** to be eligible for live conversion; accounts with zero payouts are refunded (not converted) when a trader goes live, and remaining sim accounts are closed
- Sim profit above the buffer converts to live capital, **capped at $15,000 total** regardless of account size/count
- Live accounts start at $0 balance, EOD drawdown, no DLL, daily payouts
- Live transitions happen nightly after the 6 PM ET session report — if a position is open at that moment, prior-day closing balance is used (current session's open P&L is voided) to keep the process fair
- **No live bonus** on this transition path (unlike some other Lucid live paths)
- Blown live account → 2-week cooldown before a new evaluation purchase is allowed (longer at risk-team discretion for repeated reckless "yolo" behavior)
- Hedging live accounts is absolutely prohibited (violates CME rules too) — permanent ban risk

---

## LucidPro — Full Ruleset

> LucidPro's defining feature: **no scaling plan** (full contract size from day one) and an **uncapped, scaling DLL** that grows with account profit rather than staying fixed — the most "grow into it" funded structure of the three products.

### Evaluation Account
> Source: [LucidPro Evaluation Account](https://support.lucidtrading.com/en/articles/12890029-lucidpro-evaluation-account)

| Account Size | Profit Target | Max Loss Limit | Daily Loss Limit | Max Size |
|---|---|---|---|---|
| $25,000 | $1,250 | $1,000 | None | 2 mini / 20 micros |
| $50,000 | $3,000 | $2,000 | $1,200 | 4 mini / 40 micros |
| $100,000 | $6,000 | $3,000 | $1,800 | 6 mini / 60 micros |
| $150,000 | $9,000 | $4,500 | $2,700 | 10 mini / 100 micros |

Note: $25K has **no DLL by default** even before customization — differs slightly from the Flex/Daily pattern.

### Funded Account
> Source: [LucidPro Funded Account](https://support.lucidtrading.com/en/articles/12890069-lucidpro-funded-account)

| Account Size | Max Loss Limit | Fixed DLL (optional) | Scaling DLL (optional) | Max Size |
|---|---|---|---|---|
| $25,000 | $1,000 | $600 | 60% of Peak EOD Balance | 2 mini / 20 micros |
| $50,000 | $2,000 | $1,200 | 60% of Peak EOD Balance | 4 mini / 40 micros |
| $100,000 | $3,000 | $1,800 | 60% of Peak EOD Balance | 6 mini / 60 micros |
| $150,000 | $4,500 | $2,700 | 60% of Peak EOD Balance | 10 mini / 100 micros |

**No scaling plan** — full max contract size available immediately upon funding, unlike LucidFlex. **No payout caps** (LucidPro's payout max grows per cycle — see Payouts below).

### Daily Loss Limit (Fixed → LucidScale)
> Source: [LucidPro Daily Loss Limit](https://support.lucidtrading.com/en/articles/12890122-lucidpro-daily-loss-limit)

- Eval and initial funded phase: same **Fixed DLL** table as above (soft breach)
- Once the account closes **above the Initial Trail Balance** ($26,100/$52,100/$103,100/$154,600 by size), the Fixed DLL is replaced by the **LucidScale DLL**: `Highest EOD Profit × 60%`
- LucidScale DLL only increases, never decreases even on drawdown days — a genuinely growing daily-loss allowance tied to peak performance

### Customization (DLL On/Off)
> Source: [LucidPro Customization](https://support.lucidtrading.com/en/articles/16226068-lucidpro-customization)

Same two-option structure as LucidFlex (DLL ON = cheaper/fixed-then-scaling DLL applies; DLL OFF = pricier/no DLL either phase). Locked at purchase.

### Consistency Percentage (Funded, for Payout)
> Source: [LucidPro Consistency Percentage](https://support.lucidtrading.com/en/articles/12890109-lucidpro-consistency-percentage)

- Formula: `Largest Single Day Profit ÷ Account Profit ≤ 40%` (this is a **funded-phase** requirement for payout eligibility, not an eval requirement — differs from LucidFlex/Daily, which have no funded consistency rule at all)
- **Rate changed 11/28/2025 3PM ET:** accounts purchased/reset before that date use 35%; on/after use 40%
- Resets after each approved payout. No consistency requirement once promoted to live.

### Drawdown (EOD)
> Source: [LucidPro Drawdown](https://support.lucidtrading.com/en/articles/12890136-lucidpro-drawdown)

| Account Size | MLL Amount | Initial Trail Balance | Locked MLL Balance |
|---|---|---|---|
| $25,000 | $1,000 | $26,100 | $25,100 |
| $50,000 | $2,000 | $52,100 | $50,100 |
| $100,000 | $3,000 | $103,100 | $100,100 |
| $150,000 | $4,500 | $154,600 | $150,100 |

Trails upward with closing balance until the trail balance is exceeded, then permanently locks at account size + $100 (same lock mechanism shared by LucidFlex and LucidDaily).

### Payouts
> Source: [LucidPro Payouts](https://support.lucidtrading.com/en/articles/12890092-lucidpro-payouts)

- 90/10 split (accounts purchased/reset before 11/28/2025 3PM ET keep 100% on the first $10K)
- Three simultaneous requirements per cycle, all reset after each payout: (1) minimum profit goal, (2) ≤40% consistency, (3) profit above buffer balance
- **Min profit goal:** $25K→$250 · $50K→$500 · $100K→$750 · $150K→$1,000
- **Payout caps scale up after the first payout** (unlike LucidFlex's flat cap):

| Account Size | Buffer | Payout 1 Max | Payout 2+ Max |
|---|---|---|---|
| $25,000 | $26,100 | $1,000 | $1,500 |
| $50,000 | $52,100 | $2,000 | $2,500 |
| $100,000 | $103,100 | $2,500 | $3,000 |
| $150,000 | $154,600 | $3,000 | $3,500 |

- Minimum request $500. No fixed payout window. Funds deducted within minutes of approval, disbursed within 2 business days.
- If a trade drops the balance into the buffer before a pending payout is processed, the request may be denied — trade as if the requested payout is already withdrawn.

### Live Transition
> Source: [LucidPro Live (Legacy)](https://support.lucidtrading.com/en/articles/13432107-lucidpro-live-legacy)

Two structures depending on purchase/reset date — **current structure applies to accounts from 2/27/2026 onward**:
- Moved live after the 6th LucidPro payout, or earlier at risk-team discretion
- Sim profit converts to live capital, capped per account size ($25K→$15,000 cap · $50K→$20,000 · $100K→$25,000 · $150K→$30,000); excess forfeited
- Only a portion deposits Day 1 ($2,000–$5,000 by size); the rest sits in **Escrow**
- Escrow releases require 10 profitable live trading days **and** $10,000 in live profit before review begins; then $5,000 releases per additional $10,000 earned, reviewed weekly (not daily)
- Reckless/"yolo" trading disqualifies a trader from Escrow release
- **Legacy structure** (accounts purchased/reset on/before 1/19/2026): simpler — sim profit funds starting live balance directly, flat $150,000 total live cap across all accounts, no escrow mechanic

---

## Claude's Enforcement Checklist (Lucid — General, Applies to Flex/Daily/Pro)

When reviewing any Lucid trade, flag if:
- [ ] Position size exceeded max contracts for account size/tier (check LucidFlex scaling table if applicable — Pro has no scaling restriction)
- [ ] Account balance approached the DLL threshold intraday (soft breach risk, only if DLL-ON was purchased)
- [ ] EOD balance closed below the trailing MLL floor (hard breach — account termination risk)
- [ ] Trade held past **4:45 PM ET** — note this is a soft auto-flatten on Lucid, NOT an automatic failure like TPT/TopOneFutures
- [ ] Opposing/hedged positions across any Lucid accounts or other firms' accounts (same contract mini/micro across accounts, or correlated assets long/short across accounts)
- [ ] >50% of profit from trades held ≤5 seconds (microscalping risk)
- [ ] News trade taken on a **LucidDaily funded** account (hard breach — not restricted on Flex/Pro/Direct)
- [ ] No trade in 30 calendar days (inactivity/abandonment risk)
- [ ] Single-day profit exceeding the relevant consistency threshold (50% eval on all three; 40%/35% funded on LucidPro only)
- [ ] EA/bot or trade-copier usage — permitted, but confirm trader accepts full responsibility for its behavior
- [ ] Emotional state suggests revenge trading or forced entry

---

## Notes / Open Items

**No Lucid account currently held.** This document exists for cross-firm awareness given Christopher's active positions with TopOneFutures (Elite ACCESS) and TPT.

**Comparison notes worth revisiting if a Lucid account is ever opened:**
- Lucid's 4:45 PM ET close is explicitly **non-punitive** (auto-flatten only) — a meaningfully different risk model than TPT's 5:00 PM ET hard failure or TopOneFutures' 4:10 PM ET force-close. Don't assume the same discipline habit (e.g. closing by 4:00 PM personal rule) carries the same stakes across all three firms.
- LucidDaily is the only one of the three products with a **hard-breach** news-trading restriction on funded accounts — Flex and Pro allow news trading generally.
- LucidPro's LucidScale DLL (grows with peak EOD profit, never shrinks) is structurally different from every other firm covered in this repo (TPT, Apex, TopOneFutures) — none of those have a daily-loss limit that scales upward with performance.

**All 27 target articles scraped successfully — no dead links or unavailable content encountered.**

> 📝 If Christopher opens a Lucid account, confirm the DLL/drawdown-type customization actually purchased (these vary per-account and aren't visible from outside the dashboard) before assuming which config's rules apply.
