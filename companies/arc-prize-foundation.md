# ARC Prize Foundation

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：AI benchmarks that measure general intelligence（衡量通用智能的 AI 基准测试）
- **官网/锚定**：https://www.ycombinator.com/companies/arc-prize-foundation
- **深研状态**：researched（锚定成功。YC 官方目录收录 ARC Prize Foundation，批次为 Winter 2026（W26），非本仓库登记的 B002 所暗示批次——以 YC 官方为准，实为 W26。这是一家非营利基金会（拟/已转为 501(c)(3)），非营利创业公司。分诊维度判断：其核心是为前沿 AI 构建「衡量通用/流体智能」的评测基准（ARC-AGI 系列）与竞赛，本质是能力评估（capability evaluation）。因此首要归入『AI 安全治理（能力评估/评测基准）』——能力评估是 AI 治理与安全的基础活动，用来客观度量 AI 到底能做什么、离 AGI 还有多远；次要可归入『AI 基础设施』——它提供的是全行业通用的评测底座/公共基础设施（OpenAI、Anthropic、Google DeepMind、xAI 均引用）。判断依据：官网自述使命为『衡量通用智能的科学严谨基准、研究前沿 AI 进展』，而非做研发/生产等价值链环节，故不归其余维度。）

## 公司画像
- **团队**：François Chollet（联合创始人，Keras 之父，2019 年论文《On the Measure of Intelligence》提出 ARC-AGI 基准）、Mike Knoop（联合创始人，Zapier 联合创始人）、Greg Kamradt（创始人/总裁 President，前 Salesforce 工程总监、Digits 任职、Leverage 创办人）。董事会由三人组成。YC 登记团队规模 4 人。
- **成立/批次**：2024（2024 年以 100 万美元 ARC Prize 竞赛形式启动；2025 年 1 月起转型为非营利基金会并开始募资，拟成为 501(c)(3)）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：ARC-AGI 系列评测基准 + 全球竞赛 + 研究资助 + 社区/内容。ARC-AGI 衡量『流体智能』即在无先验知识依赖下解决新颖问题、快速习得新技能的能力，设计哲学『对人类容易、对 AI 困难』，强调 core knowledge priors 以公平对比人机。版本演进：ARC-AGI-1（2019）→ ARC-AGI-2（2025 年发布，任务更复杂，人类约 95% 通过率，顶尖 AI 一度低于 30%）→ ARC-AGI-3（首个面向 AI 智能体的交互式推理基准，让人/智能体在新环境中边玩边学，官方称『唯一尚未被攻破』的智能体智能基准，定于 2026-03-25 发布）。另有 ARC Prize Verified 验证测试计划与测试政策。
- **商业模式**：非营利模式。不靠产品营收，收入来自个人、基金会与 AI 实验室的一般性捐赠/赞助；2025 年由 5 家前沿 AI 实验室赞助以支持 ARC-AGI-3 开发（公开提及 xAI、Google 等）。明确声明：赞助方不获得对私有/半私有评测集的特权访问，也不影响基准开发、路线图或方法论（治理独立性承诺）。竞赛以奖金池驱动社区（2024 年 100 万美元；2025 年奖金池逾 100 万美元，含 70 万美元大奖）。
- **竞争格局**：作为『评测基准/评估机构』的对手是其他 AI 基准与评估体系：如 MMLU、GPQA、SWE-bench、Humanity's Last Exam、FrontierMath（Epoch AI）、以及各大实验室自建评测；广义上还与 Epoch AI、METR、LMSYS（Chatbot Arena）等第三方评估机构竞争『中立评测话语权』。ARC-AGI 的差异化在于专测流体/新颖问题求解而非知识记忆，且强调抗数据污染的私有评测集。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 非营利捐赠/赞助（Nonprofit donations & sponsorship） | 未披露 | 2025-01 起募资 | [链接](https://arcprize.org/donate) |
| AI 实验室赞助（支持 ARC-AGI-3） | 未披露（5 家前沿 AI 实验室赞助，含 xAI、Google 等） | 2025 | [链接](https://arcprize.org/blog/arc-prize-2025) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| OpenAI | 高 | [链接](https://arcprize.org/arc-agi) |
| Anthropic | 高 | [链接](https://arcprize.org/arc-agi) |
| Google DeepMind | 高 | [链接](https://arcprize.org/arc-agi) |
| xAI | 高 | [链接](https://arcprize.org/blog/arc-prize-2025) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，ARC Prize 本身不是可直接采购的产品，但它提供了一把『别被跑分忽悠』的标尺。制造企业在做 AI 选型（视觉质检、工艺参数优化、排产调度、设备故障诊断等）时，最怕供应商拿『某某榜单第一』做营销，而真实产线场景往往是训练集里没见过的新工况、新缺陷、新料号——这正是 ARC-AGI 所测的『流体智能/新颖问题泛化』能力。启示有三：其一，评估 AI 供应商时应区分『记忆型跑分（知识密集基准高分）』与『泛化型能力（面对未见过工况仍能推理适配）』，后者才决定产线上线后的鲁棒性；其二，可借鉴 ARC 的『私有评测集 + 抗数据污染』方法论，用自家未公开的历史工况数据做验收测试，而非采信供应商公开 benchmark；其三，ARC-AGI-2/3 揭示当前大模型在真正新颖推理与交互式智能体任务上离人类仍差距巨大（顶尖仅 24%），提示制造企业对『全自主智能体接管关键工序』保持审慎，优先人机协同（HITP/HOTP）而非全托付。
2. **国内对标厂商**：SuperCLUE（中文通用大模型综合评测榜，含推理/安全等多维，最接近的中立第三方评测定位）、C-Eval / CMMLU（中文知识与学科能力基准，偏知识记忆，与 ARC 抗知识依赖取向相反，恰成对照）、OpenCompass（上海人工智能实验室司南评测体系，多任务多模态开源评测底座，接近『评测基础设施』定位）、FlagEval（智源研究院大模型评测平台）
   > 国内尚无与 ARC-AGI 完全对位者——ARC 的独特之处是专测『流体智能/新颖问题泛化』并以竞赛+奖金+私有集抗污染的方式运营的非营利机构。国内对标分两类：一是评测『体系/基础设施』层面的 OpenCompass（司南）、FlagEval（智源），提供多任务评测底座，最接近 ARC 作为公共评测基础设施的角色；二是综合榜单层面的 SuperCLUE、C-Eval、CMMLU，但这些多偏知识与学科能力（知识密集），与 ARC 刻意剔除知识先验、只测抽象推理与快速技能习得的取向相反，可作反向参照。国内缺口在于：像 ARC 这样『对人易、对机难』、以未被攻破为荣、并把治理独立性（赞助方不接触私有集）作为公开承诺的中立 AGI 度量机构。
3. **可迁移的干法 / 应进场景词典的词条**：评测基准、能力评估、AGI 度量、流体智能/泛化、私有评测集抗数据污染、AI 竞赛众筹研究、智能体交互式评测、非营利治理独立性
   > 可迁移干法：ARC 的方法论对企业内部 AI 治理高度可复用。其一『私有评测集』——企业保留一批从不外发的真实业务数据作为验收基准，杜绝供应商针对公开榜单过拟合，避免『刷榜式交付』；其二『对人易对机难的能力探针』——在选型时设计几道人类专家一眼能解、但需真正推理的业务小题，快速甄别是记忆还是泛化；其三『竞赛/悬赏众筹解法』——对内部难攻克的 AI 难题，可仿 ARC Prize 以内部黑客松+奖金池激发跨部门方案；其四『治理独立性承诺』——评估方与被评估方的利益隔离，可移植为企业 AI 采购中『评测团队独立于采购/供应商关系』的制度设计。
4. **风险与存疑点**：风险①『测得准 ≠ 造得出』：ARC 擅长指出 AI 的短板与差距，但不生产可落地的行业 AI 能力，企业不能把它当解决方案，只能当标尺；且其抽象网格任务与真实工业场景仍有距离，迁移需谨慎。风险②可持续性与中立性张力：非营利靠捐赠/AI 实验室赞助存续，尽管公开承诺赞助方不接触私有集、不影响方法论，但『被评估者出资赞助评估者』的结构性张力长期存在，一旦基准被广泛用于营销，独立性与公信力面临考验；募资规模未披露，长期资金可持续性存疑。风险③基准饱和/被攻破的时效性：ARC-AGI-1 已被逼近，-2 分数快速爬升，-3 尚新——基准一旦被专门优化攻破即贬值，需持续迭代（-4、-5……），机构价值绑定在『永远领先一步出新题』的能力上，存在跟不上前沿模型进化速度的风险。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| ARC Prize Foundation — Y Combinator（W26 目录，founded 2024，团队 4，SF，创始人） | https://www.ycombinator.com/companies/arc-prize-foundation |
| ARC Prize 官网 | https://arcprize.org/ |
| What is ARC-AGI?（基准定义、流体智能、设计哲学） | https://arcprize.org/arc-agi |
| ARC Prize Foundation - a North Star for AGI（2025 竞赛、5 家 AI 实验室赞助、独立性承诺） | https://arcprize.org/blog/arc-prize-2025 |
| Announcing ARC-AGI-2 and ARC Prize 2025 | https://arcprize.org/blog/announcing-arc-agi-2-and-arc-prize-2025 |
| ARC-AGI-3（交互式智能体基准，2026-03-25 发布） | https://arcprize.org/arc-agi/3 |
| Support Our Mission / Donate（非营利捐赠结构） | https://arcprize.org/donate |
| The ARC Prize will Become a Nonprofit that Benchmarks AGI — Maginative（转非营利、Knoop/Kamradt 背景） | https://www.maginative.com/article/the-arc-prize-will-become-a-nonprofit-that-benchmarks-agi/ |
| This new benchmark could expose AI's biggest weakness — Fast Company | https://www.fastcompany.com/91515360/arc-prize-foundation-new-ai-benchmark |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
