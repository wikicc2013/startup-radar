# startup-radar · 新锐 AI 创业公司档案库

清单进，档案出。GitHub 仓库即数据库，本地 Claude Code 是研究引擎，看板是你的"IT桔子"。

**当前模式：本地驱动**——研究在你电脑上的 Claude Code 里跑，跑完自动 push，
GitHub 只负责存储和看板展示。云端自动化（Routines/Actions）已备好但停用，随时可升级。

## 一次性部署（约 10 分钟）

1. **建库**：GitHub 新建仓库 `startup-radar`（建议先 public——私有仓库开 Pages 需要
   GitHub Pro），不要初始化 README。本目录下执行：
   ```bash
   git init && git add -A && git commit -m "init: 档案库系统 + B001 YC X26 入库"
   git branch -M main
   git remote add origin https://github.com/你的用户名/startup-radar.git
   git push -u origin main
   ```
2. **开看板**：仓库 Settings → Pages → Source 选 `main` / `/(root)`。
   几分钟后 `https://你的用户名.github.io/startup-radar/` 随时可查，手机存书签。
   本地预览：直接双击 index.html（已内嵌数据兜底）。

部署完成。没有第 3 步。

## 日常操作（就两条命令）

在仓库目录打开 Claude Code（`claude`），然后：

- **入库**：把清单文件（xlsx/csv/md/含链接的 txt）丢进 `inbox/`，说 `/ingest`。
  也可以直接 `/ingest 文件路径或链接`，连放文件这步都省了。
  完成 = 分诊入库 + registry/看板数据更新 + 批次快报 + 自动 push。
- **深研**：说 `/research`（默认排水 3 家）、`/research 5`（指定家数）、
  `/research foaster`（点名插队）。
  完成 = 档案写入 companies/ + 自动通过入正式档案 + 自动 push。

push 之后刷新看板即见最新状态。队列排完会提示"队列已清空"。

## 目录结构

```
inbox/        入口，处理后自动清空
batches/      批次原始名单存档
companies/    A 档深研档案（Markdown）
data/         companies.json（真源）+ queue.json（深研队列）
reports/      批次快报
routines/     研究流程提示词（本地命令与云端 Routine 共用同一套）
registry.md   人读主索引
index.html    查询看板（永不因数据更新而改，只读 JSON）
CLAUDE.md     仓库宪法：状态机、铁律、提交规范
.claude/
  commands/   /ingest 与 /research 本地命令
  skills/ai-startup-radar/   分诊判据与研究方法（唯一判据来源）
```

## 以后想升级云端全自动？

两条路，流程提示词都是现成的（routines/ 目录）：
- **Routines（推荐）**：claude.ai/code/routines 建两条例程——入库用 GitHub push 触发、
  深研用每日计划触发，提示词分别粘贴 routines/ingest.md 和 routines/research.md。
  注意研究预览期 Routine 提交默认落在 claude/ 前缀分支，届时启用
  `.github/workflows/auto-merge-claude.yml`（已备好）自动并回 main；
- **GitHub Actions**：取消 `.github/workflows/radar.yml` 里触发器的注释，
  配好 ANTHROPIC_API_KEY Secret（API 按量计费，与订阅额度分开）。
两者二选一，不要同时开。

## 三条纪律（写给未来的自己）

1. 蓝章（auto）≠ 红章（响哥审核）——对外交付引用以红章为准，蓝章随时可批量筛出补审。
2. 判据要改就改 SKILL.md 并提交，不在对话里临时放宽。
3. 无来源的数字宁可写"未披露"。
