# Jinba

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Automate any enterprise workflow through chat（用对话自动化任意企业工作流）
- **官网/锚定**：https://www.ycombinator.com/companies/jinba
- **深研状态**：researched

## 公司画像
- **团队**：2 人。CEO Shoya Matsumori(计算机科学博士，机器学习背景)；COO Takuya Norisugi(前麦肯锡 manager，ML 工程背景)。前身实体为 Carnot Inc。
- **成立/批次**：2026（YC Winter 2026 / W26）
- **地点**：美国旧金山
- **产品**：面向企业的 AI 工作流自动化平台，主打'用对话自动化任意企业工作流'。双产品：Jinba Flow(solution engineer/IT 自动化/RevOps 用自然语言+可视化编辑器+代码构建、测试、部署可复用工作流，即 Chat-to-Flow)+ Jinba App(业务用户通过对话或自动生成表单在受治理环境下执行已审批工作流)。可部署为 API 或 MCP server。强调企业级权限、审计日志、on-prem/私有云、SOC 2、SSO、RBAC、100+ 连接器，支持 AWS Bedrock/Azure OpenAI/自托管模型。
- **商业模式**：B2B SaaS，分层订阅(按团队规模、workspace 容量、执行 credit)，企业版含定制与专属支持；定位为 n8n/Zapier 在强监管行业的替代。
- **竞争格局**：n8n、Zapier、Make、Microsoft Power Automate、UiPath 等 RPA/iPaaS；及新一批 chat-to-workflow Agent 平台。差异化在面向金融/保险等强监管行业的合规与 on-prem 能力。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed(YC 标准投资，金额为第三方聚合估算，未见一手新闻稿，置信度低) | 约 $500K | 2026-01 | [链接](https://tracxn.com/d/companies/jinba/__D8RuWHODJaGiA0NiL-nfgkFJryL_V1R1XxH4L-2pypo) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| MUFG(三菱UFJ金融集团) | 中 | [链接](https://jinba.io/uses/ai-in-banking-and-finance) |
| Suntory(三得利，生物医药数据分析用例) | 中 | [链接](https://jinba.io/) |
| Bloomo(官网 testimonial) | 中 | [链接](https://jinba.io/) |
| Mitsubishi(官网/媒体提及) | 低 | [链接](https://jinba.io/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Jinba 的'自然语言描述→生成可执行工作流→治理化下发给业务用户执行'范式，可直接映射到制造业跨系统流程自动化：供应商准入尽调(对标 KYC)、来料检验单据处理、质量异常闭环(8D)、采购合同审查、ECN/工程变更审批流。其 on-prem + 私有模型托管能力，恰命中制造企业数据不出厂、图纸/工艺涉密的强约束场景。
2. **国内对标厂商**：影刀 RPA/来也科技 UiBot、实在智能(Agentic RPA)、阿里云百炼/钉钉 AI 助理、字节扣子 Coze/腾讯元器、澜码科技 AskXBOT
   > 国内制造场景更常见的是影刀/实在智能的 RPA 打底 + 钉钉/扣子做对话编排的组合，缺少 Jinba 这种'合规审计+on-prem+MCP 化'一体的企业级治理层；Jinba 值得对标的是治理与可审计性，而非单纯自动化能力。
3. **可迁移的干法 / 应进场景词典的词条**：对话式工作流生成(Chat-to-Flow)、企业流程自动化、强监管行业AI(银行/保险)、KYC/合规文档处理、合同审查与贷款核保、on-prem私有化部署、MCP/API化工作流、no-code替代
   > ①把'谁能建流程'与'谁能跑流程'拆成两个产品(构建态 Flow/执行态 App)，用审批墙隔开——制造企业 IT 与产线的权限边界正需这种分层；②以强监管行业(金融)作楔子沉淀合规能力，再横切到制造；③工作流产出物同时暴露为 API 和 MCP server，便于接入已有 MES/ERP/PLM。
4. **风险与存疑点**：①仅 2 人 + 约 $500K 种子，极早期，'40,000 企业用户'与 MUFG/Suntory 等客户多来自官网自述与 testimonial，未见独立第三方核实；②强监管行业销售周期长、转化慢；③赛道极度拥挤(n8n/Zapier/UiPath + 一众 chat-to-workflow 新秀)；④资金/客户数字置信度偏低。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Jinba \| Y Combinator | https://www.ycombinator.com/companies/jinba |
| Jinba 官网 | https://jinba.io/ |
| Jinba - AI in Banking and Finance(含 MUFG) | https://jinba.io/uses/ai-in-banking-and-finance |
| Jinba - Tracxn(约 $500K 种子，估算) | https://tracxn.com/d/companies/jinba/__D8RuWHODJaGiA0NiL-nfgkFJryL_V1R1XxH4L-2pypo |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
