# Accounts_PropFirm - Scaling SOP & Implementation

> 💡 **How to use this file:**
> - In Inevitrade's Inner Circle bootcamp class today we discussed scaling of proper firms actually! - please review the information below:

> - I also created a directory in the Inevitrade subfolder of our Trading databse called “Accounts_PropFirm Scaling SOP & Implementation”

> - Note: Yesterday you (my Claude Code CLI trading-assistant) mentioned 'LucidFlex is the better fit for your style at that stage' - My coach at Inevitrade is most pleased and is recommending Lucid Flex as indeed the best option out there right now in general!

## 🔍 Inevitrade's PERFORMANCE STATISTICS

In class we discussed a robust approach I would like you to help me to stick to as well:

There is a screenshot of a mermaid flow chart + the following information in case you cannot extract text from screenshots. I am wondering though, how are you able to view my screenshots for trading analysis but not able to extract text sometimes?

### 🟢 Core concept: the Lifebar
Your total account balance is an illusion. Your only true capital is your maximum drawdown limit.
In this system, that maximum drawdown limit is your Lifebar. Every trade is a calculated bid of a percentage of the Lifebar to secure profit.
Define your Lifebar
• Prop firms: Your Lifebar is the firm's max drawdown rule.
:: • Example: A $50,000 account with a $2,000 end-of-day drawdown limit has a $2,000
Lifebar.
* Personal accounts: Enforce an artificial Lifebar to protect capital.
* Professional standard: 5% to 10% max drawdown.
* Example: Fund $20,000, enforce 10% Lifebar = $2,000. All risk math references the $2,000, not the full balance.

### 🟡 Part I: The Armory (risk tiers)
Position sizing is dictated by the "weapon" you equip. Each tier is a hard percentage of your Lifebar.
Tier 1: The Shield (25% Lifebar risk)
• Math: -4 consecutive full losses before defeat.
• Use when:
• New trader, new strategy, or "fresh" unbuffered account (no profit cushion).
• In a slump or drawdown period while rebuilding consistency.
X Tier 2: The Sword (30% Lifebar risk)
• Math: -3 consecutive full losses.
• Use when:
• You have proven consistent profitability.
• You have a profit buffer protecting your core Lifebar.
Tier 3: The Hammer (40% Lifebar risk)
• Math: A tight 2-loss buffer. One miss meaningfully damages survivability.
• Use when:
• Reserved for proven traders with strong historical data on A+ setups.
• Only when the edge is undeniable and repeatable.

### 🟡 Part II: Rules of engagement
1) The "One-Shot" daily rule
If you take one full loss (hard stop hit) on any tier, you are wounded.
Stop trading that account for the rest of the day. Spiral losses happen when wounded traders try to fight back.
2) Protect the green
If you are green on the day, you may continue trading.
If your P&L retraces back to break-even ($0.00) for the day, end the session immediately.
Never let a green day turn red.
3) Session volatility filter
Volatility changes the stop distance required.
During aggressive sessions (for example, the New York open), stops often need to be wider.
When stop distance expands, reduce size (often by ~50%) so the Lifebar risk stays constant.
4) "Ghost equity" defense (end-of-day rule)
If a prop firm calculates drawdown at end of day (for example, EOD models like LucidFlex), use a strict time stop:
• Close all active positions 15 minutes before the daily closing bell.
• Do not carry a floating drawdown into the close.

### 🟡 Part III: The Treasury (profit allocation)
When you secure a payout, do not withdraw 100% of profits. Split profits into buckets that sustain the business and build long-term wealth.
Allocation model
• 25% Active account growth (left in account)
• Purpose: Grow your buffer and expand capacity without increasing risk.
• 20% Armory fund (withdrawn)
• Purpose: Evaluations, software, data fees, and replacing lost accounts.
• 30% The Crown's Cut (withdrawn)
• Purpose: Taxes, moved immediately to a dedicated savings account.
• 25% Sovereign wealth (withdrawn)
• Purpose: Long-term investing (for example, retirement or broad-market ETFs).

### 🔴 Part IV: Weekly yield expectations (the math of the edge)
Base assumptions (balanced TCL 2.0 model):
• Win rate: 80%
• Average win: +0.5R
• Average loss: -1.0R
Expectancy:
• +0.20R per trade
With 10 trades per week, expected net:
+ * • +2.0R per week
What that means by tier (example Lifebar: $2,000)
• Shield (25%)
• Risk per trade: $500
• Weekly net (2.0R): $1,000 (50% of Lifebar)
• X Sword (30%)
• Risk per trade: $600
• Weekly net (2.0R): $1,200 (60% of Lifebar)
• < Hammer (40%)
• Risk per trade: $800
• Weekly net (2.0R): $1,600 (80% of Lifebar)


