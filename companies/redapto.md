# Redapto

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：Self-improving AI systems for customer support teams（面向客服团队的自进化 AI 系统）
- **官网/锚定**：https://www.ycombinator.com/companies/redapto
- **深研状态**：researched（YC Fall 2025 (F25) 批次，2025 年成立、2025 年 12 月 launch。信息可锚定，来源较充分但仍属极早期（团队 2 人、Pre-Seed）。）

## 公司画像
- **团队**：两位联合创始人。CEO Anirudh Pupneja——此前在 Coinbase 搭建生成式 AI 平台与内部 agent 基础设施，自动化年省 250 万美元以上；联合创始人 Cheril Shah——在 Adobe 与 Amazon Science 做模型微调、压缩与蒸馏，省超 100 万美元、延迟优化 20 倍。两人相识于同一 NLP 研究实验室，均在顶会发表过论文。团队规模 2 人。
- **成立/批次**：2025
- **地点**：美国旧金山 (San Francisco)
- **产品**：面向客服团队的「自进化」质量保障系统。全量审计 100% 的客服交互（覆盖 chat、语音、email），用可按品牌语气/政策/合规自定义的评测 rubric，实时检测漏判意图、政策/合规违规、AI 幻觉与知识盲区；再把问题按根因聚类，自动生成坐席反馈、培训内容并更新 SOP 与知识库，形成持续改进闭环。核心价值主张是提升 CSAT、NRR，带动复购与转介绍。
- **商业模式**：企业级 B2B SaaS。目标客户为电商、金融科技、平台/市场（配送、出行、按需服务）等客服量大的公司，主要对接 COO 与运营/客服体验负责人。具体定价未披露。
- **竞争格局**：处在「客服 QA / 对话智能 / AI 客服可观测与评测」交叉赛道。海外可对标 MaestroQA、Klaus(Zendesk QA)、Loris、AssemblyAI/Cresta 等对话质检与坐席辅助工具，以及新一代 AI agent 评测/eval 平台。差异点在于强调「全量审计 + 根因聚类 + 自动回写 SOP/知识库」的自进化闭环，而非仅打分。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | $500K | 2025-12 | [链接](https://entrackr.com/snippets/redapto-raises-500k-in-seed-round-led-by-y-combinator-10884132) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对以制造业为主体的企业而言，Redapto 揭示的是「售后/客服环节的质量数据本身是一座金矿」。制造企业的营销·销售·客服链条里，工业品的售后工单、经销商咨询、备件与维保沟通往往分散在电话、邮件、企业微信等多渠道，传统 QA 只能抽检不到 5%，大量漏判需求、承诺口径不一致、合规风险被埋没。这类「全量审计 + 根因聚类 + 自动回写 SOP/知识库」的打法，正好对应制造企业最痛的两件事：一是把一线客服/售后与工厂、质量、研发之间的信息断层显性化（客户反复投诉的某个部件问题，能被聚类成质量改进信号）；二是把老师傅的应答经验沉淀成可复用、可训练的标准话术与知识库，缓解客服/技术支持人员流动带来的服务水平波动。对营销销售端，则意味着从每一次客户交互里持续提炼流失预警与复购/转介绍机会。
2. **国内对标厂商**：晓多科技 / 智齿科技（客服 SaaS + 质检，偏坐席辅助与工单）、循环智能 Rulai / 追一科技（对话数据分析、销售会话智能，含全量质检）、联络中心厂商的 AI 质检模块（如天润融通、容联云的智能质检）
   > 国内已有成熟的「智能质检」市场，追一、循环智能、晓多、智齿等都做对话/工单的全量质检与坐席辅助，覆盖度不低。但 Redapto 的差异在于把质检结果闭环回写到 SOP、培训与知识库、并显式对准 AI agent 幻觉与合规评测这一新场景——国内多数厂商仍停在「质检打分 + 报表」阶段，向「自进化知识运营」的自动闭环延伸得较浅。对国内团队的启发是：随着企业上 AI 客服 agent，质检的对象正从「人」转向「人机混合」，谁能把 agent 的 eval 与知识库自动运维做成闭环，谁就卡住了下一代客服可观测的位置。
3. **可迁移的干法 / 应进场景词典的词条**：客服全量质检、AI幻觉/合规评测、根因聚类、SOP与知识库自动运维、CSAT/NRR提升、坐席培训自动生成
   > 可迁移干法：把「全量交互 → 自定义 rubric 评测 → 根因聚类 → 自动回写 SOP/知识库/培训」这套闭环，迁移到制造企业的售后工单、经销商沟通、现场服务报告，甚至内部知识问答与合规审查场景。关键不在打分，而在把发现的问题自动转化为组织资产（更新后的标准动作与知识），这正是「人机协同、知识自沉淀」的通用范式。
4. **风险与存疑点**：①极早期、团队仅 2 人、仅 Pre-Seed 50 万美元，产品成熟度与规模化交付能力未经验证，尚无公开付费客户；②赛道拥挤，海外 MaestroQA/Zendesk QA/Loris 与各大 AI agent 平台的自带 eval 都在挤压，QA 易被平台化厂商顺手做掉，独立工具护城河存疑；③价值高度依赖客户数据接入深度与知识库回写的准确性，一旦自动更新 SOP/知识库出错反而放大风险，落地对数据打通与信任门槛要求高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Redapto — Y Combinator 公司页 | https://www.ycombinator.com/companies/redapto |
| Fondo — Redapto Launches: Self-Improving Systems for Customer Support Teams | https://www.fondo.com/blog/redapto-launches |
| Entrackr — Redapto raises $500K pre-seed led by Y Combinator | https://entrackr.com/snippets/redapto-raises-500k-in-seed-round-led-by-y-combinator-10884132 |
| Redapto 官网 | https://redapto.com/ |
| Anirudh Pupneja | CEO Redapto — Forbes Business Council | https://councils.forbes.com/profile/Anirudh-Pupneja-CEO-Redapto/c499774f-8221-4a22-8c63-4fbd9131044a |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
