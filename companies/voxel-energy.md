# Voxel Energy

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：Energy-independent data centers with solar & reused batteries（用光伏与梯次电池实现能源自给的数据中心）
- **官网/锚定**：https://www.ycombinator.com/companies/voxel-energy
- **深研状态**：researched（锚定成功。Voxel 是通用词，此处为 YC Winter 2026 批次的 Voxel Energy（官网 voxelenergy.com、YC 目录页一致），与另一家同名工业安全 AI 公司 Voxel（voxel.ai，融资 $12M/$30M 用于工人安全）不同——聚合源(startuphub/thesaasnews)标注的 $12M 存在与后者混淆风险，仅中低置信采用。定位判断：本质是『生产制造/能源硬件』而非『AI 基础设施』——它做的是数据中心底层的自发电+储能微电网硬件系统（光伏+梯次 EV 电池+DC 微电网），服务对象才是 AI 算力基础设施；因此归『生产制造/能源』更准确，仅在价值链下游承接 AI 基建的用能需求。）

## 公司画像
- **团队**：三位前特斯拉连续创业者：Casey Spencer（CEO，前特斯拉 Autopilot 项目经理，曾创办三家硬件公司）；Max Pfeiffer（CTO，前特斯拉，因创办 EV 改装厂 Maxwell Vehicles 入选 Forbes 30 Under 30）；Evan Schmidt（COO，有管理数百万美元商业/HVAC/数据中心项目经验）。团队规模 3 人。
- **成立/批次**：2025（YC 目录标注 Founded 2025；部分聚合源写 2023，以 YC 一手为准）
- **地点**：美国加州旧金山（San Francisco）
- **产品**：为数据中心提供『自带电力』的一体化能源系统：现场光伏发电 + 梯次利用（二手 EV）电池储能 + 自研 DC 微电网架构，直流侧直连算力设备，绕过电网接入排队（行业平均 time-to-power 约 5 年）。宣称『数月而非数年』交付 7x24 供电，含备用发电与冗余配电。原型已落地并在离网状态下驱动真实算力（off-grid compute），号称已签约数千英亩土地并在囤积电池库存。2026-01-27 获 YC Product Showcase 观众选择奖。
- **商业模式**：疑似『Power-included 数据中心/算力园区』——按容量向 AI 算力客户出售自建离网数据中心的供电/托管（已开放 reservations 预订）；核心壁垒是梯次 EV 电池的低成本供给 + DC 微电网降本降 time-to-power。具体计价（$/kW 或托管费）未披露。
- **竞争格局**：对标一切绕过电网、就地供电的『behind-the-meter / off-grid 数据中心供电』玩家：Crusoe Energy、Exowatt（太阳能+热储供 AI 数据中心）、以及天然气/燃料电池自供电方案（Bloom Energy 等）；储能侧与各类电网级 BESS 及梯次电池公司（如 B2U Storage、Smartville、Moment Energy）在电池供给上竞合。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（含 YC 标准投资） | 约 $12M（聚合源 startuphub/thesaasnews 标注，因与同名工业安全 AI 公司 Voxel 存在混淆风险，仅中低置信；官方一手金额未披露） | 未披露（YC W26，2026 初） | [链接](https://www.startuphub.ai/startups/voxel-energy) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业与工业企业有三层含义。其一，梯次利用：它把退役 EV 电池从『报废物』变成数据中心储能资产，为汽车/电池制造商的电池全生命周期与逆向供应链（回收—检测—重组—再商用）打开一条高价值出口，工厂端的电池护照、SOH 检测、模组重构会成为刚需能力。其二，用能自主：对被电网接入排队（动辄数年）卡住的高耗能工厂/算力园区，光伏+储能+DC 微电网的『自带电力』范式提供了绕过基建瓶颈的模板——工业园区的分布式能源、直流微电网、峰谷套利可复用同一套架构。其三，交付方式变革：把发电—储能—配电做成可快速部署的标准化硬件系统（数月交付），本质是能源基础设施的『产品化/制造化』，对做储能柜、集装箱式数据中心、模块化电力设备的中国制造商是同一赛道的机会与竞争。
2. **国内对标厂商**：阳光电源 / 华为数字能源——光储一体与数据中心供电、储能变流器与微电网，绿电供数据中心的主力方案商、宁德时代（含时代电服/换电与梯次业务）、比亚迪——梯次 EV 电池与储能系统的最大潜在供给方、格林美 / 邦普 / 天奇股份——动力电池回收与梯次利用产业链，对应 Voxel『二手电池再利用』的上游、秦淮数据 / 万国数据 / 世纪互联——绿电/自建电源数据中心运营，对标其『Power-included 数据中心』商业形态
   > 中国不缺任一单点能力：光储由阳光电源/华为数字能源领跑，梯次电池由宁德/比亚迪+格林美等回收系撑起供给，绿电数据中心由三大 IDC 运营商在张家口/内蒙等风光基地落地。Voxel 的差异化在于把三者用『DC 微电网直流直连算力 + 快速部署』整合成一个绕过电网的标准化产品，并绑定前特斯拉团队的电池 know-how。国内更多是分立的方案集成（业主+EPC+设备商），尚缺一个把『发电—梯次储能—直流配电—算力托管』做成单一产品化交付、专攻离网 AI 数据中心的整合玩家，这正是可借鉴的组织与产品切口。
3. **可迁移的干法 / 应进场景词典的词条**：离网数据中心、光储微电网、梯次EV电池、DC直流微电网、time-to-power、behind-the-meter供电、算力园区自供电
   > 可迁移干法：核心是『把被电网卡住的用能需求，用自发电+储能+直流微电网就地解决，并把整套系统产品化、以数月为周期标准化交付』。这套打法不止用于 AI 数据中心——凡是接入排队久、用能大、又能就地铺光伏/储能的场景（大型工厂、矿区、港口、充换电站、边远算力节点）都可复用；而『梯次 EV 电池作为低成本储能供给』则是把制造业逆向供应链变成能源资产的通用杠杆。
4. **风险与存疑点**：①同名混淆与信息稀薄：与工业安全 AI 公司 Voxel 同名，融资/数字易被聚合源张冠李戴，$12M 与官方一手无法交叉印证，早期公司披露极少。②技术与规模验证：仅『原型跑通离网算力』，从 demo 到 GW 级、7x24 高可用数据中心供电存在巨大工程与可靠性鸿沟；离网光储供高密度 GPU 的容量因子、备电时长、冬季/夜间出力都是硬约束。③梯次电池供给与安全：二手 EV 电池 SOH 离散、寿命/热失控风险、可获得量与成本受回收链与政策影响，『数千英亩+囤电池』的宣称尚待兑现，重资产扩张融资压力大。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Voxel Energy | Y Combinator 公司目录 | https://www.ycombinator.com/companies/voxel-energy |
| Launch YC: Voxel Energy - Rapidly deployed data centers. Power included. | https://www.ycombinator.com/launches/PIb-voxel-energy-rapidly-deployed-data-centers-power-included |
| Voxel Energy 官网 | https://www.voxelenergy.com/ |
| YC-Backed Voxel Energy Launches Off-Grid Solar Data Centers | Founderland | https://www.founderland.ai/articles/yc-backed-voxel-energy-launches-off-grid-solar-data-centers-mlp8vjg6 |
| Taro Fukuyama: New investment — Voxel Energy（投资人 LinkedIn 帖，披露 YC/Pioneer Fund 同轮） | https://www.linkedin.com/posts/tarof_new-investment-voxel-energy-excited-activity-7439702144607375360-Ugp6 |
| Voxel Energy — $12M Raised, Investors, Team & Alternatives | StartupHub（聚合源，金额需存疑） | https://www.startuphub.ai/startups/voxel-energy |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
