# Kashikoi

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B005
- **一句话定位**：AI simulation platform（AI 仿真平台）
- **官网/锚定**：https://www.ycombinator.com/companies/kashikoi
- **深研状态**：researched（经本地研究员 WebFetch YC 公司页一手核实：YC Spring 2025（X25）批次，2025 成立，旧金山，团队 2 人。分诊维度：留『研发设计（仿真/测试）』——为 AI 产品做基准测试的仿真引擎，属 AI 的『测试/仿真』研发工具（rnd 含测试）。）

## 公司画像
- **团队**：两位创始人：Aaksha Meghawat——曾在 Moveworks/ServiceNow 主导仿真与评测（交付 250+ 企业 Agent），CMU 做 NSF 资助的 Transformer 研究，在 Apple 把边缘语音识别落到 10 亿+ iPhone，Interspeech 2021 最佳论文提名；Tim Michaud——安全研究员，在 Apple 多产品（Safari/macOS/iOS/tvOS/iTunes）有多个 CVE，发现高通 GPS 芯片关键漏洞。团队约 2 人。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向 AI 产品基准测试的仿真引擎：生成 CPU 友好的世界模型，自主评测 AI Agent 并产出行为评估。支持自定义基准仿真、多样数据测试、评测对齐（无需写 prompt），内置自动 prompt 优化与回归检测。
- **商业模式**：面向 AI 团队/开发者的评测仿真 SaaS（AI Agent 基准测试），具体定价未披露。
- **竞争格局**：AI 评测/仿真赛道：LangSmith、Braintrust、各类 LLM/Agent eval 工具。Kashikoi 差异点在于用 CPU 友好世界模型做自主行为评测 + 内置 prompt 优化与回归检测。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC X25（种子/未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/kashikoi) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的 AI 落地而言，Kashikoi 代表『用仿真给 AI Agent 做基准测试与回归防退化』。制造企业越来越多用 AI Agent 做质检、排产、客服、运维，但 AI 上线前后如何评测其行为、防止版本回归退化，是可靠性痛点。Kashikoi 用世界模型仿真自主评测 Agent 行为、内置回归检测，本质是给 AI 应用建『自动化测试台』。对制造业的启示：一是任何要上产线/上业务的 AI Agent 都需要严格的评测与回归测试，仿真评测是保障可靠性的基础设施；二是『CPU 友好、无需写 prompt』降低评测门槛；三是这与工业软件的测试/质检文化同构——AI 也需要 QA。
2. **国内对标厂商**：各大模型厂商的评测平台（如智谱/百度的 eval）、国内 LLM/Agent 评测新锐、传统软件测试厂商向 AI 测试延伸、OpenCompass 等开源评测生态
   > 国内 AI 评测多为大模型厂商自建 eval 或 OpenCompass 等开源基准，专门做『Agent 行为仿真评测 + 回归检测』的商业化工具仍早期。Kashikoi 的差异在于 CPU 友好世界模型 + 自主评测 + 回归检测。对国内制造业上 AI Agent，可迁移『用仿真给 AI 做基准测试与回归防退化』保障产线/业务可靠性。
3. **可迁移的干法 / 应进场景词典的词条**：AI评测仿真、Agent基准测试、回归检测、世界模型、prompt自动优化、AI质量保障
   > 可迁移干法：给要上产线/上业务的 AI Agent 建『自动化测试台』——用世界模型仿真自主评测其行为、内置回归检测防版本退化、自动优化 prompt。对制造业（AI 质检/排产/运维/客服 Agent），可迁移『仿真评测 + 回归测试』保障可靠性，与工业软件 QA 文化同构。核心是 AI 应用也需要严格测试。
4. **风险与存疑点**：①极早期：2025 成立、团队 2 人、无公开融资与具名客户；②赛道拥挤：LangSmith、Braintrust 及大厂 eval 在场，差异化壁垒待证；③AI 评测本身的可信度（评测器是否可靠）是元问题；④商业化：评测工具付费意愿与规模化待观察。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Kashikoi | Y Combinator（X25，一手核实批次/团队/产品） | https://www.ycombinator.com/companies/kashikoi |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
