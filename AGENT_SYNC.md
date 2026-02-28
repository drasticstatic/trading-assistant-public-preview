# 🔄 Agent Sync — Living Context Document
### Auggie ↔ Fortuna ↔ Augment Intent Agents
*Last updated: Feb 28, 2026 — Auggie*

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
| ngrok tunnel | ⏳ Next — needs install + config |
| Live TradingView → webhook test | ⏳ webhook_alerts.pine is on Christopher's chart — ready to test |
| MCP registered with Claude Code | ⏳ NOT YET |

### Pine Scripts — `tradingview/pine_scripts/`
| Item | Status |
|---|---|
| fcr_levels.pine v2 | ✅ On chart, FCR rays working |
| FCR placement | ✅ Fixed — 9:30 candle HIGH/LOW wicks |
| Colors | ✅ Exact hex match (#1b5e20 / #801922) |
| Labels | ✅ ▲/▼ arrows (need to be slightly larger) |
| EMAs | ✅ Customizable periods |
| ZTH L1-L5 | ⚠️ Needs verification — Christopher reports unclear |
| Pattern labels (R/P/B/C) | ⚠️ Not aligning 100% with actual setups |
| Break & Retest (BR) | ⏳ Not yet implemented — needs threshold control |
| Past 2 days FCR (dashed) | ⏳ Requested — not yet built |
| FVG threshold control | ⏳ Requested — not yet built |
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

1. **Pine Script v3** — larger labels, past 2 days FCR, fix ZTH, improve patterns, B&R + threshold
2. **ngrok setup** — install, configure, test TV→webhook pipeline
3. **Register both MCP servers** with Claude Code
4. **Notion → Markdown conversion** — Readiness Progression Tracker + Inner Circle Workbook
5. **Bootcamp session notes** — read from iCloud, gain context
6. **Prop firm plans → specs** — incorporate progression plan + scaling SOP
7. **Public repo readme** — high-level synopsis for coaches in setup/
8. **Strategies dir buildout** — expand with all IT/ZTH/STB strategy details

---

## 🔑 Key Decisions Made

- **Auth method:** Playwright headless browser (not OAuth2 REST — prop firms excluded from API keys)
- **Quotes:** REST proxy only (last fill price) — live bid/ask requires WebSocket (future)
- **FCR timing:** 9:30 AM 15min candle HIGH/LOW wicks (not 9:45 close)
- **Pine labels:** Arrows not text (mobile-friendly)
- **Public repo exclusions:** specs/, MCP Servers/, tradingview/, strategies/, logs/, gitexporter.config.json
- **New rule:** Always ask Christopher before creating new dirs/files if private, public, or gitignored

---

## 📡 For Fortuna — What Auggie Built (Session Feb 28)

Auggie completed:
1. Playwright browser auth (bypasses Tradovate API subscription)
2. All 6 MCP tools validated on APEX
3. Pine Script v2 (FCR fixed, patterns, EMAs, ZTH, FVGs)
4. TradingView webhook server (FastAPI + MCP)
5. Webhook alert Pine Script (fires JSON on chart events)
6. Augment Intent spec files (7 specs + AGENTS.md)
7. This shared context document

**Fortuna should know:** The TradingView "already integrated via Pine Script" line from the
earlier synopsis was incorrect. Pine Script runs in TradingView's sandbox — no data flows
out automatically. The webhook server + webhook_alerts.pine is the actual data pipe, and it
needs ngrok to complete the connection.

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
- Webhook pipeline so she receives live chart events
- Updated synopsis from Auggie (this session's work)

---

*Updated by: Auggie | Feb 28, 2026*
*Next update expected: After Pine Script v3 + ngrok setup*

