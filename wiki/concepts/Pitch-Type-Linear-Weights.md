---
title: 球種線性權重（Pitch Type Linear Weights / Pitch Values）
type: concept
tags:
  - sabermetrics
  - pitching
  - hitting
  - linear-weights
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2012-03-01-FanGraphs-Pitch-Type-Linear-Weights]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 球種線性權重（Pitch Type Linear Weights / Pitch Values）

## 一句話定義
**Pitch Values** 依據每顆球所造成的「好壞球數（Count）得分期望值變化」，將整季的得分貢獻或失分價值歸屬到各個具體球種（如 `wFB`、`wSL`、`wCB`、`wCH`，以及每百球標準化版 `wFB/C`、`wSL/C`）。

## 計算邏輯與判讀
- 每個球數（如 `0-0` 為 `0.0`、`1-0` 約 `+0.04`、`1-1` 約 `-0.02`）都有對應的得分期望值；每投一球造成的狀態轉移（加上擊球結果的得分價值）即記在該球種帳上。
- **正值永遠代表該球員表現優於平均**（`0` 為平均，不論打者或投手），直球累積多落在 `-20` 至 `+20` 分（每百球 `-1.5` 至 `+1.5`）、變化球多在 `-10` 至 `+10` 分（每百球 `-5` 至 `+5`）。

## 兩大重要限制
1. **幾乎不具未來預測力**：跨季相關性低於 `0.25`，只能描述「過去這顆球種發生了什麼結果」，不能直接預測未來。
2. **球種相依性（Interdependence）**：直球拿到高分往往也受惠於滑球的掩護與配球順序，因此 Pitch Value **不能**直接等同於單一球種的純物理品質（純物理品質應看 [[metrics/Stuff+|Stuff+]] 或 [[metrics/PitchingBot|PitchingBot]]）。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2012-03-01-FanGraphs-Pitch-Type-Linear-Weights]]
