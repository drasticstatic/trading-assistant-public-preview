---
name: tradecopia-settings
description: >
  Add, edit, or rearrange TradeCopia copy-trading accounts, groups, multipliers, or risk-rule
  settings — for a new account being added, an account moving between groups, a multiplier
  change, or a firm's loss-limit/consistency numbers changing. Use this whenever the user
  mentions: TradeCopia, copy trading setup, add account to Copia, change multiplier, adjust
  TradeCopia risk settings, new follower account, rewire copy groups, or update TradeCopia
  group structure. Do NOT use for: routine trade reviews, account balance/eval status checks
  (use /prop-firm-status), or one-off manual trades outside the copy structure.
---

# Skill: /tradecopia-settings

Repeatable procedure for changing TradeCopia's live configuration — adding an account, moving one between groups, changing a quantity multiplier, or updating a risk-rule number. Source of truth for the *why* behind the current structure: `specs/TradeCopia_workflow.md`. Compliance record: `setup/accounts/PropFirms/TradeCopia/tradecopia-compliance-memo.md`.

---

## Before Starting

1. Read `specs/TradeCopia_workflow.md` — confirm the current Group A (Strict News Discipline) / Group B (TopOne Derived) structure and which accounts are leaders vs. followers before changing anything.
2. If the change involves a **new account on a firm not already in the compliance memo's summary table**, check that firm's own rules doc (`setup/accounts/PropFirms/{firm}/`) for a copier-approval requirement or size-matching restriction *before* wiring it in — Apex requires pre-approval, TopOneFutures requires same-size cross-firm pairings. Don't assume a new firm is unrestricted just because the four already documented aren't uniform.
3. Confirm TradeCopia is the **Pro+ Lite (browser)** tier, not the desktop "Local Trade Copier" — Claude-in-Chrome only works on the former (see the tier caveat in `specs/TradeCopia_workflow.md`).

---

## Plan-Mode Discipline (non-negotiable)

Reading the dashboard, reviewing current settings — fine to do directly. **Before changing any multiplier, drawdown/loss-limit threshold, hedging-prevention toggle, reconciler setting, or connecting/linking any account** — stop, lay out exactly what's about to change and why, and get explicit go-ahead. One setting group at a time; confirm it in the live UI before moving to the next.

---

## Steps

### 1. Adding a new account
- Confirm which group it belongs in per the size/policy-compatibility principle in `specs/TradeCopia_workflow.md` (match leader size first; drawdown mechanic doesn't need to match).
- Check that firm's copier-approval/size-matching requirements (per step 2 above) before connecting it live.
- Add the Tradovate (or relevant broker) connection if not already present for that firm.
- Add the account under Copy Trade → Modify Group → slide into Leader or Follower Accounts.
- Set the quantity multiplier against the group's leader, sized to the new account's own balance *and* current allowed contract count — not dollar size alone.
- Configure the six risk settings (see `specs/TradeCopia_workflow.md`'s Risk-management table) mapped to that firm's real numbers.
- Update `specs/TradeCopia_workflow.md`'s account structure section and Done Criteria.

### 2. Moving an account between groups
- Confirm the new pairing doesn't reopen a compliance issue already resolved once (re-check the compliance memo's summary table for the destination leader's firm).
- Remove from the old group first (an account can only belong to one group at a time), then add to the new one.
- Re-verify the six risk settings under the new group — they don't carry over automatically.
- Update `specs/TradeCopia_workflow.md` and the SOP doc's TradeCopia pointer section.

### 3. Changing a multiplier
- Confirm the reasoning (account size change, contract-count scaling change) before touching it live.
- Change one account's multiplier at a time, confirm in the UI, verify with a small test mirror if changing significantly.

### 4. Updating risk-rule numbers
- Pull the current number from the firm's own canonical rules doc (`TakeProfitTrader/tpt-rules.md`, `ApexTrader/apex-rules_legacy.md`, `Lucid/lucid-rules.md`, `TopOneFutures/topone-rules.md`) — never a generic default or a stale note from `specs/TradeCopia_workflow.md` itself.
- Update the live TradeCopia setting, then update the "Numbers for #6 come from..." reference stays a pointer — don't duplicate the actual numbers into the spec.

### 5. Close out
- Log what changed and why in `tradecopia-compliance-memo.md` if the change touches a compliance-relevant pairing (new firm, new size mismatch, new approval).
- Update `specs/TradeCopia_workflow.md`'s Done Criteria checklist.
- Commit with the `Agent · Engine · Model` footer convention.

---

## When NOT to Use
- Routine account balance/eval status checks — use `/prop-firm-status`
- Trade reviews — use `/trade-review` or `/daily-review`
- One-off manual trades taken outside the copy structure (allowed per `specs/TradeCopia_workflow.md` — "trades outside the copy groups")
