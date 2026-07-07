# Rimba

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B005
- **一句话定位**：AI compliance and industrial data automation（AI 合规与工业数据自动化）
- **官网/锚定**：https://www.ycombinator.com/companies/rimba
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人。CEO Timothy Daniel：UC Berkeley Haas MBA'24，前矿业/能源供应链合规负责人与法务，主管监管报告与审计；CTO Akshay Sharma：前 Klarity(YC W18) AI 工程师，专注把非结构化文档转结构化数据，曾在 Goldman Sachs、Adobe 做高可靠系统。团队约 4 人。
- **成立/批次**：2024 年成立；YC Spring 2025 (X25) 批次，YC 合伙人 Tom Blomfield。
- **地点**：美国旧金山湾区 (San Francisco, CA)
- **产品**：面向能源与重工业的 AI 合规自动化平台。从碎片化系统（ERP、SCADA、数据历史库、SharePoint、邮件、PDF、Excel、IoT 传感器/设备遥测、时序仪表数据）抽取并监控运营数据，清洗为结构化、可直接出报告的数据，自动校验并生成合规报告。支持异常/缺失记录近实时检测告警、审计就绪工作流。覆盖美国 Renewable Fuel Standard(RFS)、Low Carbon Fuel Standard(LCFS)、ISCC 可持续认证、空气排放许可(Air Permits)、Prevailing Wage 等法规。宣称减少监控/清洗/报告时间约 80%，较传统方式降本约 50%，帮助规避罚款。
- **商业模式**：B2B SaaS 订阅，面向能源与工业运营/合规团队；含企业级支持与定制化实施。价格未公开，官网走 Request a Demo/联系销售。目标客户：可再生燃料生产商(RNG、生物柴油、SAF、乙醇)、原料贸易商、物流商、可再生能源开发商、EPC 服务商、油气/矿业/化工运营方。
- **竞争格局**：对标传统合规咨询与手工 Excel/人工报告流程；同类含合规文档自动化玩家（如其 CTO 前东家 Klarity 偏金融财务方向）。差异化在于深入工业运营数据栈（SCADA/数据历史库/IoT）而非纯文档，且垂直聚焦低碳燃料/能源合规程序(RFS/LCFS/ISCC)。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 累计/早期(含竞赛奖金) | 约 $1.4M | 2025 | [链接](https://poetsandquants.com/2026/03/14/2025-most-disruptive-mba-startups-rimba-u-c-berkeley-haas/) |
| 竞赛奖金明细 | UC LAUNCH 一等奖 $25,000 + AI Entrepreneurs at Berkeley / NFX Berkeley FAST 约 $150,000（含 $100K）+ Berkeley StEP $5,000，合计约 $175K | 2024-2025 | [链接](https://newsroom.haas.berkeley.edu/startup-spotlight-rimba-taps-ai-to-streamline-industrial-compliance/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Novilla | 中 | [链接](https://www.rimba.ai/) |
| Morrow Renewables | 中 | [链接](https://www.rimba.ai/) |
| 8 家美国 RNG（可再生天然气）工厂（未逐一具名） | 中 | [链接](https://poetsandquants.com/2026/03/14/2025-most-disruptive-mba-startups-rimba-u-c-berkeley-haas/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Rimba 打的是重工业里最痛却最不性感的环节——把散落在 SCADA、数据历史库、ERP、SharePoint、邮件、PDF/Excel、IoT 遥测里的运营数据，自动汇聚清洗成可直接出监管报告的结构化数据。对制造业启示：合规/EHS/能碳报告是天然的 AI Agent 切入点，数据源多、格式乱、周期性强、错报有真金白银的罚款，ROI 可量化（宣称省 80% 时间、降本 50%、规避罚款）。
2. **国内对标厂商**：工业数据集成/时序采集：宝信软件、中控技术(SCADA/数据历史库对标)、EHS/环境合规 SaaS：赛为安全、辰安科技、以及各类环保 EHS 数字化厂商、能碳管理/双碳报告：远景 EnOS、施耐德绿色能源管理、朗新科技、以及碳阻迹(Carbonstop)等碳核算平台
   > 国内直接对标者稀缺：工业数据集成有宝信/中控，EHS 合规有赛为/辰安，能碳有远景 EnOS/碳阻迹，但把三者串成端到端『采集→清洗→自动出合规报告』垂直闭环的玩家还少。国内驱动力更多来自双碳/ESG 披露与环保督察，而非美国 RFS/LCFS 这类燃料补贴信用市场。
3. **可迁移的干法 / 应进场景词典的词条**：工业合规自动化、低碳燃料/RNG 合规(RFS/LCFS/ISCC)、非结构化文档抽取(PDF/Excel→结构化)、SCADA/数据历史库/IoT 数据集成、审计就绪工作流、异常检测与合规风险预警、能碳与可持续报告自动生成
   > 1) 选一个数字/信用与罚款高度绑定的强监管垂直（美国是低碳燃料信用，国内可类比碳配额/绿证/环保排放）；2) 创始人自带合规域 know-how(前合规负责人)+AI 文档结构化能力(前 Klarity)双背景，先拿到真实客户再建产品；3) 从最脏的数据源（工业历史库+PDF）切入做深连接器，形成数据护城河；4) 以『可量化省时/规避罚款』做价值主张，绕开采购的技术审美直击 CFO/合规官痛点。
4. **风险与存疑点**：1) 极度依赖美国 RFS/LCFS/ISCC 等特定政策，政策/补贴变动会直接冲击需求（政策风险高）；2) 融资体量小（约 $1.4M，多为竞赛奖金），跑道有限，2025 年 20 客户/$1M 收入目标能否达成待验证；3) 客户数少（个位数 RNG 工厂+2 家具名），规模化与留存未证；4) 工业数据集成(SCADA/历史库)实施重、销售周期长，与轻量 SaaS 的快速扩张假设有张力；5) 暂无迹象更名/pivot 或关停，主体锚定清晰。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
