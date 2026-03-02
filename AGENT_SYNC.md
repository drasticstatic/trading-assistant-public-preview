# 🔄 Agent Sync — Living Context Document
### Auggie ↔ Fortuna ↔ Augment Intent Agents
*Last updated: Mar 2, 2026 — Kavanah (Intent)*

> **What this is:** A shared document that Auggie and Fortuna both read at the start
> of every session to know where the other left off. Christopher relays between agents
> but this doc ensures nothing gets lost in translation.
>
> **Rule:** All agents update this doc when they complete significant work.
> **Visibility:** Private repo only (excluded from public via gitexporter.config.json).
> **Sync protocol:** Two clones on `main` — push after commits, pull at session start.
> Auggie/Fortuna: `~/ClaudeCodeCLI/trading-assistant` | Intent: `~/intent/workspaces/md-sync/trading-assistant`

---

## 🏗️ Current System State

### Tradovate MCP Server — `MCP Servers/tradovate_mcp/`
| Item | Status |
|---|---|
| Auth (Playwright browser) | ✅ Working — APEX validated |
| APEX profile | ✅ Both evals returned (APEX4848390000005 + 06) |
| TPT profile | ⏳ Auth works, account blown — auto-renewal in ~1 day |
| Tools: get_account, get_positions, get_fills, get_orders | ✅ All returning clean data |
| Tools: get_quote, get_contract | ✅ Contract specs correct (tick size, value, expiry) |
| Live bid/ask quotes | ❌ REST not available — WebSocket only (future) |
| MCP registered with Claude Code | ✅ Registered Feb 28 by Fortuna — active next session |

### TradingView Webhook Receiver — `MCP Servers/webhook_receiver/`
| Item | Status |
|---|---|
| FastAPI server (port 8089) | ✅ Built + smoke tested |
| MCP tools: get_alerts, get_alert_count, clear_alerts | ✅ Functional |
| ngrok tunnel | ✅ **LIVE** — `https://semiempirically-unrhythmic-kym.ngrok-free.dev` → localhost:8089 |
| Live TradingView → webhook test | ✅ Test event received and stored. webhook_alerts.pine on chart. |
| MCP registered with Claude Code | ✅ Fixed Mar 1 by Fortuna — `--mcp-only` flag + file-backed store (`~/.tv_webhook_alerts.json`). Both processes share state. |
| End-to-end test | ✅ **CONFIRMED** Mar 1 — TradingView SOL alert → ngrok → server → MCP → `get_alerts` returned 2 events |
| Cloudflare Tunnel | ⏳ Auggie building — replaces ngrok as primary. ngrok remains as Fortuna-managed fallback. |

### Pine Scripts — `tradingview/pine_scripts/`
| Item | Status |
|---|---|
| **zth_auto_levels.pine v1.3** | ✅ **PRIMARY** — 416 lines. Auto ZTH levels (1hr color-flip detection) + FCR + EMA + FVG + patterns + prior day. 8 toggles. |
| Auto level detection | ✅ 1hr color-flip → level at candle OPEN. KEY at 1hr swings. Lifecycle: KEY→5/5→3/5→Ghost→removed |
| FCR (merged into v1.3) | ✅ 9:30 candle HIGH/LOW wicks. Today=solid 2px, prior 2 days=dashed faded. ▲ LONG / ▼ SHORT labels. |
| Level accuracy | ⏳ Detecting but not 100% accurate — awaiting Christopher's visual feedback for tuning |
| fcr_standalone.pine | ✅ Shareable FCR-only for STB team. Arrow size selector. 97 lines. |
| webhook_alerts.pine | ✅ On chart, fires JSON alerts. End-to-end confirmed with SOL test. |
| fcr_levels.pine v3.1 | ⚠️ **LEGACY** — manual ZTH level inputs. Replaced by zth_auto_levels. |
| Break & Retest (BR) | ⏳ Not yet — needs level-tracking state (complex in Pine) |
| INDICATOR_GUIDE.md | ✅ Full settings reference + how-to for all features |

### Augment Intent — `specs/`
| Item | Status |
|---|---|
| AGENTS.md (fleet config) | ✅ Written |
| Spec files (6 component specs) | ✅ Written — updated Mar 1 with Cloudflare Tunnel |
| INTENT_STARTUP.md | ✅ Updated Mar 1 — reflects current system state |
| Augment Intent installed | ✅ Christopher confirmed |
| First workflow | ✅ Completed Mar 1 — strategy documentation buildout |

