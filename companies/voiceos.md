# VoiceOS

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：Voice interface for Mac and Windows（面向 Mac 与 Windows 的语音交互）
- **官网/锚定**：https://www.ycombinator.com/companies/voiceos
- **深研状态**：researched（已锚定：VoiceOS 是 YC 官方目录收录的 Mac/Windows 语音交互创业公司，公司主体 WakoAI, Inc.，官网 voiceos.com，与通用词 'VoiceOS'（voiceos.com 商标页）及开源项目 OpenVoiceOS 已消歧区分。批次修正：登记为 B005/S25，但 YC 官方标注为 Spring 2025 批次（LinkedIn 显示 YC P25），实为 2025 春季批次而非夏季批次，以官方一手来源为准。分诊判断：归入『AI 基础设施（桌面语音交互底座/生产力工具）』。依据——它是一个系统级、横跨任意应用的通用语音输入与执行层（Dictation Mode 听写 + Agent Mode 经 MCP 跨应用执行动作），面向所有知识工作者的水平生产力工具，而非面向营销/销售/客服某一职能的垂直方案；其价值定位是『把语音变成 OS 级交互底座』，因此更偏基础设施而非营销销售客服。）

## 公司画像
- **团队**：两人创始团队。Jonah Daian（创始人/CEO，自述 7 年语音 AI 产品经验，目标是为 AGI 时代构建语音操作系统）；Kai Brokering（联合创始人，生于东京，15 岁赴美投身科技，深耕语音 AI）。官方称两人合计 7+ 年语音 AI 经验，产品跨度从消费级到 Fortune 500 部署。团队规模 2 人（YC 目录）。
- **成立/批次**：2023（YC 目录标注成立年份；YC Spring 2025 批次）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：系统级通用语音交互工具，覆盖 Mac 与 Windows。两大模式：①Dictation Mode（听写）——将语音转文字并按目标应用智能排版，实现『任意应用零配置』的语音输入；②Agent Mode（智能体）——不止转写，而是理解用户意图并经 MCP（Model Context Protocol）在外部应用中执行真实动作：发 Slack 消息、建日历事件、更新 Notion/文档、网页检索，并把多步操作串成一条语音指令完成。官方主张『把多步任务压成一句话，每周省 8 小时』。已声明集成：Slack、Gmail、Google Calendar、Google Maps、ChatGPT、Claude、Linear、Figma、VS Code、GitHub、Cursor、Outlook、Google Docs、Teams、Telegram、Mail、Notion 等。
- **商业模式**：Freemium 订阅制。免费档（约每周 100 次使用额度）；Pro 档 11.99 美元/月（按年计费，含 Dictation+Agent 两模式、无限使用、优先支持、7 天免费试用）；Enterprise 档定制价（在 Pro 基础上加零数据留存、SOC 2 Type II 与 ISO 27001、SSO/SAML）。发布期发过 YCLAUNCH 折扣码。
- **竞争格局**：处在拥挤的『AI 语音听写/语音输入』赛道，直接对标 Wispr Flow（消费级体验佳、云端为主、约 18 美元/月）、Superwhisper（Mac 原生、纯离线本地处理、SOC2/HIPAA 话术、支持 100+ 语言、买断约 249.99 美元）、以及 Aqua Voice、Willow Voice、VoiceInk（开源）、Voibe、DictaFlow 等。VoiceOS 的差异化不在『听写更准』，而在 Agent Mode——从『语音转文字』升级为『语音转动作』，经 MCP 跨应用编排执行；但这也让它直面 Apple Siri、以及各家 AI 助手/computer-use 类产品的正面竞争，护城河取决于集成广度与执行可靠性。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Spring 2025（种子/加速器） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/voiceos) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Gabe Perez（Product Hunt 产品策展负责人，官网具名推荐语） | 中 | [链接](https://www.voiceos.com/) |
| Usutaku（日本头部 AI 影响者，官网具名推荐语） | 低 | [链接](https://www.voiceos.com/) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业/工业企业而言，VoiceOS 这类『系统级语音交互 + MCP 跨应用执行』底座的真正价值不在办公室白领的听写提效，而在『双手/双眼被占用』的现场场景：车间巡检、设备维保、质检、仓储拣货、产线工艺记录等岗位，工人往往戴手套、操作设备、无法打字，语音成为最自然的输入。若把 Agent Mode 的 MCP 执行层对接到 MES/WMS/EAM/质检系统，理论上可实现『口述即录入工单、口述即触发报修、口述即更新库存/工艺参数』的免手交互。但需清醒：VoiceOS 本身是通用消费/办公工具，工业现场有强噪声、方言口音、离线与数据合规（车间断网、涉密）等硬约束，直接照搬不现实；对制造企业的启发是模式而非产品——即『语音作为动作入口 + 标准协议（MCP）把语音接到既有业务系统』这条路径，值得在自研或选型工业语音方案时借鉴。
2. **国内对标厂商**：讯飞听见/科大讯飞语音输入（听写与语音转写的国内标杆，行业与方言覆盖强，但偏『转写』而非『跨应用执行』）、阿里通义/豆包等大模型厂商的语音助手（具备意图理解与部分应用编排，生态更偏移动端与自家 App）、出门问问 / 思必驰（对话式语音交互与语音 Agent 底座，含 To B 语音方案）
   > 国内暂无与 VoiceOS 完全同构的『桌面级、跨任意应用、MCP 驱动执行』产品：讯飞类强在中文听写与转写准确率但落点是『文字』，大厂语音助手强在意图理解但生态封闭、偏移动端。VoiceOS 的独特点是把『语音→动作』做成 OS 级横向层并用开放的 MCP 接第三方应用。反向情报意义：国内厂商若要复刻，卡点不在语音识别（中文识别已领先），而在跨应用执行的标准化协议与桌面端系统级权限——这恰是国内桌面生态碎片化、缺乏 MCP 式统一动作协议的短板。
3. **可迁移的干法 / 应进场景词典的词条**：语音转动作(voice-to-action)、MCP跨应用编排、桌面级系统交互层、免手输入(hands-free)、听写智能排版
   > 可迁移干法：VoiceOS 最值得迁移的不是『语音识别』本身，而是两个方法论。其一『语音→动作而非语音→文字』——把交互的终点从『得到一段文字』改为『完成一件事』，制造/服务现场的任何『口述即完成』诉求都可套用此思路重新设计。其二『用 MCP 作为语音与业务系统之间的标准适配层』——不为每个系统单独做集成，而是让语音层对接一个统一的动作协议，业务系统只需暴露 MCP 接口即可被语音驱动，这对企业内部工具的可编排化改造有直接示范意义：先把关键业务系统 MCP 化，再在其上叠加语音/自然语言入口。
4. **风险与存疑点**：①赛道极度拥挤且同质化：Wispr Flow、Superwhisper 等在听写体验、离线与合规上各有壁垒，VoiceOS 靠 Agent Mode 差异化，但一旦大厂（Apple Siri 升级、OpenAI/微软 Copilot、各 computer-use 产品）把跨应用语音执行做进操作系统，两人小团队的护城河脆弱；②团队与资金单薄：仅 2 人、除 YC 加速器外无披露融资，执行可靠性（Agent Mode 跨应用动作的成功率/幻觉误操作）与规模化支撑存疑；③信息稀薄且数据合规敏感：作为极早期公司，客户与营收几乎无公开数据（官网仅个人具名推荐，无企业 logo）；Agent Mode 需读写用户 Slack/Gmail/Notion 等敏感数据，隐私与安全（尤其 Enterprise 承诺的零留存/SOC2）尚待验证，误执行破坏性动作的风险随执行能力增强而放大。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| VoiceOS - YC 公司目录页 | https://www.ycombinator.com/companies/voiceos |
| Launch YC: VoiceOS: The Siri for Productivity | https://www.ycombinator.com/launches/PP3-voiceos-the-siri-for-productivity |
| VoiceOS 官网（voiceos.com，含定价/集成/推荐语，主体 WakoAI, Inc.） | https://www.voiceos.com/ |
| VoiceOS (YC P25) - LinkedIn 公司页 | https://www.linkedin.com/company/voice-os |
| VoiceOS - Product Hunt | https://www.producthunt.com/products/voiceos |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
