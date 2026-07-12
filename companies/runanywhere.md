# RunAnywhere

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B002
- **一句话定位**：The default way of running on-device AI at scale（规模化端侧 AI 运行的默认方式）
- **官网/锚定**：https://www.ycombinator.com/companies/runanywhere
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2026（W26），2026.1 上线,创始人 Sanchit Monga(前 Intuit 移动,50M+ 用户系统)、Shubham Malhotra(前 Amazon EC2 Spot/Microsoft Azure,建 MetalRT——Apple Silicon 多模态推理引擎)。分诊：留 aiinfra（规模化端侧 AI 运行 SDK/平台）。）

## 公司画像
- **团队**：Sanchit Monga(前 Intuit)、Shubham Malhotra(前 Amazon EC2/Microsoft Azure)。
- **成立/批次**：2026
- **地点**：美国
- **产品**：规模化端侧 AI 运行的默认方式：一个 SDK 让 App 在 iOS/Android/边缘设备本地跑多模态 AI,自动处理模型打包、设备端优化、运行时管理;通过控制面管理模型下发与策略,让端侧 AI 成为 App 交付智能的默认方式,而非依赖云端服务器。
- **商业模式**：面向 App 开发者的端侧 AI SDK+控制面,定价未披露。
- **竞争格局**：端侧 AI 推理赛道:各类 on-device runtime、MLC、llama.cpp。差异点在于一个 SDK 跨端+控制面管下发策略+多模态。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/runanywhere) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业端侧智能而言,RunAnywhere 高度相关:制造企业的现场作业 App、车间设备、经销商终端需在无网/弱网/隐私敏感场景本地跑 AI。RunAnywhere 一个 SDK 跨端跑多模态 AI+控制面管下发。启示:制造企业端侧/边缘智能可迁移『端侧 AI SDK(跨端本地推理+控制面下发)』把 AI 部署到设备端,兼顾离线可用、低延迟、数据隐私,而非事事上云。
2. **国内对标厂商**：各类端侧推理框架、MNN/NCNN/Paddle Lite、MLC 类
   > 国内端侧推理有 MNN、NCNN、Paddle Lite。RunAnywhere 差异在于一个 SDK 跨端+控制面管下发策略+多模态。对国内制造企业端侧/边缘 AI 可对标。
3. **可迁移的干法 / 应进场景词典的词条**：端侧AI、跨端SDK、本地推理、控制面下发、边缘智能、AI基础设施
   > 可迁移干法:端侧/边缘智能用『端侧 AI SDK(跨端本地推理+控制面下发)』把 AI 部署到设备端,兼顾离线/低延迟/隐私。对制造企业端侧适用。
4. **风险与存疑点**：①端侧推理框架竞争(MNN/MLC);②设备碎片化适配;③早期;④与云侧方案边界。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| RunAnywhere: The default way of running on-device AI at Scale | Y Combinator（W26） | https://www.ycombinator.com/companies/runanywhere |
| Launch HN: RunAnywhere (YC W26) – Faster AI Inference on Apple Silicon | https://news.ycombinator.com/item?id=47326101 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
