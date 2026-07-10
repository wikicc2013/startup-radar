# Aurorin CAD

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Help hardware companies ship faster with smarter CAD（用更聪明的 CAD 让硬件公司更快出货）
- **官网/锚定**：https://www.ycombinator.com/companies/aurorin-cad
- **深研状态**：researched

## 公司画像
- **团队**：创始人兼 CEO Michael Baron，单人创业（YC 目录显示团队规模 1 人）。此前在 SpaceX 从事 Raptor 发动机燃烧仿真、Dragon 飞船制导导航与控制（GNC）、Starshield 飞控软件；并在 Apple 做过 GPU 驱动性能优化。据媒体披露为 Lehigh University 学生（2026 年 5 月毕业），SpaceX 实习 3 次。
- **成立/批次**：2026
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向机械工程师的下一代机械 CAD 软件。核心卖点是自研的参数化 + B-Rep（边界表示）内核——不再沿用 SolidWorks、NX、Creo、CATIA、Fusion 360、Onshape 等主流软件共用的、诞生于 1980 年代的老内核，而是为现代 CPU/GPU 从零重写，从架构层原生集成 AI Agent。产品把传统 UI 建模与 AI 对话界面结合：用自然语言描述即可在数秒内生成可编辑的实体几何。对标口号：SolidWorks 老手 20 分钟才能做出的零件，在 Aurorin 里几秒完成。原生桌面应用，支持 Mac 与 Windows，可免费下载。
- **商业模式**：面向硬件公司与设计工程师的专业 CAD 软件；免费下载试用，团队授权（team licensing）需联系销售。具体定价与订阅方案未公开披露。
- **竞争格局**：直接对标 SolidWorks（达索）、PTC Creo、Siemens NX、CATIA、Autodesk Fusion 360、Onshape 等主流机械 CAD。差异化在于底层内核：现有软件多数复用 Parasolid / ACIS 等 1980 年代内核，Aurorin 自研现代内核并原生嵌入 AI。同期 AI-CAD 赛道竞品还包括 Zoo/Text-to-CAD、Adam、Leo CAD 等新锐。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W26（种子前/加速器） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/aurorin-cad) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：CAD 是制造业研发链路的最上游工具，长期被达索/西门子/PTC/Autodesk 四家用 1980 年代内核锁死，切换成本极高。Aurorin 的意义在于验证一条『底层内核重写 + AI Agent 原生嵌入』的技术路线：把『画图』从人手一步步点选，变成『描述意图→AI 生成可编辑实体』。对制造企业研发部门而言，这是设计工程师岗位从『软件操作工』向『意图表达者』迁移的早期信号；对国产工业软件而言，则是『趁 AI 换挡期弯道超车老内核』的窗口验证。
2. **国内对标厂商**：中望软件（ZWSOFT）——国产机械 CAD/CAE 龙头，自研 Overdrive 几何内核，A 股上市，是国内最接近『自研 CAD 内核』叙事的对标、数码大方 CAXA——国产 CAD/PLM 老牌厂商，装备制造与教育市场渗透深、华天软件 CrownCAD——国产云原生三维 CAD，自研内核 DGM，与 Aurorin『现代架构重写内核』路线可对照、新迪数字（Chief3D/天工 CAD）——国产三维 CAD 内核自研方向对标
   > 国内 CAD 内核自研已从『能用』走向『AI 化』：中望、华天、新迪均在推进自研几何内核并叠加 AI 功能。Aurorin 证明单点『内核重写 + AI 建模』可作为独立创业命题，对国产厂商是提示——不必等大而全，先在『AI 自然语言建模』这一新交互层做出体验差，就有机会切入。但也要警惕：Aurorin 目前仍是单人早期产品、无公开客户与营收，国产对标已有上市营收与政企渠道，二者不在同一成熟度。
3. **可迁移的干法 / 应进场景词典的词条**：机械设计/CAD、AI 原生工业软件、自然语言建模（Text-to-CAD）、参数化建模、B-Rep 几何内核、硬件研发提效、工程师生产力工具、桌面端专业软件
   > 1) 找到被『祖传底层技术』锁死、切换成本高但体验糟糕的专业软件品类（CAD、EDA、CAE、BIM），用现代架构 + AI 从零重写内核做体验代差；2) 用一个极具冲击力的量化对比锚定价值（『20 分钟 vs 几秒』）做传播抓手；3) 免费下载 + 团队授权的自下而上 PLG 路径，先攻个人工程师与初创硬件团队，再向企业渗透；4) 创始人用硬核履历（SpaceX/Apple）建立底层技术可信度，对深科技工具型产品尤为关键。
4. **风险与存疑点**：1) 单人团队（YC 显示 1 人），2026 年新成立、产品早期，工程与商业化风险极高；2) 自研 CAD 内核是公认的『十年级』技术壁垒，SolidWorks/NX 积累数十年，几何鲁棒性、装配、工程图、仿真、数据格式互通是深坑，短期难与成熟软件正面竞争；3) 无公开付费客户、无披露营收，PMF 未验证；4) 创始人媒体报道为在校学生（2026 年 5 月毕业），全职投入与团队扩张存不确定性；5) 融资金额未公开披露，仅确认 YC W26 背书；6) AI-CAD 赛道拥挤（Zoo、Adam 等），差异化窗口可能被快速追平。以上均为早期观察，锚定信息以官网与 YC 目录页为准。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Aurorin CAD - YC 公司目录页 | https://www.ycombinator.com/companies/aurorin-cad |
| Launch YC: Aurorin CAD - The Next Generation Mechanical CAD Software | https://www.ycombinator.com/launches/PWy-aurorin-cad-the-next-generation-mechanical-cad-software |
| Aurorin CAD 官网 | https://www.aurorincad.com/ |
| Aurorin CAD 官网 About 页 | https://www.aurorincad.com/about |
| Launching Aurorin: Create in seconds what takes 20 minutes in SolidWorks（官网博客） | https://www.aurorincad.com/blog/aurorin-launches-at-yc |
| StartupHub.ai：Claude's Corner - Aurorin CAD, Ripping Out the 1980s Kernel | https://www.startuphub.ai/ai-news/claudes-corner/2026/claudes-corner-aurorin-cad-yc-w2026 |
| Y Combinator 官方 X 发文（W26 发布祝贺） | https://x.com/ycombinator/status/2026401752132759957 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
