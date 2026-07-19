#!/usr/bin/env node
/*
 * 全库一致性校验。只读，不修改任何文件。
 * 用法：node scripts/validate.cjs
 */
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const errors = [];
const warnings = [];
const info = [];

const readJson = rel => {
  try {
    return JSON.parse(fs.readFileSync(path.join(REPO, rel), 'utf8'));
  } catch (err) {
    errors.push(`${rel} 无法解析：${err.message}`);
    return null;
  }
};
const exists = rel => fs.existsSync(path.join(REPO, rel));
const readText = rel => fs.readFileSync(path.join(REPO, rel), 'utf8');
const add = (arr, msg) => arr.push(msg);
const sample = rows => rows.slice(0, 8).join('、');
const isHttp = value => /^https?:\/\//i.test(String(value || ''));
const isDisclosedAmount = value => {
  const text = String(value || '').trim();
  return /\d/.test(text) && !text.startsWith('未披露') && !text.startsWith('金额未披露');
};

const companiesData = readJson('data/companies.json');
const queueData = readJson('data/queue.json');
const themesData = readJson('data/themes.json');
const taxonomyData = readJson('data/taxonomy.json');

if (!companiesData || !queueData || !themesData || !taxonomyData) finish();

const companies = Array.isArray(companiesData) ? companiesData : companiesData.companies;
if (!Array.isArray(companies)) {
  errors.push('data/companies.json 缺少 companies 数组');
  finish();
}

const required = [
  'num', 'name', 'slug', 'batch', 'source', 'category', 'subcategory',
  'source_category', 'source_subcategory',
  'one_liner_en', 'one_liner_zh', 'tier', 'triage_reason', 'status',
  'review', 'appeared_in', 'updated'
];
const allowed = {
  tier: new Set(['A1', 'A2', 'B', 'C']),
  status: new Set(['pending', 'researched', 'reviewed', 'card', 'named']),
  review: new Set(['none', 'auto', 'approved', 'rejected']),
  lifecycle: new Set(['active', 'acquired', 'defunct'])
};

const seenSlug = new Set();
const seenNum = new Set();
const bySlug = new Map();
const appearedCounts = {};
let maxUpdated = '';
const taxonomyPairs = new Map();
const taxonomyIds = new Set();
for (const category of taxonomyData.categories || []) {
  for (const subcategory of category.subcategories || []) {
    if (taxonomyIds.has(subcategory.id)) add(errors, `taxonomy.json 二级赛道 id 重复：${subcategory.id}`);
    if (taxonomyPairs.has(subcategory.label)) add(errors, `taxonomy.json 二级赛道名称重复：${subcategory.label}`);
    taxonomyIds.add(subcategory.id);
    taxonomyPairs.set(subcategory.label, category.label);
  }
}

for (const company of companies) {
  const label = company.slug || company.name || `#${company.num || '?'}`;
  const missing = required.filter(field => !(field in company));
  if (missing.length) add(errors, `${label} 缺少字段：${missing.join(', ')}`);
  if (!taxonomyPairs.has(company.subcategory)) {
    add(errors, `${label} 二级赛道不在 taxonomy.json：${company.subcategory || '(空)'}`);
  } else if (taxonomyPairs.get(company.subcategory) !== company.category) {
    add(errors, `${label} 一级业务域与二级赛道不匹配：${company.category} / ${company.subcategory}`);
  }

  if (seenSlug.has(company.slug)) add(errors, `slug 重复：${company.slug}`);
  if (seenNum.has(company.num)) add(errors, `num 重复：${company.num}`);
  seenSlug.add(company.slug);
  seenNum.add(company.num);
  bySlug.set(company.slug, company);

  for (const [field, values] of Object.entries(allowed)) {
    if (company[field] != null && !values.has(company[field])) {
      add(errors, `${label}.${field} 非法：${company[field]}`);
    }
  }

  if (!Array.isArray(company.appeared_in)) {
    add(errors, `${label}.appeared_in 必须是数组`);
  } else {
    if (!company.appeared_in.includes(company.batch)) {
      add(errors, `${label}.appeared_in 未包含主批次 ${company.batch}`);
    }
    if (new Set(company.appeared_in).size !== company.appeared_in.length) {
      add(errors, `${label}.appeared_in 存在重复批次`);
    }
    for (const batch of company.appeared_in) {
      appearedCounts[batch] = (appearedCounts[batch] || 0) + 1;
    }
  }

  maxUpdated = [maxUpdated, company.updated, company.researched_at].filter(Boolean).sort().at(-1) || '';

  if (company.status === 'reviewed') {
    if (!['auto', 'approved', 'rejected'].includes(company.review)) {
      add(errors, `${label} 已入正式档案但 review=${company.review}`);
    }
    if (!company.archive) add(errors, `${label} 已深研但缺少 archive`);
  } else if (company.review !== 'none') {
    add(errors, `${label} 尚未入正式档案但 review=${company.review}`);
  }

  if (company.archive) {
    if (!/^companies\/[a-z0-9-]+\.md$/.test(company.archive)) {
      add(errors, `${label}.archive 路径非法：${company.archive}`);
    } else {
      if (!exists(company.archive)) add(errors, `${label} 缺少 Markdown 档案：${company.archive}`);
      const html = company.archive.replace(/\.md$/, '.html');
      if (!exists(html)) add(errors, `${label} 缺少 HTML 档案：${html}`);
    }
  }

  for (const funding of company.funding || []) {
    if (isDisclosedAmount(funding.amount) && !isHttp(funding.source_url)) {
      add(errors, `${label} 融资金额有数字但缺少有效来源：${funding.amount}`);
    }
    if (funding.source_url && !isHttp(funding.source_url)) {
      add(errors, `${label} 融资来源 URL 非法：${funding.source_url}`);
    }
  }
  for (const customer of company.early_customers || []) {
    if (!isHttp(customer.source_url)) {
      add(errors, `${label} 客户信号缺少有效来源：${customer.name || '未命名客户'}`);
    }
  }
  if (company.investors?.source_url && !isHttp(company.investors.source_url)) {
    add(errors, `${label} 投资方来源 URL 非法：${company.investors.source_url}`);
  }
}

