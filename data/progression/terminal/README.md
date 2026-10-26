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
