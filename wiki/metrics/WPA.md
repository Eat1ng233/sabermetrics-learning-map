---
title: WPA（Win Probability Added，勝利機率貢獻值）
type: metric
tags:
  - sabermetrics
  - wpa
  - win-probability
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-16-FanGraphs-WPA]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# WPA（Win Probability Added，勝利機率貢獻值）

## 一句話定義
**WPA** 追蹤每次打席前後[[concepts/Win-Expectancy|勝率預期（WE）]]的變化量，衡量球員的表現對球隊贏球機率造成的實際累積影響。

## 計算特性與基準
- **投打對稱與零和**：打者獲得 `+0.30`，投手即記 `-0.30`；每場比賽結束時，贏球方全隊總 WPA 恆為 `+0.5`、輸球方為 `-0.5`。
- **聯盟平均為 `0`**：`+1.0 WPA` 等同於「高於聯盟平均 1 勝」（非替補水準）。
- **常用分項**：`+WPA`（正面事件總和）、`-WPA`（負面事件總和）、[[metrics/WPA-LI|WPA/LI]]（情境中立化）、[[metrics/Clutch|Clutch]]。

| 評級 | WPA |
| :--- | :---: |
| 頂尖（Excellent） | `+6.0` |
| 優秀（Great） | `+3.0` |
| 高於平均（Above Average） | `+2.0` |
| 平均（Average） | `+1.0` |
| 低於平均（Below Average） | `0.0` |
| 欠佳（Poor） | `-1.0` |
| 極差（Awful） | `-3.0` |

## 限制
- **說故事而非預測**：WPA 是累積且高度依賴關鍵打席機會的指標，不具預測未來能力；投手需承擔所有守備結果，野手僅計算進攻端。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-16-FanGraphs-WPA]]
