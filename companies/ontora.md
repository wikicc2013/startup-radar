# Ontora

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：AI agents that interview every employee to map how work gets done（逐一访谈员工、还原工作如何完成的 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/ontora
- **深研状态**：researched

## 公司画像
- **团队**：3 位联合创始人。Leon Iwanowitsch(曾为 Siemens、Mercedes 做企业 AI 咨询，圣加仑大学)、Maximilian Arnold(保时捷采购部门首位 AI 工程师，CODE University + 斯坦福 CS)、David Korn(Google 做过 AI 项目，曾把公司卖给 beglaubigt.de(YC F24))。YC 合伙人 Tom Blomfield。
- **成立/批次**：2026（YC Spring 2026 / X26·P26）
- **地点**：美国旧金山
- **产品**：部署 AI 智能体对公司每一位员工做一对一异步语音访谈(单次约 20 分钟，可并发最多 100 通)，像资深顾问那样追问，抽取流程、决策规则、所用工具、交接点和'只存在员工脑子里'的隐性知识，合成为结构化运营地图与'活的上下文层'(living context layer)。核心命题：一家公司约 80% 的运作方式从未被文档化。交付物四层：①主题化综合诊断(含影响力评级、CEO 可读执行摘要、员工原话引用、瓶颈定位，当天下午即可出)②'工作实际如何跨团队流动'可视化流程图 ③带 ROI 估算的自动化机会路线图 ④可喂给企业 AI 工具的专有上下文数据层。定位为'AI 转型的发现层'(Discovery Layer)。
- **商业模式**：按项目收费，单次约 $50K(对标麦肯锡式咨询 $500K+，且覆盖 100% 员工而非典型 10% 抽样)；持续访谈(非一次性)以保持上下文层实时刷新。
- **竞争格局**：公开材料未点名直接对手。间接对标传统管理咨询(McKinsey 等做流程诊断与 AI 转型规划)；方法论上与'逐岗访谈还原工作流'类工具(loop-work)同命题。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed(开正式轮前已募，仍在募资中) | 约 $700K | 2026 | [链接](https://www.ycombinator.com/launches/QiD-ontora-the-discovery-layer-for-ai-transformation) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Vertiv(战略经理 Julien Kang 具名背书) | 中 | [链接](https://ontora.com/) |
| 欧洲某媒体代理公司(800+ 员工，设计合作伙伴，未具名) | 低 | [链接](https://www.ycombinator.com/companies/ontora) |
| 旧金山某 PE 私募基金(设计合作伙伴，未具名) | 低 | [链接](https://www.ycombinator.com/companies/ontora) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造业'80% 运作靠老师傅脑子'的问题比一般企业更极端——排产逻辑、换型经验、质量判废的默会规则、跨车间交接的潜规则大多没进 MES/ERP。Ontora 式'逐人访谈→运营地图→自动化机会'的发现层，正好补上制造业 AI 落地最缺的第一步：先说清'工作实际怎么干的'，再谈自动化什么。可用于工艺工程师、班组长、计划员、质检岗的流程与决策规则抽取；但制造现场很多知识是手上动作/现场判断，纯语音访谈还原度有限，需配合现场观察。
2. **国内对标厂商**：未披露
   > 未发现直接对标的中国同类产品；国内相近方向散见于流程挖掘(process mining，国产 RPA 厂商附带的流程发现)与咨询公司数字化诊断服务，但'AI 智能体逐人访谈自动生成运营地图'这一形态在国内尚属空白，值得作为对标空位跟踪。
3. **可迁移的干法 / 应进场景词典的词条**：员工访谈自动化、流程发现/流程挖掘、隐性知识显性化、AI转型诊断、运营上下文层、自动化机会识别、异步语音AI访谈
   > 与'逐岗访谈还原工作流'(loop-work)方法几乎同命题，是极佳的外部验证与借鉴样本。相同点：都以'一线员工访谈'为原料、目标都是把默会流程显性化、都抽取决策规则/交接点/工具/瓶颈。可借鉴：①Ontora 把访谈本身也交给 AI 智能体(异步语音、可并发 100 通、资深顾问式追问)，实现'访谈环节的自动化'——这是 loop-work 走人工访谈时最重的成本项；②交付物明确分四层(诊断→流程图→带 ROI 的自动化路线图→可喂 AI 的上下文层)，层层递进且最后落到'给下游 AI Agent 供上下文'，比单纯出报告更闭环；③商业化用'$50K vs 咨询 $500K、覆盖 100% 而非 10% 抽样'做锚定叙事，对制造业岗位重构诊断的定价与话术有直接参考；④'持续访谈、活的上下文层'把一次性诊断变成订阅式常态化。
4. **风险与存疑点**：①极早期(2026 成立、3 人、开轮前仅 ~$700K)，'当天下午出诊断''48 小时数百次访谈'等多为自述，除 Vertiv 一条具名背书外客户均匿名；②纯语音/文本访谈对'手上功夫'类默会知识还原有限；③员工被 AI 逐一访谈涉及隐私与信任、可能被当作裁员/监控工具而抵触，落地依赖组织信任；④'把员工知识变成专有数据层'的数据合规与归属在欧洲/中国都敏感；⑤发现层(诊断)与执行层(真正落地自动化)之间仍有断层，能否证明诊断真带来自动化 ROI 是关键考验。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Ontora — YC 官方公司页 | https://www.ycombinator.com/companies/ontora |
| Launch YC: Ontora - The Discovery Layer for AI Transformation | https://www.ycombinator.com/launches/QiD-ontora-the-discovery-layer-for-ai-transformation |
| Launch YC: Ontora - Read your company like a book | https://www.ycombinator.com/launches/PyU-ontora-read-your-company-like-a-book |
| Ontora 官网 ontora.com | https://ontora.com/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
