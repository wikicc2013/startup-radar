# Calltree AI

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：AI support team for customer service（面向客服的 AI 支持团队）
- **官网/锚定**：https://www.ycombinator.com/companies/calltree
- **深研状态**：researched（官方一手来源确认 Calltree 属 YC W25 批次（非 S25/X25）；登记 B006。官网 calltree.ai 现仅显示 slogan「Custom AI for your business」，信息稀薄；公司信息以 YC 目录为准。）

## 公司画像
- **团队**：联合创始人 2 人 + 团队约 14 人（YC 目录 Team Size 14，位于旧金山）。CEO Kun Qian（钱坤）此前在 AWS 任产品负责人、专注联络中心（contact center）解决方案，主导过多条营收达数千万美元 ARR 的产品线，服务过 Capital One、Intuit、Adobe 等大客户；联合创始人 Robertson Taylor 方向为多模态 AI 与音视频检索，曾任职 Marqo（企业 AI 应用）、AWS（异常检测机器学习，部署于 Fortune 100 与银行）及 Hopper 平台，Georgia Tech 计算机本科、有高性能计算研究背景。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向呼叫中心/联络中心的「企业级 AI 客服坐席」。核心两块：(1) AI 坐席能像人工坐席一样接听语音电话与在线聊天，且能调用企业内部工具——自建 CRM、内部仪表盘等（区别于只做对话的通用 AI 客服）；(2) AI 运营分析：分析海量坐席屏幕录制/通话录音，定位工作流中的低效环节并量化其时间与成本，例如识别出「坐席每通电话花 30 秒做手动取数与录入」，进而提出方案并测算改造前后的 opex 节省。价值主张锚定「每通电话缩短 1 秒即为大型呼叫中心每年省下数百万美元」，帮助运营 VP 建立改造的商业论证。
- **商业模式**：面向大型企业的 B2B SaaS，按 AI 坐席/座席产能或节省的运营成本变现。第三方数据（getlatka）称其以约 4 人团队做到约 44 万美元营收量级（未经一手确认，仅供参考）。客户为「多家企业客户，含知名上市零售品牌」（YC 描述，未具名）。
- **竞争格局**：语音/对话 AI 客服坐席赛道竞争激烈：Sierra、Decagon、Parloa、Cresta、PolyAI、Retell AI、Regal、Salesforce Agentforce 等；其差异化在于「接管真实语音坐席 + 打通企业内部工具 + 运营侧的坐席行为/流程挖掘量化」，在流程挖掘一侧还与 Celonis、UiPath（含 task/process mining）等有交集。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed/Seed（各库口径不一） | 500K 美元 | 2025（VCBacked 记为 2025-03） | [链接](https://www.crunchbase.com/organization/calltree-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业企业的营销·销售·客服意味着：制造企业（尤其做耐用消费品、设备、汽车零部件、家电的品牌）往往有庞大的售后/客服呼叫中心——报修、退换货、保修核验、订单与物流查询、经销商支持，这些高度重复、强流程、要查内部系统（ERP/CRM/工单/保修库）的话务，正是 Calltree 这类「能操作内部工具的 AI 坐席 + 流程量化」最能吃下的场景。它给制造业客服的启发有两层：一是不要只上一个会聊天的机器人，而要让 AI 直接打通 ERP/工单系统去真正闭环处理（查保修、开工单、查物流）；二是把「坐席屏幕录制→流程挖掘→量化每一步耗时与成本」当成客服数字化的前置动作——先用数据算清哪段流程最贵，再决定哪段交给 AI，这套「先量化后自动化」的方法论对制造业客服中心降本尤其可迁移。
2. **国内对标厂商**：循环智能（Recurrent AI）——会话智能/坐席实时辅助与质检，最接近 Calltree「分析通话找低效」一侧、追一科技（Zhuiyi）——智能客服/智能外呼/坐席辅助，对话式 AI 客服代表厂商、中关村科金·得助智能——大模型客服一体机+联络中心，覆盖语音与工具打通、容联云（Ronglian）——云联络中心 CPaaS + 智能客服，贴近呼叫中心基础设施层、智齿科技（Sobot）/晓多科技——在线客服与电商客服机器人（营销销售客服侧对标）
   > 国内没有一家与 Calltree 完全同构（AI 语音坐席 + 操作内部工具 + 坐席流程挖掘三合一）的公司，需拆成两侧看：对话/语音坐席一侧对标追一、得助智能、容联云、智齿；「分析通话录音与坐席行为找低效并量化成本」一侧最像循环智能的会话智能路线，再叠加望繁信/九科等流程挖掘厂商的方法论。Calltree 的独特点是把「运营量化（值多少钱）」直接前置到「自动化（AI 坐席接手）」之前，国内厂商多数把智能客服与流程挖掘分开卖，尚少有把两者拧成一条「先算账再托管」价值链的产品，这正是国内可借鉴的差异化。
3. **可迁移的干法 / 应进场景词典的词条**：呼叫中心/联络中心、AI语音坐席、内部工具打通(CRM/工单)、坐席流程挖掘、客服opex量化降本、售后与保修话务
   > 可迁移干法：把「先量化再自动化」做成标准动作——先对坐席屏幕录制/通话做流程挖掘，算清每段动作的耗时与年化成本，用『缩短 1 秒省数百万』这类可算账的话术给运营一号位建商业论证，再选最贵的重复流程交给能操作内部系统的 AI 坐席闭环处理，并用改造前后的 opex 差值验证收益。这套方法在制造业的售后客服、经销商支持、供应链客服（催货/查单/退换）乃至内部 IT/HR 服务台都能照搬。
4. **风险与存疑点**：①极早期、信息稀薄：官网仅一句 slogan，融资仅约 50 万美元、团队 14 人、客户未具名，商业化深度与留存未经一手验证，各库对轮次(pre-seed/seed)与营收口径不一；②赛道极度拥挤且巨头下场：Sierra、Decagon、Cresta、Salesforce Agentforce 等资金与渠道远强，AI 客服坐席同质化、价格战风险高；③「接管真实语音坐席 + 操作企业内部系统」对准确率、合规、数据安全与内部系统集成要求极高，一旦出错影响真实客户与营收，企业采购谨慎、销售周期长，落地与规模化存在不确定性。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Calltree — YC 官方公司页（W25） | https://www.ycombinator.com/companies/calltree |
| Jobs at Calltree (W25) — Work at a Startup | https://www.workatastartup.com/companies/calltree |
| AI Operations Analyst 岗位（含产品/客户描述） | https://www.ycombinator.com/companies/calltree/jobs/qNST1yz-ai-operations-analyst |
| Calltree AI — Crunchbase（融资/投资人，付费墙） | https://www.crunchbase.com/organization/calltree-ai |
| Calltree AI — Tracxn 融资与投资人 | https://tracxn.com/d/companies/calltree-ai/__xs4CZ2JkC34epbWM4uWOcrLqTtq6j9s8lGdFlA1C3Pc/funding-and-investors |
| Calltree AI — VCBacked（Pre-Seed, 2025-03） | https://www.vcbacked.co/company/calltree-ai |
| How Calltree hit revenue with a small team — GetLatka | https://getlatka.com/companies/calltree.ai |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
