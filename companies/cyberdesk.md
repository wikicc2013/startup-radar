# Cyberdesk

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-10 ｜ **再现记录**：B004
- **一句话定位**：Self-learning Windows computer-use agent（自学习的 Windows 电脑操作智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/cyberdesk
- **深研状态**：researched（活跃。YC S25 批次，2025 年 7 月中旬 Launch YC / Launch HN 发布，产品已在生产环境运行（EHR 建约、ERP 处理文件）。未见关停或被收购迹象。）

## 公司画像
- **团队**：2 人创始团队。Mahmoud Al-Madi（CEO）——莱斯大学电子工程本科，曾在贝勒医学院与德州儿童医院做 AI/ML 并合著论文，此前在一家财富 100 强公司把 RPA 方案铺到 2 万+员工；Alan Duong（CTO）——前 NASA 发射控制中心软件工程师，从莱斯大学 CS 辍学，曾任一家 PearX 投资（$2M 种子）AI 初创的创始工程师，自 2024 年 10 月 computer use 首发起就在该领域构建产品。
- **成立/批次**：2025
- **地点**：美国旧金山湾区
- **产品**：面向开发者的「自学习」Windows computer-use 智能体。开发者用自然英语描述任务并调用 API 触发 agent，专门自动化 EHR、ERP 等遗留 Windows 桌面应用。核心机制：首次执行时用 computer-use 视觉模型跑通任务并记忆轨迹，之后按记忆步骤确定性重放（官方称接近 100% 确定性、约 3 倍速、近乎零成本），仅在弹窗/异常时回退到 computer-use 模型再适应并更新轨迹。定位为「架在 computer use agent 之上的一层」，解决传统脚本一改就崩、纯 computer-use 又慢又贵又不确定的痛点。
- **商业模式**：面向开发者的 API 服务（agent-as-API）。开发者把 Windows 桌面自动化能力嵌入自己的产品，按 API 调用/任务触发。官网未公开具体定价（需预约 demo）。目标行业：医疗健康、供应链、企业软件等有大量遗留桌面系统的受监管领域。
- **竞争格局**：上游/替代品：Anthropic Computer Use、OpenAI Operator/CUA 等通用 computer-use 模型（Cyberdesk 声称在其上加确定性重放层）；传统 RPA（UiPath、Automation Anhere、Power Automate）——脚本化、易碎、改界面即断；微软 Copilot Studio computer use；以及同批新锐 computer-use / 桌面自动化创业公司。差异化卖点是「记忆+确定性重放，只在异常时才用昂贵模型」。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC S25（种子/加速器） | 未披露（YC 标准投资通常为 $500K；Crunchbase 记为 1 轮 Seed，具体金额与投资人未公开披露） | 2025 | [链接](https://www.ycombinator.com/companies/cyberdesk) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| OpenDental（作为被自动化的目标系统出现在官方用例中——某客户用 Cyberdesk 把患者数据录入 OpenDental 这一遗留牙科 EHR；OpenDental 本身是被操作对象而非付费客户） | 中 | [链接](https://www.ycombinator.com/launches/O4a-cyberdesk-the-computer-use-agent-for-developers-to-automate-legacy-windows-apps) |
| 未具名的医院患者入院（intake）AI agent 厂商——用 Cyberdesk 替代一整队人工在桌面应用里点击/录入以预约挂号 | 低 | [链接](https://fondo.com/blog/cyberdesk-launches) |

## 转型有术判断
1. **对制造业客户意味着什么**：Cyberdesk 的靶心是「遗留 Windows 桌面应用」，这恰是制造业的普遍现实：老 ERP（用友/金蝶老版本、SAP GUI 客户端）、MES、WMS、PLM、机台配套的专用上位机软件，大量没有 API、只有 Windows 图形界面。传统 RPA 在这些界面上跑，一旦供应商升级界面或弹个授权窗就断。Cyberdesk 的「记忆确定性轨迹 + 异常回退视觉模型」思路，对制造业意味着：那些「没有 API 的老系统集成」有望从脆弱脚本升级为「会自愈的 agent」——常态高速确定性执行，遇到界面变化不再彻底罢工而是自动重新学。对制造企业的 IT/数字化团队，这提供了一条「不改造老系统、不等供应商开 API」就能把订单录入、工单流转、质检数据回填、跨系统对账等重复桌面操作自动化的路径。
2. **国内对标厂商**：影刀 RPA / 实在智能 IPA（国内 RPA 头部，正加 AI/大模型做「智能体」升级，同样主打无 API 老系统自动化）、来也科技 UiBot（RPA+对话式 AI）、字节「扣子/Coze」、智谱等的 computer-use / GUI agent 探索（PC agent 方向）、阿里通义、面壁智能等的 GUI/computer-use agent 研究（记忆与技能复用方向对标其「自学习重放」思路）
   > 国内最贴近的对标是「RPA 厂商 + 大模型」这条线：影刀、实在智能、来也都在把传统录制式 RPA 往「大模型驱动的智能体」升级，痛点与 Cyberdesk 完全一致——大量老系统没 API、只能操作界面。差别在打法：国内 RPA 走「低代码录制 + 企业交付/项目制」，Cyberdesk 走「面向开发者的 API + 自学习确定性重放」的产品化路线，更轻、更偏基础设施。国内目前少有把「首次视觉跑通→记忆轨迹→确定性重放→异常才回退模型」这套成本结构讲得这么清楚的纯 API 产品，是可借鉴的差异化切口。
3. **可迁移的干法 / 应进场景词典的词条**：遗留系统自动化、无API集成、computer-use-agent、确定性重放、自愈自动化、桌面RPA升级、EHR/ERP数据录入
   > 可迁移的核心干法是「贵模型只跑一次、之后廉价确定性重放、异常再回退」——这是把 computer-use agent 从『每步都烧 token、慢且不确定』变成『可生产』的关键工程范式。对制造业与任何有大量老桌面系统的场景，可迁移三步：① 用视觉 agent 首次跑通一条重复桌面流程并记录轨迹；② 之后按轨迹确定性重放，控制在低成本、高速、可审计；③ 仅在界面变化/弹窗时触发模型重新学习并更新轨迹，形成自愈。这套「记忆-重放-回退」结构可套用到订单录入、跨系统对账、工单流转、质检回填、报关/物流单据填写等一切「没有 API 的重复界面操作」。
4. **风险与存疑点**：①护城河与被上游吞并风险：Cyberdesk 本质是架在 Anthropic/OpenAI computer-use 模型之上的「确定性重放层」，一旦底层模型自身把记忆/缓存/技能复用做进产品（或微软 Copilot Studio computer use 补齐），这层价值可能被压缩。②确定性重放的可靠性边界：遗留系统界面频繁变动、弹窗多、跨版本差异大，「记忆轨迹」在真实生产中能否稳定不误操作，是把 demo 变成规模化交付的最大工程与信任门槛，尤其在医疗、财务等错一步代价极高的受监管场景。③极早期、团队仅 2 人、无公开融资金额与具名付费客户：客户证据多为「某客户」「用例」层面，未见可交叉验证的具名 logo 或收入，商业化与团队扩张的执行风险高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Cyberdesk: Self learning computer use agent for developers | Y Combinator | https://www.ycombinator.com/companies/cyberdesk |
| Launch YC: Cyberdesk - The computer use agent for developers to automate legacy Windows apps | https://www.ycombinator.com/launches/O4a-cyberdesk-the-computer-use-agent-for-developers-to-automate-legacy-windows-apps |
| Launch HN: Cyberdesk (YC S25) – Automate Windows legacy desktop apps | Hacker News | https://news.ycombinator.com/item?id=44901528 |
| Cyberdesk | The computer use agent for Windows (官网) | https://www.cyberdesk.io/ |
| Cyberdesk Launches: The Computer Use Agent for Developers to Automate Legacy Windows Apps | Fondo | https://fondo.com/blog/cyberdesk-launches |
| Cyberdesk - Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/cyberdesk-9e2a |
| Cyberdesk (YC S25) | LinkedIn | https://www.linkedin.com/company/cyberdeskhq |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
