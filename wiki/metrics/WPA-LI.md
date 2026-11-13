---
title: WPA/LI（Context Neutral Wins，情境中立勝場）
type: metric
tags:
  - sabermetrics
  - wpa-li
  - win-probability
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-17-FanGraphs-WPA-LI]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# WPA/LI（Context Neutral Wins，情境中立勝場）

## 一句話定義
**WPA/LI** 將每個打席的 [[metrics/WPA|WPA]] 除以該打席的 [[metrics/LI|LI]] 後整季加總，消除上場時機緊張度的差異，藉此在公平基準上比較球員的勝率貢獻天賦。

## 計算注意與判讀區間
- **計算方式**：必須在**每個個別打席**先算 $\text{WPA} / \text{LI}$ 再加總，而非直接將整季總 WPA 除以整季平均 pLI（兩者之差即為 [[metrics/Clutch|Clutch]]）。
- **基準與區間**（`0.0` 為**聯盟平均**，非替補水準）：

| 評級 | WPA/LI |
| :--- | :---: |
| 頂尖（Excellent） | `5.0` |
| 優秀（Great） | `3.0` |
| 高於平均（Above Average） | `1.5` |
| 平均（Average） | `0.0` |
| 低於平均（Below Average） | `-0.5` |
| 欠佳（Poor） | `-1.3` |
| 極差（Awful） | `-2.0` |

## 與 WAR 的差異及限制
- 雖然尺度與 [[metrics/WAR|WAR]] 看似相近，但 `WPA/LI` 僅計算進攻（或投球）的勝率貢獻，不含守備、守位調整與替補水準；且其未來預測力仍不如 [[metrics/wOBA|wOBA]] 或 `WAR`。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-17-FanGraphs-WPA-LI]]
