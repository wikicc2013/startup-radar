# Macadamia

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B006
- **一句话定位**：AI agents for industrial engineering（面向工业工程的 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/macadamia
- **深研状态**：researched

## 公司画像
- **团队**：两位联合创始人（团队约 2 人，2025 年）。Abel Van Steenweghen（联合创始人/CEO，代尔夫特理工 TU Delft 计算机科学硕士，此前创办过 AI 创业公司）；Brecht Pierreux（联合创始人，机械工程硕士，ETH Zurich + Caltech，曾任 SpaceX Starlink 工程师、NASA JPL 工程师）。创始故事：Brecht 在 SpaceX 目睹工程师之间的信息断层与承包商过时技术文档导致数千美元级别的返工错误。
- **成立/批次**：2025
- **地点**：美国旧金山（公司注册地）；创始团队源自比利时根特（Ghent）。
- **产品**：旗舰产品 Cooper —— 一个「AI 机械工程师」智能体：扫描项目文件（网盘、邮件、CAE/CAD 工具），在设计错误升级为返工前尽早发现并标记，主动提出修复方案并自动更新工程工作流。官网还展示多角色智能体矩阵：CAD 技术员（生成 AutoCAD 图纸并校核尺寸）、安全工程师、QA 检查员、成本估算员、数据录入员，以及 P&ID 管理（将工艺流程图与设备清单交叉比对、标记不一致）。宣称可对接 AutoCAD/Autodesk/Onshape/Revit、ANSYS/COMSOL/MATLAB/Siemens、Jira/Procore/Confluence、Slack/Microsoft/Google 等既有工程软件与 ERP。
- **商业模式**：B2B SaaS，面向工业 EPC（工程-采购-建设）、机械工程、制造与建筑企业。以 demo 演示驱动销售，主打「数天上线，而非数月」（Go live in days, not months）。定价未公开披露。
- **竞争格局**：官方材料未点名竞品。所处赛道为「面向工程/制造的 AI 智能体」与工程文档/设计错误自动检查，相邻玩家包括各类 AI-CAD/设计校审、EPC 工程文档 AI 助手类创业公司（具体名单未披露）。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 未披露 | 未披露 | [链接](https://www.crunchbase.com/organization/macadamia) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：Macadamia 切的是制造与工程行业里最贵、最隐蔽的成本——「设计/文档错误在下游放大成返工」。它把 AI 智能体嵌进机械工程师的既有工具链（CAD/CAE/ERP/邮件/网盘），在错误升级前主动扫描-标记-提修复，本质是把资深工程师的「交叉核对与经验判断」沉淀成可复用的自动化流程。对制造业的启示：AI 落地的高价值切口不在炫技的生成式设计，而在「低杠杆重复核对工作」（尺寸校核、P&ID 与设备清单比对、技术文档版本一致性），这些正是转型有术强调的「人机协同中把常规任务托付给 Agent」的典型场景。
2. **国内对标厂商**：工业软件/工艺仿真国产替代方向：安世亚太（PERA，仿真+工业互联网）、CAE/结构仿真国产厂商：云道智造（Simdroid 国产通用仿真平台）、EPC 工程数字化/设计院数字化：广联达（工程建造软件）、中望软件（中望CAD/CAE，国产CAD替代）、工业工程/工艺仿真与数字孪线方向：数码大方 CAXA（工艺+CAD）
   > 国内对标要分两层看：工具层（中望软件、数码大方 CAXA、云道智造、安世亚太）已在做国产 CAD/CAE 替代，但普遍仍是「工具」而非「智能体」；智能体层（把设计错误检查、文档核对做成自动跑的 Agent）在国内尚属早期空白，多数停留在设计院/EPC 数字化交付（广联达）与 PLM 流程管控，缺少「跨工具主动扫错」的产品形态。Macadamia 的产品定义值得国内工业软件厂商与制造业数字化团队镜像。
3. **可迁移的干法 / 应进场景词典的词条**：工业工程IE、机械设计错误检查、工艺仿真/CAE、EPC工程文档核对、CAD图纸自动生成与尺寸校核、P&ID工艺流程图一致性检查、工程知识断层弥合、AI工程智能体
   > 可迁移打法：1）从「贵而隐蔽的返工成本」切入，用一个窄场景（如 P&ID 与设备清单一致性）证明 ROI，再横向扩角色矩阵；2）不替换而是嵌入既有工具链（CAD/ERP/邮件/网盘），降低切换成本、主打「数天上线」；3）用创始人行业背景（SpaceX/JPL 一线痛点）建立信任，B2B 演示驱动获客；4）把资深工程师经验产品化为多角色 Agent（CAD 技术员/安全工程师/QA/成本估算），走「人做决策、Agent 做核对」的人机协同路线。
4. **风险与存疑点**：1）团队极小（约 2 人，2025 新公司），交付与规模化能力待验证；2）融资仅 Crunchbase 标注 Pre-Seed，金额与投资方均未公开，资金厚度未知；3）无公开具名客户，PMF 与营收未验证；4）赛道依赖与重工业软件（ANSYS/AutoCAD/Siemens 等）的深度集成，接口稳定性与厂商合作是长期壁垒也是长期风险；5）工程错误检查涉及安全与责任边界，误报/漏报的信任门槛高，落地需要人兜底（HITP）。未发现更名或 pivot 迹象。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Macadamia — Y Combinator 公司页（YC W25，AI Agents for Complex Engineering Projects） | https://www.ycombinator.com/companies/macadamia |
| Macadamia 官网 — AI Agents for Industrial Engineering Automation（产品/集成/多角色Agent） | https://macadamialabs.com/ |
| Y Combinator LinkedIn — Macadamia (YC W25) 发布 AI 机械工程师 Cooper | https://www.linkedin.com/posts/y-combinator_macadamia-yc-w25-is-building-an-ai-mechanical-activity-7300907561736642562-niXN |
| Abel Van Steenweghen LinkedIn（联合创始人/CEO） | https://www.linkedin.com/in/abelvs/ |
| Brecht Pierreux LinkedIn（联合创始人，前 SpaceX Starlink 工程师） | https://www.linkedin.com/in/brecht-pierreux-54b327181/ |
| Macadamia — Crunchbase 公司页（标注 Pre-Seed，金额未披露） | https://www.crunchbase.com/organization/macadamia |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
