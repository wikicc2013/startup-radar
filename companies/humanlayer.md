# HumanLayer

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：IDE for orchestrating AI coding agents（编排 AI 编码智能体的 IDE）
- **官网/锚定**：https://www.ycombinator.com/companies/humanlayer
- **深研状态**：researched（在营。从 human-in-the-loop 审批层 SDK（Python/TS）演进为编排并行 AI 编码智能体的 IDE（产品名 CodeLayer / hlyr.dev）。开源仓库 github.com/humanlayer/humanlayer 星标过万，但 CodeLayer IDE 本体截至 2025 年多以候补名单/营销页形式存在，正式可用性存疑（见 risks）。）

## 公司画像
- **团队**：创始人兼 CEO Dexter (Dex) Horthy——推广了 context engineering（上下文工程）概念，YC F24。团队规模小：YC 页显示 2 人，第三方（getlatka）估至 2025 年 9 月约 6 人。
- **成立/批次**：2023（YC Fall 2024 / F24 批次）
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：两条产品线同源：①HumanLayer——为 AI Agent 加人审的 API/SDK，支持 Python 与 TypeScript，可在 Slack/SMS/邮件等渠道对 Agent 的高风险动作做审批与人机反馈；②CodeLayer（hlyr.dev / 原 humanlayer.dev 主推）——面向团队的 AI 编码 IDE，基于 Anthropic Claude Code，支持并行跑多个 Claude Code 会话（MULTICLAUDE）、git worktree、远程执行与全天活动日志，键盘优先交互（对标 Superhuman）。核心方法论是 QRSPI 工作流（Questions→Research→Design→Structure→Plan→Implement），在实现前用评论式设计评审拦截问题，主打让工程组走向高比例 AI 编写代码同时不把代码库写烂（no AI slop）。
- **商业模式**：SaaS 订阅 + 自带密钥（BYOK）。Starter 免费（至多 3 人、200 会话/月）；Pro 100 美元/用户/月（不限任务/会话）；Enterprise 定制（SSO/SAML、on-prem）。用户接入自有 Claude/Codex 等订阅，不做逐 token 转售。SDK 侧为开源 + 云服务。
- **竞争格局**：AI 编码 IDE/Agent 编排层：Cursor、Windsurf、Devin(Cognition)、Factory、Anthropic Claude Code 官方外壳、Conductor/Vibe Kanban 等并行 agent 编排工具；human-in-the-loop 侧与各家 agent 框架自带审批能力竞争。差异点在 context engineering 方法论 + 并行 Claude Code 会话编排 + 计划阶段人审。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（YC F24 标准投资 + 天使） | 未披露确切金额；第三方数据源不一致：Tracxn 记为约 $500K（1 轮，YC）；HumanLayer 招聘页自述『raised over $3M from YC, Pioneer Fund, and angels（含 Guillermo Rauch、Paul Klein 等）』。以自述口径为准约 $3M+，但无独立媒体披露确切数额 | 2024 | [链接](https://www.ycombinator.com/companies/humanlayer/jobs/oBCZzc7-founding-product-engineer) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Boundary（BAML，YC W23）——创始人 Vaibhav Gupta 具名背书 | 中 | [链接](https://www.ycombinator.com/companies/humanlayer) |
| Upstart / Casco / Osmosis / Ambral / Nautilus / Weave / Roadrunner 等（官网 logo 墙） | 低 | [链接](https://www.humanlayer.dev/) |

## 转型有术判断
1. **对制造业客户意味着什么**：HumanLayer 的真正内核不是又一个编码 IDE，而是把『高风险自动化动作必须过人审』做成一层标准化的编排/审批中间件——这对制造业极有迁移价值。制造现场的 AI Agent（排产调整、工艺参数变更、采购下单、质量放行、设备远程操作）几乎都不能全自动直连执行，需要人在关键节点确认，且确认要落到工人熟悉的渠道（工单系统、企业微信/钉钉、班组群）。HumanLayer 的『Agent 提议→按风险等级路由到对应人→审批/驳回/补充→再执行』模式，正是制造业把 Agent 从演示推向产线的缺失环节。其 QRSPI『先问清、先研究、先设计、计划阶段人审、再实现』的工作流，同样可套到制造知识工作（工艺文件生成、变更管理 ECN、SOP 编写）——先让 Agent 出计划、人在最省力的时刻只读一份决策就绪的评审，再放行实现，兼顾提速与不出事。
2. **国内对标厂商**：编码 Agent/IDE 侧：通义灵码、腾讯 CodeBuddy、字节 Trae、百度 Comate、阿里通义 Lingma——均在做 AI 编码助手/Agent，但少有把『并行多会话编排 + 计划阶段人审』作为主卖点、human-in-the-loop / Agent 审批中间件：国内暂缺纯对标的独立创业公司；多以各家 Agent 平台（扣子/Coze、百炼、字节 Agent 平台）内嵌审批节点，或 RPA 厂商（影刀、来也）的人工复核环节承载、面向企业的 Agent 治理/护栏：与国内 AI 中台/MLOps 及信创合规审批流有功能重叠，但方法论化（context engineering、QRSPI）程度不及
   > 国内在『AI 编码助手』这层已高度内卷（大厂全覆盖），但 HumanLayer 更稀缺的是把『人审/审批』抽象成可复用的 Agent 编排层与方法论这件事——国内目前多把人审当成某个平台的一个内嵌节点，而非一个独立、可跨框架接入的产品层。对国内团队的启发是：与其再造一个编码 IDE，不如做『Agent 高风险动作的审批与治理中间件』，这在强合规、强流程的制造/金融/政企场景需求真实且门槛更高。
3. **可迁移的干法 / 应进场景词典的词条**：human-in-the-loop 审批层、AI Agent 编排 IDE、上下文工程 context engineering、并行编码 agent（MULTICLAUDE）、计划阶段人审 / QRSPI 工作流、自带密钥 BYOK 商业模式
   > 可迁移干法有三：①『风险分级路由人审』——把 Agent 的每个动作按可逆性/影响面分级，只有高风险的才打断人、且路由到最该拍板的那个人，其余放行，这是制造/供应链 Agent 落地的通用护栏范式；②『先计划、后实现，人只审计划』（QRSPI / spec-first）——把人的介入前移到最省力、最高杠杆的计划评审点，而不是事后救火，适用于任何知识密集流程的 AI 改造；③『上下文工程优先于 prompt 反复试错』——用结构化研究/设计文档把领域知识喂给 Agent，而非来回对话，是把 Agent 用进复杂大系统（大代码库、复杂 BOM/工艺）的关键干法。
4. **风险与存疑点**：①产品成熟度存疑：CodeLayer IDE 声势大（GitHub 星标过万、营销页华丽），但有第三方评测（Starlog）直指其核心 IDE/MULTICLAUDE/context 工作流截至评测时仍是候补名单+营销文案，可交付性与开源仓库的实际能力存在落差，需持续验证。②强绑定 Anthropic Claude Code：技术底座依赖单一上游模型/CLI，Anthropic 若自建同类编排体验或改变政策，护城河承压。③赛道极度拥挤且大厂下场：Cursor/Windsurf/Devin/Factory 及模型厂官方外壳都在抢编码 Agent 编排，2 人小团队的融资与人力（自述 $3M+，第三方仅记 ~$500K，口径不一亦是信息风险）能否撑住竞速存疑；客户证据多为 logo 墙/单个具名背书，付费与留存深度未公开。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| HumanLayer — YC 公司主页（创始人/团队/定位/背书） | https://www.ycombinator.com/companies/humanlayer |
| HumanLayer 官网（产品/定价/BYOK/客户 logo） | https://www.humanlayer.dev/ |
| CodeLayer 产品页（hlyr.dev，Close your editor forever） | https://www.hlyr.dev/ |
| GitHub — humanlayer/humanlayer（开源 SDK，星标过万） | https://github.com/humanlayer/humanlayer |
| Advanced Context Engineering for Coding Agents（官方博客/方法论） | https://www.humanlayer.dev/blog/advanced-context-engineering |
| YC 招聘页（自述 raised over $3M from YC, Pioneer Fund, angels） | https://www.ycombinator.com/companies/humanlayer/jobs/oBCZzc7-founding-product-engineer |
| Tracxn — HumanLayer 公司/融资档案（记 ~$500K, 1 轮 Seed 2024） | https://tracxn.com/d/companies/humanlayer/__XZbhI_kKRufCd1LnFm62x7HgBSEk6EtN315vIthngyQ |
| getlatka — HumanLayer 营收/团队规模估算 | https://getlatka.com/companies/humanlayer.dev |
| Starlog 批评性评测（对 CodeLayer 可交付性的质疑） | https://starlog.is/articles/ai-dev-tools/humanlayer-humanlayer |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
