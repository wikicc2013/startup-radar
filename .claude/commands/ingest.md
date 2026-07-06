# 入库（本地模式）

严格按照 routines/ingest.md 执行完整入库流程（先读 CLAUDE.md 和
.claude/skills/ai-startup-radar/SKILL.md，再处理 inbox/ 里的清单文件）。

本地模式差异：
- 完成后直接提交到 main 并 `git push origin main`（本地无分支护栏，不走 claude/ 分支）；
- push 前先 `git pull --rebase origin main`，避免与远端冲突；
- inbox/ 为空时直接告知"inbox 为空，无事可做"，不提交。

补充参数（可选）：$ARGUMENTS
若参数里给了文件路径或链接，直接把它当作 inbox 输入处理（省去先放文件再跑的一步）。
