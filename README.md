# 💰 Trading Assistant — Three-Agent AI System

> A live, multi-agent AI trading accountability system built on Claude Code CLI + Augment Code

[![Public Preview](https://img.shields.io/badge/%F0%9F%8C%90%20Public%20Preview-Available-brightgreen)](https://drasticstatic.github.io/trading-assistant-public-preview/) [![Synced via GitExporter](https://img.shields.io/badge/Synced%20via-GitExporter-blue)](https://github.com/drasticstatic/trading-assistant/blob/main/gitexporter.config.json) [![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview) [![Built with Augment](https://img.shields.io/badge/Built%20with-Augment-0B0F19)](https://augmentcode.com) [![Status](https://img.shields.io/badge/Status-%F0%9F%94%A5%20Live-brightgreen)](https://code.claude.com/docs/en/cli-reference)

> [🗺️ Wondering where to go next? 🧭 → Click HERE to find your way around 🔍](https://drasticstatic.github.io/trading-assistant-public-preview/)

> 🔒 Note for visitors: This repository is partially mirrored to a public preview via an automated GitExporter pipeline. The public version includes this README and session export files. Strategy reference files are excluded — they contain proprietary content from paid mentorship programs (ZeroToHero, Inevitrade, SmartTradingBlueprint) and are not mine to share publicly.

👋 Hi! I'm Fortuna — an AI assistant built by Anthropic, and I've been set up as Christopher's dedicated wealth warden, trading assistant, accountability coach, success manager and analyst for his futures and crypto futures operation.

At the start of every session, Christopher checks in with me on his mental state, the accounts he's trading, news events, and his goals for the day. After each session, he feeds me his TradeZella exports and trade screenshots, and I evaluate every trade against the correct strategy framework — ZeroToHero for his Apex and Take Profit Trader accounts, and Inevitrade SMC for his Lucid, Tradeify, and crypto futures accounts — with STB's ICT principles applied as the foundational layer across everything.

My job is to track his discipline, flag rule violations, identify behavioural patterns across sessions, celebrate genuine process wins, and keep him honest.

I generate ready-to-paste content for all three of SmartTraderAI's check-in formats directly from our session data:

- 🌅 [**Daily Pre-market Summary**](smarttrader-ai/analysis/premarket/) — news releases, expected figures, HTF bias, key levels, intraday bias, and expectations for the day.
- 📊 [**Daily Post-market Review**](smarttrader-ai/reviews/) — what actually happened, key lessons, trade results, P&L, and whether any gains were round-tripped.
- 📅 [**Weekly Check-in**](smarttrader-ai/reviews/) — what worked, what didn't, observable market and trade patterns, mistakes made, recurring problems, solutions being implemented, yes/no performance questions and action steps for the coming week.

— *Fortuna (via Claude Code CLI)* 🙏🏼

## 🤖 The Three Agents

### 🔮 Fortuna — Trading Coach & Session Intelligence

**Platform:** Claude Code CLI (Anthropic)

Fortuna is the primary user-facing agent — Christopher's dedicated trading assistant, accountability coach, and analyst. At the start of every session, Fortuna checks in on mental state, reviews news events, and sets goals. After each session, Fortuna analyzes trade data and screenshots, evaluates every trade against the correct strategy framework, flags rule violations, identifies behavioral patterns across sessions, and celebrates genuine process wins.

Fortuna also generates structured coaching exports (daily pre-market reviews, post-market reviews, and weekly check-ins) and manages the automated TradeZella → SmartTraderAI data pipeline end-to-end.

### 🛠️ Auggie — Implementation Engine

**Platform:** Augment Code (Claude Opus 4.6)

Auggie handles all infrastructure, code, and builds. This includes MCP server development (brokerage data access, webhook receivers), custom TradingView Pine Script indicators, Python automation scripts, and system architecture. Auggie built the Tradovate MCP server, the TradingView webhook pipeline, and maintains the technical infrastructure that powers the operation.

### 📋 Kavanah — Strategic Orchestration

**Platform:** Augment Intent (Agent Fleet)

Kavanah coordinates spec-driven task execution across the workspace. When large-scale documentation, strategy reference builds, or multi-file restructuring is needed, Kavanah breaks the work into tasks, delegates to specialized sub-agents, tracks progress, and ensures everything stays in sync. Kavanah built the complete Inevitrade strategy reference library and manages cross-agent coordination.

## 🏗️ Architecture

```
Christopher (Product Owner)
    ↓
Fortuna (Claude Code CLI) — coaching, analysis, session intelligence
    ↕
Auggie (Augment Code) — builds, infrastructure, Pine Scripts, MCP servers
    ↕
Kavanah (Augment Intent) — task orchestration, documentation, strategy refs

    ┌──────────────────────────────────────────────────────────────┐
    │  TradingView ←→ Webhook Pipeline ←→ AI                      │
    │  TradingView Desktop ←→ MCP (CDP) ←→ AI  (direct chart read)│
    │  Tradovate API ←→ MCP Server ←→ AI  (CME futures)           │
    │  Hummingbot API ←→ MCP Server ←→ AI (crypto CEX + DEX)      │
    │  TradeZella ←→ Python Pipeline ←→ AI                        │
    │  Telegram ←→ MCP Server ←→ AI       (mobile + DeFi alerts)  │
    └──────────────────────────────────────────────────────────────┘
```

- [`setup/system-overview.md`](setup/system-overview.md) — high-level map of the agents, clones, MCP servers, and workflow lanes.
- [`setup/AugmentArchitecture.md`](setup/AugmentArchitecture.md) — deeper Augment / Intent architecture and delegation model.
- [`setup/AugmentArchitecture.html`](https://drasticstatic.github.io/trading-assistant-public-preview/setup/AugmentArchitecture.html) — clean HTML companion for the Augment architecture guide.

## 📐 Strategy Stack

| Strategy | Accounts | Markets | Status |
| --- | --- | --- | --- |
| ZeroToHero (ZTH) | Apex Trader Funding, Take Profit Trader | Futures (NQ, ES, CL, GC) | 🔥 Live |
| SmartTradingBlueprint (STB) | Foundational ICT layer | Futures & Crypto Futures | 📚 [course in progress](data/progression/SmartTradingBlueprint/course-workbook.md) |
| Inevitrade (IT) | Lucid, Tradeify, Crypto Futures | Futures & Crypto Futures | 📈 [paper-trading](data/progression/inevitrade/inner-circle-workbook.md) |

## ⚙️ Key Infrastructure

- **MCP Servers (5 active)** — Tradovate (CME futures) · TradingView webhook alerts · **TradingView Desktop direct** (chart state, indicator values, morning brief via [tradingview-mcp-jackson](https://github.com/LewisWJackson/tradingview-mcp-jackson)) · Auggie · Hummingbot (crypto CEX + DEX), all queryable by Fortuna mid-session
- **Hummingbot Stack** — Docker-based API server (FastAPI + PostgreSQL + EMQX MQTT) at `~/hummingbot/hummingbot-api`; MCP layer at `~/hummingbot/mcp`; Gateway for DEX/wallet execution planned
- **Pine Script Indicators** — Custom overlays for FCR levels, FVGs, EMAs, and pattern detection
- **Webhook Pipeline** — TradingView alerts → tunnel → local server → AI receives live chart events
- **TradeZella Pipeline** — Automated CSV export → Python conversion → Google Sheets → coaching platform
- **Public Pages** — `portfolio.html` (live P&L, recovery arc, web3 balance viewer) · `resources.html` (glossary, coaching cards) · `auto-levels.pine_changelog.html`
- **Multi-Repo Sync** — GitExporter mirrors public-safe content; two clones on `main` with push/pull sync

## 🗂️ Repo Structure

If you're browsing the mirrored public-safe areas, start with the [public preview home](https://drasticstatic.github.io/trading-assistant-public-preview/), keep the recovery-friendly `404.html` nearby, or jump straight into `data/` and `setup/`.

The most useful public paths live under `smarttrader-ai/analysis`, `smarttrader-ai/reviews`, and `smarttrader-ai/exports`, with deeper system docs in `setup/system-overview.md` and `setup/AugmentArchitecture.md`.

```
~/ClaudeCodeCLI/trading-assistant/
├── .claude/
│   └── skills/                  # 🔒 Private — Fortuna skill procedures (/goodmorning, /trade-review, etc.)
├── AGENT-SYNC/                  # 🔒 Private — cross-agent coordination (Fortuna ↔ Auggie ↔ Kavanah)
├── data/
│   ├── imports/
│   │   └── YYYY/
│   │       └── MM-Mon/          # TradeZella + Tradovate CSV imports (e.g. 2026/04-Apr/)
│   ├── progression/
│   │   ├── SmartTradingBlueprint/
│   │   └── inevitrade/          # Coaching progression notes + public reference material
│   └── screenshots/             # Trade screenshots & annotated charts — embedded in reviews
├── logs/                        # 🔒 Private — session logs (fortuna/, auggie/)
├── setup/
│   ├── accounts/
│   │   ├── crypto/CEX/          # BTCC, Bybit, Phemex
│   │   ├── crypto/DEX/
│   │   └── PropFirms/           # Apex, TPT, Lucid, Tradeify — rules, statements, progression
│   ├── create-skill.marp.md     # Slide deck: architecting Claude Code skills
│   ├── create-skill.marp.html   # Rendered HTML version
│   ├── AugmentArchitecture.md   # Augment/Intent architecture guide
│   └── system-overview.md       # High-level system map
├── smarttrader-ai/
│   ├── analysis/premarket/
│   │   └── YYYY/MM-Mon/         # premarket_YYYYMMDD_summary.md per session
│   ├── exports/
│   │   └── YYYY/MM-Mon/         # STB_export_YYYYMMDD_daily-review.md · weekly-review.md
│   └── reviews/
│       ├── YYYY/MM-Mon/         # review_YYYYMMDD_[INSTRUMENT]-[PLATFORM]_NNN.md
│       └── pattern_tracker.md   # Running P&L, behavioral pattern log, recovery arc
├── specs/                       # 🔒 Private — workflow specs, external tool index, canonical references
│   ├── FORTUNA_WORKFLOW.md      # Master session pipeline checklist
│   ├── SMARTTRADERAI_EXPORT_SPEC.md  # Canonical copy-paste templates (pre-market / daily / weekly)
│   ├── EXTERNAL_TOOLS.md        # External tool inventory: paths, GitHub, troubleshoot, new-machine setup
│   ├── morning_brief_routine.md # TradingView indicator toggle sequences + entity IDs
│   ├── tradingview-integration.spec.md
│   ├── tradezella-automater.spec.md
│   ├── tradovate-mcp.spec.md
│   └── references/
│       └── fortuna-rules.json   # Snapshot of ~/tradingview-mcp-jackson/rules.json (watchlist + strategy rules)
├── strategies/                  # 🔒 Private — STB, ZTH, Inevitrade reference material
└── README.md
```

**🔒 Private directories** are excluded from the public preview sync via `gitexporter.config.json`.

## 🧠 WORKFLOW CONTEXT — WITH SMARTTRADERAI 🤖

Christopher operates **Fortuna** — a Claude Code CLI agent — as a persistent trading assistant living in his local file system. Fortuna reads his start instructions at the beginning of every session, analyzes TradeZella CSV exports via an automated Python pipeline that pushes trade data directly to the STB Google Sheet, cross-references all prop firm rules, identifies behavioral patterns across sessions, and generates export files.

I also work directly with the TradeZella → SmartTraderAI pipeline. After each session, Christopher drops his TradeZella CSV export onto the "TradeZella to STB" Automator app on his desktop — a drag-and-drop macOS application I can trigger or assist with directly via the command line. That app runs the Python conversion script (`tradezella_to_stb.py`), maps his TradeZella trade data into the STB Bulk Import format, and pushes it straight into his linked Google Sheet — ready for SmartTrader AI to ingest. I can monitor, troubleshoot, and assist that entire pipeline end-to-end from within our Claude Code CLI session, so the handoff between my analysis and the STB platform stays seamless and automated.

### ⚙️ Pipeline Overview

```
TradeZella Export (.csv)
        ↓
  [Automator App — drag & drop]
        ↓
  tradezella_to_stb.py
        ↓
  STB Google Sheet (Bulk Import format)
        ↓
  Fortuna Claude Code CLI reviews + exports → .md files in smarttrader-ai/exports/
        ↓
  SmartTraderAI ingests → session check-ins generated
```

**The pipeline:**

1. 📤 **TradeZella** — trade journal and CSV export source

- Repo: [TradeZella_STB](https://github.com/drasticstatic/TradeZella_STB)

1. 🤖 **Claude Code CLI (Fortuna)**

- User prompts agent to read the newest trade data from downloads folder.
- Fortuna then analyzes it, flags rule violations, tracks patterns across sessions, and generates STB-formatted exports — all while automatically running **automator_drop_handler.sh** — macOS drag-and-drop app; runs `tradezella_to_stb.py` and pushes data to the STB Google Sheet automatically (no manual entry).

1. 📊 **SmartTraderAI** — receives exports and field-by-field check-ins for STB coaching oversight
2. 🔁 **Claude Code CLI** — user prompts Fortuna to review SmartTraderAI's response to continue the feedback loop

## 🎯 WHO I AM & MY MISSION

I am a serious futures and crypto futures trader operating across multiple prop firms and personal accounts. I am actively enrolled in three complementary mentorship programs that together form my complete trading system:

- 📈 **ZeroToHero** — Structure and precision entry methodology
- 🏦 **Inevitrade** — Smart Money Concepts and institutional order flow
- 📚 **SmartTradingBlueprint (STB)** — Deep ICT foundations and comprehensive trading mastery

My mission is to become a consistently profitable, disciplined trader who passes and scales prop firm evaluations, builds funded accounts, and grows crypto futures positions — all while following my rules with patience and precision.

⚡ Not gambling. Executing a system.

Three complementary mentorship programs. Multiple prop firm evaluations. AI-powered accountability at every step — from pre-market prep to post-session review to weekly pattern analysis.

The goal: consistent profitability through discipline, patience, and precision.

## 🤝 CLAUDE'S ROLE — Accountability Coach & Success Partner

- 🔍 **Analyze** my trade data, journal entries, screenshots, and performance exports
- ✅ **Evaluate** every trade against the correct strategy framework for that account
- 🏆 **Celebrate** genuine wins — good process, discipline, rule-following, and profitable outcomes
- 🚨 **Call out** rule violations, revenge trading, overtrading, and repeated mistakes — firmly and directly, without piling on
- 📉 **Track patterns** across sessions and flag both improving and deteriorating tendencies
- 🌱 **Help me grow** by connecting my real trade data to the strategies I am learning

### 🗣️ Coaching Tone

The combination of a strict but caring mentor. When I follow my rules and execute well, Fortuna acknowledges it genuinely — even on losing trades where the process was correct. When I break rules, Fortuna is direct and honest. Fortuna does not lecture repeatedly on the same point in one session but says it once, clearly, and moves forward constructively. If the same mistake repeats across multiple sessions, Fortuna escalates the directness.

Never shaming me. Always believing in my potential. Always pushing me toward the next level.

### 🌅 Daily Session Start

Each session opens with the `/goodmorning` skill — a structured startup routine:

1. **System health** — TradingView Desktop CDP connection · Tradovate account live (balance + trailing floor) · webhook pipeline active
2. **Context read** — `AGENT-SYNC/AGENT_SYNC.md` picks up where last session left off; any new agent prompts from Auggie or Kavanah
3. **Account brief** — APEX balance, trailing floor, distance to profit target, min days status; TPT days completed, deadline, current standing
4. **Session orientation** — day of week, economic calendar, macro context (CPI / FOMC / EIA?); premarket file check — offer to build with `/premarket` if missing
5. **Behavioral reminder** — the one most active pattern and the specific mechanical rule to counteract it (Pattern 7: no SL moves · Pattern 8: active exit at MFE · Pattern 9: cancel all orders before stepping away)

If any system check fails, Fortuna diagnoses before any market analysis begins. Flying blind is not an option.

*Built with *[*Claude Code CLI*](https://code.claude.com/docs/en/overview)* by Anthropic + *[*Augment Code*](https://augmentcode.com)*.*

🗺️ Still feeling lost? Looking for something specific? 🧭 → Click [HERE](https://drasticstatic.github.io/trading-assistant-public-preview/404.html) 🔍