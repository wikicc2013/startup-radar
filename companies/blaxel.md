# Blaxel

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：Perpetual sandbox infrastructure for AI agents（面向 AI 智能体的常驻沙箱基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/blaxel
- **深研状态**：researched

## 公司画像
- **团队**：6 位联合创始人，均出自 OVHcloud 与 ForePaaS 体系。CEO Paul Sinai 曾联合创办数据平台 ForePaaS 并被欧洲最大云厂商 OVHcloud 收购；其余联创 Christophe Ploujoux、Nicolas Lecomte、Thomas Crochet、Charles Drappier、Mathis Joffre 均为其 OVH/ForePaaS 旧部。团队自述『需要一支健壮的世界级团队来打造 AI 智能体公司的 AWS』，故采用罕见的 6 人联创配置。
- **成立/批次**：2025（YC Spring 2025 / X25 批次）
- **地点**：美国（YC 参投，主要面向全球市场；创始团队具法国 OVH 背景）
- **产品**：面向 AI 智能体的常驻沙箱云基础设施平台，三大核心组件：①安全沙箱——启动 <25ms、1 秒无活动即缩容到零、恢复时保留完整内存状态，可让数百万安全沙箱无限期待命；②智能网关（AI Gateway）——统一的 LLM 访问入口；③Serverless 智能体托管——把智能体部署为可自动伸缩的 serverless API，含集成可观测性、MCP server 托管。核心理念是『昨天的云撑不起明天的 AI』，API 设计给智能体自身消费而非人类管理员。
- **商业模式**：按用量计费（pay-per-use）的 serverless 云基础设施，随智能体活动自动伸缩。官方称某客户运行超 10 亿秒智能体运行时处理数百万视频，成本比典型 serverless 基础设施低约 50%。具体价目表未公开披露。
- **竞争格局**：AI 智能体沙箱/基础设施赛道，直接对标 E2B（Firecracker 隔离、SDK 友好）、Modal（Python 优先 serverless 计算）、Daytona（<90ms 冷启动，2026-06 转闭源）、CodeSandbox（Together AI 支持）、Northflank（全栈 + BYOC）、Fly.io Sprites（2026-01 推出）。Blaxel 差异化在于极快的沙箱恢复（<25ms）与常驻待命；短板是仅托管、暂无 BYOC，能力止于智能体执行，缺数据库/CI-CD/合规基础设施。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子轮 Seed | 730 万美元 | 2025-12-03 | [链接](https://blaxel.ai/blog/Blaxel-Raises-7-3M-Seed-Round-led-by-First-Round-to-Build-Cloud-Infrastructure-for-the-AI-Agent-Eco-23247e47b1ea8067b923d998364e3ced) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Human Behavior | 中 | [链接](https://blaxel.ai/blog/Blaxel-Raises-7-3M-Seed-Round-led-by-First-Round-to-Build-Cloud-Infrastructure-for-the-AI-Agent-Eco-23247e47b1ea8067b923d998364e3ced) |
| Vybe | 中 | [链接](https://blaxel.ai/blog/Blaxel-Raises-7-3M-Seed-Round-led-by-First-Round-to-Build-Cloud-Infrastructure-for-the-AI-Agent-Eco-23247e47b1ea8067b923d998364e3ced) |
| Jazzberry | 中 | [链接](https://blaxel.ai/blog/Blaxel-Raises-7-3M-Seed-Round-led-by-First-Round-to-Build-Cloud-Infrastructure-for-the-AI-Agent-Eco-23247e47b1ea8067b923d998364e3ced) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的意义在于『智能体运行时基础设施』这一新品类正在成形。当制造企业把 AI 智能体用于工艺参数寻优、供应链多轮谈判、质检代码自动生成、数字孪生仿真等场景时，会遇到与 Blaxel 客户相同的痛点：需要海量隔离沙箱来并行跑不可信的智能体生成代码/命令，且负载高度脉冲化（平时闲置、突发爆量）。传统按小时计费、冷启动几十秒的云机制既贵又慢。Blaxel『缩容到零 + <25ms 恢复 + 保留内存态』的模式，把智能体计算成本压到近乎零待机、按秒付费——这正是制造业跑大规模仿真/寻优时最需要的经济结构。制造 IT 在选型智能体平台时，应把『沙箱恢复速度、待机成本、内存态持久化』列为核心指标，而非沿用传统 IaaS 思路。
2. **国内对标厂商**：阿里云函数计算 FC / Serverless 沙箱（国内 serverless 计算与 AI 沙箱能力最接近的大厂基座，但非专为智能体常驻设计）、字节跳动 火山引擎 veFaaS / 微沙箱（面向 AI 应用的 serverless 与代码执行沙箱）、E2B/Daytona 的国内替代仍空缺——目前国内暂无专注『AI 智能体常驻沙箱基础设施』的独立创业公司对标 Blaxel 这一细分定位
   > 国内在『通用 serverless + 代码沙箱』层面已有阿里云函数计算、火山引擎等大厂能力，但把『智能体常驻沙箱』当作独立产品品类来做的创业公司几乎空白。Blaxel 揭示的机会点在于：随着国内 Agent 应用爆发，会出现对『百万级安全沙箱、亚毫秒恢复、按秒计费』专用基础设施的需求，这是一个尚未被独立厂商占据的窗口。对国内而言更可能由云大厂以 PaaS 组件形式补齐，而非诞生独立独角兽——这与美国 E2B/Blaxel/Modal 群雄并起的格局形成对照，值得反向情报持续跟踪。
3. **可迁移的干法 / 应进场景词典的词条**：智能体沙箱、缩容到零、毫秒级恢复、内存态持久化、按秒计费、serverless智能体托管、AI网关
   > 可迁移的『干法』是把重资产、脉冲式的 AI 计算负载做成『零待机成本 + 极速恢复』的经济模型。制造场景中，凡是『平时闲置、需要时瞬间拉起大量并行实例』的任务——如批量数字孪生仿真、多方案工艺寻优、供应商智能体并行询价、边缘设备上的智能体巡检——都可借鉴『缩容到零 + 保留内存态快速恢复 + 按秒计费』这一范式，避免为峰值算力常年买单。核心心法：不要用传统『常驻服务器』思路承载智能体负载，而要用『可无限期待命、按需毫秒唤醒』的沙箱思路重构成本结构。
4. **风险与存疑点**：①巨头挤压风险：AWS/GCP/Azure 及阿里云、火山引擎等随时可把『智能体沙箱』做成原生 PaaS 组件，Blaxel 作为独立小厂护城河主要靠速度与专注，长期壁垒存疑。②赛道拥挤且同质化：E2B、Modal、Daytona、Fly.io Sprites、CodeSandbox 等已密集竞争，差异点（<25ms 恢复）易被追平，Daytona 已转闭源、行业洗牌信号明显。③能力边界窄+锁定风险：仅托管无 BYOC，缺数据库/CI-CD/合规，能力止于智能体执行；客户为极致性能而深度绑定其运行时，存在供应商锁定顾虑，且 730 万美元种子轮体量在与大厂拼基础设施投入时资金厚度有限。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Blaxel raises $7.3M seed round led by First Round（官方博客） | https://blaxel.ai/blog/Blaxel-Raises-7-3M-Seed-Round-led-by-First-Round-to-Build-Cloud-Infrastructure-for-the-AI-Agent-Eco-23247e47b1ea8067b923d998364e3ced |
| Blaxel: The perpetual sandbox platform | Y Combinator | https://www.ycombinator.com/companies/blaxel |
| Launch YC: Blaxel — AWS for AI agents | Y Combinator | https://www.ycombinator.com/launches/Neo-blaxel-aws-for-ai-agents |
| Blaxel raises $7.3M seed round to build 'AWS for AI agents' | VentureBeat | https://venturebeat.com/ai/blaxel-raises-7-3m-seed-round-to-build-aws-for-ai-agents-after-processing-billions-of-agent-requests |
| Top Blaxel alternatives for AI sandbox and agent infrastructure | Northflank | https://northflank.com/blog/top-blaxel-alternatives-for-ai-sandbox-and-agent-infrastructure |
| Blaxel: perpetual sandbox platform for AI agents — Documentation | https://docs.blaxel.ai/Overview |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
