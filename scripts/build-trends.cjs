#!/usr/bin/env node
/*
 * build-trends.cjs —— AI 创业趋势洞察页
 * 单一真源：data/companies.json + data/taxonomy.json
 * 产物：trends.html —— 全库 × 已深研双口径，按 8 个一级业务域出洞察
 * 用法：node scripts/build-trends.cjs
 */
const fs = require('fs');
const path = require('path');
const { parseUsd } = require('./lib/money.cjs');
const { categories } = require('./lib/taxonomy.cjs');
const REPO = path.resolve(__dirname, '..');
const d = JSON.parse(fs.readFileSync(REPO + '/data/companies.json', 'utf8'));
const list = (Array.isArray(d) ? d : d.companies);
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const EMOJI = { rnd: '🔬', prod: '🏭', scm: '🔗', sales: '📣', corp: '🧾', aiinfra: '🛠️', aigov: '🛡️', vertical: '🧭' };
const dimensions = categories.map(category => ({ ...category, title: category.label, emoji: EMOJI[category.id] || '•' }));
const dimensionIdByLabel = new Map(dimensions.map(item => [item.label, item.id]));
const dimensionOf = x => dimensionIdByLabel.get(x.category) || 'vertical';
const inScope = list;
const reviewed = inScope.filter(x => x.status === 'reviewed');
function bestUsd(x) { let v = 0; for (const f of (x.funding || [])) { if (/并购|收购|退出|acquired|IPO|LOI|意向书|估值|valuation/i.test(`${f.round || ''} ${f.amount || ''}`)) continue; v = Math.max(v, parseUsd(f.amount)); } return v; }

// 各维度统计
const stat = dimensions.map(t => {
  const allN = inScope.filter(x => dimensionOf(x) === t.id).length;
  const revN = reviewed.filter(x => dimensionOf(x) === t.id).length;
  const funded = reviewed.filter(x => dimensionOf(x) === t.id && bestUsd(x) > 0);
  const totalUsd = funded.reduce((s, x) => s + bestUsd(x), 0);
  return { t, allN, revN, ratio: revN ? +(allN / revN).toFixed(1) : 0, fundN: funded.length, totalUsd };
});
const totAll = inScope.length, totRev = reviewed.length;
const hasDepthGap = totRev < totAll;
const byAll = [...stat].sort((a, b) => b.allN - a.allN);
const maxAll = Math.max(...stat.map(s => s.allN));
const enableAll = stat.filter(s => s.t.id === 'aiinfra' || s.t.id === 'aigov').reduce((s, e) => s + e.allN, 0);
const appAll = totAll - enableAll;
const chain = stat.filter(s => ['rnd', 'prod', 'scm'].includes(s.t.id)).reduce((s, e) => s + e.allN, 0);
const topAmp = hasDepthGap ? [...stat].filter(s => s.revN >= 3).sort((a, b) => b.ratio - a.ratio)[0] : null;
const densest = byAll[0];
const leanest = [...stat].sort((a, b) => a.allN - b.allN)[0];
const pct = n => totAll ? Math.round(n / totAll * 100) : 0;

// 洞察卡
const insights = [
  { icon: '⚙️', t: `${pct(enableAll)}% 在“卖铲子”`, b: `AI 基础设施 + 安全治理共 <b>${enableAll}</b> 家（占 <b>${pct(enableAll)}%</b>）；应用侧与跨行业垂直共 ${appAll} 家（${pct(appAll)}%）。` },
  { icon: '🏭', t: '制造+供应链是应用侧腹地', b: `研发/生产/供应链三个环节共 <b>${chain}</b> 家——转型有术的核心腹地，也是海外新锐扎堆颠覆的地方。` },
  hasDepthGap
    ? { icon: '📣', t: `${topAmp ? esc(topAmp.t.title) : ''} 待深研最多`, b: topAmp ? `已深研 ${topAmp.revN} 家，全盘 ${topAmp.allN} 家（覆盖差 <b>${topAmp.ratio}×</b>），应优先补齐研究。` : '' }
    : { icon: '📣', t: `${esc(densest.t.title)} 样本最多`, b: `当前全库已完成自动深研；该维度共 <b>${densest.allN}</b> 家。样本密集只表示本库观察到的创业供给多，不直接等同“红海”。` },
  { icon: '🔬', t: `${esc(leanest.t.title)} 样本最少`, b: `全盘 <b>${leanest.allN}</b> 家（${pct(leanest.allN)}%）。这表示当前样本覆盖较薄，不直接推断为“蓝海”或机会窗口。` },
];

