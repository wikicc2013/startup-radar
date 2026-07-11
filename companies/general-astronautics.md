# General Astronautics

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：The space robotics company（太空机器人公司）
- **官网/锚定**：https://www.ycombinator.com/companies/generalastro
- **深研状态**：researched（批次登记为 B002，官方一手来源确认实为 YC Winter 2026（W26）批次。公司 2025 年成立，2 人小团队，位于旧金山，同时入选 NVIDIA Inception 计划。信息虽处极早期但可清晰锚定。）

## 公司画像
- **团队**：2 人。联合创始人 Bram Schork（创始人/CEO，Caltech 航空/机械工程，曾在 SpaceX 负责 Starlink 激光通信终端的硬件可靠性系统，做过工业自主机器人量产与 SBIR 资助初创的光学跟踪系统）；联合创始人 Shibo Zhou（CMU 计算机/机器人，USACO 全美前 25 决赛选手）。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向太空（微重力环境）的自主实验室机器人系统。核心是让机器人自主完成实验室湿实验流程——移液（pipetting）、样品前处理（sample prep）、微孔板操作（plate handling）、试剂混合（reagent mixing），做到无需宇航员在场即可运行。目标应用包括蛋白质结晶、生物制剂、细胞培养、先进材料与半导体（硅）在轨制造/研发。
- **商业模式**：B2B。切入点是「太空里的人力太贵」——NASA 估算 ISS 上宇航员操作时间约 13 万美元/小时，商业空间站是其 3 倍以上。用自主机器人替代宇航员操作，把微重力研发/制造从「受在轨人数瓶颈约束」变为「可规模化」。客户指向做在轨研究的药企/生物科技、先进材料、半导体公司；商业化路径推测为随商业空间站/在轨平台部署机器人并按研究项目收费（官方未披露具体定价与合同模式）。
- **竞争格局**：太空在轨自动化/微重力制造赛道：Varda Space Industries（在轨药物结晶制造，走无人回收舱路线）、Space Forge（在轨半导体/材料制造）、Redwire（微重力生物打印/结晶设施 PIL-BOX 等）；空间站侧有 Axiom、Vast、Starlab 等商业空间站作为潜在部署平台/客户。General Astronautics 差异化在于「通用实验室湿实验自主机器人」这一层，而非某一具体材料的制造工艺。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 战略投资（Strategic Investment / SAFE 性质，随 YC W26） | 100,000 美元（对应 4,000 万美元投后估值） | 2026-03-31 | [链接](https://www.newsfilecorp.com/release/290620/Planet-Ventures-Makes-Strategic-Investment-in-General-Astronautics-Accelerating-the-Future-of-Space-Robotics-and-Microgravity-Innovation) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业最直接的启示是「把稀缺且昂贵的人工操作，用自主机器人从流程里彻底抽走」这一范式在极端场景下的极致演绎。太空里一小时人力 13 万美元，逼出了「实验室湿实验全自主化」的刚需；而地面制药、生物、半导体、材料实验室里的移液/配样/板操作同样是高重复、高精度、易疲劳出错、且受人力排班约束的环节。General Astronautics 证明了自主实验机器人（lab automation robotics）已能覆盖非结构化的湿实验流程——这正是地面「黑灯实验室 / 自主实验室（self-driving lab）」的同一技术曲线。对工业企业而言，可迁移的是：先量化某道工序的「隐性人力单价+瓶颈系数」，凡是单位人力成本高、且限制产能扩张的工序，都是机器人替代的优先级最高处；微重力是把这个经济账放大到极致的试金石。
2. **国内对标厂商**：深蓝航天 / 蓝箭航天 / 星际荣耀（国内商业航天火箭与在轨能力基础设施，是「太空制造」的运力前提，但不做在轨实验机器人）、中科宇航 / 微纳星空（商业卫星与空间平台，可作在轨载荷部署方，非直接对标）、镁伽机器人 Megarobo（国内『生命科学自动化/自主实验室机器人』头部，做移液、样品处理、AI 驱动的自动化实验室——与 General Astronautics 的地面同源技术最贴近）、镁孚特 / 天壮环境等实验室自动化厂商（地面湿实验自动化，可作技术对标）
   > 国内没有「太空自主实验室机器人」的直接同类——这条赛道依赖商业空间站与在轨制造需求，国内商业航天目前主攻运力（火箭）与卫星，在轨微重力制造尚在早期（如部分院所的空间站科学实验柜）。真正与 General Astronautics 技术同源、可对标的是地面『生命科学自动化/自主实验室』玩家，以镁伽机器人（Megarobo）为代表：同样解决移液、样品前处理、高重复湿实验的机器人自主化，只是应用场景在地面药物研发而非太空。可以说 General Astronautics = 「镁伽机器人的技术内核 × 太空微重力场景 × 极端人力成本经济账」。
3. **可迁移的干法 / 应进场景词典的词条**：自主实验室机器人、湿实验自动化(移液/配样/板操作)、微重力制造、无人化替代高价人工、黑灯实验室、在轨研发平台载荷
   > 可迁移干法：把「单位人力成本 × 瓶颈系数」作为工序自动化优先级的排序公式——太空是极端案例（13 万美元/小时），地面制造/实验室同理，凡高价、高重复、限制产能扩张的人工环节最该先上机器人。其次是「湿实验/柔性操作也能自主化」的信号：过去认为移液、配样这类非标手工难自动化，如今自主机器人+视觉+力控已能覆盖，制造业的柔性装配、质检、试剂/物料配比等类似环节可参照引入。第三是「用机器人解锁人力无法规模化的场景」——不是替人省钱，而是打开原本因人力上限而做不了的产能天花板。
4. **风险与存疑点**：①极早期（2025 成立、2 人、W26 在营）、产品与在轨验证均未落地，仅一笔 10 万美元战投背书，技术与商业化风险极高，4000 万美元估值主要是叙事定价；②强依赖外部在轨平台——商业空间站（Axiom/Vast 等）与在轨制造需求的成熟节奏不由自己掌控，若空间站商业化延后，需求端会被拖住；③赛道竞争与替代路径明确（Varda 的无人回收舱、Space Forge、Redwire 已有在轨飞行记录），通用实验机器人相比「专用制造工艺」是否更有商业效率待验证；且太空湿实验（液体在微重力下的行为、可靠性、维护）工程难度极大，尚无客户/合同披露。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| General Astronautics: Robotics for Space R&D | Y Combinator | https://www.ycombinator.com/companies/generalastro |
| Planet Ventures Makes Strategic Investment in General Astronautics (Newsfile 新闻稿) | https://www.newsfilecorp.com/release/290620/Planet-Ventures-Makes-Strategic-Investment-in-General-Astronautics-Accelerating-the-Future-of-Space-Robotics-and-Microgravity-Innovation |
| Planet Ventures invests $100K in General Astronautics at $40M valuation | Dealroom.co | https://app.dealroom.co/news/feed/planet-ventures-invests-100k-in-general-astronautics-at-40m-valuation-to-advance-space-robotics |
| General Astronautics | Planet Ventures Portfolio | https://planetventuresinc.com/portfolio/general-astronautics |
| General Astronautics - The YC Tier List (W26) | https://yctierlist.com/w26/generalastro/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