### Strategy Context — `strategies/`
| Item | Status |
|---|---|
| **Inevitrade — 7 living reference docs** | ✅ Built by Intent Mar 1 (replaced old compendium) |
| → smog-reference.md (318 lines) | ✅ SMOG & SMOG 3.0 — HA trailing, SMOG Plus, 15min confluences |
| → tcl-reference.md (389 lines) | ✅ TCL 1.0 Max/Ultra & 2.0 — confirmed fibs, DCA stacking table |
| → tc-reference.md | ✅ TC1 & TC2 — confirmed fib levels (TC1: TP=1.272/Entry=0.382/SL=0.17) |
| → ch-reference.md | ✅ CH1 & CH2 — channel trading, staged risk reduction |
| → g2-reference.md | ✅ G2 continuation with SMOG relationship |
| → 35a-reference.md | ✅ 35A Elliott Wave reversal with Shark Fin confluences |
| → strategy-guide.md | ✅ Selection decision tree, evolution history, SMC concepts |
| Old files consolidated | ✅ smog-strategy.md, tcl-strategy.md, inevitrade-overview.md, inevitrade-strategies.md → merged + deleted |
| ZTH level system | ✅ `strategies/zerotohero/context/zth-level-system.md` — all setups with entry/stop/confluence |
| Bootcamp session notes | ✅ 7 sessions preserved in `strategies/inevitrade/context/` |

---

## 📋 Pending Work Queue (Priority Order)

See **PENDING-TASKS.md** for the full prioritized list. Key items:
1. ⏳ **Cloudflare Tunnel** — blocked on domain purchase (support ticket open). ngrok fallback active + Fortuna-managed.
2. 🔴 **ZTH level accuracy tuning** — awaiting Christopher's visual feedback
3. ~~**Strategy context expansion**~~ — ✅ Complete (7 living reference docs built by Intent)
4. **Entry rule reference card** — Christopher building via Intent
5. **Break & Retest detection** — complex Pine state tracking
6. **Pattern accuracy tuning** — R/P/B/C validation on live chart

---

## 🔑 Key Decisions Made

- **Auth method:** Playwright headless browser (not OAuth2 REST — prop firms excluded from API keys)
- **Quotes:** REST proxy only (last fill price) — live bid/ask requires WebSocket (future)
- **FCR timing:** 9:30 AM 15min candle HIGH/LOW wicks (not 9:45 close)
- **Pine labels:** Arrows not text (mobile-friendly)
- **Public repo exclusions:** specs/, MCP Servers/, tradingview/, strategies/, logs/, gitexporter.config.json
- **New rule:** Always ask Christopher before creating new dirs/files if private, public, or gitignored

---

## 📡 For Fortuna — What Auggie Built (Full Session Feb 28)

### Morning Session
1. Playwright browser auth (bypasses Tradovate API subscription for prop firms)
2. All 6 MCP tools validated on APEX (get_account, get_positions, get_fills, get_orders, get_quote, get_contract)
3. Pine Script v2 (FCR fixed, patterns, EMAs, ZTH, FVGs)
4. TradingView webhook server (FastAPI + MCP)
5. Webhook alert Pine Script (fires JSON on chart events)
6. Augment Intent spec files (7 specs + AGENTS.md)

### Evening Session
7. **Pine Script v3** — full rewrite with correct ZTH level system (KEY/5-5/4-5/3-5/Ghost with exact colors from chart-analysis-workflow), past 2 days FCR (dashed), larger arrow labels, FVG threshold, configurable pattern sensitivity
8. **Inevitrade content** — extracted 7 bootcamp session PDFs + Notion workbook/tracker → clean markdown. Bootcamp notes moved to strategies/inevitrade/context/ (private). Clean workbook + tracker in data/ (public for coach sharing)
9. **Prop firm specs** — Paladin Protocol risk management, Treasury allocation, progression plan all in trading-system.spec.md
10. **GitHub sync fixed** — updated sync-public.yml to exclude new private dirs. Push triggered.
11. **Augment Intent startup prompt** — specs/INTENT_STARTUP.md ready to copy-paste
12. **This shared doc** — AGENT_SYNC.md for persistent Auggie ↔ Fortuna context

