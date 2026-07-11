#!/usr/bin/env node
/*
 * build-investors.cjs —— 投资版图页
 * 单一真源：data/companies.json 的 x.investors（领投/跟投）+ data/themes.json（价值链维度）
 * 产物：investors.html —— 投资机构 → 投了哪些新锐 × 哪个价值链环节
 * 用法：node scripts/build-investors.cjs
 * 说明：排除 Y Combinator（它投了全部样本，无区分度）；聚焦其余机构的下注版图。
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const d = JSON.parse(fs.readFileSync(REPO + '/data/companies.json', 'utf8'));
const list = (Array.isArray(d) ? d : d.companies);
const { themes, assign } = JSON.parse(fs.readFileSync(REPO + '/data/themes.json', 'utf8'));
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const badgeClass = tier => (tier === 'A1' ? 'a1' : 'a2');
const emojiOf = {}; themes.forEach(t => emojiOf[t.id] = t.emoji);
const titleOf = {}; themes.forEach(t => titleOf[t.id] = t.title);

const EXCLUDE = /^(y ?combinator|yc)$/i;
const ALIAS = { 'liquid 2 ventures': 'Liquid2 Ventures', 'liquid2 ventures': 'Liquid2 Ventures', 'sv angel': 'SV Angel' };
const norm = s => { const t = String(s).replace(/\s+/g, ' ').trim(); return ALIAS[t.toLowerCase()] || t; };

// 机构 -> 投资的公司
const vc = {};
const withInv = list.filter(x => x.investors && (x.investors.lead || (x.investors.investors || []).length));
for (const x of withInv) {
  const lead = x.investors.lead && !/未披露/.test(x.investors.lead) ? x.investors.lead : null;
  const leadSet = new Set((lead || '').split(/[、,，与和及\/]| and /i).map(norm).filter(Boolean));
  const set = new Map(); // name -> isLead
  (x.investors.investors || []).forEach(n => { const nm = norm(n); if (nm) set.set(nm, leadSet.has(nm)); });
  leadSet.forEach(nm => set.set(nm, true));
  for (const [nm, isLead] of set) {
    if (EXCLUDE.test(nm)) continue;
    (vc[nm] = vc[nm] || []).push({ slug: x.slug, name: x.name, tier: x.tier, dim: assign[x.slug], liner: x.one_liner_zh, lead: isLead });
  }
}
const all = Object.entries(vc).map(([v, arr]) => ({ v, arr: arr.sort((a, b) => a.name.localeCompare(b.name)) })).sort((a, b) => b.arr.length - a.arr.length || a.v.localeCompare(b.v));
const core = all.filter(e => e.arr.length >= 2);
const tail = all.filter(e => e.arr.length === 1);
const covered = new Set(withInv.map(x => x.slug));
const csvCell = x => `"${String(x).replace(/"/g, '""')}"`;
const CSV = '﻿机构,出手数,领投数,投资的公司\n' + core.map(e =>
  [e.v, e.arr.length, e.arr.filter(a => a.lead).length, e.arr.map(a => a.name).join('; ')].map(csvCell).join(',')).join('\n');
const EXPORT_JS = `<script>const __CSV=${JSON.stringify(CSV)};function __dl(){const b=new Blob([__CSV],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='投资版图.csv';document.body.appendChild(a);a.click();a.remove();return false;}</script>`;

const STYLE = `.iwrap{max-width:1120px;margin:0 auto;padding:24px 20px 60px}
.obar{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--sub)}.obar a{margin-left:12px}
.ihero{background:linear-gradient(140deg,var(--card),var(--accent-soft));border:1px solid var(--line);border-radius:20px;padding:30px 30px 26px;margin:8px 0 22px}
.ihero .kicker{font-size:12.5px;letter-spacing:.14em;color:var(--accent);font-weight:700;text-transform:uppercase}
.ihero h1{margin:.15em 0 .1em;font-size:32px;letter-spacing:-.5px}
.ihero p{margin:.4em 0 0;color:var(--sub);font-size:15px;max-width:76ch}
.statgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:22px}
.stile{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 16px}
.stile .sn{font-size:26px;font-weight:800}.stile .sl{font-size:12px;color:var(--sub);margin-top:2px}
.vgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:14px;margin-top:20px}
.vcard{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
.vhead{display:flex;align-items:baseline;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:10px}
.vrank{font-size:13px;color:var(--sub);font-weight:700}
.vname{font-size:18px;font-weight:800;color:var(--ink)}
.vcount{margin-left:auto;font-size:12px;font-weight:700;color:var(--hi);background:var(--hi-bg);padding:3px 10px;border-radius:999px;white-space:nowrap}
.vchips{display:flex;flex-wrap:wrap;gap:7px}
.vchip{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;background:var(--lo-bg);border:1px solid var(--line);border-radius:9px;padding:4px 9px;color:var(--ink)}
.vchip:hover{text-decoration:none;border-color:var(--accent);color:var(--accent)}
.vchip .badge{font-size:10px;padding:1px 5px}
.vchip .lead{color:var(--hi);font-weight:800}
.tailbox{background:var(--card);border:1px dashed var(--line);border-radius:14px;padding:16px 18px;margin-top:24px;font-size:13px;color:var(--sub);line-height:1.9}
.tailbox b{color:var(--ink)}.tailbox .tv{display:inline-block;margin:2px 8px 2px 0;padding:1px 8px;background:var(--lo-bg);border-radius:7px}
@media(max-width:640px){.statgrid{grid-template-columns:1fr}.vgrid{grid-template-columns:1fr}.ihero h1{font-size:25px}}`;

function vcard(e, i) {
  const dims = {}; e.arr.forEach(a => dims[a.dim] = (dims[a.dim] || 0) + 1);
  const chips = e.arr.map(a => `<a class="vchip" href="companies/${a.slug}.html" title="${esc(titleOf[a.dim] || '')}｜${esc(a.liner)}">${emojiOf[a.dim] || ''}<span class="badge ${badgeClass(a.tier)}">${esc(a.tier)}</span>${esc(a.name)}${a.lead ? '<span class="lead" title="领投">★</span>' : ''}</a>`).join('');
  return `<div class="vcard"><div class="vhead"><span class="vrank">#${i + 1}</span><span class="vname">${esc(e.v)}</span><span class="vcount">投了 ${e.arr.length} 家</span></div><div class="vchips">${chips}</div></div>`;
}

let h = `<!doctype html><html lang="zh-CN"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>投资版图 · AI青梅创业公司数据库</title>
<link rel="stylesheet" href="companies/company.css">
<style>
${STYLE}
</style></head><body>
<div class="iwrap">
<div class="obar"><a class="back" href="index.html">← 查询看板</a><span><a href="overview.html">深研总览</a><a href="benchmarks.html">国内对标</a><a href="rankings.html">榜单</a><a href="trends.html">趋势</a></span> <a href="#" onclick="return __dl()" style="cursor:pointer">⬇ 导出CSV</a></div>
<header class="ihero">
 <div class="kicker">转型有术 · STARTUP RADAR · 投资版图</div>
 <h1>投资版图 · 谁在下注</h1>
 <p>把 ${covered.size} 家有融资披露的新锐的领投/跟投机构反向聚合：哪些基金在重仓 AI 创业、下注在哪个价值链环节？★ 标记为领投。已剔除 Y Combinator（它投了全部样本，无区分度）。</p>
 <div class="statgrid">
  <div class="stile"><div class="sn">${core.length}</div><div class="sl">出手 ≥2 家的机构</div></div>
  <div class="stile"><div class="sn">${covered.size}</div><div class="sl">已补投资方的公司</div></div>
  <div class="stile"><div class="sn">${all.length}</div><div class="sl">涉及机构总数</div></div>
 </div>
</header>
<div class="vgrid">
${core.map(vcard).join('\n')}
</div>
<div class="tailbox">另有 <b>${tail.length}</b> 家机构各只出手 1 家（长尾，未单列）。抽样：${tail.slice(0, 40).map(e => `<span class="tv">${esc(e.v)}</span>`).join('')}</div>
<footer class="foot" style="margin-top:30px">由 <code>node scripts/build-investors.cjs</code> 从 data/companies.json 生成 · 投资方经联网核对带来源 · 仅统计有融资披露的深研公司 · 仅供导航</footer>
${EXPORT_JS}
</div></body></html>`;

fs.writeFileSync(REPO + '/investors.html', h, 'utf8');
console.log(`✅ investors.html：机构总数 ${all.length} | 出手≥2 家 ${core.length} | 覆盖公司 ${covered.size}`);
console.log('出手最多 Top 12:');
core.slice(0, 12).forEach((e, i) => console.log(`  #${i + 1} ${e.v} — ${e.arr.length} 家`));
