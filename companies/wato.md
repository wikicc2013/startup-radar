# Wato

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：Shared memory, tools, and workflows for agents across teams（跨团队智能体的共享记忆、工具与工作流）
- **官网/锚定**：https://www.ycombinator.com/companies/wato
- **深研状态**：researched

## 公司画像
- **团队**：2 人小团队。联合创始人 Arihan Varanasi（斯坦福 CS，个人站 arihanv.com、GitHub @arihanv，曾与 Mercor ML 相关）与 Rahul Rejeev（斯坦福 CS，专注为机构构建 AI 编排层）。YC 负责合伙人 Nicolas Dessaigne（Algolia 联创）。
- **成立/批次**：2026 年
- **地点**：美国旧金山湾区（San Francisco, CA）
- **产品**：面向企业团队的『共享 AI 工作空间 / AI agent 控制点』。为每个团队提供一个受权限管控的共享 workspace：接入经批准的集成与 MCP 工具、沉淀可版本化的共享记忆（公司知识/决策/注意事项/playbook）、发布可复用 skills、运行可协作的云端 agent 会话（支持桌面/文件系统/浏览器/computer use）、托管实时 artifacts 与 dashboard，并对全组织的 tool 调用做 tracing 与审计。核心解决『AI 产出散落在个人聊天/本地文件/个人 AI 账号里、下一个人无法复用』的问题。通过一次接入 Wato MCP + 公司账号认证，让 Codex / Claude Desktop / Cursor / Claude Code 等 MCP 客户端获得团队记忆、skills 与授权工具。
- **商业模式**：企业 SaaS（self-serve + demo/申请访问）。官网未披露具体定价。可连接 Slack、GitHub、Linear、Salesforce、Gong 及内部工具，权限支持 org/team/user/connector/tool 多级颗粒度。
- **竞争格局**：与『AI agent 协作/记忆/编排层』赛道正面竞争：横向 MCP 网关与 agent 平台（如企业级 MCP 管理、Anthropic 官方 skills/memory 生态、各类 agent orchestration 创业公司），以及团队知识/上下文共享工具。差异点在于把『共享记忆 + 权限化工具 + 云端可协作 agent 会话 + 审计 tracing』捆成一个团队控制面，锚定已在用 Claude Code/Cursor/Codex 的团队。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业内部往往同时跑着研发、质量、供应链、售后多条线的 AI 试点，痛点正是 Wato 瞄准的：prompt、决策、工具配置散落在个人手里、无法沉淀复用、也无法审计。Wato 式『共享记忆 + 权限化工具 + 可接力的 agent 会话 + 全链路 tracing』提供了一个企业内 agent 治理与知识资产化的样板——把老师傅的经验、工艺 playbook、审批链沉淀成团队可版本化的 memory 与 skills，让下一个 agent/员工站在上一次运行的肩膀上。
2. **国内对标厂商**：多智能体协同/记忆基础设施方向国内对标：Dify、扣子（Coze）等 agent 编排平台在做团队级工作流与工具接入，但『跨团队共享记忆 + MCP 权限化 + agent 会话可接力』这一控制面尚不成熟、记忆基础设施可对标 Mem0（开源 agent 记忆层）思路的国内化尝试，以及国内做企业知识库+RAG+MCP 网关的中间层团队、MCP/工具治理方向可对标国内做『企业级 MCP 市场/网关+权限审计』的早期项目
   > 国内制造业落地更可能由信创友好的 agent 平台（Dify/扣子）或本地部署的知识中台承接，短期内『共享记忆+MCP 治理』这一层多为定制项目而非标准产品；Wato 的产品化打法（一次接 MCP 即获团队上下文）值得国内厂商借鉴，但需解决国产大模型/私有化部署与合规审计要求。
3. **可迁移的干法 / 应进场景词典的词条**：多智能体协同、Agent 记忆基础设施、MCP 工具治理与权限、团队知识沉淀/复用、云端 Agent 会话协作、工具调用审计 tracing、企业 AI 工作空间
   > 可迁移的打法：①以『控制点/治理层』而非又一个 agent 应用切入，绑定团队已在用的工具（Claude Code、Cursor 等）降低采纳门槛；②把每次成功运行沉淀为可版本化 memory + 可复用 skill，形成知识复利飞轮；③org/team/user/tool 多级权限 + 审计 tracing 直击企业合规采购决策；④用 MCP 标准做『一次接入、处处可用』的分发。
4. **风险与存疑点**：①团队仅 2 人、2026 年新公司，产品 2026-06 才公开，极早期，无披露融资与具名客户，执行与留存均未验证；②所处赛道拥挤且强依赖 MCP 生态与上游模型厂（Anthropic 等）的官方 memory/skills 能力，存在被平台方原生功能吞并的风险；③企业记忆/工具审计涉及数据主权与安全信任，销售周期长；④『control point / 控制点』定位需在众多 agent orchestration 玩家中建立差异化护城河，尚待观察。未发现更名/pivot 迹象。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
