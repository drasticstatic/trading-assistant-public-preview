---
name: goodnight
description: >
  Close a trading session cleanly — commit work, push, update session log, and hand off context. TRIGGER when: "goodnight", "end session", "close out", "session done", "wrapping up", "calling it", "signing off", "that's it for today", "done for the day", "finishing up", "logging off", "end of session", "close the session", "let's wrap", "wrap it up". Do NOT use for: mid-session pauses, stepping away temporarily, or non-trading sessions.
---

# Skill: /goodnight

Run the full session close sequence. Leave nothing uncommitted. This skill ensures continuity between sessions by capturing context, committing work, and setting up tomorrow's focus.

## Step 1 — Confirm Reviews Are Complete

Check that the session is properly documented:
- **Trade reviews**: One for every trade taken today. If missing, offer to build with /trade-review.
- **Daily review**: If trades were taken, confirm daily review exists. Offer /daily-review if not.
- **Screenshots**: All embedded in appropriate review files.

If reviews are incomplete, pause and complete them first. Session close requires full documentation.

## Step 2 — Commit All Outstanding Work

Stage and commit everything in `smarttrader-ai/`, `data/`, and `logs/`:
```bash
git add smarttrader-ai/ data/screenshots/ data/imports/ logs/
git commit -m "Session close YYYYMMDD — [brief summary]"
git push origin main
```

Include all review files, screenshots, CSVs, pattern_tracker updates, and any indicator or config changes.

**Brief summary**: 3–5 words capturing what happened (e.g., "2 trades, MCL short win").

## Step 3 — Update Session Log

Check `logs/fortuna/YYYY/MM-Mon/session_YYYYMMDD.md`:
- **If missing**: Create it with today's summary
- **If exists**: Append today's summary

Format:
```markdown
## YYYY-MM-DD — [session type: live / observation / infra]
- [What happened: trades taken, decisions made, or work completed]
- [Key behavioral note or pattern observation]
- [Commit hash and summary]
```

Keep entries concise — session logs are for scanning context quickly, not exhaustive detail.

## Step 4 — AGENT_SYNC Update (MANDATORY — every session)

Append to `AGENT-SYNC/AGENT_SYNC.md` at every session close, even if the session was routine or no cross-agent handoff is needed. This keeps the shared context current so any agent or Christopher can open it at any time and know exactly where things stand.

Format a dated section:
```markdown
## 📡 [Month Day], [Year] Session Summary (Fortuna)
**Session type:** [live / observation / infra / skills / cross-repo]
- [What was done or decided]
- [Account/pattern status if changed]
- [Any item another agent needs to know]
```

Priority flags:
- New indicator issue or Pine feedback → note for Auggie
- Infrastructure or MCP change → note for both
- Pattern discovery or rule change → note for Kavanah
- Routine session → still write it, just keep it brief

## Step 5 — Final Push

```bash
git add logs/ AGENT-SYNC/
git commit -m "Add session log YYYYMMDD"
git push origin main
```

## Step 6 — Pattern Reminder for Tomorrow

State the one active pattern and the mechanical fix Christopher is working on. This becomes the first thing loaded tomorrow:

> "Tomorrow: [pattern name] → [one-sentence rule or focus]"

Example:
> "Tomorrow: Pattern 8 (exit passivity) → At 2R MFE, set alert at 1.5R. If alert fires, exit immediately."

## Output Format

Confirm each step as you complete it:
- ✓ Reviews complete
- ✓ Work committed and pushed (commit hash)
- ✓ Session log updated
- ✓ AGENT_SYNC updated (if applicable)
- ✓ Final push complete

End with: "Session closed. Everything's committed. Rest well."

If Christopher has unsaved work or uncommitted changes, **stop and flag it** before proceeding.

## Why This Matters

Session close is where context preservation happens. Skipping steps creates gaps:
- Missing reviews = no learning from trades
- Uncommitted work = lost progress if something crashes
- No session log = fragmented memory across days
- No pattern reminder = slow ramp-up tomorrow

A clean close makes tomorrow's session start instantly productive.

## Related Specs

- `specs/FORTUNA_WORKFLOW.md` — Session close checklist: commit sequence, session log format, AGENT_SYNC update protocol

## Quick Commands

```bash
# Compress screenshots
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Commit everything
git add smarttrader-ai/ data/screenshots/ data/imports/ logs/ && \
  git commit -m "Session close YYYYMMDD — [brief summary]"
git push origin main

# Add session log and push
git add logs/ AGENT-SYNC/ && \
  git commit -m "Add session log YYYYMMDD" && \
  git push origin main
```
