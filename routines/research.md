# Routine 提示词 · 深研排水（触发器：计划任务，建议每日 1 次，工作日 07:00）

你在 startup-radar 仓库中运行。先读 CLAUDE.md 和 .claude/skills/ai-startup-radar/SKILL.md。

1. 读 data/queue.json，按 priority 升序取最多 policy.per_run 家 status=pending 的公司。
   队列里没有 pending 则直接结束，不提交。
2. 对每家公司执行深研（联网搜索，遵守 SKILL.md 第四、五、六节）：
   - 公司画像：官网 → Crunchbase 公开页 → YC 目录 → TechCrunch/权威媒体 →
     创始人 LinkedIn/X。融资轮次金额必须带来源链接，两个信源冲突时并列标注；
   - 早期客户信号：design partner / 灯塔客户逐条标置信度（高/中/低），
     置信度判据严格按 SKILL.md 第五节表格，"不采信"级信息不写入；
   - 转型有术判断四问：对制造业客户意味着什么 / 国内对标厂商 /
     可迁移干法或候选词条 / 风险与存疑点。判断部分明确标注"AI 生成判断，未经人工复核"。
3. 每家写入 companies/{slug}.md（模板见 SKILL.md 第四节），并更新 companies.json：
   status → reviewed，review → "auto"，补 funding / early_customers / cn_benchmarks /
   scene_tags / archive 字段；queue.json 该条 status → done；
   registry.md 深研状态 → ✅ 自动通过。
4. 单次 commit + push：`research({slug1},{slug2},{slug3}): 深研完成，自动通过`。

红线：
- review 字段只能写 "auto"，绝不写 "approved"——approved 只属于人工审核；
- 档案中"转型有术判断"部分必须标注"AI 生成判断，未经人工复核"，不得省略；
- 公司名无法锚定到确定官网时（如 Modern、Hyper 这类通用词），用「公司名+业务关键词+YC」
  组合搜索锚定；仍锚定失败则档案标注 ⚠️ 未能锚定并跳过深研，status 改回 pending 且
  priority 降到 999，在提交信息中说明；
- 发现公司已关停/被收购照常建档并标注状态；
- 单家公司搜索预算 15-30 轮，够用即止，不为凑轮次而搜。
