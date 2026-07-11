# tday.com

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B001
- **一句话定位**：AI that turns your product into on-brand marketing content（把产品变成符合品牌调性营销内容的 AI）
- **官网/锚定**：https://www.ycombinator.com/companies/tdaycom
- **深研状态**：researched（已锚定。YC Spring 2026（P26/原 X26）批次，官网 tday.com 与 YC 目录页信息一致，法律实体为澳大利亚 Altacomm Technologies Pty. Ltd.，三位创始人均来自阿德莱德大学背景。属极早期公司，除产品与团队外公开数据稀薄。）

## 公司画像
- **团队**：3 人。联合创始人兼 CEO Cyrus Kelly（20 岁，13 岁修大学课程，15 岁入读阿德莱德大学计算机系，曾任该校首席学生创业官、指导 300+ 学生创始人，此前做过学生社团+银行平台 communities.one）；联合创始人兼 COO David McDonough（曾任 VAL.AI 技术负责人、MEQ Solutions 首席工程师，计算机系统工程荣誉学士）；联合创始人兼 CTO Shyamsundar Shrestha（阿德莱德大学数学与计算机科学 AI 方向学士，曾任尼泊尔一 STEM 非营利组织副主席，成员 4000+）。YC 对接合伙人 Tom Blomfield。
- **成立/批次**：2026
- **地点**：美国旧金山（San Francisco）；法律实体 Altacomm Technologies Pty. Ltd. 注册于澳大利亚
- **产品**：把软件公司的『产品本身』自动转成符合品牌调性的营销素材。两种输入：①接入 GitHub 仓库，每个 PR/MR 在隔离沙箱里自动触发；②指向线上/预发布网站手动选功能。两类输出：①从真实产品端到端录制的演示视频（含配音、字幕、品牌化）；②短的品牌化『hype』展示视频 + 配套图片。可自动发布到 Instagram、TikTok、YouTube、X、Facebook、LinkedIn、Pinterest、Threads、Bluesky、Google Business，按平台自动适配画幅与帖子类型，支持人工审核队列或全自动发布。卖点是『捕捉能力而非一次性瞬间』——UI 变化时自动重录。广告投放模块标注『即将上线』。早期付费测试点击率(CTR)称达 8.3%，号称数倍于行业基准。
- **商业模式**：面向软件/SaaS 公司的营销自动化 SaaS（自助接入 GitHub 或网站），主打『从代码/发布 → 营销内容 → 自动分发 → 效果闭环』。定价未在公开页披露。
- **竞争格局**：与 Canva、Jasper、Typeface 等已具备品牌感知内容生成能力的工具重叠；同 YC P26 批次内 CharacterQuilt、Goose、Reforged Labs(Boa) 等均在做『学习品牌 → 生成 on-brand 创意 → 分发』的近似赛道。tday 的差异化在于以『产品源码/真实产品流程』为素材源、绑定发布节奏（每次 release 出内容），而非从零文本/图片生成。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC 标准投资 | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/tdaycom) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服而言，tday 的核心机制是『把产品的每一次变化自动转成可分发的内容』——这对拥有大量 SKU、频繁做产品迭代/型号更新的制造企业有直接迁移价值：设想把『软件 PR』换成『新品/新配置/工艺升级』，把『录屏演示』换成『产线实拍/CAD 渲染/参数对比图』，就能让一个小市场部在无需外包视频团队的情况下，为每款新品自动产出多平台适配的展示物料并分发到抖音/视频号/LinkedIn。对工业品营销尤其解决『内容跟不上产品迭代速度、素材制作成本高、多渠道适配费人力』三大痛点。局限是 tday 当前强绑定软件产品（代码/网页作为唯一真源），制造业要用需要一层『把物理产品/工艺数据结构化为素材源』的中间层，这恰是国内工业营销 SaaS 可切入的空白。
2. **国内对标厂商**：腾讯广告妙思/巨量引擎『即创』——从素材库自动生成多版本短视频广告并投放，最接近 tday 的『生成+分发+效果闭环』，但素材源是既有物料而非产品本身、创客贴/稿定设计——品牌化模板批量出图，覆盖多平台画幅适配，但缺『产品驱动+自动录制』、度加(度咔)剪辑/剪映企业版——AI 成片+一键分发多平台，机制相近但非围绕产品发布节奏
   > 国内目前没有一家精确对标『读代码/读产品 → 自动生成演示与展示内容』的玩家，最接近的是巨量『即创』这类『素材进、多版本广告出、直连投放看效果』的闭环工具，但它们的输入是营销物料而非产品源码。tday 的独特点在于把内容生产的『真源』前移到产品端（git/网页），国内对标普遍停在『物料再加工』层。对制造业场景，稿定/创客贴解决出图适配，剪映/度加解决成片分发，尚缺把『产品数据即内容源』串起来的一环。
3. **可迁移的干法 / 应进场景词典的词条**：产品即内容源、发布即营销(release-to-content)、多平台自动适配分发、真实产品自动录制、内容-效果闭环(CTR回流)
   > 可迁移的干法有三条：①『把业务系统里的一次变化自动变成一条对外内容』——制造业可把 PLM/ERP 里的新品上线、MES 里的工艺节点自动触发一条营销素材；②『真源驱动、变化即重录』——素材与产品状态绑定，产品一变内容自动刷新，避免物料过期；③『生成与分发一体，效果数据回流指导下一版』——把 CTR/转化直接接回生成端形成闭环。这套『触发—生成—分发—回流』的范式，对任何『产品/SKU 迭代快、营销团队小』的行业都成立。
4. **风险与存疑点**：①极早期(3 人 / 2026 成立 / 仅 YC 投资)，产品广告模块尚『即将上线』，8.3% CTR 为自报早期数据、无第三方验证，可信度低；②赛道极度拥挤——Canva/Jasper/Typeface 等巨头 + 同批多家 YC 公司(CharacterQuilt/Goose/Boa)正面竞争，护城河尚不清晰；③强绑定软件产品(代码/网页为素材源)，向非软件行业(如制造业)迁移需额外中间层，目标客户目前局限于 SaaS 公司；④公开客户为零，官网展示的 Drift/Forge/Inkwell/Relay/Slate/Sentry 系产品演示样例而非确认签约客户，落地验证不足。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| tday.com: AI that turns your product into on-brand marketing content | Y Combinator | https://www.ycombinator.com/companies/tdaycom |
| tday.com 官网 | https://tday.com |
| tday.com (YC P26) | LinkedIn 公司页(designtday) | https://www.linkedin.com/company/designtday |
| The 11 standout startups from YC's Demo Day, according to VCs | TechCrunch | https://techcrunch.com/2026/06/18/the-11-standout-startups-from-ycs-demo-day-according-to-vcs/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
