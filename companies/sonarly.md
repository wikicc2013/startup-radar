# Sonarly

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B002
- **一句话定位**：AI engineer to triage and fix production alerts（分诊并修复生产告警的 AI 工程师）
- **官网/锚定**：https://www.ycombinator.com/companies/sonarly
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2026（W26），创始人 Dimittri、Alexandre(法国,均连续创业者、曾各把产品做到 10 万+用户后退学)。分诊：留 aiinfra（面向生产环境的 AI 工程师/AIOps 自愈)。）

## 公司画像
- **团队**：Dimittri、Alexandre(法国连续创业者,前作各 10 万+用户)。
- **成立/批次**：2026
- **地点**：美国/法国
- **产品**：让软件自愈 / 面向生产的 AI 工程师：连接 Sentry、Datadog 等监控栈,对每条告警先做分诊——去噪去重、调查日志/追踪/指标/代码建立生产系统活地图、定位根因,再给出可直接合并的修复 PR 或告警规则更新建议;一次坏部署一天可产 180 条告警,Sonarly 收敛到约 50 个唯一问题、再按严重度筛到约 5 个值得处理。
- **商业模式**：面向工程团队的生产告警分诊/自愈 SaaS,定价未披露。
- **竞争格局**：AIOps/告警分诊赛道:各类 incident response、Sentry/Datadog 自带。差异点在于自主分诊+根因定位+直接开修复 PR(自愈)。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/sonarly) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 IT/OT 运维而言,Sonarly 代表『生产告警自主分诊+自愈(AI on-call)』。制造企业的 MES/产线软件/IoT 平台告警噪声大、on-call 疲于奔命。Sonarly 去噪去重、定位根因、直接开修复 PR。启示:制造企业 IT/产线软件运维可迁移『告警分诊+自愈 Agent(去噪+根因+修复 PR)』把海量告警收敛到少数真问题并自动修,减轻 on-call 负担、缩短故障恢复。
2. **国内对标厂商**：各类 AIOps/监控、阿里云 ARMS/听云、擎创/云智慧
   > 国内 AIOps 有擎创、云智慧、阿里云 ARMS。Sonarly 差异在于自主分诊+根因+直接开修复 PR(自愈)。对国内制造企业 IT/产线运维可对标。
3. **可迁移的干法 / 应进场景词典的词条**：AIOps自愈、告警分诊去噪、根因定位、修复PR、on-call减负、AI基础设施
   > 可迁移干法:IT/产线软件运维用『告警分诊+自愈 Agent(去噪+根因+修复 PR)』把海量告警收敛并自动修。对制造企业 IT/OT 运维适用。
4. **风险与存疑点**：①AIOps 竞争(擎创/云智慧/监控自带);②生产环境自动改代码的信任;③早期;④与现有监控栈集成。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Sonarly: Makes software self-healing | Y Combinator（W26） | https://www.ycombinator.com/companies/sonarly |
| Launch HN: Sonarly (YC W26) – AI agent to triage and fix your production alerts | https://news.ycombinator.com/item?id=47049776 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
