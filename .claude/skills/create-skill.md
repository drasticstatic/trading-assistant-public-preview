---
name: create-skill
description: >
  Use when Christopher wants to design, draft, or build a new Claude Code skill — either for
  this repo or for makemyskill.com. TRIGGER when: "create skill", "build skill for", "make a skill",
  "skill template", "new skill", "skill for [task]", "draft a skill". Do NOT use for: general
  task execution, explaining how skills work conceptually, or when Christopher asks what skills
  exist (read the .claude/skills/ directory for that).
---

# Skill: /create-skill

Design a new Claude Code skill file. Produce a draft ready for review and optionally for
submission to makemyskill.com ("describe the skill — the longer the better").

## The 7 Rules for Effective Skills

1. **Debug with description echo:** Ask Claude "When would you use the [skill-name] skill?" — it quotes the description back. Instantly reveals what's vague or missing.
2. **Negative triggers matter more than positive ones:** The "Do NOT use for..." line prevents skill hijacking. Write it first.
3. **Skills stack with CLAUDE.md and memory:** The skill handles *process*. CLAUDE.md handles *context and rules*. Memory handles *voice and history*. Don't repeat rules from CLAUDE.md inside the skill.
4. **Build from past conversations:** Don't start from scratch. The best skill prompts are reverse-engineered from prompts that already worked well in past sessions.
5. **Description is everything:** If too vague, the skill never fires. If too broad, it hijacks conversations it shouldn't. Test both failure modes before finalizing.
6. **Laziness workaround:** If Claude cuts corners inside a skill, don't edit the skill — add "Take your time. Quality over speed. Don't skip steps." to the invocation prompt.
7. **Skills are portable:** The SKILL.md format is designed as an open standard. Build for Claude today; designed to transfer across platforms.

## Skill File Format

```markdown
---
name: skill-name
description: >
  One or two sentences. TRIGGER when: [specific trigger conditions].
  Do NOT use for: [anti-triggers — be specific].
---

# Skill: /skill-name

[Full instructions. Be thorough — the longer the better for makemyskill.com.
Only the 3-line header is read at context load; full body only loads when triggered.]

## Before Starting
[What to check/read before executing]

## Steps
[Numbered or sectioned process]

## Output Format
[What the output should look like]

## After Completing
[Cleanup, commits, follow-on actions]
```

## How to Use This Skill

1. Christopher describes what he wants the skill to do
2. Fortuna drafts the full skill file following the format above
3. Christopher reviews — test the description with the debug trick (ask "When would you use X?")
4. Optionally: submit the description section to makemyskill.com for a refined version
5. Save the final file to `.claude/skills/skill-name.md`

## Skills Roadmap (Next to Build)

Candidates in priority order — run each through makemyskill.com before writing the full body.
Full roadmap with descriptions: `setup/system-overview.md` → Skills Candidates Roadmap section.

| # | Skill | What It Does |
|---|-------|-------------|
| 1 | `/level-brief` | Read TradingView MCP pine_labels/lines → summarize key levels per instrument for the session |
| 2 | `/smt-scan` | Cycle pane_focus NQ/ES/YM → identify index divergences → Scenario A/B/C verdict |
| 3 | `/session-sync` | Commit + push + append AGENT_SYNC.md + create/update session log |
| 4 | `/marp-deck` | Convert any review/briefing doc to Marp slide deck + generate HTML ✅ Built |
| 5 | `/import-trades` | Run TradeZella → STB pipeline, verify output, flag missing reviews |
| 6 | `/eval-progress` | Live account data → balance, floor, gap to target, daily-run-rate math |
| 7 | `/open-orders` | Pull positions/orders from all connected exchanges → single status report |
| 8 | `/pattern-review` | Read pattern_tracker.md → analyze trends → append dated review block with fix per pattern |
| 9 | `/monthly-audit` | End-of-month Marp deck: P&L + behavioral arc + strategy/course progression for all coaching groups ✅ Built |
| 10 | `/trade-recap` | One-paragraph narrative from just-closed trade; pulls fills, flags missing review |
| 11 | `/tax-entry` | Append trade or document to `taxes/YYYY/` working files |
| 12 | `/smog-analysis` | SMOG framework analysis for a specific trade or setup — ref `strategies/inevitrade/smog-reference.md` |
| 13 | `/tcl-analysis` | TCL strategy analysis for a trade or setup — ref `strategies/inevitrade/tcl-reference.md` |

## Version Control Safety

Skills in `.claude/skills/` are tracked in git and can appear in version control history.
**Before committing any skill file, verify it contains none of the following:**

| Risk | Examples | What to do instead |
|------|----------|--------------------|
| **Plaintext secrets** | API keys, tokens, passwords, seed phrases | Use `[YOUR_API_KEY]` placeholder |
| **Account numbers** | Prop firm IDs, exchange account IDs | Use `[ACCOUNT_ID]` or generic label |
| **Personal file paths** with sensitive info | Hardcoded `/Users/[name]/private/...` paths | Use relative paths or `~/` prefix |
| **Credential patterns** | `Authorization: Bearer abc123...` | Show shape only, never real values |
| **Sensitive history** | Trade details, P&L figures, coaching notes | These belong in `smarttrader-ai/` not skills |
| **Automatic ingestion** | Skill that reads `.env`, keychain, or private dirs on trigger | Only read files Christopher explicitly points to |

**Quick Commands sections** follow the same rules: use `[PLACEHOLDER]` for anything that
changes per account or person. Actual values (API keys, ngrok URLs, account numbers) live
in `.env`, Keychain, or private config — never in the skill file itself.

**If a skill needs sensitive context to work:** document the shape of what's needed
(e.g. "requires BTCC API key — store in Keychain as `btcc-api-key`") and let the
session provide it at runtime, not the skill file.

## Marp Slide Option

For any skill that produces a shareable document (coach notes, session briefings, weekly decks):
Use `/marp-deck` to generate the slide version. Public skill decks go in `setup/` — not in
`.claude/skills/`. See `setup/create-skill.marp.md` for the canonical template.
[▶️ Rendered view](https://drasticstatic.github.io/trading-assistant-public-preview/setup/create-skill.marp.html)

## Quick Commands

```bash
# Save a new skill file (gitignored — local only)
# File path: .claude/skills/skill-name.md

# After saving, test the description trigger:
# Ask Fortuna: "When would you use the [skill-name] skill?"

# Update MEMORY.md skills table and system-overview.md Skills Library
# Then run through makemyskill.com before shipping

# For skills that include Marp decks:
marp setup/create-skill.marp.md -o setup/create-skill.marp.html
git add setup/*.marp.md setup/*.marp.html && \
  git commit -m "Update [skill-name] Marp deck"
git push origin main
```
