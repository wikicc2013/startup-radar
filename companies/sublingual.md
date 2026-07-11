# Sublingual

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：LLM observability without code changes（无需改代码的 LLM 可观测性）
- **官网/锚定**：https://www.ycombinator.com/companies/sublingual
- **深研状态**：researched

## 公司画像
- **团队**：两人创始团队。CEO Matthew Tang——曾在 TikTok 做推荐算法与广告引擎的机器学习，在 Nextdoor 做面向推荐系统的 LLM 研究；CTO Dylan Bowman——曾在 UIUC Kang Lab 及美国国防部（DoD）做 LLM 研究，专长部署安全。团队规模 2 人。
- **成立/批次**：2025（YC Winter 2025 批次）
- **地点**：美国旧金山湾区（San Francisco Bay Area）
- **产品**：无需改代码的 LLM 可观测性 / 评估平台。核心卖点：一条 `pip install subl` 即可接入，无需改动现有代码即可捕获所有 LLM 调用（prompt 模板、调用参数、响应、tool calls 等）。通过静态+动态代码分析自动发现 prompt 模板、抽取调用模式、还原 LLM 在生产环境中的真实行为。数据默认本地存储（local-first），不上云、无第三方窥探，规避 GDPR/合规负担。开源。
- **商业模式**：开源 + 本地优先（local-first）的开发者工具。以开源库降低接入门槛获取开发者，商业化路径（团队版/云端/企业版）未公开披露。定位 Developer Tools / Open Source / Infrastructure / AI。
- **竞争格局**：LLM 可观测性/评估赛道竞争激烈：Langfuse（YC，开源 LLM engineering 平台）、Helicone（YC W23）、Confident AI（YC，LLM eval+observability）、以及 LangSmith、Arize Phoenix、Braintrust、Datadog LLM Observability 等。Sublingual 的差异化在「零代码接入 + 本地存储 + 自动 prompt 模板发现」，但护城河偏薄，且巨头与已融资玩家挤压明显。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 约 $500,000（Crunchbase 口径，YC 标准投资） | 2025-03-12 | [链接](https://www.crunchbase.com/funding_round/sublingual-pre-seed--b13513ea) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的意义主要在「AI 落地的可观测性基础设施」层面，而非直接生产场景。制造企业在把 LLM/Agent 接入质检、工艺问答、设备运维助手、供应链协同等场景时，最大的隐患是「黑箱」——不知道模型实际吃了什么 prompt、产生了什么幻觉、在哪一步出错。Sublingual 这类「零代码接入 + 本地存储」的可观测性工具，恰好命中制造业两个刚需：一是不想（也没能力）大改现有代码就能先把 LLM 调用监控起来；二是工艺参数、图纸、客户数据高度敏感，本地优先、不上云的设计天然契合工厂内网/数据不出厂的合规要求。启示：制造企业上 AI 前应先建立「LLM 可观测层」，把每一次模型调用当作可审计的生产工序来记录，而非直接裸奔上线。
2. **国内对标厂商**：国内 LLM 应用可观测目前多由大模型平台/MLOps 厂商附带提供，尚无与 Sublingual 完全对位的独立「零代码本地可观测」创业公司；相近方向可参照阿里云百炼、火山方舟等平台内置的调用追踪/评测能力（平台绑定、非独立开源工具）、开源可观测基座层面，国内团队多基于 OpenTelemetry / Langfuse 自建，或使用 LangSmith 等海外工具，缺少『pip 一行、本地留存』这种极简本地化产品、评测/监控偏应用侧的国内玩家更多是模型评测与 Agent 调试工具方向（多为大厂内部平台或早期项目），成熟独立商业产品稀缺
   > 国内在「LLM 可观测性」这条细分线上，独立创业公司远不如海外密集，能力多被云厂商的大模型平台（百炼、方舟等）以内置功能形式吸收，形成平台绑定。真正对标 Sublingual『开源 + 零代码 + 本地优先』组合的独立产品几乎空白，这既说明国内开发者可观测心智尚未被单独教育起来，也意味着一个潜在缺口：面向数据敏感行业（制造、政务、金融）的本地化、可私有部署的 LLM 调用审计工具，可能是国内值得押注的方向。需注意：Sublingual 自身已疑似停摆，说明纯工具、护城河薄的打法在海外也难独立成立，国内做同类更应绑定行业合规场景而非做通用工具。
3. **可迁移的干法 / 应进场景词典的词条**：LLM可观测性、零代码接入、本地优先/数据不出域、自动prompt模板发现、开发者工具、LLM调用审计
   > 最可迁移的干法有三条：①「零代码接入」——用运行时挂钩/monkey-patch 而非要求用户改代码，把接入成本压到一条命令，这套「贴地皮」思路适用于任何要渗透存量系统的企业工具（含制造 MES/ERP 旁挂的 AI 监控）；②「本地优先」——默认数据不出域、可私有部署，直接把合规从负担变卖点，制造/政务/金融尤其吃这套；③「静态+动态分析自动发现 prompt 模板」——不依赖人工埋点，自动从代码与运行时还原业务结构，这种「自动发现而非手动配置」的产品哲学可迁移到工厂里的工艺参数自动归集、设备日志自动聚类等场景。反面教训：工具再巧，若不绑定具体业务价值与合规场景，容易沦为『nice-to-have』而难以商业化——Sublingual 疑似停摆即是提醒。
4. **风险与存疑点**：①存续风险：YC 公司页状态已标记 Inactive，一句话定位从『LLM observability』变为『Daily productivity tracker』，原主仓库 404，项目大概率已停摆或 pivot，作为跟踪标的时效性存疑。②赛道拥挤且护城河薄：LLM 可观测已有 Langfuse/Helicone/LangSmith/Arize/Datadog 等大量玩家，『零代码+本地』差异化易被复制，两人团队+50 万美元 pre-seed 难以在巨头夹缝中建壁垒。③商业化不清晰：纯开源+本地存储模式缺乏明确变现路径，无公开付费客户与营收信号，early_customers 为空，可持续性弱。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Sublingual | Y Combinator 公司页（状态、创始人、批次） | https://www.ycombinator.com/companies/sublingual |
| Introducing Sublingual AI: Zero-Code LLM Evaluations（YC 官方 LinkedIn） | https://www.linkedin.com/posts/y-combinator_sublingual-ai-yc-w25-is-building-plug-and-play-activity-7301059790040924161-oXf7 |
| Sublingual Pre-Seed Round | Crunchbase（融资 ~$500K，2025-03-12） | https://www.crunchbase.com/funding_round/sublingual-pre-seed--b13513ea |
| Sublingual | Crunchbase 公司档案 | https://www.crunchbase.com/organization/sublingual |
| sublingual-ai/sublingual-monitoring | GitHub（现存活跃仓库，~52 star） | https://github.com/sublingual-ai/sublingual-monitoring |
| Matthew Tang - Co-founder of sublingual (YC W25) | LinkedIn | https://www.linkedin.com/in/mhtang2/ |
| From Vibes to Visibility: How Sublingual Simplifies LLM Observability | HireTop | https://hiretop.com/blog3/sublingual-llm-observability-no-code/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
