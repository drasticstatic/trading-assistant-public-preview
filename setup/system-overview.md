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
    ├── Webhook alerts → tunnel → local server → AI
    └── TradingView MCP (tradingview-mcp-jackson) → CDP port 9222 → AI reads charts directly
        └── Morning brief: scan Fortuna watchlist · read indicator values · apply rules.json · session bias

Tradovate API (Brokerage — CME Futures)
    └── MCP Server → AI reads account data, positions, fills

Hummingbot Stack (Crypto CEX + DEX Execution)
    ├── hummingbot-api (Docker) — FastAPI on :8000, PostgreSQL, EMQX MQTT
    ├── Hummingbot Gateway (DEX middleware — Solana, EVM chains)
    └── MCP Server (hummingbot-mcp) → AI places orders, manages positions, deploys bots

AI Agents
    ├── Fortuna (Claude Code) — strategy, coaching, session intelligence
    ├── Auggie (Augment Code) — builds, infrastructure, bulk tasks
    └── Kavanah (Augment Intent) — orchestration, spec management, delegation

TradeZella (Journaling)
    └── CSV exports → AI analyzes trades vs rules

Public-Facing Pages (GitHub Pages)
    ├── portfolio.html — 2026 YTD stats, recovery arc, futures log, CoinLedger breakdown, live web3 balances
    └── resources.html — floating word glossary, coaching cards, prop firm mechanics, psychology cards
