# TradeCopia Compliance Memo

Reference record for why TradeCopia's account structure is set up the way it is, per-firm — kept so there's a documented rationale ready if a firm ever flags a copy-trading pattern for review. Not legal advice; each firm's own support channel is the final word. Structure/rationale in full: `specs/TradeCopia_workflow.md`. Worked examples for the group-level risk toggles referenced below: `tradecopia-risk-toggle-deep-dive.md`.

---

## Apex Trader Funding

**Rule** (`setup/accounts/PropFirms/ApexTrader/apex-rules_legacy.md` line 225-229, "9. Automation Prohibition"):
> AI, autobots, algorithms, fully automated systems, HFT — all prohibited on PA/Live accounts. No hands-off, set-and-forget, or 24-hour continuous trading. Violation = immediate account closure and forfeiture of all funds. **Trade copiers/external programs: results are trader's responsibility; submit software for approval before use.**

**Gate:** None in practice — confirmed directly with Apex support (see Status below), despite `apex-rules_legacy.md`'s "submit for approval" wording. One operational ask: keep Tradovate open while trading, as a manual override.

**Status: Resolved — no approval needed.** Christopher asked Apex support directly ("Where can I submit my request for approval for my plan to use TradeCopia?") and received this response (Sep 3, 2026):
> "You do not need to send a request to use Tradecopia as your trade copier; you may simply use this going forward. As best practice, always ensure that you have Tradovate open when you are trading; that way, when you experience an issue with a third-party copier, you can manually flatten the position directly on Tradovate. For any issues that may occur using a third-party platform, we cannot be held liable for their error or usage."

So the "submit for approval" line in `apex-rules_legacy.md` turned out not to require an actual pre-clearance step in practice — Apex support confirmed TradeCopia can just be used. Their one operational ask: **keep Tradovate open while trading**, as a manual override if TradeCopia has an issue. The draft request below is kept on record as-sent context, not as an open action item.

**Draft support request:**
> Subject: Trade copier software approval request — TradeCopia
>
> Hi Apex support,
>
> I'd like to submit TradeCopia (tradecopia.com) for approval as a trade-copier tool on my accounts APEX-484839-11 and APEX-484839-12, per the rule requiring pre-approval for trade copiers/external programs.
>
> TradeCopia is a browser-based (Pro+ Lite tier) copy-trading and risk-management tool. It does not place any orders on a leader account — it only mirrors trades that I place manually on a separate leader account (TopOneFutures Elite ACCESS) into these two Apex follower accounts, scaled via a quantity multiplier. Every trade originates from my own manual decision on the leader account; TradeCopia's role is purely mechanical replication plus risk-limit enforcement (daily loss limits, position reconciliation, auto-flatten on leader-flat).
>
> Please confirm this is approved for use on the accounts above.
>
> Thanks,
> Christopher Wilson

**Response:** _(log here once received)_

---

## TopOneFutures

**Policy** (fetched from `https://help.toponefutures.com/en/articles/11680891-copy-trading-policy`, Sep 3, 2026):

> **Explicitly allowed:**
> - Same-type, same-size accounts: "copy trades between accounts that belong to the identical program and share the same size" (e.g., Elite Access $50K to Elite Access $50K).
> - Cross-firm copy trading of your own accounts: "Top One Futures does not prohibit copy trading between your own accounts at different firms," provided "your trades begin from your Top One Futures account and reflect your own strategy and discretion."
> - Unrelated asset classes traded simultaneously across mismatched accounts.
>
> **Explicitly prohibited:**
> - Mismatched account types or sizes: "Cannot copy between different programs or different sizes, even with software."
> - Manual mirroring across mismatched account types/sizes — a violation "even if it is minutes or an hour later."
> - Correlated assets traded in the same direction across mismatched accounts.
> - Signal following / Telegram / Discord call groups / coordinated trading with others.
> - Key requirement: the trade decision "must originate from activity on our platform" for cross-firm copying to be acceptable.

**What this ruled out:** the original plan (this session, before restructuring) paired the 50K Top1 Elite ACCESS leader with a 25K Lucid follower via TradeCopia's quantity multiplier. **TopOneFutures' own AI assistant directly confirmed this specific pairing is a violation** — a mismatched-size cross-firm copy, exactly what the policy text above prohibits.

**Current structure (compliant):** TopOneFutures actually holds **two** funded Elite ACCESS accounts, both $50,152.60 (TOF197288 and TOF197292 — the TopOne BOGO deal). **TOF197288 leads TOF197292, Apex-484839-11, and Apex-484839-12** — all four accounts are $50K. The TOF197288→TOF197292 leg is TOF's own explicitly-allowed case verbatim (identical program, identical size, both Elite ACCESS). The TOF197288→Apex leg relies on the same-size, trade-originates-on-TOF-account reasoning below. Trade decisions originate on TOF197288 (Christopher trades TradingView → TOF197288 manually; TradeCopia only mirrors outward).

