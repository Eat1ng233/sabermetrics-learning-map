---
title: Statcast
type: entity
tags:
  - sabermetrics
  - statcast
  - tracking
  - mlb
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Statcast

## 簡介
**Statcast** 是大聯盟（MLB）官方的全場追蹤系統，量化投球、擊球、跑壘、守備與揮棒等場上動作，並把原始量測組合成可跨季比較的指標。它讓過去只存在於球探眼中、或根本無從得知的「原始能力」得以數據化。

## 發展時間軸
| 年份 | 事件 |
|---|---|
| 2008 | 全大聯盟球場安裝投球追蹤硬體（[[entities/PITCHf-x|PITCHf/x]]） |
| 2014 | Statcast 部分球場試行 |
| **2015** | Statcast 於 30 座球場全面上線（多數「期望值」指標的歷史基準年） |
| 2015–19 | 攝影機 + 雷達混合系統 |
| **2020** | 改用 [[entities/Hawk-Eye|Hawk-Eye]] 光學追蹤；內野 [[metrics/OAA|OAA]] 上線 |
| 2023 | 高幀率攝影機升級至 300 fps；**下半季起提供 bat tracking**；MLB 限制 Shift（見 [[concepts/Fielding-Alignments|Fielding Alignments]]） |
| 2025 | 捕手框球模型更新（見 [[metrics/Catcher-Framing|Catcher Framing]]） |

- 2023 年共追蹤 **72.5 萬球以上**、**12.5 萬顆擊球以上**；Hawk-Eye 時代擊球追蹤率約 **99%**（先前約 89%）。

## 資料分層：量測值 vs. 指標
- **量測值（Measurements）**：場上原始數字——[[metrics/Arm-Strength|Arm Strength]]、[[metrics/Bat-Speed|Bat Speed]]、[[metrics/Extension|Extension]]、[[metrics/Exit-Velocity|Exit Velocity]]、[[metrics/Launch-Angle|Launch Angle]]、[[metrics/Velocity|Pitch Velocity]]、[[metrics/Pop-Time|Pop Time]]、[[metrics/Spin-Rate|Spin Rate]]。
- **指標（Metrics）**：量測值的組合——如 [[metrics/Barrel|Barrel]]、[[metrics/Blasts|Blasts]]、[[metrics/Catch-Probability|Catch Probability]]、[[metrics/xBA|xBA]]、[[metrics/xwOBA|xwOBA]]、[[metrics/OAA|OAA]]、[[metrics/Sprint-Speed|Sprint Speed]]。

## MLB.com 詞彙表收錄指標總覽
### 防守（Defense）
[[metrics/Arm-Strength|Arm Strength]] · [[metrics/Catch-Probability|Catch Probability]] · [[metrics/Distance-Covered|Distance Covered]] · [[metrics/Fielding-Run-Value|Fielding Run Value]] · [[metrics/Jump|Jump]] · [[metrics/OAA|OAA]] · [[metrics/Pop-Time|Pop Time]] · [[concepts/Fielding-Alignments|Shifts / Fielding Alignments]] · [[metrics/Baserunning-Throwing-Value|Throwing Value]]

### 進攻（Offense）
- **擊球品質**：[[metrics/BBE|BBE]] · [[metrics/Exit-Velocity|Exit Velocity]] · [[metrics/Launch-Angle|Launch Angle]] · [[metrics/Hard-Hit-Rate|Hard-hit Rate]] · [[metrics/Sweet-Spot|Sweet Spot]] · [[metrics/Barrel|Barrel]] · [[metrics/Hit-Distance|Hit Distance]] · [[metrics/Projected-HR-Distance|Projected HR Distance]]
- **預期數據**：[[metrics/xBA|xBA]] · [[metrics/xSLG|xSLG]] · [[metrics/xwOBA|xwOBA]]（投手版：[[metrics/xERA|xERA]]）
- **揮棒追蹤**（[[concepts/Bat-Tracking|Bat Tracking]]）：[[metrics/Bat-Speed|Bat Speed]] · [[metrics/Fast-Swing-Rate|Fast-swing Rate]] · [[metrics/Squared-Up-Rate|Squared-up Rate]] · [[metrics/Blasts|Blasts]] · [[metrics/Swing-Length|Swing Length]] · [[metrics/Attack-Angle|Attack Angle]] · [[metrics/Ideal-Attack-Angle|Ideal Attack Angle]] · [[metrics/Attack-Direction|Attack Direction]] · [[metrics/Swing-Path-Tilt|Swing Path (Tilt)]] · [[metrics/Intercept-Point|Intercept Point]] · [[metrics/Batting-Stance|Batting Stance]]
- **跑壘**：[[metrics/Sprint-Speed|Sprint Speed]] · [[metrics/Bolt|Bolt]] · [[metrics/Home-to-First|Home to First]] · [[metrics/90-Foot-Running-Splits|90-foot Running Splits]] · [[metrics/Lead-Distance|Lead Distance]] · [[metrics/Baserunning-Throwing-Value|Baserunning]]

### 投球（Pitching）
[[metrics/Velocity|Velocity]] · [[metrics/Perceived-Velocity|Perceived Velocity]] · [[metrics/Extension|Extension]] · [[metrics/Spin-Rate|Spin Rate]] · [[metrics/Active-Spin|Active Spin]] · [[metrics/Pitch-Movement|Pitch Movement]] · [[metrics/xERA|xERA]] · [[metrics/PutAway%|PutAway%]] · [[metrics/Swords|Swords]] · [[metrics/Pitch-Tempo|Pitch Tempo]] · [[metrics/Catcher-Framing|Catcher Framing]]

## 在賽伯計量學中的定位
- **從結果到過程**：傳統與 FanGraphs 指標多以「結果」計價（[[metrics/wOBA|wOBA]]、[[metrics/UZR|UZR]]），Statcast 則量測「過程」（擊球初速、接殺難度），讓 [[principles/DIPS|DIPS]] 與 [[principles/Regression-Toward-the-Mean|向均值回歸]] 的思維能以物理資料直接檢驗運氣。
- **取代人工分類**：以追蹤數據取代 BIS 依影片判定的擊球型態與強度（對照 [[concepts/Batted-Ball-Profile|擊球型態總覽]]、[[metrics/Hard%|Hard%]]）與區塊式守備估計（[[concepts/Defensive-Metrics-Overview|守備數據核心理論]]）。
- **下游應用**：[[entities/FanGraphs|FanGraphs]] 的 [[metrics/Stuff+|Stuff+]]、[[metrics/PitchingBot|PitchingBot]] 等投球模型即建立在 Statcast 投球追蹤資料之上。

## 資料入口
- [[entities/Baseball-Savant|Baseball Savant]]（BaseballSavant.MLB.com）——官方排行榜、搜尋與視覺化工具。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
