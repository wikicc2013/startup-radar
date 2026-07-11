# Telemetron

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：AI customer support for hardware devices（硬件设备的 AI 客户支持）
- **官网/锚定**：https://www.ycombinator.com/companies/telemetron-ai
- **深研状态**：researched（已锚定。YC Fall 2025 (F25) 批次，2025 年成立，团队 2 人，位于旧金山。官网、YC 目录、YC 官方 X 发布贴、第三方数据库（Extruct/Altss）互相一致。融资金额存在分歧（Extruct 一处标 $500K、另一处第三方标 $1M），未见官方口径，按未披露处理。）

## 公司画像
- **团队**：两位联合创始人均来自 SpaceX/Starlink。Shivani Patel（联创兼 CEO）：曾在 SpaceX 为 Starlink 搭建全部 AI 客户支持软件，做过基于 Starlink 设备数据根因定位的 AI 故障排查系统、App/Web 聊天机器人及客服坐席 AI copilot，称把 Starlink 的 AI 自动化「从 0 做到 70%」。Hamza Shaikh（联创）：曾负责 Starlink 电商运营内部工具、支付基础设施与本地化，处理全球客户问题。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向硬件公司的 AI 客户支持与运维平台。核心命题：50–80% 的客户问题与设备实时状态强耦合，传统工单系统看不到设备。Telemetron 的 AI agent 直接连接设备、读取遥测（telemetry）、跑诊断、排障，把工单、设备诊断、订单跟踪、产品文档统一到一个系统里。能力含：坐席 copilot、硬件专用帮助中心、现场服务管理（FSM，派工/技师工具）、保修与 RMA 处理、全渠道支持（邮件/聊天/电话/语音 AI），并做主动式舰队级支持（分析遥测提前发现共性问题并通知受影响客户）、智能工单升级（仅在必要时带遥测+诊断上下文升级到工程团队）。官网自称 85% 自动化率、28 秒平均响应、监控 23.5 万+ 设备、日解 847 单（官网营销数字，未经第三方核实）。
- **商业模式**：B2B SaaS，卖给硬件制造商/设备厂商。定位替代或叠加传统客服工单系统（Zendesk/Intercom 一类），差异点是「懂硬件、连设备遥测」。目标客户描述为管理上万台设备的硬件公司。具体定价未公开披露。
- **竞争格局**：横向：Zendesk、Intercom、Salesforce Service Cloud、Freshdesk 等通用客服/工单平台，以及 Sierra、Decagon、Intercom Fin 等新一代 AI 客服 agent（但这些不深入设备遥测）。纵向/邻近：IoT 设备管理与远程诊断平台（如 PTC ThingWorx、Samsara、Memfault、Golioth）、现场服务管理（ServiceMax、Salesforce Field Service）。Telemetron 的独特卡位是「AI 客服 agent × 设备遥测/诊断」的交叉带，介于 AI 客服与 IoT 可观测之间。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Fall 2025 (F25) | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/telemetron-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业设备企业而言，Telemetron 指向售后与客户成功环节的一次结构性改造：过去客服只能靠客户口述+电话+上门，而设备联网后大量故障其实在遥测数据里「写着答案」。把 AI agent 接到设备遥测上，意味着营销·销售·客服链条从「被动响应工单」转向「主动舰队健康管理」——提前发现批次性隐患、在客户投诉前触达、把首解率和自助解决率拉高、只在真正需要时才占用工程师。对卖联网设备（EV、储能、机器人、医疗器械、工业装备、智能硬件）的制造商，这既降低售后人力成本，又把「售后数据」变成续约、保修增值、备件与升级销售的抓手，客服部门从成本中心向数据驱动的客户运营中心迁移。落地前提是设备有可读遥测与联网能力，这也倒逼制造企业补齐设备可观测性。
2. **国内对标厂商**：智齿科技 / 容联七陌等中国 SaaS 客服厂商（通用 AI 客服，缺设备遥测深度）、涂鸦智能 Tuya（IoT 设备云 + 设备数据，偏平台侧，客服 agent 弱）、树根互联 / 卡奥斯 COSMOPlat（工业互联网平台，含设备远程运维与预测性维护，偏工业重资产）、阿里云 IoT / 华为云 IoT 设备管理 + 通义/盘古客服 agent 组合（需自行拼装）
   > 国内没有严格同形态的「AI 客服 × 设备遥测」一体化创业公司作为对标：一边是智齿、容联七陌这类通用智能客服（懂对话不懂设备），另一边是涂鸦、树根互联、卡奥斯这类 IoT/工业互联网平台（懂设备数据但客服 agent 化程度低）。Telemetron 的价值正卡在两者中间。对国内做联网硬件的厂商，现实路径往往是「IoT 平台（涂鸦/自建）+ 客服 SaaS + LLM」拼装，一体化程度不如 Telemetron，这也说明该细分在国内存在空白与机会。
3. **可迁移的干法 / 应进场景词典的词条**：设备遥测驱动的售后诊断、主动式舰队健康管理、AI 工单智能升级与上下文交接、保修/RMA 自动化、现场服务派工（FSM）
   > 可迁移干法：把「设备实时数据」当成客服 agent 的第一手证据源，而非让客服和客户来回问答复现问题——这套「遥测即上下文」的思路可迁移到任何有联网设备/资产的行业：新能源汽车与充电桩售后、储能与光伏运维、工程机械远程诊断、医疗器械合规化售后、智能家居与消费电子退换修。关键动作三步：①先把设备打通可读遥测；②让 LLM 跨日志/手册/实时数据像工程师一样推理根因；③只在必要时带全上下文升级到人/工程团队，把人力用在刀刃上。
4. **风险与存疑点**：①极早期、团队仅 2 人、无公开付费客户与营收披露，官网自动化率/设备量等数字系营销口径未经第三方核实，商业验证不足；②深度依赖客户设备「有联网+可读遥测+愿开放接口」，面对存量非联网或数据封闭的工业设备落地阻力大，集成成本高；③赛道两头受挤——通用 AI 客服（Sierra/Decagon/Intercom）向下延伸、IoT/工业互联网平台向上做客服 agent，护城河待验证，创始人 Starlink 履历是主要背书但产品仍需从单一垂直证明可复制到多行业。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Telemetron — 官网 | https://www.telemetron.ai/ |
| Telemetron — Y Combinator 公司主页 (F25) | https://www.ycombinator.com/companies/telemetron-ai |
| Y Combinator 官方 X 发布贴 | https://x.com/ycombinator/status/1986132734583185589 |
| Telemetron — Altss YC 公司档案 | https://altss.com/companies/yc/telemetron-ai |
| Telemetron Funding 分析 — Extruct AI | https://www.extruct.ai/hub/telemetron-ai/ |
| Telemetron Launches — Fondo Blog | https://fondo.com/blog/telemetron-launches |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
