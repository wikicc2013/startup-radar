# Inversion Semiconductor

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Particle accelerator lithography for semiconductors（面向半导体的粒子加速器光刻）
- **官网/锚定**：https://www.ycombinator.com/launches/Mqu-inversion-semiconductor-scaling-chips-to-their-physical-limits
- **深研状态**：researched（在营（早期研发/pre-product）。YC W25 批次，2025-03 完成 50 万美元种子轮，处于原型与光源验证阶段，尚无量产设备与已确认付费客户。）

## 公司画像
- **团队**：两位联合创始人。Rohan Karthik（联创兼 CEO）：帝国理工机械工程硕士，曾在 Arm 做芯片设计自动化、CMR Surgical 做手术机器人、领导 Karman Space 火箭项目；Daniel Vega（联创兼 CTO）：伦敦大学学院应用物理硕士，曾在 CERN AWAKE 项目做等离子体尾场加速与稳定性 ML 建模、Lumitron Technologies 做加速器。两人硬科技（加速器物理 + 工程）背景互补。
- **成立/批次**：2024 年（YC W25；部分资料称 2023 年末起步，官方多以 2024 成立计）
- **地点**：美国加州（旧金山/湾区，YC 内设实验室；创始团队原在伦敦，落地加州做研发）
- **产品**：下一代半导体光刻机及其光源。核心是把粒子加速器缩小约 1000 倍（'桌面级'加速器），用激光尾场加速（LWFA, laser wakefield acceleration）产生高功率、波长可调的短波长光（含 13.5nm EUV），替代/超越现有 EUV 光源。对外宣称指标：同数值孔径下晶体管密度翻倍（+100%）、单台扫描机吞吐提升约 3 倍、高深宽比特征的关键尺寸均匀性改善 >25%，整体'把芯片缩到物理极限、快 15 倍'。远期设想'光源即服务'的用户设施模式（像订 SpaceX 发射一样刷卡预约束流时间）。
- **商业模式**：B2B 硬件/资本设备：向晶圆厂与设备商供应光刻机与先进光源；远期设想向 x 射线成像、掩模检测等场景延伸，并探索'束流时间即服务'的加速器用户设施模式。当前为 pre-revenue 研发期。
- **竞争格局**：正面对标 ASML 的 EUV 光刻垄断。差异化叙事：现有 EUV 光源'投 1MW 电只得 1kW 光'能效极低，Inversion 用加速器物理从光源层重构 EUV 生成，追求更高能效、更高功率与波长可调。技术路线上与传统 LPP（激光等离子体）EUV 及自由电子激光（FEL）EUV 光源竞争；也与清华 SSMB-EUV 等加速器基 EUV 光源思路属同一大方向。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed / YC | 500,000 美元 | 2025-03 | [链接](https://www.trysignalbase.com/news/funding/inversion-semiconductor-raises-500k) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Tesla（探索性接触，非确认客户） | 低 | [链接](https://www.ycombinator.com/launches/Mqu-inversion-semiconductor-scaling-chips-to-their-physical-limits) |
| Applied Materials（对 x 射线成像/掩模检测应用感兴趣，探索性） | 低 | [链接](https://www.ycombinator.com/launches/Mqu-inversion-semiconductor-scaling-chips-to-their-physical-limits) |

## 转型有术判断
1. **对制造业客户意味着什么**：这是最上游、最卡脖子的一环——EUV 光刻设备与光源。ASML 是全球唯一 EUV 供应商，而 EUV 又被出口管制封锁给中国先进制程。Inversion 的赌注是'换赛道'：不在 ASML 的 LPP 锡等离子体路线上追赶，而用小型化激光尾场加速器直接造 EUV/短波长光源，若成立可绕开现有专利与供应壁垒、并把光源能效提高一个量级。对制造业的意义有两层：一是提醒'卡脖子环节可被物理路线颠覆重写'，加速器基光源（LWFA、FEL、SSMB）是 EUV 之后值得长期押注的方向；二是极高风险——加速器造芯片从 demo 到量产良率与稳定性差距巨大，属于'十年赌一把'的深科技，短期不改变产能格局，但一旦跑通就是设备级的国产替代/去 ASML 化机会。
2. **国内对标厂商**：上海微电子 SMEE：国产光刻机整机唯一主力，仍在攻 28nm 及以下浸没式，EUV 整机尚是空白——Inversion 打的正是它上不去的 EUV 光源环节、清华大学 SSMB-EUV（稳态微聚束）：清华与业界推进的加速器基 EUV 光源方案，与 Inversion 的'加速器造 EUV 光'属同一大方向，是国内最对口的技术对标、中科院上海光机所 / 强场激光物理：国内 LWFA（激光尾场加速）与超强超短激光的主力研究单位，对应 Inversion 的核心加速器技术、华为/长江存储等被 EUV 管制卡住的先进制程需求方：他们是国产 EUV 光源一旦成熟的天然拉动方
   > 国内在'EUV 光源'这条最硬的线上并非空白，但分散在整机（SMEE）、加速器光源（清华 SSMB）、强场激光（上海光机所 LWFA）三个互不打通的阵地，缺一个像 Inversion 这样把'小型加速器 + EUV 光源 + 光刻整机'整条链攒成一家公司、以商业化为目标的创业主体。反向情报价值在于：清华 SSMB-EUV 与 Inversion 的 LWFA 路线是两种'加速器造 EUV'的技术路径之争，值得持续跟踪谁先出可用光源；SMEE 若要突破 EUV，光源恰恰是其最需外部合作或自研补齐的一块。
3. **可迁移的干法 / 应进场景词典的词条**：EUV光源、激光尾场加速LWFA、先进光刻设备、卡脖子硬科技、加速器小型化、半导体设备国产替代
   > 可迁移干法：Inversion 的打法是'不在龙头的既有技术路线上追赶，而从最底层物理机理换一条路重构卡脖子环节'——把原本占地一栋楼的粒子加速器缩小 1000 倍做成设备光源。这套'底层物理重构 + 极致小型化 + 用能效差距作为切入叙事（1MW 进 1kW 出）'的思路，可迁移到任何被单一龙头垄断、且现有路线能效/成本已近物理极限的高壁垒制造环节：先找到龙头方案的物理低效点，再用一条完全不同的物理路径重新起跳。对制造业情报的启示是：追踪卡脖子设备时，除了盯国产整机进度，更要盯'换物理路线'的深科技新苗。
4. **风险与存疑点**：①技术风险极高：LWFA/加速器基 EUV 光源仍处科研验证期，从桌面 demo 到晶圆厂可用的功率稳定性、剂量重复性、良率有代际差距，多数同类深科技十年难量产；②资本与时间错配：仅 50 万美元种子，而光刻设备研发是数亿至数十亿美元、十年周期的资本黑洞，后续大额融资与产业方（设备商/晶圆厂）绑定是生死线；③商业化与客户风险：Tesla、Applied Materials 均为'感兴趣'的探索性接触而非确认订单，且半导体设备验证导入周期极长；此外 EUV/加速器技术涉美国出口管制，商业化路径受地缘政治与合规约束。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| YC Launch: Inversion Semiconductor – Scaling Chips to their Physical Limits | https://www.ycombinator.com/launches/Mqu-inversion-semiconductor-scaling-chips-to-their-physical-limits |
| Y Combinator 公司目录：Inversion Semiconductor（W25） | https://www.ycombinator.com/companies/inversion-semiconductor |
| Inversion Semiconductor 官网 | https://www.inversionsemi.com/ |
| Signalbase：Inversion Semiconductor Raises $500K | https://www.trysignalbase.com/news/funding/inversion-semiconductor-raises-500k |
| Entrepreneur First 组合公司页：Inversion Semiconductor | https://www.joinef.com/companies/inversion-semiconductor/ |
| Crunchbase：Inversion Semiconductor 公司档案 | https://www.crunchbase.com/organization/inversion-semiconductor |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
