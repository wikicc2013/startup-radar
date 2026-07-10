# RamAIn

- **批次来源**：B002 / YC Winter 2026 (W26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B002
- **一句话定位**：Super fast computer-use agents to build AI employees（用超快电脑操作智能体打造 AI 员工）
- **官网/锚定**：https://www.ycombinator.com/companies/ramain
- **深研状态**：researched

## 公司画像
- **团队**：联合创始人 Shourya Vir Jain（CEO，IIT 德里电子工程，前麦肯锡顾问）与 Vansh Ramani（CTO，IIT 德里计算机，CMU MLD 与哥本哈根大学 AI 研究经历，论文见于 ICLR 2025 / ACS，曾构建 PANORAMA 并并入 Meta FAISS）；两人 IIT 德里相识后退学创业。YC 页显示团队规模 4 人。
- **成立/批次**：2025
- **地点**：美国旧金山（San Francisco）
- **产品**：自然语言驱动的 computer-use 智能体平台，口号「if you can see it, RamAIn can do it」。以模拟鼠标/键盘的方式在遗留系统、桌面应用和网页门户上执行重复性 UI 任务；核心差异化在于对目标界面预先学习 UI-policy 与界面结构（而非每步都跑 screenshot→vision 慢循环），号称决策快 10 倍且更可靠；具备自愈（处理 UI 变更与弹窗）、人在环实时接管、UI 自动化 + API 混合覆盖、全量决策审计轨迹。
- **商业模式**：面向企业的 B2B，定位为「AI 员工」——按席位或用量计费（per-seat / usage-based）。早期采用者提供实施 30% 折扣 + 若无法自动化其工作流则 100% 退款保证。（计费口径为公开描述的方向，具体价目未披露。）
- **竞争格局**：直接/相邻对手包括 Anthropic Computer Use、OpenAI Operator、MultiOn、Browserbase、基于 Playwright 的 agent，以及传统 RPA 厂商 UiPath、Automation Anywhere。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC Winter 2026 batch（标准孵化投资） | 未披露具体金额（YC 标准 deal 通常为 $125K/7% + $375K SAFE） | 2026 | [链接](https://www.ycombinator.com/companies/ramain) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未具名设计伙伴 A — 保险承保自动化（60+ 字段、5+ 页表单填报） | 中 | [链接](https://www.linkedin.com/posts/ramanivansh_meet-ramain-yc-w26-super-fast-activity-7418922008383610880-GZfW) |
| 未具名设计伙伴 B — 遗留 dashboard 到供应商门户的数据管道 | 中 | [链接](https://www.linkedin.com/posts/ramanivansh_meet-ramain-yc-w26-super-fast-activity-7418922008383610880-GZfW) |
| 未具名设计伙伴 C — 多站点视觉化价格抓取 | 中 | [链接](https://www.linkedin.com/posts/ramanivansh_meet-ramain-yc-w26-super-fast-activity-7418922008383610880-GZfW) |

## 转型有术判断
1. **对制造业客户意味着什么**：制造企业普遍卡在「有系统但无 API」的遗留资产上——老旧 MES/ERP、供应商门户、报关/物流/银企对账界面，大量白领时间耗在跨系统搬数据、供应商入驻、订单与对账录入。RamAIn 这类 computer-use 智能体的价值点正是不依赖系统改造、直接以「看得见就能做」的方式接管这些界面操作，把采购、财务共享、外贸单证等岗位的重复 UI 工作交给 AI 员工，人只在异常与决策点介入。
2. **国内对标厂商**：实在智能（TARS / Chat-RPA，视觉+大模型的屏幕操作智能体）、字节跳动 UI-TARS（开源 GUI/computer-use 操作模型）、智谱 AutoGLM（自主 GUI 操作智能体）、影刀 RPA（企业级流程自动化，UI 模拟操作）、来也科技 UiBot / 数字员工、澜码科技（企业 Agent 平台）
   > 国内对标已从纯 RPA（影刀、来也 UiBot）演进到「大模型 + 视觉 GUI 操作」一代：实在智能 TARS、字节 UI-TARS、智谱 AutoGLM 走的正是与 RamAIn 相同的技术路线；差别在 RamAIn 强调对特定界面「预训练 UI-policy」以换取 10x 速度与可靠性，这与国内厂商仍以通用视觉循环为主形成路线分野，值得关注其可靠性/速度是否真能拉开身位。
3. **可迁移的干法 / 应进场景词典的词条**：computer-use 智能体、AI 员工/数字员工、遗留系统 UI 自动化、无 API 门户自动化、采购 ERP + 供应商门户、保险承保/理赔表单填报、医疗 EHR / RCM（收入周期管理）、数据录入与对账、人在环实时接管
   > 1) 选「高频×多字段×无 API」的门户型工作流切入（保险承保、供应商入驻、RCM 对账），单点跑通再横向复制；2) 用「先给设计伙伴折扣 + 无法自动化即全额退款」降低企业尝试门槛，这套无风险试点话术对制造业保守 IT 决策尤其适用；3) 强调人在环与全量审计轨迹以过合规关；4) 以「AI 员工」按席位计费对齐企业已有的人力预算科目，便于采购立项。
4. **风险与存疑点**：1) 赛道极度拥挤，上有 Anthropic/OpenAI 的原生 computer-use 模型下压、下有 UiPath 等成熟 RPA 与国内一众 GUI-agent 厂商夹击，差异化窗口窄；2) 「预训练 UI-policy 换 10x 速度」的可靠性优势尚无第三方验证，仅创始人口径；3) 团队 4 人、成立仅 2025 年、客户均为未具名设计伙伴，商业化验证极早期；4) computer-use 对企业内网系统的权限、数据安全与合规是采用硬门槛；5) 未见独立融资披露，除 YC 标准投资外的资金状况未知。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| RamAIn — Y Combinator 公司页 | https://www.ycombinator.com/companies/ramain |
| RamAIn — The YC Tier List (W26) | https://yctierlist.com/w26/ramain/ |
| Vansh Ramani LinkedIn 发布：Meet RamAIn (YC W26) | https://www.linkedin.com/posts/ramanivansh_meet-ramain-yc-w26-super-fast-activity-7418922008383610880-GZfW |
| Founding AI/ML Research Engineer at RamAIn 招聘页 | https://www.ycombinator.com/companies/ramain/jobs/jezgwo5-founding-ai-ml-research-engineer |
| YC W26 Batch Overview (startground) | https://startground.com/yc-w26-startups/ |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
