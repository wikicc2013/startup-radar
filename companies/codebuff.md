# Codebuff

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：AI coding assistant for terminal commands（面向终端命令的 AI 编码助手）
- **官网/锚定**：https://www.ycombinator.com/companies/freebuff
- **深研状态**：researched

## 公司画像
- **团队**：创始人 James Grugett（CEO，Manifold Markets 联合创始人出身），联合创始人 Brandon Chen。团队规模约 2-3 人（YC 目录标注 2 人）。
- **成立/批次**：2024（前身 Manicode 于 2024 年中开始开发）
- **地点**：美国旧金山 San Francisco
- **产品**：面向终端的 AI 编码 Agent：在命令行用自然语言驱动，自动挑选代码库中相关文件作为上下文（号称约 2 秒完成全库索引）、直接改文件、执行 shell 命令与跑测试，零点击、不锁定 IDE（兼容 VSCode/Cursor/Vim/Emacs/Neovim 等）。采用多 Agent 架构（File Picker / Planner / Editor / Reviewer 分工协作）而非单模型。支持通过 OpenRouter 接任意模型；提供 SDK 与自定义 Agent（TypeScript，/init 构建）。官方 BuffBench（175+ 真实 git commit 重建任务）自评：质量高于 Claude Code、平均快 100+ 秒（另有一处第三方口径称评测 61% vs Claude Code 53%）——均为厂商自评，非独立第三方基准。
- **商业模式**：SaaS 订阅 + 用量积分。付费版起价约 $49/月（YC 口径），新用户赠免费月度积分（约 2,500 credits），含推荐返积分机制；不提供 BYOK。2025 年另推 Freebuff：开源模型 + 终端内文本广告的免费·广告支持模式。GetLatka 口径称 2025 年营收约 $330K（低置信，第三方估算）。
- **竞争格局**：直接对标 Claude Code、Cursor、Aider、Windsurf 等 AI 编码工具；差异化在于终端优先、多 Agent 编排、模型不锁定（OpenRouter）、开源 + 免费广告变体。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（含 YC 标准投资，多源亦记作 Pre-Seed/Seed） | 约 $500K | 2024 | [链接](https://tracxn.com/d/companies/codebuff/__YrnRPlZdpTNyC471phVNRCj1A_XWBi7xJQYikGIOQGw/funding-and-investors) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的直接价值不在于制造本身，而在于制造企业的 IT/自动化团队：Codebuff 把「AI 写代码」从 IDE 里搬到终端，天然贴合制造现场大量存在的脚本化、命令行、Linux/边缘设备、CI/CD、数据管道场景——MES/WMS 接口胶水代码、PLC 采集脚本、报表 ETL、设备联网脚本这类「量大、重复、非核心但耗人」的开发，正适合让终端 Agent 代劳。更值得制造业管理者注意的是它的产品哲学：不锁定 IDE、不锁定模型（OpenRouter 接任意模型）、不上传代码库——这对数据敏感、异构工具链、担心供应商绑定的制造企业 IT 环境是关键采购前提。真正可迁移的不是这款工具，而是它「多 Agent 分工（找料—规划—执行—复核）」把一个复杂任务拆成流水线角色的做法，这与制造业本就熟悉的工序化、岗位化思维同构。
2. **国内对标厂商**：通义灵码（阿里云）——国内份额领先的 AI 编码助手，已推出命令行/Agent 形态，最接近 Codebuff 的「终端 + 自动改文件」定位、字节 Trae / MarsCode（豆包系）——Agent 化编码，主打自动多步执行，产品思路与 Codebuff 的零点击直改高度重叠、CodeGeeX（智谱）——较早的国产代码大模型助手，覆盖补全到 Agent、百度 Comate（文心快码）——企业级代码助手，强调私有化与国产模型适配、aiXcoder——聚焦企业私有化部署的国产代码 Agent，对应 Codebuff「不上传代码库」这一敏感诉求的国内解
   > 国内 AI 编码赛道已被大厂（阿里通义灵码、字节 Trae、百度 Comate、智谱 CodeGeeX）占据主流，产品能力上「终端 Agent + 自动改文件 + 多步执行」并不稀缺，通义灵码与 Trae 都在快速补齐。Codebuff 相对国内玩家的差异更多在「开源 + 模型不锁定（OpenRouter）+ 免费广告变体（Freebuff）」这套开放/低门槛打法，而国内同类更偏「绑自家云 + 绑国产大模型 + 企业私有化」。对制造业采购者而言，若要国产化/私有化，aiXcoder、Comate 更对路；若要开放试用与模型自由，Codebuff 一类海外开源产品是参照系。
3. **可迁移的干法 / 应进场景词典的词条**：终端优先AI编码、多Agent编排(找料-规划-执行-复核)、模型不锁定(OpenRouter)、代码不上传/隐私优先、免费广告变体(Freebuff)、开源+SDK+自定义Agent
   > 最值得抄的干法是「多 Agent 角色流水线」：把一个模糊指令拆成 File Picker（找相关上下文）→ Planner（拆解计划）→ Editor（执行修改）→ Reviewer（复核），每个角色职责单一、可替换、可评测。这套「工序化拆解 + 角色分工 + 末端复核」范式几乎可平移到制造企业任何一个知识型流程自动化上——报价、工艺文件生成、质量报告审阅、供应商资料整理，都可按「取料—规划—执行—复核」四段来搭 Agent 流水线，比堆一个大而全的单 Agent 更可控、更好排错。另一可迁移点是「模型/工具不锁定 + 数据不外传」的产品红线，正是制造业 IT 选型时该坚持的谈判条件。
4. **风险与存疑点**：①同质化与巨头挤压：终端 AI 编码是红海，上有 Claude Code、Cursor，国内有通义灵码/Trae，能力护城河薄，官方 BuffBench 领先系厂商自评、缺独立第三方验证；②规模极小、变现存疑：团队仅 2-3 人、2024 年仅约 $500K 种子、2025 年营收约 $330K（第三方估算），且转向广告支持的 Freebuff 说明订阅变现承压，商业模式尚未跑通；③战略发散与身份漂移：从 Manicode 更名、又推 Freebuff、还要做「Lovable 竞品」，小团队多线作战，加之依赖 OpenRouter/第三方模型（无自有模型、无 BYOK），底层受制于人，长期可持续性存疑。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Y Combinator 公司页（现以 Freebuff 收录，James Grugett / 2 人 / 旧金山 / F24） | https://www.ycombinator.com/companies/freebuff |
| YC Launch：Codebuff — Make your terminal write code for you | https://www.ycombinator.com/launches/M2Q-codebuff-make-your-terminal-write-code-for-you |
| GitHub CodebuffAI/codebuff（开源，约7.3k stars，Apache-2.0，多Agent架构） | https://github.com/CodebuffAI/codebuff |
| 官网 codebuff.com | https://www.codebuff.com/ |
| Tracxn — Codebuff 融资与投资人（$500K 种子，2024，YC/Transpose 等） | https://tracxn.com/d/companies/codebuff/__YrnRPlZdpTNyC471phVNRCj1A_XWBi7xJQYikGIOQGw/funding-and-investors |
| Crunchbase — Codebuff Pre-Seed / 公司页 | https://www.crunchbase.com/organization/codebuff |
| GetLatka — Codebuff 营收约 $330K（2025，第三方估算，低置信） | https://getlatka.com/companies/codebuff.com |
| Windsurf-Alternatives — Codebuff 产品/BuffBench 自评/定价梳理 | https://windsurf-alternatives.com/cli-agents/codebuff/ |
| AI Miraheze Wiki — Codebuff（更名史与产品综述） | https://ai.miraheze.org/wiki/Codebuff |
| James Grugett LinkedIn（Founder & CEO, Codebuff YC F24；Manifold Markets 联创） | https://www.linkedin.com/in/james-grugett/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
