# Allus

- **批次来源**：B003 / YC Fall 2025 (F25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-07 ｜ **再现记录**：B003
- **一句话定位**：Vision foundation model for manufacturing（面向制造业的视觉基础模型）
- **官网/锚定**：https://www.allus.ai/
- **深研状态**：researched

## 公司画像
- **团队**：3 人创始团队，均与佐治亚理工（Georgia Tech）渊源深厚。Kai Cui（Chris Kai Cui，CEO）出身制造业世家、自幼在工厂长大，18 岁即管理 iPhone 后盖板生产；Shijie Wang（CTO）佐治亚理工 CS，曾任 NVIDIA Lab LLM 科学家；Jason An（Zhisen An，COO）佐治亚理工 CS 硕士。
- **成立/批次**：2025（YC F25；部分数据库记 2023，以官方/YC 为准）
- **地点**：美国佐治亚州亚特兰大（Atlanta, GA）
- **产品**：面向制造业的视觉基础模型，旗舰 AllusONE，号称 1B 参数通用 transformer 视觉大模型，基于 15 亿+工业/机器人/制造图文对训练。通过自然语言 prompt + 少量参考图数分钟内完成质检/流程监控定制部署。官方 benchmark：缺陷检测 99.9%、计数 98.6%、OCR 92.6%、VQA 91.9%。对标 DINOv2/v3、SigLIP2、PE 等视觉骨干。
- **商业模式**：SaaS 订阅（按站点/月）。Trial $0；Launch $1,000/site/month；Custom 定制。资质 ISO 27001、SOC 2 Type II。卖点：把传统 3–6 个月、百万美元级机器视觉质检压缩到 10–30 分钟部署，宣称成本降约 93%。
- **竞争格局**：国际对标 Landing AI（吴恩达）、Instrumental、Elementary、Averroes；底层与 DINOv2/v3、Meta PE、SigLIP2 竞争。差异在自建工业专用大规模数据集 + prompt/少样本快速部署。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| Seed（官方称超额认购） | 未披露 | 2025-11 | [链接](https://www.007venturepartners.com/signals/allus-ai) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| Foxconn 富士康 | 中 | [链接](https://www.allus.ai/) |
| Panasonic 松下 | 中 | [链接](https://www.allus.ai/) |
| TDK | 中 | [链接](https://www.allus.ai/) |
| Tencent 腾讯（同时为其种子轮投资方） | 中 | [链接](https://www.allus.ai/) |
| Hikvision 海康威视 | 中 | [链接](https://www.allus.ai/) |
| Mondelēz 亿滋 | 中 | [链接](https://www.allus.ai/) |
| Apple / Tesla / KUKA / Corning（仅 VC 信号页点名，官网未见） | 低 | [链接](https://www.007venturepartners.com/signals/allus-ai) |

## 转型有术判断
1. **对制造业客户意味着什么**：视觉基础模型 + 自建工业数据集，做成 prompt+参考图分钟级上线的质检 agent，直打传统机器视觉『交付慢、贵、依赖算法工程师逐个调模型』的痛点。价值主张：从『3–6 个月、百万美元项目』变成『30 分钟、$1000/月/站点』，把质检从项目制变成 SaaS 订阅制。
2. **国内对标厂商**：创新奇智 AInno、阿丘科技 AQROSE、格创东智（TCL 系）、腾讯优图工业质检、华为云盘古工业大模型、百度飞桨工业视觉、商汤 SenseCore 工业视觉
   > 国内已有成规模对标军团（创新奇智/阿丘/格创东智/腾讯优图/华为盘古/百度飞桨）。Allus 差异不在场景而在『基础模型+少样本快速部署』的产品形态与 GTM。值得注意：腾讯既是其官网 logo 墙客户、又是种子轮投资方，且腾讯自有优图工业质检，交叉关系待观察。
3. **可迁移的干法 / 应进场景词典的词条**：工业质检、缺陷检测、视觉基础模型、少样本/prompt 部署、半导体/电子、食品饮料、机器人视觉、过程监控 OCR/计数
   > ①『基础模型+少样本 prompt 部署』替代『一个场景训一个模型』；②一个通用大模型横扫多行业摊薄成本；③定价从项目制转 SaaS 订阅降低决策门槛；④创始人『工厂长大+NVIDIA LLM 科学家』的稀缺组合值得国内组队借鉴。
4. **风险与存疑点**：①核心数字（99.9% 检测、100x 精度/数据、5 家 Fortune 500 部署）多为官方自述、缺第三方验证；②官网 logo 墙未见 case study 佐证，可能是 POC/试用；③公司极早期（2025、3 人、种子金额未披露）；④与 Landing AI 及国内军团正面竞争，工业视觉『最后一公里』现场部署壁垒极高，分钟级部署的实际泛化存疑。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| Allus AI 官网 | https://www.allus.ai/ |
| Allus AI - Y Combinator 官方公司页（F25） | https://www.ycombinator.com/companies/allus-ai |
| 007 Venture Partners - Allus AI 投资信号页 | https://www.007venturepartners.com/signals/allus-ai |
| 007 VP LinkedIn - Allus 种子轮公告 | https://www.linkedin.com/posts/007-venture-partners_allus-ai-building-the-universal-vision-intelligence-activity-7411415939281256448-JEwm |
| Crunchbase - Allus AI | https://www.crunchbase.com/organization/allus-ai |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
