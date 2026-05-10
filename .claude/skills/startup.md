---
name: startup
description: >
  Light session initialization — orient, check levels, and scan for divergence without the full
  morning routine. TRIGGER when: "start session", "new terminal", "quick start", "continue trading",
  "evening session", "coming back to desk", "picking up where we left off", "open terminal",
  "let's get oriented", "session check", "continue from earlier", or any phrase indicating a session
  restart or continuation that doesn't warrant the full /goodmorning routine. Do NOT use for: the
  primary start of a trading day (use /goodmorning — includes premarket, prop firm status, and
  behavioral reminder), end-of-session work (use /session-sync or /goodnight), or when a fresh
  premarket brief is needed from scratch.
---

# Skill: /startup

Light session init — model check, quick context read, level brief, and SMT scan. No premarket, no full morning routine. Right for continued sessions, evening continuation, or opening a new terminal for non-trading work.

## Skill Map

| | /startup | /goodmorning | /session-sync | /goodnight |
|---|---|---|---|---|
| Proxy / model check | ✅ | ✅ | ❌ | ❌ |
| MCP system health | ❌ | ✅ | ❌ | ❌ |
| Prop firm status | ❌ | ✅ | ❌ | ❌ |
| Premarket brief | ❌ | ✅ always | ❌ | ❌ |
| Level brief | ✅ | via premarket | ❌ | ❌ |
| SMT scan | ✅ | ✅ | ❌ | ❌ |
| Behavioral reminder | ❌ | ✅ | ❌ | ✅ |
| Trade + daily reviews | ❌ | ❌ | ❌ | ✅ |
| Pattern reminder | ❌ | ❌ | ❌ | ✅ |
| Commit + push | ❌ | ❌ | ✅ | ✅ |
| Session log | ❌ | ❌ | ✅ | ✅ |
| AGENT_SYNC update | ❌ | ❌ | ✅ | ✅ |
| Graph update | ❌ | ❌ | if changed | if changed |

---

## Step 0 — Model Check

**Live trading always uses Alfred-Anthropic.** No free models for prop firm accounts, real money, or live session analysis.

For non-trading work (research, infra, NIM session):

```bash
curl -s http://localhost:8082/v1/models   # 401 = UP ✅ | refused = start it
```

Start if down:

```bash
cd ~/code-forked/free-claude-code && nohup uv run free-claude-code > /tmp/fcc.log 2>&1 &
```

Wait ~4 seconds, re-check. Once inside: `/model` → `anthropic/nvidia_nim/z-ai/glm4.7`.

---

## Step 1 — Quick Context Read

If `graphify-out/GRAPH_REPORT.md` exists, read it before opening individual files.

Then:
- `AGENT-SYNC/AGENT_SYNC.md` — pick up where last session ended
- Any new prompts in `AGENT-SYNC/created-by-auggie/` or `AGENT-SYNC/created-by-kavanah/`

---

## Step 2 — Level Brief

Run `/level-brief` — current key levels, recent structure, active alerts.

---

## Step 3 — SMT Scan

Run `/smt-scan` — check for divergence between correlated instruments before any trading.

---

## Output

Confirm all clear or flag anything that needs attention before Christopher proceeds. Keep it tight — this is orientation, not a full brief.

## Related Specs

- `specs/FORTUNA_WORKFLOW.md` — full session start checklist and level protocols
- `specs/morning_brief_routine.md` — full morning brief reference (for /goodmorning)

## Quick Commands

```bash
# Proxy status
curl -s http://localhost:8082/v1/models   # 401 = up | refused = down

# Pull latest before session
git pull origin main
```
