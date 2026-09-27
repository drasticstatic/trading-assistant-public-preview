# US Crypto Derivatives — Regulatory Landscape

> **Living document, last updated Sep 27, 2026.** Not legal advice — this is personal research (sourced from AI-assisted research, cross-referenced where possible) kept as a working reference, not a compliance opinion. Verify anything here directly with the platform/regulator before relying on it; crypto derivatives regulation in the US is moving fast and this doc will go stale. Intended future front-end home: community.html's "Crypto Exchanges" section, with per-exchange modals teasing this doc's detail (see the per-venue status docs alongside this one).

## The core rule

Under the US Commodity Exchange Act, crypto derivatives (including perpetual futures) can only legally be offered to US residents through a venue registered with the CFTC — either as a **Designated Contract Market (DCM)** or via a properly registered **Futures Commission Merchant (FCM)** clearing through one. Everything below is downstream of that one rule.

## CFTC-compliant venues (the actual legal path for US perps)

- **[Kalshi](kalshi/kalshi-status.md)** — originally a prediction-market platform, secured landmark CFTC approval to list regulated Bitcoin and Ethereum perpetual futures contracts directly for American traders. The first fully CFTC-compliant crypto perpetual contract in the US was approved for domestic listing in mid-2026.
- **[Kraken Pro (Kraken Derivatives US)](kraken/kraken-status.md)** — Kraken's parent company (Payward) acquired Bitnomial Exchange, LLC, a CFTC-regulated DCM, giving Kraken its own compliant clearing infrastructure. Perps are offered via NinjaTrader Clearing, LLC (d/b/a Kraken Derivatives US), a registered FCM. Perps sit directly inside the main Kraken Pro dashboard alongside spot/margin. Requires passing a Futures Eligibility Check plus full KYC; some US states carry their own additional derivative restrictions.
- **Bitnomial** — the underlying CFTC-regulated DCM Kraken's compliant offering clears through (a $550M acquisition). Not a retail-facing brand most people trade on directly, but the actual regulatory infrastructure behind Kraken's US perps.
- **[Coinbase Advanced (Coinbase Derivatives)](coinbase/coinbase-status.md)** — Coinbase became a registered FCM and launched "US Perpetual-Style Futures" natively in the domestic Coinbase Advanced dashboard. These are structured as long-dated contracts (5-year expirations) using a funding-rate mechanism to stay anchored to the spot index price — functionally identical to a global perp without the "roll every month" hassle. Leverage capped at 10x intraday for digital assets (vs. up to 50x on Coinbase's offshore entity for non-US users). Supports USDC as collateral directly; fees as low as 0.02%/contract.
- **[Robinhood Derivatives, LLC](robinhood-derivatives/robinhood-derivatives-status.md)** — registered with the CFTC as an FCM, but current product offering is limited to standard (non-perpetual) CME Bitcoin/Ethereum futures and crypto prediction markets (cleared via partnerships including Kalshi) — not true perpetuals yet. Robinhood has stated they're exploring a fully regulated domestic perp launch and took an equity stake in OG.com toward CFTC approval on next-gen perp contracts. Separately, the standalone Robinhood Wallet routes perps through the Lighter DEX — but that tab is blocked for US-resident users since Lighter has no CFTC clearance.

## Offshore / legal-gray venues — the reality, not the marketing

- **[BTCC](btcc/btcc-status.md)** — operates as an overseas centralized derivatives platform, holds no CFTC registration. Historically permits relaxed/no initial KYC for onboarding and trading, which is why access "works" for many US users despite the platform being non-compliant for US derivatives. **The real risk shows up at withdrawal**: uploading a US ID during a withdrawal-triggered KYC check can freeze the account under "risk control review," with funds effectively trapped, since BTCC can't legally serve US derivatives customers. BTCC's FinCEN MSB registration (sometimes cited as reassurance) only covers anti-money-laundering currency-exchange tracking — it is **not** a derivatives license and doesn't change any of this.
  - **Why this account is different:** already KYC-verified as a US resident with BTCC. Per that verification status, blockchain withdrawal (not fiat) is the standard path out: send crypto (USDT/BTC/ETH) via its native network to a personal wallet or a US-regulated exchange (e.g. Coinbase, Kraken) rather than attempting a fiat/bank-wire withdrawal (not supported for US regional-compliance reasons anyway). Match networks exactly (e.g. TRC-20 both ends for USDT) to avoid losing funds in transit, and send a small test withdrawal (~$10-20) before moving a full balance. Proactive migration matters regardless of current access — an offshore derivatives platform can change terms or geoblock existing US accounts overnight under regulatory pressure, with no guaranteed off-boarding window.
- **[Phemex](phemex/phemex-status.md)** — same shape as BTCC: no US derivatives license, mandatory KYC now enforced, which blocks US residents from perps there today.

## Explicitly prohibited for US residents — no viable workaround

- **[Binance (global + US)](binance/binance-status.md)** — one of the largest crypto perp markets in the world, but aggressively geoblocks and KYC-screens against the US. VPN use triggers automated compliance flags and locks capital behind a non-US verification wall. **Binance.US is a completely separate entity** — spot-only, zero CFTC derivatives clearance, no perps exist there at all.
- **[Bybit](bybit/bybit-status.md)** — strictly prohibited for US residents; enforces geo-blocking and KYC restrictions specifically against the US market.
- **[MEXC](mexc/mexc-status.md)** — explicitly names the US in its own prohibited-jurisdictions list; uses AI-powered facial recognition and mandatory KYC to block US registration/access to its derivatives dashboard.
- **[Blofin](blofin/blofin-status.md)** — explicitly bans all US users (all states/territories) in its own Terms of Use.
- Non-KYC/VPN "workarounds" for any of the above are not a safe path — automated compliance sweeps can freeze an account and its funds with no US regulatory recourse, since none of these platforms answer to a US regulator on your behalf.

## DeFi DEXs — the front-end block vs. the underlying contract

Major perpetual DEXs ([dYdX](../dex/dydx/dydx-status.md), [Hyperliquid](../dex/hyperliquid/hyperliquid-status.md), [GMX](../dex/gmx/gmx-status.md)) geoblock their own front-end websites for US IPs to manage US regulatory exposure — but the underlying smart contracts themselves are just code on a public blockchain and can't inherently block a wallet-signed transaction. Technically-inclined users bypass the website entirely by connecting directly to the blockchain's RPC node and interacting with the contracts directly, skipping the geographic block. **The tradeoff is real**: doing this forfeits any exchange-side safety net — an oracle-manipulation exploit or a protocol bug can drain collateral instantly with zero customer support and no regulatory recourse, regardless of jurisdiction.

## Telegram mini-apps — a wrapper, not an exchange

Telegram mini-apps that offer "perps" don't clear trades themselves — they're an interface layer that either calls out to an external CEX account via API keys, or connects to an on-chain DEX deployment. The safety question is entirely about custody:
- **🔴 Custodial / unsafe pattern:** the app generates a wallet inside the chat, or asks for a seed phrase, and tells you to deposit directly into its own balance. If the developer disappears or the project gets pulled, the funds go with it — a common rug-pull shape.
- **🟢 Non-custodial / safer pattern:** the mini-app never touches private keys or funds directly. It pushes every trade as an approval request out to a separate, trusted external wallet app (Tonkeeper, MetaMask, a hardware-wallet link), and only that external app ever signs. The mini-app itself stays a stateless viewer.
- **The golden rule:** if a Telegram trading app or bot ever asks for direct custody of funds or a seed phrase, that's the signal to stop — regardless of how legitimate the surrounding project looks.

## See also

- Per-venue status docs in the sibling folders under `setup/accounts/crypto/cex/` and `setup/accounts/crypto/dex/` — each a short "at a glance" card (account held or reference-only, regulatory status, key facts) that points back here for the full analysis.
- `setup/accounts/PropFirms/prop-firm-progression.md` and the `project_exchange_roster` memory file for which of these are actually active accounts vs. reference-only research.
