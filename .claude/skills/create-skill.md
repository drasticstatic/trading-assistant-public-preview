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

## Skill Ideas for This Workflow (For Christopher to Flesh Out)

These are candidates — run each through makemyskill.com to get refined versions:

| Skill Name | What It Would Do |
|------------|-----------------|
| `/pattern-check` | Analyze recent trade history for behavioral pattern trends; generate pattern report |
| `/account-status` | Pull live account data across APEX-06 and TPT; report balance, floor, distance to target |
| `/level-brief` | Pull auto-levels output from TradingView; summarize key levels for current session |
| `/commit-session` | Standardized commit + push + session log + AGENT_SYNC update in one command |
| `/smog-analysis` | SMOG framework analysis for a specific trade or setup |
| `/fcr-setup` | FCR setup identification checklist for the current bar/session |
| `/eval-progress` | Track prop firm eval progress — days remaining, P&L gap, trailing floor status |
| `/coach-note` | Draft a structured note for ZTH or IT coach from session data |
| `/marp-deck` | Build a Marp slide deck from a review or briefing document |

## Marp Slide Option

For any skill that produces a shareable document (coach notes, session briefings, weekly decks):
add a `## Marp Export` section to the skill with instructions for generating a `.md` file
with Marp front-matter. Run `npx @marp-team/marp-cli input.md -o output.html` locally,
or use the GitHub Action for auto-published slides.
