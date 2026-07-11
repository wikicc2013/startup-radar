# Channel3

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B004
- **一句话定位**：Agentic commerce API for product discovery（面向商品发现的智能体电商 API）
- **官网/锚定**：https://www.ycombinator.com/companies/channel3
- **深研状态**：researched（锚定成功。批次以官方为准应为 YC Summer 2025（S25），而非任务单所写的 F25/Fall 2025——YC 官网、HN Launch、YC 官方 LinkedIn 均标注 (YC S25)，建议入库时按 S25 修正。定位判断：更偏「AI 基础设施（电商数据底座/商品图谱 API）」，而非终端导购应用——Channel3 不直接面向消费者做导购，而是给开发者/AI Agent 提供『可被检索的全网商品数据库+联盟变现』的底层 API，其客户（AI 造型师、装修工具、购物助手）才是做营销销售的一方。可归为『营销销售客服』价值链的赋能层，但产品本体是基础设施。）

## 公司画像
- **团队**：联合创始人 Alexander Schiff（CEO，前微软、Studio.com 负责 AI 项目）与 George Lawrence（CTO，前 Palantir 工程师）；两人在杜克大学相识并共同创办过第一家公司。团队约 5 人（YC 页数据）。Schiff 在做一款能推荐商品、赚联盟佣金的 AI 家教时发现『找不到好用的商品数据 API』，遂创立 Channel3——『the API we wished we had』。
- **成立/批次**：2025
- **地点**：美国 纽约市（New York City, NY）
- **产品**：面向 AI Agent / 开发者的『全网商品数据库』API。用多模态 AI（计算机视觉隔离页面主商品、LLM+多模态 embedding 做跨商家商品归一/变体识别/属性抽取）把分散在数万品牌、数千零售商的商品数据统一成结构化 JSON（标题/品牌/图片/价格/规格/库存）。支持自然语言检索（如『户外烤炉，<1000 美元』）与图搜。目录规模：官方口径已含约 5000 万商品（融资稿称面向 1 亿+商品发现）。基础设施用 AWS S3 Vectors + OpenSearch，跨多云多模型分散限流。当前仅美国、仅实物商品（不含生鲜/软件/SaaS），Amazon 接入在开发中。
- **商业模式**：API 调用计费 + 联盟佣金分成。定价：新账户 1000 次免费检索，之后 $7/1000 次检索；同时对通过平台达成的销售，按联盟佣金（平均约 5%）与开发者分成，由 Channel3 统一对接各品牌联盟关系，开发者无需自建。官方测算：客单价约 180 美元、5% 佣金下，每 1000 次查询只需 <1 单即可打平调用费。
- **竞争格局**：上游/相邻：Semantics3（更早的 YC 商品数据聚合公司）；传统品牌联盟计划（Nike/Adidas 各自对接，Channel3 定位为『替代逐一对接』的聚合层）；被巨头掌控的商品数据（Google Shopping 等）。同类 AI 购物体验/潜在竞合：plush.shop、daydream.ing、onton.com。替代路径：直接查 ChatGPT 等基础模型做商品推荐——Channel3 以速度、成本、数据丰富度为差异点。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $6,000,000 | 2025-12-10 | [链接](https://www.prnewswire.com/news-releases/channel3-secures-6m-seed-funding-to-build-the-infrastructure-behind-agentic-commerce-302637193.html) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 数百名开发者（未具名，构建 AI 造型师/室内设计/购物助手等应用） | 中 | [链接](https://www.alleywatch.com/2025/12/channel3-agentic-commerce-infrastructure-universal-product-database-shopping-api-alexander-schiff/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服，Channel3 这类『商品图谱 API』预示了一个新渠道范式：未来消费者/采购者越来越多通过 AI Agent（购物助手、行业 co-pilot）而非人工浏览来发现和比价商品，谁的产品数据能被 Agent 结构化检索到、属性/变体/库存/价格干净可读，谁就能进入『Agent 推荐位』。对制造企业意味着：①产品主数据（PDM/PIM）治理从『给人看的详情页』升级为『给机器读的结构化 feed』成为营销新基建；②B2B 工业品同样适用——想象一个『选型 co-pilot』按参数（功率/接口/合规认证）帮工程师筛供应商件，制造商需把选型参数、兼容性、货期做成机器可查的数据；③经销/联盟分销可被 API 化，佣金结算自动化，销售链路从人对人转向 Agent 对 API。反向风险：若不做数据可被检索化，产品会在 Agent 商务时代『隐身』。
2. **国内对标厂商**：阿里巴巴/1688 商品中台与 AI 导购（淘宝问问/AI 万能搜的商品结构化底座，但为封闭自用）、京东商品知识图谱 / 京东云商品数据能力（同为巨头自用，非开放中立 API）、智能导购/AI shopping 创业：如极睿科技（电商商品结构化/AI 内容）、造数/数说故事类商品数据服务、联盟营销平台：阿里妈妈、京东联盟——具备佣金分成机制，但绑定单一生态，缺『全网中立商品图谱』一层
   > 国内暂无与 Channel3 完全对位的『中立、跨全网、面向 Agent 的开放商品数据库 API』。最接近的能力都被阿里/京东等平台作为内部中台自用，对外不开放中立检索；创业公司多做单点（商品结构化、AI 内容、比价插件）而非统一图谱+联盟变现的底座。国内的结构性差异在于电商流量高度集中于封闭平台，第三方很难跨平台抓取归一（反爬+生态壁垒），所以中立商品图谱在国内更可能以『平台开放能力』或『垂直行业（如工业品选型、汽配、MRO）联盟数据库』形态出现，而非全品类横扫。
3. **可迁移的干法 / 应进场景词典的词条**：商品数据结构化/PIM-for-agents、Agent 电商基础设施、跨商家商品归一(canonicalization)、多模态商品检索(图搜/自然语言)、联盟佣金 API 化、选型 co-pilot
   > 可迁移干法：把 Channel3『用多模态 AI 把杂乱页面归一成机器可检索的结构化商品 + 内置佣金变现』的模式，迁移到国内垂直场景。①工业品/MRO 选型：抓取归一各制造商的规格书/兼容性/认证/货期，做一个面向采购工程师的『选型 Agent API』，按撮合成交分佣；②汽配/家电备件：以图搜+参数匹配解决『找对配件』难题；③制造企业内部：把自家分散在 ERP/PLM/详情页的产品主数据，先治理成『Agent 可读』的结构化 feed，再对接下游导购/客服 Agent。核心方法论=『多模态归一 + 结构化 API + 变现闭环』三件套，任何『数据脏、分散、需被机器消费』的行业都可套用。
4. **风险与存疑点**：①批次/事实核对风险：任务单标 F25，但所有官方源(YC/HN/PRNewswire)均为 S25，入库需修正批次，避免档案失真。②护城河与巨头风险——商品数据可被检索是通向 Agent 商务的入口，Google/Amazon/OpenAI 及各电商平台都在自建（Amazon 接入尚未上线本身说明数据获取受制于平台反爬/条款），中立第三方图谱可能被平台封杀或被巨头顺手做掉。③数据合规/抓取风险——大规模跨零售商抓取涉及反爬、robots、版权与联盟条款，US-only 也反映跨境数据/合规摩擦；佣金模式依赖联盟关系稳定性，一旦品牌收紧联盟政策收入受冲击。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Channel3 | Y Combinator 公司页 | https://www.ycombinator.com/companies/channel3 |
| Launch HN: Channel3 (YC S25) – A database of every product on the internet | https://news.ycombinator.com/item?id=44962881 |
| Channel3 Secures $6M Seed Funding to Build the Infrastructure Behind Agentic Commerce (PRNewswire) | https://www.prnewswire.com/news-releases/channel3-secures-6m-seed-funding-to-build-the-infrastructure-behind-agentic-commerce-302637193.html |
| Channel3 Raises $6M to Make Every Product on the Internet Discoverable with AI (AlleyWatch) | https://www.alleywatch.com/2025/12/channel3-agentic-commerce-infrastructure-universal-product-database-shopping-api-alexander-schiff/ |
| Channel3 raises $6M to make every product sold on the web discoverable by AI agents (SiliconANGLE) | https://siliconangle.com/2025/12/10/channel3-raises-6m-make-every-single-product-sold-web-discoverable-ai-agents/ |
| Channel3 | 官网 | https://trychannel3.com/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
