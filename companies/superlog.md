# Superlog

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B001
- **一句话定位**：Observability that installs itself and fixes the bugs it finds（自我安装并修复所发现 bug 的可观测性工具）
- **官网/锚定**：https://www.ycombinator.com/companies/superlog
- **深研状态**：researched（WebSearch 一手核实：YC Spring 2026（P26），创始人 Nicolò Magnante（CEO，前 BCG、数学奥赛）、Arseniy Shishaev（CTO，前 Datadog 多年）。分诊：从 aigov 修正为『AI 基础设施（自愈可观测性/研发效能）』。）

## 公司画像
- **团队**：Nicolò Magnante（CEO，前 BCG）、Arseniy Shishaev（CTO，前 Datadog）。
- **成立/批次**：2026
- **地点**：美国
- **产品**：让软件自愈的可观测性：向导扫描代码库、自动装好 OpenTelemetry 埋点并每日更新；出问题时把错误归为单一事件、结合全上下文(日志/追踪/最近部署/历史 Slack)调查、在 Slack 发一个可合并的 PR；遥测厂商中立(可带走)。
- **商业模式**：面向工程团队的可观测性 SaaS，定价未披露。
- **竞争格局**：可观测性赛道：Datadog、sazabi（同库）、Sentry。差异点在于自装埋点+自愈(发可合并 PR)+厂商中立。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC P26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/superlog) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业数字化研发而言，Superlog 代表『自装埋点+自愈的可观测性』。制造企业数字化系统的监控埋点靠人工配、出问题靠人排查。Superlog 自动装埋点、出问题自动调查并发修复 PR。启示：制造企业数字化研发/IT 可迁移『自愈可观测性(自装埋点+自动排查+发修复PR)』降低监控运维负担、加速故障修复。
2. **国内对标厂商**：观测云/云智慧——可观测、博睿数据——APM、各类监控
   > 国内可观测有观测云、博睿。Superlog 差异在于自装埋点+自愈(发可合并PR)+厂商中立。对国内制造企业数字化系统可观测可迁移。
3. **可迁移的干法 / 应进场景词典的词条**：可观测性、自装埋点、自愈修复、OpenTelemetry、故障排查、研发效能
   > 可迁移干法：数字化系统监控用『自愈可观测性(自装埋点+自动排查+发修复PR)』降运维负担、加速修复。对制造企业数字化研发/IT 适用。
4. **风险与存疑点**：①早期；②Datadog 等在场；③自愈 PR 的可靠性；④分诊从 aigov 改 aiinfra，已标注。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Superlog: Make software self-healing | Y Combinator（P26） | https://www.ycombinator.com/companies/superlog |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
