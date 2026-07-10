# Notte Labs

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：Browser infrastructure for AI agents（面向 AI 智能体的浏览器基础设施）
- **官网/锚定**：https://www.ycombinator.com/companies/notte
- **深研状态**：researched

## 公司画像
- **团队**：5 人团队。联合创始人 Andrea Pinto（CEO）与 Lucas Giordano（CTO），相识 6 年，两人此前均在 MIT、Oracle、IBM Research 从事 ML/LLM 研究，技术出身、深耕 Web 自动化方向。
- **成立/批次**：2025 年
- **地点**：美国旧金山（San Francisco）为主，瑞士苏黎世（Zurich）亦有运营；早期具瑞士背景。
- **产品**：面向 AI 智能体的浏览器基础设施平台，主打企业级浏览器 agent 的构建与部署。核心是一层「感知层（perception layer）」——把网页转成对 LLM 友好的结构化数据/动作 API，让 agent 可编程地点击、填表、导航、执行多步工作流。提供托管云浏览器会话（带隐身/stealth 模式）、AI 浏览器 agent、Serverless 浏览器函数、浏览器 profile、凭证与鉴权 vault、数字人格（用于批量注册账号）、代理 IP、CAPTCHA 处理、支付处理、文件 I/O、实时查看（live view）、会话回放、可观测性；兼容 Playwright、Puppeteer、Selenium、CDP。开源框架（GitHub nottelabs/notte），主张脚本化确定性步骤 + 只在必要时调用 AI 的混合工作流，宣称可降本 50%+ 并提升可靠性。
- **商业模式**：企业级 SaaS + 开源框架双轨。开源框架获客与社区，商业化靠托管浏览器基础设施（云会话/函数/vault/回放等）按用量收费。定位服务需要大规模、可靠 Web 自动化的企业客户。
- **竞争格局**：浏览器基础设施 / computer-use 赛道竞争激烈：Browserbase、Browser Use、Steel.dev、Hyperbrowser、Anchor Browser 等同类浏览器 infra；以及 Anthropic Computer Use、OpenAI Operator 等模型侧 computer-use 能力构成上游替代压力。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed | $2.5M | 2025-07-18 | [链接](https://www.vestbee.com/insights/articles/notte-secures-2-5-m) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造业大量后台流程仍靠人在浏览器里点：供应商门户下单/对账、海关与物流平台报关查单、政府/认证网站资质申报、经销商系统录入、招投标平台信息抓取。这类「有网页、无 API」的长尾系统正是浏览器 agent 基础设施的用武之地——用带凭证 vault + 会话回放 + 可观测性的托管浏览器，把这些跨系统搬运工作交给可审计的 agent，比传统 RPA 更能扛页面改版（self-healing）。
2. **国内对标厂商**：浏览器基础设施对标：目前国内尚无强对标，方向可参照做 Web 自动化/RPA 的厂商向 agent infra 演进、computer-use / GUI agent 对标：智谱 AutoGLM、面壁智能 AgentCPM-GUI、阿里通义 Mobile-Agent 等 GUI/computer-use 智能体方向、RPA 转 AI agent：影刀 RPA、实在智能、来也科技 UiBot 等在向 agentic 自动化迁移
   > 国内直接对标浏览器 infra 的创业公司稀缺，更多是 RPA 厂商（影刀、实在、来也）和 GUI-agent 研究方向（AutoGLM 等）在各自延伸。Notte 的差异在于把「浏览器基础设施」做成独立可售的一层，而非绑定在某个 RPA 产品里——这是国内值得借鉴的产品化切法。
3. **可迁移的干法 / 应进场景词典的词条**：浏览器基础设施、AI-agent-infra、computer-use、Web自动化、RPA升级、数据抓取、表单自动填写、CAPTCHA处理、云浏览器会话、开源框架
   > 可迁移打法：①开源框架获取开发者+社区，商业化收托管 infra 的钱（GitHub 引流 → 云会话计费）；②核心壁垒放在「感知层」——把网页转成结构化动作 API，降低 agent token 成本与出错率；③混合工作流（确定性脚本 + 按需 AI）作为对企业的可靠性/成本话术；④凭证 vault、隐身、代理、CAPTCHA 这些「脏活」打包成企业级卖点。
4. **风险与存疑点**：①上游模型替代风险大：Anthropic Computer Use、OpenAI Operator 若原生把浏览器操作做好，infra 层价值被压缩；②赛道拥挤，与 Browserbase/Browser Use 等正面竞争，2.5M pre-seed 弹药相对有限；③「数字人格批量注册账号」「stealth/隐身模式」「CAPTCHA 绕过」等能力有合规与滥用风险，企业客户与目标网站可能反制；④早期无公开客户名单，商业化验证待观察；⑤公司地理（旧金山/苏黎世）与融资信息在不同来源略有出入（另有来源称由 4DX Ventures 领投），需以官方口径为准；⑥社媒出现 $NUIT 加密代币关联信息，与主线企业叙事关系不清，存在品牌噪声风险。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
