# Cactus

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B004
- **一句话定位**：On-device AI with cloud fallback（端侧 AI、云端兜底）
- **官网/锚定**：https://www.ycombinator.com/companies/cactus
- **深研状态**：researched（WebSearch 一手核实：YC Summer 2025（S25），已融约 $1M。开源(cactus-compute/cactus),支持 HuggingFace 上任意 LLM/VLM,SDK 有 React Native/Flutter/Kotlin 绑定。分诊：留 aiinfra（端侧 AI、云端兜底/低延迟移动推理引擎）。）

## 公司画像
- **团队**：（S25,创始团队信息以 YC 为准）。
- **成立/批次**：2025
- **地点**：美国
- **产品**：端侧 AI、云端兜底 / 面向手机与可穿戴的低延迟 AI 引擎：跨平台开源框架在手机、可穿戴等低功耗设备上做推理,支持 HuggingFace 任意 LLM/VLM;端侧首 token <50ms、消除网络延迟、默认完全隐私,80%+ 生产转写/LLM 推理可端侧完成;对复杂/受限/大上下文任务无缝兜底到云端大模型,保稳健与高可用。性能:Mac M4 Pro 173 tok/s、iPhone 17 Pro 136、Galaxy S25 Ultra 91、树莓派 5 24。
- **商业模式**：端侧 AI 推理引擎(开源+SDK,$1M 融资),定价未披露。
- **竞争格局**：端侧推理赛道:RunAnywhere、Stellon/DeepGrove、各类 on-device runtime。差异点在于端云混合(端侧+云兜底)+跨平台 SDK+<50ms 首 token。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子 | 约 $1M | 2025 | [链接](https://www.ycombinator.com/companies/cactus) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业端侧智能而言,Cactus 代表『端侧 AI+云端兜底(端云混合)』。制造企业的现场作业 App、车间终端、可穿戴需端侧低延迟隐私推理,但复杂任务又需云端能力。Cactus 端侧 <50ms+复杂任务云兜底。启示:制造企业端侧/边缘 AI 可迁移『端云混合推理(端侧低延迟隐私+复杂任务云兜底)』在现场设备上兼顾响应、隐私与能力,80% 任务端侧、难任务上云,是端侧落地的务实架构。
2. **国内对标厂商**：各类端侧推理、MNN/NCNN、RunAnywhere 类
   > 国内端侧推理有 MNN、NCNN。Cactus 差异在于端云混合(端侧+云兜底)+跨平台 SDK+<50ms 首 token+支持 HF 任意模型。对国内制造企业端侧/边缘 AI 可对标。
3. **可迁移的干法 / 应进场景词典的词条**：端侧AI、云端兜底、端云混合、低延迟隐私、跨平台SDK、AI基础设施
   > 可迁移干法:端侧/边缘 AI 用『端云混合推理(端侧低延迟隐私+复杂任务云兜底)』在现场设备兼顾响应/隐私/能力。对制造企业端侧适用。
4. **风险与存疑点**：①端侧推理竞争;②端云切换的一致性;③早期;④设备碎片化适配。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Cactus: Low-latency AI engine for mobile devices & wearables | Y Combinator（S25） | https://www.ycombinator.com/companies/cactus |
| Launch HN: Cactus (YC S25) – AI inference on smartphones | https://news.ycombinator.com/item?id=45291024 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
