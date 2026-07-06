# startup-radar 仓库约定（所有 Routine / 会话必须遵守）

> **当前执行方式：本地驱动**。研究由本地 Claude Code 的 /ingest 与 /research 命令执行，
> 完成后直接提交 main 并 push（push 前先 pull --rebase）。云端 Routines/Actions 停用中。

## 这个仓库是什么
转型有术的「新锐 AI 创业公司档案库」。仓库即数据库：
- `data/companies.json` —— **唯一结构化真源**，看板和一切统计从这里读
- `registry.md` —— 人读主索引，与 companies.json 同步维护
- `companies/{slug}.md` —— A 档单公司深研档案
- `data/queue.json` —— 深研队列（Routine 的工作清单）
- `inbox/` —— 入口：新清单文件丢这里，处理完移入 `batches/` 并重命名 `B{NNN}-{来源}-raw.{ext}`
- `index.html` —— 查询看板（GitHub Pages），**永不因数据更新而改动**，只读 JSON

## 状态机
公司 status：`pending`(A档待深研) → `reviewed`(已入正式档案)
B 档为 `card`（速写卡，不深研），C 档为 `named`（只记名）。

**当前模式：直通（auto-approve）**——深研 Routine 完成后直接置 `status=reviewed`，
并写 `review="auto"`。人工审核过的档案写 `review="approved"`（或 `rejected`）。
auto 与 approved 在看板上用不同印章区分，随时可筛出全部 auto 档案补审。

**切回人工审核（gated）模式**：把本节模式改为 gated，同时把 routines/research.md
末段状态写入规则改回"只写 researched"，即恢复 pending→researched→reviewed 三级。
中间态 `researched`(待审核) 的定义保留，直通模式下不使用。

## 铁律
1. 分诊判据、档案模板、置信度体系以 `.claude/skills/ai-startup-radar/SKILL.md` 为准，不得即兴修改判据。
2. 融资金额/客户名单等数字必须带来源链接；找不到来源就写"未披露"，禁止编造。
3. 每次修改 companies.json 后必须同步 registry.md 的对应条目和批次索引统计。
4. 深研每次运行最多处理 `data/queue.json` 里 policy.per_run 家（默认 3），按 priority 升序取 pending。
5. IT桔子等付费墙/登录墙数据禁止抓取；只允许用公开页核对。
6. commit 信息规范：
   - 入库：`ingest(B{NNN}): {来源} {总数}→A{n}/B{n}/C{n}`
   - 深研：`research({slug}): 深研完成，待审核`
   - 审核：`review({slug}): 审核通过` 或 `review({slug}): 驳回，原因见档案`
7. 同名公司再现：不重复建档，在 companies.json 该公司 appeared_in 追加批次号，registry.md「跨批次热度信号」加一行；appeared_in ≥2 时在提交信息里提示升档。

## companies.json 单条 schema
num, name, slug, batch, source, category, subcategory, one_liner_en, one_liner_zh,
tier(A1/A2/B/C), triage_reason, status(pending/researched/reviewed/card/named),
review(none/approved/rejected), appeared_in[], updated；
深研后追加：funding[{round,amount,date,source_url}], early_customers[{name,confidence,source_url}],
cn_benchmarks[], scene_tags[], archive("companies/{slug}.md")
