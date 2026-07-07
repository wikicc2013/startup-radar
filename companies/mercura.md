# Mercura

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B006
- **一句话定位**：AI quote and order automation for distributors（面向经销商的 AI 报价与订单自动化）
- **官网/锚定**：https://www.ycombinator.com/companies/mercura
- **深研状态**：researched

## 公司画像
- **团队**：创始团队均具「行业+AI」双背景。Lukas Bock（CEO）出身四代经营的水暖/电气家族企业，曾任 Google/Google X AI 工程师、Allianz 数据科学家；Stefan Zheng（CPO）前 Bain 管理咨询顾问，MIT/哈佛商学院研究背景，曾服务 15+ 制造工厂运营提效；技术合伙人存在信息差异——YC 目录列 Hai Dang（前 Meta/Autodesk AI 研究员，多篇顶会一作论文），官网 about 页则列 Sean Sdahl（CTO，物理学背景、国际物理奥赛银牌）。团队约 14 人，成员来自 Google、Bosch、Mercedes-Benz、SAP、Bain 等。
- **成立/批次**：2024
- **地点**：德国慕尼黑（Munich, Germany）；服务器与数据托管于欧洲，GDPR 合规，DIN ISO/IEC 27001 & 27018 认证
- **产品**：面向经销商与制造商的 AI 报价与订单自动化 SaaS。核心工作流四步：①多格式客户询价intake（PDF/Excel/邮件等非结构化输入）②AI 抽取产品信息（品名、型号、制造商、料号、数量）③与经销商产品目录做匹配校验④自动把成型报价写入 ERP。主打把 RFQ 处理从「数天」压缩到「数分钟」。另有语音 AI 坐席产品，自动处理来电报价/下单。聚焦 HVAC（暖通）、电气、水暖建材分销场景。
- **商业模式**：B2B SaaS，卖给建材/工业分销商与制造商，深度嵌入其现有 ERP。自称成立即盈利（bootstrapped profitable）后才接受外部资本；对标 8 万亿美元全球分销市场。具体订阅定价未公开；官网有 referral 计划（首月费用 20% 返佣）。
- **竞争格局**：国际上与 CPQ（配置报价）赛道及 RFQ/quote 自动化玩家竞争；差异化在于垂直深耕建材分销 + 直接写回 ERP + 语音坐席。传统对手为 SAP CPQ、通用 CPQ 工具及分销商自建人工报价流程。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $2.1M+ | 2025-12-29 | [链接](https://www.startbase.com/news/ki-startup-mercura-sammelt-ueber-21-millionen-us-dollar-ein/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Bauder | 中 | [链接](https://www.startbase.com/news/ki-startup-mercura-sammelt-ueber-21-millionen-us-dollar-ein/) |
| Reisser AG | 中 | [链接](https://www.startbase.com/news/ki-startup-mercura-sammelt-ueber-21-millionen-us-dollar-ein/) |
| Siteco | 中 | [链接](https://www.startbase.com/news/ki-startup-mercura-sammelt-ueber-21-millionen-us-dollar-ein/) |
| BME Group（含 BAUKING、SHK Deutschland） | 中 | [链接](https://www.startbase.com/news/ki-startup-mercura-sammelt-ueber-21-millionen-us-dollar-ein/) |

## 转型有术判断
1. **对制造业客户意味着什么**：直击制造/分销企业最痛的「询价到报价」环节：销售/内勤把邮件、PDF、Excel 里的杂乱询价手工敲进 ERP，动辄数天且易错。Mercura 用 AI 抽取+目录匹配+ERP 回写，把周期压到分钟级，释放销售做主动获客。对国内工业品分销、机电建材经销、制造企业销售内勤是可直接映射的提效场景。
2. **国内对标厂商**：工业品分销报价/CPQ：震坤行、西域（工品汇）等 MRO 平台的报价与订单履约、国产 CPQ 与销售报价工具：销售易/纷享销客 CPQ 模块、数商云、商越（工业品采购）报价引擎、订单自动化/OCR 单据解析：合合信息（TextIn）、来也/实在智能 RPA 做的询价单-ERP 录入自动化、建材/机电分销 ERP 侧：用友/金蝶行业版 + 智能报价插件
   > 国内对标散落在三处：CPQ 报价引擎（销售易、数商云、商越）、单据 OCR+RPA 录入（合合 TextIn、实在智能）、以及 MRO 分销平台自建报价（震坤行、工品汇）。尚无一家像 Mercura 这样把「非结构化询价→目录匹配→ERP 回写」端到端垂直打包进建材机电分销，存在整合空位。
3. **可迁移的干法 / 应进场景词典的词条**：报价自动化、RFQ处理、非结构化单据解析、产品目录匹配、ERP自动录入、CPQ、工业分销、建材机电分销、语音AI坐席、订单自动化
   > 可迁移打法：①选一个 SKU 海量、询价高频、报价靠人工的垂直分销赛道（如国内机电/五金/暖通经销）②以「ERP 回写」为落点做深集成而非只做前端工具，形成数据与流程锁定③创始人用行业家族背景building trust、拿到首批标杆客户④bootstrapped 盈利跑通单位经济再融资，估值叙事挂靠万亿级分销大盘⑤增补语音坐席，把电话询价也纳入自动化。
4. **风险与存疑点**：①技术合伙人信息不一致（YC 列 Hai Dang，官网 about 列 CTO Sean Sdahl），可能存在早期团队变动/更名，需持续核实；②客户名单来自单一德媒融资报道、无客户官方背书，置信度中；③深度绑定各家异构 ERP，集成/交付成本高，规模化存疑；④CPQ 与通用大模型 agent 都在向该场景渗透，护城河依赖垂直数据与行业关系；⑤ARR 有「首年破 $2M ARR」的自述但无第三方独立核验。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Mercura 官网 | https://www.mercura.ai/ |
| Mercura About 页 | https://www.mercura.ai/about |
| Mercura 语音坐席产品页 | https://www.mercura.ai/product-pages/voice-assistant |
| Y Combinator 公司页 | https://www.ycombinator.com/companies/mercura |
| Launch YC: Quotes in minutes, not days | https://www.ycombinator.com/launches/Mun-mercura-quotes-in-minutes-not-days |
| Startbase：Mercura 融资超 210 万美元（种子轮） | https://www.startbase.com/news/ki-startup-mercura-sammelt-ueber-21-millionen-us-dollar-ein/ |
| Crunchbase 公司页 | https://www.crunchbase.com/organization/mercura |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
