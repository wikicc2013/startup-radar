# BentoLabs AI

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：Monitoring and learning layer for long-running agents（长时运行智能体的监控与学习层）
- **官网/锚定**：https://www.ycombinator.com/companies/bentolabs-ai
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人均出自 Emergent (YC S24)：Abhinav Soni（创始人，Emergent 首位员工/1号员工，带队 Agents 团队，助力 Emergent 8 个月从 0 做到 $100M ARR、两度登顶 SWE-Bench，人称 'the agent whisperer'）；Kaushik ASP（联合创始人，Emergent 第 2 号员工，负责全栈工程与长时运行智能体的初期基础设施，二次创业者，曾任职 Decathlon、Pazcare、Synup）。公司约 5 人。
- **成立/批次**：2026
- **地点**：美国加州旧金山湾区 (San Francisco)
- **产品**：Bento —— 面向长时运行 AI 智能体的『监控 + 学习』层。直接嵌入生产回路，检测智能体的静默失败(silent failure)与目标/系统提示/工具契约的漂移(drift)，定位受影响用户与根因，并给出可执行修复建议（prompt / skill / harness 三类）。其自学习引擎把每一次已解决的失败沉淀为智能体的持久记忆——新技能、修正路径或此前不存在的子智能体。内部基准显示：Terminal-Bench 2.0 上 Claude Sonnet 从 42.2%→52.4% pass@1（同模型/工具/预算，+10.2pp）；ARC-AGI-3 上首次解出 3 道此前未解谜题；宣称整体提升智能体表现约 2.6x。
- **商业模式**：面向企业/团队的 Agent 可观测性与自学习基础设施（平台即服务），嵌入客户生产环境的智能体运维回路。具体定价与计费方式未披露。
- **竞争格局**：Agent 可观测性/评测赛道：LangSmith(LangChain)、Braintrust、Arize Phoenix、Langfuse、Helicone、HoneyHive 等 LLM/Agent observability 与 eval 工具；差异点在于强调『不止监控，还闭环学习』——把失败自动转化为智能体可复用的技能与修正。注意与同名的 BentoML(模型服务框架) 无关。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未具名的独角兽级团队（'trusted by unicorns' / 'teams at unicorn scale'） | 低 | [链接](https://bentolabs.ai/about) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业上马 AI Agent（如质检判读、排产助手、设备运维问答、供应链对话式 BI）时，最大风险不是'跑不起来'而是'悄悄跑偏'——模型静默失败、被换版本后行为漂移、工具接口变更导致契约破裂，往往等到产线误判或客诉才暴露。Bento 这类监控+学习层的价值，正是把黑盒 Agent 变成可监控、可归因、可持续改进的资产，让工业场景敢把 Agent 放进关键回路。
2. **国内对标厂商**：阿里云 - 通义/百炼平台的 Agent 可观测与评测能力、字节跳动火山引擎 - 大模型应用可观测/APMPlus 对 LLM 应用的追踪、国内 LLMOps/AgentOps 初创（如 Dify、FastGPT 等平台内置的运行日志与评测）、APM 与可观测老将向 LLM 延伸：观测云(Guance)、听云等对 AI 应用链路的监控
   > 国内暂无与之完全对位的『监控+自学习闭环』独立产品，能力多分散在云厂商平台（阿里百炼、火山引擎）与 LLMOps 平台内置模块中；传统 APM 厂商（观测云、听云）正从应用可观测向 LLM/Agent 链路延伸，但'把失败自动转化为智能体技能'的闭环尚属空白，是国产化可切入点。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 可观测性、智能体运维(AgentOps)、静默失败检测、生产环境漂移监控、自学习/持续改进闭环、LLMOps、根因定位、Prompt/Skill/Harness 修复建议
   > 可迁移打法：①在 Agent 生产回路旁路部署监控，先解决'看得见'（静默失败/漂移告警 + 受影响用户 + 根因）；②再补'修得动'（给出 prompt/skill/harness 三类具体修复建议）；③最后做'越用越好'（把每次已解决失败沉淀为可复用技能/子智能体，形成飞轮）。对制造业客户，可用'同模型同预算下基准提升 X%'的可量化收益作为切入话术，降低对'黑盒 AI'的信任门槛。
4. **风险与存疑点**：①团队仅约 5 人、2026 年新成立、YC P26 早期阶段，产品与商业化均处早期；②融资金额未披露，客户仅笼统称'独角兽'、无具名，客户置信度低，实际落地规模待验证；③赛道拥挤（LangSmith/Braintrust/Langfuse 等）且云厂商可能内卷同类能力，护城河待观察；④'2.6x 提升''42.2%→52.4%'等均为公司内部基准(internal)，缺第三方复核，需审慎引用；⑤命名易与 BentoML 混淆，消歧需注意。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
