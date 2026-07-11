# Velum Labs

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：The OS for data quality across any stack（跨任意技术栈的数据质量操作系统）
- **官网/锚定**：https://www.ycombinator.com/companies/velum-labs
- **深研状态**：researched（锚定成功。分诊维度应归「AI 基础设施（数据质量/数据可观测性/数据治理底座）」，而非生产制造——官网与 YC 页面均将其定位为 The OS for data quality / Semantic Control Plane for Data，即一层监控并强制企业数据栈质量的运行时基础设施，与工业制造无直接关系。重要发现：本公司发生过明显转向（pivot）。2025 年秋首次进入 YC（创始人 LinkedIn 自述 F25 批次）时做的是「零信任 AI 隐私」——基于全同态加密 FHE 的开源『动态数据防火墙』，让 AI 在加密数据上做推理/训练；至 2026 年（YC 官网标 Winter 2026，LinkedIn 公司页与官网标 P26）已转向数据质量 OS。批次命名存在 F25/W26/P26 三种口径的不一致，系 YC 滚动批次与公司自我登记差异所致，以 YC 官方目录页 Winter 2026 为准。仓库登记的 B002 为内部批次号。）

## 公司画像
- **团队**：2 人。Benjamin Muñoz-Cerro（联合创始人兼 CEO，斯坦福物理/数学背景，曾在哈佛与马克斯·普朗克研究所做 5 年量子计算强化学习方法研究）；Alen Rubilar-Muñoz（联合创始人兼 CTO，ML 软件工程师、数学爱好者，X/GitHub 账号 000alen）。两人自智利高中起就是搭档，一起创业。
- **成立/批次**：2025
- **地点**：美国加州旧金山（San Francisco）
- **产品**：数据质量『操作系统』/『数据语义控制平面』。核心思路：不做人工写规则，而是观测企业真实生产查询流量，自动推导数据契约（data contracts）、跨任意技术栈追踪数据血缘（lineage），并从数据摄入一路强制完整性到高管看板，让脏数据在到达 dashboard 前被拦截。工作流分三段：Divergence（异常/差异检测，覆盖查询模式与取值分布）、Understanding（实时依赖映射，定位数据在哪里断裂/传播）、Resolution（自动生成修复并通过现有 git/dbt/CI-CD 部署，并沉淀为可强制的数据契约防复发）。宣称『无需人工写 YAML、无需迁移即可接入』。集成面广：数仓 Snowflake/BigQuery/Databricks/Redshift/Postgres，摄入 Kafka/Fivetran/Airbyte，编排 Airflow/Dagster/Prefect，转换 dbt/SQLMesh/Spark，BI Looker/Tableau/Metabase/Superset。口号：『Data trust you can prove. From the pipeline to the boardroom.』
- **商业模式**：面向企业数据平台团队的 B2B SaaS（数据质量/数据可观测性）。目标客户为拥有多团队分析栈的中大型企业的数据平台/数据工程团队。截至 2026 年初仍处极早期（设计合作伙伴/pre-launch 阶段），未公开定价与营收指标；具体计费模式（按监控表数/席位/用量）未披露。
- **竞争格局**：数据可观测性/数据质量赛道，直接对标 Monte Carlo、Bigeye、Metaplane、Anomalo、Soda、Great Expectations、Sifflet 等；数据契约方向对标 Gable.ai；开源侧有 dbt tests/Elementary。Velum 的差异化叙事是『从生产查询流量自动派生契约与血缘、零人工规则、零迁移』。赛道成熟、玩家密集，是其主要竞争压力来源。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed / YC 标准投资 | 未披露 | 2025 | [链接](https://www.crunchbase.com/organization/velum-labs) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业而言，Velum 本身不碰生产工艺，但它解决的『跨异构系统的数据可信』恰是工业数据中台的老大难。制造企业的数据散落在 MES、ERP、WMS、质量系统、PLC/SCADA 时序库、供应链系统中，口径不一、血缘断裂，最终喂给管理驾驶舱、KPI 看板乃至 AI 预测模型时『脏数据→错决策』。Velum 的三点做法对工业数据治理有直接启发：①观测真实数据流量自动推导数据契约，而非让数据工程师手写规则——契合制造现场系统多、人手少、规则维护不起的现实；②自动血缘追踪，能回答『这个良率数字是从哪几张表算出来的、哪一步坏了』，这正是质量追溯与根因分析所需；③把修复沉淀为可强制的契约防复发，对应制造业『纠正+预防措施(CAPA)』的闭环思维。换言之，它是让工业 AI/BI『上游数据可信』的底座，是数据质量从人工巡检走向自运行基础设施的样板。
2. **国内对标厂商**：Aloudata 大应科技（数据血缘/NoETL 自动化，与 Velum 的『自动血缘+零迁移』叙事最接近）、Datablau 数语科技（数据治理/数据标准/数据质量平台）、亿信华辰（睿治数据治理套件，含数据质量模块，标杆案例多在传统大企业）、网易数帆 有数/EasyData（含数据质量与数据地图/血缘能力）、阿里云 DataWorks 数据质量（DataQuality，云原生数仓内嵌质量校验）
   > 国内在『数据治理/数据质量/数据血缘』有成熟一批玩家，但多为规则驱动+项目制交付（写校验规则、建标准、上治理平台），偏『管控台账』。Velum 代表的『观测生产流量自动派生契约、面向数据可观测性(data observability)、开发者体验优先(接 git/dbt/CI-CD)』这一新范式，在国内仍较稀薄——最接近的是 Aloudata 的自动血缘与网易数帆的数据地图能力，但『自动生成并强制数据契约』这一环国内产品化程度普遍不高。对制造业客户，国产治理平台在合规与本地化交付上更落地，Velum 式自动化则代表下一步方向。
3. **可迁移的干法 / 应进场景词典的词条**：数据质量、数据可观测性、数据血缘、数据契约、语义控制平面、数据治理自动化
   > 可迁移干法：把『人工写规则巡检数据』升级为『观测真实流量→自动推导契约→自动定位血缘断点→自动修复并沉淀防复发』的自运行闭环。制造/工业企业做数据中台或 AI 落地前，可借鉴这套『先让数据可信、再谈分析与 AI』的次序，尤其是自动血缘用于质量追溯、数据契约用于跨系统集成防脏数据，是可直接平移到工业数据治理的干法。
4. **风险与存疑点**：①极早期风险：成立 2025 年、仅 2 人、pre-launch，且刚从『FHE 隐私防火墙』大幅转向『数据质量 OS』，方向尚未被市场验证，存在再次转向可能。②赛道拥挤：Monte Carlo/Bigeye/Metaplane/Anomalo/Soda 等已占据数据可观测性心智，后来者需证明『自动契约+零迁移』确有护城河而非营销话术。③客户证据薄弱：唯一佐证是官网自述的『某受监管金融机构、管理超 10 亿美元资产、200+ 张表、两个国家』，无具名、无第三方背书，可信度低；企业级数据基础设施采购周期长、信任门槛高，早期缺乏可复用标杆将拖慢增长。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Velum Labs | Y Combinator 公司目录 | https://www.ycombinator.com/companies/velum-labs |
| Velum Labs 官网（Semantic Control Plane for Data） | https://velum-labs.com/ |
| Velum Labs 关于页 | https://velum-labs.com/about |
| 创始人 Alen 关于加入 YC 做零信任 AI 隐私(FHE)的 LinkedIn 公告（转向前定位佐证） | https://www.linkedin.com/posts/000alen_happy-to-announce-we-got-into-y-combinators-activity-7381042872449449984-3mXT |
| Velum Labs (YC P26) 公司 LinkedIn 主页 | https://www.linkedin.com/company/velum-labs-ai |
| Velum Labs Crunchbase 档案（Pre-Seed / YC） | https://www.crunchbase.com/organization/velum-labs |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