### Verbatim from Christopher (important context)
> "I am sitting here resonating with what Craig (who started Inevitrade) said today, I am so glad that trading has provided what not only looks like a way forward but such a cool community of people to journey with!"

> "the trade data in the readiness progression tracker is dummy template data to show the effectiveness of how the notion uses that data - it is NOT my personal data"

> "I want you both to be aware of what I am saying to both of you and what your responses are without using a bunch of credits for you to stay on the same page and without stepping on each other or double burning credits"

**CORRECTION:** "Real-time price for context should come from TradingView (already integrated via Pine Script)" was WRONG. Pine Script cannot send data outside TradingView except via alerts. The webhook server + webhook_alerts.pine is the actual data pipe. **Now complete — ngrok tunnel live.**

### Late Evening Session
13. **Pine Script v3.1** — Style tab colors restored (all plot colors now use `input.color`), FCR arrows larger (`size.normal`) with "▲ LONG" / "▼ SHORT" text + pointer tails, FVG threshold now in ticks (instrument-aware via `syminfo.mintick`), pattern logic corrected (R=rejection off resistance only, B=bounce off support only, added `bounce_wick_pct` control)
14. **ngrok pipeline LIVE** — `https://semiempirically-unrhythmic-kym.ngrok-free.dev` → localhost:8089. Test event sent and received.
15. **ZTH context file** — `strategies/zerotohero/context/zth-level-system.md` built from Level Analysis RTF + Cheat Sheet PDF
16. **Indicator guide** — `tradingview/pine_scripts/INDICATOR_GUIDE.md` for TradingView "about this script"
17. **Empty dirs fixed** — .gitkeep added to btcc, bybit, dex, TopStep, STB context

---

## 📡 For Auggie — What Fortuna Knows

Fortuna has context on:
- All trading strategies (ZTH, STB FCR, Inevitrade G2/OG/TC1/TCL/SMOG)
- Behavioral patterns (FOMO from wins, post-TP urgency)
- Level marking methodology (ETH for commodities, RTH for indices)
- Complete color reference system
- TradeZella export analysis workflow
- Christopher's prop firm account structure

Fortuna completed Mar 1:
- ✅ Both MCPs validated LIVE — `get_account` returns APEX data, `get_alerts` returns SOL test events
- ✅ Fixed tv-alerts MCP — port conflict + in-memory store → `--mcp-only` + file-backed store
- ✅ ngrok startup workflow memorized — Fortuna handles full ngrok fallback automatically
- ✅ Session-start + goodnight routines established in memory

Fortuna ready for:
- Pine Script visual feedback from Christopher (ZTH level accuracy)
- Weekend review when trades resume
- Cloudflare Tunnel URL update once Auggie completes setup

---

*Updated by: Auggie | Feb 28, 2026 (late evening)*
*Updated by: Fortuna | Feb 28, 2026*
*Updated by: Auggie | Mar 1, 2026 — ZTH Auto Levels v1.2, FCR Standalone, Strategy Compendiums, Cloudflare Tunnel queued*
*Updated by: Fortuna | Mar 1, 2026 — tv-alerts MCP re-registered with venv Python path (was broken: server.py as command). Start new session to activate.*
*Updated by: Fortuna | Mar 1, 2026 (session 2) — tv-alerts root cause found and fixed: port conflict + separate in-memory stores. Added --mcp-only flag + file-backed event store (~/.tv_webhook_alerts.json). Restart HTTP server then start new session.*
*Updated by: Kavanah (Intent) | Mar 1, 2026 — Strategy docs consolidated: 4 redundant files removed, 7 standalone reference docs finalized. Zero duplication.*

---

## 📡 Strategy Context Expansion — Kavanah Fleet (Augment Intent)

**Date:** Mar 1, 2026
**Source:** Augment Intent — Kavanah Fleet coordination

Strategy context expansion completed and **consolidated**. Per-model actionable reference docs:
- `strategies/inevitrade/strategy-guide.md` — Master strategy selection guide (includes evolution tree, setup ratings, visual flows)
- `strategies/inevitrade/smog-reference.md` — SMOG 3.0 strategy reference (consolidated from smog-strategy.md)
- `strategies/inevitrade/tcl-reference.md` — TCL strategy reference (consolidated from tcl-strategy.md)
- `strategies/inevitrade/35a-reference.md` — 35A strategy reference
- `strategies/inevitrade/g2-reference.md` — G2 strategy reference
- `strategies/inevitrade/tc-reference.md` — TC strategy reference
- `strategies/inevitrade/ch-reference.md` — CH strategy reference

