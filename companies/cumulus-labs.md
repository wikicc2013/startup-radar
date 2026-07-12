# Cumulus Labs

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B002
- **一句话定位**：Performant serverless GPU inference（高性能无服务器 GPU 推理）
- **官网/锚定**：https://www.ycombinator.com/companies/cumulus-labs
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2026（W26）、NVIDIA Inception，旧金山，团队 2，2025 成立,创始人 Suryaa Rajinikanth、Veer Shah。自研 Ion 推理引擎(GH200,单芯 7167 tok/s,冷启 12.5s)。分诊：留 aiinfra（高性能无服务器 GPU 推理）。）

## 公司画像
- **团队**：Suryaa Rajinikanth、Veer Shah。团队约 2 人。
- **成立/批次**：2025
- **地点**：美国旧金山
- **产品**：高性能无服务器 GPU 推理 / 最快多模态推理 OS：无服务器 GPU 推理(冷启 12.5s、缩容到零、按用付费),自研 Ion 引擎(硬件原生 C++、针对 NVIDIA GH200、自定义 CUDA kernel,单芯 7167 tok/s),开箱支持主流 LLM/VLM/MoE,延迟吞吐优于自管 vLLM/SGLang;另提供本地集群管理。
- **商业模式**：无服务器 GPU 推理云+自研推理栈,按算力计费。
- **竞争格局**：推理云赛道:Modal、Baseten、Fireworks、Together。差异点在于自研 Ion 引擎+冷启 12.5s(对比 Modal 70s)+GH200 硬件原生。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26 / NVIDIA Inception（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/cumulus-labs) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 AI 推理而言,Cumulus 代表『无服务器高性能推理(冷启快+按用付费)』。制造企业部署质检/客服/工艺模型推理时,自管 GPU 利用率低、冷启慢、成本高。Cumulus 无服务器+自研引擎让推理缩容到零、按用付费、延迟低。启示:制造企业 AI 推理可迁移『无服务器 GPU 推理(自研引擎+冷启快+缩容到零)』把间歇性推理负载做成弹性按用付费,免自管 GPU,降本增效。
2. **国内对标厂商**：各类推理云/Serverless GPU、硅基流动/PPIO、无问芯穹
   > 国内推理云有硅基流动、无问芯穹等。Cumulus 差异在于自研 Ion 引擎+冷启 12.5s+GH200 硬件原生。对国内制造企业 AI 推理可对标。
3. **可迁移的干法 / 应进场景词典的词条**：无服务器GPU推理、自研推理引擎、冷启快、缩容到零、多模态、AI基础设施
   > 可迁移干法:AI 推理用『无服务器 GPU 推理(自研引擎+冷启快+缩容到零)』把间歇负载做成弹性按用付费。对制造企业 AI 推理适用。
4. **风险与存疑点**：①推理云竞争激烈;②自研引擎持续领先难度;③早期、团队 2;④GH200 硬件依赖。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Cumulus Labs: The Fastest Multimodal Inference OS | Y Combinator（W26） | https://www.ycombinator.com/companies/cumulus-labs |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
