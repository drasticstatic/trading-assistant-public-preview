# MyFundedFutures (MFFU) — Rules Reference
> Compiled Oct 28, 2026 by Fortuna from the MFFU Help Center ([News Trading Policy](https://help.myfundedfutures.com/en/articles/8230009-news-trading-policy), updated Aug 31, 2026; [Permitted Times to Trade](https://help.myfundedfutures.com/en/articles/9558251-permitted-times-to-trade), Aug 24, 2026). MFFU is the futures parent of MyFundedPerps ($225M+ paid out since 2023). Plan-level numbers (Starter / Expert / Milestone / Builder, drawdown type, consistency, payout cadence) are **not** in this file yet: read them from the live plan pages when Christopher picks a plan (⚠️).
>
> **Status:** no MFFU account yet. Christopher intends to trade MFFU alongside the MFP perps accounts "when the time comes" (Oct 28, 2026).

## News trading (verified Oct 28, 2026)
**Applies to every account, all releases:** no straddles/strangles or other strategies that exploit the news burst; no masking news trades as a normal strategy; stick to the regular system and standard entry rules; **no open positions or working orders (including limits) from 2 minutes before to 2 minutes after any data release.** Example from the article: news at 8:30 means flat by 8:28:00, re-enter after 8:32:00.

**Tier 1 releases** (FOMC decisions, FOMC minutes, the Employment Report, CPI; EIA for energy traders; agricultural reports for ag traders):

| Account | Tier 1 trading |
|---|---|
| All evaluations · Builder plans | Permitted (the 2-minute flat rule still applies) |
| Rapid Sim Funded · Pro Sim Funded | **Prohibited** |

MFFU publishes the full-year Tier 1 calendar as two images in the article (the general list and the EIA/ag list). EIA is every Wednesday 10:30 ET except holiday weeks. The trader is responsible for schedule changes.

**Fortuna's read:** this is stricter than MFP (which only restricts funded accounts and allows holding through a release). On MFFU a position held into a Tier 1 release on a Rapid/Pro funded account is a breach, and on any account the order book must be empty 2 minutes either side. The terminal's `calendar.json` buffer (30 min) already covers it; the hard part is **cancelling resting limits** before the window, which the perps pre-flight does not yet say. Add it when the first MFFU account opens.

## Permitted times (verified Oct 28, 2026)
- Trade from the Globex open **18:00 ET** until **16:10 ET** the next day; open positions are **auto-closed at 16:10 ET** on normal days (holiday hours are announced and are *not* auto-liquidated: the trader must close or the account breaches).
- Do not keep re-sending orders after 16:10; a late fill can disqualify the account.
- Illiquid hours are allowed at the trader's discretion.

## Still to read from the live site (⚠️)
Plan matrix (sizes, prices, targets, drawdown type per plan, DLL, consistency, minimum days), the Fair Play article, the live-account FAQ, copy-trading policy between MFFU accounts and with MFP, and the payout schedule. Link them here when done.

## Repo links
- Perps sibling: [`../MyFundedPerps/myfundedperps-rules.md`](../MyFundedPerps/myfundedperps-rules.md)
- Progression roster: [`../prop-firm-progression.md`](../prop-firm-progression.md) · Human pre-flight: [`../../../prop-firm-rules.html`](../../../prop-firm-rules.html)
