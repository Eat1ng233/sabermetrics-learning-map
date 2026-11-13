---
title: Projected Home Run Distance（HR-DIS，全壘打推估距離）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Projected-HR-Distance]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Projected Home Run Distance（HR-DIS，全壘打推估距離）

## 一句話定義
**Projected Home Run Distance（HR-DIS）** 推估一支全壘打若**不被看台、牆等障礙物阻擋**時能飛多遠。

## 計算方式與核心邏輯
- 找出球的拋物線軌跡，並外推剩餘的飛行路徑。

## 演進脈絡與相關指標
- 比較全壘打時優於 [[metrics/Hit-Distance|Hit Distance]]——每座球場的障礙物不同，會截斷球的完整飛行。

## 限制與常見誤區
- 各球場的**氣候、尺寸、風向、海拔**仍會影響飛行距離，HR-DIS 只是「較公平」而非完全中性（參見 [[principles/Park-Factors|球場校正係數]]）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Projected-HR-Distance]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
