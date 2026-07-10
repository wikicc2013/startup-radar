# Orthogonal

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Agentic payments for APIs（面向 API 的智能体支付）
- **官网/锚定**：https://www.ycombinator.com/companies/orthogonal
- **深研状态**：researched

## 公司画像
- **团队**：2 人。联合创始人 Christian Pickett（CEO，曾任职 Vercel、Coinbase）与 Bera Sogut（曾任职 Google——reCAPTCHA/Maps API 方向、Amazon Robotics；两届 ACM ICPC 全球总决赛选手）。两人相识于麦吉尔大学（McGill University）。注：媒体稿（PRNewswire）与 YC 官网对两位创始人的履历归属略有出入，此处以 YC 官网为准。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向 AI 智能体的 API「发现—编排—支付」基础设施层。通过单一 MCP Server / SDK / API / CLI 接入，智能体即可发现、调用并按次付费使用 40+ 家优质 API（涵盖搜索、抓取、数据集、GTM 数据富化、KYC 等），免去逐家注册账号、管理 API Key、订阅与销售洽谈。API 供应方一次上架，之后每被智能体调用一次即获付费。
- **商业模式**：双边平台 + 用量计费。对智能体/开发者：按调用付费（低至约 $0.01/次），购买平台信用额度统一结算，新用户送 $10 免费额度，无订阅；支持信用卡/银行、链上微支付（x402）、智能体原生支付轨（MPP）多种支付方式。对 API 供应方：按请求收款、可动态定价，无需订阅或开票。平台从中抽取撮合/流转费用（具体费率未披露）。
- **竞争格局**：赛道为『智能体商务/支付基础设施』，可类比对象包括：支付轨层的 Stripe（x402/Agentic Commerce）、Skyfire、Payman、Nekuda 等 agent 支付创业；工具聚合与 MCP 网关层的 Smithery、Composio、以及各类 MCP marketplace；API 计量计费层的 Moesif、传统 API marketplace（RapidAPI）。Orthogonal 的差异点是把『发现 + 编排 + 按次付费』打包在单一入口。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $4.3M | 2026-06-25 | [链接](https://www.prnewswire.com/news-releases/orthogonal-raises-4-3m-seed-for-ai-agent-service-discovery-orchestration-and-payments-across-the-internet-302806969.html) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Nexio（创始人 Michael Alfano） | 中 | [链接](https://www.orthogonal.com/) |
| Hobbes（联合创始人兼 CEO Chirag Kulkarni） | 中 | [链接](https://www.orthogonal.com/) |
| MouseCat（YC W26） | 中 | [链接](https://www.orthogonal.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业本身不是 Orthogonal 的直接客户，但其模式对制造企业内部『智能体调用外部数据/服务』的成本管理有启发：当工厂的采购、质检、供应链智能体开始批量调用外部 API（如物流查询、企业征信、行情数据、图像识别），谁来统一鉴权、限额与按次结算会成为真问题。Orthogonal 这类『单入口、按调用计费、免逐家开户』的中台正是解法雏形。
2. **国内对标厂商**：API 聚合/计量计费：APISpace、Eolink（含 API 变现）、幂简集成（旧 RapidAPI 中文对标）、智能体支付/商务结算：支付宝『支付 MCP / AI 付款』、连连支付、蚂蚁 AgentPay 类探索、各支付机构的 Agent 收单试点、大模型/工具调用聚合网关：OpenRouter 式聚合国内对标如 GPTBots、各云厂商模型广场与 MCP 市场（阿里百炼、火山方舟）
   > 国内制造场景可直接对标云厂商的 MCP 市场 + 模型广场（阿里百炼、火山方舟）叠加支付机构的 Agent 收单能力；短期内更可能由云厂商/支付机构一体化提供，而非独立创业公司。
3. **可迁移的干法 / 应进场景词典的词条**：智能体支付、API 按次计费、MCP 网关/工具聚合、Agent 服务发现、x402 微支付、GTM 数据富化、开发者基础设施
   > 可迁移打法：把『分散的能力供给方（API/工具/服务）』聚合成单一目录，用『一次接入 + 按用量计费 + 统一额度钱包』降低智能体接入摩擦——这套双边聚合+计量结算逻辑可平移到制造业的『设备能力市场』『工业 App/算法市场』，让产线智能体像点外卖一样按调用采购算法与数据。
4. **风险与存疑点**：1) 成立仅一年、团队 2 人、种子轮阶段，产品与商业模式仍早期，客户多为 AI-native 初创与 GTM 团队，规模化与留存待验证；2) 赛道拥挤且巨头逼近——Stripe(x402)、各大模型厂商 MCP 市场、支付机构都在做智能体支付/工具聚合，独立中台被平台化吞并风险高；3) 依赖上游 API 供应方持续上架与下游智能体放量的双边网络效应，冷启动脆弱；4) 创始人履历在媒体稿与 YC 官网间有出入，需以官方为准；5) 40+ API 数、客户名单等来自官网自述，第三方核验有限，置信度标中。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
