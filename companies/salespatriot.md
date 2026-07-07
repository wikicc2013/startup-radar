# SalesPatriot

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B006
- **一句话定位**：Operational AI for distributors and OEMs（面向经销商与 OEM 的运营 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/salespatriot
- **深研状态**：researched

## 公司画像
- **团队**：三位工程师联合创办（2024）：Nelson Ray（帮助制造商赢得美国国防部 RFQ 招标，全栈与销售背景）；Ben Rhodes-Kropf（联合创始人兼 CTO，9 岁开始编程，曾在 MIT Han Lab 研究 LLM 量化技术，与 DARPA 合作合成数据研究，此前创办 Trace）；Maciej Szymczyk（波兰裔，IB 满分 45/45，UC Berkeley 全奖 EECS/商业/数学，曾在 Human Brain Project 做 ML 研究、在 InPost 做数据与 AI 算法）。团队约 15 人。
- **成立/批次**：2024（YC Winter 2025 / W25 批次）
- **地点**：美国旧金山（San Francisco）；另在波兰华沙设 R&D 中心「SalesPatriot House」扩充欧洲工程产能
- **产品**：面向经销商（distributors）与 OEM 的 AI 原生运营操作系统。把分散在 ERP、CRM、邮件、电子表格、政府采购门户（如国防部招标门户）、供应商门户里的碎片化供应链数据聚合成统一、可搜索、可执行的工作流，覆盖询价（RFQ）、报价、采购（procurement）、订单/PO 管理；为高管提供供应商、客户与瓶颈的实时可见性、毛利分析与赢单率追踪。号称让供应商报价/处理订单快 7 倍。采用嵌入式交付：派工程师驻场（Forward Deployed Engineer）为客户定制配置 AI 工作流。核心叙事聚焦国防、航空航天与工业供应链的近自主化运营。
- **商业模式**：企业级 SaaS + 嵌入式专业服务（前置部署工程师驻场定制）。目标客户为报价密集、订单量大的国防/航空航天零部件经销商与 OEM。
- **竞争格局**：对标老旧、碎片化的采购/报价系统与传统 ERP/手工流程；定位是用 AI 原生工作流替代这些「自家软件栈」（官网口号：你不是输给更强的竞争对手，而是输给自己的软件栈）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $5M（累计融资约 $6.3M） | 2025-10-28 | [链接](https://www.vestbee.com/insights/articles/sales-patriot-raises-5-m) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Jamaica Bearings Group | 中 | [链接](https://piraiee.com/blog/salespatriot-joins-polands-elite-yc-alumni) |
| AllClear Aerospace | 中 | [链接](https://piraiee.com/blog/salespatriot-joins-polands-elite-yc-alumni) |
| STATZ Corporation | 中 | [链接](https://piraiee.com/blog/salespatriot-joins-polands-elite-yc-alumni) |
| Echelon Supply & Service（官网案例：投标量提升 283%） | 中 | [链接](https://salespatriot.com/) |
| FDH（官网案例） | 中 | [链接](https://salespatriot.com/) |
| Maven Engineering Corporation（官网战略合作） | 低 | [链接](https://salespatriot.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：SalesPatriot 打的是「工业/国防零部件分销与 OEM 的报价—采购—订单运营」这个高频、重人力、数据高度碎片化的中后台环节。它的价值不在于做一个更漂亮的 ERP，而在于用 AI 原生 agent 把散落在 ERP/邮件/表格/门户里的数据抽取、结构化、串成可执行工作流，把「读招标—找货源—比价—报价—下 PO」这条链条从人工搬运变成近自主运行。对制造业中后台数字化的启发：AI 落地的最佳切入点往往是这类「非核心却极耗人力、且数据本就存在只是不流动」的运营环节。
2. **国内对标厂商**：工业品分销数字化 / MRO 电商：震坤行工业超市（工业用品一站式供应链，报价—寻源—采购数字化）、国联股份（多多电商，工业品 B2B 撮合与供应链交易平台）、上海钢联 / 我的钢铁网（大宗工业品行情与供应链数据）、OEM 报价与订单协同：鼎捷、金蝶/用友的制造 ERP + 报价（CPQ）模块；行业内的 SRM 供应商协同平台（如企企通、甄云 SRM）
   > 国内工业分销/OEM 运营数字化已有震坤行、国联股份等平台型玩家把「交易」搬到线上，但它们偏交易撮合与电商，而 SalesPatriot 偏「企业内部运营工作流的 AI 自动化」。国内 SRM（企企通、甄云）与制造 ERP（鼎捷、金蝶、用友）的报价/采购模块是最直接对标，但普遍仍是「表单驱动」而非「agent 驱动」，SalesPatriot 的 AI 原生 + FDE 驻场模式在国内尚属空白，可迁移空间大。
3. **可迁移的干法 / 应进场景词典的词条**：工业分销运营AI、RFQ自动报价、采购与PO自动化、国防航空航天供应链、碎片化数据聚合、供应商协同、前置部署工程师(FDE)、报价提速7倍、赢单率与毛利分析
   > 1) 锁定一个报价/采购密集、数据碎片化但订单额大的垂直（如国内军工配套、航空航天零部件、大型装备 MRO 采购）；2) 用 AI 做数据聚合层，先把 ERP+邮件+表格+门户的数据打通并可搜索，快速证明「可见性」价值；3) 用 FDE 驻场模式深度绑定头部客户，把行业 know-how 沉淀成可复用 agent；4) 以「报价提速 N 倍 / 投标量提升 X%」这类硬指标做增长叙事。
4. **风险与存疑点**：1) 国防/航空航天供应链行业强合规、强准入（美国 ITAR/DFARS），此模式跨境迁移到中国需完全本土化数据与合规体系，不可照搬；2) 嵌入式 FDE 驻场模式重、毛利与可复制性存疑，规模化是关键考验；3) 客户具名度参差——Jamaica Bearings/AllClear/STATZ 来自二手媒体（中置信度），官网案例（Echelon 283%、FDH、Maven）为公司自述，均未见客户方独立背书；4) 「$200M Pentagon 合同」等数字为媒体转述公司口径，未见一手来源，引用需谨慎；5) 公司成立仅 2024 年、种子轮阶段，产品与留存尚未经长期验证。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