## 📈 Where and how to sync trading accounts
Tradesyncer is a specialized, cloud-based, third-party trade copier designed for high-speed (sub-100ms), multi-account, and cross-platform (e.g., Tradovate to NinjaTrader/Apex) trading, offering 24/7 reliability without a VPS. Using native Tradovate syncing is free but limited to within the Tradovate ecosystem and lacks advanced risk management or cross-broker capabilities. 

### Tradesyncer (Third-Party Copier) 
* Best For: Prop firm traders (Apex, Topstep, TakeProfitTrader) and managing 3+ accounts.
* Speed: Under 100ms, essential for reducing slippage.
* Key Features: Cloud-based (no VPS needed), supports multiple brokers (Rithmic, Tradovate, NinjaTrader, TradingView), and built-in risk management (daily loss limits, max positions).
* Flexibility: Allows ratio trading (e.g., copier takes 1 lot on account A, 2 lots on account B).

### Tradovate Native Syncing 
* Best For: Users only trading on the Tradovate platform with fewer than 3 accounts.
* Speed: Generally good, but depends on local computer performance.
* Features: Basic mirroring of trades within Tradovate-only accounts.
* Limitation: If your computer shuts down or your internet drops, the syncing stops. 

### Key Takeaways:
Tradesyncer to manage multiple prop firm accounts across different platforms. Use Tradovate's native system if you only use one broker and do not require advanced risk management or cross-broker copying.

It makes sense for me to use Tradovate to start out and then once I am in a place financially to scale Tradesyncer makes the most sense; especially to utilize the risk management tools and since Inevitrade and STB are already using it!

I honestly get confused sometimes using Tradovate’s UI and have made mistakes and prefer to use TradingView to execute my trades but want to get comfortable with both and ideally once I am able to collect payouts from prop firms and pay some bills/expenses start to take some of the payouts to fund crypto futures vs using crypto prop firms.

### TradeCopia (Copy Trading — Sep 2026, revised plan)

