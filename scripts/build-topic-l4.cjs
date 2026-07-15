#!/usr/bin/env node
/*
 * build-topic-l4.cjs —— 专题页：L4 工程图纸与三维模型 · 场景 × 库内厂商 × 案例
 * 观止风格；从 data/companies.json 取厂商名/批次/一句话，场景归属与案例为「手工策展」（快照）。
 * 产物：专题-L4工程图纸.html
 * 挂载：由深研总览「研发设计」环节链接进入。
 * 用法：node scripts/build-topic-l4.cjs
 * 说明：本页为策展快照（含来源+置信度分级），非从字段自动派生；更新策展内容后重跑本脚本。
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const list = (() => { const d = JSON.parse(fs.readFileSync(path.join(REPO, 'data/companies.json'), 'utf8')); return Array.isArray(d) ? d : d.companies; })();
const BY = {}; list.forEach(x => BY[x.slug] = x);
const SNAPSHOT = '2026-07-13';
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const nm = slug => (BY[slug] ? BY[slug].name : slug);
const bt = slug => (BY[slug] ? BY[slug].batch : '');

// ---------- 策展数据 ----------
const ROUTES = [
  { n: 1, name: '原生矢量解析', io: '新图 · DWG / DXF', note: '能读到图元 ≠ 读懂设计意图' },
  { n: 2, name: 'VLM 文档理解', io: '老图 · 扫描 / PDF', note: 'L4 最硬的骨头：符号检测 + GD&T + 表格 + 标题栏 + P&ID 图谱' },
  { n: 3, name: '3D 特征解析', io: 'STEP / IGES / X_T', note: '价值不在读几何，在特征识别（常被漏掉）' },
];

// scenes：15 场景 × 三档；firms=[{slug,role}]；gap=库内缺口说明
const TIERS = [
  {
    tier: '已成熟 · 刚需落地', cls: 'mature', scenes: [
      { n: 1, star: 1, title: '图纸检验自动化 / AI 打泡 → FAI · PPAP · AS9102', firms: [{ slug: 'groundcontrol', role: '打泡+FAIR+CMM对接（AdvancedPCB 案例）' }, { slug: 'f4-industries', role: 'GD&T 解析→FAIR 导出' }] },
      { n: 2, title: '老图纸数字化（VLM 提取标题栏/明细/技术要求）', firms: [{ slug: 'f4-industries', role: '工程图纸智能解析（顺带）' }, { slug: 'rev1', role: '（顺带）' }], thin: 1 },
      { n: 3, title: '图纸 → BOM 自动提取', firms: [{ slug: 'artifact', role: '实时生成 BOM（电气）' }], thin: 1 },
      { n: 4, star: 1, title: '相似图纸 / 零件几何检索与复用（降本主力）', firms: [], gap: '库内无专做者（对标 CADENAS / Physna）；Godela 沾几何检索边' },
      { n: 5, title: '图纸 → 报价', firms: [{ slug: 'fabricate', role: 'CAD 转即时报价+RFQ 分发' }, { slug: 'forge-automation', role: 'CAD 直传报价（定制金属件）' }] },
    ]
  },
  {
    tier: '进行中 · 有难点', cls: 'wip', scenes: [
      { n: 6, title: '图纸智能审查（制图规范/标注/选型）', firms: [{ slug: 'macadamia', role: '机械设计错误检查+P&ID 一致性' }, { slug: 'structured-ai', role: '建筑图纸包 QA/QC（建筑）' }] },
      { n: 7, title: 'DFM 可制造性分析', firms: [{ slug: 'topological', role: '拓扑优化+可制造约束' }, { slug: 'prototyping-io', role: 'DFM 自动化' }, { slug: 'morphoai', role: '可制造验证' }, { slug: 'f4-industries', role: '制造前 DFM 合规校验' }] },
      { n: 8, title: '图纸 → 工艺 CAPP', firms: [{ slug: 'rev1', role: 'CAD 后置/可制造性交付（边缘）' }], thin: 1 },
      { n: 9, title: 'PID / 电气图解析 → 数字台账 / 孪生', firms: [{ slug: 'macadamia', role: 'P&ID 工艺流程图一致性检查' }, { slug: 'artifact', role: '电气 ECAD / AI 生成原理图' }] },
      { n: 10, title: '图纸问答 / 图纸 Copilot', firms: [{ slug: 'adam', role: 'CAD Copilot（Onshape/Fusion）' }, { slug: 'aurorin-cad', role: 'AI 原生 CAD Copilot' }] },
      { n: 11, title: '图纸版本比对 / 变更识别（ECN）', firms: [], gap: '库内无专做者' },
      { n: 12, title: '3D → 2D 工程图自动出图', firms: [{ slug: 'rev1', role: '3D CAD→带 GD&T 的 2D 图纸（核心）' }, { slug: 'fabricate', role: '学既有标准自动出图' }, { slug: 'macadamia', role: '图纸自动生成+尺寸校核' }] },
    ]
  },
  {
    tier: '前沿 · 还早', cls: 'edge', scenes: [
      { n: 13, title: '3D 模型 → CAM 刀路 / AI 辅助编程', firms: [{ slug: 'prototyping-io', role: 'CAM / 机床程序自动生成' }] },
      { n: 14, title: '2D 图纸 → 3D 模型重建（drawing-to-CAD）', firms: [], gap: '库内无专做者（学术明确方向）' },
      { n: 15, title: '生成式设计 / text-to-CAD（需出原生 B-rep 才有用）', firms: [{ slug: 'aurorin-cad', role: '原生 B-rep 内核 ★' }, { slug: 'adam', role: 'text-to-CAD / 生成式 CAD' }, { slug: 'topological', role: '生成式设计' }, { slug: 'morphoai', role: '生成式硬件设计' }] },
    ]
  },
];

// 旁支：电气/芯片 EDA（工程设计路线，超出纯"图纸"但同域）
const EDA = [
  { slug: 'artifact', role: '协作式 ECAD / 线束' }, { slug: 'atrisa', role: '模拟电路 AI EDA' },
  { slug: 'visibl-semiconductors', role: '芯片设计 AI（RTL 验证）' }, { slug: 'sigmantic', role: '芯片设计 AI（RTL/Verilog）' },
  { slug: 'partcl', role: 'GPU 加速 EDA（STA/布局布线）' }, { slug: 'photonium', role: '光学设计 EDA' },
];
// 旁支：建筑 / BIM 图纸（相关行业，非机械制造）
const AEC = [
  { slug: 'archilabs', role: 'BIM 设计自动化' }, { slug: 'structured-ai', role: '建筑图纸 QA/QC' },
  { slug: 'bild-ai', role: '门窗读图算量' }, { slug: 'scout-out', role: '住宅标书算量' }, { slug: 'drafted', role: '住宅生成设计（消费向）' },
];

// 案例（四真度分级）
const CASES = [
  { stars: 4, slug: 'groundcontrol', client: 'AdvancedPCB（航空/国防 PCB 制造商 · Chandler, AZ）', scene: '场景 1 · 打泡 → FAI / AS9102', when: '2024-08 试点 → 全站点部署', result: '一月清理 60+ 份 FAIR；FAI 吞吐 +156%；新 CMM 操作员 <30 分钟上手；<1 个月 ROI；打泡/集成/导出「天→小时」', src: 'https://www.gndctl.com/case-studies/advanced-pcb-as9102-software-case-study', conf: '厂商案例页（具名+数字+时间，未独立审计）' },
  { stars: 3, slug: 'allus', client: 'Foxconn / Panasonic / TDK / Tencent / Hikvision / Mondelēz 等', scene: '工业质检（机器视觉 · L4 邻接，非读图打泡）', when: '近三月', result: '部署 5 家世界 500 强产线；缺陷检出 >99.95%、过程监控 >99.2%；部分场景 +100x', src: 'https://www.allus.ai/', conf: '厂商披露（logo 级客户 + 自报数字，无单厂独立案例）' },
  { stars: 2, slug: 'godela', client: 'Amazon（包装减废试点）+ 1 家「替换 Ansys」付费客户（未具名）', scene: 'CAE 仿真（CAD 直传 · L4 邻接）', when: '早期试点', result: '汽车阻力/压力仿真 2.5h → 1.8s（≈4500x，对照 benchmark 非客户实测）', src: 'https://claivc.substack.com/p/clai-ventures-invests-in-godela-the', conf: '厂商 / 投资方披露' },
  { stars: 2, slug: 'artifact', client: 'Boom Supersonic / Hermeus / Castelion / Applied Intuition / K2 Space / Peak Energy / Skyways / Astro Mechanica', scene: '电气 ECAD / 线束原理图', when: '—', result: '官网 logo 级航空国防客户群；无单客户量化案例', src: 'https://www.artifact.engineer/', conf: '官网 logo 级' },
];

// 有产品无案例（仅能力/融资，待深挖）
const PRODUCT_ONLY = ['f4-industries', 'adam', 'rev1', 'fabricate', 'aurorin-cad', 'topological', 'morphoai', 'prototyping-io', 'macadamia', 'structured-ai', 'bild-ai'];

// 统计
const allFirmSlugs = new Set();
TIERS.forEach(t => t.scenes.forEach(s => s.firms.forEach(f => allFirmSlugs.add(f.slug))));
EDA.forEach(f => allFirmSlugs.add(f.slug)); AEC.forEach(f => allFirmSlugs.add(f.slug));
const nFirms = allFirmSlugs.size;
const nScenesCovered = TIERS.reduce((a, t) => a + t.scenes.filter(s => s.firms.length).length, 0);
const nGap = TIERS.reduce((a, t) => a + t.scenes.filter(s => !s.firms.length).length, 0);
const nCases = CASES.length;

// ---------- HTML ----------
const firmChip = f => `<a class="fchip" href="companies/${f.slug}.html" title="${esc(BY[f.slug] ? BY[f.slug].one_liner_zh : '')}"><b>${esc(nm(f.slug))}</b><span class="fb">${esc(bt(f.slug))}</span>${f.role ? `<span class="frole">${esc(f.role)}</span>` : ''}</a>`;
const stars = n => '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n);

const STYLE = `:root{--gz:#0d9488;--gz-2:#0f766e;--gz-soft:#effcf9;--gz-line:#cdeee6;--star:#e0a400}
@media(prefers-color-scheme:dark){:root{--gz:#2dd4bf;--gz-2:#5eead4;--gz-soft:#0c211d;--gz-line:#1c3b35;--star:#f0c94a}}
.owrap{max-width:1080px;margin:0 auto;padding:22px 20px 70px}
.obar{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--sub);flex-wrap:wrap;gap:8px}
.obar a{color:var(--sub)}.obar a:hover{color:var(--gz)}
.ohero{position:relative;overflow:hidden;background:linear-gradient(135deg,var(--gz-soft),var(--card) 62%);border:1px solid var(--gz-line);border-radius:22px;padding:32px 32px 26px;margin-top:14px}
.ohero::after{content:"";position:absolute;right:-70px;top:-70px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,var(--gz) 0%,transparent 70%);opacity:.10}
.ohero .kicker{font-size:12px;letter-spacing:.2em;color:var(--gz-2);font-weight:800;text-transform:uppercase}
.ohero h1{margin:.16em 0 .12em;font-size:29px;letter-spacing:-.5px;font-weight:850}
.ohero .lead{margin:.3em 0 0;color:var(--sub);font-size:14px;max-width:80ch;line-height:1.65}
.ohero .snap{display:inline-block;margin-top:12px;font-size:12px;color:var(--gz-2);background:var(--gz-soft);border:1px solid var(--gz-line);padding:3px 12px;border-radius:999px;font-weight:700}
.statgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:11px;margin-top:22px}
.stile{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:13px 15px}
.stile .sn{font-size:24px;font-weight:850;letter-spacing:-.5px;color:var(--gz-2)}
.stile .sl{font-size:11.5px;color:var(--sub);margin-top:3px}
h2.sec{font-size:20px;margin:38px 0 4px;letter-spacing:-.3px;border-bottom:2px solid var(--gz);padding-bottom:8px}
h2.sec .st{font-size:12.5px;color:var(--sub);font-weight:600}
.routes{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}
.rcard{background:var(--card);border:1px solid var(--line);border-left:3px solid var(--gz);border-radius:12px;padding:13px 15px}
.rcard .rn{font-size:12px;color:var(--gz-2);font-weight:800}
.rcard h3{margin:2px 0 3px;font-size:15.5px}
.rcard .rio{font-size:12px;color:var(--ink);font-weight:600}
.rcard .rnote{font-size:12px;color:var(--sub);margin-top:5px;line-height:1.5}
.tierhd{font-size:13px;font-weight:800;letter-spacing:.04em;margin:24px 0 6px;padding:3px 12px;border-radius:999px;display:inline-block}
.tierhd.mature{background:var(--hi-bg);color:var(--hi)}
.tierhd.wip{background:var(--mid-bg);color:var(--mid)}
.tierhd.edge{background:var(--lo-bg);color:var(--sub)}
.scene{background:var(--card);border:1px solid var(--line);border-radius:13px;padding:13px 16px;margin:9px 0}
.scene.thin{opacity:.9}
.scene.gap{border-style:dashed;background:transparent}
.stitle{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
.snum{font-size:12px;font-weight:800;color:#fff;background:var(--gz);border-radius:7px;padding:1px 8px;flex:none}
.scene.gap .snum{background:var(--sub)}
.sname{font-size:15px;font-weight:800;letter-spacing:-.2px}
.starf{color:var(--star);font-size:13px;font-weight:800}
.firms{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px}
.fchip{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;background:var(--gz-soft);border:1px solid var(--gz-line);border-radius:10px;padding:4px 10px;color:var(--ink)}
.fchip:hover{text-decoration:none;border-color:var(--gz)}
.fchip b{font-weight:800}
.fchip .fb{font-size:10.5px;color:var(--sub)}
.fchip .frole{font-size:11.5px;color:var(--gz-2);border-left:1px solid var(--gz-line);padding-left:7px}
.gapnote{font-size:12.5px;color:var(--sub);margin-top:7px;font-style:italic}
.gapnote b{color:var(--mid)}
.sidegrid{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.casecard{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-top:12px;border-left:4px solid var(--gz)}
.casehd{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.casehd .cf{font-size:16px;font-weight:850}
.casehd .cf .cb{font-size:11px;color:var(--sub);font-weight:600;margin-left:5px}
.casehd .cstars{color:var(--star);font-size:14px;font-weight:800;margin-left:auto}
.crow{font-size:13px;color:var(--ink);margin-top:7px;line-height:1.55}
.crow .k{color:var(--sub);font-weight:700;display:inline-block;min-width:52px}
.cconf{font-size:11.5px;color:var(--mid);background:var(--mid-bg);border-radius:8px;padding:2px 9px;display:inline-block;margin-top:9px;font-weight:700}
.note{background:var(--quote);border:1px solid var(--line);border-left:3px solid var(--mid);border-radius:12px;padding:14px 18px;margin-top:16px;font-size:13px;color:var(--sub);line-height:1.7}
.note b{color:var(--ink)}
@media(max-width:820px){.statgrid{grid-template-columns:repeat(2,1fr)}.routes{grid-template-columns:1fr}.ohero h1{font-size:23px}}`;

function html() {
  let h = `<!doctype html><html lang="zh-CN"><head>\n<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n<title>专题 · L4 工程图纸与三维模型 · 场景 × 库内厂商 × 案例</title>\n<link rel="stylesheet" href="companies/company.css">\n<style>\n${STYLE}\n</style></head><body>\n<div class="owrap">\n`;
  h += `<div class="obar"><a class="back" href="overview.html">← 价值链总览 · 研发设计</a><span><a href="index.html">查询看板</a> · <a href="benchmarks.html">国内对标</a> · 数据真源 data/companies.json</span></div>\n`;
  // hero
  h += `<header class="ohero">\n<div class="kicker">转型有术 · 专题索引 · L4 制造业非结构化内容</div>\n<h1>L4 · 工程图纸与三维模型 —— 场景 × 库内厂商 × 案例</h1>\n`;
  h += `<p class="lead">把「L4 工程图纸与模型」框架（3 条处理路线 × 5 业务域 × 15 场景 · 三档成熟度）与本库 ${list.filter(x => x.status === 'reviewed').length} 家深研公司对照：哪些场景库里有厂商、命中在哪、有没有可引用案例、缺口在哪。第一刀切在「处理路线」——原生矢量 / VLM 文档理解 / 3D 特征解析，而非切业务。</p>\n`;
  h += `<span class="snap">策展快照 · 手工整理 · ${SNAPSHOT}（含来源与四真置信度分级）</span>\n`;
  h += `<div class="statgrid">`
    + `<div class="stile"><div class="sn">3×15</div><div class="sl">处理路线 × 场景</div></div>`
    + `<div class="stile"><div class="sn">${nFirms}</div><div class="sl">库内命中厂商</div></div>`
    + `<div class="stile"><div class="sn">${nScenesCovered}</div><div class="sl">已有厂商的场景</div></div>`
    + `<div class="stile"><div class="sn">${nGap}</div><div class="sl">明显缺口场景</div></div>`
    + `<div class="stile"><div class="sn">${nCases}</div><div class="sl">可引用案例</div></div>`
    + `</div>\n</header>\n`;

  // 处理路线
  h += `<h2 class="sec">一、第一刀：切在「处理路线」<span class="st"> · 三条完全不同的路，别焊成一条</span></h2>\n<div class="routes">`;
  h += ROUTES.map(r => `<div class="rcard"><div class="rn">路线 ${r.n}</div><h3>${esc(r.name)}</h3><div class="rio">${esc(r.io)}</div><div class="rnote">${esc(r.note)}</div></div>`).join('');
  h += `</div>\n`;

  // 15 场景 × 库内厂商
  h += `<h2 class="sec">二、15 场景 × 库内厂商<span class="st"> · ★=文档建议优先切入 · 虚线框=库内缺口</span></h2>\n`;
  TIERS.forEach(t => {
    h += `<div class="tierhd ${t.cls}">${esc(t.tier)}</div>\n`;
    t.scenes.forEach(s => {
      const cls = s.firms.length ? (s.thin ? 'scene thin' : 'scene') : 'scene gap';
      h += `<div class="${cls}"><div class="stitle"><span class="snum">${s.n}</span>${s.star ? '<span class="starf">★</span>' : ''}<span class="sname">${esc(s.title)}</span></div>`;
      if (s.firms.length) h += `<div class="firms">${s.firms.map(firmChip).join('')}</div>`;
      if (s.gap) h += `<div class="gapnote"><b>缺口：</b>${esc(s.gap)}</div>`;
      h += `</div>\n`;
    });
  });

  // 旁支
  h += `<h2 class="sec">三、同域旁支<span class="st"> · 电气/芯片 EDA（工程设计路线）· 建筑/BIM 图纸（相关行业）</span></h2>\n`;
  h += `<div class="tierhd wip" style="background:var(--gz-soft);color:var(--gz-2)">电气 · 电子 · 芯片 EDA</div><div class="sidegrid">${EDA.map(firmChip).join('')}</div>\n`;
  h += `<div class="tierhd wip" style="background:var(--gz-soft);color:var(--gz-2);margin-top:16px">建筑 · BIM 图纸（非机械制造）</div><div class="sidegrid">${AEC.map(firmChip).join('')}</div>\n`;

  // 案例
  h += `<h2 class="sec">四、可引用案例<span class="st"> · 四真度分级（★越多越接近「有企业+时间+投入产出+来源」）</span></h2>\n`;
  CASES.forEach(c => {
    h += `<div class="casecard"><div class="casehd"><span class="cf">${esc(nm(c.slug))}<span class="cb">${esc(bt(c.slug))}</span></span><span class="cstars">${stars(c.stars)}</span></div>`;
    h += `<div class="crow"><span class="k">客户</span>${esc(c.client)}</div>`;
    h += `<div class="crow"><span class="k">场景</span>${esc(c.scene)}</div>`;
    h += `<div class="crow"><span class="k">时间</span>${esc(c.when)}</div>`;
    h += `<div class="crow"><span class="k">成效</span>${esc(c.result)}</div>`;
    h += `<div class="crow"><span class="k">来源</span><a href="${esc(c.src)}" target="_blank" rel="noopener">${esc(c.src)}</a> · <a href="companies/${c.slug}.html">库内档案</a></div>`;
    h += `<span class="cconf">置信：${esc(c.conf)}</span></div>\n`;
  });

  // 有产品无案例
  h += `<h2 class="sec">五、有产品、暂无可引用案例<span class="st"> · 仅能力/融资，待深挖（case-deep-research）</span></h2>\n`;
  h += `<div class="sidegrid">${PRODUCT_ONLY.map(s => firmChip({ slug: s })).join('')}</div>\n`;

  // 四真红线
  h += `<h2 class="sec">六、覆盖 vs 缺口 · 四真红线</h2>\n`;
  h += `<div class="note"><b>库里有货：</b>场景 1（打泡/FAI，含 GroundControl×AdvancedPCB 案例）★ · 5（图纸→报价）· 6（图纸审查）· 7（DFM）· 9（P&ID/电气）· 10（Copilot）· 12（3D→2D 出图）· 13（CAM）· 15（text-to-CAD，含原生 B-rep）★ · 电气/芯片 EDA 一簇。<br>`;
  h += `<b>明显缺口（库内几乎无专做者）：</b>场景 4 相似件/几何检索复用 ★（你文档最看重、比生成式更该优先）· 场景 3 图纸→BOM · 场景 11 版本比对/ECN · 场景 14 2D→3D 重建 · 场景 2 纯做「老图数字化」者。<br>`;
  h += `<b>四真红线：</b>上面案例仅 <b>GroundControl × AdvancedPCB</b> 带较完整「企业+时间+投入产出+来源」（且为厂商案例页、未独立审计）；其余为 logo 级或能力级，成效数字均为厂商/投资方自报，需回溯一手、打折看，不能直接充「四真案例」。检验类（打泡/FAI）客户披露最完整，是四真案例最易出的一条线。</div>\n`;

  h += `<footer class="foot" style="margin-top:30px;color:var(--sub);font-size:12px">本专题为策展快照：场景归属与案例为人工整理（含来源+置信度），厂商名/批次/一句话取自 data/companies.json。更新策展内容后重跑 <code>node scripts/build-topic-l4.cjs</code> · 案例级深挖走 case-deep-research。</footer>\n`;
  h += `</div></body></html>`;
  return h;
}

fs.writeFileSync(path.join(REPO, '专题-L4工程图纸.html'), html(), 'utf8');
console.log(`✅ 专题-L4工程图纸.html：命中厂商 ${nFirms} | 已覆盖场景 ${nScenesCovered} | 缺口 ${nGap} | 可引用案例 ${nCases}`);
