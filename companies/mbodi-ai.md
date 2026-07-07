# Mbodi AI

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B005
- **一句话定位**：Natural-language robot skill learning for factories（面向工厂、用自然语言教机器人技能）
- **官网/锚定**：https://www.mbodi.ai/
- **深研状态**：researched

## 公司画像
- **团队**：2 位联合创始人，团队约 6 人。Xavier (Tianhao) Chi——前 Google Public DNS(8.8.8.8) 技术负责人，UIUC 电子与计算机工程学士+硕士；Sebastian Peralta——物理学家/机器人研究者/深度学习研究员，前 Google Public DNS 核心工程师，UPenn 电子工程·计算机科学·物理三专业，GRASP 机器人实验室背景。
- **成立/批次**：2024 年（YC Spring 2025 / X25）
- **地点**：美国纽约（New York City, NY）
- **产品**：面向工业机器人的具身智能平台：用户用自然语言+少量演示即可教机器人学会新技能，无需传统编程/示教编程，从数周的重编程周期压缩到分钟级。云到边混合架构，秒级完成『理解指令→感知环境→规划→输出安全精确动作』；多 AI Agent 协同（感知/推理/规划/控制）。一台机器人学会的技能可即时复用并同步到整个机器人机队。初始场景聚焦拣选与包装。开源 embodied-agents 库。
- **商业模式**：未明确披露。为软件平台/中间层，可跨机器人硬件运行，通过与机器人本体厂商（如 ABB）联合商业化落地产线，推测为软件订阅/项目制部署（未官方证实）。
- **竞争格局**：自我定位区别于『训练大型世界模型』路线的对手，如 Skild AI、Field AI（TechCrunch 点名）；主张走 Agent 编排+符号推理+快速演示路线而非纯端到端大模型。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| ABB AI Startup Challenge 奖金 | 约 $30,000 项目资金 + SynerLeap（ABB 加速器）6 个月会员 | 2024 | [链接](https://new.abb.com/news/detail/122287/abb-robotics-names-t-robotics-and-mbodi-as-ai-startup-challenge-winners) |
| 种子/早期（第三方数据库口径，未见一手新闻稿） | 约 $500K（PitchBook）/ ~$530K（CB Insights），另获 YC 标准投资 | 2025 | [链接](https://pitchbook.com/profiles/company/596003-41) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| ABB Robotics（联合商业化伙伴，AI Startup Challenge 冠军） | 高 | [链接](https://new.abb.com/news/detail/122287/abb-robotics-names-t-robotics-and-mbodi-as-ai-startup-challenge-winners) |
| 某 Fortune 100 消费品(CPG)公司（未具名，PoC 阶段，托盘/货架装填场景） | 中 | [链接](https://techcrunch.com/2025/10/27/mbodi-will-show-how-it-can-train-a-robot-using-ai-agents-at-techcrunch-disrupt-2025/) |

## 转型有术判断
1. **对制造业客户意味着什么**：直击制造业机器人落地最大痛点——『部署慢、换线难、依赖专业集成商』。传统工业机器人每换一个 SKU/产线布局就要工程师重编程，周期以周计；Mbodi 用『自然语言+演示』把示教门槛降到产线工人水平，并让技能在整个机队复用，本质是把机器人从『固定程序设备』变成『可对话、可教学的工人』。对多品种小批量、日更 SKU 的消费品包装/拣选场景价值最直接。
2. **国内对标厂商**：非夕科技（Flexiv，力控自适应+AI）、珞石机器人（ROKAE，协作机器人+智能示教）、节卡机器人（JAKA，协作机器人+免编程示教）、达闼机器人（CloudMinds，云端大脑+具身智能）、银河通用（Galbot，具身大模型）、智元机器人（AgiBot，具身智能通用机器人）
   > 国内路线两派：一是本体+智能示教（节卡/珞石免编程、非夕力控自适应）；二是具身大模型派（银河通用、智元、达闼）。Mbodi 走『不造本体、做跨硬件 Agent 中间层+自然语言接口』，与国内『本体厂顺带做软件』互补而非重叠，恰是国内相对空白、值得关注的定位。
3. **可迁移的干法 / 应进场景词典的词条**：具身智能、工业机器人、自然语言示教、免编程/低代码示教、VLA/机器人技能学习、机器人机队协同、拣选与包装、柔性制造/换线
   > ①绑定头部机器人本体厂商联合商业化（Mbodi 绑 ABB，赢厂商挑战赛拿背书+渠道+加速器），国内可对标绑定汇川/埃斯顿/新时达；②从『高换线频率、低自动化率』的单点场景切入（包装/拣选）跑通 PoC 再扩展；③开源工具库建开发者生态+招牌吸引人才。
4. **风险与存疑点**：①仅 6 人团队、融资极小（~$50 万量级），资金/工程纵深对硬件密集赛道明显不足；②目前实锤仅到 PoC，未见规模化付费部署，『99% 可靠性』为官网自述；③赛道拥挤（Skild、Field AI 及国内具身大模型军团），且 ABB 已被软银 54 亿美元收购，联合商业化关系稳定性存变数；④自然语言示教在工业级安全/精度/节拍要求下能否达标仍待产线数据证明。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Mbodi 官网 | https://www.mbodi.ai/ |
| YC 公司页 Mbodi AI（Spring 2025 / X25） | https://www.ycombinator.com/companies/mbodi-ai |
| Launch YC: Mbodi AI - Embodied AI for Industrial Robotics | https://www.ycombinator.com/launches/NZp-mbodi-ai-embodied-ai-for-industrial-robotics |
| TechCrunch: Mbodi to demo robot training with AI agents at Disrupt 2025 | https://techcrunch.com/2025/10/27/mbodi-will-show-how-it-can-train-a-robot-using-ai-agents-at-techcrunch-disrupt-2025/ |
| ABB Robotics: T-Robotics 与 Mbodi 获 AI Startup Challenge 冠军 | https://new.abb.com/news/detail/122287/abb-robotics-names-t-robotics-and-mbodi-as-ai-startup-challenge-winners |
| The Robot Report: Mbodi AI launches on Y Combinator | https://www.therobotreport.com/mbodi-ai-launches-y-combinator-developing-embodied-ai-industrial-robots/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