**Residual ambiguity, worth closing out:** the policy's "different programs" language could, read literally, still flag the TOF197288→Apex leg regardless of matched size, since Apex isn't the "identical program" as TOF's Elite ACCESS — the policy's allowed-example only names same-firm, same-program pairs (Elite Access to Elite Access, which the TOF197288→TOF197292 leg already satisfies cleanly). The size-match removes the risk under the most likely reading (the mismatched-size clause is what TOF's assistant actually flagged), but a direct written confirmation from TOF support for this specific TOF197288→Apex pairing would close the gap entirely. Recommended, not yet sent.

**Draft support request:**
> Subject: Confirming a specific cross-firm copy-trading pairing
>
> Hi TopOneFutures support,
>
> I want to confirm a specific copy-trading setup before activating it. I trade my Top One Futures Elite ACCESS account (account TOF197288, $50K) manually, and I'd like to use TradeCopia to mirror those trades into my second Elite ACCESS account (TOF197292, also $50K, same program) and two Apex Trader Funding accounts, also $50K each. All trade decisions originate on my TOF197288 account — TradeCopia only replicates outward, it never places or initiates trades on the Top One Futures account itself.
>
> Per the copy-trading policy article, same-size accounts are permitted for cross-firm copying as long as trades originate on the Top One Futures account. Since the two Apex accounts match my Elite ACCESS account's size ($50K = $50K), I want to confirm this specific pairing is acceptable before I enable it.
>
> Thanks,
> Christopher Wilson

**Response:** _(log here once received)_

---

## Take Profit Trader (TPT)

**Rule** (`setup/accounts/PropFirms/TakeProfitTrader/tpt-rules.md` line 137-138):
> Applies even if positions are unintentional (e.g., misconfigured trade copier). Trade copiers/automation: trader is fully responsible — TPT is not liable.

**Official Trade Copier Policy** (fetched from `https://takeprofittraderhelp.zendesk.com/hc/en-us/articles/34431176505245-Trade-Copier-Policy`, Sep 3, 2026):
> TakeProfitTrader permits the use of trade copiers solely for managing accounts owned and controlled by you. **TradeCopia is on the explicit approved-copier list** (alongside Tradesyncer, Affordable Indicators, Replikanto Flowbot Compliance Edition, and platform-native tools).
>
> **Permitted:** copy trades across your own accounts, manage multiple accounts as part of your individual strategy, improve execution efficiency across your own accounts.
> **Prohibited:** copying/synchronizing trades between different users or identities, coordinating execution across accounts not owned by you, **entering opposing or offsetting positions designed to reduce, transfer, or neutralize risk** (reinforces why "Prevent hedging" matters), pass/payout services, circumventing the Independent Trade Execution Policy.
> No size-matching or leader/follower-role restriction stated. Enforcement is based on "behavioral, statistical, and technical analysis of execution data and account relationships, not the specific copier software used" — violations risk profit forfeiture, account reset/liquidation, account closure, or permanent ban.

**Gate:** None — TradeCopia is explicitly pre-approved. No size-matching restriction found in TPT's rules; no restriction on which role (leader or follower) an account holds. TPT is Group A (Strict News Discipline)'s follower as of Sep 3, 2026 (flipped from leader — see `specs/TradeCopia_workflow.md`); trader bears responsibility for any misconfiguration, same as any other account activity.

---

## Lucid Trading

**Rule** (`setup/accounts/PropFirms/Lucid/lucid-rules.md` line 109, 413):
> Automated strategies / trade copiers: permitted, but trader is fully responsible for software errors or unintended outcomes. ... EA/bot or trade-copier usage — permitted, but confirm trader accepts full responsibility for its behavior.

**Gate:** None. Explicitly permitted, no approval step, no size-matching restriction documented. Lucid (LucidFlex25) is a Group A (Strict News Discipline) follower under TPT.

---

## Summary table

| Firm | Role | Copier permitted? | Approval needed? | Size constraint? |
|---|---|---|---|---|
| TPT | Group A (Strict News Discipline) follower (flipped Sep 3, 2026) | Yes | No | No |
| Lucid (LucidFlex25) | Group A (Strict News Discipline) follower | Yes | No | No |
| TopOneFutures | Group B (TopOne Derived) leader | Yes, conditionally | No (but written confirmation recommended for this pairing) | Yes — same size required |
| Apex-11 / Apex-12 | Group B (TopOne Derived) followers | Yes, conditionally | No — Apex support confirmed directly, keep Tradovate open as manual override | Matched to Top1 (50K=50K) |
