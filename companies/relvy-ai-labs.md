# Relvy AI Labs

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：AI on-call engineer for incident response（面向故障响应的 AI 值班工程师）
- **官网/锚定**：https://www.ycombinator.com/companies/relvy-ai
- **深研状态**：researched（官方一手来源为 Y Combinator 目录，批次为 F24（2024 秋季批），而非仓库登记的 B007（B007 仅为本档案库内部批次登记号）；公司英文名 Relvy AI，法律主体或含 Relvy AI Labs。任务描述提示可能为 S25/X25，但 YC 目录与 Launch HN 标题均明确为 YC F24，故以 F24 为准。）

## 公司画像
- **团队**：两位联合创始人均为 ML 工程师背景：Bharath Bhat（CEO），此前在 Google Pixel、YouTube、Uber 做高效计算机视觉/语言模型；Simranjit Singh（CTO），此前在 Microsoft、Amazon 研发 SOTA 计算机视觉模型，在 Nutanix 做分布式系统，并曾联合创办面向 3 万+ 中小企业的薪酬 App Vetan。两人早年在卫星影像创业公司 Orbital Insight 一起做计算机视觉时相识，合计在 Google/Uber/Microsoft/Amazon 有构建与运维 ML 产品的经历。（注：个别第三方数据库 Tracxn 另列 Tim Seager 为第三位创始人，未在一手来源交叉印证，置信度低。）
- **成立/批次**：2024
- **地点**：美国加州湾区（San Jose / 旧金山湾区）
- **产品**：面向故障响应的「AI 值班工程师」。连接团队现有可观测栈（Datadog、Prometheus、Honeycomb、Sentry 及日志/指标/链路/事件），用 Markdown 明文编写 runbook，告警触发时由 AI Agent 自动执行调查并给出可操作的根因分析（RCA），官方称可在 70%+ 告警中自动定位根因。采用本地优先（local-first）部署（Docker/Helm，可跑在客户 VPC 内，基础运行约需 8–10GB 内存、工程师本机即可跑起，安装 <15 分钟），使专有代码与敏感遥测不出客户基础设施边界。内置一款针对调试优化的小模型，官方称在其评测基准上与 gpt-4o 相当但成本约为 1/100。产品早期形态被描述为「AI 调试 notebook」，现主打「你的 runbook，自动化执行」。
- **商业模式**：自助 + Freemium：官网提供免费上手/试用，工程师可本地免费运行，面向团队的付费档位（B2B SaaS，按团队/席位或用量计费，具体价目未完整披露）。定位开发者自下而上采用。
- **竞争格局**：AI SRE / on-call 自动化赛道竞争激烈：Resolve.ai（前 Splunk 高管创办，2025 年底达 10 亿美元独角兽估值，主打 80% 自主解决）、Cleric（只读默认、可审计的 AI SRE）、Traversal、Wild Moose、Parity；以及偏事件流程管理并叠加 AI 的 incident.io；大厂侧 Datadog（Bits AI）等亦在整合类似能力。Relvy 差异化在于本地优先/VPC 内部署、明文 runbook 可控执行、自研低成本小模型，以及「工程师而非黑箱 AI 掌控、每步可解释」的透明化定位。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed / YC | 约 500K 美元（第三方数据库口径，未经官方确认） | 2024 | [链接](https://www.crunchbase.com/organization/relvy-ai) |
| YC F24（加速器投资） | YC 标准条款（未单独披露） | 2024 | [链接](https://www.ycombinator.com/companies/relvy-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的 IT 与 OT 运维意味着一种「值班工程师自动化」的新范式。制造企业的 MES、WMS、SCADA、产线数采与云端调度系统一旦告警，传统上要靠稀缺的运维/自动化工程师半夜排障，而 Relvy 这类 AI on-call 把「看告警—翻日志/指标/链路—比对 runbook—给根因」的机械环节交给 Agent，人只在最后读一份「决策就绪」的根因简报并授权处置。其本地优先、VPC 内部署的架构尤其契合制造业——工厂的遥测数据、产线代码与工艺参数敏感且常处于内网/隔离环境，数据不出边界正是落地前提。可迁移的价值不只在 IT 系统，明文 runbook + 可观测数据 + Agent 执行的模式，理论上可延伸到产线设备异常初诊、能耗/良率波动的自动归因等工业可观测场景，但工业协议、实时性与安全联锁的门槛远高于纯软件系统，短期更现实的是先啃制造企业的 IT/云基础设施运维。
2. **国内对标厂商**：云智慧（Cloudwise）——AIOps 智能运维，故障根因分析、告警收敛、擎创科技（Cenboomh）——AIOps 告警降噪与根因定位、观测云（Guance）——一体化可观测平台，向 AI 辅助排障演进、博睿数据（Bonree）——APM/可观测，智能运维、日志易（Rizhiyi）——日志分析与运维智能
   > 国内对标集中在 AIOps / 可观测赛道：云智慧、擎创科技长期做告警降噪与根因分析，观测云、博睿数据、日志易提供可观测数据底座并逐步叠加 AI 排障。与 Relvy 的差异在于——国内厂商多为平台型、面向大中型企业与运营商的重交付项目制，强调告警收敛与看板；Relvy 则是「开发者自助、明文 runbook、Agent 自动执行、小模型本地跑」的产品化、自下而上路线。国内目前尚缺一个把『明文 runbook + Agent 自主执行调查』做成开发者自助产品、并以自研小模型压成本的直接对标，多数仍是平台叠加 LLM 助手的形态。
3. **可迁移的干法 / 应进场景词典的词条**：AI值班工程师、on-call自动化、故障根因分析RCA、AIOps、可观测性、runbook自动执行、本地优先/VPC内部署、调试专用小模型
   > 可迁移的干法有三条：其一，「明文 runbook + Agent 执行」——把专家的排障/处置经验写成人可读的 Markdown 步骤，再交给 Agent 按需调用工具执行调查，这套「把隐性经验显性化为可执行剧本」的模式适用于任何有标准作业流程（SOP）的运维/客服/质检场景；其二，「本地优先、数据不出边界」——对数据敏感的制造、金融、政企客户，把 Agent 塞进客户 VPC/内网、只回传结论，是降低采购与合规阻力的通用打法；其三，「自研小模型压成本」——在垂直任务上用蒸馏/优化的小模型替代通用大模型，以 1/100 成本达到接近效果，是高频、大规模调用场景（如逐条告警排查）的成本护城河，可迁移到工单分类、日志摘要等海量重复任务。
4. **风险与存疑点**：风险①赛道极度拥挤且头部资本化远超 Relvy：Resolve.ai 已是 10 亿美元独角兽、Cleric/Traversal 等融资充足，而 Relvy 仅约 500K 种子体量，正面竞争资源悬殊，易被大厂（Datadog Bits AI 等）或明星创业公司挤压。②根因分析的可靠性与信任门槛高：自主 RCA 是公认难题，70%+ 自动定位若在生产环境出现误判/漏判，会侵蚀工程团队信任；『人掌控、可解释』定位虽稳妥，但也意味着难以像对手那样宣称高比例『自主解决』。③商业化与护城河存疑：自助 Freemium 获客易但付费转化与客单价未验证，自研小模型的成本优势可能随通用模型降价而被抹平；本地优先部署虽利好合规却增加交付与运维复杂度，规模化扩张有摩擦。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Relvy AI — Y Combinator 公司目录（批次 F24） | https://www.ycombinator.com/companies/relvy-ai |
| Launch YC: Relvy — AI that discovers and debugs production issues | https://www.ycombinator.com/launches/MGE-relvy-ai-that-discovers-and-debugs-production-issues |
| Launch HN: Relvy (YC F24) – On-call runbooks, automated | https://news.ycombinator.com/item?id=47702647 |
| Relvy 官网 | https://www.relvy.ai/ |
| Relvy 平台介绍 | https://www.relvy.ai/platform |
| Relvy Pricing | https://www.relvy.ai/pricing |
| Relvy AI — Crunchbase 公司档案与融资 | https://www.crunchbase.com/organization/relvy-ai |
| Relvy — Tracxn 公司档案（团队/融资/竞品） | https://tracxn.com/d/companies/relvy/__7kskjitLm_K5dOZIwP32Ly86X6DnuUuwQOAEKXqoCa8 |
| Relvy | Your AI On-call Engineer — Product Hunt | https://www.producthunt.com/products/relvy |
| Cleric vs Resolve.ai vs Traversal (2026): AI SRE Tools Compared | https://wetheflywheel.com/en/guides/cleric-vs-resolve-ai-vs-traversal/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
