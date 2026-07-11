# Velvet

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：AI ads editor for rapid video creation（快速做视频的 AI 广告剪辑器）
- **官网/锚定**：https://www.ycombinator.com/companies/velvet
- **深研状态**：researched（YC Fall 2025 (F25) 已确认锚定。创始人 Lucas Mantovani(@lrmantovani_) 与 Lucas Tucker(@luke_tux)，YC 官方 X 于 2025-10 祝贺其 Launch，产品定位『AI 视频界的 Adobe Premiere』。注意：部分聚合站(StartupHub/Extruct)出现 503M 融资、2022 成立、valuation 1.9B 等数据为算法噪声，与 Sacra/YC 一手信息不符，不采信；YC 页面另有一句 tagline『multimodal data lab / 帮 AI 通过视听图灵测试』，反映其底层多模态数据能力叙事，但对外落地产品即营销向 AI 视频/广告编辑器。）

## 公司画像
- **团队**：2 位联创 + 早期团队约 3-4 人，坐标旧金山。CEO Lucas Mantovani：芝加哥大学计算机荣誉学位，曾任 Meta FAIR 视频数据方向研究员(号称当时最年轻成员)，巴西数学/物理奥赛奖牌。CTO Lucas Tucker：芝加哥大学数学与计算机荣誉学位，曾在 Adobe 做实时内容分发工程。两位创始人背景=『前沿多模态研究 + Adobe 视频工程』，正对应产品『AI 生成 + Premiere 式时间线剪辑』的双内核。
- **成立/批次**：2025
- **地点**：美国旧金山 (San Francisco, CA)
- **产品**：浏览器端一体化 AI 视频创作/广告剪辑平台。核心价值是把碎片化的 AI 生成工具链聚合进单一时间线编辑器：接入 Google Veo、OpenAI Sora、Runway、快手可灵(Kling)、字节 Seedance 等多家视频生成模型 + ElevenLabs 语音，用户输入文本 prompt、选模型，30-90 秒返回候选片段；再用类 Adobe Premiere 的时间线做剪辑、配音、拼接。面向品牌营销团队，主打『几分钟批量产出数十条可投放的病毒式 AI 广告』，并提供企业级品牌合规扫描(brand-compliant)与 Slack 协作。团队用 Velvet 自制的 YC Launch 视频约 5 小时、50 美元生成credits 完成，对标传统制作 2-3 周、5000-10000 美元。
- **商业模式**：消费型 credits + 月度订阅。按艺术家命名分档(van Gogh / Picasso / Michelangelo 等)：Picasso 约 14 万 credits(约 120 次生成)，Michelangelo 约 60 万 credits(约 500 次生成)含 7x24 支持与合规扫描；企业托管服务另有溢价。盈利模式为『模型批发差价 + 订阅』——以低于售价的成本聚合各家模型 API，赚取 credits 差价与聚合便利性溢价。
- **竞争格局**：三类竞争：①垂直整合大厂——Adobe Firefly、Google Vids、Meta、Canva(约 33 亿美元 ARR)；②模型/工具原生玩家——Runway(约 9000 万美元 ARR)、Pika、Luma、PixVerse；③传统剪辑器——CapCut/剪映(2 亿+用户)、DaVinci Resolve。Velvet 的差异化押注在『聚合层 + 营销广告工作流 + 企业合规』，而非自研模型；主要风险即被上游模型方或 Canva/Adobe 这类已握有分发与剪辑器的平台原生集成挤压。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Pre-seed / YC | 约 50 万美元 | 2025 | [链接](https://sacra.com/c/velvet-ai/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服，Velvet 这类『AI 广告剪辑器』意味着内容生产的边际成本被击穿：过去一条产品宣传片、展会视频、经销商培训片要外包代理商、2-3 周、上万元，现在一个市场专员几小时、几十美元就能批量出数十条针对不同渠道(抖音/视频号/LinkedIn/海外投流)的差异化短片。对工业品这种 SKU 多、场景专业、买家决策链长的品类尤其有用——可为每个细分行业、每个应用场景快速定制解说视频，配合品牌合规扫描确保参数/logo/话术不出错。落到销售与客服：售前可快速生成产品演示与方案讲解视频降低沟通成本，售后可把常见操作/维保步骤做成标准化视频知识库。真正门槛不在工具，而在企业是否有结构化的产品素材(3D/参数/场景)与合规话术库喂给模型——制造业的『数字素材资产化』会成为用好这类工具的前置工程。
2. **国内对标厂商**：字节·剪映/CapCut 商业版 + 即梦(Dreamina/Jimeng)：国内最接近的『剪辑器 + 自研生成模型 + 营销投放』一体化路径，且已握有分发、快手·可灵(Kling)：头部视频生成模型，既是 Velvet 的上游供应方也是国内营销视频生成的直接替代、巨量引擎/腾讯广告 的 AI 创意工具(如巨量『即创』)：平台级『一键批量生成投放素材』，最贴近 Velvet『批量出广告』的商业意图、蓝色光标(BlueFocus) 等营销集团的 AI 内容中台：从代理商侧做企业级 AI 广告生产，对标 Velvet 的企业托管服务、美图 WHEE / 生数科技 Vidu：生成模型/工具层的补充对标
   > 国内格局与美国不同：Velvet 走的是『中立聚合层(接十几家模型)+ 营销工作流』，而国内头部(字节/快手/腾讯)都是『自研模型 + 自有剪辑器 + 自有投放渠道』的垂直闭环——巨量『即创』、剪映+即梦已经把『输入商品→批量出投放视频→直接投流』打通，聚合中立性的价值被平台闭环稀释。因此 Velvet 模式在国内更可能以『面向出海营销团队/多平台投放的聚合工具』或『企业私有化合规视频中台』的形态存在，而非再造一个中立聚合器与 BAT 正面竞争。
3. **可迁移的干法 / 应进场景词典的词条**：AI广告批量生成、多模型聚合层、品牌合规扫描、营销素材工作流、出海投流内容
   > 可迁移干法：①『多模型聚合 + 统一工作流』——不押注单一模型，把最优模型能力封装进一条企业熟悉的生产线(此处是 Premiere 式时间线)，这套『聚合层收敛碎片工具』的打法可复用到任何 AI 工具泛滥的职能(设计、文案、数据分析)；②『合规扫描内嵌生产环节』——把品牌/参数/话术合规做成生成即校验的护栏，对强监管、强品牌一致性的制造业营销极具借鉴；③『用自家产品做自家 Launch 视频』的 dogfooding 式获客——把降本证据(5 小时/50 美元 vs 3 周/万元)直接做成可病毒传播的 demo。
4. **风险与存疑点**：①无护城河/被上下游夹击：核心是聚合层，上游模型方(Veo/Sora/可灵)或下游持有剪辑器+分发的巨头(Adobe/Canva/字节)一旦原生集成，中立聚合价值即被吞噬；②模型商品化与价格战：hyperscaler 压低模型价格，Velvet 赚取的『批发差价』被压缩；③极早期、单点验证不足：约 50 万美元 pre-seed、团队 3-4 人、尚无公开付费客户名单，企业级销售周期长，从『能做出炫酷 demo』到『成为营销团队日常生产工具』的留存与规模化尚未证明。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Velvet | Y Combinator 公司页 | https://www.ycombinator.com/companies/velvet |
| Velvet funding & analysis | Sacra | https://sacra.com/c/velvet-ai/ |
| Y Combinator on X：祝贺 Velvet Launch(创始人 @lrmantovani_ & @luke_tux) | https://x.com/ycombinator/status/1981797848841957691 |
| Velvet launches AI video editing suite for creative teams | YC on LinkedIn | https://www.linkedin.com/posts/y-combinator_velvet-ycf25-is-building-the-adobe-premiere-activity-7387563545216937984-XpbR |
| Velvet Video 官网 | https://velvet.video/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
