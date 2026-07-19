const path = require('path');
const taxonomy = require(path.resolve(__dirname, '../../data/taxonomy.json'));

const categories = taxonomy.categories;
const categoryById = new Map(categories.map(item => [item.id, item]));
const subcategoryById = new Map(categories.flatMap(category =>
  category.subcategories.map(item => [item.id, { ...item, categoryId: category.id, categoryLabel: category.label }])
));

const normalize = value => String(value || '').toLowerCase().replace(/\s+/g, ' ');
const hasAny = (haystack, words) => words.some(word => haystack.includes(normalize(word)));

function sourceText(company) {
  return [
    company.name,
    company.one_liner_zh,
    company.one_liner_en,
    company.triage_reason,
    ...(company.scene_tags || []),
    company.source_category ?? company.category,
    company.source_subcategory ?? company.subcategory,
  ].map(normalize).join(' ');
}

function coreText(company) {
  return [
    company.name,
    company.one_liner_zh,
    company.one_liner_en,
    company.triage_reason,
    company.source_category ?? company.category,
    company.source_subcategory ?? company.subcategory,
  ].map(normalize).join(' ');
}

const RULES = {
  rnd: [
    ['rnd-lifecycle', ['plm', 'bom', 'capp', '工艺', '配方', '实验室', '实验数据', '研发数据', '化学合成', '中试', '小试', '表征', '产品生命周期']],
    ['rnd-design', []],
  ],
  prod: [
    ['prod-quality', ['质检', '质量', '缺陷', '良率', 'aoi', '探伤', '视觉检测', '机器视觉检测', '验货', '品控', '测量检测']],
    ['prod-assets', ['预测性维护', '设备运维', '设备维护', '维保', '点检', '故障诊断', 'oee', 'apm', '资产管理', '工业物联网', '数字孪生', '传感器采集', 'maintenance']],
    ['prod-sustainability', ['能源管理', '节能', '储能', '电网', '碳管理', '碳排', 'ehs', '安全生产', '安全环保', '职业健康', '排放', '环保', '危化', '消防']],
    ['prod-execution', []],
  ],
  scm: [
    ['scm-sourcing', ['采购', '寻源', '询价', '比价', '招标', '供应商', 'srm', 'mro', '议价', 'procurement', 'sourcing']],
    ['scm-logistics', ['仓储', '仓库', '物流', '配送', '运输', '货运', '海运', '港口', '库存', 'wms', 'tms', '履约', 'last mile', 'freight']],
    ['scm-planning', []],
  ],
  sales: [
    ['sales-service', ['客服', '售后', '客户成功', '客户运营', '客户支持', '呼叫中心', '呼叫', '话务', '接线', '工单', '投诉', '退换', '现场服务', '催收', '预约排期', 'support agent']],
    ['sales-growth', []],
  ],
  corp: [
    ['corp-finance', ['财务', '会计', '税务', '税', '报销', '费用', '对账', '账款', '应收', '应付', '开票', '发票', '结算', '账单', '成本', '审计', '薪资', 'rcm', 'revenue cycle']],
    ['corp-hr', ['人力资源', '招聘', '人事', '人才', '候选人', '入职', '员工', '劳动力', '考勤', '绩效', '排班', 'ats', 'recruit']],
    ['corp-legal', ['法务', '法律', '合同', '条款', '合规', '监管', '认证', '资质', 'grc', 'kyc', 'kyb', 'aml', '尽调', '诉讼', 'legal']],
    ['corp-collaboration', ['知识库', '知识管理', '企业搜索', '文档', '邮件', '会议', '日历', '日程', '协作', '办公', '纪要', '待办', '写作', '翻译', '培训', '手册', 'sop', '秘书']],
    ['corp-operations', ['企业运营', '业务流程', '流程自动化', '流程优化', '内部运营', '共享服务', 'itsm', 'serviceNow', 'rpa', '数字员工', '工单处理', 'back office', 'operations']],
    ['corp-decision', []],
  ],
  aiinfra: [
    ['aiinfra-dev', ['编码', '编程', '代码', '软件工程', '开发者工具', '开发工具', 'devtool', 'developer tool', 'coding', 'ide', 'sdk', 'api', '测试自动化', '代码审查', '代码质量', 'devops', 'ci/cd', 'debug', '调试']],
    ['aiinfra-agent', ['agent 平台', 'agent framework', 'agent runtime', '智能体平台', '智能体框架', '智能体运行时', '工作流', '流程编排', '浏览器智能体', 'computer-use', 'mcp', 'rpa', 'autonomous agent', 'agent operating system', 'agent os', '智能体操作系统']],
    ['aiinfra-model', ['基础模型', '大模型', '语言模型', '多模态模型', '推理引擎', '模型推理', '模型训练', '训练平台', 'gpu', '算力', '向量', 'embedding', 'rag', 'tts', '语音合成', '语音识别', '视觉模型', '数据合成', 'synthetic data', 'llm']],
    ['aiinfra-data', ['数据库', '数据基础设施', '数据平台', '数据集成', '数据管道', '数据仓库', '数据湖', '数据质量', '数据治理', '数据标注平台', '训练数据平台', 'etl', 'olap', '时序数据库', '主数据', 'data warehouse', 'database', 'data infrastructure']],
    ['aiinfra-agent', []],
  ],
  aigov: [
    ['aigov-cyber', ['网络安全', '信息安全', '数据安全', '隐私', '身份', 'iam', 'pam', '权限', '授权', '访问控制', '凭据', '密钥', '零信任', '防火墙', '漏洞', '攻击', '威胁', 'soc', 'siem', 'endpoint', 'cybersecurity']],
    ['aigov-ai', []],
  ],
  vertical: [
    ['vertical-health', ['healthcare', 'health', 'medical', 'medicine', 'clinic', 'patient', 'pharma', 'biotech', 'bio', '医疗', '健康', '诊所', '医院', '患者', '医生', '护理', '药物', '制药', '生物', '临床', '兽医', '牙科', '康复', '基因', '胚胎']],
    ['vertical-finance', ['fintech', 'finance', 'banking', 'insurance', 'payment', 'lending', '金融', '银行', '保险', '支付', '信贷', '贷款', '投资', '交易', '理赔', '承保', '精算', '私募', '对冲', '稳定币', '加密']],
    ['vertical-consumer', ['consumer', 'gaming', 'social', 'content', 'sports', '消费', '购物', '二手', '社交', '游戏', '健身', '旅行', '时尚', '美食', '音乐', '视频', '内容', '约会', '家庭', '儿童', '娱乐', '宠物', '香水', '票务']],
    ['vertical-public', ['education', 'edtech', '教育', '科研', '学校', '学生', '教师', '家教', '备考', '课程', '学习']],
    ['vertical-industry', []],
  ],
};

