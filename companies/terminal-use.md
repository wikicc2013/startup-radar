# Terminal Use

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B002
- **一句话定位**：Vercel for background agents（后台智能体版的 Vercel）
- **官网/锚定**：https://www.ycombinator.com/companies/terminal-use
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2026（W26），旧金山，团队 4，2026 成立,创始人 Filip Balucha、Stavros Filosidis、Vivek Raja。分诊：留 aiinfra（后台文件系统 Agent 的托管基础设施/『Agent 版 Vercel』）。）

## 公司画像
- **团队**：Filip Balucha、Stavros Filosidis、Vivek Raja。团队约 4 人。
- **成立/批次**：2026
- **地点**：美国旧金山
- **产品**：后台智能体版的 Vercel：专为使用文件系统的后台 Agent 打造的托管基础设施——可跨多个 Agent 共享一个文件系统、可 fork 文件系统在同一输入上并行测试不同 Agent;消息 SDK 支持持久化并把消息流回 UI(含 Vercel AI SDK 集成),可用 SDK 或定时触发 Agent;企业级可物理隔离各客户的数据与算力、细粒度授权资源。
- **商业模式**：面向 Agent 开发者的托管基础设施 SaaS,定价未披露。
- **竞争格局**：Agent 托管/沙箱赛道:E2B、Vercel、Modal、21st-dev。差异点在于面向文件系统 Agent+可共享/fork 文件系统+企业级隔离。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/terminal-use) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 Agent 化而言,Terminal Use 代表『文件系统 Agent 的托管基础设施(共享/fork 文件系统+企业隔离)』。制造企业部署处理文档/数据文件的后台 Agent 时,需要托管运行、共享文件系统、按客户隔离。Terminal Use 提供这层。启示:制造企业把处理文件/文档的 Agent 上线时,可迁移『Agent 托管基础设施(共享/fork 文件系统+企业级隔离+定时触发)』快速把文件类后台 Agent 变可运营服务。
2. **国内对标厂商**：各类 Agent 托管/沙箱、阿里函数计算/E2B、Modal 类
   > 国内 Agent 托管多用函数计算/容器。Terminal Use 差异在于面向文件系统 Agent+可共享/fork 文件系统+企业级隔离。对国内制造企业文件类 Agent 托管可对标。
3. **可迁移的干法 / 应进场景词典的词条**：Agent托管基础设施、文件系统Agent、共享/fork文件系统、企业级隔离、后台Agent、AI基础设施
   > 可迁移干法:文件类后台 Agent 用『Agent 托管基础设施(共享/fork 文件系统+企业隔离+定时触发)』变可运营服务。对制造企业 Agent 化适用。
4. **风险与存疑点**：①Agent 托管竞争(E2B/Modal/Vercel);②窄定位(文件系统 Agent);③早期;④企业采用。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Terminal Use: Vercel for background agents | Y Combinator（W26） | https://www.ycombinator.com/companies/terminal-use |
| Launch HN: Terminal Use (YC W26) – Vercel for filesystem-based agents | https://news.ycombinator.com/item?id=47311657 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
