---
name: trade-recap
description: >
  Use to produce a quick one-paragraph narrative of a just-closed trade — pulls fills,
  notes the outcome, and flags if a full review is still needed. TRIGGER when: "trade recap",
  "quick recap", "recap that trade", "what just happened", "summarize that trade",
  "just closed a trade", "recap the [instrument] trade". Do NOT use for: building
  a full trade review (use /trade-review), daily reviews, or retrospective analysis
  of trades from a prior session.
---

# Skill: /trade-recap

Produce a quick, dense one-paragraph recap of a trade that just closed. This is the
fast-capture tool — run it immediately after a trade closes while context is fresh.
The recap can feed directly into a daily review or serve as the raw material for /trade-review.

## When to Use vs. /trade-review

| /trade-recap | /trade-review |
|--------------|---------------|
| Immediate post-trade capture | Full 9-section review (built after session or next day) |
| One paragraph, fast | Full document with screenshots and CSV data |
| No CSV required | Requires TradeZella + Tradovate CSV |
| Run while the trade is fresh | Run when all data is available |

## Steps

### 1. Pull Fresh Fill Data

```
get_fills   — most recent fills (last 1-5 to capture the just-closed trade)
get_orders  — confirm TP/SL disposition (filled, canceled, or still working)
```

If MCP isn't returning fills yet (slight delay after close), ask Christopher for the key numbers.

### 2. Identify the Trade

From fills data or Christopher's input:
- Instrument and direction
- Entry price and time
- Exit price, time, and method (TP hit, SL hit, manual exit)
- Net P&L

### 3. Write the One-Paragraph Recap

Dense narrative covering:
- What the setup was (why this trade was taken)
- What happened during the hold
- How it exited and why
- One behavioral observation (what went right or what pattern appeared)
- Net result

Format:
```
[Time ET] — [INSTRUMENT] [DIRECTION] recap: [Setup context — what triggered the entry].
[What happened during the hold]. [How it exited and the result].
[One behavioral note — e.g., "TP was held through the initial retest — Pattern 8 not triggered."]
Net: [P&L].
```

### 4. Flag Missing Review

End with:
```
→ Full review needed: /trade-review for [instrument] [date]
```

Or if Christopher already has reviews current:
```
→ Trade logged. Update pattern_tracker.md when building the full review.
```

## Output Format

One paragraph (4–6 sentences) + flag line. Plain markdown, no headings.
Suitable for pasting directly into a daily review Session Narrative or Slack note.

## Quick Commands

```bash
# MCP tools (run via Claude — not bash)
# get_fills
# get_orders
```
