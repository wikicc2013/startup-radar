# Prox

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Digital co-worker for logistics operations（物流运营的数字同事）
- **官网/锚定**：https://www.ycombinator.com/companies/prox
- **深研状态**：researched

## 公司画像
- **团队**：两位创始人（童年好友）：Dima Yanovsky（MIT '25 计算机与电子工程，曾在 MIT CSAIL 做机器人研究、在 Pulley/YC W20 构建 AI agent）与 Gregory Makodzeba（曾创办区块链安全公司 Rektoff、在 Runtime Verification 负责 DevRel，学过航空管理与计算机）。团队约 7 人，两人自称从小在自家仓库里长大。来源：https://www.ycombinator.com/companies/prox
- **成立/批次**：2025
- **地点**：San Francisco, CA（901 Tennessee St, 94107）
- **产品**：已发生明显转向。当前官网（useprox.com）定位为『面向制造商的 AI 产品专家 / AI Product Specialist for Manufacturers』，标语 'Don't make customers dig through manuals.'——把厂商说明书/手册作为知识底座，做复杂实体产品（暖通 HVAC、动力运动装备、工程机械、农机、专业音视频、医疗设备、工业机械等）的安装/排障/维修/售后技术支持，回答带手册引用出处，可生成接线图、共享 CAD、处理现场视频、语音支持。早期形态（YC 目录与 F25 宣传期）是物流数字劳动力：为 3PL/履约商自动化承运商理赔（carrier claims）、货运预订、POD 处理，首个 agent 部署在独角兽 3PL ShipBob。来源：https://useprox.com/ ；https://www.ycombinator.com/companies/prox
- **商业模式**：SaaS 订阅。当前官网披露 Launch 套餐每月 $2,000 起底价，按索引页数与月消息量分档定价，无按坐席/无升级转人工额外收费；多部署面（产品页、经销商门户、内部团队、以及通过 MCP 接入 ChatGPT/Claude/Copilot/Gemini）。早期物流形态的 ShipBob 理赔 agent 曾被第三方报道产生约 $5K MRR。来源：https://useprox.com/
- **竞争格局**：当前赛道对标：制造商售后/技术支持 AI（说明书 RAG、field service、经销商门户助手），与 Aquant、Sensa/Assist 类 field service AI、以及通用 enterprise support copilot 竞争；早期物流形态则与货运/理赔自动化工具、3PL 内部运营自动化竞争。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Fall 2025 + seed（具体总额未确认，第三方聚合站数据相互矛盾，见 sources 中 Extruct 标 $500K 而标题写 $1M，均无一手来源） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/prox) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| ShipBob（独角兽 3PL，年处理 1 亿+包裹） | 中 | [链接](https://www.ycombinator.com/companies/prox) |

## 转型有术判断
1. **对制造业客户意味着什么**：Prox 的当前形态几乎是为制造业量身打造：把厂商积累的产品手册、维修文档、接线图、CAD 变成可对话、可引用出处的『数字产品专家』，覆盖装机、排障、维修、售后全链路，直接对准复杂装备制造商（HVAC、农机、工程机械、工业机械、医疗设备）最痛的售后知识分散、老师傅经验难沉淀、经销商与终端客户自助难的问题。对『转型有术』读者是一个鲜活的『知识资产 → 售后 AI 生产力』样本。
2. **国内对标厂商**：G7易流（货运物联网/运营数字化）、满帮（货运匹配平台，物流数字化）、oTMS（运输管理 SaaS）、售后/技术支持方向国内对标：智齿科技、容联七陌等客服/售后 AI（更贴近其当前『手册知识底座售后支持』形态）
   > 早期物流形态可对标 G7/满帮/oTMS 的货运数字化；但其当前售后技术支持形态在国内更接近售后知识库+客服 AI（智齿、容联七陌）与工业设备厂商自建的『智能售后/远程运维』，国内尚缺一家专注『复杂装备手册知识底座售后 agent』的独立玩家，存在空位。
3. **可迁移的干法 / 应进场景词典的词条**：复杂实体产品售后支持、说明书/手册知识底座(RAG)、现场服务(field service)、经销商门户助手、承运商理赔自动化、3PL/履约运营数字劳动力、多模态agent(接线图/CAD/现场视频/语音)、MCP接入(ChatGPT/Claude/Copilot/Gemini)
   > 可迁移打法：①从一个高频、可量化 ROI 的窄场景切入（Prox 早期用 ShipBob 承运商理赔这一可直接算回收金额的场景验证）；②以厂商既有文档（手册/SOP/CAD）为唯一可信底座，答案强制带引用出处，降低幻觉与售后责任风险；③多部署面 + 通过 MCP 接入主流大模型客户端，让 AI 长在客户已有工作流里而非再造入口；④订阅制、按用量分档、不按坐席收费，降低制造商采购门槛。
4. **风险与存疑点**：①创业极早期（2025 成立、约 7 人），且已在一年内从物流理赔大幅转向制造商售后，方向仍在验证，稳定性存疑；②融资总额无一手来源、聚合站数据相互矛盾，不宜引用具体金额；③售后支持答案的准确性/责任边界在高危设备（医疗、工程机械）上要求极高，出错代价大；④手册知识底座依赖厂商愿意开放并持续更新文档，数据获取与维护是壁垒也是瓶颈；⑤赛道拥挤（field service AI、通用 support copilot），差异化需靠垂直深度。

## 信息来源溯源表
（无）

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
