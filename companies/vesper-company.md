# Vesper Company

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Docx API for AI agents（面向 AI 智能体的 Word 文档 API）
- **官网/锚定**：https://www.ycombinator.com/companies/vespper
- **深研状态**：researched（官方拼写为 Vespper（双 p），域名 vespper.com，YC Fall 2024（F24）。已发生一次转型：最初 F24 Launch 产品是「24/7 AI on-call engineer / AIOps 告警排障 Agent」（Fondo、YC 目录旧描述仍是此定位），现已 pivot 为『面向 AI 智能体的 docx MCP/API』——给 Agent 一个 endpoint，把原始输出变成带修订痕迹(track changes)、可审阅的 Word 文档。当前官网标注 coming soon / 等候名单，提供 mcp-remote 接入（https://mcp.vespper.com/mcp）。公司状态：活跃，2 人团队。）

## 公司画像
- **团队**：2 人创始团队。CEO & 联创 Topaz Turkenitz（计算机+设计背景，曾在 Snyk 做增长实验并拿下一家财富 500 强客户，更早在 99designs）；CTO & 联创 Dudu(David) Lasry（约 7 年工程经验，先后在 Google、Viz.ai 任深度学习算法工程师、SafeBreach，专长计算机视觉与分布式系统）。顾问 Yael Gozin（Takeda/Pfizer 15+ 年 R&D 转型高管，负责监管与 AI 文档工作流方向）。
- **成立/批次**：2024（YC Fall 2024 / F24 批次）
- **地点**：未披露（YC F24，公开页未标注城市；创始人背景以以色列/美国科技公司为主）
- **产品**：Vespper 定位『The docx MCP/API for agents』：给 AI 智能体一个统一 endpoint / MCP 接入，把 Agent 的原始输出转成排版规范、带修订痕迹、可评审(review-ready)的 Word(.docx) 文档；让 Agent 读写 docx 时无需直接处理底层 XML，从而降低 token 成本、提升性能。主打受监管/合规/法务场景（regulatory、compliance、legal 的 agent builders）。接入示例：npx mcp-remote https://mcp.vespper.com/mcp。
- **商业模式**：未披露。API/MCP 基础设施定位，典型走 usage-based / 开发者订阅路线；官网为等候名单 + 免费试用，尚未公开定价，产品 coming soon。
- **竞争格局**：同层竞争：(1) 受监管行业文档自动化成熟玩家 Yseop（药企监管文档生成，AWS 支持）、Narrativa、IntuitionLabs——它们做端到端应用，Vespper 做给 Agent 用的基础设施层；(2) 通用文档 Agent 如 Harvey（法律文档起草/编辑）自建 docx 能力；(3) 开源/自建路线 python-docx、docx 操作库 + 自研 MCP，以及微软 Office/Graph API、金山 WPS 文档 API 等大厂接口。Vespper 差异点是『Agent 原生 + 免碰 XML + track changes 审阅流』的薄基础设施。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / YC F24 | 未披露 | 2024 | [链接](https://www.ycombinator.com/companies/vespper) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的意义在于『受监管文档』这条线的直接可迁移性。制造企业里大量交付物仍以 Word 为最终格式且必须人工签核：SOP/作业指导书、质量体系文件、IATF16949/ISO 审核报告、8D/PPAP/FMEA、供应商审计与合规文档、变更通知(ECN)等。这些文档的痛点不是『生成内容』，而是『格式规范 + 修订痕迹留痕 + 评审签核』——恰是 Vespper 主打的能力。它演示了一条对制造业极实用的人机分工范式：Agent 负责把散乱数据/检测结果起草成 review-ready 的 Word 稿并保留 track changes，人只在最后一步以『审阅修订』方式介入确认，既满足合规留痕又把重复排版工作全部委托出去（Push-Right + Brief）。谁能把质量/合规文档做成 Agent 可直接调用的 docx 接口，谁就抓住了制造业文档自动化的最后一公里。
2. **国内对标厂商**：金山办公 WPS 365 / WPS AI（提供 docx 生成与编辑能力、文档 API，最接近『可编程 Word 接口』这一层）、合合信息 TextIn（文档解析/生成 API，Agent 可调用的文档基础设施）、达观数据（文档智能、智能文档审阅与 RPA 文档处理，偏受监管/金融文档）、幂律智能 PowerLaw（法律/合同文档 AI，对应 Vespper 的 legal/compliance 场景）
   > 国内没有与 Vespper『Agent 原生 docx MCP』完全同形的公司，但可从两侧对标：基础设施侧最接近的是金山办公——它天然掌握 WPS/Word 兼容的排版内核与文档 API，若把 WPS AI 接口 MCP 化即是国产直接对手；解析/生成 API 侧有合合信息 TextIn。应用侧对标其目标场景：达观数据（文档智能审阅、金融/监管）与幂律智能（法律合规文档）已在做『文档生成+审阅』的落地，但多为端到端 SaaS，而非面向第三方 Agent 的中立接口层。反向情报价值：Vespper 押注『MCP 时代文档会由 Agent 而非人来写，需要一层专门的 docx 接口』——国内玩家目前仍以『人用的 AI 文档助手』为主，Agent 原生接口层是空白位。
3. **可迁移的干法 / 应进场景词典的词条**：MCP文档基础设施、Agent原生docx生成、受监管行业文档自动化、Word可编程接口(免碰XML)、track-changes审阅签核流
   > 可迁移干法：把『最终交付物仍是 Word、且必须人工签核留痕』的任何流程，改造成『Agent 起草 review-ready docx + 人以修订痕迹审阅』的人机协同链。关键三点——(1) 用一层专用接口把 Agent 与 docx 底层 XML 解耦，稳定排版、降 token 成本；(2) 内建 track changes 让 AI 的每处改动可追溯，满足合规/审计；(3) 面向 Agent 而非人开放 endpoint，卡位『文档由 Agent 写』的新范式。制造业质量/合规、法务合同、财务报告、投标文件等『Word 为王 + 签核为纲』的场景都可照搬。
4. **风险与存疑点**：① 极早期且已转型一次：从 AIOps『AI on-call 排障 Agent』pivot 到『docx MCP』，方向尚未被市场验证，2 人团队、产品仍 coming soon/等候名单，无公开付费客户与融资金额。② 护城河偏薄：MCP/docx 接口作为基础设施薄层，极易被上游巨头（Anthropic 官方 MCP、微软 Office/Graph API、金山 WPS）或开源 python-docx-MCP 直接吞并或商品化。③ 目标受监管行业（制药/法律/合规）采购周期长、验证与合规门槛高，且要正面对上 Yseop、Narrativa 等已具备药企监管文档 track record 的成熟玩家，早期小团队获客与信任成本高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Vespper 官网首页 — The docx MCP for agents | https://www.vespper.com/ |
| Vespper 官网 About — 创始人/顾问背景 | https://www.vespper.com/about |
| Y Combinator 公司页 — Vespper (F24) | https://www.ycombinator.com/companies/vespper |
| Fondo — Vespper Launches: 24/7 AI On-Call Engineer（原始 F24 定位，佐证转型） | https://www.fondo.com/blog/vespper-launches |
| Crunchbase — Vespper（Pre-Seed，金额未披露，抓取受限） | https://www.crunchbase.com/organization/vespper |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
