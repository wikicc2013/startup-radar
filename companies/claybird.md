# Claybird

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：AI video ad creation platform（AI 视频广告创作平台）
- **官网/锚定**：https://www.claybird.com/
- **深研状态**：researched（YC Fall 2025 (F25)。创始人 Abdullah Nauman(CEO) 与 Saad Jamal(CTO) 同批次出现在多个 YC Launch（Claybird 视频广告 / Antigen 攻击面安全 / Zag 代码评审 Agent），疑为批次内连环试错或转向。官网当前呈现为『面向创业公司/科技公司的视频制作公司』（含 AI 生成镜头）套餐制服务，与 YC Launch 早期主打的『全自动 AI 广告 Agent、72 小时交付』定位有出入，采信官网为当前实态。）

## 公司画像
- **团队**：2 位联合创始人 + 约 4 人团队。CEO Abdullah Nauman：曾在 Google Ads 做产品、Google Search 做 ML 基础设施（服务核心搜索广告系统，据称贡献 $1B+ 营收）。CTO Saad Jamal：曾在 Tesla Autopilot 训练/评估视频模型、在 Nuro 开发 ML 编译器框架跨多 GPU 运行感知层，并与《Attention Is All You Need》作者 Ashish Vaswani 一同训练推理模型；从芝加哥大学法学院读满一年后退学创业。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco, CA）
- **产品**：AI 视频广告创作平台 / 视频制作服务。工作方式：与营销方共创创意方向和脚本，用领先 AI 视频模型（Sora、Veo 等）逐镜头生成素材，再由 AI（配 eval 评估层、single-image NeRF、微调后的图像编辑模型）智能剪辑成影棚级成片。YC Launch 期定位『像 Lovable 之于 AI 广告』、72 小时交付。官网现态为套餐化视频制作：预约通话当天开专属 Slack 频道，7 天内交付成片，无法实拍的场景用 AI 生成图像补足。
- **商业模式**：项目/套餐制（productized service）。官网明码四档：Launch film $9,000、Feature announcement $4,000、Fundraise film $15,000、Event film $2,000。早期主打『studio-quality、成本仅传统零头、72 小时/7 天交付』，本质是用 AI 生成+人机协同压缩传统广告制作的工时与成本，介于创意代理与 SaaS 之间。
- **竞争格局**：上游 AI 视频基础模型：OpenAI Sora、Google Veo、Runway、Pika、Luma。同层 AI 广告/视频创意工具与新锐：Icon、Creatify、Arcads、HeyGen、Synthesia，以及大量套餐制 AI 视频代理。传统对手为广告代理公司与自由剪辑师。壁垒在于对『广告级质量』的理解（镜头角度、打光、模特一致性）与评估层，而非底层模型。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-Seed | 未披露 | 2025 | [链接](https://www.vcbacked.co/company/claybird) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Coca-Cola（可口可乐） | 中 | [链接](https://www.claybird.com/) |
| Eight Sleep | 中 | [链接](https://www.claybird.com/) |
| Mercor | 中 | [链接](https://www.claybird.com/) |
| Delve | 中 | [链接](https://www.claybird.com/) |
| Walmart（沃尔玛） | 低 | [链接](https://www.ycombinator.com/companies/claybird) |
| Daytona | 低 | [链接](https://www.claybird.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，Claybird 代表的『AI 生成镜头 + 评估层保质 + 人机协同剪辑』把过去只有大品牌才请得起的影棚级视频广告，压到了几千到一万五美元、72 小时到 7 天交付的量级。制造企业的营销痛点恰恰是：新品/产线/工艺很难实拍出电影感，展会与海外渠道又急需高质量视频物料。这类工具的价值不在『生成一段炫酷视频』，而在两点：一是『无法实拍的场景用 AI 补足』——工厂内部、微观工艺、尚未量产的概念产品、危险或洁净环境都可生成；二是『评估层保证质量一致性』——让营销/销售不必依赖外包代理的不确定交付，就能批量产出符合品牌调性的产品视频、案例视频、招商片。对制造业销售与客服，可迁移到产品讲解视频、售后操作演示、经销商赋能素材的规模化生产；对海外营销，可低成本本地化多语种广告。风险是当前它仍是偏消费/科技品牌的创意服务，工业场景的专业性（合规、参数准确、B2B 决策链）它并不天然覆盖。
2. **国内对标厂商**：快手·可灵 AI（Kling）——已用于品牌广告/短片生成的国产头部视频大模型，可对标其底层生成能力、字节·即梦 / 即创（巨量引擎智能广告创意）——生成+智能剪辑+投放一体，最接近 Claybird 的『广告创意 Agent』定位、阿里·通义万相 / 腾讯·混元视频——大厂视频生成基座、特看科技、闪剪、一帧秒创、美图设计室——套餐/SaaS 式 AI 短视频与电商带货视频创作工具，对标其套餐制服务层
   > 国产在『底层视频生成模型』一层（可灵、即梦、通义万相、混元）已具备甚至领先的能力，Claybird 并不自研基座、而是站在 Sora/Veo 之上做『质量评估层 + 人机协同剪辑 + 套餐化交付』。真正对标 Claybird 商业模式的是字节即创/巨量引擎那套『生成—剪辑—投放』闭环，以及特看、闪剪这类把 AI 视频包装成标准化交付服务的团队。差异在于：国产更偏电商带货与信息流投放的量产逻辑（重 ROI、重投放闭环），Claybird 更偏『品牌级/影棚级质感』的创意服务逻辑（重质量一致性、重创意共创）。国内制造业若要复用，路径是可灵/即梦出素材 + 剪映/即创做剪辑投放，成本更低但需自己补『质量评估』这一环。
3. **可迁移的干法 / 应进场景词典的词条**：AI视频广告、生成式创意、营销素材量产、人机协同剪辑、productized-service、影棚级质感、多语种本地化
   > 可迁移的干法有三条：①『AI 生成补拍不可拍场景』——把无法实拍的产线内部、微观工艺、概念产品做成营销镜头，制造业出海招商片、产品发布片可直接套用；②『评估层保质』——不是让模型自由发挥，而是用 eval 层约束镜头角度/打光/主体一致性，这是把生成式视频从『玩具』做到『可交付』的关键工程，任何企业自建 AI 内容生产线都应移植这一环；③『套餐化交付 + 当天开专属协作频道（Slack）』——把不确定的创意外包变成明码标价、限时交付的标准品，这套服务化打法可迁移到制造企业的经销商赋能素材、售后演示视频、展会物料的规模化生产。
4. **风险与存疑点**：①定位漂移风险：官网已从『全自动 AI 广告 Agent（72h）』回落为『含 AI 镜头的人力视频制作公司（7 天套餐制）』，且同一对创始人同批次另起 Antigen（安全）、Zag（代码评审），主业专注度与持续性存疑，可能已转向。②护城河薄：不自研视频基座，价值集中在评估层与剪辑编排，一旦 Sora/Veo/可灵原生剪辑能力增强或大厂（字节即创）下探，中间层易被挤压。③客户名单可信度：Coca-Cola/Walmart 等大牌多为早期项目或单次合作、金额小（首月披露 $67k），是否为稳定商单、能否复购留存未证实，不宜高估其灯塔含金量。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Claybird 官网 | https://www.claybird.com/ |
| Claybird | Y Combinator 公司页 | https://www.ycombinator.com/companies/claybird |
| Launch YC: Claybird — The Full-Stack AI Ad Company | https://www.ycombinator.com/launches/Ob1-claybird-the-full-stack-ai-ad-company |
| Claybird Launches: An Agent That Produces Your AI Video Ad | Fondo | https://fondo.com/blog/claybird-launches |
| Claybird Funding & Investors – Pre-Seed | VCBacked | https://www.vcbacked.co/company/claybird |
| Claybird company information, funding & investors | Dealroom.co | https://app.dealroom.co/companies/claybird |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
