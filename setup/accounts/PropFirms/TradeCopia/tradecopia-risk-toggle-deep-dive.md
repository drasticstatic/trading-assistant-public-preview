# TradeCopia Group-Level Risk Toggles — Deep Dive

Worked examples for the five toggles on the "Review & settings" step of Create Trading Group, so a decision doesn't have to be made by testing live. Screenshot of the actual live screen (Sep 3, 2026, building Group A / Strict News Discipline): all five toggles default ON except **Disable replication on breach**, which defaults OFF.

Quick reference table: `specs/TradeCopia_workflow.md`. This doc is the "why," worked through with scenarios.

---

## 1. Prevent hedging — default ON

**What it does, verbatim from the live UI:** "Skips opposite-side Market orders on flat followers and caps qty at the follower's position size — no flipping into a reversed direction. Standalone Limit/Stop and bracket entries are not blocked."

**Worked example — the case it covers:**
Follower (LucidDaily) is flat. Leader (TPT) enters short 2 MNQ via a Market sell order. TradeCopia mirrors it normally — follower goes short 2 MNQ too. No hedging involved here; this setting hasn't done anything yet.

Now: follower is long 2 MNQ (from an earlier leader trade), and the leader flips to short by sending a Market sell order for 4 contracts (2 to close the long, 2 to open new short). Without this setting, the follower would mirror that flip and also end up short. **With it ON:** the follower's mirrored order is capped at the follower's existing position size (2) — so the follower sells down to flat and stops there. It does not go on to open the new short leg. That's "no flipping" in practice: the follower always lands at flat, never reversed, when the leader reverses via a flat-crossing Market order.

**Worked example — the gap that matters for your trading style:** the setting only intercepts *Market* orders on a *flat* follower crossing through zero. If the leader reverses direction using a **Stop or Limit order**, or via a **bracket entry** (a fresh ATM order placed in the opposite direction rather than a flip-through-flat Market order), this setting does not block it — those order types replicate as normal, and the follower could end up genuinely hedged/opposing relative to another account if you're not watching. Since you trade brackets regularly, this is the residual risk "prevent hedging" alone doesn't close — it's why the "due diligence on Orders view" habit from the acknowledgment text still matters even with this ON.

**Recommendation:** ON. It's the single most direct answer to your original "stop accidental hedged positions" concern, but treat it as a backstop for Market-order flips specifically, not a guarantee against every path to a hedge.

---

## 2. Position reconciler — default ON

**What it does, verbatim:** "After every follower fill, verify the new position matches the leader's direction and symbol. If it doesn't, the follower position is automatically exited to prevent unintended exposure."

**Worked example:** Leader is long 2 MNQ. A follower's resting limit order fills at a moment of latency/lag, or a stale duplicate order left over from a prior session fills unexpectedly, leaving that follower long 3 MNQ instead of 2 — or worse, short, from an accidental manual click on that sub-account. The reconciler compares the follower's actual resulting position against the leader's and, seeing a mismatch (wrong size or wrong direction), immediately force-exits the follower's position. This is a safety net against *any* source of drift — not just TradeCopia's own mirroring, but stray manual clicks, stale resting orders, or broker-side timing issues.

**Tradeoff:** it's intentionally aggressive. If a follower fill briefly differs from the leader's for an ordinary latency reason (order sequencing, a partial fill mid-mirror), the reconciler may force an exit rather than waiting a beat to see if it self-corrects. That's a deliberate trade of "maybe one unnecessary stop-out" for "no unmonitored mismatched exposure sitting on a funded/eval account." TradeCopia's own guide: "we strongly recommend keeping this feature enabled."

**Recommendation:** ON. Given every account behind this is real capital (funded or eval), the false-positive cost (an occasional premature flat) is far cheaper than the false-negative cost (a silent mismatched position surviving unnoticed).

---

## 3. Disable replication on breach — default **OFF**

**What it does, verbatim:** "When the reconciler exits a mismatched position, also stop replicating to that follower until you manually re-enable copying. Prevents re-opening the same mismatched position."

