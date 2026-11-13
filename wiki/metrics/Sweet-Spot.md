---
title: Sweet Spot%（LA SwSp%，甜蜜點仰角率）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Sweet-Spot]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Sweet Spot%（LA SwSp%，甜蜜點仰角率）

## 一句話定義
**Sweet Spot%（LA SwSp%）** 是打者擊球仰角落在 **8°–32°**「甜蜜點區」的 [[metrics/BBE|BBE]] 比例，把「打到球棒甜蜜點」的口語量化。

## 計算方式與核心邏輯
$$\text{Sweet Spot\%} = \frac{\text{LA} \in [8°, 32°] \text{ 的 BBE}}{\text{BBE}}$$
- 8–32° 同時涵蓋容易形成安打的平飛球，以及容易形成長打與全壘打的飛球（見 [[metrics/Launch-Angle|Launch Angle]]）。

## 演進脈絡與相關指標
- 常與 [[metrics/Hard-Hit-Rate|Hard-hit Rate]] 並用；同時考量 EV 與 LA 的分類為 [[metrics/Barrel|Barrel]]。
- 揮棒端的對應物：[[metrics/Ideal-Attack-Angle|Ideal Attack Angle Rate]]（攻擊角 5–20°）。

## 限制與常見誤區
- 名稱中的「Sweet Spot」指**仰角區間**，與 [[metrics/Squared-Up-Rate|Squared-up]] 定義中「球棒上的甜蜜點（距棒頭 4–9 吋）」是不同概念。
- 不考慮擊球強度：8–32° 的軟弱小飛球也算。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Sweet-Spot]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
