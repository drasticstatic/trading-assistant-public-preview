# Lucid Trading — LucidFlex vs LucidDaily vs LucidPro Comparison

> **Context:** Christopher won a free Lucid futures account via a PropFirmMatchTV on-stream duck race giveaway (🦆) — a redemption code good toward purchasing a **25K account**, in whichever product style he chooses (confirmed via support: "looks like we can select any of the 25K style lucid accounts"). Style (Flex / Daily / Pro) and the DLL on/off customization are still being decided — this doc exists to make that decision straightforward. Full rule detail behind every row here: [lucid-rules.md](lucid-rules.md).
> Last updated: Sep 2, 2026

---

## Side-by-Side Comparison

| Feature | LucidFlex | LucidDaily | LucidPro |
|---|---|---|---|
| **Evaluation** | Identical across all three — same profit target, max loss limit, 50% consistency table (see [lucid-rules.md](lucid-rules.md)'s shared eval table) | Same | Same |
| **Funded Drawdown Type** | EOD | **Intraday** (always, regardless of eval-phase choice) | EOD |
| **Daily Loss Limit** | Optional (choose at purchase) | Depends on customization (independent DLL + eval-drawdown-type choices) | Optional (choose at purchase) — starts Fixed, later upgrades to scaling **LucidScale** |
| **Funded Consistency Rule** | None | None | **40%** (35% if purchased/reset before 11/28/2025) — payout-eligibility requirement, not an eval one |
| **Scaling Plan** | Yes — tiered by simulated profit, updates at end of session | N/A — full/intraday model, no scaling plan | **None** — full contract size from day one |
| **Payout Structure** | Flat $ cap per request, same cap every time, max 5 payouts then moved live | Daily requests, no per-request cap — capped instead by a **Maximum Daily Profit** ceiling that auto-promotes to live once hit | Uncapped requests; caps **scale up after the first payout** |
| **Payout Split** | 90/10 | 90/10 | 90/10 (100% on first $10K if purchased/reset before 11/28/2025) |
| **News Trading (Funded)** | Allowed | **Not permitted** — hard breach if a position is open ±1 min around high-impact USD news | Allowed |
| **"Grow into it" feel** | Moderate — scaling plan grows contract size, payout cap stays flat | Least — full intraday size immediately, payouts are frequent/small until the daily-profit ceiling triggers live review | Most — DLL itself grows (LucidScale) as EOD profit grows, payout caps grow too |

---

## All Sizes — Funded-Phase Numbers

### LucidFlex

| Size | Max Loss Limit | Payout Min-Profit-Days Rule | Flat Payout Cap |
|---|---|---|---|
| $25K | $1,000 | 5 days @ $100/day | $1,000 |
| $50K | $2,000 | 5 days @ $150/day | $2,000 |
| $100K | $3,000 | 5 days @ $200/day | $2,500 |
| $150K | $4,500 | 5 days @ $250/day | $3,000 |

### LucidDaily

| Size | Max Loss Limit (Intraday) | Fixed DLL (if ON) | Buffer Balance | Max Daily Profit (live-promotion trigger) |
|---|---|---|---|---|
| $25K | $1,000 | $600 | $26,100 | $6,000 |
| $50K | $2,000 | $1,200 | $52,100 | $8,000 |
| $100K | $3,000 | $1,800 | $103,100 | $10,000 |
| $150K | $4,500 | $2,700 | $154,600 | $12,000 |

### LucidPro

| Size | Max Loss Limit (EOD) | Fixed DLL (if ON) | Buffer Balance | Payout 1 Max | Payout 2+ Max |
|---|---|---|---|---|---|
| $25K | $1,000 | $600 | $26,100 | $1,000 | $1,500 |
| $50K | $2,000 | $1,200 | $52,100 | $2,000 | $2,500 |
| $100K | $3,000 | $1,800 | $103,100 | $2,500 | $3,000 |
| $150K | $4,500 | $2,700 | $154,600 | $3,000 | $3,500 |

**The 25K row is what matters right now** — the free-account code is good for a 25K purchase specifically.

---

## Which Product for Which Trader

### LucidFlex
**Best for:** wanting a scaling plan (grow into full size) with predictable, flat payout amounts, and no funded consistency rule to think about.
- ✅ EOD drawdown — no intraday-spike anxiety
- ✅ No consistency rule once funded
- ⚠️ Payout cap never grows past the flat number, even after several payouts
- ⚠️ Capped at 5 payouts before being moved live regardless of performance

### LucidDaily
**Best for:** wanting frequent small payouts and comfort trading intraday drawdown day to day.
- ✅ Daily payout requests — cash flow-friendly if the account is performing
- ⚠️ **Intraday drawdown on funded, always** — the account most exposed to intraday-spike risk of the three
- ⚠️ **News trading is a hard breach** — a real constraint given how often SMT/FCR setups sit near news windows
- ⚠️ Structurally the odd one out for a copy-trading follower account (see Bottom Line)

### LucidPro
**Best for:** the most "grow into it" structure — DLL itself scales up with performance (LucidScale), and payout caps grow after the first payout rather than staying flat.
- ✅ EOD drawdown
- ✅ No scaling plan — full contract size immediately, no waiting to size up
- ✅ Payout caps grow with account performance instead of staying flat like Flex
- ⚠️ Funded consistency rule (40%) is real — a single oversized day can block a payout even with strong net profit
- ⚠️ No scaling plan cuts both ways: full size from day one means full risk from day one too

---

## Bottom Line for Christopher

**LucidFlex or LucidPro fit the stated plan better than LucidDaily.** The account-copy structure already documented in the Scaling SOP pairs Lucid with TopOneFutures Elite ACCESS as the leader — and TopOneFutures runs EOD. LucidDaily's funded phase is **always intraday drawdown, no exceptions**, which mismatches that EOD-to-EOD pairing and adds a layer of intraday risk exactly where the plan was designed to avoid it. LucidDaily's hard-breach news-trading restriction is a second reason it's the weaker fit here, given how close some setups run to scheduled news.

Between Flex and Pro: **Flex is the calmer choice for a first Lucid account** — a scaling plan (grow into size gradually, matching the "only A+ confluence" discipline already the standard for this session) and no funded consistency rule to track. **Pro is worth it specifically if the DLL-growing / payout-caps-growing structure appeals** — it rewards sustained performance more than Flex does, at the cost of full size (full risk) from day one and a real 40% consistency rule gating payouts.

**DLL on/off:** given this account will be a TradeCopia follower (not the hands-on leader), DLL-ON is the safer default — it's a soft breach (locked out until next session), not account termination, and it caps the account's daily downside exactly where a follower account benefits most from a hard ceiling. Reconsider once real live behavior on the leader account is proven out.

**Still open, awaiting Lucid support's response** (asked: does account style or DLL choice affect eligibility for the free-account code; also asked about LucidDaily specifically before this analysis argued against it) — see [lucid-rules.md](lucid-rules.md)'s Notes/Open Items for the raw support-conversation detail.

---

## 📖 Deep Dive — Full Rules Reference

- [**Lucid Trading — Full Rules Reference**](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/setup/accounts/PropFirms/Lucid/lucid-rules.md) — every article this comparison is built from: General platform rules, LucidFlex/LucidDaily/LucidPro full rulesets (eval, funded, customization, DLL, consistency, drawdown, payouts, live transition), and the enforcement checklist.
