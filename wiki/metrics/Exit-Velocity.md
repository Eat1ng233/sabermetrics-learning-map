---
title: Exit Velocity（EV，擊球初速）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Exit-Velocity]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Exit Velocity（EV，擊球初速）

## 一句話定義
**Exit Velocity（EV）** 衡量球被擊中後**剛離開球棒時的速度**（mph），追蹤所有 [[metrics/BBE|Batted Ball Events]]（出局、安打、失誤）。

## 計算方式與核心邏輯
$$\text{aEV} = \frac{\sum \text{Exit Velocity}}{\text{BBE}}$$
- 打者：越高越好——強勁擊球讓守備反應時間更短，上壘機會更高。
- 投手：**Exit Velocity Against**，頂尖投手通常也是壓制強勁擊球的佼佼者。

## 基準值與判讀區間
- 「強勁擊球」門檻為 **95 mph**（見 [[metrics/Hard-Hit-Rate|Hard-hit Rate]]）；Barrel 最低需 98 mph（見 [[metrics/Barrel|Barrel]]）。

## 演進脈絡與相關指標
- 與 [[metrics/Launch-Angle|Launch Angle]] 共同構成擊球品質的兩大物理輸入，衍生 [[metrics/Barrel|Barrel]]、[[metrics/xBA|xBA]]、[[metrics/xSLG|xSLG]]、[[metrics/xwOBA|xwOBA]]。
- 是 FanGraphs [[metrics/Hard%|Hard%]]／[[metrics/Soft%|Soft%]]（BIS 主觀/演算法分類）的追蹤數據版本，可用來檢驗 [[metrics/BABIP|BABIP]] 的運氣成分（參見 [[principles/Luck|運氣與低潮診斷]]）。
- 可能的最高 EV 取決於揮棒速度與球速，見 [[metrics/Squared-Up-Rate|Squared-up Rate]]。

## 限制與常見誤區
- 平均值會被大量「無意義的弱擊球」稀釋：40 mph 與 70 mph 的球都是弱擊球，卻對平均影響不同——這正是 Hard-hit Rate 以門檻計算的理由。
- 不含仰角：110 mph 的滾地球與 110 mph 的 28° 飛球價值天差地遠。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Exit-Velocity]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
