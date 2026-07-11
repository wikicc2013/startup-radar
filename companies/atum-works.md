# Atum Works

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：Scalable 3D lithography foundry（可规模化的 3D 光刻代工）
- **官网/锚定**：https://www.ycombinator.com/companies/atum-works
- **深研状态**：researched（在营。YC Spring 2025 (X25) 批次，2024 年成立，已建成首台 3D 纳米打印机原型，计划 2026 年发售首批产品。）

## 公司画像
- **团队**：三位联合创始人均来自 Caltech 与 NASA 的物理/系统工程背景：Lucas Pabarcius（联合创始人兼 CEO）、Matteo Kimura、Malcolm Tisdale；曾在 NASA 斩获 Most Visionary Concept 与 Best Product Development 奖。团队规模约 3 人。顾问阵容分量很重：H.-S. Philip Wong（台积电首席科学家）、Eli Yablonovitch（NSF E3S 荣休主任）、Julia Greer（Caltech Kavli 纳米科学研究所主任）、Michael Hochberg（硅光子学先驱）、Pooya Tadayon（Intel Fellow）。
- **成立/批次**：2024
- **地点**：美国加州；总部/团队在旧金山（San Francisco），制造工厂与实验室在山景城（Mountain View, CA）
- **产品**：可规模化的 3D 光刻代工平台，官方口号「3D ASML」。核心技术是用先进的光聚合（photo-polymerization）+ 精密光学，在晶圆尺度（wafer scale）上直接「打印」多材料三维结构，分辨率达 100 nm。目标是以约为当今 2D 光刻 1/10 的成本，直接制造日益三维化的集成电路/器件。已建成首台 3D 纳米打印机原型。
- **商业模式**：对标 ASML 的设备/代工双重定位——既做 3D 纳米打印设备本身（「3D ASML」），也做纳米制造代工服务，覆盖从小批量到量产。计划 2026 年发售首批产品。属重资产硬科技设备/代工模式，尚处早期原型到商业化过渡阶段。
- **竞争格局**：正面对标 ASML 所代表的传统 2D 光刻范式，以及半导体行业当前用 2D 层堆叠（如 HBM 多层堆叠、3D 集成/先进封装）实现三维化的路线——Atum 主张用「一次成型的 3D 工艺」绕开逐层堆叠导致的指数级成本上升。在微纳 3D 打印赛道，与双光子聚合（two-photon polymerization）玩家 Nanoscribe（BICO 旗下）、UpNano、Multiphoton Optics 等存在技术近邻关系，但 Atum 强调晶圆级量产与半导体级 100 nm 分辨率的结合。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed/Seed（公开披露） | 约 $500K（第三方数据库口径，可能仅为早期披露部分） | 未披露 | [链接](https://www.crunchbase.com/organization/atum-works) |
| YC Spring 2025 (X25) 标准投资 | 未披露（YC 标准条款） | 2025 | [链接](https://www.ycombinator.com/companies/atum-works) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| NVIDIA（联合开发意向书 LOI） | 中 | [链接](https://fondo.com/blog/atum-works-launches) |

## 转型有术判断
1. **对制造业客户意味着什么**：Atum Works 触及的是半导体制造最底层的成本曲线拐点。摩尔定律在 2D 特征密度上撞墙后，行业靠「堆叠」续命——HBM、3D 集成、Chiplet 先进封装本质都是把 2D 层叠起来，但堆叠成本随密度呈指数上升（官方举例：10 层 HBM 封装比等量未堆叠 DRAM 贵约 5 倍）。Atum 的赌注是：既然芯片本就在变得越来越三维，那就用「一次成型的 3D 光刻」让工艺复杂度随材料而非层数增长，从而把成本重新拉回接近线性。若晶圆级 100 nm 多材料直写能跑通并良率可控，对微纳/半导体制造意味着一条与光刻堆叠并行的新制造路径，尤其利好 HBM/存算一体、硅光子、MEMS、传感器、生物芯片等本就需要三维异质结构的场景。但这是典型的「设备+工艺+材料」三重不确定叠加的深水区硬科技，离规模量产尚远。
2. **国内对标厂商**：国产光刻设备：上海微电子装备（SMEE）——传统投影光刻路线，与 Atum 的 3D 直写并非同一技术范式，但同处「打破 ASML 垄断」的宏大叙事下、微纳 3D 打印/双光子聚合：摩方精密（BMF, Boston Micro Fabrication，深圳/波士顿双总部，微尺度 PµSL 面投影微立体光刻）是国内最接近的微纳增材制造玩家，分辨率可达 2µm 级、先进封装/3D 集成代工：长电科技、通富微电等封测厂在做的 2.5D/3D 堆叠封装，正是 Atum 想用一次成型 3D 工艺去替代的「堆叠」路线的对照面
   > 国内没有与 Atum「晶圆级 100 nm 多材料 3D 直写光刻」严格对位的公司。最接近的是摩方精密（微纳增材制造，但分辨率与半导体 100 nm 尚有量级差距，主攻精密器件而非芯片）。若从「用 3D 工艺替代 2D 堆叠」的意图看，国内对照面反而是长电、通富等先进封装厂的堆叠路线，以及 SMEE 代表的国产光刻自主化叙事。Atum 提供的反向情报价值是：给国内微纳制造与封装产业提供一个「跳过堆叠、直接三维成型」的技术侦察坐标。
3. **可迁移的干法 / 应进场景词典的词条**：3D光刻直写、晶圆级增材制造、多材料纳米打印、先进封装替代、光聚合纳米制造、硬科技设备代工
   > 可迁移的干法核心是「用增材式一次成型替代减材+堆叠的多步工艺」这一思路——把原本要靠多层光刻+对准+键合的三维结构，压缩成一次三维直写。这套「以材料复杂度换层数复杂度」的思路，可迁移到 MEMS 传感器、硅光子器件、微流控/生物芯片、超材料/超表面等一切依赖精密三维微结构的制造场景。对制造业的普适启发是：当某个工艺靠「加层数」续命且成本指数上升时，值得反问是否存在「换维度一次成型」的增材替代路径。
4. **风险与存疑点**：①技术/量产风险极高：晶圆级 100 nm 多材料 3D 直写目前仅有单台原型机，从原型到高良率量产是硬科技最凶险的死亡谷，分辨率、吞吐率、良率能否同时达标未经证明；②「3D ASML」是万亿级宏大叙事但商业化极早：团队仅约 3 人、公开披露融资仅约 $500K 量级（口径存疑，未见权威 $10M 级证实），资金与规模与其对标目标严重不匹配；③客户仅一纸 LOI：与 NVIDIA 仅为联合开发意向书（非量产订单、非投资），半导体设备验证周期极长，LOI 到真实营收之间存在巨大不确定性，且半导体制程对新工艺的导入门槛与保守程度极高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Atum Works | Y Combinator 公司页 | https://www.ycombinator.com/companies/atum-works |
| Launch YC: Atum Works — The Next Dimension of Compute | https://www.ycombinator.com/launches/NLd-atum-works-the-next-dimension-of-compute |
| 官网 atum.works | https://atum.works/ |
| Fondo: Atum Works Launches | https://fondo.com/blog/atum-works-launches |
| Tom's Hardware: Startup aims to 3D print chips and cut production costs by 90% | https://www.tomshardware.com/tech-industry/startup-aims-to-3d-print-chips-and-cut-production-costs-by-90-percent |
| Crunchbase: Atum Works 公司档案 | https://www.crunchbase.com/organization/atum-works |
| LinkedIn (Y Combinator): Atum Works is building 3D ASML | https://www.linkedin.com/posts/y-combinator_atum-works-is-building-3d-asml-the-world-activity-7320519752651542528-8U6W |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
