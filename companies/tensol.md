# Tensol

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：AI employees for your business（为你的业务配 AI 员工）
- **官网/锚定**：https://www.ycombinator.com/companies/tensol
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人。Oliviero Pinotti——连续创业者、商业背景，此前在 Stacksync(YC W24)做 Workflows；Pratik Satija——机械工程出身，卡内基梅隆 AI 工程师，曾任职 Rivian、Magna International。
- **成立/批次**：2025（YC W26）
- **地点**：美国旧金山
- **产品**：为企业部署『AI 员工』，基于开源智能体平台 OpenClaw(官网称 GitHub 星标 46,000+)。每个 AI 员工 7×24 运行在独立隔离 VM 沙箱中，接入公司工具(Slack、HubSpot、GitHub、Linear、Sentry、Gmail、Notion、Jira 等，40+ OAuth 集成)，拥有组织全局上下文，可主动监控日志/告警、更新 CRM、起草工单与 PR。提供 10+ 现成模板(客服/工程/SDR 员工)，带审计日志、SSO、凭证管理、护栏、按客户加密、99.9% SLA。
- **商业模式**：SaaS 订阅：在开源 OpenClaw 之上做托管层，卖'按客户独享 VM + OAuth 集成 + 企业级安全合规'的托管与运维。定价未公开。
- **竞争格局**：上游/自托管的 OpenClaw 本身(DIY 替代)；Lindy(个人向)；各类 AI Agent 平台。核心风险是 OpenClaw 上游若自带企业护栏与安全扫描，会侵蚀 Tensol'托管包装层'的差异化。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：Tensol 的'AI 员工'范式对制造业中后台数字化有直接映射：把重复的'监控-判断-处置'岗位(生产异常值守、供应链订单跟催、售后工单响应、设备告警初筛)封装成 7×24 的数字员工，接入 MES/ERP/CRM/工单系统而非只做被动看板。其'按客户独享 VM + 审计日志 + 护栏 + 逐步放权(draft-and-approve 到自主)'的部署框架，恰好回应制造企业最在意的数据隔离与可审计诉求。
2. **国内对标厂商**：实在智能(数字员工/RPA+Agent)、来也科技 UiBot、钉钉 AI 助理/阿里云百炼 Agent 平台、字节扣子 Coze、澜码科技 Ask-XBOT
   > 国内不缺技术，缺的是 Tensol 这套'把 Agent 当员工来雇佣与治理'的组织脚手架——给数字员工独立账号、工具权限边界、审计留痕、放权曲线。实在智能/来也偏 RPA 血统，澜码/扣子偏平台搭建，真正把'隔离沙箱+权限护栏+渐进自治'做成标准交付形态的仍有空档。
3. **可迁移的干法 / 应进场景词典的词条**：AI员工、自主智能体、Agent托管平台、客服自动化、研发运维Agent(SRE/oncall)、SDR销售线索、隔离VM沙箱、OAuth企业集成、OpenClaw商业化
   > ①先用一个高边界、低风险的单一工作流(告警初筛、工单起草)切入，把 Agent 工具权限与越界边界卡死；②draft-and-approve 起步、按信任度逐级放权，人始终在环(HITP)；③每个数字员工配独立身份/账号 + 全量审计日志，让 IT 与合规能审能停；④按客户隔离部署(独享 VM/加密)过数据合规关。
4. **风险与存疑点**：①产品本质是开源 OpenClaw 的托管包装，护城河薄，上游一旦补齐企业能力即被削平；②官网主站在建、真实付费客户零披露(demo 客户 Acme/Globex/Wayne 均虚构)；③自主 Agent 在生产系统直接动手(改 CRM、提 PR)在制造业高可靠场景下的误操作风险与责任界定未解；④除 YC 外无公开融资，团队规模小。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Launch YC: Tensol: AI Employees for Your Company, Built on OpenClaw | https://www.ycombinator.com/launches/PQ9-tensol-ai-employees-for-your-company-built-on-openclaw |
| Tensol 官网(主站在建) | https://www.tensol.ai/ |
| Ry Walker Research: Tensol | https://rywalker.com/research/tensol |
| Best Tensol Alternatives in 2026 - Vellum | https://www.vellum.ai/blog/best-tensol-alternatives |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
