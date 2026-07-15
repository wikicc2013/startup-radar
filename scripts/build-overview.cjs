#!/usr/bin/env node
/*
 * build-overview.cjs —— 深研总览三件套构建脚本（观止风格 · 价值链两级重构）
 * 单一真源：data/companies.json（结构化数据） + data/themes.json（价值链 7 维归属）
 * 组织：价值链两级 —— 8 个环节（7 维 + 跨行业垂直）× 细分场景（~28）。
 *      细分场景由 scene_tags/一句话关键词自动聚类，仅供导航。
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
const DATA_DATE = '2026-07-13';

// ---------- 工具 ----------
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const shortTitle = t => t.split('·')[0].replace(/\s/g, '');
const badgeClass = tier => (tier === 'A1' ? 'a1' : 'a2');
const cut = (s, n) => { s = String(s || ''); return s.length > n ? s.slice(0, n) + '…' : s; };

function isFunded(x) {
  return (x.funding || []).some(f => {
    const a = f.amount || '';
    return a && !/^未披露/.test(a) && /[\d]/.test(a) && /[\$€¥]|万|亿|美元|[MK]\b/i.test(a);
  });
}
function infoFunding(x) {
  const fs_ = x.funding || [];
  return fs_.find(f => /[\d]/.test(f.amount || '') && !/^未披露/.test(f.amount || '')) || fs_[0] || { round: '', amount: '未披露' };
}
const amountLabel = a => String(a || '').split(/[（(]/)[0].trim();
function fundCell(x) {
  const f = infoFunding(x);
  return [(f.round || '').trim(), amountLabel(f.amount)].filter(Boolean).join(' ') || '未披露';
}
const CONF_RANK = { '高': 3, '中': 2, '低': 1 };
function bestCust(x) {
  const cs = x.early_customers || []; if (!cs.length) return null;
  return [...cs].sort((a, b) => (CONF_RANK[b.confidence] || 0) - (CONF_RANK[a.confidence] || 0))[0];
}
function custCell(x) {
  const b = bestCust(x); if (!b) return '—';
  const n = (x.early_customers || []).length;
  return `${cut(b.name, 16)}(${b.confidence})${n > 1 ? ` 等${n}` : ''}`;
}
function cnCell(x) {
  const bs = (x.cn_benchmarks || []).slice(0, 2).map(b => cut(String(b).split(/[、，,（(：:／/]|——/)[0].trim(), 14)).filter(Boolean);
  return bs.join('、') || '—';
}

// ---------- 价值链两级体系 ----------
// 8 个环节（父）：7 维 + 跨行业垂直。父配色用于导航彩点。
const VERTICAL = { id: 'vertical', emoji: '🧭', title: '跨行业垂直', desc: '医疗/金融/消费/教育/政务等垂直应用（价值链弱相关，仅升档并标注可迁移范式）' };
const PARENTS = [...themes, VERTICAL];
const PCOLOR = { rnd: '#8b5cf6', prod: '#0d9488', scm: '#0ea5e9', sales: '#f59e0b', corp: '#6366f1', aiinfra: '#10b981', aigov: '#ef4444', vertical: '#64748b' };

// 细分场景：父 → [{id,label,kw[],def?}]。展示按数组顺序（主场景在前）；
// 分类时先按数组顺序试「非默认」场景的关键词，均不命中才落入 def 默认场景（兜底）。
const SCENES = {
  rnd: [
    { id: 'rnd-design', label: '研发设计', kw: ['CAD', '仿真', 'EDA', '芯片', '半导体', '材料', '设计', '测试', '建模', '原型', 'PCB', '结构', '光学', '算法研发'], def: true },
    { id: 'rnd-plm', label: '产品生命周期/工艺', kw: ['工艺', '配方', 'PLM', '实验数据', '实验室', '合成', '中试', '试验', '表征', '小试', '化学', '研发数据'] },
  ],
  prod: [
    { id: 'prod-mfg', label: '生产执行', kw: ['产线', '生产', '制造', '装配', 'MES', '车间', '产能', '量产', '焊', '注塑', '无人', '装备', '仪器'], def: true },
    { id: 'prod-qc', label: '质量管理', kw: ['质检', '质量', '缺陷', 'AOI', '探伤', '视觉检', '良率', '验货', '品控', '影像检'] },
    { id: 'prod-maint', label: '设备运维', kw: ['设备', '运维', '维护', '预测性', '数字孪生', 'OEE', '点检', '维保', '故障', '传感器'] },
    { id: 'prod-ehs', label: '安全环保', kw: ['安全环保', 'EHS', '排放', '职业健康', '应急', '危化', '消防', '环保'] },
    { id: 'prod-energy', label: '能源管理', kw: ['能源', '电力', '碳', '用能', '节能', '储能', '电网'] },
  ],
  scm: [
    { id: 'scm-sourcing', label: '采购寻源', kw: ['采购', '寻源', '比价', '供应商', '招标', '询价', 'sourcing', 'purchas', '议价', 'MRO'] },
    { id: 'scm-plan', label: '计划排产', kw: ['排产', '排程', '需求预测', 'APS', '产销', 'S&OP', '排班优化'] },
    { id: 'scm-wms', label: '仓储物流', kw: ['仓储', '物流', '配送', '库存', '运输', 'WMS', 'TMS', '履约', '货运', '仓库', '海运', '港口'] },
    { id: 'scm-collab', label: '供应链协同', kw: ['供应链', '协同', '溯源', '贸易', '关务', '进出口', '跨境', '分销', '经销'], def: true },
  ],
  sales: [
    { id: 'sales-mkt', label: '销售营销', kw: ['营销', '销售', '线索', 'CRM', '获客', '转化', '报价', '电商', '导购', '增长', 'GTM', 'SDR', '商机', '广告', '内容营销', '品牌'], def: true },
    { id: 'sales-svc', label: '客服售后', kw: ['客服', '售后', '工单', '呼叫', '催收', '客户支持', '投诉', '热线', '退换', '现场服务', '客户成功', '客户运营', '话务', '接线', '语音'] },
  ],
  corp: [
    { id: 'corp-fin', label: '财务成本', kw: ['财务', '对账', '费用', '账款', '税', '结算', '开票', '报销', '应收', '应付', '成本', '薪资', 'RCM', '营收', '账单', '审计'] },
    { id: 'corp-hr', label: '人力资源', kw: ['人力', '招聘', '排班', '人事', '入职', '员工', '劳动力', '考勤', '绩效'] },
    { id: 'corp-legal', label: '法务合规', kw: ['法务', '合同', '合规', '法律', '条款', '监管', '认证', 'GRC', 'KYC', 'KYB', 'AML', '尽调', '资质'] },
    { id: 'corp-office', label: '协同办公', kw: ['邮件', '日历', '文档', '会议', '办公', '日程', '协作', '秘书', '纪要', '待办', '写作', '听写', '翻译', '文书'] },
    { id: 'corp-km', label: '知识管理', kw: ['知识', '问答', '培训', '手册', 'SOP', '企业搜索'] },
    { id: 'corp-bi', label: '经营决策', kw: ['决策', 'BI', '经营', '情报', '洞察', '看板', '指标', '报表', '战略'], def: true },
  ],
  aiinfra: [
    { id: 'aiinfra-dev', label: '信息技术/开发', kw: ['开发', '代码', 'devtool', 'Agent', '运行时', 'SDK', 'API', '部署', '编排', '工作流', 'ops', '软件', '编程', 'coding', '浏览器', 'computer-use', '数据', '数据库', 'ETL', '标注', '数据集', '集成'], def: true },
    { id: 'aiinfra-base', label: '通用底座', kw: ['基础模型', '大模型', '算力', '向量', '记忆层', 'RAG', '推理引擎', '训练数据', 'GPU', 'embedding', 'LLM', '中间件', '语音AI数据', '多模态模型'] },
  ],
  aigov: [
    { id: 'aigov-safe', label: 'AI 安全治理', kw: ['安全', '护栏', '评测', '可观测', '合规', '授权', '治理', '风险', '监控', '审计', '防护', '幻觉', '对齐', '红队', '水印', '版权', '保险', '认证', '访问控制'], def: true },
  ],
  vertical: [
    { id: 'v-health', label: '医疗健康', kw: ['医疗', '健康', '诊所', '医院', '患者', '护理', '药', '生物', '临床', '医生', '兽医', '牙科', '放射', '医保', '理疗', '康复', '基因', '制药', 'pharma', 'health', 'medical', 'clinic', 'bio', 'EMS', '急救', '试管', '胚胎'] },
    { id: 'v-fin', label: '金融保险', kw: ['保险', '金融', '支付', '信贷', '放贷', '交易', '投资', '私募', '对冲', '并购', '稳定币', '加密', 'defi', '银行', '理赔', '承保', '经纪', 'fintech', 'payment', '账户', '美元', '房贷', '精算', 'RWE'] },
    { id: 'v-consumer', label: '消费生活', kw: ['消费', '购物', '二手', '社交', '游戏', '健身', '旅行', '时尚', '美食', '音乐', '视频', '内容', '伴侣', '表情', '约会', '家庭', '儿童', '娱乐', '宠物', '香水', '古着', '票务', '故事'] },
    { id: 'v-edu', label: '教育科研', kw: ['教育', '家教', '备考', '批改', '课程', '学生', '学校', '高校', 'edtech', 'tutor', '语言学习', '作文'] },
    { id: 'v-gov', label: '政务公共', kw: ['政府', '市政', '执法', '选民', '公共', 'govtech', '城市规划', '公民', '国防', '军'] },
    { id: 'v-other', label: '其他垂直', kw: [], def: true },
  ],
};

// 分类器：公司 → {parent, scene}。具体场景优先命中，均不中落入 def 默认场景。
function parentOf(x) { return assign[x.slug] || 'vertical'; }
const DIM_TITLES = new Set(themes.map(t => t.title.replace(/\s/g, ''))); // 剔除维度标签本身，避免污染场景匹配
function sceneOf(x, parent) {
  const scenes = SCENES[parent] || [{ id: parent + '-x', label: '其他', kw: [], def: true }];
  const tags = (x.scene_tags || []).filter(s => !DIM_TITLES.has(String(s).replace(/\s/g, '')));
  const hay = [...tags, x.one_liner_zh, x.one_liner_en, x.category, x.subcategory, x.name].join(' ').toLowerCase();
  for (const sc of scenes) {
    if (sc.def) continue;
    if (sc.kw.some(k => hay.includes(String(k).toLowerCase()))) return sc;
  }
  return scenes.find(s => s.def) || scenes[0];
}

// ---------- 数据聚合 ----------
const reviewed = list.filter(x => x.status === 'reviewed').sort((a, b) => a.num - b.num);

// grouped: parentId -> { total, scenes: Map(sceneId -> {label, rows[]}) }
const grouped = {};
PARENTS.forEach(p => grouped[p.id] = { total: 0, order: (SCENES[p.id] || []).map(s => s.id), scenes: {} });
reviewed.forEach(x => {
  const pid = grouped[parentOf(x)] ? parentOf(x) : 'vertical';
  const sc = sceneOf(x, pid);
  const g = grouped[pid];
  g.total++;
  (g.scenes[sc.id] = g.scenes[sc.id] || { label: sc.label, rows: [] }).rows.push(x);
});
// 非空场景数
let sceneCount = 0;
PARENTS.forEach(p => sceneCount += Object.keys(grouped[p.id].scenes).length);

// 统计
const funded = reviewed.filter(isFunded);
const withCust = reviewed.filter(x => (x.early_customers || []).length);
const hiCust = reviewed.filter(x => (x.early_customers || []).some(u => u.confidence === '高'));
const dead = reviewed.filter(x => x.lifecycle && x.lifecycle !== 'active');
const lifeText = { acquired: '被收购', defunct: '已关停' };

// 遍历父下的非空场景（按定义顺序，未定义的排后）
function scenesOf(pid) {
  const g = grouped[pid];
  const ids = [...new Set([...g.order, ...Object.keys(g.scenes)])].filter(id => g.scenes[id]);
  return ids.map(id => ({ id, ...g.scenes[id] }));
}

// ---------- 生成 Markdown ----------
function buildMd() {
  let s = `# 深研档案总览 · 价值链视角 · AI青梅创业公司数据库\n\n`;
  s += `> 数据源：\`data/companies.json\`（本文件由 \`scripts/build-overview.cjs\` 自动生成，**请勿手改**；改数据后重跑）。\n`;
  s += `> 覆盖：全部 **${reviewed.length}** 家已深研入正式档案的公司。按「企业价值链」两级组织：**${PARENTS.length}** 个环节 × **${sceneCount}** 个细分场景。场景由 scene_tags 关键词自动聚类，仅供导航。\n\n`;
  s += `## 一、概览统计\n\n| 指标 | 数值 |\n|---|---|\n`;
  s += `| 深研档案总数 | ${reviewed.length} |\n| 价值链环节 | ${PARENTS.length} |\n| 细分场景 | ${sceneCount} |\n| 有具体金额披露 | ${funded.length} |\n| 有具名早期客户 | ${withCust.length}（含高置信 ${hiCust.length}） |\n| 已关停 / 被收购 | ${dead.length} |\n\n`;
  s += `### 各环节 × 场景分布\n| 环节 | 家数 | 细分场景（家数） |\n|---|---|---|\n`;
  PARENTS.forEach(p => {
    const scs = scenesOf(p.id).map(sc => `${sc.label} ${sc.rows.length}`).join('｜');
    s += `| ${p.emoji} ${p.title} | ${grouped[p.id].total} | ${scs || '—'} |\n`;
  });
  s += `\n---\n\n## 二、分环节档案大表\n\n字段：#=num｜档=tier｜批=batch｜融资取最具信息量一条｜客户取最高置信度具名客户｜国内对标取前 2。\n\n`;
  PARENTS.forEach(p => {
    s += `### ${p.emoji} ${p.title}（${grouped[p.id].total}）\n\n`;
    scenesOf(p.id).forEach(sc => {
      s += `#### ${sc.label}（${sc.rows.length}）\n\n`;
      s += `| # | 公司 | 档 | 批 | 一句话业务 | 融资 | 最强客户 | 国内对标 | 档案 |\n|---|---|---|---|---|---|---|---|---|\n`;
      sc.rows.slice().sort((a, b) => a.num - b.num).forEach(x => {
        const flag = x.lifecycle ? ` ⛔${lifeText[x.lifecycle] || x.lifecycle}` : '';
        s += `| ${x.num} | **${x.name}**${flag} | ${x.tier} | ${x.batch} | ${x.one_liner_zh} | ${fundCell(x)} | ${custCell(x)} | ${cnCell(x)} | [档](companies/${x.slug}.md) |\n`;
      });
      s += `\n`;
    });
  });
  s += `---\n> 本总览由 \`scripts/build-overview.cjs\` 从 \`data/companies.json\` 生成。价值链场景为自动聚类，仅供导航。直通模式 auto：AI 生成、未经人工复核。\n`;
  return s;
}

// ---------- 生成 HTML（观止风格） ----------
const STYLE = `:root{--gz:#0d9488;--gz-2:#0f766e;--gz-soft:#effcf9;--gz-line:#cdeee6}
@media(prefers-color-scheme:dark){:root{--gz:#2dd4bf;--gz-2:#5eead4;--gz-soft:#0c211d;--gz-line:#1c3b35}}
.owrap{max-width:1180px;margin:0 auto;padding:22px 20px 70px}
.obar{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--sub);flex-wrap:wrap;gap:8px}
.obar a{color:var(--sub)}.obar a:hover{color:var(--gz)}
.ohero{position:relative;overflow:hidden;background:linear-gradient(135deg,var(--gz-soft),var(--card) 62%);border:1px solid var(--gz-line);border-radius:22px;padding:34px 34px 28px;margin-top:14px}
.ohero::after{content:"";position:absolute;right:-70px;top:-70px;width:230px;height:230px;border-radius:50%;background:radial-gradient(circle,var(--gz) 0%,transparent 70%);opacity:.10}
.ohero .kicker{font-size:12px;letter-spacing:.2em;color:var(--gz-2);font-weight:800;text-transform:uppercase}
.ohero h1{margin:.18em 0 .12em;font-size:34px;letter-spacing:-.6px;font-weight:850}
.ohero .lead{margin:.3em 0 0;color:var(--sub);font-size:14.5px;max-width:76ch;line-height:1.6}
.ohero .updated{display:inline-block;margin-top:12px;font-size:12px;color:var(--gz-2);background:var(--gz-soft);border:1px solid var(--gz-line);padding:3px 12px;border-radius:999px;font-weight:700}
.opills{display:flex;flex-wrap:wrap;gap:9px;margin-top:16px}
.opills a{font-size:13px;font-weight:700;padding:7px 15px;border-radius:10px;background:var(--card);border:1px solid var(--line);color:var(--sub)}
.opills a.pri{background:var(--gz);border-color:var(--gz);color:#fff}
.opills a:hover{text-decoration:none;border-color:var(--gz);color:var(--gz)}
.opills a.pri:hover{color:#fff;filter:brightness(1.06)}
.statgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:24px}
.stile{background:var(--card);border:1px solid var(--line);border-radius:15px;padding:15px 16px}
.stile .sn{font-size:27px;font-weight:850;letter-spacing:-.6px;color:var(--gz-2)}
.stile .sl{font-size:12px;color:var(--sub);margin-top:3px;line-height:1.35}
.vnav{margin:26px 0 4px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:8px 16px 14px}
.vnav .vnh{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--sub);font-weight:800;padding:12px 0 8px;border-bottom:1px dashed var(--line);margin-bottom:10px}
.vrow{display:flex;align-items:flex-start;gap:10px;padding:7px 0;flex-wrap:wrap}
.vrow+.vrow{border-top:1px solid var(--line)}
.vpar{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:800;color:var(--ink);min-width:132px;padding-top:2px}
.vpar .dot{width:9px;height:9px;border-radius:50%;background:var(--pc);flex:none}
.vpar .pn{font-size:11.5px;color:var(--sub);font-weight:700}
.vchips{display:flex;flex-wrap:wrap;gap:7px;flex:1}
.vchip{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;padding:4px 11px;background:var(--card);border:1px solid var(--line);border-radius:999px;color:var(--sub);font-weight:600}
.vchip::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--pc)}
.vchip b{color:var(--ink);font-weight:800}
.vchip:hover{text-decoration:none;border-color:var(--pc);color:var(--ink)}
.psec{margin-top:34px;scroll-margin-top:12px}
.ph{display:flex;align-items:center;gap:11px;padding-bottom:10px;border-bottom:2px solid var(--pc)}
.ph .pemoji{font-size:22px}
.ph h2{margin:0;font-size:21px;letter-spacing:-.3px}
.ph .pcount{font-size:13px;color:#fff;background:var(--pc);font-weight:800;padding:2px 11px;border-radius:999px}
.ph .pdesc{font-size:12.5px;color:var(--sub);margin-left:auto;max-width:46ch;text-align:right}
.scenehd{display:flex;align-items:center;gap:9px;margin:22px 0 2px;scroll-margin-top:12px}
.scenehd .sdot{width:7px;height:7px;border-radius:50%;background:var(--pc)}
.scenehd h3{margin:0;font-size:15.5px;font-weight:800;letter-spacing:-.2px}
.scenehd .scount{font-size:12px;color:var(--sub);font-weight:700;background:var(--lo-bg);padding:1px 9px;border-radius:999px}
.cogrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(252px,1fr));gap:13px;margin-top:12px}
.cocard{display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 15px;transition:.14s;overflow:hidden;border-left:3px solid var(--pc)}
.cocard:hover{text-decoration:none;transform:translateY(-2px);box-shadow:0 9px 24px rgba(13,148,136,.13);border-color:var(--pc)}
.cctop{display:flex;align-items:center;gap:6px;margin-bottom:7px}
.ccbatch{margin-left:auto;font-size:11px;color:var(--sub)}
.ccname{font-size:16.5px;font-weight:800;color:var(--ink);letter-spacing:-.2px}
.ccliner{font-size:12.5px;color:var(--sub);margin:3px 0 11px;flex:1;line-height:1.5}
.ccfoot{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.cpill{display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--sub);background:var(--lo-bg);padding:2px 8px;border-radius:8px}
.cpill.fund{background:var(--hi-bg);color:var(--hi);font-weight:800}
.ccgo{margin-left:auto;color:var(--pc);font-weight:900}
.sig{margin-top:46px}
.sig>h2{font-size:20px;margin:0}
.sigcard{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:19px 22px;margin-top:14px}
.sigcard h3{margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--sub)}
.sigcard ul{margin:0;padding-left:2px;list-style:none;columns:2;column-gap:28px;font-size:13px}
.sigcard li{margin:5px 0;break-inside:avoid}
.sigcard b{color:var(--ink)}
@media(max-width:820px){.statgrid{grid-template-columns:repeat(3,1fr)}.ph .pdesc{display:none}}
@media(max-width:560px){.statgrid{grid-template-columns:repeat(2,1fr)}.sigcard ul{columns:1}.ohero h1{font-size:26px}.vpar{min-width:0;width:100%}}`;

function pcCss() {
  return PARENTS.map(p => `.p-${p.id}{--pc:${PCOLOR[p.id] || '#64748b'}}`).join('');
}

function card(x, pid) {
  const pill = isFunded(x) ? `<span class="cpill fund">💰 ${esc(amountLabel(infoFunding(x).amount))}</span>` : '';
  const flag = x.lifecycle ? `<span class="cpill">⛔ ${esc(lifeText[x.lifecycle] || x.lifecycle)}</span>` : '';
  return `<a class="cocard p-${pid}" href="companies/${x.slug}.html"><div class="cctop"><span class="badge ${badgeClass(x.tier)}">${esc(x.tier)}</span><span class="ccbatch">${esc(x.batch)}</span></div><div class="ccname">${esc(x.name)}</div><div class="ccliner">${esc(cut(x.one_liner_zh, 62))}</div><div class="ccfoot">${pill}${flag}<span class="ccgo">→</span></div></a>`;
}

function buildHtml() {
  let h = `<!doctype html><html lang="zh-CN"><head>\n<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n<title>深研档案总览 · 价值链视角 · AI青梅创业公司数据库</title>\n<link rel="stylesheet" href="companies/company.css">\n<style>\n${STYLE}\n${pcCss()}\n</style></head><body>\n<div class="owrap">\n`;
  h += `<div class="obar"><a class="back" href="index.html">← 查询看板</a><span><a href="benchmarks.html">国内对标索引</a> · <a href="rankings.html">榜单</a> · <a href="trends.html">趋势</a> · <a href="investors.html">投资版图</a> · 数据真源 data/companies.json</span></div>\n`;

  // hero
  h += `<header class="ohero">\n<div class="kicker">转型有术 · STARTUP RADAR · 价值链视角</div>\n<h1>深研档案 · 价值链全景</h1>\n`;
  h += `<p class="lead">业务 × 价值链 × 场景 × 深研 —— YC 新锐 AI 创业公司数据库中已完成联网深研的 <b>${reviewed.length}</b> 家公司，按「企业价值链」重构为 <b>${PARENTS.length}</b> 个环节、<b>${sceneCount}</b> 个细分场景。点任意场景跳转，点卡片进入该公司深研详情。</p>\n`;
  h += `<span class="updated">数据更新：${DATA_DATE}</span>\n`;
  h += `<div class="opills"><a class="pri" href="#toc">价值链导航</a><a href="benchmarks.html">国内对标索引</a><a href="rankings.html">融资/客户榜单</a><a href="trends.html">趋势洞察</a><a href="investors.html">投资版图</a></div>\n`;
  h += `<div class="statgrid">`
    + `<div class="stile"><div class="sn">${reviewed.length}</div><div class="sl">深研档案</div></div>`
    + `<div class="stile"><div class="sn">${PARENTS.length}</div><div class="sl">价值链环节</div></div>`
    + `<div class="stile"><div class="sn">${sceneCount}</div><div class="sl">细分场景</div></div>`
    + `<div class="stile"><div class="sn">${funded.length}</div><div class="sl">有具体金额</div></div>`
    + `<div class="stile"><div class="sn">${withCust.length}/${hiCust.length}</div><div class="sl">有客户/高置信</div></div>`
    + `<div class="stile"><div class="sn">${dead.length}</div><div class="sl">关停/被收购</div></div>`
    + `</div>\n</header>\n`;

  // 价值链导航（截图1式：每环节一行，含子场景彩点 chip）
  h += `<nav class="vnav" id="toc"><div class="vnh">价值链导航 · 点场景跳转</div>\n`;
  PARENTS.forEach(p => {
    if (!grouped[p.id].total) return;
    h += `<div class="vrow p-${p.id}"><a class="vpar" href="#${p.id}"><span class="dot"></span>${p.emoji} ${esc(shortTitle(p.title))}<span class="pn">${grouped[p.id].total}</span></a><div class="vchips">`;
    h += scenesOf(p.id).map(sc => `<a class="vchip p-${p.id}" href="#${sc.id}">${esc(sc.label)} <b>${sc.rows.length}</b></a>`).join('');
    h += `</div></div>\n`;
  });
  h += `</nav>\n`;

  // 分环节 × 场景
  PARENTS.forEach(p => {
    if (!grouped[p.id].total) return;
    h += `<section class="psec p-${p.id}"><div class="ph" id="${p.id}"><span class="pemoji">${p.emoji}</span><h2>${esc(p.title)}</h2><span class="pcount">${grouped[p.id].total}</span><span class="pdesc">${esc(p.desc)}</span></div>\n`;
    scenesOf(p.id).forEach(sc => {
      h += `<div class="scenehd p-${p.id}" id="${sc.id}"><span class="sdot"></span><h3>${esc(sc.label)}</h3><span class="scount">${sc.rows.length}</span></div>`;
      h += `<div class="cogrid">` + sc.rows.slice().sort((a, b) => a.num - b.num).map(x => card(x, p.id)).join('') + `</div>\n`;
    });
    h += `</section>\n`;
  });

  // 重点信号
  h += `<section class="sig"><h2>📌 重点信号</h2>\n`;
  h += `<div class="sigcard"><h3>有具体金额披露（带来源，${funded.length} 家）</h3><ul>` +
    funded.map(x => `<li><a href="companies/${x.slug}.html"><b>${esc(x.name)}</b></a> — ${esc(amountLabel(infoFunding(x).amount))}</li>`).join('') + `</ul></div>\n`;
  h += `<div class="sigcard"><h3>高置信灯塔客户（可作案例引用，${hiCust.length} 家）</h3><ul>` +
    hiCust.map(x => { const c = (x.early_customers || []).find(u => u.confidence === '高'); return `<li><a href="companies/${x.slug}.html"><b>${esc(x.name)}</b></a> — ${esc(c.name)}</li>`; }).join('') + `</ul></div>\n`;
  h += `<div class="sigcard"><h3>已关停 / 状态异常</h3><ul>` +
    (dead.length ? dead.map(x => `<li><a href="companies/${x.slug}.html"><b>${esc(x.name)}</b></a> — ${esc(lifeText[x.lifecycle] || x.lifecycle)}</li>`).join('') : '<li>（暂无）</li>') + `</ul></div>\n`;
  h += `</section>\n`;

  h += `<footer class="foot" style="margin-top:34px;color:var(--sub);font-size:12.5px">价值链两级为自动聚类（父=data/themes.json 7 维 + 跨行业垂直；子场景由 scene_tags 关键词归类），仅供导航 · 直通模式 auto：AI 生成、未经人工复核 · 数据更新后重跑 <code>node scripts/build-overview.cjs</code> 刷新</footer>\n`;
  h += `</div></body></html>`;
  return h;
}

// ---------- 写出 ----------
fs.writeFileSync(path.join(REPO, '深研总览.md'), buildMd(), 'utf8');
const html = buildHtml();
fs.writeFileSync(path.join(REPO, 'overview.html'), html, 'utf8');
fs.writeFileSync(path.join(REPO, '深研总览.html'), html, 'utf8');
console.log(`✅ 观止风格价值链总览：${reviewed.length} 深研 | ${PARENTS.length} 环节 × ${sceneCount} 场景 | ${funded.length} 有金额 | ${withCust.length}/${hiCust.length} 客户 | ${dead.length} 关停`);
PARENTS.forEach(p => console.log(`   ${p.emoji} ${p.title}: ${grouped[p.id].total}  [${scenesOf(p.id).map(s => s.label + ' ' + s.rows.length).join(' / ')}]`));
