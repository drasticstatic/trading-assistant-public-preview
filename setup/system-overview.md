# 🏗️ System Overview — SmartTrader AI
### AI-Powered Trading Assistant for Prop Firm Futures
*Christopher Wilson | Mar 2026*

---

## What This Is

An AI-assisted trading system built on **Claude Code CLI** (Anthropic) and **Augment Code** that combines:

- 🤖 **AI Trading Assistant (Fortuna)** — behavioral coaching, chart analysis, session management, level marking review
- 📊 **TradingView Integration** — custom Pine Script indicators with auto-detected ZTH levels, FCR entries, FVG zones, EMA stacks, pattern detection
- 🔗 **MCP Servers** — Model Context Protocol servers that give the AI direct access to brokerage account data and live chart events
- 📡 **Webhook Pipeline** — TradingView alerts → Cloudflare Tunnel (primary) / ngrok (fallback) → local server → AI receives events
- 🎯 **Multi-Strategy Framework** — ZeroToHero (1hr color flips), Smart Trading Blueprint (FCR), Inevitrade (SMC: TCL, SMOG, G2, 35A)
- 📈 **Multi-Agent Orchestration** — Augment Intent coordinates specialized agents for research, implementation, testing, and review

## Architecture

```
TradingView (Charts + Alerts)
    ├── zth_auto_levels.pine v1.3 (unified indicator)
    │   ├── Auto ZTH levels (1hr color-flip detection via request.security)
    │   ├── FCR (9:30 candle HIGH/LOW wick entries)
    │   ├── EMA stack (9/21/50) + Prior Day H/L/C
    │   ├── FVG zones + Pattern labels (R/P/B/C)
    │   └── Session opens (4/5) + Level lifecycle management
    ├── fcr_standalone.pine (shareable FCR for STB team)
    └── webhook_alerts.pine → Cloudflare Tunnel → local server → AI

Tradovate API (Brokerage)
    └── MCP Server → AI reads account data, positions, fills

AI Agents
    ├── Fortuna (Claude Code) — strategy, coaching, session intelligence
    ├── Auggie (Augment Code) — builds, infrastructure, bulk tasks
    └── Kavanah Fleet (Augment Intent) — spec-driven task orchestration

TradeZella (Journaling)
    └── CSV exports → AI analyzes trades vs rules
```

## Tunnel Architecture
| Layer | Primary | Fallback |
|---|---|---|
| **Tunnel** | Cloudflare Tunnel (zero cost, permanent URL) | ngrok free tier (URL resets on restart) |
| **Server** | FastAPI on localhost:8089 | Same |
| **MCP** | `tv-alerts` registered at user scope | Same |

## Prop Firm Accounts
- **Apex Trader Funding** — $100K evaluation (Tradovate) ✅ Connected
- **TakeProfitTrader** — evaluation (Tradovate) ✅ Auth working
- **LucidFlex** — planned (Phase 2)
- **Tradeify** — planned (Phase 3)

## Pine Scripts
| Script | Purpose | Status |
|---|---|---|
| `zth_auto_levels.pine` v1.3 | **Primary indicator** — auto ZTH levels + FCR + EMA + FVG + patterns | ✅ Active |
| `fcr_standalone.pine` | Shareable FCR-only for STB team | ✅ Active |
| `webhook_alerts.pine` | Fires JSON alerts to webhook receiver | ✅ Active |
| `fcr_levels.pine` v3.1 | ⚠️ LEGACY — manual ZTH levels, replaced by zth_auto_levels | Archived |

## Strategies
| Strategy | Source | Focus | Context File |
|---|---|---|---|
| ZeroToHero (ZTH) | 1hr color flip levels | KEY, 5/5, 3/5 structural levels | `strategies/zerotohero/context/` |
| Smart Trading Blueprint (STB) | ICT foundations | First Candle Rule (FCR) entries | `strategies/smarttradingblueprint/` |
| Inevitrade (IT) | Smart Money Concepts | 35A, G2, SMOG 3.0, TCL 1.0/2.0 | `strategies/inevitrade/context/` |

## For Coaches
This public repo contains analysis exports, session reviews, and methodology documentation.
The implementation code (MCP servers, Pine Scripts, agent specs) lives in the private repo.

---

*Built with Claude Code CLI (Anthropic) + Augment Code | 2026*

