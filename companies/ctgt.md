# CTGT

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Deterministic governance for enterprise AI（面向企业 AI 的确定性治理）
- **官网/锚定**：https://www.ycombinator.com/companies/ctgt
- **深研状态**：researched（在营。YC Fall 2024（F24）。2025-02-20 完成 720 万美元种子轮，官网与融资信息持续更新，未见关停/被收购迹象。）

## 公司画像
- **团队**：创始人 CEO Cyril Gorlla（曾在 UC San Diego 任 Endowed Chair's Fellow、Stanford 做研究，工作《efficient and interpretable AI》曾在 ICLR 展示）、联合创始人兼 CTO Trevor Tuttle。团队约 10 人，位于旧金山。核心技术脱胎于 UC San Diego 的表征工程/机制可解释性研究。
- **成立/批次**：2024（YC Fall 2024 批次）
- **地点**：美国旧金山 San Francisco, CA
- **产品**：面向企业 AI 的『确定性治理层』（deterministic layer）。核心是把机制可解释性（mechanistic interpretability）与表征工程（representation engineering）产品化：直接在模型的表征层做干预，无需重训或微调，在推理时实时消除幻觉、偏见与审查倾向，并把企业 SOP、SEC/FINRA 合规、编辑规则等转成机器可读的『Policy as Code（策略即代码）』策略引擎。官方对外基准：幻觉预防 96.5%、复杂领域任务精度提升最高 3.3 倍、人工复核（human-in-the-loop）减少 80–90%、宣称可让开源模型定制/训练/部署『快至 500 倍』、推理成本最低降 80%。在 DeepSeek 上把敏感问题作答率从 32% 提升到约 96%，Llama 上有类似效果。
- **商业模式**：面向受监管高风险行业的 B2B 企业软件：以策略引擎+治理基础设施订阅形式，让客户在自托管开源模型上获得接近前沿模型的可靠性与可审计性，主打降低工程/合规开销（官方称省 20–40% 工程投入、推理成本最多降 80%）。价值主张是『用开源模型+CTGT 治理层替代昂贵闭源模型』。
- **竞争格局**：与护栏/合规类（Guardrails AI、Nvidia NeMo Guardrails、Patronus AI、Arthur、Credo AI、Fiddler 等 AI 治理/可观测/评测厂商）在『让企业 AI 可信可审计』这一诉求上重叠；差异化在于其在模型表征层做确定性干预、免重训，而非在输入输出侧加过滤器。间接对手是前沿模型厂商自带的安全对齐能力。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed 种子轮 | 7.2M USD（约 720 万美元，oversubscribed 超额认购） | 2025-02-20 | [链接](https://www.globenewswire.com/news-release/2025/02/20/3029732/0/en/CTGT-Raises-7-2M-To-Help-Enterprises-Break-Through-the-Limits-of-AI-Compute-with-a-New-Approach-to-Customizing-Training-and-Deploying-Models-That-s-500x-Faster.html) |
| Seed 领投/参投方 | 同上轮（领投 Gradient/Google 早期 AI 基金；参投 General Catalyst、Y Combinator、Liquid 2、Deepwater；天使含 François Chollet、Michael Seibel、Paul Graham；另有 Mark Cuban 参与，金额未披露） | 2025-02-20 | [链接](https://www.gradient.com/blog/posts/ctgt/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Ebrada Financial | 中 | [链接](https://techfundingnews.com/ctgt-ai-startup-founded-by-23-year-old-snaps-7-2m-to-help-companies-train-and-deploy-ai-models/) |
| 某头部保险公司（未具名）——用于理赔编码准确性，官方称一周内避免超过 100 万美元财务敞口 | 中 | [链接](https://www.globenewswire.com/news-release/2025/06/27/3106770/0/en/CTGT-s-New-AI-Platform-Eliminates-Bias-Hallucinations-in-AI-Models-Like-DeepSeek.html) |
| 某大型银行（未具名）——生产环境 GenAI 邮件合规模型 | 中 | [链接](https://www.globenewswire.com/news-release/2025/06/27/3106770/0/en/CTGT-s-New-AI-Platform-Eliminates-Bias-Hallucinations-in-AI-Models-Like-DeepSeek.html) |
| 某 Fortune 10 公司（未具名）——端侧安全 AI 部署 | 低 | [链接](https://www.finsmes.com/2025/02/ctgt-raises-7-2m-in-seed-funding.html) |
| 官网 logo 墙列出 JP Morgan / PwC / Zapier / Canva / Brex / U.S. Cyber Command（框定为客户/合作方，但融资方 Gradient 与第三方来源均未具名坐实，疑为 logo 墙或团队履历/顾问背书） | 低 | [链接](https://www.ctgt.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：CTGT 的路子对制造业的启示不在『又一个大模型』，而在『如何让 AI 在出错代价高的场景里可被信任、可被审计』。制造业的质量判定、工艺参数放行、SOP 合规、安全联锁、供应商准入这些环节，本质和金融合规、保险理赔一样：不能容忍幻觉、要留可追溯的决策证据、还要能把厂里既有的作业指导书/质量标准/安规条例变成机器能执行的硬约束。CTGT『把规则编译成 Policy as Code、在模型表征层做确定性干预、免重训』的思路，正对应制造业最现实的诉求——用本地/私有部署的开源模型跑现场应用，又要它守住铁律、出了问题能倒查。对一号位而言，可迁移的判断是：AI 落地到高风险产线，真正的壁垒不是模型能力，而是『确定性治理+可审计』这层，谁把企业规则数字化成可执行策略，谁就掌握了工业 AI 的信任基座。
2. **国内对标厂商**：瑞莱智慧 RealAI —— 清华系，主打 AI 安全/对抗鲁棒/可解释与内容安全（RealSafe 平台），在『可信可解释 AI』方向与 CTGT 最接近，但偏检测/评测与攻防，不做表征层确定性干预免重训、蚂蚁集团『蚁鉴』AI 安全检测平台 —— 大模型幻觉/安全/合规检测与红队评测，定位偏『体检+护栏』，非模型内部机制干预、国内内容安全/大模型护栏类（阿里云内容安全、百度智能云、火山引擎等的合规围栏）—— 在输入输出侧做过滤，与 CTGT『表征层干预』属不同技术路线、智谱等前沿模型厂商自带的安全对齐能力 —— 内生对齐，非第三方治理层
   > 国内目前没有与 CTGT 严格对位的『机制可解释性+表征工程免重训确定性治理』纯玩家。可信 AI 方向瑞莱智慧最贴近学术血统与安全定位，但产品形态偏检测评测与攻防鲁棒；蚂蚁蚁鉴与各云厂商护栏走的是外部体检/输入输出过滤路线，而非深入模型内部表征做实时干预。这既说明 CTGT 的技术路线在国内尚属空白、有反向情报价值，也提示国内落地更可能以『护栏+评测+合规审计』组合先行，表征级干预短期偏研究。
3. **可迁移的干法 / 应进场景词典的词条**：确定性治理、机制可解释性、表征工程、Policy-as-Code、幻觉消除、AI合规审计、开源模型企业化、高风险场景AI
   > 可迁移的干法：一是『把规则编译成可执行策略（Policy as Code）』——凡是企业里有成文标准（质量规范、安规、SOP、合规条款）的场景，都可以尝试把规则数字化成 AI 能强制遵守的硬约束，而不是靠提示词祈祷模型听话；二是『在模型内部而非外部做治理』的思路虽偏前沿，但其目标——可审计、可倒查、免重训——是所有高风险行业 AI 落地的共性刚需；三是『开源模型+治理层替代昂贵闭源模型』的降本组合，对预算敏感又要私有化部署的制造/金融/医疗客户有直接借鉴。
4. **风险与存疑点**：①核心对外数字（96.5% 幻觉预防、500x 加速、DeepSeek 32%→96%、省 100 万美元敞口）几乎全部来自官方自述基准与新闻稿，缺第三方独立复现，宣传色彩重，需打折看待；②具名客户极少，官网 logo 墙（JP Morgan/PwC/Canva/Brex 等）未被融资方或第三方坐实，真实商业化深度存疑，可能是背书/履历而非付费客户；③赛道拥挤且巨头下场——护栏/评测/治理厂商众多，前沿模型厂商又在强化自带对齐，一家约 10 人、720 万美元种子轮的早期公司要守住『表征层确定性干预』的技术壁垒并规模化商业化，执行与融资续航压力大，且高度依赖创始人个人光环（23 岁、Mark Cuban/Paul Graham 背书）。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| CTGT — Y Combinator 公司页 | https://www.ycombinator.com/companies/ctgt |
| CTGT 官网 | https://www.ctgt.ai/ |
| CTGT Raises $7.2M（GlobeNewswire 融资稿，2025-02-20） | https://www.globenewswire.com/news-release/2025/02/20/3029732/0/en/CTGT-Raises-7-2M-To-Help-Enterprises-Break-Through-the-Limits-of-AI-Compute-with-a-New-Approach-to-Customizing-Training-and-Deploying-Models-That-s-500x-Faster.html |
| Our Investment in CTGT — Gradient Ventures | https://www.gradient.com/blog/posts/ctgt/ |
| CTGT's New AI Platform Eliminates Bias, Hallucinations（GlobeNewswire，2025-06-27，含 DeepSeek/保险/银行案例） | https://www.globenewswire.com/news-release/2025/06/27/3106770/0/en/CTGT-s-New-AI-Platform-Eliminates-Bias-Hallucinations-in-AI-Models-Like-DeepSeek.html |
| CTGT raises $7.2M in Seed funding — FinSMEs（提及 Fortune 10 客户） | https://www.finsmes.com/2025/02/ctgt-raises-7-2m-in-seed-funding.html |
| TechFundingNews：CTGT snaps $7.2M（提及 Ebrada Financial 客户） | https://techfundingnews.com/ctgt-ai-startup-founded-by-23-year-old-snaps-7-2m-to-help-companies-train-and-deploy-ai-models/ |
| How This Hyderabadi Founder Won Over Mark Cuban — Analytics India Mag（创始人背景/Cuban） | https://analyticsindiamag.com/ai-trends/how-this-hyderabadi-founder-won-over-mark-cuban-to-solve-ai-hallucination/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
