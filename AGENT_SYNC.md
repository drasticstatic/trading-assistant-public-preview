# 🔄 Agent Sync — Living Context Document
### Auggie ↔ Fortuna ↔ Augment Intent Agents
*Last updated: Mar 1, 2026 — Auggie + Fortuna*

> **What this is:** A shared document that Auggie and Fortuna both read at the start
> of every session to know where the other left off. Christopher relays between agents
> but this doc ensures nothing gets lost in translation.
>
> **Rule:** Both agents update this doc when they complete significant work.
> **Visibility:** Private repo only (excluded from public via gitexporter.config.json).

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
| First workflow | ⏳ Christopher about to run |

### Strategy Context — `strategies/`
| Item | Status |
|---|---|
| Inevitrade compendium | ✅ `strategies/inevitrade/context/inevitrade-strategies.md` — 35A, G2, SMOG 3.0, TCL 1.0/2.0 |
| ZTH level system | ✅ `strategies/zerotohero/context/zth-level-system.md` — all setups with entry/stop/confluence |
| Bootcamp session notes | ✅ 7 sessions extracted in `strategies/inevitrade/context/` |
| Strategy expansion | ⏳ Organize notes into per-model actionable docs (Intent first task) |

---

## 📋 Pending Work Queue (Priority Order)

See **PENDING-TASKS.md** for the full prioritized list. Key items:
1. 🔴 **Cloudflare Tunnel** — Auggie building now, before ETH open Sun evening
2. 🔴 **ZTH level accuracy tuning** — awaiting Christopher's visual feedback
3. **Strategy context expansion** — Intent first coordination task
4. **Break & Retest detection** — complex Pine state tracking
5. **Pattern accuracy tuning** — R/P/B/C validation on live chart

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

---

## 📡 Strategy Context Expansion — Kavanah Fleet (Augment Intent)

**Date:** Mar 1, 2026
**Source:** Augment Intent — Kavanah Fleet coordination

Strategy context expansion completed. Per-model actionable reference docs created:
- `strategies/inevitrade/smog-3.0-reference.md` — SMOG 3.0 strategy reference
- `strategies/inevitrade/tcl-reference.md` — TCL strategy reference
- `strategies/inevitrade/g2-35a-reference.md` — G2 / 35A strategy reference

These expand the existing compendium (`strategies/inevitrade/context/inevitrade-strategies.md`) into standalone, actionable docs per strategy model.

---

## 🌙 End of Day — Mar 1, 2026

**Fortuna session summary:**
- Read AGENT_SYNC.md ✅
- Registered tradovate + tv-alerts MCPs at user scope ✅
- Consolidated data/exports/ ✅
- Answered: session-start routine, goodnight routine, ngrok workflow, Augment Intent vs Fortuna distinction
- MEMORY.md updated with all routines

**Validate at next session start:**
1. `get_account` — confirm Tradovate MCP live (APEX both evals)
2. `get_alerts` — confirm webhook pipeline (will fail if ngrok not running — see below)
3. Read AGENT_SYNC.md for Auggie's overnight work

**⚠️ Time-sensitive for Sunday evening / Monday morning:**
- Cloudflare Tunnel migration (Auggie task) — must be done BEFORE ETH open Sunday evening
- Once Cloudflare URL is live: update TradingView webhook alert URL (one paste, permanent)
- Until then: if restarting machine Sunday night → restart ngrok → paste new URL into TradingView before Monday session