```

## Agent Architecture

| Agent | Model | Role | Key Tools / Access |
|---|---|---|---|
| **Fortuna** | Claude Code CLI | Primary collaborator — trading strategy, chart analysis, behavioral coaching, session management | MCP: `tv-alerts`, `tradovate`, `tradingview`, `auggie`, `hummingbot-mcp` · Direct chart reading · Morning brief · TradeZella exports |
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

| Firm | Account | Status | Platform | Notes |
|---|---|---|---|---|
| **Apex Trader Funding** | APEX-06 (100K) | ✅ Min days met Mar 24 | Tradovate | Profit gap still needs to be met |
| **TakeProfitTrader** | TAKEPROFIT558167553 (50K) | ✅ Active — reset Apr 1, 2026 | Tradovate | Fresh eval |
| **BTCC** | SOL/USDT perp | ✅ Active — crypto CEX | BTCC | Voucher account; manual entry; Hummingbot integration planned |
| **LucidFlex** | — | Planned | TBD | Phase 2 |
| **Tradeify** | — | Planned | TBD | Phase 3 |

> ⚠️ No account numbers or credentials stored in this file. See private `.env` files for auth.

## MCP Server Registry

| Server | Transport | Purpose | Status |
|---|---|---|---|
| `tradovate` | stdio (Python) | Futures brokerage — account, positions, fills, orders | ✅ Connected |
| `tv-alerts` | stdio (Python) | TradingView webhook alerts — real-time chart events | ✅ Connected |
| `tradingview` | stdio (Node.js) | TradingView Desktop direct access via CDP — chart state, indicator values, Pine Script dev, morning brief, replay mode | ✅ Connected (Apr 3, 2026) · [tradingview-mcp-jackson](https://github.com/LewisWJackson/tradingview-mcp-jackson) — thank you LewisWJackson 🙏 · [▶️ Setup walkthrough](https://www.youtube.com/watch?v=vIX6ztULs4U) |
| `auggie` | stdio | Augment Code CLI agent access | ✅ Connected |
| `hummingbot-mcp` | stdio (uv/Python) | Crypto CEX + DEX execution — orders, positions, swaps, bot orchestration | ✅ Connected (Mar 27, 2026) |
| `robinhood` | stdio (Python) | Robinhood equity portfolio — positions, quotes, news, earnings, options (read; trade execution roadmap) | ✅ Registered · auth fix pending |
| `btcc-mcp` | stdio | BTCC crypto exchange — SOL/USDT perpetual futures, direct REST API integration. Separate from Hummingbot; native BTCC order management. | 🔜 Planned — REST API roadmap |
| `telegram-mcp` | stdio | **Dual role:** (1) Execute trades inside Telegram-native wallet/DEX interfaces; (2) Mobile interface — communicate with Fortuna on the go via Telegram, issue instructions, receive alerts. Credentials: API keys via `my.telegram.org/apps` + bot token via BotFather. | 🔜 Planned |

**Hummingbot Docker stack** (`~/hummingbot/hummingbot-api/`):

| Container | Image | Purpose | Port |
|---|---|---|---|
| `hummingbot-api` | hummingbot/hummingbot-api | FastAPI execution layer | 8000 |
| `hummingbot-postgres` | postgres:16 | Trade/bot state persistence | 5432 |
| `hummingbot-broker` | emqx:5 | MQTT broker for bot communication | 1883 |

Start/stop: `cd ~/hummingbot/hummingbot-api && make deploy` / `make stop`

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

## Skills Library

Claude Code skills are structured prompt files in `.claude/skills/` that give Fortuna a repeatable, high-quality procedure for common tasks. Only the 3-line header is loaded at context start; full body loads when triggered.

### Project Skills (`.claude/skills/`)

| Skill | Trigger | Purpose |
|-------|---------|---------|
| `/trade-review` | "create review for [trade]" | 9-section individual trade review (FORTUNA_WORKFLOW template) |
| `/daily-review` | "daily review for [date]" | STB daily export (9 sections + SmartTraderAI 3Qs) |
| `/weekly-review` | "weekly review" | STB weekly export (behavioral arc + 9-question copy-paste) |
| `/premarket` | "create premarket" | Pre-session analysis plan (10 sections + SmartTraderAI 5Qs) |
| `/goodmorning` | "good morning" / "start session" | Live trading startup — MCP health checks + account brief |
| `/goodnight` | "goodnight" / "end session" | Session close + commit + session log |
| `/create-skill` | "create a skill for X" | Design new skills; 7 hacks + makemyskill.com workflow |
| `/marp-deck` | "create a deck for", "make slides from" | Convert any doc into a dark-theme Marp slide deck + generate HTML |

### Global Skill (`~/.claude/skills/`)

| Skill | Trigger | Purpose |
|-------|---------|---------|
| `/startup` | "startup" (any repo) | Cross-repo session orientation — read CLAUDE.md, git state, brief |

**Cross-repo deployment guide** (for Auggie, Kavanah, Intent workspaces): `AGENT-SYNC/CROSS_REPO_SKILLS_DEPLOY.md`

**Marp deck** (shareable slides — public): [`setup/create-skill.marp.md`](./create-skill.marp.md) · [▶️ Rendered view](https://drasticstatic.github.io/trading-assistant-public-preview/setup/create-skill.marp.html)

### Skills Candidates Roadmap

Skills to build next, in priority order. Run each description through [makemyskill.com](https://makemyskill.com) before writing the full body.

| # | Skill | Trigger | What It Does |
|---|-------|---------|-------------|
| 1 | `/level-brief` | "give me my levels", "level brief" | Read auto-levels output via TradingView MCP (pine_labels/lines/boxes) → summarize key levels per instrument, FCR rays, ZTH levels for the session ✅ *Built* |
| 2 | `/smt-scan` | "SMT scan", "check SMT" | Cycle pane_focus across NQ/ES/YM → identify index divergences → output Scenario A/B/C verdict with reasoning ✅ *Built* |
| 3 | `/session-sync` | "sync agents", "update agent-sync" | Commit staged work → push → append session block to AGENT_SYNC.md → create/update session log ✅ *Built* |
| 4 | `/marp-deck` | "create a deck for", "make slides from" | Convert any review/briefing doc into a dark-theme Marp slide deck + generate HTML ✅ *Built* |
| 5 | `/import-trades` | "import trades", "process the CSV" | Run the TradeZella → STB pipeline, verify output, flag any missing trade reviews ✅ *Built* |
| 6 | `/eval-progress` | "eval status", "where am I on the eval" | Pull live account data (get_account) → report balance, trailing floor, gap to target, min days remaining, daily-run-rate math |
| 7 | `/open-orders` | "open orders", "check all positions" | Pull live positions/orders from all connected exchanges → single-pane status report ✅ *Built* |
| 8 | `/pattern-review` | "pattern review", "update pattern tracker" | Read pattern_tracker.md → analyze trends → append dated review block with one mechanical fix per active pattern ✅ *Built* |
| 9 | `/monthly-audit` | "monthly audit", "end of month", "April audit" | End-of-month Marp deck: P&L summary, behavioral arc, strategy/course progression across all coaching groups ✅ *Built* |
| 10 | `/capture-agent-trades` | "capture agent trade", "log agent fill" | Future skill — capture and log trade data when Fortuna executes trades autonomously on Christopher's behalf 🔜 *Planned* |
| 11 | `/tax-entry` | "log this for tax", "add to tax log" | Append a trade or document to `taxes/YYYY/` working files ✅ *Built* |
| 12 | `/smog-analysis` | "SMOG analysis", "run SMOG on this" | SMOG framework analysis for a specific trade or setup ✅ *Built* |
| 13 | `/tcl-analysis` | "TCL analysis", "run TCL on this" | TCL strategy analysis for a trade or setup ✅ *Built* |
| 14 | `/summarize` *(global)* | "summarize this", "tldr" | Distill a long document, PR, or conversation thread into bullets — context-adaptive |
| 15 | `/explain` *(global)* | "explain this", "walk me through" | Explain a concept, file, or code at the right depth for Christopher's known expertise (calibrated from memory) |

**Skills + Scripts:** Every skill includes a `## Quick Commands` section with exact bash one-liners for the repeatable parts — pre-built paths, flags, and commit messages. This saves tokens (no re-deriving commands) and ensures consistency across sessions. The skill body handles *reasoning*; Quick Commands handle *execution*. Build the script alongside the skill, not separately.

