// 計算器、互動圖、搜尋與深淺色切換。公式與常數皆取自 wiki 對應頁面（AGENTS.md 第七節）。
(function () {
  'use strict';
  var ROOT = (document.currentScript && document.currentScript.src || '').replace(/assets\/app\.js.*$/, '');
  var slug = function (k) { return k.replace(/%/g, '-pct').replace(/\+/g, '-plus'); };
  var page = function (m) { return ROOT + 'p/metrics/' + slug(m) + '.html'; };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  // ---------- theme ----------
  var tb = document.querySelector('.theme-toggle');
  if (tb) tb.addEventListener('click', function () {
    var cur = document.documentElement.dataset.theme ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    store.set('theme', next);
  });

  // ---------- search filter ----------
  document.querySelectorAll('input[data-filter]').forEach(function (inp) {
    var scope = document.querySelector(inp.dataset.filter);
    var empty = scope && scope.parentElement.querySelector('.empty');
    inp.addEventListener('input', function () {
      var q = inp.value.trim().toLowerCase(), shown = 0;
      scope.querySelectorAll('.card').forEach(function (c) {
        var ok = !q || c.dataset.search.indexOf(q) >= 0;
        c.hidden = !ok; if (ok) shown++;
      });
      scope.querySelectorAll('.group').forEach(function (g) {
        g.hidden = !g.querySelector('.card:not([hidden])');
      });
      if (empty) empty.hidden = shown > 0;
    });
  });

  // ---------- helpers ----------
  var TIER = ['頂尖', '優秀', '高於平均', '平均', '低於平均', '欠佳', '極差'];
  function tierOf(v, t, lower) {
    if (!t || !isFinite(v)) return '';
    for (var i = 0; i < t.length; i++) if (lower ? v <= t[i] : v >= t[i]) return '<span class="tier t' + i + '">' + TIER[i] + '</span>';
    return '<span class="tier t6">' + TIER[6] + '</span>';
  }
  function fmt(v, kind) {
    if (!isFinite(v)) return '—';
    if (kind === 'avg') return (v < 1 && v >= 0 ? v.toFixed(3).replace(/^0/, '') : v.toFixed(3));
    if (kind === 'pct') return (v * 100).toFixed(1) + '%';
    if (kind === 'int') return v.toFixed(1);
    return v.toFixed(2);
  }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d; }
  function num(form, name) { var i = form.querySelector('[name="' + name + '"]'); var v = parseFloat(i && i.value); return isFinite(v) ? v : NaN; }
  function ipToOuts(s) {
    var v = String(s).trim(); if (!v) return NaN;
    var m = v.match(/^(\d+)(?:\.(\d))?$/); if (!m) return NaN;
    var f = +(m[2] || 0); if (f > 2) return NaN;
    return (+m[1]) * 3 + f;
  }
  function inputs(fields) {
    return '<div class="calc-inputs">' + fields.map(function (f) {
      return '<label>' + f[1] + '<input name="' + f[0] + '" inputmode="decimal" value="' + (f[2] === undefined ? '' : f[2]) + '"' + (f[3] ? ' placeholder="' + f[3] + '"' : '') + '></label>';
    }).join('') + '</div>';
  }
  function resultTable(rows, focus) {
    return '<div class="table-wrap results"><table><thead><tr><th>指標</th><th>數值</th><th>判讀</th><th>公式</th></tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr' + (r.key === focus ? ' class="focus"' : '') + '><td><a href="' + page(r.key) + '">' + r.name + '</a></td><td class="val">' + r.val + '</td><td>' + (r.tier || '<span class="muted">—</span>') + '</td><td class="muted">' + r.f + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  function persist(form, id) {
    var saved = store.get('calc:' + id);
    if (saved) try { var o = JSON.parse(saved); Object.keys(o).forEach(function (k) { var i = form.querySelector('[name="' + k + '"]'); if (i) i.value = o[k]; }); } catch (e) { /* ignore */ }
    return function () {
      var o = {}; form.querySelectorAll('input[name]').forEach(function (i) { o[i.name] = i.value; });
      store.set('calc:' + id, JSON.stringify(o));
    };
  }
  function resetBtn(form, fields, cb) {
    return function () { fields.forEach(function (f) { var i = form.querySelector('[name="' + f[0] + '"]'); if (i) i.value = f[2] === undefined ? '' : f[2]; }); cb(); };
  }

  // ---------- hitter calculator ----------
  var H_FIELDS = [['AB', '打數 AB', 550], ['H', '安打 H', 160], ['2B', '二壘安打 2B', 32], ['3B', '三壘安打 3B', 3], ['HR', '全壘打 HR', 28],
    ['BB', '保送 BB（含故意）', 70], ['IBB', '故意保送 IBB', 5], ['HBP', '觸身球 HBP', 6], ['SF', '高飛犧牲打 SF', 5], ['SO', '三振 SO', 120], ['PA', '打席 PA（選填）', '', '自動估算']];
  var H_CONST = [['wBB', 'uBB 權重', 0.690], ['wHBP', 'HBP 權重', 0.722], ['w1B', '1B 權重', 0.888], ['w2B', '2B 權重', 1.271], ['w3B', '3B 權重', 1.616], ['wHR', 'HR 權重', 2.101],
    ['lgwOBA', '聯盟 wOBA', 0.320], ['scale', 'wOBA Scale', 1.251]];
  function hitter(box, focus) {
    var form = el('<form autocomplete="off">' + inputs(H_FIELDS) +
      '<div class="calc-actions"><button type="button" class="btn reset">恢復範例數據</button><button type="button" class="btn clear">清空</button></div>' +
      '<details class="consts"><summary>進階：wOBA 權重與聯盟常數（可修改）</summary>' + inputs(H_CONST) +
      '<p>預設 wOBA 權重為 <a href="' + page('wOBA') + '">wOBA 頁</a>的 2013 年權重；聯盟 wOBA .320 取自同頁平均值；wOBA Scale 1.251 取自 <a href="' + ROOT + 'p/principles/Linear-Weights.html">線性權重</a>頁的推導範例。權重每年不同，計算其他球季請自行替換。</p></details>' +
      '<div class="out"></div></form>').firstChild;
    box.appendChild(form);
    var save = persist(form, 'hitter');
    function calc() {
      var g = function (n) { return num(form, n); };
      var AB = g('AB'), H = g('H'), D = g('2B') || 0, T = g('3B') || 0, HR = g('HR') || 0, BB = g('BB') || 0, IBB = g('IBB') || 0, HBP = g('HBP') || 0, SF = g('SF') || 0, SO = g('SO') || 0;
      var PA = g('PA'); var paNote = '';
      if (!isFinite(PA)) { PA = AB + BB + HBP + SF; paNote = '（PA 未填，以 AB+BB+HBP+SF 估算，未含犧牲觸擊）'; }
      var S = H - D - T - HR, TB = S + 2 * D + 3 * T + 4 * HR;
      var AVG = H / AB, OBP = (H + BB + HBP) / (AB + BB + HBP + SF), SLG = TB / AB, ISO = SLG - AVG;
      var BABIP = (H - HR) / (AB - SO - HR + SF);
      var uBB = BB - IBB;
      var wOBA = (g('wBB') * uBB + g('wHBP') * HBP + g('w1B') * S + g('w2B') * D + g('w3B') * T + g('wHR') * HR) / (AB + BB - IBB + SF + HBP);
      var wRAA = (wOBA - g('lgwOBA')) / g('scale') * PA;
      var bad = !(AB > 0) || S < 0;
      var rows = bad ? [] : [
        { key: 'AVG', name: 'AVG', val: fmt(AVG, 'avg'), f: 'H / AB' },
        { key: 'OBP', name: 'OBP', val: fmt(OBP, 'avg'), tier: tierOf(OBP, [.390, .370, .340, .320, .310, .300, .290]), f: '(H+BB+HBP) / (AB+BB+HBP+SF)' },
        { key: 'SLG', name: 'SLG', val: fmt(SLG, 'avg'), f: '總壘打 / AB' },
        { key: 'ISO', name: 'ISO', val: fmt(ISO, 'avg'), tier: tierOf(ISO, [.250, .200, .170, .140, .120, .100, .080]), f: 'SLG − AVG' },
        { key: 'OPS', name: 'OPS', val: fmt(OBP + SLG, 'avg'), tier: tierOf(OBP + SLG, [1.0, .9, .8, .71, .67, .6, .57]), f: 'OBP + SLG' },
        { key: 'BABIP', name: 'BABIP', val: fmt(BABIP, 'avg'), tier: isFinite(BABIP) ? '<span class="muted">聯盟平均約 .300</span>' : '', f: '(H−HR) / (AB−SO−HR+SF)' },
        { key: 'BB%', name: 'BB%', val: fmt(BB / PA, 'pct'), tier: tierOf(BB / PA * 100, [15, 12.5, 10, 8, 7, 5.5, 4]), f: 'BB / PA' },
        { key: 'K%', name: 'K%', val: fmt(SO / PA, 'pct'), tier: tierOf(SO / PA * 100, [10, 12.5, 16, 20, 22, 25, 27.5], true), f: 'SO / PA（越低越好）' },
        { key: 'BB-K', name: 'BB/K', val: fmt(BB / SO), f: 'BB / SO' },
        { key: 'wOBA', name: 'wOBA', val: fmt(wOBA, 'avg'), tier: tierOf(wOBA, [.400, .370, .340, .320, .310, .300, .290]), f: '加權事件 / (AB+BB−IBB+SF+HBP)' },
        { key: 'wRAA', name: 'wRAA', val: fmt(wRAA, 'int'), tier: tierOf(wRAA, [40, 20, 10, 0, -5, -10, -20]), f: '(wOBA − lgwOBA) / Scale × PA' }
      ];
      form.querySelector('.out').innerHTML = bad
        ? '<p class="muted">請至少輸入打數與安打，且一壘安打數（H − 2B − 3B − HR）不可為負。</p>'
        : resultTable(rows, focus) + '<p class="muted">PA = ' + PA + paNote + '。判讀區間取自各指標頁的 FanGraphs 參考表，實際聯盟平均逐年浮動。</p>';
      save();
    }
    form.addEventListener('input', calc);
    form.querySelector('.reset').addEventListener('click', resetBtn(form, H_FIELDS.concat(H_CONST), calc));
    form.querySelector('.clear').addEventListener('click', function () { H_FIELDS.forEach(function (f) { form.querySelector('[name="' + f[0] + '"]').value = ''; }); calc(); });
    calc();
  }

  // ---------- pitcher calculator ----------
  var P_FIELDS = [['IP', '局數 IP（180.2 = 180⅔）', '180.2'], ['BF', '面對打者 BF（選填）', 750], ['H', '被安打 H', 160], ['R', '失分 R', 75], ['ER', '自責分 ER', 70],
    ['HR', '被全壘打 HR', 20], ['BB', '保送 BB', 50], ['HBP', '觸身球 HBP', 6], ['SO', '三振 SO', 190], ['FB', '被飛球 FB（選填，xFIP 用）', 200]];
  var P_CONST = [['cFIP', 'FIP 常數', 3.10], ['lgHRFB', '聯盟 HR/FB（%）', 9.5]];
  function pitcher(box, focus) {
    var form = el('<form autocomplete="off">' + inputs(P_FIELDS) +
      '<div class="calc-actions"><button type="button" class="btn reset">恢復範例數據</button><button type="button" class="btn clear">清空</button></div>' +
      '<details class="consts"><summary>進階：FIP 常數與聯盟 HR/FB（可修改）</summary>' + inputs(P_CONST) +
      '<p>FIP 常數約 3.10（逐年變動，見 <a href="' + page('FIP') + '">FIP 頁</a>）；聯盟 HR/FB 約 9.5%（見 <a href="' + page('HR-FB') + '">HR/FB 頁</a>，<a href="' + page('xFIP') + '">xFIP 頁</a>記為 9–10%）。</p></details>' +
      '<div class="out"></div></form>').firstChild;
    box.appendChild(form);
    var save = persist(form, 'pitcher');
    function calc() {
      var g = function (n) { return num(form, n); };
      var outs = ipToOuts(form.querySelector('[name=IP]').value), IP = outs / 3;
      var BF = g('BF'), H = g('H') || 0, R = g('R'), ER = g('ER'), HR = g('HR') || 0, BB = g('BB') || 0, HBP = g('HBP') || 0, SO = g('SO') || 0, FB = g('FB');
      var c = g('cFIP'), hrfb = g('lgHRFB') / 100;
      var out = form.querySelector('.out');
      if (!(IP > 0)) { out.innerHTML = '<p class="muted">請輸入局數（例如 180.2 代表 180⅔ 局；小數點後只能是 0、1、2）。</p>'; save(); return; }
      var FIP = (13 * HR + 3 * (BB + HBP) - 2 * SO) / IP + c;
      var xFIP = (13 * FB * hrfb + 3 * (BB + HBP) - 2 * SO) / IP + c;
      var LOB = (H + BB + HBP - R) / (H + BB + HBP - 1.4 * HR);
      var rows = [
        { key: 'ERA', name: 'ERA', val: fmt(ER * 9 / IP), tier: tierOf(ER * 9 / IP, [2.5, 3.0, 3.4, 3.75, 4.0, 4.3, 4.6], true), f: 'ER × 9 / IP' },
        { key: 'FIP', name: 'FIP', val: fmt(FIP), tier: tierOf(FIP, [3.2, 3.5, 3.8, 4.2, 4.4, 4.7, 5.0], true), f: '(13HR + 3(BB+HBP) − 2K) / IP + 常數' },
        { key: 'xFIP', name: 'xFIP', val: isFinite(FB) ? fmt(xFIP) : '—', tier: isFinite(FB) ? tierOf(xFIP, [2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7], true) : '<span class="muted">需填被飛球數</span>', f: 'HR 換成 FB × lgHR/FB' },
        { key: 'WHIP', name: 'WHIP', val: fmt((BB + H) / IP), tier: tierOf((BB + H) / IP, [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6], true), f: '(BB + H) / IP' },
        { key: 'K-9', name: 'K/9', val: fmt(SO * 9 / IP), tier: tierOf(SO * 9 / IP, [10, 9, 8.2, 7.7, 7, 6, 5]), f: 'K × 9 / IP（先發參考）' },
        { key: 'BB-9', name: 'BB/9', val: fmt(BB * 9 / IP), tier: tierOf(BB * 9 / IP, [1.5, 1.9, 2.5, 2.9, 3.2, 3.5, 4.0], true), f: 'BB × 9 / IP（先發參考）' },
        { key: 'K%', name: 'K%', val: isFinite(BF) ? fmt(SO / BF, 'pct') : '—', tier: isFinite(BF) ? tierOf(SO / BF * 100, [27, 24, 22, 20, 17, 15, 13]) : '<span class="muted">需填 BF</span>', f: 'SO / BF' },
        { key: 'BB%', name: 'BB%', val: isFinite(BF) ? fmt(BB / BF, 'pct') : '—', tier: isFinite(BF) ? tierOf(BB / BF * 100, [4.5, 5.5, 6.5, 7.7, 8, 8.5, 9], true) : '<span class="muted">需填 BF</span>', f: 'BB / BF（越低越好）' },
        { key: 'LOB%', name: 'LOB%', val: isFinite(R) ? fmt(LOB, 'pct') : '—', tier: isFinite(R) ? tierOf(LOB * 100, [80, 78, 75, 72, 70, 65, 60]) : '<span class="muted">需填失分</span>', f: '(H+BB+HBP−R) / (H+BB+HBP−1.4HR)' }
      ];
      out.innerHTML = resultTable(rows, focus) + '<p class="muted">IP = ' + IP.toFixed(2) + ' 局。LOB% 偏離 70–72% 多半反映運氣，未來容易回歸（見 LOB% 頁）。</p>';
      save();
    }
    form.addEventListener('input', calc);
    form.querySelector('.reset').addEventListener('click', resetBtn(form, P_FIELDS.concat(P_CONST), calc));
    form.querySelector('.clear').addEventListener('click', function () { P_FIELDS.forEach(function (f) { form.querySelector('[name="' + f[0] + '"]').value = ''; }); calc(); });
    calc();
  }

  // ---------- generic SVG plot ----------
  var NS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(e);
    return e;
  }
  function plot(opt) {
    var W = 640, Hh = 420, m = { l: 48, r: 16, t: 14, b: 40 };
    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + Hh, role: 'img', 'aria-label': opt.label });
    var X = function (v) { return m.l + (v - opt.x[0]) / (opt.x[1] - opt.x[0]) * (W - m.l - m.r); };
    var Y = function (v) { return Hh - m.b - (v - opt.y[0]) / (opt.y[1] - opt.y[0]) * (Hh - m.t - m.b); };
    var Xi = function (px) { return opt.x[0] + (px - m.l) / (W - m.l - m.r) * (opt.x[1] - opt.x[0]); };
    var Yi = function (py) { return opt.y[0] + (Hh - m.b - py) / (Hh - m.t - m.b) * (opt.y[1] - opt.y[0]); };
    var layers = svgEl('g', {}, svg);
    var axes = svgEl('g', {}, svg);
    opt.xt.forEach(function (v) {
      svgEl('line', { x1: X(v), x2: X(v), y1: m.t, y2: Hh - m.b, 'class': 'grid-line' }, axes);
      svgEl('text', { x: X(v), y: Hh - m.b + 16, 'text-anchor': 'middle' }, axes).textContent = v;
    });
    opt.yt.forEach(function (v) {
      svgEl('line', { x1: m.l, x2: W - m.r, y1: Y(v), y2: Y(v), 'class': 'grid-line' }, axes);
      svgEl('text', { x: m.l - 6, y: Y(v) + 4, 'text-anchor': 'end' }, axes).textContent = v + (opt.yUnit || '');
    });
    svgEl('rect', { x: m.l, y: m.t, width: W - m.l - m.r, height: Hh - m.t - m.b, fill: 'none', 'class': 'axis' }, axes);
    svgEl('text', { x: (W + m.l) / 2, y: Hh - 6, 'text-anchor': 'middle' }, axes).textContent = opt.xLabel;
    var yl = svgEl('text', { x: 12, y: (Hh - m.b + m.t) / 2, 'text-anchor': 'middle', transform: 'rotate(-90 12 ' + (Hh - m.b + m.t) / 2 + ')' }, axes);
    yl.textContent = opt.yLabel;
    var gx = svgEl('line', { 'class': 'guide' }, svg), gy = svgEl('line', { 'class': 'guide' }, svg);
    var ball = svgEl('circle', { r: 9, 'class': 'ball', tabindex: 0 }, svg);
    return { svg: svg, layers: layers, X: X, Y: Y, Xi: Xi, Yi: Yi, ball: ball, gx: gx, gy: gy, m: m, W: W, H: Hh };
  }
  function bindDrag(p, getXY, setXY) {
    var drag = false;
    function at(ev) {
      var r = p.svg.getBoundingClientRect();
      var px = (ev.clientX - r.left) / r.width * p.W, py = (ev.clientY - r.top) / r.height * p.H;
      setXY(p.Xi(px), p.Yi(py));
    }
    p.svg.addEventListener('pointerdown', function (ev) { drag = true; p.svg.setPointerCapture(ev.pointerId); at(ev); });
    p.svg.addEventListener('pointermove', function (ev) { if (drag) at(ev); });
    p.svg.addEventListener('pointerup', function () { drag = false; });
    p.svg.addEventListener('pointercancel', function () { drag = false; });
  }
  function placeBall(p, x, y, hit) {
    p.ball.setAttribute('cx', p.X(x)); p.ball.setAttribute('cy', p.Y(y));
    p.ball.setAttribute('class', 'ball' + (hit ? ' hit' : ''));
    p.gx.setAttribute('x1', p.m.l); p.gx.setAttribute('x2', p.X(x)); p.gx.setAttribute('y1', p.Y(y)); p.gx.setAttribute('y2', p.Y(y));
    p.gy.setAttribute('x1', p.X(x)); p.gy.setAttribute('x2', p.X(x)); p.gy.setAttribute('y1', p.Y(y)); p.gy.setAttribute('y2', p.H - p.m.b);
  }
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

  // ---------- Barrel / Blast 判定（依 wiki 定義） ----------
  // Barrel 頁：EV ≥ 98 mph；98→26–30°、99→25–31°、100→24–33°；之後每 +1 mph 擴 2–3°，至 116 mph 為 8–50°。
  // 100–116 mph 以線性內插（下界 24→8、上界 33→50），116 mph 以上維持 8–50°。
  function barrelRange(ev) {
    if (ev < 98) return null;
    if (ev < 99) return [26, 30];
    if (ev < 100) return [25, 31];
    var t = Math.min(1, (ev - 100) / 16);
    return [24 - 16 * t, 33 + 17 * t];
  }
  function bbType(la) { return la < 10 ? '滾地球（< 10°）' : la < 25 ? '平飛球（10–25°）' : la <= 50 ? '飛球（25–50°）' : '內野高飛（> 50°）'; }

  // ---------- pixel helpers ----------
  var PX = { sky: '#29adff', sky2: '#7fd0ff', navy: '#1d2b53', plum: '#7e2553', pink: '#ff77a8', grass: '#00a344', grass2: '#00c94e', dirt: '#ab5236', dirt2: '#c46a45',
    chalk: '#fff1e8', yellow: '#ffec27', red: '#ff004d', orange: '#ffa300', gray: '#83769c', black: '#000000', peach: '#ffccaa', brown: '#5f3a25' };
  var DIG = { '0': '111101101101111', '1': '010110010010111', '2': '111001111100111', '3': '111001111001111', '4': '101101111001001', '5': '111100111001111',
    '6': '111100111101111', '7': '111001001010010', '8': '111101111101111', '9': '111101111001111', "'": '100100000000000' };
  function pxText(ctx, str, x, y, col) {
    ctx.fillStyle = col;
    for (var i = 0; i < str.length; i++) {
      var g = DIG[str[i]]; if (!g) { x += 2; continue; }
      for (var j = 0; j < 15; j++) if (g[j] === '1') ctx.fillRect(x + (j % 3), y + Math.floor(j / 3), 1, 1);
      x += 4;
    }
  }
  function pxLine(ctx, x0, y0, x1, y1, col, w) {
    ctx.fillStyle = col; w = w || 1;
    var n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) | 0;
    for (var i = 0; i <= n; i++) {
      var t = n ? i / n : 0;
      ctx.fillRect(Math.round(x0 + (x1 - x0) * t - (w - 1) / 2), Math.round(y0 + (y1 - y0) * t - (w - 1) / 2), w, w);
    }
  }
  function screenBox(box, w, h, hud) {
    var tmp = el('<div class="screen crt"><canvas width="' + w + '" height="' + h + '"></canvas><div class="screen-hud">' + (hud || '') + '</div><div class="scene-flash"></div></div>');
    var scr = tmp.firstChild;
    var cv = scr.querySelector('canvas'); var ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = false;
    return { el: scr, cv: cv, ctx: ctx, hud: scr.querySelector('.screen-hud'), flash: scr.querySelector('.scene-flash') };
  }
  function canvasPoint(cv, ev) {
    var r = cv.getBoundingClientRect();
    return { x: (ev.clientX - r.left) / r.width * cv.width, y: (ev.clientY - r.top) / r.height * cv.height };
  }
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 簡化軌跡（示意）：重力 + 二次空氣阻力，不含旋轉升力與風；只用來呈現仰角與初速對球路形狀的影響。
  function trajectory(evMph, la) {
    var g = 32.174, k = 0.0015, dt = 0.02, v0 = evMph * 1.4667, a = la * Math.PI / 180;
    var vx = v0 * Math.cos(a), vy = v0 * Math.sin(a), x = 0, y = 3, t = 0, pts = [[0, 3]];
    while (t < 9) {
      var v = Math.hypot(vx, vy);
      vx += -k * v * vx * dt; vy += (-g - k * v * vy) * dt; x += vx * dt; y += vy * dt; t += dt;
      if (y <= 0) { pts.push([x - (y / (vy || -1)) * vx, 0]); break; }
      pts.push([x, y]);
      if (x > 470 || x < -40) break;
    }
    return pts;
  }

  // ---------- Barrel 擊球場景（側視球場） ----------
  function barrel(box) {
    var W = 320, H = 160, G = 138, X0 = 16, S = 0.62; // S: px per ft（水平與垂直相同比例，角度才正確）
    var sc = screenBox(box, W, H);
    var cx = X0 + 6, cy = G - 9; // 擊球點（約 3 呎高，放大一點以便看見）
    var toPx = function (p) { return [cx + p[0] * S, cy - (p[1] - 3) * S]; };
    var wrap = el('<div class="scene-wrap"><div class="scene"></div><div class="controls">' +
      '<label>擊球初速 EV <span class="num ev"></span> mph<input type="range" min="50" max="122" step="0.5" class="r-ev"></label>' +
      '<label>擊球仰角 LA <span class="num la"></span>°<input type="range" min="-30" max="75" step="1" class="r-la"></label>' +
      '<div class="calc-actions"><button type="button" class="btn primary swing">▶ 揮棒 SWING</button></div>' +
      '<div class="verdict"></div><ul class="checks"></ul>' +
      '<div class="toggles"><label><input type="checkbox" class="t-barrel" checked> Barrel 角度區</label><label><input type="checkbox" class="t-sweet" checked> Sweet Spot 8–32°</label></div>' +
      '</div></div>').firstChild;
    box.appendChild(wrap);
    wrap.querySelector('.scene').appendChild(sc.el);
    box.appendChild(el('<p class="chart-note">玩法：在畫面上<strong>拖曳</strong>調整擊球方向（仰角），放開即揮棒；或用滑桿。紅色扇形＝此初速下會被判定為 <a href="' + page('Barrel') + '">Barrel</a> 的仰角範圍（98 mph 起才出現，初速越高越寬）；白色虛線＝<a href="' + page('Sweet-Spot') + '">Sweet Spot</a> 8–32°。' +
      '<br>⚠ 場景為<strong>示意</strong>：飛行軌跡使用不含旋轉、風與海拔的簡化物理，只呈現仰角與初速如何改變球路形狀，不代表實際飛行距離。Barrel 邊界在 100–116 mph 之間以線性內插（官方逐 mph 略有差異）。擊球型態分界取自 <a href="' + page('Launch-Angle') + '">Launch Angle</a> 頁。</p>').firstChild);
    var dv = el('<details class="data-view"><summary>📊 數據視角：初速 × 仰角座標圖</summary><div class="dv-body"></div></details>').firstChild;
    box.appendChild(dv);

    var s = { ev: 103, la: 28 };
    try { var sv = JSON.parse(store.get('barrel') || 'null'); if (sv && isFinite(sv.ev)) s = sv; } catch (e) { /* ignore */ }
    var show = { barrel: true, sweet: true };
    var anim = null, aiming = false, chart = null;

    function drawField() {
      var c = sc.ctx;
      c.fillStyle = PX.sky; c.fillRect(0, 0, W, G);
      // 地平線抖色
      for (var y = G - 46; y < G - 30; y++) for (var x = 0; x < W; x++) if ((x + y) % 2 === 0 && y > G - 40 + ((x * 7) % 5)) { c.fillStyle = PX.sky2; c.fillRect(x, y, 1, 1); }
      // 雲
      [[60, 24], [150, 14], [228, 30]].forEach(function (p) { c.fillStyle = PX.chalk; c.fillRect(p[0], p[1], 18, 4); c.fillRect(p[0] + 4, p[1] - 3, 10, 3); c.fillRect(p[0] + 2, p[1] + 4, 14, 2); });
      // 看台（全壘打牆後）
      var fx = Math.round(X0 + 6 + 400 * S);
      c.fillStyle = PX.plum; c.fillRect(fx + 3, G - 44, W - fx - 3, 44);
      for (var yy = G - 42; yy < G - 10; yy += 3) for (var xx = fx + 5; xx < W; xx += 3) { c.fillStyle = ((xx * 13 + yy * 7) % 5 < 2) ? PX.pink : PX.peach; c.fillRect(xx, yy, 1, 1); }
      c.fillStyle = PX.navy; c.fillRect(fx + 3, G - 46, W - fx - 3, 2);
      // 草地條紋與泥土
      for (var gx = 0; gx < W; gx += 12) { c.fillStyle = (gx / 12) % 2 ? PX.grass : PX.grass2; c.fillRect(gx, G, 12, H - G); }
      c.fillStyle = PX.dirt; c.fillRect(0, G, Math.round(X0 + 6 + 95 * S), 4);
      c.fillStyle = PX.dirt2; c.fillRect(Math.round(X0 + 6 + 57 * S), G - 2, 8, 2); // 投手丘
      c.fillStyle = PX.chalk; c.fillRect(0, G, W, 1);
      // 全壘打牆（約 400 呎）與距離標示
      c.fillStyle = PX.navy; c.fillRect(fx, G - 9, 3, 9);
      c.fillStyle = PX.yellow; c.fillRect(fx, G - 10, 3, 1);
      [100, 200, 300, 400].forEach(function (d) {
        var x = Math.round(X0 + 6 + d * S);
        c.fillStyle = PX.chalk; c.fillRect(x, G + 1, 1, 3);
        pxText(c, d + "'", x - 6, G + 6, PX.chalk);
      });
    }
    function drawBatter(frame) {
      var c = sc.ctx, x = X0 - 6, y = G - 18;
      c.fillStyle = PX.navy; c.fillRect(x + 2, y, 5, 3);            // 頭盔
      c.fillStyle = PX.peach; c.fillRect(x + 3, y + 3, 3, 2);       // 臉
      c.fillStyle = PX.chalk; c.fillRect(x + 1, y + 5, 6, 6);       // 球衣
      c.fillStyle = PX.red; c.fillRect(x + 1, y + 7, 6, 1);
      c.fillStyle = PX.navy; c.fillRect(x + 1, y + 11, 2, 7); c.fillRect(x + 5, y + 11, 2, 7); // 腿
      if (frame === 0) pxLine(c, x + 6, y + 6, x + 1, y - 6, PX.brown, 2);        // 預備
      else pxLine(c, x + 7, y + 7, x + 19, y + 6, PX.orange, 2);                   // 揮出
    }
    function wedge(lo, hi, len, col, alpha) {
      var c = sc.ctx; c.save(); c.globalAlpha = alpha; c.fillStyle = col; c.beginPath(); c.moveTo(cx, cy);
      for (var a = lo; a <= hi + 0.01; a += 0.5) c.lineTo(cx + Math.cos(a * Math.PI / 180) * len, cy - Math.sin(a * Math.PI / 180) * len);
      c.closePath(); c.fill(); c.restore();
    }
    function ray(a, len, col, dash) {
      var c = sc.ctx; c.fillStyle = col;
      for (var i = 4; i < len; i++) { if (dash && Math.floor(i / 3) % 2) continue; c.fillRect(Math.round(cx + Math.cos(a * Math.PI / 180) * i), Math.round(cy - Math.sin(a * Math.PI / 180) * i), 1, 1); }
    }
    function render(progress) {
      var r = barrelRange(s.ev), isB = !!r && s.la >= r[0] && s.la <= r[1];
      drawField();
      if (show.sweet) { ray(8, 150, PX.chalk, true); ray(32, 150, PX.chalk, true); }
      if (show.barrel && r) { wedge(r[0], r[1], 170, PX.red, 0.38); ray(r[0], 170, PX.red); ray(r[1], 170, PX.red); }
      var pts = trajectory(s.ev, s.la).map(toPx);
      // 預測軌跡（點線）
      var c = sc.ctx;
      if (progress === undefined) for (var i = 0; i < pts.length; i += 3) { c.fillStyle = PX.chalk; c.globalAlpha = .55; c.fillRect(Math.round(pts[i][0]), Math.round(pts[i][1]), 1, 1); c.globalAlpha = 1; }
      // 瞄準線
      pxLine(c, cx, cy, cx + Math.cos(s.la * Math.PI / 180) * 22, cy - Math.sin(s.la * Math.PI / 180) * 22, PX.yellow, 1);
      drawBatter(progress === undefined ? 0 : 1);
      if (progress !== undefined) {
        var n = Math.max(1, Math.floor(pts.length * progress));
        for (var j = Math.max(0, n - 40); j < n; j++) { c.fillStyle = isB ? PX.yellow : PX.chalk; c.globalAlpha = (j - (n - 40)) / 40; c.fillRect(Math.round(pts[j][0]), Math.round(pts[j][1]), 1, 1); }
        c.globalAlpha = 1;
        var p = pts[n - 1];
        c.fillStyle = 'rgba(0,0,0,.35)'; c.fillRect(Math.round(p[0]) - 1, G, 3, 1); // 影子
        c.fillStyle = PX.chalk; c.fillRect(Math.round(p[0]) - 1, Math.round(p[1]) - 1, 3, 3);
        c.fillStyle = PX.red; c.fillRect(Math.round(p[0]), Math.round(p[1]) - 1, 1, 1);
        if (progress >= 1) { c.fillStyle = PX.yellow; var lx = Math.round(p[0]); if (lx < W) { c.fillRect(lx - 2, G - 2, 1, 1); c.fillRect(lx + 2, G - 2, 1, 1); c.fillRect(lx, G - 1, 1, 1); } }
      } else {
        c.fillStyle = PX.chalk; c.fillRect(cx - 1, cy - 1, 3, 3);
      }
      sc.hud.innerHTML = 'EV ' + s.ev.toFixed(1) + ' MPH<br>LA ' + s.la + '°';
      sc.flash.textContent = 'BARREL!';
      sc.flash.classList.toggle('on', isB && progress !== undefined && progress >= 1);
      return isB;
    }
    var rEv = wrap.querySelector('.r-ev'), rLa = wrap.querySelector('.r-la');
    function update(noDraw) {
      s.ev = clamp(Math.round(s.ev * 2) / 2, 50, 122); s.la = clamp(Math.round(s.la), -30, 75);
      rEv.value = s.ev; rLa.value = s.la;
      wrap.querySelector('.ev').textContent = s.ev.toFixed(1); wrap.querySelector('.la').textContent = s.la;
      var r = barrelRange(s.ev), isB = !!r && s.la >= r[0] && s.la <= r[1];
      var v = wrap.querySelector('.verdict');
      v.className = 'verdict ' + (isB ? 'yes' : 'no');
      v.textContent = isB ? '★ BARREL！完美擊球' : '不是 Barrel';
      wrap.querySelector('.checks').innerHTML =
        '<li>' + (s.ev >= 95 ? '✅' : '▫️') + ' 強勁擊球（EV ≥ 95 mph）</li>' +
        '<li>' + (s.la >= 8 && s.la <= 32 ? '✅' : '▫️') + ' Sweet Spot（8–32°）</li>' +
        '<li>擊球型態：' + bbType(s.la) + '</li>' +
        '<li>' + (r ? '此初速的 Barrel 仰角：' + r[0].toFixed(0) + '–' + r[1].toFixed(0) + '°' : 'Barrel 最低需 98 mph') + '</li>';
      store.set('barrel', JSON.stringify(s));
      if (chart) chart.sync(s.ev, s.la);
      if (!noDraw && !anim) render();
    }
    function swing() {
      if (anim) cancelAnimationFrame(anim);
      if (reduceMotion) { render(1); anim = null; return; }
      var t0 = null, dur = 1400;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        render(p);
        if (p < 1) anim = requestAnimationFrame(step); else anim = null;
      }
      anim = requestAnimationFrame(step);
    }
    function aimAt(ev) {
      var pt = canvasPoint(sc.cv, ev);
      var a = Math.atan2(cy - pt.y, pt.x - cx) * 180 / Math.PI;
      if (pt.x < cx) a = a > 0 ? 75 : -30;
      s.la = a; update();
    }
    sc.cv.addEventListener('pointerdown', function (ev) { aiming = true; if (anim) { cancelAnimationFrame(anim); anim = null; } sc.cv.setPointerCapture(ev.pointerId); aimAt(ev); });
    sc.cv.addEventListener('pointermove', function (ev) { if (aiming) aimAt(ev); });
    sc.cv.addEventListener('pointerup', function () { if (aiming) { aiming = false; swing(); } });
    sc.cv.addEventListener('pointercancel', function () { aiming = false; });
    rEv.addEventListener('input', function () { s.ev = +rEv.value; if (anim) { cancelAnimationFrame(anim); anim = null; } update(); });
    rLa.addEventListener('input', function () { s.la = +rLa.value; if (anim) { cancelAnimationFrame(anim); anim = null; } update(); });
    rEv.addEventListener('change', swing); rLa.addEventListener('change', swing);
    wrap.querySelector('.swing').addEventListener('click', swing);
    wrap.querySelector('.t-barrel').addEventListener('change', function (e) { show.barrel = e.target.checked; if (!anim) render(); });
    wrap.querySelector('.t-sweet').addEventListener('change', function (e) { show.sweet = e.target.checked; if (!anim) render(); });
    dv.addEventListener('toggle', function () {
      if (dv.open && !chart) chart = barrelChart(dv.querySelector('.dv-body'), s, function (ev, la) { s.ev = ev; s.la = la; update(); });
    });
    update();
  }

  // ---------- Blast 揮棒場景（俯視本壘） ----------
  function blast(box) {
    var W = 320, H = 160;
    var sc = screenBox(box, W, H);
    var PIV = { x: 66, y: 104 }, L = 124, PPI = L / 34; // 34 吋球棒（放大顯示）
    var PLATE = { x: 66 + 124 - 6.5 * (124 / 34), y: 122 };
    var wrap = el('<div class="scene-wrap"><div class="scene"></div><div class="controls">' +
      '<label>揮棒速度 <span class="num bs"></span> mph<input type="range" min="50" max="90" step="0.5" class="r-bs"></label>' +
      '<label>打正率 Squared-up <span class="num sq"></span>%<input type="range" min="0" max="100" step="1" class="r-sq"></label>' +
      '<div class="meters">' +
      '<div class="meter">揮棒速度（快速揮棒 ≥ 75）<div class="meter-bar"><div class="meter-fill m-bs" style="--fill: var(--blue)"></div><div class="meter-tick" style="left: 62.5%"></div></div></div>' +
      '<div class="meter">打正率（Squared-up ≥ 80%）<div class="meter-bar"><div class="meter-fill m-sq" style="--fill: var(--green)"></div><div class="meter-tick" style="left: 80%"></div></div></div>' +
      '<div class="meter">BLAST 分數（≥ 164）<div class="meter-bar"><div class="meter-fill m-sum" style="--fill: var(--orange)"></div><div class="meter-tick" style="left: ' + ((164 - 100) / 90 * 100) + '%"></div></div></div>' +
      '</div><div class="calc-actions"><button type="button" class="btn primary swing">▶ 揮棒 SWING</button></div>' +
      '<div class="verdict"></div><ul class="checks"></ul></div></div>').firstChild;
    box.appendChild(wrap);
    wrap.querySelector('.scene').appendChild(sc.el);
    box.appendChild(el('<p class="chart-note">玩法：在畫面上沿著球棒<strong>拖曳</strong>擊球點，越靠近黃色<strong>甜蜜點</strong>（距棒頭約 4–9 吋）打正率越高；用滑桿調整揮棒速度後按「揮棒」。判定依 <a href="' + page('Blasts') + '">Blasts</a> 頁：打正率 × 100 + 揮棒速度 ≥ 164。' +
      '<br>⚠ 場景為<strong>示意</strong>：<a href="' + page('Squared-Up-Rate') + '">Squared-up Rate</a> 頁指出只有擊中甜蜜點才可能達到最大初速，但「擊球點位置 ↔ 打正率」的換算是為了視覺化而設的簡化對應，並非官方公式。</p>').firstChild);
    var dv = el('<details class="data-view"><summary>📊 數據視角：揮棒速度 × 打正率座標圖</summary><div class="dv-body"></div></details>').firstChild;
    box.appendChild(dv);

    var s = { bs: 76, sq: 85 };
    try { var sv = JSON.parse(store.get('blast') || 'null'); if (sv && isFinite(sv.bs)) s = sv; } catch (e) { /* ignore */ }
    var anim = null, dragging = false, chart = null;
    // 示意對應：打正率 100% ↔ 甜蜜點中心（距棒頭 6.5 吋），每少 1% 往握把移 0.14 吋
    var inFromTip = function (sq) { return 6.5 + (100 - sq) * 0.14; };
    var batPt = function (ang, r) { return [PIV.x + Math.cos(ang) * r, PIV.y + Math.sin(ang) * r]; };

    function drawGround() {
      var c = sc.ctx;
      for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
        var d = Math.hypot(x - PLATE.x, (y - PLATE.y) * 1.15);
        c.fillStyle = d > 150 ? (((x >> 3) + (y >> 3)) % 2 ? PX.grass : PX.grass2) : (((x * 3 + y * 5) % 11 === 0) ? PX.dirt2 : PX.dirt);
        c.fillRect(x, y, 1, 1);
      }
      // 界外線
      pxLine(c, PLATE.x - 4, PLATE.y - 4, PLATE.x - 4 - 140, PLATE.y - 4 - 140, PX.chalk, 1);
      pxLine(c, PLATE.x + 4, PLATE.y - 4, PLATE.x + 4 + 140, PLATE.y - 4 - 140, PX.chalk, 1);
      // 本壘板（尖端朝捕手）
      c.fillStyle = PX.chalk; var hx = Math.round(PLATE.x), hy = PLATE.y;
      c.fillRect(hx - 8, hy - 4, 17, 6); c.fillRect(hx - 6, hy + 2, 13, 2); c.fillRect(hx - 3, hy + 4, 7, 2); c.fillRect(hx - 1, hy + 6, 3, 1);
      // 打者（俯視：頭盔＋肩膀）
      c.fillStyle = PX.chalk; c.fillRect(PIV.x - 24, PIV.y + 2, 18, 12);
      c.fillStyle = PX.navy; c.fillRect(PIV.x - 20, PIV.y + 4, 9, 8);
      c.fillStyle = PX.red; c.fillRect(PIV.x - 18, PIV.y + 6, 5, 4);
    }
    function drawBat(ang, glowSweet) {
      var c = sc.ctx;
      for (var r = 0; r <= L; r++) {
        var p = batPt(ang, r), inch = (L - r) / PPI, w = r < 38 ? 2 : r < 70 ? 3 : 4;
        var sweet = glowSweet && inch >= 4 && inch <= 9;
        if (sweet) { c.fillStyle = PX.red; c.fillRect(Math.round(p[0] - w / 2) - 1, Math.round(p[1] - w / 2) - 1, w + 2, w + 2); }
        c.fillStyle = sweet ? PX.yellow : (r < 38 ? PX.brown : PX.peach);
        c.fillRect(Math.round(p[0] - w / 2), Math.round(p[1] - w / 2), w, w);
      }
      var k = batPt(ang, 0); c.fillStyle = PX.navy; c.fillRect(Math.round(k[0]) - 2, Math.round(k[1]) - 2, 4, 4);
    }
    function drawBall(x, y) { var c = sc.ctx; c.fillStyle = PX.chalk; c.fillRect(Math.round(x) - 2, Math.round(y) - 2, 5, 5); c.fillStyle = PX.red; c.fillRect(Math.round(x) - 1, Math.round(y) - 2, 1, 5); c.fillRect(Math.round(x) + 1, Math.round(y) - 2, 1, 5); }
    function render(progress) {
      var isB = s.sq + s.bs >= 164;
      drawGround();
      var contactR = L - inFromTip(s.sq) * PPI, contact = batPt(0, contactR);
      var c = sc.ctx;
      if (progress === undefined) {
        // 揮棒軌跡弧線（虛線）
        for (var a = 100; a >= -60; a -= 3) { var q = batPt(a * Math.PI / 180, L); c.fillStyle = PX.chalk; c.globalAlpha = .5; c.fillRect(Math.round(q[0]), Math.round(q[1]), 1, 1); }
        c.globalAlpha = 1;
        drawBat(0, true);
        drawBall(contact[0], contact[1]);
        // 標示甜蜜點
        var sp = batPt(0, L - 6.5 * PPI); c.fillStyle = PX.yellow; c.fillRect(Math.round(sp[0]) - 2, Math.round(sp[1]) - 12, 5, 1); c.fillRect(Math.round(sp[0]) - 1, Math.round(sp[1]) - 11, 3, 1); c.fillRect(Math.round(sp[0]), Math.round(sp[1]) - 10, 1, 2);
      } else {
        var tc = 0.55; // 接觸時刻
        var ang, ballX = contact[0], ballY;
        if (progress < tc) {
          var u = progress / tc;
          ang = (100 - 100 * u) * Math.PI / 180;
          ballY = -6 + (contact[1] + 6) * u;
        } else {
          var w = (progress - tc) / (1 - tc);
          ang = (-60 * Math.min(1, w * 2.2)) * Math.PI / 180;
          var power = (s.sq / 100) * (s.bs / 90);       // 只決定示意速度，不代表實際初速
          ballY = contact[1] - w * 240 * power;
          ballX = contact[0] + w * 70 * power;
          for (var tr = 1; tr < 12; tr++) { c.fillStyle = isB ? PX.yellow : PX.chalk; c.globalAlpha = (12 - tr) / 18; c.fillRect(Math.round(ballX - tr * 2 * power), Math.round(ballY + tr * 7 * power), 2, 2); }
          c.globalAlpha = 1;
        }
        drawBat(ang, true);
        if (ballY > -6) drawBall(ballX, ballY);
      }
      sc.hud.innerHTML = 'BAT ' + s.bs.toFixed(1) + ' MPH<br>SQ ' + s.sq + '%';
      sc.flash.textContent = 'BLAST!';
      sc.flash.classList.toggle('on', isB && progress !== undefined && progress > 0.6);
    }
    var rBs = wrap.querySelector('.r-bs'), rSq = wrap.querySelector('.r-sq');
    function update() {
      s.bs = clamp(Math.round(s.bs * 2) / 2, 50, 90); s.sq = clamp(Math.round(s.sq), 0, 100);
      rBs.value = s.bs; rSq.value = s.sq;
      wrap.querySelector('.bs').textContent = s.bs.toFixed(1); wrap.querySelector('.sq').textContent = s.sq;
      var score = s.sq + s.bs, isB = score >= 164;
      wrap.querySelector('.m-bs').style.width = ((s.bs - 50) / 40 * 100) + '%';
      wrap.querySelector('.m-sq').style.width = s.sq + '%';
      wrap.querySelector('.m-sum').style.width = clamp((score - 100) / 90 * 100, 0, 100) + '%';
      var v = wrap.querySelector('.verdict');
      v.className = 'verdict ' + (isB ? 'yes' : 'no');
      v.textContent = isB ? '★ BLAST！又快又正' : '不是 Blast';
      wrap.querySelector('.checks').innerHTML =
        '<li>分數 ' + s.sq + ' + ' + s.bs.toFixed(1) + ' = <strong>' + score.toFixed(1) + '</strong>（門檻 164）</li>' +
        '<li>' + (s.sq >= 80 ? '✅' : '▫️') + ' Squared-up 揮棒（≥ 80%）</li>' +
        '<li>' + (s.bs >= 75 ? '✅' : '▫️') + ' 快速揮棒（≥ 75 mph）</li>' +
        '<li>擊球點：距棒頭約 ' + inFromTip(s.sq).toFixed(1) + ' 吋（示意）</li>';
      store.set('blast', JSON.stringify(s));
      if (chart) chart.sync(s.bs, s.sq);
      if (!anim) render();
    }
    function swing() {
      if (anim) cancelAnimationFrame(anim);
      if (reduceMotion) { render(1); anim = null; return; }
      var t0 = null, dur = 1700 - (s.bs - 50) * 12; // 揮棒越快，動畫越快（示意）
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        render(p);
        if (p < 1) anim = requestAnimationFrame(step); else { anim = null; setTimeout(function () { if (!anim) render(); sc.flash.classList.remove('on'); }, 900); }
      }
      anim = requestAnimationFrame(step);
    }
    function dragTo(ev) {
      var pt = canvasPoint(sc.cv, ev);
      var r = clamp(pt.x - PIV.x, 0, L), inch = (L - r) / PPI;
      s.sq = 100 - Math.abs(inch - 6.5) / 0.14; update();
    }
    sc.cv.addEventListener('pointerdown', function (ev) { dragging = true; if (anim) { cancelAnimationFrame(anim); anim = null; } sc.cv.setPointerCapture(ev.pointerId); dragTo(ev); });
    sc.cv.addEventListener('pointermove', function (ev) { if (dragging) dragTo(ev); });
    sc.cv.addEventListener('pointerup', function () { if (dragging) { dragging = false; swing(); } });
    sc.cv.addEventListener('pointercancel', function () { dragging = false; });
    rBs.addEventListener('input', function () { s.bs = +rBs.value; if (anim) { cancelAnimationFrame(anim); anim = null; } update(); });
    rSq.addEventListener('input', function () { s.sq = +rSq.value; if (anim) { cancelAnimationFrame(anim); anim = null; } update(); });
    wrap.querySelector('.swing').addEventListener('click', swing);
    dv.addEventListener('toggle', function () {
      if (dv.open && !chart) chart = blastChart(dv.querySelector('.dv-body'), s, function (bs, sq) { s.bs = bs; s.sq = sq; update(); });
    });
    update();
  }

  // ---------- 數據視角：數學座標圖 ----------
  function barrelChart(box, s0, onChange) {
    var EV = [50, 125], LA = [-40, 80];
    var p = plot({ x: EV, y: LA, xt: [50, 60, 70, 80, 90, 95, 100, 110, 120], yt: [-40, -20, 0, 10, 25, 50, 80], yUnit: '°', xLabel: '擊球初速 Exit Velocity（mph）', yLabel: '擊球仰角 Launch Angle', label: 'Barrel 區域圖' });
    var L = p.layers;
    [[-40, 10, '滾地'], [10, 25, '平飛'], [25, 50, '飛球'], [50, 80, '內野高飛']].forEach(function (b, i) {
      if (i % 2 === 0) svgEl('rect', { x: p.m.l, width: p.W - p.m.l - p.m.r, y: p.Y(b[1]), height: p.Y(b[0]) - p.Y(b[1]), 'class': 'band' }, L);
      svgEl('text', { x: p.m.l + 6, y: p.Y(b[1]) + 13, 'class': 'band-label' }, L).textContent = b[2];
    });
    svgEl('rect', { x: p.m.l, width: p.W - p.m.l - p.m.r, y: p.Y(32), height: p.Y(8) - p.Y(32), 'class': 'zone-sweet' }, L);
    svgEl('line', { x1: p.X(95), x2: p.X(95), y1: p.m.t, y2: p.H - p.m.b, 'class': 'threshold' }, L);
    svgEl('text', { x: p.X(95) - 4, y: p.m.t + 12, 'text-anchor': 'end', 'class': 'band-label' }, L).textContent = 'Hard-hit ≥ 95';
    var lo = [], hi = [];
    for (var e = 100; e <= 125; e += 0.5) { var r = barrelRange(e); lo.push(p.X(e) + ',' + p.Y(r[0])); hi.unshift(p.X(e) + ',' + p.Y(r[1])); }
    var poly = [p.X(98) + ',' + p.Y(26), p.X(99) + ',' + p.Y(26), p.X(99) + ',' + p.Y(25), p.X(100) + ',' + p.Y(25)].concat(lo).concat(hi)
      .concat([p.X(100) + ',' + p.Y(31), p.X(99) + ',' + p.Y(31), p.X(99) + ',' + p.Y(30), p.X(98) + ',' + p.Y(30)]);
    svgEl('polygon', { points: poly.join(' '), 'class': 'zone-barrel' }, L);
    svgEl('text', { x: p.X(113), y: p.Y(30), 'class': 'zone-label', 'text-anchor': 'middle' }, L).textContent = 'BARREL';
    var wrap = el('<div class="chart"></div>').firstChild; wrap.appendChild(p.svg); box.appendChild(wrap);
    box.appendChild(el('<p class="chart-note">橫軸初速、縱軸仰角；紅色區域為 Barrel，藍色虛線帶為 Sweet Spot，直線為 95 mph 強勁擊球門檻。點擊或拖曳圖中位置可同步改變上方場景。</p>').firstChild);
    function sync(ev, la) { placeBall(p, ev, la, (function () { var r = barrelRange(ev); return !!r && la >= r[0] && la <= r[1]; })()); }
    bindDrag(p, null, function (x, y) { onChange(clamp(x, 50, 122), clamp(y, -30, 75)); });
    sync(s0.ev, s0.la);
    return { sync: sync };
  }
  function blastChart(box, s0, onChange) {
    var BS = [50, 90], SQ = [0, 100];
    var p = plot({ x: BS, y: SQ, xt: [50, 55, 60, 65, 70, 75, 80, 85, 90], yt: [0, 20, 40, 60, 80, 100], yUnit: '%', xLabel: '揮棒速度 Bat Speed（mph）', yLabel: '打正率 Squared-up', label: 'Blast 區域圖' });
    var L = p.layers;
    svgEl('polygon', { points: [p.X(64) + ',' + p.Y(100), p.X(90) + ',' + p.Y(100), p.X(90) + ',' + p.Y(74)].join(' '), 'class': 'zone-barrel' }, L);
    svgEl('text', { x: p.X(82), y: p.Y(92), 'class': 'zone-label', 'text-anchor': 'middle' }, L).textContent = 'BLAST';
    svgEl('line', { x1: p.X(BS[0]), x2: p.X(BS[1]), y1: p.Y(80), y2: p.Y(80), 'class': 'threshold' }, L);
    svgEl('text', { x: p.X(51), y: p.Y(80) - 5, 'class': 'band-label' }, L).textContent = 'Squared-up ≥ 80%';
    svgEl('line', { x1: p.X(75), x2: p.X(75), y1: p.m.t, y2: p.H - p.m.b, 'class': 'threshold' }, L);
    svgEl('text', { x: p.X(75) + 4, y: p.Y(8), 'class': 'band-label' }, L).textContent = '快速揮棒 ≥ 75 mph';
    var wrap = el('<div class="chart"></div>').firstChild; wrap.appendChild(p.svg); box.appendChild(wrap);
    box.appendChild(el('<p class="chart-note">紅色三角形即 Squared-up% × 100 + 揮棒速度 ≥ 164。範例：Ohtani 82.8 mph、93% → 175.8 為 Blast；71 mph、92% → 163 不是。</p>').firstChild);
    function sync(bs, sq) { placeBall(p, bs, sq, sq + bs >= 164); }
    bindDrag(p, null, function (x, y) { onChange(clamp(x, 50, 90), clamp(y, 0, 100)); });
    sync(s0.bs, s0.sq);
    return { sync: sync };
  }


  // ---------- plate discipline calculator ----------
  // 定義與聯盟平均（BIS）取自 Plate Discipline 頁（FanGraphs, 2010-02-18）。
  var PD_FIELDS = [['P', '總投球數', 2400], ['ZP', '好球帶內投球數', 1080], ['ZS', '帶內揮棒次數', 715], ['OS', '帶外揮棒次數', 330],
    ['ZC', '帶內碰到球（含界外）', 636], ['OC', '帶外碰到球（含界外）', 211], ['PA', '打席數 PA', 600], ['FS', '首球好球數', 340]];
  function pdCalc(box, focus) {
    var form = el('<form autocomplete="off">' + inputs(PD_FIELDS) +
      '<div class="calc-actions"><button type="button" class="btn reset">恢復範例數據</button><button type="button" class="btn clear">清空</button></div>' +
      '<div class="out"></div></form>').firstChild;
    box.appendChild(form);
    var save = persist(form, 'pd');
    function diff(v, avg) {
      if (!isFinite(v)) return '';
      var d = (v - avg) * 100, cls = Math.abs(d) < 2 ? 't3' : (d > 0 ? 't1' : 't5');
      return '<span class="tier ' + cls + '">平均 ' + (avg * 100).toFixed(avg < 0.1 ? 1 : 0) + '%｜' + (d >= 0 ? '+' : '') + d.toFixed(1) + ' pp</span>';
    }
    function calc() {
      var g = function (n) { return num(form, n); };
      var P = g('P'), ZP = g('ZP'), ZS = g('ZS'), OS = g('OS'), ZC = g('ZC'), OC = g('OC'), PA = g('PA'), FS = g('FS');
      var OP = P - ZP, SW = ZS + OS, CT = ZC + OC, MISS = SW - CT;
      var out = form.querySelector('.out');
      var err = !(P > 0) ? '請輸入總投球數。'
        : !(ZP >= 0 && ZP <= P) ? '好球帶內投球數需介於 0 與總投球數之間。'
        : (ZS > ZP || OS > OP) ? '揮棒次數不可超過對應區域的投球數。'
        : (ZC > ZS || OC > OS) ? '碰到球的次數不可超過對應區域的揮棒次數。'
        : (isFinite(FS) && isFinite(PA) && FS > PA) ? '首球好球數不可超過打席數。' : '';
      if (err) { out.innerHTML = '<p class="muted">' + err + '</p>'; save(); return; }
      var rows = [
        { key: 'O-Swing%', name: 'O-Swing%', v: OS / OP, avg: .30, f: '帶外揮棒 / 帶外投球' },
        { key: 'Z-Swing%', name: 'Z-Swing%', v: ZS / ZP, avg: .65, f: '帶內揮棒 / 帶內投球' },
        { key: 'Swing%', name: 'Swing%', v: SW / P, avg: .46, f: '揮棒 / 總投球' },
        { key: 'O-Contact%', name: 'O-Contact%', v: OC / OS, avg: .66, f: '帶外碰到球 / 帶外揮棒' },
        { key: 'Z-Contact%', name: 'Z-Contact%', v: ZC / ZS, avg: .87, f: '帶內碰到球 / 帶內揮棒' },
        { key: 'Contact%', name: 'Contact%', v: CT / SW, avg: .80, f: '碰到球 / 揮棒' },
        { key: 'Zone%', name: 'Zone%', v: ZP / P, avg: .45, f: '帶內投球 / 總投球' },
        { key: 'F-Strike%', name: 'F-Strike%', v: FS / PA, avg: .59, f: '首球好球 / 打席' },
        { key: 'SwStr%', name: 'SwStr%', v: MISS / P, avg: .095, f: '揮空 / 總投球（每球）' }
      ].map(function (r) { return { key: r.key, name: r.name, val: fmt(r.v, 'pct'), tier: diff(r.v, r.avg), f: r.f }; });
      rows.push({ key: 'SwStr%', name: 'Whiff rate（補充）', val: fmt(MISS / SW, 'pct'), tier: '<span class="muted">每次揮棒口徑，勿與 SwStr% 混淆</span>', f: '揮空 / 揮棒 = 1 − Contact%' });
      out.innerHTML = resultTable(rows, focus).replace('<th>判讀</th>', '<th>與聯盟平均比較</th>') +
        '<p class="muted">揮空 = 揮棒 − 碰到球 = ' + MISS + ' 次。聯盟平均為 FanGraphs 以 BIS 資料估計、逐年變動；本壘板紀律<strong>沒有理想值</strong>，綠／紅只代表高於／低於平均，不代表好壞（例如投手的 SwStr% 越高越好，打者則相反）。</p>';
      save();
    }
    form.addEventListener('input', calc);
    form.querySelector('.reset').addEventListener('click', resetBtn(form, PD_FIELDS, calc));
    form.querySelector('.clear').addEventListener('click', function () { PD_FIELDS.forEach(function (f) { form.querySelector('[name="' + f[0] + '"]').value = ''; }); calc(); });
    calc();
  }

  var W = { 'hitter-calc': hitter, 'pitcher-calc': pitcher, 'pd-calc': pdCalc, 'barrel-chart': barrel, 'blast-chart': blast };
  document.querySelectorAll('.widget[data-widget]').forEach(function (box) {
    var f = W[box.dataset.widget]; if (f) f(box, box.dataset.focus);
  });
})();
