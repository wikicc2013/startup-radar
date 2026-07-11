#!/usr/bin/env node
/*
 * build-benchmarks.cjs —— 国内对标 · 反向情报索引页
 * 单一真源：data/companies.json 的 cn_benchmarks 字段
 * 产物：benchmarks.html —— 国内厂商 → 正被哪些海外 YC 新锐当作对标（转型有术竞品情报视角）
 * 用法：node scripts/build-benchmarks.cjs
 * 说明：cn_benchmarks 为自由文本，本脚本做「提取 + 归一化」，厂商名可能有少量合并误差，仅供导航。
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(REPO, 'data/companies.json'), 'utf8'));
const companies = (Array.isArray(data) ? data : data.companies).filter(x => x.status === 'reviewed');

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 同义合并
const ALIAS = {
  '影刀': '影刀 RPA', '影刀RPA': '影刀 RPA',
  '来也': '来也科技', 'UiBot': '来也科技',
  '实在智能TARS': '实在智能',
  '满帮': '满帮集团',
  '百炼': '阿里云百炼', '阿里百炼': '阿里云百炼',
  '阿里通义': '通义', '阿里云通义': '通义',
  '面壁': '面壁智能',
  '钉钉AI': '钉钉', '钉钉AI助理': '钉钉', '钉钉宜搭': '钉钉',
  '飞书AI': '飞书',
  '字节跳动': '字节', '字节扣子': '扣子', '扣子Coze': '扣子', 'Coze': '扣子',
};
const norm = t => ALIAS[t] || t;
// 精确丢弃的泛词（非具体厂商）
const STOP = new Set(['国内', '身份认证', '浏览器', '低代码', '采购', '记忆基座', 'MES', 'RPA', 'IAM',
  'DLP', 'CAE', 'EDA', 'OCR', 'ERP', 'CRM', 'SCRM', 'AI防火墙', '向量数据库', '大模型', '知识库',
  '国产EDA', '国产CAD', '云厂商', 'iPaaS', 'AI', 'Agent', '海外']);
// 含这些描述性词的候选丢弃
const NOISE = /暂无|对标|方向|领域|厂商|能力|以及|类似|尚无|相邻|思路|尝试|逻辑|映射|类比|参照|之类|各家|本地化|生态|中间层|中间件|承保|费控|后台|私域|防火墙|数据库|向量|基座|自动化$|平台$|工具$|系统$|服务$|框架$|方案$/;

function extract(str) {
  const head = String(str).split(/——|（|\(|：|:/)[0]; // 去长描述
  return head.split(/[、，,\/]/).map(t => {
    t = t.trim();
    if (/[一-龥]/.test(t)) t = t.replace(/[A-Za-z0-9.+\-]+$/, ''); // 含中文→去尾部英文
    return t.replace(/\s+/g, '').trim();
  }).filter(Boolean);
}

// 聚合：厂商 -> Map(slug -> 公司)
const vendor = {};
for (const x of companies) {
  const seen = new Set();
  for (const b of (x.cn_benchmarks || [])) {
    for (const cand of extract(b)) {
      const t = norm(cand);
      if (STOP.has(t)) continue;
      if (/^[A-Za-z]/.test(t) ? t.length > 12 : (t.length < 2 || t.length > 9)) continue;
      if (NOISE.test(t)) continue;
      if (seen.has(t)) continue; seen.add(t); // 同一家公司内去重
      (vendor[t] = vendor[t] || []).push({ name: x.name, slug: x.slug, tier: x.tier, liner: x.one_liner_zh, batch: x.batch });
    }
  }
}
const all = Object.entries(vendor).map(([v, arr]) => ({ v, arr })).sort((a, b) => b.arr.length - a.arr.length || a.v.localeCompare(b.v));
const core = all.filter(e => e.arr.length >= 2);
const tail = all.filter(e => e.arr.length === 1);
const coveredSlugs = new Set(core.flatMap(e => e.arr.map(a => a.slug)));

const badgeClass = tier => (tier === 'A1' ? 'a1' : 'a2');

const STYLE = `.bwrap{max-width:1120px;margin:0 auto;padding:24px 20px 60px}
.obar{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--sub)}
.bhero{background:linear-gradient(140deg,var(--card),var(--accent-soft));border:1px solid var(--line);border-radius:20px;padding:30px 30px 26px;margin:8px 0 22px}
.bhero .kicker{font-size:12.5px;letter-spacing:.14em;color:var(--accent);font-weight:700;text-transform:uppercase}
.bhero h1{margin:.15em 0 .1em;font-size:32px;letter-spacing:-.5px}
.bhero p{margin:.4em 0 0;color:var(--sub);font-size:15px;max-width:74ch}
.statgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:22px}
.stile{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 16px}
.stile .sn{font-size:26px;font-weight:800;letter-spacing:-.5px}
.stile .sl{font-size:12px;color:var(--sub);margin-top:2px}
.vgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:14px;margin-top:20px}
.vcard{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
.vhead{display:flex;align-items:baseline;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:10px}
.vrank{font-size:13px;color:var(--sub);font-weight:700;font-variant-numeric:tabular-nums}
.vname{font-size:19px;font-weight:800;color:var(--ink);letter-spacing:-.3px}
.vcount{margin-left:auto;font-size:12px;font-weight:700;color:var(--hi);background:var(--hi-bg);padding:3px 10px;border-radius:999px;white-space:nowrap}
.vchips{display:flex;flex-wrap:wrap;gap:7px}
.vchip{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;background:var(--lo-bg);border:1px solid var(--line);border-radius:9px;padding:4px 9px 4px 6px;color:var(--ink)}
.vchip:hover{text-decoration:none;border-color:var(--accent);color:var(--accent)}
.vchip .badge{font-size:10px;padding:1px 5px}
.tailbox{background:var(--card);border:1px dashed var(--line);border-radius:14px;padding:16px 18px;margin-top:24px;font-size:13px;color:var(--sub);line-height:1.9}
.tailbox b{color:var(--ink)}
.tailbox .tv{display:inline-block;margin:2px 8px 2px 0;padding:1px 8px;background:var(--lo-bg);border-radius:7px}
@media(max-width:640px){.statgrid{grid-template-columns:1fr}.vgrid{grid-template-columns:1fr}.bhero h1{font-size:25px}}`;

function vcard(e, i) {
  const chips = e.arr.sort((a, b) => a.num - b.num).map(a =>
    `<a class="vchip" href="companies/${a.slug}.html" title="${esc(a.liner)}"><span class="badge ${badgeClass(a.tier)}">${esc(a.tier)}</span>${esc(a.name)}</a>`).join('');
  return `<div class="vcard"><div class="vhead"><span class="vrank">#${i + 1}</span><span class="vname">${esc(e.v)}</span><span class="vcount">被 ${e.arr.length} 家对标</span></div><div class="vchips">${chips}</div></div>`;
}

let h = `<!doctype html><html lang="zh-CN"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>国内对标 · 反向情报索引 · AI青梅创业公司数据库</title>
<link rel="stylesheet" href="companies/company.css">
<style>
${STYLE}
</style></head><body>
<div class="bwrap">
<div class="obar"><a class="back" href="index.html">← 查询看板</a><span><a href="overview.html">深研总览</a> · <a href="rankings.html">榜单</a> · 数据真源 data/companies.json</span></div>
<header class="bhero">
 <div class="kicker">转型有术 · STARTUP RADAR · 竞品情报</div>
 <h1>国内对标 · 反向情报索引</h1>
 <p>把 ${companies.length} 份深研档案里的「国内对标厂商」反向聚合：一家国内厂商，正被哪些海外 YC 新锐当作对标物？这是判断国产供应商所处赛道热度、以及为制造业客户做选型参照的竞品情报视角。厂商名由 cn_benchmarks 自由文本自动提取归一化，仅供导航。</p>
 <div class="statgrid">
  <div class="stile"><div class="sn">${core.length}</div><div class="sl">被 ≥2 家对标的国内厂商</div></div>
  <div class="stile"><div class="sn">${coveredSlugs.size}</div><div class="sl">涉及的海外新锐</div></div>
  <div class="stile"><div class="sn">${tail.length}</div><div class="sl">长尾厂商（各被 1 家对标）</div></div>
 </div>
</header>
<div class="vgrid">
${core.map(vcard).join('\n')}
</div>
<div class="tailbox">另有 <b>${tail.length}</b> 家国内厂商各被 1 家海外新锐单独对标（长尾，未单列）。高频长尾抽样：${tail.slice(0, 40).map(e => `<span class="tv">${esc(e.v)}</span>`).join('')}</div>
<footer class="foot" style="margin-top:30px">由 <code>node scripts/build-benchmarks.cjs</code> 从 data/companies.json 的 cn_benchmarks 生成 · 自由文本自动提取，厂商名经归一化合并，可能有少量误差 · 仅供导航</footer>
</div></body></html>`;

fs.writeFileSync(path.join(REPO, 'benchmarks.html'), h, 'utf8');
console.log(`✅ benchmarks.html 生成：核心厂商(≥2) ${core.length} | 涉及新锐 ${coveredSlugs.size} | 长尾 ${tail.length}`);
console.log('Top 20:'); core.slice(0, 20).forEach((e, i) => console.log(`  #${i + 1} ${e.v} — ${e.arr.length} 家`));
