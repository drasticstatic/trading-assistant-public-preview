# 🔄 Agent Sync — Living Context Document
### Auggie ↔ Fortuna ↔ Augment Intent Agents
*Last updated: Feb 28, 2026 (late evening) — Auggie*

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
| MCP registered with Claude Code | ⏳ NOT YET — immediate next step |

### TradingView Webhook Receiver — `MCP Servers/webhook_receiver/`
| Item | Status |
|---|---|
| FastAPI server (port 8089) | ✅ Built + smoke tested |
| MCP tools: get_alerts, get_alert_count, clear_alerts | ✅ Functional |
| ngrok tunnel | ✅ **LIVE** — `https://semiempirically-unrhythmic-kym.ngrok-free.dev` → localhost:8089 |
| Live TradingView → webhook test | ✅ Test event received and stored. webhook_alerts.pine on chart. |
| MCP registered with Claude Code | ⏳ NOT YET |

### Pine Scripts — `tradingview/pine_scripts/`
| Item | Status |
|---|---|
| fcr_levels.pine **v3.1** | ✅ 269 lines — Style tab colors restored, FCR arrows with tails, FVG ticks, pattern logic fixed |
| FCR placement | ✅ 9:30 candle HIGH/LOW wicks — current day solid 2px + past 2 days dashed 1px |
| Colors | ✅ Full color system: KEY=cyan 3px, 5/5=cyan 1px, 4/5=cyan dashed, 4/5 yesterday=yellow dashed, 3/5=cyan dotted, Ghost=violet dotted |
| Labels | ✅ ▲/▼ arrows at size.small (larger than v2) |
| EMAs | ✅ Customizable periods (9/21/50 default) |
| ZTH L1-L5 | ✅ **FIXED** — each level has price input + type dropdown (KEY/5-5/4-5/3-5/Ghost). Was broken because old code used wrong function + gold-only color |
| Pattern labels (R/P/B/C) | ✅ Built with configurable thresholds (wick%, body%). Accuracy TBD with live chart |
| Break & Retest (BR) | ⏳ Not yet — needs level-tracking state (complex in Pine) |
| FVG threshold | ✅ Min size control in points (0=show all) |
| webhook_alerts.pine | ✅ On chart, ready for ngrok test |

### Augment Intent — `specs/`
| Item | Status |
|---|---|
| AGENTS.md (fleet config) | ✅ Written |
| Spec files (6 component specs) | ✅ Written |
| Augment Intent installed | ✅ Christopher confirmed |
| First workflow | ⏳ Ready to start |

---

## 📋 Pending Work Queue (Priority Order)

1. ~~Pine Script v3~~ ✅ DONE — v3 with full color system, past 2 days FCR, ZTH fixed
2. ~~ngrok setup~~ ✅ DONE — tunnel live, test event received
3. **Register both MCP servers** with Claude Code (next session with Christopher)
4. ~~Notion → Markdown conversion~~ ✅ DONE — clean workbook + tracker in data/Inevitrade Progression/
5. ~~Bootcamp session notes~~ ✅ DONE — 7 sessions extracted, moved to strategies/inevitrade/context/
6. ~~Prop firm plans → specs~~ ✅ DONE — Paladin Protocol + progression plan in trading-system.spec.md
7. ~~Public repo readme~~ ✅ DONE — setup/system-overview.md
8. **Strategies dir buildout** — expand with all IT/ZTH/STB strategy details (Augment Intent first task)
9. **Break & Retest detection** — needs level-tracking state in Pine Script (complex)
10. **Pattern accuracy tuning** — R/P/B/C labels need validation on live chart
11. **ZTH context built** — strategies/zerotohero/context/zth-level-system.md (from Level Analysis RTF + Cheat Sheet PDF)
12. **Indicator guide** — tradingview/pine_scripts/INDICATOR_GUIDE.md (for TradingView "about this script")

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

Fortuna is waiting on:
- MCP registration so she can query account data directly
- ~~Webhook pipeline~~ ✅ LIVE — ngrok tunnel active
- ~~Updated synopsis~~ ✅ This document is current

---

*Updated by: Auggie | Feb 28, 2026 (late evening)*
*Next update expected: After MCP registration + live chart validation*

