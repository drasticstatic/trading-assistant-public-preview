/* TradingView Lightweight Charts engine for the Fortuna Terminal — the second chart engine beside the hand-rolled SVG one.
 * Renders the same candles and overlays (EMAs, zones, positions, Auto Levels, fib ladder, session rails, FVGs, pattern marks, volume + profile)
 * through TradingView's open-source renderer (Apache-2.0, vendored in vendor/). Zones, FVGs and the volume profile are drawn as series
 * primitives, the same mechanism Lewis Jackson's quant-terminal uses for its drawings. The engine is a thin adapter: the page owns the data.
 */
(function (root) {
  const LW = root.LightweightCharts; if (!LW) return;
  const NY = 'America/New_York';
  const fmtT = (t, iv) => { const d = new Date(t * 1000); return d.toLocaleString('en-US', {timeZone: NY, month: 'short', day: 'numeric', ...(iv === '1d' ? {} : {hour: 'numeric', minute: '2-digit'})}); };

  /* generic rectangle-and-line primitive: draws boxes [{t0,t1,p0,p1,fill,stroke,dash,label}] and horizontal rays [{t0,price,color,width,dash,label,labelPos}] */
  class Boxes {
    constructor() { this.items = {boxes: [], rays: [], marks: []}; this._view = {zOrder: () => 'bottom', renderer: () => ({draw: (target) => target.useMediaCoordinateSpace(({context, mediaSize}) => this.draw(context, mediaSize))})}; this._top = {zOrder: () => 'top', renderer: () => ({draw: (target) => target.useMediaCoordinateSpace(({context, mediaSize}) => this.drawTop(context, mediaSize))})}; }
    attached({chart, series, requestUpdate}) { this.chart = chart; this.series = series; this.requestUpdate = requestUpdate; }
    detached() { this.series = null; }
    updateAllViews() {}
    paneViews() { return [this._view, this._top]; }
    set(items) { this.items = Object.assign({boxes: [], rays: [], marks: []}, items); if (this.requestUpdate) this.requestUpdate(); }
    x(t) { const v = this.chart.timeScale().timeToCoordinate(t); return v == null ? null : v; }
    y(p) { const v = this.series.priceToCoordinate(p); return v == null ? null : v; }
    draw(ctx, size) {
      const ts = this.chart.timeScale(); const W = size.width;
      this.items.boxes.forEach(b => { const y0 = this.y(b.p0), y1 = this.y(b.p1); if (y0 == null || y1 == null) return; let x0 = b.t0 != null ? this.x(b.t0) : 0, x1 = b.t1 != null ? this.x(b.t1) : W; if (x0 == null) x0 = 0; if (x1 == null) x1 = W; ctx.fillStyle = b.fill; ctx.fillRect(x0, Math.min(y0, y1), Math.max(2, x1 - x0), Math.max(1, Math.abs(y1 - y0))); if (b.stroke) { ctx.strokeStyle = b.stroke; ctx.setLineDash(b.dash || []); ctx.lineWidth = 1; ctx.strokeRect(x0, Math.min(y0, y1), Math.max(2, x1 - x0), Math.max(1, Math.abs(y1 - y0))); ctx.setLineDash([]); } if (b.label) { ctx.fillStyle = b.stroke || b.fill; ctx.font = '10px JetBrains Mono, monospace'; ctx.fillText(b.label, x0 + 4, Math.min(y0, y1) - 3); } });
      this.items.rays.forEach(r => { const y = this.y(r.price); if (y == null) return; let x0 = r.t0 != null ? this.x(r.t0) : 0; if (x0 == null) x0 = 0; ctx.strokeStyle = r.color; ctx.lineWidth = r.width || 1; ctx.globalAlpha = r.alpha ?? 1; ctx.setLineDash(r.dash || []); ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(W, y); ctx.stroke(); ctx.setLineDash([]); if (r.label) { ctx.fillStyle = r.color; ctx.font = (r.bold ? '700 ' : '') + '9.5px JetBrains Mono, monospace'; ctx.textAlign = r.labelPos === 'right' ? 'right' : 'left'; ctx.fillText(r.label, r.labelPos === 'right' ? W - 4 : x0 + 4, y - 3); ctx.textAlign = 'left'; } ctx.globalAlpha = 1; });
    }
    drawTop(ctx, size) { this.items.marks.forEach(m => { const x = this.x(m.t), y = this.y(m.price); if (x == null || y == null) return; ctx.fillStyle = m.color; ctx.font = '700 9.5px JetBrains Mono, monospace'; ctx.textAlign = 'center'; ctx.fillText(m.text, x, m.side === 'high' ? y - 6 : y + 13); ctx.textAlign = 'left'; }); }
  }

  /* visible-range volume profile along the right edge, POC highlighted (24 rows) */
  class Profile {
    constructor() { this.bars = []; this.on = true; this._view = {zOrder: () => 'bottom', renderer: () => ({draw: (target) => target.useMediaCoordinateSpace(({context, mediaSize}) => this.draw(context, mediaSize))})}; }
    attached({chart, series, requestUpdate}) { this.chart = chart; this.series = series; this.requestUpdate = requestUpdate; }
    detached() {} updateAllViews() {} paneViews() { return [this._view]; }
    set(bars, on) { this.bars = bars; this.on = on; if (this.requestUpdate) this.requestUpdate(); }
    draw(ctx, size) { if (!this.on || !this.bars.length) return; const r = this.chart.timeScale().getVisibleLogicalRange(); if (!r) return; const from = Math.max(0, Math.floor(r.from)), to = Math.min(this.bars.length - 1, Math.ceil(r.to)); const vis = this.bars.slice(from, to + 1); if (!vis.length || !vis.some(b => b.v > 0)) return;
      const lo = Math.min(...vis.map(b => b.l)), hi = Math.max(...vis.map(b => b.h)); const B = 24, bins = new Array(B).fill(0); vis.forEach(b => { const k = Math.max(0, Math.min(B - 1, Math.floor((b.c - lo) / (hi - lo || 1) * B))); bins[k] += b.v || 0; }); const bmax = Math.max(...bins) || 1; const poc = bins.indexOf(bmax); const W = size.width;
      bins.forEach((v, k) => { const p0 = lo + (hi - lo) * k / B, p1 = lo + (hi - lo) * (k + 1) / B; const y0 = this.series.priceToCoordinate(p1), y1 = this.series.priceToCoordinate(p0); if (y0 == null || y1 == null) return; const w = v / bmax * W * .16; ctx.fillStyle = k === poc ? 'rgba(251,191,36,.45)' : 'rgba(129,140,248,.18)'; ctx.fillRect(W - w, y0, w, Math.max(1, y1 - y0 - 1)); }); }
  }

  function create(el, iv) {
    const chart = LW.createChart(el, {autoSize: true, layout: {background: {type: 'solid', color: 'transparent'}, textColor: '#8b93a7', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, attributionLogo: false}, grid: {vertLines: {color: 'rgba(255,255,255,.04)'}, horzLines: {color: 'rgba(255,255,255,.05)'}}, crosshair: {mode: LW.CrosshairMode.Normal}, rightPriceScale: {borderColor: 'rgba(255,255,255,.08)', scaleMargins: {top: .08, bottom: .22}}, timeScale: {borderColor: 'rgba(255,255,255,.08)', timeVisible: true, secondsVisible: false, rightOffset: 8}, localization: {timeFormatter: (t) => fmtT(t, iv)}});
    const main = chart.addSeries(LW.CandlestickSeries, {upColor: '#4ade80', downColor: '#f87171', borderVisible: false, wickUpColor: '#4ade80', wickDownColor: '#f87171', priceLineColor: '#22d3ee', priceLineWidth: 1});
    const vol = chart.addSeries(LW.HistogramSeries, {priceFormat: {type: 'volume'}, priceScaleId: 'vol', lastValueVisible: false, priceLineVisible: false}); chart.priceScale('vol').applyOptions({scaleMargins: {top: .84, bottom: 0}});
    const emas = ['#22d3ee', '#a78bfa', '#f472b6'].map(c => chart.addSeries(LW.LineSeries, {color: c, lineWidth: 1, priceLineVisible: false, lastValueVisible: false, crosshairMarkerVisible: false}));
    const boxes = new Boxes(); main.attachPrimitive(boxes); const profile = new Profile(); main.attachPrimitive(profile);
    const lines = []; let lineMode = false, lineSeries = null;
    const api = {chart, main, vol, emas, boxes, profile,
      setBars(bars, mode) { const pts = bars.map(b => ({time: b.t / 1000, open: b.o, high: b.h, low: b.l, close: b.c})); if (mode === 'line') { if (!lineSeries) lineSeries = chart.addSeries(LW.AreaSeries, {lineColor: '#22d3ee', topColor: 'rgba(34,211,238,.25)', bottomColor: 'rgba(34,211,238,0)', lineWidth: 2, priceLineVisible: false}); lineSeries.setData(bars.map(b => ({time: b.t / 1000, value: b.c}))); lineSeries.applyOptions({visible: true}); main.applyOptions({visible: false}); } else { if (lineSeries) lineSeries.applyOptions({visible: false}); main.applyOptions({visible: true}); } main.setData(pts); vol.setData(bars.map(b => ({time: b.t / 1000, value: b.v || 0, color: b.c >= b.o ? 'rgba(74,222,128,.35)' : 'rgba(248,113,113,.35)'}))); profile.set(bars, true); },
      setEMAs(arrs, bars) { arrs.forEach((a, k) => emas[k].setData(a ? a.map((v, i) => ({time: bars[i].t / 1000, value: v})).filter(p => isFinite(p.value)) : [])); },
      clearLines() { lines.splice(0).forEach(l => { try { main.removePriceLine(l); } catch (e) {} }); },
      priceLine(price, color, title, style, width) { const l = main.createPriceLine({price, color, lineWidth: width || 1, lineStyle: style ?? LW.LineStyle.Dashed, axisLabelVisible: true, title: title || ''}); lines.push(l); return l; },
      setOverlays(items) { boxes.set(items); },
      setVolume(on) { vol.applyOptions({visible: on}); profile.on = on; if (profile.requestUpdate) profile.requestUpdate(); },
      fit() { chart.timeScale().fitContent(); }, scrollToEnd() { chart.timeScale().scrollToRealTime(); },
      onCrosshair(fn) { chart.subscribeCrosshairMove(p => { if (!p || !p.time) return fn(null); const d = p.seriesData.get(main); fn(d ? {t: p.time * 1000, o: d.open, h: d.high, l: d.low, c: d.close} : null); }); },
      setInterval(ivv) { chart.applyOptions({localization: {timeFormatter: (t) => fmtT(t, ivv)}}); },
      destroy() { chart.remove(); }};
    return api;
  }
  root.LWEngine = {create, LineStyle: LW.LineStyle};
})(typeof window !== 'undefined' ? window : globalThis);
