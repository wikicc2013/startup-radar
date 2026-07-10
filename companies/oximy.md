# Oximy

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：The system of record for enterprise AI usage（企业 AI 使用情况的记录系统）
- **官网/锚定**：https://www.ycombinator.com/companies/oximy
- **深研状态**：researched

## 公司画像
- **团队**：单一创始人 Naman Ambavi（创始人兼 CEO，23 岁；曾联合创办医药供应链公司 Easocare，并在 AI 浏览器自动化创业公司 Induced 任核心团队）。团队约 4 人，现招募创始工程师、GTM/内容实习生等。首位天使投资人为 Sudarshan（@ItzSuds，三年前投资其上一家公司）。
- **成立/批次**：2025 年成立；2026 年初 YC W26 批次公开亮相
- **地点**：美国加州旧金山（San Francisco）
- **产品**：面向企业的「AI 使用记录系统（system of record for enterprise AI usage）」——给企业对全员 AI 工具使用提供可见性与治理。三大核心能力：Discovery（发现所有已用/影子 AI 工具）、Spend Intelligence（AI 支出情报）、Data Protection（数据防泄漏/DLP 与策略执行）。部署方式：身份提供商（IdP）集成做用户映射与清单、防火墙/SIEM 集成检测影子 AI、以及 Oximy Sidekick 做内联 DLP 与策略执行；主打网络层检测、无需终端 agent。产品还含 Feed（内外部 AI 信号聚合）、Decisions（带上下文的建议）、Ask Oximy（查询本公司 AI 用量的 AI 助手）。官网自述定位从「可见性/治理」延伸到「每家公司的 AI 采纳引擎（The AI adoption engine for every company）」。宣称 60 秒接入、90 天见效、覆盖数千款 AI 工具。
- **商业模式**：面向企业的 B2B SaaS（订阅制，具体定价未公开披露）。买方为 CISO/安全、财务、以及转型团队；目标客群含金融服务、医疗健康、专业服务、成长期科技公司（20-200 人初创至 1000+ 人企业）。宣称日处理数百万请求。
- **竞争格局**：企业 AI 治理/影子 AI 发现赛道：Nightfall AI、Harmonic Security、Prompt Security、WitnessAI、Lasso Security、CalypsoAI、Portal26、Knostic 等 AI 安全/DLP 厂商；以及传统 CASB/SaaS 管理（Netskope、Zscaler、Nudge Security）和 SaaS 支出管理（Zylo、Productiv）的 AI 化延伸。差异点主打网络层无 agent 发现 + 支出情报 + DLP 三合一。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 早期（Pre-Seed/Seed，YC W26） | 未披露（第三方聚合站给出相互矛盾的数字：Startup Geek 记为 $500K Pre-Seed、StartupHub 记为 $2M，均为聚合来源、未经官方证实，低置信度） | 2026 | [链接](https://www.oximy.com/) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业在推进 AI 落地时，研发、工艺、供应链、销售等岗位会自发使用 ChatGPT/Claude/Copilot 等外部工具，极易把图纸、BOM、工艺参数、客户名单等敏感数据外泄，且 IT 完全无感知。Oximy 这类『AI 使用记录系统』提供的三件事——发现影子 AI、盘点支出、DLP 拦截——正是制造业 CIO 在『鼓励用 AI』与『守住数据边界』之间需要的中间层：先摸清全员到底在用什么、花多少钱、把什么数据发出去，再据此制定分级授权与合规策略。
2. **国内对标厂商**：国内企业 AI 用量治理/影子 AI 发现暂无同名标杆；对标可参照 SaaS 使用与支出管理（如 SaaS 管理/IT 资产盘点类）叠加数据安全 DLP 厂商（如安全数据防泄漏、上网行为管理/深信服、奇安信等）的能力组合、AI 网关/大模型调用审计方向的国内探索：各云厂商与 API 网关对 LLM 调用的计量、审计与合规管控（如阿里云/火山引擎的模型调用管理、AI 中台的用量看板）
   > 国内制造业当前更多靠『上网行为管理 + DLP + 内部禁用外部大模型』的堵式管理，缺少『既放开采纳又可见可控』的疏导型工具。Oximy 的网络层无 agent 发现 + 用量/支出看板思路，对国内『AI 中台 + 调用审计』方向有借鉴意义，但落地需适配国产大模型（通义/文心/豆包/DeepSeek 等）与私有化部署诉求。
3. **可迁移的干法 / 应进场景词典的词条**：企业AI治理、影子AI发现、AI用量审计、AI支出情报、数据防泄漏DLP、网络层无agent检测、CISO工具、AI采纳可见性
   > 可迁移打法：①以『60 秒接入、90 天见效』的轻量 PoC 降低企业尝试门槛；②用 Discovery 先做一份『全员 AI 用量体检报告』作为切入钩子，把影子 AI 可视化；③从可见性顺势升级到支出优化与 DLP 治理，形成从『看见』到『管住』到『用好（采纳引擎）』的价值阶梯；④绑定 CISO/CFO/转型负责人三类买家。
4. **风险与存疑点**：①单一创始人 + 4 人团队、成立仅一年，处极早期，产品与客户均未经充分验证；②融资金额无官方权威披露，聚合站数据相互矛盾（$500K vs $2M），不可作数；③早期客户全部匿名（金融/医疗/成长期科技），无可核实的具名客户，商业化证据薄弱；④赛道拥挤（Nightfall/Harmonic/Prompt Security/WitnessAI 等 + CASB 巨头下沉），差异化壁垒待观察；⑤官网定位从『治理/可见性』向『AI 采纳引擎』漂移，存在叙事 pivot 迹象，需持续跟踪。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
