# Gait

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Open-source collaboration layer for AI coding（面向 AI 编码的开源协作层）
- **官网/锚定**：https://www.ycombinator.com/companies/gait
- **深研状态**：researched

## 公司画像
- **团队**：两人创始团队。Alex Hsia——CMU 计算机辍学，曾任职 Jane Street、Mercury；Kyle Li——Columbia 计算机辍学，曾任职 Jane Street、Stripe。两人在 Jane Street 暑期实习相识。团队规模 2 人。
- **成立/批次**：2024
- **地点**：美国旧金山湾区（San Francisco Bay Area）
- **产品**：Gait 是一个开源的 Cursor / VSCode 扩展，定位为「面向 AI 编码的协作层」。核心能力：①AI-Blame——把 AI 生成的每行代码与生成它的 prompt/对话关联，像升级版 git blame，悬停即可看到「这段代码是哪条提示词生成的」；②Chat 版本管理——把 AI 对话当 diff 管理，可 stage/unstage，将对话与某次 commit 或 PR 绑定，自动把 Cursor/Copilot 的 inline chat 与面板对话存入 .gait 文件夹随代码入库；③Analytics 看板——统计团队 AI codegen 使用量与对代码库的影响；④可基于同事的历史对话「续聊」。开源许可 Apache-2.0。官网后期改用「AI-Native Version Control」话术，把方向收敛到「为 AI 编码回合做版本控制」。
- **商业模式**：开源扩展获取开发者与团队装机，商业化路径指向面向工程团队的协作/可观测 SaaS（分析看板、团队上下文共享）。启动阶段未见公开定价与付费方案，商业模式尚未跑通。
- **竞争格局**：上游被其所包裹的 AI 编码工具本身覆盖（Cursor、GitHub Copilot 逐步补齐团队/上下文能力）；同赛道有把「AI 对话/提示词纳入版本管理与可观测」的新兴工具，以及传统 git blame、代码托管平台的评审能力。核心风险是所解决的「协作层」问题正被平台方内生化，独立薄层生存空间被挤压。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed（YC Fall 2024 批次） | 未披露 | 2024 | [链接](https://www.crunchbase.com/organization/gait) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的直接意义有限，但其内核可迁移。Gait 干的事本质是「给 AI 生成物做溯源与版本控制」——把每段产出与生成它的提示词、上下文、决策绑定，可回看、可审计、可交接。制造业正在引入 AI 生成工艺参数、生成 PLC/机器人代码、生成质检规则、生成排产方案，这些「AI 产出物」同样面临「谁、用什么提示、基于什么数据生成的，出问题如何追责」的黑箱问题。Gait 的「AI-Blame + 把对话当 diff 管理」思路，正对应制造业急需的「AI 决策留痕、工艺变更可追溯、跨班组交接不丢上下文」。反过来，Gait 停滞也提醒：单纯的「协作薄层」若不绑定关键业务系统（MES/PLM/质量系统），极易被平台方或大厂内生能力覆盖——制造业选型 AI 工具应优先绑定核心数据资产、而非孤立插件。
2. **国内对标厂商**：通义灵码 / CodeGeeX / 文心快码(Comate) / 豆包 MarsCode——国内主流 AI 编码助手，但均以「单人生成」为主，Gait 所在的「团队协作层 + AI 溯源」环节国内基本空白，属反向情报里的缺口位、Gitee / Coding(腾讯云) / 极狐 GitLab——国内代码托管与研发协同平台，可能成为「AI 对话入版本库」能力的天然承接方，而非独立插件、思码逸(Merico)/ SonarQube 类研发效能与代码可观测工具——与 Gait 的『AI codegen analytics（度量 AI 对代码库影响）』理念部分重叠
   > 国内目前没有与 Gait 一一对应的「面向 AI 编码的开源协作/版本控制层」直接对标；国内玩家集中在生成端（灵码、MarsCode 等）与托管端（Gitee、Coding），中间的『AI 提示词/对话溯源 + 当 diff 管理』这一层尚属空白或被研发效能工具零散覆盖。这既是 Gait 想抢的位置，也解释了它为何脆弱——中间层若不与生成端或托管端绑定，两头都可能把它吃掉。对国内而言，更可能由灵码/MarsCode 这类生成端或 Gitee/Coding 这类托管端把该能力内生化，而非长出独立产品。
3. **可迁移的干法 / 应进场景词典的词条**：AI生成物溯源、提示词版本管理、AI-Blame可追溯、对话即diff、团队AI协作层、AI用量可观测、跨人上下文交接
   > Gait 最可迁移的干法是「把不可见的生成过程变成可管理的资产」：将 prompt/对话与产出物绑定入版本库（对话即 diff）、用 blame 式界面做溯源、用看板度量 AI 对产出的实际影响。这套『生成过程留痕 + 版本化 + 可观测』的方法论，可迁移到任何『用 AI 批量生成关键产出』的场景——制造业的 AI 工艺/代码/质检规则生成、企业内的 AI 文档/合同/报表生成、AI 设计稿迭代等，都需要回答「哪条提示、什么上下文、谁改的、如何回滚」。核心心法：AI 越是黑箱、越要为其生成回合建立版本控制与审计轨迹，否则协作与合规无从谈起。
4. **风险与存疑点**：①存续风险最高：YC 官方标注 Inactive，开源仓库自 2024-10 起停更，团队仅 2 人且疑似已停摆/转向，项目大概率夭折；②定位被平台内生化：其解决的『AI 编码协作/溯源』问题正被 Cursor、Copilot 等上游工具与代码托管平台逐步自带，独立薄层缺乏护城河；③商业化未验证：无公开付费方案、无具名客户与可查融资金额，开源装机（约 46 星）规模小，未跑通从工具到收入的路径。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Gait — Y Combinator 公司页（标注 Inactive） | https://www.ycombinator.com/companies/gait |
| Launch YC: gait — The open-source collaboration layer for AI coding assistants | https://www.ycombinator.com/launches/M2z-gait-the-open-source-collaboration-layer-for-ai-coding-assistants |
| GitHub — gait-ai/gait（Apache-2.0，最后推送 2024-10-24，46 星） | https://github.com/gait-ai/gait |
| getgait.com 官网（现标题：gait - AI-Native Version Control） | https://getgait.com/ |
| gait — Product Hunt 产品页 | https://www.producthunt.com/products/gait |
| Gait — Crunchbase 公司档案（Pre-seed，YC F24） | https://www.crunchbase.com/organization/gait |
| gait Launches — Fondo 报道（创始人背景） | https://fondo.com/blog/gait-launches |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
