# ALARA Dental

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B004
- **一句话定位**：Dental supply comparison and ordering platform（牙科耗材比价与下单平台）
- **官网/锚定**：https://www.ycombinator.com/companies/alara
- **深研状态**：researched（已锚定。批次口径需更正：任务卡写 F25/Fall 2025，但官网 YC 目录、LinkedIn、Crunchbase 等多源一致显示为 Summer 2025（S25）。产品定位为供应链采购/比价下单平台（非营销销售），与分诊维度一致。融资口径各源冲突（见 funding 与 risks），已按低置信处理。）

## 公司画像
- **团队**：家族创始团队（Obbad 三兄妹）。Kamal Obbad——连续创业者，Nebula Genomics 联合创始人兼 CEO（已被 Prophase 收购，D2C 全基因组测序），Forbes 30 Under 30，曾任 Google 产品经理、YC Fellowship 支持的 Patchco CEO；Elyas Obbad——CTO 型，曾在 DoorDash/Google/Meta 主导 AI 系统，斯坦福 CS 硕士、哥伦比亚本科，斯坦福 Trustworthy AI Lab 语言模型数据治理方向发表者；Dr. Sabrine Obbad——儿科牙医、私人诊所经营者，NYU 化学 B.Sc/M.Sc + NYU 牙学院 D.D.S，提供牙科采购痛点的一线场景 know-how。
- **成立/批次**：2025
- **地点**：未披露（YC 目录未标注具体城市；YC S25，美国）
- **产品**：牙科耗材采购比价与统一下单平台。对接诊所已有的各大牙科经销商账户（Henry Schein、Patterson Dental、Benco Dental、Darby Dental、Net32、Dental City、Safco、DC Dental 等 13+ 家），聚合各家商品目录，实时展示同一 SKU 的跨供应商价格、库存与促销；诊所可把不同供应商的商品放进同一购物车，在单一结算页一次提交，后台按供应商拆单路由，各家分别履约。内置分析看板呈现按供应商/品类的支出与累计节省。宣称首月典型可省约 35%（官方口径，未见第三方验证）。
- **商业模式**：对诊所侧完全免费（面向单体诊所、DSO 连锁与集团诊所）。变现路径官方未明确披露，推测走供应商侧返佣/导流分成、或后续 SaaS/数据增值——属于典型「买方比价聚合器」模式，靠帮买方省钱换取交易导流与议价数据。
- **竞争格局**：直接对标 Torch Dental（美国牙科耗材直采/下单平台，融资规模显著更大）、Method Procurement（牙科采购软件）、Zentist 等采购/RCM 工具；间接对手是被其聚合的分销巨头本身（Henry Schein、Patterson、Benco——它们不愿价格被透明化，存在断供/封账户风险）。Alara 的差异化在于「不自己囤货、只做跨供应商比价 + 统一结算路由」的轻资产聚合层，及创始团队的 AI 工程背景。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / Seed（含 YC 标准投资） | 约 $500K（口径不一：startupintros 记为 2025-09 种子轮 $500K；另有第三方聚合站称累计约 $2.0M；Crunchbase 记为 Pre-Seed 未披露金额） | 2025 | [链接](https://startupintros.com/orgs/alara) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：Alara 是「买方视角的多供应商比价 + 统一下单路由」这一采购数字化范式在牙科垂类的落地样本，对制造业/工业企业的间接采购（MRO、辅料、耗材）极具迁移价值。制造企业常年面对与牙科诊所同构的痛点：同一物料分散在多个经销商/代理商处、价格不透明且随账户与返点浮动、下单要在多个供应商门户间来回切换、月度支出难以按品类归集。Alara 的解法要点可直接照搬——不做自营库存的重资产电商，而是「挂接买方已有的供应商账户」形成聚合层，把跨源比价、单车结算、后台拆单路由、支出分析看板做成一层薄中间件。对制造业 SCM 的启示是：真正的降本抓手常在「非生产性采购的信息不对称」而非压价谈判本身；一个把碎片化供应商价目透明化、并保留原有履约关系的工具，就能在不改动既有供应链的前提下挤出两位数节省。AI 团队背景也预示下一步——用模型做 SKU 归一化匹配、需求预测补货、异常价格识别，这些正是工业品 MRO 数字化的核心能力。
2. **国内对标厂商**：震坤行工业超市（ZKH）——工业品 MRO 一站式 B2B 电商/数字化采购，多 SKU 聚合与支出分析，是「买方降本 + 长尾供应商聚合」的最接近国内对标，但震坤行偏自营+平台混合、更重、固安捷中国 / Grainger 模式——MRO 工业耗材分销数字化、医院 SPD（供应链集约化管理）+ 医用耗材集采/阳光采购平台——在医疗耗材垂类与 Alara 的「垂直行业耗材比价透明化」逻辑最贴近、国联云采、京东工业、鑫方盛等工业品数字采购平台——多供应商比价与统一下单的国产变体
   > 国内没有 1:1 对标的「牙科耗材比价聚合器」，最接近的是工业品 MRO 数字采购（震坤行/京东工业/固安捷）与医疗耗材 SPD/集采两条线。差异在于：Alara 走的是极轻的「聚合买方已有账户、不碰库存与履约」路线，而国内 MRO 平台多演进为自营+平台的重模式、医疗耗材则由集采政策主导。Alara 模式对国内启示是垂类「比价中间件」这一更轻的切入点——尤其适合分销高度分散、价格高度不透明的耗材品类（牙科、宠物医疗、美业、实验室试剂等）。
3. **可迁移的干法 / 应进场景词典的词条**：多供应商比价聚合、统一购物车/单点结算、后台拆单路由、间接采购/MRO 数字化、支出分析看板、SKU 跨源归一化匹配、买方侧降本工具、垂类耗材采购 SaaS
   > 可迁移干法：核心是「不动既有供应链、只加一层透明化中间件」——挂接买方原有供应商账户→抓取/归一化跨源价目→同 SKU 比价→单车下单后台按供应商拆单路由→沉淀支出与节省看板。这套「聚合已有账户 + 比价 + 拆单路由」的组合拳可平移到任何『供应商分散、价格不透明、下单要多门户切换』的耗材采购场景（工业 MRO、实验室试剂、餐饮食材、宠物/美业耗材、医院耗材）。对制造业间接采购团队，是一个低改造成本的降本模板。
4. **风险与存疑点**：①渠道封杀风险（最大）：核心价值依赖抓取/接入 Henry Schein、Patterson 等分销巨头的账户与价目，而这些巨头恰恰不愿价格被横向透明化，随时可能封账户、改接口或起诉，商业模式的根基受制于被对标对象。②变现路径未验证：对诊所免费，靠供应商返佣/导流的盈利模式在巨头抵触下能否跑通存疑；『首月省 35%』为官方口径、无第三方背书。③极早期 + 信息稀薄：2025 年成立、YC S25、融资金额多源冲突（$500K vs $2.0M vs 未披露），无公开可核的付费诊所客户名单，尚处 PMF 早期，执行与留存待证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Alara – The Smartest Way to Purchase Dental Supplies（官网） | https://alaradental.com/ |
| Alara: Procurement Platform for Dental Offices | Y Combinator（YC 目录，S25） | https://www.ycombinator.com/companies/alara |
| Alara: Funding, Team & Investors | startupintros | https://startupintros.com/orgs/alara |
| Alara – Crunchbase Company Profile & Funding | https://www.crunchbase.com/organization/alara-3e15 |
| ALARA (YC S25) | LinkedIn | https://www.linkedin.com/company/alaradental |
| Kamal Obbad – CEO, Co-founder at Nebula Genomics | The Org | https://theorg.com/org/nebula-genomics/org-chart/kamal-obbad |
| Dental Supplies: Save 35% with Alara's AI Smart Pricing（官网博客） | https://alaradental.com/dental-supplies-ai-smart-pricing/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
