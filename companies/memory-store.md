# Memory Store

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：Shared context for all of your team's agents（为团队所有智能体提供共享上下文）
- **官网/锚定**：https://www.ycombinator.com/companies/memory-store
- **深研状态**：researched

## 公司画像
- **团队**：4 人（YC 官方页）。联合创始人 Diwank Tomer（Thiel Fellow，哥伦比亚大学，2012/2013 起做 AI 产品，前公司为 Domino's、Wingstop、Buffalo Wild Wings 提供电话点餐技术，NPM 周下载 6000 万）与 Ishita Jindal（曾在 Jar、Lenskart 负责服务数百万用户的产品，IBM 数据科学家）。二人 2018 年因共同喜欢电影《Her》结识；前一创业项目为开源 agent 编排器 Julep（GitHub 7000+ stars，据搜索结果曾达约 $400k ARR）。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco）
- **产品**：为团队的人与 AI agent 提供一层共享记忆（shared memory / company brain）。自动从 Slack、Gmail、Granola、Claude、Codex 等工具采集会话、会议、笔记，按项目/人/决策组织，合成为持续自更新的『公司大脑』。以 MCP（Model Context Protocol）形式接入，任何支持 MCP 的 agent（ChatGPT Agents、Claude Cowork、Codex、OpenClaw 等数百个客户端）均可连接读取。核心特性 Briefs——会随新记忆产生而自动更新的活文档（决策日志、状态更新、客户诉求）。集成清单含 Claude、ChatGPT、Cursor、Slack、Raycast、Linear、Granola、Fathom、OpenCode。
- **商业模式**：SaaS/订阅（推断）。官网设个人版（免费试用）与团队版（需预约 demo）；具体价格未披露。
- **竞争格局**：AI agent 记忆层赛道，直接对标 Mem0、Zep 等；上游平台（OpenAI/ChatGPT 原生记忆、Anthropic）亦在向该层渗透，竞争激烈。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业内部经验与决策高度分散在班组会议、邮件、微信/钉钉群、老师傅脑子里。Memory Store 式『共享记忆层』的价值在于：把工艺变更决策、客户投诉处理、异常复盘等碎片沉淀成可被人与 agent 共用的活记忆，避免同一问题反复踩坑。对制造场景，可对应到设备维保知识库、质量异常处理经验库、供应商往来纪要的自动归集，并让排产/质检/客服 agent 直接读取上下文。
2. **国内对标厂商**：Mem0（Agent 记忆层，最直接对标；YC 系）、国内向量数据库/记忆基座：Zilliz Milvus、腾讯云 VectorDB、企业知识/会话沉淀方向：飞书知识库、钉钉 AI 助理的组织记忆能力
   > 国内直接对标 Mem0（Agent 记忆层）与向量库（Milvus、腾讯云 VectorDB）；企业侧记忆能力更多内嵌在飞书/钉钉的知识库与 AI 助理中，缺少 Memory Store 这种『跨工具聚合 + MCP 通用接入』的独立记忆中间件——这是国内可切入的空档。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 记忆层、共享上下文、MCP 生态、企业知识沉淀、多智能体协同、会议/邮件/IM 自动归纳、活文档 Briefs
   > 可迁移打法：① 以 MCP 作为通用接口，让记忆层不绑定单一 agent 平台，谁都能接；② Briefs 活文档模式——不是静态知识库，而是随事件自动刷新的决策/状态/诉求快照，制造业的『日清日结』看板可借鉴；③ 从个人免费试用切入、团队版转付费的 PLG 漏斗，适合先在单车间/单产线小范围验证再横向复制。
4. **风险与存疑点**：① 赛道拥挤且巨头下压：OpenAI/Anthropic 原生记忆、Mem0/Zep 均在争夺同一层，独立记忆中间件的护城河存疑；② 数据来源依赖 Slack/Gmail/Granola 等 SaaS，国内制造企业主用微信/钉钉/飞书 + 内网，直接落地需重做连接器且过数据合规关；③ 记忆准确性与幻觉、组织敏感信息越权访问是核心信任风险；④ 公司 2025 年成立、团队仅 4 人、无公开融资与具名客户，早期阶段不确定性高。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
