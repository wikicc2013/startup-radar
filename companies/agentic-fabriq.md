# Agentic Fabriq

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Okta for AI agents (identity & access)（AI 智能体版的 Okta(身份与权限)）
- **官网/锚定**：https://www.ycombinator.com/companies/agentic-fabriq
- **深研状态**：researched

## 公司画像
- **团队**：两人创始团队，均为 MIT 辍学生。Paulina Xu（AI+物理方向，曾在 MIT Kavli Institute、MIT Haystack Observatory、意大利 INAF Padua 做 CS/ML 研究）与 Matthew Xu（AI+数学方向，曾在 MIT FutureTech Lab 做 CS/经济研究、MIT CSAIL 做计算生物研究，19 岁在大二前辍学）。两人在 MIT admit weekend 相识。团队规模约 2 人。
- **成立/批次**：2025
- **地点**：San Francisco, CA, USA
- **产品**：面向 AI 智能体的身份、权限与治理控制平面（control plane），定位『AI 智能体版 Okta』。所有 agent 的调用都经过 Fabriq 路由：为每个 agent 分配独立身份、做 token 交换与认证、按最小权限（least-privilege）做细粒度 per-user 授权，确保 agent 不能做超出使用它的员工本人权限范围的事；每一次动作集中记账，提供不可篡改的审计日志与一键撤权。支持 MCP、OAuth 及主流 agent 框架（LangChain、CrewAI、AutoGen、OpenAI Agents），可对接 Gmail、Slack、GitHub、Google Drive 等工具，并与 Okta、Azure AD、Google Workspace 等 IdP 集成。官网称已有 500+ 个 agent 通过 Fabriq 管控。
- **商业模式**：B2B SaaS / 企业级安全基础设施。面向在生产环境部署 AI 智能体、需要合规、安全监控与多用户委托授权的组织，官网走『Request a demo』模式，具体定价未披露。
- **竞争格局**：直接对标 Okta 的『AI agent 版』，与 Okta 官方新推的 Okta for AI Agents（2026-04-30 上线）正面竞争；同赛道还有 YC W26 一批做 agent 身份/治理/安全的公司，以及既有 IAM/IdP 巨头（Okta、Microsoft Entra/Azure AD、Google Workspace）向 agentic 场景延伸。核心卖点是传统 OAuth/IAM/IdP 为人和应用而设计，未针对『agent 调用工具、agent 调用 agent、跨环境自主运行』场景。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed (YC standard deal) | 约 $500K | 2025-09-29 | [链接](https://tracxn.com/d/companies/agenticfabriq/__Qv3de16nJ4aoJ0PIWgWl4sVaOZyalyiyTKr-cCosrv8/funding-and-investors) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业上马 AI 智能体（如自动下单、调 MES/ERP、改工艺参数、访问质量数据）时，最大风险是 agent 权限失控——一个采购 agent 若能做超出对应岗位员工的操作，可能引发误采、越权改单、数据外泄。Agentic Fabriq 这类『per-agent 身份 + 最小权限 + 全程审计 + 一键撤权』的控制平面，正是制造业把 agent 从 PoC 推向生产必须补齐的安全底座，尤其在涉及供应链、财务、生产控制的高风险动作上，对应 HITP 人工兜底与可追溯审计的治理要求。
2. **国内对标厂商**：身份认证/IAM 领域：玉符科技（IDaaS）、竹云、派拉软件（企业统一身份与权限治理）、宁盾、芯盾时代、云厂商 IAM 能力：阿里云 RAM/IDaaS、腾讯云 CAM、华为云 IAM、面向 agent/大模型的权限与安全治理国内尚属早期空白，多由上述 IAM 厂商与 MCP/agent 平台方摸索延伸
   > 国内对标以传统 IAM/IDaaS 厂商（玉符、竹云、派拉、芯盾时代）为主，但它们主要解决『人+应用』的身份权限，尚未系统性覆盖『agent 自主调用工具/调用其他 agent』的新场景；这正是 Agentic Fabriq 的差异化切口，国内存在时间窗与空白。
3. **可迁移的干法 / 应进场景词典的词条**：AI 智能体身份认证、最小权限访问控制、agent 权限治理、审计日志与合规、一键撤权、token 交换/凭证托管、MCP/OAuth 网关、企业 IdP 集成
   > 可迁移打法：①把 agent 当作一等公民的『数字员工身份』纳入统一身份体系，绑定发起它的真人身份做权限继承（agent 权限 ≤ 用户权限）；②在 agent 与工具之间插一层网关/控制平面做 token 交换与细粒度授权，agent 不落地存密钥；③所有动作集中记账、不可篡改，支撑合规与事后追责；④高风险动作走审批工作流，异常可一键撤权。制造业可将此模式套用到 MES/ERP/PLM 的 agent 接入治理。
4. **风险与存疑点**：①极早期：两人 MIT 辍学团队、2025 年成立、仅 YC 标准 $500K 种子轮，产品与客户均处早期，无公开具名客户（官网仅称 500+ agents 被管控，非付费客户名单，置信度低）。②巨头正面碾压风险：Okta 官方已推出 Okta for AI Agents（2026-04-30），Microsoft Entra、Google 均在做 agent 身份，初创的护城河与卡位窗口存疑。③标准未定：MCP/agent 授权协议仍在演进，若行业标准由大厂或开源方主导，中间层价值可能被压缩。④批次标注存在轻微不一致：多数来源标 YC W26，个别早期 LinkedIn 帖标 F25，以 YC 官网公司页 Winter 2026 为准。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
