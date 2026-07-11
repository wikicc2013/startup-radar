# Partcl

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：GPU-accelerated chip design tools（GPU 加速的芯片设计工具）
- **官网/锚定**：https://www.ycombinator.com/companies/partcl
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人。William Salcedo（CEO）：曾在 NVIDIA、Stanford、Cornell；本科期间从零 tape-out 过两颗芯片，并做过最早一批由 LLM 设计的芯片之一。Vamshi Balanaga（CTO）：Stanford EECS PhD 辍学，曾任职 Apple、Carbon Robotics、Fulfil Solutions。团队背景横跨 Cornell/UC Berkeley/Stanford 与 Amazon/Apple/NVIDIA，聚焦芯片设计、软件工程与高性能计算。发布时在招 Founding Engineer(Systems+ML)、Backend EDA Compiler Engineer、Silicon Applications Engineer(AI/EDA) 等岗，属十人以内早期团队。
- **成立/批次**：2025（Crunchbase 另记 2024；YC 批次为 Spring 2025 / X25）
- **地点**：美国旧金山（San Francisco, Bay Area）
- **产品**：GPU 加速 + physics-informed（物理信息）模型的下一代 EDA（电子设计自动化）工具链，把传统需数周的芯片设计迭代压缩到分钟/秒级。核心产品 Boson：GPU-first、AI-native 的静态时序分析（STA）引擎，官方基准 10 万门网表 400ms、100 万门 1 秒、700 万门 3 秒，号称较传统 STA 工具提速约 700×；另有 Gate Resizing 提速 ~100×、global/detailed placement 提速 ~100×。目标覆盖从 RTL 优化到物理设计（placement/resizing）全链，给设计师秒级反馈。规划中：增量综合的 LSP 集成、对中间数据库的自然语言查询接口。当前支持 7nm 及以上工艺节点，路线图向 5nm/3nm 演进。
- **商业模式**：面向芯片设计团队的 EDA 软件（工具/平台订阅型，具体定价未披露）。当前为早期访问，与产业及学术伙伴合作试用；对学术机构提供折扣访问。目标客户：AI 加速器公司（加速 tapeout）、嵌入式/IoT 厂商（降 NRE 成本）、移动 SoC 厂商（优化功耗-性能权衡）。
- **竞争格局**：直接挑战传统 EDA 三巨头 Cadence / Synopsys（及 Siemens EDA）在时序签核与物理实现环节的 CPU-bound 串行架构。传统工具在先进节点上可扩展性与迭代速度受限，Partcl 以 GPU 并行 + 物理信息建模重写核心算法来抢占「快速迭代/签核」这一痛点。GPU 加速 EDA 赛道同类新势力包括 NVIDIA 自身推动的 GPU-EDA 生态、以及 Cadence/Synopsys 也在跟进的 GPU 加速产品线；竞争关键在于精度对齐签核标准与工艺节点覆盖。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / Seed | 约 $500K | 2025-04 | [链接](https://www.crunchbase.com/organization/partcl) |
| Seed（领投 Khosla Ventures） | $5M | 2025 | [链接](https://www.linkedin.com/posts/william-salcedo_today-were-excited-to-share-that-partcl-activity-7449860857120866305-u_9l) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业（尤其半导体研发与国产替代）意味着：EDA 是芯片研发的「卡脖子」工具层，其中静态时序分析、布局布线、门尺寸优化都是算力密集、迭代漫长的环节——一次 signoff 跑几天、发现一个时序违例又要重跑，是 18-24 个月流片周期里最大的「空等」成本。Partcl 用 GPU 把这些串行算法重写为并行，把周级迭代压到分钟/秒级，本质是把「算力」换「时间」，直接缩短 tapeout 周期、降低 NRE。对中国半导体而言，启示有二：其一，EDA 提速不必只在 CPU 上抠算法，GPU 并行 + 物理信息建模是一条可复制的工程路径，而国产 GPU/加速卡正好能与国产 EDA 协同形成自主闭环；其二，「快速迭代」本身会改变研发方法论——秒级反馈让 AI 驱动的 PPA 自动寻优成为可能，这对追赶中的国产芯片团队是弯道机会。风险是签核精度必须对齐工业标准、且高端节点(5nm/3nm)覆盖尚未验证。
2. **国内对标厂商**：华大九天（Empyrean）：国产 EDA 龙头，模拟全流程 + 数字部分点工具，STA/时序签核仍在补齐，可对标 Partcl 的时序/物理设计方向、芯华章（X-EPIC）：以数字验证/EDA 2.0、GPU 与云加速仿真为叙事，理念与 Partcl「GPU-native EDA」最接近、概伦电子（Primarius）：器件建模与电路仿真、DTCO 见长，物理信息建模思路可类比 Partcl 的 physics-informed models、鸿芯微纳/芯行纪（Rapid Design）：国产数字后端（布局布线/时序）新势力，直接对应 Partcl 的 placement/STA 场景
   > 国内 EDA 阵营多按「工艺流程环节」补全国产化，华大九天、概伦电子偏模拟与器件建模，数字后端（综合-布局布线-时序签核）恰是国产最薄弱、也是 Partcl 主攻的环节。芯华章的「EDA 2.0 + GPU/云加速」叙事与 Partcl 的 GPU-native 路线最同频，但 Partcl 的差异化在于把 GPU 加速 + 物理信息建模具体落到 STA 引擎(Boson)并给出可量化基准（700×、百万门秒级）。对国产玩家的反向情报价值：GPU 重写 STA/placement 是可验证的技术路径，且与国产算力自主形成协同，值得作为数字后端提速的攻坚方向重点跟踪。
3. **可迁移的干法 / 应进场景词典的词条**：GPU加速EDA、静态时序分析STA、物理信息建模、布局布线加速、AI-native芯片设计、秒级迭代反馈、PPA自动寻优
   > 可迁移干法：Partcl 的核心方法论——把「算力密集、串行、迭代慢」的传统仿真/求解算法用 GPU 重写为大规模并行，并以 physics-informed（物理信息）模型替代纯经验或纯数值方法——可迁移到制造业一切「仿真即瓶颈」的场景：CAE 结构/流体仿真、EDA 之外的电磁/热仿真、工艺 DOE、数字孪生实时求解。关键干法是「GPU-first 重构 + 物理约束建模 + 秒级反馈闭环」，让工程师从「提交-等待数周-发现错误」变成「实时试错」，从而把 AI 自动寻优叠加在快速迭代之上。制造企业做智能研发/仿真提速时，可借鉴此「用算力换迭代时间」的范式。
4. **风险与存疑点**：风险①签核精度与可信度：STA/物理设计是流片前的最后一道签核，客户对精度零容忍；Partcl 号称 700× 提速，但能否在工业级 corner/OCV/寄生参数下与 Synopsys PrimeTime 等签核金标准逐位对齐，尚无第三方验证，是采用的最大门槛。②工艺节点与生态覆盖：当前仅支持 7nm 及以上，5nm/3nm 在路线图上；且 EDA 深度绑定代工厂 PDK 与既有工具链，切换成本极高，客户多为渐进式引入。③极早期、无公开客户与营收：团队十人以内、2025 年成立、仅约 $5M 融资，面对 Cadence/Synopsys（及其自身 GPU 加速产品）的资金、生态与客户壁垒，且 NVIDIA 亲自下场推 GPU-EDA，窗口与竞争压力大；无具名客户案例，落地验证待观察。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Partcl | Y Combinator 公司页 | https://www.ycombinator.com/companies/partcl |
| Launch YC: Partcl: Design Chips in minutes | https://www.ycombinator.com/launches/NUd-partcl-design-chips-in-minutes |
| Partcl 官网 | https://partcl.com/ |
| Rethinking Static Timing Analysis with Partcl's Boson — Hiretop | https://hiretop.com/blog3/partcl-gpu-accelerated-chip-design/ |
| Startup Partcl to revolutionize chip design with AI-powered speed — American Bazaar | https://americanbazaaronline.com/2025/05/20/startup-partcl-to-revolutionize-chip-design-with-ai-powered-speed-462839/ |
| Partcl — Crunchbase 公司档案与融资 | https://www.crunchbase.com/organization/partcl |
| William Salcedo：Partcl 融资 $5M 公告（LinkedIn） | https://www.linkedin.com/posts/william-salcedo_today-were-excited-to-share-that-partcl-activity-7449860857120866305-u_9l |
| Silicon Applications Engineer (AI/EDA) at Partcl — Work at a Startup | https://www.workatastartup.com/jobs/86499 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
