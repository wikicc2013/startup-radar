# Moss

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B003
- **一句话定位**：Real-time semantic search engine for AI apps（面向 AI 应用的实时语义搜索引擎）
- **官网/锚定**：https://www.ycombinator.com/companies/moss
- **深研状态**：researched（WebSearch 一手核实：YC Fall 2025（F25），创始人 Sri Raghu Malireddi、Harsha Nalluru(曾在 Microsoft、Grammarly 建大规模 agentic 系统遇检索延迟)。已部署 100+ 国、5M+ 实时语音分钟、380K+ 装机。分诊：留 aiinfra（面向对话式 AI 的实时语义搜索引擎/<10ms）。）

## 公司画像
- **团队**：Sri Raghu Malireddi、Harsha Nalluru(前 Microsoft/Grammarly)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：面向 AI 应用的实时语义搜索引擎：亚 10ms 查询、即时索引更新、零基础设施负担的高性能语义搜索运行时;跑在 Agent 所在处(云/浏览器/端侧),用 Rust+WebAssembly 的优化向量索引原生跨浏览器/移动/服务器,让语音 Agent、副驾、聊天在 <10ms 内检索-推理-回应,对话像人一样自然。
- **商业模式**：面向对话式/多模态 AI 的实时语义搜索运行时(SDK),定价未披露。
- **竞争格局**：语义搜索/向量检索赛道:各类 vector DB、RAG 检索。差异点在于亚 10ms 实时+跨端(含端侧/浏览器)+零基础设施。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC F25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/moss) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 3000+ 终端客户的企业(未具名),100+ 国部署 | 中 | [链接](https://www.ycombinator.com/companies/moss) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业实时 AI 交互而言,Moss 代表『亚 10ms 实时语义搜索(跨端)』。制造企业的语音客服、车间语音助手、现场设备端侧助手需极低延迟检索知识才自然。Moss <10ms 跨端(含端侧/浏览器)语义搜索。启示:制造企业实时语音/端侧 AI 可迁移『实时语义搜索运行时(<10ms+跨端+端侧可跑)』让语音 Agent 与端侧助手即时检索工艺/知识,体验接近真人对话。
2. **国内对标厂商**：各类向量检索/语义搜索、端侧向量库、Faiss/Milvus 类
   > 国内语义检索多为服务端向量库。Moss 差异在于亚 10ms 实时+跨端(端侧/浏览器)+零基础设施。对国内制造企业实时/端侧 AI 交互可对标。
3. **可迁移的干法 / 应进场景词典的词条**：实时语义搜索、亚10ms、跨端/端侧、向量检索、语音Agent、AI基础设施
   > 可迁移干法:实时语音/端侧 AI 用『实时语义搜索运行时(<10ms+跨端+端侧可跑)』让 Agent 即时检索知识。对制造企业语音/端侧交互适用。
4. **风险与存疑点**：①向量检索竞争;②端侧资源约束;③早期;④与 RAG 平台边界。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Moss: Real-time semantic search for Conversational AI | Y Combinator（F25） | https://www.ycombinator.com/companies/moss |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