**Consolidation (Mar 1):** Removed 4 redundant files (`inevitrade-overview.md`, `inevitrade-strategies.md`, `smog-strategy.md`, `tcl-strategy.md`) — their content was merged into the reference docs above. Total: 7 standalone strategy docs, zero duplication.

---

## 🔄 Repository Sync Setup — Multi-Environment (Mar 1, 2026)

**Change:** The trading-assistant repo now uses **two independent clones on `main`** instead of git worktrees on separate branches.

### Active Clones
| Location | Primary User | Branch |
|---|---|---|
| `~/ClaudeCodeCLI/trading-assistant` | Fortuna (Claude CLI) + Auggie (Augment CLI) + VSCode | `main` |
| `~/intent/workspaces/md-sync/trading-assistant` | Kavanah Fleet (Augment Intent) | `main` |

### Sync Protocol
- **After committing:** Push to `origin main` → the other clone pulls to sync
- **Before starting a session:** Pull `origin main` to get latest changes
- **Conflict resolution:** If two agents edit the same file simultaneously, resolve merge conflicts live
- Both clones point to the same GitHub remote: `git@github.com:drasticstatic/trading-assistant.git`

### Agent Responsibilities
- **Fortuna:** After committing, run `git push origin main`. At session start, run `git pull origin main`.
- **Auggie:** Same — push after commits, pull at session start.
- **Kavanah (Intent):** Same — push after commits, pull at session start.
- **All agents:** If you detect uncommitted changes from another agent's session, alert Christopher before overwriting.

### Why This Changed
Previously the Intent workspace used a git worktree on a separate branch (`trading-assistant-coordinator`). This caused files created in Intent to not appear in VSCode/Fortuna's clone until manually merged. Now both clones are on `main` with push/pull sync via GitHub — simple and predictable.

---

## 🟢 Mar 1, 2026 — All Systems Go

**Status: Ready to trade. Waiting on Christopher's command.**

---

### Fortuna (Claude Code CLI) — Mar 1 Session Summary

**Weekly review sprint completed:**
- `premarket_20260226_summary.md` — SmartTraderAI Pre-Market Copy-Paste Fields added (retroactive)
- `STB_export_20260226_daily-review.md` — Post-Market Copy-Paste Fields moved to end of doc (format fix)
- `STB_export_20260227_daily-review.md` — new daily review (no-fill session), Post-Market fields at end ✅
- `STB_export_20260227_weekly-review.md` — Feb 27 section completed
- `review_20260227_MNQ_001.md` — full unfilled trade review created
- `pattern_tracker.md` — Feb 27 entry added, Pattern 5 → ✅ fixed, stats updated
- 14 new screenshots committed (Feb 27 session + Inevitrade coach IMG files + Mar 1 context)

**Infrastructure wins this session:**
- tv-alerts MCP: `get_alerts` confirmed live end-to-end ✅
- ngrok startup workflow: Fortuna now handles full sequence automatically (memory saved)
- Fortuna manages ngrok as fallback; Cloudflare Tunnel remains the long-term goal (Auggie task)

**STB SmartTraderAI briefed:** Christopher has briefed STB coaches on our workflow + system upgrades. Compendium-style feedback incoming as coaches review sessions. Think of them as periodic distilled summaries from the coaching layer.

---

### Kavanah Fleet (Augment Intent) — Acknowledged ✅

Fortuna is fully aware of what Kavanah completed Mar 1:
- 7 Inevitrade living reference docs built (`strategies/inevitrade/`)
- 4 redundant files removed (smog-strategy.md, tcl-strategy.md, inevitrade-overview.md, inevitrade-strategies.md)
- strategy-guide.md — selection decision tree, evolution history, SMC concepts
- All changes committed + pushed + synced across both clones

These files are now Fortuna's reference when doing session analysis that involves Inevitrade setups.

**Kavanah's next task (when Christopher returns to Intent):**
- Entry rule reference card — Christopher will initiate when time allows

