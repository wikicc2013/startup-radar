# superglue

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：AI-native enterprise integration builder（AI 原生的企业集成搭建器）
- **官网/锚定**：https://www.ycombinator.com/companies/superglue
- **深研状态**：researched（在营。YC W25 批次，开源项目活跃（GitHub superglue-ai/superglue，约 2k+ stars）。定位从「AI 原生数据集成代理」演进为「面向企业系统实施的 AI Agent」（ERP 实施、AI 接入、客户 onboarding 三类 Agent）。）

## 公司画像
- **团队**：联合创始人 Stefan Faistenauer（曾任 Google APM、软件工程师，斯坦福背景）与 Adina Goerres（曾在 Scalable Capital 负责 GTM）。两人 2019 年在慕尼黑求学时相识。团队约 4 人，总部旧金山。
- **成立/批次**：2024
- **地点**：美国旧金山（San Francisco）
- **产品**：AI 原生的企业集成/实施平台。核心是一个「智能代理层」，位于应用与 API 之间，用 LLM 自动完成数据的抽取、映射与转换，替代人工编写的 SQL 脚本、cron 定时任务和一次性连接器；具备自愈能力（自动重映射、重试、schema 漂移检测），API 变更可自动侦测修复。产品演进出三类 Agent：①ERP 实施 Agent（NetSuite、Sage Intacct、SAP、Business Central、Acumatica 的数据迁移与配置）；②AI 接入 Agent（把企业系统以受治理方式接到 Claude 等 AI 平台）；③客户 onboarding Agent。支持 100+ 系统（含 Salesforce、HubSpot、Stripe、Shopify 等），可自托管于 VPC/私有云/本地（Docker/K8s），数据不出企业环境，宣称 SOC 2 Type II 合规、支持 EU/多区域数据驻留。
- **商业模式**：开源内核 + 商业托管（open-core）。主产品采用 FSL（Fair Source License），客户端 SDK 为 MIT；商业化通过云托管版、企业版（托管、访问控制、RBAC、审计、数据驻留）与自托管企业部署变现。典型价值主张：把 Sage Intacct 迁移从约 140 小时压到 1 小时以内，把客户 onboarding 从数周缩到数天。
- **竞争格局**：iPaaS/集成中间件：MuleSoft、Workato、Tray.io、Zapier、Boomi；面向开发者的统一 API/集成 SDK：Merge.dev、Paragon、Nango；以及 ERP 实施领域的传统 VAR/咨询实施商（superglue 用 AI Agent 直接切它们的实施工时）。差异化在于「AI 原生 + 自愈 + 面向长尾/遗留系统（SOAP、legacy）」。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / YC | 未披露（YC 标准投资，通常约 $500K） | 2025-03 | [链接](https://www.ycombinator.com/companies/superglue) |
| Seed | 未披露（第三方数据平台估累计约 $500K+，未经官方确认） | 2025 | [链接](https://startupintros.com/orgs/superglue) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Cedar（YC 创业公司，客户 onboarding 加速案例，官网具名 case study） | 高 | [链接](https://superglue.ai/) |
| 某 Sage VAR 合作伙伴（40 个 Sage Intacct 固定费用实施项目，迁移工时降约 80%） | 中 | [链接](https://superglue.ai/) |
| 某欧洲头部在线交易市场（让多系统企业数据可被其 AI 工具读取） | 中 | [链接](https://superglue.ai/) |
| Google（官网 logo 墙） | 中 | [链接](https://superglue.ai/) |
| Netlify（官网 logo 墙） | 中 | [链接](https://superglue.ai/) |
| Sylvera（官网 logo 墙） | 中 | [链接](https://superglue.ai/) |
| mobile.de（官网 logo 墙） | 中 | [链接](https://superglue.ai/) |
| UCLA（官网 logo 墙，某美国头部高校） | 中 | [链接](https://superglue.ai/) |
| Weave / TicketingHub（官网 logo 墙） | 中 | [链接](https://superglue.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的直接意义在「系统集成」这个老大难：制造企业普遍背着 ERP（SAP、用友、金蝶）、MES、WMS、PLM、SCADA、老旧 SOAP/EDI 接口的混合栈，数据打通历来靠人肉写脚本、点对点连接器和外包实施，脆弱且难维护。superglue 的三个动作值得关注：一是把「实施工时」当成攻击目标——ERP 迁移从 140 小时压到 1 小时的叙事，正对应制造业上系统时动辄数月、按人天计费的实施成本；二是「自愈」——接口一变就自动重映射重试，缓解制造现场最怕的「上游系统升级导致集成断裂、产线数据断流」；三是「AI 接入 Agent」——把 ERP/MES 数据以受治理方式喂给大模型，是制造企业想做 AI 问数、智能排产助手却卡在「数据取不出、取出来格式乱」的关键一环。它提示的不是买这家产品，而是「集成/实施」这道工序本身正在被 AI Agent 重构。
2. **国内对标厂商**：谷云科技 RestCloud —— 国内老牌 iPaaS/ETL 集成中间件，主打企业数据/应用集成，是 superglue「集成层」对标最贴近者，但 AI 原生程度低、集简云 / 轻流 —— 面向业务侧的低代码集成与连接器平台，对标 superglue 的「无代码打通 SaaS」一面、数环通、iPaaS 类（如阿里云集成、腾讯轻联）—— 连接器 + 编排，缺少 LLM 自动映射与自愈、金蝶苍穹 / 用友 BIP 集成平台 —— ERP 大厂自带的集成中台，对标其 ERP 实施与主数据打通场景
   > 国内在「iPaaS + 连接器 + 低代码集成」这一层已有较成熟玩家（谷云 RestCloud、集简云、数环通、云厂商集成服务），但普遍停留在「预置连接器 + 可视化编排」的世代，靠人配规则；superglue 的差异是「用 LLM 直接从自然语言/系统知识生成并自愈集成管线」，把配置工作本身交给 Agent。真正的空白点在国内还很少有人吃：面向 ERP/SAP 实施工时的 AI Agent 化——这块目前多由用友/金蝶生态的实施商与 SAP 咨询商用人力承担，是国产 AI-native 集成最可能的切入缝隙。
3. **可迁移的干法 / 应进场景词典的词条**：AI原生集成、自愈集成/schema漂移检测、ERP实施Agent、遗留系统/SOAP打通、企业数据接入AI(治理)、自然语言生成集成管线、客户onboarding自动化
   > 可迁移的干法有三条：①「把实施/交付工时当成产品的攻击面」——不卖软件功能，直接卖「从 140 小时到 1 小时」的工时压缩，这套定价与叙事对任何重实施的 B 端产品（MES、WMS、质量系统上线）都适用；②「自愈」作为差异化卖点——用 schema 漂移检测+自动重映射把「集成会断」这一长期运维焦虑变成卖点，制造 IT 运维同理可复用；③「AI 接入前置层」——先做好数据的抽取、映射、治理，把干净数据喂给大模型，是当下所有「企业想上 AI 问数/助手却卡在数据」场景的通用前置工序，可独立成一门生意。
4. **风险与存疑点**：①护城河存疑：iPaaS/集成本是红海，MuleSoft、Workato、Merge.dev 等在位者叠加 AI 后，superglue 的「AI 原生」领先窗口可能被快速抹平；开源（FSL）虽利传播但也降低模仿门槛。②规模与融资单薄：团队约 4 人、公开融资仅 YC/种子级（第三方估累计约 $500K+，未官方确认），面对企业级实施所需的销售、合规、交付人力，续航存疑。③客户证据强度不一：Cedar 为官网具名 case study（可信度较高），但 Google/UCLA/mobile.de 等多为 logo 墙，未必是付费或深度落地，采信需打折；且「LLM 自动映射」在生产级金融/ERP 数据上的准确性与可审计性是企业买单的硬门槛，一旦映射出错代价高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| superglue 官网 | https://superglue.ai/ |
| superglue - Y Combinator 公司页 | https://www.ycombinator.com/companies/superglue |
| GitHub: superglue-ai/superglue | https://github.com/superglue-ai/superglue |
| superglue README | https://github.com/superglue-ai/superglue/blob/main/README.md |
| startupintros: superglue Funding, Team & Investors | https://startupintros.com/orgs/superglue |
| StartupSeeker: superglue (YC W25) Funding | https://startup-seeker.com/company/superglue~cloud |
| superglue 文档 | https://docs.superglue.cloud/getting-started/introduction |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
