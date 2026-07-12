# Origami Robotic

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：Manipulate-anything robots（能抓取任意物体的机器人）
- **官网/锚定**：https://www.ycombinator.com/companies/origami-robotics
- **深研状态**：researched（登记 slug 为 origami-robotic，实际公司名 Origami Robotics（含 s），YC 官方目录批次为 Winter 2026（W26），而非 B002 内部批号；以 YC 一手页面为准。极早期，融资未披露。）

## 公司画像
- **团队**：两位创始人均姓 Xie。Quanting (Daniel) Xie：CMU 机器人研究所在读博士（方向为操作 AI/manipulation），有 ICRA 2024 投稿，曾在 Apple 做制造实习；Ryan Xie：密歇根大学机器人硕士，曾在建筑机器人公司 Canvas 任机器人软件工程师约 1.5 年，之前创办过 Ground Robotics 后转向本项目。团队约 5 人。
- **成立/批次**：2026
- **地点**：美国旧金山湾区（San Francisco Bay Area）
- **产品**：高自由度（high-DOF）直驱机器人灵巧手 + 与之精确匹配的可穿戴数据采集手套。核心是取消传统灵巧手常见的齿轮箱/大传动，采用「关节内直驱电机」（direct-drive in-joint motors），使动力学更易建模、控制更精准；同时把采集手套与机器手的运动学/接触/感知一一对齐，消除人机之间的「具身鸿沟」（embodiment gap）与 sim-real gap，让人手示范采集的真实数据可直接迁移到机器手部署。目标是训练一个「操作任意物体」（manipulate anything）的通用操作模型。
- **商业模式**：两条腿：①硬件销售——把灵巧手卖给具身智能/物理 AI 研究机构与工业客户；把数据采集手套卖给多家公司用于扩大操作数据规模。②数据飞轮 + 政策训练——把采集设备铺到工厂、物流中心等真实场景采集「特斯拉式」海量真实操作数据，训练通用操作模型，再向制造/物流行业输出自动化解决方案。已积累「数千小时最小具身差真实数据」用于为客户训练定制操作策略。
- **竞争格局**：未披露具体竞对。赛道上可对标：灵巧手硬件厂商（如 Shadow Robot、Wonik Allegro Hand、Sanctuary/Tesla Optimus 自研手），以及做「人手示范→机器操作」数据采集的团队（如斯坦福 UMI/ALOHA 生态、Dexterity、Physical Intelligence 等具身操作模型公司）。Origami 的差异化在于「取消齿轮箱的直驱手 + 与手套硬件严格同构」以打通数据到部署的闭环。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 未披露（YC W26 在营，通常含 YC 标准投资） | 未披露 | 未披露 | [链接](https://www.ycombinator.com/companies/origami-robotics) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Amazon（作为 Physical AI Lab 客户采购其机器手） | 中 | [链接](https://www.startuphub.ai/ai-news/claudes-corner/2026/claudes-corner-origami-robotics-yc-w2026) |
| RLWRLD（创始人称已向其售出机器手；名称拼写以官方为准） | 低 | [链接](https://www.ycombinator.com/launches/Pcl-origami-robotics-make-ai-to-learn-physical-skills-easier-than-ever) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业而言，机器人操作长期卡在「抓取/装配任意零件」的泛化难题上：传统灵巧手因齿轮箱传动导致力控与动力学难建模，示教数据又因人机具身差无法直接复用，落地成本高、迁移慢。Origami 用直驱灵巧手+同构采集手套，把「工人手上怎么干」的真实示范低损耗地变成机器可执行的技能，并主张把采集设备直接铺进工厂与物流中心边采数据边训练。若成立，意味着工厂里大量依赖手部灵巧性的工序（上下料、柔性装配、拣选、缠绕/插接）有望以「采集真实操作数据→训练通用策略→部署」的方式规模化自动化，且改造门槛比重编程/重仿真更低——本质是把制造现场变成机器人操作模型的数据源与落地场，而非先建昂贵仿真再迁移。
2. **国内对标厂商**：因时机器人 RobotEra/因时（灵巧手硬件本体，国产腱驱/直驱路线，供研究与工业集成）、强脑 BrainCo / 傲意 OYMotion（灵巧手硬件与手部数据/肌电采集）、智元机器人、宇树（具身智能整机，含灵巧操作与真实数据采集飞轮）、银河通用 / 星海图 / 千寻智能等具身操作模型公司（做通用操作策略与数据驱动 manipulation）
   > 国内对标可拆两层：硬件层——因时、傲意、强脑等做灵巧手本体，与 Origami 的直驱手正面对标；数据+模型层——智元、宇树、银河通用、星海图、千寻智能等在搭建「真实操作数据飞轮+通用操作策略」，与 Origami「采集手套→数据→通用操作模型」思路同频。国内多数走腱驱/电机+连杆路线并各自建数据采集方案，Origami 的记忆点是「直驱去齿轮箱」与「采集手套和机器手严格同构」这一软硬协同打法；国内尚少见把二者做成一一对齐硬件对的团队。
3. **可迁移的干法 / 应进场景词典的词条**：灵巧手操作、具身智能数据采集、人手示范迁移、通用操作模型、工厂/物流真实数据飞轮、直驱关节电机
   > 可迁移干法：任何依赖「稀缺真实操作/工艺数据」的制造场景，都可借鉴其「采集端与执行端硬件严格同构以消除迁移损耗」的思路——先让采集工具在物理上贴近最终执行体（同一运动学/传感），再用现场作业本身当数据源做数据飞轮，而不是先投入巨资建仿真再迁移。对国内制造企业，短期更现实的是把「工人熟练手部作业」用低成本可穿戴设备结构化采集，沉淀为可训练的工艺数据资产。
4. **风险与存疑点**：①极早期、信息稀薄：成立于 2026、约 5 人、YC W26 在营，融资/营收未披露，硬件公司资金与交付风险高。②客户证据偏弱：Amazon、RLWRLD 等客户来自创始人自述与二手报道，无独立采购合同/金额佐证，采信度中低。③技术与竞争风险：直驱去齿轮箱在负载/力矩密度上有物理权衡，通用「操作任意物体」模型是全行业未解难题，头部具身公司（Physical Intelligence、Tesla、国内智元/宇树等）资源更雄厚，硬件+模型双线作战对小团队压力极大。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Origami Robotics: Manipulate Anything Robot | Y Combinator | https://www.ycombinator.com/companies/origami-robotics |
| Launch YC: Origami Robotics: Make AI to Learn Physical Skills Easier than Ever | https://www.ycombinator.com/launches/Pcl-origami-robotics-make-ai-to-learn-physical-skills-easier-than-ever |
| Claude's Corner: Origami Robotics, The Startup Killing the Gearbox to Win Manipulation AI | StartupHub.ai | https://www.startuphub.ai/ai-news/claudes-corner/2026/claudes-corner-origami-robotics-yc-w2026 |
| Origami Robotics (YC W26) | LinkedIn | https://www.linkedin.com/company/origami-robotics-inc |
| Origami Robotics official site | https://www.origami-robotics.com/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
