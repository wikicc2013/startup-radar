#!/usr/bin/env node
/*
 * build-rankings.cjs —— 榜单页
 * 单一真源：data/companies.json
 * 产物：rankings.html —— 融资榜 + 高置信灯塔客户榜 + 赛道热度榜
 * 用法：node scripts/build-rankings.cjs
 */
const fs = require('fs');
const path = require('path');
const { parseUsd } = require('./lib/money.cjs');
const { categories } = require('./lib/taxonomy.cjs');
const REPO = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(REPO, 'data/companies.json'), 'utf8'));
const list = (Array.isArray(data) ? data : data.companies);
const reviewed = list.filter(x => x.status === 'reviewed');
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const badgeClass = tier => (tier === 'A1' ? 'a1' : 'a2');

const amountLabel = a => String(a || '').split(/[（(]/)[0].trim();
function bestFunding(x) { // 取金额最大的一条「融资轮」（排除并购/收购/退出对价，避免把退出价当融资）
  let best = null, bv = -1;
  for (const f of (x.funding || [])) {
    if (/并购|收购|退出|acquired|acquisition|IPO|上市|LOI|意向书|估值|valuation/i.test(`${f.round || ''} ${f.amount || ''}`)) continue;
    const v = parseUsd(f.amount); if (v > bv) { bv = v; best = f; }
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
// 二级赛道样本分布（分类体系 2.0）
const revTheme = {};
categories.forEach(category => category.subcategories.forEach(item => { revTheme[item.label] = 0; }));
reviewed.forEach(x => { if (x.subcategory in revTheme) revTheme[x.subcategory]++; });
const themeCount = categories.flatMap(category => category.subcategories.map(item => ({
  t: { title: item.label, emoji: '' },
  n: revTheme[item.label],
}))).filter(item => item.n).sort((a, b) => b.n - a.n);
const maxTheme = Math.max(1, ...themeCount.map(e => e.n));
const csvCell = x => `"${String(x).replace(/"/g, '""')}"`;
const CSV = '﻿排名,公司,档,金额,轮次,批次\n' + fundRank.map((e, i) =>
  [i + 1, e.x.name, e.x.tier, amountLabel(e.f.amount), amountLabel(e.f.round), e.x.batch].map(csvCell).join(',')).join('\n');
const EXPORT_JS = `<script>const __CSV=${JSON.stringify(CSV)};function __dl(){const b=new Blob([__CSV],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='融资榜.csv';document.body.appendChild(a);a.click();a.remove();return false;}</script>`;

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
<div class="obar"><a class="back" href="index.html">← 查询看板</a><span><a href="overview.html">深研总览</a><a href="benchmarks.html">国内对标索引</a><a href="trends.html">趋势</a><a href="investors.html">投资版图</a></span> <a href="#" onclick="return __dl()" style="cursor:pointer">⬇ 导出融资榜</a></div>
<header class="rhero">
 <div class="kicker">转型有术 · STARTUP RADAR · 榜单</div>
 <h1>深研榜单</h1>
 <p>从 ${reviewed.length} 份深研档案自动生成的三张榜：谁拿了最多钱、谁签下了可交叉验证的灯塔客户、哪条赛道样本最多。金额取各公司可解析的最大一轮；没有汇率日期时只对美元口径排序，其他币种保留原文但不做跨币种硬排。</p>
</header>

<section class="rsec"><h2>💰 融资榜</h2><p class="sub">${fundRank.length} 家有可解析金额，按已披露最大一轮降序。</p>
<table class="rtable"><thead><tr><th>#</th><th>公司</th><th>金额</th><th class="hidesm">轮次</th><th class="hidesm">一句话</th><th>批次</th></tr></thead><tbody>
${fundRows(fundRank)}
</tbody></table></section>

<section class="rsec"><h2>🏮 高置信灯塔客户榜</h2><p class="sub">${beacon.length} 家有官方 case study / 可交叉验证的具名客户，可直接作为落地案例引用。</p>
<table class="rtable"><thead><tr><th>#</th><th>公司</th><th>灯塔客户</th><th>批次</th></tr></thead><tbody>
${beacon.map((e, i) => `<tr><td class="rk">${i + 1}</td><td class="rname"><a href="companies/${e.x.slug}.html"><span class="badge ${badgeClass(e.x.tier)}">${esc(e.x.tier)}</span> ${esc(e.x.name)}</a></td><td>${esc(e.cust.name)}</td><td>${esc(e.x.batch)}</td></tr>`).join('')}
</tbody></table></section>

<section class="rsec"><h2>🧭 二级赛道样本分布</h2><p class="sub">分类体系 2.0 的 ${themeCount.length} 个二级产品赛道按深研家数排序；样本数不直接等同市场热度。</p>
<div class="bars">
${themeCount.map(e => `<div class="bar"><span class="bl">${e.t.emoji} ${esc(e.t.title.split('·')[0])}</span><span class="btrack"><span class="bfill" style="width:${Math.round(e.n / maxTheme * 100)}%"></span></span><span class="bn">${e.n}</span></div>`).join('')}
</div></section>

<footer class="foot" style="margin-top:30px">由 <code>node scripts/build-rankings.cjs</code> 从 data/companies.json 生成 · 仅美元口径参与金额排序，展示以原文为准 · 直通模式 auto，仅供导航</footer>
${EXPORT_JS}
</div></body></html>`;

fs.writeFileSync(path.join(REPO, 'rankings.html'), h, 'utf8');
console.log(`✅ rankings.html：融资榜 ${fundRank.length} 家 | 灯塔客户 ${beacon.length} 家 | 赛道 ${themeCount.length} 簇`);
console.log('融资榜 Top 12:');
fundRank.slice(0, 12).forEach((e, i) => console.log(`  #${i + 1} ${e.x.name} — ${amountLabel(e.f.amount)} (排序值 ${(e.usd / 1e6).toFixed(1)}M)`));
console.log('金额解析为0而落榜的（抽查是否漏）:');
reviewed.filter(x => { const b = bestFunding(x); return !b && (x.funding || []).some(f => /[\d]/.test(f.amount || '')); }).slice(0, 10).forEach(x => console.log(`  ${x.name}: ${(x.funding[0] || {}).amount}`));
