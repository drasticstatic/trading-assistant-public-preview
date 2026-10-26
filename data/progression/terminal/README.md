# Fortuna Terminal — live operations page

**View it rendered:** https://drasticstatic.github.io/trading-assistant-public-preview/data/progression/terminal/

What the trading-assistant agent (Fortuna) is watching, holding and about to do, republished from
its session at every check-in. Perps today (MyFundedPerps competition + Elite/Select program,
cross-venue position co-pilot); the DEX-arbitrage lane joins as it comes online.

| Surface | What lives there |
|---|---|
| [Gallery](../gallery.html) | Prop-firm accounts — futures and perps evals, funded accounts, certificates |
| [Portfolio](../portfolio.html) | Live personal accounts — centralized/decentralized exchanges, wallets, equities |
| **Terminal** (this page) | Fortuna's live operations: accounts, positions, armed zones vs live price, check-ins, ledger, preflight |
| [Pre-flight Checklist](../../../setup/prop-firm-rules.html) | The human checklist and firm-rules comparison; its machine counterpart is the terminal's Perps Preflight Checklist |

## Data

- `data/state.json` — curated, public-safe state (accounts, positions, watchlist, check-ins, ledger, preflight, lanes). No account IDs, no private notes.
- `data/signals.json` — the mechanical scan behind each check-in (sweeps, reclaims, SMT, zone pressure, alerts), feeding the Scanner and Alerts panels.
- `data/levels.json` — Hyperliquid 4H/1H/15m structure per feed (EMAs, ATR, prior-day high/low, opens), rebuilt at every publish.
- Live mids come from Hyperliquid's public `allMids` endpoint in the browser (30-second refresh); the page falls back to the snapshot if that fetch fails.

Republished by Fortuna's check-in routine (scan → append → build → commit → push); the public preview syncs on push.

## Extra feeds and phone alerts (Oct 25)

- **TOTAL2** (crypto total market cap excluding BTC) comes from CoinGecko's public `global` endpoint: the build stores one point per run in `data/total2_history.json` (so its sparkline grows over time) and the page refreshes the live value every 5 minutes.
- **Russell 2000** is the RTY futures contract from Yahoo Finance 15m bars, aggregated to hourly candles at build time. The browser has no CORS path to it, so it is a snapshot that refreshes with each check-in (tagged `snap` on the tape). It is the third index for the NQ/ES/RTY SMT read; M2K is the micro.
- The tape is an infinite marquee: hover pauses it, drag or scroll it with the mouse, and it resumes from where you left it. `?m=<market>` opens the page on that market.
- **Phone lock-screen alerts:** browser notifications only work while the page is open on a desktop. `scripts/fortuna-terminal/notify.py` bridges to [ntfy](https://ntfy.sh) (free app, private topic) so the scanner's warn/critical alerts and every trade check-in can reach a phone. It is silent until a topic is configured (see the script header); the topic name is never printed or logged.

- **Chart modes (Oct 26):** every market toggles between candles and line/area; a volume lane sits under the price area and a volume profile (24 price buckets of the visible candles, POC highlighted) runs along the right edge; hover shows the candle's volume. TOTAL2 carries pseudo-OHLC built from hourly closes so candles mode works there too.
- **Alerts history:** the scanner appends warn/critical/info alerts to `data/alerts.json` (300-deep ring, same text within 3h is one event). The Alerts panel shows the live set plus a collapsible history, and warn/critical alerts also appear in the Feed.
- **Modals everywhere:** tape tickers ("details ›" with a copyable deep link), co-pilot cards, scanner cards ("read ›") and edge-study cards ("variants ›") open a modal with the full detail instead of printing it inline.
- **Venue quick links:** MFP ↗ and BTCC ↗ in the top nav. The phone-alerts explainer is rendered at `phone-alerts.html` (markdown source alongside).

- **Auto Levels (Oct 26):** `autolevels.js` (browser) and `scripts/fortuna-terminal/autolevels.py` (scanner) are twin ports of Christopher's TradingView indicator's ZTH level engine: 1-hour colour-flip opens, KEY on swing structure, lifecycle KEY → 5/5 → 3/5 → ghost on hourly body closes, duplicate suppression and density caps. The chart draws them live (toggle "levels"); the scanner scores every watchlist zone by confluence (KEY 2 · 5/5 1 · 3/5 ½ within half an ATR) and the scanner cards and modal show it. The JS file is shared on purpose for anyone who wants the logic outside TradingView.

- **Auto Levels, the rest (Oct 26):** both ports now also carry the FCR 9:30 rail, the 4/5 session rails (9:30 open, 16:00 and 17:00 closes, 18:00 open, two days of fade), fair value gaps, the pattern marks (P, R, B, SFP, BRK/RT, 1-2-3 with the indicator's tick-proximity gates) and ATR bands, all identical across JS and Python on the same candles. The chart's "overlays" drawer switches each family; the scanner publishes each feed's session rails.
- **Regime engine** (`regime.js` / `regime.py`): ADX regime, EMA 20/50/200 alignment, last impulse leg with its fib ladder, range %. Public and generic. Which coaching-program card a read qualifies for is computed privately by the scanner; the page shows only the verdict.
- **Calculators** (`calc.js` / `calc.py`): position sizing with liquidation-versus-stop warnings, and a DCA ladder sized so the whole ladder loses exactly the chosen risk. In each account's modal (about / sizer / ladder). Program defaults live in private config read only by the order planner.

- **Two chart engines (Oct 26):** the hand-rolled SVG renderer (Fortuna's own, also used for background analysis renders) and TradingView's open-source Lightweight Charts v5.2.1 (Apache-2.0, vendored under `vendor/` with its licence), switchable with the engine button in the chart header and remembered per browser. The adapter is `lwchart.js`: zones, FVGs, session rails, Auto Levels, fibs and pattern marks draw as series primitives, after the pattern in Lewis Jackson's MIT quant-terminal (part-timequant.com), whose licence is carried alongside.

- **OG-style oscillator, order flow and gamma (Oct 26):** `regime.js/.py` now carry a money-flow (MFI) + RSI + Bollinger oscillator with reversal events (the public ingredients of the Inevitrade "OG" read; the signal rule is Fortuna's own), drawn as a pane under the SVG chart and as a Bollinger overlay. The **Order flow** panel streams live trades from Hyperliquid's public websocket (seeded with Binance Vision spot history for BTC/ETH/SOL), polls the book every 10 s, and shows top-10-level imbalance, 15-minute taker flow, cumulative delta and the largest prints; the scanner records a book-imbalance snapshot per market. `scripts/fortuna-terminal/gex.py` (run by the build) computes dealer gamma by strike from CBOE's delayed SPX/NDX chains and Deribit's BTC/ETH options (Black-Scholes gamma), writing `data/gex.json` for the **Gamma** panel: spot, net gamma, flip level, call and put walls, top strikes. Delayed public data, reference only.
