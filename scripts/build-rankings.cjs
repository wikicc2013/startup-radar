#!/usr/bin/env node
/*
 * build-rankings.cjs —— 榜单页
 * 单一真源：data/companies.json
 * 产物：rankings.html —— 融资榜 + 高置信灯塔客户榜 + 赛道热度榜
 * 用法：node scripts/build-rankings.cjs
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(REPO, 'data/companies.json'), 'utf8'));
const list = (Array.isArray(data) ? data : data.companies);
let themesCfg = { themes: [], assign: {} };
try { themesCfg = JSON.parse(fs.readFileSync(path.join(REPO, 'data/themes.json'), 'utf8')); } catch (e) {}
const reviewed = list.filter(x => x.status === 'reviewed');
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const badgeClass = tier => (tier === 'A1' ? 'a1' : 'a2');

// 金额 → USD 约数（用于排序；€/¥ 粗按等值处理，展示仍用原文）
function parseAmt(a) {
  if (!a) return 0;
  const s = String(a).replace(/,/g, '').replace(/\s/g, '');
  let m;
  if (m = s.match(/([\d.]+)亿/)) return parseFloat(m[1]) * 1e8;
  if (m = s.match(/([\d.]+)万美元/)) return parseFloat(m[1]) * 1e4;
  if (m = s.match(/([\d.]+)百万/)) return parseFloat(m[1]) * 1e6;
  if (m = s.match(/([\d.]+)万/)) return parseFloat(m[1]) * 1e4;
  if (m = s.match(/[\$€¥]?([\d.]+)M/i)) return parseFloat(m[1]) * 1e6;
  if (m = s.match(/[\$€¥]?([\d.]+)K/i)) return parseFloat(m[1]) * 1e3;
  if (m = s.match(/[\$€¥]([\d.]+)/)) return parseFloat(m[1]);
  return 0;
}
const amountLabel = a => String(a || '').split(/[（(]/)[0].trim();
function bestFunding(x) { // 取金额最大的一条「融资轮」（排除并购/收购/退出对价，避免把退出价当融资）
  let best = null, bv = -1;
  for (const f of (x.funding || [])) {
    if (/并购|收购|退出|acquired|acquisition|IPO|上市/i.test(f.round || '')) continue;
    const v = parseAmt(f.amount); if (v > bv) { bv = v; best = f; }
  }
  return best && bv > 0 ? { f: best, usd: bv } : null;
}
// 融资榜
const fundRank = reviewed.map(x => { const b = bestFunding(x); return b && b.usd > 0 ? { x, usd: b.usd, f: b.f } : null; })
  .filter(Boolean).sort((a, b) => b.usd - a.usd);
// 灯塔客户榜
const beacon = reviewed.filter(x => (x.early_customers || []).some(u => u.confidence === '高'))
  .map(x => ({ x, cust: (x.early_customers || []).find(u => u.confidence === '高') }))
  .sort((a, b) => a.x.num - b.x.num);
// 赛道热度榜（只数已深研档，与 overview 口径一致；C 档全盘趋势见 trends 页）
const revTheme = {}; themesCfg.themes.forEach(t => revTheme[t.id] = 0);
reviewed.forEach(x => { const id = themesCfg.assign[x.slug]; if (id && revTheme[id] != null) revTheme[id]++; });
const themeCount = themesCfg.themes.map(t => ({ t, n: revTheme[t.id] })).sort((a, b) => b.n - a.n);
const maxTheme = Math.max(1, ...themeCount.map(e => e.n));

const STYLE = `.rwrap{max-width:1120px;margin:0 auto;padding:24px 20px 60px}
.obar{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--sub)}
.obar a{margin-left:12px}
.rhero{background:linear-gradient(140deg,var(--card),var(--accent-soft));border:1px solid var(--line);border-radius:20px;padding:30px 30px 26px;margin:8px 0 22px}
.rhero .kicker{font-size:12.5px;letter-spacing:.14em;color:var(--accent);font-weight:700;text-transform:uppercase}
.rhero h1{margin:.15em 0 .1em;font-size:32px;letter-spacing:-.5px}
.rhero p{margin:.4em 0 0;color:var(--sub);font-size:15px;max-width:74ch}
.rsec{margin-top:34px}
.rsec>h2{font-size:20px;margin:0 0 4px;display:flex;align-items:center;gap:10px}
.rsec .sub{font-size:13px;color:var(--sub);margin:0 0 12px}
.rtable{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:13.5px}
.rtable th{text-align:left;font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--sub);padding:10px 14px;border-bottom:1px solid var(--line);background:var(--lo-bg)}
.rtable td{padding:9px 14px;border-bottom:1px solid var(--line)}
.rtable tr:last-child td{border-bottom:none}
.rtable tr:hover td{background:var(--accent-soft)}
.rk{font-variant-numeric:tabular-nums;color:var(--sub);font-weight:700;width:38px}
.ramt{font-weight:800;color:var(--hi);white-space:nowrap;font-variant-numeric:tabular-nums}
.rname{font-weight:700}
.rname a{color:var(--ink)} .rname a:hover{color:var(--accent)}
.bars{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
.bar{display:grid;grid-template-columns:220px 1fr 44px;align-items:center;gap:12px;margin:7px 0;font-size:13px}
.bar .bl{color:var(--ink)} .bar .bn{text-align:right;color:var(--sub);font-variant-numeric:tabular-nums}
.bar .btrack{background:var(--lo-bg);border-radius:6px;height:16px;overflow:hidden}
.bar .bfill{height:100%;background:linear-gradient(90deg,var(--accent),var(--hi));border-radius:6px}
@media(max-width:640px){.rhero h1{font-size:25px}.bar{grid-template-columns:130px 1fr 34px}.rtable .hidesm{display:none}}`;

function fundRows(rows) {
  return rows.map((e, i) => `<tr><td class="rk">${i + 1}</td><td class="rname"><a href="companies/${e.x.slug}.html"><span class="badge ${badgeClass(e.x.tier)}">${esc(e.x.tier)}</span> ${esc(e.x.name)}</a></td><td class="ramt">${esc(amountLabel(e.f.amount))}</td><td class="hidesm">${esc(amountLabel(e.f.round) || '—')}</td><td class="hidesm">${esc(e.x.one_liner_zh)}</td><td>${esc(e.x.batch)}</td></tr>`).join('');
}

let h = `<!doctype html><html lang="zh-CN"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>榜单 · AI青梅创业公司数据库</title>
<link rel="stylesheet" href="companies/company.css">
<style>
${STYLE}
</style></head><body>
<div class="rwrap">
<div class="obar"><a class="back" href="index.html">← 查询看板</a><span><a href="overview.html">深研总览</a><a href="benchmarks.html">国内对标索引</a><a href="trends.html">趋势</a><a href="investors.html">投资版图</a></span></div>
<header class="rhero">
 <div class="kicker">转型有术 · STARTUP RADAR · 榜单</div>
 <h1>深研榜单</h1>
 <p>从 ${reviewed.length} 份深研档案自动生成的三张榜：谁拿了最多钱、谁签下了可交叉验证的灯塔客户、哪条赛道最拥挤。金额取各公司已披露的最大一轮，币种以原文为准（€/¥ 仅按等值粗排）。</p>
</header>

<section class="rsec"><h2>💰 融资榜</h2><p class="sub">${fundRank.length} 家有可解析金额，按已披露最大一轮降序。</p>
<table class="rtable"><thead><tr><th>#</th><th>公司</th><th>金额</th><th class="hidesm">轮次</th><th class="hidesm">一句话</th><th>批次</th></tr></thead><tbody>
${fundRows(fundRank)}
</tbody></table></section>

<section class="rsec"><h2>🏮 高置信灯塔客户榜</h2><p class="sub">${beacon.length} 家有官方 case study / 可交叉验证的具名客户，可直接作为落地案例引用。</p>
<table class="rtable"><thead><tr><th>#</th><th>公司</th><th>灯塔客户</th><th>批次</th></tr></thead><tbody>
${beacon.map((e, i) => `<tr><td class="rk">${i + 1}</td><td class="rname"><a href="companies/${e.x.slug}.html"><span class="badge ${badgeClass(e.x.tier)}">${esc(e.x.tier)}</span> ${esc(e.x.name)}</a></td><td>${esc(e.cust.name)}</td><td>${esc(e.x.batch)}</td></tr>`).join('')}
</tbody></table></section>

<section class="rsec"><h2>🔥 赛道热度榜</h2><p class="sub">10 个主题簇按深研家数排序（聚类见 data/themes.json）。</p>
<div class="bars">
${themeCount.map(e => `<div class="bar"><span class="bl">${e.t.emoji} ${esc(e.t.title.split('·')[0])}</span><span class="btrack"><span class="bfill" style="width:${Math.round(e.n / maxTheme * 100)}%"></span></span><span class="bn">${e.n}</span></div>`).join('')}
</div></section>

<footer class="foot" style="margin-top:30px">由 <code>node scripts/build-rankings.cjs</code> 从 data/companies.json 生成 · 金额解析用于排序，展示以原文为准 · 直通模式 auto，仅供导航</footer>
</div></body></html>`;

fs.writeFileSync(path.join(REPO, 'rankings.html'), h, 'utf8');
console.log(`✅ rankings.html：融资榜 ${fundRank.length} 家 | 灯塔客户 ${beacon.length} 家 | 赛道 ${themeCount.length} 簇`);
console.log('融资榜 Top 12:');
fundRank.slice(0, 12).forEach((e, i) => console.log(`  #${i + 1} ${e.x.name} — ${amountLabel(e.f.amount)} (排序值 ${(e.usd / 1e6).toFixed(1)}M)`));
console.log('金额解析为0而落榜的（抽查是否漏）:');
reviewed.filter(x => { const b = bestFunding(x); return !b && (x.funding || []).some(f => /[\d]/.test(f.amount || '')); }).slice(0, 10).forEach(x => console.log(`  ${x.name}: ${(x.funding[0] || {}).amount}`));
