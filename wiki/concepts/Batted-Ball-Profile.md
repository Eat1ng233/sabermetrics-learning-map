---
title: 擊球型態與落點分布（Batted Ball Profile）
type: concept
tags:
  - sabermetrics
  - hitting
  - pitching
  - batted-ball
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-17-FanGraphs-Batted-Ball-Types]]"
  - "[[sources/2015-05-17-FanGraphs-Batted-Ball-Direction]]"
  - "[[sources/2015-05-10-FanGraphs-Quality-of-Contact]]"
  - "[[sources/2026-11-13-MLB-Statcast-Launch-Angle]]"
  - "[[sources/2026-11-13-MLB-Statcast-Exit-Velocity]]"
  - "[[sources/2026-11-13-MLB-Statcast-Barrel]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# 擊球型態與落點分布（Batted Ball Profile）

擊球型態數據用來拆解「打者把球打進場內（Balls in Play, BIP）之後發生了什麼事」，是解讀 [[metrics/BABIP|BABIP]]、長打潛力與投球滾飛傾向的核心工具。

## 1. 擊球軌跡分類（合計 100%）
- [[metrics/LD%|LD%（平飛球比例）]]：聯盟平均約 `21%`，進攻產值最高（`wOBA .684`），但約需**一年半**才穩定。
- [[metrics/GB%|GB%（滾地球比例）]]：聯盟平均約 `44%`，長打最少（`wOBA .220`），投手偏好製造。
- [[metrics/FB%|FB%（飛球比例）]]：聯盟平均約 `35%`，長打火力最強（`ISO .378`、`wOBA .335`）。
- **GB/FB（滾飛比）**：`GB / FB`。
- [[metrics/IFFB%|IFFB%（內野高飛球比例）]]：`IFFB / FB`，聯盟平均約 `11%`，幾乎必死無疑。
- [[metrics/HR-FB|HR/FB（飛球全壘打率）]]：`HR / FB`，聯盟平均約 `9.5%`，對評估投手（[[metrics/xFIP|xFIP]]）尤其關鍵。

## 2. 擊球方向分布（30 度三等分扇區，含全壘打）
- [[metrics/Pull%|Pull%（拉打比例）]]（平均約 `40%`）
- [[metrics/Cent%|Cent%（中間方向比例）]]（平均約 `35%`）
- [[metrics/Oppo%|Oppo%（推打比例）]]（平均約 `25%`）

## 3. 擊球強度分布（BIS 2010 年起依滯空時間、落點與軌跡演算法判定）
- [[metrics/Soft%|Soft%（軟弱擊球比例）]]（平均約 `20%`）
- [[metrics/Med%|Med%（中等擊球比例）]]（平均約 `50%`）
- [[metrics/Hard%|Hard%（強勁擊球比例）]]（平均約 `30%`）

## 4. 特殊安打類型
- **IFH（Infield Hits）** 與 **IFH%**：滾地球形成內野安打的比率（`IFH / GB`）。
- **BUH（Bunt Hits）** 與 **BUH%**：觸擊短打形成安打的比率（`Bunt Hits / Bunts`）。

## Statcast 對應指標
- **Statcast 追蹤版擊球框架（2026-11-13 補充）**：軌跡 → [[metrics/Launch-Angle|Launch Angle]]（滾地 <10°、平飛 10–25°、飛球 25–50°、內野高飛 >50°）與 [[metrics/Sweet-Spot|Sweet Spot%]]；強度 → [[metrics/Exit-Velocity|Exit Velocity]]、[[metrics/Hard-Hit-Rate|Hard-hit Rate]]；兩者結合 → [[metrics/Barrel|Barrel]]；預期結果 → [[metrics/xBA|xBA]]、[[metrics/xSLG|xSLG]]、[[metrics/xwOBA|xwOBA]]；揮棒端 → [[concepts/Bat-Tracking|Bat Tracking]]。注意 BIS 與 Statcast 分類口徑不同。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-17-FanGraphs-Batted-Ball-Types]]
- [[sources/2015-05-17-FanGraphs-Batted-Ball-Direction]]
- [[sources/2015-05-10-FanGraphs-Quality-of-Contact]]
- [[sources/2026-11-13-MLB-Statcast-Launch-Angle]]
- [[sources/2026-11-13-MLB-Statcast-Exit-Velocity]]
- [[sources/2026-11-13-MLB-Statcast-Barrel]]
