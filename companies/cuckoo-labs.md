# Cuckoo Labs

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B006
- **一句话定位**：AI real-time translator for global teams（面向全球团队的 AI 实时翻译）
- **官网/锚定**：https://www.ycombinator.com/companies/cuckoo-labs
- **深研状态**：researched（已锚定。官方一手来源确认批次为 YC W25（Winter 2025），非登记的 B006 泛指批次；产品 cuckoo.so（亦见 cuckoo.co）。分诊维度判为「职能后台（办公协作 / 会议实时翻译）」为主：Cuckoo 定位为面向全球销售、营销、客服团队的会议实时口译工具，落点在跨语言协作与沟通生产力，而非通用翻译 API 底座（非纯 AI 基础设施），也非 CRM / 客服工单式营销销售客服系统。其以文档喂入定制术语、以会议 bot / 现场收音形式介入，本质是嵌入团队协作场景的会议翻译，故归职能后台；次要可打「营销销售客服」标签（主要买家是 GTM 团队）。）

## 公司画像
- **团队**：2 人。联合创始人兼 CEO Yong Hee Lee（负责 GTM，曾在两家韩国创业公司（在线编程、AI 基础设施）主导 go-to-market，KAIST 电子工程 + 科技政策）；联合创始人兼 CTO Gunwoo Kim（曾打造韩国增长最快的打车 App，9 个月百万用户，KAIST 计算机）。两人 2015 年在 KAIST 学生社团相识，共同组织面向本科生的国际会议。
- **成立/批次**：2024
- **地点**：Seoul, South Korea（首尔，韩国）
- **产品**：面向全球团队的实时 AI 翻译 / 口译工具。以机器人身份加入 Zoom 等线上会议（也支持线下现场收音），为双方生成实时字幕式互译，覆盖 20+ 语言。核心差异点：可上传 pitch deck、产品手册、API 文档、会议纪要等资料，让翻译在会话开始前即学习行业与组织特定术语，实现「上下文感知」的定制化翻译，尤其针对高技术密度的商务对话。
- **商业模式**：SaaS 订阅，面向出海 / 跨语言的销售、营销、客服团队（GTM 场景）。以会议 bot + 文档定制术语为卖点，按团队 / 席位或使用量订阅（具体定价未披露）。
- **竞争格局**：会议 / 商务实时口译赛道：Interprefy、KUDO、Wordly、Interactio（会议同传平台）；通用实时翻译与字幕：DeepL、Google Translate、微软 Teams / Zoom 内置实时翻译、Otter.ai（转录）；新锐 AI 口译：如各类 speech-to-speech 翻译初创。Cuckoo 的护城河尝试点在「文档喂入的行业术语定制 + 面向 B 端 GTM 团队的垂直场景」，以对抗大厂内置的通用翻译。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $1.8M | 2025-11 | [链接](https://www.thesaasnews.com/news/cuckoo-raises-1-8-million-in-seed-round) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Snowflake | 中 | [链接](https://www.ycombinator.com/companies/cuckoo-labs) |
| PagerDuty | 中 | [链接](https://www.ycombinator.com/companies/cuckoo-labs) |
| Weights & Biases | 中 | [链接](https://www.thesaasnews.com/news/cuckoo-raises-1-8-million-in-seed-round) |
| ClickHouse | 低 | [链接](https://www.ycombinator.com/companies/cuckoo-labs) |
| dbt Labs | 低 | [链接](https://www.ycombinator.com/companies/cuckoo-labs) |
| SeAH Steel（世亚制钢，制造业） | 低 | [链接](https://www.ycombinator.com/companies/cuckoo-labs) |
| GS（零售） | 低 | [链接](https://www.ycombinator.com/companies/cuckoo-labs) |
| SNOMED（医疗） | 低 | [链接](https://www.ycombinator.com/companies/cuckoo-labs) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业 / 工业企业意味着：出海与全球供应链协作的「语言摩擦」正在被 AI 会议翻译抹平，且 Cuckoo 已把制造业客户（韩国 SeAH Steel 世亚制钢）写进案例，说明这类工具不只服务硅谷 SaaS，而是能直接嵌入钢铁、装备等重工业的跨国采购谈判、海外工厂运维会、供应商技术评审等高术语密度场景——传统人工同传贵且难约、通用翻译又常把「热轧 / 冷轧 / 屈服强度 / 公差」等专业术语译错。Cuckoo 让企业把产品手册、图纸术语表、技术规范预先喂入，实现现场收音级的实时定制口译，对国内制造企业的启示是：出海团队的「跨语言沟通」可以先于 CRM、先于大模型平台落地成一个轻量、可感知 ROI 的 AI 入口，尤其适配海外展会、跨国验厂、售后远程支持等一线场景。
2. **国内对标厂商**：讯飞听见 / 科大讯飞同传（会议实时转写 + 翻译，术语库定制，最贴近 Cuckoo 的会议口译定位）、时空壶 Timekettle（AI 同传耳机 / 硬件为主，覆盖线下面对面与会议场景）、腾讯会议 / 飞书妙记内置实时翻译字幕（大厂协作套件内嵌，通用而非垂直定制）、网易有道 / 有道翻译（通用翻译，会议同传方向延伸）
   > 国内最贴近的是讯飞——其会议同传同样主打实时转写+翻译并支持行业术语库，是 Cuckoo「文档喂入定制术语」打法的国内参照；差异在 Cuckoo 更聚焦出海 B 端 GTM 团队且以会议 bot + 文档上下文为核心卖点。硬件路线看时空壶（以耳机 / 翻译机切线下场景）。大厂侧腾讯会议 / 飞书已把实时翻译做进协作套件，构成 Cuckoo 式独立工具在国内的最大替代压力——这也提示国内做垂直会议翻译的创业公司须靠「行业术语定制 + 出海服务能力」建立差异，否则易被协作平台通用能力吞并。
3. **可迁移的干法 / 应进场景词典的词条**：会议实时口译、出海跨语言协作、文档喂入术语定制、会议bot、现场收音同传、GTM销售营销客服、跨国供应链谈判
   > 可迁移干法：Cuckoo 的核心方法论是「用私有文档在会话前构建上下文，把通用大模型翻译收窄成行业 / 组织专属翻译」——这套「文档→术语上下文→实时输出」的模式可迁移到制造企业任何高术语密度的跨语言 / 跨专业沟通：跨国采购与验厂谈判、海外客户远程技术支持、多语种售后手册问答、外派工程师现场沟通。更抽象地看，它示范了「以 bot 身份介入现有协作工具（Zoom / 会议）+ 私有资料 RAG 定制」这一轻量嵌入式 AI 落地范式，制造企业可复用于会议纪要、合规审查、技术评审等场景，无需替换现有系统即可获得可感知 ROI。
4. **风险与存疑点**：风险①护城河薄弱：Zoom / Teams / 腾讯会议 / 飞书等协作平台正把实时翻译做成内置免费能力，独立工具的「文档定制术语」优势可能被大厂快速追平，天花板受挤压。②双人极早期 + 种子轮仅 $1.8M：团队仅 2 人、2024 年成立、2025 年 11 月才完成种子轮，人力与资金对抗大厂 / 巨头（DeepL、Google）的能力有限，客户名单虽含大牌但多为试用 / logo 级，付费深度与留存未披露。③技术与合规风险：实时口译对延迟、准确率、专业术语容错要求极高，一次关键谈判误译代价大；且会议内容涉敏感商业信息，医疗（SNOMED）、金融等场景对数据驻留 / 隐私合规要求苛刻，跨境数据处理存在监管风险。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Cuckoo Labs | Y Combinator | https://www.ycombinator.com/companies/cuckoo-labs |
| Launch YC: Cuckoo – Real-time AI translator for global sales, marketing, and support | https://www.ycombinator.com/launches/Mjg-cuckoo-real-time-ai-translator-for-global-sales-marketing-and-support |
| Launch HN: Cuckoo (YC W25) – Real-time AI translator for global teams | https://news.ycombinator.com/item?id=43245153 |
| Cuckoo Raises $1.8 Million in Seed Round | The SaaS News | https://www.thesaasnews.com/news/cuckoo-raises-1-8-million-in-seed-round |
| Cuckoo — Real-time AI translator for global teams（官网） | https://www.cuckoo.so/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
