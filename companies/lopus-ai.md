# Lopus AI

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Operations data platform for RevOps teams（面向 RevOps 团队的运营数据平台）
- **官网/锚定**：https://www.ycombinator.com/companies/lopus-ai
- **深研状态**：researched（批次登记 B006，实为 YC W25（官网与 YC 目录一致），已据一手来源修正。产品有明显迭代：早期以 Beacon（社媒高意图线索发现）切入，现主打面向 RevOps/BizOps 团队的 AI 业务分析平台——一个『自愈式语义层』，统一 CRM/营收/产品/客服等数据，无需 SQL 即可自助问答并回溯到源记录。融资金额各聚合站说法互相冲突（$500K；投资方一处称 Meta/Team Ignite/YC，另一处称 Costanoa/Preston-Werner），均无一手披露，故记『未披露』。）

## 公司画像
- **团队**：2 人小团队。联合创始人兼 CEO Aamish Ahmad Beg（Dartmouth 计算机本科，全栈/基础设施/ML 背景，做过 LLM 研究，曾参与 DARPA DIGIHEALS 项目）；联合创始人兼 COO Danylo Borodchuk（Dartmouth DALI Lab 2+ 年 R&D，AR/VR 与产品系统设计背景）。
- **成立/批次**：2024
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向 RevOps/BizOps 团队的 AI 业务分析平台。核心是一层『自愈式语义层（self-healing semantic layer）』：把公司的指标定义、口径、边界情形只需定义一次，无需写 SQL 或维护 dashboard。平台号称 500+ 集成（CRM/计费/产品/客服/数仓），可直接解析『脏数据』；指标异动时主动告警并自动做根因排查；每个回答带置信度评分与透明化（展示所用 SQL、表、假设），并可回溯到源记录，配权限管控与数据治理。定位话术：『把 AI 指向你全部数据是灾难——它会自信地撒谎、幻觉、把业务带沟里』，语义层是为让 AI 输出可信。
- **商业模式**：B2B SaaS 订阅，多档套餐（官网未列具体价格，引导至定价页）。目标客户为中型 SaaS/快速成长公司的 RevOps、BizOps 负责人。
- **竞争格局**：AI 自助分析 / 语义层赛道竞争激烈：Zenlytic、Omni、Hex、Julius、Fabi.ai、Numbers Station、AnswerRocket 等 AI 分析新锐；语义层/指标层有 dbt Semantic Layer、Cube；传统 BI（Looker/Tableau/Power BI）也在补 AI copilot。差异点押注在『语义层可信 + 自愈 + 血缘回溯 + 根因告警』，主打 GTM/RevOps 垂直数据整合。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W25（种子） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/lopus-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Alphie（CEO Yura Riphyak 官网证言） | 中 | [链接](https://lopus.ai/) |
| Wako AI（创始人 Ari Ramsan 官网证言） | 中 | [链接](https://lopus.ai/) |
| Corgi（GTM Lead Russell 官网证言） | 中 | [链接](https://lopus.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服，Lopus 指向一个真实痛点：数据散在 CRM、ERP/计费、产品/IoT 使用、工单客服和一堆 Excel 里，业务口径（何为『有效商机』『活跃客户』『流失』）各部门理解不一，问一个跨系统的问题往往要排队等数据团队写 SQL。Lopus 的做法——先把口径沉淀成一层可信语义层、再让业务自助问答且每个答案能回溯到源记录并带置信度——正是制造业 GTM 数字化最缺的一环。对工业企业尤其有借鉴意义的是『指标异动主动告警+自动根因』：例如某区域订单/复购下滑、某产品线客诉率上升，系统能第一时间点出并追到源头，把营销销售客服从『被动出报表』推向『异常驱动的经营预警』。核心可迁移思想不是买这家美国工具，而是：在做营销/销售/客服的 AI 化前，先治理指标口径与数据血缘，否则 AI 只会更自信地给错答案。
2. **国内对标厂商**：观远数据（Guandata）——BI+AI 决策，主打指标平台与 Copilot，零售/消费领先，正切制造、数势科技（ShuShi）——指标平台+数据分析 Agent『SwiftAgent』，与 Lopus 语义层+自助问答思路最接近、Kyligence 跬智——指标平台 + AI 数智助理，企业级指标口径治理、帆软 FineBI / DataFocus——自助式 BI + 自然语言查询，制造业客户基数大、神策数据 / 网易有数——用户行为与经营分析，覆盖 GTM 数据整合
   > 国内最贴近的不是传统 BI，而是『指标平台 + 分析 Agent』这一代：数势科技的 SwiftAgent、Kyligence 的 AI 数智助理、观远的 BI Copilot，都在做『把业务口径沉淀成语义/指标层，再叠自然语言自助问答』，与 Lopus 的语义层路线同构。差异在于 Lopus 更聚焦 GTM/RevOps 垂直、强调数据血缘回溯与置信度这类『可信』卖点；国内厂商则更强指标治理平台化与大客户交付。对制造业客户，国内厂商在本地化部署、ERP/MES 打通和交付服务上更落地，Lopus 的价值在于验证了『语义层是 AI 分析可信的前提』这一产品判断。
3. **可迁移的干法 / 应进场景词典的词条**：语义层/指标口径治理、RevOps自助分析、数据血缘回溯、指标异动根因告警、自然语言问数
   > 最可迁移的干法有三条：其一，『定义一次、处处复用』的语义层——把散落在各部门口头里的业务口径显性化、集中治理，是任何企业上 AI 分析前的地基；其二，每个 AI 答案强制带『置信度+所用 SQL/表/假设+源记录血缘』，用透明化换取业务对 AI 结论的信任，这套『可解释交付』范式可直接搬到制造业的经营分析；其三，从『人问数据』升级到『数据主动报警+自动根因』，把营销销售客服的异常（掉单、客诉、复购下滑）做成事件驱动的经营预警。
4. **风险与存疑点**：①产品定位漂移风险：从社媒线索发现（Beacon）转到 RevOps 分析语义层，方向切换大，2 人团队、种子极早期，PMF 未验证；②赛道极度拥挤且巨头下场：dbt 语义层、Omni/Hex、传统 BI 的 AI copilot 都在做同一件事，『可信语义层』的护城河能否守住存疑；③信息稀薄且来源打架：融资金额与投资方在各聚合站说法互相矛盾、无一手披露，客户仅为官网证言（早期小公司为主），第三方验证不足，采信需谨慎。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Lopus AI — Y Combinator 公司目录（W25） | https://www.ycombinator.com/companies/lopus-ai |
| Lopus 官网（产品/证言/集成） | https://lopus.ai/ |
| Aamish Ahmad Beg（创始人/CEO）Forbes Business Council 档案 | https://councils.forbes.com/profile/Aamish-Ahmad-Beg-Founder-CEO-Lopus-AI/a072f2e6-0958-4df6-a6ef-d409e68088b5 |
| Danylo Borodchuk（联创/COO）Forbes Business Council 档案 | https://councils.forbes.com/profile/Danylo-Borodchuk-Co-Founder-COO-Lopus-AI/68769d26-2f30-443a-8d16-f83ce823765b |
| Lopus (YC W25) — LinkedIn 公司页 | https://www.linkedin.com/company/lopusai |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
