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

## Agent Architecture

| Agent | Model | Role | Key Tools / Access |
|---|---|---|---|
| **Fortuna** | Claude Sonnet 4.6 (Claude Code CLI) | Primary collaborator — trading strategy, chart analysis, behavioral coaching, session management | MCP: `tv-alerts`, `tradovate`, `auggie` · Screenshot analysis · TradeZella exports |
| **Auggie** | Claude Opus 4.6 (Augment Code) | Implementation engine — builds, infrastructure, Pine Script, Python, MCP servers | Full workspace read/write · Shell · Git · Package managers |
| **Kavanah Fleet** | Augment Intent Coordinator | Spec-driven task orchestration — breaks intent into tasks, delegates to agents, tracks progress | Reads `specs/*.spec.md` · Delegates to Auggie, Research, Testing, Review agents |

**Communication flow:**
```
Christopher → Fortuna → Kavanah Coordinator → Agent Fleet (Auggie, Research, Testing, Review)
```

See [`specs/AGENTS.md`](../specs/AGENTS.md) for full fleet configuration.

## Webhook Pipeline

```
TradingView Alert (Pine Script or manual)
    │  JSON POST: {"symbol":"MNQ","action":"FCR_LONG","price":21450.25,"timeframe":"15"}
    ▼
Cloudflare Tunnel (primary) / ngrok (fallback)
    │  HTTPS → localhost:8089
    ▼
FastAPI server.py --http-only
    │  POST /webhook → validates → ring buffer (last 100 events)
    │  Stores to ~/.tv_webhook_alerts.json
    ▼
MCP Server (tv-alerts) — server.py --mcp-only
    │  Claude Code auto-spawns via stdio
    │  Tools: get_alerts, get_alert_count, clear_alerts
    ▼
Fortuna reads real-time chart events mid-session
```

| Layer | Primary | Fallback |
|---|---|---|
| **Tunnel** | Cloudflare Tunnel (zero cost, permanent URL) | ngrok free tier (URL resets on restart) |
| **Server** | FastAPI on localhost:8089 | Same |
| **MCP** | `tv-alerts` registered at user scope | Same |

## Prop Firm Accounts

| Firm | Status | Platform | Notes |
|---|---|---|---|
| **Apex Trader Funding** | Active — $100K evaluation | Tradovate | Primary account |
| **TakeProfitTrader** | Active — evaluation | Tradovate | — |
| **LucidFlex** | Planned | TBD | Phase 2 |
| **Tradeify** | Planned | TBD | Phase 3 |

> ⚠️ No account numbers or credentials stored in this file. See private `.env` files for auth.

## Export Spec

All SmartTraderAI export formats (pre-market, post-market, weekly reviews) are defined in:
[`setup/SMARTTRADERAI_EXPORT_SPEC.md`](SMARTTRADERAI_EXPORT_SPEC.md)

## For Coaches
This public repo contains analysis exports, session reviews, and methodology documentation.
Strategy details, Pine Script source, and agent specs are in the private workspace.

---

*Built with Claude Code CLI (Anthropic) + Augment Code | 2026*

