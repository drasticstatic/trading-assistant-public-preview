---
name: session-sync
description: >
  Use to commit all outstanding work, push, update AGENT_SYNC.md, and create or append
  the session log — the full end-of-session sync routine. TRIGGER when: "session sync",
  "sync everything", "commit and sync", "push and log", "update agent sync", "end of work",
  "sync before I go". Do NOT use for: full session close (use /goodnight for that),
  single-file commits, or when there's nothing to commit.
---

# Skill: /session-sync

Run the full sync routine: stage and commit all outstanding work, push to remote,
update AGENT_SYNC.md with any cross-agent handoff notes, and create or append the
session log. This is the mid-session or end-of-work sync that keeps everything current
without the full /goodnight review checklist.

## When to Use vs. /goodnight

| /session-sync | /goodnight |
|---------------|------------|
| Quick sync — commit + push + log | Full session close — reviews checklist, pattern reminder, sign-off |
| Use mid-session or when stepping away | Use when done for the day |
| No review completeness check | Checks for missing trade/daily reviews |

## Steps

### 1. Stage All Outstanding Work

```bash
git add smarttrader-ai/ data/screenshots/ data/imports/ logs/ AGENT-SYNC/
```

Check `git status` first — don't stage `.env`, credential files, or wallet files.

### 2. Build Commit Message

Summarize what's being committed:
- Review files completed (e.g., "trade review #NNN, daily review YYYYMMDD")
- Infrastructure changes (e.g., "updated auto-levels Pine v3.0.3")
- Analysis or skill work (e.g., "added level-brief skill foundation")

Format: `"[type] [date] — [brief summary]"`

### 3. Commit and Push

```bash
git commit -m "[message]"
git push origin main
```

### 4. Session Log — Create or Append

Check `logs/fortuna/YYYY/MM-Mon/session_YYYYMMDD.md`:
- If it doesn't exist: create it with today's date and session type
- If it exists: append a bullet block with the commit summary

Format:
```markdown
## [YYYY-MM-DD] — [session type: live / analysis / infra / skills]
- [What was done]
- [Key decision or outcome]
- Commit: [hash] — [message]
```

### 5. AGENT_SYNC Update (If Needed)

If anything happened that Auggie or Kavanah needs to know:
- Pine Script changes → Auggie
- New skill or workflow change → Kavanah
- Infrastructure issue or MCP change → both

Append to `AGENT-SYNC/AGENT_SYNC.md` under "Latest Updates" with date and agent tag.

### 6. Final Push (logs)

```bash
git add logs/ AGENT-SYNC/
git commit -m "Session log + sync [date]"
git push origin main
```

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
```
