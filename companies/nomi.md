# Nomi

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：Real-time AI sales copilot for live calls（面向实时通话的 AI 销售副驾）
- **官网/锚定**：https://www.ycombinator.com/companies/nomi
- **深研状态**：researched（锚定确认为 YC 这家 B2B 实时销售副驾（nomi.so，前身 HeyNomi），已与陪伴聊天机器人 Nomi.ai 明确区分。批次登记为 B005 备注 YC X25——X25 是 YC 2025 春季（实验/扩展）批次，YC 官方公司页显示为「Spring 2025」，两者一致。地点存在分歧：YC 公司页标注 Paris, France（创始人为法国背景），LinkedIn/聚合站标注 San Francisco，判断为法国创办、YC 期间落地旧金山，取 Paris/SF 双记。融资：多家聚合站给出「$28.5M / Coatue / monashees / FasterCapital」等数字，与一家 2025 年成立、5 人的 YC X25 早期公司严重不符，判定为同名实体混淆（聚合噪声），不采信，以未披露记。）

## 公司画像
- **团队**：创始人 Swan Beaujard（@nullswan，负责技术/产品）与 Ethan Safar 两位联合创始人，法国背景。团队约 5 人。（部分聚合站把 'Emily Bennett' 列为第三位创始人，未见一手来源佐证，不采信。）
- **成立/批次**：2025
- **地点**：法国巴黎创办，YC 期间落地美国旧金山（Paris, FR / San Francisco, CA）
- **产品**：面向实时通话的 AI 销售副驾。接入 Zoom / Google Meet / Teams，实时转写通话并在关键时刻（客户异议、成交信号、追加销售机会）给出「即用话术」建议：更好的挖需提问、异议处理、竞品对标 battle card、下一步动作。技术上用「Thinking Model + 战术选择器 + 轻量 LLM+RAG」组合，把建议延迟压到 500ms 以内。通话后自动生成 CRM 记录、行动项、并发一封复盘邮件（哪里做得好/不好/如何改进）。playbook 用强化学习从 Top Sales 的成功模式中自动提炼并持续进化。免费提供 AI 记录/转写/纪要。集成 Salesforce / HubSpot / Pipedrive。SOC 2 Type II、GDPR、CCPA、AES-256。
- **商业模式**：Freemium。AI 记录/转写/纪要永久免费引流，实时副驾与高级 playbook/CRM 能力为付费档（官网未公开具体定价）。按销售席位订阅的 SaaS 逻辑。
- **竞争格局**：实时/通话智能与销售赋能赛道，对标 Gong、Chorus(ZoomInfo)、Clari Copilot(原 Wingman)、Salesloft、Attention、以及新一批实时提词类 AI 副驾。Nomi 差异点主打「通话进行中即时提示」（500ms 内）而非事后复盘，切早期/founder-led sales 到 revops 的成长路径。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC X25（种子前/加速器标准投资） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/nomi) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，其营销·销售·客服环节大量依赖工程师型销售与代理商在电话/视频里做技术答疑、异议处理与报价谈判，而这些人往往「懂产品不懂销售话术」。Nomi 这类实时副驾的价值在于：把资深销冠的谈判套路、竞品对标 battle card、常见异议应答固化成可实时调用的「话术外脑」，让新手工业销售在通话当场就能拿到「该怎么问、怎么接、下一步报什么」。对制造业尤其关键的是——工业品销售周期长、SKU 复杂、技术参数多，实时把产品手册/竞品参数/历史成交案例通过 RAG 喂到销售耳边，能显著降低对个别资深人员的依赖；通话后自动回写 CRM 与生成复盘，也解决了工业销售「跑客户不填系统」的老大难。落地约束是：多数工业销售发生在展会、车间、线下拜访而非视频会，纯线上通话副驾的覆盖面有限；且工业客户对录音合规、图纸/报价泄密敏感，私有化与合规是准入门槛。
2. **国内对标厂商**：循环智能（Recurrent AI）——对话智能起家，会话洞察+实时坐席辅助，最贴近、深维智信 Megaview——SaaS 会话智能/销售赋能，Gong 式复盘对标、百应科技/容联云——外呼+实时坐席助手（更偏电销/客服呼叫中心）、阿里/腾讯系智能客服与坐席辅助（大厂通用能力，非纯销售副驾）
   > 国内最接近的是循环智能与深维智信（Megaview）——都做「会话智能+销售赋能」，能做通话转写、复盘打分与坐席实时提示，商业逻辑与 Nomi 高度重合，但国内玩家更偏电销/呼叫中心场景与合规外呼，Nomi 更聚焦视频会议里的 B2B 复杂销售与 founder-led sales；容联云、百应偏客服/电销坐席辅助，场景更靠前端海量呼叫。整体看，国内『实时提示（通话中）』能力已有布局但成熟度参差，Nomi 的 500ms 内实时话术+RL 自进化 playbook 是可借鉴的产品锚点。
3. **可迁移的干法 / 应进场景词典的词条**：实时销售副驾、会话智能、通话中即时提词、异议处理RAG、playbook自进化、CRM自动回写、founder-led-sales赋能
   > 可迁移干法：把『事后复盘』升级为『过程中实时干预』——即在业务发生的当下、而非结束后给出建议。这套「实时转写→意图/信号识别→战术选择→RAG 取话术→500ms 内提示→事后自动沉淀 CRM+复盘→RL 更新 playbook」的闭环，可平移到任何依赖话术与经验的现场交互岗位：制造业的技术售前/客服热线、经销商谈判、招商路演、甚至现场巡检答疑。核心方法论有三：①把销冠隐性经验显性化为可实时调用的战术库；②用低延迟架构（thinking model 做慢思考、轻量 LLM 做快响应）平衡质量与速度；③用强化学习让 playbook 从真实成交数据里自我进化，而非靠人工维护知识库。
4. **风险与存疑点**：①同名混淆与信息稀薄：Nomi 是通用词，与陪伴机器人 Nomi.ai 及其他同名实体在聚合站严重混淆，融资/团队数据多为噪声，早期公司一手信息极少，尽调难度大。②护城河单薄：实时提词能力正被 Gong、Clari、Salesloft 等在位者及大量新创快速内卷，500ms 延迟与 playbook 自进化是否构成足够壁垒存疑，易被巨头顺手集成。③合规与场景约束：通话录音/转写涉及双方同意、数据隐私（GDPR/CCPA 已备但企业采购仍会重审），且核心场景绑定视频会议，覆盖不到大量线下/电话销售；实时提示若打断销售自然节奏或建议失准，反噬信任。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Nomi | Real-Time AI Sales Copilot for Live Calls（官网） | https://www.nomi.so/ |
| Nomi: Realtime Sales Copilot | Y Combinator | https://www.ycombinator.com/companies/nomi |
| Launch HN: Nomi (YC X25) – Copilot for Sales | https://news.ycombinator.com/item?id=44098706 |
| Launch YC: Nomi - Copilot for Sales | https://www.ycombinator.com/launches/NZJ-nomi-copilot-for-sales |
| HeyNomi Becomes Nomi: The YC Sales AI Rebrand | https://www.nomi.so/blog/2025-10-01-heynomi-becomes-nomi |
| Nomi (YC X25) LinkedIn | https://www.linkedin.com/company/nomihq |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
