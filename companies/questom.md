# Questom

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：24/7 AI agents for the merchandising industry（面向印刷/周边行业的 7×24 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/questom
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人。Ritanshu Dokania（CEO）——出身经营 75 年以上的家族定制周边/批发生意，曾任职 Google（Wing/Project Wing 无人机项目）与 Tesla，此前曾把一个自筹 SaaS 产品做到 $45K ARR。Abhimanyu Yadav——在 Apple 从事 7 年应用机器学习研究（对话智能方向），IIT Kanpur 计算机本科 + 哥伦比亚大学研究生。团队约 6 人。YC 对接合伙人 Tom Blomfield。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向定制印刷与品牌周边（custom merchandise / branded merch）行业的 AI 智能体。两条产品叙事：①（Questom 时期）AI 销售与客服智能体——在企业现有渠道（电话、网站在线聊天、SMS/WhatsApp、邮件）内即时应答询盘，采集订单细节（尺码、数量、图稿、发货信息），校验约束条件，做报价、发样、打样跟进与老客户复购沟通，并把交互回写进店铺系统。②（Trelium 品牌）『分支机构/后台运营的 Agentic OS』——把订单录入、报价生成、采购单对发票（PO-to-invoice）核对、客户状态更新、图稿交接等重复性后台流程自动化；能读取非结构化输入、理解上下文、在已连接系统中执行动作、记录结果并对异常升级转人工。
- **商业模式**：B2B SaaS。以现场演示驱动获客——主打『30 分钟、零风险』把客户真实工作流当场自动化的销售演示。官网设有定价页但未公开具体档位。对接系统包括行业垂直 OMS（Printavo、ShopWorks、YoPrint）、财务/ERP（NetSuite、QuickBooks）、CRM（Salesforce、HubSpot）、邮箱与协作（Gmail、Outlook、Slack、monday.com、Trello、Jira）等一切有可用 API 的系统。定位上刻意区隔于 Zapier（脆弱触发器）、RPA（屏幕自动化）与通用 ChatGPT，强调『生产级工作流执行 + 上下文感知』。
- **竞争格局**：横向对手为通用 AI 语音/客服 Agent 及 B2B 销售自动化平台；纵向对手为定制印刷行业的传统 SaaS/OMS（Printavo、ShopWorks、YoPrint 等——既是集成对象也是潜在竞争者）与 Zapier/RPA 类自动化。差异化壁垒在于对定制周边行业订单模式与工作流的深度理解（创始人家族 75 年行业背景）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / YC | 约 $500K | 2025 | [链接](https://www.crunchbase.com/organization/questom) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：Questom/Trelium 是『制造业细分（定制印刷与品牌周边加工）+ 营销销售客服 AI 智能体』的一个高纯度样本，对制造业营销·销售·客服环节的启示很直接：一是『询盘到订单』这段最耗人力、最易漏单的环节可被 Agent 端到端接管——在电话/邮件/IM 等客户已有渠道即时应答、采集规格化订单要素（尺码、数量、图稿、交期）、校验产能与工艺约束、自动报价与打样跟进，官方称可自动化多达 50% 的入站销售与客服工作量、并抬升客单价；二是价值不止于『回消息』，而是把非结构化沟通结构化后回写进 OMS/ERP，把销售前端与生产后台打通（订单录入、PO 对发票、图稿交接），这正是多数制造企业『前端热闹、后台断点』的痛点；三是极强的行业 know-how 依赖——通用客服机器人做不了工艺约束校验与行业订单模式识别，这提示制造业 AI 落地的护城河在垂直工作流理解而非模型本身。
2. **国内对标厂商**：晓多科技 / 智齿科技（电商与 B2B 智能客服，覆盖多渠道应答与工单，但偏客服侧、订单深度弱于 Questom）、阿里国际站 AI 生意助手 / 网商 Agent（面向外贸批发商的询盘应答与报价，场景高度接近但绑定平台）、有赞 / 微盟的 AI 导购与客服（营销侧强，工厂订单/工艺约束弱）、印刷电商侧：云印技术、阳光印网等定制印刷交易平台自带的下单与客服流程（更接近 Questom 的行业垂直，但多为自营平台而非可外挂的 Agent）
   > 国内暂无与 Questom 完全对位的『定制印刷/周边行业专属 AI 销售运营 Agent』。最接近的是两类：一是通用智能客服厂商（晓多、智齿）向订单侧延伸；二是外贸/批发平台（阿里国际站）的内建 AI 助手。国内定制印刷本身高度平台化（云印、阳光印网），流程内建在交易平台里，缺少 Questom 那种『外挂到中小印厂现有邮箱/OMS 上的独立 Agent』形态——这既是国内该品类的空白，也是外挂型 Agent 在国内落地的机会与难点（中小印厂系统离散、数字化程度低）。
3. **可迁移的干法 / 应进场景词典的词条**：询盘应答自动化、订单要素结构化采集、工艺约束校验、自动报价与打样跟进、PO对发票核对、前端沟通回写OMS/ERP、多渠道统一Agent
   > 可迁移干法：Questom 的核心套路是『在客户已有渠道就地接管非结构化沟通 → 抽取结构化订单要素 → 用行业规则校验约束 → 执行报价/跟进/回写系统 → 异常升级转人工』。这套『非结构化进、结构化出、回写业务系统』的流水线可平移到任何以询盘/报价/订单为核心的 B2B 制造场景：机加工件询价、模具报价、包装定制、五金/紧固件批发、化工小单等。关键可复用点有三——① 抓住『客户不改变习惯（还用邮件/电话）』这一落地前提；② 把行业工艺约束沉淀为可校验规则，是通用 Agent 无法替代的护城河；③ 价值锚点从『省客服人力』升级到『打通销售前端与生产后台的断点』。
4. **风险与存疑点**：风险①极早期：2025 年成立、约 6 人、仅 YC 标准 ~$500K 投入，尚无公开的具名付费客户、无独立融资轮，产品与 PMF 均未验证。②品牌与定位摇摆：一年内从 Questom（销售客服 Agent）切换到 Trelium（后台运营 Agentic OS），叙事从『帮销售』漂移到『自动化后台流程』，反映方向仍在探索，早期定位不稳。③行业天花板与集成脆弱性：定制印刷/周边是碎片化、低数字化的中小商户市场，客户系统离散、付费能力有限；产品价值高度依赖对 Printavo/ShopWorks 等第三方系统的 API 集成，集成一旦被限制或对方自研 AI，护城河承压；且『50% 自动化』等数据均为公司自述、无第三方佐证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Questom | Y Combinator 公司目录（YC F25） | https://www.ycombinator.com/companies/questom |
| Trelium（原 Questom）官网 questom.ai | https://www.questom.ai/ |
| Y Combinator LinkedIn：Questom (YC F25) 发布 AI 销售与客服 Agent | https://www.linkedin.com/posts/y-combinator_questom-yc-f25-is-building-ai-sales-and-activity-7394086545076629504-z5q_ |
| Questom - Crunchbase 公司与融资档案 | https://www.crunchbase.com/organization/questom |
| Questom 👕 Launches: The Agentic OS Built for Wholesalers | Fondo | https://fondo.com/blog/questom-launches |
| Ritanshu Dokania - Co-Founder at Questom (YC F25) | LinkedIn | https://www.linkedin.com/in/ritanshudokania/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
