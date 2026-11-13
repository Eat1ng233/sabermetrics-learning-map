---
title: ERA-（Park & League Adjusted ERA）
type: metric
tags:
  - sabermetrics
  - pitching
  - era
  - park-adjusted
sources:
  - "[[sources/2011-04-08-FanGraphs-ERA-FIP-xFIP-Minus]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# ERA-（Park & League Adjusted ERA）

## 一句話定義
**ERA-** 是經過**主場球場效應（Park Factor）與所屬聯盟平均（AL/NL）**校正後的 [[metrics/ERA|ERA]]，以 **`100` 為聯盟平均**，數值越低代表表現越佳。

## 計算公式與判讀
$$\text{ERA-} = 100 \times \frac{\text{ERA} + \left(\text{ERA} - \text{ERA} \times \frac{PF}{100}\right)}{\text{AL or NL ERA}}$$

- 每低於 100 一點，代表優於聯盟平均 **1%**（例如 `80` 代表優於聯盟平均 20%，`110` 代表差於平均 10%）。
- 參考區間（先發）：頂尖 `70`、優秀 `80`、高於平均 `90`、平均 `100`、低於平均 `110`、欠佳 `115`、極差 `125`。

## 限制
- 雖然解決了跨球場與跨年代比較問題，但底層仍繼承 [[metrics/ERA|ERA]] 無法控制守備與序列運氣的缺陷，且 Park Factor 本身是估計值（誤差通常在 5% 以內）。

## 參考來源
- [[sources/2011-04-08-FanGraphs-ERA-FIP-xFIP-Minus]]
