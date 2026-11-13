---
title: xERA（Expected ERA，預期防禦率）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - expected-stats
sources:
  - "[[sources/2026-11-13-MLB-Statcast-xERA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# xERA（Expected ERA，預期防禦率）

## 一句話定義
**Expected ERA（xERA）** 是把投手被打的 [[metrics/xwOBA|xwOBA]] **1:1 換算到 ERA 量表**的結果。

## 計算方式與核心邏輯
- xwOBA 已同時包含**接觸量**（三振、保送、觸身球）與**接觸品質**（[[metrics/Exit-Velocity|EV]]、[[metrics/Launch-Angle|LA]]），用以只評價投打「接觸那一刻」，排除球場、天氣與守備等後續因素。
- 換算成 ERA 量表後，可直接與投手實際 [[metrics/ERA|ERA]] 比較。

## 演進脈絡與相關指標
- 理念與 [[metrics/FIP|FIP]] 相近（見 [[principles/DIPS|DIPS]]），差別在於加入 Statcast 擊球品質，而非像 FIP 只用 K、BB、HBP、HR。
- 與 [[metrics/xFIP|xFIP]]（以聯盟 HR/FB 正規化全壘打）、[[metrics/SIERA|SIERA]]（以擊球型態建模）同屬「ERA 估計器」家族。

## 限制與常見誤區
- **MLB 官方明言 xERA 不一定具預測力**；若 xERA 明顯高於實際 ERA，應「進一步檢查投手如何壓低失分」，而非直接斷定會退步。
- 承襲 xwOBA 的盲點：不含擊球方向、球場與守備品質。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-xERA]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
