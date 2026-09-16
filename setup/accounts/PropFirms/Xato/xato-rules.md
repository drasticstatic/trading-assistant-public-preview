# Xato — Rules Reference
> Compiled from Xato's own site (rules page updated as of August 20, 2026).
> Inevitrade's actual funding partner — corrects an earlier misidentification (previously logged as "Leveraged" or "BreakoutProp" placeholders on the pre-flight checklist page; not held, not correct).
> Not currently an active Christopher account — reference doc, added ahead of opening one.
> Source: [xato.com/rules](https://xato.com/rules) · [xato.com/how-it-works](https://xato.com/how-it-works)

---

## What Xato Is

A one-step, single-account evaluation covering stocks, commodities, and crypto together — not a futures-only firm like Apex/TPT/TopOne/Tradeify. All instruments trade as perpetual markets through crypto infrastructure (Hyperliquid is the current reference/liquidity source), so trading is available 24/7 including weekends. Balances in both the evaluation and funded stages are simulated — no trader capital is deposited. Funded payouts settle in real USDT (ERC-20, via Fireblocks).

## Account Sizes, Fees & Core Limits

| Account size | Evaluation fee | Profit target | Max drawdown (static, 6%) | Max daily loss (3%) |
|---|---|---|---|---|
| $5,000 | $48 | $500 (10%) | $300 | $150 |
| $10,000 | $82 | $1,000 (10%) | $600 | $300 |
| $25,000 | $205 | $2,500 (10%) | $1,500 | $750 |
| $50,000 | $380 | $5,000 (10%) | $3,000 | $1,500 |
| $100,000 | $760 | $10,000 (10%) | $6,000 | $3,000 |

- **Evaluation stages:** one-step only — no Phase 1/Phase 2 split.
- **Time limit:** none — no minimum or maximum days to pass.
- **Minimum trading days / consistency rule:** none.
- **Daily gain limit:** none, on either the evaluation or funded account.
- **Max leverage:** 25x account-level cap, further bounded per-instrument by the liquidity provider.
- **Trading fee:** 0.04% of notional per filled side (maker and taker alike) — 8 bps round trip before funding. Perpetual funding is variable, applied hourly on currently-enabled Hyperliquid markets.

## Drawdown & Daily Loss Mechanics

- **Max drawdown is static**, not trailing — fixed at 6% of the original account size for the life of the account (evaluation and the funded account it converts into). A payout does not move this floor.
- **Daily loss resets at 00:30 UTC.** The floor for the next trading day = equity at the 00:30 UTC snapshot − the fixed daily-loss dollar amount (not a live-recalculated percentage of current balance). A funded-account payout debit adjusts the floor by the same amount so the payout itself isn't scored as a loss.
- Both limits apply continuously and simultaneously; unrealized P&L counts toward both. Reaching either floor breaches the account — open/pending orders are canceled and positions closed at mark price.

## Passing & Funded Transition

Passing is automatic: once live equity reaches the profit target while the account stays compliant, Xato closes open/pending orders, marks the evaluation passed, and immediately opens a new **Xato Account** (funded) at the same size, risk settings, leverage cap, and profit-split entitlement — no separate application step. Identity verification (via Sumsub) and acceptance of the funded-trader agreement are required before the first payout can be requested, but are NOT required to trade the evaluation or the funded account itself.

## Profit Split

- **Standard: 80% trader / 20% Xato**, included in the base evaluation fee above.
- **Enhanced 90/10 add-on**, selected at initial purchase only (locked for the account's lifetime, can't be added retroactively) — adds 20% to the evaluation fee:

| Account size | 80/10 (standard) | 90/10 (add-on) |
|---|---|---|
| $5,000 | $48 | $57.60 |
| $10,000 | $82 | $98.40 |
| $25,000 | $205 | $246 |
| $50,000 | $380 | $456 |
| $100,000 | $760 | $912 |

## Payouts

- On-demand once eligible — no scheduled cycle, no first-payout waiting period, no minimum trading/winning-day count, no consistency rule, no cooldown, no lifetime cap.
- Only realized profit above the funded starting balance is payable; unrealized P&L can't be withdrawn.
- Settles in USDT (ERC-20, Ethereum) via Fireblocks, $50 USDT minimum net payout, network fee paid separately by Xato. Requires: unbreached funded account, current identity verification, no open positions/orders, all funding payments posted, no compliance hold, valid ETH destination address.
- Evaluation purchases are processed by Checkout.com, priced in USD — USDT is the payout asset only, not the pricing unit.

## Hedging, Copy Trading & Other Prohibited Practices

- **Net position per instrument, per account** — no simultaneous long+short in the same instrument within one account.
- **Cross-account hedging is prohibited** — opposing positions in the same/correlated instrument across multiple Xato accounts (or Xato + third-party accounts) counts if timing/price/size pattern indicates a coordinated hedge.
- **Copy trading, coordinated signals, and shared execution across accounts are prohibited**, alongside the more standard list: exploiting platform/pricing/latency errors, inside information, front-running, market manipulation, off-the-shelf pass-the-eval strategies, account/credential sharing, and coordinating across traders/identities/households to manufacture a guaranteed result.
- Multiple Xato evaluations per trader ARE allowed, assessed independently, no combined account-size cap — but using them to hedge/copy/coordinate/arbitrage against each other is still prohibited.

## News Event Trading

**Permitted**, subject to normal data/liquidity availability — no explicit news-blackout window like TPT's 1-minute rule or TopOne's 2-minute rule. Standard equity limits and prohibited-practice rules still apply; expect wider spreads/slippage/funding swings around news.

## Weekend & Off-Hours Holding

Positions may be held over the weekend. Crypto instruments are ~24/7 (barring maintenance/outages). Non-crypto instruments (stocks, commodities) may follow their underlying reference market's own hours/oracle availability.

## Order Types & Platform

Custom web trading terminal only (no third-party platform support mentioned). Time-in-force: GTC, IOC, ALO (Add Liquidity Only). Partial take-profit / partial close supported.

## Minimum Age & Eligibility

18+, legal capacity in trader's jurisdiction. Restricted-jurisdiction list maintained for compliance (see Xato's Terms of Use). VPN use is fine as long as it isn't used to misrepresent location/identity/eligibility.

## Notably Different From Christopher's Futures Firms

- Single account spans three asset classes (stocks, commodities, crypto) instead of futures-only — position-sizing/margin math won't map 1:1 onto Apex/TPT/TopOne mental models.
- Static (not trailing) drawdown from day one, same as Apex Legacy's philosophy but simpler — no trailing-to-static conversion threshold to track.
- Payouts in USDT rather than bank transfer — a genuinely different settlement rail than any other firm in this roster.
- No consistency rule, no minimum trading days, no time limit — the least gated evaluation structure of any firm documented here.
