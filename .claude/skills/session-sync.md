---
name: session-sync
description: >
  Run the full mid-session or end-of-work sync routine: stage and commit all outstanding work, push to remote, update AGENT_SYNC.md with cross-agent handoff notes, and create or append the session log. Use this whenever the user mentions: "session sync", "sync everything", "commit and sync", "push and log", "update agent sync", "end of work", "sync before I go", "commit all changes", "push all work", "log session", "sync session", or wants to save and sync progress without a full session close. Do NOT use for: full session close with review checklist (use /goodnight for that), single-file commits, or when there's nothing to commit.
---

# Skill: /session-sync

Execute the complete sync routine: stage all outstanding work, commit with a meaningful message, push to remote, update AGENT_SYNC.md for cross-agent handoffs, and create or append the session log. Mid-session or end-of-work sync without the full /goodnight review checklist.

## Session Sync vs. /goodnight

| /session-sync | /goodnight |
|---------------|------------|
| Quick sync — commit + push + log | Full close — reviews checklist, pattern reminder, sign-off |
| Mid-session or stepping away | Done for the day |
| No completeness review | Checks for missing trade/daily reviews |

## Workflow

### 1. Check Status and Stage Work

```bash
git status
git add smarttrader-ai/ data/screenshots/ data/imports/ logs/ AGENT-SYNC/
```

Never stage: `.env`, credential files, wallet files, or other sensitive data.

### 2. Build Commit Message

Format: `[type] [date] — [brief summary]`

Examples:
- `reviews 2026-04-22 — trade #024, daily review, updated levels`
- `infra 2026-04-22 — Pine v3.0.3 auto-levels, fixed MCP config`
- `skills 2026-04-22 — session-sync skill refinement`

### 3. Commit and Push

```bash
git commit -m "[message]"
git push origin main
```

If push fails due to remote changes:
```bash
git pull --rebase origin main
git push origin main
```

### 4. Session Log — Create or Append

Path: `logs/fortuna/YYYY/MM-Mon/session_YYYYMMDD.md`

Format:
```markdown
## YYYY-MM-DD — [session type: live / analysis / infra / skills]
- [What was accomplished]
- [Key decision or outcome]
- Commit: [short hash] — [message]
```

### 5. Update AGENT_SYNC.md (MANDATORY — every sync)

Append to `AGENT-SYNC/AGENT_SYNC.md` at every sync, even routine ones. This is the shared living context — any agent or Christopher should be able to open it and know exactly where things stand.

Format:
```markdown
## 📡 [Month Day], [Year] Session Summary (Fortuna)
**Session type:** [live / analysis / infra / skills / cross-repo]
- [What was accomplished]
- [Key decision or outcome]
- Commit: [short hash] — [message]
```

Priority flags for other agents:
- Pine Script changes → Auggie
- New skill or workflow change → Kavanah
- Infrastructure or MCP change → both
- Routine sync → still write it, just keep it brief

### 6. Final Push (Logs and Sync)

```bash
git add logs/ AGENT-SYNC/
git commit -m "Session log + sync [date]"
git push origin main
```

## Common Scenarios

**Mid-session checkpoint:** Stage, commit, push, append session log. Skip AGENT_SYNC unless something changed for other agents.

**End of work (not done for day):** Full sync including AGENT_SYNC if relevant. Session log notes what's in progress.

**After infrastructure change:** Always update AGENT_SYNC with version numbers and impact.

**After skill creation/update:** Update AGENT_SYNC for Kavanah with skill name and purpose.

## What NOT to Do

- Don't use for full day-end close — use /goodnight (includes review checklist)
- Don't commit sensitive files (`.env`, credentials, wallets)
- Don't write vague commit messages ("updates", "fixes", "stuff")
- Don't skip the session log — it's the timeline of what happened and why

## Quick Commands

```bash
# Stage and commit all work
git add smarttrader-ai/ data/screenshots/ data/imports/ logs/ && \
  git commit -m "[type] [date] — [brief summary]"
git push origin main

# Add logs and AGENT_SYNC if updated
git add logs/ AGENT-SYNC/ && \
  git commit -m "Session log [date]"
git push origin main

# Check what's staged
git status
git diff --staged --stat

# View recent commits
git log --oneline -5
```
