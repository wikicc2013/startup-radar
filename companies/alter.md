# Alter

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B004
- **一句话定位**：Unified zero-trust authorization for AI agents（面向 AI 智能体的统一零信任授权）
- **官网/锚定**：https://www.ycombinator.com/companies/alter
- **深研状态**：researched

## 公司画像
- **团队**：两人创始团队，均来自受监管行业的关键基础设施背景。CEO Srikar Dandamuraju 曾任 Goldman Sachs 平台负责人，主导交易后（post-trade）基础设施规模化，并参与 Apple Card / GM Card 发行；此前在 Addepar、Clear Street 做软件工程。CTO Kevan Dodhia 成长于肯尼亚内罗毕，2019 年毕业于卡内基梅隆大学电子与计算机工程，曾在分布式分析公司 Xcalar 工作，后联合创办 Compute.AI（做比 EMR Spark 快 5 倍的高性能 SQL/计算引擎，客户含伦交所 LSEG，2025 年初被 Terizza 收购）。YC 页显示团队规模 2 人。
- **成立/批次**：2025 年，YC Summer 2025（S25）批次
- **地点**：美国纽约（New York City, NY）
- **产品**：Alter（产品名 Alter Vault）是面向 AI 智能体的零信任身份与访问控制平台。它作为中间层（middleware/gateway）嵌在每一次 agent 工具调用之间：通过 MCP 与原生集成托管或对接工具，在每次请求上验证 agent 身份，按参数级 RBAC（基于角色）与 ABAC（基于属性）策略逐一核对每个参数是否合规，并以最小权限执行——用短时、按任务收窄作用域的临时令牌（ephemeral, scope-narrowed token）替代长期 API Key，秒级轮换或过期，SDK 内不暴露明文令牌。危险动作（如生产库的 DROP TABLE、超过策略上限的支付/交易）在触及生产前即被拦截。平台提供行/列/属性级数据策略、面向 CISO 的审计看板与完整请求-响应-决策日志，声称支持 SOC 2、HIPAA、GDPR 合规。官网称支持 100+ Provider 集成（Google、Slack、GitHub、Salesforce、Notion、Linear、Stripe、HubSpot、Asana、Jira、Discord、Shopify 等），并管理 OAuth 令牌、API Key 与审计日志。
- **商业模式**：B2B 企业级安全基础设施，SaaS/中间件订阅模式。官网采用 freemium/早期访问（early access，无需信用卡注册）获客。目标客户为部署 AI agent 的工程与安全负责人、受监管行业企业（金融、医疗、政府）、需要零信任访问控制的 AI-first 初创，以及希望消除长期凭证的信息安全团队。具体定价与商业条款未公开披露。
- **竞争格局**：赛道为快速升温的「AI 智能体身份与授权（agentic identity / authorization for agents）」，Gartner 已定义 Agentic Identity 概念。直接/相邻竞争者包括：Aembit、Astrix Security（非人类/agent 身份）、Oso（授权即服务）、Okta 系（Auth0 / Auth for GenAI）、WorkOS、Descope，以及各类 MCP Gateway / agent 网关与传统 PAM/密钥管理（HashiCorp Vault 等）。Alter 的差异点在于：参数级 RBAC/ABAC + 逐调用临时令牌 + 实时拦截 + 面向合规审计的一体化中间层，且创始团队带金融级监管基础设施背景。赛道拥挤、巨头（Okta/云厂商）与初创同时涌入是主要竞争压力。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Summer 2025 标准投资 | 未披露（仅 YC 标准投资，暂无对外披露的独立融资轮次） | 2025 | [链接](https://www.ycombinator.com/companies/alter) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业客户而言，Alter 解决的是「AI agent 上生产线后如何不闯祸」这一治理问题——当智能体被接入 MES、ERP、PLM、SCADA/工业数据平台或供应链系统去自动下单、改工单、调排产、写数据库时，最大的风险恰是「agent 拥有了服务账号的全部权限」。Alter 的参数级授权与逐调用临时令牌，正对应制造场景里「只允许改这条产线、这个物料、这个金额区间」的细粒度管控需求；实时拦截可挡住误删产线数据、超额采购、越权改配方等高危动作；完整审计链则契合汽车/医疗器械/航空等对可追溯性（IATF 16949、FDA 等）的强要求。落地前提是它能接入 OT/工业系统而不止 SaaS——目前其集成清单偏 IT/办公 SaaS，制造现场的工业协议与国产系统适配仍需验证。
2. **国内对标厂商**：Authing（认信/身份云）—— 国内领先的 IDaaS/统一身份认证，正在向 AI Agent 身份与 MCP 授权方向延伸，是最直接的能力对标、派拉软件 —— 企业身份安全与统一权限管理（IAM/IGA/PAM）上市厂商，向 agent/非人身份治理演进的传统安全一方、芯盾时代 —— 以零信任与业务安全见长，可对标 Alter 的零信任访问控制定位、竹云（Bearingpoint/Ceztek）—— 大型企业统一身份与访问管理，覆盖金融/央国企合规场景、宁盾 / 玖章（新兴）—— 面向 MCP/Agent 网关与凭证托管的早期国产尝试（能力零散，尚无对标级完整产品）
   > 国内目前没有与 Alter「专注 AI agent 参数级零信任授权」一对一重合的成熟创业公司；能力最接近的是 Authing 等 IDaaS 厂商在原有身份云上叠加 agent/MCP 授权模块，以及派拉、竹云、芯盾等传统 IAM/零信任厂商向非人身份治理延伸。国内 agentic identity 仍处早期，机会点在于「MCP 网关 + 临时凭证 + 参数级策略 + 合规审计」的一体化产品；但国内客户更看重私有化部署、信创适配与对国产大模型/agent 框架（如扣子、Dify、各家 Agent 平台）的原生集成，这是海外产品直接进入的门槛，也是国产对标者的差异化空间。
3. **可迁移的干法 / 应进场景词典的词条**：AI-agent授权、零信任、参数级RBAC/ABAC、临时凭证/短时令牌、MCP网关、非人身份治理、实时动作拦截、合规审计(SOC2/HIPAA/GDPR)、最小权限、凭证托管/密钥消除
   > 可迁移的核心干法是「把 agent 当成需要被治理的新型身份，在工具调用这一层做拦截式细粒度授权」——不改 agent、不改工具，只在中间加一道网关，逐参数核对策略、发短时令牌、留完整审计。这套「网关式零信任 + 临时凭证 + 参数级策略」的打法可迁移到任何 agent 落地场景：制造的工单/排产 agent、金融的交易/对账 agent、企业内部的运维/数据库 agent。对国内落地的启示是：AI agent 规模化上生产前，「授权与审计」是绕不开的合规刚需，谁能先在 MCP 生态里卡住这一层网关，谁就掌握 agent 时代的访问入口。
4. **风险与存疑点**：①融资与客户信号缺失：目前无任何公开披露的独立融资轮次与具名客户，产品仍处 beta/早期访问，网络上流传的『$4.0M、Sam Altman、Play Ventures、2021 年 Seed』属另一家同名 Alter（消费/游戏化身公司），与本 YC S25 授权公司无关，须警惕数据混淆；②赛道拥挤且巨头下场：Okta（Auth0/Auth for GenAI）、云厂商、Aembit、Astrix、Oso 等同时切入 agentic identity，两人团队的护城河与商业化速度存疑；③标准与生态未定：MCP 授权、agent 身份标准仍在演进，中间层产品有被平台方（模型/云/agent 框架）内建能力吞并的风险；集成清单偏 IT SaaS，OT/工业与国产系统适配、以及企业对『再加一层网关』的性能与信任接受度均待验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Alter | Y Combinator 公司页 | https://www.ycombinator.com/companies/alter |
| Launch YC: Alter – Identity and Access Control Platform To Secure Agents | https://www.ycombinator.com/launches/OCi-alter-identity-and-access-control-platform-to-secure-agents |
| Alter Vault 官网 | https://alterauth.com/ |
| From Nairobi to YC: Kevan Dodhia on Building the Security Backbone for AI Agents | The Silicon Review | https://thesiliconreview.com/2025/10/kevan-dodhia-ai-security-alter |
| Alter: Zero Trust Authorization for Agents | Hacker News | https://news.ycombinator.com/item?id=45154579 |
| Alter Review 2026: Zero-Trust Identity for AI Agents | AppSecSanta | https://appsecsanta.com/alter-ai |
| What Is Agentic Identity? | Astrix Security（赛道参照） | https://astrix.security/glossary/what-is-an-agentic-identity/ |
| What Kind of Identity Should Your AI Agent Have? | Aembit（赛道参照） | https://aembit.io/blog/what-kind-of-identity-should-your-ai-agent-have/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
