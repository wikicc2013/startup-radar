# HelixDB

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：Native graph-vector database built in Rust（用 Rust 写的原生图-向量数据库）
- **官网/锚定**：https://www.ycombinator.com/companies/helixdb
- **深研状态**：researched（在营。YC Spring 2025 (X25)，2025 年成立，开源 GitHub 约 5.6k star，2025 年下半年推出 HelixDB Cloud 托管服务。）

## 公司画像
- **团队**：2 位联合创始人：George Curtis（CEO & Co-Founder，英国背景）、Xavier Cochran（Co-Founder，Rust 核心作者，被内部称为 'the rust guy'）。团队约 6 人。
- **成立/批次**：2025
- **地点**：英国伦敦（YC 目录标注 London, UK；旧金山亦有运营）
- **产品**：用 Rust 从零写的原生「图-向量」数据库，定位「AI 记忆的数据库」。把知识图谱、向量、时序、全文检索合进单一引擎，免去应用侧再拼「向量库 + 图库 + 关系库 + 中间件」。数据模型以图 + 向量为主，同时支持 KV/文档/关系型。提供 Rust/TypeScript/Python/Go 四语言 DSL 查询、类型安全查询语言，动态请求走 POST /v1/query 无需构建部署步骤。支持 ACID 事务，本地内存/磁盘模式及云端部署。主打场景：Agent 记忆、GraphRAG、企业「Company Brain」知识底座。
- **商业模式**：开源核心（早期 AGPL-3.0，后转向 Apache-2.0 仓库许可）+ 自托管免费；商业化靠 HelixDB Cloud 托管服务（分布式、高可用、按用量自动扩缩，宣称市场最低价）。开源引流、云托管变现的典型 infra 打法。
- **竞争格局**：向量侧对标 Pinecone、Qdrant（创始人自称向量性能与二者持平）；图侧对标 Neo4j（自称图查询快至 3 个数量级）。更广义与 Weaviate、Milvus/Zilliz 等 AI 数据库，以及'向量库+图库'拼装方案竞争。差异化在于单引擎融合图+向量、Rust 高性能、对象存储降本。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed / Seed | 官方未披露；媒体（Crunchbase/getLatka）报道约 $500K | 2025-06-09 | [链接](https://www.crunchbase.com/organization/helixdb) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| MuskMap / TrumpMap（病毒式社交图谱应用，峰值约 2.5 万用户；用 HelixDB 做最短路查询把延迟从 Postgres 的 >5s 降到 50ms） | 中（创始人在 Show HN 具名描述，非官方 case study） | [链接](https://news.ycombinator.com/item?id=43975423) |
| 官网 logo 墙列出 Ashler、Orbit、Orchid 等早期用户 | 低（仅官网 logo 墙，未见可验证 case study） | [链接](https://www.helix-db.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业正把「企业大脑/知识底座」当成 AI 落地的地基：设备台账、工艺 BOM、供应商关系、质量追溯、工单历史，本质是「实体关系（图）+ 语义相似（向量）」的混合检索。传统做法要同时维护向量库、图库、关系库再写一层胶水，运维和一致性成本高。HelixDB 这类图-向量一体化引擎，指向一个信号：给制造现场的 Agent（排产助手、故障诊断、供应链问答）配「记忆」时，未来可能只需一个引擎就能同时做「找相似故障案例」和「顺着 BOM/供应链关系图往上追溯」。对制造业 IT 而言，值得关注但不必追新——它仍是 2025 年成立、单位数团队的早期项目，生产级可靠性、国产化合规、私有化部署能力都还需观望。
2. **国内对标厂商**：星环科技 Transwarp：Hippo（向量库）+ StellarDB（图数据库），是国内少数同时具备图与向量能力、且面向企业私有化的厂商，最接近'一体化'叙事、蚂蚁 TuGraph（图）/ 阿里 AnalyticDB、腾讯云 VectorDB、百度 VectorDB（向量）——多为图、向量分立产品、Zilliz/Milvus：全球领先的国产开源向量库（向量单点最强，但非原生图-向量融合）、NebulaGraph（图）——图侧代表，需与向量库拼装
   > 国内在'向量库'（Milvus/Zilliz、腾讯/百度 VectorDB）和'图库'（TuGraph、NebulaGraph、StellarDB）两条线各有强者，但像 HelixDB 这样'一个 Rust 引擎原生融合图+向量+全文+时序'的产品目前尚缺直接对标——星环 Transwarp 靠产品组合最接近'一站式 AI 数据底座'的定位。对国内团队，这是一条'融合型 AI 数据库'的差异化窗口，也提示企业选型时'少拼装、少运维'会成为越来越重要的采购权重。
3. **可迁移的干法 / 应进场景词典的词条**：AI记忆/Agent-Memory、GraphRAG、图向量融合、RAG基础设施、Rust高性能数据库、企业知识底座/CompanyBrain
   > 可迁移干法：①把「Agent 记忆」当成独立基础设施来选型，而非塞进业务库——先想清楚检索是'找相似'还是'走关系'，多数复杂场景两者都要，这正是图-向量融合的价值点；②开源引流 + 云托管变现是 AI infra 的标准打法，评估同类工具时看'自托管能力 + 托管成本'两条腿；③GraphRAG（图谱增强检索）在'需要多跳推理/追溯来源'的场景（合规、供应链、故障根因）比纯向量 RAG 更靠谱，值得在制造/供应链知识问答里试点。
4. **风险与存疑点**：①极早期：2025 年成立、约 6 人团队、种子轮资金体量小（报道约 $500K），生产级稳定性与长期维护存不确定性；②赛道拥挤且巨头环伺：向量侧有 Pinecone/Qdrant/Milvus，图侧有 Neo4j，且 Postgres(pgvector)、MongoDB 等在快速补齐向量能力，'融合'叙事的护城河待验证；③商业化与许可波动：从 AGPL 转向 Apache 反映其在'防云厂商白嫖'与'促采用'间摇摆，客户案例多为 logo 墙/社区级、缺高置信度官方 case study，落地成熟度需持续观察。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| HelixDB — Y Combinator 公司目录 | https://www.ycombinator.com/companies/helixdb |
| HelixDB 官网 The Database for AI Memory | https://www.helix-db.com/ |
| GitHub HelixDB/helix-db（Rust 开源仓库，约 5.6k star） | https://github.com/HelixDB/helix-db |
| Show HN: HelixDB – Open-source vector-graph database for AI (Rust) | https://news.ycombinator.com/item?id=43975423 |
| HelixDB — Crunchbase 融资与公司档案 | https://www.crunchbase.com/organization/helixdb |
| George Curtis — LinkedIn（CEO & Co-Founder） | https://uk.linkedin.com/in/george-curtis-12b232a5 |
| Xavier Cochran — LinkedIn（Co-Founder） | https://www.linkedin.com/in/xaviercochran/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
