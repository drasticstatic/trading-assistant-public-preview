---
name: level-brief
description: >
  Use to read key price levels from TradingView MCP indicators and produce a concise
  session-ready level summary per instrument. TRIGGER when: "level brief", "what are
  the levels", "key levels for today", "pull the levels", "auto-levels output",
  "level summary", "pine labels for [instrument]". Do NOT use for: full premarket
  analysis (use /premarket), chart pattern analysis, or when TradingView MCP is not connected.
---

# Skill: /level-brief

Read TradingView MCP pine indicator output — labels, lines, and tables — and produce a
concise, session-ready level summary per instrument. This is a fast tool meant to be run
at session start or after a layout switch to orient Christopher to current key levels
without building a full premarket doc.

## Before Starting

1. Run `tv_health_check` — confirm TradingView Desktop is connected
2. Run `chart_get_state` — note current symbol, timeframe, and visible indicator names
3. Confirm the auto-levels indicator is **visible** on the chart (pine output only reads visible indicators)

## Steps

### 1. Identify Active Panes

Use `pane_list` to see all panes in the current layout. Identify which pane has which instrument.
Use `pane_focus` to switch between panes if needed.

### 2. Read Pine Indicator Output per Instrument

For each instrument pane, run in sequence:

```
data_get_pine_labels   — text annotations with prices (PDH, PDL, Weekly High, Bias labels)
data_get_pine_lines    — horizontal price levels (support/resistance, FCR rays)
data_get_pine_tables   — session stats or analytics dashboard values
data_get_pine_boxes    — price zones (FVGs, demand/supply zones)
```

Always pass `study_filter` to target the auto-levels indicator by name.
Example: `study_filter="Auto Levels"` or whatever the indicator is named on the chart.

### 3. Organize by Instrument

For each instrument, extract:
- **Key resistance levels** (sorted high to low)
- **Key support levels** (sorted high to low)
- **Current bias label** (if present — "Bias Long" / "Bias Short" / "Neutral")
- **FCR reference** (if applicable — FCR High / FCR Low rays)
- **Any FVG zones** (price range from pine_boxes)

### 4. Format the Output

Produce a clean, scannable brief — one block per instrument:

```
## MNQ — [Bias]
R: 19,450 · 19,380 · 19,320
S: 19,250 · 19,180 · 19,100
FCR: H 19,340 / L 19,290
FVG: 19,260–19,275 (bullish)
```

Keep it to the 3 most relevant levels per side. More is not better — actionable beats comprehensive.

## Output Format

Short brief suitable for quick scanning before a trade. Not a full premarket doc.
If Christopher wants deeper analysis, follow up with /premarket.

## After Running

No commit required — this is a read-only, session-prep tool.
If key levels are referenced in a trade review or premarket doc, copy them there.

## Quick Commands

```bash
# TradingView MCP tools (run via Claude — not bash)
# tv_health_check
# chart_get_state
# pane_list → pane_focus [pane_id]
# data_get_pine_labels study_filter="[indicator name]"
# data_get_pine_lines  study_filter="[indicator name]"
# data_get_pine_boxes  study_filter="[indicator name]"
```
