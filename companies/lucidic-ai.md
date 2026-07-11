# Lucidic AI

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Training layer for reliable AI agents（面向可靠 AI 智能体的训练层）
- **官网/锚定**：https://www.ycombinator.com/companies/lucidic-ai
- **深研状态**：researched（在营。YC W25，2025 年成立，旧金山湾区。产品从「agent 可观测/调试」向「agent 训练层（仿真+自动寻优）」演进，官网现主打训练平台定位。）

## 公司画像
- **团队**：三位联合创始人，均为斯坦福 BS/MS 计算机、斯坦福 AI Lab 背景、量化交易出身：Abhinav Sinha（CEO，前 Apple 工程师、Citadel Securities/SIG 量化）、Andy Liang（CTO，前 Citadel/AppLovin，曾做 COVID 应用 GrocerCheck 逾 20 万用户）、Jeremy Tian（首席科学家，前 DRW 量化、Steel Dynamics ML 工程师）。三人斯坦福新生时相识，长期合作深度学习研究项目。
- **成立/批次**：2025
- **地点**：美国旧金山湾区（San Francisco, California）
- **产品**：面向可靠 AI 智能体的训练/评测平台。起步于 agent 可观测与调试：一行代码 lai.init() 接入，把 OpenTelemetry 与普通日志转成交互式图可视化，按记忆/动作模式聚类相似状态，支持逐步回放、'时间旅行'（改写某个状态后重跑 30-40 次看结果分布）、自定义 rubric 评测（用 investigator agent 替代传统 LLM-as-a-judge）。进而向训练层升级：暴露 agent 可调组件（LLM、系统提示、记忆、工具、护栏、上下文），用受控仿真 + 强化学习 + 贝叶斯/遗传算法自动发现失败模式、提出定向修复并在上线前验证，不改模型权重。宣称在 HotpotQA、τ²-bench、IF Bench 上较 DSPy 有最高 10x 提升。免费额度 1000 次 event/step。
- **商业模式**：B2B SaaS。免费层（1000 次 event/step 创建）+ 面向企业的定制训练/优化工程。具体定价未公开披露。
- **竞争格局**：赛道拥挤：可观测/评测侧对标 Langfuse、Helicone、LangSmith、Braintrust 等（HN 评论直指与 Langfuse/Helicone 差异化存疑，指出 YC 已有 30+ 同类）；训练/自动优化侧对标 DSPy（其官方 benchmark 即以打败 DSPy 为卖点）。差异化主张在于把'可观测+仿真+RL/遗传自动寻优'串成从调试到训练的闭环。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed / YC 标准投资 | 约 $500K（YC 标准 deal，第三方数据库口径，未见官方独立披露） | 2025-02 | [链接](https://tracxn.com/d/companies/lucidicai/__I1k0FOlstHguHPk4RTa0YoHDqnNfv81v8I8GLUYfFvU/funding-and-investors) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Cresta | 高 | [链接](https://lucidic.ai/case-studies) |
| 某匿名企业（75%→92% 准确率、优化 116 个参数） | 中 | [链接](https://lucidic.ai/case-studies) |
| Expedia | 中 | [链接](https://lucidic.ai/) |
| Palantir | 中 | [链接](https://lucidic.ai/) |
| Galen AI | 中 | [链接](https://lucidic.ai/) |
| Stanford AI Labs | 中 | [链接](https://lucidic.ai/) |
| Human Behavior | 中 | [链接](https://lucidic.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Lucidic 的内核是'把一个复杂系统的众多可调参数，用仿真+强化学习/贝叶斯/遗传算法自动寻优，并在上线前验证'——这与制造业最熟悉的工艺参数寻优、数字孪生几乎同构。它的 Cresta 案例把人工调 2-3 个月卡在 75% 的系统，通过系统化优化 116 个参数突破到 92%，本质上是'参数空间自动寻优 + 失败模式聚类（类 FMEA）+ 灰度上线回归监控'的组合拳。对制造业的启示是：当企业开始把 AI agent 用于排产、质检判定、客服工单、设备诊断等场景时，'agent 上线后如何持续调优、如何在仿真环境里先跑几十遍看结果分布再放产线'会成为刚需——这正是制造业数字孪生/试切/小批量验证思维在 AI agent 运维上的迁移。谁能把 agent 训练层做成像 CAE 仿真、DOE 实验设计一样的标准工序，谁就卡住了工业 AI 落地的关键工位。
2. **国内对标厂商**：Dify / Coze（字节）—— agent 编排与调试，覆盖可观测/调试一段，但缺自动寻优训练层、阿里云百炼 / 通义 agent 平台 —— 有 agent 评测与追踪模块，偏平台自带，非独立训练优化层、面壁/智谱等模型厂的 agent 评测工具链 —— 侧重模型与 agent 效果评估，RL/遗传自动调参的'训练层'国内基本空白
   > 国内在 agent 编排（Dify、Coze、扣子）和大平台自带的追踪/评测（阿里云百炼、腾讯元器）上已较成熟，但 Lucidic 主打的'不改权重、用仿真+RL/遗传/贝叶斯自动寻优 agent 参数并做上线前验证'这一训练优化层，国内尚缺独立的对标产品，多数团队仍停留在人工调 prompt + LLM-as-a-judge 阶段。这块是国内 agent 工具链明显的空白位，也是反向情报里值得盯的机会窗口。
3. **可迁移的干法 / 应进场景词典的词条**：参数空间自动寻优、数字孪生/仿真先行、失败模式聚类(类FMEA)、灰度上线+回归监控、上线前验证、DOE实验设计思维
   > 可迁移到制造业的干法有四条：①把'一行代码埋点→全量 trace→按状态聚类'的可观测范式搬到产线 AI 应用，先看清失败模式再谈优化；②'时间旅行式'重跑（改一个变量重跑 30-40 次看结果分布）本质就是制造业的 DOE 实验设计 + 蒙特卡洛，可用于工艺参数、排产策略的离线试验；③把人工调参（卡在 75%）升级为系统化多参数联合寻优（116 参数→92%），对应工艺/配方优化从老师傅经验转向算法寻优；④'上线前仿真验证 + 灰度放量 + 回归监控'是把制造业试切/小批量验证/SPC 监控的成熟工序，直接映射到 AI agent 的运维治理上。
4. **风险与存疑点**：①赛道极度拥挤且同质化——可观测/评测侧已有 Langfuse、Helicone、LangSmith、Braintrust 等，HN 评论直接质疑差异化，YC 内即有 30+ 同类，护城河待证；②'训练层'愿景与当前交付有落差——官网主打 RL/遗传自动寻优，但公开可验证的完整案例仅 Cresta 一家，其余多为 logo 墙（Expedia/Palantir 等未见独立案例佐证），中低置信度；③团队 3 人全为研究/量化背景、无独立披露的大额融资（仅 YC 标准约 $50 万口径且来自第三方数据库），在需要重销售与企业交付的 B2B 工具赛道，规模化与商业化能力尚未验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Lucidic AI 官网 —— The Training Platform for Reliable AI Agents | https://lucidic.ai/ |
| Lucidic AI 案例研究页（Cresta 等） | https://lucidic.ai/case-studies |
| Y Combinator 公司档案 —— Lucidic AI (YC W25) | https://www.ycombinator.com/companies/lucidic-ai |
| Launch HN: Lucidic (YC W25) – Debug, test, and evaluate AI agents in production | https://news.ycombinator.com/item?id=44735843 |
| YC Launch —— Lucidic: Analytics and testing platform for rapid agent iteration | https://www.ycombinator.com/launches/Mn7-lucidic-analytics-and-testing-platform-for-rapid-agent-iteration |
| Tracxn —— Lucidic AI 融资与投资人（第三方口径） | https://tracxn.com/d/companies/lucidicai/__I1k0FOlstHguHPk4RTa0YoHDqnNfv81v8I8GLUYfFvU/funding-and-investors |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
