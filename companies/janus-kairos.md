# Janus (Kairos)

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：AI deployment layer for critical industries（面向关键行业的 AI 部署层）
- **官网/锚定**：https://www.ycombinator.com/companies/kairos
- **深研状态**：researched（在营。法律实体 Janus AI, Inc.，现品牌 Kairos（官网 withkairos.co）。公司在 YC X25 期间从产品「Janus」（AI Agent 仿真压测/评测）转向定位「Kairos——面向关键行业的 AI 部署层」，把前沿模型收敛成确定性系统。Janus 现为其对话/语音 Agent 压测能力/前身产品。）

## 公司画像
- **团队**：2 人。联合创始人 Shivum Pandove（CMU 机器学习/CS，曾以 SWE/PM 身份从 0→1 参与多家初创，做过计算生物学深度学习研究）与 Jet Wu（CMU，曾为微软做评测框架 TinyTroupe、Cerebras Systems AI Fellow、与 Bellingcat 做 OSINT 研究）。两人自 CMU ML 项目退学，放弃 Anduril/IBM 的 offer 全职创业。
- **成立/批次**：2025
- **地点**：美国旧金山
- **产品**：把前沿大模型转化为「确定性 AI 系统」，主打关键/强监管行业最后一公里可靠性，宣称 99%+ 可靠度。做法：捕捉一线操作员真实工作方式，沉淀为结构化 evals 与训练数据，训练能编码运营专家经验、可靠自动化最繁重手工流程的专用 Agent；部署在客户自有环境内（私有化，数据不外泄），交付的智能资产归客户所有。前身/内部能力 Janus：对聊天与语音 Agent 跑数千次仿真对抗，暴露幻觉、违规、工具调用与性能失败，并提供定制评测。
- **商业模式**：面向关键行业「品类领先者」的企业级私有化部署 + 定制专用 Agent（官网仅有 demo 预约入口，未公开定价）。价值主张三点：可靠性（把概率性 AI 变确定性）、隐私（部署在客户环境内）、主权（构建的智能归客户独占、形成他人难复制的壁垒）。
- **竞争格局**：对话/语音 Agent 可靠性与评测赛道（如各类 agent evals、guardrails 厂商）；以及关键行业垂直 Agent/私有化 LLM 落地厂商。差异化在于「捕捉操作员专家经验→确定性化→私有化独占资产」的组合定位。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC (Spring 2025 / X25) | 未披露（标准 YC 投资） | 2025 | [链接](https://www.ycombinator.com/companies/kairos) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：Janus/Kairos 的核心命题——把概率性的前沿大模型收敛成「确定性、可审计、可复现」的系统——正是制造业敢不敢把 AI 放进关键流程的分水岭。制造现场（排产、质检判定、工艺参数、设备处置、合规放行）容错率极低，一次幻觉或越权动作就可能导致停线、批次报废或安全事故，因此「99%+ 可靠」「护栏 + 仿真压测 + 私有化不外泄」比「更聪明」更值钱。其方法论对制造业尤其可迁移：先把老师傅/资深操作员的隐性经验采集成结构化 evals 与训练数据，再训练编码该经验的专用 Agent 去自动化最繁重的手工判断——这与制造业「专家经验难传承、老师傅退休即失传」的痛点高度契合，本质是给工业 know-how 做「确定性封装」。
2. **国内对标厂商**：澜码科技：企业级 Agent 平台，主张把业务专家经验沉淀为可执行 Agent，与 Kairos「编码 operator 专家经验」思路同源、实在智能：Agent + RPA 自动化企业繁重手工流程，可对标其「自动化最manual工作流」一面、中关村科金 / 竹间智能：面向金融等强监管行业的私有化大模型 + Agent 落地，对标 Kairos「关键行业 + 私有化部署 + 合规」定位、工业侧参照：格创东智、蘑菇物联等在工业场景做 AI 可靠落地的厂商，对应「关键行业最后一公里可靠性」
   > 国内目前多以「Agent 平台 / RPA+大模型 / 行业私有化落地」三条线分别覆盖 Kairos 的不同侧面，尚缺一家把「专家经验采集→确定性化(evals+仿真压测)→私有化独占资产」打成一个完整方法论产品的对标者。对国内厂商的反向情报意义：确定性/可审计化(而非单纯堆能力)、把评测与仿真压测作为交付前置件、以及「智能资产归客户所有」的主权叙事，是可借鉴的差异化打法；对制造业客户则是一把筛选供应商的尺子——问对方能否给出可复现的可靠性证据与私有化方案，而不只是 demo 效果。
3. **可迁移的干法 / 应进场景词典的词条**：确定性AI/护栏、operator专家经验编码、私有化/环境内部署、关键行业last-mile可靠性、Agent仿真压测与evals
   > 最可迁移的干法有三：①「专家经验→结构化 evals/训练数据」——先把一线老师傅怎么干采集成可量化的评测集，再训 Agent，制造业的质检、工艺、设备运维皆可套用；②「上线前先仿真压测」——像 Janus 那样对 Agent 跑数千次对抗仿真，暴露幻觉/越权/工具调用失败，把可靠性做成可证明的交付物而非口头承诺；③「私有化 + 数据不外泄 + 智能归客户」——用「主权/独占壁垒」叙事打消关键行业对数据与合规的顾虑，这对制造业、金融、能源等强监管场景是通用的信任钥匙。
4. **风险与存疑点**：①信息高度早期：2 人团队、2025 年成立、YC 期内已从 Janus(测试)转向 Kairos(部署层)，定位仍在演进，存在再次转向风险，且官网未具名任何客户 logo、无公开可交叉验证的落地案例；②「99%+ 可靠 / 确定性」为公司自述营销话术，无第三方或客户联合发声佐证，实际可靠性与规模化交付能力待验证；③命名与检索强噪声：Janus、Kairos 均为通用词，市面存在大量同名实体（Firstsource 的 Kairos 运营系统、Kairos 身份识别、Kairos Ventures 等），且 Firstsource「66% 提效 / 英国 Fintech KYC」等案例不属于本公司，切勿混入。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Kairos: Specialized AI for Critical Industries | Y Combinator | https://www.ycombinator.com/companies/kairos |
| Kairos 官网 withkairos.co（法律实体 Janus AI, Inc.） | https://withkairos.co/ |
| Janus (YC X25) 公司页 · LinkedIn | https://www.linkedin.com/company/withjanus |
| Kairos (YC X25) 公司页 · LinkedIn | https://www.linkedin.com/company/withkairos |
| Jet Wu - Janus (YC X25) · LinkedIn（联合创始人背景） | https://www.linkedin.com/in/jet-wu-cmu/ |
| Janus: The AI Testing Startup Simulating Thousands of Conversations · HireTop | https://hiretop.com/blog4/janus-ai-testing-simulation-platform/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
