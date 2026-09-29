# GammaLevels (TheGexLab) — A Real Review

*By Christopher Wilson (drasticstatic) — full trading documentation at [trading-assistant](https://github.com/drasticstatic/trading-assistant-public-preview). This is the deeper version of a review posted on [whop.com/gammalevels/reviews](https://whop.com/gammalevels/reviews) — short-form there, full reasoning here.*

## What it actually is

GammaLevels is Yush and TMade Alex's community around TheGexLab — a tool built on gamma exposure (GEX): the idea that market makers who sell options have to hedge their own delta by trading the underlying, and the *direction* of that hedging flips depending on whether dealers are net long or net short gamma.

- **Net long gamma:** dealers hedge against the move — buying dips, selling rallies. That suppresses volatility and tends to pin price near the strikes with the heaviest open interest.
- **Below the "zero gamma" level:** that flips. Dealers hedge *with* the move instead of against it — which is what turns an ordinary breakout into a fast, accelerating one.

Put/call walls mark where that dealer positioning actually concentrates — not arbitrary technical levels drawn by eye, but the real footprint of forced hedging flow. That's why price so often behaves differently above vs. below them, and it's the reason this isn't just another "support/resistance" overlay.

## Why I actually trust it, not just like it

I didn't come to this cold. I've spent years building my own ETH-derived level system (a free, open Pine Script indicator — [auto-levels](https://www.tradingview.com/script/zgY5elbq-Auto-Levels-v2-23/), [full guide here](https://drasticstatic.github.io/trading-assistant-public-preview/setup/auto-levels.pine_indicator-guide.html)) with its own green-vs-cyan level distinction for exactly this kind of session-dependent read.

TheGexLab's Asia-session read is nicknamed "night-vision" internally — and it lines up with my own green/cyan split for the *same underlying reason*, arrived at from a completely different data source (options positioning vs. my own price-action-derived levels). When two independently-built systems converge on the same structural idea, that's not confirmation bias — that's real signal. Finding that overlap after years of building my own system is genuinely one of the more useful "wait, that actually checks out" moments I've had this year.

## What I'd tell someone on the fence

This isn't a black-box indicator you buy and blindly trust. The GEX framework has real, explainable mechanics behind it — dealer hedging flow, not folklore — and that's exactly why it held up against an independent system I already trusted. If you already have a level system you rely on, GammaLevels is worth checking against it, not replacing it outright — that's the honest test, and it's the one I ran.

Partner access + discount: [thegexlab.com/tmade](https://www.thegexlab.com/tmade), code `TMADE`.

---

*Not financial advice — personal documentation of tools I actually use, not a recommendation to trade any particular way. Verify anything here directly before relying on it.*
