# Kernel

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：Browser infrastructure for web agents（面向网页智能体的浏览器基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/kernel
- **深研状态**：researched

## 公司画像
- **团队**：2025 年由 Catherine Jue（联合创始人兼 CEO，曾联合创办 YC S16 的 Sway Finance，后在 Cash App 带领前置部署工程团队与文档平台）与 Rafael Garcia（联合创始人兼 CTO，曾任 YC S12 的 Clever 联合创始人兼 CTO，Clever 2021 年以约 5 亿美元退出）共同创立；YC 官方列示团队规模约 6 人。
- **成立/批次**：2025 年（YC Summer 2025 / S25 批次）
- **地点**：美国加州旧金山湾区（另有辛辛那提本地资本 Cintrifuse 支持，被当地媒体称为 Cincinnati-backed）
- **产品**：面向网页智能体（web agents）与自动化的浏览器基础设施：通过 API 在云端毫秒级拉起沙箱化 Chromium 浏览器（官方称冷启动 sub-150ms / 约 30ms 级，宣称比最近竞品快 5.8 倍），基于 unikernel 平台运行；内置隐身反检测（stealth）、住宅代理、CAPTCHA 自动求解、会话录制（MP4 replay）、Live View 实时观看、持久化 profile 与会话复用、浏览器遥测流；并提供把 agent 代码与浏览器同机部署的 serverless 运行时。兼容 Playwright、Puppeteer、Browser Use、Stagehand、Magnitude 及 OpenAI/Anthropic/Gemini 的 Computer Use 等主流框架。开源。
- **商业模式**：Browser-as-a-service，按用量计费（GB-秒计价）。免费档 $0/月基础费 + $0.0000166667/GB-秒；Startup 档 $200/月基础费（同等用量单价，含增强支持）；Enterprise 定制。主打只按实际用量付费：Standby 模式下不为闲置计费、池中闲置浏览器不计磁盘费、代理不额外收费。也已上架 Vercel Marketplace。
- **竞争格局**：Browserbase（最直接对标，浏览器基础设施赛道头部）；此外与 Steel.dev、Browserless、Hyperbrowser 等云浏览器/agent 基础设施，以及各家自建 headless 浏览器方案竞争。差异化打在冷启动速度、agent 原生特性（认证/会话复用、反检测、录制）与按量计费。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed + Series A（合并披露，未拆分具体金额） | $22,000,000 | 2025-10-09 | [链接](https://siliconangle.com/2025/10/09/kernel-raises-22m-power-browser-infrastructure-ai-agents/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Cash App (Block) | 高 | [链接](https://www.ycombinator.com/companies/kernel) |
| Rye（电商基础设施） | 中 | [链接](https://www.ycombinator.com/companies/kernel) |
| Framer | 中 | [链接](https://www.kernel.sh/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业的价值不在于直接采用 Kernel，而在于其揭示的范式：当企业要把大量『需要登录、点选、跨系统取数』的重复工作交给 AI 智能体时，智能体需要一个稳定、可审计、可回放的『浏览器执行层』。制造业中大量场景本质是网页操作——供应商门户下单/对账、海关与物流平台报关跟单、招投标平台信息抓取、经销商后台数据录入、政府监管系统申报。这些老旧 B/S 系统往往没有 API，只能靠人在浏览器里点。Kernel 这类基础设施证明：把浏览器操作沙箱化 + 可录制回放 + 会话复用，是让 agent 安全接管这类工作的前提。
2. **国内对标厂商**：浏览器基础设施 / 云浏览器方向：国内暂无完全对位的独立创业头部，通常由智能体厂商自建 headless 浏览器沙箱（如各家 Agent/RPA 平台内置的云端浏览器执行环境）、Computer-use / 网页智能体执行层：智谱 AutoGLM、月之暗面 Kimi 探索版、扣子/Coze 的浏览器操作能力、以及 RPA 厂商（影刀 RPA、来也 UiBot、实在智能）在向 Agentic 浏览器自动化演进、云沙箱/无头浏览器托管：可类比国内云厂商的 Serverless + 浏览器渲染方案，但作为独立商业化产品的对标尚不成熟
   > 国内制造企业若要落地，短期更可能通过 RPA 厂商（影刀/来也/实在）叠加大模型的 Agentic 能力，或云厂商的浏览器沙箱来实现，而非直接采购海外 Kernel；但『浏览器执行层 + 可回放审计』的产品形态值得国内供应商借鉴。
3. **可迁移的干法 / 应进场景词典的词条**：网页智能体基础设施、云端浏览器沙箱、Computer Use / 浏览器自动化、Agent 运行时、反检测与住宅代理、会话录制与实时观看、按量计费云基础设施
   > 可迁移打法有三：①『把没有 API 的老系统当浏览器操作对象』——用云浏览器 + agent 覆盖供应商门户、报关、招投标等无接口场景，绕开 IT 改造；②『录制回放做合规底座』——每一次 agent 的浏览器操作都留 MP4/遥测，满足制造业对可追溯、可审计的强需求（尤其涉及财务、报关、质量放行）；③『会话复用降本』——像 Kernel 用 Standby 模式只按用量计费一样，制造企业跑批量对账/爬价/跟单时按峰谷弹性拉起浏览器，避免常驻资源浪费。
4. **风险与存疑点**：①赛道拥挤且巨头逼近：Browserbase 已领先，OpenAI/Anthropic 的 Computer Use、各浏览器厂商可能把该能力内化，基础设施层易被平台化吞并；②护城河窄：核心是冷启动速度与 agent 原生特性，技术壁垒随时间收敛；③反检测/住宅代理/CAPTCHA 求解涉及目标网站反爬与合规灰色地带，跨境数据与网站 ToS 风险高；④成立仅一年、6 人团队，商业化与规模化未验证；⑤Seed 与 Series A 金额未拆分披露，$22M 的具体结构与估值不透明；⑥国内落地受数据出境、住宅代理合规、老系统安全策略限制，直接迁移海外方案难度大。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
