# Lilac

- **批次来源**：B004 / YC Summer 2025 (S25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B004
- **一句话定位**：OpenAI-compatible inference on idle GPUs（在闲置 GPU 上跑兼容 OpenAI 的推理）
- **官网/锚定**：https://www.ycombinator.com/companies/lilac
- **深研状态**：researched（WebSearch 一手核实：YC Summer 2025（S25），创始人 Ryan(前 AWS 云/网络工程)、Lucas(Harvey Mudd '23)。开源(getlilac/lilac),K8s 集成。分诊：留 aiinfra（在闲置 GPU 上跑兼容 OpenAI 的推理/闲置 GPU 变现网络）。）

## 公司画像
- **团队**：Ryan(前 AWS)、Lucas(Harvey Mudd '23)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：在闲置 GPU 上跑兼容 OpenAI 的推理 / 自动变现闲置 GPU：从云厂商与企业调用闲置 GPU,给初创/研究者更便宜的推理,同时让公司把闲置算力变现;全自动+K8s 集成,OpenAI SDK 指向 Lilac 即用、无合同无起量,在闲置 GPU 上跑容器(H100 $1/时、H200 $1.5/时)。
- **商业模式**：闲置 GPU 推理/批处理算力市场(spot GPU marketplace),按用付费。
- **竞争格局**：GPU 算力市场/推理赛道:Vast.ai、SF Compute、各类 spot GPU。差异点在于兼容 OpenAI+全自动 K8s+闲置 GPU 双边变现。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC S25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/lilac) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业 AI 算力而言,Lilac 代表『闲置 GPU 变现/低价推理市场(兼容 OpenAI)』。制造企业既可能有闲置 GPU(工作站/集群),也需低价推理。Lilac 把闲置 GPU 变现、给低价兼容 OpenAI 的推理。启示:制造企业可迁移两面价值:一是把自有闲置 GPU(设计/仿真工作站夜间空闲)接入变现;二是用闲置 GPU 市场获取低价推理算力跑质检/客服模型,兼容 OpenAI SDK 便于迁移。
2. **国内对标厂商**：各类 GPU 算力市场、共享算力平台、Vast.ai 类
   > 国内共享/闲置算力有若干平台。Lilac 差异在于兼容 OpenAI+全自动 K8s+闲置 GPU 双边变现。对国内制造企业闲置算力变现/低价推理可对标。
3. **可迁移的干法 / 应进场景词典的词条**：闲置GPU变现、兼容OpenAI推理、算力市场、低价推理、K8s自动、AI基础设施
   > 可迁移干法:自有闲置 GPU 接入变现,或用闲置算力市场获取低价兼容 OpenAI 推理跑质检/客服模型。对制造企业算力两面适用。
4. **风险与存疑点**：①算力市场竞争;②闲置 GPU 稳定性/SLA;③早期;④供需两侧规模。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Lilac: We automatically monetize idle GPUs | Y Combinator（S25） | https://www.ycombinator.com/companies/lilac |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