const batches = companiesData.meta?.batches || [];
for (const batch of batches) {
  const actual = appearedCounts[batch.id] || 0;
  if (actual !== batch.total) {
    add(errors, `${batch.id} 批次统计不一致：meta=${batch.total}，实际=${actual}`);
  }
}
for (const batch of Object.keys(appearedCounts)) {
  if (!batches.some(item => item.id === batch)) add(errors, `appeared_in 出现未知批次：${batch}`);
}

const queue = queueData.queue;
if (!Array.isArray(queue)) {
  errors.push('data/queue.json 缺少 queue 数组');
} else {
  const queueSlugs = new Set();
  for (const item of queue) {
    if (queueSlugs.has(item.slug)) add(errors, `深研队列 slug 重复：${item.slug}`);
    queueSlugs.add(item.slug);
    const company = bySlug.get(item.slug);
    if (!company) {
      add(errors, `深研队列引用不存在的公司：${item.slug}`);
      continue;
    }
    if (item.tier !== company.tier || item.status !== company.status) {
      add(errors, `深研队列与真源不一致：${item.slug}`);
    }
  }
  const pendingA = companies.filter(company =>
    ['A1', 'A2'].includes(company.tier) && company.status === 'pending' && !queueSlugs.has(company.slug)
  );
  if (pendingA.length) add(errors, `A 档 pending 未入队：${sample(pendingA.map(x => x.slug))}`);
}

const themeIds = new Set((themesData.themes || []).map(theme => theme.id));
const assignments = themesData.assign || {};
const invalidAssignments = Object.entries(assignments).filter(([slug, theme]) =>
  !bySlug.has(slug) || !themeIds.has(theme)
);
if (invalidAssignments.length) {
  add(errors, `主题映射存在无效项：${sample(invalidAssignments.map(([slug, theme]) => `${slug}→${theme}`))}`);
}
const unassigned = companies.filter(company => !assignments[company.slug]);
if (unassigned.length) {
  info.push(`历史 themes 映射留空 ${unassigned.length} 家；分类体系 2.0 已由 category/subcategory 全量覆盖`);
}

if (companiesData.meta?.updated && maxUpdated && companiesData.meta.updated < maxUpdated) {
  add(warnings, `meta.updated=${companiesData.meta.updated} 早于最新档案日期 ${maxUpdated}`);
}
if (companiesData.meta?.taxonomy_version !== taxonomyData.version) {
  add(errors, `分类版本不一致：companies=${companiesData.meta?.taxonomy_version || '(空)'}，taxonomy=${taxonomyData.version}`);
}
const usedSubcategories = new Set(companies.map(company => company.subcategory));
const unusedSubcategories = [...taxonomyPairs.keys()].filter(label => !usedSubcategories.has(label));
if (unusedSubcategories.length) add(warnings, `当前无公司的二级赛道：${sample(unusedSubcategories)}`);

try {
  const indexHtml = readText('index.html');
  const requiredIds = ['q', 's-category', 's-subcategory', 'subcats', 'rows', 'count', 'reset'];
  const missingIds = requiredIds.filter(id => !new RegExp(`id=["']${id}["']`).test(indexHtml));
  if (missingIds.length) add(errors, `index.html 缺少分类交互元素：${missingIds.join('、')}`);
  const executableScripts = [...indexHtml.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(match => !/application\/json/i.test(match[1]))
    .map(match => match[2]);
  new Function(executableScripts.join('\n'));
} catch (err) {
  add(errors, `index.html 脚本语法检查失败：${err.message}`);
}
const reviewed = companies.filter(company => company.status === 'reviewed');
const auto = reviewed.filter(company => company.review === 'auto');
info.push(`公司 ${companies.length} 家；正式档案 ${reviewed.length} 家；auto ${auto.length} 家`);
info.push(`批次 ${batches.length} 个；队列 ${queue?.length || 0} 条；历史 themes 映射 ${companies.length - unassigned.length} 家`);
info.push(`分类体系 ${taxonomyData.version}：${taxonomyData.categories.length} 个一级业务域；${taxonomyPairs.size} 个二级赛道；已使用 ${usedSubcategories.size} 个`);

finish();

function finish() {
  for (const line of info) console.log(`ℹ️  ${line}`);
  for (const line of warnings) console.warn(`⚠️  ${line}`);
  for (const line of errors) console.error(`❌ ${line}`);
  if (errors.length) {
    console.error(`\n校验失败：${errors.length} 个错误，${warnings.length} 个警告`);
    process.exit(1);
  }
  console.log(`\n✅ 全库校验通过：0 个错误，${warnings.length} 个警告`);
}
