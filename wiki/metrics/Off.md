---
title: Off（Offensive Runs Above Average，綜合進攻價值）
type: metric
tags:
  - sabermetrics
  - hitting
  - baserunning
  - off
  - war
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2014-08-28-FanGraphs-Off]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Off（Offensive Runs Above Average，綜合進攻價值）

## 一句話定義
**Off** 將球員經球場與聯盟校正後的「打擊高於平均得分（Batting Runs）」與「跑壘高於平均得分（[[metrics/BsR|BsR]]）」相加，同時反映進攻品質與出賽量（PA）。

## 計算公式與基準
$$\text{Off} = \text{Batting Runs (Park \& League Adjusted wRAA)} + \text{BsR}$$

- **`0` 為聯盟平均**，約每 **`9–10` 分**等於 **1 勝**。在野手 [[metrics/WAR|WAR]] 中與 [[metrics/Def|Def]]、League、Replacement 共同組成 RAR。

| 評級 | Off |
| :--- | :---: |
| 頂尖（Excellent） | `45` |
| 優秀（Great） | `30` |
| 高於平均（Above Average） | `15` |
| 平均（Average） | `0` |
| 低於平均（Below Average） | `-5` |
| 欠佳（Poor） | `-15` |
| 極差（Awful） | `-25` |

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2014-08-28-FanGraphs-Off]]
