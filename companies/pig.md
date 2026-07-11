# Pig

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：API for automating Windows applications（面向 Windows 应用自动化的 API）
- **官网/锚定**：https://www.ycombinator.com/launches/Mfp-pig-automate-windows-apps-with-ai
- **深研状态**：researched（已转型/放弃原方向。Pig（pig.dev）为 YC W25 项目，做「AI 自动化 Windows 桌面应用」的 API。创始人 Erik Dunteman 于 2025 年 5 月公开宣布放弃 Windows computer-use 方向，转做开源的 AI Agent 缓存系统 Muscle Mem；随后进一步演进为新公司 Butter（Embedded Sandboxes for Agents，YC）。pig.dev 官网与 GitHub SDK 仍在线（alpha），但主体业务已不再是 Windows 自动化。）

## 公司画像
- **团队**：创始人 Erik Dunteman（连续创业者，云基础设施背景约 5 年）。曾创办 Banana（Serverless GPU 平台，3000+ 团队使用）、在 Modal 从事 Serverless Python 云计算，并做过 3D 设计加速的云桌面产品。Pig 为其独立/小团队项目。
- **成立/批次**：2024 年（YC Winter 2025 / W25 批次）
- **地点**：美国（YC，旧金山湾区，具体未披露）
- **产品**：一套「用 AI 自动化 Windows 桌面应用」的 API。用户把自有 Windows 机器（需运行 Piglet 进程）接入 Pig 控制平面，通过聊天界面或 SDK 指挥 AI 智能体执行工作流；底层用 Anthropic Claude Computer-Use 模型 + Pig 的「拟人化」操作原语 click()/type()/screenshot()。定位补齐大量「无公开 API 的桌面软件」自动化缺口（Office、EHR 电子病历、理赔处理、工厂控制系统、实验室软件等）。提供聊天端（无需编程）、Agent API、Python SDK 三层。
- **商业模式**：早期自托管免费 + 面向开发者的 SDK/云 API，并提供定制自动化的咨询服务。创始人复盘：先做云 API 产品客户不买账，再改卖开发者工具仍不买账——客户真正想要的是「付钱直接拿到做好的自动化（成品/外包 RPA）」，商业模式与产品化路径未跑通，最终放弃。
- **竞争格局**：Windows/桌面 computer-use 与 RPA 赛道：UiPath、Automation Anywhere、Microsoft Power Automate（传统 RPA）；以及 Anthropic Computer Use、OpenAI Operator、通用 computer-use agent 与云桌面/沙箱类玩家（如 E2B、Butter 自身、Browserbase 之于浏览器）。Pig 差异点在「接入用户自有 Windows 机器 + 拟人化 API」，但通用大模型 computer-use 能力上升与商业化困难使其失去独立空间。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed（YC 标准投资） | 约 500,000 美元 | 2025 | [链接](https://www.crunchbase.com/organization/pig-9bcb) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：Pig 的原始命题恰好戳中制造业信息化的老痛点：大量车间级软件——MES、工厂控制系统、实验室 LIMS、老旧 ERP/供应链桌面客户端——是没有公开 API 的 Windows 胖客户端，历史上只能靠人工录入或脆弱的 RPA 脚本打通。用「AI + 拟人化操作」去自动化这些无 API 的遗留系统，理论上能把「系统间搬数据/录单/对账」这类重复劳动交给智能体。但 Pig 的失败也给了制造业清醒的一课：技术能力（让 AI 点得动 Windows）远不是瓶颈，真正的门槛是交付模式——工厂客户不想买平台/工具，只想为「做好的、稳定跑通的那条自动化」付费。这意味着面向制造的桌面自动化更适合「场景外包 / 交付即服务」而非「卖 API」，谁能把 computer-use 封装成按流程结果收费的可靠交付，谁才吃得到这块蛋糕。
2. **国内对标厂商**：影刀 RPA / UiBot（来也）—— 国内 RPA 龙头，正把大模型 computer-use 能力叠加到传统桌面自动化上，对标 Pig 的「无 API 桌面软件自动化」定位，且已跑通制造/金融的交付与商业化、实在智能 TARS —— 主打「大模型 + RPA」的智能体，强调看屏操作，与 Pig 的拟人化 computer-use 思路相近、阿里/字节等大厂的 computer-use / GUI Agent 研究（如 UI-TARS 系列）—— 对应 Pig 底层依赖的通用 computer-use 模型层
   > 国内对标更成熟也更务实：影刀、来也（UiBot）、实在智能等已在制造/金融/政务把「桌面自动化 + 大模型」做成可交付、可收费的产品，商业模式（软件+实施+咨询）本就贴合中国 B 端「要成品」的偏好——这正是 Pig 没跨过去的坎。反向情报意义在于：Pig 的技术路线（接入自有 Windows 机 + 拟人化 API + Claude computer-use）可作为国产 RPA 升级 computer-use 的参照，但其「卖 API/开发者工具」的失败，反而印证了国内厂商「重交付、重实施」路线的正确性。
3. **可迁移的干法 / 应进场景词典的词条**：无API遗留系统自动化、Windows桌面computer-use、拟人化操作API、自托管机器接入控制平面、human-in-the-loop关键步骤兜底、Agent行为缓存(Muscle-Mem)
   > 可迁移的干法有三条。① 「无 API 就用眼睛和手」：对制造业遗留胖客户端，与其等厂商开放 API，不如用 computer-use 智能体拟人操作打通，作为集成的兜底手段。② 「关键步骤 human-in-the-loop」：Pig 保留人工确认关键操作，制造场景（改工单、发采购、调产线参数）同样应让 AI 跑流程、人在闸口按确认，先控风险再谈全自动。③ 最有价值的是 Pig 转型后的 Muscle Mem 思路——把智能体第一次摸索出的正确操作序列缓存下来，重复任务直接回放、把昂贵易错的 LLM 推理从热路径移除。制造业的自动化多是「同一张单、同一套动作」的高重复场景，这种「学一次、回放千次」的缓存范式，比每次都让大模型现场看屏思考更省钱、更稳定、更可审计。
4. **风险与存疑点**：①方向已放弃：主体业务 2025 年 5 月起停止投入 Windows 自动化，pig.dev/SDK 仍在线但处 alpha、无正式发布、无维护承诺，不宜作为可依赖的供应商。②护城河薄：核心能力建立在第三方 Claude computer-use 模型之上，通用大模型 GUI 操作能力快速上升，独立 API 层价值被稀释。③商业化证伪：创始人已明确复盘「卖 API/开发者工具」在该场景走不通，客户只为成品付费——凡想复制其纯平台/API 模式者需警惕同样的市场结构。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Launch YC: Pig 🐷 - Automate Windows apps with AI | https://www.ycombinator.com/launches/Mfp-pig-automate-windows-apps-with-ai |
| Pig 官网 pig.dev | https://www.pig.dev/ |
| Pig API: Give your AI agents a virtual desktop to automate Windows apps (VentureBeat) | https://venturebeat.com/ai/pig-api-give-your-ai-agents-a-virtual-desktop-to-automate-windows-apps |
| Why a Y Combinator startup tackling AI agents for Windows gave up and pivoted (TechCrunch) | https://techcrunch.com/2025/07/18/why-a-y-combinator-startup-tackling-ai-agents-for-windows-gave-up-and-pivoted/ |
| pig-dot-dev/pig-python 官方 Python SDK (GitHub) | https://github.com/pig-dot-dev/pig-python |
| Muscle Mem - Removing LLM calls from Agents (Erik Dunteman blog) | http://erikdunteman.com/blog/muscle-mem/ |
| Erik Dunteman: I've pivoted from building Windows computer use agents at Pig (X/Twitter) | https://x.com/erikdunteman/status/1923140514549043413 |
| Pig - Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/pig-9bcb |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
