# Remy Ai

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Automating dexterous tasks in warehouses（自动化仓库里的精细操作任务）
- **官网/锚定**：https://www.ycombinator.com/companies/remy-ai
- **深研状态**：researched

## 公司画像
- **团队**：两位创始人（团队约2人，2025年成立）。CEO Oscar Brisset：牛津经济学本科，BCG 咨询约1.5年（做私募/供应链），后在 BCG X 任 AI 工程师约8个月。CTO Ben Kaye：牛津 MEng 一等学位，牛津 ML 在读 PhD（导师 Andrea Vedaldi，Visual Geometry Group），在 OrganOx 做过3年+固件/控制/机器人，有专利待授权，另有 CVPR 2025 Highlight 论文（3D 重建）。两人7年前在牛津本科相识。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：面向电商 3PL（第三方物流）仓库的 AI 驱动机器人。采用双臂移动平台（bi-manual mobile platform），从打包工位切入，可处理不断变化的 SKU 与订单结构，覆盖拣选、打包、组套(kitting)、收货等高灵巧度操作；宣称无需重训/重编程即可适配新 SKU（含透明、可变形、不规则、易碎物品）。技术路径：用头戴式采集 + 可穿戴触觉传感器记录真人作业中的同步视觉/本体感觉/接触力数据，结合预训练机器人与视觉模型、仿真 + 域随机化(domain randomization)做定制，并配错误恢复算法保障产线级可靠性。声称通过'用智能替代机械复杂度'实现比现有方案低约50%的成本，数天而非数月完成部署。
- **商业模式**：B2B 机器人/自动化，面向电商第三方物流(3PL)。切入'插入现有工作流、数周见 ROI'。官网另设数据采集(in-the-wild data collection)请求入口，暗示可能存在数据服务/采集侧的辅助模式。具体定价/交付方式（购买 vs. RaaS 机器人即服务）未公开披露。
- **竞争格局**：对标现有仓储自动化与拣选/操作机器人方案（据其宣称成本高、需重编程、灵活性差）。所处赛道包括通用抓取/操作机器人、仓储移动机器人厂商；YC W26 被 CB Insights 描述为'物理 AI'密集的一批，同类具身智能/机器人操作创业公司较多。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：Remy 的核心可迁移点在于'用模型智能替代机械专用化'：传统产线/仓库自动化每换一个 SKU 或工位就要重新编程与改机械夹具，成本与周期高；Remy 用预训练视觉-操作模型 + 仿真域随机化，让同一双臂平台适配多变来料。对制造业尤其适用于多品种小批量(高混合)场景的上下料、装配辅助、来料分拣——这些正是国内离散制造'柔性产线'最难啃的骨头。
2. **国内对标厂商**：极智嘉 Geek+（仓储移动机器人/货到人拣选，全球出货领先）、海柔创新 Hai Robotics（箱式仓储机器人 ACR，密集存储+拣选）、梅卡曼德 Mech-Mind（3D 视觉+AI 引导的机械臂拣选/上下料，接近 Remy 的'视觉+操作'定位）
   > 国内仓储侧已高度成熟（极智嘉/海柔的货到人体系全球领先），Remy 与它们并非正面竞争——中国强在'搬运/存储的系统集成'，Remy 押注的是更上游的'末端灵巧操作(拣选打包本身)'。真正对标 Remy 技术路线的是梅卡曼德这类'3D 视觉 + AI 引导机械臂'厂商，以及新一批做具身操作大模型的中国创业公司。可关注点：Remy 靠头戴采集 + 触觉手套获取真人作业数据的'数据飞轮'，是国内对标者相对薄弱的一环。
3. **可迁移的干法 / 应进场景词典的词条**：仓储物流自动化、电商3PL/第三方物流、灵巧操作/双臂机器人、拣选打包组套收货、具身智能/物理AI、触觉传感+视觉+力控、仿真+域随机化训练、机器人即服务(潜在RaaS)
   > 1) 用可穿戴/头戴设备在真实工位低成本采集'视觉+本体+接触力'多模态示范数据，绕开纯遥操作采数的高成本；2) 仿真 + 域随机化把少量真数据放大到产线级泛化；3) 从单一高频工位（如打包）切入、插入现有工作流、以'数周见 ROI'降低客户决策门槛，而非一次性大改造。这套'轻切入+数据飞轮+柔性泛化'打法可直接映射到国内制造业的柔性上下料/分拣立项逻辑。
4. **风险与存疑点**：1) 极早期（2025年成立、约2人团队、W26 刚 launch），产品成熟度与量产可靠性未经验证；2) 融资与客户/试点均未公开披露，商业化实据缺失；3) 灵巧操作在真实仓库的长尾可靠性(易碎/透明/形变物)是行业公认难题，'50%成本'与'数天部署'均为公司自述、无第三方验证；4) 赛道拥挤（YC W26 物理 AI 扎堆 + 国内成熟仓储机器人厂商下沉操作环节），竞争激烈；5) 同名干扰：需与欧洲的 REMY Robotics（餐饮机器人）区分，非同一公司。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Remy AI — Y Combinator 公司页 | https://www.ycombinator.com/companies/remy-ai |
| Y Combinator on X：Remy AI 为电商履约打造 AI 机器人（发布推文，@oscar__2025） | https://x.com/ycombinator/status/2024227432174141473 |
| Remy AI Launches: Dexterous Robots for E-Commerce 3PLs — Fondo | https://fondo.com/blog/remy-ai-launches |
| Remy AI — f4.fund 创业公司页（Robotics & Automation） | https://f4.fund/startups/tryremy |
| Remy AI 官网（tryremy.ai，'We capture how humans move through the world' 数据采集） | https://www.tryremy.ai/ |
| Y Combinator（LinkedIn）：Remy AI (YC W26) builds AI-powered robots | https://www.linkedin.com/posts/y-combinator_remy-ai-yc-w26-builds-ai-powered-robots-activity-7429993130260844544-2nEj |
| Remy AI — The YC Tier List (W26) | https://yctierlist.com/w26/remy-ai/ |
| YC Winter 2026 批次为物理 AI 密集批 — CB Insights | https://www.cbinsights.com/research/y-combinator-winter-2026/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
