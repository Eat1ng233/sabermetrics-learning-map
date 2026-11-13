---
title: LOB%（Left on Base Percentage，殘壘率）
type: metric
tags:
  - sabermetrics
  - pitching
  - lob
sources:
  - "[[sources/2010-02-17-FanGraphs-LOB-Percent]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# LOB%（Left on Base Percentage，殘壘率）

## 一句話定義
**LOB%** 衡量投手在一個球季中，成功將自己製造的上壘者「留在壘包上（未讓其回來得分）」的比例。

## 計算公式（非 Box Score 團隊殘壘）
$$\text{LOB\%} = \frac{H + BB + HBP - R}{H + BB + HBP - 1.4 \times HR}$$

## 基準值與均值回歸特性
- **聯盟平均約 `70–72%`**（頂尖 `80%`、優秀 `78%`、高於平均 `75%`、平均 `72%`、低於平均 `70%`、欠佳 `65%`、極差 `60%`）。
- **運氣檢驗指標**：顯著偏離聯盟平均的 LOB% 未來極容易回歸均值（例如 `60%` LOB% 的投手往往只是運氣差，未來 ERA 有望下修）；**例外**：高三振率投手因能自行三振解圍，通常能維持略高於平均的真實 LOB%。常與 [[metrics/BABIP|BABIP]]、[[metrics/HR-FB|HR/FB%]] 並用判斷投手是否過於幸運或倒楣。

## 參考來源
- [[sources/2010-02-17-FanGraphs-LOB-Percent]]
