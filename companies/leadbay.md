# Leadbay

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：AI lead qualification for low-signal SMBs（面向弱信号中小客户的 AI 线索甄别）
- **官网/锚定**：https://www.ycombinator.com/companies/leadbay
- **深研状态**：researched（锚定成功。YC Fall 2025 (F25) 批次，官网 leadbay.ai、YC 目录、LinkedIn、多家融资数据库交叉印证。信息较充分（非极早期稀薄档）。）

## 公司画像
- **团队**：联合创始人 Ludovic Granger（CEO，此前在一家欧美 VC 任早期员工，运营过 300 人规模的销售社群）与 Milan Stankovic（CTO，人工智能博士，专攻数据稀缺环境下的 AI 建模）。团队约 8 人，位于美国旧金山。
- **成立/批次**：2024–2025（YC F25 批次；确切注册年份未披露）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向 B2B 销售的 AI 线索发现与甄别平台，专攻「弱信号/数据稀缺」的中小企业市场。核心主张：LinkedIn、Clay、ZoomInfo 等传统工具漏掉约 70% 的美国公司、只覆盖极小比例的数字意图信号。Leadbay 自研针对本地经济的推理模型，用极少数据即可像资深销售一样判断线索质量；在客户历史「赢单/丢单」数据上训练定制模型，surface 高意图线索，并用瀑布式富化（20+ 数据库）补齐决策人联系方式、给出预测性打分。功能含专有知识图谱评分、实时爬取与 CRM/ERP 信号整合、按用户 like/dislike 学习优化、GDPR 合规（含 DPO 服务）。用户输入一个公司邮箱/域名即可返回合格线索。
- **商业模式**：SaaS，freemium（约 50 条免费线索起步）+ 企业版定制方案（需 demo 询价）。具体价格未公开披露。
- **竞争格局**：直接对标 Clay、LinkedIn Sales Navigator、ZoomInfo、Apollo 等 B2B 线索/意图数据平台；差异化在于专攻这些平台覆盖不到的碎片化、低信号 SMB 长尾市场，用推理模型而非纯数据库匹配来补全与打分。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $4.3M | 2026-05-20 | [链接](https://founderlodge.com/round/Leadbay-YC-F25-raises-4300000-Seed-2026-05-20-Ludovic-Granger-MjU5OTk) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| L'Oréal | 中 | [链接](https://www.leadbay.ai/) |
| Saint-Gobain | 中 | [链接](https://www.leadbay.ai/) |
| Nespresso B2B | 中 | [链接](https://www.leadbay.ai/) |
| Gerflor USA | 中 | [链接](https://www.linkedin.com/posts/y-combinator_leadbay-yc-f25-discovers-and-qualifies-activity-7384619185055752192-MHvN) |
| Corgi | 低 | [链接](https://www.linkedin.com/posts/y-combinator_leadbay-yc-f25-discovers-and-qualifies-activity-7384619185055752192-MHvN) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服而言，Leadbay 击中的是「长尾经销商/终端客户开发」这个老大难。制造企业（尤其建材、涂料、地板、工业耗材、B2B 食品/设备）的真实买家往往是海量分散的中小施工方、装修公司、餐饮酒店、小型工厂——这些主体在 LinkedIn、企查查式数据库里几乎没有数字足迹，传统销售只能靠地推和熟人转介绍。Leadbay 用「在你自己赢单/丢单数据上训练模型 + 瀑布富化」的做法，把销售老兵的隐性判断显性化为可批量执行的线索打分，等于给区域销售团队装了一个「本地市场雷达」。对 Saint-Gobain、Gerflor 这类建材制造商已是实际买单方，说明该打法在工业分销场景已被验证——制造业 GTM 的价值不在再买一个通用数据库，而在能否把「谁是下一个会下单的小客户」从数据荒漠里捞出来。
2. **国内对标厂商**：探迹科技 Tungee（销售线索挖掘+智能获客，覆盖全国企业库+意图信号）、销售易/纷享销客 CRM 附带的智能线索模块、AMiner/水滴信用等企业数据服务（偏数据源，弱推理）、百炼智能（AI 销售线索与商机推荐）
   > 国内最接近的是探迹和百炼智能——都做「企业大数据 + AI 获客打分」。但国内玩家普遍强在数据源覆盖（工商/招投标/招聘信号），弱在 Leadbay 主打的「数据稀缺下的推理」；国内 SMB 长尾同样存在（大量个体工商户、小微施工队、餐饮门店在公开数据里信号极弱），且本土有微信生态、企查查、地图 POI 等独特信号源可挖，Leadbay 的方法论（在客户自有赢单数据上训练定制模型）在国内 CRM 厂商中尚未被充分产品化，是可借鉴的空档。
3. **可迁移的干法 / 应进场景词典的词条**：弱信号线索甄别、定制化赢单模型、瀑布式数据富化、长尾SMB获客、知识图谱评分、本地经济推理
   > 可迁移干法：①「拿客户自己的赢单/丢单历史当训练集」——比通用打分更贴合具体行业，制造企业完全可以用自家 CRM 成交记录复刻；②「瀑布式富化」——多数据源按优先级依次补全，命中即停，兼顾覆盖率与成本，适合任何需要拼客户画像的场景；③「like/dislike 在线学习」——把一线销售的即时反馈闭环进模型，是低成本让 AI 贴合业务的通用手法；④「域名/邮箱一键出线索」——把复杂检索收敛成极简输入，是 GTM 工具降低使用门槛的范式。
4. **风险与存疑点**：①数据合规与来源风险：靠多库富化+实时爬取补齐联系人，在 GDPR/各地隐私法下边界敏感，虽宣称有 DPO 合规服务，但爬取式获客长期存在法律与平台封禁风险。②护城河存疑：「弱信号推理」难以对外验证效果，大厂（ZoomInfo/Clay/Apollo）一旦补齐 SMB 长尾数据或叠加同类 AI，差异化可能被快速抹平；核心壁垒依赖模型而非独占数据。③早期与验证风险：种子轮 $4.3M、团队仅 8 人，L'Oréal/Saint-Gobain 等大牌客户多为 logo 展示，真实付费规模、留存与 ROI 主张（「5X 效率」「10 分钟胜过 Clay 半年」）均为自述、缺第三方佐证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Leadbay | Y Combinator 公司目录 | https://www.ycombinator.com/companies/leadbay |
| Leadbay 官网 — AI B2B Prospecting & Lead Qualification | https://www.leadbay.ai/ |
| Launch YC: Leadbay AI — 3x more SMBs than LinkedIn | https://www.ycombinator.com/launches/OdJ-leadbay-ai-3x-more-smbs-than-linkedin-qualify-the-99-you-miss-with-clay |
| Leadbay (YC F25) | LinkedIn | https://www.linkedin.com/company/leadbay |
| Founder Lodge — Leadbay 种子轮 $4.3M（2026-05-20） | https://founderlodge.com/round/Leadbay-YC-F25-raises-4300000-Seed-2026-05-20-Ludovic-Granger-MjU5OTk |
| TAMradar — Leadbay Raises $4.3M Seed | https://www.tamradar.com/funding-rounds/leadbay-seed-4-3m |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
