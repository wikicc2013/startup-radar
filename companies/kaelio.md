# Kaelio

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：Open-source context layer for data agents（面向数据智能体的开源上下文层）
- **官网/锚定**：https://www.ycombinator.com/companies/kaelio
- **深研状态**：researched（在营。YC X25（2025 春）批次。已从「医疗分析 copilot」明显转型（pivot）为面向数据智能体的通用开源上下文层 ktx，官网与 GitHub 均以 ktx 为主打；2025 年 5 月发射时定位仍是 healthcare analytics copilot。）

## 公司画像
- **团队**：两位联合创始人：Luca Martial（CEO，前数据科学家/NLP 工程师，专注企业数据系统、Agent 可靠性与 AI 安全，曾在大型医疗机构部署 NLP 系统）；Andrey Avtomonov（CTO，二次创业者，前 Dataiku 早期工程师、曾在 CERN 做软件/AI 工程，15+ 年数据工程与生产级 AI 经验）。团队约 8 人（YC 页显示）。
- **成立/批次**：2024
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：ktx（'context'）——开源、可自我改进的『数据智能体上下文层』。把仓库元数据、BI 工具定义、查询历史、文档、经审批的指标口径转成可审查的文件（Markdown wiki + YAML 语义定义），让 Claude Code / Codex / Cursor / OpenCode 等 Agent 通过 MCP 与 CLI 准确查询数据仓库：自动探测可 join 列、构建语义层、规划 grain/join/filter 并生成受治理的 SQL，对库保持只读。产品三件套：ktx（开源，Apache 2.0，本地运行、自带 LLM key）、ktx Cloud（托管、多用户治理/审查流/SSO/持续摄取/可观测）、Data Agent（托管数据智能体，面向业务用户的问答/摘要/告警）。支持仓库 Postgres/Snowflake/BigQuery/ClickHouse/MySQL/SQL Server/SQLite/DuckDB/Athena/MongoDB，建模 dbt/MetricFlow/LookML/Looker/Metabase/Sigma，知识源 Notion/Google Drive。GitHub ~1.5k star，548 commits，最新 v0.16.0（2026-07-03），主力 TypeScript（83.7%）+ Python。
- **商业模式**：开源 + 商业托管的 freemium/订阅制（B2B SaaS）：ktx 开源免费自托管，ktx Cloud 与托管 Data Agent 为付费层；企业按治理/协作/可观测能力付费。
- **竞争格局**：上游/相邻：语义层与 Text2SQL 治理赛道——dbt Semantic Layer/MetricFlow、Cube、AtScale；ChatBI/数据 copilot——Snowflake Cortex Analyst、Databricks Genie、Looker（Conversational Analytics）；以及各类 MCP-to-warehouse 直连方案。ktx 的差异点是把『上下文即代码 + 可 code review 治理』做成 Agent 与仓库之间的中间层，而非又一个自然语言 BI 前端。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Y Combinator（X25 / 2025 春批次标准投资） | 约 $500K（第三方数据源 startuphub.ai / Crunchbase 报告口径，未见官方披露） | 2025 | [链接](https://www.startuphub.ai/startups/kaelio) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Mercy（医疗系统，转型前医疗期客户） | 中 | [链接](https://www.kaelio.com/about) |
| Maximus | 中 | [链接](https://www.kaelio.com/about) |
| Gladia | 中 | [链接](https://www.kaelio.com/about) |
| Vapi | 中 | [链接](https://www.kaelio.com/about) |
| Handshake | 中 | [链接](https://www.kaelio.com/about) |
| Junction | 中 | [链接](https://www.kaelio.com/about) |
| Raft | 中 | [链接](https://www.kaelio.com/about) |
| Poppins / BeSimple / Alt | 中 | [链接](https://www.kaelio.com/about) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业而言，ktx 触到的是一个真实痛点：当你想让 AI Agent 直接问 ERP/MES/质量/供应链数据仓库时，Agent 缺的从来不是 SQL 能力，而是『企业专属上下文』——什么叫良率、OEE 的口径、哪张表能 join 哪张、哪个指标是审批过的官方定义。ktx 把这些沉淀成可审查的代码文件（YAML 口径 + Markdown 业务 wiki），让 Agent 查数既准确又受治理，且对库只读、变更走 code review。这正是制造企业上『数据问答/自动报表/异常告警 Agent』最缺的一层——没有它，Text2SQL 在多系统、口径混乱的车间数据上必然幻觉。制造业可借鉴：先建『指标即代码』的治理层，再谈 Agent 自助分析。
2. **国内对标厂商**：衡石科技 HengShi Sense（语义模型/指标平台 + ChatBI，最接近『语义层 + 对话查询』定位）、数势科技 SwiftAgent / 指标平台（企业指标中台 + 数据分析智能体）、网易有数 ChatBI / 有数 BI（语义层 + 自然语言取数）、思迈特 Smartbi、观远数据 ChatBI（增强分析/对话式 BI，偏前端而非中间层）
   > 国内对标集中在『指标中台/语义层 + ChatBI』一侧（衡石、数势、网易有数、Smartbi、观远），它们解决的也是『业务口径统一 + 自然语言取数』。但 ktx 的独特点在国内尚少见完整对应：一是彻底开源（Apache 2.0）走开发者/Agent 生态而非售卖 BI 平台；二是『上下文即代码 + code review 治理』的工程范式，把语义层当成可版本管理、可 PR 审批的仓库文件，而非黑盒平台配置；三是原生绑定 MCP/Claude Code/Codex 等编码 Agent 而非自建对话前端。国内厂商多为闭源平台化、以业务用户为中心，缺『面向 Agent 的开源中间件』这条线。
3. **可迁移的干法 / 应进场景词典的词条**：上下文即代码、语义层治理、MCP 数据接入、数据智能体、Text2SQL 治理、review-as-governance、指标口径即代码
   > 可迁移干法：把『上下文即代码 + 变更走 code review』这套治理范式搬到任何『让 Agent 碰核心系统』的场景。制造业落地路径——① 先把散落在人脑/PPT/Excel 的指标口径（良率、准交率、OEE、单位成本）固化成 YAML『可执行定义』，Markdown 记业务背景；② 用只读连接暴露 MES/ERP/QMS 数据，Agent 只能通过被审批过的口径查询，杜绝乱算；③ Agent 可提议更新口径，但必须经工程/业务双审 PR 才生效——这套『Agent 提议、人类审批、版本留痕』的机制，对制造业『数据可信、可审计、可追溯』的合规要求天然契合，也是把 AI 从玩具变生产工具的关键治理层。
4. **风险与存疑点**：① 转型未定型：18 个月内从医疗分析 copilot 转成通用数据上下文层，PMF 与目标客户仍在验证，早期医疗客户（Mercy）与新方向（开发者/Agent 生态）不完全重合；② 强敌环伺且平台方内卷：Snowflake Cortex Analyst、Databricks Genie、dbt/Cube 语义层都在做『Agent 查数 + 语义层』，仓库厂商可能把上下文层原生内置，独立中间件的生存空间受挤压；③ 开源商业化两难：~1.5k star 早期社区尚小，Apache 2.0 完全开源自托管，商业化高度依赖 ktx Cloud/托管 Agent 的治理与协作溢价，融资仅约 $500K（未官方披露）跑道有限，需尽快证明付费转化。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Kaelio 官网首页（ktx 定位） | https://www.kaelio.com/ |
| Kaelio About（团队/三件套/客户 logo 墙） | https://www.kaelio.com/about |
| Y Combinator 公司页（2024 创立/8 人/X25/创始人背景） | https://www.ycombinator.com/companies/kaelio |
| GitHub Kaelio/ktx（开源仓库，~1.5k star，Apache 2.0，集成清单） | https://github.com/Kaelio/ktx |
| Luca Martial 发射帖（2025-05，医疗分析 copilot 原始定位） | https://www.linkedin.com/posts/luca-martial_excited-to-launch-kaelio-yc-x25-after-months-activity-7330256742942932992-XcL4 |
| Kaelio 博客：为 Agentic 时代构建上下文层 | https://www.kaelio.com/blog/building-a-context-layer-for-the-agentic-era |
| startuphub.ai：Kaelio 约 $500K 融资口径 | https://www.startuphub.ai/startups/kaelio |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
