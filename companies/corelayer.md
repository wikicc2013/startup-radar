# Corelayer

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：AI on-call engineer that debugs using data（用数据排障的 AI 值班工程师）
- **官网/锚定**：https://www.ycombinator.com/companies/corelayer
- **深研状态**：researched（锚定成功。法律实体 Sevvy AI, Inc.，产品名 Corelayer，YC Winter 2026（W26）批次，官网 corelayer.com。与算力云厂商 CoreWeave 无关，已消歧。）

## 公司画像
- **团队**：两位联合创始人均出身高盛（Goldman Sachs）数据基础设施团队：CEO Mitch Radhuber（密歇根大学计算机、普林斯顿天体物理研究背景，曾在高盛做软件与数据基础设施）；CTO Shipra Jha（卡内基梅隆计算机，曾在 Oracle 做云基础设施、在高盛做软件与数据基础设施）。团队约 3 人。创业动机源于在高盛排障每日处理数千亿行数据的系统时的痛点。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco）
- **产品**：AI 值班/生产事故响应平台（AI on-call / AI SRE）。核心是一个「Production cortex（生产皮层）」——持续跟踪代码、数据库、部署与可观测性数据，构建对系统失败模式与业务上下文的理解。持续监控告警、日志、指标与底层数据，检测基础设施故障与「静默数据异常」；发现问题后由 AI Agent 排障、定位根因、几分钟内给出修复建议，并降噪过滤误报。关键差异点：不止看基础设施，还能安全查询底层数据做「数据感知排障」，专为金融/医疗/保险等数据密集且强监管行业设计。接入方式：CLI & MCP、浏览器界面、Slack/Teams。集成主流云厂商、Datadog/Splunk（可观测）、GitHub/GitLab、PagerDuty/Incident.io（事故响应）、Postgres/Snowflake（数据基础设施）。
- **商业模式**：面向 B 端工程团队的 SaaS，覆盖成长期到大型企业。合规与部署为卖点：可在客户自有云或 on-prem 部署（数据不出环境）、默认零数据保留、支持 BYOK/BYOC 与自定义网关、自定义 PII 脱敏、机密计算（confidential compute）推理选项；SOC 2 Type II 合规，支持 SSO/RBAC/SCIM/审计日志。具体定价未披露。
- **竞争格局**：AI SRE / AI on-call 赛道竞争密集，同批与近期涌现多家（Pump 的创始工程师证言称「几乎试过所有 AI SRE 产品」）。国际对手包含 Cleric、Traversal、Resolve.ai、Parity、Datadog（Bits AI）、PagerDuty 等的 AI 值班能力。Corelayer 的差异化定位是「数据感知排障 + 强监管行业的安全私有化部署」，避开纯基础设施 AIOps 的红海。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / YC W26 | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/corelayer) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Finzly | 中 | [链接](https://www.corelayer.com/) |
| Broadridge | 中 | [链接](https://www.corelayer.com/) |
| Pump | 高 | [链接](https://www.corelayer.com/) |
| Ridery | 高 | [链接](https://www.corelayer.com/) |
| Moda | 高 | [链接](https://www.corelayer.com/) |
| Rilla | 中 | [链接](https://www.corelayer.com/) |
| Hyperspell | 中 | [链接](https://www.corelayer.com/) |
| Ressio | 中 | [链接](https://www.corelayer.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：这不是营销销售工具，而是纯运维排障（AI SRE/on-call）工具，对制造业/工业 IT 的意义在于「数据感知排障」这一思路的迁移。制造企业的 MES、SCADA、数据中台、供应链系统同样每天吞吐海量记录，故障往往不是服务器宕机这种硬失败，而是「静默数据异常」——某条产线的传感器读数悄悄漂移、某批 ERP/WMS 同步数据错位、报表口径突然失真。传统监控只盯 CPU/内存/接口存活，抓不到这类业务层数据异常。Corelayer 把「监控指标」延伸到「监控底层数据本身」，并让 AI Agent 直接查数据定位根因，正对应制造业 IT 团队最缺的能力：把设备/工艺/供应链数据的异常与 IT 基础设施的告警关联起来排障。其「私有化/on-prem + 零数据保留 + PII 脱敏」的架构，恰好匹配制造业对工艺数据、产线数据不出厂的强合规诉求，是工业场景可直接落地的部署形态。
2. **国内对标厂商**：观测云（Guance）——一体化可观测平台，正加 AIOps/智能排障能力、云智慧 AIOps（智能运维，故障根因分析）、博睿数据 Bonree（APM/可观测 + 智能告警）、擎创科技 Cloudwise（面向金融的智能运维、告警降噪与根因定位）
   > 国内对标集中在「智能运维/AIOps」阵营：云智慧、擎创、博睿、观测云等，长期做告警降噪、根因分析、故障自愈，且擎创、云智慧在金融行业积累深，与 Corelayer 的「金融/监管行业」定位高度重合。但国内玩家多从「基础设施可观测」切入，Corelayer 的差异点在于把排障下沉到「底层业务数据的静默异常」并用 LLM Agent 自主查数据排障——这条「数据感知 + Agent 自主排障」的路线国内尚在早期，是可借鉴的产品升级方向。私有化部署与数据不出域方面，国内厂商本就以私有化交付为主，反而是天然强项。
3. **可迁移的干法 / 应进场景词典的词条**：AI-SRE、AI-on-call、智能运维/AIOps、告警降噪、根因分析(RCA)、数据异常检测、静默数据故障、私有化/on-prem部署、可观测性、MCP接入
   > 可迁移干法：①「监控数据本身，而不止监控指标」——在制造/工业 IT 里增设对底层业务数据（产线读数、批次同步、报表口径）的异常检测，捕捉传统监控看不见的静默故障；②「Agent 自主查数据排障」——让 AI 直接联表查询定位根因，而非只推送告警给人；③「告警降噪 + 根因归并」缓解运维团队告警疲劳；④「数据不出域的私有化 Agent」范式——零数据保留 + BYOK + PII 脱敏 + 机密计算，是把 AI Agent 引入强监管行业（金融、医疗、制造工艺数据）的合规落地模板。
4. **风险与存疑点**：①极早期（2025 成立、约 3 人、W26 刚 Launch），产品成熟度与规模化交付能力未经验证，官网客户证言多为创始工程师/CTO 的早期体验，非规模化背书；②赛道极度拥挤（AI SRE/on-call 一年内涌现十余家，含 Cleric、Traversal、Resolve.ai 及 Datadog/PagerDuty 等在位者内建 AI），差异化「数据感知排障」壁垒能否守住存疑；③强监管行业销售周期长、私有化交付重，与「小团队快速铺量」存在张力，且让 AI Agent 自主查询生产数据本身带来新的安全与信任门槛，客户对「AI 直连底层数据」的顾虑可能拖慢采用。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Corelayer — Y Combinator 公司页 | https://www.ycombinator.com/companies/corelayer |
| Corelayer 官网（AI-Native Production Incident Response, On-Call & AI SRE） | https://www.corelayer.com/ |
| Corelayer - The YC Tier List (W26) | https://yctierlist.com/w26/corelayer/ |
| Claude's Corner: Corelayer, The AI On-Call Engineer Goldman Sachs Taught Them to Build — StartupHub.ai | https://www.startuphub.ai/ai-news/claudes-corner/2026/claudes-corner-corelayer-yc-w2026 |
| Corelayer - Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/corelayer |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
