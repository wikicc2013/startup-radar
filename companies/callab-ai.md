# Callab AI

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B001
- **一句话定位**：AI voice agents for on-prem telephony stacks（面向本地电话系统的 AI 语音智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/callab-ai
- **深研状态**：researched（锚定成功。YC Spring 2026（对应页面标注 P25/X26/P26 命名混用）B2B Operations 类。官网 callab.ai + YC 目录 + Crunchbase + 创始人 LinkedIn 四源交叉一致。极早期，融资金额未披露。）

## 公司画像
- **团队**：联合创始人 Haithem Kchaou（CEO）与 Chehir Dhaouadi（CTO/创始工程师）。团队约 7 人。Kchaou 为二次创业者，曾把一款移动应用做到 20 万+下载，主导过一项面向 30 万+学生免费开放 LLM 的国家级 AI 项目，合著 2 篇 LLM 微调/数据采集论文，Thomas Jefferson Scholar。Dhaouadi 有中东北非（MENA）电信/VoIP 系统建设与规模化经验，在政府数据中心部署过本地 LLM 实例，培训过 300+ 开发者。两位创始人具 MENA 电信背景，公司后迁至旧金山。YC 对接合伙人 Tom Blomfield。
- **成立/批次**：2024
- **地点**：美国旧金山（团队起源于 MENA，Crunchbase 部分资料仍标注阿布扎比/前身 ClusterLab）
- **产品**：云端 AI 语音智能体平台，通过 SIP trunk 直接对接企业既有的本地（on-prem）PBX 电话系统——呼叫被路由到 Callab 的 AI 坐席处理后再返回原系统，作为 SIP 原生端点接入，无需替换或迁移。定位替代传统 IVR：AI 坐席能听懂并当场解决来电诉求。宣称对接 Avaya、Cisco UCM、Mitel、FreeSWITCH 等老旧 PBX，可在一周内上线，自动化多达 70% 的来电话务量。用例覆盖呼叫路由、预约排期、订单状态、客户咨询、外呼营销、线索资格判定；支持 CRM 双向集成（通话前拉取上下文、通话后回写结构化记录）。
- **商业模式**：面向拥有本地 PBX 存量资产的企业的 B2B SaaS/话务自动化。核心卖点是「零迁移、不做 rip-and-replace」——切入 4000 亿美元呼叫中心市场中约 58% 仍跑在本地 PBX 的存量。具体计价（按坐席/按分钟/按解决量）未披露。
- **竞争格局**：云呼叫中心/CCaaS 与语音 AI 赛道：一端是要求上云的 CCaaS（Five9、Genesys Cloud、Twilio、Amazon Connect）；另一端是语音 AI 智能体新锐（如 Retell AI、Vapi、Bland、PolyAI、Sierra 等）。Callab 的差异化在于不逼客户迁移、直接寄生在 on-prem PBX 上的 SIP 接入策略。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 未披露 | 未披露 | [链接](https://www.crunchbase.com/funding_round/clusterlab-c02e-pre-seed--5caaa3de) |
| YC Spring 2026 标准投资 | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/callab-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Dunkin' Donuts（多份二手来源引用其「横跨三大洲」客户中提及；官网未出现企业 logo，采信度中） | 中 | [链接](https://altss.com/companies/yc/callab-ai) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，Callab 的价值不在「又一个语音机器人」，而在「不动存量」这四个字。大量制造企业的呼叫中心、经销商热线、售后报修线、备件订单线仍架在 Avaya/Cisco UCM/Mitel 这类用了 10~20 年、投入巨大的本地 PBX 上，IT 换机成本与停机风险极高，正是 AI 语音落地最大的现实障碍。Callab 用 SIP trunk 寄生式接入，让「AI 坐席」以增量方式挂到老系统旁，一周上线、自动化 70% 来电，把「要不要上云」这个大决策降维成「要不要给现有电话线加个 AI 分流」的小决策——这对预算保守、以稳定压倒一切的工厂 IT 尤其重要。可落地的高频场景：备件/订单状态查询、报修工单登记与派单、经销商/代理商咨询分流、售后预约排期、催收与账期提醒（外呼）。本质是把制造业客服·销售·售后中「重复问答+信息登记」这层用 AI 兜住，人工只处理升级件。
2. **国内对标厂商**：阿里云智能语音交互/云小蜜（智能外呼与语音客服，偏云侧）、百度智能云 AI 呼叫中心 / 循环智能、思必驰、云蝠智能等语音 AI 外呼厂商、容联云、天润融通等 CCaaS 厂商的 AI 语音坐席模块、得助智能（中关村科金）、智齿科技等一体化智能客服/呼叫中心
   > 国内对标厂商大多以「云呼叫中心 + AI 坐席」整包出售，商业逻辑偏向让客户上其云平台；Callab 的反向切口是「不碰你的云、只挂你的本地 PBX」。国内同样有海量制造/政企客户困在本地程控交换机与老旧呼叫中心上，谁能做出「SIP 寄生、零迁移、一周上线」的轻接入产品，谁就能吃到这批「想用 AI 又不想换系统」的存量客户——这是国内智能语音厂商普遍还没重点打的缝隙，对反向情报是一个值得盯的差异化信号。
3. **可迁移的干法 / 应进场景词典的词条**：on-prem PBX 寄生接入、SIP-trunk 零迁移、IVR 替代、语音客服自动化、AI 外呼、存量系统 AI 增量改造
   > 最可迁移的干法是「寄生于存量、零迁移增量上 AI」这一打法本身：不要求客户拆掉旧系统，而是找到一个标准协议接口（这里是 SIP），把 AI 作为旁挂端点插进去，用最小改动换最大自动化率。这套逻辑可平移到制造业其它 legacy 系统改造——比如在老 MES/SCADA 旁挂 AI 分析端、在老 ERP 旁挂 AI 交互层、在传真/邮件订单流上挂 AI 抽取。对推动工厂 AI 落地，「降低决策门槛、不惊动核心系统」比「功能更强」往往更能成交。
4. **风险与存疑点**：①极早期、信息稀薄：融资金额未披露，官网客户仅有匿名头衔的证言、无企业 logo，Dunkin' Donuts 客户仅见二手来源，落地规模真实性待验证。②护城河存疑：SIP 接入本身门槛不高，CCaaS 大厂与语音 AI 新锐都可复制「on-prem 接入」，一旦市场被验证极易被巨头下场碾压。③本地 PBX 环境碎片化（Avaya/Cisco/Mitel/FreeSWITCH 各版本+企业自定义拨号计划），实施与运维成本可能远高于「一周上线」的宣传，规模化交付是主要执行风险；叠加语音幻觉/误处理在客服·催收场景的合规与信任风险。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Callab AI — Y Combinator 公司主页 | https://www.ycombinator.com/companies/callab-ai |
| Callab AI 官网 | https://callab.ai/ |
| Callab AI 官网 · Integrations 页 | https://callab.ai/integrations |
| Callab AI — YC Company Profile (Altss) | https://altss.com/companies/yc/callab-ai |
| Callab AI — Crunchbase 公司/融资资料 | https://www.crunchbase.com/organization/clusterlab-c02e |
| Haithem Kchaou — LinkedIn（Callab AI 联合创始人 CEO） | https://www.linkedin.com/in/haithemkchaou/ |
| Chehir Dhaouadi — LinkedIn（Callab AI 联合创始人） | https://www.linkedin.com/in/chehirdhawedi/ |
| Callab AI — The YC Tier List (S26) | https://yctierlist.com/s26/callab-ai/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
