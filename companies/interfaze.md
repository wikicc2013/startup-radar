# Interfaze

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：AI model built for deterministic developer tasks like OCR（为 OCR 等确定性开发任务打造的 AI 模型）
- **官网/锚定**：https://www.ycombinator.com/companies/interfaze
- **深研状态**：researched

## 公司画像
- **团队**：母公司为 JigsawStack, Inc.，团队约 5 人。创始人 Yoeven D Khemlani（8 年边缘计算机视觉研究、二次创业，此前创办 JigsawStack）与联合创始人 Harsha Vardhan Khurdula（5+ 年计算机视觉与小语言模型强化学习经验、多篇同行评审论文）。YC 对接合伙人 Aaron Epstein。
- **成立/批次**：2025（JigsawStack 母体 2024 年 7 月上线，Interfaze 为其后继产品线，2025 年推出并渐进式品牌切换）
- **地点**：美国加州旧金山湾区（母公司 JigsawStack 原为新加坡背景）
- **产品**：为『确定性开发任务』打造的 AI 模型：一套新架构，把 DNN/CNN 专用小模型（OCR、目标检测、语音转写/说话人分离、分类）通过共享嵌入空间融合进 transformer 解码器，并按任务部分激活相应适配器。支持 OCR、结构化网页/单据抽取、目标检测、语音理解 STT、分类、Text-to-SQL、GUI 自动化等。100+ 语言，100 万 token 上下文、32K 输出，支持文本/图像/音频/文件/视频输入。宣称在 OCRBench V2、RedCOCO 等 9 项前沿基准上超过 Gemini Flash、Claude Sonnet、GPT-5.4 mini 系列，论文被 IEEE CAI 2026 接收。
- **商业模式**：API 按 token 计费：输入 $1.50/百万 token、输出 $3.50/百万 token，含缓存；面向开发者自助接入（self-serve），定位为可嵌入工作流的确定性 AI 基础设施。JigsawStack 品牌继续服务需要更小、本地/私有部署模型的用户。
- **竞争格局**：上游对标通用多模态大模型（Gemini Flash、Claude Sonnet、GPT mini 系列）在确定性任务上的替代；专用 OCR/文档抽取领域对标 Mistral OCR、各类文档 AI 及传统 OCR SaaS。差异化在于『专用小模型融合 + 部分激活 + 可验证确定性输出』。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed（Antler，JigsawStack 母体） | US$500K | 2024 | [链接](https://updatedata.jigsawstack.com/jigsawstack-updates-500k-pre-seed-dev-events-new-ai-updates) |
| Pre-Seed（Ada Ventures 领投，JigsawStack 母体） | US$1M | 2025 | [链接](https://news.nestia.com/detail/-/13345901) |
| YC Spring 2026（P26/X26 批次，标准投资条款金额未单独披露） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/interfaze) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 官网『trusted by builders at』展示 NVIDIA、IBM、Vercel、Supabase、Notion、Zapier、Robinhood、Airwallex、Langflow、Smithery 等 | 低 | [链接](https://interfaze.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业办公与供应链后台每天沉淀海量非结构化单据——采购订单、送货单、报关单、质检报告、发票、来料检验记录。Interfaze 主打的『确定性输出 + 可验证』正切中制造场景的痛点：单据抽取不能像通用 LLM 那样偶尔幻觉一个金额或料号，必须字段级可核对。其 OCR+结构化抽取+分类的组合，可用于应付/应收自动对账、来料单据入 ERP、质检报告归档检索等高确定性、大批量、低容错的流程。
2. **国内对标厂商**：合合信息 TextIn（智能文字识别/文档解析，OCR 与单据抽取直接对标）、来也科技 IDP（智能文档处理，票据/单据结构化抽取）、百度 OCR（通用及票据/卡证 OCR 云服务）、腾讯云/阿里云 OCR 与文档智能（结构化抽取云 API）
   > 国内制造落地不必用 Interfaze，成熟对标已很密：票据/单据抽取首选合合 TextIn、来也 IDP，通用 OCR 有百度/腾讯/阿里云 API，且这些厂商已有大量制造与财务共享中心案例、支持私有化部署，数据合规与本地化服务更贴合国内需求。Interfaze 的价值更多是『架构范式参考』而非直接采购对象。
3. **可迁移的干法 / 应进场景词典的词条**：OCR文字识别、单据/票据结构化抽取、文档智能IDP、确定性AI、结构化网页抽取、语音转写STT、目标检测、Text-to-SQL、开发者API、工作流自动化
   > 可迁移的打法有三：①『专用小模型融合而非纯大模型』——对确定性单据任务，用专用 OCR/抽取模型保精度、只在需要理解语义时调 LLM，降本又提准；②『部分激活/按任务路由』——同一入口按单据类型自动路由到最合适的模型，制造企业单据类型繁杂，这套路由思路可复用；③『可验证输出 + 字段级置信度』——把抽取结果连同来源坐标/置信度返回，供人工兜底复核，契合 HITP 人机协同，是制造财务/质检自动化落地的关键。
4. **风险与存疑点**：①品牌与主体易混淆：公司法律主体是 JigsawStack, Inc.，Interfaze 是其 pivot 后的新产品线（JigsawStack→Interfaze 渐进式品牌切换），追踪时需注意同一实体两个名字；②官网『trusted by builders at』列出的 NVIDIA/IBM/Notion 等为个人开发者层面使用，非企业级签约客户，置信度低，不可当作大客户背书；③性能宣称（超过 Gemini Flash/Claude Sonnet/GPT-5.4 mini、9 项基准领先）均为公司自述与自研论文，缺第三方独立验证；④成立很新、团队仅约 5 人，商业化与规模化存续性待观察；⑤数据出境与合规：制造企业敏感单据走海外 API 存在合规障碍，国内落地几乎必然转向本地厂商。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
