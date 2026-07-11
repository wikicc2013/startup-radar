# Woz

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Claude Code plugin for cheaper coding（让编码更省钱的 Claude Code 插件）
- **官网/锚定**：https://www.ycombinator.com/companies/woz
- **深研状态**：researched（在营。YC W25。公司实体 With Woz, Inc.，旗舰产品 WOZCODE（Claude Code 官方生态插件，降低 token 消耗与成本约 25-55%）。注意品牌下有两条叙事：面向开发者的 WOZCODE 插件（github-radar 交叉命中，195 stars），以及 2025-10 融资稿主打的『企业级 AI 应用工厂/anti-vibe coding』（AI 造 app + 人工质检兜底）。分诊锚定的『省钱 Claude Code 插件』即 WOZCODE。）

## 公司画像
- **团队**：联合创始人 Ben Collins（CEO）与 Brad Eckert（CTO）均为 MIT 工程师，相识 13 年、MIT 同窗；Brad Eckert 曾创办 Cairns Health（YC S17）、MIT EECS 毕业、25+ 专利联合发明人。团队约 8 人。
- **成立/批次**：2024
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：WOZCODE 是 Claude Code 的插件，用一组更高效的自定义工具替换默认文件处理/搜索/编辑工具，压缩调用次数与上下文占用，从而降低 token 消耗与会话成本（官方称 25-55% 更便宜、多数任务快 30-40%、数据库任务最高快 10 倍、Terminal Bench 2.0 声称 68-70% vs Claude Code 58%）。两条命令安装、复用用户已有 Claude 订阅，兼容 Claude Code / VS Code / Cursor / Conductor。提供 woz:code（编码/编辑/搜索/SQL）与 woz:explore（haiku 模型只读代码库分析）两个 agent。此外公司在融资叙事中定位为『AI 应用工厂』：AI 按设定的任务/流程/护栏造 app，卡壳时人工介入，每个 app 由人类工程专家质检（anti-vibe coding）。
- **商业模式**：插件采用免费+订阅：Free $0/月（省钱额度上限 $100/月，企业邮箱 $200/月）；Pro $20/周（无上限）；Enterprise 定制（SSO+专属支持）。复用用户自有 Claude 订阅，本身不转售模型额度，靠优化省下的成本变现订阅。
- **竞争格局**：上游即被优化对象 Anthropic Claude Code 本身；同类『降本/上下文优化』方向包括各类 Claude Code/Cursor 效率插件、上下文压缩与检索工具；『AI 造 app + 人工兜底』叙事则与 Lovable、Replit Agent、v0、以及各类外包式 AI 开发工作室竞争。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $6,000,000 | 2025-10-15 | [链接](https://www.prnewswire.com/news-releases/woz-raises-6m-to-build-enterprise-grade-ai-apps-that-businesses-can-trust-302584904.html) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| SimpliSafe | 中 | [链接](https://www.wozcode.com/) |
| Attention Labs（David Kim, Cofounder & CEO 具名背书） | 中 | [链接](https://www.wozcode.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Woz 的内核不是又一个编程助手，而是『在既有 AI 工具之上再压一层效率/成本优化层』——用更聪明的工具编排把 9 次调用压成 2 次，直接把 token 账单砍半。对制造业的启示有二：其一，企业大规模用 Claude/GPT 类 agent 后，真正的痛点会从『能不能用』转向『用得起吗』，谁能在模型和业务之间插一层可量化省钱的中间件，谁就抓住了续费理由——制造企业自建 AI 中台时应把『调用编排与成本可观测』当成一等公民而非事后优化。其二，融资叙事里的 anti-vibe coding（AI 造、人工按护栏质检兜底）正是制造业最熟悉的逻辑：不给产线全自动放权，而是设定工艺参数+关键工序人工卡点+成品质检。把『AI 干、人在最晚时刻按标准兜底』这套 HITP 分工从软件搬到工厂 SOP，几乎是同构的。
2. **国内对标厂商**：字节 Trae / 阿里通义灵码 / 腾讯 CodeBuddy 等国产 AI 编码工具——但它们是『助手本体』，Woz 是叠在助手之上的省钱优化层，国内暂缺纯做『Claude Code/Cursor 之上降本插件』的对标、面壁/各类上下文压缩与 KV-cache 优化厂商——技术路径部分重叠（省 token），但面向的是模型推理侧而非 IDE 插件侧、『AI 造 app+人工质检』叙事对标国内低代码+AI 外包工作室（如各类 AI 建站/小程序代做团队），但 Woz 强调工程专家质检的品控闭环
   > 国内在『AI 编码助手本体』上已很卷（Trae、通义灵码、CodeBuddy），但 Woz 占的是一个更窄且巧的生态位：不做助手，做助手之上的成本优化中间件，靠可量化的省钱数字（/woz-savings 实时显示省了多少）建立续费黏性。这个位置在国内几乎是空白——因为国内主流不用 Claude Code 计费模式、且大厂倾向把降本能力内建进自家助手，留给第三方插件的缝隙小。反过来看，随着国内 agent 调用量上规模，『调用编排降本』作为独立产品的机会正在打开。
3. **可迁移的干法 / 应进场景词典的词条**：AI调用成本优化层、工具调用编排压缩、省钱可观测化（savings 实时计量）、复用已有订阅不转售额度、anti-vibe-coding人工质检兜底、只读探索用小模型（haiku降本）
   > 可迁移干法：①『在别人的 AI 之上再压一层优化层』是被低估的创业位——不与巨头正面造助手，而是寄生+增益，用可量化 ROI（省了多少钱、快了多少）做续费理由；制造企业采购 AI 时也可要求供应商暴露『调用编排效率』指标。②『把多次原子调用批处理成少次』的思路可直接迁到任何高频 agent 场景（工单、质检、供应链问答）——调用次数就是成本，编排即省钱。③『重活用大模型、探索/只读用小模型（haiku）』的分层派活，是制造业 AI 落地控成本的通用招式：不是所有环节都上最贵的模型。④anti-vibe coding 的『AI 干+人在最晚一刻按标准兜底』就是 HITP 的产品化表达，可作为工厂 AI SOP 的默认协同档位。
4. **风险与存疑点**：①平台依赖风险极高——WOZCODE 完全寄生于 Anthropic Claude Code，若 Anthropic 自己内建同类优化、或调整插件/定价政策，产品价值可一夜蒸发；②省钱数字自证——25-55% 降本与 Terminal Bench 分数均为官方自测，缺第三方独立复现，且『省钱』随模型定价下降会自然缩水；③叙事分裂/定位漂移——开发者插件 WOZCODE 与融资主打的『企业 AI 应用工厂』是两条不同曲线，团队仅 8 人同时押注，聚焦度与故事一致性存疑，早期客户（SimpliSafe/Attention Labs）为官网自述背书、非独立可验证案例。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Woz — Y Combinator 公司页 | https://www.ycombinator.com/companies/woz |
| WOZCODE 官网 | https://www.wozcode.com/ |
| WithWoz/wozcode-plugin — GitHub 仓库 | https://github.com/WithWoz/wozcode-plugin |
| Woz Raises $6M（PR Newswire 官方融资稿，2025-10-15） | https://www.prnewswire.com/news-releases/woz-raises-6m-to-build-enterprise-grade-ai-apps-that-businesses-can-trust-302584904.html |
| SiliconANGLE：Woz raises $6M to build an 'AI app factory' | https://siliconangle.com/2025/10/15/startup-woz-raises-6m-build-ai-app-factory-combines-agentic-human-expertise/ |
| Cervin Ventures：Why We Invested in Woz（领投方投资逻辑） | https://www.cervinventures.com/news/building-the-next-generation-of-software-why-we-invested-in-woz |
| Product Hunt — WOZCODE | https://www.producthunt.com/products/wozcode |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
