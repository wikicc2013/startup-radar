# Fabricate

- **批次来源**：B007 / YC Fall 2024 (F24) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B007
- **一句话定位**：Instant engineering drawings（即时生成工程图纸）
- **官网/锚定**：https://www.ycombinator.com/launches/MIK-fabricate-instantly-generate-engineering-drawings
- **深研状态**：researched（活跃，但已发生定位迁移/扩张：YC F24 上线时主打「即时生成工程图纸」（Instant engineering drawings），当前 YC 目录页与官网 tryfabricate.com 的定位已变为「面向硬件团队的采购软件（Procurement for Hardware Teams）」——原本的工程图纸自动生成能力被并入「CAD/图纸→即时报价→供应商协同→零件交付追踪」的采购工作流。属能力升维而非关停/被收购。）

## 公司画像
- **团队**：两位联合创始人，均为多年搭档、双双大学退学创业。Lucas Crupi（CAD 出身，自称 15 岁成为史上最年轻 SolidWorks 专家，曾参与特斯拉 Cybertruck 电池设计）；Ethan Breit（8 岁起写程序，曾因自研嵌入式 OS 被 Ericsson 录用）。两人相识于加拿大全国科学展（Canada Wide Science Fair），合作 6+ 年。团队规模约 11 人（YC 页显示）。
- **成立/批次**：2024
- **地点**：加拿大多伦多（Toronto, ON）为主；YC 页亦列出 Austin, TX
- **产品**：面向机械/硬件工程团队的工具。1）图纸自动化（早期主打）：分析团队已有工程图纸，按其既有标准（尺寸、标注、视图、格式）自动生成新图纸，直接对接现有 CAD 软件，声称每月为工程师省下最多 40 小时。2）硬件采购（当前主线）：导入 CAD 模型与技术图纸建立项目「单一真源」，AI 自动识别与归类零部件，把 CAD 图纸即时转成精准报价（宣称快 10×），按加工工艺给零件分组并自动向最合适的供应商分发 RFQ，兼顾定制加工件与标准现货件（现货按量级议价），并追踪每个零件确保按时交付。
- **商业模式**：SaaS/采购工作流软件，面向硬件初创与工程团队（tryfabricate.com 上提供注册与预约演示）。具体定价未公开披露；采购环节存在向撮合/供应链交易延伸的商业化空间（未证实）。
- **竞争格局**：图纸自动化方向：DraftAid（YC，3D 模型→2D CAD 图纸自动化）、REV1（YC W26，3D CAD→可生产图纸）。采购/报价方向：Xometry、Paperless Parts、CADDi（日本，图纸检索与报价）等 CAD-to-quote / 制造报价与采购平台。Fabricate 的差异点是把「图纸生成能力」与「即时报价+供应商协同+交付追踪」打通为一条链。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed（含 YC F24 标准投资） | 未披露 | 2024 | [链接](https://www.crunchbase.com/organization/fabricate) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：Fabricate 打中了机械/硬件研发里两段最枯燥却最耗时的环节：出工程图纸、以及把设计变成「谁来做、怎么做、多少钱」。传统上，一名机械工程师要花大量时间按公司制图标准反复画视图、标尺寸公差（GD&T）、套图框，Fabricate 用「学你已有图纸的标准→自动生成同规格新图」的方式把这段变成分钟级；更关键的是它没有停在制图，而是把图纸当成采购的入口——CAD/图纸直接转报价、按工艺自动拆分 RFQ 分发给合适供应商、再追踪交付。对制造业的含义是：工程提效不再只是「画得快」，而是「从设计到拿到可制造的零件」这条链被压缩，研发工程师从『四分之一时间在琢磨零件怎么造、找谁造』中解放出来。这类工具把制图规范、工艺知识、供应商能力沉淀成可复用的软件资产，正是国内众多依赖老师傅经验出图、靠采购员手工询价的制造企业最容易被 AI 改写的两块。
2. **国内对标厂商**：中望软件 ZWSOFT（中望CAD/3D，正推进 AI 辅助制图与智能标注，是国产 CAD 出图自动化的主力对标）、华天软件（CAXA/SView，国产 CAD/CAPP，工艺与图纸标准化）、浩辰 CAD GstarCAD（国产二维 CAD，图纸标准化与批量处理）、嘉立创/立创商城 JLC·LCSC（电子硬件侧的『上传设计→即时报价→打样制造→现货元件采购』一体化，最接近 Fabricate 的采购工作流，只是垂类在 PCB/元器件）、云工厂 / 极致嘉立创机械（机械定制件在线报价与分布式产能撮合，对标 Xometry 式 CAD→报价→制造）
   > 国内没有一个完全同形态的对手，Fabricate 恰好横跨两个国内已被验证的赛道：出图自动化（中望/华天/浩辰代表的国产 CAD 阵营）与硬件采购撮合（嘉立创/立创、云工厂代表的『设计→报价→制造→采购』一体化）。国产 CAD 厂商强在制图内核与本土标准，但把图纸能力延伸到采购撮合的很少；嘉立创系强在电子硬件的报价-打样-元件采购闭环，但主要不是从『读懂机械工程图纸自动出报价』切入。Fabricate 的启示是：谁能把『AI 读图/自动出图』和『即时报价+供应商分发』缝在一条链上，谁就能同时吃到工程提效和采购降本两块价值——这正是国内机械制造 SaaS 值得补的一环。
3. **可迁移的干法 / 应进场景词典的词条**：工程图纸自动生成、CAD 集成/标准学习、GD&T 标注自动化、CAD转即时报价、RFQ 自动分发、供应商协同、零件交付追踪、硬件采购一体化
   > 可迁移的干法有三点：其一『学标准而非定标准』——不强推统一模板，而是分析企业已有图纸/BOM 自动对齐其既有规范，极大降低落地阻力，可迁移到国内工艺卡片、检验报告、报价单等任何『各家格式不一』的文档自动化场景；其二『把生成物变成流程入口』——图纸不是终点而是报价与采购的触发点，任何『AI 生成一份文档』的产品都可以想想下游能不能顺势接上一段业务闭环（生成合同→自动比价、生成图纸→自动询价）；其三『按工艺聚类再分发』——用零件的加工工艺自动分组并匹配最合适供应商，本质是一套可复用的『需求→能力』撮合逻辑，可迁移到国内制造企业的分散采购、外协寻源场景。
4. **风险与存疑点**：①定位仍在迁移期：从『工程图纸自动生成』转向『硬件采购软件』，两块能力都强但主线尚未沉淀出可交叉验证的标杆客户与营收证据，早期产品叙事有摇摆风险。②数据与门槛：融资金额、客户名单、定价均未公开披露（Crunchbase 仅显示 Pre-Seed、YC 关联），团队约 11 人、创始人年轻且均为退学生，规模化交付与企业级信任仍待证明。③赛道拥挤且巨头环伺：出图侧有 DraftAid/REV1 等 YC 同类，采购报价侧有 Xometry、Paperless Parts、CADDi 及各 CAD 大厂，Fabricate 需靠『图纸+报价+供应链』整链协同做出差异，否则易被单点更强的对手夹击。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Launch YC: Fabricate — Instantly Generate Engineering Drawings | https://www.ycombinator.com/launches/MIK-fabricate-instantly-generate-engineering-drawings |
| Fabricate: Procurement for Hardware Teams | Y Combinator（公司目录页，当前定位） | https://www.ycombinator.com/companies/fabricate |
| Fabricate 官网 tryfabricate.com（CAD→报价、供应商协同、交付追踪） | https://www.tryfabricate.com/ |
| Fabricate — Crunchbase Company Profile & Funding（Pre-Seed、多伦多、YC 关联） | https://www.crunchbase.com/organization/fabricate |
| Y Combinator LinkedIn：Fabricate (YC F24) is automating engineering drawings | https://www.linkedin.com/posts/y-combinator_fabricate-yc-f24-is-automating-engineering-activity-7264774481078816769-Frz2 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
