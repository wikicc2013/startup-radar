# Scott AI

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Alignment layer for coding agents（编码智能体的对齐层）
- **官网/锚定**：https://www.ycombinator.com/companies/scott-ai
- **深研状态**：researched

## 公司画像
- **团队**：3 人小团队（YC F25）。联合创始人 David Maulick（CEO）——前 Coinbase staff 工程师与经理，深耕开发者平台 4 年，其平台支撑 Coinbase 95% 的 UI、65% 边缘流量、700+ 工程师日活；联合创始人 Devin Cintron（CTO）——前 Comun（Redpoint/Costanoa 投资）创始工程师兼移动负责人，Kleiner Perkins 工程 Fellow、前 Bain 顾问，Stanford CS（AI 方向）学位。
- **成立/批次**：2025
- **地点**：美国纽约（New York City, NY）
- **产品**：编码智能体（coding agent）的『对齐层 / 规划层』。核心产品 Planspaces（planspace）——在智能体开始写代码之前，让工程团队先在规格（spec）上达成一致：编排一群『专家智能体』（swarm of experts）并行探索多条架构设计路径、相互辩论、暴露分歧点，把关键选择交给开发者拍板；对齐后将『完整、已批准的上下文』委派给任意执行型编码智能体。功能含 code-grounded 设计评审、内联评论、原型分享；CLI（scott sync / push / pull）与 Scott CI（把 PR 关联回原始意图，用 Pulse 追踪运行健康度）。针对痛点：过度架构、冷门库选型、过早优化，以及智能体产出激增（10x 代码）而团队评审/对齐仍停留在 1x。
- **商业模式**：面向使用编码智能体的研发团队（尤其需大量评审智能体产出的资深工程师）的 B2B SaaS。当前处早期：官网提供候补名单（waitlist）与预约演示，与『前瞻型团队』做试点（pilot）。具体定价未披露，推测为 freemium/企业订阅模式。
- **竞争格局**：定位为『中立、agent-agnostic 的决策层』，兼容 Claude、Codex、Cursor、OpenCode、Gemini 等任意执行型智能体。竞争/相邻方向：各编码智能体自带的 Plan Mode（Claude Code、Cursor 等）、spec-driven 开发工具（如 GitHub spec-kit、Kiro）、AI 代码评审/PR 治理工具（Greptile、CodeRabbit 等）。差异化在于『执行前的多智能体架构辩论 + 团队对齐 + 上下文委派』这一层，而非替代任何单一编码智能体。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | 约 $500K（第三方聚合平台数据，非官方披露） | 2025-09-29 | [链接](https://tracxn.com/d/companies/scottai/__hTmmwLSE7PjlcKDzP1PiHhaCSFfTF5SOoYa_L4L1jFg) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造业软件/数字化团队（MES、PLM、工控、工业软件研发）在引入编码智能体后同样会遇到『AI 产代码快、人评审对齐慢』的错位。Scott 这类『执行前对齐层』的价值——把架构决策、规范约束、领域上下文在动工前固化并团队签批——恰好对应制造业对『需求可追溯、变更受控、跨部门评审』的刚性要求。可类比制造业的『设计评审/DFMEA 前置门』：把不可逆的错误挡在写码/投产之前。
2. **国内对标厂商**：通义灵码 / 阿里云 Lingma（编码智能体，含团队级规划与规范约束）、字节 Trae（AI IDE，具备 spec/plan 与多步骤执行）、腾讯 CodeBuddy / 混元编码助手（企业级编码智能体）、CodeGeeX（智谱，代码大模型与助手）、面向代码治理/评审方向：与 github-radar 交叉——国内 AI 代码评审与研发效能治理工具（如硅心 aiXcoder 的团队规范约束、各家 DevOps 平台的 AI PR 评审）
   > 国内暂无严格对标的『中立编码智能体对齐层』独立产品，能力多被内嵌进通义灵码、Trae、CodeBuddy 等一体化编码智能体的 Plan/Spec 模式中；独立的『多智能体架构辩论 + 团队签批 + 上下文委派』尚属空白，是国内可切入的产品位差。
3. **可迁移的干法 / 应进场景词典的词条**：编码智能体对齐层、多智能体架构辩论、spec-driven 开发、AI 研发规划/评审、代码治理、上下文委派/交接、研发团队协同、agent-agnostic 编排
   > 可迁移打法：①『执行前门禁』——在自动化/智能体动工前插入一道人机协同的规格签批环节，把领域知识与约束显式化；②『多方案辩论择优』——让多个智能体/专家并行出方案、暴露分歧、由人拍板，替代单一黑箱输出，适配制造业多学科评审；③『意图-产出可追溯』（Scott CI/Pulse 把 PR 关联回原始意图）——对应制造业变更管理与质量追溯；④中立/agent-agnostic 定位——不绑单一厂商，契合制造企业多供应商、避免锁定的采购偏好。
4. **风险与存疑点**：①极早期：仅 3 人、种子轮约 $500K（未官方披露），产品处 pilot/waitlist 阶段，商业化与留存未验证。②护城河存疑：Plan/Spec 能力正被 Claude Code、Cursor、GitHub 等编码智能体原生化，独立对齐层可能被平台方吸收（被挤压风险）。③早期客户与营收零公开数据，客户置信度无法锚定。④『Scott』为通用人名，检索需强消歧（已用 tryscott.ai / YC F25 锚定，本档指向 tryscott.ai 这家）。⑤无更名/pivot 迹象，但定位表述从『alignment layer』到『planning layer』略有措辞演化，属早期叙事调整而非 pivot。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Scott AI — Y Combinator 公司主页（F25） | https://www.ycombinator.com/companies/scott-ai |
| Scott AI 官网 tryscott.ai | https://www.tryscott.ai/ |
| MaC Venture Capital 投资组合页 — Scott AI | https://macventurecapital.com/portfolio/scott-ai/ |
| Tracxn — Scott AI 公司档案（融资约 $500K / 2025-09-29 种子轮，第三方聚合） | https://tracxn.com/d/companies/scottai/__hTmmwLSE7PjlcKDzP1PiHhaCSFfTF5SOoYa_L4L1jFg |
| Y Combinator LinkedIn — Scott AI (YC F25) 介绍其 Coding Agent Plan Mode | https://www.linkedin.com/posts/y-combinator_scott-ai-yc-f25-is-building-coding-agent-activity-7391927294279409664--lM6 |
| Scott AI — Y Combinator Work at a Startup / 招聘页 | https://www.workatastartup.com/companies/scott-ai |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
