# Sponge

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Financial infrastructure for the agent economy（智能体经济的金融基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/sponge
- **深研状态**：researched

## 公司画像
- **团队**：三位联合创始人全部出自 Stripe Crypto 团队：Eric Zhang（Staff SWE，在 Stripe 约 5.5 年，亲手构建并上线了稳定币支付与法币-加密出入金 onramp）、Jae Choi（在 Stripe 约 6 年，负责 Crypto、Ledger/Balances）、Rishab Luthra（在 Stripe Crypto 约 3.5 年，负责稳定币金融账户 Stablecoin Financial Accounts）。团队规模 3 人，YC 对接合伙人 Brad Flora。（来源：YC 公司页 / Launch YC 页）
- **成立/批次**：2026
- **地点**：美国加州旧金山（San Francisco）
- **产品**：面向「智能体经济」的金融基础设施，让 AI Agent 无需人类介入即可持有和支付资金。两条产品线：(1) Sponge Wallet——为每个 Agent 提供独立钱包，具备银行账户、银行卡与加密能力（覆盖 EVM 的 Base/Ethereum 及 Solana），用户一次充值后 Agent 可自主为所需服务（邮件、浏览器使用、高级数据等）付费；(2) Sponge Gateway——商家上传 API spec 即可把服务上架到目录，让 Agent 自主发现、注册（onboard）并按用量付费，无需人工提供信用卡或 API key，号称无需改代码。
- **商业模式**：双边平台：一边服务需要金融账户与支付能力的 AI Agent（Wallet 侧），一边服务想直接把服务卖给 Agent 的商家（Gateway 侧）。收入模型未公开披露，参照 Stripe 出身与稳定币结算背景，预期走支付流水抽成/交易费路径，但官方未确认。
- **竞争格局**：官方材料未点名竞品。所处赛道为「Agent 原生支付/智能体商务」基础设施，公开可比的方向包括 Stripe 自身的 agentic payments、Coinbase 的 x402 协议、Google 的 AP2（Agent Payments Protocol）、Visa/Mastercard 的 agentic commerce 计划，以及 Skyfire、Payman、Catena 等 Agent 支付初创。（竞品为分析归纳，非官方声明）

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造业中长流程的采购、招投标、供应链结算正逐步引入 Agent 编排。Sponge 式『Agent 自持钱包 + 按用量自动付费』若成熟，可迁移到制造企业的自动补货、备件采购、云算力/数据服务自动续费、物流运费自动清分等『机器发起、机器支付』场景，把人从每一笔小额授权中解放出来，只保留额度与风控边界的设定。
2. **国内对标厂商**：蚂蚁集团/支付宝——智能体支付与 Agent 商业化探索（如支付宝『支小宝』智能体、AP2 协议中国生态参与）、腾讯财付通/微信支付——面向 Agent 的自动化支付能力探索、连连数字、PingPong——跨境支付与账户基础设施，可类比 Agent 侧账户/结算底座、数字人民币（e-CNY）智能合约——可编程支付，与 Agent 自主付费场景相邻
   > 国内直接对标以蚂蚁/支付宝的智能体支付探索与数字人民币可编程支付最贴切；但中国支付强监管（账户实名、反洗钱、跨境外汇管制）意味着『Agent 自主持有并划转资金』落地门槛远高于美国稳定币路径，短期更可能以『人设额度、Agent 在授信内代付』的半托付形态出现。
3. **可迁移的干法 / 应进场景词典的词条**：智能体支付、Agent 钱包、自主结算、稳定币支付、机器对机器支付(M2M)、Agent 商务/onboarding、金融基础设施、按用量计费
   > 可迁移打法：(1) 给每个自动化流程/Agent 发一个受控子账户+额度，替代共享企业卡；(2) 供应商侧用『上传 API spec 即上架』的低摩擦 onboarding，把 B2B 采购接口标准化；(3) 用稳定币/可编程支付做小额高频 M2M 结算，降低对账成本。对制造业 IT 而言，先从内部『Agent 代付云服务/数据订阅』这类可控闭环试点。
4. **风险与存疑点**：(1) 极早期：2026 年成立、团队仅 3 人、无公开融资与客户实据，产品与合规均待验证；(2) 监管风险高：让 AI 自主持有并划转资金触及 KYC/AML、资金托管牌照等红线，各法域政策差异大；(3) 稳定币与链上结算受政策波动影响；(4) 巨头挤压：Stripe、Visa/Mastercard、Google AP2、Coinbase x402 均在同一赛道，标准之争可能架空独立创业公司；(5) 安全面：Agent 被劫持/提示注入导致的资金滥用是核心攻击面。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Sponge — Y Combinator 公司页 | https://www.ycombinator.com/companies/sponge |
| Launch YC: Sponge: Financial infrastructure for the agent economy | https://www.ycombinator.com/launches/PTD-sponge-financial-infrastructure-for-the-agent-economy |
| Sponge 官网 | https://paysponge.com/ |
| Y Combinator 官方 LinkedIn 帖：Sponge (YC W26) | https://www.linkedin.com/posts/y-combinator_sponge-yc-w26-is-the-easiest-way-for-agents-activity-7429962929153912832-rBp8 |
| Eric Zhang（联合创始人，ex-Stripe Crypto）LinkedIn | https://www.linkedin.com/in/eric-zhang-73699099/ |
| StartupHub.ai：Claude's Corner — Sponge 报道 | https://www.startuphub.ai/ai-news/claude's-corner/2026/claudes-corner-sponge-yc-w2026 |
| Sponge 官方 X 账号 @sponge_wallet | https://x.com/sponge_wallet |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
