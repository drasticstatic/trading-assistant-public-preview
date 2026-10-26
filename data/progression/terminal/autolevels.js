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

/* ── The rest of the indicator: FCR rail, 4/5 session rails, FVG zones, pattern labels (P, R, B, SFP, BRK/RT, 1-2-3) and ATR bands.
 *    Same thresholds as the Pine inputs. Session items read 15-minute bars in New York time; FVGs and patterns read the chart's own bars
 *    and are gated, like the indicator, to candles within 20 ticks of a KEY or 5/5 level (3/5 at 15 ticks when asked). */
(function (root) {
  const A = root.AutoLevels; if (!A) return;
  const P = {rejWick: 60, rejBody: 30, bounceWick: 50, bounceBody: 40, sfpTicks: 25, brkTicks: 5, brkBody: 30, pauseBody123: 50, oneWick123: 30, proxKey55: 20, prox35: 15, atrBand: 0.04};
  const nyParts = (t) => { const p = new Intl.DateTimeFormat('en-US', {timeZone: 'America/New_York', hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).formatToParts(new Date(t)); const g = (k) => p.find(x => x.type === k).value; return {day: `${g('year')}-${g('month')}-${g('day')}`, h: +g('hour') % 24, m: +g('minute')}; };

  function sessions(m15, days = 3) {  // FCR (09:30 15m high/low) and the 4/5 rails per NY day, newest first
    const byDay = {}; m15.forEach(b => { const q = nyParts(b.t); const d = byDay[q.day] || (byDay[q.day] = {day: q.day}); const hm = q.h * 100 + q.m;
      if (hm === 930) { d.fcr = {high: b.h, low: b.l, t: b.t}; d.open930 = {price: b.o, t: b.t}; }
      if (hm === 1545) d.close1600 = {price: b.c, t: b.t}; if (hm === 1645) d.close1700 = {price: b.c, t: b.t}; if (hm === 1800) d.open1800 = {price: b.o, t: b.t}; });
    return Object.values(byDay).sort((a, b) => b.day.localeCompare(a.day)).filter(d => d.fcr || d.open930 || d.close1600 || d.open1800).slice(0, days);
  }

  function fvgs(bars, minTicks = 0, tick = 0) { const out = []; const min = minTicks * tick; for (let i = 2; i < bars.length; i++) { const b = bars[i], p2 = bars[i - 2]; if (b.l > p2.h && (!min || b.l - p2.h >= min)) out.push({dir: 'bull', top: b.l, bot: p2.h, mid: (b.l + p2.h) / 2, i, t: bars[i - 2].t}); if (b.h < p2.l && (!min || p2.l - b.h >= min)) out.push({dir: 'bear', top: p2.l, bot: b.h, mid: (p2.l + b.h) / 2, i, t: bars[i - 2].t}); } return out; }

  function patterns(bars, levels, tick, opts) {
    opts = opts || {}; const key55 = levels.filter(x => x.type === 'KEY' || x.type === '5/5').map(x => x.price); const l35 = opts.include35 ? levels.filter(x => x.type === '3/5').map(x => x.price) : [];
    const near = (p) => key55.some(v => Math.abs(p - v) <= P.proxKey55 * tick) || l35.some(v => Math.abs(p - v) <= P.prox35 * tick);
    const out = []; const breaks = [];
    for (let i = 3; i < bars.length; i++) { const b = bars[i], b1 = bars[i - 1], b2 = bars[i - 2], b3 = bars[i - 3]; const rng = b.h - b.l, body = Math.abs(b.c - b.o), uw = b.h - Math.max(b.c, b.o), lw = Math.min(b.c, b.o) - b.l; const hi = [], lo = [];
      if (rng > 0 && uw > rng * P.rejWick / 100 && body < rng * P.rejBody / 100 && near(b.h)) hi.push('R');
      if (rng > 0 && lw > rng * P.bounceWick / 100 && body < rng * P.bounceBody / 100 && b.c > b.o && near(b.l)) lo.push('B');
      if (b1.h > b2.h && b1.h > b.h && near(b1.h)) out.push({i: i - 1, t: b1.t, side: 'high', price: b1.h, tags: ['P']});
      if (b1.l < b2.l && b1.l < b.l && near(b1.l)) out.push({i: i - 1, t: b1.t, side: 'low', price: b1.l, tags: ['P']});
      const pierce = P.sfpTicks * tick; key55.concat(l35).forEach(lp => { if (b.h > lp + pierce && b.c < lp && b.o < lp) hi.push('SFP'); if (b.l < lp - pierce && b.c > lp && b.o > lp) lo.push('SFP'); });
      key55.forEach(lp => { const minP = P.brkTicks * tick, minB = rng * P.brkBody / 100; if (b.o > lp && b.c < lp && lp - b.c >= minP && body >= minB) { hi.push('BRK'); breaks.push({lp, dir: -1, i, rt: false}); } if (b.o < lp && b.c > lp && b.c - lp >= minP && body >= minB) { lo.push('BRK'); breaks.push({lp, dir: 1, i, rt: false}); } });
      breaks.forEach(k => { if (k.rt || k.i >= i) return; const tol = Math.max(k.lp * 0.002, tick * 10); if (k.dir === -1 && b.h >= k.lp - tol && b.c < k.lp) { hi.push('RT'); k.rt = true; } if (k.dir === 1 && b.l <= k.lp + tol && b.c > k.lp) { lo.push('RT'); k.rt = true; } });
      const r1 = b1.h - b1.l, bd1 = Math.abs(b1.c - b1.o), pauseOk = r1 === 0 || bd1 <= r1 * P.pauseBody123 / 100; const r2 = b2.h - b2.l, lw2 = Math.min(b2.c, b2.o) - b2.l, uw2 = b2.h - Math.max(b2.c, b2.o);
      if (b2.h > b3.h && b2.h > b1.h && b1.h < b2.h && b.h < b1.h && pauseOk && b2.c < b2.o && (r2 === 0 || lw2 <= r2 * P.oneWick123 / 100) && near(b2.h)) hi.push('1-2-3');
      if (b2.l < b3.l && b2.l < b1.l && b1.l > b2.l && b.l > b1.l && pauseOk && b2.c > b2.o && (r2 === 0 || uw2 <= r2 * P.oneWick123 / 100) && near(b2.l)) lo.push('1-2-3');
      if (hi.length) out.push({i, t: b.t, side: 'high', price: b.h, tags: [...new Set(hi)]}); if (lo.length) out.push({i, t: b.t, side: 'low', price: b.l, tags: [...new Set(lo)]}); }
    return out;
  }

  function atrBands(levels, atr14, mult = P.atrBand) { return levels.map(x => ({price: x.price, type: x.type, lo: x.price - atr14 * mult, hi: x.price + atr14 * mult})); }

  Object.assign(A, {sessions, fvgs, patterns, atrBands, PARAMS: P});
})(typeof window !== 'undefined' ? window : globalThis);
