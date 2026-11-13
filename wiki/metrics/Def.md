---
title: Def（Defensive Runs Above Average，綜合守備價值）
type: metric
tags:
  - sabermetrics
  - defense
  - def
  - war
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2014-09-04-FanGraphs-Def]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Def（Defensive Runs Above Average，綜合守備價值）

## 一句話定義
**Def** 將野手的「同守位守備表現（Fielding Runs）」與「守備位置難度調整（Positional Adjustment）」相加，使不同守備位置的球員能放在同一基準線上直接比較總守備貢獻。

## 計算公式與架構
$$\text{Def} = \text{Fielding Runs Above Average} + \text{Positional Adjustment}$$

- **Fielding Runs 資料來源**：FanGraphs 於 2003 年起使用 [[metrics/UZR|UZR]]，2002 年以前使用 [[metrics/TZ|TZ]]；捕手則採用 `rSB` 與擋球指標 `RPP`。
- **聯盟平均為 `0`**：已針對球場與得分環境校正，約每 **`9–10` 分**等於 **1 勝**。
- **與 WAR 的關係**：在野手 [[metrics/WAR|WAR]] 中與 `Off`、`League`、`Replacement` 共同組成 `RAR`。

## 基準值與判讀區間

| 守備表現評級 | Def |
| :--- | :---: |
| 頂尖（Excellent） | `+20` |
| 優秀（Great） | `+12` |
| 高於平均（Above Average） | `+4` |
| 平均（Average） | `0` |
| 低於平均（Below Average） | `-4` |
| 欠佳（Poor） | `-12` |
| 極差（Awful） | `-20` |

## 限制
- 繼承底層守備指標（如 UZR）在小樣本（如 20–30 場）下的高波動性，建議以整季或多年數據判讀。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2014-09-04-FanGraphs-Def]]
