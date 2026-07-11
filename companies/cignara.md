# Cignara

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B001
- **一句话定位**：AI agents for Fortune 500-grade customer support（财富 500 强级别客服的 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/cignara
- **深研状态**：researched（极早期，YC Spring 2026 (P26/X26) 批次，2025 年成立，团队 4 人，San Francisco。已通过 YC 目录页 + Launch YC 页 + 官网锚定，创始人身份清晰。融资金额未在公开渠道披露（除 YC 标准投资）。）

## 公司画像
- **团队**：创始人 Nalin Gupta，两度 YC 创始人（S15 与 P26/Spring 2026）。此前联合创办 Auro Robotics（无人驾驶/园区自动驾驶班车，已被 Ridecell 收购），负责自动驾驶系统。团队约 4 人。
- **成立/批次**：2025
- **地点**：San Francisco, CA, USA
- **产品**：面向财富 500 强规模 B2C 企业的 AI 客服与销售智能体，覆盖电话（语音）与聊天双通道，端到端处理对话。区别于只答 FAQ 的传统 chatbot：agent 读取客户画像、遵循复杂企业政策、执行工作流（账单、退款、预订、升级、销售流程），并识别一次支持来电其实是挽留或增购时机。所有动作强调受治理、可验证、政策绑定，且 grounding 在企业知识库与工作流上。语音支持自然轮次接管、低延迟、可打断，号称接近真人、支持 32+ 语言，覆盖 inbound/outbound 呼叫。同一套 AI 大脑也可作为人工坐席的实时 copilot。
- **商业模式**：未披露。定位企业级 SaaS，卖给财富 500 规模的大型 B2C 联络中心，替代/增强人工客服与销售坐席（大概率按坐席/对话量/分钟数计费，但官方未公布定价）。
- **竞争格局**：YC 页面仅泛指『多数 chatbot 止步于答 FAQ』，未点名竞品。所处赛道为企业级 AI 客服/语音 agent，行业内同类玩家包括 Sierra、Decagon、Parloa、Cresta、Salesforce Agentforce 等（此为赛道对标，非官方点名）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC (Spring 2026 / P26) | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/cignara) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| LG | 中 | [链接](https://www.ycombinator.com/launches/QYm-cignara-ai-agents-to-automate-b2c-sales-customer-support) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，Cignara 这类『受治理、政策绑定、能执行工作流』的语音+聊天客服 agent，最直接的落点是拥有大量 B2C 触点的制造企业——家电（如其点名客户 LG）、消费电子、汽车、工程机械等，其售后热线、保修与退换、备件订购、上门维修预约、以旧换新与增购，历来是重人力、重政策、跨语言的联络中心成本中心。价值不在『答问题』而在『带治理地执行动作+把服务来电转成挽留/增购』：把保修判定、退款审批、预约排程这些原本要人查手册、走系统的流程交给 agent 端到端跑通，同时把一通投诉电话识别为换新/升级契机。32+ 语言与 outbound 能力也契合制造企业的全球化售后与主动召回/保养提醒场景。对国内制造业的启发是：AI 客服的下一站不是聊天机器人，而是『能查企业知识库、守企业政策、动企业系统』的执行型坐席，且销售与服务合流。
2. **国内对标厂商**：阿里小蜜/阿里云智能客服（大厂客服中台，正在向大模型 agent 化）、网易七鱼、智齿科技 Sobot（SaaS 客服/联络中心，语音+文本）、追一科技、容联云（对话式 AI 与云联络中心，语音能力强）、百度智能云客服 / 火山引擎（语音+大模型 agent，多语言）
   > 国内对标集中在两类：一是智齿、网易七鱼、追一、容联云这类联络中心/对话式 AI SaaS，已有成熟语音+文本客服底座，正补大模型 agent 与执行动作的能力；二是阿里小蜜、火山引擎、百度智能云这类大厂客服中台。与 Cignara 的差距/差异点在其强调的『治理+可验证+政策绑定的动作执行』和『服务即销售（把来电转增购）』——国内多数玩家仍偏『答问+工单』，真正把退款/升级等带审批的工作流交给 agent 端到端执行、并绑定合规治理的还是少数，这正是 Cignara 想立住的护城河，也是国内厂商可借鉴的产品化方向。
3. **可迁移的干法 / 应进场景词典的词条**：AI客服agent、语音agent、联络中心自动化、服务转销售、政策绑定/可治理执行、人工坐席copilot、多语言外呼、售后/保修/退款工作流
   > 可迁移的干法有三条：①『grounding+治理』——agent 的每个动作都绑定企业知识库、政策与可验证约束，而非自由生成，这是企业级落地的关键，可直接迁移到制造企业的保修判定、备件报价等高风险流程；②『服务即销售』——把客服会话当作挽留/增购的入口，识别意图并触发升级/换新流程，这套『把成本中心变收入触点』的思路对家电、汽车、工程机械售后普遍适用；③『同一大脑双形态』——既做全自动 agent 又做人工坐席实时 copilot，既能替代也能增强，降低企业采用门槛、便于渐进式上线。
4. **风险与存疑点**：①极早期风险：2025 成立、团队仅 4 人、Spring 2026 批次，产品成熟度与规模化交付未验证，公开客户仅 LG 一家且合作深度/形态未披露；②赛道极度拥挤：Sierra、Decagon、Parloa、Cresta、Salesforce Agentforce 及各大云厂商都在抢企业 AI 客服，差异化窗口窄，『治理+执行动作』的卖点竞品也在快速补齐；③企业级落地门槛高：财富 500 客户对合规、数据安全、SLA、语音真实度与政策准确性要求极高，语音 agent 的幻觉/误操作在退款、升级等带钱动作上是硬伤，销售周期长、PoC 到规模化转化不确定，创始人虽 2x YC 但自动驾驶背景与企业客服 GTM 未必直接迁移。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Cignara: AI Customer Support for Fortune 500-scale enterprises | Y Combinator | https://www.ycombinator.com/companies/cignara |
| Launch YC: Cignara - AI agents to automate B2C sales & customer support | https://www.ycombinator.com/launches/QYm-cignara-ai-agents-to-automate-b2c-sales-customer-support |
| Cignara - AI for Enterprise Customer Support (官网) | https://cignara.com/ |
| Cignara: AI Agents for Fortune 500 grade customer support | Product Hunt | https://www.producthunt.com/products/cignara |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
