# PearAI

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Open-source AI code editor（开源的 AI 代码编辑器）
- **官网/锚定**：https://www.ycombinator.com/companies/pearai
- **深研状态**：researched

## 公司画像
- **团队**：创始团队 4 人（YC 登记 team size 4）。联合创始人 Nang Ang（CMU 计算机工程学士+硕士，曾任 IMC Trading、Coinbase、Two Sigma 软件工程师）与 Duke Pan / Matthew Duke Pan（曾任 Meta、Cisco、Coinbase、Tesla Autopilot 软件工程师）。公司主体 Pear Creations Inc.（LinkedIn 显示 Pear Creations Inc. / trypearai）。
- **成立/批次**：2024 年（YC Fall 2024 / F24 批次）
- **地点**：美国 旧金山（San Francisco）
- **产品**：PearAI —— 开源 AI 代码编辑器（fork 自 VS Code）。转型后定位为『聚合层』：把多款各自领先的 AI 编码工具整合进一个统一界面，让它们互相协作、体验上像单一产品。官方文档披露其集成/引用了 Roo Code（AI 编码）、Supermaven（预测补全）、Mem0（记忆）、Perplexity（AI 搜索）、Continue（chat 与内联编辑）等；并提供 PearAI Router，用一份订阅自动路由到 GPT-4o、Claude 3.5 Sonnet 等主流模型。功能含 AI chat、内联编辑、代码生成、自动补全，支持本地代码库索引、零数据保留（不存储/不用于训练）。
- **商业模式**：开源 + 订阅双层。免费版 $0/月：完整开源编辑器，需自带 API Key（BYOK）。PearAI Server 订阅 $15/月：按额度计费，含 PearAI Router 接入 premium 模型，官方称比直接买等量 LLM API credit 更划算；早鸟订阅有 grandfathered 价格。
- **竞争格局**：直接对标 GitHub Copilot、Cursor、Windsurf（Codeium）、Continue.dev（其 fork 源）等 AI 代码编辑器/助手；作为聚合层还与 Roo Code / Cline 等开源 agent 编码工具既竞争又集成。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（含 YC 标准 deal $375K） | 1.25M 美元（总额；其中 YC 标准 deal 37.5 万美元） | 2024-12（2024-12-20 由 TechCrunch 披露） | [链接](https://techcrunch.com/2024/12/20/after-causing-outrage-on-the-first-day-of-y-combinator-ai-code-editor-pearai-lands-1m-seed/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：PearAI 的价值不在制造业直接落地，而在于给『企业内部 AI 工具治理』提供了一个鲜活样本。它把 Router（模型路由）、记忆、搜索、补全、agent 编码等一堆碎片化能力收进一个统一壳里，本质是『聚合层/编排层』打法——这正是制造企业面对几十个割裂 AI 点工具（质检、排产、工艺、客服各买各的）时最缺的东西。对制造业 IT 的启发：与其让业务部门各自采购点状 AI，不如自建/采购一层统一入口做模型路由与体验收口，既控成本（按额度而非按供应商重复付费）又保数据（本地索引、零数据保留是制造业敏感工艺数据的刚需）。PearAI 的翻车教训也直接适用：拿开源底座做二次开发要合规、可溯源，制造企业若基于开源模型/框架二开同样要守住许可证与出处披露的底线。
2. **国内对标厂商**：通义灵码（阿里）—— 国内 AI 编程助手代表，含企业版模型路由与私有化，对标 PearAI 的『统一入口 + 多模型』思路，但走大厂闭源生态、CodeGeeX（智谱）—— 开源 AI 编程助手，与 PearAI 的开源定位最接近，同样支持多 IDE/多模型、Trae（字节，海外品牌 Trae/国内豆包 MarsCode）—— fork 式 AI 原生编辑器打法，与 PearAI『fork VS Code 做 AI 编辑器』路线高度同构、Baidu Comate、腾讯 CodeBuddy —— 大厂 AI 编码助手，聚合模型 + 补全 + chat
   > 国内对标呈现两条分岔：一条是大厂闭源生态（通义灵码、Comate、CodeBuddy、字节 MarsCode/Trae），靠自有大模型 + 私有化部署吃企业市场；另一条是开源路线（CodeGeeX）。PearAI 的独特点在于它既开源又做『聚合别人的工具』而非全自研，这在国内较少见——国内玩家多是自建全栈。对制造/工业软件生态的镜像意义是：中国团队做 AI 编辑器普遍选择 fork VS Code + 接自家/多家模型（字节 Trae 最典型），说明『壳 + 路由 + 集成』已是行业公认的低成本切入路径，真正的护城河在模型质量、企业私有化与合规，而非编辑器本身。
3. **可迁移的干法 / 应进场景词典的词条**：AI-native-IDE、模型路由/Router、开源二开、工具聚合层、BYOK+订阅双层商业模式、本地索引/零数据保留、agent-coding
   > PearAI 最可迁移的干法是『聚合层 + 模型路由 + 订阅收口』：面对一堆各有所长但割裂的 AI 能力，不做全自研，而是搭一层统一壳把它们编排到一起，用一份订阅屏蔽底层多模型多供应商的复杂度。这套打法可平移到任何『企业内 AI 工具泛滥、需要统一入口治理』的场景——制造企业的 AI 中台、客服的多模型路由、内部知识库搜索聚合皆可复用。第二个可迁移点是『开源做增长、订阅做变现』的双层结构：免费开源版 BYOK 拉用户和口碑，付费 Server 版做模型路由赚差价。反面教材是 fork 开源项目的合规红线——出处披露、许可证选择必须前置，否则增长起点即信任崩点。
4. **风险与存疑点**：① 开源许可与出处争议（核心风险，已发生）：2024-09 YC 首日发布时被指几乎照搬 Apache-2.0 的 Continue.dev（后者又 fork 自 VS Code），仅做大规模 search-replace 改名、缺乏实质新增，且擅自套用自造的闭源『Pear Enterprise License』（创始人 Duke Pan 承认该许可证是 ChatGPT 写的）。舆论风暴后公开道歉、改回开源许可并补出处，但『信任透支』的声誉伤害长期存在，YC 也因此受连带批评。② 护城河薄弱：产品以 fork VS Code + 聚合他人工具（Roo Code/Continue/Supermaven/Mem0/Perplexity）为主，自研壁垒有限，直面 Cursor、Copilot、字节 Trae 等资金/生态远更雄厚的对手，且所聚合的上游工具随时可能自建同类界面或断供。③ 商业与规模风险：仅 125 万美元种子轮、4 人团队，$15/月订阅走模型路由差价，毛利受上游 LLM 定价挤压；无公开付费客户/规模数据，能否跑通留存与变现存疑；行业迭代极快，GitHub star 约 705、更新到 2025-05，相对头部产品声量偏小。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| After causing outrage on the first day of Y Combinator, AI code editor PearAI lands $1M seed | TechCrunch | https://techcrunch.com/2024/12/20/after-causing-outrage-on-the-first-day-of-y-combinator-ai-code-editor-pearai-lands-1m-seed/ |
| Y Combinator is being criticized after it backed an AI startup that admits it basically cloned another AI startup | TechCrunch | https://techcrunch.com/2024/09/30/y-combinator-is-being-criticized-after-it-backed-an-ai-startup-that-admits-it-basically-cloned-another-ai-startup/ |
| This AI Startup 'Copied' an Open-Source Project and Got Funding by Y Combinator | It's FOSS News | https://news.itsfoss.com/pearai-controversy/ |
| Transparency is Open Source Currency: Lessons from PearAI | OpenSauced | https://opensauced.pizza/blog/-pearai-transparency |
| PearAI - The AI Code Editor For Your Next Project（官网） | https://trypear.ai/ |
| PearAI Costs & Available Models（官方文档，$15/月订阅与模型路由） | https://trypear.ai/docs/models-and-usage |
| PearAI on Y Combinator（YC 目录，F24 批次） | https://www.ycombinator.com/companies/pearai |
| trypear/pearai-app（GitHub 主仓，MIT 许可，约 705 star，v1.8.9 更新至 2025-05） | https://github.com/trypear/pearai-app |
| Nang Ang – No Cap Blog（创始人背景） | https://nocap.blog/founder/nang-ang/ |
| Duke Pan – No Cap Blog（创始人背景） | https://nocap.blog/founder/duke-pan/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
