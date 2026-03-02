# 💰 Trading Assistant — Three-Agent AI System

> *A live, multi-agent AI trading accountability system built on Claude Code CLI + Augment Code*

[![Public Preview](https://img.shields.io/badge/🌐%20Public%20Preview-Available-brightgreen)](https://github.com/drasticstatic/trading-assistant-public-preview)
[![Synced via GitExporter](https://img.shields.io/badge/Synced%20via-GitExporter-blue)](https://github.com/open-condo-software/gitexporter)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://claude.ai/claude-code)
[![Status](https://img.shields.io/badge/Status-🔥%20Live-brightgreen)]()

> 🔒 **Note for visitors:** This repository is partially mirrored to a
> [public preview](https://github.com/drasticstatic/trading-assistant-public-preview)
> via an automated GitExporter pipeline. The public version includes this README and
> session export files. Strategy reference files are excluded — they contain
> proprietary content from paid mentorship programs and are not mine to share publicly.

---

## 👋 What Is This?

This is Christopher's AI-powered trading operation — a system of three specialized AI agents that work together to provide accountability coaching, infrastructure automation, and strategic task orchestration for futures and crypto futures trading.

The system is **live and in daily use** across multiple prop firm evaluations and personal accounts.

---

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

---

## 🏗️ Architecture

```
Christopher (Product Owner)
    ↓
Fortuna (Claude Code CLI) — coaching, analysis, session intelligence
    ↕
Auggie (Augment Code) — builds, infrastructure, Pine Scripts, MCP servers
    ↕
Kavanah (Augment Intent) — task orchestration, documentation, strategy refs

    ┌─────────────────────────────────────────┐
    │  TradingView ←→ Webhook Pipeline ←→ AI  │
    │  Tradovate API ←→ MCP Server ←→ AI      │
    │  TradeZella ←→ Python Pipeline ←→ AI     │
    └─────────────────────────────────────────┘
```

## 📐 Strategy Stack

| Strategy | Focus | Status |
|----------|-------|--------|
| **ZeroToHero (ZTH)** | Structure and precision entries | 🔥 Live |
| **SmartTradingBlueprint / ICT (STB)** | Deep ICT foundations — applied across all accounts | 🔥 Live |
| **Inevitrade SMC** | Smart Money Concepts and institutional order flow | 🔥 Live |

## ⚙️ Key Infrastructure

- **MCP Servers** — Tradovate brokerage data + TradingView webhook alerts, queryable by AI mid-session
- **Pine Script Indicators** — Custom overlays for FCR levels, FVGs, EMAs, and pattern detection
- **Webhook Pipeline** — TradingView alerts → tunnel → local server → AI receives live chart events
- **TradeZella Pipeline** — Automated CSV export → Python conversion → Google Sheets → coaching platform
- **Multi-Repo Sync** — GitExporter mirrors public-safe content; two clones on `main` with push/pull sync

## 🎯 Mission

Not gambling. Executing a system. ⚡

Three complementary mentorship programs. Multiple prop firm evaluations. AI-powered accountability at every step — from pre-market prep to post-session review to weekly pattern analysis.

The goal: consistent profitability through discipline, patience, and precision.

---

*Built with [Claude Code CLI](https://claude.ai/claude-code) by Anthropic + [Augment Code](https://augmentcode.com).*
