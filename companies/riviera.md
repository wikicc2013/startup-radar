# Riviera

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：AI voice agents for hotels（面向酒店的 AI 语音智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/riviera
- **深研状态**：researched（批次登记为 B006，官方一手来源（YC 公司页）确认实为 YC W25（Winter 2025）批次。Riviera 是通用地名词，已用官网 withriviera.com + YC 目录 + 创始人交叉锚定为『面向酒店的 AI 语音智能体』这家公司，排除同名的 Riviera Villages/Partners/Capital 等。第三位联合创始人 Sathvik Nori（CTO）在 Crunchbase 出现，但 YC 页面仅列 2 人团队，存在披露不一致。）

## 公司画像
- **团队**：3 位联合创始人（YC 页仅显示 2 人团队）：Shaun Lane（CEO，UC Berkeley 计算机本科，曾在 Amazon 实习，创业前做旅行咨询/内容创作，产品灵感源于其两年环球旅行中反复遭遇酒店电话久候的痛点）；Daniel Tyshler（COO，Stanford 计算机本科，曾在 SpaceX 实习，有航天与健康科技创业经历）；Sathvik Nori（CTO，据 Crunchbase）。总部旧金山，团队规模约 2-3 人（极早期）。
- **成立/批次**：2024
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向酒店的多语种 AI 语音智能体，7×24 小时接听酒店来电。核心能力：回答前台咨询（酒店服务/政策）、受理客房送餐与设施订单、查询房态并办理预订、必要时转接人工。宣称用『针对每家酒店专属数据训练的拟人语音模型』提升上下文理解，支持 10+ 语言与实时语种识别、自动加载来客上下文、可视化工作流编排，并在交接时给员工生成对话摘要。与 PMS（物业管理系统）、预订系统、工单系统集成（未公开具体厂商如 Opera/Cloudbeds）。官网自称已服务亚洲、中东、美国的酒店，但页面所列 248 通电话/97.8% 解决率/4.0 评分等为演示性示例数据，非可核实客户战绩。
- **商业模式**：SaaS 订阅，按物业规模分三档：Boutique（独立酒店/民宿）、Property（全服务酒店）、Portfolio（连锁/管理集团），均含 14 天免费试用，具体价格需联系销售，未公开。价值主张：替代/减轻前台电话人力（酒店业每年人力开支超千亿美元级），并挽回因久候/老旧 IVR 挂断导致的漏接营收。
- **竞争格局**：赛道拥挤：同为 YC 系的酒店 AI 语音/运营玩家包括 Lance（YC W26，AI agents run hotel operations）、Flowtel（YC，酒店 AI 语音）等；更广义有通用语音 Agent 平台（如 Retell/Vapi/Bland 之上的酒店垂直方案）与酒店科技既有厂商（如各类 PMS 内置 AI、Sendsquared 等 hospitality CRM 加语音）。Riviera 的差异化押注在『多语种』（面向国际客源占比高的酒店）与『按酒店私有数据训练的语音模型』。护城河偏薄，主要靠垂直集成与获客速度。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 约 50 万美元（$500K，含 YC 标准投资） | 2025 | [链接](https://pitchbook.com/profiles/company/739926-55) |
| YC W25 | 未披露（YC 标准 $125K/$375K SAFE，未单独确认） | 2025-01 | [链接](https://www.ycombinator.com/companies/riviera) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服，Riviera 的样板意义在于『语音 Agent 把 7×24 的电话入口从成本中心变成不漏单的服务与转化中心』。制造企业的售后热线、经销商/代理网络的备件与报修电话、海外客户的多语种询盘，长期受限于坐席工时、时区与语种——正是 Riviera 押注的痛点。可迁移点有三：一是『按企业私有数据训练/接入』的语音模型，对应制造业把产品手册、BOM、保修政策、工单系统喂给 Agent，实现首次接触即解决（酒店演示的 97.8% 自助解决率是同一逻辑）；二是与业务系统（PMS↔ERP/CRM/工单）深度打通，让语音不止应答而能真正下单、查件、开工单；三是多语种天然适配出海制造企业的全球客服，用一套 Agent 覆盖多国经销商与终端客户。风险映射同样成立：制造业客服涉及技术准确性与安全责任，比订客房送餐容错率更低，落地需更强的人工兜底与知识库治理。
2. **国内对标厂商**：百应科技/容联云·诸葛智能等『AI 语音外呼+呼入』厂商（通用智能客服语音，未垂直酒店，但技术栈同源）、思必驰/云知声（语音识别合成+行业对话，可做酒店/物业语音，偏底层能力供给）、石基信息（中国酒店 PMS 龙头，若叠加 AI 语音即为 Riviera 的『系统集成方+渠道』对标，反向情报价值高）、跨境电商/出海客服赛道的 SaaS（如做多语种智能客服的厂商），对应其多语种卖点
   > 国内没有与 Riviera 一一对应的『酒店多语种语音 Agent』独立创业公司，更接近的是两类：其一是通用智能语音客服厂商（百应、容联、思必驰、云知声）具备同等技术栈，只需垂直到酒店场景；其二是酒店信息化龙头石基信息，它握有 PMS 与酒店客户渠道，若自建或收购语音 Agent，将直接卡住 Riviera 这类外来者的集成入口——对国内团队的启示是，垂直语音 Agent 的胜负手往往不在模型而在『谁离业务系统和客户渠道更近』。反向情报上，可关注石基、绿云等 PMS 是否开放 AI 语音接口。
3. **可迁移的干法 / 应进场景词典的词条**：多语种语音Agent、7×24电话入口、前台/客服替代、PMS系统集成、按私有数据训练的语音模型、漏接营收挽回
   > 可迁移干法：把『高频、标准化、久候易流失』的电话入口交给多语种语音 Agent，前提是三件事同时到位——(1) 把企业私有知识（政策/库存/工单）接进模型使首答即解决；(2) 语音不止应答而要能回写业务系统真正完成动作（下单/预订/开工单）；(3) 保留清晰的人工转接与对话摘要交接，兜住 Agent 处理不了的长尾。这套『语音前台』范式可平移到制造售后热线、经销商备件电话、医疗/物业/连锁门店的预约与咨询等一切『电话仍是主入口、人力却排不过来』的场景。
4. **风险与存疑点**：①极早期、团队仅 2-3 人、融资仅 Pre-Seed（约 $500K），资金与交付带宽薄，规模化服务多国酒店存在履约风险；②赛道拥挤且护城河薄，YC 内部就有 Lance、Flowtel 等直接竞品，通用语音 Agent 平台随时可垂直下沉，差异化（多语种+私有数据训练）易被复制；③无可核实的付费客户战绩——官网 248 通电话/97.8% 解决率等为演示示例数据，官方仅泛称『服务亚洲/中东/美国酒店』但未点名，真实商用规模存疑；④信息披露不一致：融资额有 PitchBook($500K) 与 Tracxn($25M/4 轮) 相互矛盾（Tracxn 数据高度可疑，很可能混入同名公司），创始人数量 YC 页与 Crunchbase 也不一致，需谨慎采信。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Riviera: AI Employees for Hotels | Y Combinator 公司页 | https://www.ycombinator.com/companies/riviera |
| Launch YC: Riviera: Multilingual AI Voice Agents For Hotels | https://www.ycombinator.com/launches/Mob-riviera-multilingual-ai-voice-agents-for-hotels |
| Riviera — AI Voice Agents for Hospitality（官网 withriviera.com） | https://www.withriviera.com/ |
| Y Combinator on X：Riviera builds AI voice agents for hotels（含创始人 @Shaun_Lane_、@danieltyshler） | https://x.com/ycombinator/status/1891925657245872390 |
| Riviera - Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/riviera-191b |
| Riviera 2026 Company Profile: Valuation, Funding & Investors | PitchBook | https://pitchbook.com/profiles/company/739926-55 |
| Reimagining the Guest Experience: How Shaun Lane is Streamlining Hotel Communications with Voice AI（every.io 专访，含创始故事） | https://www.every.io/blog-post/reimagining-the-guest-experience-how-shaun-lane-is-streamlining-hotel-communications-with-voice-ai |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
