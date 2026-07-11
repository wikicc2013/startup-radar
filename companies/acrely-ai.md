# Acrely AI

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B004
- **一句话定位**：Enterprise voice agents for on-prem deployments（面向本地部署的企业语音智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/acrely
- **深研状态**：researched（登记批次 B004 实为 YC S25（2025 夏季批），以 YC 官方目录为准。公司成立于 2025 年，最初做面向房产经纪的语音排程，因家庭服务（home services）商家主动上门询问，两周内 pivot 并拿下 6 家客户。官网仍保留『企业级语音智能体·云端+本地部署』的宽口径定位，但当前实际主打产品是家庭服务行业（HVAC/水暖/电工）的 AI 客服代表。）

## 公司画像
- **团队**：3 名联合创始人 + 团队约 6 人。Alek(Alexander) Stefanov（CEO，卡内基梅隆 CS，曾任 Caseflood.ai(YC W25) 创始工程师，获奖数学竞赛选手）；Derek Armfield（CTO，20 岁，卡内基梅隆 CS，做过月球车通信软件与自动驾驶赛车强化学习控制）；Felix Yang（首席工程师）。Alek 与 Derek 是匹兹堡长大的发小。
- **成立/批次**：2025
- **地点**：美国宾州匹兹堡 / 旧金山（YC 期间）
- **产品**：企业级语音智能体平台，当前主打『家庭服务行业 AI 客服代表』：自然接听来电、预约上门工单、派单给技师、跟进回访、永不漏接。直接对接 ServiceTitan 等 CRM，确保工单真正落库被预约而非仅记录。宣称同时提供云端与本地（on-prem）两种部署形态。
- **商业模式**：面向家庭服务承包商（HVAC/水暖/电工）的语音 AI SaaS/定制部署，卖点是替商家挽回因漏接电话而流失的月度营收；宽口径愿景是为企业在客服/销售/运营各环节定制语音智能体。具体定价未披露。
- **竞争格局**：语音 AI 客服/接线员赛道拥挤：垂直于家庭服务的 Avoca AI、Rilla、Sameday AI、Hostinger 类接线；水平语音 agent 平台 Retell AI、Vapi、Bland AI、Air.ai；以及 ServiceTitan 自身内建的 AI 接线能力。Acrely 差异点在于强调 on-prem 部署与深度 CRM 落单闭环。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Seed（S25 标准投资） | 约 $500K | 2025 | [链接](https://app.dealroom.co/companies/acrely_yc_s25_) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 6 家家庭服务承包商（HVAC/水暖/电工，未具名） | 中 | [链接](https://www.ycombinator.com/launches/OH3-acrely-the-ai-customer-service-representative-for-home-services) |

## 转型有术判断
1. **对制造业客户意味着什么**：Acrely 面向的是『高呼入量、漏接即漏钱』的服务型企业，对制造业的直接映射是售后服务、备件订购、现场维保调度与经销商热线：制造企业的 400 客服与区域服务中心同样存在夜间/高峰漏接、人工派单慢、工单不入系统的痛点。它给制造业的启发是——语音智能体的价值不在『会说话』，而在『把一通电话闭环成 CRM/ERP 里一张真正被排程的工单』，即与 ServiceTitan 这类行业系统的深度对接。制造企业若要复用，关键是把语音 agent 接到自家的售后工单系统（如 SAP CS、金蝶、现场服务派工平台），并善用其宣称的 on-prem 部署来满足工厂/集团对数据不出内网的合规要求。
2. **国内对标厂商**：晓多科技 / 追一科技（智能客服语音+文本，偏电商与大 B）、阿里云/火山引擎 语音对话式 AI 与呼叫中心方案（水平平台）、容联云、思必驰、云蝠智能（外呼/呼入语音机器人）、ServiceTitan 无国内直接对标——国内家庭服务派单更接近『到家』类平台内建调度，缺独立语音 agent 层
   > 国内语音客服/外呼机器人成熟（思必驰、容联云、晓多、追一等），但多为通用呼叫中心或电商客服，缺少 Acrely 这种『垂直家庭服务 + 深度对接行业派单 CRM + 云/本地双部署』的窄切法。国内最接近的场景是家电/暖通厂商的售后 400 与区域服务网点，目前仍以人工坐席+工单系统为主，语音 agent 落单闭环是空白。对标时要区分：国内玩家强在中文语音与规模化外呼，Acrely 强在与垂直业务系统的落单闭环与本地部署合规。
3. **可迁移的干法 / 应进场景词典的词条**：AI客服代表、语音智能体、漏接挽回、工单落单闭环、CRM深度对接、本地部署on-prem、派单调度、家庭服务/售后
   > 可迁移干法：①把『语音 agent』重新定义为『业务系统的语音前端』——衡量标准不是通话体验而是工单/线索的入库率与被执行率；②以单一垂直行业+一个主流行业 CRM（此处 ServiceTitan）做深度对接，形成模板化交付而非通用平台；③用 on-prem/私有化部署作为进入合规敏感或大客户（工厂、集团）的钥匙；④从『漏接=漏钱』这一可量化损失切入销售，ROI 叙事清晰。这些干法可平移到制造业售后热线、经销商订货热线、设备报修调度等场景。
4. **风险与存疑点**：①极早期、信息稀薄：成立仅 2025 年，客户 6 家且未具名，产品刚从房产 pivot 到家庭服务，PMF 未验证；②定位漂移风险：官网宽口径『企业级语音+云/本地』与实际窄切『家庭服务客服』不一致，on-prem 能力是否已交付存疑（launch 页未提部署细节）；③赛道极度拥挤且巨头环伺：Retell/Vapi/Bland 等平台与 ServiceTitan 自建 AI 会正面挤压，护城河主要靠对接深度与交付服务；④融资金额存在口径分歧（Dealroom 记 $500K，Extruct 聚合器记 $1M），以 YC 标准 $500K 为准，$1M 未证实。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Acrely: Enterprise Voice Agents | Y Combinator | https://www.ycombinator.com/companies/acrely |
| Launch YC: Acrely: The AI Customer Service Representative for Home Services | https://www.ycombinator.com/launches/OH3-acrely-the-ai-customer-service-representative-for-home-services |
| acrely (YC S25) — Dealroom.co | https://app.dealroom.co/companies/acrely_yc_s25_ |
| acrely.ai 官网 | https://www.acrely.ai/ |
| acrely (YC S25) — LinkedIn | https://www.linkedin.com/company/acrely-ai |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
