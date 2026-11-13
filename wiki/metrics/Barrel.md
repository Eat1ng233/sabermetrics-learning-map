---
title: Barrel（Barrel%，完美擊球）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Barrel]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Barrel（Barrel%，完美擊球）

## 一句話定義
**Barrel** 是 Statcast 最高等級的擊球品質分類：擊球初速與仰角組合在歷史上至少產生 **.500 打擊率與 1.500 長打率** 的擊球。

## 計算方式與核心邏輯
- 需同時符合 [[metrics/Exit-Velocity|Exit Velocity]] 與 [[metrics/Launch-Angle|Launch Angle]] 條件：
  | 擊球初速 | 必定判定為 Barrel 的仰角區間 |
  |---|---|
  | 98 mph（最低門檻） | 26°–30° |
  | 99 mph | 25°–31° |
  | 100 mph | 24°–33° |
  | 每再 +1 mph | 區間再擴 2–3° |
  | 116 mph | 8°–50° |
- 常見衍生率：**Barrel%**（Barrels / [[metrics/BBE|BBE]]）與 Barrels / PA。

## 基準值與判讀區間
- 門檻只是「下限」：如同優質先發（Quality Start）的平均 ERA 遠低於 4.50，**2016 年 Barrel 實際打擊率 .822、長打率 2.386**。

## 演進脈絡與相關指標
- 是 [[metrics/Hard-Hit-Rate|Hard-hit Rate]]（只看 EV）與 [[metrics/Sweet-Spot|Sweet Spot%]]（只看 LA）的交集升級版。
- 預期打擊系統（[[metrics/xBA|xBA]]／[[metrics/xSLG|xSLG]]／[[metrics/xwOBA|xwOBA]]）的同源概念；[[metrics/Blasts|Blasts]] 中 28% 為 Barrel。
- 可視為 FanGraphs [[metrics/Hard%|Hard%]]、[[metrics/HR-FB|HR/FB]] 等結果型長打指標的「物理輸入版」。

## 限制與常見誤區
- 二元分類：97 mph、28° 的球不算 Barrel，資訊有損失。
- 不考慮擊球方向（拉打飛球與反方向飛球價值差異大）與球場。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Barrel]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
