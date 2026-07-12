# IncidentFox

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B002
- **一句话定位**：AI SRE agent that triages and fixes production incidents（分诊并修复生产事故的 AI SRE 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/brownie
- **深研状态**：researched（WebSearch 一手核实：真实 YC slug 为 brownie（仓库记 incidentfox，产品名 IncidentFox），YC Winter 2026（W26），旧金山，团队 2，2025 成立,创始人 Jimmy Wei(CEO,前 Meta FAIR/Roblox)、Long Yi(CTO,前 Roblox)。YC 给 $500K。开源(Apache 2.0)。分诊：留 aiinfra（AI SRE 生产事故分诊/自愈,AIOps）。）

## 公司画像
- **团队**：Jimmy Wei(CEO,前 Meta FAIR/Roblox)、Long Yi(CTO,前 Roblox)。团队约 2 人。
- **成立/批次**：2025
- **地点**：美国旧金山
- **产品**：分诊并修复生产事故的 AI SRE Agent：在 Slack(或 Teams/Google Chat)里自动调查生产事故,用多 Agent 编排、基于 RAPTOR 的 runbook RAG、跨 40+ 集成的三层告警关联;自动发现各团队所需并生成集成、内置 300+ 工具,可对每条告警自动响应、在 thread 内调查并贴根因摘要,或按需 @ 调用;上手不到一天。
- **商业模式**：SaaS(定价未披露)+自托管开源层(Apache 2.0)。
- **竞争格局**：AIOps/事故响应赛道:PagerDuty、incident.io、Sonarly/IncidentFox 同类。差异点在于多 Agent 编排+runbook RAG+40+ 集成+开源。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC | $500K | 2026 | [链接](https://www.ycombinator.com/companies/brownie) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 IT/OT 运维而言,IncidentFox 代表『AI SRE 在 IM 里分诊并修复生产事故』。制造企业 MES/产线/IoT 平台事故靠人在群里排查、翻 runbook。IncidentFox 用多 Agent+runbook RAG+跨系统告警关联自动调查贴根因。启示:制造企业 IT/OT 运维可迁移『AI SRE(IM 内多 Agent 事故调查+runbook RAG+跨系统关联)』把事故响应从人肉排查升级为 Agent 自动分诊,缩短 MTTR,开源可自托管保数据。
2. **国内对标厂商**：各类 AIOps/事故响应、擎创/云智慧、PagerDuty 类
   > 国内 AIOps 有擎创、云智慧。IncidentFox 差异在于多 Agent 编排+runbook RAG+40+ 集成+开源自托管。对国内制造企业 IT/OT 事故响应可对标。
3. **可迁移的干法 / 应进场景词典的词条**：AI SRE、事故分诊自愈、runbook RAG、多Agent编排、开源自托管、AI基础设施
   > 可迁移干法:IT/OT 运维用『AI SRE(IM 内多 Agent 事故调查+runbook RAG+跨系统关联)』缩短 MTTR。对制造企业 IT/OT 运维适用。
4. **风险与存疑点**：①AIOps 竞争(与 Sonarly 等同赛道);②自动改生产的信任;③早期、团队 2;④开源商业化。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| IncidentFox: AI SRE agent that triages, coordinates, and fixes production incidents | Y Combinator（W26,slug=brownie） | https://www.ycombinator.com/companies/brownie |
| IncidentFox - The AI SRE for Teams | https://www.incidentfox.ai/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
