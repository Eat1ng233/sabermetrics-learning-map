// 將 wiki/ 編譯為靜態學習網站（site/dist/）。規則見 AGENTS.md 第七節。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { marked } from 'marked';
import katex from 'katex';
import { PRINCIPLE_GROUPS, METRIC_BLOCKS, WIDGETS, WIDGET_KIND } from './taxonomy.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const WIKI = path.join(ROOT, '..', 'wiki');
const DIST = path.join(ROOT, 'dist');
const SITE_NAME = '賽伯計量學學習地圖';
const VER = Date.now().toString(36); // 資產版本戳，避免瀏覽器快取舊檔

// ---------- load wiki ----------
const pages = new Map(); // key -> {key, folder, file, data, content}
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.md')) {
      const key = path.relative(WIKI, p).replace(/\\/g, '/').replace(/\.md$/, '');
      const { data, content } = matter(fs.readFileSync(p, 'utf8'));
      pages.set(key, { key, folder: key.includes('/') ? key.split('/')[0] : '', data, content });
    }
  }
}
walk(WIKI);

// ---------- validate taxonomy ----------
const metricKeys = [...pages.keys()].filter(k => k.startsWith('metrics/') && !k.endsWith('README')).map(k => k.slice(8));
const placed = new Map();
const errors = [];
for (const b of METRIC_BLOCKS) for (const g of b.groups) for (const m of g.items) {
  if (!pages.has('metrics/' + m)) errors.push(`taxonomy 引用了不存在的指標：${m}`);
  if (placed.has(m)) errors.push(`指標重複歸類：${m}（${placed.get(m)} / ${b.title}）`);
  placed.set(m, b.title);
}
for (const m of metricKeys) if (!placed.has(m)) errors.push(`未歸類的指標：metrics/${m}.md`);
for (const b of METRIC_BLOCKS) {
  for (const m of b.cross) if (!placed.has(m)) errors.push(`交叉列出的指標不存在：${m}`);
  for (const k of b.further) if (!pages.has(k)) errors.push(`延伸閱讀頁不存在：${k}`);
}
for (const g of PRINCIPLE_GROUPS) for (const p of g.items) if (!pages.has('principles/' + p)) errors.push(`原則頁不存在：${p}`);
if (errors.length) { console.error('建置失敗：\n- ' + errors.join('\n- ')); process.exit(1); }

// ---------- urls ----------
const slug = k => k.replace(/%/g, '-pct').replace(/\+/g, '-plus');
function urlOf(key) {
  if (key === 'index') return 'catalog.html';
  return 'p/' + slug(key) + '.html';
}
const depthOf = url => url.split('/').length - 1;
const rel = (from, to) => '../'.repeat(depthOf(from)) + to;

