# Augento

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B006
- **一句话定位**：Reinforcement learning fine-tuning for LLMs（面向 LLM 的强化学习微调）
- **官网/锚定**：https://www.ycombinator.com/companies/augento
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2025（W25），创始人 Linus/Lukas/Hannes(均 ETH 苏黎世,CS/数据科学/分布式系统,含高频交易 ML 背景)。已融 $500K。分诊：留 aiinfra（面向 LLM/Agent 的强化学习微调,DeepSeek RFT as a service）。）

## 公司画像
- **团队**：Linus、Lukas、Hannes(均 ETH 苏黎世)。
- **成立/批次**：2025
- **地点**：美国/欧洲
- **产品**：面向 LLM 的强化学习微调 / DeepSeek 式强化微调即服务：用微调+RL(基于你的反馈)替代 prompt 工程提升 Agent 表现,仅两行代码集成;可挂进生产系统、用预定义奖励函数对 LLM 做 RL 微调;直击 prompt 有内在上限、监督微调需难收集的大数据集的痛点。
- **商业模式**：强化微调即服务($500K 融资),定价未披露。
- **竞争格局**：RL 微调赛道:RunRL、各类 fine-tuning。差异点在于 DeepSeek 式 RFT+两行代码集成+挂生产用反馈做 RL。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子 | $500K | 2025 | [链接](https://www.ycombinator.com/companies/augento) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业专业 Agent 而言,Augento 代表『用反馈做 RL 微调提升 Agent(替代 prompt)』。制造企业的专业 Agent 靠调 prompt 有上限、监督微调又缺大数据集。Augento 用生产反馈+预定义奖励做 RL 微调、两行代码集成。启示:制造企业专业 Agent(工艺问答、质检判读、排产)可迁移『RL 微调(用生产反馈+奖励函数持续提升 Agent)』把 Agent 从调 prompt 升级为基于真实反馈的强化学习持续优化,尤其有明确好坏反馈的工业任务(与 RunRL 同赛道)。
2. **国内对标厂商**：各类微调/RL、RunRL、LLaMA-Factory 类
   > 国内微调多为 SFT。Augento 差异在于 DeepSeek 式 RFT+两行代码集成+挂生产用反馈做 RL。对国内制造企业专业 Agent 微调可对标(与 RunRL 同赛道)。
3. **可迁移的干法 / 应进场景词典的词条**：RL微调、用反馈优化、替代prompt、两行集成、专业Agent、AI基础设施
   > 可迁移干法:专业 Agent 用『RL 微调(用生产反馈+奖励函数持续提升)』把 Agent 从调 prompt 升级为强化学习优化。对制造企业有明确反馈的工业任务适用。
4. **风险与存疑点**：①RL 微调门槛与稳定性;②奖励定义难度;③早期、$500K;④与 RunRL 等竞争。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Augento（RL 微调）| Y Combinator（W25） | https://www.ycombinator.com/companies/augento |
| Launch HN: Augento (YC W25) – Fine-tune your agents with reinforcement learning | https://news.ycombinator.com/item?id=43537505 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
