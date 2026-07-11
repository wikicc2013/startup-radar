# Intelligence Factory

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B001
- **一句话定位**：Human intelligence for robots（为机器人注入人类智能）
- **官网/锚定**：https://www.ycombinator.com/companies/intelligence-factory
- **深研状态**：researched（通用词已消歧，锚定为 YC 目录中的 Intelligence Factory（Human Intelligence for Robots）。官方一手来源显示批次实为 YC Spring 2026（P26/S26），非原登记 B001；极早期，融资金额与客户名单基本未公开披露。）

## 公司画像
- **团队**：两位联合创始人。CEO Yash Sinha：ETH Zurich 机器人背景，曾任 Kaio Labs 创始人/CTO，做过 F1 仿真工程师。CTO Jalaj Shukla：UPenn（GRASP Lab）机器人与机电一体化硕士，曾在 Dimensional、Blue Sky Robotics、Applied Materials、Ansys 任职，DRDO 研究员，专长机械臂操作、视觉-语言-动作（VLA）模型与控制。两人自述过去 5 年在真实世界部署机器人，覆盖数据采集、模型构建到最后一公里部署全链路。团队约 5 人。
- **成立/批次**：2026
- **地点**：美国旧金山湾区
- **产品**：为机器人打造「通用操作智能」（general-purpose manipulation intelligence），瞄准机器人在多样、非结构化环境中的抓取/操作能力这一最大瓶颈。方法：自建「数据工厂」，让人戴定制数据手套执行大量任务，采集「所见（视觉）+所做（动作）+所感（力/触觉反馈）」三类数据；再把人类动作重定向（retarget）到不同机器人硬件——从五指灵巧手到二指夹爪。随数据量与多样性扩大，目标是训练出可泛化到任意任务/物体/环境的操作模型。
- **商业模式**：极早期，商业模式尚未公开定型。当前路径偏「数据+模型」层：以自建数据工厂产出高质量人类演示数据、训练通用操作模型，并在仓储、杂货零售、数据中心等场景部署验证。可推测未来或走「操作智能模型/软件授权 + 场景化机器人操作方案」，但官方未披露定价与签约模式。
- **竞争格局**：具身智能/通用操作模型赛道：Physical Intelligence、Skild AI、Figure、1X、Dexterity、Covariant（已被 Amazon 吸纳）等在做机器人操作大模型；数据侧对标同批 YC 的 Sensei（Robotic Training Data at Scale）等机器人训练数据公司。Intelligence Factory 的差异点在「人戴数据手套采集含力/触觉的多模态演示 + 动作重定向到多种硬件」这一数据采集范式。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Spring 2026 (P26/S26) | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/intelligence-factory) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，Intelligence Factory 代表「机器人智能=数据问题」这一判断正在被押注：硬件（机械臂、灵巧手、夹爪）日益趋同且商品化，真正卡脖子的是让机器人在非结构化产线、混线、多品种小批量场景里稳定完成抓取、装配、上下料、拣选等操作。它的「人戴手套演示→采集视觉+力+触觉→重定向到任意硬件」范式，指向一条不同于纯遥操作或纯仿真的数据供给路线——含力/触觉的真实演示数据，正是精密装配、柔性件抓取、力控打磨等工艺最缺的训练燃料。若模型能跨硬件泛化，工厂未来采购的可能不再是「专机+固定示教」，而是「一套可迁移的操作智能」，示教/编程工时与换线成本有望大幅下降。当前仍是早期押注，工业级可靠性、节拍与安全冗余尚待验证。
2. **国内对标厂商**：银河通用（Galbot）：具身大模型+通用抓取，仿真数据驱动，落地零售/工业、智元机器人（AgiBot）：人形+具身数据采集工厂 AgiBot World，走真机数据规模化路线、星海图 / 星尘智能 Astribot：VLA 操作模型与灵巧操作、帕西尼感知 PaXini：触觉传感+灵巧手，对应其「力/触觉采集」维度、非夕 Flexiv：力控自适应机器人，对标其力反馈操作能力在工业落地的一面
   > 国内对标可分两层：一是「具身操作大模型+数据规模化」阵营（银河通用、智元、星海图/星尘），与 Intelligence Factory 的通用操作智能定位最接近，其中智元的真机数据采集工厂与其「数据工厂」思路高度呼应；二是「力/触觉硬件」阵营（帕西尼触觉手、非夕力控），对应其数据手套强调的力与触觉反馈这一独特采集维度。国内整体更偏人形整机+自建数据场，Intelligence Factory 则轻硬件、重「跨硬件可迁移的操作数据与模型」，可作为国内厂商反思「是否必须自造整机」的镜像。
3. **可迁移的干法 / 应进场景词典的词条**：具身智能、通用操作/抓取、数据手套采集、力触觉反馈、动作重定向、跨硬件泛化、仓储拣选、VLA模型
   > 可迁移干法：不追求造更好的机械手，而是把「人类如何完成一项操作」以多模态（视+动作+力/触觉）高保真采集下来，再用重定向把人类动作映射到任意机器人本体——从而把「机器人智能」问题转化为「人类演示数据的规模与多样性」问题。这套「以人为数据源、以重定向解耦硬件」的思路，可迁移到工业装配、力控打磨、柔性件抓取、服务/零售拣选等一切依赖精细手部操作的场景，本质是把稀缺的工艺手感沉淀为可训练、可跨设备复用的数据资产。
4. **风险与存疑点**：①极早期、信息稀薄：2026 年成立、约 5 人、无公开融资金额与具名客户，仓储/杂货/数据中心「部署」多为试点表述，商业化与营收未验证；②技术门槛高且拥挤：含力/触觉的多模态演示采集与跨硬件重定向工程难度大，且赛道已有 Physical Intelligence、Skild 等重金玩家及同批数据公司竞争，数据规模与泛化能力能否形成壁垒存疑；③工业落地鸿沟：从演示数据到产线级可靠性、安全、节拍与长尾场景稳健性之间差距巨大，通用操作模型在真实工厂的可用性仍需长期打磨。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Intelligence Factory: Human Intelligence for Robots | Y Combinator | https://www.ycombinator.com/companies/intelligence-factory |
| Founding Engineer: Manipulation at Intelligence Factory | Y Combinator | https://www.ycombinator.com/companies/intelligence-factory/jobs/gTQaSpW-founding-engineer-manipulation |
| Yash Sinha - Co-founder @ Intelligence Factory (YC P26) | LinkedIn | https://www.linkedin.com/in/yash-sinha-556b411b3/ |
| Intelligence Factory - Robotics - The YC Tier List | https://yctierlist.com/s26/intelligence-factory/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
