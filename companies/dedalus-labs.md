# Dedalus Labs

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B004
- **一句话定位**：Persistent Linux machines for AI agents（面向 AI 智能体的持久化 Linux 机器）
- **官网/锚定**：https://www.ycombinator.com/companies/dedalus-labs
- **深研状态**：researched（在营。YC S25 批次。产品从最初的「MCP 网关 / Vercel for Agents」（连接任意 LLM 与任意 MCP 服务器的 SDK）演进到当前主打的 Dedalus Machines——面向 AI 智能体的持久化 Linux 虚拟机（compute substrate）。官网现以『Fastest Persistent Computer for Agents』定位，250ms 内启动、持久运行、按活跃算力计费。）

## 公司画像
- **团队**：联合创始人 Cathy Di（CEO，普林斯顿 CS，曾任 Voyage AI、Salesforce 工程/PM）与 Windsor Nguyen（普林斯顿 CS，曾在 DeepMind、Sentient AGI，专注分布式机器学习与技术执行）。团队约 10 人，创始故事源于两人做 AI agent 时对『部署 MCP server 太难』的挫败。
- **成立/批次**：2025（YC 2025 夏季批 S25；具体注册月份未披露）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：Dedalus Machines：为 AI 智能体提供持久化、可扩展的全功能 Linux 虚拟机。基于快照启动技术，冷启动 <250ms、零冷启动、机器『永不休眠』但按活跃算力（scale-to-zero）计费；硬件级 VM 隔离、root 权限、GPU 支持、算力/存储解耦、POSIX 兼容持久存储、嵌套虚拟化。配置 1-32 vCPU、1-128GB 内存，API 三操作（create / execute / sleep）。另有开源 Agent SDK：约 5 行代码即可跨任意模型（GPT、Claude 等）与任意 MCP 工具构建可流式、非线性、带工具链与模型切换的智能体，并可 3 步部署 MCP server（无需 Docker/YAML）。
- **商业模式**：面向开发者/AI Agent 构建者的用量计费云基础设施（PaaS/IaaS）。按活跃算力（vCPU、内存、存储）计费，空闲 $0；SDK 与 MCP 部署为上层入口，Machines 为底层算力变现层。典型 Vercel-for-agents 式的自助开发者平台商业模式。
- **竞争格局**：AI 智能体沙箱/代码执行环境赛道竞争激烈：E2B（Firecracker microVM 沙箱）、Modal（含 GPU-in-sandbox）、Daytona（约 90ms 冷启动，最快）、Vercel Sandbox、Cloudflare Sandbox、Fly.io 等。截至 2026 年，Dedalus 尚未出现在主流第三方沙箱横评中，为后来挑战者；其差异点主张为『持久化 + 永不休眠 + 按活跃算力计费』与 MCP/Agent SDK 一体化。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $11,000,000 | 2025-10-15 | [链接](https://www.dedaluslabs.ai/blog/dedalus-seed-round) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的直接意味有限但方向清晰：Dedalus 卖的是『让 AI 智能体拥有一台随开随用、持久不丢状态的 Linux 机器』这一底层能力。制造企业在推进 AI Agent（如工艺参数试算、BOM/工单自动处理、设备日志诊断、CAD/仿真脚本执行、供应链爬取比价等）时，最缺的正是一个安全隔离、可长时间跑任务、能保存中间状态、又不为空闲买单的执行环境——这类『Agent 用的电脑』是把 LLM 从『会说』推进到『会干活』的关键基座。制造场景对隔离性（不让 Agent 碰到生产系统）、可持久（长流程跨天运行）、可审计的要求，恰是此类持久化沙箱的价值点。但它是纯开发者基础设施，制造业更可能通过上层 SaaS/系统集成商间接用到，而非自建。
2. **国内对标厂商**：阿里云无影 AgentBay——专为 AI Agent 提供的云端沙箱/云电脑环境，定位与 Dedalus Machines 最接近（Agent 用的持久化机器）、火山引擎 veFaaS / 沙箱能力 + 扣子（Coza）——字节侧的 Agent 运行与函数计算/沙箱执行、腾讯云 CloudStudio / Cloud Sandbox 及云函数 SCF——代码执行与隔离环境、E2B（海外但国内团队常用作对标基准）、硅基流动等提供的 Agent 运行时
   > 国内最贴切的对标是阿里云无影 AgentBay：同样把『一台专供 AI Agent 使用、可持久保存状态的云端机器』作为产品，解决 Agent 需要真实执行环境的痛点。字节火山引擎（veFaaS + 扣子）与腾讯云（云函数/CloudStudio）从函数计算与云 IDE 侧切入类似需求。差异在于：国内大厂多把沙箱作为大生态（大模型平台+Agent 开发平台）的一个组件捆绑销售，Dedalus 则是独立、以『持久化 + 永不休眠 + 按活跃计费 + MCP 原生』为卖点的专精创业公司。国内目前缺少一个同等定位的独立创业标的，是潜在空白。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 执行沙箱、持久化 Linux VM、MCP 服务器托管、按活跃算力计费、零冷启动/快照启动、硬件级隔离、Agent 云基础设施、非线性 Agent 编排
   > 可迁移的干法有三点。其一『机器即 API、只为活跃付费』：把重资产（算力/环境）做成 create-execute-sleep 三个原子操作、空闲不计费，这套 scale-to-zero 思路可迁移到任何按需重资源场景（如制造企业的仿真算力、批量质检推理）。其二『用 5 行代码收编复杂度』：把 MCP/多模型/工具链的脏活封装成极简 SDK，降低采用门槛——制造软件商做 Agent 化时同样应把 PLC/MES/CAD 对接封装成少数几个高层调用。其三『持久化 + 永不休眠』作为差异化：在人人都能做沙箱的红海里，用『长流程不丢状态』这一细分痛点切入，提示了在成熟赛道靠一个尖锐痛点后发制人的打法。
4. **风险与存疑点**：①赛道极度拥挤且巨头林立：E2B、Modal、Daytona、Vercel、Cloudflare、Fly.io 均在做 Agent 沙箱/持久 VM，Dedalus 作为后发者尚未进入主流第三方横评，差异化（持久化/按活跃计费）能否形成护城河存疑，易被大厂功能覆盖。②无公开客户与营收指标：官网与融资稿均未披露任何具名客户或用量数据，$11M 种子轮尚属早期，PMF 未证；网络聚合站(Extruct)称总融资 $26.9M 但与官方口径($11M 种子)不符，来源可信度低、以官方为准。③定位反复的执行风险：产品从『MCP 网关/Vercel for Agents』转向『持久化 Linux 机器』，一年内叙事切换，反映方向仍在收敛，且底层 microVM/快照/隔离是重工程，10 人小团队要与资金雄厚的对手拼底层性能与可靠性，长期算力成本与运维压力大。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Dedalus Labs: Compute substrate for AI agents | Y Combinator | https://www.ycombinator.com/companies/dedalus-labs |
| Fastest Persistent Computer for Agents | Dedalus Labs（官网） | https://www.dedaluslabs.ai/ |
| About Dedalus Labs, Dedalus Machines（官网 About） | https://www.dedaluslabs.ai/about |
| We raised $11M to redefine how developers build AI agents（官方融资稿） | https://www.dedaluslabs.ai/blog/dedalus-seed-round |
| Dedalus Labs: Redefining Non-Linear Agentic Workflows | Kindred Ventures | https://kindredventures.com/announcement/dedalus-labs-redefining-non-linear-agentic-workflows/ |
| Dedalus Labs Raises $11M to Redefine AI Agent Development | Access Fund | https://accessfund.vc/news/dedalus-labs-seed-announcement |
| Launch HN: Dedalus Labs (YC S25) – Vercel for Agents | https://news.ycombinator.com/item?id=45054040 |
| Daytona vs E2B vs Modal vs Vercel Sandbox: A 2026 Comparison | StartupHub.ai | https://www.startuphub.ai/ai-news/artificial-intelligence/2026/daytona-vs-e2b-vs-modal-vs-vercel-sandbox-2026 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
