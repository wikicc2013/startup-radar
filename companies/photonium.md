# Photonium

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-11 ｜ **再现记录**：B005
- **一句话定位**：AI optical design for engineered systems（面向工程系统的 AI 光学设计）
- **官网/锚定**：https://www.ycombinator.com/companies/photonium
- **深研状态**：researched（在营。YC Spring 2025（X25）批次，公开于 2025-05-29 Launch YC，同时入选 NVIDIA Inception。官网 photonium.ai / photoniumoptics.com 均在线，产品 Photonium Insight 处于早期商用（提供 demo 预约 + 咨询）。未见关停/被收购迹象。）

## 公司画像
- **团队**：两位联合创始人：Jennifer Song（哈佛物理/数学/CS，曾在 Harvard、Stanford、QuEra 做量子光学实验）与 Adam Mhatre（斯坦福计算物理，做过聚变等离子体仿真与天体物理黑洞大规模建模）。团队约 4 人，含 ML/软件/光学工程师。顾问团含 Starcloud 创始人 Philip Johnston、斯坦福 Lambertus Hesselink 教授、哈佛 Sitan Chen 教授、CMU Ioannis Gkioulekas 教授。团队成员既往任职标注含 KLA、Meta、Google、Applied Materials、Apple、Stanford（为个人履历 logo，非客户）。
- **成立/批次**：2025
- **地点**：美国纽约（New York City, NY）
- **产品**：光学系统设计自动化平台，定位为「光学界的 EDA」（对标 Cadence/Synopsys 之于芯片）。核心产品 Photonium Insight：把书面规格书或已有设计文件转成优化后的光学设计，覆盖设计生成→优化→仿真→公差分析（tolerancing）→采购/寻源（sourcing）→原型全链路。技术上原生对接行业标准 Zemax（.ZMX 导入导出、ZOS-API 脚本）与 CODE V，并自研光线追迹/优化引擎；分析能力含 MTF、点列图、Seidel 像差、PSF、RMS 波前误差；可预测公差影响（免去冗长仿真）、给出对齐/制造调整建议、做成本/尺寸/性能权衡优化、与现有 CAD 集成。宣称把过去需数月、20+ 名光学 PhD 的活压缩到数天，甚至让非专家可用。
- **商业模式**：软件 + 咨询混合。软件侧为 Photonium Insight（SaaS，含定制软件开发）；服务侧为资深光学工程师咨询网络（按需雇用）。目前以预约 demo / 咨询切入，未公开定价。
- **竞争格局**：传统光学设计工具：Ansys Zemax OpticStudio、Synopsys CODE V、LightTools、FRED 等（Photonium 既与之集成又意图替代其手工试错工作流）。同期 AI-native 光学设计新锐亦在涌现，但公开可比对手稀少；更宏观对标是芯片 EDA 巨头 Cadence/Synopsys 的「光学版」愿景。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC / 种子前 | 未披露（第三方聚合站曾列约 $500K，等于 YC 标准投资额，未经官方确认） | 2025 | [链接](https://www.ycombinator.com/companies/photonium) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造业（尤其光学元件、激光、传感器、半导体设备研发端）意义直接：光学系统设计长期是「手工试错 + 碎片化老工具 + 稀缺 PhD」的重资产环节，一个镜头/激光/LiDAR 光路从 R&D 到量产常耗数月至数年、养 20+ 人光学团队。Photonium 把「规格→公差化设计→采购」链条用 AI 端到端优化，等于把光学研发从「大师手艺」推向「参数化自动寻优」。对制造企业的价值点：①研发提效——设计迭代由数月压到数天，直接缩短新品（相机模组、激光器、光谱/计量仪、AR/VR 光学、车载 LiDAR）上市周期；②降门槛——非光学专家也能生成可用设计，缓解光学 PhD 招聘难；③打通设计-制造-采购——公差影响预测 + 对齐/制造建议 + 寻源，把「设计好但造不出/造得贵」的断点前移到设计阶段（DFM 左移）；④与现有 Zemax/CODE V/CAD 栈集成而非另起炉灶，降低产线切换成本。风险是光学设计的物理正确性/可制造性容错极低，AI 生成需资深工程师复核，短期更像「副驾驶 + 咨询」而非全自动。
2. **国内对标厂商**：国产光学设计软件：目前主流仍是进口 Zemax/CODE V/LightTools，国产替代薄弱；高校/院所有 SOD88、GOLD、CIOMP（长春光机所）系工具积累，但商用化、生态与自动化程度远不及，AI-native 光学 EDA 基本空白、光子学/集成光子 EDA：国内如 Latitude Design Systems（鲁汶仪器/珠海）等在做光子集成芯片（PIC）设计自动化，赛道相邻但对象是片上光子而非宏观光学系统、AI+仿真/CAE 提效：国产 CAE（云道智造/中望 ZWSim、安世亚太等）在结构/流体仿真做 AI 加速，方法论可迁移到光学寻优，但暂未见专攻光学设计自动化者、光学制造龙头研发端：舜宇光学、水晶光电、蓝特光学、炬光科技（激光/光学）等是潜在需求方与本土化落地场景
   > 国内在「AI-native 光学系统设计自动化」这一精确赛道几乎空白：设计软件长期被 Zemax/CODE V 垄断，国产替代停留在高校工具层面、缺商用生态；相邻的光子集成 EDA（Latitude 等）对象不同；CAE 厂商有 AI 加速方法论但未切入光学。真正的本土需求方是舜宇、水晶光电、炬光、AR/VR 与车载 LiDAR 光学供应链——他们既缺自主设计工具、又养着昂贵光学团队，是「光学设计自动化」最可能的国产化买单方。Photonium 模式对国内的启示是：可从「AI 副驾驶 + Zemax 集成 + 公差/寻源」这一低门槛切口切入，而非一上来做全自动替代。
3. **可迁移的干法 / 应进场景词典的词条**：光学设计自动化、光学界EDA、规格到设计(spec-to-design)、AI+仿真优化、公差分析自动化、设计-制造-采购一体、AI副驾驶+专家咨询、研发提效
   > 可迁移的干法有三：①「行业 EDA 化」——把某个靠老师傅手工试错、工具碎片化的重研发环节（光学、天线、结构、工艺配方），用 AI 做「规格→自动寻优→可制造性校验→采购」的端到端串联，是制造业研发提效的通用范式；②「集成而非替代」——原生对接行业既有主力工具（Zemax/CODE V/CAD），做增量副驾驶降低切换成本，比另造新栈更易被工程团队接受；③「软件+专家咨询混合起步」——早期用资深工程师兜底 AI 输出的物理正确性，边服务边积累领域数据/闭环，逐步把咨询沉淀为软件能力。这套「副驾驶+咨询→数据飞轮→自动化」路径适用于所有容错低、专家稀缺的硬核工程设计场景。
4. **风险与存疑点**：①极早期：成立于 2025、约 4 人、融资未公开披露（聚合站列约 $500K 即 YC 标准额），产品处 demo/咨询阶段，尚无公开具名客户或 case study，商业化验证不足；②物理容错极低：光学设计对可制造性/公差敏感，AI 生成需资深工程师复核，短期难做到「非专家全自动」的宣传水平，价值更接近副驾驶；③赛道壁垒双刃：既依赖 Zemax/CODE V 集成（受制于第三方生态），又要挑战其手工工作流，若巨头（Ansys/Synopsys）自带 AI 功能则正面竞争；客户又高度分散于量子、生物成像、LiDAR、半导体计量等异构领域，标准化产品化难度高。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Photonium: AI-Powered Optical Consulting & Software | Y Combinator（公司主页） | https://www.ycombinator.com/companies/photonium |
| Launch YC: Photonium: AI-Accelerated Optical Design Automation | https://www.ycombinator.com/launches/Nce-photonium-ai-accelerated-optical-design-automation |
| Photonium 官网（产品 Photonium Insight / 工具集成 / 顾问团） | https://photonium.ai/ |
| Photonium — Optical Design Automation & Engineering Consulting（咨询站） | https://www.photoniumoptics.com/ |
| Startup Photonium uses AI to advance optical design automation — American Bazaar | https://americanbazaaronline.com/2025/05/29/startup-photonium-uses-ai-to-advance-optical-design-automation-463165/ |
| Y Combinator on X：Photonium 端到端 AI 光学设计自动化（服务量子/生物成像/LiDAR/半导体计量） | https://x.com/ycombinator/status/1927847351592317105 |
| Jobs at Photonium (P25) | Work at a Startup | https://www.workatastartup.com/companies/30465 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
