# General Instinct

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B001
- **一句话定位**：Deployable physical AI on any edge device（可部署到任意边缘设备的物理 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/general-instinct
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2026（W26），创始人 Bill Jiao、Guanming(机器人背景)。分诊：留 aiinfra（把前沿模型部署到边缘设备/离线,面向机器人与物理 AI;与制造业机器人/IoT 强相关）。）

## 公司画像
- **团队**：Bill Jiao、Guanming(多年机器人背景)。
- **成立/批次**：2026
- **地点**：美国
- **产品**：可部署到任意边缘设备的物理 AI：首个产品 Instinct Edge——给定模型、目标设备与时延预算,返回一个在 Jetson、移动 NPU、ARM CPU、Apple Neural Engine、Snapdragon 等硬件上达标的离线运行时;底层结合压缩配方、定制 CUDA/Metal/ARM NEON kernel、持续的数据到服务管线;一例:Jetson Orin NX 上多模态分类器 111ms 冷启动、100% 决策在 150ms 预算内、零云调用。
- **商业模式**：面向机器人/物理 AI 团队的边缘部署,定价未披露。
- **竞争格局**：边缘 AI 部署赛道:各类 edge inference、模型压缩。差异点在于给定设备+时延预算返回达标离线运行时+机器人背景。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/general-instinct) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的机器人/IoT/边缘 AI 而言,General Instinct 高度相关:制造企业的工业机器人、AGV、质检相机、IoT 设备算力受限,前沿模型难落地。General Instinct 把模型压到边缘设备离线达标运行。启示:制造企业的边缘 AI(工业机器人视觉、产线质检、IoT 感知)可迁移『把前沿模型部署到边缘设备(离线+低时延+零云调用)』在受限硬件上跑强模型,尤其数据不上云、需实时的产线场景。
2. **国内对标厂商**：各类边缘 AI/模型压缩、地平线/寒武纪——边缘芯片生态、TensorRT 等推理优化
   > 国内边缘 AI 有地平线等芯片生态。General Instinct 差异在于给定设备+时延预算返回达标离线运行时。对国内制造业工业机器人/质检/IoT 边缘 AI 可迁移。
3. **可迁移的干法 / 应进场景词典的词条**：边缘AI、物理AI、模型压缩、离线部署、低时延、机器人/IoT
   > 可迁移干法:边缘 AI(工业机器人视觉/产线质检/IoT)用『把前沿模型部署到边缘设备(离线+低时延+零云)』在受限硬件跑强模型。对制造业适用。
4. **风险与存疑点**：①边缘部署工程复杂;②硬件碎片化;③早期;④与芯片厂工具竞争。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| General Instinct: Deploy AI into any edge device | Y Combinator（W26） | https://www.ycombinator.com/companies/general-instinct |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
