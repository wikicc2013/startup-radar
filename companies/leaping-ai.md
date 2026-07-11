# Leaping AI

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Voice AI agents for enterprise calls（面向企业通话的语音 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/leaping-ai
- **深研状态**：researched（批次登记为 B006，但官方一手来源（YC 目录 / Launch HN）确认为 YC W25（2025 冬季批），非 W25 以外批次。公司 2023 年创立于柏林，被 YC W25 录取后迁往旧金山。）

## 公司画像
- **团队**：三位联合创始人：Kevin Wu（CEO，前 BCG，Amazon 呼叫中心实习经历为创业灵感来源）、Shraey Bhatia、Arkadiy Telegin（自主机器人背景）。团队成员背景来自 Microsoft、BCG、IBM Research。种子期规模。
- **成立/批次**：2023
- **地点**：美国旧金山（原创立于德国柏林，因入选 YC W25 迁至旧金山；德国仍有业务与客户）
- **产品**：面向中大型企业与呼叫中心的语音+短信 AI 智能体平台，用于客户服务、销售线索资格审核（lead qualification）与预约排期。核心差异化：把语音 Agent 拆成「多阶段、图状（graph-like）」流程，对每个阶段单独评测，可把错误/回归定位到具体阶段，再自主改写该阶段 prompt 并做 A/B 测试，实现「自我改进（self-improving）」。宣称可自动化最高 70% 的客服通话并维持约 90% 满意度。
- **商业模式**：B2B SaaS / 语音 AI 平台，按呼叫中心场景部署，支持多线程外呼与短信 campaign（可跨数周运行）；面向 home remodeling、roofing、pay-per-call、旅游、零售、健康保险/Medicare、房地产等行业的中大型企业与 BPO。
- **竞争格局**：语音 AI Agent 与呼叫中心自动化赛道：Vapi、Retell AI、Bland AI（语音 Agent 基础设施）；Sierra、Decagon、PolyAI、Cognigy（企业级对话/客服 Agent）。Leaping 的定位差异在「多阶段图状编排 + 自动评测/自我改进」，切入复杂长流程呼叫中心而非简单 FAQ。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $4.7M | 2025 | [链接](https://leapingai.com/blog/ai-startup-leaping-ai-raised-4-7-m-for-ai-voice-agents) |
| 合计（第三方汇总，口径不一） | 未披露（Tracxn 称累计约 $10.2M/3 轮；PitchBook 口径约 $5.58M，未获一手确认） | 2025 | [链接](https://pitchbook.com/profiles/company/550261-99) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Hawesko（德国最大葡萄酒零售商） | 高 | [链接](https://leapingai.com/) |
| Thompson Creek Window Company（家装门窗） | 中 | [链接](https://leapingai.com/blog/home-service-company-automated-appointments-and-sales) |
| 某牙买加 BPO 呼叫中心（ACA/平价医疗法案预审呼叫，日均 >5000 通） | 中 | [链接](https://leapingai.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业（尤其做家装建材、设备、耐消品的厂商）而言，Leaping 的价值不在「工厂车间」而在「厂商的营销·销售·客服前台」。制造企业越来越多地绕过经销商做 DTC 与到家服务（如门窗、屋顶、家装建材），其呼入呼出通话量大、流程长（资格审核→报价→预约上门→回访），传统靠人力呼叫中心或外包 BPO，成本高、夜间/高峰漏接严重。Leaping 这类「多阶段可评测、自我改进」的语音 Agent，可承接预约排期、销售线索资格审核、逾期未完成订单的外呼挽回（案例中 1 周转化 30% 未完成 onboarding 的线索，等效人工 5 周），把制造商的售前售后电话前台自动化 50-70%，并让区域销售/客服人员从接线转向高价值的方案沟通与上门转化。对国内制造企业出海（尤其面向欧美 to-C 渠道）尤具参考：语言、时区、合规（如医疗保险预审）都是人力呼叫中心的痛点。
2. **国内对标厂商**：追一科技（Zhuiyi）——企业级智能语音客服/外呼、思必驰 AISpeech——对话式语音 AI 平台与呼叫中心方案、容联云/容联七陌——云通讯+智能客服外呼、百应科技——AI 外呼与营销获客、循环智能（Recurrent AI）——销售会话智能与外呼辅助、阿里云智能语音（云小蜜）/百度智能云（智能外呼）——大厂语音客服中台
   > 国内语音客服/外呼赛道成熟且拥挤，追一、思必驰、容联、百应等在中文语音识别、行业话术、合规外呼上积累深厚，但多数仍是「流程配置 + 人工调优」的传统对话流范式。Leaping 的真正差异化——把 Agent 拆成图状多阶段、每阶段自动评测、prompt 自主 A/B 自我改进——在国内厂商中尚不普遍，这正是 LLM 时代语音 Agent 的「评测驱动迭代」新范式，是国内对标厂商可反向学习的方向。国内厂商的优势在中文语料、本地行业 know-how 与合规外呼资质。
3. **可迁移的干法 / 应进场景词典的词条**：销售线索资格审核、预约排期自动化、外呼挽回/未完成订单激活、呼叫中心 70% 自动化、语音 Agent 自动评测与自我改进、BPO 前置预审分流
   > 可迁移干法：①把一次长通话拆成「图状多阶段」（问候→意图识别→资格审核→报价/答疑→预约/转人工），对每阶段单独设评测指标，出问题能定位到具体环节而非整通话黑箱；②用「自动 A/B 改写单阶段 prompt」替代人工反复调话术，让 Agent 在真实通话中自我迭代；③人机分工用「预审分流」——AI 承接海量重复的资格审核与预约，只把合格线索转人工，等效把人力产能放大数倍。这套「阶段化拆解 + 评测驱动自改进 + 预审分流」的方法论可迁移到任何长流程、大话务量的售前售后场景。
4. **风险与存疑点**：①批次/融资口径存疑：登记为 B006 但实为 YC W25，且累计融资各第三方口径不一（$4.7M 种子有一手来源，$5.58M/$10.2M 均未获官方确认），引用时需谨慎；②极早期公司（2023 创立、2025 完成种子轮），客户案例多为自披露、缺第三方审计，宣称的 70% 自动化/90% 满意度需存疑；③赛道极度拥挤（Vapi/Retell/Sierra/Decagon 等大量玩家 + 大厂下场），语音 Agent 基础设施同质化风险高，护城河（自我改进评测）能否形成壁垒待观察；④合规风险：医疗保险预审（ACA/Medicare）、外呼营销涉及严格合规（TCPA、录音授权、医疗数据），一旦踩线影响大客户。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Leaping AI: AI voice and texting agents | Y Combinator | https://www.ycombinator.com/companies/leaping-ai |
| Launch HN: Leaping (YC W25) – Self-Improving Voice AI | https://news.ycombinator.com/item?id=44523523 |
| AI Startup Leaping AI raised $4.7M for AI Voice Agents（官方博客） | https://leapingai.com/blog/ai-startup-leaping-ai-raised-4-7-m-for-ai-voice-agents |
| Leaping AI 官网（产品与客户案例） | https://leapingai.com/ |
| How a Home Service Company automated appointments with Voice AI（官方案例） | https://leapingai.com/blog/home-service-company-automated-appointments-and-sales |
| Leaping AI — Basis Set Ventures Portfolio | https://www.basisset.com/portfolio-companies/leaping-ai |
| Leaping AI — Orange Collective Portfolio | https://www.orangecollective.vc/portfolio/leaping-ai |
| Leaping AI (YC W25) Company Profile | PitchBook | https://pitchbook.com/profiles/company/550261-99 |
| Leaping AI - Company Profile, Team, Funding | Tracxn | https://tracxn.com/d/companies/leaping-ai/__WgfT-mhZyGYcRzc_H6vYRgQqTRa-sNP9bqD_xRQF-kA |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
