# Salesgraph

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B001
- **一句话定位**：The context layer for fast-moving sales teams（快节奏销售团队的上下文层）
- **官网/锚定**：https://www.ycombinator.com/companies/salesgraph
- **深研状态**：researched（YC Spring 2026 (X26) 极早期，2 人团队，已上线并发布 Launch。官网、YC 目录、YC 官方 X 三方交叉印证，锚定明确。融资未披露。）

## 公司画像
- **团队**：2 人。联合创始人 Ruhan Ponnada（工程背景转销售，曾在 Mintlify、Microsoft、Amazon）与 Ricardo Nunez（销售背景转工程，曾在 Mintlify）。产品脱胎于两人在 Mintlify 内部搭建的企业销售 business case 生成工作流。YC 负责合伙人 Andrew Miklas。
- **成立/批次**：2026
- **地点**：美国旧金山湾区（San Francisco Bay Area）
- **产品**：面向企业级销售团队的「主动式营收 Agent / 销售上下文层」。用动态上下文图谱（context graph）把 CRM、通话录音转写、日历、Slack、邮件、文档、行业新闻、招聘变动、客户案例等零散信号汇聚成账户级的研究简报、干系人/决策委员会图谱、下一步行动、mutual action plan、ROI/定价计算器与 business case 材料。核心交互在 Slack：每次通话前 5 分钟推送 pre-call brief（背景 Agent 触发信号 + 上次通话要点 + 本次该覆盖的点），通话后 DM 复盘（讲得好的点、遗漏的 discovery gap、下一步）。另有 ambient 通话录音器、Salesgraph Build 低代码 Agent 编排工具、经理侧的 deal 状态追踪。宣称自动化 AE 在通话间隙 99% 的准备工作。
- **商业模式**：未披露具体定价。已知 ambient 通话录音器对创始人及 3 人以下小团队免费（作为获客入口）；主体产品面向做可复制六位数打单动作的中型团队与多分部 GTM 的企业客户，推测为按席位订阅的 SaaS，但官方未公布。
- **竞争格局**：上游/邻近赛道包括：会话智能与通话记录（Gong、Granola、Grain、Attention——Salesgraph 反而集成它们）、销售参与平台（Outreach、Salesloft）、AI SDR/销售 Agent（如 Sennu AI 等 YC 同类）、以及 CRM 原生 AI（Salesforce Agentforce、HubSpot Breeze）。Salesgraph 差异化定位是「不替代 CRM/录音，而是做其上的上下文编排与 collateral 生成层」，主打企业级高单价、多线程复杂交易的 AE 提效。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Spring 2026 (X26) | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/salesgraph) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Mintlify | 高 | [链接](https://www.ycombinator.com/companies/salesgraph) |
| Tex | 中 | [链接](https://www.ycombinator.com/companies/salesgraph) |
| Strala | 中 | [链接](https://www.ycombinator.com/companies/salesgraph) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服而言，Salesgraph 的价值不在「多发几封邮件」，而在把一次复杂、长周期、多干系人的项目型销售的『上下文』沉淀成可复用资产。工业品（设备、自动化产线、工业软件、材料）的大单往往走招投标、多轮技术交流、决策链横跨技术/采购/生产/财务，销售人员的隐性知识（谁是关键人、上次谈到哪、客户真正的痛点数字）高度依赖个人记忆且难以交接。Salesgraph 这类『上下文层 + 决策委员会图谱 + business case 自动生成 + ROI 计算器』正好对应工业销售最缺的两件事：一是把 CRM 里死的字段变成活的『这个客户此刻该推进什么』，二是把工程师算得出但写不漂亮的价值量化（节能率、良率提升、停机减少折算金额）自动转成客户听得懂的商业论证。对制造业客服/售后同理：把设备运行数据、历史工单、备件更换周期变成主动式的续约与增购上下文。启示是——制造企业上 AI 销售工具，重点看它能否消化行业专有的、结构化程度低的交易语境，而非通用话术生成。
2. **国内对标厂商**：探迹（Tungee）——AI 销售线索与智能获客，偏线索挖掘与触达，Salesgraph 偏成交阶段的上下文编排，二者互补而非重叠、循环智能（Recurrent AI）/ 深维智信 Megaview——会话智能与销售录音分析，对应 Salesgraph 集成的 Gong/Grain 那一层、卫瓴科技（Weilian）——企微生态的 SCRM + AI 销售助手，同样强调『客户上下文』但落在私域/企微场景、销售易 / 纷享销客 的 AI 版块——CRM 原生 AI，对应 Salesgraph 想做的『CRM 之上的智能层』但绑定各自 CRM
   > 国内并无与 Salesgraph 完全对位的『独立于 CRM 的企业销售上下文层』。国内格局更碎：获客（探迹）、会话分析（循环/深维）、私域 SCRM（卫瓴）、CRM 原生 AI（销售易/纷享）各占一段，且多绑定企业微信生态。Salesgraph 的差异化——横跨录音/CRM/日历/Slack 做统一上下文图谱并自动产出 business case——在国内因协作工具分散（钉钉/企微/飞书三分天下、缺 Slack 式统一入口）而更难复制，反而给『飞书/企微生态内的销售上下文 Agent』留出了明确的本地化机会窗口。
3. **可迁移的干法 / 应进场景词典的词条**：销售上下文层、决策委员会图谱、pre-call/post-call 简报、business case 自动生成、ROI/价值量化计算器、Slack 原生销售 Agent、会话智能编排、多线程复杂交易
   > 最可迁移的干法有三条：①『上下文图谱』思路——把分散在录音、CRM、邮件、IM 里的客户信号统一成一张随交易演进的动态图谱，这套方法可直接搬到制造业项目型销售、大客户售后续约、渠道分销管理；②『主动式简报』模式——不等人查，在关键节点（会前 5 分钟、会后即刻）主动把决策就绪的信息 push 到人已经在用的工作台（Slack/企微/飞书），这是『Push Right + Brief』理念的销售落地，可复用于采购、客服、现场服务；③『价值自动量化 → business case』——把工程/数据侧算得出的收益（节能、提效、降损）自动翻译成客户视角的商业论证文档，这对任何需要向客户证明 ROI 的 B2B 高单价销售都通用。
4. **风险与存疑点**：①极早期风险：2026 年成立、2 人团队、融资未披露，产品与商业模式仍在验证，客户仅 Mintlify/Tex/Strala 等少数早期伙伴（含创始人老东家 Mintlify，存在自产自销色彩），规模化能力未经证明。②定位夹层风险：上游被 CRM 原生 AI（Salesforce Agentforce、HubSpot Breeze）向上吃、下游被会话智能（Gong 等）向外扩，『独立上下文层』能否长期不被平台方吞并存疑，且高度依赖对第三方（Salesforce/HubSpot/Gong/Slack）API 的集成，接口政策变动即受制于人。③护城河与信任风险：核心是『把销售隐性知识自动化』，但 business case、ROI 计算的准确性与幻觉风险直接关系企业级交易可信度，一旦出错代价高；同时该场景通用大模型 + 竞品皆可切入，2 人团队的技术壁垒尚不清晰。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Salesgraph — Y Combinator 公司目录 | https://www.ycombinator.com/companies/salesgraph |
| Salesgraph 官网（Close larger deals faster.） | https://www.salesgraph.com/ |
| Y Combinator 官方 X：Salesgraph Launch 祝贺帖 | https://x.com/ycombinator/status/2048817962883391608 |
| Salesgraph — Crunchbase 公司档案 | https://www.crunchbase.com/organization/salesgraph |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
