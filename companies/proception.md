# Proception

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B006
- **一句话定位**：Dexterous humanoid hands for robotics（面向机器人的灵巧人形机械手）
- **官网/锚定**：https://www.ycombinator.com/companies/proception-inc
- **深研状态**：researched（经本地研究员 WebSearch 一手核实：官方为 Proception Inc（YC slug proception-inc，仓库内 slug 记为 proception）。2024 成立，创始人 Jay Li（前 Tesla Optimus 人形机器人技术负责人）与 Jack Xu。2026-06 完成 1100 万美元种子轮，First Round Capital 领投，YC、BoxGroup 参投。与 Tesla 的商业秘密诉讼已和解。分诊维度：归『生产制造（人形灵巧手/机器人硬件）』。）

## 公司画像
- **团队**：两位联合创始人：Jay Li——前 Tesla Optimus 人形机器人项目技术负责人（曾被前雇主起诉窃取商业秘密，后与 Tesla 和解）；Jack Xu。团队与手外科医生紧密合作设计。
- **成立/批次**：2024
- **地点**：美国（旧金山湾区）
- **产品**：高灵巧度机器人手 ProHand 1.0：22 自由度（22-DOF），面向做接触密集（contact-rich）操作的研究者与机器人公司，帮助人形及其他机器人实现更接近人手的物体操作。围绕人手结构设计、集成皮肤般的传感器（检测接触、支持抓握控制）。差异化数据采集：用布满传感器的手套采集『人手交互数据』，无需真机在环（no robot in the loop），大幅提升数据采集效率、训练更有效的操作 AI 模型。
- **商业模式**：面向机器人公司/研究机构售卖灵巧机器人手（ProHand）及配套数据采集方案，具体定价未披露。
- **竞争格局**：灵巧机器人手赛道：Shadow Robot、Wonik Allegro Hand、Sanctuary、以及 Tesla Optimus 自研手、国内因时/帕西尼等。Proception 差异点在于 22-DOF 高灵巧度 + 皮肤传感 + 手套式人手数据采集（免真机在环）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（种子轮） | 1100 万美元 | 2026-06 | [链接](https://techcrunch.com/2026/06/29/robot-hand-company-settles-tesla-trade-secret-suit-and-announces-11m-raise/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业与机器人产业而言，Proception 攻的是机器人操作的『最后一厘米』——灵巧手。机器人要在制造、装配、服务场景做人手级的精细操作（穿针、精密装配、柔性件抓取），高自由度、有触觉的灵巧手是关键卡点，且获取人手操作数据昂贵（传统靠真机遥操作）。Proception 用 22-DOF 皮肤传感灵巧手 + 手套式人手数据采集（免真机在环），既做硬件也解决数据瓶颈。对制造业的启示：一是灵巧手 + 触觉是精密装配、力控打磨、柔性件操作等工业难题的关键部件；二是『用传感手套采人手数据、免真机在环』大幅降低操作 AI 的数据采集成本，这一范式对工业操作数据采集普遍适用；三是创始人 Tesla Optimus 背景 + 1100 万美元融资，印证灵巧手是具身智能的关键赛道。国内在灵巧手（因时、帕西尼触觉手）有布局，可对标。
2. **国内对标厂商**：因时机器人——国产灵巧手（多指、腱驱/直驱）、帕西尼感知（PaXini）——触觉传感 + 灵巧手、强脑 BrainCo/傲意 OYMotion——灵巧手与肌电、智元/宇树等人形本体自带的灵巧手
   > 国内灵巧手赛道活跃：因时机器人（多指灵巧手）、帕西尼（触觉传感+灵巧手）、强脑/傲意（灵巧手+肌电）等。Proception 的差异在于 22-DOF 高自由度 + 皮肤般触觉传感 + 手套式人手数据采集（免真机在环）这一软硬+数据组合，且创始人有 Tesla Optimus 背景。国内在灵巧手硬件与触觉传感上不弱（帕西尼触觉、因时多指），但把『高自由度灵巧手 + 触觉 + 免真机数据采集』打通的玩家仍少。对国内的启示是：灵巧手的自由度、触觉与数据采集效率是竞争关键。
3. **可迁移的干法 / 应进场景词典的词条**：灵巧机器人手、22自由度、皮肤触觉传感、手套式数据采集、接触密集操作、具身操作硬件
   > 可迁移干法：把机器人操作的『灵巧手 + 触觉 + 数据采集』作为精密操作能力的关键——用高自由度灵巧手 + 皮肤触觉传感做人手级精细操作，用传感手套采集人手交互数据（免真机在环）大幅降低操作 AI 的数据成本。对制造业，灵巧手+触觉是精密装配、力控打磨、柔性件操作的关键部件；『手套采数据、免真机在环』的范式可迁移到工业操作数据采集，把稀缺的手工工艺数据低成本资产化。
4. **风险与存疑点**：①硬件+数据双线难：22-DOF 灵巧手的制造成本、耐用性、量产一致性，以及触觉传感的可靠性，都是硬门槛；②赛道竞争：Shadow、Allegro、Tesla 自研及国内因时/帕西尼在场，灵巧手竞争激烈；③商业化早期：种子轮 1100 万美元、主要卖给研究者/机器人公司，规模化与真实工业落地待验证；创始人 Tesla 诉讼虽和解，仍有历史包袱。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Proception Inc | Y Combinator（slug=proception-inc，一手核实） | https://www.ycombinator.com/companies/proception-inc |
| Robot hand company settles Tesla trade secret suit and announces $11M raise | TechCrunch | https://techcrunch.com/2026/06/29/robot-hand-company-settles-tesla-trade-secret-suit-and-announces-11m-raise/ |
| Proception Raises $11M in Seed Funding | The AI Insider | https://theaiinsider.tech/2026/06/29/proception-raises-11m-in-seed-funding-introduces-dexterous-robotic-hand/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
