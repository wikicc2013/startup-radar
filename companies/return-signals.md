# Return Signals

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：AI luxury concierge for e-commerce brands（电商品牌的 AI 奢侈品礼宾）
- **官网/锚定**：https://www.ycombinator.com/companies/return-signals
- **深研状态**：researched（YC W26 极早期（2026 年创立，2 人团队），已上线 Launch YC。产品对外品牌名多用 Signals，域名 returnsignals.com。信息稀薄但可锚定。）

## 公司画像
- **团队**：2 名联创。Ilya Valmianski（联创/CEO，物理学 PhD，二次创业者；曾在 Kaiser Permanente 主导面向患者的对话式 AI/聊天机器人部署，创办 Curai Health 与 MDandMe，具备生产级 ML 经验）；Alejandro Zaniolo（联创，家族经营服饰品牌、拥有 200+ 线下门店背景；曾参与创办两家公司——一家被 Blueground 收购/acqui-hire（Nestpick），另一家在 Blueground 把合作伙伴网络做到 40M ARR、6x 同比增长后盈利）。
- **成立/批次**：2026
- **地点**：San Francisco, California, USA
- **产品**：面向电商/DTC 品牌的「AI 高触感礼宾」post-purchase（购后）短信/iMessage 对话平台。当客户收到货时主动通过短信/iMessage 发起一对一关怀式对话：如客户不满意，智能推荐合适的换货（exchange）而非退货（return），把退货意向转化为换货与复购。后端提供分析能力，含 agentic search——品牌可自然语言提问，AI 读取数千条对话给出答案。定位聚焦服饰、鞋履、配饰这类高退货率品类。
- **商业模式**：SaaS，面向电商品牌收费（具体定价未披露）。价值主张按结果计量：宣称带来 5–10% 绝对毛利提升、提升 CSAT 与 LTV；A/B 测试口径下每次对话平均带来约 $30 的增量复购收入。对标切入点是 Attentive/Postscript 等短信营销工具（宣称回复率 67% @day10 vs 对手 4.5–14.7%）。
- **竞争格局**：短信/购后营销赛道的 Attentive、Postscript（被其作为直接对比对象，主打回复率与购后触达优于传统群发营销）；广义退货/换货管理软件 Loop Returns、Narvar、AfterShip 等；以及新兴 AI 购后/挽回收入类 YC 同批公司（如 Boom AI）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26 (Winter 2026) | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/return-signals) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Jordan Craig | 中 | [链接](https://www.ycombinator.com/launches/PV9-return-signals-proactive-high-touch-support-for-e-commerce-brands) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服而言，Return Signals 展示的是「购后主动对话」这一被长期忽视的高价值触点的自动化范式。制造企业尤其是有备件、耗材、售后服务的场景（工程机械、工业设备、汽车零部件、医疗器械），交付/安装/首次使用之后的沉默期正是流失与投诉的高发区；用 AI 在恰当时点主动一对一触达（而非群发 EDM/短信），把「客户想退/想投诉」的负向意向就地转化为换型号、升配、加购耗材或转维保合同，本质上是把被动客服变成主动营收通道。可迁移的核心不是短信技术，而是三点：①以单个客户对话为最小营收单元、可 A/B 归因到具体增量收入（每对话 $30）；②用退货/投诉信号作为触发器；③后端 agentic search 让业务人员用自然语言从海量对话里捞洞察——这对制造业客服工单、经销商反馈、售后回访录音的知识萃取同样成立。
2. **国内对标厂商**：尊龙云/网易七鱼/智齿科技（智能客服 + 会话式营销，覆盖购后触达与工单）、有赞/微盟（私域 SCRM，做购后关怀、复购与换货挽回，但偏营销自动化、AI 对话深度较浅）、快麦/售后宝/Baklib 类售后与退换货 SaaS（对标 Loop Returns 的换货流程侧）、阿里/京东体系内的智能导购与退货挽留（大平台内建能力，非独立第三方）
   > 国内暂无与 Return Signals「AI 高触感礼宾 + 退货意向转换货」严格同形的独立创业公司。最接近的是两条线的交叉：一是智能客服/会话式 AI（七鱼、智齿、尊龙云），二是私域 SCRM 购后运营（有赞、微盟）。国内更普遍的做法是「私域社群 + 人工客服 + 优惠券挽留」，而非以每对话可归因增量收入为核心指标的 AI 一对一礼宾。原因在于国内退货成本结构（平台包运费险、七天无理由）与渠道（微信私域为主、短信/iMessage 渗透弱）不同，因此可迁移点更多在「AI 主动关怀 + 换货优先」的运营策略，而非照搬短信通道。
3. **可迁移的干法 / 应进场景词典的词条**：购后主动触达、退货转换货挽回、会话式营收通道、客户对话可归因增量收入、agentic-search 对话洞察、高触感 AI 礼宾
   > 可迁移的干法：把「购后/交付后沉默期」定义为独立营收场景，用 AI 在关键时点（收货、安装、首次使用、临期）主动发起一对一对话；以「负向意向（想退/想投诉）」为触发器，用换货/升配/加购作为首选出口，而非直接放行退货或简单发券；每次对话都做 A/B 归因到具体增量收入，让客服/售后从成本中心转为可量化的营收中心；再用 agentic search 把海量对话沉淀为品牌可自然语言查询的洞察库。这套「触发—对话—转化—归因—洞察」闭环可平移到制造业售后回访、经销商关系、耗材复购等场景。
4. **风险与存疑点**：①极早期、信息稀薄：2026 年创立、2 人团队、仅 YC W26 与官网/Launch 为可靠来源，融资金额、正式付费客户名单、留存等均未披露，估值判断证据不足。②护城河存疑：核心是「购后短信 + AI 换货推荐」，Attentive/Postscript/Klaviyo 及退货 SaaS（Loop/Narvar）具备渠道与客户基础，可快速跟进，早期漂亮指标（67% 回复率、$30/对话）多来自小样本 pilot，规模化后是否成立待验证。③渠道与合规风险：依赖 SMS/iMessage 主动外呼，受各国短信营销合规（TCPA、opt-in、10DLC）与苹果 iMessage 商业化政策约束；同时「把退货转成换货」若被消费者感知为阻挠退货，可能损伤品牌信任与监管风险。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Return Signals | Y Combinator 公司页 | https://www.ycombinator.com/companies/return-signals |
| Launch YC: Return Signals - proactive high-touch support for e-commerce brands | https://www.ycombinator.com/launches/PV9-return-signals-proactive-high-touch-support-for-e-commerce-brands |
| Signals 官网 (returnsignals.com) | https://www.returnsignals.com/ |
| Y Combinator LinkedIn 帖：Return Signals (YC W26) | https://www.linkedin.com/posts/y-combinator_return-signals-yc-w26-helps-e-commerce-activity-7431759788641910785-6fRx |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