**Worked example:** Building on #2 — the reconciler just force-exited Apex-11's mismatched position. With this setting **OFF** (the default), TradeCopia keeps replicating new leader trades to Apex-11 normally going forward — the reconciler is a one-time cleanup, nothing more. With this setting **ON**, Apex-11 is now paused: it will not receive any further copied trades until you go into the follower's settings and manually flip replication back on. This matters most when the underlying cause of the mismatch is systemic rather than a one-off (e.g., a broker connectivity issue specific to that sub-account, or a stale order pattern that would just recreate the same mismatch on the very next leader trade) — pausing stops that loop from repeating blind.

**Why it defaults OFF:** most TradeCopia users likely want the reconciler to just quietly keep fixing drift without requiring a manual re-enable click every time — automatic recovery over manual intervention. That's a reasonable default for someone running many followers passively.

**The tradeoff if you turn it ON:** a single transient mismatch (a brief connectivity hiccup, one stray fill) will silently stop that follower from copying *any* further trades until you notice and manually re-enable it. This only pays off if you're actually checking — it ties directly to the "keep a follower window visible" habit in the acknowledgment text, and would be a natural fit for TradeCopia's "coming soon" Discord/email alerts once those ship, so a paused follower doesn't sit silently paused through a whole session.

**Appended Sep 3, 2026 — re-explained plainly, since #2 and #3 are easy to conflate:**

Think of it as two separate questions TradeCopia asks after any mismatch:

1. **Setting #2 (Position reconciler) answers: "Should I fix *this* mismatched position right now?"** Always yes if this is ON (recommended, and it's ON). It force-exits the one bad position. Full stop — this always happens regardless of setting #3.
2. **Setting #3 (Disable replication on breach) answers a second, separate question: "After I just fixed that, should I also stop trusting this follower going forward, until you personally look at it?"**
   - **OFF (default):** No — after the fix, TradeCopia shrugs and goes back to normal. The very next leader trade replicates to this follower like nothing happened.
   - **ON (what we set):** Yes — after the fix, this specific follower goes into a "paused, needs your attention" state. It will not receive any new trades — not the next one, not any after that — until you manually go find it in the follower's settings and flip its replication back on.

**Concrete walk-through with #3 ON:** Say LFE02590489830001 gets a stray fill that doesn't match TPT's position. #2 fires and flattens it — that part is instant and automatic either way. With #3 ON, LucidFlex25 is now sitting there silently *not* copying anything. TPT trades again an hour later — nothing happens on LucidFlex25. TPT trades again the next day — still nothing, until you notice the paused state in the app and manually re-enable it.

**Why we set it ON given what you said:** you told me you plan to keep an eye on Copia but are nervous something weird could happen — that's exactly the profile #3 is built for. It trades a small amount of "might miss some copied trades until I notice" for "nothing further happens on a follower after something already went wrong with it, until a human looks at it." Given the $600 DLL sitting on LucidFlex25 specifically, that pause-and-wait behavior is the safer failure mode: if something's already misbehaving on that account, the last thing you want is it continuing to auto-trade unattended.

**Recommendation:** ON, matching your original ask — but go in knowing it requires the due-diligence habit to actually pay off, not a set-and-forget toggle.

**Appended Sep 3, 2026, second pass — reconciled against your own SIM observation:**

You reported seeing a 7-micro leader trade fill in stages (2, then 3, then 2) during SIM eval, and this happening often. That's exactly why #2 (Position reconciler) earns its keep — staggered/partial fills are a normal broker behavior, and every time a follower's fill lands mid-sequence, there's a window where the follower's position doesn't yet match the leader's final size. The reconciler is what catches and corrects that, rather than leaving a partially-filled follower position hanging.

You then asked the sharper question: **what does #3 (Disable replication on breach) actually protect against, versus just cost me?** Your own reasoning was correct, with one piece worth pinning down precisely:

