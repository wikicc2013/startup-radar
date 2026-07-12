# smol machines

- **批次来源**：B001 / YC Spring 2026 (X26) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B001
- **一句话定位**：Portable, self-contained virtual machines to ship software faster（可移植、自包含的虚拟机，让软件交付更快）
- **官网/锚定**：https://www.ycombinator.com/companies/smol-machines
- **深研状态**：researched（WebSearch 一手核实：YC Spring 2026（P26），一位创始人前在 AWS 做容器与 Firecracker(ECS/Fargate ~4 年)。开源 SmolVM 1100+ GitHub 星,OpenAI/Google/Vercel 工程师及 homebrew/browser-use 等在用。分诊：留 aiinfra（可移植自包含虚拟机/软件交付基础设施）。）

## 公司画像
- **团队**：创始团队(一位前 AWS 容器/Firecracker)。
- **成立/批次**：2026
- **地点**：美国
- **产品**：可移植、自包含的虚拟机,让软件交付更快：像 Electron 随 Web 应用打包整个浏览器一样,让开发者随任意软件打包一个轻量虚拟机——'把机器一起发了'解决『在我机器上能跑』;本地管理运行自定义 Linux VM,亚秒冷启动、跨平台(macOS/Linux/Windows)、弹性内存;把有状态 VM 打进单文件(.smolmachine)可在任意平台重建;结合 VM 的隔离与容器的速度灵活。
- **商业模式**：开源 SmolVM(+商业化),定价未披露。
- **竞争格局**：VM/容器/沙箱赛道:Docker、Firecracker、各类微 VM。差异点在于亚秒冷启+自包含单文件+跨平台可移植。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC P26（未单列） | 未披露 | 2026 | [链接](https://www.ycombinator.com/companies/smol-machines) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| OpenAI/Google/Vercel 工程师、homebrew/browser-use 等 | 中 | [链接](https://www.ycombinator.com/companies/smol-machines) |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业数字化研发/交付而言,smol machines 代表『把机器一起发的可移植自包含 VM』。制造企业的工业软件/边缘应用交付常遇环境不一致('在我机器上能跑')。smol machines 把软件+机器打包成单文件、亚秒启动、跨平台。启示:制造企业的工业软件/边缘应用/Agent 沙箱可迁移『可移植自包含 VM(把环境一起打包+亚秒启动)』保交付环境一致、快速隔离运行,尤其现场部署/边缘场景。
2. **国内对标厂商**：Docker/容器、各类微 VM、环境打包工具
   > 国内多用 Docker 容器。smol machines 差异在于亚秒冷启+自包含单文件+跨平台可移植(隔离强于容器)。对国内制造企业工业软件/边缘交付可迁移。
3. **可迁移的干法 / 应进场景词典的词条**：可移植VM、自包含、亚秒冷启、软件交付、跨平台、AI基础设施
   > 可迁移干法:工业软件/边缘应用/Agent 沙箱用『可移植自包含 VM(打包环境+亚秒启动)』保交付一致、快速隔离运行。对制造企业现场/边缘部署适用。
4. **风险与存疑点**：①Docker/Firecracker 生态强;②开源商业化;③早期;④企业采用。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| smol machines: Portable, self-contained VMs | Y Combinator（P26） | https://www.ycombinator.com/companies/smol-machines |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
