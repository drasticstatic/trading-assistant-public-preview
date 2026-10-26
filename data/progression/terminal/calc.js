/* Position and ladder calculators — generic sizing math shared by the terminal and the order planner (twin: scripts/fortuna-terminal/calc.py).
 * position(): entry, stop, optional target, risk (dollars or % of equity) → quantity, notional, leverage, margin, estimated liquidation, R, warnings.
 * ladder():   an entry plus up to N limit legs (each a price and a size multiple of the entry quantity), one stop, one or two targets →
 *             per-leg quantity, cumulative quantity and average cost after each fill, risk and margin at each stage, the R to target at each stage.
 * The legs, multiples and targets are inputs. Any coaching program's default ladder lives outside this file.
 */
(function (root) {
  const r = (x, d = 4) => (x == null || !isFinite(x)) ? null : +x.toFixed(d);

  function position(o) {
    const E = +o.equity || 0, e = +o.entry, s = +o.stop, t = o.target != null && o.target !== '' ? +o.target : null; const mmr = o.mmr ?? 0.15; const maxLev = +o.maxLev || 1; const liqMult = o.liqMult ?? 3;
    const out = {warnings: []}; if (!(e > 0 && s > 0 && e !== s)) { out.warnings.push('entry and stop are needed'); return out; }
    const riskUsd = o.riskUsd != null && o.riskUsd !== '' ? +o.riskUsd : E * (+o.riskPct || 0) / 100; if (!(riskUsd > 0)) { out.warnings.push('risk is zero'); return out; }
    const long = s < e; const dist = Math.abs(e - s), distPct = dist / e; const qty = riskUsd / dist, notional = qty * e;
    const levFor3x = (1 - mmr) / (liqMult * distPct); const lev = Math.max(1, Math.min(maxLev, levFor3x)); const margin = notional / lev; const liqDistPct = (1 - mmr) / lev; const liq = long ? e * (1 - liqDistPct) : e * (1 + liqDistPct);
    const rr = t != null && t > 0 ? Math.abs(t - e) / dist : null;
    Object.assign(out, {side: long ? 'long' : 'short', riskUsd: r(riskUsd, 2), dist: r(dist), distPct: r(distPct * 100, 3), qty: r(qty, 6), notional: r(notional, 2), leverage: r(lev, 2), margin: r(margin, 2), liq: r(liq), liqDistPct: r(liqDistPct * 100, 2), rr: r(rr, 2), reward: rr != null ? r(riskUsd * rr, 2) : null});
    if (E && margin > E) out.warnings.push('margin exceeds equity');
    if (E && margin > E * 0.5) out.warnings.push('margin above half the equity');
    if (liqDistPct < liqMult * distPct) out.warnings.push(`liquidation closer than ${liqMult}× the stop even at 1×`);
    if (long ? liq >= s : liq <= s) out.warnings.push('liquidation inside the stop');
    if (levFor3x < maxLev) out.leverageNote = `capped at ${r(levFor3x, 1)}× so the liquidation sits ${liqMult}× the stop away`;
    return out;
  }

  /* legs: [{price, mult}] in fill order; mult is the size multiple of the entry quantity (entry itself is 1×). */
  function ladder(o) {
    const e = +o.entry, s = +o.stop, legs = (o.legs || []).filter(l => l && +l.price > 0).map(l => ({price: +l.price, mult: +l.mult || 1}));
    const out = {warnings: [], stages: []}; if (!(e > 0 && s > 0 && e !== s)) { out.warnings.push('entry and stop are needed'); return out; }
    const long = s < e; const E = +o.equity || 0; const riskUsd = o.riskUsd != null && o.riskUsd !== '' ? +o.riskUsd : E * (+o.riskPct || 0) / 100; const fee = (o.feeBps || 0) / 1e4; const lev = +o.leverage || 1;
    const stops = [{price: e, mult: 1}].concat(legs); // all legs in fill order
    // size the ENTRY so that the full ladder, if every leg fills and the stop hits, loses exactly riskUsd
    const unitLossFull = stops.reduce((sum, l) => sum + l.mult * Math.abs(l.price - s), 0); const unitFeesFull = stops.reduce((sum, l) => sum + l.mult * l.price, 0) * fee * 2;
    const q1 = riskUsd / (unitLossFull + unitFeesFull); if (!(q1 > 0)) { out.warnings.push('risk is zero'); return out; }
    let cumQty = 0, cumCost = 0; const tp = o.tp != null && o.tp !== '' ? +o.tp : null, tp2 = o.tp2 != null && o.tp2 !== '' ? +o.tp2 : null;
    stops.forEach((l, i) => { const q = q1 * l.mult; cumQty += q; cumCost += q * l.price; const avg = cumCost / cumQty; const riskHere = cumQty * Math.abs(avg - s); const notional = cumCost; const margin = notional / lev; const rrTp = tp != null ? (long ? tp - avg : avg - tp) / Math.abs(avg - s) : null; const rrTp2 = tp2 != null ? (long ? tp2 - avg : avg - tp2) / Math.abs(avg - s) : null;
      const stage = {leg: i === 0 ? 'entry' : 'limit ' + i, price: r(l.price), mult: l.mult, qty: r(q, 6), cumQty: r(cumQty, 6), avg: r(avg), riskUsd: r(riskHere, 2), riskPctOfEquity: E ? r(riskHere / E * 100, 2) : null, notional: r(notional, 2), margin: r(margin, 2), marginPctOfEquity: E ? r(margin / E * 100, 1) : null, rrToTp: r(rrTp, 2), rrToTp2: r(rrTp2, 2), pnlAtTp: tp != null ? r(cumQty * (long ? tp - avg : avg - tp), 2) : null};
      if (E && margin > E) stage.warning = 'margin exceeds equity'; out.stages.push(stage); });
    const last = out.stages[out.stages.length - 1];
    Object.assign(out, {side: long ? 'long' : 'short', entryQty: r(q1, 6), totalQty: last.cumQty, fullRiskUsd: r(riskUsd, 2), fullMargin: last.margin, fullMarginPct: last.marginPctOfEquity, avgFull: last.avg});
    if (E && last.margin > E) out.warnings.push('full ladder margin exceeds equity: reduce risk or raise leverage');
    if (legs.some(l => long ? l.price >= e : l.price <= e)) out.warnings.push('a limit leg sits on the wrong side of the entry');
    if (legs.some(l => long ? l.price <= s : l.price >= s)) out.warnings.push('a limit leg sits beyond the stop');
    if (o.rangePct != null && o.rangeFloorPct != null && +o.rangePct < +o.rangeFloorPct) out.warnings.push('range below the floor for a ladder');
    return out;
  }

  /* helper: prices from a Fibonacci ratio of a leg (start → end), e.g. fibPrice(lo, hi, 0.382, 'up') for a retrace in an up-leg */
  function fibPrice(start, end, ratio, dir) { const len = Math.abs(end - start); return dir === 'up' ? end - len * ratio : end + len * ratio; }

  root.Calc = {position, ladder, fibPrice};
})(typeof window !== 'undefined' ? window : globalThis);