---

## For Coaches
This public repo contains analysis exports, session reviews, and methodology documentation.
Strategy details, Pine Script source, and agent specs are in the private workspace.

---

## Public Pages

| Page | URL | Purpose |
|---|---|---|
| `portfolio.html` | GitHub Pages | 2026 YTD stats, recovery arc, futures trade log, CoinLedger breakdown, live on-chain balance viewer, tax summary |
| `resources.html` | GitHub Pages | Floating word glossary (20 terms w/ tooltips), coaching methodology cards, prop firm mechanics, psychology cards |
| `auto-levels.pine_changelog.html` | GitHub Pages | Auto Levels Pine Script version history — compact/expanded toggle, popout modals |

## Planned Integrations

| Integration | Purpose | Prerequisite |
|---|---|---|
| **BTCC REST API MCP** | Direct BTCC exchange integration — SOL/USDT perp order management, position tracking, P&L, native to BTCC's REST API. Separate from Hummingbot; gives Fortuna direct BTCC control. | BTCC API key + secret |
| **Telegram MCP** (`chigwell/telegram-mcp`) | Dual role: (1) Execute trades inside Telegram-native wallet/DEX interfaces; (2) Mobile Fortuna interface — communicate with Fortuna on the go, issue trade instructions, receive session alerts. | Two credentials required: API key + hash from `my.telegram.org/apps` + bot token from BotFather |
| **Hummingbot Gateway** | DEX execution — Solana/EVM swaps, CLMM liquidity positions, wallet sends | Gateway container start + wallet credentials added via `accounts/gateway/add-wallet` |
| **Hummingbot CEX connectors** | Live crypto trading on Bybit, Binance, and other CEXs via Hummingbot strategy layer | Exchange API keys added via `accounts/add-credential` |
| **DEX Arbitrage Bot** | Uniswap/PancakeSwap arb on Arbitrum via Hardhat | Hummingbot Gateway + cross-repo context share from `trading-bot_arbitrage_DAPPUv3_hardhat_UNI-CAKE` |

## MCP Ecosystem — What AI Trading Systems Can Do

This system is built on the **Model Context Protocol (MCP)** — an open standard that lets AI assistants connect to live data sources, brokerages, and tools. Below is a reference for what's available in the broader MCP ecosystem, both what this system uses today and what is possible to build.

### What MCP Enables for Trading

