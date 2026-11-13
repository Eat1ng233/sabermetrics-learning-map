---
title: Hard-hit Rate（強勁擊球率，Statcast 版）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Hard-Hit-Rate]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Hard-hit Rate（強勁擊球率，Statcast 版）

## 一句話定義
**Hard-hit Rate** 是擊球初速達到 **95 mph 以上**的擊球（Hard-hit ball）佔全部 [[metrics/BBE|BBE]] 的比例。

## 計算方式與核心邏輯
$$\text{Hard-hit Rate} = \frac{\text{EV} \ge 95\text{ mph 的擊球}}{\text{BBE}}$$
- 為何是 95 mph？因為那是 [[metrics/Exit-Velocity|EV]] 開始「影響結果」的臨界點；40 mph 與 70 mph 雖對平均 EV 影響不同，就結果而言都只是弱擊球。

## 基準值與判讀區間（2018）
| | AVG | SLG | wOBA |
|---|---|---|---|
| 強勁擊球（95+ mph） | .524 | 1.047 | .653 |
| 弱擊球（<95 mph） | .219 | .259 | .206 |

## 演進脈絡與相關指標
- 常與 [[metrics/Sweet-Spot|Sweet Spot%]]（仰角）並用；兩者結合即 [[metrics/Barrel|Barrel]]。
- 揮棒端的對應物是 [[metrics/Fast-Swing-Rate|Fast-swing Rate]]（75 mph 揮棒速度門檻）。

> [!warning] 定義差異：Statcast Hard-hit Rate vs. FanGraphs Hard%
> - **Statcast Hard-hit Rate**：純物理門檻，EV ≥ 95 mph（本頁，來源：[[sources/2026-11-13-MLB-Statcast-Hard-Hit-Rate]]）。
> - **FanGraphs [[metrics/Hard%|Hard%]]**：由 BIS（Sports Info Solutions）依滯空時間、落點與軌跡演算法分類為 Soft/Medium/Hard，聯盟平均約 30%（來源：[[sources/2015-05-10-FanGraphs-Quality-of-Contact]]）。
> 兩者名稱相近但**定義與數值不可直接互換**。

## 限制與常見誤區
- 二元門檻：94.9 mph 與 60 mph 視為同類；不含仰角（95+ mph 的滾地球仍可能是出局）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Hard-Hit-Rate]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
