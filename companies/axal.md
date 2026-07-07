# Axal

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B006
- **一句话定位**：AI workers for distributors and manufacturers（面向经销商与制造商的 AI 数字员工）
- **官网/锚定**：https://www.ycombinator.com/companies/axal
- **深研状态**：researched

## 公司画像
- **团队**：联合创始人 Samai Patel（CEO，CS/网络安全背景，20 岁时为 Amazon Project Kuiper 开发太空安全软件）与 Nand Vinchhi（CTO，前 Airchat 工程师、MIT CSAIL 研究员、30 次黑客松冠军）。总部旧金山，团队约 13 人（据 YC 目录页）。2025 年成立。YC 负责合伙人 Jared Friedman。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向制造商与经销商的 ERP 连接型「AI 数字员工」。核心产品把 B2B 订单录入自动化：从邮箱读取采购订单（PO）、发票、报价请求（RFQ）等非结构化文档，抽取信息、按业务规则校验，再直接写入 ERP。覆盖订单录入、报价、内/外销售、应付账款、应收账款等场景。宣称早期客户把单笔订单处理时间从 45 分钟压缩到 2 分钟，并平均每月捕捉约 1 万美元的定价错误。
- **商业模式**：B2B SaaS + 实施/落地服务，按 AI 数字员工的部署与使用收费，并提供咨询与外包选项。目标客户为中端市场（middle market）制造商与经销商。支持 SAP ECC、SAP S/4HANA、Oracle EBS/Fusion/JD Edwards、Microsoft Dynamics、Infor M3/CloudSuite、Epicor Eclipse/Prophet21 等主流工业 ERP。
- **竞争格局**：工业分销/制造后台的订单自动化与 AI 数字员工赛道，竞争者含 Conexiom、Esker、Rossum 等文档自动化/订单处理厂商，以及新兴 AI-agent 订单录入初创。差异化在于深度对接老旧工业 ERP + 面向中端市场分销商的垂直定位。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed/Pre-seed | 约 500K 美元（据 Tracxn/媒体转述，Crunchbase 与 Tracxn 为付费/登录墙，未逐条核对） | 2025 | [链接](https://tracxn.com/d/companies/axal/__NI4-rWBZFYb9Wy6xeBpp_1HH3ixs0yfXL3G4mrGQwco/funding-and-investors) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Rimeco Products, Inc. | 中 | [链接](https://www.axal.ai/) |
| W/GOOD CO. | 中 | [链接](https://www.axal.ai/) |
| Asendia | 中 | [链接](https://www.axal.ai/) |
| WLS | 中 | [链接](https://www.axal.ai/) |
| Custom Agronomics | 中 | [链接](https://www.axal.ai/) |
| ADS Advanced Distribution | 中 | [链接](https://www.axal.ai/) |

## 转型有术判断
1. **对制造业客户意味着什么**：命中制造业与工业分销「订单进 ERP」这一高频、重复、易错的后台环节：销售代表每周花 20+ 小时把邮件/PDF 里的订单手动重录进 ERP。Axal 用 AI 数字员工把「读单—抽取—按业务规则校验—写入 ERP」全链路自动化，直接对接 SAP/Oracle/Infor/Epicor 等制造业主流 ERP，且捕捉定价错误。对制造企业而言，这是不改主数据系统、在存量 ERP 外挂一层 AI 员工的低侵入落地路径。
2. **国内对标厂商**：用友 YonSuite / 用友 BIP —— 工业分销与制造后台 ERP 及智能单据处理、金蝶云·星空 智能财务/智能单据 OCR —— 应付应收、发票识别自动入账、来也科技 UiBot / 弘玑 Cyclone RPA+IDP —— 订单/发票非结构化文档抽取入 ERP、合思/分贝通、云扩科技等 RPA+大模型的销售订单自动录入方案、SAP/用友生态内的 AI Agent 订单录入服务商（如慧算账类财税智能体延伸）
   > 国内对标集中在两类：一是用友/金蝶等 ERP 原厂的智能单据与 OCR 入账能力；二是 RPA+IDP+大模型厂商（来也、弘玑、云扩等）做订单/发票自动录入。差别在于 Axal 是垂直到分销/制造、按「数字员工」封装并深绑老旧海外 ERP，国内多为通用 RPA 平台或 ERP 内置模块，垂直行业 know-how 与 ERP 覆盖面各有侧重。
3. **可迁移的干法 / 应进场景词典的词条**：工业分销订单录入自动化、PO/发票/RFQ 邮箱到 ERP、非结构化文档抽取(IDP)、报价与定价校验、应付应收后台数字员工、中端市场制造商与经销商、老旧工业ERP对接
   > 可迁移打法：①锁定一个高频重复且量化收益清晰的后台动作（订单录入 45min→2min、月省 1 万美元定价错误），用硬 ROI 打单；②不替换 ERP，做「外挂式 AI 员工」，把非结构化输入转成结构化写入，降低客户决策门槛；③以覆盖广度的 ERP 连接器为护城河，一次对接复用到同类分销商；④按「数字员工」而非「软件工具」定价与叙事，贴近人力替代预算。
4. **风险与存疑点**：①同名消歧风险：另有 web3 自治 Agent 网络的 Axal（纽约，CMT Digital 领投 250 万美元 pre-seed）与 AI 应用现代化平台 Axal，与本公司无关；本档以 axal.ai / YC W25 为准。②融资 500K 数字来自 Tracxn/媒体转述，原始页在付费/登录墙，未逐条核对，需二次确认。③客户 logo 来自官网首页，多为中等置信，缺独立第三方案例佐证。④公司 2025 年成立、13 人、种子极早期，产品叙事在「制造分销订单自动化」与早期宣传中的「遗留代码库现代化」之间存在过定位摇摆迹象，需关注是否 pivot。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