---

### Auggie — Tonight's Task

Christopher plans to work on the ZTH Pine Script (`zth_auto_levels.pine` v1.3) with Auggie this evening. Level accuracy tuning still pending Christopher's visual feedback. Auggie should pull latest from `origin main` before starting.

---

### Christopher's Planned Flow (Mar 1 Evening → Week)

1. **ZTH Pine Script** with Auggie (tonight)
2. **Session planning** with Fortuna (before any trade — read AGENT_SYNC first)
3. **Entry rule reference card** with Kavanah (when time allows)
4. **Trading:** Sunday ETH open through Wednesday (APEX -05 deadline)

**Eval context (priority order):**
| Account | Deadline | Gap Needed |
|---------|----------|-----------|
| APEX -05 | **Wednesday Mar 4** | ~+$6,000 |
| TakeProfit Trader 50K | End of March | ~+$3,000 |
| APEX -06 | Tuesday Mar 24 | ~+$6,000 |

**Eval rules (all agents aware):**
- Eval pressure is NOT a trading input
- One A+ setup per session — do not stack to catch up
- Entry set pre-session, not adjusted at execution
- SL placed structurally, never moved

---

### Validate at Next Session Start (all agents)

1. `get_account` — confirm APEX data live
2. `get_alerts` — confirm webhook pipeline (ngrok must be running; Fortuna handles startup if not)
3. `git pull origin main` — sync before any file work
4. Read AGENT_SYNC.md

**⚠️ ngrok still required** until Cloudflare Tunnel is live. If starting a new session after machine reboot → Fortuna runs the ngrok startup sequence automatically.

*Updated by: Fortuna | Mar 1, 2026 — weekly review complete, all systems go, ready at Christopher's command*
*Updated by: Kavanah (Intent) | Mar 2, 2026 — Full session summary below. ggshield, logs restructure, export spec, doc updates, Apex overhaul, AGENT_SYNC updated, both clones synced.*

---

## 📡 Mar 2, 2026 — Kavanah Session Summary

**Session type:** Multi-task coordination — executing Fortuna's 6-task brief

### What Was Completed

**1. ggshield Updated**
- v1.39.0 → v1.48.0 via Homebrew (pre-commit secret scanning)

**2. Logs Restructured**
- `logs/fortuna/` — 10 Fortuna session files moved from `logs/`
- `logs/auggie/` — created (empty, ready for use)
- `logs/kavanah/` — created with 3 session logs (Feb 28, Mar 1, Mar 2)

**3. SmartTraderAI Export Spec**
- `setup/SMARTTRADERAI_EXPORT_SPEC.md` — single source of truth for all STB copy-paste export formats (premarket, daily review, weekly review)

**4. Documentation Updates**
- `setup/ClaudeCodeCLI_trading-assistant_start-instructions.md` — added session routines, 3-agent architecture, ngrok workflow, MCP servers, webhook pipeline, export spec reference
- `setup/system-overview.md` — expanded agent architecture, webhook pipeline diagram, prop firm table
- `README.md` — refreshed with three-agent architecture, public-safe, live status

**5. Apex Rules Overhaul**
- `apex-rules.md` (legacy) → renamed to `apex-rules_legacy.md`
- New `apex-rules.md` — 266 lines covering both EOD and Intraday Trailing evaluation paths (from current webcopy)
- `apex-rules_legacy-vs-new-comparison.md` — 3-path comparison (Legacy vs EOD vs Intraday)
- `apex-vs-tpt-comparison.md` — shareable Apex vs TPT comparison with Lucid placeholder

**6. Session Logs**
- `logs/kavanah/session_20260228.md`, `session_20260301.md`, `session_20260302.md`

### Auggie Handoff 🤖

**Next task for Auggie:** ZTH Auto Levels Pine Script accuracy work.
- Christopher has screenshots and a feedback prompt ready in `tradingview/pine_scripts/zth_auto_levels.pine-feedback/`
- Christopher will hand Auggie the prompt directly
- Auggie should `git pull origin main` before starting

### Both Clones Synced ✅

```
Intent:        ~/intent/workspaces/md-sync/trading-assistant  (main)
ClaudeCodeCLI: ~/ClaudeCodeCLI/trading-assistant               (main)
```
Both on same commit after push + pull.

