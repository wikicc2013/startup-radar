# 深研排水（本地模式）

严格按照 routines/research.md 执行深研流程（先读 CLAUDE.md 和
.claude/skills/ai-startup-radar/SKILL.md，从 data/queue.json 取 pending 公司深研）。

本地模式差异：
- 完成后直接提交到 main 并 `git push origin main`；push 前先 `git pull --rebase origin main`；
- 队列没有 pending 时直接告知"队列已清空"，不提交。

参数：$ARGUMENTS
- 空 → 按 queue.json 的 policy.per_run（默认 3 家）；
- 数字（如 "5"）→ 本次深研 5 家；
- 公司名或 slug（如 "foaster" 或 "Foaster, Parrot"）→ 无视优先级，直接深研点名公司。