function classifyCompany(company, themeAssignments = {}) {
  const categoryId = categoryById.has(themeAssignments[company.slug])
    ? themeAssignments[company.slug]
    : 'vertical';
  const haystack = sourceText(company);
  const core = coreText(company);
  const tagText = (company.scene_tags || []).map(normalize).join(' ');
  const rules = RULES[categoryId];
  const sourceCategory = normalize([
    company.source_category ?? company.category,
    company.source_subcategory ?? company.subcategory,
  ].join(' '));
  const verticalSourceMap = [
    [/^healthcare/, 'vertical-health'],
    [/^fintech/, 'vertical-finance'],
    [/^consumer/, 'vertical-consumer'],
    [/^education/, 'vertical-public'],
    [/^government/, 'vertical-industry'],
  ];
  const sourceSubcategoryMap = {
    corp: [
      [/finance|accounting/, 'corp-finance'],
      [/human resources|recruiting|(^| · )hr($|\/)/, 'corp-hr'],
      [/legal|compliance/, 'corp-legal'],
      [/productivity/, 'corp-collaboration'],
      [/operations|it services/, 'corp-operations'],
      [/analytics/, 'corp-decision'],
    ],
    aiinfra: [
      [/dev tools|engineering/, 'aiinfra-dev'],
      [/data|analytics/, 'aiinfra-data'],
      [/productivity|operations/, 'aiinfra-agent'],
    ],
    sales: [
      [/voice/, 'sales-service'],
      [/marketing|sales/, 'sales-growth'],
    ],
  };
  const mappedSource = (sourceSubcategoryMap[categoryId] || [])
    .find(([pattern]) => pattern.test(sourceCategory));
  const sourceMatch = categoryId === 'vertical'
    ? verticalSourceMap.find(([pattern]) => pattern.test(sourceCategory))
    : null;
  const defaultRule = rules.find(([, words]) => !words.length) || rules.at(-1);
  const coreRule = rules.find(([, words]) => words.length && hasAny(core, words));
  const tagScores = rules
    .filter(([, words]) => words.length)
    .map(([id, words], index) => ({ id, index, score: words.filter(word => tagText.includes(normalize(word))).length }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  const tagRule = tagScores[0]?.score >= 2 ? tagScores[0].id : null;
  const subcategoryId = sourceMatch?.[1]
    || mappedSource?.[1]
    || coreRule?.[0]
    || tagRule
    || defaultRule[0];
  const category = categoryById.get(categoryId);
  const subcategory = subcategoryById.get(subcategoryId);
  return {
    categoryId,
    category: category.label,
    subcategoryId,
    subcategory: subcategory.label,
  };
}

module.exports = {
  taxonomy,
  categories,
  categoryById,
  subcategoryById,
  classifyCompany,
};
