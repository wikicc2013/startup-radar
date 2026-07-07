# Sidekick

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：Natural-language workflow automation platform（自然语言驱动的工作流自动化平台）
- **官网/锚定**：https://www.ycombinator.com/launches/OD3-sidekick-automation-for-the-rest-of-us
- **深研状态**：defunct（已关停/被收购）

## 公司画像
- **团队**：两人创始团队。Tom Greenwald（CEO，东北大学 CS，前 SimpliSafe 产品经理）与 Anders Lie（CTO，爱荷华州立大学 CS 与数学，前 AWS 工程师）。同一团队在 YC S25 期间多次转向：Magnitude（开源模型编码 Agent）→ Sidekick（对话式自动化）→ Sagekit（AI 写作工作台，已关停）→ 现回到 Magnitude。总部旧金山。
- **成立/批次**：2025（Sidekick 产品线于 2025 年 8 月由 Magnitude 转向而来；YC Summer 2025 批次）
- **地点**：未披露
- **产品**：自然语言驱动的工作流自动化平台，定位「Lovable for automations」。左侧聊天输入需求，右侧实时生成可视化 workflow；AI 自动处理循环、条件分支、错误处理等复杂逻辑。集成 Google 套件（Gmail/Calendar/Drive/Docs/Sheets）、HubSpot、Notion、Linear、Slack，含 AI 调用与网页抓取能力，并提供 pipeline review、每日销售简报等模板。目标是替代 Zapier 对非技术用户过陡的学习曲线。
- **商业模式**：免费起步（freemium），具体付费档位未披露。面向销售/市场/运营团队的自助自动化 SaaS。
- **竞争格局**：直接对标 Zapier；同类还有 Make、n8n 等传统 iPaaS，以及 Lovable 式「聊天生成」类工具。YC S25 同批 Trace 亦做工作流编排。第三方 teardown 指出其弱点：逻辑黑盒不透明、调试困难、模板难以差异化定制、易造成厂商锁定。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业的 IT/运营侧存在大量跨系统「搬运工」流程（订单同步、报表汇总、异常告警、供应商往来邮件回填 ERP/MES）。Sidekick 式「一句话生成自动化」对没有 RPA 团队的中小制造厂尤其有吸引力：业务人员自己描述即可搭建 Gmail↔Sheets、CRM↔ERP 的轻量流程，无需专业实施。但制造现场核心系统（MES/PLC/工业协议）集成深、合规与稳定性要求高，纯对话式黑盒难以覆盖，更适合从边缘办公流程切入。
2. **国内对标厂商**：影刀 RPA（面向业务人员的低代码/对话式自动化）、实在智能（Agentic RPA，自然语言生成流程）、来也科技/UiBot（智能自动化平台）、钉钉宜搭 / 腾讯轻联（低代码 iPaaS + AI 编排）、阿里云百炼 / 扣子 Coze（对话式 Agent 编排）
   > 国内影刀、实在智能、来也已把「自然语言→流程」做进 RPA 主线，且深耕本土 SaaS/OA 生态（钉钉/企微/金蝶/用友），落地成熟度高于 Sidekick 这类早期海外产品。Sidekick 的独特点仅在于「聊天即所得 + 实时可视化」的交互体验，护城河薄。
3. **可迁移的干法 / 应进场景词典的词条**：自然语言生成工作流、对话式自动化、iPaaS / 应用集成、销售运营自动化、AI Agent 编排、低代码/无代码、SMB 自助自动化
   > 可迁移的打法：①「Lovable for X」——把生成式 UI/实时可视化搬到自动化搭建，降低非技术用户门槛；② 以 Google/办公套件等高频轻场景为楔子获客，再向纵深系统渗透；③ 编码 Agent 底座（Magnitude）复用为自动化执行引擎，一套技术多产品试错。
4. **风险与存疑点**：① 团队在一年内三次转向（Magnitude→Sidekick→Sagekit→Magnitude），Sidekick 产品线实质已被放弃，joinsidekick.com 已跳转至同样关停的 Sagekit，属 defunct；② 产品差异化弱、逻辑黑盒、易被 Zapier/Make 等在位者用 AI 功能覆盖；③ 未见任何融资金额与具名客户的公开来源，商业验证不足。对标学习价值大于跟投价值。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Launch YC: Sidekick - Automation for the rest of us | https://www.ycombinator.com/launches/OD3-sidekick-automation-for-the-rest-of-us |
| Magnitude YC 公司页（现产品，含创始人背景/地点/团队规模） | https://www.ycombinator.com/companies/magnitude |
| Tom Greenwald：Magnitude 转向 Sidekick 的公告（LinkedIn） | https://www.linkedin.com/posts/t-greenwald_we-are-pivoting-well-not-really-magnitude-activity-7366146053760360448-gkRB |
| Sagekit YC S25 公司页（同团队后续 AI 写作产品，已关停） | https://www.ycombinator.com/companies/sagekit |
| sagekit.com（joinsidekick.com 现跳转至此，显示 no longer available） | https://sagekit.com/ |
| Brand Ripper Teardown #025: Sidekick（第三方产品拆解与弱点分析） | https://brandripper.com/teardown-025-sidekick/ |
| FounderTrace: Sagekit (YC S25) 创始人与批次 | https://foundertrace.com/companies/sagekit_yc_s25/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
