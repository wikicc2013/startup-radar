# Parrot

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：Agentic operating system for auto repair shops（汽修门店的智能体操作系统）
- **官网/锚定**：https://www.ycombinator.com/companies/useparrot
- **深研状态**：researched

## 公司画像
- **团队**：2 人。联合创始人 Phillip Baek(CEO，曾在 Amazon 实习做传统行业工作流自动化)与 Liam McBride(CTO，UIUC 计算机工程，硕士退学，专注应用机器学习与系统自动化)。
- **成立/批次**：2026（YC Spring 2026 / P26，原 X26）
- **地点**：美国加州旧金山湾区
- **产品**：面向汽修/碰撞修理门店的端到端 AI 智能体操作系统(AI-native OS for auto repair shops)，主打碰撞修理(collision)门店。系统理解门店全上下文(估价单、配件、客户、保险公司、供应商、付款)，AI 语音智能体可真实拨打/接听电话协调：估价复核、配件采购(语音致电供应商比价锁价)、保险理赔跟催、报税、发票对账、收款开票、库存管理、技师派工、接听来电预约。三周前从其他方向 pivot 至此。
- **商业模式**：面向汽修门店的垂直 SaaS + 智能体自动化，按门店年费订阅。已知锚点：两家独立门店以每年 $30K 签约。对标 ServiceTitan(家服)、Procore(建筑)、Toast(餐饮)等垂直行业 OS。
- **竞争格局**：横向对标 ServiceTitan/Procore/Toast；汽修管理软件既有玩家 Shopmonkey、Tekmetric、Mitchell/CCC 碰撞估价系统为潜在正面竞争，差异点在于用语音智能体替代人工电话作业。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 两家独立汽修门店(未具名)，各以 $30K/年签约 | 中 | [链接](https://www.ycombinator.com/launches/QdR-parrot-ai-native-os-for-auto-repair-shops) |
| Apex Auto Collision(Austin, Texas，店主 Edwin Garcia，官网证言) | 中 | [链接](https://www.useparrot.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Parrot 本质是'把一个高度电话化、多方协调的传统线下服务，用能真实打/接电话的语音智能体端到端接管'。对制造业的迁移价值在采购与供应链协同：供应商比价询价、催货催单、对账(发票 vs 订单)、与客户/保险/物流的电话级往返，这些在制造企业采购、订单履约、售后备件同样普遍且仍靠人工电话+邮件。核心方法是'系统先掌握全上下文(订单/BOM/库存/供应商/付款)，再让智能体去与真人协调'，而非孤立的呼叫机器人。
2. **国内对标厂商**：途虎养车(汽车后市场门店与 SaaS 化连锁)、天猫养车/新康众(阿里系汽配供应链+门店赋能)、京东京车会、开思/门店通(汽配供应链撮合与门店管理，开思接近其'配件采购比价'环节)、保险系定损/估损系统(对应理赔与估价环节)
   > 国内汽车后市场已被途虎、天猫养车/新康众、京车会高度整合，供应链侧有开思/巴图鲁配件撮合，估损侧有保险系定损系统。Parrot 走'轻门店订阅+语音智能体替代人工作业'的软件路线，且深绑美国碰撞修理特有的保险定损理赔博弈(adjuster supplement 谈判)，这一环在中国车险直赔/送修体系下形态不同，不能简单照搬。
3. **可迁移的干法 / 应进场景词典的词条**：汽车后市场、汽修门店、碰撞修理/collision、垂直行业操作系统、语音AI智能体、保险理赔自动化、配件采购比价、发票对账、估价复核、门店排产派工
   > ①先用 AI-native OS 沉淀某垂直业务的完整数据上下文(估价/配件/客户/保险/付款)，把碎片信息结构化；②在此之上让语音智能体承接'高频、低创造性、需与外部真人电话往返'的协调工作(比价、催款、催理赔、预约)；③以'相当于多请几个永不下班的人'作为 ROI 话术切入中小门店，用可量化省时/回款作签约锚点($30K/年/店)。制造业可复制到备件采购、供应商催交、售后报修调度。
4. **风险与存疑点**：①极早期：2 人团队、2026 成立且三周前刚 pivot，仅 2 家门店签约，未披露机构融资，PMF 未验证；②强依赖美国碰撞修理保险理赔生态，护城河受地域制度约束，出海/跨垂直迁移成本高；③语音智能体代打电话涉及准确性、合规(录音告知、错误承诺责任)与供应商/保险方接受度风险；④面对 Shopmonkey/Tekmetric/CCC/Mitchell 等在位软件竞争。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Parrot: AI-native operating system for auto shops \| Y Combinator | https://www.ycombinator.com/companies/useparrot |
| Launch YC: Parrot - AI-native OS for auto repair shops | https://www.ycombinator.com/launches/QdR-parrot-ai-native-os-for-auto-repair-shops |
| Parrot 官网 useparrot.com | https://www.useparrot.com/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
