# Rebolt

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B006
- **一句话定位**：AI software factory for operations（面向运营的 AI 软件工厂）
- **官网/锚定**：https://www.ycombinator.com/companies/rebolt
- **深研状态**：researched

## 公司画像
- **团队**：3 人（YC 页面口径）。联合创始人 Celia Manzano（前 Salesforce 云架构师，主导 15 万–300 万美元关键客户技术销售；曾任 Apryse 解决方案工程师；UPM Racing 开发扭矩矢量 ECU；UPM 航空工程学士）与 Javier Sanchez（Stack AI YC W23 创始工程师，助其做到 200 万美元 ARR；前 Ubuntu/Canonical 软件工程师；UPM Racing 负责软件团队与 LiDAR 感知系统；UPM 计算机与电信工程双学士）。
- **成立/批次**：2025（YC 官方页口径；部分聚合站如 Tracxn 记为 2024，存在出入）
- **地点**：美国加州旧金山（早期起源于西班牙马德里，创始团队均出自 UPM 马德里理工）
- **产品**：自我定位为「软件工厂」，为企业生成量身定制的 AI Operative System（AI 运营系统），运行在企业自有的 AI-Twin 之上。核心是让技术与非技术员工通过对话在数分钟内构建内部应用与 AI Agent，替代脆弱的电子表格与一刀切 SaaS。当前口号 'Deliver custom apps and agents 10x faster'。核心组件 Holocron 被称为「公司的 AI 大脑」，跨 ERP/CRM/表格统一碎片化数据。内置 AI（无需自带 API key）、数据库、文件存储、cron 定时任务、审计日志、staging/production 环境、基于 Azure groups 与 SCIM 的角色权限。集成 OneDrive、SharePoint、Salesforce、Teams、Slack、Oracle、SAP、Databricks、Snowflake、AWS、GCP、Azure 等。早期切入点为餐饮库存管理（自动化供应商沟通、替代 Google Sheets/电话/邮件）。
- **商业模式**：面向企业的自助+试点模式：官网提供 'Start for free' 免费起步与 Pilot 试点入口；定位企业级（区别于消费级 vibe-coding 原型工具），面向 CIO 与企业内「AI champion」获客。具体定价与合同条款未公开披露。
- **竞争格局**：内部工具/低代码搭建（Retool、Airtable、Microsoft Power Platform）、企业 AI 应用平台（Stack AI——联创前东家、Glean、Sierra）、AI 编码/应用生成（Lovable、v0、Replit Agent）。Rebolt 强调企业级治理（权限、审计、staging/prod）以区隔于消费级原型工具。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed / YC W25 | 未确认（聚合站口径互相冲突：Tracxn 记 50 万美元、StartupHub 记 400 万美元，均无一手来源；YC 标准投资通常为可转换票据形式，官方未披露具体金额） | 2025-02-27（Tracxn 记录的最近一轮日期，未经一手核实） | [链接](https://tracxn.com/d/companies/rebolt/__xKCdok7aKe2Bg_f3mSwpsKJnE3_2i0-YXBdrwm7w4KU) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Burger King 母公司（Restaurant Brands International，媒体未点名具体主体） | 低 | [链接](https://techcrunch.com/2025/03/13/10-startups-to-watch-from-y-combinators-w25-demo-day/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Rebolt 官网明确把制造业列为首要场景，主打「自动化报价、图纸摄取（drawing ingestion）与生产排程」三件事——恰是离散制造中报价工程师、工艺与计划岗位的高频重复劳动。其价值主张对制造业的意义在于：把散落在 ERP/CRM/Excel 里的碎片数据用一个 AI 大脑（Holocron）统一，然后让业务人员对话式生成专属内部应用，而不必等 IT 排期。对制造企业而言这是「业务自建 + AI 兜底」路线的样本：非技术的车间与销售人员可自造工具，IT 只做治理（权限、审计、staging/prod）。
2. **国内对标厂商**：低代码/内部工具搭建：阿里宜搭、腾讯微搭、明道云、简道云、氚云、企业 AI 应用/Agent 平台：字节扣子（Coze）、腾讯元器、百度千帆 AppBuilder、「软件工厂」/AI 生成应用：钉钉 AI 助理搭建、飞书多维表格+AI，以及面向企业的 aPaaS 厂商
   > 国内最接近的组合是「低代码平台（宜搭/简道云/明道云）+ 大模型 Agent 层（扣子/千帆）」，但多为两层分离；Rebolt 的差异是把「数据统一大脑 + 对话生成应用 + 企业级治理」打包成一个软件工厂。国内制造业落地更常见的是 aPaaS + 大模型双厂商拼装，尚缺一个原生把三者合一并强调审计/环境隔离的产品，这正是可对标的空位。
3. **可迁移的干法 / 应进场景词典的词条**：AI 内部工具生成、对话式建应用、企业 AI 运营系统、数据统一/AI 大脑(Holocron)、制造业报价与生产排程、餐饮库存与供应商自动化、低代码替代/去 SaaS 化、企业级权限与审计治理
   > 可迁移打法：①从一个具体高痛点场景切入（Rebolt 用餐饮库存，制造业可用报价或图纸录入）验证 ROI，再横向扩到排程/质量/物流；②以「统一数据大脑」为地基，先把 ERP/CRM/表格接进来再谈 Agent，避免上来就做通用平台；③把治理（权限、审计、环境隔离）作为区别于消费级工具的护城河，直接对话 CIO 而非只讨好一线；④让业务人员自建、IT 做护栏的「push right」分工，降低 IT 排期瓶颈。
4. **风险与存疑点**：①主体信息有出入：起源地（马德里 vs 旧金山）、成立年份（2024 vs 2025）、融资额（50 万 vs 400 万美元）多源冲突，一手来源缺失，尽调需以官方/SEC/新闻稿复核。②早期从餐饮库存 pivot 到通用『企业 AI 运营系统/软件工厂』，定位仍在漂移，制造业能力多为官网宣称、暂无公开案例佐证。③唯一具名客户（Burger King 母公司）仅为『定价洽谈中』，非签约，置信度低。④团队仅 3 人、种子早期，企业级交付与制造业 domain 深度存疑；与 Stack AI、低代码大厂、AI 编码工具正面竞争，差异化护城河待验证。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
