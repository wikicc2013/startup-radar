# Unsiloed AI

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Agentic OCR for enterprise documents（企业文档的智能体 OCR）
- **官网/锚定**：https://www.ycombinator.com/companies/unsiloed-ai
- **深研状态**：researched

## 公司画像
- **团队**：2 人（YC F25 时点）。联合创始人 Aman Mishra（CEO，IIT Kharagpur，曾做超低延迟高频交易系统及服务 Goldman Sachs、Charles Schwab 的金融 AI copilot）；联合创始人 Adnan Abbas（CTO，MIT + IIT Kharagpur，曾在某 Fortune 10 公司做多模态模型、在 Mercedes-Benz 做自动导航系统）。
- **成立/批次**：2025（YC Fall 2025 / F25 批次）
- **地点**：美国加州旧金山 San Francisco, CA
- **产品**：面向企业文档的「智能体 OCR / Agentic OCR」——一套解析多模态非结构化数据（PDF、PPT、DOCX、表格、图表、图片）并转成结构化 Markdown / JSON 供下游 LLM 与 AI Agent 使用的 API。技术栈：视觉优先、版面感知（layout-aware），结合计算机视觉 + OCR + 多模态模型做分割，热力图分块（heatmap-based chunking）保留文档层级，双流表示（内容流 + 版面流），并为金融/医疗/法律做领域专用解码器；带置信度打分与本地/私有化（on-prem）部署选项。自称 Parser v3.1 在 olmOCR-Bench 上取得 88.0 strict pass rate，覆盖 1403 份 PDF、8413 个单元测试，宣称胜过其他 18 家 OCR/文档 AI 平台。
- **商业模式**：API 化 SaaS（按文档/页量调用计费的开发者 API），面向需要高精度文档抽取的垂直 AI 团队；提供私有化部署满足合规敏感场景。
- **竞争格局**：官方与媒体点名的对标：LlamaIndex（LlamaParse）、Google Gemini、Mistral、Unstructured.io。同赛道还包括 Reducto、Extend、Chunkr、AWS Textract、Azure Document Intelligence 等文档解析/IDP 供应商。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 未披露 | 未披露 | [链接](https://www.crunchbase.com/organization/unsiloed-ai) |
| Seed | 未披露 | 2025-09-08（Crunchbase 标注的最新一轮日期，金额未公开） | [链接](https://www.crunchbase.com/organization/unsiloed-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Fortune 150 银行（未具名） | 中 | [链接](https://www.ycombinator.com/launches/OjU-unsiloed-ai-make-unstructured-data-llm-ready) |
| NASDAQ 上市公司（未具名） | 中 | [链接](https://www.ycombinator.com/launches/OjU-unsiloed-ai-make-unstructured-data-llm-ready) |
| 10+ 家 YC 创业公司（金融/法律/医疗方向，未具名） | 中 | [链接](https://www.ycombinator.com/companies/unsiloed-ai) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业每天处理海量「办公单据」——采购订单、供应商发票、报关单、来料检验报告(COA/COC)、图纸标注、质检记录、物料清单(BOM)、售后工单——大多以 PDF/扫描件/PPT/表格混排存在，人工录入或旧式模板 OCR 一遇版面变动就崩。Unsiloed 这类「版面感知 + 双流 + 领域解码器」的智能体 OCR，正好对应制造办公场景的痛点：把非标单据稳定转成结构化 JSON，直连 ERP/MES/WMS 或喂给采购/财务/质检的 AI Agent。可先从「发票三单匹配自动化」「供应商 COA 数据抽取入质量系统」「BOM/图纸参数结构化」三个高频、高错成本场景切入。
2. **国内对标厂商**：合合信息 TextIn（智能文档处理 / OCR，通用文档解析 API，含表格与版面还原）、来也科技 IDP（智能文档处理，面向企业单据/合同抽取，配合 RPA 落地）、合合信息 Intfinder / acge 文档解析（RAG 文档预处理方向）、腾讯云 / 阿里云 / 百度智能云文档智能 OCR（大厂通用 IDP 服务，作为价格/规模对标）
   > 国内制造落地更现实的路径是合合 TextIn、来也 IDP 这类已有大量中文单据训练、且支持私有化的厂商——它们在中文票据、增值税发票、报关单等本土单据上的开箱精度和合规交付能力通常强于海外 API；Unsiloed 的差异化在于「面向 LLM/Agent 的 Markdown+JSON 双流输出 + 版面层级保留」，更适配 RAG 与 Agent 工作流，而非仅仅字段抽取。海外 API 在中文单据、数据出境合规上是硬约束，制造客户几乎必须走私有化或国产替代。
3. **可迁移的干法 / 应进场景词典的词条**：文档抽取、智能体OCR、多模态解析、非结构化数据入湖、RAG文档预处理、表格还原、图表理解、金融单据处理、合同解析、私有化部署IDP
   > 可迁移打法：①以「一个高错成本、高频次的单据流」为楔子（如发票或质检报告），用 benchmark 数据证明精度，替换掉客户自建六个月还上不了线的解析管道；②强调「版面层级保留 + 置信度打分」，让低置信项自动转人工复核，形成人机协同兜底，降低上线门槛；③提供私有化部署打消合规顾虑；④输出直接对齐下游 Agent/ERP 接口，卖「入湖即可用」而非「一段 OCR 文本」。制造场景可包装成『非结构化单据 → 结构化数据资产』的标准化交付件。
4. **风险与存疑点**：①仅 2 人团队、极早期（YC F25），交付与私有化落地能力待验证；②融资金额未公开，抱负与实际资源存疑；③精度声明基于自家宣称的 olmOCR-Bench 结果，缺第三方独立复现，需实测；④中文单据/本土合规是海外 API 的天然短板，制造客户直接采用门槛高，更可能作为「打法参考」而非「直接供应商」；⑤赛道拥挤（LlamaParse、Reducto、Unstructured.io、大厂 IDP + 国产合合/来也），护城河主要靠精度与工程，易被追平。未发现更名或 pivot 迹象。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
