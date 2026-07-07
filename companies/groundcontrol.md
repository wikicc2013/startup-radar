# GroundControl

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B005
- **一句话定位**：Next-gen software for quality inspection automation（新一代质检自动化软件）
- **官网/锚定**：https://www.ycombinator.com/companies/groundcontrol
- **深研状态**：researched

## 公司画像
- **团队**：3 位联创 + 团队约 8 人。CEO Mehul Shah(家族 PCB 制造企业 8 年软件背景，为火箭/卫星/战机造 PCB)；CTO Matthew Noseworthy(创办并出售 InspectAR，被 Cadence 收购)；COO Nick Warren(曾任 InspectAR、Apple)。
- **成立/批次**：2024 年（YC Spring 2025 / X25）
- **地点**：美国旧金山
- **产品**：面向高度受管制制造业(航空航天、国防、医疗)的质检文档自动化 SaaS。核心是首件检验报告(AS9102C/FAIR)自动化：自动 balloon 图纸、OCR 提取 GD&T 与公差、解析 PDF、对接 CMM 三坐标测量机自动回填检测结果，报告生成从数天缩到数分钟(宣称 5x 提速、特征控制框 FCF 准确率 95%)。另含 APQP/PPAP、供应商质量管理(SCAR)、CMMC 访客登记等模块。
- **商业模式**：垂直 SaaS，按设施(facility)计费、单设施内不限用户/无按席位收费、零安装。托管于 AWS GovCloud，主打 ITAR 注册、NIST SP 800-171、CMMC 2.0 合规、FedRAMP Moderate 等价性认证进行中。
- **竞争格局**：传统 FAI/质检软件 Net-Inspect、Discus/High QA、InspectionXpert(Ideagen)等；差异化在 AI 自动 ballooning + 专为 CMMC/ITAR 受管制供应链构建 + GovCloud 部署。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed | $2,000,000 | 2025-06-13 | [链接](https://app.fundz.net/fundings/groundcontrol-software-funding-round-379431) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| AdvancedPCB(Chandler, Arizona 工厂，航空航天/国防 PCB 制造商，2024-08 起试点，一月内清理 60+ FAIR) | 高 | [链接](https://www.gndctl.com/case-studies/advanced-pcb-as9102-software-case-study) |
| Summit Interconnect/US Circuits/Emerald Technologies/FFMP/Phenx Products 等官网 logo 墙客户 | 中 | [链接](https://www.gndctl.com/) |
| 目标 OEM：Lockheed、SpaceX、Anduril(YC 页陈述为目标客户，非已签约) | 低 | [链接](https://www.ycombinator.com/companies/groundcontrol) |

## 转型有术判断
1. **对制造业客户意味着什么**：GroundControl 是'合规文档自动化'而非'视觉缺陷检测'——切的是航空航天/国防制造中最痛的纸面质量流程(AS9102 首件检验报告数天工时)。启示：AI 落地最快见效的往往不是产线视觉，而是包裹产线的合规/文档/质量记录环节，这类高度结构化、强合规、强 ROI 的场景更容易被垂直 AI SaaS 一次性替代。（与本库 F4 Industries 同属 GD&T/FAI 簇，可对照。）
2. **国内对标厂商**：创新奇智(工业质检 AI)、阿丘科技 AIDI(工业视觉缺陷检测)、思谋科技 SMore(工业质检/视觉平台)、格创东智(制造质量数字化)、海克斯康/天准/思看(首件检验 FAI 与三坐标测量报告)
   > 国内创新奇智/阿丘/思谋/格创东智主攻机器视觉缺陷检测(看零件本身)，与 GroundControl 的图纸解析+检验报告自动化(做质量文档)路径不同、几乎不正面竞争。国内在 AS9102/PPAP 这类合规文档自动化、军工 ITAR 级合规托管上仍是空白——可迁移的差异化机会，但需绑定国内航空航天/军工质量标准(GJB、AS9100 中国分支)。
3. **可迁移的干法 / 应进场景词典的词条**：质检自动化、首件检验FAI/AS9102、GD&T与图纸ballooning、CMM三坐标数据对接、航空航天国防合规、供应商质量管理SQM、垂直行业SaaS、AI文档解析OCR
   > ①选一个合规密集、文档繁重、按件产出的垂直(军工/航空/医疗器械)；②用 AI 吃掉最脏最慢的手工环节(图纸 ballooning + 报告生成)做楔子；③按设施而非席位计费、绑定合规资质(等保/涉密/GovCloud 同构)构筑护城河；④从单点报告扩展到 APQP/PPAP/供应商质量全链。
4. **风险与存疑点**：①极窄垂直+强合规，TAM 天花板受航空航天供应商数量限制；②高度依赖 ITAR/CMMC/GovCloud 等美国国防合规壁垒，既是护城河也限制出海与在华复制；③仅 $2M 种子、8 人团队，面对 Ideagen 等成熟质量软件厂商需快速证明留存；④客户名单中 Lockheed/SpaceX/Anduril 为'目标'而非验证客户，需审慎。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| GroundControl — Y Combinator 公司页 (X25/Spring 2025) | https://www.ycombinator.com/companies/groundcontrol |
| GroundControl 官网 gndctl.com | https://www.gndctl.com/ |
| AdvancedPCB 案例研究 | https://www.gndctl.com/case-studies/advanced-pcb-as9102-software-case-study |
| GroundControl Software $2M 种子轮 (2025-06-13) — Fundz | https://app.fundz.net/fundings/groundcontrol-software-funding-round-379431 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
