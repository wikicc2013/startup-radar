# StarSling

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B005
- **一句话定位**：AI-native GitHub Actions CI optimization（AI 原生的 GitHub Actions CI 优化）
- **官网/锚定**：https://www.ycombinator.com/companies/starsling
- **深研状态**：researched（WebSearch 一手核实：YC Spring 2025（X25），创始人 CEO(前 StackShare 创始人,150 万+开发者社区,卖给 FOSSA)、CTO(建 Netflix 内部开发者门户,前 Facebook AI Camera)。客户 Mastra/Better Auth 报 CI 快 80%。分诊：留 aiinfra（AI 原生的 GitHub Actions CI 优化/自动驾驶 CI）。）

## 公司画像
- **团队**：CEO(前 StackShare 创始人)、CTO(前 Netflix/Facebook)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：AI 原生的 GitHub Actions CI 优化 / 自动驾驶 CI：StarSling Runners 是 ubuntu-latest 的 AI 原生直插替代(第 5 代 AMD EPYC,比 GitHub 快约 30%,actions/cache 零配置兼容,无限并发);AI Agent 持续分析 job/运行日志/机器遥测,自动开 PR 优化流水线(缓存、并行、依赖安装、测试分片、workflow 结构);CI 最快 6x、便宜 13x;每 job 跑在单次用后即毁的硬件隔离 microVM。
- **商业模式**：面向开发团队的 AI 原生 CI Runner/优化 SaaS,定价未披露。
- **竞争格局**：CI 优化赛道:GitHub Actions、Depot、各类 CI runner。差异点在于 AI Agent 自动优化流水线+更快更便宜 runner+microVM 隔离。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC X25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/starsling) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Mastra、Better Auth(CI 快 80%) | 中 | [链接](https://starsling.dev/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业数字化研发而言,StarSling 代表『AI 自动优化 CI(更快更便宜)』。制造企业数字化团队的 CI/CD 慢、贵、配置繁。StarSling 用更快 runner+AI Agent 自动开 PR 优化流水线(缓存/并行/分片),CI 最快 6x、便宜 13x。启示:制造企业数字化研发可迁移『AI 原生 CI 优化(更快 runner+Agent 自动优化流水线)』把 CI/CD 提速降本,让数字化交付更快,尤其研发规模大时 CI 成本可观。
2. **国内对标厂商**：各类 CI/CD、云厂商流水线/CODING CI、GitHub Actions
   > 国内 CI/CD 有云厂商流水线、CODING。StarSling 差异在于 AI Agent 自动优化流水线+更快更便宜 runner+microVM 隔离。对国内制造企业数字化研发 CI 可对标。
3. **可迁移的干法 / 应进场景词典的词条**：AI原生CI、CI优化提速、自动优化流水线、microVM隔离、研发降本、AI基础设施
   > 可迁移干法:数字化研发用『AI 原生 CI 优化(更快 runner+Agent 自动优化流水线)』把 CI/CD 提速降本。对制造企业数字化研发适用。
4. **风险与存疑点**：①CI 优化竞争(Depot 等);②绑定 GitHub Actions 生态;③早期;④企业自建 CI 迁移成本。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| StarSling: Self-Driving CI | Y Combinator（X25） | https://www.ycombinator.com/companies/starsling |
| StarSling: AI-Native CI for GitHub Actions, up to 6x Faster | https://starsling.dev/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
