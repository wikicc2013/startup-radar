# A1Base

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Phone/social infra for AI agents（面向 AI 智能体的电话/社交基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/a1base
- **深研状态**：researched（在营，进行中。YC W25 期间从「给 AI 智能体发电话号/邮箱/可信身份的 API 基础设施（A1Base）」转向消费级社交产品 A1Zap（面向校园/社群的 AI 应用社交分发层），A1Base API 仍在提供，两条线并行。）

## 公司画像
- **团队**：2 人创始团队。Pasha Rayan（CEO）此前联合创办 Forage（YC W19，大规模风投支持的招聘/教育实训平台，后被收购）；Pennie Li（亦作 Pennie Huang，CTO）为 Forage 早期工程/产品成员，曾任 Truffle CTO。两人此前在 Forage 深耕校园市场多年。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco Bay Area）
- **产品**：两条产品线：①A1Base——给 AI 智能体发放电话号码、邮箱和可信身份的 API/SDK（含 A1Mail、A1Verify 等模块，提供 Node.js SDK 经 npm 分发），让 Agent 能加入 WhatsApp 群、收发短信/邮件、读取群聊历史、与其他 Agent 交互，并保证免垃圾信息与身份可验证；②A1Zap——'AI 应用的社交网络层'，任何人可用它创建 AI 驱动的 app/聊天机器人/工具/Agent 并即时分享给朋友、群聊与校园社群，创作与分发一体化。已在 Harvard、UT Austin、Texas A&M、Oregon State、UMich、UNSW、UTS 等校园铺开，早期案例含 UT Austin 的『Rate My Rent』、Harvard 的群配对工具、多校园地图/活动/工具。
- **商业模式**：A1Base 为面向开发者的 API 按量/订阅计费（官网设 /pricing 页，但具体档位与价格未成功抓取，标记未披露）；A1Zap 为消费级/校园社交产品，变现路径尚未公开披露。整体处于 pre-seed 早期，尚无公开营收数据。
- **竞争格局**：AI 智能体通信/身份基础设施赛道：Twilio（及其 AI/Verify 产品线）、Vonage、Sinch 等 CPaaS 提供电话/短信/验证；LayerX、Persona、Clerk 等身份验证；以及各类为 Agent 提供邮箱/号码的新兴 API。A1Zap 侧则与消费级『AI app 生成+分发』产品（Poe、Character.AI、各类 no-code Agent 平台）及校园社交产品竞争。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 约 50 万美元（$500K） | 2025-03-12 | [链接](https://www.crunchbase.com/funding_round/a1base-pre-seed--ec1d37ed) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| UT Austin（『Rate My Rent』租房评分工具） | 中 | [链接](https://www.ycombinator.com/companies/a1zap-by-a1base) |
| Harvard（群配对/matchmaker 工具） | 中 | [链接](https://www.ycombinator.com/companies/a1zap-by-a1base) |
| 校园铺开名单：Texas A&M / Oregon State / UMich / UNSW / UTS 等 | 低 | [链接](https://www.ycombinator.com/companies/a1zap-by-a1base) |

## 转型有术判断
1. **对制造业客户意味着什么**：A1Base 的核心命题是『让 AI 智能体拥有可被人类系统信任的通信身份』——电话号、邮箱、可验证身份。对制造业而言，这正是把 Agent 从『内部对话框玩具』推向『能对外办事的数字员工』的关键卡点：当采购 Agent 要向供应商发询价邮件、催货短信，或排产 Agent 要在 WhatsApp/企业微信群里与外协厂协同时，对方凭什么相信这条消息不是垃圾/诈骗？A1Base 提供的可信身份与免垃圾通道，本质是给 Agent 发『工牌+分机号+对公邮箱』。制造企业若要让 Agent 承担对外沟通（供应商协同、物流跟单、客户交期确认），必须先解决『Agent 的对外身份与可送达通道』这一基础设施，否则再强的推理也困在内网。
2. **国内对标厂商**：阿里云通信 / 腾讯云通信（CPaaS：短信、语音、号码，可作为 Agent 对外通道底座，但缺『Agent 可信身份』这层语义）、容联云、玻森/环信等云通讯厂商（企业级消息/客服通道，正探索与 AI Agent 结合）、企业微信/钉钉开放平台（国内 Agent 对外沟通更可能走这两大 IM 生态的机器人/身份体系，而非独立电话号）
   > 国内没有与 A1Base『给 Agent 发电话号+邮箱+可信身份』完全对位的独立创业公司。原因是国内对外通信被微信/企业微信/钉钉三大生态高度收口：Agent 要对外办事，现实路径是接入企微/钉钉的机器人与身份体系，而非美国式的独立电话号/邮箱。因此国内对标更接近『云通信厂商（阿里云/腾讯云通信）+ IM 开放平台（企微/钉钉）』的组合。这也意味着 A1Base 模式在中国需换成『IM 生态内的 Agent 身份与免打扰通道』形态，直接照搬电话号方案水土不服。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 可信身份、对外通信通道、免垃圾/反诈信任层、Agent 即数字员工、创作即分发
   > 可迁移的干法有两条。其一是『给 Agent 配对外身份』：制造企业上马任何要对外沟通的 Agent（供应商催货、物流跟单、客户交期）前，先规划它的对外身份与送达通道——用企微/钉钉机器人身份、对公邮箱、可验证签名，让接收方能确认『这是某厂某系统的官方 Agent』，把信任前置为基础设施而非事后补丁。其二是 A1Zap 的『创作即分发』思路：把工具的生成与传播合为一体。对制造业内部数字化很有启发——与其让 IT 集中开发再推广，不如给一线工程师/班组长一个能自建小工具（点检表、异常上报、排产查询 Agent）并在班组群里即时分享的平台，让 AI 工具在真实工作群里自然扩散，绕开传统 IT 交付的漫长周期。
4. **风险与存疑点**：①产品定位摇摆：YC 期内即从 B 端 API 基础设施转向 C 端校园社交（A1Zap），两条线并行分散 2 人团队精力，商业模式与护城河都还未证明；②赛道底层被巨头收口——Agent 通信通道本质是 CPaaS，Twilio/阿里云/腾讯云等随时可补『Agent 身份』层，独立创业公司议价力弱；③极早期、资金单薄（pre-seed 约 50 万美元）、无公开营收，校园社交留存与变现均未验证，A1Zap 校园工具易成一次性爆款而难沉淀为持续网络。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| A1Base 官网——The API to give AI Agents a phone number, an email and a trusted identity | https://a1base.com/ |
| A1Zap by A1Base: The social network layer for AI apps | Y Combinator | https://www.ycombinator.com/companies/a1zap-by-a1base |
| Y Combinator——A1Base 公司页 | https://www.ycombinator.com/companies/a1base |
| Crunchbase——A1Base Pre-Seed 融资轮（2025-03-12，约 $500K） | https://www.crunchbase.com/funding_round/a1base-pre-seed--ec1d37ed |
| Crunchbase——A1Base 公司主页 | https://www.crunchbase.com/organization/a1base |
| PitchBook——A1Base 公司档案（投资人：Pioneer Fund、YC、FundersClub、Multimodal Ventures、TEN13） | https://pitchbook.com/profiles/company/770225-59 |
| UNSW Founders——UNSW Startup A1Base Accepted into Y Combinator W25 | https://unswfounders.com/newsletter/unsw-startup-a1base-accepted-into-y-combinator-w25 |
| Pasha Rayan LinkedIn（联合创始人 CEO） | https://www.linkedin.com/in/pasharayan/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
