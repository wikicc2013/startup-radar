# Metis

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：Enterprise agent learning and evaluation layer（企业智能体的学习与评测层）
- **官网/锚定**：https://www.ycombinator.com/companies/metis
- **深研状态**：acquired

## 公司画像
- **团队**：三位创始人：Aryan Shah（联合创始人/CEO，前 Mercor，YC）、Aayush Sheth（联合创始人）、Marcus Yearwood（联合创始人，生成式建模与 NLP 研究背景）。团队约 10–13 人，YC 合伙人 Harj Taggar 支持。被 DoorDash 收购前未在 YC S25 之后再融机构资本。
- **成立/批次**：2025 年（YC Summer 2025 / S25 批次）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：定位为『企业智能体的后训练与持续学习层』（the post-training and continual-learning layer for enterprise agents）。官网首款产品 Insight：把企业的一手数据、工具与运行环境转化为可持续学习的 agent 系统——从一方数据学习、通过强化学习在实践中改进、并在上生产前对 agent 表现做校验/评测。早期媒体亦提到产品 Mantis（帮 agent 选对工具、保持与恢复状态、完成长多轮工作流），命名口径随迭代变化。目标客户为前沿 AI 实验室与财富 500 强企业。
- **商业模式**：面向企业/实验室的 AI 基础设施（后训练+持续学习+评测层），收购前为私有 Beta 邀请制；据创始人对外披露，6 周内从 0 做到六位数月收入（具体数字未独立核实）。定价未披露。
- **竞争格局**：处于三大企业市场交叉带：AI agent 平台、RPA/企业自动化、AI 基础设施（MLOps/可观测）。可比/竞争面包括 agent 评测与后训练类玩家（如 LangSmith/LangChain、Braintrust、Galileo、Arize、以及各家 RL 后训练/合成数据供应商）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC S25 标准投资 + 种子轮（Seed） | 金额未披露（Crunchbase 列有 Metis Labs 种子轮；据公开报道 YC S25 之后未再融机构资本） | 2025 | [链接](https://www.crunchbase.com/funding_round/metis-labs-seed--2cf678ea) |
| 并购退出（被 DoorDash 全现金收购） | 1.5 亿美元全现金（据 Arfur Rock 在 X 披露，$150M all cash；官方未披露具体对价） | 2026-03-18 | [链接](https://www.tbpndigest.com/story/2026-03-18/doordash-acquires-yc-backed-applied-ai-lab-metis-to-accelerate-agentic-commerce) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| DoorDash | 高 | [链接](https://www.fenwick.com/insights/experience/fenwick-represents-doordash-in-acquisition-of-metis) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业上 AI agent 最大的坎是『可靠性』——SOP 多轮流转、工具（MES/ERP/质检系统）调用、状态保持与异常恢复，一旦 agent 幻觉或掉状态就会造成实际损失。Metis 这类『后训练+持续学习+上线前评测』的中间层，恰是把通用大模型 agent 收敛到工厂真实工作流的关键工程层：用工厂一方数据（工单、质检记录、设备日志）做后训练，用强化学习在仿真/沙箱里练熟长流程，上生产前先跑可靠性基准。制造业落地 agent 应把『评测与持续学习闭环』作为一等公民，而非一次性提示工程。
2. **国内对标厂商**：Agent 评测/可观测：LangSmith 中文生态、以及国内 LLMOps/评测平台（如 Dify、FastGPT 的评测模块、百度千帆评测、阿里百炼评估）、后训练/强化学习与合成数据服务：面向企业的 RLHF/RL 微调与数据标注服务商（如数据堂、海天瑞声等在 agent 数据侧的延伸）、企业 Agent 平台+持续学习：字节扣子(Coze)、阿里百炼、腾讯元器等 agent 编排平台的『评测+迭代』闭环能力
   > 国内暂无与 Metis 完全对位的『企业 agent 后训练层』独立公司，能力被拆散在 agent 平台（扣子/百炼/元器）的评测迭代模块、LLMOps 工具（Dify/FastGPT）与数据/后训练服务商三处。对制造业而言，可参照百炼/千帆的评估与微调链路 + 专业数据标注商组合出类似闭环。
3. **可迁移的干法 / 应进场景词典的词条**：企业智能体后训练、Agent 持续学习、Agent 评测与校验、强化学习(RL)微调、长多轮工作流可靠性、工具选择与状态恢复、LLMOps/可观测、agentic commerce（收购方场景）
   > 可迁移打法：①以『一方数据→后训练→RL 实践→上线前评测』四段式做 agent 可靠性闭环；②发布可复现的可靠性基准 + 合规包，把『不确定的 agent』变成『可度量的 agent』以打消企业顾虑；③极小团队（约 10 人）+ 深度绑定单一大客户（先与 DoorDash 共建 6 个月再被收购）验证价值再放大，是 AI infra 初创的高效路径。
4. **风险与存疑点**：① 已被收购/团队并入：2026-03-18 被 DoorDash 全现金收购（媒体称约 $150M），作为独立公司已终止，产品并入 DoorDash 的 agentic commerce/物理智能方向，standalone 产品与 Beta 不再对外可用——status 记为 acquired。② 产品命名与形态在短生命周期内多次变动（Mantis→Insight），公开口径不稳定。③ 融资/收购对价均为第三方（X 爆料）口径，官方未披露确切金额，存在偏差。④ 成立约 1 年即退出，缺乏长期客户与规模化落地的独立验证；早期营收数字（6 周做到六位数月收入）为创始人自述，未经独立核实。⑤ 存在大量同名『Metis』（Dynatrace 收购的以色列数据库可观测公司、Metis 区块链等），检索需严格用 YC S25 + enterprise agent 消歧。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
