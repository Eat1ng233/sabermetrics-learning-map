---
title: DRS（Defensive Runs Saved，守備防禦分數）
type: metric
tags:
  - sabermetrics
  - defense
  - drs
  - part-system
sources:
  - "[[sources/2010-02-15-FanGraphs-DRS]]"
  - "[[sources/2020-03-17-FanGraphs-DRS-2020-Update]]"
  - "[[sources/2026-11-13-MLB-Statcast-OAA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# DRS（Defensive Runs Saved，守備防禦分數）

## 一句話定義
**DRS** 是由 John Dewan 領導的 The Fielding Bible（Sports Info Solutions, SIS）計算的綜合守備指標，以「守下的分數（Runs Saved）」衡量球員相對於同守位平均的總守備貢獻。

## 六大核心組件
1. **rPM（Plus/Minus Runs Saved）**：守備範圍與轉換出局能力（2020 年起對內野手改採 **PART 系統**）。
2. **rSB（Stolen Base Runs Saved）**：捕手阻殺與投手牽制抑制盜壘。
3. **rBU（Bunt Runs Saved）**：一、三壘手處理短打的能力。
4. **rGDP（Double Play Runs Saved）**：二壘與游擊手策動雙殺的價值。
5. **rARM（Outfield Arms Runs Saved）**：外野手阻殺與嚇阻跑者多進壘的臂力價值。
6. **rHR（HR Saving Catch Runs Saved）**：外野手沒收全壘打（每次計 `+1.6` 分）。

## 2020 年重大改版：PART 系統（回溯至 2013 年）
隨著大聯盟內野佈陣比例從 2010 年不到 `2%` 暴增至 2019 年超過 `40%`，舊版系統面臨「Brett Lawrie 問題」（站在非傳統位置的野手因接到困難區的球而被過度加分）。SIS 因此針對內野滾地球與短平飛球（GSL，約佔內野球 80%）推出 **PART（Positioning, Air balls, Range, Throwing）**：
- **站位分離**：站位價值（`Positioning = A - B`）改歸球隊（Team Infield Positioning Runs Saved），**不再計入球員個人 DRS**。
- **個人 ART 總和**：個人 `rPM` 改為 `Air + Range + Throwing`（其中 `Range = C - B`、`Throwing = D - C`），問的是「**從他實際站的位置出發**，他表現得有多好？」。
- **佈陣與多野手評估**：所有佈陣球皆納入計算，且若淺站位野手攔截了深站位隊友本可輕鬆處理的球，系統會轉移預期出局率以避免過度給分。

## 基準值與判讀區間
與 [[metrics/UZR|UZR]] 相同尺度：`+15` 金手套水準、`+10` 優秀、`+5` 高於平均、`0` 平均、`-5` 低於平均、`-10` 欠佳、`-15` 極差。

## Statcast 對應指標
- **Statcast 對照**：[[metrics/OAA|OAA]] 與 [[metrics/Fielding-Run-Value|FRV]]（含捕手框球、阻殺、擋球換算）。

## 參考來源
- [[sources/2010-02-15-FanGraphs-DRS]]
- [[sources/2020-03-17-FanGraphs-DRS-2020-Update]]
- [[sources/2026-11-13-MLB-Statcast-OAA]]
- [[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]
