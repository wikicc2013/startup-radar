# Dome

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B003
- **一句话定位**：APIs for prediction market data（预测市场数据 API）
- **官网/锚定**：https://www.ycombinator.com/companies/dome
- **深研状态**：researched（WebSearch 一手核实：YC Fall 2025（F25），创始人 Kurush Dubash、Kunal Roy(均前 Alchemy 创始工程师)。已被 Polymarket 收购(Demo Day 后约 4-5 月,估 $10-20M);lifecycle=acquired。属预测市场/金融数据 API 垂直,与制造相关性弱,如实标注。分诊：留 aiinfra（预测市场统一数据 API/数据基础设施）。）

## 公司画像
- **团队**：Kurush Dubash、Kunal Roy(均前 Alchemy 创始工程师)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：预测市场数据 API / 面向 Kalshi、Polymarket 等预测市场的统一 API：通过单一端点提供跨平台标准化数据流与交易能力,读取 Polymarket 链上 GraphQL 与 Kalshi 合规 REST,统一为一致 JSON;含 webhook/websocket 实时更新与历史订单簿快照供回测。
- **商业模式**：面向交易/分析方的预测市场统一数据 API(已被 Polymarket 收购)。
- **竞争格局**：预测市场数据赛道:各家预测市场自有 API。差异点在于跨平台统一标准化+实时+历史回测,已被 Polymarket 收购。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC(标准 deal) | $500K | 2025 | [链接](https://www.ycombinator.com/companies/dome) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业而言,Dome 相关性较弱(预测市场/金融数据垂直)。但其『把多个异构数据源统一成一致 API+实时+历史回测』的工程范式可借鉴:制造企业面对多套 ERP/MES/供应商系统异构数据时,可迁移『统一数据 API(标准化多源+实时推送+历史快照)』把分散系统的数据整合成一致接口供分析/Agent 使用。(公司本身属金融数据垂直,已被 Polymarket 收购)
2. **国内对标厂商**：各类数据聚合 API、金融数据服务、系统集成中间件
   > Dome 属预测市场数据垂直,国内直接对标少。其『多源统一 API+实时+回测』工程范式对制造企业异构系统数据整合可借鉴(间接)。
3. **可迁移的干法 / 应进场景词典的词条**：统一数据API、多源标准化、实时推送、历史回测、预测市场(垂直)、AI基础设施
   > 可迁移干法(间接):异构系统数据整合借鉴『统一数据 API(标准化多源+实时+历史快照)』把分散系统数据整合成一致接口。制造相关性弱,已标注。
4. **风险与存疑点**：①属金融数据垂直、制造相关性弱;②已被 Polymarket 收购(lifecycle=acquired);③作为独立产品不再演进;④仅工程范式可借鉴。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Dome: A unified API for prediction markets, like Kalshi and Polymarket | Y Combinator（F25） | https://www.ycombinator.com/companies/dome |
| Polymarket buys prediction market API startup Dome | The Block | https://www.theblock.co/post/390546/polymarket-buys-fresh-prediction-market-api-startup-dome-marking-second-official-acquisition |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
