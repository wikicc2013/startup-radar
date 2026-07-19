#!/usr/bin/env node
/*
 * 将公司分类统一迁移为“一级业务域 × 二级产品赛道”。
 * 默认仅预览；传入 --write 才会写回 data/companies.json。
 */
const fs = require('fs');
const path = require('path');
const { classifyCompany, categories } = require('./lib/taxonomy.cjs');

const REPO = path.resolve(__dirname, '..');
const dataPath = path.join(REPO, 'data/companies.json');
const themesPath = path.join(REPO, 'data/themes.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const companies = Array.isArray(data) ? data : data.companies;
const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));
const write = process.argv.includes('--write');
const showSamples = process.argv.includes('--samples');
const counts = new Map();
const samples = new Map();
let changed = 0;

for (const company of companies) {
  if (!('source_category' in company)) company.source_category = company.category || '';
  if (!('source_subcategory' in company)) company.source_subcategory = company.subcategory || '';
  const next = classifyCompany(company, themes.assign || {});
  if (company.category !== next.category || company.subcategory !== next.subcategory) changed++;
  company.category = next.category;
  company.subcategory = next.subcategory;
  counts.set(next.subcategoryId, (counts.get(next.subcategoryId) || 0) + 1);
  const bucket = samples.get(next.subcategoryId) || [];
  if (bucket.length < 4) bucket.push(`${company.name}（${company.one_liner_zh}）`);
  samples.set(next.subcategoryId, bucket);
}

console.log(`公司总数：${companies.length}；需更新：${changed}；目标二级赛道：${counts.size}`);
for (const category of categories) {
  const total = category.subcategories.reduce((sum, item) => sum + (counts.get(item.id) || 0), 0);
  console.log(`\n${category.label} ${total}`);
  for (const item of category.subcategories) {
    console.log(`  ${String(counts.get(item.id) || 0).padStart(3)}  ${item.label}`);
    if (showSamples && counts.get(item.id)) console.log(`       例：${samples.get(item.id).join('；')}`);
  }
}

if (!write) {
  console.log('\n预览完成：未写文件。确认后运行 node scripts/reclassify.cjs --write');
  process.exit(0);
}

if (!Array.isArray(data)) {
  data.meta = { ...(data.meta || {}), updated: '2026-07-19', taxonomy_version: '2.0', taxonomy_updated: '2026-07-19' };
}
fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 1)}\n`, 'utf8');
console.log('\n✅ data/companies.json 已写入新分类，并保留 source_category/source_subcategory。');
