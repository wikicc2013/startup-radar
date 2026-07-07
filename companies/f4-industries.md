# F4 Industries

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B004
- **一句话定位**：GD&T analysis software for engineering drawings（面向工程图纸的形位公差(GD&T)分析软件）
- **官网/锚定**：https://f4.dev/
- **深研状态**：researched

## 公司画像
- **团队**：两位联创：CEO Paul Shin（前 Tesla Drive Unit 机械设计工程师，负责 CyberCab/SEMI 量产件与驱动单元热交换器项目，年产 300 万+；早期做液体双组元火箭）；CTO Aidan Cantu（前 SpaceX 航电测试工程师，为 Raptor 3 发动机测试设计硬件；电气工程本硕，辅修 CS 与数学）。团队约 5 人。团队履历含 SpaceX、Tesla、General Atomics、Aerojet Rocketdyne、NASA（为个人从业经历，非客户）。
- **成立/批次**：2025 年（YC S25）
- **地点**：美国加州旧金山（San Francisco, CA）
- **产品**：面向工程图纸的 GD&T（形位公差）分析平台。导入 2D 工程图纸与 STEP 文件，自动识别与解读特征控制框(FCF)、基准(datum)与尺寸；按 ASME Y14.5 做 GD&T 语法与规则校验；可视化基准参考框架(DRF)与公差带；直接从图纸即时计算公差叠加(tolerance stack-up)；自动生成 AS9102（含 AS9102C）首件检验(FAIR/FAI)报告与图纸红线标注。强调完全本地/设备端处理、分析不使用 LLM（确定性算法），支持 ITAR/EAR 出口管制设计数据，支持 2FA，正申请 ITAR 注册并规划 SOC 2。
- **商业模式**：B2B SaaS，分层订阅：Lite/Pro（单用户自助，图纸评审与标注）→ Enterprise（团队版，含深度分析、导出、部署支持、出口管制/受控环境数据、单件公差叠加、定制 onboarding）。定价需联系销售，未公开。
- **竞争格局**：GD&T/公差分析与首件检验自动化赛道，可对标 Sigmetrix（GD&T Advisor / CETOL 6σ）、DFMPro、Werk24（图纸解析）、InspectionXpert/High QA（ballooning 与 AS9102 自动化）。F4 差异点：图纸→GD&T 语义理解+本地化+出口管制友好+一体化 FAIR 生成。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（YC S25 标准投资） | 未披露（第三方口径不一：Tracxn 记 $500K、Extruct 记 $1M；无一手来源/官方公告核实） | 2025 年 | [链接](https://tracxn.com/d/companies/f4industries/__IxONqmQbsk7nFw6jPYnbL4XVzSNgsub8ZPC7Ql0MW-8) |

## 早期客户信号
未披露（未检索到可采信的具名客户）

## 转型有术判断
1. **对制造业客户意味着什么**：F4 击中的是制造业『图纸质量→工艺可制造性→首件检验』这条链上长期靠老师傅经验、人工 ballooning、Excel 公差叠加的高摩擦环节。对国内离散制造（尤其航空航天、精密机械、汽车零部件）而言，GD&T 读图能力稀缺、FAI/PPAP 报告制作耗时，是明确的降本提效点。其『本地部署+不上云+出口管制友好』正好对应军工/涉密图纸不能外流的国内刚需。
2. **国内对标厂商**：杭州新迪数字（SView/CAD 轻量化与三维标注 MBD）、海克斯康/天准/思看中国区（首件检验 FAI 与三坐标测量报告自动化，含 ballooning、AS9102/FAIR）、武汉益模、山东山大华天(CrownCAD/SINOVATION)（国产 CAD/CAE 生态中 GD&T 与公差分析）、PTC/西门子/达索在华 MBD 与公差管理方案（Creo GD&T Advisor 由 Sigmetrix 提供）
   > 国内对标核心两处：一是 GD&T/公差工程本身（多由 PTC Creo 内置 GD&T Advisor=Sigmetrix、海克斯康 CETOL 覆盖，国产 CAD 此能力薄弱、是空白）；二是首件检验/质量报告自动化（High QA、InspectionXpert 在国内由海克斯康、天准、思看及本土质量软件商承接）。F4 把『读图语义化+公差叠加+FAIR 生成』打包，国内尚无一体化对标，多为分散工具。
3. **可迁移的干法 / 应进场景词典的词条**：GD&T形位公差、工程图纸智能解析、公差叠加分析(tolerance stackup)、首件检验FAI/AS9102/FAIR自动化、MBD/DRF可视化、航空航天/国防合规(ITAR/EAR)、制造前DFM合规校验、QA/质量工程提效
   > ①以『首件检验报告自动生成/自动 ballooning』为单点利刃切入质量部门（痛点最痛、ROI 最易量化）；②主打本地化/私有化部署，绑定军工与涉密图纸场景，规避数据出境合规风险；③强调确定性算法而非 LLM 猜测，契合制造业『可追溯、可审计、不能幻觉』诉求；④用 ASME Y14.5/AS9102 做信任锚，国内对应 GB/T 1182 等形位公差国标本地化。
4. **风险与存疑点**：①无任何具名外部客户或案例，产品极早期（2025 成立、约 5 人、种子轮），traction 未验证；②融资数字在第三方聚合器间不一致且无一手来源；③GD&T 读图与公差叠加正确性容错极低，一旦误判影响制造决策，工程信任建立慢；④赛道已有 Sigmetrix/海克斯康/High QA 等成熟玩家，且 CAD 原厂（PTC/西门子/达索）可内置能力挤压；⑤国内落地需对齐 GB/T 国标而非仅 ASME，军工客户采购周期长。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| F4 Industries 官网 | https://f4.dev/ |
| YC 公司页 — F4 Industries: The GD&T Analysis Platform for Engineering Drawings | https://www.ycombinator.com/companies/f4-industries |
| Extruct AI — F4 Industries Funding 汇总页（第三方，未核实） | https://www.extruct.ai/hub/f4-dev/ |
| Tracxn — F4 Industries 公司档案（第三方，融资 $500K/2025-07-01） | https://tracxn.com/d/companies/f4industries/__IxONqmQbsk7nFw6jPYnbL4XVzSNgsub8ZPC7Ql0MW-8 |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
