# telli technologies

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：AI voice platform for customer calls（面向客户来电的 AI 语音平台）
- **官网/锚定**：https://www.ycombinator.com/companies/telli
- **深研状态**：researched（登记批次 B007；官方一手来源确认为 YC Fall 2024（F24）批次，非早期猜测的 W25/X25。公司名与产品对外统一小写 telli，域名 telli.com，主体在柏林。）

## 公司画像
- **团队**：三位联合创始人 Finn zur Mühlen(CEO)、Philipp Baumanns、Seb Hapte-Selassie，均出自德国储能/光伏独角兽 Enpal，在 Enpal 规模化获客与客服中亲历高频外呼自动化难题后创立 telli；融资时约 6-16 人小团队（不同来源报道 6 人核心/16 人）。
- **成立/批次**：2024 年（产品 2024 年 11 月正式上线）
- **地点**：德国柏林（Berlin, Germany）
- **产品**：面向 B2C 高频呼叫场景的 AI 语音坐席平台：AI 电话代理自动完成外呼回拨、线索预筛(prequalify)、预约/看房/安装排期、产品推荐、账单咨询与追单(follow-up)，能记住历史通话、判断何时回访，并在复杂情况下无缝转接人工。定位为 AI+人工协同的『呼叫运营』层，而非纯语音 API。语音由聘请的配音演员录制后经 ElevenLabs / Cartesia 克隆，底层大模型在 OpenAI、Claude 等间调度。
- **商业模式**：SaaS + 用量型的托管式呼叫运营：按呼叫量/坐席能力向 B2C 企业收费，替代自建或外包呼叫中心，官方宣称相比内部或外包团队可降本约 60%、参与度提升 3 倍、成本节省最高 70%。行业覆盖房地产、能源(光伏/储能)、医疗健康、金融服务、家装家居服务等。客户分布德国、英国、拉美、美国。
- **竞争格局**：海外同赛道：Bland、Retell AI、Vapi、Synthflow（开发者/自助外呼平台），PolyAI、Parloa、Cognigy（企业级托管，Parloa 同为德系且估值更高）。telli 差异化在于聚焦 B2C 高频转化型外呼(销售/线索)+ 人机协同运营 + 落地行业(能源/房产)纵深，而非通用语音基础设施。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed（种子前） | 3.6M USD（约 3.1–3.6M EUR，官方 fundraise 页表述为 €3.6M） | 2025-04-15 | [链接](https://tech.eu/2025/04/15/y-combinator-and-cherry-ventures-back-ex-enpal-team-s-ai-voice-startup-telli-with-3-6m-pre-seed/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Enpal（欧洲领先住宅光伏/储能商，逾 10 万客户） | 高 | [链接](https://theaiinsider.tech/2025/04/18/ai-voice-agent-startup-telli-raises-3-6m-to-automate-high-volume-customer-calls/) |
| KitchenAdvisor（CEO Richard Ruben 具名背书） | 高 | [链接](https://www.vestbee.com/insights/articles/telli-secures-3-6-m) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业(尤其是有 C 端/经销终端的耐用消费品、家电、光伏储能、家装建材设备等)企业而言，telli 的价值不在『产线』，而在营销—销售—客服这条『需求侧』链路的高频电话运营。制造企业转型服务化(卖设备变卖服务/订阅)后，会产生海量低价值但不可省的电话触点：安装排期、上门维保确认、耗材复购提醒、保修回访、经销商线索跟进、账单催缴。这些历来靠自建呼叫中心或外包，接通率低(Enpal 案例仅 75%)、夜间周末覆盖不足、人力被重复话术吃满。telli 式 AI 外呼把这类工作在晚间/周末批量补位、接通率抬到 90%、员工从这类任务中释放约 40% 工时、多触达约 20% 客户、周预约量提升 30%——本质是把制造企业售后与获客团队从『拨号民工』升级为『异常处理+高价值成交』的人机协同岗，同时沉淀每通电话的客户意图数据反哺 CRM 与需求预测。
2. **国内对标厂商**：百应科技（outbound AI 智能外呼，销售线索/复购/回访，最贴近 telli 的转化型外呼定位）、追一科技（对话式 AI，语音/文本客服与营销，企业级）、思必驰 DUI / 智能语音外呼（语音技术+外呼机器人）、阿里云智能语音交互 / 云呼叫中心（语音合成+外呼平台）、容联云·容犀 / 智齿科技（云客服+智能外呼一体化）
   > 国内智能外呼赛道成熟且拥挤，但历史包袱与 telli 不同：一是过去多年被『骚扰电话/AI 群呼』污名化，合规红线严(工信部对 AI 外呼强监管)，导致国内玩家更偏 inbound 客服与合规话术，而 telli 敢主打 outbound 销售转化；二是国内产品普遍停在『TTS+意图识别+固定话术树』阶段，telli 用配音演员克隆音色+大模型动态生成+记忆历史通话+人机无缝转接，体验代差明显；三是国内以百应/追一/思必驰为代表走『技术平台』或『行业方案』，telli 走的是『托管式呼叫运营+按结果』的服务化打法。对国内厂商的反向情报意义：telli 证明了在能源/房产/家装这类高客单、强预约属性的 B2C 场景里，AI 外呼可以从『降本工具』升级为『增收的销售基础设施』，这是国内值得对标的价值跃迁。
3. **可迁移的干法 / 应进场景词典的词条**：AI外呼、人机协同呼叫运营、线索预筛与预约排期、售后维保回访自动化、行业纵深(能源/房产/家装)、音色克隆+大模型多路调度
   > 可迁移干法：①『把不可省的低价值电话交给 AI、把人留给成交与异常』——制造/设备企业先从维保确认、安装排期、复购提醒这类脚本化高频呼叫切入，接通率与工时释放立竿见影，是最稳的落地楔子；②『人机协同而非全自动』——设计明确的转人工触发点(客户情绪、复杂议价、投诉)，用 AI 兜底夜间/周末与峰值，避免一刀切全托管的翻车风险；③『行业纵深绑定业务指标』——不卖通用语音能力，而是把 AI 外呼直接挂到接通率、周预约量、漏斗转化率等甲方 KPI 上，按结果证明 ROI；④『每通电话即数据资产』——把通话意图、拒接原因、复购信号结构化回流 CRM，反哺需求预测与精准营销。
4. **风险与存疑点**：①极早期+赛道极度拥挤：Pre-Seed 仅 3.6M、团队数人，海外 Bland/Retell/Vapi/PolyAy/Parloa 及各大云厂商同时挤入，语音 AI 已趋同质化，护城河主要靠行业 know-how 与运营服务，易被资本更厚的对手复制。②合规与骚扰风险：outbound 销售外呼在欧盟(GDPR/ePrivacy)、美国(TCPA)、中国(工信部)均受强监管，一旦被贴『AI 骚扰电话』标签或触发投诉/诉讼，商业模式承压。③依赖上游第三方：音色靠 ElevenLabs/Cartesia、大模型靠 OpenAI/Claude，成本与能力受制于人，毛利与稳定性存在外部变量；且高增长(50%+ 月环比)基数小，可持续性待验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| telli: AI phone agents that convert | Y Combinator (F24) | https://www.ycombinator.com/companies/telli |
| Y Combinator and Cherry Ventures back ex-Enpal team's AI voice startup telli with $3.6M Pre-Seed | Tech.eu | https://tech.eu/2025/04/15/y-combinator-and-cherry-ventures-back-ex-enpal-team-s-ai-voice-startup-telli-with-3-6m-pre-seed/ |
| Telli, a YC alum, raises pre-seed funding for its AI voice agents | TechCrunch | https://techcrunch.com/2025/04/15/telli-a-yc-alum-raises-pre-seed-funding-for-its-ai-voice-agents/ |
| Announcing our €3.6M fundraising round | telli | https://www.telli.com/fundraise |
| Berlin-based telli secures $3.6M to automate high-volume business calls with AI voice agents | Vestbee | https://www.vestbee.com/insights/articles/telli-secures-3-6-m |
| AI Voice Agent Startup Telli Raises $3.6M to Automate High-Volume Customer Calls | The AI Insider | https://theaiinsider.tech/2025/04/18/ai-voice-agent-startup-telli-raises-3-6m-to-automate-high-volume-customer-calls/ |
| telli gets up and running with Cartesia's low latency AI voices | Cartesia | https://cartesia.ai/customers/telli |
| Cherry Backs telli: Transforming Business Voice Communication | Cherry Ventures | https://cherry.vc/news/conversations-worth-having-cherry-backs-telli |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
