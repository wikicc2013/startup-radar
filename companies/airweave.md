# Airweave

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B005
- **一句话定位**：Open-source context retrieval for agents（面向智能体的开源上下文检索）
- **官网/锚定**：https://www.ycombinator.com/companies/airweave
- **深研状态**：researched

## 公司画像
- **团队**：联合创始人 Lennert Jansen（曾在 Amazon、IBM 做 AI 研究，2020 年起深耕 LLM）与 Rauf Akdemir（CS 毕业，曾在高速成长创业公司与大型企业任 Data Platform Engineer），二人大学相识约 7 年。团队约 7 人。
- **成立/批次**：2025
- **地点**：美国旧金山（另设荷兰阿姆斯特丹办公室）
- **产品**：面向 AI 智能体与 RAG 系统的开源上下文检索层。连接 50+ 应用/工具/数据库（Notion、Slack、Linear、Google Drive、Gmail、GitHub、Jira、Salesforce、Stripe、Airtable 等），持续同步数据并索引，通过统一的、对 LLM 友好的检索接口（REST / Python·TS SDK / MCP Server）暴露给智能体。检索时并行执行语义检索与 BM25 关键词检索、用 RRF 融合结果、施加时间新鲜度偏置并重排（re-rank）。技术栈：FastAPI + PostgreSQL（元数据）+ Vespa（向量）+ Temporal（编排）+ Redis，前端 React/TS。开源 MIT 许可，另有云托管版 app.airweave.ai。
- **商业模式**：开源（MIT）+ 云托管 SaaS 混合。分层定价：免费开发者档、低价 Pro 档、以及按用量计费的 Custom 档；社区在呼吁自助 PAYG 选项。定位为「给智能体开发者的基础设施」而非面向人的企业搜索。
- **竞争格局**：与 Onyx（端到端搜索应用，含推理层与权限体系）区分——Airweave 是给开发者的基础设施（连接器/同步/索引/检索 API），坦言权限管理尚不如 Onyx；与 Glean 区分——Glean 是给人用的企业搜索，Airweave 是给智能体开发者访问其终端用户信息；对多数 MCP Server 的看法是它们只是「暴露既有 API 的薄封装」，缺乏更深的检索能力；将 OpenAI/Anthropic 增加连接器视为对赛道的验证而非直接竞争。已进入 Google Antigravity IDE 首批 MCP 集成。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子轮（Seed） | 600 万美元 | 2025-07-02 | [链接](https://airweave.ai/blog/airweave-raises-6m-seed-round) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Donke（Airweave 自有的智能错误监控 Agent，内部/示例用例） | 中 | [链接](https://airweave.ai/blog/airweave-raises-6m-seed-round) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业里 AI 智能体最大的落地障碍之一是「数据孤岛」——PLM、MES、ERP、质量系统、SharePoint 工艺文档、邮件、工单散落在几十个系统里，智能体无法真正「读懂」企业。Airweave 这类上下文检索层的价值在于：把这些私有数据源统一同步、索引，再以对 LLM 友好的单一接口（含语义+关键词混合检索、重排、新鲜度偏置）喂给智能体。对制造企业意味着，做设备故障诊断助手、工艺知识问答、供应商/合同检索、售后客服 Agent 时，不必为每个系统手写 RAG 管线，而是用一层可复用的检索基础设施打通「多源、实时、可溯源」的上下文。其开源+私有部署（K8s）属性也契合制造业对数据不出内网的合规要求。
2. **国内对标厂商**：百炼/魔搭等的 RAG 与知识库检索能力（阿里云，偏平台化、非纯开源基础设施）、Dify / FastGPT（国内广泛使用的开源 LLM 应用与 RAG 编排框架，含数据接入与检索，但更偏应用编排层）、腾讯云/字节等的企业知识库检索服务（闭源 SaaS，非开发者基础设施定位）
   > 国内目前缺少与 Airweave 完全同构的「面向智能体、连接器丰富、以 MCP/API 暴露的开源上下文检索层」纯基础设施玩家。Dify、FastGPT 最接近，但它们是应用/编排框架，检索是其一部分而非核心卖点；百炼、腾讯云知识库偏闭源平台。Airweave 的差异化在于把「50+ 连接器 + 持续同步 + 混合检索/重排 + MCP 原生」打包成给开发者的中间件，这一细分在国内多以自研管线或框架内置能力形式存在，尚无强势独立品牌。
3. **可迁移的干法 / 应进场景词典的词条**：上下文检索层、智能体基础设施、混合检索(语义+BM25+RRF)、MCP 原生、多源数据同步、开源自托管
   > 可迁移的干法：其一，「把 N 个数据源接入 × 1 个统一检索接口」的中间件思路，适用于任何企业内做智能体但苦于数据分散的场景——制造企业可照此建一层「企业上下文中台」，对上以 MCP/API 服务所有 Agent；其二，检索侧不只做向量，而是语义+关键词并行、RRF 融合、加时间新鲜度偏置再重排，这套「工程化检索」组合拳是提升企业问答准确率的通用配方；其三，以 MCP 原生方式让智能体像发现普通工具一样发现检索能力，降低 Agent 与知识源的耦合。
4. **风险与存疑点**：①同质化与被平台吞并风险：OpenAI/Anthropic 及各 SaaS 自建连接器，连接器护城河薄，Airweave 自身也承认这是「赛道验证」；②权限与安全短板：创始人坦言权限管理不及 Onyx，而企业级（尤其制造业）对行级/文档级权限和合规要求极高，这是落地硬门槛；③商业化早期：2025 年成立、约 7 人、600 万美元种子轮，客户多为开发者且缺乏具名标杆客户，收入与留存尚未验证，开源变现路径（云托管 vs 自托管）仍需跑通。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| GitHub - airweave-ai/airweave（开源仓库，约 6.5k star / MIT） | https://github.com/airweave-ai/airweave |
| Airweave | Y Combinator 公司页（创始人/团队/定位） | https://www.ycombinator.com/companies/airweave |
| Airweave Raises $6M Seed Round（官方融资公告） | https://airweave.ai/blog/airweave-raises-6m-seed-round |
| Launch HN: Airweave (YC X25) – Let agents search any app（竞品对比/用例/定价） | https://news.ycombinator.com/item?id=45427482 |
| Airweave 官网 | https://airweave.ai/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
