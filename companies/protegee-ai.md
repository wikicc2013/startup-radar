# Protegee AI

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Personalized learning / voice AI platform（个性化学习/语音 AI 平台）
- **官网/锚定**：https://www.ycombinator.com/companies/protegee
- **深研状态**：researched（锚定成功。登记的一句话（个性化学习/教育）有误，需更正：Protegee 实为「AI 语音智能体的支付 API/支付层」，与教育无关。分诊维度应归【AI 基础设施】——它是让 AI 语音 agent 能在电话里安全收单的支付底座（交易/清算合规中间件），而非语音客服/销售 agent 本身，也非教育。判断依据：官网与 YC F24 launch 均定义为『payments API for AI voice agents / world's first payment layer for AI voice agents』，通过 webhook + call transfer 两步接入，agent 全程不接触卡号，即『把合规支付轨道从 AI agent 中剥离成独立底座』。批次为 YC F24（2024 秋）。重要状态：公司已于 2025 年 7 月停运，protegee.ai 现导向创始人的新公司 Attimet（量化/预测方向），产品不再可用。）

## 公司画像
- **团队**：两位联合创始人，均为量化交易背景。Kirthi Banothu——前高频交易（Optiver、DRW），做过低延迟交易系统（期货/加密/股票/期权），并曾在自动驾驶公司 Argo AI 带车载传感与 ML 库团队；Xiaoyu Li——前 Optiver 量化交易员（指数+股票期权做市），自建并带过中频算法交易团队，耶鲁医学院辍学。停运后二人转做 Attimet（YC F24，量化预测）。
- **成立/批次**：2024
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向 AI 语音智能体的支付 API / 支付层：让 AI 呼叫中心、语音客服/销售 agent 能在电话中安全完成信用卡收单，PCI DSS 合规，卡号敏感数据由支付方处理、agent 本身不触碰。接入仅两步（一个 webhook + 一次 call transfer）。对接主流语音平台 Twilio、Retell、Vapi、Bland；对接支付处理商 Stripe、Authorize.net、Adyen、VGS、Fiserv、Worldpay 等。自称『世界首个 AI 语音 agent 支付层』。
- **商业模式**：B2B API/基础设施（按交易/调用计费的支付中间件，具体价目未公开披露）。客户为搭建 AI 语音 agent 的公司（AI 呼叫中心、语音客服/销售自动化厂商）。
- **竞争格局**：横向：Stripe 等支付巨头自身正推进 agentic/AI 支付能力，以及各语音平台（Retell/Vapi/Bland）可能自建收单；传统电话 IVR 支付方案商（如 PCI Pal、Sycurio/原 Semafone）。此赛道（AI agent 支付合规层）2024-2025 属早期新兴，玩家稀少但巨头挤压强。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed/Pre-seed（含 YC 标准投资） | 约 500K 美元（未证实，多源冲突） | 2024 | [链接](https://www.crunchbase.com/organization/protegee) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的意义不在支付本身，而在它示范的一种『合规隔离』架构：把「收款/交易轨道」从 AI 语音 agent 里剥离成独立、可审计、agent 不触敏感数据的底座模块，靠 call transfer/webhook 两步接入。制造业的经销商电话订货、备件/MRO 电话续订、售后热线代收款等场景，一旦上 AI 语音 agent，最大障碍正是支付合规（PCI）与欺诈信任——这类『支付层独立于智能体』的模式可直接迁移：语音 agent 负责对话与下单，敏感的收款环节交给合规轨道，既降 agent 出错/泄露风险，也便于集中风控与审计。反面教训同样重要：极窄的单点合规中间件在巨头（支付平台自带 agent 支付）夹缝中生存艰难，本案 10 个月即停运。
2. **国内对标厂商**：支付宝 / 微信支付的『AI/Agent 支付』方向（如支付宝面向 MCP/Agent 的支付能力）——巨头自带清结算与合规，对标其『给 AI agent 发起支付』的能力位（说明：定位相近但体量与路径完全不同，巨头是平台自建而非独立中间件）、容联云 / 百应科技 / 思必驰等『云通信+AI 外呼语音』厂商——对标其电话语音 agent 侧，但它们通常不把电话收单单独做成独立合规 API（说明：语音能力对标，支付合规层多为缺口）、拉卡拉 / 汇付天下等收单机构的 IVR/电话支付方案——对标其『电话里安全收信用卡』的合规收单能力（说明：传统收单对标，缺 AI agent 原生编排）
   > 国内没有与 Protegee 完全对位的『AI 语音 agent 独立支付层』独角选手，原因有二：一是国内 C 端支付高度收敛于支付宝/微信两大钱包与扫码/免密体系，电话里手输信用卡的场景远小于欧美，PCI 电话收单痛点弱；二是收单与合规牌照壁垒高，创业公司难独立切入清结算。可对标的是三条各缺一角的路径：巨头的 Agent 支付能力（有清结算、缺独立中立中间件）、云通信语音外呼厂商（有语音 agent、缺支付合规层）、传统收单机构的电话支付（有合规收单、缺 AI 原生）。真正的国内机会更可能长在 B2B 场景（经销商/备件电话订货代收款）而非 C 端电话刷卡。
3. **可迁移的干法 / 应进场景词典的词条**：AI-agent-payments、agentic-commerce、voice-commerce、IVR-电话支付、PCI-DSS-合规隔离、call-center-变现、支付中间件
   > 可迁移干法：给『会对话的 AI』配一条『会收款的合规轨道』，但两者解耦——AI agent 只管对话与下单，收款经由 webhook+call transfer 转入 PCI 合规通道，敏感数据永不进 agent 上下文。这套『能力剥离 + 合规隔离 + 两步轻接入』的模式，可迁移到任何『AI 交互 + 敏感/受监管动作』的组合：语音下单收款、AI 客服里的退款/改约、工业场景的电话报价成交等。核心心法是把高监管、高风险的那一步做成中立、可审计的独立底座，让上层 AI 敢用、合规敢批。
4. **风险与存疑点**：① 已停运（defunct）：公司 2024 年成立，约 2025 年 7 月即停止运营，protegee.ai 现导向创始人新公司 Attimet，产品不再可用、无法作为可采购供应商，仅具方法论参考价值。② 赛道极窄且被巨头夹击：单点『AI agent 支付合规层』极易被支付平台（Stripe）与语音平台自建能力吞并，缺乏独立护城河。③ 信任与合规门槛高：电话手输信用卡天然伴随欺诈与 PCI 合规重负，早期初创难快速建立商户与消费者信任。④ 信息不确定：融资数据多源冲突（有源称约 500K，YC/Neer Venture Partners/Eight Capital Group/Tekedia Capital 参与；另有低质量源称 10M 种子轮，未获权威证实），早期客户无公开披露。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Protegee 官网 | https://protegee.ai/ |
| Protegee Docs — Introduction | https://protegee.ai/docs/introduction |
| Y Combinator 官方推特：Protegee AI (YC F24) launch | https://x.com/ycombinator/status/1848408910006522179 |
| Protegee — Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/protegee |
| Protegee — CB Insights | https://www.cbinsights.com/company/protegee |
| Protegee — Tracxn Company Profile | https://tracxn.com/d/companies/protegee/__bZ936cP-AKFerxlwx8m1QtWstBGeNxl32kqTDAvm0Ts |
| Tekedia Capital welcomes Protegee, the World's first Payment layer for AI Voice Agents | https://www.tekedia.com/tekedia-capital-welcomes-protegee-the-worlds-first-payment-layer-for-ai-voice-agents/ |
| Kirthi Banothu — LinkedIn（Cofounder，现 Attimet YC F24） | https://www.linkedin.com/in/kirthibanothu/ |
| Unlocking the Agentic Economy: Protegee's Role in AI Payments — hiretop | https://hiretop.com/blog2/protegee-ai-agents-payments-api/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
