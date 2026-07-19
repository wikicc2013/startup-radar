#!/usr/bin/env node
/*
 * 一键生成全部派生页面；--check 在临时目录生成并比对，不修改工作区。
 * 用法：node scripts/build-all.cjs [--check]
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO = path.resolve(__dirname, '..');
const CHECK = process.argv.includes('--check');
const BUILDERS = [
  'build-index.cjs',
  'build-overview.cjs',
  'build-benchmarks.cjs',
  'build-rankings.cjs',
  'build-trends.cjs',
  'build-investors.cjs',
  'build-topic-l4.cjs'
];
const OUTPUTS = [
  'index.html', 'overview.html', '深研总览.html', '深研总览.md',
  'benchmarks.html', 'rankings.html', 'trends.html', 'investors.html',
  '专题-L4工程图纸.html'
];

function run(script, cwd) {
  const result = spawnSync(process.execPath, [path.join('scripts', script)], {
    cwd, encoding: 'utf8', stdio: 'pipe'
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error(`${script} 执行失败`);
}

function sameFile(left, right) {
  if (!fs.existsSync(left) || !fs.existsSync(right)) return false;
  return fs.readFileSync(left).equals(fs.readFileSync(right));
}

if (!CHECK) {
  for (const script of BUILDERS) run(script, REPO);
  console.log(`\n✅ 全部派生页面构建完成：${OUTPUTS.length} 个产物`);
  process.exit(0);
}

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'startup-radar-build-'));
try {
  fs.cpSync(path.join(REPO, 'scripts'), path.join(temp, 'scripts'), { recursive: true });
  fs.cpSync(path.join(REPO, 'data'), path.join(temp, 'data'), { recursive: true });
  fs.copyFileSync(path.join(REPO, 'index.html'), path.join(temp, 'index.html'));
  for (const script of BUILDERS) run(script, temp);

  const changed = OUTPUTS.filter(file => !sameFile(path.join(REPO, file), path.join(temp, file)));
  if (changed.length) {
    console.error(`\n❌ 生成物不是最新：${changed.join('、')}`);
    console.error('请运行：node scripts/build-all.cjs');
    process.exitCode = 1;
  } else {
    console.log(`\n✅ 生成物检查通过：${OUTPUTS.length} 个产物均为最新`);
  }
} finally {
  const resolved = path.resolve(temp);
  const prefix = path.join(path.resolve(os.tmpdir()), 'startup-radar-build-');
  if (resolved.startsWith(prefix)) fs.rmSync(resolved, { recursive: true, force: true });
}
