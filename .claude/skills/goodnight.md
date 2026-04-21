---
name: goodnight
description: >
  Use to close a trading session cleanly — commit work, push, update session log, and hand off
  context. TRIGGER when: "goodnight", "end session", "close out", "session done", "wrapping up",
  "calling it", "signing off", "that's it for today", "done for the day", "finishing up",
  "logging off", "end of session", "close the session". Do NOT use for: mid-session pauses,
  stepping away temporarily, or non-trading sessions.
---

# Skill: /goodnight

Run the full session close sequence. Leave nothing uncommitted.

## Step 1 — Confirm Reviews Are Done

- Is there a trade review for every trade taken today? If not, offer to build one with /trade-review.
- Is there a daily review? Offer /daily-review if missing and trades were taken.
- Are all screenshots embedded in the appropriate review files?

## Step 2 — Commit All Outstanding Work

Stage and commit everything in `smarttrader-ai/`, `data/`, and `logs/`:
```bash
git add smarttrader-ai/ data/screenshots/ data/imports/ logs/
git commit -m "Session close [date] — [brief summary]"
git push origin main
```

Include all review files, screenshots, CSVs, and any pattern_tracker updates.

## Step 3 — Session Log

Check `logs/fortuna/YYYY/MM-Mon/session_YYYYMMDD.md`:
- If it doesn't exist: create it
- If it exists: append today's summary (trades taken, key decisions, commit hash)

Format:
```markdown
## [date] — [session type: live / observation / infra]
- [bullet: what happened]
- [bullet: key behavioral note]
- [bullet: commit hash and summary]
```

## Step 4 — AGENT_SYNC Update (if significant session)

If something happened that Auggie or Kavanah needs to know (new indicator issue, Pine feedback, infrastructure change): append to `AGENT-SYNC/AGENT_SYNC.md` under "Latest Updates."

## Step 5 — Final Push

```bash
git add logs/
git commit -m "Add session log [date]"
git push origin main
```

## Step 6 — Pattern Reminder for Tomorrow

State the one active pattern and the mechanical fix, so it's the first thing loaded tomorrow:
> "Tomorrow: [pattern reminder] → [one-sentence rule]"

## Output Format

Confirm each step is complete. End with: "Session closed. Everything's committed. Rest well."
If Christopher has unsaved work, stop and flag it before proceeding.

## Quick Commands

```bash
# Compress screenshots
pngquant --quality=65-80 --speed=1 --skip-if-larger --ext .png --force data/screenshots/*.png

# Commit everything
git add smarttrader-ai/ data/screenshots/ data/imports/ logs/ && \
  git commit -m "Session close YYYYMMDD — [brief summary]"
git push origin main
```
