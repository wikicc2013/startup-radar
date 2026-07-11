# Aside

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：AI-powered sales call assistance tool（AI 销售通话辅助工具）
- **官网/锚定**：https://www.ycombinator.com/launches/Oj4-aside-live-answers-for-enterprise-tech-sales
- **深研状态**：researched（锚定成功但公司已转向（pivot）。分诊时给定的画像『AI 销售通话辅助工具』对应 Aside 最初的 YC F25 Launch 产品（AsideHQ.com，实时给 tech sales 提供答案）。但 Aside 官方主体（法人 Aside Computer Inc.，aside.com / aside.computer）当前主推产品已转为『AI 浏览器 Agent』——tagline『The most intelligent AI assistant, but it's a browser.』，宣称在 Online-Mind2Web 等三项浏览器 Agent 基准上排名第一（99.0%，超过 OpenAI/Anthropic）。同一批创始人、同一 YC 批次（F25），属同一家公司的战略转向，不是同名两家。本档以销售通话辅助的原始定位为主体记录，并标注 pivot。）

## 公司画像
- **团队**：三人创始团队：Jun Kim（김효준，联合创始人兼 CEO，个人站 jun.kim，X @hyojun_at）、Chanhee Lee（李찬희，联合创始人）、Sanghun Lee（联合创始人）。Jun 与 Chanhee 均曾是韩国营销分析创业公司 Airbridge.io 的创始工程师；Jun 还做过 solutions consultant（售前解决方案顾问），在销售通话中回答技术问题、与 50+ 销售代表协作——这正是销售通话辅助产品的原始痛点来源。
- **成立/批次**：2024
- **地点**：美国加州旧金山（San Francisco）
- **产品**：【原始产品·销售通话辅助】Aside 监听销售通话，实时从公司文档、Slack、HubSpot 及历史成单通话中检索答案推送给销售代表，让技术型销售在被问到技术问题时不必再说『我回头查一下』。核心功能：①实时答案卡（Live Cards，把 playbook/FAQ/笔记预置成通话中可即时调出的卡片）；②实时教练（Live coaching，识别销售遗漏的关键痛点、按 BANT/SPICED 等方法论提示下一步该问什么）；③通话后复盘（分析本次通话表现、给反馈、并转化为下一次通话的实时建议）。定位『把公司最强销售的知识 ctrl+v 到每个人身上』。 【当前主体·AI 浏览器】pivot 后 Aside 重构为一款 AI 浏览器 Agent：在用户已登录的网站/账号里自主执行复杂任务（收发邮件、编辑文档、操作内部工具/仪表盘、跑电子表格、甚至支付），本地处理+加密存储、Secure Enclave 硬件级安全、内置带审计日志的密码管理器、基于浏览历史的上下文记忆。
- **商业模式**：SaaS 订阅。浏览器产品支持三种付费/接入方式：复用用户已有的 ChatGPT/Claude 订阅、自带 API Key（BYO key）、或购买 Aside 自有套餐；官网未公开具体价格。销售通话辅助阶段面向 B2B tech 创业公司/企业销售团队（尤其正在扩招销售的团队），亦为订阅制，价格未披露。
- **竞争格局**：销售通话辅助赛道直接对手：同为 YC 的 Caretta（Realtime AI for Sales Calls），以及 Gong、Chorus（ZoomInfo）等对话智能/销售辅助工具，Attention、Nooks 等实时 AI 陪打工具。pivot 后的 AI 浏览器赛道对手更强：OpenAI 的浏览 Agent、Anthropic 的 Claude for Chrome/computer use、Perplexity Comet、The Browser Company 的 Dia、Google 的 Project Mariner 等。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 未披露 | 2025 | [链接](https://www.crunchbase.com/organization/aside-089a) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对以制造业为主体的企业营销·销售·客服，Aside 销售通话辅助版本的启示很直接：制造业的销售链条极度依赖『技术型销售/售前工程师』——客户在通话里抛出的往往是极其专业的问题（材料参数、工艺兼容性、认证合规、交期与产能、定制方案可行性），一旦销售现场答不上来只能『回头再问工程师』，商机就冷掉。Aside 的做法是把散落在 PDF 规格书、历史成单录音、Slack/企业微信技术支持群里的知识，实时喂给一线销售，等于给每个普通销售配了一个随叫随到的售前专家。迁移到制造业：可把产品手册、报价规则、常见异议应答、成功案例做成『实时答案卡』，在客户来电/展会/在线会议中即时调出；用 BANT/SPICED 之类方法论在通话中提示销售别漏问预算、决策链、交付时间。客服侧同理——把老师傅的排障经验沉淀成可实时检索的知识，让新客服也能一次解决。风险在于制造业知识高度依赖准确性（参数错一位就是事故），实时推送的答案必须可溯源、可人工确认，不能让 AI 的幻觉直接进入报价或技术承诺。
2. **国内对标厂商**：销售通话辅助方向：循环智能（Recording & 对话智能，为销售提供沟通洞察与话术辅助）、深维智能 Deepsales、探迹（Tungee，销售智能+外呼）等；对话智能与坐席辅助方向：容联云/云问、追一科技、智齿科技（客服坐席实时辅助）、AI 浏览器/通用 Agent 方向（对应 pivot 后）：智谱 AutoGLM、字节『扣子/Coze 空间』与豆包的浏览器操作、纳米 AI 浏览器（360）、Manus 的通用任务 Agent
   > 国内暂无与 Aside 销售通话辅助形态高度一致、又同样极早期的直接对标；最接近的是循环智能这类『对话智能+销售话术实时辅助』产品，但它们多为面向大客户的重销售 SaaS，而非 YC 式轻量自助工具。pivot 后的 AI 浏览器方向，国内对标更清晰——智谱 AutoGLM、360 纳米 AI 浏览器都在做『在浏览器里替你干活』的 Agent，与 Aside 新定位撞在同一条赛道，且巨头资源远超一家三人创业公司，这也从侧面解释了 Aside 为何要用『本地+硬件级安全』做差异化。
3. **可迁移的干法 / 应进场景词典的词条**：实时通话辅助、知识 ctrl+v、售前专家平权、playbook 实时化、通话后复盘转前馈、浏览器 Agent、BYO-key 订阅
   > 最可迁移的干法是『把顶尖专家的隐性知识实时化、平权化』：Aside 不培训销售，而是在关键时刻直接把答案递到手边（知识 ctrl+v）。制造业培训体系可借鉴——与其花几个月培训新销售/新客服记住所有参数，不如把知识做成『实时答案卡+方法论提示』，在真实场景里即时喂给人，边干边学。另一个可迁移点是『通话后复盘转前馈（after-call → next-call）』：把每次交互的复盘不停在报告层面，而是转化成下一次的实时提示，形成闭环改进。第三，pivot 后 Aside 的『复用已有 ChatGPT/Claude 订阅 + BYO key』是很轻的获客模型，值得 To B 工具借鉴——降低企业试用门槛。
4. **风险与存疑点**：①严重的战略摇摆/pivot 风险：给定画像的销售通话辅助产品已非公司主线，公司已转向竞争激烈得多的 AI 浏览器赛道，产品定位在极短时间内大幅变动，销售辅助业务是否延续存疑，追踪时需以最新主体为准。②赛道拥挤且遭遇巨头：pivot 后直面 OpenAI、Anthropic、Perplexity、Google、The Browser Company 等，三人团队用 benchmark 第一做锚点，但基准领先与商业化护城河之间差距巨大。③信息稀薄且未披露：融资金额、客户名单、收入均未公开披露，Crunchbase 付费墙，仅能确认 Pre-Seed 与 YC 背书；早期真实客户与留存无法核实，制造业相关落地案例暂无证据。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Aside (YC) 公司页——现主推 AI 浏览器 | https://www.ycombinator.com/companies/aside |
| YC Launch：Aside: Live answers for enterprise tech sales（原始销售通话辅助定位） | https://www.ycombinator.com/launches/Oj4-aside-live-answers-for-enterprise-tech-sales |
| Aside 官网（AI 浏览器） | https://aside.com/ |
| Aside 产品站 aside.computer | https://aside.computer/ |
| Jun Kim（联合创始人兼 CEO）LinkedIn | https://www.linkedin.com/in/therne/ |
| Jun Kim 个人站 | https://jun.kim/ |
| Aside Crunchbase（融资，付费墙，仅见 Pre-Seed） | https://www.crunchbase.com/organization/aside-089a |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
