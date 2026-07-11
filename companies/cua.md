# Cua

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：Computer-use agents with cloud sandboxes（带云沙箱的电脑操作智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/cua
- **深研状态**：researched

## 公司画像
- **团队**：创始人 Francesco Bonacci（此前在微软 Xbox / Microsoft AI 的游戏 AI 部门）。部分聚合源另列联合创始人 Alessandro Puppo（背景披露有限，低置信）。核心全职团队约 3 人。总部旧金山。YC 对接合伙人 Diana Hu。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向「电脑操作智能体（Computer-Use Agents）」的开源基础设施，自称『Computer-Use Agent 界的 Docker』。一套 API 即可在本地 6 种运行时或云端启动 Linux / Windows / macOS / Android 机器，让 AI 智能体像人一样操作真实桌面应用，并与宿主机隔离。核心组件：Cua Driver（后台电脑操作，不抢占鼠标焦点，MIT）、Cua Sandbox（跨 OS 的 VM/容器统一管理）、Lume（Apple Silicon 上基于 Apple Virtualization Framework 的 macOS/Linux 虚拟化，宣称达原生 CPU ~97% 速度）、Cua-Bench（OSWorld / ScreenSpot 等基准与 RL 环境，可导出轨迹数据集）。开箱兼容 OpenAI、Anthropic、Ollama、LM Studio、OpenRouter，以及 Claude Code、Cursor、Codex 等客户端。热池预启机器可毫秒级认领、空闲缩容至零。
- **商业模式**：开源（MIT）+ 商业化分层：GitHub 免费开源栈；托管云 Sandbox（Pro 档约 $10/月起）；Enterprise 云 / BYOC（自带云）/ 本地私有化部署；面向研究/训练的 Research Labs（评测 harness、任务包、已验证轨迹数据集服务）。定价细节未完全公开，专用机队按需报价。
- **竞争格局**：E2B、Browserbase/Anchor Browser（浏览器/云沙箱）、Scrapybara、Daytona、Modal 等云沙箱/agent 运行时；以及各大模型厂商自带的 computer-use / 桌面代理能力（Anthropic Computer Use、OpenAI Operator/CUA）。Cua 差异点在于跨全 OS（尤其 macOS 原生虚拟化）+ 开源 + 自带 benchmark/RL 数据管线。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（聚合器口径，未见官方公告） | 约 $500K | 2025-06 | [链接](https://www.rl-list.com/vendors/cua) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Google DeepMind（官网 logo 墙） | 中 | [链接](https://cua.ai/) |
| Qwen Code（官网 logo 墙） | 中 | [链接](https://cua.ai/) |
| Hugging Face（第三方 profile 列示的 logo 墙，标注 self-claimed） | 低 | [链接](https://www.rl-list.com/vendors/cua) |
| Datadog（同上 logo 墙，self-claimed） | 低 | [链接](https://www.rl-list.com/vendors/cua) |
| Meta（同上 logo 墙，self-claimed） | 低 | [链接](https://www.rl-list.com/vendors/cua) |
| Elastic / Apple / Red Hat / NVIDIA / Duolingo（同上 logo 墙，self-claimed） | 低 | [链接](https://www.rl-list.com/vendors/cua) |

## 转型有术判断
1. **对制造业客户意味着什么**：Cua 对制造业的意义在于把『让 AI 去操作现成的桌面软件』这件事产品化、可隔离化。制造企业里大量核心系统（MES、ERP、PLM、老旧上位机、CAD/CAM、质检软件、供应商门户）没有 API、只有 GUI，传统 RPA 脚本一遇界面改版就崩。计算机操作智能体 + 云沙箱意味着：可以在与生产网隔离的虚拟桌面里，让 agent 像操作员一样点开 SAP、填工单、导报表、跑一遍质检系统截图核对，出错也炸不到宿主机和产线；再配合 Cua-Bench 的轨迹录制，能把老师傅的操作流程沉淀成可回放、可评测、可持续训练的数据资产。这正是制造业『系统多、接口烂、流程靠人肉搬运』场景下，比纯 API 集成更现实的一条自动化落地路径。
2. **国内对标厂商**：云沙箱/agent 运行时：目前国内缺少完全对位的『跨全 OS + 开源 + 自带 RL 基准』一体化玩家；相邻方向是各云厂商的 Serverless 沙箱、无影/云电脑（阿里）等云桌面能力可作运行时底座、RPA→Agent 转型：来也科技 UiBot、影刀 RPA、实在智能 Chat-RPA/TARS——都在把『GUI 操作自动化』从固定脚本升级为 LLM 驱动的智能体，是 Cua『computer-use』理念在国内 to B 自动化市场最贴近的对标、Agent 沙箱/执行环境：字节扣子（Coze）、通用 agent 平台的代码/工具执行沙箱可类比其隔离运行的价值
   > Cua 与国内 RPA 厂商的分野值得注意：国产 RPA（影刀/来也/实在）走的是『成品自动化工具 + 行业解决方案』，直接卖给业务部门；Cua 走的是『开源基础设施 + 开发者/研究者』路线，卖的是让别人去搭 agent 的底座和评测数据管线。对国内厂商的启示是——当模型自身的 computer-use 能力快速变强，纯脚本 RPA 的护城河会被侵蚀，谁能提供『隔离沙箱 + 轨迹数据 + 可持续 RL 训练闭环』，谁就卡住了更上游的位置。国内目前更多停留在应用层，基础设施层（尤其跨 OS 虚拟化 + 开源基准）仍是空白，是可切入的窗口。
3. **可迁移的干法 / 应进场景词典的词条**：computer-use-agent、云沙箱/隔离执行、GUI自动化、RL环境与轨迹数据、跨OS虚拟化、RPA智能化升级
   > 可迁移的干法有三条：①『无 API 就用 GUI』——面对没有接口的老旧工业软件，不必强推系统改造，用隔离沙箱里的 computer-use agent 直接操作界面，是低改造成本的自动化解法；②『把操作变数据』——Cua-Bench 式的轨迹录制把每一次人/机操作沉淀为可评测、可回放、可训练的数据集，这套『操作即数据』思路能用于沉淀制造业老师傅的隐性经验；③『隔离优先』——所有 agent 操作跑在与宿主/产线隔离的虚拟机里，出错可回滚，这是把 AI agent 引入高风险生产环境的前提性设计，任何工业 agent 落地都应先解决隔离与可回滚，再谈能力。
4. **风险与存疑点**：①极早期、团队仅约 3 人、融资规模小（聚合器口径仅 ~$500K 且无官方披露），资金与人力单薄，商业化持续性存疑；②护城河风险——模型厂商（Anthropic/OpenAI）自带的 computer-use 能力与云沙箱赛道（E2B、Browserbase 等）都在快速逼近，开源反而降低了切换成本，变现要靠托管与数据服务而非框架本身；③客户 logo 多为 logo 墙/self-claimed（Meta、Hugging Face、Datadog 等），实为工程师个人试用还是企业级采购难以核实，真实付费转化与营收规模未披露。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Cua | Y Combinator 公司页 | https://www.ycombinator.com/companies/cua |
| trycua/cua GitHub 仓库 | https://github.com/trycua/cua |
| Cua 官网 cua.ai | https://cua.ai/ |
| Launch HN: Cua (YC X25) – Open-Source Docker Container for Computer-Use Agents | https://news.ycombinator.com/item?id=43773563 |
| Cua: RL environment vendor profile | RL List（含融资/logo 墙，标注 self-claimed） | https://www.rl-list.com/vendors/cua |
| Introducing Cua Cloud Sandbox（官方博客） | https://cua.ai/blog/introducing-cua-cloud-containers |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
