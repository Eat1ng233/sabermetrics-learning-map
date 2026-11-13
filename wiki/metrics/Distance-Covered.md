---
title: Distance Covered（DCOV，實際跑動距離）
type: metric
tags:
  - sabermetrics
  - fielding
  - statcast
  - outfield
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Distance-Covered]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Distance Covered（DCOV，實際跑動距離）

## 一句話定義
**Distance Covered（DCOV）** 衡量守備員從球棒擊中球到他處理球的這段時間內，**實際跑過的路徑總長**。

## 計算方式與核心邏輯
- 只計實際行進路線，**不是**起點到落點的直線距離。
- **Route Efficiency（路線效率）** = 最佳路徑距離 ÷ DCOV。

## 演進脈絡與相關指標
- [[metrics/Catch-Probability|Catch Probability]] 刻意改用「所需距離（最佳路徑）」而非 DCOV，以免繞路的野手被額外獎勵。
- 起步效率可見 [[metrics/Jump|Jump]] 的 Route 成分。

## 限制與常見誤區
- **缺乏時間脈絡時不具意義**：同樣 100 呎，4 秒內完成遠比 7 秒（高飛球滯空久）更具難度。
- 跑得多可能代表路線差，而非守備範圍大。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Distance-Covered]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
