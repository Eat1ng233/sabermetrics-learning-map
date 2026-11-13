---
title: LD%（Line Drive Percentage，平飛球比例）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - batted-ball
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-17-FanGraphs-Batted-Ball-Types]]"
  - "[[sources/2026-11-13-MLB-Statcast-Launch-Angle]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# LD%（Line Drive Percentage，平飛球比例）

## 一句話定義
**LD%** 衡量所有場內擊球（BIP）中，平飛球（Line Drives）所佔的比例（由 BIS 自 2002 年起追蹤）。

## 計算與基準
$$\text{LD\%} = \frac{LD}{BIP}$$

- **聯盟平均約 `21%`**。
- **產值特性（2014 參考）**：平飛球是進攻效率最高的軌跡，平均 `AVG .685`、`ISO .190`、`wOBA .684`，每個出局約產出 `1.26` 分，也是支撐高 [[metrics/BABIP|BABIP]] 的核心動力。
- **穩定性警告**：相較於 `GB%` 與 `FB%`，**`LD%` 約需一年半以上的樣本才穩定**，短期六週內的飆高不應過度解讀。

## Statcast 對應指標
> [!warning] 定義差異：BIS 平飛球 vs. Statcast 仰角分類
> Statcast 以仰角 10°–25° 定義平飛球（[[metrics/Launch-Angle|Launch Angle]]，來源：[[sources/2026-11-13-MLB-Statcast-Launch-Angle]]），與本頁 BIS 軌跡分類不同，比例不可直接互比。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-17-FanGraphs-Batted-Ball-Types]]
- [[sources/2026-11-13-MLB-Statcast-Launch-Angle]]
