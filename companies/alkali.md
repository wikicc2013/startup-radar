# Alkali

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B005
- **一句话定位**：AI steel takeoff software for estimators（面向预算员的 AI 钢材算量软件）
- **官网/锚定**：https://www.ycombinator.com/companies/alkali
- **深研状态**：researched

## 公司画像
- **团队**：创始团队为化工背景 PhD：Emmett Goodman（斯坦福 PhD，前 AWS GenAI Labs 负责人，为 AWS 旗舰客户交付生成式 AI 方案）与 Victor Miller（UC Berkeley PhD，前壳牌 Shell 工程师，主导过 8 位数化工基建项目）。YC 目录显示团队规模约 2 人；聚合站 extruct.ai 另列 Luis Valencia 为 Co-Founder/CEO，但未被官网或 YC 独立佐证，存疑。YC 对接合伙人 Diana Hu。
- **成立/批次**：2025
- **地点**：旧金山（YC 目录标注 San Francisco）；官网页脚写 Built in Houston, TX，两地并存待核。
- **产品**：AI 钢材算量/takeoff 软件（alkali.engineering）：直接从 PDF 招投标图纸中用 AI/计算机视觉识别并算取梁、柱、桁架、支撑、底板等构件的数量、长度、形状、拱度、栓钉；内置 AISC 手册重量表自动计算项目吨位；支持改版/补遗变更追踪、跨大图集智能检索、实时协作（多人光标共享工作区）、料表 nesting 排版优化；可导出至 Tekla、Bluebeam、Adobe、Excel。宣称把算量时间减半。注：公司 YC 首发产品为 ProcessMate（面向化工工艺设计的 AI 副驾），后 pivot 至钢材算量，同一实体同一域名。
- **商业模式**：面向结构钢加工商/预算员（估价师）的 B2B SaaS；官网提供免费试用（无需注册即可试用），未公开定价与订阅层级，具体商业模式未披露。
- **竞争格局**：AI 钢材算量新锐扎堆：SketchDeck.AI、Beam AI（ibeam.ai）、Exayard、SteelFlo（steelfloai.com）；传统结构钢算量工具 eTakeoff、FastCAM MTO 等。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC / Pre-Seed | 未披露（YC X25 标准投资，公开渠道无独立金额披露） | 2025 | [链接](https://www.ycombinator.com/companies/alkali) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| D5 Iron Works | 低 | [链接](https://www.alkali.engineering/) |
| Eagle Fabricators | 低 | [链接](https://www.alkali.engineering/) |
| Skyline | 低 | [链接](https://www.alkali.engineering/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Alkali 打的是「钢结构加工厂/钢构分包商投标前的算量」这道最耗人力、最依赖老师傅经验的环节——把估价员逐张读 PDF、手工数构件、查手册算吨位的活儿，交给 AI 从图纸直接识别构件并自动出量。对制造业而言这是典型的『离散制造前端报价自动化』样本：报价准确度与速度直接决定接单率与毛利，AI 把资深估价员的隐性经验显性化、可复用、可协作，是『工程报价 copilot』这一品类的代表。
2. **国内对标厂商**：广联达（土建/钢结构算量与造价，钢结构 GJG 及云计价体系）、品茗（BIM 算量/施工 BIM 与造价软件）、鲁班软件（Luban，土建/钢结构 BIM 算量）
   > 国内钢结构算量长期由广联达（钢结构 GJG/云计价）、品茗、鲁班占据，强在本土规范/清单计价与 BIM 算量一体化，但普遍以『先建模再算量』为路径、对二维招标 PDF 直接 AI 识别出量的能力偏弱。Alkali 的差异点是『PDF 图纸→AI 直接算量』的轻量路径 + 实时协作 + AISC 规范内置，对国内『拿到一叠 PDF 招标图就要快速报价』的中小钢构厂场景有直接借鉴意义。
3. **可迁移的干法 / 应进场景词典的词条**：钢结构算量、投标预算/估价、PDF图纸识别、计算机视觉构件识别、AISC吨位计算、改版/补遗变更追踪、料表nesting优化、多人实时协作估价、Tekla/Bluebeam导出
   > 可迁移打法：①切一个『高频、重复、依赖老师傅、算错代价大』的细分算量场景做深（钢结构 takeoff），而非做通用图纸大模型；②把行业规范手册（AISC）作为知识底座内置，让 AI 输出可直接采信的吨位；③以『免费试用无需注册』极低门槛获客，用真实图纸让模型『每做一个项目就更强』形成数据飞轮；④用『已覆盖全美 X% 结构钢体量』这类行业渗透率指标做信任背书。国内对标可复制到钢构/幕墙/机电安装的投标算量。
4. **风险与存疑点**：①重大 pivot 风险：公司由化工工艺 AI 副驾 ProcessMate 转型为钢材算量，团队为化工 PhD 背景、非钢结构/建筑行业出身，行业 know-how 与渠道待验证。②创始人名录存分歧：聚合站另列 CEO Luis Valencia，与 YC 官方两人团队不一致，治理结构不清。③注册地 SF 与官网『Built in Houston』并存，需核实。④融资金额、客户均为官网 logo/宣称，无第三方独立佐证，客户置信度低；『7% 全美结构钢体量』为官网自述（截至 2026-04），未经独立核实。⑤赛道极度拥挤（SketchDeck/Beam AI/Exayard/SteelFlo 等多家同质竞品），先发壁垒不明显。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
