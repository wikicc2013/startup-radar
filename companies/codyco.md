# Codyco

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：AI phone receptionist for hotel groups（面向连锁酒店的 AI 电话前台）
- **官网/锚定**：https://www.ycombinator.com/companies/codyco
- **深研状态**：researched（极早期。2025 年成立、YC Fall 2025 (F25) 批次，产品线以 AI 电话预订/前台为主。官网 codyco.ai，公司主体 Codyco GmbH，位于德国慕尼黑。）

## 公司画像
- **团队**：三位联合创始人均出自慕尼黑 AI 咨询公司 Motius / Siemens 体系：Stefan Schaff（Motius 前 Head of Data & AI，主导西门子 €2M 发票分析重建、SAP→Snowflake/AWS 云迁移）、Endrit Bytyqi（Motius Senior Tech Specialist，做过整合 100+ 套 SAP 系统的西门子供应链报表）、Alexander Schober（在西门子做联邦学习异常检测 PyTorch/Ray，把 €60k PoC 做成 €500k+ 签约）。团队约 4 人。
- **成立/批次**：2025
- **地点**：德国慕尼黑（Munich, Germany）
- **产品**：面向连锁酒店集团的 AI 电话前台/预订团队。核心用法：酒店把前台漏接的来电转接给 Codyco，AI 接听、查实时房态与房价、完成订房与支付，并把预订直接写回酒店 PMS。支持 7×24、多语种。宣称对接 Opera Cloud、SIHOT、Apaleo 等主流 PMS。
- **商业模式**：面向连锁酒店的 B2B SaaS/用量计费，切入点是「漏接来电挽回」（宣称即便有呼叫中心和中央预订部门，酒店仍会漏掉约 5% 来电，多发生在夜间/高峰/假日）。以 ROI 挽回收入作为卖点；推广期用「AI Ambassador 合作」：免费 AI 策略工作坊 + 无风险试点（退款保证）+ 承诺 10 家以上门店送 3 个门店 3 年免费 license。
- **竞争格局**：同赛道直接对手是同为 YC 的 Riviera（YC W25，酒店 AI 语音代理）；更广义还有 Slang.ai、Numa（酒店消息/语音自动化）、Annette/HiJiffy 等酒店对话式 AI，以及通用电话语音代理平台（如各类 voice AI agent）。差异化在于「直连 PMS 写单 + 挽回漏接」这条闭环与欧洲/德语区落地。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / YC | $1.09M | 2025 | [链接](https://www.extruct.ai/hub/codyco-ai/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Revo Munich（慕尼黑酒店，YC Launch 视频案例） | 中 | [链接](https://www.ycombinator.com/launches/Oe7-codyco-ai-receptionists-for-hotel-groups) |
| 未具名 53 间客房酒店（4 周挽回约 $5,000 额外预订） | 中 | [链接](https://www.ycombinator.com/companies/codyco) |
| 上线 6 个月已服务 7 个酒店集团（未具名） | 中 | [链接](https://www.ycombinator.com/launches/Oe7-codyco-ai-receptionists-for-hotel-groups) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服，Codyco 演示的其实是一条可直接照搬的「漏接来电=漏掉的收入」闭环：把语音 AI 挂在被忽视的入站电话渠道上，不追求取代人工客服，只专攻人接不过来的时段（夜间、高峰、节假日），接听即查库存/价格、下单并回写核心业务系统。制造企业的备件订购热线、经销商/服务网点的报修与催货电话、售后 400 线，往往同样存在 5% 量级的漏接与非工作时间空窗，而每一通都是明确的订单或服务意向。可迁移点有三：① 以「挽回漏接」而非「全量替代」切入，ROI 可量化、阻力小；② AI 必须直连 ERP/CRM/备件系统写单，而不是只记留言，才形成闭环价值；③ 用「无风险试点 + 退款保证 + 多点承诺送 license」的落地打法降低传统行业客户的决策门槛。
2. **国内对标厂商**：Riviera（YC W25，酒店 AI 语音代理，最直接对标）、国内酒店 SaaS/PMS 侧：石基信息、别样红（BeyondTech）等在其系统上叠加 AI 前台的潜在方向、国内语音客服/呼叫中心 AI：容联七陌、百应科技、思必驰、腾讯云/阿里云智能语音客服——技术底座对标、垂直「AI 电话前台」创业：国内多为通用外呼/呼入机器人，尚缺酒店垂直 + PMS 直写的专精玩家
   > 国内没有严格等价物：语音客服能力（容联七陌、百应、思必驰、云厂商智能语音）早已成熟，酒店 PMS（石基、别样红）也有存量，但「垂直酒店 + 漏接挽回 + 直写 PMS 完成交易」这条窄闭环少有人专门做，多停留在通用呼入机器人或记留言层面。Codyco 的看点不是语音技术本身，而是把成熟语音能力钉进一个高频漏接、每通都是订单的垂直场景并打通交易系统——这对国内玩家的启示是「场景纵深 + 业务系统直连」比堆语音模型更值钱。
3. **可迁移的干法 / 应进场景词典的词条**：漏接来电挽回、语音AI前台、入站电话自动化、PMS/ERP直写下单、7×24多语种客服、无风险试点获客
   > 可迁移干法：把语音 AI 只挂在「人接不过来」的入站渠道（夜间/高峰/假日），定位挽回而非替代，让 ROI 一眼可算；接听后必须能查实时库存/价格并把结果直写核心业务系统形成交易闭环，而非停在记留言；获客用免费策略工作坊 + 退款保证 + 多点承诺送 license 的低门槛试点打法。制造业售后 400、备件订购、经销商报修/催货、服务网点排程都能照此改造。
4. **风险与存疑点**：① 极早期、信息稀薄：融资 $1.09M 系第三方数据平台（Extruct）口径，YC 官方未披露明确金额与轮次，客户多为未具名，7 个集团/$5,000 挽回等数字均来自自述，缺独立验证。② 赛道拥挤且有同批直接对手 Riviera 及一众酒店对话式 AI，护城河（PMS 直写、垂直 know-how）能否守住存疑；PMS 深度对接（Opera/SIHOT/Apaleo）工程与合规成本高。③ 依赖漏接率与转化率的 ROI 叙事，一旦酒店自身把控更好或大 PMS 厂商内建同类能力，价值被压缩；语音 AI 误订/超售/支付合规（GDPR、PCI）在酒店场景放大风险。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Codyco | Y Combinator 公司页 | https://www.ycombinator.com/companies/codyco |
| Launch YC: Codyco: AI Receptionists for Hotel Groups | https://www.ycombinator.com/launches/Oe7-codyco-ai-receptionists-for-hotel-groups |
| Codyco Funding: $1M | Extruct AI | https://www.extruct.ai/hub/codyco-ai/ |
| Codyco (YC F25) Company Profile | PitchBook | https://pitchbook.com/profiles/company/932042-98 |
| Endrit Bytyqi - Codyco | LinkedIn | https://www.linkedin.com/in/endrit-bytyqi/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
