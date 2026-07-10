# Nexus

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Enterprise AI infrastructure for autonomous agents（面向自主智能体的企业 AI 基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/gpt
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人：Assem Chammah（CEO，航空航天工程师、前麦肯锡顾问）、Shady Al Shoha（CTO/AI 工程师）。YC 页面显示团队规模 2 人（早期）。
- **成立/批次**：2024
- **地点**：比利时布鲁塞尔（总部）+ 美国旧金山（双总部）
- **产品**：面向企业的 no-code/agentic AI 平台，让非技术业务团队用自然语言描述需求即可构建、部署并管理能端到端执行业务流程的自主 AI 智能体。核心能力：自主构建循环 Cue（自动澄清需求、按权限接入内部数据、构建自动化、按真实场景测试并发布，约 1–2 小时完成）；4,000+ 企业系统集成（CRM/ERP/Slack/Teams 及自定义 API）；可视化 workflow 编排 Nexus Flow（结合 AI 适应性与确定性可靠性）；多渠道部署（如 WhatsApp）。定位为“凌驾于所有 AI 工具之上的编排层”，主打消除企业 AI 部署中的实施层（Forward Deployed Engineer 现场写代码）瓶颈。
- **商业模式**：平台自助 + 白手套实施结合：自助式平台叠加专职工程与赋能团队负责集成、上线、培训与持续优化；内置治理与合规。面向大型企业销售（企业 SaaS/平台订阅，具体定价未披露）。
- **竞争格局**：自述为“拥挤”市场——数十家平台声称让企业 agent 变简单。同类含各类企业 AI agent 构建/部署平台（如 forward-deployed 模式的 AI 应用公司、no-code agent builder、RPA/自动化厂商向 agent 演进者）。Nexus 差异点：YC 背书 + 早期企业客户实绩 + 强调实施层自动化（Cue）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $4.3M（媒体另有 €3.7M 表述，为同一轮不同币种口径） | 2026-03-31（媒体报道日期） | [链接](https://thenextweb.com/news/nexus-4-3m-seed) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Orange（Orange Belgium / Orange Group，电信） | 高 | [链接](https://thenextweb.com/news/nexus-4-3m-seed) |
| Proximus（Proximus Global，电信） | 中 | [链接](https://www.ycombinator.com/launches/OXb-nexus-enabling-business-teams-to-build-ai-agents-without-code) |
| Lambda（Lambda.ai，AI 云/基础设施） | 中 | [链接](https://thenextweb.com/news/nexus-4-3m-seed) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业中后台（订单管理、供应商对账、客服/售后工单、合规报表、ERP/MES 间数据搬运）存在大量“模型能力已具备、卡在集成实施”的场景。Nexus 式“业务人员自然语言描述→自动接入系统→自动构建测试发布”的模式，理论上可让制造企业的采购、质量、客服等部门在不排队等 IT 的情况下自建 agent，缩短从需求到上线的周期（其宣称 1–2 小时 / 数周，对比传统 6–12 月）。
2. **国内对标厂商**：阿里云百炼 / 通义 AgentScope（企业智能体平台）、字节扣子 Coze / 扣子空间（no-code agent 构建）、腾讯元器 / 腾讯云智能体开发平台、实在智能、来也科技 UiBot（RPA 向 agent 演进的自动化平台）、澜码科技 AskXBOT（企业级 agent 编排平台）
   > 国内对标集中在两类：一是云厂商企业 agent 平台（阿里百炼/扣子/腾讯），生态与大模型自带；二是 RPA 转型玩家（实在、来也、澜码），强在企业系统深度集成与流程编排——后者与 Nexus 的“实施层自动化 + 4000 集成”定位最接近，是制造业选型时的现实替代。
3. **可迁移的干法 / 应进场景词典的词条**：企业AI智能体平台、no-code智能体构建、自主业务流程自动化、企业系统集成编排、客户onboarding智能体、非技术团队赋能、实施层自动化
   > 可迁移打法：①以单一高 ROI 场景（如客户 onboarding）做灯塔案例，用可量化指标（转化率 +50%、单 agent 年 LTV/营收）撬动扩张；②把“Forward Deployed Engineer 现场写代码”这一最贵环节产品化为自主构建循环（Cue），将实施成本从人月压到小时；③以“凌驾于现有 SaaS 之上的编排层”卡位，用海量预置连接器降低集成门槛。制造业厂商可借鉴“先灯塔场景、再横向复制、集成能力即护城河”的路径。
4. **风险与存疑点**：①团队仅 2 人（YC 数据），早期阶段，交付与规模化能力待验证；②市场自述“拥挤”，云厂商与 RPA 巨头正面竞争，护城河主要在集成生态与实施自动化，易被追赶；③客户成效数字口径不一致——Orange 案例在不同来源出现“$6M 年 LTV”“$4M+ 月营收”两种表述，需谨慎引用；④融资额有 $4.3M 与 €3.7M 两种币种口径；⑤‘Nexus’为高频重名，本档已锚定 YC F25 / 比利时 / Assem Chammah 团队，勿与其他同名公司混淆；⑥无 pivot/更名/关停迹象。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
