# Avea Robotics

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B001
- **一句话定位**：Teleoperate your robots from anywhere in the world（在全球任意位置远程操控你的机器人）
- **官网/锚定**：https://www.ycombinator.com/companies/avea-robotics
- **深研状态**：researched（YC 官方目录标注为 Spring 2026（部分页面写作 P26/S26，指同一季）。B001 登记的批次仅为登记编号，公司实际身份以 YC 一手页面为准。融资额度未公开披露，遵循 YC 标准投资（约 50 万美元）但官方未明示金额，故记为未披露。）

## 公司画像
- **团队**：两位联合创始人，均毕业于 UIUC（伊利诺伊大学香槟分校）后迁往旧金山湾区。Ary（Aryan）Indarapu 任 CEO；Vikram Vadrevu 为航空航天与嵌入式软件工程师，曾为 NASA 与美国国防部卫星编写飞控软件。团队规模约 2 人（创始期），在招募 Robotics 方向创始工程师（岗位挂靠 University of Illinois Research Park）。
- **成立/批次**：2026
- **地点**：美国 加州 旧金山湾区（另在伊利诺伊 Champaign-Urbana / University of Illinois Research Park 设点招聘）
- **产品**：旗舰产品 Sentinel——号称「市面上最快的远程遥操作（teleoperation）软件」。核心是超低延迟远程操控，最低延迟可达约 10 毫秒，让操作员在近实时下对机器人所处环境做出反应，从而在机器人遇到边缘情况或失败时即时介入、保持 100% 正常运行时间。功能含：沉浸式深度感知、实时力反馈（haptic）、同时支持最多 6 路全高清视频流。兼容多种机器人形态：6-DoF 标准型（Aloha 式末端执行器控制）、6-DoF 工业机械臂、7-DoF 系统（OpenArm 式整臂重定向）、双臂+躯干+行走的人形机器人，也可定制接入。
- **商业模式**：面向机器人公司的订阅式 SaaS（遥操作软件服务）。价值主张：既作为部署阶段的「人在环」兜底把机器人保持在高可用状态，又通过人工介入过程为客户采集高质量的 Physical AI 训练数据，帮助其规模化数据与部署。
- **竞争格局**：遥操作 / 人在环机器人运维赛道，竞品与相邻者包括：Formic、Cobot、以及各类为具身智能采数据的遥操作方案商（如 Aloha/Mobile-ALOHA 生态、Tele-op 数据采集初创）；更广义上与提供机器人远程监控/接管的平台（如 InOrbit、Formant 等机器人运维/可观测平台）在「保障部署可用性」上有重叠。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC (Spring 2026) + Founders, Inc. | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/avea-robotics) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 制造业客户（未具名） | 中 | [链接](https://www.ycombinator.com/launches/Qd1-avea-robotics-the-human-in-the-loop-system-for-robots) |
| 物流/仓储客户（未具名） | 中 | [链接](https://www.ycombinator.com/launches/Qd1-avea-robotics-the-human-in-the-loop-system-for-robots) |
| 酒店/服务业客户（未具名） | 低 | [链接](https://www.linkedin.com/posts/aryanindarapu_a-year-ago-vikram-vadrevu-and-i-were-in-activity-7440442002145464322-9EAY) |

## 转型有术判断
1. **对制造业客户意味着什么**：Avea 击中的是制造业机器人「落地最后一公里」的痛点：机器人一旦离开实验室进入真实产线与仓库，边缘工况与失败会造成昂贵停机，企业不得不派人现场待命兜底，反而拖垮部署 ROI。Sentinel 用 10 毫秒级超低延迟的远程遥操作，把「现场随时待命的一群人」换成「远端一名操作员可管多台机器人并即时接管」，直接提升产线机器人可用率与单人可运维机器人数（人机比）。对工业企业更深一层的意义是：介入过程本身就是高价值的 Physical AI 数据采集——每一次人工纠偏都在给自主模型喂真实失败样本，等于把「运维成本」转化为「模型迭代资产」，让工厂的自动化随部署越用越聪明。对正在导入协作臂、AGV/AMR、上下料机械臂乃至人形机器人的制造企业，这提供了一条「先带人兜底跑起来、再逐步走向全自主」的渐进式自动化路径。
2. **国内对标厂商**：达闼科技 Cloud Ginger（云端大脑 + 人机协同「HARIX」，主打云端遥操作与人在环接管，与 Sentinel 定位最接近）、优必选 / 傅利叶智能等人形机器人厂商（Sentinel 支持人形，可作为其部署期遥操作/数据采集的能力对照）、国自机器人 / 极智嘉 Geek+（工业与仓储机器人运维，需远程监控与异常接管，是潜在需求侧对标）、星尘智能 Astribot、银河通用等具身智能数据采集方（用遥操作采数据训练模型，与 Avea「介入即采数」逻辑同源）
   > 国内最贴近的是达闼——很早就把「云端大脑 + 人工接管」作为机器人商用化的核心架构，与 Avea「人在环兜底 + 超低延迟接管」几乎是同一叙事，差别在 Avea 更聚焦做通用、极致低延迟的遥操作中间层软件，而非自己造整机。另一条对标线是国内具身智能浪潮里的遥操作数据采集：星尘智能、银河通用等都在用主从遥操作大规模采集真实操作数据训练 VLA 模型，这与 Avea「每次介入都在采数据」的商业闭环高度一致。工业/仓储侧（极智嘉、国自）则代表真实的需求方——它们的机器人一旦规模部署，远程监控与异常接管就是刚需。
3. **可迁移的干法 / 应进场景词典的词条**：远程遥操作、人在环(HITL)、机器人运维、超低延迟、具身智能数据采集、力反馈/VR操控、部署可用性保障、人形机器人接管
   > 这套「人在环兜底 + 介入即采数」的干法可迁移到任何『自主系统尚不够可靠、但停机代价高』的工业场景：如产线视觉质检的人工复判闭环、AGV 调度异常的远程接管、无人叉车/巷道机器人的远程司机、乃至化工/电力等高危场所的远程操控作业。核心可复制模式是——先用远程人力把自动化系统的可用率托到商用门槛，同时把每一次人工纠偏结构化沉淀为训练数据，让系统在「带人跑」的过程中自己爬升到「无人跑」，把运维支出转成模型资产。
4. **风险与存疑点**：①极早期、团队仅约 2 人、MRR 约 1.8 万美元（年化约 20 万美元），收入与客户规模都很小，抗风险与交付能力待验证；具名客户尚未公开，早期客户信息为「制造/物流/酒店」笼统口径，可信度中低。②遥操作中间层易被上下游挤压——机器人本体厂商（尤其人形/具身玩家）可能自建接管与数据采集能力，云平台厂商（Formant/InOrbit 类）也可能下探，护城河取决于延迟工程与规模化数据网络效应能否真正领先。③强依赖网络质量与安全：10 毫秒级远程操控对工业现场网络、时延抖动、故障切换与操控安全（误操作、被劫持）要求极高，任何一次远程失控在工厂环境都可能造成安全事故与信任崩塌；融资金额未公开，现金跑道不明也是隐性风险。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Avea Robotics | Y Combinator 公司目录 | https://www.ycombinator.com/companies/avea-robotics |
| Launch YC: Avea Robotics - The human-in-the-loop system for robots | https://www.ycombinator.com/launches/Qd1-avea-robotics-the-human-in-the-loop-system-for-robots |
| Avea Robotics 官网（Sentinel 产品页） | https://www.avearobotics.com/ |
| Avea Robotics - Founders, Inc. / Artifact 团队页 | https://f.inc/artifact/teams/avea-robotics |
| Ary Indarapu LinkedIn 发文（YC 背书、0→200K ARR、约30台机器人、跨制造/物流/酒店客户） | https://www.linkedin.com/posts/aryanindarapu_a-year-ago-vikram-vadrevu-and-i-were-in-activity-7440442002145464322-9EAY |
| Founding Engineer (Robotics) 招聘（University of Illinois Research Park） | https://jobs.ashbyhq.com/avearobotics/8c6abcf1-01f4-4f6c-925f-414bbd6712d5 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
