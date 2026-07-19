#!/usr/bin/env node
/*
 * 将最新 companies.json 同步进 index.html 的离线兜底。
 * 在线访问仍优先 fetch JSON；直接双击 index.html 时使用该快照。
 */
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const indexPath = path.join(REPO, 'index.html');
const companies = JSON.parse(fs.readFileSync(path.join(REPO, 'data/companies.json'), 'utf8'));
let html = fs.readFileSync(indexPath, 'utf8');

const safeJson = value => JSON.stringify(value).replace(/</g, '\\u003c');
const dataTag = `<script id="fallback" type="application/json">${safeJson(companies)}</script>`;
const dataPattern = /<script id="fallback" type="application\/json">[\s\S]*?<\/script>/;
const themesPattern = /<script id="fallback-themes" type="application\/json">[\s\S]*?<\/script>/;

if (!dataPattern.test(html)) throw new Error('index.html 缺少 fallback 数据块');
html = html.replace(dataPattern, dataTag);
html = html.replace(themesPattern, '');

fs.writeFileSync(indexPath, html, 'utf8');
console.log(`✅ index.html 离线快照已同步：${companies.companies.length} 家，${companies.meta.batches.length} 批`);
