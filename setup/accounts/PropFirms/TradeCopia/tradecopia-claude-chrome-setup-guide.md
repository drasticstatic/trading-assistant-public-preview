# Setting Up Claude in Chrome as a TradeCopia Copilot

A short guide to having Claude help configure [TradeCopia](https://tradecopia.com) — a cloud-based futures copy-trading tool — directly inside your browser, rather than clicking through every setting by hand. Written from real setup experience on TradeCopia **Pro+ Lite**; the steps apply to Pro+ generally.

This is a setup guide, not financial advice — see the disclaimer at the bottom.

---

## Why bother

TradeCopia **Pro+ Lite** is browser-based, so there's no special API or integration needed for an AI agent to help configure it — it just needs to be able to see and click the same web page you do. That's exactly what Claude's Chrome extension is built for: read the page, click, type, navigate — the same things you'd do by hand, just faster and with a second set of eyes checking the settings against what you actually intend.

**Tier matters here.** TradeCopia also ships a "Local Trade Copier" — a downloaded desktop application, installed as Administrator, running entirely on your own machine — described in TradeCopia's own Quick Start & Setup Guide PDF. That's a different product experience: Chrome automation can only reach browser tabs, not a native desktop app. If you're not sure which one you're on, check — this guide (and Claude-in-Chrome generally) only works for the browser-based tier.

## What you need

- Google Chrome
- [Claude in Chrome](https://claude.ai) extension installed
- If you're driving this from Claude Code (the CLI): launch it with the `--chrome` flag to bridge into your active Chrome tabs
- A TradeCopia account (Pro+ or Pro+ Lite — Basic doesn't expose the full risk-control set referenced below)

## Setup steps

1. **Open the TradeCopia dashboard** in Chrome and sign in as you normally would. Claude never sees or handles your login credentials — you log in yourself, same as always.
2. **Open the Claude extension's side panel** while on the TradeCopia tab, and explicitly grant it permission to read and interact with that specific site. This permission is per-site — granting it here doesn't give Claude access to anything else in your browser.
3. **Choose a permission mode** in the extension settings:
   - **"Ask before acting"** — Claude proposes each click/change and waits for you to approve it. This is the mode to use for anything touching real risk settings.
   - **"Automatically approve"** — Claude executes continuously without stopping. Fine for read-only exploration; not recommended once you're changing multipliers or drawdown thresholds on funded accounts.
4. **Expect a confirmation pause on sensitive actions regardless of mode.** Altering financial dashboards, risk thresholds, or position-sizing multipliers should trigger a manual click-confirmation before it executes — that's a safety behavior of the assistant, not a TradeCopia feature. If a change doesn't pause for confirmation and you expected it to, stop and check what happened before continuing.

## What Claude can help you configure

TradeCopia's per-follower risk controls are where an AI copilot earns its keep — there are several toggles, and getting them right matters more than getting them fast. The core ones worth walking through with Claude, one at a time, confirming each in the UI before moving to the next:

- **Hedging prevention** — stops a follower account from opening an opposite-side position to your leader (skips opposite-side Market orders on a flat follower, caps size at the follower's existing position). Note the gap: standalone Limit/Stop orders and bracket entries aren't blocked by this alone — worth understanding if you trade brackets.
- **Position reconciler** — after every follower fill, checks the resulting position actually matches the leader's direction/symbol; auto-exits it if not.
- **Disable replication on breach** — once the reconciler above has to step in, stops replicating to that follower until you manually turn it back on, so the same mismatch can't immediately reopen.
- **Auto-close follower positions** — when your leader account goes flat, flattens every follower and cancels their open orders for that symbol too. Important if you trade brackets, since those replicate as individual orders rather than one linked group.
- **Flatten followers on cancel** — same flattening behavior, triggered by a cancel that leaves the leader flat with nothing else working.
- **Per-account loss limits / consistency-rule accountability** — mapping each follower's copied size against its own prop firm's actual daily-loss and consistency rules, not a generic default.
- **The quantity multiplier** — the actual scaling mechanic: a follower account can copy a different position size than the leader, sized independently rather than a flat 1:1 mirror. This is what makes it possible to run a 25K account safely behind a 50K (or larger) leader.

Have Claude read out what each toggle actually does *in the live UI* before applying it — copy quoted below and marketing copy don't always match the real settings page exactly, and the real page is the source of truth.

## A note on leader/follower structure

TradeCopia groups accounts into leader/follower relationships you define. A reasonable starting principle: put your account with the most trading history on a given drawdown mechanic (intraday vs. end-of-day) in the leader seat, and let newer or smaller accounts follow it at a reduced size via the multiplier — rather than the reverse. Work through your own specific account mix with Claude once you're inside the real dashboard, since firm-specific mechanics (which accounts are intraday vs. EOD drawdown, which are already fully scaled) change the right answer.

---

## Not financial advice

This guide describes a browser-automation workflow, not a trading or risk-management recommendation. TradeCopia's settings, prop-firm rules, and your own account structure are your responsibility to verify directly against each firm's current rules — always review any change before and after it's made, and never enable a permission mode you wouldn't want unattended on an account funded with real capital.
