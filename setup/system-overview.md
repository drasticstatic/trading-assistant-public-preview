# 🏗️ System Overview — SmartTrader AI
### AI-Powered Trading Assistant for Prop Firm Futures
*Christopher Wilson | Feb 2026*

---

## What This Is

An AI-assisted trading system built on **Claude Code CLI** (Anthropic) and **Augment Code** that combines:

- 🤖 **AI Trading Assistant (Fortuna)** — behavioral coaching, chart analysis, session management, level marking review
- 📊 **TradingView Integration** — custom Pine Script indicators with auto-drawn FCR levels, FVG zones, EMA stacks, pattern detection
- 🔗 **MCP Servers** — Model Context Protocol servers that give the AI direct access to brokerage account data and live chart events
- 📡 **Webhook Pipeline** — TradingView alerts fire to a local server, which feeds real-time chart events to the AI assistant
- 🎯 **Multi-Strategy Framework** — ZeroToHero (1hr color flips), Smart Trading Blueprint (FCR), Inevitrade (SMC: TCL, SMOG, G2)
- 📈 **Multi-Agent Orchestration** — Augment Intent coordinates specialized agents for research, implementation, testing, and review

## Architecture

```
TradingView (Charts + Alerts)
    ├── Pine Scripts: auto-draw levels, detect patterns
    └── Webhook alerts → local server → AI receives events
         
Tradovate API (Brokerage)
    └── MCP Server → AI reads account data, positions, fills

AI Agents
    ├── Fortuna (Claude) — strategy + coaching
    ├── Auggie (Augment) — code + infrastructure
    └── Kavanah Fleet (Intent) — task orchestration

TradeZella (Journaling)
    └── CSV exports → AI analyzes trades vs rules
```

## Prop Firm Accounts
- **Apex Trader Funding** — $100K evaluation (Tradovate)
- **TakeProfitTrader** — evaluation (Tradovate)
- **LucidFlex** — planned (Phase 2)
- **Tradeify** — planned (Phase 3)

## Strategies
| Strategy | Source | Focus |
|---|---|---|
| ZeroToHero (ZTH) | 1hr color flip levels | KEY, 5/5, 3/5 structural levels |
| Smart Trading Blueprint (STB) | ICT foundations | First Candle Rule (FCR) entries |
| Inevitrade (IT) | Smart Money Concepts | TCL, SMOG, G2, OG strategy models |

## For Coaches
This public repo contains analysis exports, session reviews, and methodology documentation.
The implementation code (MCP servers, Pine Scripts, agent specs) lives in the private repo.

---

*Built with Claude Code CLI (Anthropic) + Augment Code | 2026*

