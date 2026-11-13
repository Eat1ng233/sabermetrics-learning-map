---
title: wRAA（Weighted Runs Above Average）
type: metric
tags:
  - sabermetrics
  - hitting
  - wraa
  - value
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-16-FanGraphs-wRAA]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# wRAA（Weighted Runs Above Average，加權高於平均得分）

## 一句話定義
**wRAA** 將打者的 [[metrics/wOBA|wOBA]] 結合出賽打席數（PA），換算成該打者相較於聯盟平均打者為球隊**多創造（或損失）的總得分數**。

## 計算公式與判讀
$$\text{wRAA} = \frac{\text{wOBA} - \text{lgwOBA}}{\text{wOBA Scale}} \times PA$$

- **`0` 永遠為聯盟平均**，為累積型數據（Counting Stat），約每 **`10` 分**等於 **`+1` 勝**。
- **經球場與聯盟校正後**，即為 [[metrics/Off|Off]] 與 [[metrics/WAR|WAR]] 中的「Batting Runs」。

| 評級 | wRAA |
| :--- | :---: |
| 頂尖（Excellent） | `40` |
| 優秀（Great） | `20` |
| 高於平均（Above Average） | `10` |
| 平均（Average） | `0` |
| 低於平均（Below Average） | `-5` |
| 欠佳（Poor） | `-10` |
| 極差（Awful） | `-20` |

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-16-FanGraphs-wRAA]]
