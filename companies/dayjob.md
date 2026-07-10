# Dayjob

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：AI scheduling for short-haul trucks（短途卡车的 AI 排程）
- **官网/锚定**：https://www.ycombinator.com/companies/dayjob
- **深研状态**：researched

## 公司画像
- **团队**：5 人团队，位于英国伦敦。联合创始人 George Postlethwaite（CEO，曾创办 e-waste 回收 ERP 公司 Gaea，Deliveroo 早期员工并主导其英国生鲜业务上线，曾在 Otta 负责销售）与 Fred Fooks（CTO，牛津大学工程科学，曾在 Deloitte、Capgemini 做 AI/数据科学）。两人于牛津相识，团队合计约 15 年 AI 驱动的供应链优化经验。2025 年 1 月从废弃物管理软件 pivot 到 Dayjob。
- **成立/批次**：2025
- **地点**：London, United Kingdom
- **产品**：面向短途卡车运输的自主 AI 排程 agent。接入企业现有 ERP/作业管理系统与车辆 GPS，约 60 秒生成整支车队的排程，并实时持续重优化——自动处理新增作业、司机变动与异常，无需推倒重来式迁移。首个落地场景是废弃物管理（roll-off 垃圾清运）公司的路线/作业调度。
- **商业模式**：B2B SaaS，卖给拥有多车多司机车队的运输/清运公司；官网未公开定价，走电话/预约演示的销售线索模式。截至 2026 年初 ARR 约 $496K–$653K（上线约 7 个月内达到 $653K）。排程是其第一个 agent，计划 2026 年内再推 3 个面向工业物流的运营 agent。
- **竞争格局**：与传统路线优化/TMS 软件（如 Routific、Onfleet、Samsara 路线模块及各类废管调度软件）竞争；差异化在于以 autonomous agent 形态直接替代人工排程员的每日排班动作、接入现有 ERP 不做 rip-and-replace。同属 YC 的工业物流/供应链 agent 亦是潜在同侪。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Allstone | 中 | [链接](https://www.getdayjob.ai/en-us) |
| Coastal Recycling | 中 | [链接](https://www.getdayjob.ai/en-us) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业的厂内/厂际短驳、成品城配、原辅料回收清运同样依赖人工排程员每天早上手工排班、10 点前计划就失效。Dayjob 的模式——接入现有 ERP、60 秒生成整队排程、实时处理异常——可直接映射到工厂物流调度、成品配送和逆向物流（回收/退货）场景，尤其适合车多、单量碎、时间窗严的城配与清运。
2. **国内对标厂商**：G7 易流（车队智能调度/AIoT）、满帮集团（干线运力撮合与调度）、唯捷城配（城配调度与运力管理）
   > 国内短途/城配调度已有 G7 易流（AIoT+车队调度）、满帮（运力撮合）、唯捷城配（城配运营+调度）等玩家，但多为平台/运力侧，Dayjob 定位在『替代货主/车队自有排程员的每日排班动作』这一更贴近作业层的 agent，国内对标偏空白，可作为工厂自有车队/第三方城配商的排程 copilot 参照。
3. **可迁移的干法 / 应进场景词典的词条**：短途运输排程、车队调度自动化、路线实时再优化、废弃物清运调度、ERP集成AI-agent、运输计划员替代
   > 可迁移打法：①锁定『排程员每天手工排班、计划很快失效』这类高频痛点场景切入；②不做推倒重来，先做现有 ERP/GPS 的旁挂 agent 快速见效（8%+ 效率、准时率+50%）；③以单一 agent（排程）跑通 ROI 再横向扩品类（工业物流多 agent）；④用可量化收益（新增作业量、增收金额、节省工时）做销售话术。
4. **风险与存疑点**：①刚从废管软件 pivot（2025.1）满一年出头，ARR 仅约 $50 万级、5 人小团队，规模与耐久度未验证；②官网案例客户（Allstone、Coastal Recycling）为 logo 展示、无独立可核实的第三方来源，置信度中；③融资信息未公开披露；④短途运输/废管调度赛道竞争者众，autonomous 排程的准确性与planner 信任度是落地关键；⑤『Dayjob』为通用词，存在同名产品（dayjob.io 承包商 AI 助手等），需注意消歧。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Dayjob: AI Scheduling for Short Haul Trucks \| Y Combinator | https://www.ycombinator.com/companies/dayjob |
| Dayjob 官网（废弃物管理排程） | https://www.getdayjob.ai/en-us |
| Dayjob — YC Company Profile \| Altss | https://altss.com/companies/yc/dayjob |
| Y Combinator — Dayjob is AI scheduling for waste trucks (LinkedIn) | https://www.linkedin.com/posts/y-combinator_dayjob-is-ai-scheduling-for-waste-trucks-activity-7453096249261592577-iYd2 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
