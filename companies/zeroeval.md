# ZeroEval

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B004
- **一句话定位**：AI evaluation platform for agent improvement（面向智能体改进的 AI 评测平台）
- **官网/锚定**：https://www.ycombinator.com/companies/zeroeval
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人，大学在墨西哥相识。Sebastian Crossa——Micro（做邮件未来、a16z 投资）创始工程师、Atrato（YC W21）创始工程师；Jonathan Chávez——Datadog LLM 可观测性团队早期成员，本科做过 vision transformer 用于粒子物理、强化学习用于机器人的研究。二人此前共同做过 llm-stats.com（LLM 排行榜，达 6 万 MAU、约 33 万独立访客）。团队规模 2 人。
- **成立/批次**：2025
- **地点**：美国纽约（New York City, NY）
- **产品**：面向智能体改进的 AI 评测平台。核心两件事：①校准的 LLM 裁判（calibrated LLM judges）——用生产数据和被标注的错误样本持续学习，让自动评分逼近人类偏好并随数据增多越来越准；②Autotune——跨多个模型自动做评测，并基于少量人工样本自动优化 prompt。定位解决复杂/长链路智能体难评测的痛点：长时运行、多轮、含大量中间工具调用的 agent，以及要衡量图像/视频/生成式 UI/音频/人格/品味等主观质量的场景，静态 eval 失效。开发者用其 SDK 接入 agent，采集 trace、标注结果、跑贴近真实任务的定向评测。官方称能比人工手动实验快约 10 倍地优化 agent。
- **商业模式**：B2B SaaS/开发者工具。以 SDK 接入 + 评测平台形式售卖；GTM 以 YC 系创业公司与早期 AI 团队为主，走一个月试点（给出前后对比指标）再转自助订阅的路径，配模板、一键示例、社群与每周 office hours 降低接入门槛。官方页面未披露具体定价档位。
- **竞争格局**：AI 评测/可观测赛道竞争激烈：Braintrust、LangSmith（LangChain）、Arize/Phoenix、Galileo、Patronus AI、Humanloop、Langfuse、Confident AI（DeepEval）等；上游模型厂商（OpenAI/Anthropic）也在推自带 eval 能力。ZeroEval 差异点押注在『校准裁判 + Autotune 自动调优』的自改进闭环，以及主观/多模态/长链路 agent 的评测。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC S25 | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/zeroeval) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业正在把 LLM/agent 塞进质检判读、工艺参数问答、SOP/工单生成、供应链与售后客服等环节，但制造场景对『错误代价』极敏感——判错一个缺陷、给错一个工艺参数可能是停线或安全事故。ZeroEval 的价值主张（用生产数据+被标注错误持续校准评测、把人的反馈沉淀成可自动优化的裁判）正好对上制造业『少样本、强领域知识、必须人在环兜底』的现实：不是一次性跑个 benchmark，而是让评测随产线数据滚动变准，并把老师傅的判断标注成机器可复用的评分标准。对制造企业的启示是——上 AI 之前先建『可校准的评测底座』，把领域专家的隐性判据转成可度量、可回归测试的指标，才敢把 agent 推进生产。
2. **国内对标厂商**：上海人工智能实验室 OpenCompass / 司南评测体系（开源大模型与 agent 评测框架，偏学术/榜单，非商业化自改进闭环）、智源研究院 FlagEval（多模态与大模型评测基准）、国内 LLMOps/可观测创业公司如 Dify、FastGPT 等自带的评测模块（评测能力是平台的一部分，非独立评测产品）
   > 国内目前缺少与 ZeroEval 严格同形的『校准裁判 + 自动调优』商业化独立评测创业公司：OpenCompass/司南、FlagEval 偏开源学术榜单与静态基准；商业侧的评测能力多内嵌在 Dify、FastGPT、各家 LLMOps/可观测平台里作为一个模块，而非把『评测随生产数据自改进』做成独立产品。可迁移的空白点：面向国内 agent 落地的、能吃私有生产数据、把领域专家标注转成可自动优化裁判的评测层，仍是相对空缺的位置。
3. **可迁移的干法 / 应进场景词典的词条**：AI 评测/eval、LLM-as-judge 校准、Agent 可观测与调优、Autotune 自动优化、人类反馈闭环、高风险领域评测
   > 可迁移干法：把『评测』从一次性打分升级为随生产数据滚动校准的闭环——先用少量人工标注的错误样本校准一个 LLM 裁判，让它逼近人类判断，再用它对新样本自动评分并反向自动优化 prompt/模型选择。这套『专家标注→校准裁判→自动调优→回归测试』的方法论可平移到任何需要主观质量把关又缺不起人力的场景（客服质检、内容审核、工业质检判读、方案/文案生成质量控制），核心是把老师傅的隐性判据变成可度量、可复用、可自动迭代的评分资产。
4. **风险与存疑点**：①团队仅 2 人、赛道极度拥挤（Braintrust/LangSmith/Arize/Galileo/Patronus 等在位者众且部分已重度融资），差异化护城河待验证；②官网当前主要对外露出的是 LLM Stats（榜单/独立评测实验室），与『agent 自改进评测平台』的主线叙事存在定位摇摆，产品重心是否收敛尚不明；③无公开具名客户与融资金额（除 YC 标准 offer），商业化与付费验证尚未见公开证据，早期风险高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| ZeroEval: Auto-optimizer for AI agents | Y Combinator | https://www.ycombinator.com/companies/zeroeval |
| Launch YC: ZeroEval - Build self-improving agents | https://www.ycombinator.com/launches/OEC-zeroeval-build-self-improving-agents |
| ZeroEval Inc. 官网 | https://zeroeval.com/ |
| ZeroEval (YC S25) | LinkedIn | https://www.linkedin.com/company/zeroeval |
| Jonathan Chávez | Co-Founder - ZeroEval | Forbes Business Council | https://councils.forbes.com/profile/Jonathan-Ch%C3%A1vez-Co-Founder-ZeroEval/66cf3dee-50d0-4767-92d7-30dea4347553 |
| Fondo | ZeroEval Launches: Build Self-Improving Agents | https://www.fondo.com/blog/zeroeval-launches |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
