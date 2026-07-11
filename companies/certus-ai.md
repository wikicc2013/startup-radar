# Certus AI

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B004
- **一句话定位**：Restaurant voice AI for phone orders（餐厅电话点单的语音 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/certus-ai
- **深研状态**：researched

## 公司画像
- **团队**：3 位联创、共 8 人（旧金山）。CEO Gurveer Singh——19 岁（南非开普敦背景），9 岁起在家族餐厅接电话，帮家族餐厅 7 年从 1 家开到 11 家，此前与 Adam 合创过一家餐厅增长创业公司；CRO Adam Gamieldien——与 Gurveer 合创餐厅增长公司，服务独立餐厅做外卖/宴席/活动的营收增长；CTO Isaac Nichols——16 岁在 Falcon Eye Drones 实习起步，做过物流/电信/餐饮科技的 AI 系统，曾任 Hive AI 创始工程师、合创过 2 家创业公司。YC 负责合伙人 Tyler Bosmeny。
- **成立/批次**：2025
- **地点**：美国旧金山 San Francisco
- **产品**：面向餐厅的语音 AI 电话座席，7×24 接听所有来电，端到端处理点单/外卖/预订/投诉与追加销售(upsell)，支持英语、西班牙语、法语等多语言。不依赖预录菜单或僵化决策树——实时听音、理解意图、动态适应（区分加配料、查订单状态、临时订桌）。餐厅把现有电话线全天或高峰时段转接到 Certus 专属号码即可，保留原号，安装称不到 15 分钟；直连到餐厅技术栈完成交易，宣称无需人工介入。据南非媒体报道，系统基于 OpenAI 与 Google 技术构建，点单准确率宣称 98.6%。
- **商业模式**：餐厅科技 SaaS（按订阅/座席计费，官网与 YC 均未披露具体价格）。切入点是替代/兜住餐厅电话线这一高频漏斗。
- **竞争格局**：餐厅语音 AI 电话赛道拥挤：Slang.ai（前 Spotify 数据科学家创立，主打全服务餐厅预订与问询，接 OpenTable/SevenRooms，但不接菜单点单/不收款）、Loman AI（主打独立餐厅、24h 上线、含支付、接 Square/Toast/Clover）、VOICEplug AI（电话/得来速/自助机全渠道，20 国）、ConverseNow（得来速为主，1200+ 门店，服务 Domino's、Wingstop 等连锁）、SoundHound、Kea、Revmo、VoiceBit、Bland AI 等。Certus 的差异化定位是「独立/中小餐厅、全流程含点单收款、深度接 POS+外卖平台、多语言」。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（YC S25 同期早期轮） | 未披露（南非媒体 TechCentral 称为 multimillion-rand 数百万兰特级早期轮，未给精确美元数额；YC 标准 deal 另计） | 2025 | [链接](https://techcentral.co.za/19-year-old-capetonians-ai-start-up-wins-y-combinator-backing/273140/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未具名餐厅运营者（客户证言，非可核实的具名灯塔客户） | 低 | [链接](https://www.ycombinator.com/launches/O1Q-certus-ai-replacing-the-restaurant-phone-line-with-voice-ai) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服意味着什么：Certus 证明了「一条高频、结构化、被漏接的语音入口」本身就是可被语音 AI 端到端接管的完整业务闭环——它不做通用客服，而是死磕餐厅电话这一个场景，把接听→意图理解→下单/改单→写回 POS/交易系统全链路闭环。对制造业类比：经销商/门店的电话订货、备件与耗材补货、报价与交期问询、售后报修派单这些高频语音入口，同样长期靠人工接、漏接率高、且直接绑定 ERP/订单/工单系统。制造企业可借鉴其打法：不追求「全能客服机器人」，而是选一个订单/报修高频且与后端系统强耦合的窄场景，用语音 AI 兜住漏接、动态理解非标口语需求、直接写回订单/工单系统，用「漏接损失金额」而非「降本人力」来算 ROI（Certus 用『每店每年漏接损失 10 万美元、日均 75 通电话 25% 漏接』的损失叙事定价，对 B 端极具说服力）。
2. **国内对标厂商**：阿里通义/百度智能云等大厂语音客服 + 呼叫中心（通用，非餐饮垂直）、餐道/客如云/美味不用等等餐饮 SaaS 的电话/外卖中台（有 POS 与外卖平台连接，但语音 AI 点单能力弱）、思必驰/云知声/百可录等语音交互厂商的行业外呼与智能接听方案、得助智能/容联七陌等云呼叫中心厂商的 AI 语音座席
   > 国内暂无与 Certus 高度对位的「独立餐厅电话点单语音 AI」专精玩家。国内餐饮数字化更多沿『扫码点单 + 小程序 + 外卖平台』路径，电话点单占比远低于北美，所以纯语音接听的痛点没那么尖锐——这恰是国内对标稀薄的根因（场景需求差异，非技术差距）。真要对位，是把云呼叫中心厂商（得助、容联七陌）的 AI 语音座席，与餐饮 SaaS（客如云、餐道）的 POS/外卖连接能力拼起来，但目前没人做成 Certus 这样的开箱垂直产品。国内更可迁移的是制造/汽车经销/家电售后的电话订货与报修语音 AI。
