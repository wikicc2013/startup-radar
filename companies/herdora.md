# Herdora

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B004
- **一句话定位**：AI that optimizes performance at hardware speed（以硬件速度优化性能的 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/herdora
- **深研状态**：researched（WebSearch 一手核实：YC Summer 2025（S25），『Cursor for CUDA』。曾帮某团队优化 Llama 部署、延迟降 67%(找出吃 40% 运行时的单个 kernel)。分诊：留 aiinfra（以硬件速度优化性能的 AI/GPU kernel 自动优化）。）

## 公司画像
- **团队**：（S25,创始人含 @technoabsurdist、@gpusteve）。
- **成立/批次**：2025
- **地点**：美国
- **产品**：以硬件速度优化性能的 AI / Cursor for CUDA：自动把 PyTorch 代码转成优化的 GPU kernel,免手写 CUDA;从生产流量学习自动实施优化,扫描/移植/基准/修补瓶颈,跨硬件最大化算力;性能退化时通知是哪次 commit 导致,定位瓶颈在模型代码/数据加载/内存 I/O/GPU-PCIe,给算子/kernel 的可视化性能地图。
- **商业模式**：面向 ML 团队的 GPU 性能优化平台,定价未披露。
- **竞争格局**：GPU 优化/编译赛道:SF Tensor、Luminal、各类 kernel 优化。差异点在于 Cursor for CUDA(PyTorch 自动转优化 kernel)+从生产流量学习+性能退化溯源。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC S25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/herdora) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 AI 算力而言,Herdora 代表『自动 GPU kernel 优化(免手写 CUDA)』。制造企业跑训练/推理时,GPU 利用率低、优化需稀缺 CUDA 专家。Herdora 自动把 PyTorch 转优化 kernel、找吃性能的瓶颈。启示:制造企业 AI 负载可迁移『自动 GPU 优化(PyTorch 转优化 kernel+瓶颈定位)』在无 CUDA 专家下把训练/推理提速降本,如案例中延迟降 67%。
2. **国内对标厂商**：各类 GPU 优化/编译、TVM/MLIR、无问芯穹/趋动
   > 国内 GPU 优化多靠编译栈/人工。Herdora 差异在于 Cursor for CUDA(自动转优化 kernel)+从生产流量学习+退化溯源。对国内制造企业 AI 算力优化可对标。
3. **可迁移的干法 / 应进场景词典的词条**：GPU kernel优化、Cursor for CUDA、自动提速、瓶颈定位、算力降本、AI基础设施
   > 可迁移干法:AI 负载用『自动 GPU 优化(PyTorch 转优化 kernel+瓶颈定位)』无 CUDA 专家下提速降本。对制造企业 AI 算力适用。
4. **风险与存疑点**：①GPU 优化竞争;②自动优化的通用性;③早期;④面向 ML 团队窄客群。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Herdora（Cursor for CUDA）| Y Combinator（S25） | https://www.ycombinator.com/companies/herdora |
| Launch YC: Herdora - Fix slow ML inference with one line of code | https://www.ycombinator.com/launches/O9x-herdora-fix-slow-ml-inference-with-one-line-of-code |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
