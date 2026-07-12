# PgDog

- **批次来源**：B005 / YC Spring 2025 (X25) Launch
- **入库日期**：2026-07-07 ｜ **深研日期**：2026-07-12 ｜ **再现记录**：B005
- **一句话定位**：Open-source PostgreSQL sharding proxy（开源的 PostgreSQL 分片代理）
- **官网/锚定**：https://www.ycombinator.com/companies/pgdog
- **深研状态**：researched（WebSearch 一手核实：YC Spring 2025（X25），创始人 Lev Kokotov(二次技术创业,前作 PostgresML,源于 2020 Instacart 分片 Postgres 经验)。已融 $5.5M(Basis Set、YC、Pioneer Fund)。全开源(Rust)。分诊：留 aiinfra（开源 PostgreSQL 分片代理/扩展引擎）。）

## 公司画像
- **团队**：Lev Kokotov(前 PostgresML)。
- **成立/批次**：2025
- **地点**：美国
- **产品**：开源的 PostgreSQL 分片代理 / Postgres 扩展引擎：理解 SQL、自动在多库间分发查询的开源连接池+负载均衡+分片代理,为 AWS RDS 等托管数据库打造,无需改应用代码或 schema;除分片外还是负载均衡与连接池,可替代 PgBouncer、RDS Proxy 等;Rust 编写,快而安全,全开源。
- **商业模式**：开源 PostgreSQL 扩展引擎($5.5M 融资),商业化以托管/企业版为主。
- **竞争格局**：Postgres 扩展/分片赛道:Citus、PgBouncer、RDS Proxy。差异点在于无需扩展/改代码即分片+池化+负载均衡三合一+Rust+全开源。

## 融资
| 轮次 | 金额 | 时间 | 来源 |
|---|---|---|---|
| 种子 | $5.5M | 2025 | [链接](https://pgdog.dev/blog/our-funding-announcement) |

## 早期客户信号
| 客户 | 置信度 | 来源 |
|---|---|---|
| 未见公开具名客户（极早期，官网/媒体暂无可采信客户信号） | — | — |

## 转型有术判断
1. **对制造业客户意味着什么**：对制造企业数据平台而言,PgDog 代表『无侵入的 Postgres 水平扩展(分片+池化+负载均衡)』。制造企业用 Postgres 承载 MES/订单/IoT 数据、量大后单库扛不住,分库改造成本高。PgDog 无需改代码/schema 即分片扩展。启示:制造企业若用 PostgreSQL 且数据量增长,可迁移『开源 Postgres 扩展引擎(无侵入分片+池化+负载均衡)』把单库平滑水平扩展,免应用改造,支撑生产/订单/IoT 数据规模化。
2. **国内对标厂商**：各类数据库中间件/分库分表、ShardingSphere、PolarDB/TDSQL
   > 国内分库分表有 ShardingSphere,云有 PolarDB/TDSQL。PgDog 差异在于无需扩展/改代码即分片+池化+负载均衡三合一+全开源。对国内制造企业 Postgres 扩展可对标。
3. **可迁移的干法 / 应进场景词典的词条**：Postgres分片、无侵入扩展、连接池负载均衡、开源Rust、数据平台、AI基础设施
   > 可迁移干法:用 Postgres 且数据增长时用『开源 Postgres 扩展引擎(无侵入分片+池化+负载均衡)』平滑水平扩展免应用改造。对制造企业数据平台适用。
4. **风险与存疑点**：①数据库中间件竞争(ShardingSphere 等);②开源商业化;③分片正确性关键;④早期。

## 信息来源溯源表
| 标题 | URL |
|---|---|
| PgDog: Scaling engine for PostgreSQL | Y Combinator（X25） | https://www.ycombinator.com/companies/pgdog |
| PgDog 融资 $5.5M(Basis Set、YC、Pioneer Fund) | https://pgdog.dev/blog/our-funding-announcement |

---
> 本档案由本地 /research 深研生成，直通模式 auto。数字与具名事实一律带来源；无来源者标"未披露"，未编造。
