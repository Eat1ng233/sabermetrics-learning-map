---
title: RA9-Wins（Runs Allowed per 9 Innings Wins）
type: metric
tags:
  - sabermetrics
  - pitching
  - war
  - ra9-wins
sources:
  - "[[sources/2013-06-10-FanGraphs-FDP]]"
  - "[[sources/2012-03-28-FanGraphs-WAR-for-Pitchers]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# RA9-Wins（Runs Allowed per 9 Innings Wins）

## 一句話定義
**RA9-Wins**（又稱 `RA9-WAR`）採用與投手 [[metrics/WAR|fWAR]] 相同的替補水準與局數換算架構，但底層輸入改採投手實際「每九局失分率（`RA/9`）」而非 [[metrics/FIP|FIP]]。

## 關係與適用情境
$$\text{RA9-Wins} = \text{FIP-Wins} + \text{[[metrics/FDP|FDP-Wins]]}$$

- **蝴蝶球投手與極端技巧派**：蝴蝶球投手已被證明能長期製造較弱的擊球接觸，評價這類投手時使用 `RA9-Wins` 往往比 `FIP-Wins` 更貼近實際貢獻。
- **長期 vs. 短期**：FIP 較適合小樣本與未來預測；但若累積了極大樣本（或想回顧實際發生的失分結果），`RA9-Wins` 提供重要對照。

## 參考來源
- [[sources/2013-06-10-FanGraphs-FDP]]
- [[sources/2012-03-28-FanGraphs-WAR-for-Pitchers]]
