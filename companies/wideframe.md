# Wideframe

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B002
- **一句话定位**：AI agent for video work outside the editor（剪辑器之外视频工作的 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/wideframe
- **深研状态**：researched（YC Winter 2026（W26）批次，已 Launch YC。官网、YC 目录、YC Launch、Product Hunt、LinkedIn 多源一致锚定，信息充分。）

## 公司画像
- **团队**：两人创始团队。Daniel Pearson（联合创始人 & CEO）：曾为 Uber、DoorDash、Dropbox 等 175+ 客户操盘超 10 亿美元增长/广告预算，营销增长背景。Zachary Kim（联合创始人 & CPTO）：20+ 年经验的工程负责人。两人相识 15 年、曾为同事。团队规模约 2 人，位于旧金山湾区。
- **成立/批次**：2025
- **地点**：美国·旧金山湾区（San Francisco Bay Area）
- **产品**：面向视频剪辑师的 AI 协作智能体（AI coworker / assistant editor），专攻剪辑器（NLE）之外的那 75% 前置工作——素材的搜索、打标、整理、排序与组接。用户把本地文件系统或云盘里的素材库接入后，用自然语言下指令，Agent 像助理剪辑一样帧级理解画面、检索出对的镜头、组装时间线，并原生输出 Adobe Premiere Pro 工程文件（.prproj）供剪辑师直接打开二次加工。强调「只从你真实素材库里找和拼、不凭空生成像素（不 hallucinate）」，同时也支持上下文感知的图/视频/音频生成。是需 Apple Silicon（M1+）的原生 Mac 桌面应用，在本机端跑媒体分析以保证速度与帧精度，兼容本地与云存储。
- **商业模式**：Freemium + 7 天免费试用（try.wideframe.com 可下载）；面向企业客户提供定制化 video agent 工作流。目标客群为需要高频量产视频（每周数十到上百条广告/社媒内容）的品牌方与代理商/工作室。
- **竞争格局**：上游是 Adobe Premiere / Final Cut 等 NLE 及其内嵌 AI 功能（Wideframe 定位为其上游的『助理剪辑』而非替代品）；素材管理/MAM 与 AI 打标检索类工具（如 Frame.io、以及各类 AI media asset management）；生成式视频（Runway、Pika、Sora 等）——但 Wideframe 刻意与纯生成路线区隔，主打『用你自己的真实素材检索+组接』。差异点在于帧级理解 + 素材库检索排序 + .prproj 双向 roundtrip 的组合。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Winter 2026（W26） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/wideframe) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Goodo Studios（创始人 Matthew Gattozzi 具名背书，称每位剪辑师每天可省约 2 小时） | 中 | [链接](https://www.ycombinator.com/launches/PUI-wideframe-ai-agent-for-video-work-outside-the-nle) |
| 某代理商（未具名，称可为剪辑师每周省约 10 小时） | 低 | [链接](https://www.ycombinator.com/companies/wideframe) |
| 某纪录片团队（未具名，将 2500+ 视频 / 500+ 音频 / 2.5+ TB 的整部纪录片素材从数周整理压缩到数小时） | 低 | [链接](https://www.ycombinator.com/companies/wideframe) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业的营销·销售·客服而言，Wideframe 的信号是『视频内容生产里的隐形工时正在被 AI 吃掉』。制造企业做产线纪实、设备演示、展会 vlog、客户案例片、售后操作教学时，往往积累了海量原始素材（车间多机位、无人机航拍、设备特写、访谈），真正拖慢产出的不是剪辑本身而是海量素材的检索、打标、挑选与组接——正是 Wideframe 攻的那 75%。它意味着市场部/品牌中心可以用更少的人把库存素材反复复用成大量短视频（社媒投放、经销商赋能、售前演示），把『一次拍摄、几十条产出』变成常态；对售后/客服，则可从既有教学录像里快速检索组接出针对特定故障/机型的操作短片。核心红利是把稀缺的剪辑人力从整理杂活里解放出来做叙事与创意。
2. **国内对标厂商**：剪映/CapCut 企业版及即梦（字节）——素材管理+AI 辅助剪辑+生成，覆盖量产短视频、来画/一帧秒创/万兴喵影(Wondershare Filmora)——AI 剪辑与模板量产、Sora 类国内对应的通义万相/可灵(快手)——但属生成式，与 Wideframe 的『检索真实素材』路线相反，仅部分场景重叠、MAM/智能媒资类：新奥特、索贝、当虹科技等广电媒资打标检索厂商——偏 B 端媒资中台
   > 国内没有与 Wideframe『帧级理解真实素材库 + Premiere .prproj 双向 roundtrip + Mac 端原生助理剪辑』完全对位的产品。最接近的是两条线的拼合：一条是剪映/即梦/万兴这类『AI 辅助剪辑 + 生成 + 模板量产』的消费/中小 B 工具，强于生成与模板、弱于『大规模真实素材检索排序』；另一条是新奥特/索贝/当虹等广电级智能媒资（MAM）厂商，强于媒资打标检索、但偏重资产管理中台而非贴着剪辑师工作流的『助理剪辑 Agent』。Wideframe 的独特卡位（不生成像素、只从你自己的素材里找和拼、并回吐工程文件给专业 NLE）在国内尚属空白，对国内做企业视频中台或量产内容工具的团队是一个清晰的差异化坐标。
3. **可迁移的干法 / 应进场景词典的词条**：素材整理自动化、AI助理剪辑、帧级视频理解检索、量产短视频、NLE工程文件roundtrip、本机端媒体分析
   > 可迁移的干法：把『大量原始素材→可用成片』这条链里最耗时、最不增值的前置环节（看片、打标、命名、归类、按叙事挑选组接）交给 Agent，人只在最后做叙事判断与精修。制造企业可复用的落地场景——① 展会/产线拍摄回来的几 TB 素材自动打标归档，市场部按主题一键检索出可用镜头；② 一次设备演示拍摄，自动切出面向不同机型/行业/渠道的多条短视频；③ 把历史客户案例、访谈、售后教学录像做成可自然语言检索的『企业视频素材大脑』，售前/客服随取随用；④ 与专业剪辑工具双向打通，保证品牌级成片质量而非模板感。关键是坚持『用企业自己的真实素材』，规避生成式的合规与失真风险。
4. **风险与存疑点**：① 极早期、双人团队、成立仅 2025 年，产品与商业化均处早期，融资未公开披露，存活与迭代不确定性高；② 护城河偏薄——『素材检索+组接+.prproj 导出』的能力，Adobe/字节/剪映等平台方一旦内建即可能被吞并，且平台掌握 NLE 生态入口；③ 强依赖 Apple Silicon Mac 本机端，限制了 Windows/工业现场与企业 IT 环境的覆盖，B 端规模化时可能受限；④ 现有客户战报多为未具名或单点背书（仅 Goodo Studios 具名），50+ 品牌/代理商的留存与付费转化未经验证；⑤ 生成式功能一旦深度使用，仍会触及版权/肖像/合规问题。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Wideframe | Y Combinator 公司档案 | https://www.ycombinator.com/companies/wideframe |
| Launch YC: Wideframe - AI agent for video work outside the NLE | https://www.ycombinator.com/launches/PUI-wideframe-ai-agent-for-video-work-outside-the-nle |
| Wideframe 官网 | https://wideframe.com/ |
| Wideframe for Tech Companies（官网行业页） | https://wideframe.com/tech/ |
| Wideframe | Product Hunt | https://www.producthunt.com/products/wideframe |
| Wideframe (YC W26) | LinkedIn | https://www.linkedin.com/company/wideframe |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
