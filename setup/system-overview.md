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
| **Kavanah Fleet** | Augment Intent Coordinator | Spec-driven task orchestration — breaks intent into tasks, delegates to implementor agents that write code, run commands, and push commits | Reads `specs/*.spec.md` · Delegates to implementor, verifier, and specialist agents · Full code editing via delegated agents |

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
[`specs/SMARTTRADERAI_EXPORT_SPEC.md`](../specs/SMARTTRADERAI_EXPORT_SPEC.md)

## Spec-Driven Workflow

This project is built using a **spec-driven development workflow** powered by [Augment Intent](https://www.augmentcode.com/) (Kavanah):

1. **Spec** — Every feature starts as a specification document defining purpose, inputs/outputs, dependencies, and done criteria
2. **Tasks** — The coordinator reads the spec and breaks it into discrete, delegatable work units
3. **Delegate** — Specialized AI agents (implementation, testing, review) pick up tasks and execute against the spec
4. **Verify** — Each agent runs verification checks before marking work complete
5. **Commit & Sync** — Approved changes are committed and synced to the public repo

This means the documentation, exports, and analysis you see here weren't hand-written — they were **generated, validated, and assembled by a coordinated fleet of AI agents**, each working from a shared specification. The spec is the single source of truth; the agents are the builders.

> 💡 The full specs live in `specs/` and drive everything from Pine Script indicators to webhook pipelines to the export formats used in trading reviews.

## Agent Interface Architecture

Each AI agent in this system can be accessed via multiple interfaces — all sharing the same underlying context and memory.

### CLI vs VSCode Native Extension — How Context is Shared

**Claude Code (Fortuna):** The VSCode extension and CLI share the same conversation history. `claude --resume` bridges a terminal session into VSCode and vice versa. Memory is file-based (MEMORY.md, AGENT_SYNC.md, project files) — fully interface-agnostic. Switching between terminal and VSCode loses nothing.

**Augment Code (Auggie + Kavanah):** The Augment Native VSCode extension and Augment CLI share the same Context Engine backend — both pull from the same deep codebase index. Architectural understanding is unified across interfaces. Kavanah runs in **Augment Intent** — a standalone desktop application (separate from the VSCode extension) that provides spec-driven development with a Coordinator and 6 specialist agents (Investigate, Implement, Verify, Critique, Debug, Code Review) working in parallel across isolated git worktrees called Spaces.

### Interface Decisions

| Interface | Status | Notes |
|-----------|--------|-------|
| Claude Code CLI (terminal) | ✅ Primary for Fortuna | Full power — MCP servers, file access, session memory — also runs in VSCode terminal instance |
| Claude Code VSCode extension | ⏸️ Optional | Same Fortuna, shared history via `claude --resume` |
| Augment Native VSCode extension | ✅ Active | Primary for current web3 build repos — shares Context Engine with Augment CLI |
| Augment CLI (terminal) | ✅ Primary for Auggie | Implementation builds, bulk tasks — shared Context Engine — also runs in VSCode terminal instance |
| Augment Intent (Desktop Application) | ✅ Primary for Kavanah | Standalone desktop app — spec-driven development & agent orchestration. Self-updating living spec as source of truth. Separate from the VSCode extension. Current builds use shared main branch for cross-agent awareness; Intent's default worktree isolation applies for future isolated production builds. |
| Claude Desktop App | ❌ Not needed | claude.ai wrapper only — no filesystem or MCP access |
| Cowork | ❌ Not needed | Designed for non-technical browser-based workflows |
| Cline (VS Code extension + CLI) | ❌ Not in use | Open-source AI coding assistant with `.clineignore` support. Available as both a VS Code extension and a standalone CLI for headless/CI-CD workflows. Wraps Claude and other AI APIs — redundant given Claude Code CLI + Augment in this stack. Reference only. |

**CLI-first principle:** All agents use the terminal CLI as their primary interface. VSCode extensions and standalone apps are convenience layers — memory and coordination persist through files in `AGENT-SYNC/`, not interface-specific conversation history.

## For Coaches
This public repo contains analysis exports, session reviews, and methodology documentation.
Strategy details, Pine Script source, and agent specs are in the private workspace.

---

*Built with Claude Code CLI (Anthropic) + Augment Code | 2026*

