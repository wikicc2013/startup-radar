# Hyper

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：The self-driving company brain（自动驾驶式的公司大脑）
- **官网/锚定**：https://www.ycombinator.com/companies/hyper-4
- **深研状态**：researched

## 公司画像
- **团队**：2 人。联合创始人 Shalin Shah(CEO，UC Berkeley 计算机+数学，曾在 Matic Robots 负责自主性)；Kanyes Thaker(President，UC Berkeley 计算机+数学，Matic Robots 自主性负责人，曾任 Snorkel AI 最年轻的 Field Development Engineer)。
- **成立/批次**：2026（YC Spring 2026 / X26·P26）
- **地点**：美国旧金山
- **产品**：面向企业的『公司大脑(company brain)』：静默接入公司内部所有信息流(Notion/Docs、Slack、Email、Calendar、GitHub PR、Cursor/Claude Code 会话等)，由 agent 驱动算法自动清洗去重、构建并维护一张实时自更新的知识图谱，再在每次对话把相关上下文注入到用户已有的各类 AI 工具/agent 中。主张：2026 年模型已够聪明，瓶颈是 agent 的记忆而非推理。每条事实带 valid_until 时间戳、每次新写入触发邻域更新，解决企业记忆中'陈旧、矛盾、过期决策'问题；宣称 20 分钟内接入。
- **商业模式**：B2B SaaS。发布后处于'付费设计试点(paid design pilots)'阶段。定价未公开。
- **竞争格局**：记忆/上下文层与知识图谱赛道：Mem0、Zep、Letta 等 agent memory 方案、企业检索/RAG(Glean)、MCP 生态上下文注入。差异化在'跨全部工具的自维护、去矛盾、带时效戳的公司级共享记忆图谱'。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Spring 2026 标准投资 | 未披露(除 YC 标准 deal 外无公开金额) | 2026 | [链接](https://www.ycombinator.com/companies/hyper-4) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Razorpay(付费设计试点/scoping 阶段) | 中 | [链接](https://www.ycombinator.com/launches/QKg-hyper-the-self-driving-company-brain) |
| Snorkel AI(付费设计试点/scoping 阶段) | 中 | [链接](https://www.ycombinator.com/launches/QKg-hyper-the-self-driving-company-brain) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业的工艺知识、设备维护经验、质量异常处置决策大量散落在老师傅脑中、Excel、微信群和历史工单里，且随工艺迭代不断过期矛盾。Hyper 这类'带时效戳的自维护公司记忆图谱'对制造业尤其契合——可把 MES/QMS/设备台账/工单/班组交流沉淀为实时更新的'工厂大脑'，再喂给排产、质检、设备诊断等 AI agent，解决'知识随人走、文档一写就过期'。
2. **国内对标厂商**：Mem0(开源 agent 记忆层)、智谱/百川企业私域知识 Agent、国内 RAG 中间件(RAGFlow、FastGPT、Dify 知识库模块)、有道/字节企业知识库智能问答
   > 国内直接对标偏'企业知识库+RAG问答'(Dify/RAGFlow/FastGPT、智谱企业版)，而 Hyper 差异点是'自动写入+去矛盾+valid_until 时效治理+跨全工具静默采集'，国内做到这层自动化治理的产品还很少，是可迁移空白点。
3. **可迁移的干法 / 应进场景词典的词条**：公司大脑、Agent 记忆层、自维护知识图谱、企业上下文注入、跨工具知识聚合、事实时效戳(valid_until)、AI 员工赋能、MCP 上下文层
   > ①定位记忆而非模型为瓶颈的切入叙事；②静默接入现有工具链、零录入门槛(20 分钟接入)；③每条事实打时效戳+邻域更新做知识治理，解决 RAG 老大难；④不做新 AI 助手，而做'注入层'增强用户已有 AI，降低替换成本。制造场景可复用：接到既有排产/质检系统而非另起炉灶。
4. **风险与存疑点**：①极早期(2 人、发布 12 天、0→1k MRR)；②Razorpay/Snorkel AI 为'scoping 试点'而非签约客户，勿当标杆案例；③静默采集全公司 Slack/邮件/代码涉及严重数据安全与合规顾虑，制造业涉密环境落地门槛更高；④记忆层赛道拥挤(Mem0/Zep/Letta/Glean)；⑤'达到或超过 SOTA'为自评基准。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Hyper: Company brain that powers your AI employees \| Y Combinator | https://www.ycombinator.com/companies/hyper-4 |
| Launch YC: Hyper: The Self-Driving Company Brain | https://www.ycombinator.com/launches/QKg-hyper-the-self-driving-company-brain |
| Launch HN: Hyper (YC P26) | https://news.ycombinator.com/item?id=48387095 |
| 官网 heyhyper.ai | https://heyhyper.ai/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
