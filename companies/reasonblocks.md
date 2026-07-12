# ReasonBlocks

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B001
- **一句话定位**：The runtime layer that makes AI agents cheaper and more reliable（让 AI 智能体更便宜更可靠的运行时层）
- **官网/锚定**：https://www.ycombinator.com/companies/reasonblocks
- **深研状态**：researched（WebSearch 一手核实：YC Spring 2026（P26），创始人 Sajeev Magesh(前斯坦福)、Rohan Vij(前 CMU)(合作 11 年)。SWE-Bench Pro 上降 52% token、提 42% 准确率。分诊：留 aiinfra（让 AI Agent 更便宜更可靠的运行时层）。）

## 公司画像
- **团队**：Sajeev Magesh(前斯坦福)、Rohan Vij(前 CMU)。
- **成立/批次**：2026
- **地点**：美国
- **产品**：让 AI 智能体更便宜更可靠的运行时层：运行中纠正 Agent 推理、压缩 token，收益跨 run 复利；运行中抓失败、压缩无关内容、建随每次 run 增长的私有推理库(存成功推理模式注入未来工作流，避免重犯错并大幅降 token)；SWE-Bench Pro 降 52% token、提 42% 准确。
- **商业模式**：面向 AI Agent 团队的运行时层 SaaS，定价未披露。
- **竞争格局**：Agent 运行时/优化赛道：各类 agent runtime、token 优化。差异点在于运行中纠正推理+私有推理库+降 token 提准确。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC P26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/reasonblocks) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业上 AI Agent 而言，ReasonBlocks 代表『运行时层让 Agent 更便宜更可靠』。制造企业的工业 Agent(排产/运维/质检)跑复杂任务时 token 贵、易错。ReasonBlocks 运行中纠错、压 token、建推理库。启示：制造企业部署做复杂任务的 AI Agent 可迁移『运行时优化层(运行中纠错+降 token+积累推理库)』降低 Agent 运行成本、提升可靠性。
2. **国内对标厂商**：各类 Agent 优化/缓存、大模型推理优化、token 压缩
   > 国内 Agent 运行时优化尚早期。ReasonBlocks 差异在于运行中纠正推理+私有推理库+降 52% token。对国内制造企业工业 Agent 运行优化可迁移。
3. **可迁移的干法 / 应进场景词典的词条**：Agent运行时、降token成本、提可靠性、运行中纠错、私有推理库、AI基础设施
   > 可迁移干法：复杂任务 AI Agent 用『运行时优化层(运行中纠错+降 token+积累推理库)』降成本提可靠。对制造企业工业 Agent 适用。
4. **风险与存疑点**：①极早期、团队 2；②Agent 运行时赛道涌入；③效果泛化；④基准(SWE-Bench)之外待验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| ReasonBlocks: runtime layer for cheaper, reliable AI agents | Y Combinator（P26） | https://www.ycombinator.com/companies/reasonblocks |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
