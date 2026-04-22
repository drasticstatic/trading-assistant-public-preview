---
name: smt-scan
description: >
  Scan NQ, ES, and YM for index divergences and produce a Scenario A/B/C verdict. Use when the user mentions: SMT scan, check the indices, are they aligned, SMT divergence, scenario check, what's the scenario, index divergence, NQ vs ES, YM divergence, triple index check, are the indices confirming, check correlation, smart money divergence, intermarket analysis, or any request to assess alignment across equity index futures. Optionally compare BTC/ETH crypto as additional confluence. Requires TradingView MCP connection.
---

# Skill: /smt-scan

Cycle through NQ, ES, and YM panes, read current price structure and key highs/lows,
then identify divergences and deliver a Scenario A/B/C verdict for the session.

## Core Framework

**Scenario A** — All three indices confirm the same direction (all making new highs or all making new lows together). High-confidence directional trade. Full size valid.

**Scenario B** — NQ is leading (making a new high/low) while ES/YM lag behind or diverge. Moderate confidence. Reduce size, tighter stops. Watch for the lagging index to catch up or reverse.

**Scenario C** — Mixed or flat signals. No clear alignment. No trade or paper only.

SMT divergence signal: one index creates a higher high / lower low while a correlated index fails to do so — reveals smart money positioning and potential reversal.

## Before Starting

1. Run `tv_health_check` — confirm connection
2. Confirm NQ (MNQ), ES (MES), and YM panes are all visible in the current layout
3. Identify the pane IDs with `pane_list`

## Steps

### 1. Cycle Panes — Capture Current Structure

For each index pane (NQ, ES, YM), use `pane_focus` then read:
- `quote_get` — current last price, day's high/low
- `data_get_pine_labels` — any structural labels (PDH, PDL, swing highs/lows if auto-levels active)
- Note if price is **above or below** the prior day high/low and opening range

### 2. Compare Highs and Lows

Build a quick comparison table mentally (or output as markdown):

| Index | Last | Day High | Day Low | Above PDH? | Making NH/NL? |
|-------|------|----------|---------|------------|---------------|
| NQ    | ...  | ...      | ...     | Y/N        | Y/N           |
| ES    | ...  | ...      | ...     | Y/N        | Y/N           |
| YM    | ...  | ...      | ...     | Y/N        | Y/N           |

Look for: are all three making new highs together? All making new lows? Or is one diverging?

### 3. Deliver Scenario Verdict

Based on the comparison:

```
SMT Scan — [Time ET]

NQ: [brief structure note]
ES: [brief structure note]
YM: [brief structure note]

Verdict: Scenario [A/B/C]
Reason: [One sentence — e.g., "NQ making new high, ES lagging below PDH"]
Direction: [Long / Short / No trade]
Confidence: [High / Moderate / Low]
```

### 4. RTY Check (Optional)

If RTY (M2K) is also in the layout, add it as a fourth confirmation. RTY often leads NQ on risk-off moves.

### 5. Crypto Confluence (Optional)

BTC and ETH often move in correlation with NQ, particularly on risk-on/risk-off macro moves. When equity index verdict is marginal (Scenario B or ambiguous), check crypto direction as an additional confluence layer:

- **Confirming**: BTC/ETH trending same direction as NQ → adds conviction
- **Diverging**: crypto moving opposite → warning flag; potential institutional rotation or hedging
- Not a primary signal — use as context when the index picture isn't clear-cut

Append to verdict block when used:

```
CRYPTO CONFLUENCE
  BTC: [direction / brief note]
  ETH: [direction / brief note]
  Verdict: [Confirms / Diverges / Neutral]
```

## Output Format

One compact verdict block — not a full analysis. Designed to be read in 10 seconds before entry.

## Quick Commands

```bash
# TradingView MCP tools (run via Claude — not bash)
# pane_list
# pane_focus [pane_id]
# quote_get
# data_get_pine_labels study_filter="[indicator name]"
```
