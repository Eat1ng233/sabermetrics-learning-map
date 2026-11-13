---
title: FanGraphs
type: entity
tags:
  - sabermetrics
  - entity
  - website
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2023-03-10-FanGraphs-PitchingBot-Primer]]"
  - "[[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# FanGraphs

**FanGraphs** 是棒球進階數據分析（Sabermetrics）領域最具代表性的公開資料庫與分析媒體之一，旗下設有 **Sabermetrics Library** 系統性地教學與定義各項現代棒球統計指標。

## 數據架構與合作來源
- **基礎與進階統計**：如 [[metrics/OBP|OBP]]、[[metrics/wOBA|wOBA]]、[[metrics/wRC+|wRC+]]、[[metrics/BABIP|BABIP]]、[[metrics/BsR|BsR]] 與 [[metrics/WAR|fWAR]]（註：FanGraphs 站內不直接提供由 Baseball-Reference 維護的 `OPS+`，而是推薦使用 `wRC+`）。
- **Baseball Info Solutions (BIS)**：提供傳統的球種分類、球種價值（Pitch Value）、擊球型態（[[concepts/Batted-Ball-Profile|Batted Ball]]）與本壘板紀律（[[concepts/Plate-Discipline|Plate Discipline]]）數據。
- **PITCHf/x 與 Statcast 追蹤數據**：提供球種追蹤、球路位移與投球節奏（`Pace`）等數據。
- **投球品質模型（Pitch Modeling，2023 年 3 月上線）**：同時整合兩套 Statcast 機器學習投球評估系統——Cameron Grove 開發的 [[metrics/PitchingBot|PitchingBot]]（20-80 量表）與 Eno Sarris / Max Bay / Owen McGrattan 等人開發的 [[metrics/Stuff+|Stuff+]] / [[metrics/Location+|Location+]] / [[metrics/Pitching+|Pitching+]]（100+ 指數）。
- **守備與預測系統**：守備端 `Def` 於 2002 年前採用 Total Zone、2002 年後採用 UZR（並收錄 DRS 概念）；預測端亦整合 ZiPS、Steamer、The BAT 等系統。

## Statcast 對應指標
- **與 Statcast／Baseball Savant 的關係**：FanGraphs 的投球模型與追蹤數據欄位以 [[entities/Statcast|Statcast]]（前身 [[entities/PITCHf-x|PITCHf/x]]）為資料來源；官方 Statcast 指標與排行榜見 [[entities/Baseball-Savant|Baseball Savant]]。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
