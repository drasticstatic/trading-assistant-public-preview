# 📐 Level Marking Methodology
### ETH vs RTH — How to Mark Levels Most Effectively
*Fortuna — Wealth Warden | Reference Document*

---

> **Core principle:** Mark levels where the *primary price
> discovery* happens for each instrument. Different markets
> have different clocks. Respecting that clock is the
> difference between a level that reacts and a level that
> gets ignored.

---

## 🏗️ The Foundation: What Is a Level?

A **5/5 level** (the workhorse of the ZTH system) is the
open price of a 1hr candle where the **body color changed
direction** — the exact price where institutional
participation reversed.

The critical question: **which hours should you use to
identify those color flips?**

The answer depends entirely on **when the real
institutional activity happens** for each instrument.

---

## 🌍 Instrument Categories

---

### 🥇🥈 Metals — GC (Gold) / SI (Silver)
**Mark on: ETH (Extended Trading Hours)**

Gold and silver trade globally, 23 hours/day. The price
discovery is distributed across three major sessions:

| Session | Hours (ET) | Why It Matters |
|---------|-----------|----------------|
| Asian | 7pm–2am | PBoC, central bank reserve activity |
| London | 2am–9am | London gold fix (10:30 AM London = ~5:30 AM ET), European institutional flows |
| NY | 9:30am–4pm | U.S. economic data, Fed activity |

The **London session often drives the most significant
institutional moves in metals.** If you mark GC or SI
on RTH only, you miss the morning London session
entirely — including the period when many of the
most important 1hr color flips occur.

> The EMAs, 5/5 levels, and KEY levels in GC/SI analysis
> are all meaningful precisely because they come from ETH
> marking. An RTH-only GC chart would have a sparse,
> misleading level inventory.

---

### 🛢️⛽ Energy Commodities — CL (Crude Oil) / NG (Natural Gas)
**Mark on: ETH (Extended Trading Hours)**

Energy futures trade on nearly 24-hour schedules with
primary catalysts occurring at all hours:

**Crude Oil (CL):**
- OPEC/OPEC+ decisions: announced at any hour
- Geopolitical events (Middle East, sanctions): 24/7
- EIA weekly inventory: Wednesday 10:30 AM ET (inside RTH,
  but preparation/positioning happens overnight)

**Natural Gas (NG):**
- Weather forecasts update overnight and on weekends
- LNG export terminal updates: any time
- EIA storage report: Thursday 10:30 AM ET

The proof from NG (screenshots taken Feb 23, 2026):
When RT H session windows (blue vertical bands) are
overlaid on NG's 5-min chart, a clear pattern emerges:

```
RTH sessions on NG → often FLAT, tight, range-bound
ETH sessions on NG → significant directional moves

Most of the 5/5 levels on NG were created in ETH.
The institutional direction changes for NG happen
outside U.S. market hours more often than inside.
```

An RTH-only NG chart produces a dangerously sparse
level inventory — major structural reference points
simply won't appear.

---

### 📊 Equity Index Futures — NQ / ES / YM
**Mark on: RTH (Regular Trading Hours — 9:30–4:00 ET)**

Equity index futures are fundamentally different. The
underlying assets (stocks) only trade during RTH. The
ETH session for NQ/ES/YM is:

- **Lower volume** — reduced institutional participation
- **Reaction-based** — responding to individual earnings,
  overnight news, economic data releases
- **Often faded at the open** — "gap-fill" behavior is
  common because ETH moves frequently get reversed
  when real institutional volume arrives at 9:30 AM

The cash equity market (9:30–4:00 ET) is where primary
price discovery occurs for U.S. indices. The 1hr color
flips during RTH carry maximum institutional weight.
ETH flips for NQ/ES/YM often represent positioning
noise rather than structural direction changes.

**Exception:** Pre-market economic data (CPI, NFP,
retail sales) released at 8:30 AM ET can create
meaningful pre-open moves. These are inside the
extended session but are high-conviction events —
watch whether a major data release created an ETH
5/5 near a KEY level. It may carry weight.

---

## 🔁 Side-by-Side Comparison

```
Instrument  |  Mark On  |  Primary Driver
────────────┼───────────┼──────────────────────────────────
GC (Gold)   |  ETH      |  Global 23-hr; London dominant
SI (Silver) |  ETH      |  Same as GC
CL (Crude)  |  ETH      |  OPEC, geopolitical, 24-hr market
NG (Nat Gas)|  ETH      |  Weather, storage, 23-hr market
────────────┼───────────┼──────────────────────────────────
NQ (Nasdaq) |  RTH      |  Cash equity market 9:30–4pm ET
ES (S&P)    |  RTH      |  Same as NQ
YM (Dow)    |  RTH      |  Same as NQ
```

---

## 🛠️ Practical Application in TradingView

**For ETH instruments (GC, SI, CL, NG):**
1. On your 1hr chart, ensure the session setting
   includes extended hours — the chart should show
   overnight candles without gaps
2. Mark color flips across the entire 23-hour day
3. Every 1hr flip carries full weight regardless
   of what hour it occurred

**For RTH instruments (NQ, ES, YM):**
1. On your 1hr chart, use the RTH session only
   for level identification
2. You can still *see* ETH candles for context
   (gaps, overnight range), but the 5/5 level
   placement is based on RTH color flips
3. ETH "fake" 5/5s that don't get confirmed by
   RTH structure should be treated with skepticism

---

## ⚠️ Common Mistakes

**Mistake 1: Marking NQ on ETH**
Result: "ghost" levels at 2am moves that get
completely ignored or fade at the 9:30 open.
The level appears valid but has no institutional
memory behind it in the equity session.

**Mistake 2: Marking NG on RTH only**
Result: sparse level inventory. Major structural
levels from weather-driven overnight moves simply
don't appear. Price reacts to empty space on
your chart.

**Mistake 3: Treating all sessions equally**
Not all hours are equal for any instrument. Know
when YOUR instrument's primary participants are
most active and weight levels accordingly.

**Mistake 4: Forgetting news events**
Even with the correct session baseline, a major
news event can create a high-significance 5/5 in
an "off" session. Context matters. An NG level
created by an EIA storage beat at 10:31 AM ET
(RTH) carries full weight — the news drove it.

---

## 🎯 The Key Question to Ask

Before marking a level: **"Did the institution that
moved price at this hour have a reason to be here?"**

For gold at 3am London: yes — that's the London
session opening, the world's largest physical gold
market. The institution WAS here.

For NQ at 3am: probably not — thin volume, minimal
institutional participation. Was price moved for
a reason, or just drift?

The answer guides how much weight you assign.

---

## 📋 Quick Reference Card

```
BEFORE MARKING LEVELS — ASK:

1. What is this instrument?
   → Commodity / Metal → ETH
   → Equity Index → RTH

2. Are the extended hours showing genuine
   price discovery, or thin noise?
   → Genuine (GC, CL, NG) → mark it
   → Noise (NQ ETH 2am) → lower weight

3. Was there a high-impact news event nearby?
   → Yes → that level carries weight regardless
           of which session it was created in

4. Is the level at a swing high or low?
   → Yes → KEY level candidate — highest priority
           regardless of session
```

---

*Produced with 🙏🏼 Fortuna — Wealth Warden | Claude Code CLI*
*Level Marking Methodology · Feb 23, 2026*
