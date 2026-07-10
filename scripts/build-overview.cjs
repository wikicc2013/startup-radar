#!/usr/bin/env node
/*
 * build-overview.cjs —— 深研总览三件套构建脚本
 * 单一真源：data/companies.json（结构化数据） + data/themes.json（主题聚类归属）
 * 产物：深研总览.md、overview.html、深研总览.html（后两者内容相同）
 * 用法：node scripts/build-overview.cjs
 * 铁律：这三个文件是「生成物」，请勿手改；改数据后重跑本脚本。
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');

const data = JSON.parse(fs.readFileSync(path.join(REPO, 'data/companies.json'), 'utf8'));
const list = Array.isArray(data) ? data : data.companies;
const { themes, assign } = JSON.parse(fs.readFileSync(path.join(REPO, 'data/themes.json'), 'utf8'));

// ---------- 工具 ----------
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const shortTitle = t => t.split('·')[0];
const badgeClass = tier => (tier === 'A1' ? 'a1' : 'a2');
const cut = (s, n) => { s = String(s || ''); return s.length > n ? s.slice(0, n) + '…' : s; };

// 融资：是否有具体金额披露（不含纯「未披露」，含 YC 标准金额也算「已披露金额」）
function isFunded(x) {
  return (x.funding || []).some(f => {
    const a = f.amount || '';
    return a && !/^未披露/.test(a) && /[\d]/.test(a) && /[\$€¥]|万|亿|美元|[MK]\b/i.test(a);
  });
}
// 取最具信息量的一条融资（优先含金额）
function infoFunding(x) {
  const fs_ = x.funding || [];
  return fs_.find(f => /[\d]/.test(f.amount || '') && !/^未披露/.test(f.amount || '')) || fs_[0] || { round: '', amount: '未披露' };
}
// 金额短标签（去中文括注）
const amountLabel = a => String(a || '').split(/[（(]/)[0].trim();
// 表格「融资」列：round + amount 合并
function fundCell(x) {
  const f = infoFunding(x);
  const r = (f.round || '').trim();
  const a = amountLabel(f.amount);
  return [r, a].filter(Boolean).join(' ') || '未披露';
}
// 客户：按 高>中>低 取最强
const CONF_RANK = { '高': 3, '中': 2, '低': 1 };
function bestCust(x) {
  const cs = x.early_customers || [];
  if (!cs.length) return null;
  return [...cs].sort((a, b) => (CONF_RANK[b.confidence] || 0) - (CONF_RANK[a.confidence] || 0))[0];
}
function custCell(x) {
  const b = bestCust(x); if (!b) return '—';
  const n = (x.early_customers || []).length;
  return `${cut(b.name, 16)}(${b.confidence})${n > 1 ? ` 等${n}` : ''}`;
}
// 国内对标：前 2 条核心厂商名
function cnCell(x) {
  const bs = (x.cn_benchmarks || []).slice(0, 2).map(b => cut(String(b).split(/[、，,（(：:／/]|——/)[0].trim(), 14)).filter(Boolean);
  return bs.join('、') || '—';
}

// ---------- 数据聚合 ----------
const reviewed = list.filter(x => x.status === 'reviewed').sort((a, b) => a.num - b.num);
const bySlug = {}; reviewed.forEach(x => bySlug[x.slug] = x);
const themeOf = slug => assign[slug] || 't9';

// 每主题公司（按 num 升序）
const grouped = {}; themes.forEach(t => grouped[t.id] = []);
const unassigned = [];
reviewed.forEach(x => {
  const t = themeOf(x.slug);
  if (!grouped[t]) { unassigned.push(x.slug); grouped['t9'].push(x); }
  else grouped[t].push(x);
});
if (unassigned.length) console.warn('⚠️ 未归类（已并入其他·横向平台）：', unassigned.join(', '));

// 统计
const funded = reviewed.filter(isFunded);
const withCust = reviewed.filter(x => (x.early_customers || []).length);
const hiCust = reviewed.filter(x => (x.early_customers || []).some(u => u.confidence === '高'));
const dead = reviewed.filter(x => x.lifecycle && x.lifecycle !== 'active');
const lifeText = { acquired: '被收购', defunct: '已关停' };

// ---------- 生成 Markdown ----------
function buildMd() {
  let s = `# 深研档案总览 · AI青梅创业公司数据库\n\n`;
  s += `> 数据源：\`data/companies.json\`（本文件由 \`scripts/build-overview.cjs\` 自动生成，**请勿手改**；改数据后重跑）。\n`;
  s += `> 覆盖：全部 **${reviewed.length}** 家已深研入正式档案的公司（review=auto）。主题聚类见 \`data/themes.json\`，仅供导航。\n\n`;
  s += `## 一、概览统计\n\n| 指标 | 数值 |\n|---|---|\n`;
  s += `| 深研档案总数 | ${reviewed.length} |\n`;
  s += `| 有具体金额披露 | ${funded.length}（其余为 YC 标准投资未单列 / 未披露） |\n`;
  s += `| 有具名早期客户 | ${withCust.length}（其中含**高置信**客户 ${hiCust.length} 家） |\n`;
  s += `| 已关停 / 被收购 | ${dead.length} |\n`;
  s += `| 主题簇 | ${themes.length} |\n\n`;
  s += `### 各主题分布\n| 主题 | 家数 |\n|---|---|\n`;
  themes.forEach(t => s += `| ${t.title} | ${grouped[t.id].length} |\n`);
  s += `\n---\n\n## 二、分主题档案大表\n\n字段：#=num｜档=tier｜批=batch｜融资取最具信息量一条｜客户取最高置信度具名客户｜国内对标取前 2。\n\n`;
  themes.forEach(t => {
    const rows = grouped[t.id];
    s += `### ${t.title}（${rows.length}）\n\n`;
    s += `| # | 公司 | 档 | 批 | 一句话业务 | 融资 | 最强客户 | 国内对标 | 档案 |\n|---|---|---|---|---|---|---|---|---|\n`;
    rows.forEach(x => {
      const flag = x.lifecycle ? ` ⛔${lifeText[x.lifecycle] || x.lifecycle}` : '';
      s += `| ${x.num} | **${x.name}**${flag} | ${x.tier} | ${x.batch} | ${x.one_liner_zh} | ${fundCell(x)} | ${custCell(x)} | ${cnCell(x)} | [档](companies/${x.slug}.md) |\n`;
    });
    s += `\n`;
  });
  s += `---\n\n## 三、重点信号速查（供跟踪/升档/补审）\n\n`;
  s += `**有具体金额披露一览（带来源，${funded.length} 家）**\n`;
  funded.forEach(x => s += `- **${x.name}**（${x.batch}）— ${amountLabel(infoFunding(x).amount)}｜${x.one_liner_zh}\n`);
  s += `\n**高置信灯塔客户（可作案例引用，${hiCust.length} 家）**\n`;
  hiCust.forEach(x => { const c = (x.early_customers || []).find(u => u.confidence === '高'); s += `- **${x.name}**（${x.batch}）— ${c.name}\n`; });
  s += `\n**已关停 / 状态异常**\n`;
  dead.forEach(x => s += `- **${x.name}**（${x.batch}）— ${lifeText[x.lifecycle] || x.lifecycle}\n`);
  s += `\n---\n> 本总览由 \`scripts/build-overview.cjs\` 从 \`data/companies.json\` 生成。直通模式 auto：AI 生成、未经人工复核。\n`;
  return s;
}

// ---------- 生成 HTML ----------
const STYLE = `.owrap{max-width:1120px;margin:0 auto;padding:24px 20px 60px}
.ohero{background:linear-gradient(140deg,var(--card),var(--accent-soft));border:1px solid var(--line);border-radius:20px;padding:30px 30px 26px;margin-bottom:22px}
.ohero .kicker{font-size:12.5px;letter-spacing:.14em;color:var(--accent);font-weight:700;text-transform:uppercase}
.ohero h1{margin:.15em 0 .1em;font-size:32px;letter-spacing:-.5px}
.ohero p{margin:.3em 0 0;color:var(--sub);font-size:15px;max-width:70ch}
.statgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:22px}
.stile{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 16px}
.stile .sn{font-size:26px;font-weight:800;letter-spacing:-.5px}
.stile .sl{font-size:12px;color:var(--sub);margin-top:2px}
.tnav{display:flex;flex-wrap:wrap;gap:8px;margin:22px 0 8px}
.tnav a{font-size:13px;padding:6px 13px;background:var(--card);border:1px solid var(--line);border-radius:999px;color:var(--sub)}
.tnav a:hover{color:var(--accent);border-color:var(--accent);text-decoration:none}
.tsec{margin-top:30px}
.tsec h2{font-size:19px;margin:0 0 4px;display:flex;align-items:center;gap:10px;scroll-margin-top:16px}
.tsec .tcount{font-size:13px;color:var(--sub);font-weight:600;background:var(--lo-bg);padding:2px 10px;border-radius:999px}
.cogrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(258px,1fr));gap:14px;margin-top:14px}
.cocard{display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:15px 16px;transition:.14s;overflow:hidden}
.cocard:hover{text-decoration:none;border-color:var(--accent);transform:translateY(-2px);box-shadow:0 8px 22px rgba(31,111,235,.10)}
.cctop{display:flex;align-items:center;gap:6px;margin-bottom:8px}
.ccbatch{margin-left:auto;font-size:11px;color:var(--sub)}
.ccname{font-size:17px;font-weight:700;color:var(--ink);letter-spacing:-.2px}
.ccliner{font-size:13px;color:var(--sub);margin:3px 0 12px;flex:1;line-height:1.5}
.ccfoot{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.cpill{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;color:var(--sub);background:var(--lo-bg);padding:2px 9px;border-radius:8px}
.cpill.fund{background:var(--hi-bg);color:var(--hi);font-weight:700}
.ccgo{margin-left:auto;color:var(--accent);font-weight:800}
.sig{margin-top:40px}
.sigcard{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:20px 22px;margin-top:14px}
.sigcard h3{margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:.06em;color:var(--sub)}
.sigcard ul{margin:0;padding-left:2px;list-style:none;columns:2;column-gap:28px;font-size:13.5px}
@media(max-width:640px){.statgrid{grid-template-columns:repeat(2,1fr)}.sigcard ul{columns:1}.ohero h1{font-size:25px}}
.sigcard li{margin:5px 0;break-inside:avoid}
.sigcard b{color:var(--ink)}
.obar{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--sub)}`;

function card(x) {
  const pill = isFunded(x) ? `<span class="cpill fund">💰 ${esc(amountLabel(infoFunding(x).amount))}</span>` : '';
  const flag = x.lifecycle ? `<span class="cpill">⛔ ${esc(lifeText[x.lifecycle] || x.lifecycle)}</span>` : '';
  return `<a class="cocard" href="companies/${x.slug}.html">\n <div class="cctop"><span class="badge ${badgeClass(x.tier)}">${esc(x.tier)}</span><span class="ccbatch">${esc(x.batch)}</span></div>\n <div class="ccname">${esc(x.name)}</div>\n <div class="ccliner">${esc(x.one_liner_zh)}</div>\n <div class="ccfoot">${pill}${flag}<span class="ccgo">→</span></div>\n</a>`;
}

function buildHtml() {
  let h = `<!doctype html><html lang="zh-CN"><head>\n<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n<title>深研档案总览 · AI青梅创业公司数据库</title>\n<link rel="stylesheet" href="companies/company.css">\n<style>\n${STYLE}\n</style></head><body>\n<div class="owrap">\n`;
  h += `<div class="obar"><a class="back" href="index.html">← 查询看板</a><span><a href="benchmarks.html">国内对标索引</a> · 数据真源 data/companies.json</span></div>\n`;
  h += `<header class="ohero">\n <div class="kicker">转型有术 · STARTUP RADAR</div>\n <h1>深研档案总览</h1>\n`;
  h += ` <p>YC 新锐 AI 创业公司数据库中，已完成联网深度调查、进入正式档案的 <b>${reviewed.length}</b> 家公司。按主题聚类，点任意卡片进入该公司的深研详情页。</p>\n`;
  h += ` <div class="statgrid">\n  <div class="stile"><div class="sn">${reviewed.length}</div><div class="sl">深研档案</div></div><div class="stile"><div class="sn">${funded.length}</div><div class="sl">有具体金额披露</div></div><div class="stile"><div class="sn">${withCust.length} / ${hiCust.length}</div><div class="sl">有具名客户 / 含高置信</div></div><div class="stile"><div class="sn">${themes.length}</div><div class="sl">主题簇</div></div><div class="stile"><div class="sn">${dead.length}</div><div class="sl">已关停/被收购</div></div>\n </div>\n</header>\n`;
  h += `<nav class="tnav">` + themes.map(t => `<a href="#${t.id}">${t.emoji} ${esc(shortTitle(t.title))} ${grouped[t.id].length}</a>`).join('') + `</nav>\n`;
  themes.forEach(t => {
    h += `<section class="tsec"><h2 id="${t.id}">${t.emoji} ${esc(t.title)} <span class="tcount">${grouped[t.id].length}</span></h2><div class="cogrid">`;
    h += grouped[t.id].map(card).join('');
    h += `</div></section>\n`;
  });
  // 重点信号
  h += `<section class="sig"><h2 style="font-size:19px;margin:0">📌 重点信号</h2>\n`;
  h += `<div class="sigcard"><h3>有具体金额披露（带来源，${funded.length} 家）</h3><ul>` +
    funded.map(x => `<li><a href="companies/${x.slug}.html"><b>${esc(x.name)}</b></a> — ${esc(amountLabel(infoFunding(x).amount))}</li>`).join('') + `</ul></div>\n`;
  h += `<div class="sigcard"><h3>高置信灯塔客户（可作案例引用，${hiCust.length} 家）</h3><ul>` +
    hiCust.map(x => { const c = (x.early_customers || []).find(u => u.confidence === '高'); return `<li><a href="companies/${x.slug}.html"><b>${esc(x.name)}</b></a> — ${esc(c.name)}</li>`; }).join('') + `</ul></div>\n`;
  h += `<div class="sigcard"><h3>已关停 / 状态异常</h3><ul>` +
    (dead.length ? dead.map(x => `<li><a href="companies/${x.slug}.html"><b>${esc(x.name)}</b></a> — ${esc(lifeText[x.lifecycle] || x.lifecycle)}</li>`).join('') : '<li>（暂无）</li>') + `</ul></div>\n`;
  h += `</section>\n`;
  h += `<footer class="foot" style="margin-top:30px">主题聚类见 data/themes.json，仅供导航 · 直通模式 auto：AI 生成、未经人工复核 · 数据更新后重跑 <code>node scripts/build-overview.cjs</code> 刷新</footer>\n`;
  h += `</div></body></html>`;
  return h;
}

// ---------- 写出 ----------
const md = buildMd();
const html = buildHtml();
fs.writeFileSync(path.join(REPO, '深研总览.md'), md, 'utf8');
fs.writeFileSync(path.join(REPO, 'overview.html'), html, 'utf8');
fs.writeFileSync(path.join(REPO, '深研总览.html'), html, 'utf8');
console.log(`✅ 已生成总览三件套：depth=${reviewed.length} 深研 | ${funded.length} 有金额 | ${withCust.length}/${hiCust.length} 客户 | ${dead.length} 关停`);
themes.forEach(t => console.log(`   ${t.title}: ${grouped[t.id].length}`));
