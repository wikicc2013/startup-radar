# Peppr

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Real-time AI copilot for sales calls（面向销售通话的实时 AI 副驾）
- **官网/锚定**：https://www.ycombinator.com/companies/peppr-ai
- **深研状态**：researched（登记批次 B006 记为 W25。以 YC 官方目录与 LinkedIn 一手来源确认，实为 Y Combinator Winter 2025（W25）批次，公司名 Peppr AI，官网 usepeppr.ai。需与同名餐饮 POS 品牌 Peppr（德国餐饮支付/POS）区分——本条为面向销售通话的实时 AI 副驾，二者无关。）

## 公司画像
- **团队**：创始人 Sachitt Arora、Nitya Arora（兄妹/家族关系，姓氏相同）。团队 4 人，均为佐治亚理工（Georgia Tech）背景，对外自述团队有 2 次此前退出（prior exits，具体标的未披露）。Nitya Arora 佐治亚理工计算机科学学士，曾有 NVIDIA 相关技术背景；Sachitt Arora 亦为佐治亚理工 CS 背景。YC 对接合伙人 Harj Taggar。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco），另设 Cupertino 办公点
- **产品**：实时销售通话 AI 副驾（in-call AI teleprompter）。通话进行时以实时悬浮层监听客户对话，在对方问题问完前即浮出经审核的标准答案（技术规格/定价/异议处理），并建议深挖式发现型问题；不打断通话节奏。答案接地于企业既有知识库，官方称对接 40+（早期材料称 150+）企业工具（Slack、Salesforce、HubSpot、Notion、Confluence、Gong、Zendesk、Google Workspace、Microsoft Teams 等）。副产能力：把通话内容自动沉淀为 battle card、知识条目、通话纪要与下一步，实现「知识库随对话自更新」，并给使能团队（enablement）暴露对话在哪里断裂的可见性。早期还打过「AI 知识捕获平台」的定位——自动从 Slack/Notion/Jira 摄取生成内部文档、留存组织记忆。
- **商业模式**：SaaS。Freemium + 企业版：免费提供 battle card / playbook；付费解锁进阶（实时话术教练、遵从度评分、自治知识库更新等）；企业部署支持自有 VPC、SSO/SAML、RBAC，宣称 SOC 2 Type II、99.9% SLA。面向销售/客户成功/AE/售前/支持等一切客户面对面角色，客群从初创到数千销售代表的大企业。
- **竞争格局**：赛道拥挤且同批同题：YC 内即有 Nomi（X25，实时销售副驾）、Caretta（Realtime AI for Sales Calls）等直接对手；更广看包括通话智能/收入智能既有玩家 Gong、Clari(Wingman)、Chorus、Salesloft，以及实时话术引导类的 Attention、Momentum、Wonderway/Second Nature（教练侧）。差异点自述在「实时、<1 秒答案 + 接地企业知识 + 通话内容反哺知识库」的闭环。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed/Seed（含 YC 标准投资） | 约 $500K（第三方数据库口径，未经公司确认） | 2025-02（Crunchbase 另记 2025-03-12 一轮） | [链接](https://www.crunchbase.com/organization/peppr-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Citrix | 中 | [链接](https://www.ycombinator.com/companies/peppr-ai) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服，Peppr 触到的是「复杂产品 + 长销售周期 + 技术型问答」这一最痛的场景。工业品销售常在客户抛出规格、认证、兼容性、交期、定价梯度等技术细节时卡壳——代表要么当场答不上（deferring，跟进拖长决策），要么凭记忆答错埋下合规/报价风险。实时副驾把散落在 PLM/ERP/技术文档/历史工单里的「一手正确答案」在通话中秒级接地浮出，等于给每个销售代表配了一个随叫随到的产品工程师+报价员，既提升首答率又统一口径。同样逻辑可平移到工业售后/客服热线（技术支持实时取用维修知识与备件信息）与经销商/渠道赋能（把总部产品知识实时下沉到渠道一线）。副产的「通话→知识条目自更新」对制造业尤有价值：老师傅、资深应用工程师的隐性问答经验被沉淀为可复用资产，缓解技术销售人才断层。
2. **国内对标厂商**：深维智信 Megaview（会话智能/销售 SaaS，偏事后分析与教练，实时侧较弱）、循环智能 Circular（对话数据+大模型，销售会话洞察，近年转 AGI 应用）、百应科技/容联云等智能客服·外呼厂商（实时话术辅助更偏呼叫中心场景）、腾讯企点/销售易等 CRM 自带的 AI 助手（通话/沟通辅助为附加能力，非专注实时副驾）
   > 国内暂无与 Peppr「B2B 复杂销售·通话中<1秒接地企业知识」高度对位的独立产品。会话智能一派（Megaview、循环智能）强在事后复盘与合规质检，实时「通话中喂答案」这一最难的低延迟+高准确接地环节仍是空白；客服外呼一派（百应、容联云）有实时话术弹屏，但场景是标准化呼叫中心、知识颗粒粗，够不到工业品那种技术型长尾问答。对国内做企业销售/售前工具的团队，这是一个「拿海外范式 + 国产大模型 + 本土 CRM/IM（企微、飞书、钉钉）生态」可切的缺口。
3. **可迁移的干法 / 应进场景词典的词条**：实时销售副驾、通话中知识接地、技术型问答秒答、知识库自更新、销售使能可见性、售前/技术销售提效
   > 可迁移干法：一是「实时接地」范式——把企业分散在多系统的权威答案，在人对话的当下低延迟检索并浮出，可平移到工业售后热线、经销商赋能、现场服务工程师；二是「对话反哺知识库」的飞轮——每通电话自动产出 battle card 与知识条目，无需专人维护，可用于把制造企业里资深销售/工程师的隐性经验系统性资产化；三是「使能可见性」——用通话断点数据定位团队在哪类技术问题上普遍失分，反向驱动产品文档与培训。落地时抓手是先接一两个高频卡壳的技术问答域做窄而深的实时接地，跑通首答率再横向扩品类。
4. **风险与存疑点**：①极早期、资金薄（约 $500K 口径未经确认）、团队仅 4 人，YC 之外融资信息稀薄，产品与商业化仍在验证；②赛道极度拥挤且同质——同批 YC 就有 Nomi/Caretta 等实时销售副驾，上有 Gong/Clari 等重资源在位者，护城河尚不清晰，实时接地的延迟×准确度是硬技术门槛也是同质点；③「通话中监听客户对话」触及隐私合规（双方同意录音、GDPR/各地法规）与企业数据安全，进大客户需过 SOC2/VPC 等门槛，Citrix 类灯塔客户为自述、深度与留存未经独立核实。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Peppr AI — Y Combinator 官方公司页（W25） | https://www.ycombinator.com/companies/peppr-ai |
| Peppr 官网 usepeppr.ai | https://www.usepeppr.ai/ |
| Peppr AI — Product Hunt | https://www.producthunt.com/products/peppr-ai |
| Peppr AI — LinkedIn 公司页（YC W25） | https://www.linkedin.com/company/peppr-ai |
| Sachitt Arora — 联合创始人 LinkedIn | https://www.linkedin.com/in/sachittarora/ |
| Peppr AI — Crunchbase（融资/投资人） | https://www.crunchbase.com/organization/peppr-ai |
| Peppr — Tracxn 公司档案 | https://tracxn.com/d/companies/peppr/__u8f-v6-GqqQNkew_nG_YVc2oC42G4jA9h5o7SX28xas |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
