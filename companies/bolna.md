# Bolna

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B003
- **一句话定位**：Voice AI agents for Indian languages（面向印度多语种的语音 AI 智能体）
- **官网/锚定**：https://www.ycombinator.com/companies/bolna-ai
- **深研状态**：researched（YC Fall 2025 (F25) 批次已锚定；官网、YC 目录、TechCrunch、Crunchbase(法人实体 Whismurwave Inc) 多源交叉一致。2026 年 1 月完成 630 万美元种子轮，据报 YC 曾 5 次拒绝其申请后于 F25 录取。）

## 公司画像
- **团队**：联合创始人 Prateek Sachan 与 Maitreya Wagh（Maitreya 曾在 Zomato、Tata 1MG、BrowserStack、Atlassian 任职）。团队约 21 人，总部班加罗尔(Bengaluru)。
- **成立/批次**：2024–2025（Crunchbase 记 2024，YC 归入 Fall 2025 批次）
- **地点**：印度 班加罗尔 (Bengaluru, India)
- **产品**：面向印度企业的语音 AI 编排(Voice AI Orchestration)平台。企业可从通话记录/FAQ 直接生成并部署语音 AI 智能体，自动化外呼与接听。支持 10+ 印度语言、50+ 口音适配、亚 500ms 延迟，针对嘈杂电话环境与混合语言(code-switching)优化；集成降噪、Truecaller 来电身份核验、跨模型智能路由(STT/LLM/TTS)。典型场景：客服、销售、获客、招聘、培训。
- **商业模式**：B2B 语音基础设施/编排层。自助(self-serve)平台约占收入 75%，其余为企业大单——配前置部署工程师(forward-deployed engineers)做定制落地。按通话分钟计费。行业集中在 BFSI(银行金融保险)、电商、招聘。
- **竞争格局**：编排/语音 Agent 平台：Vapi、LiveKit、VoiceRun 等；Bolna 差异化在于专攻印度多语种、口音与本地电话网络实况，而非通用英语市场。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed 种子轮 | 6.3M USD | 2026-01 | [链接](https://techcrunch.com/2026/01/20/bolna-nabs-6-3-million-from-general-catalyst-for-its-india-focused-voice-orchestration-platform/) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Spinny（二手车交易） | 高 | [链接](https://techcrunch.com/2026/01/20/bolna-nabs-6-3-million-from-general-catalyst-for-its-india-focused-voice-orchestration-platform/) |
| Snabbit（按需家政） | 高 | [链接](https://techcrunch.com/2026/01/20/bolna-nabs-6-3-million-from-general-catalyst-for-its-india-focused-voice-orchestration-platform/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业的营销·销售·客服，Bolna 的信号是「多语种语音 Agent 正在把电话这条最重、最贵、最难标准化的触点自动化」。制造企业的经销商触达、售后报修受理、备件催单、渠道回访、蓝领招聘外呼等场景，长期依赖大量方言/多语种人工坐席，招人难、质量参差、夜间无人。Bolna 这类「从通话记录/FAQ 一键生成语音 Agent + 按分钟计费 + 前置部署工程师做落地」的模式，把语音客服的启动门槛从「建呼叫中心」降到「上传知识库」。对中国出海制造企业尤有借鉴：面对印度、东南亚、中东等多语言碎片化市场，本地方言语音 Agent 是渠道下沉与售后覆盖的低成本武器；对国内工厂，则提示「电话客服/外呼」是继文本客服后下一个被 AI Agent 吃掉的岗位。
2. **国内对标厂商**：百度智能云 曦灵/一言语音 + 智能外呼（大厂电话机器人）、阿里云智能语音交互 / 通义语音 Agent、容联云、天润融通、思必驰、捷通华声(灵云)——传统智能语音客服/外呼厂商向 LLM Agent 升级、声通科技、追一科技(语音方向)
   > 国内对标不是缺席而是「换赛道打法」。中国电话机器人/智能外呼市场成熟且卷(容联云、天润融通、思必驰等)，但多为面向单一普通话+少量方言、以话术脚本为主的传统 IVR 升级；Bolna 的差异在「编排层中立(自由路由多家 STT/LLM/TTS)+ 多语种碎片市场 + 自助生成」的产品形态，更接近 Vapi 的编排范式而非国内的整包客服。对国内厂商的启示：真正的护城河从「话术模板」转向「低延迟多方言编排 + 本地电话网络/号码信誉治理(如 Truecaller 式反骚扰核验)」——后者恰是国内外呼合规(防骚扰电话)与出海本地化的关键卡点。
3. **可迁移的干法 / 应进场景词典的词条**：语音AI编排、多语种外呼、电话客服自动化、前置部署工程师、FAQ一键生成Agent、按分钟计费、code-switching混合语言
   > 可迁移干法有三：①「知识库→Agent 直生成」——把散落的通话记录/FAQ/话术当作训练语料，一键长出可上线的语音 Agent，制造企业的售后知识库正好是现成燃料；②「编排层中立」——不绑死单一 STT/LLM/TTS，按场景/成本/语言智能路由，规避单一大模型涨价与能力短板；③「self-serve(75%)+ 前置部署工程师(FDE) 双引擎」——小客户自助跑量、大客户配工程师做定制落地，是 B2B AI 基础设施把 PLG 与项目制结合的典型范式，值得国内做行业 Agent 的团队照搬。
4. **风险与存疑点**：①极早期、护城河薄：编排层(STT/LLM/TTS 均外采)技术壁垒不高，Vapi/LiveKit 等强敌环伺，且上游大模型厂商可下探吞掉编排层；ARR 仅约 70 万美元、企业付费客户仅 2 家(4 家试点)，商业化尚未验证规模。②合规与信誉风险：AI 外呼在多国面临反骚扰电话监管，号码信誉/用户投诉可能直接掐断渠道；语音克隆/身份核验涉隐私。③单一市场依赖：高度绑定印度本地电话网络与语言生态，出海复制需重做本地化；60–70% 通话仍集中在英语/印地语，'10+ 语言'的长尾价值待验证。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Bolna AI: Voice AI to enable India's next billion | Y Combinator | https://www.ycombinator.com/companies/bolna-ai |
| Launch YC: Bolna - Voice AI for India | https://www.ycombinator.com/launches/OVc-bolna-voice-ai-for-india |
| Bolna nabs $6.3M from General Catalyst for its India-focused voice orchestration platform | TechCrunch | https://techcrunch.com/2026/01/20/bolna-nabs-6-3-million-from-general-catalyst-for-its-india-focused-voice-orchestration-platform/ |
| Voice AI Agents for Indian Languages | Bolna AI (官网) | https://www.bolna.ai/ |
| YC-backed Voice AI Startup Bolna Raises $6.3 Million Seed Round Led by General Catalyst | StartupTalky | https://startuptalky.com/news/yc-backed-voice-ai-startup-bolna-raises-seed-funding/ |
| Bolna - Crunchbase Company Profile (Whismurwave Inc) | https://www.crunchbase.com/organization/whismurwave-inc |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