const STYLE = `.twrap{max-width:1120px;margin:0 auto;padding:24px 20px 60px}
.obar{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--sub)}.obar a{margin-left:12px}
.thero{background:linear-gradient(140deg,var(--card),var(--accent-soft));border:1px solid var(--line);border-radius:20px;padding:30px 30px 26px;margin:8px 0 22px}
.thero .kicker{font-size:12.5px;letter-spacing:.14em;color:var(--accent);font-weight:700;text-transform:uppercase}
.thero h1{margin:.15em 0 .1em;font-size:32px;letter-spacing:-.5px}
.thero p{margin:.4em 0 0;color:var(--sub);font-size:15px;max-width:76ch}
.igrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:22px 0}
.icard{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
.icard .ih{font-size:15px;font-weight:800;margin-bottom:6px}.icard .ib{font-size:13.5px;color:var(--sub);line-height:1.7}.icard b{color:var(--ink)}
.sec{margin-top:34px}.sec h2{font-size:19px;margin:0 0 4px}.sec .sub{font-size:13px;color:var(--sub);margin:0 0 14px}
.bars{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 20px}
.brow{display:grid;grid-template-columns:150px 1fr 116px;align-items:center;gap:12px;margin:9px 0;font-size:13px}
.brow .bl{color:var(--ink)}
.btrack{position:relative;background:var(--lo-bg);border-radius:6px;height:20px;overflow:hidden}
.bfill{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,var(--accent),var(--hi));border-radius:6px}
.bfill.rev{background:var(--accent);opacity:.5}
.bn{text-align:right;color:var(--sub);font-variant-numeric:tabular-nums;font-size:12px}
.bn b{color:var(--ink)}
.legend{font-size:12px;color:var(--sub);margin-top:12px}.legend .sw{display:inline-block;width:11px;height:11px;border-radius:3px;vertical-align:middle;margin:0 4px 0 10px}
.split{display:flex;height:34px;border-radius:10px;overflow:hidden;border:1px solid var(--line);margin-top:6px}
.split .seg{display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff}
@media(max-width:640px){.igrid{grid-template-columns:1fr}.thero h1{font-size:25px}.brow{grid-template-columns:96px 1fr 92px}}`;

let h = `<!doctype html><html lang="zh-CN"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>AI 创业趋势洞察 · AI青梅创业公司数据库</title>
<link rel="stylesheet" href="companies/company.css">
<style>
${STYLE}
</style></head><body>
<div class="twrap">
<div class="obar"><a class="back" href="index.html">← 查询看板</a><span><a href="overview.html">深研总览</a><a href="benchmarks.html">国内对标</a><a href="rankings.html">榜单</a><a href="investors.html">投资版图</a></span></div>
<header class="thero">
 <div class="kicker">转型有术 · STARTUP RADAR · 趋势洞察</div>
 <h1>AI 创业趋势洞察</h1>
 <p>把 <b>${totAll}</b> 家 AI 创业公司（其中 <b>${totRev}</b> 家已完成自动深研）按分类体系 2.0 的 8 个一级业务域聚合，观察 AI 创业供给正从哪些业务环节切入。${hasDepthGap ? '深浅两色分别代表全盘与已深研。' : '当前全库均已深研，图表仅展示样本分布，不把样本多少直接解释为红海或蓝海。'}</p>
</header>

<div class="igrid">
${insights.map(i => `<div class="icard"><div class="ih">${i.icon} ${esc(i.t)}</div><div class="ib">${i.b}</div></div>`).join('')}
</div>

<section class="sec"><h2>📊 价值链分布</h2><p class="sub">全盘 ${totAll} 家 × 已深研 ${totRev} 家，按维度家数降序。</p>
<div class="bars">
${byAll.map(s => `<div class="brow"><span class="bl">${s.t.emoji} ${esc(s.t.title)}</span><span class="btrack"><span class="bfill" style="width:${Math.round(s.allN / maxAll * 100)}%"></span>${hasDepthGap ? `<span class="bfill rev" style="width:${Math.round(s.revN / maxAll * 100)}%"></span>` : ''}</span><span class="bn"><b>${s.allN}</b>${hasDepthGap ? ` 全盘 · ${s.revN} 深研` : ' 家'}</span></div>`).join('')}
<div class="legend">${hasDepthGap ? '<span class="sw" style="background:linear-gradient(90deg,var(--accent),var(--hi))"></span>全盘 <span class="sw" style="background:var(--accent);opacity:.5"></span>已深研' : '当前全部样本均已完成自动深研'}</div>
</div></section>

<section class="sec"><h2>⚙️ 卖铲子 vs 干活</h2><p class="sub">AI 使能层（给别的 Agent 做底座）与应用侧（落到具体业务）的比例。</p>
<div class="split">
 <div class="seg" style="width:${pct(enableAll)}%;background:var(--accent)">使能层 ${enableAll}（${pct(enableAll)}%）</div>
 <div class="seg" style="width:${pct(appAll)}%;background:var(--hi)">应用侧 ${appAll}（${pct(appAll)}%）</div>
</div></section>

<section class="sec"><h2>💰 各维度融资（已深研档）</h2><p class="sub">仅汇总可保守解析的美元口径；其他币种因缺少汇率日期不参与跨币种合计。</p>
<div class="bars">
${[...stat].sort((a, b) => b.totalUsd - a.totalUsd).map(s => `<div class="brow"><span class="bl">${s.t.emoji} ${esc(s.t.title)}</span><span class="btrack"><span class="bfill" style="width:${Math.round(s.totalUsd / Math.max(1, Math.max(...stat.map(e => e.totalUsd))) * 100)}%"></span></span><span class="bn"><b>$${(s.totalUsd / 1e6).toFixed(1)}M</b> · ${s.fundN} 家</span></div>`).join('')}
</div></section>

<footer class="foot" style="margin-top:30px">由 <code>node scripts/build-trends.cjs</code> 从 data/companies.json + taxonomy.json 生成 · 分类体系 2.0 为 8 个一级业务域 × 28 个二级产品赛道 · auto 档为 AI 生成、未经人工复核 · 仅供导航</footer>
</div></body></html>`;

fs.writeFileSync(REPO + '/trends.html', h, 'utf8');
console.log(`✅ trends.html：全盘 ${totAll}（深研 ${totRev}）| 使能层 ${enableAll}(${pct(enableAll)}%) vs 应用侧 ${appAll}`);
byAll.forEach(s => console.log(`  ${s.t.title}: 全盘 ${s.allN} / 深研 ${s.revN} / 融资 $${(s.totalUsd / 1e6).toFixed(1)}M`));