| Capability | Available Today | Example MCPs |
|---|---|---|
| **Live chart reading** | ✅ | `tradingview-mcp-jackson` — reads indicator values, draws levels, runs Pine Script, morning brief |
| **Futures brokerage access** | ✅ | Custom Tradovate MCP — account balance, positions, fills, orders |
| **Webhook event ingestion** | ✅ | Custom `tv-alerts` MCP — receives TradingView alerts in real time |
| **Crypto CEX + DEX execution** | ✅ | `hummingbot-mcp` — orders, positions, bot orchestration across 40+ exchanges |
| **Equity portfolio read** | ✅ | `robinhood-mcp` — portfolio value, positions, quotes, news, options |
| **Mobile alert delivery + remote control** | 🔜 Planned | `telegram-mcp` — bidirectional messaging: Fortuna sends alerts, Christopher issues instructions on the go |
| **AI-to-AI coordination** | ✅ | `auggie` MCP — Claude Code delegates tasks to Augment Code agent |
| **News + earnings data** | ✅ via Robinhood | Robinhood MCP includes news, ratings, earnings, fundamentals |
| **Options data** | ✅ via Robinhood | `robinhood_get_options_positions` — options portfolio read |
| **DEX + on-chain execution** | ✅ via Hummingbot | Gateway — Solana, EVM swaps, CLMM liquidity, wallet sends |
| **Strategy backtesting** | 🔜 | TradingView MCP includes `data_get_strategy_results` — Pine Strategy Tester output |
| **Market replay** | ✅ | TradingView MCP `replay_start/step/trade` — bar-by-bar replay with live trade simulation |
| **Alert management** | ✅ | TradingView MCP `alert_create/list/delete` — programmatic TradingView alert control |
| **Screener / symbol search** | ✅ | TradingView MCP `symbol_search`, Robinhood MCP `robinhood_search_symbols` |

### Open-Source MCP Servers Worth Knowing

These are community-built MCP servers available publicly that extend what an AI trading assistant can do:

| Server | Repo / Source | What It Does |
|---|---|---|
| **tradingview-mcp-jackson** | `LewisWJackson/tradingview-mcp-jackson` | CDP-based direct access to TradingView Desktop — full chart control, indicator reading, Pine Script dev, morning brief |
| **robinhood-mcp** | `verygoodplugins/robinhood-mcp` | Robinhood portfolio, quotes, news, earnings, options, watchlist — read-only |
| **hummingbot-mcp** | `hummingbot/hummingbot-mcp` | Full Hummingbot API access — bots, strategies, CEX/DEX execution, position management |
| **telegram-mcp** | `chigwell/telegram-mcp` | Bidirectional Telegram messaging — send/receive messages, mobile alert delivery, remote trade instructions. Requires: API credentials from `my.telegram.org/apps` + bot token from BotFather. |
| **alpaca-mcp** | Various | Equity/options trading via Alpaca API (US equities, paper + live) |
| **polygon-mcp** | Various | Real-time + historical market data via Polygon.io |
| **yfinance / market data** | Various | Yahoo Finance data — free historical prices, fundamentals, options chains |

### What This System's AI Can Do Today

With the current MCP stack live, Fortuna (Claude Code) can:

- **Read live TradingView charts** — indicator values, VWAP bands, EMA levels, Auto Levels output — without any human screenshots
- **Generate a morning brief** — scan watchlist, apply personal trading rules, output per-instrument bias and key levels
- **Receive real-time trade signals** — TradingView webhook alerts arrive mid-session and are readable immediately
- **Check account status** — Apex + TPT account data, current positions, order history pulled directly from Tradovate
- **Orchestrate crypto bots** — via Hummingbot MCP, manage strategies across 40+ CEX and DEX venues
- **Read equity portfolio** — Robinhood positions, P&L, news, options — pending auth fix

### Recommended Starting Stack

For anyone building a similar AI trading assistant, a minimal working stack:

```
1. Claude Code CLI (or any MCP-compatible AI)
2. tradingview-mcp-jackson  →  chart reading + morning brief
3. One brokerage MCP (Tradovate, Robinhood, Alpaca — pick your venue)
4. A webhook receiver  →  TradingView alerts into the AI mid-session
```

From there, add Hummingbot for crypto execution, a Telegram MCP for mobile alerts and remote control, and custom Pine Script indicators for your specific strategy's signal layer.

---

*Built with Claude Code CLI (Anthropic) + Augment Code | 2026 · Last updated Apr 20, 2026*

