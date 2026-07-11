# AutoComputer

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Autonomous AI for computer tasks（面向电脑任务的自主 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/autocomputer
- **深研状态**：researched

## 公司画像
- **团队**：2 人。联合创始人 Madhav Singhal（前 Replit，AI 团队早期工程师，主导 Replit 代码模型的研究与训练、参与 Replit Agent 与核心 AI 服务）与 Rick Sugden（物理背景，PhD 退学，曾做脑电波 transformer 用于诊断，自研并申请了居家脑瘤监测系统专利）。两人约 7 年前在大学做物理研究时结识，长期一起做研究与 side project。
- **成立/批次**：2024
- **地点**：美国旧金山（San Francisco）
- **产品**：桌面端 AI 驱动的 RPA（robotic process automation）。用户在 Windows/macOS 上打开 AutoComputer 应用、输入一句自然语言 prompt，系统结合当前上下文与用户近期操作，预测下一串动作——键盘输入、文本录入、鼠标点击，用户可用单个按键逐步接受或拒绝/纠正每一步（human-in-the-loop）。宣称零配置（zero setup）、对界面无需 API 直接操作、能适应流程变体，官方称让工作流快 2–5 倍。切入点是财务数据录入、记账/单据留存、交易对账等重复但业务关键的后台流程。面向企业提供本地部署/单租户等选项。
- **商业模式**：B2B 企业级软件（SaaS）为主，兼有个人 waitlist 试用。官方 CTA 直接征集企业/后台团队合作，联系 founders@autocomputer.ai；面向大客户列出 on-prem / 单租户部署。具体定价未公开披露。
- **竞争格局**：对上是传统 RPA 大厂（UiPath、Automation Anywhere、Blue Prism）及其 AI Copilot 化；对下与新一代 computer-use / 桌面 agent 创业公司竞争（如 YC 同类 Cyberdesk 等），以及 Anthropic computer use、OpenAI Operator 等模型厂商的通用电脑操作能力。差异化主打桌面本地、零配置、逐步人审接受、直接操作界面而非依赖各系统 API 集成。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（含 YC 标准投资） | $500K | 2024 | [链接](https://tracxn.com/d/companies/autocomputer/__CwrLPLCkVFRDCzXhky-2nI2fVrkDUPY96GFUYyHykcw/funding-and-investors) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：AutoComputer 的赌注是「界面级自动化」而非「API 级集成」——直接模拟人的鼠标键盘去操作既有软件界面，因此不挑系统、不需要目标系统开放接口。这对制造业尤其对味：制造企业里大量是老旧、封闭、无 API 的 MES/ERP/WMS/质检与 EDI 系统，传统 RPA 落地贵在「配置脚本+界面一变就崩」。若 AI computer-use 能靠大模型理解界面语义、自适应流程变体，则财务对账、单据录入、来料/出入库登记、供应商门户填报、报关/报检数据搬运这类「人肉搬字」环节有望以更低配置成本被接管。真正门槛不在技术演示，而在制造场景要求的高准确率、可审计与出错代价——这正是它「逐步人审接受」设计的价值所在：先做副驾（human-in-the-loop），而非全托付。
2. **国内对标厂商**：实在智能（实在Agent / Z-RPA，屏幕语义理解 SGA，无需 API 直接看懂并操作界面，与 computer-use 路线最贴近）、影刀 RPA（Yingdao，桌面 RPA 龙头，正叠加大模型做自然语言驱动自动化）、来也科技 Laiye、云扩 Encoo（RPA+IPA 老玩家，向 Agent 化演进）、智谱 AutoGLM（大模型驱动的手机/电脑操作 agent，通用 computer-use 能力代表）
   > 国内对标里，路线最像 AutoComputer 的是实在智能——它的「屏幕语义理解（SGA）+ 无需 API 直接操作界面」几乎是同一张技术地图，且已在政务/金融/制造做企业级落地，可作反向情报参照系；影刀、来也、云扩代表存量 RPA 大盘正被大模型重写，是 AutoComputer 想颠覆的对象在中国的镜像；智谱 AutoGLM 则代表「模型厂自带电脑操作能力」这一从上往下的降维威胁。看点在于：中国 RPA 赛道已相对拥挤且卷价格，AutoComputer 的差异更多是「桌面本地 + 零配置 + 逐步人审」的产品形态与美国后台合规场景，而非独家技术。
3. **可迁移的干法 / 应进场景词典的词条**：computer-use、桌面RPA、财务数据录入自动化、交易对账、human-in-the-loop 逐步接受、零配置界面自动化
   > 可迁移干法：把「模型看懂界面→预测下一串鼠标键盘动作→人逐步单键接受」这套范式，用在任何『有既有软件界面但无开放 API、且动作重复』的岗位上。制造业里可复用于：财务对账/发票录入、供应商门户与报关报检填报、质检结果回填 MES、来料出入库登记、跨系统数据搬运。关键干法是「先副驾后自动」——用 human-in-the-loop 的逐步接受积累高准确率与审计轨迹，再逐步放开到半托付，避免一上来全托付在高代价场景翻车。
4. **风险与存疑点**：①同质化与降维：computer-use 是模型厂（Anthropic/OpenAI）与 RPA 大厂都在猛攻的红海，2 人团队的独家壁垒不明显，易被上游模型能力或下游大厂 Copilot 吞并。②可靠性天花板：界面级自动化对分辨率/界面改版/弹窗异常敏感，财务对账等场景对准确率与可审计要求极高，Demo 到生产的鸿沟大。③早期与验证不足：仅 YC 标准种子约 $500K、无公开具名客户或规模化落地证据，商业化与留存尚未证明；融资数据来自第三方聚合站（Tracxn），非官方披露，置信度中低。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| AutoComputer: Desktop RPA with AI computer use | Y Combinator | https://www.ycombinator.com/companies/autocomputer |
| Launch YC: AutoComputer - Zero setup AI automation for your computer | https://www.ycombinator.com/launches/MFQ-autocomputer-zero-setup-ai-automation-for-your-computer |
| AutoComputer 官网 | https://www.autocomputer.ai/ |
| AutoComputer - Tracxn Funding & Investors | https://tracxn.com/d/companies/autocomputer/__CwrLPLCkVFRDCzXhky-2nI2fVrkDUPY96GFUYyHykcw/funding-and-investors |
| AutoComputer (YC F24) - LinkedIn | https://www.linkedin.com/company/autocomputer |
| AutoComputer (YC F24) Founders: Madhav S. & Rick Sugden | FounderTrace | https://foundertrace.com/companies/autocomputer_yc_f24/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
