# Asteroid

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：AI browser agents for enterprise automation（面向企业自动化的 AI 浏览器智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/asteroid
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人：David Mlčoch（CEO，爱丁堡大学 AI 背景，曾联合创立并任 Trident AI CTO，做自主 Agent；亦有机器人/航天背景）与 Joe Hewett（CTO，专注浏览器/计算机使用 Agent 大规模自动化；此前构建过每年拦截 $100M+ 欺诈的 AI 系统）。团队约 8 人，总部旧金山。
- **成立/批次**：2024（YC Winter 2025 / W25 批次）
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向企业后台（back-office）的托管式 AI 浏览器/计算机使用 Agent 平台。核心产品 Astro 让非技术人员在 2 分钟内通过描述工作流即可搭建多步 browser agent——系统自动生成 agent graph、prompt、工具，内置护栏（guardrails）、评测（evaluations）与人在环（human-in-the-loop，可经 Slack 触发人工介入）。开发者用一段代码片段经 API/SDK 调用 Agent；可监控实时会话、回看录像、追踪表现。近期扩展到给 Agent 分配完整桌面（desktop computer use），像人一样看屏幕操作，覆盖无 API 的遗留系统。官方描述其为『self-healing browser agents』，并提出三阶段优化路径：agentic（AI 驱动起步）→ scripted（学会后转确定性脚本）→ reverse-engineered API（可行时直连系统调用）。
- **商业模式**：B2B SaaS，用量计费（usage-based，按 agent-minutes 计量），官网起价约 $300/月；无集成费、无按席位授权，设免费档可搭建首个 Agent；另提供『托管交付』（managed delivery，效果保证/不达标退款）选项。宣传口径：某客户覆盖 1500+ 次生产运行的整月平台账单，低于被替代员工一周的人力成本。
- **竞争格局**：上游/同类：UiPath（NYSE:PATH，传统 RPA 巨头）；浏览器基础设施与开源框架 Browserbase、Stagehand、Browser Use；大厂通用 Agent OpenAI Operator/ChatGPT Agent、Anthropic Claude computer use、The Browser Company 的 Dia、Perplexity 的 Comet。Asteroid 的差异化定位在『最后一公里数据录入』——为跑在 90 年代/00 年代无 API 遗留软件上的传统行业提供带人工审核的可靠落库，强调受监管行业的企业级可靠性与护栏，而非通用消费级浏览。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed（Sacra 估算/汇总，非官方披露） | 约 $500,000 | 2025-04 | [链接](https://sacra.com/c/asteroid/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Moonset Health | 中 | [链接](https://asteroid.ai/) |
| Thyme Care | 中 | [链接](https://asteroid.ai/) |
| Vitable Health | 中 | [链接](https://asteroid.ai/) |
| InTouchNow | 中 | [链接](https://asteroid.ai/) |
| Delfa | 中 | [链接](https://asteroid.ai/) |
| Trifetch | 中 | [链接](https://asteroid.ai/) |
| Strala | 中 | [链接](https://asteroid.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Asteroid 的靶心是『无 API 的遗留系统 + 大量手工网页/桌面录入』这一最后一公里痛点，这在制造业极为普遍——供应商门户下单/对账、客户 EDI/采购门户填报、报关与合规平台录入、老旧 MES/ERP/WMS 只有网页或 C/S 界面而无接口。制造企业往往有一批『专职在几十个客户/供应商门户之间搬数据』的运营岗，正是 browser agent 可托管的高频重复劳动。其『agentic→scripted→reverse-engineered API』三阶段思路对制造尤有启发：先用 Agent 跑通易变的门户流程，稳定后固化为确定性脚本降本，最终能连 API 就连——这是一条比一次性上重型 RPA 更渐进、更能应对门户频繁改版（self-healing）的落地路径。带护栏+人在环的设计也契合制造业对质量与合规（如报关、质检数据、供应链单据）的低容错要求。
2. **国内对标厂商**：影刀 RPA（上海）——面向业务人员的低代码 RPA，正加 AI Agent 能力，最贴近『非技术人员搭浏览器自动化』定位、实在智能 TARS/实在 Agent（杭州）——RPA 起家、主打屏幕语义理解的 AI Agent，覆盖无 API 遗留系统操作、来也科技 UiBot/Laiye——RPA+对话式 AI，企业级后台自动化、智谱 AutoGLM / 字节 UI-TARS（豆包）——通用 GUI/浏览器 Agent 模型层，可视为底层能力对标而非产品形态对标
   > 国内最直接的反向情报索引是『RPA + AI Agent』这一路——影刀、实在智能、来也在做的正是 Asteroid 那套『把人在网页/客户端里的重复操作交给软件机器人，并逐步加语义理解与自愈』。差别在切入姿势：国内厂商多从确定性 RPA 起步、再向 Agent 化演进，客户以大中型企业流程外包/共享服务中心为主；Asteroid 反向从 LLM-Agent 起步、再固化为脚本，且用量计费+托管交付更轻。模型层（智谱 AutoGLM、字节 UI-TARS）则是国内在 GUI Agent 底层能力上的对标，可为『门户操作 Agent』提供国产替代底座。给制造客户做方案时，可用影刀/实在的成熟度打消『RPA 会不会不稳』的顾虑，同时用 Asteroid 的 self-healing 叙事说明为何要往 Agent 化升级。
3. **可迁移的干法 / 应进场景词典的词条**：浏览器Agent、计算机使用Agent、无API遗留系统自动化、后台运营自动化、人在环护栏、门户数据录入、自愈流程、用量计费SaaS
   > 可迁移干法有三条：①『最后一公里』定位法——不与大模型/通用 Agent 拼智能，专攻传统行业无 API、必须人工落库的窄缝，把『可靠地把数据写进老系统』当成卖点；②三段式降本路径——先 Agent 跑通易变流程、稳定后转确定性脚本、能连 API 就连，兼顾灵活与成本，可直接套到制造门户/单据场景；③护栏+人在环+录像回看+可评测的『企业级可靠性』组合拳，是在受监管/低容错行业卖 Agent 的通用信任框架。此外『非技术人员 2 分钟搭 Agent、开发者一段代码接入』的双人群产品结构，也是 vertical Agent 平台值得复制的分工模式。
4. **风险与存疑点**：①极窄且拥挤的赛道：上有 UiPath 等 RPA 巨头下沉加 AI、下有 Browserbase/Browser Use 等基础设施与开源框架、旁有 OpenAI Operator/Anthropic computer use 等大厂通用 Agent 随时可覆盖，Asteroid 的护城河主要靠垂直 know-how 与可靠性工程，易被挤压。②资金与规模单薄：迄今仅见约 $500K pre-seed（且为第三方估算、无官方披露），团队约 8 人，若融资节奏跟不上大厂免费能力扩张则续航承压。③方向收敛风险：产品从通用 browser workforce 明显向医疗垂直收缩，说明通用市场变现难、需靠单一高合规行业站稳；医疗又强监管、销售周期长，客户目前多为早期初创（logo 墙以小型健康公司为主），放量与留存待验证；门户频繁改版对 self-healing 稳定性也是持续考验。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Asteroid — Y Combinator 公司页（W25） | https://www.ycombinator.com/companies/asteroid |
| Launch YC: Asteroid — AI Builder for complex Browser Agents | https://www.ycombinator.com/launches/OzN-asteroid-ai-builder-for-complex-browser-agents |
| Sacra — David Mlcoch (Asteroid CEO) 访谈：browser automation 与 AI 的最后一公里 | https://sacra.com/research/david-mlcoch-asteroid-ai-agent-browser-automation/ |
| Sacra — Asteroid 公司资料与融资（含 pre-seed 估算） | https://sacra.com/c/asteroid/ |
| Asteroid 官网（首页含客户 logo 与定价） | https://asteroid.ai/ |
| Asteroid Agents 文档 — Introduction | https://docs.asteroid.ai/introduction |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
