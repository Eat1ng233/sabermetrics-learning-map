---
title: BBE（Batted Ball Event，擊球事件）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-BBE]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# BBE（Batted Ball Event，擊球事件）

## 一句話定義
**Batted Ball Event（BBE）** 是任何產生結果的擊球：出局、安打或失誤。所有界內球都算，**被接殺出局的界外球也算**。

## 計算方式與核心邏輯
- BBE 是 Statcast 擊球指標的**基本分母**：
  - 平均 [[metrics/Exit-Velocity|Exit Velocity]] = ΣEV / BBE
  - 平均 [[metrics/Launch-Angle|Launch Angle]]（打者排除觸擊）
  - [[metrics/Hard-Hit-Rate|Hard-hit Rate]]、[[metrics/Barrel|Barrel%]]、[[metrics/Sweet-Spot|Sweet Spot%]]
  - 平均 [[metrics/Hit-Distance|Hit Distance]]

## 演進脈絡與相關指標
- 與 FanGraphs 擊球型態指標常用的 BIP（Balls in Play，見 [[concepts/Batted-Ball-Profile|擊球型態總覽]]、[[metrics/BABIP|BABIP]]）概念相近但不完全相同：BBE 含全壘打與界外接殺，BABIP 的分母則排除全壘打。

## 限制與常見誤區
- 比較不同網站「每 BBE」與「每 BIP」的比率時，留意分母定義差異。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-BBE]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
