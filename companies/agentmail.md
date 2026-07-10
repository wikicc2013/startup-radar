# AgentMail

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B004
- **一句话定位**：Email inbox API for AI agents（面向 AI 智能体的邮箱 API）
- **官网/锚定**：https://www.ycombinator.com/companies/agentmail
- **深研状态**：researched

## 公司画像
- **团队**：创始团队三人，均为密歇根大学（University of Michigan）校友：Haakam Aujla（联合创始人兼 CEO）、Michael Kim、Adi Singh；背景分别来自 Optiver（量化）、Nvidia（AI）、Accel（风投）。公司约 10 人，总部旧金山湾区。
- **成立/批次**：2025
- **地点**：美国旧金山湾区（San Francisco, CA）
- **产品**：面向 AI 智能体的「邮箱即 API」平台——像 Gmail 面向人类一样，给每个 AI 智能体一个自己的邮箱。核心原语是「收件箱（inbox）」而非「发信」：支持程序化批量创建持久化收件箱，内置解析、会话线程（threading）、打标签、语义搜索、回复；提供实时 webhook/WebSocket、自定义域名与 SPF/DKIM 认证、IMAP & SMTP 多协议接入、Python/TypeScript SDK，以及 17 个工具的一方 MCP 服务器（智能体可自助注册开箱）。同时给人类留了一个可视化界面管理智能体收件箱。
- **商业模式**：Freemium + 用量计费订阅：设免费档，另有付费档与企业订阅。反滥用机制内建——未经真人认证的智能体收件箱每日发信上限约 10 封，叠加基于活跃度的速率限制、退信率监控、新账户关键词抽检、出站发信认证。
- **竞争格局**：与传统邮件 API/收件服务竞争，但主打差异化『收件箱为原语』。对标：Resend（开发者体验极佳、约 10 亿美元估值，但入站解析 2025-11 才以 webhook 形式上线、30 天留存、无收件箱/线程模型/按智能体开通）、Postmark（事务邮件+入站 webhook 见长）；同赛道『智能体收件箱』新玩家有 Mails.ai 等。AgentMail 卖点是每个智能体独立收件箱、持久会话历史、通过 MCP 程序化建箱。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子轮（Seed） | 600 万美元 | 2026-03-10 | [链接](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| OpenClaw（2026-01 上线后带动 AgentMail 用户数翻倍/翻四倍增长，媒体点名的集成/放量来源） | 中 | [链接](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/) |
| 500+ 家 B2B 客户（数万人类用户、数十万智能体用户，未逐一具名） | 中 | [链接](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业意味着：当采购、销售、售后、供应链协同越来越多交给 AI 智能体去跑，『邮件』仍是与外部供应商、货代、报关行、经销商打交道最通用、最低门槛的异步协议——它自带身份、认证、可留痕。AgentMail 把『每个智能体一个可持久收发、可检索、可线程化的邮箱』做成 API，意味着制造企业可以让询价比价 Agent、催货催单 Agent、对账开票 Agent 各自持有独立邮箱身份，直接嵌入现有供应商的邮件工作流，而无需对方系统改造或开放接口。这为『长周期、多方、异步』的产业链协作（典型如一次采购从询价到到货跨越数周、多轮邮件）提供了智能体可托管的基础设施。
2. **国内对标厂商**：阿里云邮件推送/腾讯云 SES、网易企业邮箱等（国内成熟的事务/企业邮件基础设施，但均面向人类与传统系统，尚无『按智能体开通收件箱+MCP+持久会话』的原语）、国内 Agent 基础设施/工具层创业公司（如面向智能体的记忆、身份、工具调用中间件），可类比其『给 Agent 补齐一种人类通用能力』的定位，但专攻邮箱这一细分尚属空白
   > 国内目前缺少一一对应标的：邮件基础设施侧（阿里云/腾讯云/网易）技术底座成熟，但产品心智仍是『系统给人发信』，没有把收件箱当作智能体的一等资源来经营；Agent 中间件侧有『给智能体补能力』的同类思路，却少有人专攻『邮箱身份』这一入口。这条缝隙对国内既是空白也是机会——谁先把企业微信/钉钉/飞书生态里的『智能体身份+异步消息收发+可检索线程』做成 API，谁就占住了对应生态位；纯邮件方向则受国内 to B 沟通更偏 IM 的习惯所限。
3. **可迁移的干法 / 应进场景词典的词条**：智能体身份与账号、异步长任务协作、邮箱即API、供应商/产业链邮件自动化、MCP工具化
   > 可迁移的干法有三条：其一『把一种人类通用协议改造成智能体一等资源』——不发明新协议，而是给已存在几十年、外部方零改造即可对接的邮件，补上批量开通、持久线程、语义检索与认证，制造业任何需要跨组织异步协作的场景都可照此思路；其二『身份先行、反滥用内建』——给每个 Agent 独立可认证身份并从第一天设速率/退信/关键词风控，这是让智能体安全地对外行动的通用前提；其三『MCP 化交付』——把能力做成智能体可自助调用的工具集，降低接入摩擦。制造企业做内部 Agent 平台时，这三点都可直接借用。
4. **风险与存疑点**：①滥用与声誉风险：给智能体批量发邮箱天然是垃圾邮件/钓鱼的温床，一旦域名/IP 被主流邮件服务商拉黑，交付率崩塌，整个价值主张受损，风控是生死线；②护城河偏薄：核心是把邮件基础设施重做一遍，Resend、Postmark 等资金雄厚的在位者补齐『智能体收件箱』只是产品迭代问题，且 Mails.ai 等同质新玩家已出现，竞争会迅速拥挤；③需求依附于 Agent 大盘：营收高度绑定第三方智能体（如 OpenClaw）的放量，客户集中且早期，若 Agent 应用热度回落或大平台自建邮件层，增长与留存承压。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| AgentMail | Email Inbox API for AI Agents（官网） | https://www.agentmail.to/ |
| AgentMail: Email Inboxes for AI Agents | Y Combinator | https://www.ycombinator.com/companies/agentmail |
| AgentMail raises $6M to build an email service for AI agents | TechCrunch | https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/ |
| AgentMail Raises $6M led by General Catalyst | Yahoo Finance | https://finance.yahoo.com/news/agentmail-raises-6m-led-general-163000422.html |
| Launch YC: AgentMail - The API-first email provider for AI agents | https://www.ycombinator.com/launches/NvQ-agentmail-the-api-first-email-provider-for-ai-agents |
| AgentMail vs Resend for AI Agents [2026 Comparison] | https://www.agentmail.to/blog/agentmail-vs-resend |
| The Best Email API for AI Agents in 2026 | AgentMail | https://www.agentmail.to/blog/best-email-api-for-ai-agents-2026 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
