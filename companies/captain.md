# Captain

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B002
- **一句话定位**：Accurate knowledge search that scales (RAG)（可规模化的精准知识检索(RAG)）
- **官网/锚定**：https://www.ycombinator.com/companies/captain
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2026（W26），创始人 Lewis Polansky、Edgar Babajanyan(CTO,前普渡 NLP 实验室),四年深耕 RAG。分诊：留 aiinfra（面向 AI Agent 的精准知识检索/托管 RAG）。）

## 公司画像
- **团队**：Lewis Polansky、Edgar Babajanyan(CTO,前普渡 NLP 实验室)。
- **成立/批次**：2026
- **地点**：美国
- **产品**：给 AI Agent 可规模化的精准知识检索(RAG)：面向 AI Agent 的最准文件搜索引擎,索引 S3、SharePoint、Google Drive 等,支持多模态、PB 级内容搜索;把整套 RAG 栈(OCR/VLM 处理、分块、嵌入、托管向量存储、混合关键词+语义搜索、重排)抽象为一次 API 调用,在 Open-RAG-Benchmark 上比标准 RAG 高 20%+ 准确率(约 78%→95%),把 3-6 个月自建 RAG 缩到分钟级。近期推 Odyssey 私募市场情报数据集(API 可查),向专有数据商转型。
- **商业模式**：面向企业/AI Agent 的托管 RAG API,定价未披露。
- **竞争格局**：RAG 基础设施赛道:各类 vector DB、RAG 框架、Circlemind。差异点在于一次 API 抽象整栈+多模态 PB 级+基准准确率领先。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/captain) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业知识检索而言,Captain 代表『托管式精准 RAG(整栈一次 API)』。制造企业的工艺文档、图纸、SOP、质检记录散在 SharePoint/网盘,Agent 要精准检索难。Captain 一次 API 抽象整套 RAG、多模态 PB 级、准确率高。启示:制造企业知识库/客服/工艺问答可迁移『托管 RAG(整栈一次 API+多模态+高准确率)』快速给内部 Agent 接上企业知识,免自建复杂 RAG 管线。
2. **国内对标厂商**：各类向量库/RAG、阿里百炼 RAG/腾讯 ES、Dify 类
   > 国内 RAG 有百炼、Dify、腾讯 ES。Captain 差异在于一次 API 抽象整栈+多模态 PB 级+基准准确率领先。对国内制造企业知识检索可对标。
3. **可迁移的干法 / 应进场景词典的词条**：托管RAG、精准知识检索、多模态PB级、一次API、企业知识库、AI基础设施
   > 可迁移干法:知识库/工艺问答用『托管 RAG(整栈一次 API+多模态+高准确率)』快速给内部 Agent 接企业知识。对制造企业适用。
4. **风险与存疑点**：①RAG 基础设施竞争激烈;②向专有数据商转型的聚焦;③早期;④企业数据接入合规。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Captain: Give AI agents accurate knowledge search that scales | Y Combinator（W26） | https://www.ycombinator.com/companies/captain |
| Launch HN: Captain (YC W26) – Automated RAG for Files | https://news.ycombinator.com/item?id=47366011 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
