# Verbiflow

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Outbound sequencing infrastructure for startups（面向初创的外呼触达基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/verbiflow
- **深研状态**：researched（登记批次 B006，官方一手来源确认为 YC W25（2025 冬季批）。公司 2024 年成立，位于旧金山，团队约 2 人。官网与 YC 定位从早期『销售全流程一体化平台/People search』收敛为当前的『面向初创与增长团队的外呼触达（outbound sequencing）基础设施』。）

## 公司画像
- **团队**：两位联合创始人：Kashyab Ambarani（软件工程师背景，负责技术）与 Rishi Mahadevan（销售运营/BD 背景）。据 YC 介绍，团队有约 7 年做 B2B SaaS 集成与产品的经验，且亲自跑过增长/销售团队的外呼。团队规模约 2 人（来源：YC 目录、创始人 LinkedIn）。
- **成立/批次**：2024
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：Verbiflow 把『序列器（sequencer）』放在中心，围绕它包裹住线索来源（sourcing）、发送（sending）和共享收件箱（shared inbox），构成一个不间断的外呼闭环。核心概念是『play』——一条完整的外呼动作：先拉取目标客户与联系人名单，做资质判定与分层，再跨 Email 与 LinkedIn（及冷电话）编排多步序列，随后处理回复、跟进与 CRM 同步，全部在一处完成。目标是把原本散落在 5 个工具里的流程收进单一平台，避免链路卡壳。技术上自建了名为 growth-mcp 的 MCP，用于驱动真实外呼；并与 Asana、Monday、ClickUp 等工作流工具集成形成闭环。
- **商业模式**：面向初创公司与增长/销售团队的 B2B SaaS 工具（推测为按席位/用量订阅制，具体定价未在公开页披露）。定位为『替代拼装式外呼工具栈的一体化基础设施』。
- **竞争格局**：对标 Outreach、Salesloft、Apollo.io、Instantly、Smartlead、lemlist、Clay 等外呼/序列化与线索工具；差异点在于把 sourcing + sequencing + 共享收件箱 + CRM 同步收敛为单一闭环，并强调主动跟进（区别于被动的会议记录/助手类产品）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed（含 YC W25 标准投资） | 未披露 | 2025 | [链接](https://www.crunchbase.com/organization/verbiflow) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服而言，Verbiflow 这类『外呼序列化基础设施』的意义在于把 B2B 获客的『找人—触达—跟进—回收—入 CRM』整条链路自动化为可复用的 play。工业品销售天然是长周期、多联系人、跨渠道（邮件+LinkedIn+电话）的复杂外呼场景，正是这类工具的靶心：区域经销商开发、备件/耗材复购唤醒、展会名单的批量跟进、新产线客户的定向触达，都可以拆成标准化序列由系统自动推进，把销售代表从数据录入、名单整理、手动跟进（占其一天约 6.5 小时的杂务）中解放出来，专注于真正需要人判断的谈单环节。对制造企业客服/内销团队，其共享收件箱+自动跟进的模式也可迁移到售后线索的主动召回。但要注意：工业采购决策链长、强关系导向，纯自动化外呼的回复率与合规（尤其海外 LinkedIn/邮件反垃圾规则）需谨慎调校。
2. **国内对标厂商**：探迹（Tungee）——B2B 智能销售云，覆盖线索挖掘（探客）+ 触达 + SCRM，形态最接近『一体化外呼基础设施』、销售易 / 纷享销客——CRM 主线，含营销获客与自动化跟进模块，偏管理侧、阿里巴巴国际站 / 领英 领英销售导航（海外外贸场景的触达工具）——制造业外贸获客的现实替代路径、AiSDR / 各类『AI 外呼数字销售员』国内创业项目——对应 AI 驱动的序列化触达这一细分
   > 国内最贴近的是探迹这类『线索挖掘+触达+SCRM 一体化』产品，同样试图把散落工具收进一个闭环；差别在于国内主渠道是企业微信/电话/短信而非 Email+LinkedIn，且更强调本土数据源（工商/招投标）与微信生态的私域运营。销售易、纷享销客等是 CRM 底座上叠加自动化，管理色彩更重。对制造业外贸出海场景，Verbiflow 的 Email+LinkedIn 序列打法反而与国内外贸团队现用的领英+外贸邮件 SOP 高度同构，可直接对标学习其『play 化、序列化、闭环化』的方法论。
3. **可迁移的干法 / 应进场景词典的词条**：外呼序列化、线索挖掘与分层、多渠道触达闭环、共享收件箱、CRM 自动同步、MCP 驱动的销售自动化
   > 可迁移的核心干法是『把外呼动作产品化为可复用的 play』：不再让销售逐个手动跟进，而是把『拉名单→判资质→分层→跨渠道排序列→自动跟进→回收入库』沉淀为标准模板，一次设计、批量复用。制造企业可借此思路重构区域市场开发与备件复购唤醒——把老销售的隐性 SOP 显性化为系统里的序列，用共享收件箱统一收口回复，用 CRM 自动同步消除数据录入。其 growth-mcp 的做法也提示：可用 MCP/Agent 把 CRM、邮件、社媒等工具串成一条可编排的自动化外呼流水线。
4. **风险与存疑点**：①极早期、团队仅约 2 人，产品与批次定位在短期内多次收敛（从销售全流程平台/People search 到 outbound 基础设施），方向仍在验证，存活与打磨风险高。②赛道极度拥挤且有 Outreach、Salesloft、Apollo、Clay、Instantly 等强势在位者与大量同质创业者，护城河尚不清晰；自动化外呼还面临邮件反垃圾、LinkedIn 自动化封号与各地反骚扰合规压力。③融资信息稀薄（仅 Crunchbase 记录 Pre-Seed、金额未披露），无公开付费客户名单，牵引力（traction）无法验证，商业化尚待观察。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Verbiflow | Y Combinator 公司目录 | https://www.ycombinator.com/companies/verbiflow |
| Launch YC: Verbiflow - The Swiss Army Knife For Your Sales Team | https://www.ycombinator.com/launches/Mri-verbiflow-the-swiss-army-knife-for-your-sales-team |
| Verbiflow 官网 | https://verbiflow.com/ |
| Verbiflow - Crunchbase 公司与融资档案 | https://www.crunchbase.com/organization/verbiflow |
| Verbiflow Pre-Seed Round - Crunchbase | https://www.crunchbase.com/funding_round/verbiflow-pre-seed--392ba71b |
| Kashyab Ambarani - LinkedIn（联合创始人） | https://www.linkedin.com/in/kashyab-ambarani/ |
| Rishi Mahadevan - LinkedIn（联合创始人） | https://www.linkedin.com/in/rishi-mahadevan-625844109/ |
| Verbiflow - LinkedIn 公司主页 | https://www.linkedin.com/company/verbiflow |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
