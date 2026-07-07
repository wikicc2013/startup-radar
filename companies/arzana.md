# Arzana

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：AI automation for the manufacturing office（制造业办公室的 AI 自动化）
- **官网/锚定**：https://www.ycombinator.com/companies/arzana
- **深研状态**：researched

## 公司画像
- **团队**：联合创始人 William Alexander(CEO，成长于爱荷华 Okoboji，家乡为制造业采购公司工作，斯坦福经济学+计算机科学)与 Marshall Kools(COO，斯坦福工程+政策硕士，前 D1 摔跤运动员)；2025 年创立，团队约 5 人。
- **成立/批次**：2025（YC Spring 2026 / P26·前 X26）
- **地点**：美国旧金山(另设爱荷华 Okoboji、威斯康星 Appleton 办公室，贴近制造业客户)
- **产品**：面向美国制造商与分销商的『办公室执行系统』(Office Execution System, OES，自比'前台办公室的 MES'/制造商的自主 ERP)。在工厂历史数据上训练定制模型，部署 AI Agent 打通邮件、ERP，自动化报价(RFQ 解析、定价校验、生成报价)、订单录入、开票、采购、客服等重复前台工作；提供独立 Agent 与可深度定制的 Arzana ERP 两种形态。官网宣称报价/订单处理快 10 倍、数据录入错误减 70%、上线周期<4 个月。
- **商业模式**：SaaS 订阅，按工具与集成计费，约 $2000–4500/月起，主打中端制造商与分销商；预置 SAP/Oracle/NetSuite/Epicor/Infor/Dynamics/Sage/QuickBooks 等连接器，宣称客户多在首月内 ROI、可省 $100 万+人力成本。
- **竞争格局**：对标传统 ERP/MES(Epicor、Infor、SAP)在前台自动化的空白，及一批面向制造/后台的 AI Agent 初创；差异在'训练工厂自有历史数据的定制模型 + 覆盖报价到订单的前台全链路'。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed(含 YC 投资) | 约 $500K | 2026 | [链接](https://pitchbook.com/profiles/company/1153535-23) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Milltown Paper | 中 | [链接](https://www.arzana.com/) |
| Iowa Mold(Iowa Mold Tooling 疑似) | 中 | [链接](https://www.arzana.com/) |
| Koike | 中 | [链接](https://www.arzana.com/) |
| Givi | 中 | [链接](https://www.arzana.com/) |
| Zeiss(官网 logo 墙，深度/合同未披露) | 低 | [链接](https://www.arzana.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Arzana 精准切在制造企业'订单进厂前'的前台黑洞：报价、订单录入、开票、采购这些高频、规则化却强依赖企业私有历史数据与话术的环节，长期由内勤人员手工在邮件与 ERP 间搬运。它把这类工作定义成'最后一位办公室员工'，用工厂自有数据训练定制模型，直接落进现有 ERP/邮件流，而非要求换系统——对惧怕 ERP 更换风险的中端制造商极具落地性。
2. **国内对标厂商**：合思等费控报销 AI(前台单据自动化类比)、金蝶/用友 ERP 的 AI Agent 与智能报价、智能订单模块、黑湖智造、鼎捷等制造后台/MES 侧自动化、采购/寻源 SaaS 上的 AI 报价与 RFQ 处理(震坤行等)
   > 国内暂无一家'制造业前台 AI 自动化'的直接对标：金蝶/用友在做 ERP 内嵌 AI，费控赛道解决报销单据，工业品分销在做采购数字化，但把'RFQ→报价→订单→开票'前台全链路打包成 Agent 产品、并以工厂私有数据训模型的整合玩家尚属空白。
3. **可迁移的干法 / 应进场景词典的词条**：制造业前台自动化、报价/RFQ 自动生成、订单录入自动化、开票与采购自动化、ERP/邮件 Agent 集成、中端制造商与分销商、定制模型训练(工厂历史数据)、内部销售/客服 AI
   > ①锚定'前台重复劳动'而非'换系统'，嵌入现有 ERP/邮件降低迁移阻力；②用客户自有历史报价/订单数据训练定制模型形成数据护城河；③贴近产业带设点(爱荷华、威斯康星)而非只守一线城市，用地推+行业口碑打中端市场——国内可复制到长三角/珠三角制造集群；④以可量化 ROI(首月回本、省百万人力)做话术；⑤远期从前台向车间(MES/机器指令)延伸。
4. **风险与存疑点**：①融资仅约 $500K pre-seed、团队 5 人，早期抗风险弱；②官网客户 logo(Zeiss、Koike 等大牌)多为展示，深度与合同规模未披露，疑'logo 营销'放大，置信度需下调；③报价/订单高准确率要求，AI 出错代价高，模型定制成本可能压毛利；④与 Epicor/Infor 等在位 ERP 及一批同期 AI Agent 初创正面竞争；⑤'2035 年自动化一万家工厂'愿景短期不可验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Arzana: The autonomous ERP for every manufacturer \| Y Combinator | https://www.ycombinator.com/companies/arzana |
| Arzana 官网 | https://www.arzana.com/ |
| Arzana FAQ - Office Execution System (OES)(定价/集成) | https://arzana.ai/faq/ |
| Arzana 2026 Company Profile \| PitchBook | https://pitchbook.com/profiles/company/1153535-23 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
