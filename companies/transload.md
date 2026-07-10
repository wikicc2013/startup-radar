# transload

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-06 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B001
- **一句话定位**：Measure freight items with security cameras（用监控摄像头测量货物）
- **官网/锚定**：https://www.ycombinator.com/companies/transload
- **深研状态**：researched

## 公司画像
- **团队**：3 位联合创始人。Julius Scheel（CEO，前麦肯锡 Top 5% 分析师，曾在 avi medical 搭建线上诊所做到七位数 ARR）；Nils Börner（CTO-AI，5 年计算机视觉系统经验，IEEE 论文作者，慕尼黑工业大学 TU Munich Top 5% 硕士）；Jago Wahl-Schwentker（CTO-工程，Veli 首位软件工程师，做过 AI 告警与蓝牙定位产品）。
- **成立/批次**：2026
- **地点**：美国旧金山（San Francisco）
- **产品**：把仓库/月台已有的安防监控摄像头（CCTV）变成 3D 货物体积测量器（dimensioner）。用计算机视觉在货物随正常月台流程移动时自动测量托盘、包裹、沙发、轮胎等异形件的真实尺寸，无需新增专用扫描硬件或让货物过专门的量方工位。主打 LTL（零担）货运场景：解决托运方申报尺寸偏小/低报的问题——约 15% 货件实际尺寸大于申报值。
- **商业模式**：面向 LTL 货运/物流承运商的 B2B SaaS（推测按站点订阅，官方未披露具体定价）。价值主张：每个站点每月约带来 5 万美元的补收（rebilling）与挂车装载率（trailer utilization）改善收益。卖点是复用既有安防摄像头，零新增硬件、部署轻。
- **竞争格局**：传统量方站（dimensioning station，如 Cubiscan、SICK 等专用 3D 量方设备）；仓储/月台安防视觉平台（如 Voxel）；广义物流视觉计量赛道。transload 的差异化在于'不加硬件、复用 CCTV'。

## 融资
未披露（未检索到带来源的融资信息）

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业物流与仓储环节有直接借鉴：出入库、成品发运、原材料收货都存在'尺寸/体积/装载率'黑箱。transload 的'复用既有安防摄像头做视觉计量'思路，可平移到工厂成品仓的自动量方、装车装柜率核验、异形件盘点等场景，避免为量方单独上一套 DWS 硬件，符合制造业降本诉求。
2. **国内对标厂商**：梅卡曼德机器人（Mech-Mind，工业 3D 视觉/物流拆码垛与体积测量）、海康威视（Hikvision，安防摄像头 + 智能视觉分析，含仓储/物流场景）、图漾科技 / 奥比中光（3D 视觉传感，DWS 体积重量扫描）、中科微至 / 顺丰科技等物流 DWS（Dimension-Weight-Scan）动态量方方案
   > 国内'物流视觉计量/仓储 3D 视觉'成熟度已较高：海康提供摄像头+算法一体，梅卡曼德聚焦工业 3D 视觉与拆码垛，DWS 动态量方（图漾/奥比中光/中科微至等）在快递分拣线上广泛落地。transload 的独特点不是算法本身，而是'不加专用硬件、直接吃 CCTV'的部署方式，这一点国内厂商多仍依赖专用 3D 传感器，存在可对标改造空间。
3. **可迁移的干法 / 应进场景词典的词条**：仓储物流视觉计量、货物3D体积测量(DWS)、月台/装卸口计算机视觉、LTL零担货运计费核验、安防摄像头复用/AI改造、挂车装载率优化、运费补收(rebilling)
   > 可迁移打法：①盘点客户现场'已装但只用于安防'的摄像头，做零硬件增量的视觉能力叠加；②切一个 ROI 极清晰、可直接换算成金额的痛点（此处=运费补收+装载率），用'每站点每月 X 万'话术锚定价值；③从计费核验这种'查漏即回本'的场景切入，快速证明价值再扩展。制造业可复用为'成品发运计费/装柜率核验'的同构打法。
4. **风险与存疑点**：①极早期（2026 成立、YC Spring 2026 批次），无公开融资与具名客户，商业验证尚待观察；②CCTV 视角/光照/遮挡对测量精度的影响是硬约束，能否在真实月台达到计费级精度（承运商需可用于对客补收，涉及法律/合规争议）是核心技术与商业风险；③赛道竞争者众（专用量方设备、Voxel 等视觉平台、国内 DWS 厂商），护城河更多在部署方式而非算法；④'零硬件'承诺在摄像头分辨率/位置不理想的现场可能需要补装，弱化差异化。未发现更名或 pivot 迹象。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| transload: Measure freight with security cameras \| Y Combinator | https://www.ycombinator.com/companies/transload |
| Launch HN: Transload (YC P26) – Measuring freight items with CCTV \| Hacker News | https://news.ycombinator.com/item?id=48463273 |
| transload — Computer vision for the loading dock (官网) | https://www.transload.io/ |
| YC-backed Transload uses computer vision to measure freight (LinkedIn/FreightCaviar) | https://www.linkedin.com/posts/freightcaviar_yc-backed-startup-transload-just-launched-activity-7462510066039123968-M6BO |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
