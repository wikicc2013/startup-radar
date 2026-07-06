# Routine 提示词 · 入库（触发器：GitHub push 事件，路径过滤 inbox/**）

你在 startup-radar 仓库中运行。先读 CLAUDE.md 和 .claude/skills/ai-startup-radar/SKILL.md，
然后严格执行以下入库流程：

1. 检查 inbox/ 目录。若为空，直接结束，不做任何提交。
2. 对 inbox/ 里的每个文件：
   a. 读取内容（xlsx 用 pandas/openpyxl，md/txt 直接读，含链接则抓取全文）；
   b. 抽取公司清单：公司名、一句话业务、品类、来源。只抽文件里明示的公司，不凭记忆补充；
   c. 对照 data/companies.json 去重：已存在的公司只在 appeared_in 追加新批次号，
      并在 registry.md「跨批次热度信号」记一行；appeared_in ≥2 的公司在总结里单独提示；
   d. 对新公司按 SKILL.md 第三节判据分诊为 A1/A2/B/C，写明 triage_reason；
   e. 分配新批次号 B{NNN}（现有最大值+1），文件移入 batches/ 并按规范重命名。
3. 更新三个数据文件（保持一致性）：
   - data/companies.json：追加新公司、更新 meta.batches、meta.updated；
   - data/queue.json：新 A 档公司以 status=pending 追加进队列；
   - registry.md：批次索引加一行，A/B 档表格追加条目。
4. 生成批次快报 reports/B{NNN}-快报.md：漏斗数字（总数→A/B/C）、A 档清单及分诊理由、
   3 个最值得写的内容钩子。
5. 单次 commit + push，信息格式：`ingest(B{NNN}): {来源} {总数}→A{n}/B{n}/C{n}`。

约束：本 Routine 只做抽取+分诊+建卡，禁止对任何公司启动深度搜索研究（那是深研 Routine 的事）。
单文件超过 300 家时拆成多个批次号。抽取总数与文件声称数量不符时，在快报中显著标注差异。