- **A missed entry (the follower's order never fills at all — rejected, no liquidity, whatever) triggers *neither* #2 nor #3.** There's no position to reconcile and nothing to have "breached," so both toggles are irrelevant to a simple non-fill. You're right about that.
- **#2 (reconciler) only fires when a fill *did* happen and it's wrong** — wrong size or wrong direction (exactly what your staggered 2/3/2 fills could produce on the follower side if the follower's own partial fills land differently than the leader's). It force-exits that one bad position immediately. This part is a correction, not a miss.
- **#3 (disabler) doesn't cause a miss at the moment of the breach either** — the breach is already corrected by #2 regardless of #3. What #3 controls is *everything after that*: with #3 ON, the follower is now paused, so the *next* legitimate leader entry — a totally clean, correctly-sized trade with nothing wrong about it — will not be copied, because the follower is sitting in a "needs manual re-enable" state from the earlier, already-resolved incident. That's where your "could prevent a loss but could also miss a win" framing is exactly right — the cost isn't at the breach itself, it's every trade after it, until you notice and flip it back on.

**So the honest tradeoff is:** #3 ON buys you an automatic circuit-breaker after repeated/systemic problems, at the cost of possibly sitting out clean future trades while paused and unnoticed. #3 OFF means a follower keeps trading normally right after any correction, at the cost of no automatic pause if something's genuinely, repeatedly wrong with that follower's connection.

Given you're planning to actively watch Copia anyway (the reconciler + due-diligence habit already covers "don't let a bad position sit"), and #3's main added value is specifically the *automatic pause* — which only helps if you'd otherwise miss noticing a repeating problem — your instinct to lean toward OFF is reasonable. Recommendation revised: **either is defensible; leaning OFF matches your stated reasoning better than my original ON recommendation did.** Your call — happy to flip it on either group whenever you say the word.

---

## 4. Auto-close follower positions — default ON, you called this "required"

**What it does, verbatim:** "When the leader's net position reaches 0, flatten all follower positions and cancel any open follower orders for that symbol."

**Worked example — why this matters specifically because you trade brackets:** Leader (TPT) enters long 2 MNQ via a single-bracket ATM order (one TP, one SL, per TradeCopia's supported ATM types). The TP fills; leader is now flat. But TradeCopia replicates a bracket as *individual orders*, not one linked group — so the follower's SL order, which hasn't triggered yet, is still sitting there as a separate resting order even though the leader itself is flat. Without this setting, that stale follower SL just sits there — a real order on a real account, disconnected from the (now-closed) reason it existed. **With this ON:** the instant the leader's position reaches zero, every follower's position in that symbol is flattened and every remaining working order (like that orphaned SL) is cancelled too. Nothing survives the leader going flat.

**Recommendation:** ON — this is the direct fix for exactly the "brackets replicate as individual orders" gap you flagged originally.

---

## 5. Flatten followers on cancel — default ON

**What it does, verbatim:** "When a cancel leaves you flat with no working orders left in a symbol (a clean state), all followers are flattened for that symbol too: positions closed and orders cancelled, same as auto-close."

**Worked example — how this differs from #4:** #4 triggers off a *fill* bringing the leader to flat (the TP hit). This one triggers off a *cancel*. Say the leader has a resting bracket where you've already manually closed the position at market for a different reason, then go cancel the now-pointless resting SL/TP order — that cancel leaves the leader flat with nothing working in that symbol. Setting #4 alone wouldn't catch this (no fill reached zero — a cancel did), so this separate toggle exists to catch the other path to "leader is flat and clean." Together, #4 and #5 mean followers can never be orphaned regardless of *how* the leader reaches a flat, clean state.

**Recommendation:** ON, same reasoning as #4 — covers the other half of the same problem.

---

## The 6th setting — not in this screen

Consistency targets / per-account loss limits (daily loss, weekly loss, trailing drawdown) live under **Risk Management** in the left nav, not in the group-creation wizard — configured per account against each firm's actual numbers (`TakeProfitTrader/tpt-rules.md`, `ApexTrader/apex-rules_legacy.md`, `Lucid/lucid-rules.md`, `TopOneFutures/topone-rules.md`). Separate step, covered once groups exist and accounts are assigned.

---

## Recommended baseline, all five

| Toggle | Default | Recommendation |
|---|---|---|
| Prevent hedging | ON | Keep ON |
| Position reconciler | ON | Keep ON |
| Disable replication on breach | **OFF** | **Turn ON** |
| Auto-close follower positions | ON | Keep ON |
| Flatten followers on cancel | ON | Keep ON |

Only one toggle needs an active change from default — everything else already matches what you asked for out of the box.
