# Human Archive

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Multimodal data provider for robotics learning（机器人学习的多模态数据供应商）
- **官网/锚定**：https://www.ycombinator.com/companies/human-archive
- **深研状态**：researched

## 公司画像
- **团队**：4 名联合创始人，均为伯克利/斯坦福辍学生：Raj Patel（CEO，斯坦福辍学，曾种芒果/植树）、Shloke Patel（斯坦福机械+CS，机器人方向，曾做农业创业，与 Raj 为堂兄弟）、Rushil Agarwal（UC Berkeley 工业工程与运筹，曾在 Coinbase 做数据管线）、Samay Maini（UC Berkeley，负责机器人多模态真实数据集）。团队约 4 人，位于旧金山湾区。
- **成立/批次**：2026
- **地点**：San Francisco Bay Area, USA（数据采集运营主要在印度）
- **产品**：机器人学习/世界模型的多模态数据供应商。自研硬件（面罩式 3D 头显、腕部摄像头、触觉手套、全身 IMU 动捕服）在住宅、餐厅、酒店、零售、交通、建筑、园艺、工业等真实场景采集对齐的多模态数据，经 QA、匿名化、标注管线加工后售给前沿机器人实验室与具身智能基础模型公司。两条数据集：HA-Multi（视觉+立体深度(IR点阵投影)+触觉手套+身体 IMU+腕部摄像头，含 3D 手部重建、力图等结构化输出）与 HA-Ego（单目 RGB 视觉+腕部摄像头）。标注含环境描述、任务标签、手部追踪、物体分割、3D 位姿重建。宣称日采集容量 8000 小时、计划 5 万+ 贡献者网络，已部署 1000+ 头显单元。
- **商业模式**：B2B 数据供应。给印度零工（gig workers）配戴摄像头帽和传感设备，采集第一人称视角(egocentric)视频、触觉力、全身动作等同步多模态数据，加工后以高保真数据集形式卖给训练物理 AI/机器人基础模型的实验室与通用机器人公司。C 端服务平台提供两档：客户可选带数据采集同意的折扣服务，或不录制的全价服务。零工基础报酬约 1 美元/小时。
- **竞争格局**：多家采集 egocentric 工作场景数据的初创（含工厂车间场景）；广义上与机器人训练数据/遥操作数据、真实世界采集数据公司竞争。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $8.2M | 2026-05-26 | [链接](https://techcrunch.com/2026/05/26/human-archive-taps-into-indias-services-startups-to-collect-data-for-physical-ai/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 家政/上门服务、酒店、餐厅行业未具名合作企业（已部署 1000+ 头显） | 中 | [链接](https://techcrunch.com/2026/05/26/human-archive-taps-into-indias-services-startups-to-collect-data-for-physical-ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的价值在两点：一是采集场景已覆盖工业/制造环境，产出的对齐多模态数据（视觉+深度+触觉+动作）正是训练工厂作业机器人、装配/上下料机器人所需的'手-眼-力'协同数据，是具身智能进车间的上游燃料；二是其'给一线工人戴传感设备、把人的操作变成机器人训练数据'的模式，本质是把制造业老师傅的隐性技能显性化、数据化——这与制造业'师傅带徒弟→AI 学操作'的技能传承数字化诉求高度同构。
2. **国内对标厂商**：龙猫数据（机器人训练/具身智能数据标注与采集）、群核科技/银河通用（具身智能仿真与数据）、银河通用 GalBot（具身智能数据+机器人本体）、国内遥操作/真实数据采集服务商（数据堂、海天瑞声等泛数据标注商向具身延伸）
   > 国内对标龙猫数据（数据采集标注老兵转具身）、银河通用/群核（仿真+真实数据）等。中国在制造场景真实数据采集上有独特优势：产业工人规模大、工厂场景密集，龙猫、数据堂等已有众包采集+标注体系，向具身数据延伸的迁移成本低；但触觉手套、全身动捕等高保真硬件栈仍是短板，多为视觉/遥操作数据为主。
3. **可迁移的干法 / 应进场景词典的词条**：具身智能数据、机器人训练数据、多模态数据采集、第一人称视角(egocentric)数据、触觉/力反馈数据、全身动捕、世界模型、物理AI、众包数据采集、灵巧操作(dexterous manipulation)
   > 可迁移打法：1) '硬件+众包+标注'三段式——用自研低成本可穿戴硬件把真实作业现场变成数据源，规模化众包采集，再靠 QA/匿名化/标注管线提纯，卖给模型方；2) '带同意折扣服务'的商业设计——把数据采集嵌入既有服务交易，用价格差换取用户/工人同意，降低获取成本；3) 场景纵深——先攻高重复、高触觉需求的家政/餐饮/制造场景，数据壁垒随场景积累。制造业可借鉴：与工厂合作，把产线工人的规范操作采集为具身训练数据，反哺自动化产线。
4. **风险与存疑点**：1) 合规/伦理风险突出——因给印度零工每小时约 1 美元的低薪采集、录像同意机制受质疑，已被印度电子和信息技术部(MeitY)调查数据采集合规性；2) 渠道受阻——Urban Company、Pronto、Snabbit 等平台拒绝合作并与其 CEO 公开摩擦；3) 竞争与薪资劣势——竞品支付 ₹250-₹400/小时，其 1 美元/小时报酬在抢人上处劣势；4) 极早期（2026 成立、团队仅 4 人、创始人均为辍学生），商业化客户尚未具名披露，护城河待验证；5) 隐私/舆情风险叠加，规模化采集与合规之间存在结构性张力。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Human Archive \| Y Combinator 公司页 | https://www.ycombinator.com/companies/human-archive |
| Jobs at Human Archive (W26) \| Work at a Startup | https://www.workatastartup.com/companies/human-archive |
| Launch YC: The World's Largest multimodal robotics dataset | https://www.ycombinator.com/launches/PeP-human-archive-the-world-s-largest-multimodal-robotics-dataset |
| TechCrunch: Human Archive taps into India's services startups to collect data for physical AI (2026-05-26) | https://techcrunch.com/2026/05/26/human-archive-taps-into-indias-services-startups-to-collect-data-for-physical-ai/ |
| Inc42: Inside Human Archive — the YC startup recording Indian workers to train the world's robots | https://inc42.com/startups/inside-human-archive-the-startup-recording-indian-workers-to-train-the-worlds-robots/ |
| GlobalIndianAlpha: Human Archive Raises $8.2M For Physical AI Robot Data | https://globalindianalpha.com/ai-training-data-provider-human-archive-raises-8-2m/ |
| Pulse2: Human Archive $8.2M Raised | https://pulse2.com/human-archive-8-2-million-raised-to-build-training-data-infrastructure-for-physical-ai/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
