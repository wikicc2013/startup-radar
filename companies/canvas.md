# Canvas

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Self-improving enterprise agents for GTM workflows（面向 GTM 流程的自进化企业智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/canvas
- **深研状态**：researched（锚定成功。目标公司为 YC F24（Fall 2024）批次的 Canvas（Canvas Labs / Canvas AI），创始人 Essam Sleiman，官网 canvas.inc。登记批次写作 B007，实际 YC 批次为 F24，非 S25/X25。该公司存在明显定位演进：早期（YC 申请/Launch 时）定位『Self-improving enterprise agents for GTM workflows / AI Operating System for B2B Sales』——AI 研究型 agent + human-in-the-loop 人类 SDR 做外呼获客；当前官网与 YC 标语已更新为『Continual learning for agents』，即面向企业 agent 的『后训练 + 持续学习层』（post-training、evals、基础设施、observability），GTM 从主战场收窄为落地场景之一。本档以『自进化/持续学习 agent 层』为当前主线，并保留其 GTM 起点。信息稀薄，多项未披露。）

## 公司画像
- **团队**：创始人 Essam Sleiman（Founder/CEO，目前资料显示为单一创始人，团队约 3 人，旧金山）。背景：曾在 Twitch 主导公司首个视频基础模型的设计与训练，并提出在持续到来的视频流上训练的持续学习（continual learning）方法；在 AWS 从事 AI 与持续学习系统；联合创办 Komma（销售自动化）；发起 CodeLab（学生开发者社团）；在顶会发表 AI 研究，参与早期视频 LLM MiniGPT4-Video（ECCV），并在 CVPR 发表 ML 鲁棒性研究。总体是『持续学习 + 后训练』方向的研究型创始人。
- **成立/批次**：2024
- **地点**：美国·旧金山（San Francisco, CA）
- **产品**：面向企业生产环境 AI agent 的『持续改进层』：把后训练（post-training）、评测（evals）、运行基础设施与可观测性（observability）打包成一个飞轮——线上 agent 的真实轨迹与反馈被采集、评测、回灌用于后训练，使 agent 随使用而自我提升（self-improving / continual learning），而非停留在一次性提示工程或静态微调。起步落地场景为 GTM/销售工作流：早期形态是 AI 研究 agent + 按需真人 SDR 混合，帮企业寻找、筛选、预约高意向线索，自动化外呼中重复的部分。当前对外叙事更偏底层『企业 agent 的后训练与持续学习层』（applied-research/product lab，自研专有智能）。
- **商业模式**：B2B 企业软件/基础设施。定价未公开披露。早期 GTM 形态偏『AI + 真人 SDR』的获客服务（可能按线索/坐席计费）；当前『持续学习/后训练层』更可能走平台或用量+企业合同模式（面向已有 agent 的企业客户提供 eval/后训练/observability）。具体商业条款未披露。
- **竞争格局**：作为『GTM/销售 agent』：11x、Artisan、Clay、Nooks、Regie、Qualified、Rox 等 AI SDR/外呼与销售自动化玩家。作为『企业 agent 后训练 + 持续学习/评测/可观测层』：OpenPipe、Adaptive ML、Predibase、Fireworks、Together（后训练/微调基础设施），以及 LangSmith(LangChain)、Braintrust、Arize（评测/可观测），Canvas 的差异点在于把『线上真实轨迹→评测→后训练→自我提升』做成闭环飞轮，而非只做其中一段。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（YC 标准投资） | $500K | 2024 | [链接](https://www.crunchbase.com/organization/canvas-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服而言，Canvas 代表的不是『又一个能对话的 AI』，而是把 agent 变成『越用越准』的资产这件事。工业 B2B 的获客与售后有大量重复但高度领域化的工作：SKU/技术参数匹配、报价与选型问答、备件与工况客服、经销商线索跟进——通用大模型开箱即用往往达不到可用精度，且一次微调很快过时。Canvas 的思路是把线上真实交互轨迹（销售/客服每天与客户、经销商的对话与成交反馈）持续回灌，做评测与后训练，让针对本企业产品线与话术的 agent 自我提升。对制造企业的启发有三：① 数据资产化——把 CRM/工单/微信企业号里沉睡的对话与成交结果，变成可训练、可评测的语料飞轮；② 场景先窄后宽——先从一个可量化闭环（如外呼预约、备件报价客服）切入，用 eval 卡住质量再扩场景；③ 人机混合过渡——早期像 Canvas 那样保留真人兜底（human-in-the-loop），把人类修正当作训练信号，逐步把托付档位从 HITP 抬到 HOTP。
2. **国内对标厂商**：探迹 Tungee（GTM/销售侧对标：AI 获客+外呼+SDR 自动化，与 Canvas 早期 GTM 形态最接近，但探迹偏数据+触达，Canvas 强调 agent 自我提升飞轮）、阿里云百炼 / 火山引擎方舟（后训练+评测层对标：提供模型微调、评测、可观测的企业平台，与 Canvas『持续学习/后训练层』定位重叠，但国内大厂平台更通用、Canvas 更聚焦 agent 轨迹回灌的持续学习）、硅基流动 SiliconFlow / 智谱开放平台（模型服务+微调基础设施对标：面向企业的推理与微调基座，缺少 Canvas 那套 online 轨迹→eval→后训练的闭环叙事）
   > 国内没有与 Canvas 一一对应的纯玩家，需拆两条线看：GTM 应用线对标探迹、卫瓴、销售易的 AI 能力（都做销售自动化，但核心是数据+触达+CRM，罕有把『agent 随用自我提升』做成产品主张）；底层基础设施线对标百炼/方舟/硅基流动/智谱开放平台（都提供微调+评测+可观测，但偏通用大模型平台，不像 Canvas 把『线上真实 agent 轨迹的持续学习飞轮』当作独立品类）。Canvas 的稀缺性正是这条『应用场景数据 → 评测 → 后训练 → 自我提升』的闭环层，国内目前多由甲方自建或大厂平台拼装，尚无成气候的独立创业公司占位。
3. **可迁移的干法 / 应进场景词典的词条**：持续学习/自我提升 agent、后训练飞轮、评测与可观测(eval+observability)、GTM/销售 agent、人机混合(human-in-the-loop)、轨迹回灌
   > 可迁移到制造业的干法：核心是把『一次性上线的 AI』改造成『带反馈飞轮的 AI』。落地动作——第一步在一个高频窄场景（外呼预约/备件报价客服/经销商线索跟进）部署 agent，同时保留真人兜底；第二步把每次真人修正、成交/未成交结果、客户反驳都结构化采集为训练信号；第三步用 eval 集固化质量红线（防止越训越偏），再定期后训练回灌；第四步质量达标后逐步下调真人参与档位。关键心法是『先窄场景 + 先建评测 + 再谈自动化』，把 observability 和 eval 当成敢放手的前提，而不是先追求全自动。
4. **风险与存疑点**：①定位漂移风险：从『GTM 销售 agent』转向『企业 agent 后训练/持续学习层』，两条路径的客户、竞品、销售方式差异很大，尚未看到明确 PMF 与标杆客户，存在讲故事领先于交付的可能。②极早期+单一创始人+约 3 人小团队，仅 YC 标准种子约 $500K，资金与人力薄，面对 OpenPipe/Predibase/大厂平台及国内百炼/方舟等资源雄厚对手，护城河待验证。③信息稀薄且无公开付费客户/收入披露，融资仅见 Crunchbase/Tracxn 记录的 YC 标准投资，未见独立领投的正式种子轮，商业化进度不明；『持续学习飞轮』的技术叙事在生产环境的真实效果与数据/合规（客户对话数据用于训练）也存在落地与信任风险。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Canvas: Continual learning for agents | Y Combinator (公司页/一手锚定) | https://www.ycombinator.com/companies/canvas |
| Canvas 官网 canvas.inc（当前定位：post-training 与持续学习层） | https://www.canvas.inc/ |
| Essam Sleiman 个人主页（创始人背景：Twitch 视频基础模型/持续学习、MiniGPT4-Video、CVPR） | https://essamsleiman.com/ |
| Essam Sleiman - Canvas AI (YC F24) | LinkedIn | https://www.linkedin.com/in/essam-sleiman-4253b1128/ |
| Canvas AI - Crunchbase（种子 $500K / YC 投资） | https://www.crunchbase.com/organization/canvas-ai |
| Canvas AI - Tracxn 公司档案（团队/融资） | https://tracxn.com/d/companies/canvasai/__RhIXCvgvImvEuy0ecV-IaAt8auxitaRgwKXHwOierlU |
| Canvas AI (YC F24) HQ & 公司信息 | Highperformr | https://www.highperformr.ai/company/canvasai |
| Growth Sales & Ops at Canvas | Y Combinator（早期 GTM/真人 SDR 定位佐证） | https://www.ycombinator.com/companies/canvas/jobs/Ai3P3xH-growth-sales-ops |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
