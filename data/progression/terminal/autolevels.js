/* Auto Levels — JavaScript port of the ZTH level engine from Christopher's TradingView indicator (Auto Levels v3.0.2, Pine v6).
 * Same rules, same lifecycle, so the terminal sees the levels the TradingView chart would draw:
 *   • A level is born at the OPEN of a confirmed 1-hour colour-flip candle (bar[2] vs bar[3], confirmed once bar[1] has closed).
 *   • It is KEY when that open sits within max(0.1 %, 20 ticks) of the latest confirmed 3-bar swing high or low, the swing
 *     structure is HH / HL / LH / LL against the previous swing, and the open is at least max(0.05 %, 10 ticks) from the prior candle's open.
 *   • Lifecycle on a 1-hour BODY closing through the level: KEY → 5/5 → 3/5 → Ghost; a Ghost fades 25 % per hit and is removed on the 4th.
 *   • Exact duplicates (within 2 ticks) are not re-created. Caps: 40 KEY+5/5, 20 3/5, 10 Ghost (farthest from the last close trimmed first).
 * Input: closed 1-hour candles [{t,o,h,l,c}] oldest → newest, optional forming candle. Output: [{price, type, tags, born, key}] with
 * type ∈ 'KEY' | '5/5' | '3/5' | 'ghost'. Pure function, no DOM. Shared publicly on purpose: this is the auto-levels logic for anyone who wants it.
 */
(function (root) {
  const TICKS = {BTC: 1, ETH: 0.1, SOL: 0.01, Gold: 0.1, Silver: 0.001, Crude: 0.01, Brent: 0.01, 'Nasdaq-100': 0.25, 'S&P 500': 0.25, 'Russell 2000': 0.1, TOTAL2: 0.0001};
  const dir = (o, c, fb) => (o == null || c == null) ? fb : c > o ? 1 : c < o ? -1 : fb;

  function compute(candles, opts) {
    opts = opts || {}; const tick = opts.tick || 0.01; const forming = opts.forming || null;
    const caps = Object.assign({key55: 40, l35: 20, ghost: 10}, opts.caps || {});
    const all = forming ? candles.concat([forming]) : candles.slice();
    const lv = [];  // {price, type: 0=5/5 1=KEY 2=3/5 3=ghost, tags, born}
    let lastSH = null, prevSH = null, lastSL = null, prevSL = null;
    const nearExisting = (p) => lv.some(x => Math.abs(x.price - p) < tick * 2);
    // bar index k plays "bar[1]" (just closed); k+1 is bar[0] (forming), k-1 is bar[2], k-2 is bar[3]
    for (let k = 2; k < candles.length; k++) {
      const b1 = all[k], b2 = all[k - 1], b3 = all[k - 2], b0 = all[k + 1];
      // 1. mitigation: did bar[2]'s body close through any level?
      const bodyHi = Math.max(b2.o, b2.c), bodyLo = Math.min(b2.o, b2.c);
      for (let i = lv.length - 1; i >= 0; i--) {
        const x = lv[i]; if (!(bodyHi > x.price && bodyLo < x.price)) continue;
        x.tags += 1;
        if (x.type === 1) x.type = 0; else if (x.type === 0) x.type = 2; else if (x.type === 2) { x.type = 3; x.tags = 0; } else if (x.tags >= 4) lv.splice(i, 1);
      }
      // 2. swings: bar[1] is a 3-bar pivot against bar[2] and bar[0]
      if (b0) {
        if (b1.h > b2.h && b1.h > b0.h) { prevSH = lastSH; lastSH = b1.h; }
        if (b1.l < b2.l && b1.l < b0.l) { prevSL = lastSL; lastSL = b1.l; }
      }
      // 3. creation: colour flip between bar[2] and bar[3]
      const d3 = dir(b3.o, b3.c, 0), d2 = dir(b2.o, b2.c, d3);
      if (d2 !== 0 && d3 !== 0 && d2 !== d3) {
        const p = b2.o; if (nearExisting(p)) continue;
        const tol = Math.max(p * 0.001, tick * 20);
        const nearH = lastSH != null && Math.abs(p - lastSH) < tol, nearL = lastSL != null && Math.abs(p - lastSL) < tol;
        const hasStruct = (lastSH != null && prevSH != null && lastSH !== prevSH) || (lastSL != null && prevSL != null && lastSL !== prevSL);
        const sep = Math.abs(p - b3.o) > Math.max(p * 0.0005, tick * 10);
        lv.push({price: p, type: (nearH || nearL) && hasStruct && sep ? 1 : 0, tags: 0, born: b2.t});
      }
    }
    // 4. density caps, farthest from the last close trimmed first
    const last = candles[candles.length - 1].c; const trim = (pred, cap) => { let arr = lv.filter(pred); while (arr.length > cap) { arr.sort((a, b) => Math.abs(b.price - last) - Math.abs(a.price - last)); lv.splice(lv.indexOf(arr[0]), 1); arr = lv.filter(pred); } };
    trim(x => x.type <= 1, caps.key55); trim(x => x.type === 2, caps.l35); trim(x => x.type === 3, caps.ghost);
    const NAME = ['5/5', 'KEY', '3/5', 'ghost'];
    return lv.map(x => ({price: x.price, type: NAME[x.type], tags: x.tags, born: x.born, key: x.type === 1})).sort((a, b) => b.price - a.price);
  }

  /* Confluence: which levels sit within `band` of a price (or a zone [lo, hi]). KEY counts 2, 5/5 counts 1, 3/5 ½, ghost 0. */
  function confluence(levels, lo, hi, band) {
    const w = {KEY: 2, '5/5': 1, '3/5': .5, ghost: 0};
    const hits = levels.filter(x => x.price >= lo - band && x.price <= hi + band);
    return {score: hits.reduce((s, x) => s + w[x.type], 0), hits};
  }

  root.AutoLevels = {compute, confluence, TICKS};
})(typeof window !== 'undefined' ? window : globalThis);
