# Silmaril

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B001
- **一句话定位**：Self-healing prompt injection defense（自愈式提示词注入防御）
- **官网/锚定**：https://www.ycombinator.com/companies/silmaril
- **深研状态**：researched（WebFetch YC 页一手核实：YC Spring 2026（X26），旧金山，团队 2。AI 运行时安全/自愈式提示注入防御。分诊：从 corp 修正为『AI 安全治理』——AI 运行时安全，属 aigov。）

## 公司画像
- **团队**：Aum Upadhyay（CEO，前 AWS 建安全框架防住 $1.8B 损失）、Eduardo Velasco（CTO，前 Amazon 技术主管，低时延 ML，演示过把提示注入链到 ChatGPT root 权限）。团队约 2 人。
- **成立/批次**：2026
- **地点**：美国旧金山
- **产品**：面向 AI 的自我改进运行时安全：自愈式提示注入防御，通过分析执行结果（而非输入模式）拦截 AI 威胁，经 SDK 以极小改动接入 Agent 框架。宣称拦截 96% 真实攻击（对手 61%）、时延低 10 倍、为客户阻止 $28M 损失。
- **商业模式**：面向用 AI Agent 的企业的安全 SDK/SaaS，定价未披露。
- **竞争格局**：AI 运行时安全/LLM 防护赛道：Lakera、Protect AI、各类 prompt injection 防护。差异点在于基于执行结果的自愈式防御 + 低时延。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC X26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/silmaril) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 头部生产力/分析/法律公司（未具名） | 低 | [链接](https://www.ycombinator.com/companies/silmaril) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业部署 AI Agent 而言，Silmaril 代表『AI 运行时安全/提示注入防御』。制造企业一旦让 Agent 接入 ERP/MES/邮件/工控，提示注入等攻击可导致越权操作、数据泄露甚至物理后果。Silmaril 基于执行结果拦截威胁。启示：制造企业上 AI Agent 必须配套运行时安全（防提示注入、防越权），这是 Agent 落地工业场景的安全底座。
2. **国内对标厂商**：蚁盾/瑞莱智慧——AI 安全、各大模型厂商的安全护栏、传统安全厂商向 AI 延伸
   > 国内 AI 安全有瑞莱智慧、蚁盾等。Silmaril 的差异在于基于执行结果的自愈式提示注入防御+低时延。对国内制造企业上 Agent 的运行时安全可迁移。
3. **可迁移的干法 / 应进场景词典的词条**：AI运行时安全、提示注入防御、自愈式防御、Agent安全护栏、越权防护、AI安全治理
   > 可迁移干法：给接入业务系统的 AI Agent 配『基于执行结果的运行时安全护栏』，拦截提示注入与越权操作。对制造业 Agent 接入 ERP/MES/工控的安全底座适用。
4. **风险与存疑点**：①极早期、团队 2、客户未具名；②性能宣称（96%/10×/$28M）需独立验证；③AI 安全赛道涌入；④分诊从 corp 改 aigov，已标注。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Silmaril | Y Combinator（X26，AI 运行时安全） | https://www.ycombinator.com/companies/silmaril |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
