# Tinfoil

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B005
- **一句话定位**：Verifiably private AI on secure hardware（在安全硬件上可验证隐私的 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/tinfoil
- **深研状态**：researched（WebSearch 一手核实：YC Spring 2025（X25），创始人 Jules(MIT 可信硬件/机密计算 PhD，前 NVIDIA/微软研究院)、Sacha(MIT 隐私密码学 PhD)、Nate(前 Tor)、Tanya(前 Cloudflare 密码学)。分诊：留 aigov（安全硬件上可验证隐私的 AI/机密计算）。）

## 公司画像
- **团队**：Jules(MIT 可信硬件 PhD)、Sacha(MIT 隐私密码学 PhD)、Nate(前 Tor)、Tanya(前 Cloudflare 密码学)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：在安全硬件上可验证隐私的 AI / 云 AI 的可验证隐私：用安全隔离区(secure enclave)+NVIDIA 硬件机密计算，在云端跑 Llama、Deepseek 等模型做推理，同时证明无人(包括 Tinfoil 与云商)能访问数据；提供端到端加密聊天、私有 API、Tinfoil Containers(把 Docker 应用装进隔离区、可公开验证隐私策略)；隐私可用硬件+密码学验证，而非'口头承诺'。
- **商业模式**：面向企业/开发者的机密计算 AI 推理平台，定价未披露。
- **竞争格局**：机密计算/隐私 AI 赛道：各类 confidential computing、隐私计算。差异点在于 NVIDIA GPU 机密计算+可验证(而非承诺)隐私+端到端。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC X25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/tinfoil) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对数据敏感的制造企业用 AI 而言，Tinfoil 高度相关：制造企业的工艺/配方/图纸/客户数据极敏感，很多不敢把数据交给云 AI。Tinfoil 用机密计算让云 AI 推理时数据无人可访问、且可硬件验证。启示：制造企业可迁移『机密计算 AI 推理(数据无人可访问+可验证隐私)』在保护工艺/商业机密的前提下用上强大云模型，尤其涉密研发/质检数据。
2. **国内对标厂商**：各类隐私计算/机密计算、蚂蚁摩斯/华控清交——隐私计算、可信执行环境(TEE)
   > 国内隐私计算有蚂蚁摩斯、华控清交(多为多方计算)。Tinfoil 差异在于 NVIDIA GPU 机密计算+可验证隐私+云 AI 推理。对国内制造企业(涉密数据用云 AI)可迁移。
3. **可迁移的干法 / 应进场景词典的词条**：机密计算、可验证隐私AI、安全隔离区、云AI推理、数据不可访问、AI安全隐私
   > 可迁移干法：涉密数据用云 AI 时用『机密计算(数据无人可访问+可验证隐私)』保护工艺/商业机密。对制造企业涉密研发/质检数据适用。
4. **风险与存疑点**：①依赖 NVIDIA 机密计算硬件；②机密计算性能/成本；③市场教育；④早期。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Tinfoil: Encrypted AI with verifiable privacy | Y Combinator（X25） | https://www.ycombinator.com/companies/tinfoil |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
