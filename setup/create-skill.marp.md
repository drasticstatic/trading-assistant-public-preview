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
  section.small-table table { font-size: 0.62em; line-height: 1.25; }
  section.small-table th { padding: 3px 8px; }
  section.small-table td { padding: 2px 8px; }
  section.small-table h2 { margin-bottom: 0.2em; font-size: 1.2em; }
  section.tiny-table table { font-size: 0.53em; line-height: 1.15; }
  section.tiny-table th { padding: 2px 7px; background: #2a3a5a; color: #a8d8f8; }
  section.tiny-table td { padding: 1px 7px; border: 1px solid #3a3a5a; background: #1e1e3a; color: #e8e8f0; }
  section.tiny-table h2 { margin-bottom: 0.15em; font-size: 1.15em; }
  section.tiny-table blockquote { font-size: 0.88em; margin-top: 0.3em; padding: 0.4em 0.8em; }
---

<!-- _class: title-slide -->

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.subtitle {
  font-size: 0.88em;
  opacity: 0.8;
  margin-top: 1em;
}
.credit {
  font-size: 0.77em;
  margin-top: 0.8em;
}
a {
  color: #0366d6;
  text-decoration: none;
}
</style>

# 🧠 Architecting Claude Code Skills for High-Impact

**How to Engineer & Optimize Precision Skills That Actually Fire Reliable Outputs**
<br/>
<div class="credit">
  ▶️ <a href="https://drasticstatic.github.io/trading-assistant-public-preview/setup/create-skill.marp.html">View as rendered Marp slide deck ↗</a> · 📄 <a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/setup/create-skill.marp.md">View .md in repo ↗</a>
</div>
<br/>
<div class="subtitle">
  🔧 <a href="https://makemyskill.com"><strong>makemyskill.com ↗</strong></a> — refine your skill descriptions · Framework by <a href="https://ruben.substack.com/p/claude-skills">Ruben Hassid ↗</a>
</div>
<br/>
<div class="credit">

📂 Browse the skills used in this [public-preview repo ↗](https://github.com/drasticstatic/trading-assistant-public-preview/tree/main/.claude/skills)
📂 [trading-assistant-public-preview ↗](https://github.com/drasticstatic/trading-assistant-public-preview) — html landing page for trading-assistant

</div>
<br/>
<div class="credit">Published by Fortuna × Christopher Wilson | Apr 2026</div>
<br/>

---

## What Is a Skill?
<br/>
A **skill** is a structured prompt file in `.claude/skills/` that gives Claude a repeatable, high-quality procedure for a specific task.
<br/>
<br/>

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
<br/>

1. Debug with description echo
2. **Negative triggers matter more than positive ones**
3. Skills stack with CLAUDE.md and memory
4. Build from past conversations
5. Description is everything
6. Laziness workaround
7. Skills are portable

---

## Hack #1 — Debug with Description Echo
<br/>

**Ask Claude:** "When would you use the [skill-name] skill?"

Claude quotes the description back verbatim.

This instantly reveals:
- What's **too vague** (fires on everything)
- What's **too narrow** (never fires)
- Whether the anti-trigger is **specific enough**
<br/>
> Run this before deploying any skill.

---

## Hack #2 — Negative Triggers First
<br/>

The **`Do NOT use for:`** line prevents skill hijacking.

**Write it FIRST.** Before the positive triggers.
<br/>
| Bad ❌ | Good ✅ |
|--------|---------|
| "Do NOT use for non-trading tasks" | "Do NOT use for: weekly reviews (use /weekly-review), single-trade analysis, or when no fills occurred" |
<div><br/>

The anti-trigger should be **more specific** than the positive trigger.

---

## Hack #3 — Skills Stack
<br/>

**Three layers. Don't duplicate across them.**

| Layer | Purpose |
|-------|---------|
| **CLAUDE.md** | Context, rules, privacy boundaries |
| **Skills** | Process — how to do a task |
| **Memory** | Voice, history, preferences |

<div><br/>

Skills handle *process*.
CLAUDE.md handles *context and rules*.
Memory handles *voice and history*.

---

## Hack #4 — Build From Past Conversations
<br/>

> "The best skill prompts are reverse-engineered from prompts that already worked."
<div><br/>

**Don't start from scratch.** Find the conversation where Claude did the task well. Pull that prompt. Strip the one-time context. Generalize it.
<div><br/>
Your past sessions are the raw material.

---

## Hack #5 — Description Is Everything
<br/>

**Too vague** → skill hijacks conversations it shouldn't
**Too broad** → same problem
**Too narrow** → skill never fires

Test both failure modes before finalizing:
1. Try a trigger phrase → does it fire?
2. Try a neighboring phrase → does it NOT fire?

<div><br/>

Use **[makemyskill.com](https://makemyskill.com)** to refine descriptions — paste the description, the longer the better.

---

## Hack #6 — Laziness Workaround
<br/>

If Claude cuts corners inside a skill:

**Don't edit the skill file.**

Add this to the **invocation prompt**:
<div><br/>

> "Take your time. Quality over speed. Don't skip steps."
<div><br/>

Editing the skill to force quality creates fragility.
The invocation prompt is the right place to adjust intensity.

---

## Hack #7 — Skills Are Portable
<br/>

The `.md` skill format is an **open standard**.

- Works in Claude Code CLI
- Works in VSCode extension
- Designed to transfer across platforms
- Can be shared with other Claude Code users
<div><br/>

> Build skills worth sharing.

---

<!-- _class: tiny-table -->

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
}
table {
  font-size: 0.6em; /* Ensures tables stay small enough to fit */
  width: 100%;
}
</style>

## Skills in This Repo &nbsp;·&nbsp; <a href="https://github.com/drasticstatic/trading-assistant-public-preview/tree/main/.claude/skills" style="font-size:0.6em;font-weight:normal;">📂 Click HERE to browse ALL on GitHub ↗</a>
<sup>or click on each skill to view indivually</sup>

<div class="grid-container">

<div>
<strong>📊 Reviews & Sessions</strong>
<p></p>
<table>
<tr><th>Skill</th><th>Trigger</th></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/goodmorning.md"><code>/goodmorning</code></a></td><td>"let's fire up the terminal"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/premarket.md"><code>/premarket</code></a></td><td>"what's on deck for today?"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/level-brief.md"><code>/level-brief</code></a></td><td>"let's check the current levels"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/open-orders.md"><code>/open-orders</code></a></td><td>"check my live positions"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/eval-progress.md"><code>/eval-progress</code></a></td><td>"how's the eval's status"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/import-trades.md"><code>/import-trades</code></a></td><td>"load today's fills"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/trade-review.md"><code>/trade-review</code></a></td><td>"create review for [trade]"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/daily-review.md"><code>/daily-review</code></a></td><td>"recap today's session"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/weekly-review.md"><code>/weekly-review</code></a></td><td>"wrap up the week"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/pattern-review.md"><code>/pattern-review</code></a></td><td>"how are my habits holding up?"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/monthly-audit.md"><code>/monthly-audit</code></a></td><td>"let's review last month"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/goodnight.md"><code>/goodnight</code></a></td><td>"calling it for today"</td></tr>
</table>
</div>

<div>
<strong>🔍 Analysis & Ops</strong>
<p></p>
<table>
<tr><th>Skill</th><th>Trigger</th></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/smt-scan.md"><code>/smt-scan</code></a></td><td>"check for divergence"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/tcl-analysis.md"><code>/tcl-analysis</code></a></td><td>"TCL <em>(trend continuation)</em> eval"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/smog-analysis.md"><code>/smog-analysis</code></a></td><td>"SMOG <em>(reversal)</em> evaluation"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/tax-entry.md"><code>/tax-entry</code></a></td><td>"save this for taxes"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/session-sync.md"><code>/session-sync</code></a></td><td>"sync everything"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/marp-deck.md"><code>/marp-deck</code></a></td><td>"create a deck for"</td></tr>
<tr><td><a href="https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/create-skill.md"><code>/create-skill</code></a></td><td>"build a new skill for..."</td></tr>
<tr><td><code></code><em><small></small></em></td><td></td></tr>
<tr><td><code>/startup</code> <em><sub>(global)</sub></em></td><td>"let's get oriented"</td></tr>
<tr><td><code>/summarize</code> <em><sub>(roadmap)</sub></em></td><td>"give me the short version"</td></tr>
<tr><td><code>/explain</code> <em><sub>(roadmap)</sub></em></td><td>"break this down"</td></tr>
<tr><td><code>/capture-agent-trades</code> <em><sub>(roadmap)</sub></em></td><td>"log what the bot traded"</td></tr>
</table>
</div>

</div>

---

## The makemyskill.com Workflow
<br/>

For skills you'll use every day:

1. Copy just the `description` section
2. Paste into **[makemyskill.com](https://makemyskill.com)**
3. Describe the skill — the **longer the better**
4. Replace your description with the refined version
5. Re-test with the debug trick
<br/>


Optional but recommended for: `/goodmorning`, `/trade-review`, `/premarket`

<div class="credit">💡 makemyskill.com built by <a href="https://ruben.substack.com/p/claude-skills">Ruben Hassid</a> and his consulting team</div>

---

<!-- _class: tiny-table -->

<style scoped>
.brnote { border-left: 4px solid #4a90d9; padding: 0.3em 0.8em; color: #b0c0d8; font-style: italic; font-size: 0.72em; margin-top: 0.3em; }
</style>

## makemyskill.com — Quality Analysis
<div>

| Skill | Value Added | Verdict |
|-------|-------------|---------|
| [/premarket](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/premarket.md) | Section templates, FCR/SMT defs, Why/Pitfalls per section | ✅ Notably stronger — richer templates |
| [/trade-review](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/trade-review.md) | Data Source Priorities, Common Patterns, Core Principles | ✅ Significantly enhanced — key principles |
| [/create-skill](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/create-skill.md) | Generation Workflow, Checklist, Strong vs Weak examples | ✅ Adds workflow structure + examples |
| [/daily-review](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/daily-review.md) | Extra triggers, Common Scenarios, Checklist | ✅ Broader trigger coverage + checklist |
| [/marp-deck](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/marp-deck.md) | Theme rationale, example deck structure | ✅ Adds theme reasoning + structure |
| [/goodmorning](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/goodmorning.md) | Why this matters per step, Edge Cases | ✅ Adds step rationale + edge cases |
| [/weekly-review](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/weekly-review.md) | Expanded triggers + Key Principles only | ⚠️ Marginal — limited additions |
| [/goodnight](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/goodnight.md) | Trigger phrases only + introduced a typo | ⏭️ Skip — degraded quality |
| [/monthly-audit](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/monthly-audit.md) | Confirmed solid, cosmetic changes only | 💡 Quality signal — already solid |
| [/tcl-analysis](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/tcl-analysis.md) | Entry checklist, TCL vs. pullback criteria, failure modes | ✅ Adds precision — run it |
| [/smog-analysis](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/smog-analysis.md) | Reversal confirmation layers, SMT trap scenarios | ✅ Adds confirmation depth |
| [/eval-progress](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/eval-progress.md) | Reformatted description only; removed Do NOT use for clause | ⏭️ Skip — anti-trigger removed |
| [/smt-scan](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/smt-scan.md) | Trimmed BTC/ETH crypto scope from description | ⚠️ Marginal — narrowed scope |
| [/pattern-review](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/pattern-review.md) | Added output spec: frequency counts, P&L impact, mechanical fixes | ✅ Stronger output spec |
| [/session-sync](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/session-sync.md) | No changes to description or body | 💡 Already solid — no changes |
| [/import-trades](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/import-trades.md) | Expanded triggers + validation sections; pipeline details added manually | ✅ Significantly enhanced |
| [/level-brief](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/level-brief.md) | No changes to description or body | 💡 Already solid — no changes |
| [/open-orders](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/open-orders.md) | Quote style change only; cosmetic heading rename | ⚠️ Marginal — cosmetic only |
| [/tax-entry](https://github.com/drasticstatic/trading-assistant-public-preview/blob/main/.claude/skills/tax-entry.md) | Condensed description; heading renamed | ⚠️ Marginal — condensed only |
| `/summarize` *(roadmap)* | Scope controls, output format options | ⚠️ Marginal — simple skill |
| `/explain` *(roadmap)* | Audience-level targeting, output structure | ⚠️ Marginal — simple skill |
| `/capture-agent-trades` *(roadmap)* | Data format examples, reconciliation edge cases | ✅ Adds format + edge cases |

<div class="brnote"><strong>For better results:</strong> Ask makemyskill.com directly — <em>"Improve and refine this skill:"</em> then paste the <strong>full skill body</strong>, not just the description. The better the input, the less it changes — near zero = your skill is already solid.</div>

---

## The /create-skill Skill
<br/>
**Use it:** "create a skill for [task]" → Fortuna drafts the full file.

**What it does:** Writes `Do NOT use for:` first → positive triggers → steps → checklist → Quick Commands. Runs self-review. Prompts you to test with the echo trick.

**Generation workflow:**
1. Describe what the skill should do
2. Fortuna drafts → test with the echo trick
3. Paste full body into [makemyskill.com](https://makemyskill.com) — ask it to *"improve and refine"*
4. Save to `.claude/skills/` · register in MEMORY.md

---

## Deploying to Other Repos
<br/>

```bash
# Copy a skill to a spoke repo
cp .claude/skills/create-skill.md \
   /path/to/spoke-repo/.claude/skills/
```
<div><br/>

**Rules:**
- Only copy skills **relevant** to that repo's workflow
- Non-trading repos get `/create-skill` + `/startup` only
- `.claude/skills/` is **public** in trading-assistant-public-preview — real examples anyone can study

---

## Scripts in Skills — The Pattern
<br/>

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

## Specs + Skills — The Two-Layer System

<style scoped>
.brnote { border-left: 4px solid #4a90d9; padding: 0.3em 0.8em; color: #b0c0d8; font-style: italic; font-size: 0.72em; margin-top: 0.3em; }
</style>

**Two agents. Two jobs. Same workflow.**

| Layer | Owner | Purpose |
|-------|-------|---------|
| **Specs** (`.md` in `specs/`) | Augment Intent | Living architecture — defines *what* the workflow is |
| **Skills** (`.claude/skills/`) | Claude Code | Executable procedures — defines *how* to run it |

<small>Skills without specs drift. Specs without skills stay theoretical.</small>

- Specs answer: *"What should happen and why?"*
- Skills answer: *"What do I actually do, step by step?"*

<div class="brnote">Combining these tools means your architectural goals stay in sync with the actual code, preventing the "drift" that often occurs in AI-driven development</div>

---

## Living Specs — The 3C Rule

<style scoped>
.brnote { border-left: 4px solid #4a90d9; padding: 0.3em 0.8em; color: #b0c0d8; font-style: italic; font-size: 0.72em; margin-top: 0.3em; }
</style>

**The 3C Rule** (Gemini / Intent convention):
- **Concise** — no padding, no vague prose
- **Contextual** — why this rule exists, not just what it is
- **Constrained** — explicit boundaries; what NOT to do

<div>

**Bidirectional update model:**

| Direction | Action |
|-----------|--------|
| Spec changes | Update the skill's `## Related Specs` pointer |
| Skill changes | Reflect back in the spec (naming, pipeline, format) |
| Conflict found | Spec is source of truth — update the skill to match |

<div class="brnote">When they contradict each other, the spec wins. Update the skill to match.</div>

---

## Keeping Them in Sync — The Pointer Pattern

Add `## Related Specs` near the bottom of every skill (before Quick Commands):

```markdown
## Related Specs
- `specs/FORTUNA_WORKFLOW.md` — canonical pipeline; this skill's steps live in Section X
- `specs/SMARTTRADERAI_EXPORT_SPEC.md` — copy-paste format templates
- `specs/tradezella-automater.spec.md` — full pipeline architecture
```

<div><br/>

**What this buys you:**
- Any agent opening the skill immediately knows where the authoritative source lives
- Spec updates are easy to trace back to the skills they affect
- Augment Intent and Claude Code stay coordinated across sessions without needing to re-derive context or enabling context engine

---

# Start Building
<br/>
> Every skill you create saves the next session from re-explaining the same process.
> <div><br/>

**First skill to build:** The one you just explained to Claude.
<div><br/>

Go back to that conversation. Find the prompt that worked. That's your skill body.

---

<!-- _class: end-slide -->

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.credit {
  font-size: 0.7em;
  margin-top: 2em;
  opacity: 0.8;
}
a {
  text-decoration: none;
}
</style>

*Produced with 🙏🏼 Fortuna — Wealth Warden | Claude Code CLI*
<div class="credit">

📂 [trading-assistant-public-preview](https://github.com/drasticstatic/trading-assistant-public-preview) — public repo

</div>


### **[makemyskill.com](https://makemyskill.com)**
**Refine your skill descriptions**

<div class="credit">

Framework by [Ruben Hassid](https://ruben.substack.com/p/claude-skills) — thank you 🙏

</div>
