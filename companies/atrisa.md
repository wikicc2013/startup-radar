# Atrisa (formerly Refortifai)

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：AI agents for analog circuit design（模拟电路设计的 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/atrisa
- **深研状态**：researched

## 公司画像
- **团队**：3 人创始团队。Sayan Mitra（CEO / 联合创始人）——曾任 KLA 半导体 AI 研究工程师，IIT Madras 电子工程学位；Atman Kar（CTO / 联合创始人）——前德州仪器（Texas Instruments）工程师；Rithik Jain（COO / 联合创始人）——负责 go-to-market 与客户体验。团队背景强绑定半导体/模拟电路一线工程经验。
- **成立/批次**：2026
- **地点**：美国加州旧金山湾区（San Francisco Bay Area）
- **产品**：Atrisa 是面向模拟电路（analog circuit）设计的 AI 智能体：用自然语言对话即可设计、理解、调试模拟电路。核心主张是'内化了模拟工程师的直觉'——对电路做层级化推理（hierarchical reasoning），根据规格匹配合适拓扑（topology），并做深度调试与实验，考虑可复用性（跨旧设计复用）、干扰、寄生效应（parasitics）、物理版图（layout）上下文。提供 chat 式现代界面，支持接入用户已有工具链、PDK 与设计文档，多实例可协同以避免流程阻塞。
- **商业模式**：未披露。定位为工程团队/模拟电路设计师的 AI 设计助手，推测为面向半导体/IC 设计企业的 SaaS/席位订阅或企业授权，融入现有 EDA 工作流；官方未公布定价与商业化细节。
- **竞争格局**：AI-for-EDA / AI 芯片设计赛道。学术侧有 AnalogAgent、ZeroSim 等 LLM+模拟电路设计研究；创业侧对标 Astrus（AI 自动化半导体设计，融资 1100 万加元）等；传统 EDA 巨头 Synopsys、Cadence 亦在加码 AI 辅助设计。Atrisa 差异点在于专攻'模拟电路'这一依赖 tribal knowledge、前沿 LLM 表现薄弱的细分。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：模拟电路设计是半导体制造上游的关键瓶颈，长期依赖资深工程师的'手感/直觉'与企业内部私有数据（tribal knowledge），前沿通用 LLM 因从未见过这类闭源数据而表现很差。Atrisa 把这种直觉工程化为可对话的 AI 智能体，对制造业（尤其 IC 设计公司、模拟器件厂）意味着：资深工程师稀缺经验可被沉淀、复用与规模化，缩短设计-调试周期，降低对个别专家的依赖。
2. **国内对标厂商**：华大九天（国产 EDA 龙头，模拟/数模混合设计工具）、概伦电子（器件建模与电路仿真 EDA）、芯华章（数字验证 EDA，AI 驱动）
   > 国内模拟 EDA 与设计工具由华大九天、概伦电子、芯华章等承载，正处国产替代加速期；但'自然语言驱动的模拟电路设计 AI 智能体'这一形态国内尚属早期，Atrisa 代表的'LLM+RL 内化工程师直觉'路线值得国产 EDA 厂商作为下一代能力对标。
3. **可迁移的干法 / 应进场景词典的词条**：模拟电路设计、AI EDA 智能体、自然语言芯片设计、电路调试自动化、拓扑综合、寄生/版图上下文推理、半导体研发提效
   > 可迁移打法：①用一线大厂（KLA、TI）工程师背景锚定行业信任与私有 know-how；②把'专家直觉'拆成层级化推理 + 拓扑匹配 + 寄生/版图上下文，做成可解释的 agent 流程；③不替换而是嵌入现有工具链（复用客户 PDK、设计文档、旧设计），降低采用门槛；④chat 界面 + 多实例协同，贴合工程师现有协作方式。对国内做垂直工业/研发 AI 的团队，'嵌入既有专业工具链而非另起炉灶'是核心可复制点。
4. **风险与存疑点**：①更名风险已注明：公司由 Refortifai 更名为 Atrisa（官网 refortif.ai / atrisa.ai，LinkedIn 仍为 refortif-ai），品牌尚在切换期。②极早期：2026 年成立、3 人、YC P26（原 X26）批次，无公开融资金额、无具名客户、无公开营收/traction 数据，商业化验证未知。③技术壁垒待证：模拟电路设计对准确性要求极高，AI 幻觉在流片场景代价巨大；私有数据依赖也意味着冷启动与数据获取难题。④巨头竞争：Synopsys/Cadence 等 EDA 巨头 + 学术开源方案（AnalogAgent/ZeroSim）夹击。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Atrisa (formerly Refortifai) — YC 公司页 | https://www.ycombinator.com/companies/atrisa |
| Launch YC: Atrisa: Agents for Analog Circuit Design | https://www.ycombinator.com/launches/QdM-atrisa-agents-for-analog-circuit-design |
| YC LinkedIn: Refortifai (YC P26) is building Atrisa | https://www.linkedin.com/posts/y-combinator_refortifai-yc-p26-is-building-atrisa-activity-7467696560047382528-M8hw |
| refortif.ai (YC P26) — LinkedIn 公司主页 | https://www.linkedin.com/company/refortif-ai |
| Atrisa 官网 | https://atrisa.ai/ |
| Atrisa (YC P26) Launch Video | https://www.youtube.com/watch?v=YupbVdchblk |
| YC P26 (formerly X26) Batch Companies — Extruct AI | https://www.extruct.ai/data-room/ycombinator-companies-p26/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
