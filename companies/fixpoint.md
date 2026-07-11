# Fixpoint

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：Automatically hire remote knowledge workers（自动招募远程知识工作者）
- **官网/锚定**：https://www.ycombinator.com/launches/Og8-fixpoint-uber-for-ai-trainers-and-human-in-the-loop-supervisors
- **深研状态**：researched（锚定成功。YC Fall 2025（F25）公司，主页 fixpoint.co，Launch 标题「Uber for AI trainers and human-in-the-loop supervisors」，与分诊一句话『自动招募远程知识工作者』一致，实为面向 AI 数据公司的专家人力（数据标注/AI训练师/人在环路监督）自动化招聘与背景核验。注意：同名创始团队更早期曾以 Fixpoint 之名做 LLM 工作流开源基础设施（Tracxn/Crunchbase 显示成立 2023、SF），本次 F25 为同团队的当前形态；两代信息在第三方库里有混杂，已就地标注。）

## 公司画像
- **团队**：两位联合创始人，均为二次 YC 创业者，2018 年在 Oscar Health 相识。Dylan Mikus（联合创始人/CEO，CMU 计算机；LinkedIn dbmikus），Jakub Cichon（联合创始人/CTO，NYU 计算机；LinkedIn jakub-c-14016a3b）。团队规模未披露。
- **成立/批次**：当前形态为 YC Fall 2025（F25）；同名早期实体第三方库标注成立于 2023（未在官方口径确认，置信度低）
- **地点**：未完全一致：Crunchbase 标 San Francisco；Built In 有 NYC 办公室条目，创始人 Jakub 为 NYU 背景。以美国（SF/NYC 双点）计，精确地未官方披露。
- **产品**：两条产品线：①白手套专家人力外包——按客户定义的岗位画像自动寻源并招募合格专家团队，宣称『几周内组建数百人团队』，覆盖法律、软件开发、医疗、STEM 研究、语言学等专业角色；②Worker Vetting API——把凭证/背景核验嵌入客户自有的入职流程，宣称能多抓约 10 倍欺诈申请者。整体定位为『AI 训练数据背后的专家人力供给层』，类比芯片厂用 TSMC 代工。GDPR 合规，SOC 2 认证进行中。
- **商业模式**：B2B。两种收费形态：托管式人力派遣（代客寻源、招募、并承担 HR/用工管理，按人力服务计费）＋ API 按调用的背景/凭证核验。核心客户为 AI 数据标注公司及为头部 AI 实验室供给人力的数据商。具体定价未披露。
- **竞争格局**：上游对手：Scale AI/Surge AI/Mercor/Turing/Invisible 等 AI 训练数据与专家人力平台（Mercor 尤其正面）；核验侧对手：Checkr、Certn 等背景调查 API。差异点自称在于把『专家寻源+自动核验+HR 托管』打包，并以 API 化的反欺诈核验为抓手。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（含 YC） | 约 500K 美元 | 2025-09-29 | [链接](https://www.crunchbase.com/organization/fixpoint-19a5) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的『人』的意义主要在两条：其一，Fixpoint 代表的是『把稀缺领域专家按需、可核验地组队』这门供给能力——制造业做工业 AI（缺陷检测、工艺参数、设备诊断、合规文档）时，最大瓶颈往往不是模型而是『谁来标注、谁来当人在环路的把关人』，需要焊接/机加/质检/EHS/合规等真专家而非通用众包工，Fixpoint 这类『专家灵工+自动核验』正对上工业场景高门槛标注的痛点；其二，其 Worker Vetting API 的价值可迁移到制造业对派遣工、外包质检员、现场服务工程师、供应商驻场人员的资质与背景快速核验——把『招得快』与『核得住』解耦成可编排的两步，是柔性用工规模化的关键。反过来提示：工业企业自建 AI 时应把『专家人力供给+资质核验』当成一层基础设施来采购，而非临时凑人。
2. **国内对标厂商**：数据标注/众包供给侧：龙猫数据(Testin云测)、数据堂、百度众测、阿里巴巴众包——对标 Fixpoint 的『AI 训练数据人力』一线，但国内多为体力众包，专家化程度低、灵活用工/招聘中台：北森、Moka、用友大易——对标其『按岗位画像自动寻源招募』的招聘自动化能力、背景/资质核验：全景求是、i背调、连方背调——对标其 Worker Vetting API 的反欺诈核验能力
   > 国内没有与 Fixpoint 完全同构的『专家级 AI 训练人力 + API 化核验』一体化玩家：标注众包一侧（数据堂/龙猫）强在规模化体力标注、弱在专家化与自动核验；招聘中台一侧（北森/Moka/大易）强在流程自动化、但不承接 AI 数据这类高门槛专业人力供给；背调一侧（i背调/全景求是）能力单点、未与用工派遣打通。Fixpoint 的差异正是把『专家寻源+反欺诈核验+HR 托管』捏成一条链——这恰是国内可切的反向情报缺口，尤其在工业级高门槛标注与灵活用工核验交叉处。
3. **可迁移的干法 / 应进场景词典的词条**：专家灵活用工、AI训练数据人力外包、人在环路(HITL)监督、背景核验API、反欺诈资质核验、众包质检
   > 可迁移干法：把『招人』拆成『按岗位画像自动寻源』与『API 化资质核验』两个可编排步骤，是任何需要规模化调用外部专业人力场景（工业质检外包、现场服务派遣、合规审阅、专业数据标注）都能复用的模式；其中『核验前置、反欺诈抓在入职流水线里』这一手，值得制造/服务业的用工与供应商准入直接借用。
4. **风险与存疑点**：①同名团队存在业务形态漂移（早期 LLM 工作流开源基础设施→当前 AI 训练人力平台），第三方数据库（Crunchbase/Tracxn）新旧信息混杂，锚定虽成立但公司叙事尚未稳定，融资 500K/成立年份等以第三方为准、官方未逐项确认；②极早期（F25、约 50 万美元种子），无公开付费客户与营收证据，early_customers 为空；③赛道正对撞 Scale/Surge/Mercor 等资金与网络远更强的对手，专家人力供给的护城河（专家池、核验准确率）尚未被外部验证，人力中介模式毛利与可规模化性存疑。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| YC Launch: Fixpoint — Uber for AI trainers and human-in-the-loop supervisors | https://www.ycombinator.com/launches/Og8-fixpoint-uber-for-ai-trainers-and-human-in-the-loop-supervisors |
| Fixpoint 官网 fixpoint.co | https://fixpoint.co/ |
| Fixpoint | YC Work at a Startup | https://www.workatastartup.com/companies/31010 |
| Fixpoint — Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/fixpoint-19a5 |
| Fixpoint — Tracxn Company Profile | https://tracxn.com/d/companies/fixpoint/__WSHl3jSjlru0yRJHDwnCemYK9zA7IUuYv2NUp7Pdv1I |
| Fixpoint NYC Office — Built In NYC | https://www.builtinnyc.com/company/fixpoint |
| YC F25 launch post (LinkedIn): Fixpoint helps companies hire the expert humans behind AI data | https://www.linkedin.com/posts/y-combinator_fixpoint-helps-companies-hire-the-expert-activity-7389345283064762368-1nvc |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