3. **可迁移的干法 / 应进场景词典的词条**：语音AI座席、电话点单自动化、漏接挽回、POS/订单系统写回、多语言接听、窄场景端到端闭环、高频语音入口
   > 可迁移干法：Certus 的核心方法论是『锁定一个高频+结构化+强后端耦合的语音入口，用损失金额叙事定价，做端到端闭环而非通用助手』。迁移路径——(1) 制造/分销：经销商电话订货、备件补货、交期报价的语音 AI + ERP 写回；(2) 售后：家电/设备/汽车的电话报修，语音 AI 理解故障描述→自动派工单；(3) 任何『电话是主要交易入口、漏接=直接营收损失、需求口语非标、结果要写回业务系统』的 B 端场景。关键抓手是保留客户原号码、峰时转接、15 分钟接入这种极低迁移成本设计，以及用『漏接损失』而非『替代人力』做价值锚。
4. **风险与存疑点**：风险① 赛道极度拥挤且低壁垒：Loman、Slang、VOICEplug、ConverseNow、SoundHound 及无数 Bland/Vapi 之上的套壳玩家同质竞争，语音模型多来自 OpenAI/Google 通用能力，技术护城河薄，最终拼 POS 集成深度、销售渠道与单店经济模型。② 团队极年轻(CEO 19 岁)且成立仅一年、无具名可核实灯塔客户与营收/装机数披露，证言均为匿名，牵引力(traction)真实性待验证；98.6% 准确率为自述、无第三方验证。③ 场景与合规风险：语音点单错单/漏配料直接影响餐厅口碑与食品交付，出错成本高；依赖 Toast/Square/Clover/UberEats/DoorDash 等平台 API，一旦平台自建语音能力或收紧接口即受挤压；多语言与嘈杂环境识别、支付合规(PCI)、通话录音隐私合规均是落地硬约束。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Certus AI 官网 | https://www.certus-ai.com/ |
| Certus AI — Y Combinator 公司页 | https://www.ycombinator.com/companies/certus-ai |
| Launch YC: Certus AI: Replacing the Restaurant Phone Line with Voice AI | https://www.ycombinator.com/launches/O1Q-certus-ai-replacing-the-restaurant-phone-line-with-voice-ai |
| Gurveer Singh — Co-founder & CEO @ Certus AI (YC S25) · LinkedIn | https://www.linkedin.com/in/gurveer-singh-35168031b/ |
| 19-year-old Capetonian's AI start-up wins Y Combinator backing · TechCentral | https://techcentral.co.za/19-year-old-capetonians-ai-start-up-wins-y-combinator-backing/273140/ |
| Y Combinator-backed voice AI startup Certus AI aims to replace restaurant phone lines · Digital Journal | https://www.digitaljournal.com/tech-science/y-combinator-backed-voice-ai-startup-certus-ai-aims-to-replace-restaurant-phone-lines/article |
| Certus AI — Crunchbase Company Profile | https://www.crunchbase.com/organization/certus-ai |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
