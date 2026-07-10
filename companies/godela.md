# Godela

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B005
- **一句话定位**：AI physics engine for engineers（面向工程师的 AI 物理引擎）
- **官网/锚定**：https://www.ycombinator.com/companies/godela
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人：Cinnamon Sipper（CEO，机械工程师，曾在 Apple、Google 及斯坦福 SLAC 国家加速器实验室做研究）与 Abhijit Pranav Pamarty（曾在 Intel、Harvard）。公司源自斯坦福的物理-AI 研究，团队约 10 人，均为工程/ML 背景。
- **成立/批次**：2025
- **地点**：美国加州旧金山 (San Francisco, CA)
- **产品**：面向工程师的「AI 物理引擎」。工程师上传 CAD 文件、实验数据或用自然语言提问，Godela 在数秒内返回「仿真级」的物理预测与可迭代模型。核心是其 Frontier Model——一种物理知情（physics-informed）的 AI，直接从原始仿真/实验数据中提取控制关系（governing relationships），号称能在有限数据下以 99.99% 精度还原 Navier-Stokes 等控制方程，并跨物理场泛化。官方宣称一次阻力/压力仿真 1.8 秒完成，对比传统工具 2.5 小时，约 4500 倍加速。定位为传统仿真（如 Ansys）的替代/统一入口，覆盖 CFD、热、结构、跌落、软材料等多物理场。目标场景包括跌落测试、热再入、软材料、芯片/散热、聚变堆、粒子加速器、药物研发等。
- **商业模式**：面向工程/硬科技团队的 B2B SaaS/企业软件，替代或补充传统 CAE 求解器（Ansys 等许可证模式）。已签下首个「替换 Ansys」的合同。具体定价未披露。
- **竞争格局**：直接对标 Ansys（约 300 亿美元市值的仿真软件巨头）及 Comsol、Siemens、Dassault (Simulia/Abaqus) 等传统 CAE 求解器；同时与新兴 Physics-AI/surrogate-model 玩家（如 PhysicsX、Nvidia Modulus/PhysicsNeMo 等 PINN/神经算子路线）竞争。差异化在于「物理知情、少数据、跨场泛化、自然语言 + CAD 入口」。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed/Seed (Y Combinator X25 标准投资 + 种子轮) | 未披露（YC 标准 50 万美元投资；种子轮具体金额未公开） | 2025 | [链接](https://claivc.substack.com/p/clai-ventures-invests-in-godela-the) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 首个「替换 Ansys」的付费合同客户（未具名） | 中 | [链接](https://claivc.substack.com/p/clai-ventures-invests-in-godela-the) |
| Amazon（包装减废场景试点 pilot） | 低 | [链接](https://claivc.substack.com/p/clai-ventures-invests-in-godela-the) |
| Apple / Intel / 欧洲航天局 ESA（早期洽谈阶段，非签约） | 低 | [链接](https://claivc.substack.com/p/clai-ventures-invests-in-godela-the) |

## 转型有术判断
1. **对制造业客户意味着什么**：Godela 击中制造业研发最贵的环节——仿真与物理原型。传统 CAE（Ansys/Abaqus/Comsol）单次仿真要几小时到几天，物理样机迭代要数周到数月，且被拆散在 CFD、热、结构等各专用求解器里，工程师还得懂网格划分、边界条件、求解器调参，门槛极高。Godela 用「物理知情 AI + surrogate 代理模型」把这条链压缩到秒级，并把入口降到「传 CAD + 自然语言提问」，意味着：①研发提效——早期方案探索可从「一天几个工况」变成「一小时几百个工况」，让设计空间搜索、参数优化、DoE 变得实时化；②降低门槛——不必是仿真专家的产品/结构工程师也能自助跑物理评估，把 CAE 从少数专家瓶颈变成全员工具；③打通「设计-仿真-验证」闭环，减少物理打样次数（对应其锁定的跌落测试 12 亿美元、热再入 10 亿美元、软材料 4-70 亿美元市场）。对中国制造业（尤其消费电子、汽车、家电、半导体封装/散热）而言，这是研发数字化从「事后校核」走向「实时生成式设计」的信号，也是国产 CAE 突围的同一条赛道。风险是「仿真级精度」在安全关键件（航空、承压、医疗）上的可采信度仍需长期验证。
2. **国内对标厂商**：云道智造（Simdroid/天洑同源生态，国产通用多物理场 CAE 平台，主打自主求解器 + 仿真 App 化，与 Godela 的『降低仿真门槛』方向最接近）、十沣科技 TF-Solver（国产 CFD/多物理场求解器，聚焦航空航天、能源等高端工业仿真替代 Ansys Fluent）、前沿动力 AeroDynamic（气动/CFD 仿真，工业软件国产替代）、天洑软件（AI 工业软件，主打数据驱动的智能优化/代理模型 AIPod，与 Godela 的 surrogate-model 路线高度同型）、格物致道 / 非十科技 / 智机云等新兴 AI-for-CAE 团队（用 AI/神经算子做仿真加速的国产早期玩家）
   > 国内对标分两层：一是国产通用 CAE 主力（云道智造、十沣科技、前沿动力、安世亚太），承担『Ansys 国产替代』的自主可控任务，路线仍以自研传统求解器为主；二是 AI-for-simulation 的新势力（天洑软件的 AIPod 数据驱动代理模型、以及一批高校孵化的神经算子/PINN 团队），与 Godela『物理知情 AI + 少数据 + 秒级预测』的技术路线最同型。Godela 的独特之处在于把 LLM 式自然语言入口 + CAD 直传 + 跨物理场泛化捏成一个『AI 物理引擎』产品，国内目前多数还停留在单点求解器或专用代理模型，尚未出现同等级『通用生成式仿真入口』，这既是差距也是国产团队的机会窗口。
3. **可迁移的干法 / 应进场景词典的词条**：AI物理引擎、代理模型surrogate、物理知情AI-PINN、生成式仿真、CAE国产替代、CAD直传自然语言、研发提效、跌落/热/CFD多物理场
   > 可迁移干法：Godela 的核心方法论是『用物理知情 AI 把昂贵的第一性原理计算压缩成秒级代理模型，并用自然语言 + 原始数据（CAD/实验/仿真）做统一入口』。这套打法可迁移到任何『计算贵、专家稀缺、需大量参数扫描』的工业环节——如注塑/压铸的模流分析、电池热管理与热失控仿真、天线/EMC 电磁仿真、结构疲劳、工艺参数寻优。关键干法有三：①surrogate 化——先用已有仿真/实验数据训代理模型，把重复计算换成推理；②降门槛入口——让非专家用自然语言/直传 CAD 自助获得物理评估；③闭环化——把『设计-仿真-验证』做成实时迭代而非串行交付。中国制造企业落地时可先从『高频重复仿真工况』切入建代理模型，逐步替代部分许可证消耗。
4. **风险与存疑点**：①精度可采信度存疑——官方『4500x/99.99%』多为自述宣传数据，缺乏第三方基准与安全关键件（航空承压/医疗）的长期验证，AI 代理模型在训练分布外（外推）易失真，这是 Physics-AI 的通病；②客户多为『早期洽谈/pilot』——除首个未具名替换 Ansys 合同外，Apple/Intel/ESA 均为『discussions』，付费转化与留存未证实，信息来源多为投资方博客（利益相关，需谨慎采信）；③赛道拥挤且巨头下场——Ansys 已被 Synopsys 收购、Nvidia PhysicsNeMo、PhysicsX 等在同一方向猛攻，作为 10 人早期团队，护城河（数据、精度、垂直场景）尚待建立，融资金额未公开也反映规模仍小。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Godela | Y Combinator 公司页 | https://www.ycombinator.com/companies/godela |
| Launch YC: Godela — AI Powered Physics Engine for Engineers | https://www.ycombinator.com/launches/NcV-godela-ai-powered-physics-engine-for-engineers |
| CLAI Ventures Invests in Godela（融资/客户/技术，投资方博客） | https://claivc.substack.com/p/clai-ventures-invests-in-godela-the |
| American Bazaar: 'AI Physics Engine' Godela to bring instant AI-powered physics to engineering | https://americanbazaaronline.com/2025/06/03/ai-physics-engine-godela-to-bring-instant-ai-powered-physics-to-engineering-463298/ |
| No Cap Blog — 创始人 Cinnamon Sipper 背景 | https://nocap.blog/founder/cinnamon-sipper/ |
| Founding Simulation Engineer — Godela 招聘（团队信号） | https://www.ycombinator.com/companies/godela/jobs/vWajfU5-founding-simulation-engineer-godela |
| Cinnamon Sipper — CEO + Cofounder @ Godela, LinkedIn | https://www.linkedin.com/in/cinnamonsipper/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
