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
- 📈 **Multi-Agent Orchestration** — Augment Intent acts as the orchestration layer for scoped build, review, and documentation tasks

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
    └── Kavanah (Augment Intent) — orchestration, spec management, delegation

TradeZella (Journaling)
    └── CSV exports → AI analyzes trades vs rules
```

## Agent Architecture

| Agent | Model | Role | Key Tools / Access |
|---|---|---|---|
| **Fortuna** | Claude Code CLI | Primary collaborator — trading strategy, chart analysis, behavioral coaching, session management | MCP: `tv-alerts`, `tradovate`, `auggie` · Screenshot analysis · TradeZella exports |
| **Auggie** | Augment CLI / VS Code Agent | Primary builder bench — implementation, infrastructure, Pine Script, Python, MCP servers | Full workspace read/write · Shell · Git · Package managers |
| **Kavanah** | Augment Intent | Orchestration layer — keeps the live spec current, breaks work into tasks, and delegates scoped specialists such as implementors, verifiers, or UI-focused agents | Reads spec + task notes · Delegates task agents · Works from Intent's separate workspace clone |

**Communication flow:**
```
Christopher / Fortuna / direct Intent request → Kavanah coordinator → delegated task agents → review / verification → summary back
```

See [`specs/AGENTS.md`](../specs/AGENTS.md) for the repo's current orchestration guide, and [`setup/AugmentArchitecture.md`](./AugmentArchitecture.md) for the deeper architecture reference.

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

1. **Spec** — Every feature starts with a live spec and supporting reference docs that define purpose, boundaries, and done criteria
2. **Tasks** — The coordinator breaks the work into discrete, delegatable task notes
3. **Delegate** — Scoped specialists pick up only the implementation, review, research, or presentation work they need to do
4. **Verify** — The assigned agent runs or requests the smallest useful checks before the task is marked complete
5. **Sync** — Changes are synchronized across the active clones; public-safe exports are handled separately where applicable

Much of the supporting documentation, exports, and analysis in this repo can be **generated, validated, and assembled through a coordinated agent workflow**. The live spec stays the source of truth; the delegated agents are the builders and reviewers.

> 💡 The full specs live in `specs/`, while `setup/AugmentArchitecture.md` is the best deep-dive reference for how the Augment surfaces and orchestration model fit together.

## Agent Interface Architecture

The best mental model is: **builder benches + orchestration layer + plumbing**.

- **VS Code Agent / Auggie CLI** are the main builder benches.
- **Intent** is the orchestration layer.
- **MCP** extends the system with tools and retrieval, but is not a fourth native surface.

These surfaces may share repo understanding or code retrieval, but they do **not** all share the same chat history.

### CLI vs VSCode Native Extension — How Context is Shared

**Claude Code (Fortuna):** The CLI and VS Code extension are the one important exception where conversation continuity can be bridged with `claude --resume`. Even there, durable workflow memory still lives best in files on disk such as notes, specs, and `AGENT-SYNC/`.

**Augment surfaces (Auggie + Kavanah):** VS Code Agent and Auggie CLI share Augment's codebase understanding, but their chat transcripts are still separate. Intent is a separate orchestration surface with its own spec notes, task flow, and agent conversations.

### Interface Decisions

| Interface | Status | Notes |
|-----------|--------|-------|
| Claude Code CLI (terminal) | ✅ Primary for Fortuna | Full power — MCP servers, file access, session memory — also runs in VSCode terminal instance |
| Claude Code VSCode extension | ⏸️ Optional | Same Fortuna, shared history via `claude --resume` |
| Augment VS Code Agent | ✅ Active | Editor-native builder bench. Shares Augment's codebase understanding with Auggie CLI, but not a shared chat transcript |
| Augment CLI (terminal) | ✅ Primary for Auggie | Terminal-native builder bench for implementation, shell-heavy work, and bulk tasks |
| Augment Intent (Desktop Application) | ✅ Primary for Kavanah | Standalone orchestration layer. Public docs describe Spaces with dedicated branches/worktrees; this repo currently operates from Intent's separate clone on `main` plus task notes and delegated agents |
| Claude Desktop App | ❌ Not needed | claude.ai wrapper only — no filesystem or MCP access |
| Cowork | ❌ Not needed | Designed for non-technical browser-based workflows |
| Cline (VS Code extension + CLI) | ❌ Not in use | Open-source AI coding assistant with `.clineignore` support. Available as both a VS Code extension and a standalone CLI for headless/CI-CD workflows. Wraps Claude and other AI APIs — redundant given Claude Code CLI + Augment in this stack. Reference only. |

**Practical principle:** use the surface that matches the job — builder benches for direct implementation, Intent for planning and delegation, and files on disk for durable cross-surface continuity.

### Conversation History Siloing

While the Augment Context Engine (codebase index) is shared across all Augment-powered interfaces, **conversation transcripts are completely siloed** per interface. No interface can read another's chat history.

| Interface | Chat History Storage | Shared With Other Interfaces? |
|-----------|---------------------|-------------------------------|
| Augment VS Code Agent | Augment workspace chat history | ❌ No — separate from Auggie CLI and Intent |
| Augment CLI | Augment CLI conversation history | ❌ No — separate from VS Code Agent and Intent |
| Augment Intent | Intent workspace notes + agent conversations | ❌ No — separate from the other Augment surfaces |
| Claude Code CLI | Local session files (`~/.claude/`) | ✅ With Claude Code VS Code via `claude --resume` |
| Claude Code VSCode Extension | Shared Claude session bridge | ✅ With Claude Code CLI via `claude --resume` |

This is why durable handoff material belongs in `AGENT-SYNC/`, spec notes, task notes, and logs rather than in any one interface's chat transcript.

**Key implication:** shared repo understanding is not the same thing as shared conversation memory. An agent can understand the same codebase while still having no access to another interface's chat transcript.

### Intent Clone Architecture

Public Intent docs describe a Space as having its own dedicated branch and worktree. In this repo's current operating pattern, Intent still works from a **separate git clone**, but that clone is kept on `main` for simpler sync with the primary clones used outside Intent.

```
Intent clone (Kavanah):
~/intent/workspaces/md-sync/trading-assistant/

Primary clones:
~/ClaudeCodeCLI/trading-assistant/        (Fortuna)
~/dappu/...                               (Auggie in web3 repos)
```

**Why separate clones?** They reduce mid-session conflicts, keep each interface's git state independent, and let orchestration happen without colliding with another tool's uncommitted work.

**How changes sync:** Changes move across clones through normal git sync, while `AGENT-SYNC/`, spec notes, and task notes carry the human-readable handoff context.

**What is `md-sync`?** This is Intent's internal workspace group name. It appears in the clone path but has no special meaning outside of Intent's directory structure.

## For Coaches
This public repo contains analysis exports, session reviews, and methodology documentation.
Strategy details, Pine Script source, and agent specs are in the private workspace.

---

*Built with Claude Code CLI (Anthropic) + Augment Code | 2026*

