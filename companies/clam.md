# Clam

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Enterprise-grade security for broad-access AI agents（面向广权限 AI 智能体的企业级安全）
- **官网/锚定**：https://www.ycombinator.com/companies/clam
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人，均为 UC Berkeley 计算机科学背景、曾在校修同一门安全课并结为搭档。Anshul Paul（CEO）此前在 HappyRobot（YC 系 B 轮公司）负责 AI 评测与可观测性；Vaibhav Agrawal 此前在 Augment Code（B 轮 AI 公司）负责虚拟 Agent 的规模化。公开可查团队规模未披露。
- **成立/批次**：2025 年创立（Tracxn 另记为 2026）；入选 YC Winter 2026（W26）批次。前身为 Baseframe。
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向广权限 AI Agent 的企业级安全基础设施，核心产品是「Semantic Firewall（语义防火墙）」——在网络层围绕 AI 运行环境设置的安全检查点，对 AI 发出与接收的每条消息做多重扫描：①个人隐私泄露（SSN、信用卡号、私钥）；②提示词注入（越狱、指令覆盖）；③恶意代码（反弹 shell、编码执行）。API Key 与密钥在网络层注入，AI 本身永不接触或存储凭据。当前落地形态围绕安全运行 OpenClaw 等 AI Agent 框架（『Run OpenClaw Securely in Minutes』），并已与 Composio 完成集成。产品经历过 pivot：创始人自述『YC 中途从 software for hardware 转向』AI Agent 安全。
- **商业模式**：B2B / AI-native SaaS（services-as-software）。理想客户为部署广权限 AI Agent、需要 PII 保护 + 提示注入防护 + 密钥管理的企业；金融、医疗、法律等合规驱动买家为高价值细分。随每一个新 AI Agent 部署而扩张 TAM。具体定价未公开披露。
- **竞争格局**：AI Agent / LLM 运行时安全赛道，对标 Prompt injection 防护与 LLM 网关类玩家（如 Lakera、Prompt Security、Protect AI、HiddenLayer，以及各类 LLM Guardrail / AI Gateway）。差异点在于『网络层语义防火墙 + 凭据在网络层注入、AI 永不接触密钥』的定位。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（标准投资，第三方数据库记为 seed） | 约 $500K（Tracxn 记录，疑为 YC 标准 deal 金额；官方未单独披露融资） | 2026-01 | [链接](https://tracxn.com/d/companies/clam/__wyZgrId1tEN1KYxHO71uky7YUDb9TcBmrXcj9XU7sE8) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业一旦把 AI Agent 接入 MES/ERP/PLM、供应商门户或工控数据，Agent 就成为『广权限』主体，可读写图纸、BOM、报价、客户与员工 PII——一次提示注入或凭据外泄即可造成商业秘密泄露或产线误操作。Clam 式『网络层语义防火墙 + 凭据永不落到模型』的范式，正是制造业把 Agent 从『试点玩具』推向『车间/供应链生产系统』时缺失的那道安全闸门。
2. **国内对标厂商**：蚂蚁集团「蚁天鉴」大模型安全一体化平台（大模型/Agent 安全评测与防护）、阿里通义大模型安全护栏、360 智脑安全、奇安信 / 深信服「安全 GPT」等大厂 AI 安全能力、云起无垠等 AI 原生安全 / 提示注入与内容安全 Guardrail 初创（对标 LLM 运行时防护）
   > 国内尚无与 Clam 完全对位的『Agent 网络层语义防火墙』独立创业公司；能力多内嵌在大厂平台（蚂蚁蚁天鉴、奇安信/深信服安全 GPT）或分散在 AI 原生安全初创手中。对制造业客户而言，短期更可能以大厂 AI 安全模块 + 传统 DLP/密钥管理（KMS）组合替代，独立轻量『Agent 防火墙』是空白位。
3. **可迁移的干法 / 应进场景词典的词条**：AI Agent 运行时安全、语义防火墙 / Semantic Firewall、提示词注入防护、PII / 敏感数据泄露拦截、密钥与凭据网络层注入、企业级 AI 合规（金融/医疗/法律）、LLM 网关 / AI Gateway
   > 可迁移打法：①把安全做成『旁路网络检查点』而非改造模型/应用，实现分钟级接入（对制造 IT 改造成本敏感者友好）；②凭据在网关注入、模型永不接触密钥——直接映射到工厂『第三方 AI 供应商不得触碰核心系统口令』的采购红线；③以 OpenClaw/Composio 等开源 Agent 生态为楔子先获取开发者，再向合规驱动的重管制行业（金融/医疗，制造中的军工/医械/汽车）做企业化上翻。
4. **风险与存疑点**：①极早期（W26、疑似仅 YC 标准 $500K），团队规模与营收未披露，客户名单为空，落地深度存疑；②已发生 pivot（Baseframe『software for hardware』→ AI Agent 安全），方向仍在验证，存在再次转向风险；③强绑定 OpenClaw/Composio 等特定 Agent 框架生态，若上游格局变动则护城河承压；④与大厂 AI 安全平台正面竞争，独立网关能否被企业采购接受需观察；⑤本档融资数据来自第三方数据库（Tracxn），官方未证实，视为待核。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
