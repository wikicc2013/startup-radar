# ZeroEntropy

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Specialized AI rerankers and embeddings（专用的 AI 重排序器与向量嵌入）
- **官网/锚定**：https://zeroentropy.dev/articles/zeroentropy-raises-4-2m-seed-round-to-make-ai-retrieval-truly-intelligent/
- **深研状态**：researched（在营。YC W25，2025年7月完成420万美元种子轮。核心产品为重排序器（zerank 系列）、嵌入模型（zembed-1）与托管检索 API（zsearch），定位「AI 的检索基础设施」。）

## 公司画像
- **团队**：联合创始人兼 CEO Ghita Houir Alami（摩洛哥籍，25岁，法国 École Polytechnique + UC Berkeley 应用数学硕士，长期做语言模型）；联合创始人兼 CTO Nicholas Pipitone（USACO 决赛选手，卡内基梅隆 CS 与理论数学，曾在多家创业公司做 AI agent）。团队自述为数学家与竞赛程序员班底。
- **成立/批次**：2024（YC Winter 2025 批次）
- **地点**：美国旧金山 San Francisco
- **产品**：面向开发者的检索基础设施。三件套：嵌入模型 zembed-1（开源权重、多语言，自称在其榜单排名第一，16 模型对比中 55–80% 胜率）、重排序器 zerank 系列（zerank-1/zerank-1-small 以 Apache 2.0 开源；zerank-2 及 small/nano 为旗舰交叉编码器，自称在公开与私有基准上超越 Cohere、Salesforce）、端到端托管检索 API zsearch（负责 ingestion/indexing/reranking/评估）。另提供上下文压缩、查询改写、微调等定制模型，及本地部署/专属/SLA 的企业方案。
- **商业模式**：开发者优先的 API / 基础设施订阅（tiered pricing），按调用计费为主；企业侧提供本地部署、专属实例与 SLA。开源部分模型（Apache 2.0）做开发者获客，闭源旗舰模型 + 托管 API 变现。
- **竞争格局**：重排序：Cohere Rerank、Salesforce；嵌入：MongoDB 旗下 Voyage AI（voyage-4）、OpenAI、Cohere；相邻检索/RAG：Sid.ai、Glean（被创始人认为市场定位不同，Glean 偏企业搜索）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子轮 Seed | 420万美元（约 4.2M USD，累计约 4.4M） | 2025-07-09 | [链接](https://techcrunch.com/2025/07/09/moroccan-founder-raises-4-2m-for-her-yc-backed-startup-building-the-next-layer-of-ai-search/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Vera Health（医疗） | 中 | [链接](https://zeroentropy.dev/articles/zeroentropy-raises-4-2m-seed-round-to-make-ai-retrieval-truly-intelligent/) |
| Equall（法律） | 中 | [链接](https://zeroentropy.dev/articles/zeroentropy-raises-4-2m-seed-round-to-make-ai-retrieval-truly-intelligent/) |
| Assembled（客服/支持） | 中 | [链接](https://zeroentropy.dev/articles/zeroentropy-raises-4-2m-seed-round-to-make-ai-retrieval-truly-intelligent/) |
| Mem0（AI 记忆层） | 中 | [链接](https://zeroentropy.dev/articles/zeroentropy-raises-4-2m-seed-round-to-make-ai-retrieval-truly-intelligent/) |
| My AskAI（客服 AI） | 中 | [链接](https://zeroentropy.dev/articles/zeroentropy-raises-4-2m-seed-round-to-make-ai-retrieval-truly-intelligent/) |
| turbopuffer（向量数据库，联合技术博客） | 高 | [链接](https://medium.com/@ghitahouiralami/hybrid-search-reranking-in-practice-turbopuffer-zeroentropy-5ceae7200bfc) |

## 转型有术判断
1. **对制造业客户意味着什么**：ZeroEntropy 干的是「在一堆杂乱内部文档里精准找到那一段」——重排序 + 嵌入 + 托管检索。这对制造业的直接价值在于：工艺文件、设备手册、SOP、质量记录、工单历史、供应商合同这些非结构化「脏数据」，恰恰是通用向量检索最容易翻车的地方（术语缩写、图纸编号、版本混杂）。制造业上 RAG/知识助手时，答不准往往不是大模型不行，而是「检索召回的段落根本不相关」，一个专用重排序器把候选段落重排一遍，就能把答案准确率显著拉上去。它给的启示是：制造业做知识问答，别只堆一个向量库了事，检索质量（尤其重排序）才是决定「敢不敢让一线用」的胜负手；而且它开源了可自托管的重排序器，正好契合制造业对数据不出厂、本地部署的强需求。
2. **国内对标厂商**：智源研究院 BGE 系列（BAAI）——国内最主流的开源嵌入 + 重排序模型（bge-reranker），与 zerank/zembed 直接同类，且同为开源可自托管路线、阿里通义 Qwen3-Embedding / GTE 系列——大厂出品的开源嵌入模型，覆盖多语言检索、InfiniFlow RAGFlow / 上海稀宇 等 RAG 平台厂商——对标 zsearch 的托管检索一侧（端到端检索管线），但自研模型深度不及 ZeroEntropy
   > 国内在「检索模型」这一层已有强对标：智源 BGE 系列是全球开源 embedding/reranker 的头部之一，阿里通义也持续开源嵌入模型，二者在模型能力上并不落后。差距更多在「产品化封装」——ZeroEntropy 把嵌入、重排序、托管检索 API 打成一套开发者一键接入的基础设施，并配了公开对比榜单做营销。国内更多是「放出模型权重让你自己拼」，缺一个把三件套 + 评估 + 企业部署整合好的独立商业化玩家；RAGFlow/Dify 这类平台补的是管线侧，自研检索模型的深度不如 ZeroEntropy。反向情报看点：检索质量正在从「向量库的附属功能」独立成一个可单独收费的层。
3. **可迁移的干法 / 应进场景词典的词条**：重排序器 reranker、嵌入模型 embedding、RAG 检索增强、托管检索 API、交叉编码器 cross-encoder、非结构化文档检索
   > 可迁移干法：ZeroEntropy 证明了「专用重排序器」是一个能独立成立的产品品类——不做大模型、不做向量库，只把「候选结果重新排序」这一件小事做到极致，就能从 Cohere/Voyage 嘴里抢生意。迁移到制造业内部：任何已经上了 RAG 却抱怨「答不准」的场景（设备诊断助手、工艺问答、质量追溯、售后知识库），第一优先级不是换更大的模型，而是加一层重排序 + 换更贴合领域语料的嵌入模型，且优先选开源可本地部署的（BGE-reranker 等），做到数据不出厂。另一个可迁移点是它的「公开对比榜单 + 开源引流 + 闭源旗舰变现」打法，适合任何想在细分模型层建立可信度的团队。
4. **风险与存疑点**：①护城河偏薄：重排序/嵌入是模型能力竞赛，Cohere、Voyage(MongoDB)、OpenAI 及开源 BGE/Qwen 都在同一赛道，420 万美元种子轮体量对抗大厂持续投入压力大，「自称榜单第一」的领先窗口可能很短。②客户集中于早期创业公司（10+ 家，多为 YC 生态），付费能力与留存不确定，尚无披露的大型企业标杆客户与收入规模。③赛道被「上下文窗口变长 + 大模型原生检索能力增强」挤压的长期风险——若基础模型自身检索/长文本能力持续变强，独立重排序层的必要性可能被部分削弱。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| ZeroEntropy Raises $4.2M Seed Round（官方公告，含具名客户与投资人） | https://zeroentropy.dev/articles/zeroentropy-raises-4-2m-seed-round-to-make-ai-retrieval-truly-intelligent/ |
| TechCrunch：Moroccan founder raises $4.2M for her YC-backed startup | https://techcrunch.com/2025/07/09/moroccan-founder-raises-4-2m-for-her-yc-backed-startup-building-the-next-layer-of-ai-search/ |
| ZeroEntropy 官网 FAQ / 产品 | https://zeroentropy.dev/faq/ |
| ZeroEntropy Models 文档 | https://docs.zeroentropy.dev/models |
| Hybrid Search + Reranking in Practice: turbopuffer + ZeroEntropy（联合技术博客） | https://medium.com/@ghitahouiralami/hybrid-search-reranking-in-practice-turbopuffer-zeroentropy-5ceae7200bfc |
| ZeroEntropy (YC W25) 官方 X | https://x.com/ZeroEntropy_AI |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
