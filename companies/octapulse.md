# OctaPulse

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：Robotics & vision to automate fish farming（用机器人与视觉自动化养鱼）
- **官网/锚定**：https://www.ycombinator.com/companies/octapulse
- **深研状态**：researched（登记批次为 B002，实为 Y Combinator Winter 2026（W26）批次，以 YC 官方目录、YC 官方 X/LinkedIn 公告及 Launch HN（id=47220320）一手来源为准。公司 2025 年成立、YC W26。信息处于极早期，融资未公开披露。）

## 公司画像
- **团队**：两位联合创始人。Paul Grech（CEO，负责商务与合作）——CMU 机器人研究所 Pathways Fellow，此前在 Bloomberg LP 向一线资管机构销售组合风险与归因产品；现为美国国家渔业协会（National Fisheries Institute）Future Leader、可持续水产养殖联盟成员。Rohan Singh（CTO，负责工程）——CMU AI 工程硕士，曾在 Tesla、NVIDIA、ASML、Toyota 有量产机器人与软件经验；德州农工大学 D1 网球运动员出身。团队规模约 2 人。YC 对接合伙人 Jon Xu。
- **成立/批次**：2025
- **地点**：未披露（创始团队 CMU 背景，指向匹兹堡；首个部署客户 Riverence 位于美国爱达荷州）
- **产品**：用计算机视觉 + 机器人自动化鱼类养殖的质量检验（QA/QC）。切入点是孵化场环节：亲鱼表型分析（broodstock phenotyping）与幼鱼畸形检测（juvenile deformity inspection）——这两步在行业里至今仍靠人工目检，慢、易错、技术员厌恶。OctaPulse 将单尾鱼检验时间从约 5 分钟压到 30 秒以内，模型准确率 90%+（部分口径 95%+），使养殖场只推进高质量鱼、减少饲料与人力浪费。远期目标是覆盖从孵化到加工的整个鱼类生产生命周期（含投喂、健康监测、分级）。
- **商业模式**：面向垂直一体化鱼类养殖场的软硬件订阅/年度合同（SaaS + 机器人部署直接进驻孵化场作业现场），按农场/年度合同计费。已签的旗舰客户为六位数年度合同。
- **竞争格局**：现状主要竞争对手是「人工目检」这一传统作业方式（incumbent = manual inspection）。同赛道有挪威/北欧成熟的水产科技公司（如做水下摄像与生物量估算的一批厂商），但 OctaPulse 差异点在于聚焦孵化场的表型与畸形检验这一尚未被自动化的细分环节。公开来源未点名直接竞品。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（种子前/加速器） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/octapulse) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Riverence（北美最大鳟鱼生产商，美国爱达荷州） | 高 | [链接](https://www.ycombinator.com/companies/octapulse) |
| 另两家养殖场（2026 年初计划部署，未具名） | 中 | [链接](https://www.ycombinator.com/companies/octapulse) |

## 转型有术判断
1. **对制造业客户意味着什么**：OctaPulse 本质是把「离散制造的来料/在制品视觉质检」平移到了活体农业生产线上——只不过被检对象从零件变成了会游动的鱼。对制造业/工业/农业企业的启示有三层：其一，凡是「至今仍靠老师傅目检、慢且主观」的质检/分级环节，都是 CV+机器人自动化的高确定性切入点，OctaPulse 把 5 分钟/件压到 30 秒、准确率 90%+，就是典型的「用机器视觉替代人眼判级」的降本增效样板；其二，价值不在检测本身而在「早筛」——在孵化场（相当于生产最前道工序）就淘汰畸形/劣质个体，避免把不合格品继续投喂养大，等于把制造业「越早发现缺陷、返工成本越低」的质量经济学用到了养殖上；其三，它走的是「单点检验切入→沿生命周期横向扩张（投喂/健康/分级/加工）」的路径，对任何想做工业 AI 的团队都是可复用的落地节奏：先啃一个人人厌恶、ROI 可量化的窄环节，再用数据与信任向全流程铺开。
2. **国内对标厂商**：国内智慧渔业/水产 AI 视觉：如以水下摄像+AI 做鱼群计数、生物量估算、投喂决策与病害识别的一批企业（对标其「养殖过程 AI 视觉」定位，但多聚焦成鱼养殖水面/水下监测，较少切入孵化场表型与畸形检验这一细分）、农业/食品机器视觉分级：国内果蔬/水产/禽蛋的机器视觉自动分级、缺陷剔除产线设备商（对标其「以 CV 替代人工分级质检」的工艺环节）、工业机器视觉质检厂商：如做工业缺陷检测的 AI 视觉公司（对标其底层技术栈——CV 缺陷/形态识别 + 机械臂/产线集成）
   > 国内在「智慧渔业」大盘上并不缺玩家，但多数集中在成鱼养殖阶段的水下监测、投喂优化与病害预警；OctaPulse 真正卡位的是「孵化场亲鱼表型 + 幼鱼畸形检验」这一更靠前、更标准化、更像离散制造质检的细分工序，国内直接对标较稀薄，反而更接近「机器视觉工业质检 + 农业分级设备」两类成熟能力的跨界组合。对国内团队而言，可迁移的不是水产知识而是「窄环节质检自动化 + ROI 量化 + 沿链扩张」的打法。
3. **可迁移的干法 / 应进场景词典的词条**：机器视觉质检、自动分级/表型、缺陷早筛、水产养殖自动化、孵化场QA/QC、农业机器人、生命周期数据化
   > 可迁移的干法：把「至今靠人眼、慢且主观、员工厌恶」的质检/分级/表型环节作为 AI 视觉的首个落地点，用「单件耗时↓+准确率↑+早筛省下的物料/人力」三个可量化指标讲 ROI；先攻一个窄工序拿下标杆客户（如行业最大生产商的六位数年度合同）建立信任与数据飞轮，再沿生产生命周期横向扩张到投喂、健康、加工。这套「窄切入—标杆客户—数据飞轮—全链扩张」的节奏适用于制造、农业、食品等一切有大量目检环节的实体产业。
4. **风险与存疑点**：①极早期、团队仅 2 人、融资未披露，产品与客户高度依赖单一旗舰客户（Riverence），客户集中度风险高；②活体检测场景硬件工程化难度大（水下/湿滑/活体形变、现场环境远比工厂产线恶劣），从 1 家农场跑通到多场景规模化复制存在不确定性；③水产养殖客户决策慢、预算保守、季节性强，SaaS+硬件的部署与回款周期可能拉长，且赛道天花板受限于愿意为孵化场质检自动化付费的头部养殖场数量。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| OctaPulse | Y Combinator 官方目录 | https://www.ycombinator.com/companies/octapulse |
| Launch HN: OctaPulse (YC W26) – Robotics and computer vision for fish farming | https://news.ycombinator.com/item?id=47220320 |
| Y Combinator 官方 X 公告（@tryoctapulse，创始人 Paul & Rohan） | https://x.com/ycombinator/status/2024891809210794155 |
| OctaPulse Launches: Building the Autonomous Aquaculture Farms of the Future | Fondo | https://fondo.com/blog/octapulse-launches |
| OctaPulse Automates Fish Inspection for Aquaculture | YC on LinkedIn | https://www.linkedin.com/posts/y-combinator_octapulse-yc-w26-uses-robotics-and-computer-activity-7430657496291188736-Ekbk |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