// ---------- index.md descriptions ----------
const desc = {};
for (const line of pages.get('index').content.split('\n')) {
  const m = line.match(/^- \[\[([^|\]]+)\|[^\]]+\]\]\s*—\s*(.+?)(（來源數.*)?$/);
  if (m) desc[m[1]] = m[2].trim();
}
function defOf(key) {
  if (desc[key]) return desc[key];
  const c = pages.get(key).content;
  const m = c.match(/## 一句話定義\s*\n+([^\n]+)/);
  const t = (m ? m[1] : c.replace(/^#.*$/m, '').trim().split('\n')[0] || '')
    .replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/[*`$]/g, '');
  return t.length > 70 ? t.slice(0, 70) + '…' : t;
}
function names(key) {
  const t = String(pages.get(key).data.title || key.split('/').pop());
  const i = t.indexOf('（');
  return i > 0 ? { name: t.slice(0, i).trim(), sub: t.slice(i + 1).replace(/）$/, '') } : { name: t, sub: '' };
}
// ---------- 原始出處（給版權標註用） ----------
const srcInfo = {};
for (const [key, pg] of pages) {
  if (!key.startsWith('sources/') || key.endsWith('README')) continue;
  const field = n => (pg.content.match(new RegExp('^- \\*\\*' + n + '\\*\\*：(.+)$', 'm')) || [])[1] || '';
  const link = field('原始連結').match(/\[([^\]]+)\]\(([^)]+)\)/);
  srcInfo[key] = {
    key, title: String(pg.data.title || key).replace(/ — .*$/, ''), author: field('作者').replace(/（.*?）/g, ''), date: field('發表日期'),
    url: link ? link[2] : '', linkText: link ? link[1] : '',
    publisher: key.includes('-MLB-') ? 'MLB.com Glossary' : key.includes('FanGraphs') ? 'FanGraphs Sabermetrics Library' : '其他',
  };
}
const srcKeysOf = pg => (pg.data.sources || []).map(x => String(x).replace(/^\[\[|\]\]$/g, '').split('|')[0]).filter(k => srcInfo[k]);
const widgetOf = {};
for (const [w, list] of Object.entries(WIDGETS)) for (const m of list) (widgetOf['metrics/' + m] ||= []).push(w);

// location of each page in the learning path
const locate = {};
for (const g of PRINCIPLE_GROUPS) g.items.forEach(p => locate['principles/' + p] = { trail: [['基本原則', 'principles.html']], group: g.title, list: g.items.map(x => 'principles/' + x) });
for (const b of METRIC_BLOCKS) for (const g of b.groups) g.items.forEach(m => locate['metrics/' + m] = { trail: [['數據指標', 'metrics.html'], [b.title, `m/${b.id}.html`]], group: g.title, list: b.groups.flatMap(x => x.items).map(x => 'metrics/' + x) });
const folderTrail = { concepts: ['延伸概念', 'catalog.html'], comparisons: ['比較分析', 'catalog.html'], entities: ['人物與機構', 'catalog.html'], sources: ['來源摘要', 'catalog.html'], synthesis: ['綜合探討', 'catalog.html'] };

// ---------- markdown ----------
// Y2K 視窗標題列（裝飾用）
const winbar = title => `<div class="winbar"><span class="winbar-title">${title}</span><span class="winbar-btns" aria-hidden="true"><i>─</i><i>▢</i><i>✕</i></span></div>`;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function renderMd(md, fromUrl) {
  const store = [];
  const ph = v => { store.push(v); return `@@PH${store.length - 1}@@`; };
  md = md.replace(/^# .*\n?/m, ''); // title rendered by template
  md = md.replace(/```[\s\S]*?```/g, m => ph({ type: 'raw', html: marked.parse(m) }));
  md = md.replace(/`[^`\n]+`/g, m => {
    const inner = m.slice(1, -1);
    if (/^\[\[.*\]\]$/.test(inner)) return m; // `[[link]]` in log → still a link below
    return ph({ type: 'raw', html: `<code>${esc(inner)}</code>` });
  });
  md = md.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => ph({ type: 'math', tex: t, display: true }));
  md = md.replace(/\$(?!\s)([^$\n]+?)\$/g, (_, t) => ph({ type: 'math', tex: t, display: false }));
  md = md.replace(/`?\[\[([^\]]+?)\]\]`?/g, (_, inner) => {
    const parts = inner.split(/\\?\|/);
    let target = parts[0].replace(/\\$/, '').split('#')[0].trim();
    const label = (parts[1] || target.split('/').pop()).trim();
    if (!pages.has(target)) return ph({ type: 'raw', html: `<span class="wl missing" title="尚未建立">${esc(label)}</span>` });
    return ph({ type: 'raw', html: `<a class="wl" href="${rel(fromUrl, urlOf(target))}">${esc(label)}</a>` });
  });
  // CommonMark 不認得緊貼全形標點的 **粗體**（Obsidian 可以），先自行轉換
  md = md.replace(/\*\*([^*\n]+?)\*\*/g, '<strong>$1</strong>');
  let html = marked.parse(md);
  html = html.replace(/<blockquote>\s*<p>\[!(\w+)\]\s*([^\n<]*)(\n|<\/p>)/g, (_, type, title, end) =>
    `<blockquote class="callout callout-${type.toLowerCase()}"><div class="callout-title">${title || type}</div>${end === '\n' ? '<p>' : ''}`);
  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
  for (let i = 0; i < 3 && html.includes('@@PH'); i++) {
    html = html.replace(/@@PH(\d+)@@/g, (_, n) => {
      const v = store[+n];
      if (v.type === 'raw') return v.html;
      return katex.renderToString(v.tex, { displayMode: v.display, throwOnError: false, strict: 'ignore' });
    });
  }
  return html.replace(/<p>(<span class="katex-display">[\s\S]*?<\/span>)<\/p>/g, '$1');
}

// ---------- templates ----------
const NAV = [['⌂ 學習地圖', 'index.html', 'map'], ['基本原則', 'principles.html', 'principles'], ['數據指標', 'metrics.html', 'metrics'], ['工具', 'tools.html', 'tools'], ['完整目錄', 'catalog.html', 'catalog']];
function layout(url, title, body, { active = '', description = '' } = {}) {
  const r = to => rel(url, to);
  return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}${title === SITE_NAME ? '' : ' · ' + SITE_NAME}</title>
${description ? `<meta name="description" content="${esc(description)}">` : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Noto+Sans+TC:wght@400;500;700&family=Press+Start+2P&family=VT323&display=swap">
<link rel="stylesheet" href="${r('assets/katex/katex.min.css')}">
<link rel="stylesheet" href="${r('assets/style.css')}?v=${VER}">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
</head>
<body>
<header class="masthead">
  <div class="masthead-inner">
    <a class="brand" href="${r('index.html')}"><span class="brand-row"><span class="spark" aria-hidden="true">✦</span><span class="brand-en">SABERMETRICS</span><span class="spark sm" aria-hidden="true">✦</span></span><span class="brand-zh">${SITE_NAME}</span></a>
    <button class="theme-toggle px-btn" type="button" aria-label="切換深淺色">◐</button>
  </div>
  <nav class="btn-bar" aria-label="主選單">${NAV.map(([n, h, c]) => `<a class="px-btn btn-${c}" href="${r(h)}"${active === h ? ' aria-current="page"' : ''}>${n}</a>`).join('')}</nav>
</header>
<main class="main">
${body}
</main>
<footer class="footer">個人學習筆記，非 FanGraphs 或 MLB 官方網站；內容為原文摘要，版權屬原作者與原出處。 · <a href="${r('credits.html')}">資料來源與版權</a> · 建置於 ${new Date().toISOString().slice(0, 10)}</footer>
<script src="${r('assets/app.js')}?v=${VER}"></script>
</body>
</html>`;
}

function card(fromUrl, key, opts = {}) {
  const { name, sub } = names(key);
  const ws = widgetOf[key] || [];
  const badges = [];
  if (ws.some(w => WIDGET_KIND[w] === 'calc')) badges.push('<span class="badge calc">🧮 計算器</span>');
  if (ws.some(w => WIDGET_KIND[w] === 'chart')) badges.push('<span class="badge chart">⚾ 互動場景</span>');
  if (opts.cross) badges.push(`<span class="badge cross">投打通用</span>`);
  return `<a class="card${opts.cross ? ' card-cross' : ''}" href="${rel(fromUrl, urlOf(key))}" data-search="${esc((name + ' ' + sub + ' ' + defOf(key)).toLowerCase())}">
  <div class="card-name">${esc(name)}</div>${sub ? `<div class="card-sub">${esc(sub)}</div>` : ''}
  <p class="card-desc">${esc(defOf(key))}</p>
  ${badges.length ? `<div class="badges">${badges.join('')}</div>` : ''}
</a>`;
}
const grid = (url, keys, opts) => `<div class="grid">${keys.map(k => card(url, k, opts)).join('')}</div>`;

// ---------- write helpers ----------
fs.rmSync(DIST, { recursive: true, force: true });
function out(url, html) {
  const p = path.join(DIST, url);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html);
}
const blockCount = b => b.groups.reduce((n, g) => n + g.items.length, 0);

// ---------- home: 學習地圖流程圖 ----------
{
  const url = 'index.html';
  const B = id => METRIC_BLOCKS.find(b => b.id === id);
  const short = k => esc(names(k).name);
  const node = (href, no, title, small, cls = '') => `<a class="node ${cls}" href="${href}"><span class="node-no">${no}</span><strong>${esc(title)}</strong>${small ? `<small>${small}</small>` : ''}</a>`;
  const row = nodes => `<div class="flow-row">${nodes.join('<span class="flow-arrow-h" aria-hidden="true">▶</span>')}</div>`;
  const down = (label = '') => `<div class="flow-down" aria-hidden="true"><span>▼</span>${label ? `<em>${label}</em>` : ''}</div>`;
  const pg = PRINCIPLE_GROUPS;
  const stage1 = row(pg.slice(0, 3).map((g, i) => node(`principles.html#${encodeURIComponent(g.title)}`, `1-${i + 1}`, g.title.split('：')[0], `${esc(g.title.split('：')[1] || '')}<br>${g.items.map(p => short('principles/' + p)).join('・')}`, 'c-principles')));
  const lane = (id, letter, why) => {
    const b = B(id);
    return `<div class="lane lane-${id}">
      <a class="lane-head" href="m/${id}.html"><span class="node-no">路線 ${letter}</span><strong>${b.title}</strong><small>${why}</small></a>
      ${b.groups.map((g, i) => (i ? '<div class="flow-down sm" aria-hidden="true"><span>▼</span></div>' : '') + node(`m/${id}.html#g-${i}`, `${letter}${i + 1}`, g.title, g.items.slice(0, 4).map(m => short('metrics/' + m)).join('・') + (g.items.length > 4 ? ` 等 ${g.items.length} 項` : ''), `c-${id}`)).join('')}
    </div>`;
  };
  const v = B('value');
  const stage3 = row(v.groups.map((g, i) => node(`m/value.html#g-${i}`, `3-${i + 1}`, g.title, g.items.map(m => short('metrics/' + m)).join('・'), 'c-value')));
  const stage4 = row(pg[3].items.map((p, i) => node(rel(url, urlOf('principles/' + p)), `4-${i + 1}`, names('principles/' + p).name, esc(defOf('principles/' + p)), 'c-principles')));
  const tools = row([['hitter-calc', '🧮 打者計算器', 'AVG・OBP・wOBA・wRAA…'], ['pitcher-calc', '🧮 投手計算器', 'ERA・FIP・xFIP・LOB%…'], ['barrel-chart', '⚾ Barrel 擊球場景', '初速 × 仰角 → 完美擊球？'], ['blast-chart', '🏏 Blast 揮棒場景', '揮棒速度 × 打正率']]
    .map(([id, t, d], i) => node(`tools.html#${id}`, `T${i + 1}`, t, d, 'c-tools')));
  const body = `
<section class="hero">
  <p class="hero-kicker">✦ PRESS START ▸ 學習地圖</p>
  <h1>從原理到指標，一步一步看懂賽伯計量學</h1>
  <p>沿著流程圖由上往下走：先建立統計直覺，再分三條路線認識投打守指標，最後整合成 WAR 並學會預測。每個方塊都能點進去。內容編譯自 ${pages.size - 1} 篇知識庫頁面，可追溯至原始來源。</p>
  <p class="hero-links"><a href="${urlOf('overview')}">📖 學習總覽</a><a href="catalog.html">🗂 完整目錄</a><a href="credits.html">📚 資料來源與版權</a></p>
</section>
<section class="flow" aria-label="學習流程圖">
  <div class="stage stage-principles">${winbar('STAGE_1.EXE')}<div class="stage-head"><span class="stage-tag">STAGE 1</span><h2>基本原則：先打底</h2><p>看任何數字前，先知道「什麼是運氣、怎麼把事件換成得分、怎麼公平比較」。</p></div>${stage1}</div>
  ${down('有了這三個觀念，再進入指標')}
  <div class="stage stage-metrics">${winbar('STAGE_2.EXE')}<div class="stage-head"><span class="stage-tag">STAGE 2</span><h2>數據指標：三條路線</h2><p>三條路線可以平行學，建議依 A → B → C 的順序；每條路線由上往下、由淺入深。</p></div>
    <div class="lanes">${lane('offense', 'A', '先學：直接用到線性權重')}${lane('pitching', 'B', '再學：以 DIPS 拆解投手責任')}${lane('defense', 'C', '最後：需要守位調整的觀念')}</div>
  </div>
  ${down('投打守都懂了，才能加總成整體價值')}
  <div class="stage stage-value">${winbar('STAGE_3.EXE')}<div class="stage-head"><span class="stage-tag">STAGE 3</span><h2>綜合價值與情境</h2><p>把投球、進攻、守備換算成勝場（WAR），並理解比賽情境的影響。</p></div>${stage3}</div>
  ${down()}
  <div class="stage stage-time">${winbar('STAGE_4.EXE')}<div class="stage-head"><span class="stage-tag">STAGE 4</span><h2>時間與預測</h2><p>運用前面所有指標，回答「球員未來會怎樣」。</p></div>${stage4}</div>
  <div class="stage stage-tools">${winbar('BONUS.EXE')}<div class="stage-head"><span class="stage-tag">BONUS</span><h2>工具：隨時回來練習</h2><p>任何階段都可以輸入球員數據計算，或在擊球場景中實驗。</p></div>${tools}</div>
</section>`;
  out(url, layout(url, SITE_NAME, body, { active: url, description: '賽伯計量學學習地圖：以流程圖呈現基本原則、數據指標與互動工具的學習順序' }));
}

// ---------- principles ----------
{
  const url = 'principles.html';
  const body = `<h1 class="page-title">基本原則</h1>
<p class="lead">${esc(pages.get('principles/README').content.split('\n').find(l => l.startsWith('本資料夾')) || '')}</p>
${PRINCIPLE_GROUPS.map(g => `<section class="section" id="${esc(g.title)}"><h2>${esc(g.title)}</h2>${grid(url, g.items.map(p => 'principles/' + p))}</section>`).join('')}`;
  out(url, layout(url, '基本原則', body, { active: url }));
}

// ---------- metrics hub + blocks ----------
{
  const url = 'metrics.html';
  const all = METRIC_BLOCKS.flatMap(b => b.groups.flatMap(g => g.items)).map(m => 'metrics/' + m);
  const body = `<h1 class="page-title">數據指標</h1>
<p class="lead">選擇一個區塊開始，或直接搜尋指標。</p>
<div class="grid">${METRIC_BLOCKS.map(b => `<a class="card block-card block-${b.id}" href="m/${b.id}.html"><div class="card-name">${b.title}</div><p class="card-desc">${esc(b.desc)}</p><div class="badges"><span class="badge">${blockCount(b)} 個指標</span></div></a>`).join('')}</div>
<section class="section">
  <h2>搜尋全部指標</h2>
  <input class="search" type="search" placeholder="輸入名稱或關鍵字，例如 wOBA、仰角、捕手…" data-filter="#all-metrics">
  <div id="all-metrics" class="grid filterable">${all.map(k => card(url, k)).join('')}</div>
  <p class="empty" hidden>找不到符合的指標。</p>
</section>`;
  out(url, layout(url, '數據指標', body, { active: url }));

  for (const b of METRIC_BLOCKS) {
    const u = `m/${b.id}.html`;
    const tabs = `<nav class="tabs">${METRIC_BLOCKS.map(x => `<a href="${rel(u, `m/${x.id}.html`)}"${x.id === b.id ? ' aria-current="page"' : ''}>${x.title}</a>`).join('')}</nav>`;
    const body = `<nav class="crumbs"><a href="../index.html">學習路徑</a> › <a href="../metrics.html">數據指標</a> › ${b.title}</nav>
${tabs}
<h1 class="page-title">${b.title}</h1>
<p class="lead">${esc(b.desc)}</p>
<input class="search" type="search" placeholder="在「${b.title}」中搜尋…" data-filter=".block-groups">
<div class="block-groups">
${b.groups.map((g, gi) => `<section class="section group" id="g-${gi}"><h2>${esc(g.title)} <small>${g.items.length}</small></h2>${grid(u, g.items.map(m => 'metrics/' + m))}</section>`).join('')}
${b.cross.length ? `<section class="section group"><h2>投打通用 <small>主分類在其他區塊</small></h2>${grid(u, b.cross.map(m => 'metrics/' + m), { cross: true })}</section>` : ''}
</div>
<p class="empty" hidden>找不到符合的指標。</p>
<section class="section further"><h2>延伸閱讀</h2><ul>${b.further.map(k => `<li><a href="${rel(u, urlOf(k))}">${esc(pages.get(k).data.title)}</a> — ${esc(defOf(k))}</li>`).join('')}</ul></section>`;
    out(u, layout(u, b.title + '指標', `<div class="block-${b.id}">${body}</div>`, { active: 'metrics.html' }));
  }
}

// ---------- tools ----------
{
  const url = 'tools.html';
  const sec = (id, title, lead, links) => `<section class="section tool" id="${id}"><h2>${title}</h2><p class="lead">${lead} 相關頁面：${links.map(m => `<a href="${urlOf('metrics/' + m)}">${esc(names('metrics/' + m).name)}</a>`).join('、')}</p><div class="window">${winbar(id.toUpperCase().replace('-CHART', '-SCENE').replace('-', '_') + '.EXE')}<div class="widget" data-widget="${id}"></div></div></section>`;
  const body = `<h1 class="page-title">工具</h1>
<p class="lead">計算器只收錄知識庫中有明確公式的指標；預設常數取自對應頁面，可自行修改。</p>
${sec('hitter-calc', '🧮 打者計算器', '輸入打者的基本數據（單季或任意區間），即時算出比率與線性權重指標。', WIDGETS['hitter-calc'])}
${sec('pitcher-calc', '🧮 投手計算器', '輸入投手的基本數據；局數可用 180.2 表示 180⅔ 局。', WIDGETS['pitcher-calc'])}
${sec('barrel-chart', '⚾ Barrel 擊球場景', '在球場上拖動擊球方向、調整初速，按「揮棒」看球怎麼飛，以及它是不是 Barrel。', WIDGETS['barrel-chart'])}
${sec('blast-chart', '🏏 Blast 揮棒場景', '調整揮棒速度與擊球點，看這一棒是否既快又正，成為 Blast。', WIDGETS['blast-chart'])}`;
  out(url, layout(url, '工具', body, { active: url }));
}

// ---------- credits ----------
{
  const url = 'credits.html';
  const groups = {};
  for (const i of Object.values(srcInfo)) (groups[i.publisher] ||= []).push(i);
  const body = `<h1 class="page-title">資料來源與版權</h1>
<div class="window">${winbar('README.TXT')}<div class="credits-body">
<p>本網站是個人的賽伯計量學學習筆記，<strong>並非 FanGraphs、MLB 或任何官方網站</strong>。所有頁面都是閱讀下列原文後所寫的摘要、整理與交叉連結；原文的數據、公式、圖表與觀點之版權皆屬原作者與原出處所有，提及的網站與服務名稱之商標屬各自所有者。</p>
<p>原文 PDF 僅保存於作者本機、未在本網站或 GitHub 公開。若要引用，請閱讀並引用下方的原始連結。</p>
</div></div>
${Object.entries(groups).sort((a, b) => b[1].length - a[1].length).map(([pub, list]) => `<section class="section"><h2>${esc(pub)} <small>${list.length} 篇</small></h2>
<div class="table-wrap"><table><thead><tr><th>原文</th><th>作者</th><th>發表日期</th><th>摘要筆記</th></tr></thead><tbody>
${list.sort((a, b) => a.title.localeCompare(b.title)).map(i => `<tr><td>${i.url ? `<a href="${esc(i.url)}" rel="noopener" target="_blank">${esc(i.linkText || i.title)}</a>` : esc(i.title)}</td><td>${esc(i.author)}</td><td>${esc(i.date)}</td><td><a href="${urlOf(i.key)}">筆記</a></td></tr>`).join('')}
</tbody></table></div></section>`).join('')}`;
  out(url, layout(url, '資料來源與版權', body, { description: '本站所有原始資料來源與版權聲明' }));
}

// ---------- articles ----------
const TYPE_LABEL = { metric: '指標', principle: '原則', concept: '概念', entity: '實體', source: '來源', comparison: '比較', synthesis: '綜合', overview: '總覽' };
for (const [key, pg] of pages) {
  if (key.endsWith('README') && key !== 'principles/README') continue;
  const url = urlOf(key);
  let html = renderMd(pg.content.replace(/^- \*\*本地檔案\*\*：.*$/m, '- **本地檔案**：原文 PDF 僅保存於作者本機，未公開發布（請以上方原始連結閱讀原文）'), url);
  const ws = widgetOf[key];
  if (ws) {
    const box = ws.map(w => `<div class="widget-box window">${winbar(WIDGET_KIND[w] === 'calc' ? '🧮 動手算算看 · CALC.EXE' : '⚾ 互動場景 · SCENE.EXE')}<div class="widget" data-widget="${w}" data-focus="${esc(key.slice(8))}"></div></div>`).join('');
    const idx = html.indexOf('<h2', html.indexOf('<h2') + 1);
    html = idx > 0 ? html.slice(0, idx) + box + html.slice(idx) : box + html;
  }
  const loc = locate[key];
  let crumbs = [['學習路徑', 'index.html']];
  if (loc) crumbs = crumbs.concat(loc.trail);
  else if (folderTrail[pg.folder]) crumbs.push(folderTrail[pg.folder]);
  let pager = '';
  if (loc) {
    const i = loc.list.indexOf(key), prev = loc.list[i - 1], next = loc.list[i + 1];
    pager = `<nav class="pager">${prev ? `<a class="prev" href="${rel(url, urlOf(prev))}">← ${esc(names(prev).name)}</a>` : '<span></span>'}${next ? `<a class="next" href="${rel(url, urlOf(next))}">${esc(names(next).name)} →</a>` : ''}</nav>`;
  }
  const d = pg.data;
  const title = key === 'index' ? '完整目錄' : String(d.title || key);
  const meta = key === 'index' || key === 'log' ? '' : `<div class="meta">${d.type ? `<span class="chip">${TYPE_LABEL[d.type] || d.type}</span>` : ''}${loc?.group ? `<span class="chip">${esc(loc.group)}</span>` : ''}${d.updated ? `<span>更新 ${esc(d.updated instanceof Date ? d.updated.toISOString().slice(0, 10) : d.updated)}</span>` : ''}${d.status && d.status !== 'active' ? `<span class="chip warn">${esc(d.status)}</span>` : ''}</div>`;
  const body = `<article class="article">
<nav class="crumbs">${crumbs.map(([n, h]) => `<a href="${rel(url, h)}">${n}</a>`).join(' › ')}</nav>
<h1>${esc(title)}</h1>
${meta}
<div class="window window-doc">${winbar(esc(key.split('/').pop()) + '.md')}<div class="prose">${html}</div></div>
${(() => {
  const ks = key.startsWith('sources/') ? [] : srcKeysOf(pg);
  if (!ks.length) return '';
  return `<aside class="window credits-box">${winbar('📚 原始出處 · CREDITS.TXT')}<div class="credits-body"><ul>${ks.map(k => { const i = srcInfo[k];
    return `<li>${i.author ? esc(i.author) + '，' : ''}〈${i.url ? `<a href="${esc(i.url)}" rel="noopener" target="_blank">${esc(i.linkText || i.title)}</a>` : esc(i.title)}〉，${esc(i.publisher)}${i.date && !i.date.startsWith('未標示') ? '，' + esc(i.date) : ''}。<a class="muted" href="${rel(url, urlOf(k))}">摘要筆記</a></li>`; }).join('')}</ul>
  <p class="muted">本頁為上述原文的摘要與整理，數據、公式與觀點之版權屬原作者與原出處；引用請以原文為準。</p></div></aside>`;
})()}
${pager}
</article>`;
  out(url, layout(url, title, body, { active: key === 'index' ? 'catalog.html' : (loc ? loc.trail[0][1] : ''), description: defOf(key) }));
}

// ---------- assets ----------
fs.cpSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'), { recursive: true });
const kd = path.join(ROOT, 'node_modules', 'katex', 'dist');
fs.mkdirSync(path.join(DIST, 'assets', 'katex'), { recursive: true });
fs.copyFileSync(path.join(kd, 'katex.min.css'), path.join(DIST, 'assets', 'katex', 'katex.min.css'));
fs.cpSync(path.join(kd, 'fonts'), path.join(DIST, 'assets', 'katex', 'fonts'), { recursive: true });

console.log(`完成：${pages.size} 篇 wiki 頁面 → ${DIST}（指標 ${metricKeys.length}，全部已歸類）`);
