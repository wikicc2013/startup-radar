# Meteor

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B004
- **一句话定位**：Agentic browser with 96.5% WebVoyager accuracy（WebVoyager 准确率 96.5% 的智能体浏览器）
- **官网/锚定**：https://www.browse.dev/
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人，均来自华盛顿大学(UW)并辍学创业。Pranav Madhukar（CEO）——在 UW 做过被数千学生使用的病毒式校园项目，曾募集超 $100k 校方经费；Farhan Khan（CTO）——曾开发一款硬件设计 IDE，编译速度号称比行业标准快 60 倍。团队规模约 2 人（YC 目录登记）。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco）
- **产品**：Meteor 是基于 Chromium 深度 fork（3000 万行代码，编译需 8 小时+、200GB+ 磁盘）自建的「AI 原生/智能体浏览器」，官网口号 The World's Most Intelligent Browser。核心是内置浏览智能体，用自然语言 prompt 即可代替用户在网页上完成任务：加日历、比价机票、在 Amazon 购物、填表、跨站点搬运数据、生成表格、甚至技术操作（如配置 S3 桶）。另含四项能力：Browser Agent（WebVoyager 96.5%）、原生 AdBlocker、Chat Anywhere（任意标签页调 AI，免复制粘贴）、Connect to any app（接入 Gmail/Google Calendar 等）。官网自称 WebVoyager 榜单 #1，准确率 96.5%。
- **商业模式**：面向消费者/知识工作者的桌面浏览器（Chrome 替代品），官网提供 Download 与 Sales 入口，暗示同时走个人下载与销售（潜在企业/付费）双路径；具体定价与免费/付费分层未披露。
- **竞争格局**：正面对标 Google Chrome（创始人公开喊话「kill Chrome」）；智能体浏览器赛道直接竞品包括 Perplexity Comet、The Browser Company 的 Dia、OpenAI 传闻中的浏览器、Opera Neon、Fellou、Genspark 等；广义上与 Browserbase/Browser-use 等「浏览器 agent 基础设施」及 OpenAI Operator 类通用网页 agent 竞争。差异化卖点是 WebVoyager 96.5% 的高准确率 + 完整 Chromium fork 的原生体验。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 未披露 | 未披露 | 未披露 | [链接](https://www.ycombinator.com/companies/meteor) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的意义主要在「Browser 即通用执行层」这一范式。制造企业大量后台工作卡在没有 API、只有网页/老旧门户的系统上——供应商门户下单、报关/物流平台录单、政府质检与认证网站填报、经销商后台比价对账、ERP/MES 之外的一堆 SaaS 手动搬数据。一个 WebVoyager 96.5% 级别的浏览器智能体，意味着这些「有网页就能干」的重复流程可以用自然语言托付给 agent，而不必为每个老系统做定制集成。对制造业 IT 而言，这是一条绕过「系统孤岛无 API」难题的低成本自动化捷径；但 96.5% 的基准分对应到工厂真实门户（验证码、动态表单、强合规场景）会显著打折，短期更适合内部低风险、可人工复核的场景（比价、信息采集、录单草稿），而非直接放开采购下单/报关提交等高风险动作。
2. **国内对标厂商**：纳米 AI 浏览器 / 360 AI 浏览器（360）——国内消费级 AI 浏览器，内置智能体做网页操作与总结、豆包 / 夸克 AI 浏览器（字节、阿里）——大厂把 AI agent 塞进浏览器入口，走流量+助手路线、Fellou（国内团队出海的 agentic browser）——同赛道最接近的智能体浏览器创业公司、浏览器 agent 基础设施侧对标：面向开发者的网页自动化/RPA-as-agent（可类比国内 RPA 厂商影刀、来也在往 agent 化演进）
   > 国内在「AI 浏览器」入口上是大厂主导（360、字节豆包、阿里夸克），打法是把 AI 助手/agent 作为流量入口的增值功能，而非像 Meteor 那样 fork Chromium 重做一款独立浏览器并用公开基准（WebVoyager）打排名。创业侧最接近的是 Fellou 这类专攻 agentic browser 的团队。Meteor 的差异是「基准驱动 + 完整 fork」的硬核工程路线；国内更偏「入口捆绑 + 场景补全」。对制造业落地而言，国内厂商在中文长尾门户、合规系统上的适配度可能反而更接地气，但通用网页任务准确率的公开可比数据缺失。
3. **可迁移的干法 / 应进场景词典的词条**：智能体浏览器、网页任务自动化、无API系统对接、自然语言RPA、WebVoyager基准、Chromium-fork
   > 可迁移的干法有三条：①「用浏览器 agent 打通无 API 的老系统」——凡是供应商门户、政府/合规网站、经销商后台这类只有网页没有接口的系统，都可以用自然语言让 agent 代操作，替代人工录单或昂贵定制集成；②「用公开基准(WebVoyager)背书能力」——把模糊的『AI 很智能』变成可验证的准确率数字，是 to B 建立信任的有效话术，制造业 AI 供应商可借鉴用行业任务集做可复现基准；③「Chat Anywhere / 任意页面调 AI」——把 AI 从独立窗口变成贴合工作流的随手能力，这种『AI 长在工具里而非另开一个入口』的产品思路，对制造现场的 MES/看板等场景同样适用。
4. **风险与存疑点**：①功能尚未被独立验证——96.5% WebVoyager 为官方自述，缺第三方复现；真实企业网页（验证码/动态表单/合规）准确率会大幅下降。②团队极小（约 2 人、创始人在校辍学）、成立于 2025、融资与营收数据不透明（聚合站 $62.4M 疑与同名老公司 Meteor.js 混淆，未采信；另有站点称其 bootstrapped），资金与持续性存疑。③赛道拥挤且巨头下场（Chrome/Perplexity Comet/Dia/OpenAI），一个 fork-Chromium 的两人团队面临分发渠道、维护 3000 万行代码、安全合规（agent 代操作账号/支付的权限与责任）等重压，护城河与商业化路径尚不清晰。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Meteor 官网 browse.dev（WebVoyager 96.5%、四大能力） | https://www.browse.dev/ |
| Meteor: An AI-Native Browser | Y Combinator 公司页 | https://www.ycombinator.com/companies/meteor |
| Launch YC: Meteor: an AI-Native Browser（产品/技术细节） | https://www.ycombinator.com/launches/O9o-meteor-an-ai-native-browser |
| GeekWire: UW students join YC to launch AI-powered browser 'to kill Chrome' | https://www.geekwire.com/2025/on-a-mission-to-kill-google-chrome-uw-students-join-y-combinator-to-launch-ai-powered-browser/ |
| American Bazaar: Meteor is the new AI 'agentic browser' | https://americanbazaaronline.com/2025/08/11/meteor-is-the-new-ai-agentic-browser-466088/ |
| Meteor (YC S25) LinkedIn 公司页 | https://www.linkedin.com/company/browsedotdev |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
