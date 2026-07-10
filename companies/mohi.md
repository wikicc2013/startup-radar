# Mohi

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：AI monitoring and optimization for agents（AI 智能体的监控与优化平台）
- **官网/锚定**：https://www.ycombinator.com/companies/mohi
- **深研状态**：researched

## 公司画像
- **团队**：2 名联合创始人（团队约 3 人）。Haoran Wen（Hao）——曾在 AWS 从事 AI 与分布式系统可观测性；Evan Seeyave——曾在 Google 做自动化测试、在 SecureBio 做 AI 评测。两人相识于 MIT，合作过多个项目，因自己搭建 Agent 时深受调试之苦而创立 Mohi。
- **成立/批次**：2025
- **地点**：美国纽约（YC 目录页记为 New York City, NY；另有第三方数据源标注 San Francisco，以 YC 官方页为准）
- **产品**：面向 AI Agent 的监控、调试与优化平台。开发者用其框架无关（framework-agnostic）的轻量 SDK 一行接入、自动埋点，标记工具调用/记忆访问/上下文切换/决策逻辑等关键步骤，Mohi 即构建出层级化的执行流可视化图（父子调用关系、trace 关系），标出 Agent 在哪里成功、失败或产生幻觉；支持实时会话监控、按严重度分级的 AI 质量批判（critique）、回归检测，以及可对失败步骤用新输入重跑（re-run）。核心卖点是‘不只是可观测性，更是诊断（diagnosis）+ 自动 Prompt 调优’。
- **商业模式**：未披露。官网未公布定价与收费模式，处于早期获客阶段（引流‘正在用 Mohi 构建更好 Agent 的 AI 公司’但未具名）。典型为面向 Agent 开发者/AI 应用团队的开发者工具（SDK + SaaS 平台）路径。
- **竞争格局**：AI Agent 可观测性/调试赛道竞争激烈。YC S25 同批同类：Lucidic AI、Tropir。更广竞品：LangSmith(LangChain)、Braintrust、Arize/Phoenix、Langfuse、Helicone、InsightFinder、Sazabi 等 Agent 可观测与评测工具。差异化主打‘可视化执行图 + 诊断 + 失败步骤重跑 + 自动 Prompt 调优’。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造业在引入 Agent 做排产、质检判读、设备运维问答、供应链协同时，最大障碍是‘Agent 出错却无法定位原因、不敢上产线’。Mohi 这类‘执行流可视化 + 诊断 + 失败步骤重跑’工具，正对应制造场景对可追溯、可解释、可回归验证的强需求——把 Agent 从演示 demo 变成可审计、可交接给产线工程师维护的生产系统。
2. **国内对标厂商**：阿里云百炼/魔搭 Agent 可观测与评测能力、字节 Coze / 火山引擎的 Agent 监控与调试、LangSmith 中国生态对标（如观测云 Guance、TakinTalk 等 LLM 可观测方向）、国内 LLMOps/Agent 评测创业公司（如 Dify 的运行日志观测、Agent 评估方向）
   > 国内暂无完全对标的独立 Agent 诊断产品，能力多内嵌于阿里云百炼、字节 Coze/火山引擎、Dify 等平台的运行日志与评测模块；独立‘可视化诊断 + 自动调优’仍是空位，制造业客户当前多靠自研埋点 + 人工看日志。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 可观测性、Agent 调试、执行流可视化、幻觉定位、Prompt 自动调优、回归检测、LLMOps、开发者工具/SDK
   > 可迁移打法：①一行 SDK、框架无关、零配置自动埋点，降低产线工程师接入门槛；②把扁平日志升级为‘层级执行图’，让非 AI 背景的工艺/运维人员也能看懂 Agent 决策链路；③失败步骤带新输入原地重跑，形成‘发现-复现-修复-回归’闭环，契合制造业质量体系；④按严重度分级的自动 critique，对应制造业的缺陷分级/8D 思维。
4. **风险与存疑点**：①极早期（2025 成立、团队约 3 人、无公开融资数据），存续与交付能力未验证；②赛道拥挤（LangSmith/Braintrust/Arize/Langfuse 及 YC 同批 Lucidic、Tropir 等），差异化护城河待观察；③location 数据源冲突（YC 记 NYC、第三方记 SF），以官方 YC 页为准；④商业模式/定价未披露，付费转化不确定；⑤制造业落地需私有化/数据合规，纯 SaaS 云端方案可能受限。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
