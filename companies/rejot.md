# ReJot

- **批次来源**：B006 / YC Winter 2025 (W25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B006
- **一句话定位**：Open-source builder of software tools（开源的软件工具搭建器）
- **官网/锚定**：https://www.ycombinator.com/companies/rejot
- **深研状态**：researched（WebSearch 一手核实：YC Winter 2025（W25）。仓库一句话『开源的软件工具搭建器』偏泛——实为『数据库到数据库同步引擎』(读 WAL/changelog 发布版本化 public schema,消费方定义 consumer schema 复制数据,SQL 变换+代码化契约)。开源,可混合/自托管保数据在内网。分诊：留 aiinfra（数据库同步引擎/数据基础设施）。）

## 公司画像
- **团队**：（W25,创始团队信息以 YC 为准）。
- **成立/批次**：2025
- **地点**：美国
- **产品**：数据库到数据库同步引擎：让工程团队异步共享内部数据、无需新增同步 API——读数据库 changelog/WAL 发布版本化的『public』schema,消费团队定义自己的『consumer』schema 把数据复制进自己的库,SQL 变换与契约在代码/文档中拥有;部署可混合或自托管,敏感数据留在公司网内。(注:仓库原一句话较泛,以 DB 同步引擎为准)
- **商业模式**：开源数据库同步引擎(+托管/自托管),定价未披露。
- **竞争格局**：数据同步/CDC 赛道:Debezium、Fivetran、各类 CDC。差异点在于版本化 public/consumer schema+SQL 变换契约代码化+异步免新增 API+自托管。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| YC W25（未单列） | 未披露 | 2025 | [链接](https://www.ycombinator.com/companies/rejot) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业系统集成而言,ReJot 代表『数据库间异步同步(免新增 API+自托管)』。制造企业 ERP/MES/WMS/质检等系统各自有库,团队间共享数据常靠新增同步 API、耦合重。ReJot 读 WAL 发布版本化 schema、消费方自定义复制,异步解耦、自托管保数据在内网。启示:制造企业系统集成可迁移『数据库同步引擎(读 WAL+版本化 schema+异步解耦+自托管)』把 ERP/MES/WMS 间的数据共享从紧耦合 API 改为异步版本化同步,降低系统间耦合、数据不出内网。
2. **国内对标厂商**：各类 CDC/数据同步、Debezium/DataX、Fivetran 类
   > 国内数据同步有 DataX、Debezium。ReJot 差异在于版本化 public/consumer schema+SQL 变换契约代码化+异步免新增 API+自托管。对国内制造企业系统集成可对标。
3. **可迁移的干法 / 应进场景词典的词条**：数据库同步、CDC/WAL、版本化schema、异步解耦、自托管、AI基础设施
   > 可迁移干法:系统集成用『数据库同步引擎(读 WAL+版本化 schema+异步解耦+自托管)』把 ERP/MES/WMS 数据共享从紧耦合改异步同步。对制造企业系统集成适用。
4. **风险与存疑点**：①仓库一句话偏泛(已修正标注);②CDC 竞争(Debezium);③早期;④开源商业化。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| ReJot（数据库同步引擎）| Y Combinator（W25） | https://www.ycombinator.com/companies/rejot |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
