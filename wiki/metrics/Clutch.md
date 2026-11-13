---
title: Clutch（關鍵時刻表現分數）
type: metric
tags:
  - sabermetrics
  - clutch
  - win-probability
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-17-FanGraphs-Clutch]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Clutch（關鍵時刻表現分數）

## 一句話定義
**Clutch** 衡量球員在高關鍵時刻（High Leverage）的表現，相較於他在情境中立環境下以自身實力應有的表現究竟更好或更差。

## 計算公式
$$\text{Clutch} = \frac{\text{WPA}}{\text{pLI}} - \text{WPA/LI}$$

- **自我比較機制**：Clutch 比較的是「球員自己與自己」，而非與聯盟比較。一位整季 `.300` 打擊率的打者在高關鍵時刻也打 `.300`，其 Clutch 為 `0`。

## 基準值與判讀區間
多數球員落在 **`-1.0` 至 `+1.0`** 之間，`0.0` 為中立（正值代表關鍵時刻表現超常，負值代表低於平時水準）：

| 評級 | Clutch |
| :--- | :---: |
| 頂尖（Excellent） | `2.0` |
| 優秀（Great） | `1.0` |
| 高於平均（Above Average） | `0.5` |
| 平均（Average） | `0.0` |
| 低於平均（Below Average） | `-0.5` |
| 欠佳（Poor） | `-1.0` |
| 極差（Awful） | `-2.0` |

## 限制
- **毫無未來預測力**：Clutch 能精確描述過去發生了什麼，但極少球員能跨季穩定維持高 Clutch，極端數值多半源自小樣本運氣波動。

## 相關指標
- [[metrics/WPA|WPA]]、[[metrics/LI|LI（pLI）]]、[[metrics/WPA-LI|WPA/LI]]

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-17-FanGraphs-Clutch]]
