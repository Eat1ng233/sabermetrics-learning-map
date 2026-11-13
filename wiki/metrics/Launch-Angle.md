---
title: Launch Angle（LA，擊球仰角）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Launch-Angle]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Launch Angle（LA，擊球仰角）

## 一句話定義
**Launch Angle（LA）** 是球被擊中後離開球棒時的**垂直角度**（度）。

## 計算方式與核心邏輯
- 0° = 與地面平行；正值往上、負值往下（打向地面）。
- **擊球型態對照**：
  | 類型 | 仰角 |
  |---|---|
  | 滾地球（Ground ball） | < 10° |
  | 平飛球（Line drive） | 10°–25° |
  | 飛球（Fly ball） | 25°–50° |
  | 內野高飛（Pop up） | > 50° |
- **平均仰角**：打者以所有 [[metrics/BBE|BBE]]（**排除觸擊**）計算；投手以被擊出的擊球計算。

## 基準值與判讀區間
- 高仰角打者：Joey Gallo、Rhys Hoskins、Mike Trout；低仰角打者：Eric Hosmer、DJ LeMahieu、Christian Yelich。
- 高仰角投手（飛球型）：Justin Verlander、Max Scherzer、Kenley Jansen；低仰角投手（滾地型）：Dallas Keuchel、Logan Webb、Framber Valdez。

## 演進脈絡與相關指標
- **Sweet Spot**：8–32°（見 [[metrics/Sweet-Spot|Sweet Spot%]]）；最佳 LA + 最佳 EV = [[metrics/Barrel|Barrel]]。
- 為 FanGraphs [[metrics/GB%|GB%]]、[[metrics/LD%|LD%]]、[[metrics/FB%|FB%]]、[[metrics/IFFB%|IFFB%]] 的追蹤數據版本（見 [[concepts/Batted-Ball-Profile|擊球型態總覽]]）。
- 擊球「之前」的球棒角度見 [[metrics/Attack-Angle|Attack Angle]]。

> [!warning] 定義差異：Statcast 仰角分類 vs. BIS 擊球型態
> Statcast 依**仰角數值**劃分滾地／平飛／飛球／內野高飛；FanGraphs 的 GB%／LD%／FB% 則來自 BIS（Sports Info Solutions）的軌跡分類（來源：[[sources/2010-02-17-FanGraphs-Batted-Ball-Types]]）。兩系統的平飛球比例等數值不可直接互比。

## 限制與常見誤區
- 平均仰角會掩蓋分布：一半 −10°、一半 40° 的打者平均 15°，卻幾乎沒有平飛球。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Launch-Angle]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