> **This section has been superseded again — twice now.** The first replaced draft (TopOne-manual / Lucid-copies-TopOne / Apex-copies-TPT-PRO) was written before working through account mechanics and drawdown types in detail. The version that followed it (grouped by drawdown mechanic: Intraday led by TPT with Apex Legacy following, EOD led by Top1 with the 25K Lucid account following) turned out to violate TopOneFutures' own copy-trading policy — TOF's AI assistant directly confirmed that pairing a 50K Elite ACCESS leader with a 25K Lucid follower is a mismatched-size violation. **Full current structure, rationale, and compliance detail now live in `specs/TradeCopia_workflow.md` and `TradeCopia/tradecopia-compliance-memo.md` — this section is a pointer, not the source of truth.**
>
> Short version: groups are now organized by **leader, matched on account size / firm-policy compatibility first** (not by drawdown mechanic). **Group A (Strict News Discipline)** — TPT (50K) leads LucidFlex25 (25K, the actual granted PFM style — kept with TPT for mental-model simplicity even though LucidFlex doesn't share TPT's hard-breach news discipline the way LucidDaily would have) — no size constraint applies to either firm. **Group B (TopOne Derived)** — TopOneFutures (Top1, Elite ACCESS) leads Apex-484839-11 and Apex-484839-12 (both 50K, matching Top1's size) — this pairing exists specifically to satisfy TOF's same-size requirement. Apex also requires submitting TradeCopia for approval before use (`ApexTrader/apex-rules_legacy.md` line 229) — see the compliance memo for the draft request and status.

[TradeCopia](https://tradecopia.com) is the copy-trading tool being purchased/installed (Sep 2, 2026) — same category as Tradesyncer above (cloud-based, cross-broker, per-account risk controls), chosen because it's what surfaced through the giveaway/community context below rather than a cold comparison shop. Learn-center references: [futures-trade-copier](https://tradecopia.com/learn/futures-trade-copier) and [how-futures-copy-trading-works](https://tradecopia.com/learn/how-futures-copy-trading-works) — per-follower position sizing/multipliers (a follower account can take a different lot size than the leader, scaled independently rather than a flat 1:1 mirror) is the feature this whole plan leans on.

**How this connects to a free Lucid account:** PropFirmMatchTV ([propfirmmatch.com/futures](https://propfirmmatch.com/futures)) runs YouTube live-stream raffles/giveaways with a Discord + "MATCH" access-code flow (anti-bot gate). A free Lucid futures account was won via an on-stream duck race 🦆 — first prize surfaced through that community, not purchased. The prize is a one-time redemption code toward a 25K account, style (Flex/Daily/Pro) still open — see [lucid-account-types-comparison.md](Lucid/lucid-account-types-comparison.md) for the analysis on which fits this copy-trading structure best.

#### Why manual multi-account execution is being retired

Feb–Mar 2026, after blowing the first set of funded accounts, the working method for avoiding accidental "copying" errors between accounts was genuinely manual: a MacBook Pro + iPhone + iMac running simultaneously, TradingView executing the TPT account directly while a separate Brave browser window handled TopOneFutures via Tradovate's account-switcher UI, alternating live between accounts by hand. It worked well enough to pass both the TPT and TopOneFutures evals, but the account-switcher UI had real lag, and switching under pressure introduced real human error. The plan going forward is to execute solo, from TradingView, on one leader account per group, and let TradeCopia handle the mirroring — removing the multi-device juggling entirely.

#### The structure: two groups, led and matched on account size / firm-policy compatibility

Full detail, rationale, and the TopOneFutures same-size finding: `specs/TradeCopia_workflow.md`. Groups are no longer split by drawdown mechanic (Intraday vs EOD) — a group's leader and follower can have different mechanics, since the constraint that actually governs this (TopOneFutures' copy-trading policy) is about matching account size/program, not drawdown type.

**Group A (Strict News Discipline) — led by TPT (the 50K account, `TAKEPROFITPRO781112132`)**
- Follower: **LucidFlex25** (25K, the duck-race account — PFM confirmed the granted style is Flex, not Daily). Kept with TPT for simplicity; LucidFlex runs EOD drawdown (not intraday like TPT) and doesn't carry LucidDaily's hard-breach news restriction, but no size-matching restriction from either firm's rules makes the pairing fine regardless. Selected the $600 DLL option — see `specs/TradeCopia_workflow.md` for the multiplier-sizing implication.

**Group B (TopOne Derived) — led by TopOneFutures (Top1, the funded Elite ACCESS account)**
- Followers: **TOF197292** (TopOneFutures' second Elite ACCESS account, from the TopOne BOGO deal — same program/size as the leader, TOF's own explicitly-allowed case) plus **Apex-484839-11** and **Apex-484839-12** (two fresh 50K eval accounts) — matched to the leader's size specifically because TopOneFutures' own AI assistant confirmed a mismatched-size cross-firm copy (the earlier 50K↔25K Lucid draft of this plan) is a policy violation. Apex Legacy also requires submitting TradeCopia for approval before use (`ApexTrader/apex-rules_legacy.md` line 229) — see the compliance memo for status.

**Trades outside the copy groups:** occasionally taking an additional individual trade on any single account, outside its copy group, when genuinely called to — the copy structure organizes the default flow, it isn't a hard cage.

#### Session-close discipline (mitigates Pattern 8 — exit passivity)

Close deadlines, earliest to latest: **TopOneFutures 4:10 PM ET → Lucid 4:45 PM ET → TPT 4:55 PM ET → Apex 4:59 PM ET.** Top1 leading Group B (TopOne Derived) means that group is naturally flat by 4:10. For everything overall, the personal session-close target is **4:45 PM ET (Lucid's close)** — well ahead of TPT's 4:55 and Apex's 4:59 — so the account actually being planned around is the earliest realistic hard deadline among Group A (Strict News Discipline)'s followers, not the latest one. This turns pattern_tracker.md's documented exit-passivity pattern (zero active exit decisions, relying on SL/resting-TP/AutoLiq) into a proactive plan: be flat everywhere by 4:45, not waiting on any firm's auto-flatten.

Live setup workflow, risk-setting configuration, and per-firm compliance record: `specs/TradeCopia_workflow.md` and `TradeCopia/tradecopia-compliance-memo.md`.

### 🗂️ COST & FEATURES SUMMARY
#### Basic
    $39/month$49 Save 20% if paid annually
    Perfect for solo or beginner futures traders.
    * 		2 connections10 accounts per connectionReal-time trade synchronizationAccess on any deviceUnlimited trade copying groupsBracket ordersAdvanced copy trading execution modesRisk managementAccess to the economic calendarAdvanced reporting, journaling and analytics

#### Pro
    $79/month$99 Save 20%
    For traders with multiple broker connections.
    * 		All features of Basic, and:4 connections20 accounts per connectionCustomizable alerts and notificationsEarly access to new features and updates

#### Flex
    $119/month$149 Save 20%
    For pros needing multiple connections and full features.
    * 		All features of Pro, and:Unlimited connections120 accountsAdditional accounts available
