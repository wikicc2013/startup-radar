# Metorial

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Agentic infrastructure for AI-native companies（面向 AI 原生公司的智能体基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/metorial
- **深研状态**：researched

## 公司画像
- **团队**：联合创始人 Karim (Wen) Rahme（Founder & CEO）与 Tobias Herber（Founder，自述 3 次创业者、IEEE 最佳论文作者，背景在 AI/分布式系统/系统软件）。两人相识逾 10 年，早年在奥地利一所顶尖技术高中结识并合作多个项目，后共同在阿布扎比票务创业公司 Valicit 主导技术研发。团队约 4 人，远程办公（YC 页标注 Remote，多处资料称总部/注册在旧金山）。YC Fall 2025（F25）批次，YC 合伙人 Andrew Miklas。
- **成立/批次**：2025
- **地点**：Remote / San Francisco, CA（YC 页标 Remote；多方资料标注旧金山）
- **产品**：面向 AI 原生公司的 MCP（Model Context Protocol）企业级基础设施层，自称『MCP 界的 Vercel / agentic AI 的集成层』。核心能力：(1) Magic MCP——用单一 URL 把任意 MCP 客户端（Claude Code、Cursor、Codex、Copilot、Claude Desktop 等）接入 600+（官网新版称 1000+）预建集成（Stripe、Slack、Notion、Salesforce、Zendesk、Jira、Linear、Google Workspace、Microsoft Teams 等），零配置；(2) 无服务器运行时/Hibernation——空闲 MCP server 休眠、亚秒级冷启动恢复且不丢连接与状态，按请求计费而非为空闲连接付费；(3) 治理层——SSO/SAML、基于角色的访问控制、Portals 审批目录、Vault 接入内部私有 API；(4) 安全 Protoguard——拦截 prompt injection、阻断越权请求；(5) Tracing——会话/消息/工具调用可搜索留痕并绑定真实身份。项目为开源。
- **商业模式**：B2B 基础设施 SaaS，Freemium（免费起步 + 企业版预约 Demo）。按请求/用量计费（serverless 定位，pay-per-request）。招聘页显示创始工程师/后端/基础设施岗（$100K–$180K + 1–2% 期权）。官网未公开具体价目。
- **竞争格局**：MCP 托管/集成层赛道，公开可比对象包括 Composio、Smithery、Klavis AI、Speakeasy Gram、Zapier MCP、以及云厂商托管 MCP 方案；广义上与 Vercel/Cloudflare 等 serverless 平台向 MCP 延伸的能力形成竞争。官方资料未点名具体竞品。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Moonfire | 中 | [链接](https://metorial.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业推进 AI Agent 落地时，最痛的不是模型而是『把 Agent 安全接入 MES/ERP/PLM/WMS/CRM 及一堆内部系统』的集成与治理。Metorial 这类 MCP 集成+治理层的价值在于：用统一 URL/目录把碎片化工具接入标准化，叠加 SSO、RBAC、审批目录、调用留痕与 prompt injection 防护——正对应制造业 IT 对『可控、可审计、最小权限』的刚需。对制造场景，休眠/亚秒冷启动的 serverless 模型也贴合工厂侧调用稀疏、峰谷明显的特征。
2. **国内对标厂商**：阿里云百炼 / 魔搭 MCP 广场（MCP 托管与集成）、腾讯云 / 火山引擎的 Agent 与 MCP 接入服务、Dify、扣子(Coze) 等 Agent 编排与工具接入平台（广义对标集成层）、各类国产 MCP Server 市场 / 网关方向创业项目
   > 国内尚无完全等价的『企业级 MCP serverless 托管+治理』独立创业标的成型，多由云厂商（阿里云百炼/魔搭 MCP 广场、火山引擎、腾讯云）以平台能力形式提供，或由 Dify/扣子等编排平台附带工具接入。独立开源+企业治理的定位是国内当前的相对空白，可作为制造业私有化部署时的能力清单参照。
3. **可迁移的干法 / 应进场景词典的词条**：Agent 基础设施、MCP 托管/网关、工具集成层、Serverless 运行时、企业级治理与访问控制、Agent 安全（prompt injection 防护）、可观测性/Tracing、AI-native 企业内部工具接入
   > 可迁移打法：(1) 把『集成层』作为 Agent 平台化的第一块地基——先统一工具接入协议(MCP)，再谈上层 Agent；(2) 以『治理三件套』(RBAC/审批目录/全链路 Tracing) 换取企业 IT 与安全部门的采购通过率；(3) serverless 按请求计费降低 PoC 门槛，用免费额度做开发者自下而上渗透，再向企业版转化；(4) 用『600+/1000+ 预建集成』把冷启动做成规模壁垒。制造企业可借此清单自建或选型内部 Agent 网关。
4. **风险与存疑点**：1) 极早期（2025 成立、约 4 人、F25），未见权威融资披露：仅数据聚合站 extruct.ai 估算约 $1M，无一手来源，未采信；YC 标准投资亦未见独立确认，故 funding 留空。2) 赛道拥挤且被云厂商与 Zapier/Composio 等正面挤压，MCP 协议本身仍在快速演进，标准与安全模型未定型，存在被平台方吸收的风险。3) 客户 Moonfire 仅见于官网自述（含一名 SRE 具名背书），置信度中，未见第三方佐证。4) 集成数(600+ vs 1000+)、总部口径(Remote vs 旧金山)在不同资料间不一致；另有搜索结果误标 Winter 2025，实为 Fall 2025(F25)，已按 YC 官方页更正。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
