# GrazeMate

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：Robot cowboys that herd cattle with AI drones（用 AI 无人机放牧的机器人牛仔）
- **官网/锚定**：https://www.ycombinator.com/companies/grazemate
- **深研状态**：researched（批次登记为 B002，实为 YC W2026（Winter 2026）批次，以 YC 官方目录与 Launch YC 页面为一手来源。公司 2025 年成立，2026 年 1 月公布 120 万美元 pre-seed 融资。）

## 公司画像
- **团队**：创始人 Sam Rogers（CEO），19 岁，机电/机器人工程背景，从小在澳洲昆士兰 Bowen 的家族养牛场长大，看父亲用马、摩托车、直升机管理多达 6000 头牛；曾就读悉尼大学机器人相关专业后退学创业。团队约 3 人，官方称由「在牧场长大的工程师与 PhD」组成（其余联合创始人姓名未披露）。
- **成立/批次**：2025
- **地点**：澳大利亚悉尼（新南威尔士州）
- **产品**：自主放牧无人机系统。农场主在手机 App 上一键下令，无人机自主飞到指定草场（paddock），围绕牛群定位并将其驱赶到目标区域；完成后推送通知，全程无需人力，只要牧场门开着就能『在沙发上、拖拉机里或世界任何地方』完成过去需要直升机+摩托车+马、耗时整天的赶牛作业。核心是自研强化学习模型，让无人机实时响应牛群行为、模仿需数代人积累的牧牛技艺（stockmanship）。第一代主打自主赶牛；第二代（beta）在赶牛同时做牲畜体重估算、牧草生物量/干物质测量、水位监测与病牛识别。目前跑在 DJI 无人机硬件上。
- **商业模式**：租赁+软件订阅（RaaS/无人机即服务），不卖硬件。向客户提供无人机与软件，按月付费，定价主要依据牧场面积与牛只数量。创始人称费用『很可能低于你现在单在赶牛上的花费』——传统赶牛每年花费数万至数十万美元，GrazeMate 约削减一半。
- **竞争格局**：直接对标操作员遥控的赶牛无人机 SkyKelpie（GrazeMate 强调自己是全自主而非人工遥控）；广义智慧畜牧对手包括 Halter（太阳能智能项圈+虚拟围栏）、NoFence（虚拟围栏电子项圈）。差异化在于『无需给每头牛戴设备、用无人机做全自主群体驱赶+空中巡检』。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed | 1,200,000 美元 | 2026-01 | [链接](https://agfundernews.com/robot-cowboys-grazemate-bets-on-fully-autonomous-cattle-mustering-drones) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 昆士兰 + 新南威尔士两座试点农场（合计约 170 万英亩，每周驱赶数千头牛；农场名未披露） | 中 | [链接](https://agfundernews.com/robot-cowboys-grazemate-bets-on-fully-autonomous-cattle-mustering-drones) |

## 转型有术判断
1. **对制造业客户意味着什么**：对『生产制造·自动化』的启示在于：GrazeMate 把畜牧业最难标准化的『现场机动作业』（赶牛依赖老练牧工的经验判断）转成了强化学习驱动的自主机器人流程，本质是用 RL 把『隐性技艺（tacit skill）』产品化——这与制造业里用 AI/机器人替代老师傅手感（焊接、打磨、装配调试）的路径高度同构。它示范了一条务实工程路线：不自研飞行硬件、直接跑在成熟的 DJI 平台上，把价值集中在感知+决策的软件层与 RL 模型上，硬件成本外包、软件订阅收租，这正是制造业『买标准装备+自研工艺算法』的轻资产自动化范式。其『一键触发、无人值守、自动巡检并顺带采集数据（体重/生物量/水位/病畜）』的设计，也印证了自动化设备正从单一执行体演进为『执行+在线检测+数据资产』的复合终端——制造现场的 AGV、巡检机器人、产线相机都可复用这一『干活顺便把数据采了』的思路。
2. **国内对标厂商**：极飞科技 XAG（农业无人机龙头，播撒/植保/测绘，向智慧农业平台延伸，但主攻种植而非畜牧驱赶）、大疆农业 DJI Agriculture（GrazeMate 硬件即用 DJI，国内农业无人机基础设施提供方）、丰疆智能/中科原动力等农机自动驾驶（自主农机作业，场景相邻）、智慧畜牧类：京东农牧/阿里数字农业的养殖数字化、以及睿畜科技（畜牧 IoT+AI 监测体重/健康，偏舍饲监测而非草原驱赶）
   > 国内在『农业无人机』（极飞、大疆农业）与『智慧畜牧监测』（睿畜科技、京东农牧）两条线上都有强玩家，但两者尚未在『无人机自主驱赶放牧』这一细分点上合流——原因是中国畜牧以规模化舍饲/圈养为主，缺少澳美那种数十万英亩的大牧场散养场景，因此『空中自主赶牛』需求弱；国内更贴近的是无人机+AI 用于草场监测、牲畜盘点计数、疫病巡查。可对标的是『技术栈』（RL+DJI 平台+群体行为控制）而非『场景』，国内团队若迁移，更可能落在牧区草原生态监测、牲畜清点、无人化巡检。
3. **可迁移的干法 / 应进场景词典的词条**：自主放牧无人机、强化学习群体控制、无人化农牧作业、空中巡检+数据采集、RaaS 无人机即服务、隐性技艺产品化
   > 可迁移干法：①『一键触发+无人值守+完成回执』的作业闭环，适用于任何需要现场机动但人力昂贵/危险的场景（矿区巡检、电网巡线、大型园区安防、林业防火）；②『干活顺便采数据』——让本就要跑一趟的自动化终端同步完成检测与数据资产沉淀，一次出勤多重产出；③用 RL 把老师傅的隐性手感（赶牛/焊接/调试/驾驶）显性化为可复制模型，破解制造与农业共同的『老工匠断层』难题；④轻资产打法：不造硬件、跑在成熟平台上，价值集中在感知决策软件层，按订阅收费。
4. **风险与存疑点**：①监管与空域风险：农业无人机自主超视距（BVLOS）飞行在澳/美/中均受严格管制，全自主、无人值守、跨大面积作业的合规门槛高，扩张速度受政策掣肘。②硬件依赖与护城河风险：核心飞行硬件依赖 DJI，若 DJI 政策变动、被制裁或自己下场做农业方案，供应与竞争均受制于人；软件层 RL 模型的壁垒需持续验证。③场景与规模化风险：目前仅 2 座试点农场、约 3 人团队、极早期，170 万英亩为『承诺/试点』而非成熟营收；动物福利、恶劣天气、续航与充电/换电、群体应激等现场工程问题仍待规模验证，从澳洲牧场复制到美国德州/加州的运营与合规差异也是未知数。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| GrazeMate: Robot Cowboys that Herd Cattle with AI Drones | Y Combinator | https://www.ycombinator.com/companies/grazemate |
| Launch YC: GrazeMate: Drones that Herd Cattle | https://www.ycombinator.com/launches/PKm-grazemate-drones-that-herd-cattle |
| Robot cowboys: GrazeMate bets on fully autonomous cattle mustering drones | AgFunderNews | https://agfundernews.com/robot-cowboys-grazemate-bets-on-fully-autonomous-cattle-mustering-drones |
| GrazeMate Raises $1.2M to Expand Autonomous Drone Based Livestock Management | AgroTech Space | https://agrotech.space/2026/01/16/grazemate-1-2m-tech-livestock-management/ |
| Autonomous Drones for Cattle Management | GrazeMate 官网 | https://grazemate.com/index.html |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
