# 🔍 Trade Review — XAU Short · MFP Competition $100K · Sun, Oct 25, 2026
### 20261025_XAU-MFPCOMP_001 · −$535.51 · −1.06R · Stop held as designed
### Failed-breakout retest on a Sunday night: the stop sat on a visible high, and the thesis died on a closed candle before the stop did

[Jump to 📝 Notes for Coaches ↓](#notes-for-coaches)

---

## ⚡ What Happened in One Paragraph

Gold had spent Sunday afternoon above Friday's high (chart feed 3,999.1) with four hourly closes above 4,000, and I did not chase it. From 18:00 ET the hourly candles rejected 4,007 twice and the 20:00 hour fell to 3,987, back under the short zone written at midday (a retrace into 3,999–4,002 with a rejection close back under 3,996). The 21:00 hour swept both sides, down to 3,982 and back up into 4,002, and closed at 3,992.8; the 21:15 fifteen-minute candle printed the rejection close at 3,990.7. That matched the written trigger, so at 22:03 I rested a **limit short at MFP 4,003** (the Friday high translated by the +3.7 venue offset), stop **4,011** (the 4,002 rejection high plus the $5 minimum stop, translated), target **3,979** (the 3,975 base low, 3R). Risk was cut to **0.5%** ($505) because the Sunday-night book was thin and silver had made its own marginal high, so the SMT pair did not confirm. The order filled two minutes later as a maker at 4,003. The 22:00 hour then held above the Friday high and **closed at 4,001.8 on the feed, back above the level the short was built on**. Ninety seconds into the 23:00 hour gold ran the 18:00 swing high (4,007.2 feed) and the stop filled at **4,011.05**. Net **−$535.51 (−1.06R)** including both fees.

---

## 📊 Trade Data

| | |
|---|---|
| **Account** | MyFundedPerps October Competition, Classic $100K (Fortuna, autonomous) |
| **Market** | `binance\|XAUUSDT` perpetual, 10× isolated |
| **Direction** | Short |
| **Grade / risk** | B · 0.5% ($505.46), a deliberate haircut from the 1% weekend cap |
| **Size** | 63.182 oz · notional $252,918 · margin $25,292 |
| **Entry** | 22:05:24 ET · limit 4,003.00 filled as maker · fee $12.65 |
| **Stop** | 4,011 attached server-side · filled 23:01:30 ET at 4,011.05 · fee $12.67 |
| **Target** | 3,979 attached server-side (3R) · never approached; best mark ≈ 3,994 (+$560 open at 22:30) |
| **Realized** | −$508.62 on price · −$535.51 net of fees and funding (balance 101,078.64 → 100,555.77; pre-trade 101,091.28) |
| **R multiple** | −1.06R |
| **Venue offset** | MFP ≈ chart feed +3.7 (measured at 20:53 and 22:53) |
| **Liquidation** | 4,343 (8.5% away, 42× the stop distance) |
| **Time in trade** | 56 minutes |

**Levels on the chart feed (Hyperliquid `xyz:GOLD`)**

| Level | Feed | MFP |
|---|---|---|
| Friday high (PDH) | 3,999.1 | 4,002.8 |
| Short zone | 3,999–4,002 | 4,002.7–4,005.7 |
| 21:00 rejection high | 4,002.0 | 4,005.7 |
| 18:00 swing high (the stop ran into this) | 4,007.2 | 4,010.9 |
| Stop | 4,007.3 | 4,011 |
| Base low / target | 3,975.1 | 3,979 |

---

## 📋 Order Execution

| Time (ET) | Action | Detail |
|---|---|---|
| 22:03:36 | Intent logged | `order_plan.py` sized 63.182 oz at 0.5% risk; idempotency key written to the private execution log before any call |
| 22:03 | First create-order **rejected** (400) | `expected_price` is not accepted on limit orders. Nothing placed. Planner fixed, correction logged with a new key |
| 22:04:28 | Limit short rested | 4,003 · GTD to 00:02 ET · attached SL 4,011 / TP 3,979 · verified in `list-orders status=working` |
| 22:05:24 | Filled | 4,003.00 maker. SL and TP legs appeared as resting orders; verified again |
| 22:53 | Check-in | Mark 4,006.7, −$236 open, 4 points from the stop. Stop left where planned (never widen) |
| 23:00 | 22:00 hour closed | 4,001.8 on the feed, **above** the Friday high the trade was built on. No rule existed to act on this; the next read was the 23:01 one-shot |
| 23:01:30 | Stop filled | 4,011.05 (5 cents of slippage on a 63 oz stop-market, thin book) |

No manual intervention at any point. Every write was logged before it was sent.

---

## 📖 Session Narrative

The afternoon read was correct: four closes above 4,000 after a 36-hour base is a breakout, and I wrote at 14:01 that the short "waits for a rejection close back under". That rejection arrived in slow motion, 18:00 to 20:00, and the 21:00 hour was the kind of candle Christopher's style is built around: a sweep of the lows, a sweep back into the highs, close in the middle. I read it as the retest that confirms the failure. The fill at 4,003 was clean and for twenty minutes the trade worked, +$560 open at the 22:30 low.

Then the 22:00 hour did the one thing the thesis could not survive: it closed back above the Friday high. I saw the number at the 22:53 check-in (mark 4,006.7, four points from the stop) and did exactly what the rules said, which was nothing, because the rules only spoke about the stop, not about the thesis. Ninety seconds after the 23:00 open the market ran the 18:00 swing high and took the stop with it.

Two things were wrong, and neither was the read:

1. **The stop sat on a visible high.** 4,011 on MFP is 4,007.3 on the feed, ten cents above the 18:00 swing high of 4,007.2. A stop one tick beyond the nearest high *is* the liquidity. Christopher's own note from this afternoon says it: size down and let the manipulation happen. The stop belonged beyond the 18:00–19:00 high cluster plus an ATR, about 4,014 feed / 4,018 MFP, which at the same $505 risk means 34 oz instead of 63 and a target of 1.6R instead of 3R. Still a B trade, and it would still be open.
2. **There was no thesis-invalidation exit.** The rule set had "never widen the stop" and "breakeven at +1R" but nothing for "a closed hour back above the level you shorted". At the 23:00 close that exit was available at about 4,005.5 MFP, roughly −$160, a third of what the stop cost.

---

## 📸 Screenshot Timeline

- Christopher sent a live capture of the MFP trade page at 22:16 ET showing the position at 4,003 with the SL1 4,011 / TP1 3,979 lines and +$32.84 open. Stored by him; not reproduced here.
- The Fortuna Terminal chart (public) carried the entry, stop, target and liquidation lines live; the 22:00 and 23:00 hourly candles are visible in its 1H view.

---

<a id="notes-for-coaches"></a>
## 📝 Notes for Coaches + SmartTraderAI

I shorted gold on the competition account Sunday night after the breakout above Friday's high failed: four hourly closes above 4,000, then rejections at 4,007 and a drop back under the level. I rested a limit at the old high, got filled at 4,003, stop 4,011, target 3,979 for 3R, at half my normal risk because the book was thin and silver did not confirm. The 22:00 hour closed back above Friday's high and the next hour ran the 18:00 swing high, which is exactly where my stop was, one tick above it. Stopped at 4,011.05 for −$535, about −1.06R.

What I learned: my stop was the nearest liquidity, and I had no rule to exit when the candle that invalidated the idea closed. Both are fixed in the playbook below.

---

## 🧠 Behavioral Notes (Fortuna's decision log)

- **Process held.** Intent logged, keys persisted, stop and target attached and verified, no widening, no manual override. The first create-order was rejected on a schema detail; the correction was logged with a new key, nothing double-sent.
- **The risk haircut was right.** Half risk for a thin book and a non-confirming SMT. The loss is 0.53% of the account instead of 1.06%.
- **Where judgment slipped:** I translated "rejection high + $5 minimum" literally and landed the stop on the 18:00 high. The written rule was satisfied; the market structure was not read. Stops go beyond the *cluster* of highs, not the last wick.
- **No revenge re-entry.** Gold is above the Friday high again on closed candles. The short thesis is void until a fresh rejection close on a later hour; the watchlist goes back to *watch*.
- **Consecutive-loss count:** this is the second straight stop-out on gold by Fortuna (Oct 23, Oct 25). One more loss trips the 3-straight breaker and stops new competition entries until Christopher weighs in.

---

## 🔁 Pattern Tracker

| Pattern | This trade |
|---|---|
| Stop one tick beyond the nearest high (liquidity stop) | **Yes**, both gold stop-outs now share this shape |
| Sunday-night thin tape | Yes, hourly volume a quarter of the afternoon's |
| SMT pair did not confirm | Yes (silver marginal new high) |
| Acting on a closed-candle invalidation | No rule existed; added |
| Chasing | No; limit at the level, filled on the retest |

---

## 🎯 Forward Focus

1. **Stop placement rule (all markets):** stop = beyond the nearest *cluster* of swing highs/lows on the entry timeframe plus 1× ATR, never one tick past the last wick. Size down to fit.
2. **Thesis-invalidation exit (all markets):** if a closed candle on the trigger timeframe closes back through the level the trade was built on (above the rejected high for a short, below the reclaimed low for a long), exit at the next read rather than wait for the stop. Added to the watchlist stop rules and to the exec-log exit plan template.
3. **Gold tonight:** no re-entry. Reassess at the Monday 08:00 ET read with London in the tape.
4. Breaker awareness: two straight losses; the next competition entry must be an A-quality read or it waits.
