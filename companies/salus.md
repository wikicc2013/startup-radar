# Salus

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Guardrails to validate your agent's actions before execution（在执行前校验智能体动作的护栏）
- **官网/锚定**：https://www.ycombinator.com/companies/salus
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人 Vedant Singh 与 Kevin Pan，斯坦福 CS/数学同窗兼室友（Vedant 主修 Math & CS，预计 2027 毕业；Kevin 有 WindBorne Systems GTM、TPG 数据分析实习经历）。YC 官方目录标注团队规模 2 人；媒体 StartupHub 称'五名前斯坦福工程师'创办，两说存在出入，以 YC 目录'2 人'为准。来源：https://www.ycombinator.com/companies/salus ；https://www.linkedin.com/in/thevedantsingh/
- **成立/批次**：2026
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向 AI Agent 的运行时护栏（runtime guardrails）代理层：以 HTTP 代理/API 形式插在 Agent 与其工具之间，在每个工具调用/动作执行前，依据版本化策略（policy）和'证据缓存'（evidence cache，含此前所有工具输出与完整对话历史）做校验；违规动作被拦截，并返回结构化反馈引导 Agent 自我修正重试。策略可用 YAML/markdown/自然语言书写，编译为可版本控制、可 diff、可影子测试（shadow test）的运行时检查。内置 PII 检测、预算/循环保护、幂等性、人工介入升级（HITL）、内容审核。宣称基准中 58% 被拦截动作可恢复并正确完成任务。集成 OpenAI/Anthropic/Gemini 等模型，LangChain/LangGraph/CrewAI/LlamaIndex 编排框架，Retell/Vapi 语音，MCP/REST/SDK 工具。定位'AI Agent 的运行时控制平面'。
- **商业模式**：B2B 开发者工具/基础设施，按 API 服务售卖；drop-in 端点替换、pip install salus 低集成成本。目标客户为在金融、医疗、旅行物流等受监管/高后果场景部署可执行动作 Agent 的企业，需销售对话协助配置组织策略（demo/销售驱动）。官网与公开渠道未披露具体定价。
- **竞争格局**：与 AI Agent 安全/护栏赛道相关：开源 Guardrails AI、NVIDIA NeMo Guardrails、Lakera、Protect AI、以及各大模型厂商自带的安全/工具调用校验；Salus 差异点在'执行前拦截动作+证据缓存校验+结构化反馈自修复'，而非仅输出评分/可观测性。公开资料未列明直接竞品。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 未披露（早期/YC W26；媒体报道称已募 $4M） | $4M（单一媒体来源 StartupHub 报道，未见官方或 Crunchbase 交叉印证） | 未披露 | [链接](https://www.startuphub.ai/ai-news/claudes-corner/2026/claudes-corner-salus-yc-w2026) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造业引入 Agent 触及 MES/ERP/WMS/采购下单/工单派发等真实系统时，一次错误动作（错发采购单、误改工艺参数、错误出入库）后果昂贵且难逆转。Salus 式'执行前拦截+证据校验+结构化反馈自修复'正是制造场景把 Agent 从 Demo 推向生产的关键安全层——可将 SOP、审批权限、预算阈值编译为运行时策略，在动作落地前卡住越权/越预算/无证据支撑的操作。
2. **国内对标厂商**：阿里安全/通义大模型安全护栏（Agent 动作合规校验方向）、蚂蚁集团大模型安全一体化/'蚁天鉴'（AI 安全评测与防护）、智谱、百度等厂商的 Agent 治理与工具调用合规能力（多为平台内置，缺独立运行时护栏代理层对标）
   > 国内独立的'Agent 运行时护栏代理层'仍属早期，多由阿里安全、蚂蚁'蚁天鉴'、智谱/百度等以平台内置能力形式提供，缺乏面向多编排框架、可 drop-in 的中立第三方运行时护栏产品，存在对标空白与本土化机会。
3. **可迁移的干法 / 应进场景词典的词条**：AI Agent 运行时护栏、动作执行前校验、AI 安全治理、策略即代码 Policy-as-code、人工介入 HITL、PII 检测/内容审核、Agent 可观测与合规、金融/医疗高后果自动化
   > 可迁移打法：①把企业既有 SOP/审批矩阵/合规红线'策略即代码'化，编译为可 diff、可影子测试的运行时检查；②以代理层/低集成成本插入现有系统，不重构 Agent；③'拦截不等于失败'——返回结构化原因引导自修复，降低人工兜底成本；④先在金融/医疗/物流等高后果垂直切入建立信任，再横向扩展。
4. **风险与存疑点**：①团队规模小（YC 标注 2 人）、2026 年新公司，产品与商业成熟度早期；②融资 $4M 仅单一媒体来源、未获官方/Crunchbase 交叉印证，且'两名'vs'五名'创始人说法不一，需谨慎引用；③尚无公开客户与规模化营收证据（'benchmarks strong'为自述）；④赛道拥挤（Guardrails AI、NeMo Guardrails、Lakera、模型厂商内置），差异化与护城河待验证；⑤运行时代理层引入延迟与单点故障风险，规模化性能待考。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
