# Fluidize

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B004
- **一句话定位**：AI-driven simulations for scientific research（面向科研的 AI 仿真）
- **官网/锚定**：https://www.ycombinator.com/launches/O5t-fluidize-ai-powered-r-d
- **深研状态**：researched（经本地研究员 WebSearch 一手核实：Fluidize，YC Summer 2025（S25），旧金山，Harvard CS/物理背景创始人（Henry Bae、Alex Fleury、Jamin Liu），$500K 早期融资（YC、CRV、Founder Collective）。注意：YC 公司页 /companies/fluidize 现显示为『Monte — Continual Learning for Agents』，与 Fluidize 同一批创始人，疑为改名/转向；本档以 Launch 页披露的 Fluidize（AI 科研 R&D 编排）为准并标注此变更。分诊维度：留『研发设计（科研仿真/实验编排）』。）

## 公司画像
- **团队**：三位创始人（哈佛 CS/物理并行硕士，背景涵盖 NASA、Lincoln Labs、哈佛物理/应用 AI 研究）：Henry Bae、Alex Fleury（COO）、Jamin Liu（CTO）。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：AI 驱动的科研 R&D 编排平台：自动化复杂科学实验与仿真的搭建、执行、验证与扩展。科学家/工程师通过 Python SDK 定义仿真/实验流水线（如 网格→求解器→验证），Fluidize 在云端执行、捕获环境与依赖以保证可复现、自动扩缩，并提供共享看板对比与复跑实验；可用自然语言引导 AI Agent 参数化与验证仿真。
- **商业模式**：面向科研/研发组织的 AI 实验编排 SaaS（Python SDK + 云端算力），具体定价未披露。
- **竞争格局**：科学计算/实验编排赛道：传统 HPC 工作流工具（Slurm 生态）、MLOps/实验管理（W&B、MLflow）、以及新兴 AI-for-Science 编排平台。Fluidize 差异点在于面向仿真/实验全流程的 AI 编排 + 可复现 + 自然语言引导。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 早期风投 | 约 50 万美元 | 2025 | [链接](https://www.ycombinator.com/launches/O5t-fluidize-ai-powered-r-d) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业与工业研发而言，Fluidize 代表『用 AI 编排把复杂仿真/实验流程自动化、可复现、可扩展』。制造业研发大量依赖 CFD、结构、热、材料等仿真与台架实验，长期靠工程师手工搭环境、调参、跑算例、记录结果，慢且难复现。Fluidize 用 AI 把『网格→求解→验证』流水线化、云端自动扩缩、全程可复现，本质是把研发仿真从『手工作坊』变成『可编排的流水线』。对制造业的启示：一是仿真/实验编排 + 可复现是研发提效与知识沉淀的通用基础设施；二是自然语言引导 AI 参数化仿真降低门槛，让更多工程师用得起高端仿真；三是云端弹性算力让中小制造企业也能跑大规模仿真。
2. **国内对标厂商**：天洑软件——AI 工业仿真、云道智造（Simdroid）——国产仿真平台、超算/云仿真平台（如阿里云 CAE 上云）、格物斯坦/各 AI-for-Science 新锐
   > 国内工业仿真有天洑、云道智造（国产 CAE），以及仿真上云方案。Fluidize 的差异在于面向科研/研发的『AI 实验编排 + 可复现 + 自然语言引导 + 云端弹性』。国内 CAE 国产化在推进，但把仿真/实验全流程做成 AI 可编排、强调可复现的平台仍早期。对国内制造业研发，可迁移『仿真实验流水线化+可复现+云端弹性算力』提效并沉淀研发知识。
3. **可迁移的干法 / 应进场景词典的词条**：科研R&D编排、仿真实验流水线、可复现计算、自然语言引导仿真、云端弹性算力、AI-for-Science
   > 可迁移干法：把研发仿真/实验从『手工搭环境调参』升级为『AI 编排的可复现流水线』——用 SDK/自然语言定义 网格→求解→验证 流程，云端自动扩缩、全程可复现、看板对比复跑。对制造业研发（CFD/结构/热/材料仿真、台架实验），可迁移『仿真实验流水线化 + 可复现 + 云端弹性』提效并沉淀知识。核心是研发仿真的工程化编排。
4. **风险与存疑点**：①极早期：2025 成立、$500K、无具名客户，产品成熟度未验证；②公司变更存疑：YC 公司页现显示『Monte / Continual Learning for Agents』，与 Fluidize 同创始人，疑改名或转向，产品方向可能已变，已据实标注；③赛道：MLOps/HPC 工作流工具在场，差异化壁垒待证；④科研工具商业化天花板与付费意愿需验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Launch YC: Fluidize: AI-powered R&D | Y Combinator（S25） | https://www.ycombinator.com/launches/O5t-fluidize-ai-powered-r-d |
| Fluidize | FYI Combinator（团队/融资交叉核实） | https://fyicombinator.com/company/fluidize |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
