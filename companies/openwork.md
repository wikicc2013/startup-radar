# OpenWork

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：The open-source alternative to Claude Cowork（Claude Cowork 的开源替代品）
- **官网/锚定**：https://www.ycombinator.com/companies/openwork
- **深研状态**：researched

## 公司画像
- **团队**：创始人 Ben Shafii（Twitter/GitHub @benjaminshafii）；团队约 4 人，位于美国旧金山。运营主体登记为 Different AI / OpenWork Labs，联系邮箱 ben@openworklabs.com。YC 对接合伙人 Aaron Epstein。创业动机据创始人在 Show HN 自述：为让非技术家人/同事（'Susan in Accounting'）无需终端即可在本地跑特权工作流。公开背景资料较少，未披露此前履历。
- **成立/批次**：2026 年（YC Spring 2026 / P26 批次，Active）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向非技术员工的开源 AI Agent 桌面应用（macOS/Windows/Linux），定位为 Anthropic Claude Cowork 的开源替代品。技术上是开源终端 Agent opencode 的原生桌面 GUI（Tauri + TypeScript，MIT 许可），把原本面向工程师的 CLI 体验包装成可视化的 计划/进度/权限/产物 界面。用户在本地文件上跑 Agent，支持 50+ 模型提供方（自托管、Bedrock、Azure、Vertex 等），可按任务路由到不同模型控成本；通过 Skills、Plugins、MCP servers 扩展，可整合企业内部 MCP、runbook、脚本与文档；支持 UI / Slack / Telegram 多入口；一键分享团队配置。
- **商业模式**：开源核心 + 商业化上层。桌面 App 免费开源（自带 LLM key，BYO-inference）。Team Starter：前 5 席免费，之后每席每月 $10，含 API access 与 Extension Marketplace。Enterprise：定制报价，含 SSO、SLA、LTS、私有化/自托管/on-prem/混合部署、feature 优先级。
- **竞争格局**：正面对标 Anthropic Claude Cowork（及 OpenAI Codex、ChatGPT Desktop）；同赛道开源同类含底层 opencode 本身、OpenYak（HN 上出现的类似开源 Cowork）等。差异化打法：开源 + 企业可私有化 + 多模型不锁定 + 面向非技术用户的桌面 GUI。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业中后台（财务、采购、质量文档、班组文员等）大量非技术岗位可用桌面 Agent 在本地文件上跑内部脚本/runbook 完成重复文书与数据处理，且核心卖点『可完全私有化/on-prem 部署 + 数据不出内网 + 自选模型』正切工厂对数据安全与合规的硬约束——比只能上云的 Claude Cowork 更适配国内制造业 IT 环境。
2. **国内对标厂商**：Dify（开源 LLM 应用/Agent 编排平台，企业可私有化部署）、OpenManus（MetaGPT 团队开源的通用 Agent，对标闭源 Manus 的开源路线）、AgentScope（阿里通义开源多 Agent 框架）、扣子 Coze（字节，Agent/工作流编排，但非开源桌面且以云为主）
   > 国内没有一款完全对位的『非技术员工桌面 Agent』开源产品：Dify/AgentScope 偏开发者与后端编排，OpenManus 偏通用 Agent 研究，扣子偏云端编排。OpenWork 的独特位是『桌面 GUI + 本地文件 + 私有化』这个交叉点，可作为国内厂商（或制造业内部 IT）自建同类工具的产品形态参考。
3. **可迁移的干法 / 应进场景词典的词条**：非技术员工 AI 助手、本地文件处理/桌面 Agent、企业私有化/on-prem 合规部署、BYO-LLM 多模型路由控成本、Skills/MCP/Plugin 生态扩展、团队配置一键分享
   > 可迁移打法：①用开源 GUI 包装成熟开源 Agent 内核（opencode）快速起量——3 个月 14k→16.8k GitHub stars、15 万+ 下载；②以『免费桌面 App 自带 key』做无摩擦获客，再用团队席位（$10/席）与企业私有化/SSO/SLA 变现；③明确锚定『非技术用户 + 数据合规 + 不锁定模型』三个巨头闭源产品的软肋。制造业内部工具化或国产替代可复用此『开源引流—席位/私有化收费』的漏斗。
4. **风险与存疑点**：与 Claude 生态强交叉：直接对标 Claude Cowork，并通过 OpenPackage 集成 Claude Skills，底层 opencode 亦支持 Claude 模型——既蹭 Anthropic 生态热度也高度依赖其标准，若 Anthropic 收紧 Skills/生态或自己推私有化版本，替代叙事承压。github-radar 交叉信号：本项目为高增长开源仓库（different-ai/openwork，MIT，star 数月内破万），属 github-radar 追踪对象，两库可互为佐证。可持续性风险：社区对『快速克隆巨头产品』的长期维护存疑（HN 有人以 aider 被相对弃坑为鉴），且团队仅约 4 人、尚无公开融资，商业化能否跑通待观察。融资与具名客户均未披露。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| YC 公司页 OpenWork | https://www.ycombinator.com/companies/openwork |
| Launch YC: OpenWork - open source alternative to Claude Cowork | https://www.ycombinator.com/launches/Q3p-openwork-the-open-source-alternative-to-claude-cowork |
| GitHub different-ai/openwork（MIT，star/下载数、技术栈） | https://github.com/different-ai/openwork |
| Show HN: OpenWork 讨论（创始人自述、与 opencode 关系） | https://news.ycombinator.com/item?id=46612494 |
| 官网 openworklabs.com（定价/席位/企业版） | https://openworklabs.com/ |
| Y Combinator 官方 X 帖（14k stars / 150k 下载 / 企业私有化定位） | https://x.com/ycombinator/status/2047752437327360176 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
