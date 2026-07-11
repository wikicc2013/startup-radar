# Artifact

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：Collaborative ECAD for hardware teams（面向硬件团队的协作式 ECAD）
- **官网/锚定**：https://www.ycombinator.com/companies/artifact-2
- **深研状态**：researched

## 公司画像
- **团队**：两位创始人均为航空航天背景。Antony Samuel（CEO）——电气工程师，8 年复杂航空系统航电与软件经验，曾任 Hermeus（Mach 5 最快飞机）航电负责人，从零搭建其航电团队与基础设施。Corbin Klett（CTO）——佐治亚理工航空航天工程博士，控制理论方向，曾为高速飞行器原型做嵌入式软件。团队约 3 人，另招募前向部署/高级软件工程师。
- **成立/批次**：2025
- **地点**：美国纽约市（NYC）；工程岗亦招募于洛杉矶
- **产品**：面向硬件/电气工程师的协作式、AI 原生 ECAD IDE，定位电气系统设计（尤其电气线束 harness / 布线系统），号称『设计-采购-制造的单一真源』。核心能力：版本控制的协作编辑（类『硬件版 Google Docs / VS Code』），实时自动生成线束图、pin-table 引脚表、BOM；AI datasheet 解析器自动生成引脚定义；电气规则检查（ERC/DRC）；低保真到高保真设计的分层链接与导航；与 3D CAD 双向联动；面向国防的 ITAR/CUI 合规与 GovCloud 部署。设计、制造、采购团队可并行协作。
- **商业模式**：SaaS 订阅，分层许可（协作席位 + 不限量 viewer 只读席位）；提供云端与客户私有云（含 GovCloud）部署。初始客群为中小型航空航天公司的电气线束设计。
- **竞争格局**：自我定位为『硬件工程师的 VS Code / Cursor for hardware』。与 Altium/KiCad 的关系：Altium/KiCad 是主流 PCB 原理图+版图设计工具，聚焦电路板本身；Artifact 官网未直接对标二者，而是把竞争对象点名为 SolidWorks Electrical 与 RapidHarness——即系统级电气/线束设计而非板级布线，切入的是『整机电气系统 + 线束 + 跨子系统信号追踪』这一层。技术上把原理图拆成离散、逻辑连接的积木块，使 LLM 能像输出 JSON 一样结构化生成图纸（创始人称之为『2D 问题空间』），这是其相对传统 ECAD 的 AI 差异点。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $3.5M | 2025 | [链接](https://www.ycombinator.com/companies/artifact-2) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Boom Supersonic | 中 | [链接](https://www.artifact.engineer/) |
| Hermeus | 中 | [链接](https://www.artifact.engineer/) |
| Castelion | 中 | [链接](https://www.artifact.engineer/) |
| Applied Intuition | 中 | [链接](https://www.artifact.engineer/) |
| K2 Space | 中 | [链接](https://www.artifact.engineer/) |
| Peak Energy | 中 | [链接](https://www.artifact.engineer/) |
| Skyways | 中 | [链接](https://www.artifact.engineer/) |
| Astro Mechanica | 中 | [链接](https://www.artifact.engineer/) |

## 转型有术判断
1. **对制造业客户意味着什么**：Artifact 把『电气系统/线束设计』这个长期被 Altium/KiCad（板级）与 SolidWorks Electrical/RapidHarness（系统级）割裂、且严重依赖 Excel+PDF+人工交接的环节，重做成一个带版本控制、实时协作、并能自动生成线束图/BOM/引脚表的单一真源。对硬件研发协作的意义在于：设计、采购、制造三方过去是串行的『扔过墙』流程，一处电气定义变更要靠人工同步到十几份文档，改动越晚成本越高；Artifact 让三方在同一模型上并行协作，变更实时传播、制造图纸自动重生，等于把软件工程的『代码即真源 + CI 校验』搬到硬件电气域。AI 层则解决『读 datasheet 抄引脚』『按意图生成原理图积木』这类高重复、易错的低价值工作。对制造业启示：越是『多方交接、图纸即契约、改一处牵全身』的研发环节（电气、管路、工装、工艺路线），越适合用结构化数据模型 + 协作实时同步 + AI 生成来替代 Excel/PDF 人工搬运。
2. **国内对标厂商**：立创EDA（EasyEDA/嘉立创EDA）——国内云端协作式 EDA 代表，浏览器内画原理图+PCB、天然多人协作、与嘉立创 PCB/贴片制造闭环打通；但聚焦板级设计，缺 Artifact 的系统级线束/整机电气与 AI 生成能力。、华大九天（Empyrean）——国产 EDA 龙头，能力偏 IC/板级仿真设计，非协作 SaaS、非线束系统层，可作『国产 EDA 工具链』大盘参照。、嘉立创供应链（JLC）——把 PCB/PCBA 制造做成在线一体化的国内标杆，可类比 Artifact『设计直连制造』的闭环诉求，但其自身不做协作式电气系统设计工具。
   > 国内最贴近的是立创EDA：同样走浏览器端、多人实时协作、与制造闭环（嘉立创）打通，且已是国内电子工程师量大面广的入口，这点比 Artifact 更成熟。但立创EDA 的战场在板级原理图+PCB，Artifact 切的是更上层、更碎片化的『整机电气系统/线束/跨子系统信号』——这一层国内目前几乎没有对应的协作 SaaS 产品，多数仍靠 Excel、Visio、SolidWorks Electrical 与人工。AI 原生生成图纸（结构化 2D 积木 + LLM）方面国内亦无成熟对标。可迁移的反向情报：国内做电气/线束/工装工艺工具的团队，值得学 Artifact『把交接文档变成带版本的活模型 + 制造图纸自动生成』的产品形态，以及聚焦航空航天/国防等高复杂度高合规客群的打法。
3. **可迁移的干法 / 应进场景词典的词条**：协作式ECAD、电气线束设计、单一真源、设计-制造闭环、AI生成原理图、硬件研发IDE、版本控制、航空航天与国防
   > 可迁移干法：①把『图纸/文档即契约』的研发环节从 Excel+PDF 人工交接，升级为带版本控制的结构化活模型，让设计-采购-制造并行协作、变更实时传播；②用 AI 解析 datasheet/规格书自动填充结构化数据（引脚、参数），消灭高重复低价值的手工抄录；③把领域图纸拆成离散、逻辑连接的积木块，使其可被 LLM 结构化生成与校验——这套『结构化 + 协作 + AI 生成 + 自动出图』的组合，可复用到管路、工装夹具、工艺路线、装配指导书等一切『多方交接、改一处牵全身』的制造研发场景。④切入策略上锁定高复杂度、高合规门槛的头部客群（航空航天/国防），以合规（ITAR/GovCloud）+ 真源协作构建壁垒。
4. **风险与存疑点**：①同名混淆与品类噪声：『Artifact』是通用词，市场上有新闻聚合 Artifact、会计自动化 Artifact AI（$4M）等多个同名公司，品牌与 SEO 存在天然稀释；②极早期：2025 年成立、约 3 人团队、仅 $3.5M 种子、客户多在 NDA 下，产品与营收成熟度未经充分验证，客户 logo 墙为中等置信（logo 露出，缺公开 case study 与联合发声）；③市场与替代风险：切入的系统级电气/线束设计是小而专的利基，既要面对 Altium、Siemens/Zuken 等重型 ECAD 巨头向系统级延伸，也要对抗 SolidWorks Electrical、RapidHarness 及大量客户自建 Excel/内部工具的惯性，且航空航天/国防客户采购周期长、合规门槛高，规模化速度存疑。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Artifact | Y Combinator (W25) 公司页 | https://www.ycombinator.com/companies/artifact-2 |
| Artifact 官网——Electrical System Design Tool / ECAD for Hardware Teams | https://www.artifact.engineer/ |
| How Artifact is Creating 'Cursor for Hardware' — Mastra Blog | https://mastra.ai/blog/artifact |
| Artifact: Funding, Team & Investors — startupintros | https://startupintros.com/orgs/artifact-2 |
| Artifact (YC W25) is hiring engineers in NYC — Hacker News | https://brianlovin.com/hn/45719996 |
| Corbin Klett — No Cap Blog（创始人访谈） | https://nocap.blog/founder/corbin-klett/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
