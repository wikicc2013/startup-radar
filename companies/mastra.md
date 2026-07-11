# Mastra

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：TypeScript AI agent framework（TypeScript 的 AI 智能体框架）
- **官网/锚定**：https://mastra.ai/
- **深研状态**：researched

## 公司画像
- **团队**：三位联合创始人均出自 Gatsby 团队（前端框架，2023 年 2 月被 Netlify 收购）：Sam Bhagwat（创始人兼 CEO，曾把 Gatsby Cloud 商业化做到约 500 万美元 ARR）、Abhi Aiyer（CTO）、Shane Thomas（联合创始人兼 CPO）。三人此前一起做 Gatsby，累计做开源 JavaScript 十余年。2024 年 10 月开始做 Mastra。
- **成立/批次**：2024（2024 年 10 月启动开发，2025 年 1 月随 YC W25 发布）
- **地点**：美国旧金山（团队全球分布，约 34+ 人）
- **产品**：Mastra 是面向 AI 应用与智能体的现代 TypeScript 框架，Apache 2.0 开源（企业特性走 Mastra Enterprise License 双授权，位于 ee/ 目录）。核心能力：模型路由（统一接口接 40+ LLM 提供商，含 OpenAI/Anthropic/Gemini）、Agents（自主推理+工具调用）、Workflows（图式编排引擎，直观控制流语法处理多步流程）、Human-in-the-Loop（暂停执行等待人工审批再续跑）、上下文/记忆管理（对话历史、RAG 检索、观测记忆）、可作为 MCP Server 暴露 agent 与工具、内置评测（evals）与可观测性。可嵌入 React/Next.js/Node.js，也可独立部署为服务。GitHub 约 26k star；据 NPM 数据是史上第三快增长的 JS 框架，约一年内达每周约 15 万下载。
- **商业模式**：开源框架 + 商业化。核心框架 Apache 2.0 免费开源以拉动开发者采用；企业级特性走 Mastra Enterprise License。变现路径对标 Gatsby Cloud/Vercel 模式——预计通过托管云服务（部署、可观测、企业治理）对生产级用户收费。当前处于早期，主要靠开源采用建立分发。
- **竞争格局**：直接对标 Python 阵营的 LangChain/LangGraph、LlamaIndex，以及 Vercel AI SDK（同为 JS/TS 生态但更偏底层 SDK）。差异化：Mastra 主打完整的 TypeScript 端到端 agent 框架（agent+workflow+memory+eval+可观测一体），锚定前端/全栈 JS 开发者这一被 Python 框架忽视的庞大群体。这一定位与其 Gatsby 出身的分发能力高度契合。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | 1300 万美元 | 2025-10-08 | [链接](https://mastra.ai/blog/seed-round) |
| Series A | 2200 万美元 | 2026-04-09 | [链接](https://mastra.ai/blog/series-a) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Replit（Agent 3 用 Mastra 让用户规模化构建 agent） | 高 | [链接](https://mastra.ai/blog/seed-round) |
| Marsh McLennan（用 Mastra 构建的企业级 agentic 搜索，官方口径 10 万+ 人每日使用） | 高 | [链接](https://mastra.ai/blog/series-a) |
| Indeed（用 Mastra 构建全国投放的职业顾问 agent） | 高 | [链接](https://mastra.ai/blog/series-a) |
| Brex（在自家应用内构建 agent；官方称支撑其 Capital One 收购相关工作） | 高 | [链接](https://mastra.ai/blog/series-a) |
| Sanity、Factorial（在应用内构建 agent） | 高 | [链接](https://mastra.ai/blog/series-a) |
| MongoDB、Workday、Salesforce（平台团队用其自动化 DevOps/SRE） | 高 | [链接](https://mastra.ai/blog/series-a) |
| SoftBank（在发布会上展示用 Mastra 构建的产品） | 中 | [链接](https://mastra.ai/blog/seed-round) |
| PayPal、Adobe（官方称正投产 Mastra） | 中 | [链接](https://mastra.ai/blog/seed-round) |
| Elastic、Docker（发博客介绍其 Mastra 用法） | 中 | [链接](https://mastra.ai/blog/seed-round) |

## 转型有术判断
1. **对制造业客户意味着什么**：Mastra 本身不是制造业工具，但它揭示了一条被低估的落地路径：制造企业的数字化系统（MES、WMS、PLM、质检看板、供应链门户）大量是 Web/前端技术栈，团队里 JavaScript/TypeScript 全栈工程师远多于 Python 的 AI 工程师。以往「上 AI Agent」意味着另起一套 Python 技术栈、招一批稀缺的 AI 工程师；Mastra 的价值在于让现有的前端/全栈团队用他们已经会的 TS，就能在既有 Web 系统里内嵌 agent（工单智能派单、质量异常根因问答、设备手册检索助手、供应商对账 agent），且自带 human-in-the-loop 审批（对制造现场「AI 不能全自动、必须人兜底」的合规诉求天然契合）。对制造业的启示是：AI Agent 的落地门槛不只是模型，更是「谁来写、嵌在哪套系统里」——把 agent 能力下沉到企业已有的技术栈和团队技能上，比另起炉灶更快见效。
2. **国内对标厂商**：字节 Coze/扣子（可视化 Agent 搭建平台，面向业务而非代码框架，定位互补而非同类）、Dify（LangGenius，开源 LLM 应用/agent 编排平台，但后端 Python、偏低代码可视化编排，非 TS 代码框架）、阿里 Spring AI Alibaba / 百炼（Java/云平台路线的 agent 开发栈，语言生态不同）
   > 国内几乎没有与 Mastra 严格同类的『纯 TypeScript 代码级 agent 框架』——这是一个明显的空白。国内 agent 生态两极分化：一端是 Coze/扣子、Dify 这类可视化/低代码平台（面向业务人员，牺牲代码灵活度换易用），另一端是 Python 为主的框架栈（LangChain 中文社区、各家自研）。Mastra 卡位的『给全栈/前端工程师的、代码优先的 TS 框架』在国内基本无对标——原因是国内 AI 开发者默认用 Python，前端团队做 agent 的意识尚未形成。这反而是国内做开发者工具的团队一个可复制的切口：面向庞大的国内前端/全栈群体做 TS-first 的 agent 框架。
3. **可迁移的干法 / 应进场景词典的词条**：TypeScript-agent框架、开源拉采用+企业授权变现、嵌入既有Web系统、human-in-the-loop审批、创始团队复用前作分发力、模型路由统一接口
   > 可迁移的干法有三条。其一『锚定被忽视的技能存量』：Python 是 AI 默认语言，但企业里 JS/TS 开发者数量远超 AI 工程师，Mastra 把 agent 能力做进这批人已会的语言里，绕开『招 AI 工程师』的瓶颈——制造/传统企业做 AI 落地时同理，优先复用现有 IT 团队会的技术栈。其二『创始团队分发力复用』：Gatsby 团队做过被数十万开发者用的框架，自带开发者信任与传播网络，A 轮能拉到 120+ 投资人也是同一网络效应；做企业内部工具时，选『团队已熟悉的平台』上做扩展，采用阻力最小。其三『human-in-the-loop 作为一等公民』：框架把『暂停等人审批再续跑』做成核心能力而非补丁，正好对上企业级/合规场景对 AI 自动化的信任梯度——任何要在高风险流程（财务、质量、生产）上 agent 化的组织，都应把人工卡点设计成流程内建能力而非事后补救。
4. **风险与存疑点**：①同质化与巨头挤压：Vercel AI SDK（同 JS/TS 生态、Vercel 分发力更强）、LangChain 补齐 JS 能力后，Mastra 的 TS-first 差异化窗口可能被压缩；②开源变现未验证：核心 Apache 2.0 免费，商业化托管服务尚在早期，能否把庞大免费下载量转化为付费企业客户仍待观察（Gatsby Cloud 最终 ARR 约 500 万美元、以被收购收场，说明这条路不必然通向大规模营收）；③官方客户口径需审慎：种子轮/A 轮博客中『PayPal/Adobe 正投产』『SoftBank 发布会展示』等表述来自公司自述、用途多为『在某处用了框架』而非核心系统依赖，实际生产深度与留存有待第三方验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Mastra 官网 | https://mastra.ai/ |
| Announcing our $13m seed round（Mastra Blog） | https://mastra.ai/blog/seed-round |
| We raised a $22M Series A to help every developer build agents（Mastra Blog） | https://mastra.ai/blog/series-a |
| About Mastra（团队/创始人/Gatsby 背景） | https://mastra.ai/about |
| Mastra GitHub 仓库（约 26k star，Apache 2.0） | https://github.com/mastra-ai/mastra |
| Mastra: The Javascript framework for building AI agents, from the Gatsby devs（Y Combinator） | https://www.ycombinator.com/companies/mastra |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
