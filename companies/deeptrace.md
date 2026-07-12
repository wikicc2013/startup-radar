# Deeptrace

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B003
- **一句话定位**：AI SRE for production alerts（面向生产告警的 AI SRE）
- **官网/锚定**：https://www.ycombinator.com/companies/deeptrace
- **深研状态**：researched（WebSearch 一手核实：YC Fall 2025（F25），创始人 Srinath Somasundaram、Andy Lee(曾在 Tesla 做 Optimus 可视化/仿真、SpaceX 做 Starship/Falcon/Dragon 构建与飞行可靠性)。已融约 $2.1M。客户报 on-call 时间降 50%。分诊：留 aiinfra（面向生产告警的 AI SRE/on-call Agent）。）

## 公司画像
- **团队**：Srinath Somasundaram、Andy Lee(前 Tesla Optimus/SpaceX)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：面向生产告警的 AI SRE / on-call AI Agent：端到端调查并解决生产告警——对遥测、可观测数据、代码推理,自动调查每条告警、在 Slack 或 Web 给出带证据的清晰根因摘要;建立日志/追踪/指标与代码库的内部映射,并用每次调查的上下文生成有针对性的修复 PR;Slack 优先监控,自动跨日志/指标/代码调查并回贴根因。
- **商业模式**：面向工程团队的 AI SRE/on-call SaaS,定价未披露。
- **竞争格局**：AIOps/on-call 赛道:Sonarly、IncidentFox、Deeptrace 同赛道,PagerDuty。差异点在于日志/追踪/指标/代码全映射+带证据根因+针对性修复 PR。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子 | 约 $2.1M | 2025 | [链接](https://www.ycombinator.com/companies/deeptrace) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 快速成长的初创公司(未具名,报 on-call 时间降 50%) | 中 | [链接](https://www.ycombinator.com/companies/deeptrace) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 IT/OT 运维而言,Deeptrace 代表『AI SRE 端到端调查生产告警+带证据根因+修复 PR』。制造企业 MES/产线/IoT 告警排查靠人翻日志。Deeptrace 对遥测/可观测/代码推理、自动给带证据根因、生成修复 PR。启示:制造企业 IT/OT 运维可迁移『AI SRE(全映射日志/指标/代码+带证据根因+针对性修复 PR)』把生产告警调查从人肉升级为 Agent 端到端,把 on-call 时间降约一半。
2. **国内对标厂商**：各类 AIOps/on-call、擎创/云智慧、PagerDuty 类
   > 国内 AIOps 有擎创、云智慧。Deeptrace 差异在于日志/追踪/指标/代码全映射+带证据根因+针对性修复 PR。对国内制造企业 IT/OT 运维可对标(与 Sonarly/IncidentFox 同赛道)。
3. **可迁移的干法 / 应进场景词典的词条**：AI SRE、生产告警调查、带证据根因、修复PR、on-call减半、AI基础设施
   > 可迁移干法:IT/OT 运维用『AI SRE(全映射日志/指标/代码+带证据根因+修复 PR)』把告警调查升级为 Agent 端到端,on-call 降半。对制造企业适用。
4. **风险与存疑点**：①AIOps 竞争(与 Sonarly/IncidentFox 同赛道);②自动改生产的信任;③早期;④与监控栈集成。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Deeptrace: AI agents for on-call | Y Combinator（F25） | https://www.ycombinator.com/companies/deeptrace |
| Launch YC: Deeptrace - AI agents for on-call | https://www.ycombinator.com/launches/Oob-deeptrace-ai-agents-for-on-call |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
