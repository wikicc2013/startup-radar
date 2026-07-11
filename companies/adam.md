# Adam

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：AI CAD agent for mechanical engineers（面向机械工程师的 AI CAD 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/adam
- **深研状态**：researched（在营。YC W25，2025 年成立，位于旧金山，团队约 4 人。2025-10-31 完成 410 万美元种子轮。）

## 公司画像
- **团队**：联合创始人 Zach Dive（CEO，曾在 Adept 做 AI 研究与工程，UC Berkeley 设计硕士 MDes）、Aaron Li（CPO，曾任职 VIVO/BMW/NIO 工业设计，UC Berkeley MDes），另有 Avi（@avimakesrobots，机器人方向）。两位主创在伯克利设计硕士项目相识。团队规模约 4 人。
- **成立/批次**：2025
- **地点**：San Francisco, CA, USA
- **产品**：AI CAD 智能体，把自然语言/参考图转成参数化 3D 模型。两条产品线：①CADAM——开源 text-to-CAD，用大模型生成 OpenSCAD 参数化代码并编译成可 3D 打印模型，配动态生成的参数滑块调节；②Adam Co-Pilot——面向专业 CAD 的智能体助手，率先接入 Onshape，像人类工程师一样调用 CAD 工具，把改动直接落到特征树上（而非仅给建议）。对外定位『CAD 界的 v0/Cursor』，Vercel 创始人 Guillermo Rauch 称其为『the v0 of CAD』。发布期消费级 text-to-3D App 获超 1000 万社媒曝光。
- **商业模式**：订阅制，消费级先行（makers/工业设计师/机械工程师），再转企业。个人档位 Standard 5.99 美元/月、Pro 17.99 美元/月；专业侧以接入 Onshape 的 Co-Pilot 切企业市场。已有数万个人用户与增长中的付费用户群。
- **竞争格局**：并非替代 SolidWorks/Fusion360/Onshape，而是在其之上/之外做 AI 生成与智能体层：先用 text-to-CAD 生成参数化几何，再通过 Co-Pilot 接管 Onshape 等专业 CAD 的操作。直接对标 MecAgent（AI CAD copilot）；同赛道还有 Zoo/KittyCAD（Text-to-CAD）等。与传统 CAD 大厂的关系是『在其生态里做智能体外挂』，Onshape 为首个集成对象。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子轮 Seed | 4,100,000 美元 | 2025-10-31 | [链接](https://techcrunch.com/2025/10/31/yc-alum-adam-raises-4-1m-to-turn-viral-text-to-3d-tool-into-ai-copilot/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：Adam 把『自然语言→参数化 CAD』从玩具级 text-to-3D 推进到工程可用的智能体：不是生成一个死的网格模型，而是生成带参数、可编译、可 3D 打印、能落到 CAD 特征树上的参数化设计。对制造业的意义在机械设计/CAD 研发提效——传统上把一个想法变成可制造的参数化模型，需要工程师熟练操作 SolidWorks/Onshape，门槛高、迭代慢；Adam 用『描述即建模 + 滑块调参 + 智能体直接改特征』压缩了从创意到可制造几何的距离。真正的杀手锏是 Co-Pilot 像人类工程师一样调用 CAD 原生工具把修改直接写回特征树，这意味着设计意图能以参数化、可追溯的方式沉淀，而非一次性生成物。对国内制造业，这预示 CAD 环节将从『手工建模』转向『工程师审校 AI 产出的参数化设计』，设计人效有数量级提升空间，但也要求把 AI 嵌入既有 CAD 数据/PLM 链路而非另起炉灶。
2. **国内对标厂商**：中望软件 ZWCAD/中望3D——国产 CAD 龙头，已在 CAD 中引入 AI 辅助绘图/命令，几何内核自主可控，是最贴近的国产对标、华天软件 CrownCAD——云原生国产三维 CAD，自研几何内核，适合承接『云端 + AI 生成参数化几何』路线、浩辰 CAD（Gstarsoft）——二维为主的国产 CAD，AI 更多在图纸辅助层面、新迪数字（原 SolidWorks 中国团队背景）——三维 CAD 与云 CAD 方向可承接 AI 建模、对标视角补充：Adam 的差异点是『text/image → 参数化 + 智能体操作既有 CAD』，国内目前多为在自家 CAD 内嵌 AI 命令助手，尚缺独立的 text-to-CAD 智能体层
   > 国内 CAD 的核心竞争力仍集中在『自主几何内核 + 工业软件生态』（中望、华天、浩辰、新迪），AI 多作为绘图/命令辅助嵌入既有产品；而 Adam 走的是『生成式智能体层 + 接管第三方专业 CAD』的轻切入路线。对国内玩家的启示：一是可在自有内核上叠 text-to-CAD 生成能力，把『描述即建模』做成差异化；二是智能体接管特征树、把 AI 产出变成参数化可追溯设计，是比『生成静态模型』更有工程价值的方向；三是与 PLM/工艺链路打通比单点生成更能进制造业企业。需注意 Adam 尚处早期（数万用户、种子轮），国产对标更多是能力方向借鉴而非直接竞品替代。
3. **可迁移的干法 / 应进场景词典的词条**：text-to-CAD、生成式CAD、CAD智能体/Copilot、参数化建模自动化、机械设计提效、Onshape集成、OpenSCAD代码生成、3D打印就绪
   > 可迁移干法：①『描述/参考图→参数化代码→可编译几何』这套 pipeline 不止用于 CAD，可迁移到任何『需求→结构化可执行产物』的工程场景（如工艺参数、夹具/工装设计、电气原理图）；②智能体调用领域原生工具、把结果直接写回既有系统（特征树/BOM/PLM）而非另存副本，是让 AI 真正进入生产链路的关键干法，适用于所有已有重资产工业软件的企业；③消费级先跑量攒口碑与训练数据、再转企业专业档，是工业软件 AI 化的低成本冷启动路径；④用滑块把 AI 生成结果参数化、让工程师保留可控可调的『人在环』，是制造业采纳生成式 AI 的信任落地范式。
4. **风险与存疑点**：①通用词『Adam』品牌与消歧成本高，且核心壁垒（text-to-CAD 生成质量、智能体接管 CAD 的可靠性）技术护城河尚待验证，MecAgent、Zoo/KittyCAD 及 CAD 大厂自身 AI 化都在同赛道追赶；②深度依赖 Onshape 等第三方 CAD 平台做智能体接管，平台若自研或收紧 API 会形成卡脖子风险；③工程级精度/可制造性/公差要求极严，生成式模型的『幻觉几何』在制造场景容错率低，从『看起来对』到『造得出来且合规』仍有硬门槛，且早期仅数万用户、种子轮体量，商业化与企业渗透尚未验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Adam: AI Powered CAD | Y Combinator | https://www.ycombinator.com/companies/adam |
| YC alum Adam raises $4.1M to turn viral text-to-3D tool into AI copilot | TechCrunch | https://techcrunch.com/2025/10/31/yc-alum-adam-raises-4-1m-to-turn-viral-text-to-3d-tool-into-ai-copilot/ |
| Adam (YC W25): Open Source AI CAD That Generates OpenSCAD from Text | Developers Digest | https://www.developersdigest.tech/blog/adam-ai-cad-yc-w25-open-source-text-to-cad |
| Y Combinator on X: YC W25's @makewithadam is building an AI Co-pilot for CAD Design | https://x.com/ycombinator/status/1882874271263031510 |
| AdamCAD's Road to YC Demo Day | Make: | https://makezine.com/article/digital-fabrication/adamcads-road-to-yc-demo-day/ |
| Aaron Li - Co-Founder & CPO @ Adam (YC W25) | LinkedIn | https://www.linkedin.com/in/aaronlico/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
