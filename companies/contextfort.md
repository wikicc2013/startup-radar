# ContextFort

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B004
- **一句话定位**：Security controls for AI browser agents（面向 AI 浏览器智能体的安全管控）
- **官网/锚定**：https://www.ycombinator.com/companies/contextfort
- **深研状态**：researched（在营，YC S25。已发生业务转向：最初做建筑施工图纸审查（自动查缺失/冲突尺寸、生成 RFI，2026-02 YC Launch），后转向 AI 智能体安全——先落到浏览器智能体（Comet/Atlas/Claude 等）的可视化与管控，官网进一步扩展到对 AI 编码智能体（Curs、Claude Code）的 OS 级监控。分诊给定的『AI 浏览器智能体安全管控』与官网当前主线一致。）

## 公司画像
- **团队**：2 人小团队（YC 页显示 team size=2）。联合创始人 Ashwin Ramachandran（UC San Diego CS 硕士、IIT Bombay CS 本科；背景涉及为施工承包商自动化图纸审查）与 Harshvardhan Agarwal。
- **成立/批次**：2025（YC Summer 2025 批次）
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：两条产品线随转向叠加：①（早期）ContextFort 施工图纸审查——用 AI 跨建筑/结构图纸找缺失与不一致的尺寸、比对不同版本的叠图错位、避免重复 RFI 并按规范格式起草 RFI（Request For Information），号称为承包商每个项目省 2-3 周。②（当前主线）AI 智能体安全护栏：一款 Chrome 扩展，检测 AI 智能体何时接管浏览器、记录会话中每一步（访问页面、点击、文本输入），并能『在特定页面阻断特定动作』、阻止单会话内的跨站数据外泄；专为 Comet、Atlas、Claude 等智能体打造，本地优先（会话与截图本地存储，不上传第三方云）。官网另有面向 AI 编码智能体（Cursor、Claude Code）的端点监控叙事：审计其读写的文件、外连、子进程，形成防篡改审计留痕。GitHub 开源仓库（ContextFort-AI/ContextFort），路线图列 SOC2 Type 2、ISO 27001、GDPR。
- **商业模式**：面向企业安全团队的 SaaS/端点安全工具；浏览器扩展免费/自助分发（Chrome Web Store），企业侧提供『云/自托管』的集中管理与部署（需联系）。具体定价未在公开页披露。
- **竞争格局**：浏览器/智能体安全新赛道，同期竞品密集：Alter（YC S25，AI 智能体安全）、Capsule Security（企业 AI 智能体安全，融 700 万美元种子）、企业浏览器阵营 Island/LayerX、云安全巨头 Wiz（发布《Agentic Browser Security》年度综述涉足该议题）。传统 DLP/EDR 厂商亦是间接对手。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Summer 2025（加速器） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/contextfort) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的直接价值不在图纸（早期施工产品面向建筑承包商，与离散制造相关性有限），而在其转向后的核心命题：给 AI 智能体套上『可观测 + 可阻断 + 可审计』的安全护栏。制造企业正把代码助手、浏览器操作智能体、RPA 引入到 PLM/MES/ERP/工艺文档等系统的日常操作里——这些智能体一旦能自动点击、填表、跨系统搬运数据，就同时带来越权操作、图纸/BOM/工艺参数外泄、误改生产参数等新风险。ContextFort 的思路（内核/端点级、独立于智能体本身记录其读写文件与外连、并能在特定页面阻断特定动作、留下不可篡改审计）正是制造业 IT/OT 合规与商业机密保护所需的『智能体最小权限 + 全程留痕』能力。此外其早期施工图纸 RFI 产品的『自动比对多版本图纸找尺寸冲突』，在制造工程更改单（ECN）、多版图纸/CAD 一致性核查场景上有可迁移的算法思路。
2. **国内对标厂商**：奇安信 / 安恒信息（终端 EDR、数据防泄漏 DLP 转向 AI 智能体安全监控的传统安全厂商，属能力对标而非同款）、影刀 RPA / 实在智能（国内智能体/RPA 执行侧，若补『操作审计+越权阻断』即接近本命题）、国内新兴 AI Agent 安全创业（智能体行为围栏/权限最小化方向，赛道尚早，缺公开领跑者）
   > 国内目前没有与 ContextFort 定位完全重合的『浏览器/编码智能体安全护栏』独立新创作为一对一对标。最接近的是两类：一类是奇安信、安恒等传统安全大厂的 EDR/DLP 能力向『AI 智能体行为监控』延伸；另一类是影刀、实在智能等 RPA/智能体执行平台，它们已掌握操作接管与录制，若补齐面向企业安全团队的审计留痕与越权阻断，就会长成同类产品。可以判断这是一个国内尚未跑出领跑者的早期赛道，窗口存在。
3. **可迁移的干法 / 应进场景词典的词条**：智能体安全护栏、内核/端点级可观测、操作审计留痕（防篡改）、越权动作阻断、跨站数据防泄漏(DLP)、本地优先隐私、多版图纸一致性核查(RFI)
   > 可迁移的干法有三条：①『独立于被监控对象记录』——不信任智能体自报，而在 OS/浏览器底层旁路记录其真实读写与外连，制造业监控外包工具、AI 助手对核心系统的访问同理可用；②『特定页面阻断特定动作』的细粒度策略护栏——把安全从『全有全无』变成按场景可编排，适配 MES/ERP 关键操作的最小授权；③早期施工产品的『自动叠图找尺寸冲突 + 生成结构化澄清请求(RFI)』，可迁移到制造 ECN/多版 CAD 图纸的一致性自动核查与变更澄清流。
4. **风险与存疑点**：①业务方向未定型：一年内从施工图纸审查大幅转向 AI 智能体安全，两条线并存于官网，主线尚在验证，市场与打法未收敛，PMF 风险高；②赛道拥挤且巨头临境：Alter、Capsule、Island/LayerX 乃至 Wiz 都在争『智能体安全』，2 人团队护城河薄，浏览器扩展形态易被平台或安全大厂内置替代；③无公开付费客户与融资金额、团队仅 2 人，商业化与规模化证据缺失；合规资质（SOC2/ISO27001）尚在路线图未落地，进入企业安全采购门槛高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| ContextFort: Visibility and Controls for Browser Agents | Y Combinator | https://www.ycombinator.com/companies/contextfort |
| ContextFort 官网 | https://contextfort.ai/ |
| ContextFort protect-browser-agents 页 | https://contextfort.ai/protect-browser-agents |
| GitHub - ContextFort-AI/ContextFort | https://github.com/ContextFort-AI/ContextFort |
| Show HN: ContextFort – Visibility and controls for browser agents | https://news.ycombinator.com/item?id=46614015 |
| Fondo | ContextFort Launches: Copilot for Construction Drawing Review | https://www.fondo.com/blog/contextfort-launches |
| Ashwin Ramachandran - ContextFort | LinkedIn | https://www.linkedin.com/in/ashwinram2002/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
