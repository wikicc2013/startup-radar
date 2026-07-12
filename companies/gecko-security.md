# Gecko Security

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B007
- **一句话定位**：AI SAST for finding real vulnerabilities（面向真实漏洞的 AI 静态扫描(SAST)）
- **官网/锚定**：https://www.ycombinator.com/companies/gecko-security
- **深研状态**：researched（WebSearch 一手核实：YC Fall 2024（F24），创始人 JJ(前英国情报机构 GCHQ，少年建自动化防护关键基础设施)、Artemiy(伦敦相识，CTF/黑客大赛获 $10万+奖金)。已在 Ollama/Gradio/Ragflow 等发现 30+ CVE。分诊：留 aigov（AI 静态扫描 SAST/代码安全）。）

## 公司画像
- **团队**：JJ(前 GCHQ 英国情报)、Artemiy(CTF 高手)。
- **成立/批次**：2024
- **地点**：美国
- **产品**：面向真实漏洞的 AI 静态扫描(SAST)/AI 安全工程师：用 LLM Agent 结合程序分析工具(静态分析器、fuzzer、符号执行)，像资深安全专家一样找并修漏洞；自建编译器级精确索引保语义、像 IDE 精确导航代码，用 LLM 做威胁建模(分析业务逻辑/数据流/信任边界生成针对性攻击场景)；已发现 30+ CVE；企业客户误报少 50%、找到此前仅人工渗透能发现的漏洞。
- **商业模式**：面向开发/安全团队的 AI SAST SaaS，定价未披露。
- **竞争格局**：SAST/代码安全赛道：Snyk、Semgrep、bitpatrol(同库)。差异点在于 LLM Agent+程序分析+威胁建模找逻辑漏洞、误报少 50%。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC F24（未单列） | 未披露 | 2024 | [链接](https://www.ycombinator.com/companies/gecko-security) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业数字化研发的代码安全而言，Gecko 代表『AI SAST 找真实逻辑漏洞、误报少』。制造企业数字化自研代码(工控/客户系统)的安全漏洞尤其业务逻辑漏洞难扫。Gecko 用 LLM+程序分析+威胁建模找逻辑漏洞、误报少 50%。启示：制造企业数字化研发可迁移『AI SAST(找逻辑漏洞+威胁建模+低误报)』提升代码安全，尤其涉工控/资金/数据的关键系统代码。
2. **国内对标厂商**：各类 SAST(奇安信代码卫士)、Snyk 类、代码安全扫描
   > 国内 SAST 有代码卫士等。Gecko 差异在于 LLM Agent+程序分析+威胁建模找逻辑漏洞、误报少 50%。对国内制造企业数字化研发代码安全可迁移。
3. **可迁移的干法 / 应进场景词典的词条**：AI SAST、代码安全、逻辑漏洞、威胁建模、低误报、AI安全
   > 可迁移干法：数字化研发代码用『AI SAST(找逻辑漏洞+威胁建模+低误报)』提升代码安全。对制造企业(工控/资金/数据系统代码)适用。
4. **风险与存疑点**：①Snyk/Semgrep 等在场；②SAST 误报/准确性；③早期；④企业销售周期。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Gecko Security: Your AI Security Engineer | Y Combinator（F24，30+ CVE） | https://www.ycombinator.com/companies/gecko-security |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
