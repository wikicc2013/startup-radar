# Lanesurf

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：AI freight brokerage for carrier sourcing（面向运力寻源的 AI 货运经纪）
- **官网/锚定**：https://www.ycombinator.com/companies/lanesurf
- **深研状态**：researched

## 公司画像
- **团队**：联合创始人 Pratham Bansal 与 Sarthak Singh Chauhan，均为 IIT Delhi（印度理工德里）工程背景；曾合作过 transformer/ML 研究、为 Fortune 500 供应链团队构建 AI 系统，并将一款六位数 ARR 的垂直 AI 生物科技产品卖给一家 NVIDIA 投资的湾区公司；创始人称家族有货运行业背景。团队规模约 4-8 人，YC 合伙人 Jon Xu。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向货运经纪（freight broker）/3PL 的语音 AI 运力寻源系统。AI 同时通过电话、邮件、短信并行联系大量承运商（carrier），推送货源信息、核验合规资质、依据燃油价格与市场行情实时议价，并锁定最优卡车；既接听入站来电也发起外呼。宣称把单票货源的覆盖时间从数小时压缩到约 10 分钟（媒体演示中为一票货并行拨打 96 家承运商 / 完成 48 通外呼 + 28 封邮件）。
- **商业模式**：B2B SaaS，卖给中型美国货运经纪与 3PL；与主流 TMS、load board、合规门户、CRM 集成（官网称 48 小时内 / 10 天内完成对接）。设有 $3,000/家 的转介绍佣金激励。
- **竞争格局**：货运经纪/运力撮合语音自动化赛道，对标 Happyrobot、Fleetworks、Vooma、Drumkit 等 AI 货运语音/自动化公司；更广义上与传统数字货运经纪（Convoy 系、Uber Freight）在‘自动化订舱’能力上竞争。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / Seed | 未披露（第三方数据库 Crunchbase/Tracxn 显示约 $500K，投资方含 Leo Capital、Transpose Platform Management、Y Combinator；与 YC/媒体口径提及的 General Catalyst、Naval Ravikant、Jawed Karim、Rajul Garg 等未在官方渠道对齐，故金额与完整名单以未披露计） | 2025 | [链接](https://www.crunchbase.com/organization/lanesurf) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Midwest Freight Partners（官网证言，疑为示例/匿名化名称） | 低 | [链接](https://www.lanesurf.com/) |
| Pacific Coast Freight（官网证言，疑为示例/匿名化名称） | 低 | [链接](https://www.lanesurf.com/) |
| Heartland Brokerage Group（官网证言，疑为示例/匿名化名称） | 低 | [链接](https://www.lanesurf.com/) |
| Summit Transport（官网证言，疑为示例/匿名化名称） | 低 | [链接](https://www.lanesurf.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业物流侧的‘找车-议价-订舱’环节高度依赖人工电话与经验议价，Lanesurf 证明：把重复的电话触达、合规核验、按行情议价交给语音 AI 并行执行，可把覆盖时间从小时级压到分钟级、并稳定多出每票约 $50 边际。制造企业的入厂/成品物流采购、备件应急调运可复用同一‘并行外呼+实时议价’范式，替代传统承运商询价的串行人工流程。
2. **国内对标厂商**：满帮集团（运力撮合/司机-货主匹配的超级平台，语音/智能调度）、福佑卡车（数字化整车货运经纪，算法定价与运力池）、运去哪（数字货代，跨境物流订舱与流程自动化）
   > 国内运力撮合已有满帮/福佑卡车的算法定价与运力池，但‘语音 AI 主动外呼并逐单议价’这一层仍以人工调度为主；Lanesurf 的差异点在于把 carrier sales rep 的电话销售动作整体自动化（‘一支 100 人的承运商销售队伍同时开工’），这是国内平台尚未大规模产品化的空白。
3. **可迁移的干法 / 应进场景词典的词条**：货运经纪、运力寻源/carrier sourcing、语音AI外呼与议价、并行多渠道触达（电话/邮件/短信）、承运商合规核验、TMS/load board 集成、订舱自动化、3PL
   > 1) 锁定‘高频、重复、可结构化’的电话议价场景切入；2) 语音 AI 深度对接客户既有 TMS/load board/合规门户，做到 10 天内上线降低采纳门槛；3) 以‘每单多赚 $50 边际 + 覆盖时间从小时到分钟’的硬指标做价值锚点；4) 用聚合匿名的 lane/定价数据形成数据飞轮，越多客户越准，逐步长成‘语音驱动的运力市场’。
4. **风险与存疑点**：1) 融资与投资方口径在官方与第三方间不一致，估值/资金实力存疑；2) 官网客户证言疑为示例名称，真实付费客户未具名披露，早期商业化验证证据弱；3) 语音 AI 在嘈杂通话、合规核验、异常处理上的可靠性直接决定信任，出错成本高；4) 赛道拥挤（Happyrobot/Fleetworks/Vooma 等），且大型数字货运经纪可自建，护城河待观察；5) 高度依赖对接客户 TMS/合规系统，集成与数据合规是落地瓶颈。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
