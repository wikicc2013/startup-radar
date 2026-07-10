# Modern

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：AI-native ServiceNow run by always-on AI agents（由常驻 AI 智能体运行的 AI 原生版 ServiceNow）
- **官网/锚定**：https://www.ycombinator.com/companies/modern
- **深研状态**：researched

## 公司画像
- **团队**：2 人。联合创始人兼 CEO Seb Poole（连续创业者，曾联合创办欧洲领先数字心理健康平台 Frankie/Unmind，客户含 Disney、Uber、Lendlease、MLB，累计融资 1 亿美元+）；联合创始人 Aleks Tomovski（15 年+ 平台工程经验，Wix Code/Wix Studio 核心团队成员，曾主导 Canva 内部开发者平台）。
- **成立/批次**：2026
- **地点**：美国旧金山湾区（San Francisco Bay Area）
- **产品**：AI 原生的 IT 服务管理（ITSM）平台，定位为 ServiceNow 的 AI 原生继任者。核心命题：传统企业软件擅长「记录工作」却不擅长「做工作」。Modern 用『推理与执行分离』架构——常驻 AI 智能体对每张工单进行推理，实际动作则由独立的、可审计的代码化工作流执行（来自客户 SOP、自然语言编写、或经批准安装的 skills）。将 help desk、访问权限、硬件、入职/离职、安全、采购等 IT 职能整合进单一平台，并直接嵌入员工已在使用的渠道（Slack、Teams、邮件、语音、WhatsApp、Telegram）发起请求。官网宣称对 IT 团队请求实现 80%+ 自动化；工单 30 天内关闭 50%、60 天内 70%。功能含即时（just-in-time）授权、按岗位自动开通/离职回收、全程策略校验与审计日志、从人工介入中持续学习并推荐新自动化。
- **商业模式**：SaaS 订阅平台，三种落地形态：①无 IT 团队的公司——全托管外包 IT 职能（Modern Managed，配专职团队）；②尚无 ITSM 平台的组织——独立 ITSM 系统；③已有 ServiceNow/Jira Service Management/Ivanti 的企业——叠加在现有平台之上，自动化 80%+ 例行请求。集成生态含 ServiceNow、Zendesk、Datadog、Microsoft Graph/Google Workspace、Workday、BambooHR、SAP、Salesforce、Atlassian、Slack、Cisco Meraki。未公开定价。
- **竞争格局**：正面对标 ServiceNow（YC 页 tagline 直书『the ServiceNow killer』），并可覆盖 Jira Service Management、Ivanti、Zendesk 等传统 ITSM/ESM。同期 AI-native ITSM/agentic 服务台赛道竞品众多，且 ServiceNow 自身正推进 Now Assist / 2026 agentic AI，为在位者反击。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业的 IT/OT 运维长期是「工单堆积、审批链长、跨系统权限开通慢」的重灾区，尤其多工厂、多产线、外包与派遣工频繁进出场景下，账号开通/回收与设备申领的时效直接影响停线与合规风险。Modern『推理（AI）+ 执行（可审计代码化工作流）分离』的架构，恰好回应制造业对『自动化必须可追溯、可审计、不出错』的强诉求——AI 只负责判断，真正动作走确定性工作流，便于对接工厂既有 SOP 与安全策略。嵌入 Teams/邮件/语音发起请求，也贴合车间一线与外包人员低门槛提报的现实。
2. **国内对标厂商**：ServiceNow 本地化（本土 ITSM/ESM 交付与运维）、云智慧（智能运维 AIOps）、嘉为蓝鲸（蓝鲸体系 IT 运维与 ITSM）
   > 国内对标不是简单复制：ServiceNow 本地化交付商解决平台落地与合规，云智慧偏 AIOps 监控告警，嘉为蓝鲸则以蓝鲸体系覆盖运维自动化与 ITSM。Modern 的差异点在于『AI 原生的服务台自助 + 推理执行分离』这一层，国内目前更多是「传统 ITSM + 大模型问答插件」，尚未见把『常驻智能体端到端处理工单』做成主架构的成熟本土产品，存在方法论迁移空间。
3. **可迁移的干法 / 应进场景词典的词条**：AI 原生 ITSM、IT 服务台自动化、agentic 工单处理、推理与执行分离、员工自助（Slack/Teams 内发起）、访问权限即时授权/离职回收、入职离职自动化、策略校验与审计、AIOps/IT 运维
   > ①『推理与执行分离』作为企业级 AI 落地的可信框架——让 AI 做判断、让确定性工作流做动作，天然满足制造业审计与安全要求，可直接迁移到设备报修、质量异常处理、供应商准入等工单化场景；②『在员工已在的渠道里发起请求』（IM/邮件/语音）降低一线采用门槛；③『从人工介入中学习并沉淀为可批准的 skill』的自动化覆盖率复利增长模型，适合制造企业从少数高频场景起步逐步扩面。
4. **风险与存疑点**：①极早期：2026 年成立、团队仅 2 人、YC Spring 2026（P26，原 X26）批次，产品与规模均未经验证；②融资金额未公开披露（YC 标准投资外无具名数据），本档 funding 留空；③官网客户成果均为匿名化描述（如『某全球 IT 团队降低 62% 工单处理量』『某 C 轮健康科技公司每新人省 10 小时』），无具名 logo 可锚定，early_customers 留空；④『ServiceNow killer』为强营销话术，ServiceNow 正以 Now Assist/agentic AI 反击，在位者护城河深；⑤『Modern』为高频通用词，检索需强消歧，注意与同名实体混淆；⑥赛道拥挤，YC Spring 2026 被描述为『史上最 agent-heavy 批次』，同质竞争激烈。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
