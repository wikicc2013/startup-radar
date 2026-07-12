# Compresr

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B002
- **一句话定位**：LLM-native context compression（LLM 原生的上下文压缩）
- **官网/锚定**：https://www.ycombinator.com/companies/compresr
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2026（W26），创始人 Ivan Zakazov(CEO,EPFL PhD,前 Philips Research/Microsoft)、Oussama Gabouj(CTO,EPFL,EMNLP 2025 论文)、Kamel Charaf(COO,EPFL,前 Bell Labs)。分诊：留 aiinfra（LLM 原生上下文压缩 API）。）

## 公司画像
- **团队**：Ivan Zakazov(CEO,EPFL PhD)、Oussama Gabouj(CTO)、Kamel Charaf(COO)。
- **成立/批次**：2026
- **地点**：瑞士/美国
- **产品**：LLM 原生的上下文压缩：把长上下文+查询压成保留答案关键 token 的短上下文,在削减 token 成本与延迟的同时匹配或超越全上下文准确率;提供 SDK 接入 LLM 管线,并有开源压缩代理与 Claude Code/OpenClaw 集成;直击 MCP 隐性成本(schema 在 Agent 提问前就吃光上下文窗口)。
- **商业模式**：面向 LLM 应用/Agent 的上下文压缩 API+SDK,定价未披露。
- **竞争格局**：上下文压缩赛道:The Token Company(同库)、各类 prompt compression。差异点在于 LLM 原生+SDK/代理易集成+保准确率。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/compresr) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业落地 LLM/Agent 而言,Compresr 代表『上下文压缩降本提速』。制造企业把工艺文档、工单历史、MCP 工具塞进上下文时,token 成本与延迟高。Compresr 压缩保关键信息、削成本延迟。启示:制造企业大模型应用可迁移『上下文压缩(保答案 token+削 token 成本延迟)』在长文档问答、多工具 Agent 场景降本提速,尤其规模化调用时经济性显著。
2. **国内对标厂商**：各类 prompt 压缩/缓存、大模型上下文优化、LLMLingua 类
   > 国内上下文压缩多为研究(LLMLingua 等)。Compresr 差异在于产品化 API+SDK/代理易集成+保准确率。对国内制造企业大模型降本可对标。
3. **可迁移的干法 / 应进场景词典的词条**：上下文压缩、降token成本、降延迟、保准确率、LLM应用、AI基础设施
   > 可迁移干法:大模型应用用『上下文压缩(保答案 token+削成本延迟)』在长文档问答、多工具 Agent 降本提速。对制造企业大模型应用适用。
4. **风险与存疑点**：①压缩与准确率的平衡边界;②上下文压缩竞争;③早期;④与模型厂商原生优化竞争。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Compresr: LLM context compression for better accuracy | Y Combinator（W26） | https://www.ycombinator.com/companies/compresr |
| Launch YC: Compresr – context compression for LLM pipelines and agents | https://www.ycombinator.com/launches/PXI-compresr-context-compression-for-llm-pipelines-and-agents |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
