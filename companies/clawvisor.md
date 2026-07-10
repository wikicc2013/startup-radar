# Clawvisor

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：The authorization layer for AI agents（AI 智能体的授权层）
- **官网/锚定**：https://www.ycombinator.com/companies/clawvisor
- **深研状态**：researched

## 公司画像
- **团队**：单人创始团队（YC 页面显示 team size = 1）。创始人 Eric Levine：曾联合创办身份验证公司 Berbix（YC S18），2023 年被 Socure 收购（媒体披露约 7000 万美元）；此前在 Airbnb 领导 Trust & Safety 工程；并担任过 YC Visiting Group Partner。
- **成立/批次**：2026
- **地点**：美国加州旧金山湾区（San Francisco）
- **产品**：面向 AI 智能体的『授权层 / 控制平面』。作为一道网关横在 AI Agent 与其可访问的工具/应用之间，核心模型是『Approve the task, not the tools / 授权目的而非权限』：Agent 一次性声明用途，用户批准范围，网关在每一次请求上强制执行。凭据被服务端保险库（vault）托管，Agent 只拿到临时短时效句柄、永不接触真实密钥；提供实时策略强制、上下文护栏、风险评分、成本归因和完整审计日志。已覆盖 15+ 服务适配器：Gmail、Outlook、Slack、Twilio、iMessage、Google Calendar/Drive/Contacts、OneDrive、Notion、GitHub、Linear、Stripe，以及 MCP servers、shell、PostgreSQL、AWS 等。兼容 Claude Code、Claude Cowork、OpenClaw、Hermes、Perplexity Computer 等 Agent 运行时。
- **商业模式**：开源核心（Open core）+ 自托管或托管云双轨。云版免费试用、无需信用卡；自托管通过开源仓库免费。仓库 github.com/clawvisor/clawvisor 用 Go 编写（约 87%），已发 53 个 release（最新 v0.9.10），约 253 stars。商业化路径为托管云/企业版增值（合规、成本追踪、治理），但具体定价与付费档位未公开披露。
- **竞争格局**：AI Agent 授权/身份治理这一新兴赛道，直接或相邻对手包括：Anthropic MCP 原生权限模型、面向 Agent 的身份厂商（如 Okta/Auth0 的 Auth for GenAI、WorkOS、Descope Agentic Identity、Astrix、Aembit、Token Security 等非人身份/机器身份方向），以及各类 MCP 网关与 AI 网关（如 Portkey、Kong AI Gateway）。Clawvisor 差异点在『按任务用途授权 + 凭据零暴露 + 每请求强制』的产品化组合与开源自托管路线。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业要把 AI Agent 从『演示』推向『生产』，最大障碍不是模型能力，而是『敢不敢把系统权限交给它』。Clawvisor 这类授权层正对准制造场景的治理刚需：当 Agent 要动 ERP/MES/PLM、供应商邮件、财务与采购(Stripe/AWS/数据库)时，企业需要保证它只在被批准的任务范围内行动、凭据不落到 Agent 手里、每一步可审计可追责、出问题能限损。对制造 CIO/CISO 而言，这是把 Agent 纳入现有 IT 合规与内控体系的『安全配套件』——先有护栏和审计，业务部门才敢放开用。参考做法：为每类高风险动作（改工单、发对外邮件、调支付/库存）设『硬限制 + 任务范围 + 每请求人工审批队列』三层，把人留在最危险的决策点上。
2. **国内对标厂商**：国内暂无严格同形态对标；相邻方向为面向大模型/Agent 的 API 网关与安全治理厂商，如阿里云 API 网关 + 通义 Agent 治理、火山引擎/字节的 Agent 安全能力，以及安全创业公司在『大模型应用安全 / AI 防火墙 / 数据脱敏网关』方向的探索（如深信服、奇安信、蚂蚁等在 AI 安全的布局）。、身份与权限侧对标：国内 IAM/特权访问管理（PAM）厂商（如派拉软件、竹云、芯盾时代）若延伸到『机器/Agent 身份』，是潜在同位竞品。
   > 国内制造企业落地时更可能走『国产 IAM/PAM 厂商 + 云厂商 API 网关 + 大模型安全能力』拼装的路线，而非直接采用海外开源网关；但 Clawvisor『按用途授权、凭据零暴露、每请求强制』的产品理念，可作为国内厂商设计 Agent 权限模块的参照范式。数据出境与等保合规要求下，自托管开源形态反而更契合制造企业私有化部署偏好。
3. **可迁移的干法 / 应进场景词典的词条**：AI Agent 授权层、非人/机器身份治理、凭据保险库与零暴露、按任务用途的最小权限、每请求策略强制、Agent 审计与可追溯、MCP 网关、AI Agent 成本归因、RBAC/ABAC 策略、开源自托管安全网关
   > 可迁移打法：①『授权目的而非权限』——把 Agent 权限从长期静态密钥改为一次性声明用途、按任务临时授权、任务结束即失效；②凭据服务端保险库 + 短时效句柄，让 Agent 永不接触真实密钥，天然阻断泄露与横向移动；③『硬限制 / 任务范围 / 每请求审批』三级护栏，把 HITP 人工兜底精准放在高风险动作上，其余放行不打断效率；④完整审计 + 成本归因，让每一次工具调用可回溯到任务与审批人，满足内控与追责。这套模型对任何要把 Agent 接入敏感业务系统的制造企业都可直接复用。
4. **风险与存疑点**：①团队仅 1 人、成立于 2026 年、产品仍在 v0.9.x（未到 1.0），生产成熟度与长期支持存疑；②融资未公开披露，商业化定价未定，可持续性待观察；③赛道拥挤且巨头（Okta/Auth0、云厂商、Anthropic MCP 原生权限）都在切入，开源初创面临被平台能力覆盖的风险；④网关本身成为『所有 Agent 流量与凭据的单点』，其自身安全性与可用性即最高价值攻击目标；⑤本档 funding 与 early_customers 均查无公开实据，留空处理，勿据此高估其商业落地进度。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
