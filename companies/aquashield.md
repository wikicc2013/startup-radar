# AquaShield

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B001
- **一句话定位**：AI water leak detection for buildings（楼宇 AI 漏水检测）
- **官网/锚定**：https://www.ycombinator.com/companies/aquashield
- **深研状态**：researched（锚定成功。同名通用词消歧后确认为唯一目标公司：YC Spring 2026 批次、总部旧金山、创始人 Paul Beckers（CEO，前 MIT 机器人研究员）与 Marguerite Benoist（CTO，前 Harvard 机器人研究员）。公司源于瑞士 EPFL（CEAT 实验室 + EPFL AI Launchpad 资助、Venture Kick 获奖），后进入 YC 并落地旧金山，EPFL 项目与 YC 公司为同一实体、同一对创始人，非两家公司。登记批次 B001 实为 YC Spring 2026。融资/客户仅采信有一手来源者，其余写未披露。）

## 公司画像
- **团队**：两位联合创始人：Paul Beckers（CEO，前 MIT 机器人研究员，学术背景涉 RWTH Aachen）、Marguerite Benoist（CTO，前 Harvard 机器人研究员）。团队从 MIT/Harvard 机器人研究转向楼宇漏水检测。YC 登记团队规模 3 人。
- **成立/批次**：2026（YC Spring 2026）；EPFL 阶段起步更早（2025 年底已在 EPFL AI Launchpad 与 Venture Kick 亮相）
- **地点**：美国旧金山（YC 登记）；起源于瑞士洛桑 EPFL
- **产品**：面向大型不动产组合的非侵入式楼宇漏水检测系统。硬件侧：在楼宇总水表处采用现成流量计量，辅以选装的夹装式（clamp-on）超声波传感器贴装在选定管段上，分钟级安装、无需切管、不中断供水。软件侧：用 Transformer 时序模型，训练数据来自真实传感器数据 + 由管路图纸构建数字孪生生成的大规模合成水力学数据；系统学习楼宇正常流量模式，实时识别异常并把漏点定位到具体管段。
- **商业模式**：面向大型住宅/商业不动产组合与其设施维护团队的 B2B（订阅/按楼宇监测服务，具体定价未披露）。价值主张：把 10 万美元级的事后修复大工程，转化为 2 千美元以下的精准定点维修（"$100k+ remediation jobs turn into sub-$2k targeted fixes"）。宣称市场约 200 亿美元，美国每年漏水相关保险理赔超 130 亿美元。
- **竞争格局**：楼宇/工业漏水检测与水管理赛道，含 Wint（wint.ai，AI 水管理与漏损防治）、Aqualeak 等传统漏水检测厂商，以及保险科技驱动的水损防控方案；AquaShield 差异点在于非侵入式安装 + 时序 Transformer + 数字孪生合成数据做管段级定位。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC 投资（Spring 2026 批次） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/aquashield) |
| EPFL AI Project Grant（EPFL AI Launchpad） | 未披露 | 2025 | [链接](https://actu.epfl.ch/news/aquashield-ai-driven-water-leak-detection/) |
| Venture Kick（Stage 1） | CHF 10,000 | 2026 | [链接](https://www.venturekick.ch/aquashield) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| MIT 校园设施团队（Facilities，试点部署） | 高 | [链接](https://actu.epfl.ch/news/aquashield-ai-driven-water-leak-detection/) |
| 全球最大住宅不动产组合之一（未具名） | 中 | [链接](https://www.ycombinator.com/companies/aquashield) |
| 德国一家大型不动产公司（运营楼宇规模化测试，未具名） | 中 | [链接](https://vpi-startup-compass.pages.dev/pdfs/aquashield.pdf) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业与大型设施运营者而言，AquaShield 展示的是"用现成计量点 + 时序大模型 + 数字孪生合成数据"做隐性资产网络监测的范式，可直接迁移到工厂的水、蒸汽、压缩空气、冷却液等管网。它不靠满布昂贵传感器，而是在总表/关键节点采集稀疏信号，用 Transformer 在噪声化的消耗曲线里识别异常并反推定位——这对管线老化、跑冒滴漏损耗大、停机代价高的流程制造（食品饮料、化工、纸浆造纸、半导体 fab 的超纯水/废水系统）尤其有价值：把"事后大修"变成"早期定点小修"，同时降低非计划停机与合规风险。合成水力学数据（由管路图纸建数字孪生生成）解决了工业现场故障样本稀缺的老难题，是可复用的方法论。
2. **国内对标厂商**：新兴际华/汇中仪表等超声流量计厂商——提供 clamp-on 超声测流硬件基础，但缺 AI 异常检测与管段定位软件层、联通/移动等运营商的智慧水务方案 + 各地水司 DMA 分区计量漏损控制——思路相近（稀疏计量点+算法定位漏损），但主要面向市政供水管网而非楼宇内部、树根互联/寄云科技等工业互联网 PdM 平台——具备时序异常检测能力，可类比但未聚焦水管网垂直场景、涂鸦智能/萤石等智能楼宇 IoT——有传感与楼宇接入能力，缺水力学数字孪生与管段级漏点定位
   > 国内在"市政管网漏损控制（DMA 分区计量）"和"工业 PdM 时序异常检测"两条线上都有成熟玩家，但把二者结合、专门做"楼宇/组合级非侵入漏水检测 + 数字孪生合成数据 + 管段级定位"的垂直创业公司稀缺；国内水司侧重室外市政管网，楼宇内部漏水多靠保险和物业被动响应，正是 AquaShield 模式的空白点。
3. **可迁移的干法 / 应进场景词典的词条**：非侵入式传感、时序异常检测、数字孪生合成数据、漏损定位、预测性维护、楼宇IoT、流程工业管网监测
   > 可迁移干法：在难以布满传感器的存量资产上，只在总表/关键节点做稀疏计量，用 Transformer 时序模型 + 由图纸构建数字孪生生成的合成故障数据来补足样本，实现"稀疏信号→异常识别→拓扑反推定位"。这套"数字孪生造数据喂模型"的思路可迁移到任何有管网拓扑、故障样本稀缺、停机代价高的工业场景（水/汽/气/液管网、电网、暖通）。
4. **风险与存疑点**：①传感稀疏度与定位精度的权衡：只在总表加少量夹装传感器，管段级定位在复杂多支路老旧管网中的准确率与误报率仍需大规模运营验证；②合成数据依赖高质量管路图纸与数字孪生，存量老旧楼宇图纸缺失/失真会削弱模型；③极早期（YC Spring 2026、团队 3 人、Venture Kick 仅 CHF 1 万 Stage1、无披露机构融资额），客户多为试点/未具名，商业化与规模化交付能力未经证明，赛道内已有 Wint 等在位者与保险巨头方案竞争。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| AquaShield: AI water leak detection for buildings | Y Combinator | https://www.ycombinator.com/companies/aquashield |
| AquaShield | Make Hidden Water Networks Visible (官网) | https://aquashieldai.com/ |
| AquaShield: AI-Driven Water Leak Detection - EPFL | https://actu.epfl.ch/news/aquashield-ai-driven-water-leak-detection/ |
| AquaShield - Venture Kick | https://www.venturekick.ch/aquashield |
| AquaShield Real-time protection against water leaks (VPI Startup Compass, 2025-12-16) | https://vpi-startup-compass.pages.dev/pdfs/aquashield.pdf |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
