/* Regime engine — generic technical measures the terminal and the scanner share (twin of scripts/fortuna-terminal/regime.py).
 * Nothing proprietary lives here: ADX/DI (Wilder), EMA 20/50/200 alignment, the last impulse leg from 3-bar swings with its
 * Fibonacci ladder, and session range %. Strategy eligibility (which coaching-program card a read qualifies for) is computed
 * privately by the scanner from these numbers and is never part of this file.
 * Input candles: [{t,o,h,l,c}] oldest → newest, closed bars. Pure functions, no DOM.
 */
(function (root) {
  const rma = (vals, n) => { const out = new Array(vals.length).fill(NaN); let s = 0, k = 0; for (let i = 0; i < vals.length; i++) { const v = vals[i]; if (Number.isNaN(v)) continue; k++; if (k < n) { s += v; continue; } if (k === n) { s += v; out[i] = s / n; continue; } out[i] = (out[i - 1] * (n - 1) + v) / n; } return out; };
  const ema = (vals, n) => { const k = 2 / (n + 1); const out = []; let e = null; vals.forEach(v => { e = e == null ? v : v * k + e * (1 - k); out.push(e); }); return out; };
  const r = (x, d = 4) => x == null || Number.isNaN(x) ? null : +x.toFixed(d);

  function adx(cs, n = 14) {
    if (cs.length < n * 2 + 2) return {adx: null, diPlus: null, diMinus: null, adxPrev: null};
    const tr = [NaN], dmP = [NaN], dmM = [NaN];
    for (let i = 1; i < cs.length; i++) { const c = cs[i], p = cs[i - 1]; tr.push(Math.max(c.h - c.l, Math.abs(c.h - p.c), Math.abs(c.l - p.c))); const up = c.h - p.h, dn = p.l - c.l; dmP.push(up > dn && up > 0 ? up : 0); dmM.push(dn > up && dn > 0 ? dn : 0); }
    const atr = rma(tr, n), sP = rma(dmP, n), sM = rma(dmM, n); const dx = cs.map((_, i) => { const a = atr[i]; if (!a || Number.isNaN(a)) return NaN; const dp = sP[i] / a * 100, dm = sM[i] / a * 100; const s = dp + dm; return s ? Math.abs(dp - dm) / s * 100 : 0; });
    const ax = rma(dx, n); const i = cs.length - 1;
    return {adx: r(ax[i], 2), diPlus: r(sP[i] / atr[i] * 100, 2), diMinus: r(sM[i] / atr[i] * 100, 2), adxPrev: r(ax[i - 3], 2)};
  }

  function alignment(cs) {
    const c = cs.map(x => x.c); if (c.length < 60) return {label: '—', ema20: null, ema50: null, ema200: null, fanned: false};
    const e20 = ema(c, 20), e50 = ema(c, 50), e200 = c.length >= 200 ? ema(c, 200) : null; const i = c.length - 1; const p = c[i];
    const a = e20[i], b = e50[i], d = e200 ? e200[i] : null;
    const bull = d != null ? p > a && a > b && b > d : p > a && a > b, bear = d != null ? p < a && a < b && b < d : p < a && a < b;
    const minGap = p * 0.0005; const fanned = (bull || bear) && Math.abs(a - b) >= minGap && (d == null || Math.abs(b - d) >= minGap);
    return {label: bull ? 'bull' : bear ? 'bear' : 'mixed', ema20: r(a), ema50: r(b), ema200: r(d), fanned};
  }

  function swings(cs) {  // confirmed 3-bar pivots: bar i is a swing high if h[i] > h[i-1] and h[i] > h[i+1]
    const sh = [], sl = []; for (let i = 1; i < cs.length - 1; i++) { if (cs[i].h > cs[i - 1].h && cs[i].h > cs[i + 1].h) sh.push({i, t: cs[i].t, p: cs[i].h}); if (cs[i].l < cs[i - 1].l && cs[i].l < cs[i + 1].l) sl.push({i, t: cs[i].t, p: cs[i].l}); }
    return {sh, sl};
  }

  const RATIOS = [0.236, 0.382, 0.5, 0.618, 0.705, 0.786, 1.0];
  function impulse(cs) {  // the last leg between the two most recent opposite swings; fibs measured as a retrace of that leg
    const {sh, sl} = swings(cs); if (!sh.length || !sl.length) return null;
    const lastH = sh[sh.length - 1], lastL = sl[sl.length - 1]; const up = lastL.i < lastH.i;  // low came first → up-leg ending at the high
    const start = up ? lastL : lastH, end = up ? lastH : lastL; if (start.i === end.i) return null;
    const len = Math.abs(end.p - start.p); const price = cs[cs.length - 1].c; const retrace = len ? (up ? (end.p - price) : (price - end.p)) / len : 0;
    const fibs = {}; RATIOS.forEach(q => { fibs[String(q)] = r(up ? end.p - len * q : end.p + len * q); }); fibs['1.272'] = r(up ? end.p + len * 0.272 : end.p - len * 0.272); fibs['1.618'] = r(up ? end.p + len * 0.618 : end.p - len * 0.618);
    const nearest = RATIOS.reduce((b, q) => Math.abs(q - retrace) < Math.abs(b - retrace) ? q : b, RATIOS[0]);
    return {dir: up ? 'up' : 'down', start: r(start.p), end: r(end.p), startT: start.t, endT: end.t, len: r(len), retrace: r(retrace, 3), nearestFib: nearest, goldenPocket: retrace >= 0.618 && retrace <= 0.66, fibs};
  }

  function rangePct(cs, bars) { const w = cs.slice(-bars); if (!w.length) return null; const hi = Math.max(...w.map(c => c.h)), lo = Math.min(...w.map(c => c.l)); return r((hi - lo) / w[w.length - 1].c * 100, 3); }

  function regime(cs) {
    const a = adx(cs); if (a.adx == null) return {label: '—', ...a};
    const dir = a.diPlus > a.diMinus ? 'up' : 'down'; const rising = a.adxPrev != null && a.adx > a.adxPrev;
    const label = a.adx >= 25 ? (rising || a.adx >= 30 ? 'trending' : 'weakening') : a.adx < 20 ? 'ranging' : (rising ? 'building' : 'weakening');
    return {label, dir, rising, ...a};
  }

  function rsi(cs, n = 14) { const c = cs.map(x => x.c); if (c.length < n + 2) return []; const g = [NaN], l = [NaN]; for (let i = 1; i < c.length; i++) { const d = c[i] - c[i - 1]; g.push(Math.max(d, 0)); l.push(Math.max(-d, 0)); } const ag = rma(g, n), al = rma(l, n); return c.map((_, i) => (Number.isNaN(ag[i]) || Number.isNaN(al[i])) ? NaN : al[i] === 0 ? 100 : 100 - 100 / (1 + ag[i] / al[i])); }
  function rsiCloud(cs, n = 14, fast = 9, slow = 21) { const r = rsi(cs, n); if (!r.length) return null; const v = r.filter(x => !Number.isNaN(x)); if (v.length < slow + 1) return null; const ef = ema(v, fast), es = ema(v, slow); const i = v.length - 1; return {rsi: r2(v[i]), fast: r2(ef[i]), slow: r2(es[i]), above: v[i] > ef[i] && ef[i] > es[i], below: v[i] < ef[i] && ef[i] < es[i]}; }
  const r2 = (x) => r(x, 2);
  function dualAdx(cs, a = 14, b = 28, threshold = 20) { const x = adx(cs, a), y = adx(cs, b); return {fast: x.adx, slow: y.adx, lenFast: a, lenSlow: b, threshold, fastAbove: x.adx != null && x.adx >= threshold, slowAbove: y.adx != null && y.adx >= threshold, dir: x.diPlus != null ? (x.diPlus > x.diMinus ? 'up' : 'down') : null}; }
  function strengthVs(cs, ref, bars = 24) { if (!ref || cs.length < bars + 1 || ref.length < bars + 1) return null; const a = cs[cs.length - 1].c / cs[cs.length - 1 - bars].c - 1, b = ref[ref.length - 1].c / ref[ref.length - 1 - bars].c - 1; return {market: r(a * 100, 2), ref: r(b * 100, 2), diff: r((a - b) * 100, 2), bars}; }
  function mfi(cs, n = 14) { if (cs.length < n + 2) return []; const tp = cs.map(c => (c.h + c.l + c.c) / 3); const pos = [NaN], neg = [NaN]; for (let i = 1; i < cs.length; i++) { const f = tp[i] * (cs[i].v || 0); pos.push(tp[i] > tp[i - 1] ? f : 0); neg.push(tp[i] < tp[i - 1] ? f : 0); } const out = cs.map(() => NaN); for (let i = n; i < cs.length; i++) { let P = 0, N = 0; for (let k = i - n + 1; k <= i; k++) { P += pos[k] || 0; N += neg[k] || 0; } out[i] = N === 0 ? 100 : 100 - 100 / (1 + P / N); } return out; }
  function bollinger(cs, n = 20, k = 2) { const c = cs.map(x => x.c); const out = cs.map(() => null); for (let i = n - 1; i < c.length; i++) { const w = c.slice(i - n + 1, i + 1); const m = w.reduce((a, b) => a + b, 0) / n; const sd = Math.sqrt(w.reduce((a, b) => a + (b - m) ** 2, 0) / n); out[i] = {basis: m, upper: m + k * sd, lower: m - k * sd}; } return out; }
  /* OG-style oscillator: money flow (MFI) as the area around 50, RSI as the signal line, Bollinger bands on price; bands 20/50/80.
     The series are textbook; the *signal* events are Fortuna's own reading of a reversal (price outside a band while momentum turns back through its extreme) and are kept generic. */
  function og(cs, opts) { opts = Object.assign({mfiLen: 14, rsiLen: 14, bbLen: 20, bbK: 2, lo: 20, hi: 80}, opts || {}); const m = mfi(cs, opts.mfiLen), rs = rsi(cs, opts.rsiLen), bb = bollinger(cs, opts.bbLen, opts.bbK); const i = cs.length - 1; if (!m.length || !rs.length || !bb[i]) return null;
    const events = []; for (let j = 2; j < cs.length; j++) { if (!bb[j - 1] || Number.isNaN(rs[j]) || Number.isNaN(rs[j - 1])) continue; const up = rs[j - 1] < opts.lo && rs[j] >= opts.lo && cs[j - 1].l <= bb[j - 1].lower && (Number.isNaN(m[j]) || m[j] >= m[j - 1]); const dn = rs[j - 1] > opts.hi && rs[j] <= opts.hi && cs[j - 1].h >= bb[j - 1].upper && (Number.isNaN(m[j]) || m[j] <= m[j - 1]); if (up) events.push({i: j, t: cs[j].t, side: 'long'}); if (dn) events.push({i: j, t: cs[j].t, side: 'short'}); }
    const mf = m[i], mfPrev = m[i - 1]; const zone = mf >= 50 ? (mf >= mfPrev ? 'strong up' : 'weak up') : (mf <= mfPrev ? 'strong down' : 'weak down');
    return {mfi: r2(mf), mfiZone: zone, rsi: r2(rs[i]), bb: {basis: r(bb[i].basis), upper: r(bb[i].upper), lower: r(bb[i].lower)}, pricePos: cs[i].c > bb[i].upper ? 'above upper' : cs[i].c < bb[i].lower ? 'below lower' : 'inside', last: events[events.length - 1] || null, events: events.slice(-12), series: {mfi: m, rsi: rs, bb}}; }
  function read(cs, opts) { opts = opts || {}; const o = og(cs); if (o) delete o.series; return {regime: regime(cs), align: alignment(cs), impulse: impulse(cs), rangePct: rangePct(cs, opts.rangeBars || 24), rsi: rsiCloud(cs), adx2: dualAdx(cs), strength: opts.ref ? strengthVs(cs, opts.ref, opts.strengthBars || 24) : null, og: o}; }

  root.Regime = {adx, alignment, impulse, rangePct, regime, read, swings, rsi, rsiCloud, dualAdx, strengthVs, mfi, bollinger, og, RATIOS};
})(typeof window !== 'undefined' ? window : globalThis);
