# Dari

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Production-grade browser-use agents platform（生产级的浏览器操作智能体平台）
- **官网/锚定**：https://www.ycombinator.com/companies/dari
- **深研状态**：researched

## 公司画像
- **团队**：2 人。联合创始人 Avyay Varadarajan（CEO，Caltech 计算机本科，曾任 Uber 软件工程师、Lakers 做 ML、多家创业公司）与 Benjamin Hong（Caltech 计算机，曾在 Amazon）。两人自浏览器智能体模型早期就在构建 browser-use agents，长期受困于其生产环境不可靠。
- **成立/批次**：2025
- **地点**：美国旧金山湾区（San Francisco Bay Area）
- **产品**：生产级 browser-use（浏览器操作）智能体平台，对外是一套 API。核心机制：workflow 首次用 LLM 跑通后，缓存确定性的 DOM 操作步骤，后续用确定性回放执行，仅在网站变化或必要时才回退调用 LLM——由此比通用浏览器智能体更快、更便宜、更稳定，可跨数千次浏览器动作稳定运行。自动处理 2FA（短信验证码、TOTP 动态口令、邮箱验证），使需要登录鉴权的工作流可被自动化。集成方式含 chat-to-automation（对话生成自动化）、POST 触发的 API、Webhook、流程中途回调。
- **商业模式**：面向开发者/企业的 API + SaaS，用于生产环境的可靠网页自动化（数据录入、表单填写、鉴权站点工作流等）。具体定价未公开披露，走 demo/询价模式。
- **竞争格局**：同赛道有 Browser Use（YC W25，开源 web agent，已融 1700 万美元种子轮）、Browserbase（无头浏览器云基础设施，Series B 后估值约 3 亿美元）、Hyperbrowser、Anchor Browser 等；以及 OpenAI Operator 等大厂通用浏览器智能体。Dari 的差异化在‘缓存确定性回放 + 自动 2FA’以换取生产级可靠性与更低成本。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 一家语音 AI 公司（未具名） | 低 | [链接](https://fondo.com/blog/dari-launches) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业大量后台工作跑在没有 API 的老旧 Web/ERP/供应商门户、海关与物流平台、经销商系统上，这类系统正是 RPA 的主战场。Dari 的‘缓存确定性回放 + 大模型兜底 + 自动 2FA’直击传统 RPA 的两大痛点：脚本因页面改版频繁失效、以及无法自动过登录/二次验证。对制造场景可用于：向供应商/客户门户批量录单查单、跨海关与物流平台报关与轨迹抓取、经销商价格/库存同步、采购比价与对账等重复网页作业。
2. **国内对标厂商**：浏览器/网页智能体：智谱 AutoGLM、纳米 AI（360）浏览器智能体、扣子（Coze）浏览器操作、Manus 通用 Agent 的网页操作能力、RPA 厂商：影刀 RPA、来也科技 UiBot、艺赛旗 iS-RPA、弘玑 Cyclone——均在向 AI+RPA / Agentic 自动化演进、确定性回放 + 大模型兜底的‘AI 增强 RPA’思路，可对标国内 RPA 大厂的 AI Copilot 化路线
   > 国内直接对标是影刀、来也、弘玑、艺赛旗等 RPA 大厂的‘AI+RPA/Agentic 自动化’升级路线，以及智谱 AutoGLM、纳米 AI 等浏览器智能体；Dari 相当于把‘大模型跑通一次、之后确定性回放’这套可靠性工程封装成 API 对外售卖，国内 RPA 厂商多以‘录制脚本 + AI Copilot 辅助’形态提供，理念相近但打包与售卖方式不同。
3. **可迁移的干法 / 应进场景词典的词条**：浏览器自动化、browser-use agents、AI+RPA、鉴权工作流自动化（2FA/TOTP）、确定性回放缓存、数据录入/表单填写自动化、Agent 基础设施 API
   > 可迁移打法：①‘一次学习、确定性回放、必要时才调 LLM’——用大模型解决泛化、用缓存脚本保证稳定与低成本，是把 Agent 从 demo 推向生产的关键工程范式；②把不稳定的通用 Agent 收敛为‘版本化、可观测、可 Webhook 触发的 API 端点’，让自动化像调接口一样可被业务系统编排；③自动化 2FA/鉴权，攻下‘登录墙内’这块传统 RPA 与通用 Agent 都难啃的高价值场景。
4. **风险与存疑点**：1) 疑似 pivot/定位漂移：官网 dari.dev 现标语已变为‘The Routing/Production Layer for AI Agents’（AI Agent 的路由/生产层），与 YC 目录页‘最可靠的 browser-use agents API’定位不一致，可能正从纯浏览器智能体向更泛的 Agent 基础设施扩张，方向未定型。2) 未查到任何融资披露（金额/轮次均未公开），仅 2 人团队、2025 年成立，早期风险高。3) 客户仅有一家未具名语音 AI 公司作为案例，置信度低，缺乏可核验客户名单。4) 赛道拥挤且巨头（OpenAI Operator）与已融资玩家（Browser Use 1700 万美元、Browserbase 约 3 亿美元估值）环伺。5) 自动处理 2FA/登录态涉及合规、账号风控与目标网站 ToS 风险。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
