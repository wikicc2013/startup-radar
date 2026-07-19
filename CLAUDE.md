# startup-radar 仓库约定（所有 Routine / 会话必须遵守）

> **当前执行方式：本地驱动**。研究由本地 Claude Code 的 /ingest 与 /research 命令执行，
> 完成后直接提交 main 并 push（push 前先 pull --rebase）。云端 Routines/Actions 停用中。

## 这个仓库是什么
转型有术的「新锐 AI 创业公司档案库」。仓库即数据库：
- `data/companies.json` —— **唯一结构化真源**，看板和一切统计从这里读
- `registry.md` —— 人读的批次与初始分诊索引；当前状态以 companies.json 为准
- `companies/{slug}.md` —— 单公司深研档案（当前全量公司均已建档）
- `data/queue.json` —— 深研队列（Routine 的工作清单）
- `inbox/` —— 入口：新清单文件丢这里，处理完移入 `batches/` 并重命名 `B{NNN}-{来源}-raw.{ext}`
- `index.html` —— 查询看板（GitHub Pages）；在线优先读取 JSON，同时内嵌由脚本同步的离线快照
- `data/taxonomy.json` —— 分类体系 2.0：8 个一级业务域 × 28 个二级产品赛道的定义
- `data/themes.json` —— 历史价值链归属与重分类输入；正式分类以 companies.json 的 category/subcategory 为准
- `overview.html` / `benchmarks.html` / `rankings.html` / `trends.html` / `investors.html` / `深研总览.*` —— 派生页，由 `scripts/build-*.cjs` 从 companies.json + taxonomy.json 生成，**勿手改**
- `scripts/build-all.cjs` —— 全量派生页与离线快照的一键生成/检查入口

## 状态机
`tier` 与 `status` 是两条独立轴：tier 表示研究价值/优先级，status 表示档案完成度。

- 新批次初始状态：A 档为 `pending`，B 档为 `card`，C 档为 `named`；
- 后续专项排水可以对任意档位升档深研，完成后统一为 `reviewed`，不再用 tier 推断是否深研；
- 当前历史库存已经完成全量排水，因此现有公司均为 `reviewed`。未来新批次仍按上述初始状态进入。

**当前模式：直通（auto-approve）**——深研 Routine 完成后直接置 `status=reviewed`，
并写 `review="auto"`。人工审核过的档案写 `review="approved"`（或 `rejected`）。
auto 与 approved 在看板上用不同印章区分，随时可筛出全部 auto 档案补审。

**切回人工审核（gated）模式**：把本节模式改为 gated，同时把 routines/research.md
末段状态写入规则改回"只写 researched"，即恢复 pending→researched→reviewed 三级。
中间态 `researched`(待审核) 的定义保留，直通模式下不使用。

## 铁律
1. 分诊判据、档案模板、置信度体系以 `.claude/skills/ai-startup-radar/SKILL.md` 为准，不得即兴修改判据。
2. 融资金额/客户名单等数字必须带来源链接；找不到来源就写"未披露"，禁止编造。
3. 新增公司或修改分类依据后先运行 `node scripts/reclassify.cjs --write`，再同步 registry.md 并运行 `node scripts/build-all.cjs`；提交前运行 `node scripts/validate.cjs` 与 `node scripts/build-all.cjs --check`。
4. 深研每次运行最多处理 `data/queue.json` 里 policy.per_run 家（默认 3），按 priority 升序取 pending。
5. IT桔子等付费墙/登录墙数据禁止抓取；只允许用公开页核对。
6. commit 信息规范：
   - 入库：`ingest(B{NNN}): {来源} {总数}→A{n}/B{n}/C{n}`
   - 深研：`research({slug}): 深研完成，自动通过`
   - 审核：`review({slug}): 审核通过` 或 `review({slug}): 驳回，原因见档案`
7. 同名公司再现：不重复建档，在 companies.json 该公司 appeared_in 追加批次号，registry.md「跨批次热度信号」加一行；appeared_in ≥2 时在提交信息里提示升档。

## companies.json 单条 schema
num, name, slug, batch, source, category, subcategory, source_category, source_subcategory,
one_liner_en, one_liner_zh,
tier(A1/A2/B/C), triage_reason, status(pending/researched/reviewed/card/named),
review(none/auto/approved/rejected), appeared_in[], updated；
深研后追加：funding[{round,amount,date,source_url}], early_customers[{name,confidence,source_url}],
cn_benchmarks[], scene_tags[], archive("companies/{slug}.md"), researched_at, research_status,
investors{lead,investors[],source_url}, lifecycle(active/acquired/defunct)

其中 `category/subcategory` 使用分类体系 2.0；`source_category/source_subcategory` 永久保留来源清单的原始分类，禁止用重分类结果覆盖。
