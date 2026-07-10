# Sigmantic

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：AI agent for chip design（芯片设计的 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/sigmanticai
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人，均为 UC Berkeley EECS 背景。Rohil Khare（联合创始人兼 CEO），曾任职 Amazon，高中即在 IoT 领域申请临时专利，本科在 BAIR 与 Architecture Group 做研究并在 ICRA 发表论文；Tamzid Razzaque（联合创始人兼 CTO），曾在 Apple 做定制电路，在 UC Berkeley BWRC/BETR 研究定制 FPGA 加速器。团队约 2 人（2025 年数据）。
- **成立/批次**：2025
- **地点**：美国加州（旧金山湾区，YC 资料记为 San Francisco / 部分数据源记为 Dublin, CA）
- **产品**：面向芯片设计的 AI 智能体，被官方与 YC 定位为『Claude Code / Cursor for Chip Design』。核心是一套『半导体工程 AI 操作系统』：用自然语言即可生成可综合 Verilog RTL、UVM 测试平台、SVA 断言、覆盖率模型、RAL 寄存器抽象与 Makefile。底层为微调的 Verilog LLM + 强化学习 + 真实编译器/仿真反馈闭环，迭代『编译-仿真-修复』直到通过综合并把覆盖率推到 90%+。采用层级式多智能体架构（14+ 专家智能体），以持久化的『Brain Cache』知识图谱维护设计上下文。集成主流仿真器 Questa、VCS、Xcelium、Verilator，并对接 Cadence、Synopsys、Siemens、AMD/Xilinx 及开源工具链；支持云端与气隙（air-gapped）本地部署。产品有 VSCode fork 与终端交互两种形态，可通过 pip install sigmanticai 试用。
- **商业模式**：面向半导体/芯片设计团队的 B2B。Freemium 模式：PyPI 免费层（pip install sigmanticai），另有企业版与本地/私有化（on-prem、气隙）部署选项；主打『零数据留存、IP 归客户所有』。宣称 VIP/IP 开发比人工快约 50x。
- **竞争格局**：同赛道 AI-for-chip-design/EDA 新锐扎堆：ChipAgents（2026 融 2100 万美元）、Cognichip（2026 融 6000 万美元）、Silimate（AI 芯片调试器）等；上游还面对 Cadence、Synopsys、Siemens EDA 三大传统 EDA 巨头自身的 AI 化（如 Cadence Cerebrus、Synopsys.ai）。Sigmantic 差异点是『Claude Code 式』交互 + 多智能体验证自动化 + 气隙私有化部署。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 未明确（YC S25 参投，标准 Deal 通常为 50 万美元；第三方数据源 Extruct AI 记为约 100 万美元，置信度低、未见一手披露） | 未披露（一手来源未披露具体金额） | 2025 | [链接](https://www.extruct.ai/hub/sigmanticai-com/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 1 家付费客户（YC 页面提及但未具名） | 中 | [链接](https://www.ycombinator.com/companies/sigmanticai) |
| Northrop Grumman（诺斯罗普·格鲁曼，工程师层面接触/对话，非确认签约客户） | 低 | [链接](https://www.ycombinator.com/companies/sigmanticai) |
| SciEngines（工程师层面接触/对话） | 低 | [链接](https://www.ycombinator.com/companies/sigmanticai) |
| Quadric（工程师层面接触/对话） | 低 | [链接](https://www.ycombinator.com/companies/sigmanticai) |

## 转型有术判断
1. **对制造业客户意味着什么**：芯片设计是制造业『最上游、最高壁垒』的研发环节，RTL 设计与验证长期是人力密集、周期漫长的瓶颈（验证常占芯片项目 60%-70% 工时）。Sigmantic 把『自然语言→可综合 RTL + 自动验证到 90% 覆盖率』做成智能体闭环，本质是把资深验证工程师的隐性经验固化进多智能体流水线——这对国内 IC 设计公司、封测与半导体设备厂的研发提效有直接借鉴：不是替代工程师，而是把编译-仿真-修复的枯燥迭代交给 agent，人聚焦架构与关键决策。
2. **国内对标厂商**：华大九天（国产 EDA 龙头，模拟/数字全流程工具，AI 化方向对标）、芯华章（Chiplink/UnivEDA，专注数字验证与 EDA 2.0，与 Sigmantic 的验证自动化最贴近）、概伦电子（器件建模与电路仿真 EDA）、行芯 / 芯行纪等国产验证工具新锐（RTL 生成与验证 AI 赛道）
   > 国产 EDA 正处『卡脖子+国产替代+AI 化』三重窗口。芯华章在数字验证、华大九天在全流程工具已有布局，但『Claude Code 式对话 + 多智能体自动验证』这种产品形态国内尚未成熟。Sigmantic 的气隙私有化部署路径，恰好契合国内军工/自主可控芯片对『数据不出内网、IP 不外泄』的刚需，是国产厂商可直接抄的产品化思路。
3. **可迁移的干法 / 应进场景词典的词条**：芯片设计/EDA、RTL 自动生成、硬件验证自动化、Verilog/HDL、UVM 测试平台、多智能体系统、代码智能体（Coding Agent）、半导体工程、气隙/私有化部署、强化学习+编译器反馈闭环
   > 1) 用微调垂类 LLM（Verilog/HDL）+ 真实工具链反馈（编译器/仿真器）构成 RL 闭环，而非纯 prompt——这是把 agent 从『看起来能用』推到『真能过综合』的关键；2) 层级多智能体分工（RTL/UVM/断言/覆盖率各自专精）+ 持久知识图谱（Brain Cache）维护长上下文，可迁移到任何『规则复杂、需反复验证』的工业软件场景（PLC 代码、CAM 工艺、CAE 建模）；3) Freemium（PyPI 免费层）+ 企业气隙版的双轨 GTM，低门槛获取种子用户、高价值场景做私有化交付。
4. **风险与存疑点**：1) 极早期：2025 成立、约 2 人团队、仅 1 家付费客户，商业化验证不足；2) 融资金额无一手披露，第三方数据（Extruct AI ~100 万美元）置信度低；3) 赛道拥挤且巨头下场——ChipAgents/Cognichip 融资额远高于它，Cadence/Synopsys 自带 AI 与客户渠道，护城河待观察；4) 芯片验证对正确性零容忍，agent 生成代码的可信度与责任边界是采用障碍；5) 名称注意：一手品牌为 SigmanticAI（官网 sigmanticai.com），本档 slug 记为 sigmantic，未见更名或 pivot 迹象。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Y Combinator 公司页 — SigmanticAI (S25) | https://www.ycombinator.com/companies/sigmanticai |
| 官网 — SigmanticAI: Claude Code for Chip Design | https://www.sigmanticai.com/ |
| AnySilicon — SigmanticAI: AI-Native RTL and Verification Generation Platform | https://anysilicon.com/news/sigmanticai-ai-native-rtl-and-verification-generation-platform/ |
| Extruct AI — Sigmantic Funding: $1M Complete Analysis（第三方数据，置信度低） | https://www.extruct.ai/hub/sigmanticai-com/ |
| LinkedIn (Y Combinator) — SigmanticAI is the Cursor for hardware description | https://www.linkedin.com/posts/y-combinator_sigmanticai-is-the-cursor-for-hardware-description-activity-7351672072655294468-rP4Z |
| vTools IEEE — From UC Berkeley to Y Combinator: AI Hardware Innovation with Sigmantic AI Founders | https://events.vtools.ieee.org/m/496279 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
