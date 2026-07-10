# Allowance

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：Scoped payment credentials for AI agents（为 AI 智能体提供限定范围的支付凭证）
- **官网/锚定**：https://www.ycombinator.com/companies/allowance
- **深研状态**：researched

## 公司画像
- **团队**：单人创始（截至深研时团队规模 1，正在招募创始工程师）。创始人 Dasmer Singh：曾任 Cash App Families 产品负责人（为青少年与家长构建金融产品），Venmo 早期 iOS 工程师，另有 Uber、Petal（信用卡初创）履历；本科 Columbia University，MBA 于 Stanford Graduate School of Business。YC 对接合伙人 Harj Taggar。来源：https://www.ycombinator.com/companies/allowance
- **成立/批次**：2026（YC Spring 2026 / P26 批次）
- **地点**：美国旧金山湾区（San Francisco Bay Area）
- **产品**：面向 AI 智能体的『支出控制层 / Agent 钱包』。用户把需求用自然语言交给 AI 智能体，Allowance 为每笔交易生成一次性、限定范围的虚拟卡凭证（scoped one-time virtual card），绑定用户已有的信用卡（如 Citi Double Cash）作为资金来源，全程不向智能体暴露真实卡号。可设的护栏包括：单笔/每日/每月消费上限、锁定指定商户、自动过期的授权窗口、实时批准或拒绝、随时撤销、完整收据与消费记录。用户在 iPhone 上审批。典型场景：机票/差旅预订、餐厅订位、点餐点咖啡、演出票、比价后自动下单、缺货补货监控回补、电商结账、重复性采购自动化。目前处于早期公开测试（early public beta），已上架 App Store（页面显示 5.0 评分）。来源：https://useallowance.com/ ，https://www.ycombinator.com/launches/QS4-allowance-virtual-cards-for-ai-agents
- **商业模式**：支付基础设施（发卡+支出控制层）。依托 Visa、Mastercard 支付网络发卡，资金源绑定用户现有信用卡，用户仍可照常累积信用卡积分/返现。具体收费模式（发卡费/交易抽成/订阅）官方未披露。来源：https://useallowance.com/
- **竞争格局**：赛道为 2026 年爆发的『Agent 支付/代理式商务（agentic commerce）』。网络层标准由 Visa Intelligent Commerce、Mastercard Agent Pay 定义；基础设施与协议层玩家含 Stripe（Issuing + Agent Toolkit，OpenAI 联合发布的 ACP 协议）、Crossmint、Skyfire（获 a16z 加密加速器与 Coinbase Ventures 约 950 万美元，主打 KYA 身份+钱包）、Nevermined、Payman（Agent 雇人）、以及 YC 同批的 Locus（AI agent 支付基础设施）。Allowance 差异化在于面向 C 端消费者、以『iPhone 人工审批 + 一次性 scoped 虚拟卡』把人牢牢留在每笔支付的回路里，而非纯 API/agent-to-agent 结算。来源：https://www.crossmint.com/learn/agent-card-payments-compared ，https://www.useproxy.ai/blog/ai-agent-payments-landscape-2026

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Spring 2026（P26） | 未披露（YC 标准投资；未见公开独立种子轮金额） | 2026 | [链接](https://www.ycombinator.com/companies/allowance) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造业对『Agent 代替人下单』的最大顾虑正是失控支付：一旦让采购 Agent 自动补料、自动下 MRO 备件、自动付第三方物流费用，企业要的不是『Agent 拿到公司主卡』，而是『每个 Agent/每类任务一张限定范围的一次性凭证 + 硬护栏 + 事后可撤销可审计』。Allowance 的『scoped 一次性虚拟卡 + 单笔/月度上限 + 商户锁定 + 自动过期 + 完整收据流水』正是可迁移到企业采购/供应链场景的支出控制层雏形，把『Agent 自动化』与『财务合规/内控』解耦。
2. **国内对标厂商**：蚂蚁/支付宝——智能体支付与『AI 付』方向，探索 Agent 代付与授权额度（对标 Agent 支付授权层）、连连数科——跨境虚拟卡发卡（对标一次性虚拟卡资金通道）、Ping++/易宝支付等聚合发卡与虚拟卡能力（对标发卡+控费基础设施）、腾讯财付通/微信支付的授权代扣与限额风控（对标消费上限/商户限定护栏）
   > 国内暂无与 Allowance 精确对位的 C 端『Agent 钱包』产品；能力上最接近的是蚂蚁/支付宝在智能体支付授权方向的探索、连连数科等跨境虚拟卡发卡、以及财付通/微信支付的授权代扣限额风控。国内更可能走『支付宝/微信支付授权体系 + 大厂 Agent 生态』的封闭闭环路线，而非独立第三方发卡钱包；对标仅为能力对位，非同形态竞品。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 支付、一次性虚拟卡、scoped 支付凭证、代理式商务 agentic commerce、人机审批回路 human-in-the-loop、消费限额与商户锁定、AI 智能体授权、自动比价下单/补货回补
   > 可迁移打法：①『一 Agent 一凭证』——把权限颗粒度下沉到单任务单卡，而非共享企业账户；②『人只在最晚时刻审批一条决策就绪的简报』——iPhone 一键批准/拒绝，把人留在回路但不拖慢流程；③护栏即产品——上限/商户/时窗/撤销做成默认硬约束而非事后风控；④复用存量资金与积分体系（绑现有信用卡），降低替换成本。企业侧可对应到：采购 Agent 的分级授权卡、供应商白名单锁定、按项目/工单的临时预算卡、全链路可审计收据。
4. **风险与存疑点**：①单人创始、早期公开测试，组织与合规承载力待验证；②定位微调迹象——YC 目录页标题从『Scoped payment credentials for AI agents』演进为『The spend control layer for AI agents』，产品定位仍在收敛；③赛道被 Visa/Mastercard 网络层与 Stripe/Skyfire 等基础设施层前后夹击，独立 C 端钱包的护城河与网络效应存疑，存在被网络标准（Visa Intelligent Commerce / Mastercard Agent Pay / ACP 协议）吸收的风险；④收费模式、发卡合规主体（BIN 赞助方/发卡行）均未公开披露；⑤未见任何具名企业客户或独立融资金额，商业验证尚早。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
