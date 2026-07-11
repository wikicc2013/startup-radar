# Clado

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：AI-driven platform for deep people search（面向深度人才搜索的 AI 平台）
- **官网/锚定**：https://www.ycombinator.com/launches/NbA-clado-deep-research-for-people
- **深研状态**：researched（本目标为 Clado（clado.ai，Deep Research for People），已与 Clodo（clodo.ai）明确区分。批次登记为 B005，但多方一手来源（YC 公司页、YC 官方社媒、BetaKit）均标注为 YC X25（2025 冬季批），非 S25；官方口径以 YC X25 为准。公司 2025 年 5 月正式上线，属极早期。）

## 公司画像
- **团队**：两位联合创始人 Eric Mao（UPenn M&T 双学位项目）与 Tom Zheng（UCSD），两人小学同学、均为在校大一新生，此前共同创办过非营利组织并拿下加拿大最大数据科学/物理竞赛。收购 Jaimy 后，其创始人 Jefferson Ding、Rohin Arya 加入团队。团队分布于旧金山与多伦多两地。
- **成立/批次**：2025（2025 年 5 月正式上线）
- **地点**：美国旧金山 + 加拿大多伦多（分布式）
- **产品**：面向深度人才/人物搜索的 agentic 平台。用户用自然语言描述目标人群画像（如「对生物学感兴趣、在哥本哈根的 AI 工程师」「美英中型会计师事务所的高管」），平台部署海量并行 LLM 智能体（官方称逾 10 万个 agent）在 2 亿+（部分口径 8 亿+）职业档案上逐条判定是否匹配，返回带 LinkedIn 链接与联系方式富集的候选名单。官方称在人物搜索与联系方式检索基准上达 SOTA。核心场景横跨销售线索开发、招聘寻访、表格批量补全。
- **商业模式**：SaaS，面向招聘团队、销售团队、VC 的 B2B 人物搜索工具；支持「Monitors」订阅——当有新的人选匹配既定条件时自动通知（VC 找创始人、招聘持续寻访）。官方页未公开具体定价与套餐；商务通过 cal.com/clado/chat 预约。自 2025 年 5 月上线以来月环比增长约 60%。
- **竞争格局**：对标传统人才/线索数据平台与新兴 agentic 搜索：海外有 LinkedIn Recruiter、Apollo.io、ZoomInfo、Clay、Juicebox（PeopleGPT）、HeyMilo 等；Clado 差异点在于用大规模并行智能体做复杂语义匹配而非关键词筛选，并主打联系方式检索准确率。曾以 300 万美元全股票收购同类人物搜索平台 Jaimy 以整合网络图谱引擎。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（种子轮，SAFE） | 约 200 万美元（约 280 万加元） | 2025 | [链接](https://betakit.com/team-of-toronto-talent-unites-after-y-combinator-to-build-clado/) |
| YC 批次投资（YC X25） | 未披露（YC 标准条款） | 2025 | [链接](https://www.ycombinator.com/launches/NbA-clado-deep-research-for-people) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Turing（AI 数据/工程外包平台，逾 200 万工程师网络） | 中 | [链接](https://betakit.com/team-of-toronto-talent-unites-after-y-combinator-to-build-clado/) |
| Mercor（人才招募平台，数万承包者） | 中 | [链接](https://betakit.com/team-of-toronto-talent-unites-after-y-combinator-to-build-clado/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，Clado 这类 agentic 人物搜索工具的直接价值集中在营销·销售·招聘三条线。销售侧：工业品/装备/材料企业的目标客户往往藏在细分岗位里（如「华东某类注塑厂的设备采购负责人」「新能源电池厂的工艺工程师」），传统关键词筛选难以精准命中，用自然语言画像+智能体逐条判定能显著压缩线索开发的人力；招聘侧：制造业高端稀缺岗位（如特定工艺的资深工程师、海外工厂运营负责人、AI+工业复合人才）寻访周期长，Monitors 式持续订阅可把「猎头式主动寻访」自动化。但要落地中国制造业，最大制约是 Clado 的档案库以 LinkedIn 为主、覆盖的是全球/英文语境的白领人才，对中国大陆蓝领与本土工程师人群覆盖薄弱——制造业真正的用工大头（一线技工、班组长）几乎不在其射程内。因此对国内制造企业，它更适合出海团队的海外销售线索与海外人才寻访，而非本土招聘主力。
2. **国内对标厂商**：探迹 Tungee——B2B 销售线索智能挖掘与触达，最接近 Clado 的「销售侧人物/企业搜索」定位、脉脉 Maimai——职业社交+人才智库，覆盖中文语境职业档案与人才搜索、BOSS 直聘 / 猎聘的 AI 猎头与智能寻访功能——对标「招聘侧 agentic sourcing」、火眼云 / 卫瓴——ABM 营销与线索智能，对标「按画像找决策人并富集联系方式」一环
   > 国内没有与 Clado「用海量并行智能体在全球职业档案上做深度语义匹配」完全对齐的单一对手，只能拆成两条线看：销售侧最贴近的是探迹（B2B 线索挖掘）与火眼云/卫瓴（ABM 找决策人）；招聘侧是脉脉人才智库、BOSS 直聘/猎聘的 AI 寻访。核心差异在数据源与合规环境——Clado 依赖 LinkedIn 生态的公开职业图谱，而中国因个人信息保护法（PIPL）与 LinkedIn 中国退出，本土玩家更多依托企业工商数据（探迹）或自有社交/招聘平台的一方数据（脉脉、BOSS），很难合法复刻「全网抓取 8 亿档案逐条判定」的打法。这既是国内做同类产品的护城河缺口，也是合规红线。
3. **可迁移的干法 / 应进场景词典的词条**：agentic-people-search、销售线索智能挖掘、AI 招聘寻访 talent-sourcing、联系方式富集 contact-enrichment、自然语言画像检索
   > 可迁移的干法是「自然语言画像 → 海量并行智能体逐条判定 → 结构化名单+联系方式富集」这条流水线，本质是把「非结构化意图」翻译成「对大规模实体库的语义过滤」。这套方法不止用于找人，可平移到制造业的：供应商/代工厂搜寻（用工艺、认证、产能画像去筛企业库）、专利/技术专家定位（找特定工艺的发明人）、渠道商与经销商开发、竞品客户名单反查。关键前置条件是有一个合规、可覆盖目标人群的底层实体库——这决定了迁移到本土场景时数据源要换成工商/专利/行业协会数据而非 LinkedIn。
4. **风险与存疑点**：①数据来源与合规风险最重：大规模抓取并富集职业档案与联系方式，在 GDPR/PIPL 及 LinkedIn 反爬条款下法律与封禁风险高，出海到欧洲/中国均受限；②极早期、护城河薄：核心是「LLM 并行推理+公开档案」，随着通用 agent 与竞品（Clay、Juicebox、Apollo 等）跟进，SOTA 基准优势易被追平，200 万美元种子轮弹药有限；③团队为在校大一创始人、公司刚上线数月，客户仅少量早期案例（Turing、Mercor），营收与留存未披露，规模化交付与企业级安全/合规能力尚未验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Launch YC: Clado: Deep Research for People | Y Combinator | https://www.ycombinator.com/launches/NbA-clado-deep-research-for-people |
| Clado - Deep Research for People（官网） | https://www.clado.ai/ |
| Team of Toronto talent unites after Y Combinator to build Clado | BetaKit | https://betakit.com/team-of-toronto-talent-unites-after-y-combinator-to-build-clado/ |
| Clado: Funding, Team & Investors | StartupIntros | https://startupintros.com/orgs/clado |
| Y Combinator on X: Clado is building deep research for people | https://x.com/ycombinator/status/1927485086313627806 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
