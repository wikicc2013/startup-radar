# Cardamon

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Auditable AI for regulatory compliance（面向监管合规的可审计 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/cardamon
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人均出身 Revolut 投资产品团队、共事近 4 年。Areg Nzsdejan（CEO）曾任 Revolut Product Owner，负责 Diversified Assets 与 Engagement 团队、管理 14 名工程师；Dmytro Astakhov（CTO）曾任 Revolut 高级软件工程师，主导 ETF 与欧盟股票产品的后端。团队约 2 人。
- **成立/批次**：2025
- **地点**：英国伦敦（124 City Road）+ 美国纽约（169 Madison Ave）双总部
- **产品**：面向受监管金融机构的「可审计 AI 合规副驾」。AI Agent 平台自动完成三条主线：Horizon Scanning（全球监管变化监测与影响评估，宣称覆盖 60+ 司法辖区、每日追踪 950+ 条监管变更）、Obligation Mapping（从监管文本抽取适用义务，宣称准确率最高约 90%）、Gap Analysis（把内部政策映射到义务、找出合规缺口）。把合规官「从监管→义务→产品需求」的周期从数周压缩到分钟级，宣称可削减多达 95% 的人工合规工作。核心卖点是可审计性：每个结论都带完整审计链、引用来源与可解释推理（Citation-Backed Outputs），消除黑箱风险；合规官可编辑映射、复核 AI 输出并导出。
- **商业模式**：面向受监管金融机构（银行、支付、加密等）的 B2B SaaS/RegTech 合规平台，可与客户既有 GRC 工具栈集成。具体定价与计费方式未披露。
- **竞争格局**：RegTech 合规自动化赛道，官方口径为「传统 RegTech 在 AI 时代正在掉队」。可比对象包括 Greenlite、Norm Ai、Delphi(Ai)、Corlytics、Ascent RegTech、以及 Revolut 内部曾用的传统合规映射方式。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Y Combinator（Winter 2025 批次） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/cardamon) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：Cardamon 做的是「把海量、频繁变动、跨辖区的法规文本，自动映射成企业内部的具体义务与产品需求，且每一步可审计」。这套「监管→义务→缺口」的可审计映射范式，对制造业几乎可以平移到 EHS、产品合规与出口管制场景：制造企业同样被 RoHS/REACH/《化学品管理》、各国碳边境(CBAM)、机械指令/CE、UL、行业标准（如汽车 IATF 16949、医疗 MDR）以及多国出口管制清单包围，法规频繁更新、跨国口径不一，且合规结论一旦被审计/召回追责就必须能追溯到条款来源。Cardamon 的价值不在「用大模型答法规」，而在「每个义务都带引用与审计链、可被合规官编辑复核」——这正是制造业质量/法务部门敢不敢让 AI 进入合规流程的分水岭：可审计 + 人在环，而非黑箱自动化。
2. **国内对标厂商**：合合信息/启信宝、天眼查——企业合规与风险数据侧，但偏工商风险而非法规义务映射、蚂蚁/合规科技类 RegTech（如同盾、百融）——金融风控合规，缺口在「监管文本→义务」的可解释抽取、法大大/e签宝等合规工具——偏电子签与流程合规，非监管义务引擎、制造业侧：赛宝、SGS/TÜV 数字化合规工具、以及各质量管理软件(QMS)厂商的法规库模块
   > 国内目前少有「跨辖区监管文本 → 结构化义务 → 缺口分析」且强调逐条引用+审计链的原生 AI 合规引擎；已有玩家多集中在金融风控（同盾、百融）或工商风险数据（天眼查、启信宝），法规义务映射这一层仍是空白。对制造业，国内更缺的是把 RoHS/REACH/CBAM/出口管制这类产品与贸易合规做成「可审计义务引擎」的产品——现状多依赖第三方检测机构（SGS/TÜV/赛宝）人工出报告或 QMS 里的静态法规库。Cardamon 的反向情报意义在于：它验证了「合规映射的价值不在答案本身，而在可审计的推理链」，这是国内做产品合规 AI 时最该抄的产品哲学，而非把它当成又一个法规问答机器人。
3. **可迁移的干法 / 应进场景词典的词条**：可审计AI、合规副驾、监管义务映射、Horizon-Scanning、缺口分析、Citation-Backed引用溯源、人在环复核、RegTech
   > 可迁移的干法有三条：①「文本→结构化义务」的抽取范式——把非结构化的法规/标准/合同条款抽成带适用性、义务、影响、风险类型的结构化对象，可平移到制造业的标准符合性、供应商合同义务履行、招投标合规。②「引用溯源 + 审计链 + 可编辑」的三件套——让 AI 结论逐条挂回源条款、允许专家编辑并留痕，这是任何高风险合规/质量场景让 AI 落地的通用前提（EHS、召回追溯、审计应对）。③「Horizon Scanning 变更监测 → 自动影响评估」——把「法规/标准变了 → 我哪些产品/流程受影响」自动化，可迁移到制造业的标准换版、客户特殊要求变更、出口管制清单更新的主动预警。
4. **风险与存疑点**：①极早期、2 人团队、成立仅一年、无披露融资额与具名客户，商业验证与规模化风险高，官网 45M+ 终端用户/90% 准确率等数字无第三方来源、需存疑；②合规是强监管、强责任场景，AI 抽取义务一旦漏项/错判，责任归属与产品可靠性面临严苛审查，「可审计」是必要但不充分条件；③赛道拥挤且巨头（Microsoft 合作既是背书也意味被平台化）与 Norm Ai/Greenlite 等资金更充裕对手竞争，差异化壁垒尚未证明。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Cardamon — Y Combinator 公司页 (YC W25) | https://www.ycombinator.com/companies/cardamon |
| Cardamon AI 官网首页 | https://cardamon.ai/ |
| Cardamon AI — About Us（创始人/团队/双总部） | https://cardamon.ai/about-us |
| Cardamon is funded by Y Combinator（未披露具体金额） | https://cardamon.ai/articles/cardamon-is-funded-by-y-combinator |
| Cardamon partners Microsoft to scale secure AI in compliance — FinTech Global | https://fintech.global/2026/01/30/cardamon-partners-microsoft-to-scale-secure-ai-in-compliance/ |
| Featured in RegTech100 — Cardamon | https://cardamon.ai/articles/featured-in-regtech100 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
