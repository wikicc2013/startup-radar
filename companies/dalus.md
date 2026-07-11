# Dalus

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：AI systems engineering for hardware teams（面向硬件团队的 AI 系统工程）
- **官网/锚定**：https://www.ycombinator.com/companies/dalus
- **深研状态**：researched（在营，YC W25 已毕业，有营收；官网/YC 页均活跃。）

## 公司画像
- **团队**：2 名联合创始人 + 早期团队约 3 人，位于旧金山。Sebastian Völkl（CEO）——曾为欧洲空间局做月球温室舱建模，连续创业者（一家软件公司已卖出、一家脑机接口硬件创业公司）；Eliot Khachi（CTO）——航天工程本科，曾在 Aerojet Rocketdyne（L3Harris）任系统集成/测试工程师，为海军推进系统做 Proof of Design 测试规划。
- **成立/批次**：2024 年春
- **地点**：美国加州旧金山
- **产品**：AI 原生的基于模型的系统工程（MBSE）云平台，基于最新 SysML v2 规范。把需求、功能、架构、约束、分析、验证统一到单一真源，替代传统靠文档割裂管理的系统工程方式。核心模块：需求管理、系统架构分解（子系统/部件/接口）、分析与验证（行为耦合仿真、可跑 Python 脚本）、测试用例、系统安全与危害分析、实时协作（分支工作流、角色权限）、任务/项目阶段规划。AI Copilot 能读数百页工程文档与需求，自动从需求生成架构、检索信息、发现问题，宣称把复杂硬件系统建模从数周压缩到一天。
- **商业模式**：Freemium SaaS，按编辑席位月订阅。Free：$0（1 个模型/最多 250 元素）；Basic：$99/编辑/月（≤3 模型）；Pro：$249/编辑/月（不限模型）；Enterprise：定制（私有化部署、SSO/SAML、定制功能）。提供学生折扣。即将上线 GitLab/Simulink/Jira/Slack 集成与版本控制。
- **竞争格局**：对标传统重型 MBSE/需求管理工具：Dassault Systèmes（CATIA Magic/Cameo Systems Modeler）、IBM Rhapsody/DOORS、PTC、Ansys medini、Siemens Polarion 等。Dalus 差异化在于 AI 原生、原生 SysML v2、云协作与轻量易上手，主打让敏捷硬件团队用得起、用得快；直接同赛道的新锐还包括其他 AI-native 系统工程/需求管理创业公司。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（含 YC W25 标准投资） | 约 50 万美元（第三方聚合数据，未见官方披露） | 2025 | [链接](https://tracxn.com/d/companies/dalus/__KXOL07pGBNbae1c0_fuA--tpWbxuiNfsHjvyo63shto/funding-and-investors) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Israel Aerospace Industries（IAI，以色列航空航天工业公司） | 高 | [链接](https://www.ycombinator.com/companies/dalus) |
| IOX Lab（IoT 系统开发，系统工程师 Matthias Priebe 具名背书） | 高 | [链接](https://dalus.io/) |
| DefendTex（国防装备） | 中 | [链接](https://dalus.io/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Dalus 瞄准的是硬件研发最上游、最难数字化的一环——系统工程。航空航天、国防、机器人、汽车这些复杂装备行业，需求、架构、验证长期散落在 Word/Excel/PDF 和各人脑子里，靠人工同步，改一处要人肉追溯上下游，错一个接口就是几百万的返工。Dalus 的做法是把这套东西建成基于 SysML v2 的活模型（单一真源），再叠一层能读几百页文档、自动从需求生成架构、秒级校验需求一致性的 AI Copilot。对制造业的意义在于：MBSE 过去是波音、洛马这种巨头才养得起（工具贵、顾问贵、学习曲线陡），Dalus 用云化+AI+低价订阅把门槛砸到中小硬件团队也用得起，等于把'复杂系统研发的数字主线（digital thread）'平民化。这直击国产高端装备研发'重仿真、轻系统建模，需求-设计-验证难追溯'的痛点。
2. **国内对标厂商**：索为系统（Sysware）——面向航空航天/复杂装备的国产工业软件与 MBSE/知识自动化平台，最接近 Dalus 的复杂系统研发定位、安世亚太（PERA）——综合仿真 + 正向设计/MBSE 方法论与工具，服务航空航天军工、北京神舟/中船/航天院所自研 MBSE 工具链——多为体制内配套，未产品化为通用 SaaS、PLM 侧的 CAXA（数码大方）、山大华天——偏 CAD/PLM，缺原生 SysML v2 与 AI Copilot 能力
   > 国内 MBSE 是'方法论热、通用产品弱'：军工院所对基于模型的系统工程需求极强（国产大飞机、卫星、导弹都在推数字主线），但主流工具仍是达索 Cameo、IBM Rhapsody 等进口货，国产化以索为、安世亚太的方法论咨询+定制平台为主，很少有像 Dalus 这样'原生 SysML v2 + AI Copilot + 云协作 + 席位订阅'的标准化 SaaS。信创与军工自主可控背景下，这块存在明确的国产替代窗口，但客户高度集中在体制内、采购重私有化部署，Dalus 的低价云订阅模式在国内需大改。
3. **可迁移的干法 / 应进场景词典的词条**：MBSE 数字主线、需求-架构-验证一体化、文档转结构化模型、AI Copilot 自动生成架构、复杂装备研发协同、SysML v2、系统安全/危害分析
   > 可迁移的干法有三条。其一'把散落文档灌进 AI、自动抽成结构化模型'——任何研发/工艺/质量部门都有几百页 PDF 规范、需求、FMEA，用 AI 读文档反向生成可追溯的结构化模型，是通用打法。其二'单一真源 + 秒级一致性校验'——把需求-设计-测试挂成活的追溯网，改一处自动标出受影响项，可迁移到工艺变更管理、质量追溯、变更影响分析。其三'重型工具平民化'——用云+AI+低价订阅把原本只有巨头玩得起的专业软件（MBSE、CAE、PLM 模块）降维给中小制造企业，是国产工业软件的通用机会点。
4. **风险与存疑点**：①极早期：团队仅约 3 人、种子轮体量小（约 50 万美元级别），产品与营收都处早期，抗风险与交付能力待验证。②客户集中在航空航天/国防这类长采购周期、强合规、偏私有化部署的行业，SaaS 席位订阅与实际大客户落地节奏可能错配；具名客户虽有 IAI 这样的重量级设计伙伴，但多为设计伙伴/试用性质，规模化付费未披露。③赛道正面硬刚达索、IBM、Ansys、Siemens 等根基深厚的巨头，切换成本与生态壁垒高；AI 生成系统架构的准确性在安全攸关（safety-critical）场景需长期信任积累。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Dalus | Y Combinator 公司页 | https://www.ycombinator.com/companies/dalus |
| Launch YC: Dalus - Hardware system design software powered by AI | https://www.ycombinator.com/launches/Mna-dalus-hardware-system-design-software-powered-by-ai |
| Dalus 官网（产品/定价/客户） | https://dalus.io/ |
| Dalus - Tracxn 融资与投资人 | https://tracxn.com/d/companies/dalus/__KXOL07pGBNbae1c0_fuA--tpWbxuiNfsHjvyo63shto/funding-and-investors |
| Dalus - Crunchbase Company Profile | https://www.crunchbase.com/organization/dalus |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
