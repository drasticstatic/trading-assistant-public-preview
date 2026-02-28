# 2026_02-21_Paladin Protocol_Account & PropFirm Scaling SOP & Implementation
*Extracted from bootcamp session PDF — Inevitrade Inner Circle*

---

Paladin Protocol Trading
Strategy w/ Patrick 21st Feb
2026
Action Items
Pat to send out presentation materials and add to Google Docs
Pat to fix incorrect number on profit allocation graphic
Pat to create improved cohort management graphic
Pat to download and send explanatory video to bootcamp chat
All traders to backtest strategies according to specific prop firm rules before
trading live
All traders to use AI tools (especially Grok) for trade data analysis
Overview of Paladin Protocol
New scaling framework for prop firm trading and personal accounts, replacing the
previous "Marathon Method"
Goal is capital preservation first, profit growth second - starting from a defensive
position
Designed for TCL and Smog trading strategies
Progression path: Backtesting → Live Demo → Prop Firms → Personal Trading
Account
Future plan to create an app that generates trading prescriptions based on user
preferences and prop firm rules
Core Concept: The Life Bar
The "life bar" is the max drawdown amount - this is the true capital traders have
access to
Paladin Protocol Trading Strategy w/ Patrick 21st Feb 2026
1
For prop firms, focus on max drawdown (not daily drawdown) as it's more
consistent across firms
For personal accounts, apply a 10% buffer to create your own max drawdown
(e.g., $20K account = $2K life bar)
Psychology is 80% of trading, systems are 10%, and having capital is 10%
Three Risk Tiers
Shield (Tier 1) - Most Defensive
Risk 25% of life bar for TCL trades
Risk 2.5% of life bar for Smog trades (10x fractal lower)
Allows for 4 consecutive full losses before account breach
When to use: New traders, new strategies, fresh unbuffered accounts, or if
struggling to pass with higher tiers
Sword (Tier 2) - Moderate
Risk 30% of life bar
Allows for 3 consecutive full losses
When to use: After multiple payouts, consistently profitable, recovered initial
investment
Hammer (Tier 3) - Most Aggressive
Risk 40% of life bar
Allows for 2 consecutive full losses
When to use: Proven traders with consistent payouts, or A-plus setups only
Can default back to lower tiers after taking a loss to increase sustainability
Rules of Engagement
One-Shot Rule
If you take one full loss on any tier, stop trading immediately for that day
Step away, rest, journal what went wrong, and review the next day
Prevents spiral losses and revenge trading
Paladin Protocol Trading Strategy w/ Patrick 21st Feb 2026
2
Protect the Green
If profitable for the day, never let your balance go back to zero or negative
Can continue trading as long as you don't retrace below the day's starting point
If trading multiple sessions (London and New York), stop if you go negative after
winning in the first session
Session Volatility Awareness
London session ranges are significantly smaller than New York
Adjust expectations and trade count based on which session you're trading
May only get one quality trade per session depending on price action
Ghost Equity Defense
Close all positions before end of day (before the last 15 minutes of power hour)
Electronic trading hours are mostly algorithmic and typically not favorable
Some prop firms will force-close positions, which can trigger breach conditions
Profit Allocation Strategy
For Prop Firm Accounts
25% stays in the trading account for compound growth - never withdraw this
20% goes to Armory Fund (to purchase new eval accounts to replace breached
accounts)
30% goes to Tax Fund (futures have 60-40 preferential tax treatment, so 30%
buffer provides coverage plus potential refund)
25% goes to Sovereign Wealth Fund (building your personal long-term trading
account)
For Personal Accounts
25% stays in the trading account
Can split the 20% armory fund into other buckets or add to sovereign wealth fund
30% to tax fund (or split for personal tax refund strategy)
Remaining 25%+ to sovereign wealth fund, potentially invested in index funds or
IRA
Paladin Protocol Trading Strategy w/ Patrick 21st Feb 2026
3
Expected Returns
Performance Metrics
Based on 80% win rate for TCL 2.0
Average win: 0.5R (accounting for taking partials 17% of the time)
Expectancy per trade: ~0.2R
With 10 trades per week (2 per day), expect 2R per week including losses
Weekly Profit Expectations on $2K Life Bar (50K Account)
Shield strategy: $1,000/week
Sword strategy: $1,200/week
Hammer strategy: $1,600/week
Cohort Management for Scaling
Starting with 2 Accounts
Split into Cohort A and Cohort B
Trade on rotational basis - even after wins, alternate between cohorts
This changes profit expectancy per account but accelerates overall payouts
Scaling to 4 Accounts
Each funded account can "tow" an eval account
When both evals pass, you have 4 funded accounts
Split again into Cohort A (2 accounts) and Cohort B (2 accounts)
6+ Accounts
Add a third cohort for further risk diversification
Can make judgment call to take one more trade on another cohort after a loss,
preferably reverting to Shield tier
8 Accounts
Split into 4 cohorts with 2 accounts each
Begin backfilling accounts toward the 20-account goal
At 20 accounts with hammer strategy: potential $20K+ weekly across all accounts
Paladin Protocol Trading Strategy w/ Patrick 21st Feb 2026
4
Odd Number Strategy (Master Account)
If you have odd number of accounts, designate one as "master account"
Master account can be a larger account (e.g., 100K vs 50K)
Master account trades with every cohort, accelerating growth
Example: 5 accounts = one 100K master + four 50K split into two cohorts
Prop Firm Recommendations
General Guidance
Backtest according to each firm's specific rules before purchasing
Calculate ease of passing: Divide profit target by drawdown amount - lower ratio =
easier
Lucid
Highly recommended for beginners
No recurring subscription fees during eval phase - take as long as needed to pass
Lucid Flex accounts have the best parameters of their four options
Tradeify
Good for daily payouts to build allocation buckets faster
MyFundedFutures
Another viable option
Apex
Previously recommended but now less favorable
Issues: 8-day waiting period for payout request, plus 3-5 days approval, plus 3-5
days to release (14-16 days total)
Blocked some accounts requiring explanation of proprietary strategies
Tools and Technology
Trading Platform
Tradovate recommended for built-in copy feature and reliable data stream
More reliable than competitors whose data streams frequently go down
Paladin Protocol Trading Strategy w/ Patrick 21st Feb 2026
5
AI for Data Analysis
Grok (X AI) highly recommended for trade data analysis - best at reasoning
without hallucinating
Export trade data to CSV and feed into AI for pattern recognition
Can also use Grok to pre-assess trade setups before entry
Gemini and ChatGPT also viable but Grok works best for this use case
Can feed Grok your grading system and it will evaluate trade screenshots with win
probability
TradeSinker
Useful for copying trades across multiple prop firms
Requires more attention to ensure proper execution
Eliminates need to have all accounts with one firm
Trade Copying on Tradovate
Setup Process
Use "Manage Groups" dropdown to create cohorts
Add accounts to each group (e.g., Cohort A, Cohort B, etc.)
Select which cohort to trade using the "+A", "+B" indicators
Order Execution
Multiply contract count by number of accounts in cohort
Example: 5 contracts per account × 3 accounts = 15 contracts total for entry
Place both entry and limit orders with same multiplied contract count
Stop loss must account for all possible contracts (entry + limit orders combined)
Session-Specific Insights
Asia Session
Not recommended for trading - incoherent price action
Only consistent pattern: tends to reverse and sweep New York session's pocket
liquidity
Paladin Protocol Trading Strategy w/ Patrick 21st Feb 2026
6
Consider alternative assets like Nikkei futures or gold that may have better edge
during Asia hours
Smog trading shows 62% win rate during Asia session according to one
participant's AI analysis
New York Session
Larger ranges than London
May yield fewer quality setups but higher R-value trades
Key Mindset Principles
"It's not about how much more you can make, it's how much more you can save"
Defense always comes first - protect capital above all else
"Slowly at first, then suddenly" - compound growth takes time but accelerates
Manage expectations: Reality vs. Expectations = Happiness or Misery
Don't risk entire personal account - use prop firms to prove profitability first
One asset, one session, one trade - focus is key
Additional Context
This protocol is being actively tested by Pat, who has refined it based on personal
experience pulling $40K from Funding Ticks between May-August 2025
The framework will continue to evolve based on real-world results
Future versions will include an automated app for generating personalized
strategies
Group currently includes traders at various experience levels, from complete
beginners to those with prior crypto/stock trading experience
Next session scheduled for following Friday, with plans to demonstrate live trading
Paladin Protocol Trading Strategy w/ Patrick 21st Feb 2026
7
