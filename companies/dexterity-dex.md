# Dexterity (Dex)

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B006
- **一句话定位**：AI workspace with operational memory（带运营记忆的 AI 工作空间）
- **官网/锚定**：https://www.ycombinator.com/companies/joindex
- **深研状态**：researched

## 公司画像
- **团队**：2 人核心团队（YC 页显示 team size 2），母公司/品牌为 ThirdLayer，自称『applied research and product lab』。联合创始人 Regina Lin（CEO，哈佛数学 + 计算科学硕士辍学，曾联创 Contour AI、做过 4 万+ 客户电商平台）与 Kevin Gu（哈佛数学与统计，曾任 Jump Trading、IBM Research、QuantCo、Meta 的 quant/ML 研究员）；官网自述团队来自 Meta FAIR、Jump Trading、Harvard 的前创始人/quant/设计与工程师。注意品牌沿革：早期用名 Dexterity（getdexterity）→ 母体公司 ThirdLayer → 现产品名 Dex（joindex.com），与机器人公司 Dexterity Inc（dexterity.ai，物理 AI）无关。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：Dex —— 装在 Chrome 里的 AI 协作层/『operator 的自驾工作空间』。核心是『带完整运营记忆的 AI 工作空间』：跨全部工作工具捕获运营上下文，沉淀为两层记忆——Operational Graph（把消息/会议/交易更新/工作流事件组织成实体、关系、时间线与依赖的组织级全记录）与 Knowledge Manual（不断演化的『当前什么最重要』：优先级、未闭环事项、关系背景、SOP、运营原则）。之上叠加：浏览器控制（切标签、填表单）、跨 Gmail/Slack/CRM 等 20+ 工具的自主 agent、7×24 对新数据推理的 Dreamer Agent、每周生成自动化建议的 Skill Builder Agent、会前准备与 CRM 自动更新。集成 Asana、Google Drive、Linear、Google Calendar、Notion、Google Sheets、Slack、Google Docs、Attio 等。定位区别于『set-and-forget』式 web agent，强调实时、随手可驱动的人机共驾（『AI that works with you, not just for you』）。
- **商业模式**：未披露正式定价。当前走 Chrome 扩展安装 + 预约 onboarding call 的 PLG/高触达混合获客；面向 operator（同时跑多个 deal、跨多工具、需要上下文复利的运营者/BD/PE/VC/创始人）。SaaS 订阅方向可推断但官方未公布具体价格。
- **竞争格局**：记忆层/AI 工作空间赛道：横向 AI 浏览器与浏览器 agent（Perplexity Comet、Arc/Dia 类、各类 browser copilot）、通用 AI 助理与 agent；记忆基础设施层的 Mem0（2025 年 10 月获 2400 万美元）等『AI 记忆层』玩家；以及 Notion AI、Glean 等企业知识/工作空间智能。差异点在于把『运营记忆（Operational Graph + Knowledge Manual）』做成可驱动动作的底座，而非纯问答或纯自动化。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 未披露具体金额（YC 支持；多处自述『7 位数（7-figure）』顶级投资人背书，深科技投资人参与；Crunchbase 有 Pre-Seed 轮条目但未公开金额明细） | 未披露（2025，随 YC W25 批次） | [链接](https://www.crunchbase.com/funding_round/dex-3c7b-pre-seed--bd5f9271) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 官网宣称『被 Google、OpenAI、Goldman Sachs、Salesforce、Palantir、Meta 等及 10,000+ operator 使用』 | 低 | [链接](https://www.joindex.com/) |
| 证言中出现的 PE 合伙人、创始人、BD 负责人、VC（均未具名，无法核验为签约客户） | 低 | [链接](https://www.joindex.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业的『业务运营层』（销售运营、供应链协同、项目/PMO、客户成功）同样苦于跨 ERP/MES/CRM/邮件/IM 的上下文割裂。Dex 的『Operational Graph + Knowledge Manual』范式可迁移为『制造业务大脑』：把订单、变更、异常、会议纪要、SOP 沉淀成可推理的运营记忆，让 AI 在报价、催单、交期协调、质量闭环等环节提供随手可驱动的建议，而非各系统各自为战。
2. **国内对标厂商**：公司大脑 / 组织记忆层：把企业跨系统的运营事件沉淀成可推理的『组织级记忆图谱』——对标国内『企业大脑/数字员工中台』方向、AI 工作空间：类飞书/钉钉的智能工作台 + AI 助理（飞书智能伙伴、钉钉 AI 助理），但 Dex 更强调浏览器内跨 SaaS 的运营记忆、记忆层基础设施：对标国内做 Agent 长期记忆/上下文中台的创业方向（记忆层、Context Engine）、浏览器 Agent / RPA 升级版：类『AI 浏览器助手 + 智能 RPA』，把点选填表自动化与语义记忆结合
   > 国内落地更可能走『飞书/钉钉智能工作台 + 企业大脑/记忆中台』的组合路径；Dex 的浏览器扩展打法在国内受超级 App（企微/飞书/钉钉）生态挤压，纯浏览器层入口价值弱于美国 SaaS-heavy 环境。国内对标应盯『组织记忆图谱 + 数字员工』而非单纯浏览器插件。
3. **可迁移的干法 / 应进场景词典的词条**：运营记忆、AI 工作空间、浏览器 Copilot、跨 SaaS 自动化、组织知识图谱、CRM 自动更新、会前准备、operator 提效、人机共驾、24x7 后台推理 Agent
   > 可迁移打法：① 先做『记忆层』而非做『功能』——把跨工具事件抽象成实体/关系/时间线的运营图谱，形成数据护城河与复利上下文；② 用 Dreamer/Skill Builder 这类后台常驻 Agent 从记忆里主动生成自动化建议，实现『用得越久越懂你』的粘性；③ 以 operator（跑多 deal、跨多工具的高价值人群）为锋利切口，先深后宽。制造场景可照搬为：以某类高频跨系统岗位（如订单交付协调员）为切口，先建岗位级运营记忆，再横向扩科室。
4. **风险与存疑点**：① 品牌/命名混乱：Dexterity→ThirdLayer→Dex 多次更名，且与机器人公司 Dexterity Inc 强撞名，检索与品牌资产易被稀释（分诊时已消歧）；② 客户背书全部为『被 X 公司 operator 使用』式营销话术，无具名签约与量化，可信度低；③ 融资仅 Pre-Seed、金额未公开，2 人团队、深水区（浏览器安全权限、跨 SaaS 集成、长期记忆准确性）执行风险高；④ 赛道拥挤且巨头（AI 浏览器、记忆层、工作空间 AI）逼近，护城河待验证；⑤ 浏览器扩展形态在企业侧面临安全合规与被平台原生能力吞并的风险。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
