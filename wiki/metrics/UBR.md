---
title: UBR（Ultimate Base Running，終極跑壘評分）
type: metric
tags:
  - sabermetrics
  - baserunning
  - ubr
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2012-03-22-FanGraphs-UBR]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# UBR（Ultimate Base Running，終極跑壘評分）

## 一句話定義
**UBR** 以線性權重與得分期望值變化，衡量球員在**非盜壘／盜壘失敗情境**下的跑壘得分貢獻（例如一壘安打直奔三壘、高飛犧牲打推進、閃避在壘上被觸殺；2015 年 3 月起亦納入暴投 WP 與捕逸 PB 進壘）。

## 計算邏輯與基準
- 比較「該次打擊後跑者實際推進結果的得分期望值變化」與「聯盟平均跑者在相同情境下的平均得分期望值變化」，整季加總。
- **`0` 為聯盟平均**（頂尖跑者單季最多約 `+8` 至 `+10` 分），資料追溯至 2002 年。

| 評級 | UBR |
| :--- | :---: |
| 頂尖（Excellent） | `+6` |
| 優秀（Great） | `+4` |
| 高於平均（Above Average） | `+1.5` |
| 平均（Average） | `0` |
| 低於平均（Below Average） | `-1.5` |
| 欠佳（Poor） | `-4` |
| 極差（Awful） | `-6` |

## 限制
- 單季高難度跑壘決策機會有限，需多季樣本才具技能預測力；盜壘與雙殺價值分別由 [[metrics/wSB|wSB]] 與 [[metrics/wGDP|wGDP]] 計算，三者共同組成 [[metrics/BsR|BsR]]。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2012-03-22-FanGraphs-UBR]]
