# Hyperspell

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Memory layer for AI agents（AI 智能体的记忆层）
- **官网/锚定**：https://www.ycombinator.com/companies/hyperspell
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人。Conor Brennan-Burke——曾在背景核查公司 Checkr 领导一条 $30M ARR 的 API 业务，为 DoorDash、Airbnb 等公司构建基础设施；Manu Ebert——连续创业者（4 次创业、2 次退出，15+ 年 ML/AI 经验），前一家 ML/AI 创业公司被 Airbnb 收购，之后为 Airbnb 搭建了第一套知识图谱（Knowledge Graph）。团队约 8 人，正在招募 Founding AI/Platform/Forward Deployed Engineer。
- **成立/批次**：2024
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：AI 智能体的记忆与上下文层（Memory & Context Layer），对外定位为「Your Company Brain / 公司大脑」。通过 50+ 预建连接器（Slack、Gmail、Google Drive、Notion、Linear、Jira、Salesforce、HubSpot、GitHub 等）接入企业各类工具的数据，将文档与对话综合成一张实时、带权限的上下文图谱（permissioned context graph）。任何智能体都能像读写文件系统一样从中读取和回写，每条事实可溯源到出处；记忆随每次交互强化、持续学习提升。输出为结构化数据或 markdown 摘要，供 LLM 直接消费。开发者用 SDK 可在几分钟内为任意 agent 加上记忆层。
- **商业模式**：面向 AI 智能体开发者/企业的基础设施 SaaS（infrastructure as a service）。提供 SDK + 预建连接器，按上下文/记忆层服务计费。官网未披露定价，以预约 demo 为主要转化入口。已通过 SOC 2 认证、符合 GDPR；承诺不使用用户数据训练基础模型、不与第三方共享。
- **竞争格局**：Agent 记忆/上下文赛道：Mem0、Zep、Letta（原 MemGPT）、Cognee、Supermemory 等 agent memory 层；以及以 RAG + 连接器方式接入企业工具的产品（如 Glean 企业搜索、LlamaIndex、各类向量数据库 Pinecone/Weaviate）。Hyperspell 的差异点在于「带权限的可溯源上下文图谱 + 类文件系统读写 + 50+ 开箱连接器」的组合。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Fall 2025（F25，种子前/早期） | 未披露（YC 标准投资；第三方聚合站 Extruct/Tracxn 列约 $1M–$2M，未经官方披露证实，仅供参考） | 2025 | [链接](https://www.ycombinator.com/companies/hyperspell) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| AgentMail（创始人 Adi Singh 具名背书） | 中 | [链接](https://www.hyperspell.com/) |
| Hobbes（CTO Arjun Athreya 具名背书） | 中 | [链接](https://www.hyperspell.com/) |
| Scale Agentic（CEO Anna Yuan 具名背书） | 中 | [链接](https://www.hyperspell.com/) |
| Entelligence / Eragon / Corgi / Micro / Smallest / Bear / Virio / SuperMe / FinalRoundAI（官网展示客户 logo） | 低 | [链接](https://www.hyperspell.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业的知识散落在 PLM、MES、ERP、企业邮箱、IM（钉钉/企微）、工艺文档、质量报告与班组群聊里，Agent 落地最大的障碍正是「记忆从零开始、上下文碎片化、权限混乱」。Hyperspell 这类「带权限的上下文图谱 + 类文件系统读写 + 事实可溯源」的记忆层，正对应制造场景对「答案必须可追溯到某份 SOP/图纸/工单」「不同车间/工种数据权限隔离」的刚需。可迁移的是范式：把设备手册、工艺参数、历史质量案例、供应商往来沉淀为一张持续更新、可溯源、带权限的企业记忆图谱，供排产、质检、售后、设备运维等多个 Agent 共享读写。
2. **国内对标厂商**：Agent 记忆层对标：Mem0（开源 agent 记忆框架，国内团队广泛使用）、向量库/检索底座：国内多用 Milvus（Zilliz）、腾讯云向量数据库、阿里云 AnalyticDB 向量版、企业知识接入/RAG 平台：字节 Coze、百度千帆、阿里百炼等平台内置的知识库与记忆能力、企业内数据接入+图谱：明略科技、达观数据等企业知识图谱/知识管理方案
   > 国内暂无一对一直接对标者：Mem0 解决 agent 记忆但缺企业级连接器与权限图谱；Coze/千帆/百炼提供知识库但偏平台内闭环、跨系统连接器与「可溯源事实」深度不足；Milvus/腾讯向量库是底座而非成品记忆层。Hyperspell 的独特组合（50+ 连接器 + 权限图谱 + 溯源 + 类文件系统读写）在国内更接近「Glean 式企业搜索 + Mem0 式记忆」的合体，尚属空白，值得关注制造业垂直化机会。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 记忆层、上下文工程、企业知识图谱、多源数据连接器、带权限检索/RAG、可溯源事实、开发者 SDK 基础设施、企业大脑
   > 1）连接器先行：优先打通制造企业最高频的数据源（邮箱、IM 群、共享盘、工单/质量系统），降低接入门槛；2）权限即一等公民：按车间/工种/角色做行级权限，让 Agent 只读该看的部分；3）事实可溯源：每条 Agent 输出附带来源文档链接，契合制造对合规与追责的要求；4）以 SDK/基础设施定位切入，让集成商与内部开发者把它嵌进现有 MES/质量系统的 Agent 里，而非做又一个独立门户。
4. **风险与存疑点**：1）赛道拥挤且高度同质：Mem0/Zep/Letta/Supermemory 等玩家众多，YC 同批亦有相邻项目，护城河待验证；2）成立于 2024、约 8 人、融资未官方披露，处极早期，商业化与留存未经证实；3）早期客户多为同批 AI 初创（AgentMail/Hobbes/Scale Agentic 等），尚未见传统企业/制造业 logo，可持续付费与规模化存疑；4）「记忆层」易被上游基础模型（长上下文、原生 memory）或平台（Coze/千帆）内化而挤压；5）深度接入企业敏感数据，安全与合规（虽已 SOC 2/GDPR）是持续放大项；6）国内落地存在数据合规、本地化连接器缺失等障碍。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
