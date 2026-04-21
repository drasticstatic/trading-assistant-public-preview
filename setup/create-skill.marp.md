---
marp: true
theme: default
paginate: true
backgroundColor: '#1a1a2e'
color: '#e8e8f0'
style: |
  h1 { color: #7eb8f7; border-bottom: 2px solid #4a90d9; padding-bottom: 12px; }
  h2 { color: #a8d8a8; margin-bottom: 0.4em; }
  h3 { color: #f0c060; }
  strong { color: #f7c97e; }
  code { background: #2a2a4a; color: #c8e8c8; padding: 2px 6px; border-radius: 3px; }
  pre { background: #1e1e3a; border: 1px solid #4a4a7a; border-radius: 6px; padding: 1em; }
  table { border-collapse: collapse; width: 100%; font-size: 0.85em; }
  th { background: #2a3a5a; color: #a8d8f8; padding: 6px 12px; }
  td { border: 1px solid #3a3a5a; padding: 5px 12px; background: #1e1e3a; color: #e8e8f0; }
  blockquote { border-left: 4px solid #4a90d9; padding-left: 1em; color: #b0c0d8; font-style: italic; }
  .subtitle { color: #8899aa; font-size: 0.8em; margin-top: 0.5em; }
  .credit { color: #7090a0; font-size: 0.75em; margin-top: 1em; }
---

# 🧠 How to Create Claude Code Skills

**7 Hacks for Skills That Actually Fire**

<div class="subtitle">Fortuna × Christopher Wilson | trading-assistant | Apr 2026</div>

<div class="credit">▶️ <a href="https://drasticstatic.github.io/trading-assistant-public-preview/setup/create-skill.marp.html">View rendered slides</a> · <a href="https://ruben.substack.com/p/claude-skills">Framework by Ruben Hassid</a></div>

---

## What Is a Skill?

A **skill** is a structured prompt file in `.claude/skills/` that gives Claude a repeatable, high-quality procedure for a specific task.

> Think of it as a *saved workflow* — not a script, not a rule, but a detailed set of instructions that loads only when needed.

**Key facts:**
- Only the **3-line header** is read at context start
- Full body loads **only when triggered** — saves tokens
- Works alongside CLAUDE.md and memory
- **Portable open standard** — not locked to Claude Code

---

## The File Format

```markdown
---
name: skill-name
description: >
  TRIGGER when: [specific conditions].
  Do NOT use for: [anti-triggers].
---

# Skill: /skill-name

## Before Starting
## Steps
## Output Format
## After Completing
```

The `description` field controls **everything**.

---

## The 7 Hacks

1. Debug with description echo
2. **Negative triggers matter more than positive ones**
3. Skills stack with CLAUDE.md and memory
4. Build from past conversations
5. Description is everything
6. Laziness workaround
7. Skills are portable

---

## Hack #1 — Debug with Description Echo

**Ask Claude:** "When would you use the [skill-name] skill?"

Claude quotes the description back verbatim.

This instantly reveals:
- What's **too vague** (fires on everything)
- What's **too narrow** (never fires)
- Whether the anti-trigger is **specific enough**

> Run this before deploying any skill.

---

## Hack #2 — Negative Triggers First

The **`Do NOT use for:`** line prevents skill hijacking.

**Write it FIRST.** Before the positive triggers.

| Bad ❌ | Good ✅ |
|--------|---------|
| "Do NOT use for non-trading tasks" | "Do NOT use for: weekly reviews (use /weekly-review), single-trade analysis, or when no fills occurred" |

The anti-trigger should be **more specific** than the positive trigger.

---

## Hack #3 — Skills Stack

**Three layers. Don't duplicate across them.**

| Layer | Purpose |
|-------|---------|
| **CLAUDE.md** | Context, rules, privacy boundaries |
| **Skills** | Process — how to do a task |
| **Memory** | Voice, history, preferences |

Skills handle *process*.
CLAUDE.md handles *context and rules*.
Memory handles *voice and history*.

---

## Hack #4 — Build From Past Conversations

> "The best skill prompts are reverse-engineered from prompts that already worked."

**Don't start from scratch.** Find the conversation where Claude did the task well. Pull that prompt. Strip the one-time context. Generalize it.

Your past sessions are the raw material.

---

## Hack #5 — Description Is Everything

**Too vague** → skill hijacks conversations it shouldn't
**Too broad** → same problem
**Too narrow** → skill never fires

Test both failure modes before finalizing:
1. Try a trigger phrase → does it fire?
2. Try a neighboring phrase → does it NOT fire?

Use **[makemyskill.com](https://makemyskill.com)** to refine descriptions — paste the description, the longer the better.

---

## Hack #6 — Laziness Workaround

If Claude cuts corners inside a skill:

**Don't edit the skill file.**

Add this to the **invocation prompt**:
> "Take your time. Quality over speed. Don't skip steps."

Editing the skill to force quality creates fragility.
The invocation prompt is the right place to adjust intensity.

---

## Hack #7 — Skills Are Portable

The `.md` skill format is an **open standard**.

- Works in Claude Code CLI
- Works in VSCode extension
- Designed to transfer across platforms
- Can be shared with other Claude Code users

> Build skills worth sharing.

---

## The makemyskill.com Workflow

For skills you'll use every day:

1. Copy just the `description` section
2. Paste into **[makemyskill.com](https://makemyskill.com)**
3. Describe the skill — the **longer the better**
4. Replace your description with the refined version
5. Re-test with the debug trick

Optional but recommended for: `/goodmorning`, `/trade-review`, `/premarket`

<div class="credit">💡 makemyskill.com built by <a href="https://ruben.substack.com/p/claude-skills">Ruben Hassid</a> and his consulting team</div>

---

## Skills in This Repo

| Skill | Trigger |
|-------|---------|
| `/trade-review` | "create review for this trade" |
| `/daily-review` | "daily review for [date]" |
| `/weekly-review` | "weekly review" |
| `/premarket` | "create premarket" |
| `/goodmorning` | "good morning" / "start session" |
| `/goodnight` | "goodnight" / "end session" |
| `/create-skill` | "create a skill for X" |
| `/startup` (global) | "startup" — any repo |

---

## Deploying to Other Repos

```bash
# Copy a skill to a spoke repo
cp .claude/skills/create-skill.md \
   /path/to/spoke-repo/.claude/skills/
```

**Rules:**
- Only copy skills **relevant** to that repo's workflow
- Non-trading repos get `/create-skill` + `/startup` only
- `.claude/` is **gitignored** everywhere — skills are local to each machine

---

## Scripts in Skills — The Pattern

Add a `## Quick Commands` section to every skill.

**Why:** Saves tokens. Ensures consistency. No re-deriving paths.

```markdown
## Quick Commands
```bash
# The exact command, flags, and paths — pre-built
pngquant --quality=65-80 --speed=1 ... data/screenshots/*.png
git add smarttrader-ai/reviews/ && git commit -m "..."
git push origin main
` `` ← (remove space)
```

The skill body handles *reasoning*. Quick Commands handle *execution*.

---

## Example: /marp-deck

The `/marp-deck` skill converts any review doc to slides.

Its `## Quick Commands` section:

```bash
# Generate HTML — skill deck (public, in setup/)
marp setup/create-skill.marp.md -o setup/create-skill.marp.html

# Generate HTML — coach-share deck (in exports/)
marp smarttrader-ai/exports/YYYY/MM-Mon/[name].marp.md \
     -o smarttrader-ai/exports/YYYY/MM-Mon/[name].marp.html

# Commit
git add setup/*.marp.md setup/*.marp.html && \
  git commit -m "Add [topic] Marp deck [date]"
```

**Public Marp files go in `setup/` — gitignored `.claude/` stays local.**

---

# Start Building

> Every skill you create saves the next session from re-explaining the same process.

**First skill to build:** The one you just explained to Claude.

Go back to that conversation. Find the prompt that worked. That's your skill body.

---

*Fortuna × Claude Code CLI | trading-assistant | 2026*

**[makemyskill.com](https://makemyskill.com)** — refine your skill descriptions

<div class="credit">Framework by <a href="https://ruben.substack.com/p/claude-skills">Ruben Hassid</a> — thank you 🙏</div>
