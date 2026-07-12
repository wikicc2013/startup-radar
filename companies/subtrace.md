# Subtrace

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B006
- **一句话定位**：Zero-code network tracer for backend requests（面向后端请求的零代码网络追踪）
- **官网/锚定**：https://www.ycombinator.com/companies/subtrace
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2025（W25），开源(subtrace/subtrace),『Wireshark for Docker/后端』。用 eBPF 零代码零 root。Trieve(W24) 生产使用,事故解决从数月到数分钟。分诊：留 aiinfra（面向后端请求的零代码网络追踪/可观测）。）

## 公司画像
- **团队**：（W25,创始团队信息以 YC 为准）。
- **成立/批次**：2025
- **地点**：美国
- **产品**：面向后端请求的零代码网络追踪 / 后端的网络检查器(Wireshark for Containers)：给后端团队对每个请求的全可见性——payload、延迟、状态、headers、日志集中一处,无需过度打日志;零代码,像给整个基础设施装 inspect element,用 eBPF 实现、无需 root 或改代码;结合系统调用追踪+网络包分析于单一界面,单条命令捕获 HTTP 请求,支持 Node.js/FastAPI 等。
- **商业模式**：开源零代码网络追踪(+托管),定价未披露。
- **竞争格局**：可观测/网络追踪赛道:Wireshark、各类 APM、eBPF 工具。差异点在于零代码 eBPF(无 root/无改代码)+后端请求全可见+Wireshark 式体验。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/subtrace) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Trieve(W24,事故解决从数月到数分钟) | 中 | [链接](https://www.ycombinator.com/companies/subtrace) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业后端运维而言,Subtrace 代表『零代码后端网络追踪(eBPF+全请求可见)』。制造企业的 MES/产线/IoT 后端服务出问题时,靠翻日志排查慢。Subtrace 用 eBPF 零代码捕获每个请求的 payload/延迟/状态/日志、集中可见。启示:制造企业后端/微服务运维可迁移『零代码网络追踪(eBPF+每请求全可见+无需改代码)』快速定位后端服务间的请求问题,把事故排查从翻日志数月压到数分钟,尤其复杂微服务/容器环境。
2. **国内对标厂商**：各类 APM/可观测、听云/博睿、eBPF 可观测(DeepFlow)
   > 国内可观测有听云、DeepFlow(eBPF)。Subtrace 差异在于零代码 eBPF(无 root/无改代码)+后端请求全可见+Wireshark 式体验。对国内制造企业后端运维可对标。
3. **可迁移的干法 / 应进场景词典的词条**：零代码网络追踪、eBPF、后端请求可见、无需改代码、可观测、AI基础设施
   > 可迁移干法:后端/微服务运维用『零代码网络追踪(eBPF+每请求全可见+无需改代码)』快速定位后端请求问题。对制造企业后端/容器环境适用。
4. **风险与存疑点**：①可观测竞争(DeepFlow 等);②eBPF 环境要求;③早期;④开源商业化。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Subtrace: Zero code network tracer | Y Combinator（W25） | https://www.ycombinator.com/companies/subtrace |
| Show HN: Subtrace – Wireshark for Docker Containers | https://news.ycombinator.com/item?id=43096477 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
