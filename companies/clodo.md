# Clodo

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B004
- **一句话定位**：Planet-scale AI people search（全球规模的 AI 人才搜索）
- **官网/锚定**：https://www.ycombinator.com/companies/clodo
- **深研状态**：researched

## 公司画像
- **团队**：2 人小团队（YC 记团队规模 2）。联合创始人兼 CEO Sid Rajaram，曾在 Blue River Technology、John Deere、Amazon、MinIO 做自动驾驶卡车/农业机器人/大规模训练基础设施的 AI 系统，早年独立做过 BunchOfAdvice.com（社区大学生职业指导，做到约 10 万用户）。联合创始人 Rithvik Chuppala，前 Databricks、Google、Nvidia、Citadel，UC Berkeley EECS 本硕。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco）
- **产品**：『行星级人物发现/搜索』（planet-scale people search）。用户用自然语言描述『我要找什么样的人』（潜在客户、候选人、领域专家、决策者），系统对约 13 亿实时网络画像做语义匹配，聚合招聘动向、博客、社媒活动、公开记录等多源信号，返回排序后的合格人选并补全经过验证的联系方式与意图信号，再可自动生成个性化外联（outbound）campaign。官网自述：13 亿+画像、平均每月节省 28+ 小时、已促成 11,800+ 会面、覆盖 43 个国家。
- **商业模式**：B2B SaaS（订阅制，官网未公开定价，需 Book a Demo）。核心是『自然语言 → 人选清单 + 联系方式富化 + 自动外联』一体化工作流，按人物搜索/富化/外联能力售卖，替代传统 filter 式数据库（如 ZoomInfo/Apollo）与人工 sourcing。
- **竞争格局**：国际对标：ZoomInfo、Apollo.io、Clay（GTM 数据富化）、LinkedIn Recruiter/Sales Navigator（人才与销售检索）、People Data Labs（人物数据 API），以及最直接的同代 YC 同名近邻 Clado（clado.ai，主打 people deep research）。Clodo 的差异点是『用一句话描述人而非配置一堆筛选器』的语义检索 + 全网 13 亿画像 + 富化与外联闭环。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC 标准投资 / Seed | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/clodo) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| U.S. News & World Report | 中 | [链接](https://clodo.ai/) |
| Rippling | 中 | [链接](https://clodo.ai/) |
| Antler | 中 | [链接](https://clodo.ai/) |
| Docura Health | 中 | [链接](https://clodo.ai/) |
| Acctual | 中 | [链接](https://clodo.ai/) |
| Eragon / Novoflow 及多家 YC 系初创 | 低 | [链接](https://clodo.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，Clodo 这类『自然语言人物搜索 + 富化 + 外联』工具在招聘·人力·用工上的价值在于把最难的两类『找人』变简单：一是稀缺技术岗（工业 AI、机器人、控制、数字孪生、精益改善专家、特定设备/工艺工程师），传统猎头与筛选器很难用一堆 tag 精确命中，而语义描述『在某类产线做过某工艺、发过相关专利或技术博客的工程师』更贴近真实用人画像；二是供应链/销售/BD 侧的对口决策人定位（找目标客户的采购负责人、找潜在经销商/集成商、找细分行业专家做技术调研）。制造企业 HR 与 BD 部门可借此把 sourcing 从『人肉翻 LinkedIn』变成『描述即清单』，显著压缩招聘前端与市场情报的工时（官网宣称月均省 28 小时）。但要注意其数据与合规重心在欧美（13 亿全球画像、43 国），对中国大陆蓝领/一线技工、国内工程师的覆盖和联系方式质量存疑，制造业主体用工（一线操作工、技师）并非它擅长的场景，它更适配高端/稀缺白领与技术岗的定点狩猎。
2. **国内对标厂商**：北森（一体化人力资本管理，含招聘/ATS，偏 HR SaaS 全家桶，非全网人物搜索）、Moka（招聘管理 + AI 面试/智能招聘，近年主打 AI Agent，偏企业内招聘流程）、猎聘 / BOSS 直聘（C 端人才库与撮合，海量国内候选人画像，但非语义『描述即搜』的富化外联工具）、探迹 / 销售易类销售线索工具（对应其 GTM/销售 prospecting 一面）
   > 国内没有与 Clodo 完全对位的产品：它横跨『招聘 sourcing』与『销售线索发现』两个在中国被不同赛道占据的市场。招聘侧最接近的是北森/Moka（但它们是企业内招聘流程 SaaS，人才库靠简历投递而非全网 13 亿画像语义检索）与猎聘/BOSS 直聘（有海量候选画像但玩法是平台撮合、非 API 式富化外联）；销售侧最接近的是探迹这类 B2B 线索挖掘工具。Clodo 真正的国内空白点是『一句话描述人 → 跨全网画像语义命中 → 补联系方式 → 自动外联』的一体化闭环，国内受限于个人信息保护（PIPL）与数据来源合规，很难有人做全网人物富化，这既是空白也是它进不来中国的原因。
3. **可迁移的干法 / 应进场景词典的词条**：自然语言人物搜索、全网画像语义检索、招聘 sourcing 自动化、GTM/销售线索发现、联系方式富化 enrichment、自动化外联 outbound、专家/决策者定位
   > 可迁移干法：把『描述即搜』的产品范式搬到企业内部——不必抓全网，就用企业自有的候选人库、客户 CRM、历史简历、专家名录做同样的『自然语言描述 → 语义命中 → 信号聚合 → 排序』。制造企业可做的：①内部人才盘点（用一句话找到『做过某产线某工艺、且有改善提案记录』的现有员工做内部调岗/项目组队）；②供应商/客户情报（把公开招投标、专利、技术博客等信号聚合成对口决策人清单）；③技术专家外脑库（研发选型/尽调时快速定位领域专家）。核心方法论是『用意图描述替代筛选器 + 多源信号聚合排序 + 富化闭环』，这套 pattern 对任何『找对的人/对的对象』的场景都通用。
4. **风险与存疑点**：①合规与数据来源风险：全网抓取 13 亿人物画像并补联系方式，在 GDPR/CCPA/PIPL 下有持续法律与封禁风险，进入中国市场几乎不可行；②护城河薄：仅 2 人团队、数据可被上游（People Data Labs 等）与巨头（LinkedIn、ZoomInfo、Clay）挤压，且同代同名近邻 Clado 高度同质，差异化主要靠模型/体验而非独有数据，易被复制；③早期不确定：成立于 2025、融资金额未披露（第三方聚合站有 ~$500K 记录但低置信），客户 logo 虽亮眼（Rippling、U.S. News 等）但多为试用/早期，商业化深度、留存与付费规模均未验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| CLODO - YC 公司目录页 | https://www.ycombinator.com/companies/clodo |
| Clodo 官网（产品/客户/数据） | https://clodo.ai/ |
| Sid Rajaram - CEO at CLODO, LinkedIn | https://www.linkedin.com/in/sidharthrajaram/ |
| Clodo - Crunchbase 公司资料 | https://www.crunchbase.com/organization/clodo-c4e0 |
| Clodo - Tracxn 公司资料（融资/竞品，第三方聚合，低置信） | https://tracxn.com/d/companies/clodo/__lEs7iObm6UJurwRvGi318RdPicHrW7nwg0Y0Q11ZSH0 |
| Founders Brief 访谈：How Sid Built Clodo | https://www.foundersbrief.vc/p/sidrajaram |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
