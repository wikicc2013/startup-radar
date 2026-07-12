# Luminal

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B004
- **一句话定位**：Fastest AI inference cloud service（最快的 AI 推理云服务）
- **官网/锚定**：https://www.ycombinator.com/companies/luminal
- **深研状态**：researched（WebSearch 一手核实：YC Summer 2025（S25），创始人 Joe Fioti(CEO,前 Intel ML 硬件)、Matthew Gunton(前 Amazon 云)、Jake Stevens(前 Apple,前创业做到 $5M ARR)。开源 ML 编译器。分诊：留 aiinfra（最快的 AI 推理云/ML 编译器）。）

## 公司画像
- **团队**：Joe Fioti(CEO,前 Intel)、Matthew Gunton(前 Amazon)、Jake Stevens(前 Apple)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：最快的 AI 推理云 / 让 AI 在任意硬件上跑快：AI 编译器+服务栈,一行代码让模型快 10x 且生产就绪;开源 ML 编译器生成极快 CUDA kernel,一行代码部署到生产;把模型编译后在 Luminal Cloud 上做低延迟高吞吐服务(KV 缓存、paged attention、序列打包等优化),对外提供全球最快、最高吞吐的推理云。
- **商业模式**：开源 ML 编译器+推理云,按算力计费。
- **竞争格局**：推理云/编译优化赛道:Cumulus、Baseten、Fireworks、Together。差异点在于自研 ML 编译器(生成快 CUDA kernel)+一行代码+跨硬件。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC S25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/luminal) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 AI 推理而言,Luminal 代表『编译优化驱动的最快推理云(一行代码)』。制造企业部署质检/客服/工艺模型推理时,自研优化门槛高、跨硬件难。Luminal 用 ML 编译器生成快 kernel、一行代码快 10x、跨硬件。启示:制造企业 AI 推理可迁移『编译优化推理云(自研编译器+一行代码提速+跨硬件)』把模型推理低门槛提速降本,尤其在异构硬件(国产芯片)上跑得快是关键。
2. **国内对标厂商**：各类推理云/编译优化、硅基流动/无问芯穹、TVM/MLIR 编译
   > 国内推理优化有无问芯穹、编译栈(TVM 等)。Luminal 差异在于自研 ML 编译器生成快 CUDA kernel+一行代码+跨硬件。对国内制造企业 AI 推理(含国产芯片适配)可对标。
3. **可迁移的干法 / 应进场景词典的词条**：AI推理云、ML编译器、一行代码提速、跨硬件、高吞吐、AI基础设施
   > 可迁移干法:AI 推理用『编译优化推理云(自研编译器+一行代码提速+跨硬件)』低门槛提速降本、异构硬件跑得快。对制造企业 AI 推理适用。
4. **风险与存疑点**：①推理云竞争激烈;②编译器持续领先难度;③早期;④生态适配。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Luminal: Making AI run fast on any hardware | Y Combinator（S25） | https://www.ycombinator.com/companies/luminal |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
