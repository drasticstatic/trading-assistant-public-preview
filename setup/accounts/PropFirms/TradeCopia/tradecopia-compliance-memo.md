# TradeCopia Compliance Memo

Reference record for why TradeCopia's account structure is set up the way it is, per-firm — kept so there's a documented rationale ready if a firm ever flags a copy-trading pattern for review. Not legal advice; each firm's own support channel is the final word. Structure/rationale in full: `specs/TradeCopia_workflow.md`.

---

## Apex Trader Funding

**Rule** (`setup/accounts/PropFirms/ApexTrader/apex-rules_legacy.md` line 225-229, "9. Automation Prohibition"):
> AI, autobots, algorithms, fully automated systems, HFT — all prohibited on PA/Live accounts. No hands-off, set-and-forget, or 24-hour continuous trading. Violation = immediate account closure and forfeiture of all funds. **Trade copiers/external programs: results are trader's responsibility; submit software for approval before use.**

**Gate:** TradeCopia must be submitted to Apex for approval before it's used on Apex-484839-11 or Apex-484839-12. This is not optional — the automation-prohibition clause carries account closure + fund forfeiture as the stated consequence.

**Status:** Not yet submitted. Draft request below, ready to send.

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

**Current structure (compliant):** Top1 (Elite ACCESS, 50K) leads **Apex-484839-11 and Apex-484839-12, both 50K** — same dollar size as the leader. Trade decisions originate on the Top1 account (Christopher trades TradingView → Top1 manually; TradeCopia only mirrors outward). This satisfies both the same-size requirement and the trade-origination requirement as written.

**Residual ambiguity, worth closing out:** the policy's "different programs" language could, read literally, still flag a Top1↔Apex pairing regardless of matched size, since Apex Legacy isn't the "identical program" as Top1's Elite ACCESS — the policy's allowed-example only names same-firm, same-program pairs (Elite Access to Elite Access). The size-match removes the risk under the most likely reading (the mismatched-size clause is what TOF's assistant actually flagged), but a direct written confirmation from TOF support for this specific Top1→Apex-11/12 pairing would close the gap entirely. Recommended, not yet sent.

**Draft support request:**
> Subject: Confirming a specific cross-firm copy-trading pairing
>
> Hi TopOneFutures support,
>
> I want to confirm a specific copy-trading setup before activating it. I trade my Top One Futures Elite ACCESS account ($50K) manually, and I'd like to use TradeCopia to mirror those trades into two Apex Trader Funding accounts, also $50K each. All trade decisions originate on my Top One Futures account — TradeCopia only replicates outward, it never places or initiates trades on the Top One Futures account itself.
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

**Gate:** None. No approval step, no size-matching restriction found in TPT's rules. TPT is Group A's leader (→ LucidDaily); trader bears responsibility for any misconfiguration, same as any other account activity.

---

## Lucid Trading

**Rule** (`setup/accounts/PropFirms/Lucid/lucid-rules.md` line 109, 413):
> Automated strategies / trade copiers: permitted, but trader is fully responsible for software errors or unintended outcomes. ... EA/bot or trade-copier usage — permitted, but confirm trader accepts full responsibility for its behavior.

**Gate:** None. Explicitly permitted, no approval step, no size-matching restriction documented. Lucid (LucidDaily) is a Group A follower under TPT.

---

## Summary table

| Firm | Role | Copier permitted? | Approval needed? | Size constraint? |
|---|---|---|---|---|
| TPT | Group A leader | Yes | No | No |
| Lucid (LucidDaily) | Group A follower | Yes | No | No |
| TopOneFutures | Group B leader | Yes, conditionally | No (but written confirmation recommended for this pairing) | Yes — same size required |
| Apex-11 / Apex-12 | Group B followers | Yes, conditionally | **Yes — must submit for approval before use** | Matched to Top1 (50K=50K) |
