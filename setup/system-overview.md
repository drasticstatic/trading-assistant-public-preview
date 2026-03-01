# 🏗️ System Overview — SmartTrader AI
### AI-Powered Trading Assistant for Prop Firm Futures
*Christopher Wilson | Mar 2026*

---

## What This Is

An AI-assisted trading system built on **Claude Code CLI** (Anthropic) and **Augment Code** that combines:

- 🤖 **AI Trading Assistant (Fortuna)** — behavioral coaching, chart analysis, session management, level marking review
- 📊 **TradingView Integration** — custom Pine Script indicators for chart analysis
- 🔗 **MCP Servers** — Model Context Protocol servers for brokerage and chart event access
- 📡 **Webhook Pipeline** — TradingView alerts → tunnel → local server → AI receives events
- 🎯 **Multi-Strategy Framework** — multiple trading methodologies with structured context
- 📈 **Multi-Agent Orchestration** — Augment Intent coordinates specialized agents for builds

## Architecture

```
TradingView (Charts + Alerts)
    ├── Custom Pine Script indicators (overlays + alerts)
    └── Webhook alerts → tunnel → local server → AI

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
- **Apex Trader Funding** — $100K evaluation (Tradovate)
- **TakeProfitTrader** — evaluation (Tradovate)
- **LucidFlex** — planned (Phase 2)
- **Tradeify** — planned (Phase 3)

## For Coaches
This public repo contains analysis exports, session reviews, and methodology documentation.
Strategy details, Pine Script source, and agent specs are in the private workspace.

---

*Built with Claude Code CLI (Anthropic) + Augment Code | 2026*

