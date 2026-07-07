# Doe Labs

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：AI workforce for enterprise work（面向企业工作的 AI 数字员工）
- **官网/锚定**：https://www.ycombinator.com/companies/doe
- **深研状态**：researched

## 公司画像
- **团队**：4 人（YC 页面披露）。联合创始人 Adrian Barbir（Co-Founder & CEO）与 Richard Ou（Co-Founder & CTO，二次创业者，曾任职 Vapi、Wordware，宾大 Center for AI 最年轻董事顾问）。均为 repeat founders。
- **成立/批次**：2025 年（公司主体 Doe Labs, Corp.）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向企业工作的 AI Agent 平台，官网定位『The AI platform for work / agent cloud for modern companies』。把机构知识、已连接的业务系统、模型路由、治理与运营记忆整合成『company-native agents（公司原生智能体）』，直接执行真实工作：拉取数据、更新记录、发消息、跨系统跑工作流，并返回带来源与凭证（sources & receipts）的成品产物（finished artifacts）。四层架构：知识底座 / 跨业务系统的行动层 / 带模型路由的推理层 / 持续改进的记忆回环。2026-02 通过 YC Launches(O63) 收窄打法，聚焦 PE（私募股权）投资控股的多点位医疗集团——起步于牙科服务组织(DSO)，并延伸至兽医、眼科、医美连锁——把 task-specific agents 嵌入 ERP、诊所管理软件、供应商门户等遗留系统，处理采购、库存优化、审批、排班、合规与分析。
- **商业模式**：SaaS，freemium + 企业版；官网称按『simple, predictable credits（可预测积分）』计费，随用量扩展，未披露具体价格。企业能力含 SOC 2 Type II、HIPAA-ready、与 LLM 供应商零数据留存、SSO、SCIM、RBAC、scoped credentials、approval gates、审计凭证、专属支持。GTM 从横向平台收窄到 PE 控股的多点位医疗垂直。
- **竞争格局**：横向层面对标企业 AI Agent / 数字员工平台（如 Sierra、Cognition、Adept 式行动型 Agent，以及 Glean、Writer 等企业知识+Agent 平台）；垂直层面对标牙科/DSO AI 运营工具（Overjet、Planet DDS、Weave 等，多为影像诊断或前台，Doe 差异点在跨遗留系统的后台运营执行）。YC S25 批次近半数公司主打『AI 替你干活』，同质竞争激烈。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 未披露 | 未披露 | [链接](https://www.crunchbase.com/organization/doe-d565) |
| YC S25（标准 YC 投资，金额按 YC 标准条款） | 未披露具体金额 | 2025 | [链接](https://www.ycombinator.com/companies/doe) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：Doe 的核心打法对制造业高度可迁移：它瞄准『多点位 + 遗留系统 + 后台重复运营（采购/库存/审批/排班/合规/分析）』的场景，这正是多工厂/多基地制造集团的痛点。把『company-native agent 嵌入 ERP + 供应商门户 + 业务系统，执行完整任务并返回带来源凭证的成品』这一范式平移到制造业，可对应：多工厂采购比价与下单、库存与备件优化、生产排程调整审批、质量/EHS 合规检查、跨 MES/ERP/WMS 的数据拉取与报表生成。关键在其治理层（审批门、审计凭证、RBAC、零数据留存），恰好回应制造业对『Agent 别乱动生产系统』的顾虑。
2. **国内对标厂商**：实在智能（数字员工 / RPA+Agent）、来也科技 UiBot / 智能体平台、澜码科技（企业级 Agent 平台）、字节扣子 Coze / 阿里百炼（Agent 编排平台）、面向多点位连锁运营的国内 SaaS+Agent（如通用型 ERP 厂商叠加 Agent 能力）
   > 国内数字员工/Agent 平台（实在智能、来也、澜码、扣子/百炼）在能力清单上接近，但 Doe 的差异化是『垂直收窄 + 后台运营执行 + 带凭证的成品交付』，而非停留在对话或单点 RPA。国内制造场景更需要的是澜码/澜码式企业 Agent 叠加行业 know-how，Doe 证明了『先横向平台、再收窄到一个有大量遗留系统的高价值垂直』这条路径的融资叙事成立。
3. **可迁移的干法 / 应进场景词典的词条**：企业数字员工、AI Agent 平台、跨系统工作流自动化、机构知识检索与引用、多点位连锁运营、采购与库存优化、审批/排班/合规自动化、遗留系统集成、模型路由与治理、PE 投后运营提效
   > 可迁移剧本：1) 不从通用平台正面竞争，而是锁定一个『被资本整合、遍布遗留系统、后台人力密集』的垂直（Doe 选 PE 控股 DSO，制造业对应 PE/集团控股的多厂连锁或分布式代工网络）；2) Agent 直接对接遗留系统做端到端执行，而非只做建议；3) 用治理与合规（审批门、审计凭证、数据边界）作为进入受监管/高风险后台的敲门砖；4) 以『返回带来源凭证的成品』建立信任，降低『Agent 幻觉动错系统』的采购顾虑。
4. **风险与存疑点**：1) 客户与营收零公开锚点，仅 YC/官网/Crunchbase 一手信息，落地成效无法验证；2) 团队仅 4 人，同时打横向平台与垂直医疗，聚焦度存疑；3) YC S25 近半批次做同类『AI 替你干活』，横向平台层高度同质、易被大厂平台化能力吞没；4) 深度嵌入客户遗留系统的集成与维护成本高、可复制性差，规模化存疑；5) 医疗数据合规（HIPAA）与 PE 客户的高审计要求抬高交付门槛。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
