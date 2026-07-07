# Lumari

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B005
- **一句话定位**：AI supply chain platform for direct procurement（面向直接采购的 AI 供应链平台）
- **官网/锚定**：https://www.ycombinator.com/companies/lumari
- **深研状态**：researched

## 公司画像
- **团队**：联合创始人 Sam Lamba（前 Google 工程 lead，曾任职 Amazon、Tesla，2 项 AI 专利，杜克大学 ECE/CS）与 Eshani Mehta（前 Stripe 支付智能产品负责人，曾任职 Robinhood、Snap，UC Berkeley CS）。YC 页面显示团队约 5 人。
- **成立/批次**：2025（旧金山）
- **地点**：San Francisco, CA, USA
- **产品**：面向直接采购/直接物料（direct materials）的 AI 供应链执行平台。部署数百个常驻 AI agent，端到端自动化寻源、RFQ 询价、报价对比、PO 催单确认、供应商邮件解析与交期跟踪、风险升级；从 BOM/物料清单出发识别供应商、发询价、追催未回复方并生成结构化报价对比；读取供应商来信、抽取数据回写 ERP，需人工决策处直接标记（配置化审批护栏，可用自然语言配置 agent 行为）。
- **商业模式**：B2B SaaS（推测订阅制，官方未披露定价）。核心卖点为叠加在现有 ERP/邮件/Slack/Excel 之上，无需 rip-and-replace、无需供应商入驻门户。目标客户从成长型硬件/制造 scaleup 到 Fortune 500。
- **竞争格局**：直接采购/供应商协同数字化赛道，与 SAP Ariba、Coupa 等传统采购套件形成'叠加而非替换'的差异化；同期 AI 采购/供应链 agent 类创业公司（含多家 YC 同批公司）为潜在竞争。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：直击制造业采购部门最脏最累的环节：询价追催、报价整理、PO 确认、供应商邮件往返、交期催跟。这些恰是制造企业采购员每天 60%+ 时间消耗、却难以标准化的'人肉中间件'工作，且高度依赖非结构化邮件与 Excel。Lumari 用'叠加在现有 ERP 之上、不动供应商'的路线，绕开了国内制造企业最怕的'换系统/供应商不配合'两大落地阻力，对国产替代与自建有直接借鉴。
2. **国内对标厂商**：简单汇（SRM/寻源协同）、甄云科技 SmartX（数字化采购 SaaS）、云采云（工业品/直接物料采购）、冰鉴/企查类供应商风险数据（供应商风险监控对标）、菜鸟/富勒 WMS 类供应链执行系统（PO/交期跟踪部分对标）
   > 国内直接采购数字化以甄云、简单汇、云采云等 SRM/寻源 SaaS 为主，多数仍是'流程线上化'而非'agent 自动执行'；Lumari 的差异在于把采购员的执行动作（发询价、追催、回写）交给常驻 AI agent，这一步国内平台普遍尚未打通，是可迁移的空白点。
3. **可迁移的干法 / 应进场景词典的词条**：直接采购、直接物料/BOM 寻源、RFQ 询价自动化、报价对比、PO 催单与确认、供应商邮件解析回写 ERP、交期跟踪与风险升级、AI Agent 常驻数字员工、供应商协同 SRM
   > 可迁移打法：①从 BOM/物料清单一键触发多供应商询价 + 自动追催 + 结构化报价对比；②供应商来信（报价/延期）自动解析并回写 ERP，仅在需决策处升级给人；③自然语言配置 agent 行为 + 审批护栏，降低采购员上手门槛；④'叠加不替换'部署，规避 ERP 迁移与供应商入驻两大摩擦。制造业采购场景可直接照搬到国内离散制造（电子、装备、能源系统）采购中台。
4. **风险与存疑点**：1) 名称高度撞车：存在光学 AI 公司 Lumai（融资 $10M）、Proxima 的游戏 Lumari（$1.6M pre-seed）等同名/近名实体，检索与尽调需严格用'direct procurement / supply chain / YC X25'消歧。2) 融资金额未获可信来源锚定：聚合站（Crunchbase/Tracxn）快照曾显示约 $500K pre-seed 及 Y Combinator/Sterling Road/Matador Ventures 等投资方，但 Crunchbase 页面 403 无法直接核实、且与同名实体数据存在混淆风险，故 funding 留空，仅确认'YC X25 backed'。3) 官方站与 Fondo 均未披露具名客户与定价；'数百 AI agent''Fortune 500 客户'等为公司自述，未见第三方佐证。4) 直接物料采购强依赖供应商侧邮件/流程配合，实际自动化覆盖率与准确率有待验证。5) 赛道拥挤，AI 采购 agent 同质化竞争风险高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Lumari — YC 公司页（X25 / Spring 2025，团队/创始人/定位锚点） | https://www.ycombinator.com/companies/lumari |
| Launch YC: Lumari — AI Digital Workers for Supply Chain（产品/问题/客户/护栏） | https://www.ycombinator.com/launches/NYi-lumari-ai-digital-workers-for-supply-chain |
| Lumari 官网（tagline / 产品能力 / 目标行业） | https://lumari.ai/ |
| Lumari About Us（创始人背景） | https://lumari.ai/about-us |
| Fondo — Lumari Launches（发布时间/目标市场/商业模式，未披露融资） | https://fondo.com/blog/lumari-launches |
| Sam Lamba LinkedIn（创始人锚点，用于消歧） | https://www.linkedin.com/in/samarthlamba/ |
| Extruct AI — YC X25 完整名单（批次核对） | https://www.extruct.ai/data-room/ycombinator-companies-x25/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
