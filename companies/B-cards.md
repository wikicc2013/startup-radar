# B 档 · 速写卡集（不深研，只做 300 字定位卡）

> 维护规则：B 档只做速写卡——定位一句话 + 为什么值得记 + 潜在关联场景，不启动联网深研。
> 卡片内容基于公开一句话业务与常识判断，不含需溯源的融资/客户数字。首波写卡日期 2026-07-07。

---

## Minicor（B001 · #81）
**定位**：把 AI 部署进老旧桌面系统的 RPA 平台（RPA platform for deploying AI into legacy desktop systems）。
**为什么值得记**：制造业 IT 现实是大量产线终端跑着十几年的老旧 Windows/桌面系统，无 API、改造成本高。Minicor 走"不动老系统、在界面层套 AI RPA"的现实路径，正是国内很多工厂想上 AI 却卡在"系统太老"的破局思路。
**潜在关联场景**：MES/老旧 ERP 界面自动化、质检录入、设备台账搬运；与 B001 同档 Interfaze（确定性 OCR）、B003 Hypercubic（大型机现代化）构成"遗留系统 AI 化"小簇，可合并成一篇《不换系统怎么上 AI》。

## Hypercubic（B003 · #418）
**定位**：面向大型机现代化的智能体 AI（Agentic AI for mainframe modernization）。
**为什么值得记**：银行、能源、大型制造的核心系统仍跑在 COBOL/大型机上，迁移风险极高。用智能体读懂并渐进改造大型机，是"高风险遗留资产"数字化的硬骨头打法，方法论价值高。
**潜在关联场景**：核心系统重构、遗留代码理解、国企/央企 IT 现代化；与 Minicor 同为"遗留系统"命题的两端（桌面端 vs 主机端）。

## Unsiloed AI（B003 · #410）
**定位**：企业文档的智能体 OCR（Agentic OCR for enterprise documents）。
**为什么值得记**：制造业后台高频处理非结构化单据——采购合同、质检报告、报关单、图纸标注。"智能体 OCR"比传统 OCR 多了理解与流转能力，是办公自动化的入口级能力。
**潜在关联场景**：单据数字化、合同抽取、图纸/BOM 解析；与 Interfaze（确定性 OCR 模型）形成"OCR 能力层"对照，可进场景词典"单据处理"词条。

## Interfaze（B001 · #132）
**定位**：为 OCR 等确定性开发任务打造的 AI 模型（AI model built for deterministic developer tasks like OCR）。
**为什么值得记**：主打"确定性"——对制造业这种容错率低的场景，确定性输出比通用大模型的"大概对"更可落地。是"专用小模型 vs 通用大模型"路线之争的一个样本。
**潜在关联场景**：单据处理、数据抽取、质检读数；与 Unsiloed AI 并列可写《制造办公里，OCR 这层该用大模型还是专用模型》。

## Woz（B006 · #817）
**定位**：让编码更省钱的 Claude Code 插件（Claude Code plugin for cheaper coding）。
**为什么值得记**：Claude Code 生态在 YC 里长出工具层的信号，与 github-radar 体系交叉。对"AI 编码降本"这一企业普遍关切给出具体抓手。
**潜在关联场景**：研发提效、AI 编码成本治理；与 B006 Sennu AI（企业 Claude 落地）同批出现，构成"Claude 生态在 YC 冒头"的证据链。

## matforge（B001 · #153）
**定位**：为半导体行业发现材料的 AI 科学家（AI scientists to discover materials for the semiconductor industry）。
**为什么值得记**：研发域硬科技，AI for Science 落到半导体材料这一卡脖子环节。虽不直接服务产线，但对"研发端 AI 化"是高价值观察样本。
**潜在关联场景**：新材料研发、配方优化、AI 实验室；可进"研发域 AI"专题，与国内 AI 制药/材料计算厂商对照。

## REV1（B002 · #247）
**定位**：自动化 CAD 后置工作、缩短硬件设计周期（Shortening hardware design cycles by automating post-CAD work）。
**为什么值得记**：硬件设计到量产之间有大量"CAD 之后"的工程杂活（出图、工艺、DFM 检查），是设计-制造衔接的隐性瓶颈。AI 切这一段直接压缩 TTM。
**潜在关联场景**：DFM/工艺审查、图纸后处理、设计转制造；与 B006 Adam（机械 CAD 智能体）、B001 Aurorin CAD 构成"CAD/工程设计 AI"小簇。

## Adam（B006 · #887）
**定位**：面向机械工程师的 AI CAD 智能体（AI CAD agent for mechanical engineers）。
**为什么值得记**：直接切机械设计师的日常建模工作，是"研发岗位 AI 协同"的具体样本，对做岗位 AI 重构分析（八维度/成熟度曲线）是现成素材。
**潜在关联场景**：机械设计提效、参数化建模、设计知识沉淀；与 REV1 可合并成《机械研发链上的 AI：从建模到出图》。

## Alchemize（B001 · #87）
**定位**：AI 原生的报关行（AI-native customs brokerage）。
**为什么值得记**：出海制造企业的痛点在跨境合规与报关。用 AI 重做报关行是"传统中介服务 AI 原生化"的样本，与供应链合规环节强相关。
**潜在关联场景**：跨境贸易合规、报关自动化、关税筹划；与 B005 MarkIt（贸易合规）、出海制造议题可串联。

## Human Archive（B002 · #304）
**定位**：机器人学习的多模态数据供应商（Multimodal data provider for robotics learning）。
**为什么值得记**：具身智能/工业机器人的瓶颈从算法转向数据，"卖机器人训练数据"是产业链卖水人角色，交叉 A1 里的工厂机器人公司（Mbodi、Servo7、Verne）。
**潜在关联场景**：机器人数据、具身智能训练、工厂机器人落地；可作《工厂机器人这波，谁在卖水》一文的数据侧样本。
