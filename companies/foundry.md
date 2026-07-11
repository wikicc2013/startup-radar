# Foundry

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Platform for building and evaluating browser agents（构建与评测浏览器智能体的平台）
- **官网/锚定**：https://www.thefoundryai.com/
- **深研状态**：researched

## 公司画像
- **团队**：两位创始人，均出自 Scale AI 的 Gen AI 团队。Manil Lakabi（CEO，曾在 Scale AI 做大规模数据项目 operator，另有 Meta FRL 团队经历）；Pranav Raja（ML Researcher，在 Scale 研发人类监督新方法、构建生产级 ML 工具优化数据管线，并主导 SEAL Leaderboard 的 agentic tool-use 研究——SEAL 是 AI agent 基准评测的业内标杆）。团队约 2-5 人，正招募 founding product engineer（薪资 $300K+）。
- **成立/批次**：2024
- **地点**：美国旧金山（San Francisco）
- **产品**：面向浏览器/网页 AI agent 的『企业数据 + 仿真 + 评测 + 强化学习』基础设施。核心四件套：①Simulation——像素级、可复现的确定性浏览器快照环境（无 web drift、无噪声、不被 IP 封禁/限流）；②Evaluation——对 agent 动作做追踪与结构化错误分类；③Data——由专家标注员产出的定制数据集用于微调；④RL——在不受反爬约束下大规模训练 agent。提供 Python SDK 接入现有工作流。对标叙事：把 Waymo『先在仿真里跑无限里程再上路』的自动驾驶方法论搬到网页数字任务上。当前为 private beta。
- **商业模式**：B2B 基础设施/平台，向做浏览器 agent 的团队（AI 实验室、agent 产品公司、企业）售卖仿真环境、评测、标注数据集与 RL 训练算力；分层：benchmark 对比、全平台访问、样本数据集，按 API 用量计费。私有 beta 申请制。
- **竞争格局**：上游/相邻：Scale AI（创始人老东家，做数据标注与评测，Foundry 是更垂直的 web-agent 仿真评测层）；浏览器 agent 执行侧的 Browserbase、Browser Use、Anthropic Computer Use、字节 UI-TARS 等是其潜在客户而非直接对手；评测基准侧有 WebArena、WebVoyager、SEAL Leaderboard 等学术/榜单基准，Foundry 想做的是可商用的确定性仿真+RL 闭环平台。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC / Pre-seed | 约 $500K（Y Combinator F24 标准投资额；Crunchbase 记为 1 轮 $500K，来自 1 家投资人） | 2024 | [链接](https://www.crunchbase.com/organization/foundry-d28f) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的意义在『把浏览器 agent 变成敢上真实业务系统的自动化』。制造企业早已用 RPA 在 ERP/MES/供应商门户/报关系统/客户 EDI 之间搬数据，但升级到大模型驱动的浏览器 agent 时，最大拦路虎正是 Foundry 要解决的：UI 改版漂移、登录墙、验证码、动态内容导致 agent 误操作。Foundry 的『确定性快照仿真 + 结构化错误分类 + 上线前回归测试』提供了一条安全上线路径——先在可复现的镜像环境里把供应链门户操作、对账、订单录入等流程跑到足够可靠，再放到生产系统，避免 agent 在真实 ERP 里下错单、改错库存。对制造业 IT 而言，这类『仿真评测层』是把 agent 自动化从 demo 推进到关基系统的必要护栏。
2. **国内对标厂商**：实在智能（TARS/实在 Agent）——国产 RPA+Agent 头部，做的是浏览器/GUI 的执行落地，恰恰缺 Foundry 这种确定性仿真评测层，属互补/反向对标、来也科技（UiBot / 智能自动化）——RPA 平台，同样偏执行、缺大规模仿真评测与 RL 训练闭环、字节 UI-TARS——国产开源 GUI/浏览器 agent 模型本体，训练与评测需要正是 Foundry 这类仿真环境与标注数据、SuperCLUE / OpenCompass 等中文评测榜——提供模型/agent 评测口径，但非可商用的确定性网页仿真执行环境
   > 国内在『浏览器 agent 的确定性仿真 + 评测 + RL 数据』这一垂直基础设施层基本空白：现有玩家要么是 RPA/Agent 执行厂商（实在、来也、影刀），要么是 agent 模型本体（字节 UI-TARS、智谱 AutoGLM），要么是偏静态的模型评测榜（SuperCLUE、OpenCompass）。Foundry 卡位的『把真实网站冻成可复现快照、无限采样轨迹做评测和 RL』这层，国内尚无对标产品，更多是各家 agent 团队自建内部评测集。这既说明该赛道早期，也说明国产 agent 想规模化落地企业系统时，同样会撞上可靠性评测的空白——是一个可被复制的切入点。
3. **可迁移的干法 / 应进场景词典的词条**：确定性仿真环境、浏览器/网页 agent 评测、结构化错误分类、RL 训练数据合成、上线前回归测试、web-drift/反爬护栏
   > 可迁移干法：把 Waymo『先仿真再上路』搬到任何要让 agent 操作真实业务系统的场景——先把目标系统（ERP、供应商门户、政务/报关网站、客户 EDI）冻成可复现快照环境，让 agent 在里面无限试错、被结构化打分与错误归类，达标后再放到生产。这套『快照—评测—RL—回归测试』闭环对制造/供应链尤其关键：真实系统误操作代价高、且 UI 常改版，用仿真层把可靠性问题挡在上线之前，是把 agent 自动化从演示推进到关键流程的通用方法。
4. **风险与存疑点**：①极早期、团队仅 2 人、融资仅 YC $500K 级，产品仍处 private beta，商业化与留存未验证；②定位漂移——半年内从『Retool for AI agents（业务流程 agent）』收敛到『浏览器 agent 仿真数据平台』，尚未证明 PMF，赛道叙事仍在校准；③卡位『中间层』风险大——上游 Scale AI、下游 Browserbase/Browser Use 及大模型厂商都可能顺手把仿真评测能力内化，护城河待建；且『把真实网站冻成快照』在法律/反爬合规上存在灰色地带。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Foundry 官网（Enterprise Data and Simulation for AI Web Agents） | https://www.thefoundryai.com/ |
| YC Launch: Foundry - The Retool for AI Agents | https://www.ycombinator.com/launches/MLK-foundry-the-retool-for-ai-agents |
| Foundry (YC F24) 平台介绍 - Y Combinator (LinkedIn) | https://www.linkedin.com/posts/y-combinator_foundry-yc-f24-is-the-platform-to-build-activity-7267280963028549632-QB-D |
| Foundry Launches: The Retool for AI Agents - Fondo | https://fondo.com/blog/foundry-launches |
| Job alert: YC-backed Foundry hiring founding engineer at $300K+ for AI browser simulation - CO/AI | https://getcoai.com/news/job-alert-yc-backed-foundry-hiring-founding-engineer-at-300k-for-ai-browser-simulation/ |
| Foundry - Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/foundry-d28f |
| Foundry | Y Combinator's Work at a Startup | https://www.workatastartup.com/companies/foundry |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
