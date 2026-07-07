# Articulate

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Automated procurement for construction & solar（面向建筑与光伏的自动化采购）
- **官网/锚定**：https://www.ycombinator.com/companies/helonic
- **深研状态**：researched

## 公司画像
- **团队**：2人小团队。联合创始人兼CEO Milind Sagaram（伊利诺伊大学香槟分校计算机工程；曾任职 SpaceX/Northrop Grumman/BMW，在 SpaceX 为 Starlink 搭建卫星与地面站硬件测试基础设施），另一联合创始人 Blake Passe（公开资料未披露具体背景）。来源：https://www.ycombinator.com/companies/helonic ，https://www.linkedin.com/in/milind-sagaram/
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向建筑与光伏（construction & solar）的 AI 施工图审查/协同平台。核心能力：自动解析 2D PDF 施工图，跨建筑、结构、机电（MEP）、光伏等专业检测碰撞冲突、缺失信息、图纸不一致、规范合规问题与可施工性问题，自动生成 RFI（信息请求单）与 submittal，并集成 Procore、Autodesk/Revit、Bluebeam、Outlook/Gmail、Google Drive、SharePoint。早期 Articulate 定位含‘自动化采购（automated procurement）+ 通过短信/邮件/语音 agent 主动与班组沟通/打卡’，当前主打图纸问题检测。重要提示：公司于 2026-03-11 将产品品牌从 Articulate 更名为 Helonic（法律实体仍为 Articulate AI, Inc.），因原名与在线教育大厂 Articulate 360 混淆。来源：https://helonic.com ，https://helonic.com/blog/articulate-rebrand-helonic
- **商业模式**：B2B SaaS，订阅制；官网含免费工具（RFI 计算器、返工节省估算器、图纸审查计算器）作为获客漏斗，核心图纸分析服务为付费订阅。目标客户为总包商、项目经理/施工员、结构工程公司、建筑师/土木工程师及光伏安装商。具体定价未披露。来源：https://helonic.com ，https://www.ycombinator.com/launches/Oen-helonic-automatic-construction-drawing-issue-detection
- **竞争格局**：对标 Autodesk（Navisworks/BIM 碰撞检测）、Procore 生态、Bluebeam 等既有 AEC 软件；以及新兴 AI 图纸审查/RFI 自动化创业公司。差异化在于用 AI 直接从 2D PDF 图纸（而非要求完整 BIM 模型）做跨专业问题检测并自动起草 RFI。长期愿景自称做‘建筑界的 Lovable’——从海量施工图学习、自动生成安全可建、合规的建筑。来源：https://www.ycombinator.com/companies/helonic

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC 标准 deal（Fall 2025 批次） | 约 50 万美元（YC 标准 $500K SAFE，未经一手确认） | 2025 | [链接](https://www.ycombinator.com/companies/helonic) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Barnhill Contracting | 中 | [链接](https://helonic.com) |
| Swinerton | 中 | [链接](https://helonic.com) |
| Whiting-Turner | 中 | [链接](https://helonic.com) |
| LS Black Constructors | 中 | [链接](https://helonic.com) |
| Omni Structural | 中 | [链接](https://helonic.com) |
| Lema Construction | 中 | [链接](https://helonic.com) |
| Urban Core | 中 | [链接](https://helonic.com) |
| Johnson Pace | 中 | [链接](https://helonic.com) |
| Archi Group of Builders | 低 | [链接](https://helonic.com) |
| LMG Ventures | 低 | [链接](https://helonic.com) |

## 转型有术判断
1. **对制造业客户意味着什么**：Articulate/Helonic 的内核是‘把非结构化工程图纸/规范转成结构化问题清单 + 自动生成下游单据（RFI/submittal/采购）’——这套‘文档→问题→工单’的 AI 流水线可直接迁移到制造业的图纸会审、工艺文件一致性校验、BOM 与图纸对齐、设备安装图纸碰撞检查等场景。对光伏/建筑供应链而言，其早期‘自动化采购 + 语音/短信 agent 主动催办’的设定，对应制造业的物料齐套预警与供应商主动协同。
2. **国内对标厂商**：广联达（建筑工程造价/BIM/施工协同龙头，最接近的图纸/工程数据平台对标）、品茗股份（BIM 与施工安全/图纸审查工具）、鲁班软件（BIM 与工程算量）、光伏 EPC 采购/供应链侧对标：正泰、天合光能等一体化 EPC 的项目采购数字化，及震坤行等工业品 MRO 采购平台（对应 Articulate 早期‘自动化采购’设想）
   > 国内广联达、品茗、鲁班已在 BIM/施工审查占位，但多依赖完整 BIM 模型且以人工审图为主；Articulate 的‘直接吃 2D PDF、AI 出 RFI’降低了数据门槛，这是国内工具尚薄弱、值得跟踪的能力点。光伏侧国内 EPC 采购数字化仍以 ERP+人工为主，缺少‘图纸驱动的采购自动化’产品。
3. **可迁移的干法 / 应进场景词典的词条**：施工图审查、跨专业碰撞检测、RFI自动生成、工程返工预防、光伏EPC设计协同、AEC工作流自动化、工程采购自动化、施工班组沟通agent
   > 1) 用免费工具（返工/RFI 成本计算器）做 SEO/获客漏斗，先量化痛点再转付费；2) 不强求上游全量数字化（BIM），直接从存量 PDF 图纸切入，降低采纳门槛；3) 深度嵌入客户既有系统（Procore/Autodesk/Bluebeam）而非替代，做‘审查+起草’的 copilot；4) 从‘检测问题’向‘自动生成下游工单/采购单’延展，逐步吃掉工作流。
4. **风险与存疑点**：1) 品牌/定位摇摆：一年内从 Articulate 更名 Helonic，且从‘采购自动化’收敛到‘图纸问题检测’，方向仍在验证；2) 2 人团队、极早期（YC F25），除 YC 标准投资外无确凿融资/收入数据；3) 官网客户 logo 多为‘中/低置信度’，未见一手案例数据佐证使用深度；4) 图纸审查赛道与 Autodesk/Procore 正面重叠，且 AI 出错（漏检/误报 RFI）在工程场景责任重、容错低；5) 早期‘采购自动化’是否仍在产品线内不明确，光伏采购这一原始卖点可能已弱化。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
