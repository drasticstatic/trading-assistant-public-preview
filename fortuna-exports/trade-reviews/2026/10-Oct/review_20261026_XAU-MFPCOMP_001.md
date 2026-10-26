# 🔍 Trade Review — XAU Short · MFP Competition $100K · Mon, Oct 26, 2026
### 20261026_XAU-MFPCOMP_001 · −$527.79 · −0.52R · Exited on thesis invalidation, half the planned risk
### The rules kept me out of the winner and then put me into the retest that failed; the new exit rule cut the loss in half

[Jump to 📝 Notes for Coaches ↓](#notes-for-coaches)

---

## ⚡ What Happened in One Paragraph

Gold spent the London morning pressing the top of its short zone (3,999–4,002 on the feed had become 4,014.7–4,018.7 after Sunday's high) with silver lagging every hour. The 08:00 hour swept the morning highs to 4,026.7 and closed at 4,018.0, a rejection candle inside the zone but not under its floor, and the Oct 23 lesson bars gold sweep-fades in the 09:00–09:30 window. Then the 09:00, 09:15 and 09:30 fifteen-minute candles broke under the floor (4,013.8, 4,009.6, 4,003.4) and gold ran to 3,992.5 without me. The A-grade read was intact: a KEY Auto Level at 4,017 inside the zone, confluence 6, silver confirming, 4H bear. So at 09:47 I rested a **limit short at the zone-floor retest, 4,021 MFP**, stop 4,040 (beyond the 4,024–4,027 high cluster plus one ATR, not on a visible high), target 3,989, 1 % risk. It filled at 10:19. The pullback did not stop at the floor: the 10:30 fifteen-minute candle closed at 4,022.9 on the feed, above the zone top, and silver reversed up with it. Under the thesis-invalidation rule written after Saturday's loss, that is an exit at the next read, not a wait for the stop. Closed at **4,030.57** for **−$527.79 net (−0.52R)**. The stop would have cost about $1,030.

---

## 📊 Trade Data

| | |
|---|---|
| **Account** | MyFundedPerps October Competition, Classic $100K (Fortuna, autonomous) |
| **Market** | `binance\|XAUUSDT` perpetual, 10× isolated |
| **Direction** | Short |
| **Grade / risk** | A read · 1 % ($1,005.56) |
| **Size** | 52.924 oz · notional $212,807 · margin $21,281 |
| **Entry** | 10:19:28 ET · limit 4,021.00 filled as maker · fee $10.64 |
| **Exit** | 10:54:54 ET · market 4,030.57 · fee $10.67 · reason: thesis invalidation |
| **Stop / target** | 4,040 / 3,989 attached server-side, never touched; cancelled with the close |
| **Realized** | −$506.48 on price · **−$527.79 net** (balance 100,555.77 → 100,027.98) |
| **R multiple** | −0.52R |
| **Venue offset** | MFP ≈ feed +6.3 |
| **Time in trade** | 35 minutes |

---

## 📋 Order Execution

| Time (ET) | Action | Detail |
|---|---|---|
| 09:47:23 | Intent logged | `order_plan.py` A-grade, 52.924 oz at 1 %, confluence 6 printed, key persisted |
| 09:47:48 | Limit short rested | 4,021 · GTD 11:30 · SL 4,040 / TP 3,989 attached · verified working |
| 10:19:28 | Filled | 4,021.00 maker; SL and TP resting, verified at the 10:53 read |
| 10:30–10:45 | Invalidation | 15m close 4,022.9 above the zone top 4,018.7; silver 53.69 → 54.11 |
| 10:54:30 | Close intent logged | key persisted, expected 4,032.31 |
| 10:54:54 | Closed | reduce-only market 4,030.57, flat, brackets cancelled |

---

## 📖 Session Narrative

Two rules fought each other this morning, and both were right. The no-fade window kept me out of the 09:00–09:30 break that went 24 points in my direction; that rule is paid for by the Oct 23 stop and I do not regret it. The A-only rule then approved the retest entry: everything the Auto Levels and the SMT could say was in favour. What the rules could not say is that the 09:00 break had already spent the move, and that a retrace strong enough to reach the zone floor would likely reach the zone top too. The 10:30 candle said it, and this time there was a rule to hear it: the thesis-invalidation exit cut the loss to half of the planned risk.

Where judgment could improve: on a displacement of 2.4 ATR *away* from the zone, a retest limit at the far edge of that zone is a bet that the retrace stops exactly at the first level it reaches. A better place for the retest short, if any, was the zone top with a stop above the 08:00 high, or no retest at all after a move of that size. Noted below as a rule.

---

## 📸 Screenshot Timeline

- The terminal's 15m chart with the zone band, the KEY level at 4,017, the fill at 4,021 and the 10:30 close above the zone is the public record; Christopher may add his MFP captures through iCloud staging.

---

<a id="notes-for-coaches"></a>
## 📝 Notes for Coaches + SmartTraderAI

Gold short on the competition account after the London highs were swept and rejected. I did not take the 09:00–09:30 break because of my no-fade window, then rested a limit at the retest of the zone floor with the stop beyond the high cluster. It filled at 4,021; the retrace kept going and a 15-minute candle closed back above the zone. I exited at 4,030.57 for −$528, about half an R, rather than let it reach the stop. Third straight gold loss, so the competition's three-loss breaker is tripped and I stop opening trades there until Christopher weighs in.

---

## 🧠 Behavioral Notes (Fortuna's decision log)

- **Process:** intent and close both logged with keys before sending; stop and target attached and verified; no widening; exit on the rule, not on fear or hope.
- **The new rule worked:** the thesis-invalidation exit saved roughly $500 against the stop.
- **Where the read was weak:** a retest entry after a 2.4-ATR displacement; the retrace needed only to be "normal" to run through the whole zone.
- **Breaker:** this is Fortuna's **third straight competition loss** (Oct 23 gold −1.13R, Oct 25 gold −1.06R, Oct 26 gold −0.52R). Per the handoff rules, no new competition entries until Christopher reviews. The Elite program is unaffected (separate account, separate rules).

---

## 🔁 Pattern Tracker

| Pattern | This trade |
|---|---|
| Retest entry after a large displacement | **Yes**: the move had run 2.4 ATR before the limit rested |
| Stop on a visible high | No (fixed since Saturday) |
| Thesis-invalidation exit honoured | **Yes**, first time |
| SMT pair confirmed at entry | Yes, then reversed |
| Chasing | No |

---

## 🎯 Forward Focus

1. **Retest rule:** after a displacement of more than 1.5 ATR from a zone, do not rest a retest order at the zone's near edge; use the far edge with the stop beyond the swing that started the move, or skip the retest.
2. **Breaker:** three straight losses on the competition. Flat there until Christopher reviews; the Elite lane continues under its own rules.
3. Gold: three stop-outs or exits in three sessions. It stays on watch only until a fresh daily structure forms.
