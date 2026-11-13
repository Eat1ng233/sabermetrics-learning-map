---
title: 賽伯計量學（Sabermetrics）學習總覽
type: overview
tags:
  - sabermetrics
  - overview
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# 賽伯計量學（Sabermetrics）學習總覽

這份頁面是整個知識庫的**知識地圖**，目前已匯入 **114 篇**來源：67 篇 FanGraphs Sabermetrics Library 核心文章（基礎計量原理、打擊、投球、守備、跑壘、勝率期望值與 WAR 綜合價值體系），以及 47 篇 MLB.com 官方 Statcast 詞彙表（追蹤數據時代的物理量測與期望值指標）。

> **兩大資料典範**：FanGraphs 指標多以「**結果**」計價（線性權重、區塊式守備），[[entities/Statcast|Statcast]] 則量測「**過程**」（擊球初速、接殺難度、揮棒速度）。學習時建議成對對照，例如 [[metrics/wOBA|wOBA]] ↔ [[metrics/xwOBA|xwOBA]]、[[metrics/FIP|FIP]] ↔ [[metrics/xERA|xERA]]、[[metrics/UZR|UZR]] ↔ [[metrics/OAA|OAA]]、[[metrics/Spd|Spd]] ↔ [[metrics/Sprint-Speed|Sprint Speed]]。

---

## 零、基礎原理與計量邏輯（[[principles/README|Principles 總覽]]）
- **訊號與雜訊**：[[principles/Regression-Toward-the-Mean|向均值回歸]]、[[principles/Sample-Size|樣本數與穩定性]]、[[principles/Luck|運氣與低潮診斷]]、[[principles/DIPS|DIPS]]、[[principles/Splits|分項數據]]
- **價值量化與環境校正**：[[principles/Linear-Weights|線性權重]]、[[principles/Counting-vs-Rate-Statistics|累積 vs. 比率數據]]、[[principles/Pythagorean-Win-Loss|畢達哥拉斯勝率]]、[[principles/Replacement-Level|替補水準]]、[[principles/Park-Factors|球場校正係數]]、[[principles/Positional-Adjustment|守備位置調整]]、[[principles/League-Equivalencies|聯盟換算（MLE）]]
- **時間與未來預測**：[[principles/Aging-Curve|老化曲線]]、[[principles/Projection-Systems|預測系統]]

---

## 一、核心學習模組架構

### 1. 情境、勝率與關鍵度（WE / RE / LI）
- **得分期望值**：[[metrics/RE24|RE24（24 種壘包出局情境）]]
- **勝率與關鍵度**：[[concepts/Win-Expectancy|Win Expectancy（WE）]] → [[metrics/WPA|WPA]]、[[metrics/LI|LI（關鍵度指數）]]、[[metrics/WPA-LI|WPA/LI（情境中立勝場）]]、[[metrics/Clutch|Clutch]]

### 2. 打擊評估（Hitting）
- **傳統與基礎三圍**：[[metrics/AVG|AVG]]、[[metrics/OBP|OBP]]、[[metrics/SLG|SLG]]、[[metrics/ISO|ISO]]、[[metrics/OPS|OPS]]、[[metrics/OPS+|OPS+]]、[[metrics/BB%|BB%]]、[[metrics/K%|K%]]、[[metrics/BB-K|BB/K]]
- **線性權重與綜合進攻**：[[metrics/wOBA|wOBA]] → [[metrics/wRAA|wRAA]] → [[metrics/wRC+|wRC+]] → [[metrics/Off|Off]]
- **擊球型態與品質**：[[metrics/BABIP|BABIP]]、[[concepts/Batted-Ball-Profile|擊球型態總覽]]（[[metrics/GB%|GB%]]、[[metrics/LD%|LD%]]、[[metrics/FB%|FB%]]、[[metrics/IFFB%|IFFB%]]、[[metrics/HR-FB|HR/FB]]、[[metrics/Pull%|Pull%]]、[[metrics/Cent%|Cent%]]、[[metrics/Oppo%|Oppo%]]、[[metrics/Soft%|Soft%]]、[[metrics/Med%|Med%]]、[[metrics/Hard%|Hard%]]）
- **本壘板紀律**：[[concepts/Plate-Discipline|本壘板紀律（O-Swing%、Z-Swing%、Contact%、SwStr%）]]
- **Statcast 擊球品質與預期數據**：[[metrics/Exit-Velocity|Exit Velocity]]、[[metrics/Launch-Angle|Launch Angle]]、[[metrics/Hard-Hit-Rate|Hard-hit Rate]]、[[metrics/Sweet-Spot|Sweet Spot%]] → [[metrics/Barrel|Barrel]]；[[metrics/xBA|xBA]]、[[metrics/xSLG|xSLG]]、[[metrics/xwOBA|xwOBA]]；距離：[[metrics/Hit-Distance|Hit Distance]]、[[metrics/Projected-HR-Distance|HR-DIS]]（分母：[[metrics/BBE|BBE]]）
- **Statcast 揮棒追蹤**：[[concepts/Bat-Tracking|Bat Tracking 指標地圖]] → [[metrics/Bat-Speed|Bat Speed]]、[[metrics/Fast-Swing-Rate|Fast-swing Rate]]、[[metrics/Squared-Up-Rate|Squared-up Rate]]、[[metrics/Blasts|Blasts]]、[[metrics/Swing-Length|Swing Length]]、[[metrics/Swing-Path-Tilt|Swing Path]]、[[metrics/Attack-Angle|Attack Angle]]、[[metrics/Ideal-Attack-Angle|Ideal Attack Angle]]、[[metrics/Attack-Direction|Attack Direction]]、[[metrics/Intercept-Point|Intercept Point]]、[[metrics/Batting-Stance|Batting Stance]]

### 3. 投球評估（Pitching）
- **傳統與基礎比率**：[[metrics/ERA|ERA]]、[[metrics/WHIP|WHIP]]、[[metrics/LOB%|LOB%]]、[[metrics/K-9|K/9]]、[[metrics/BB-9|BB/9]]、[[metrics/K%|K%]]、[[metrics/BB%|BB%]]、[[metrics/Pace|Pace]]
- **DIPS 與 ERA 估計模型**：[[metrics/FIP|FIP]]、[[metrics/xFIP|xFIP]]、[[metrics/SIERA|SIERA]]；球場與聯盟校正版：[[metrics/ERA-|ERA-]]、[[metrics/FIP-|FIP-]]、[[metrics/xFIP-|xFIP-]]
- **失分與勝場拆解**：[[metrics/FDP|FDP（BIP-Wins + LOB-Wins）]]、[[metrics/RA9-Wins|RA9-Wins]]
- **牛棚與球種價值**：[[metrics/SD|SD]]、[[metrics/MD|MD]]、[[concepts/Pitch-Type-Linear-Weights|球種線性權重（Pitch Values）]]
- **Statcast 投球品質建模（Pitch Modeling）**：[[metrics/PitchingBot|PitchingBot]]、[[metrics/Stuff+|Stuff+]]、[[metrics/Location+|Location+]]、[[metrics/Pitching+|Pitching+]]（對比：[[comparisons/PitchingBot-vs-Pitching+|PitchingBot vs. Pitching+]]）
- **Statcast 投球追蹤（模型的物理輸入）**：[[metrics/Velocity|Velocity]]、[[metrics/Perceived-Velocity|Perceived Velocity]]、[[metrics/Extension|Extension]]、[[metrics/Spin-Rate|Spin Rate]]、[[metrics/Active-Spin|Active Spin]]、[[metrics/Pitch-Movement|Pitch Movement]]；結果與預期：[[metrics/xERA|xERA]]、[[metrics/PutAway%|PutAway%]]、[[metrics/Swords|Swords]]；節奏：[[metrics/Pitch-Tempo|Pitch Tempo]]

### 4. 守備與跑壘（Fielding & Baserunning）
- **守備理論與指標**：[[concepts/Defensive-Metrics-Overview|守備數據核心理論]] → [[metrics/RZR|RZR]]、[[metrics/TZ|TZ]]、[[metrics/TZL|TZL]]、[[metrics/UZR|UZR]]、[[metrics/DRS|DRS（含 2020 PART 更新）]]、[[metrics/Def|Def]]、[[metrics/FSR|FSR]]、[[metrics/Inside-Edge-Fielding|Inside Edge Fielding]]
- **捕手守備**：[[concepts/Catcher-Defense|捕手守備（rSB、RPP、Framing、Game Management）]]
- **跑壘價值**：[[metrics/Spd|Spd（早期）]] → [[metrics/wSB|wSB]] + [[metrics/UBR|UBR]] + [[metrics/wGDP|wGDP]] = [[metrics/BsR|BsR]]
- **Statcast 守備**：[[metrics/Catch-Probability|Catch Probability]] → [[metrics/OAA|OAA]] → [[metrics/Fielding-Run-Value|FRV]]；[[metrics/Jump|Jump]]、[[metrics/Distance-Covered|Distance Covered]]、[[metrics/Arm-Strength|Arm Strength]]；捕手：[[metrics/Catcher-Framing|Catcher Framing]]、[[metrics/Pop-Time|Pop Time]]；布陣：[[concepts/Fielding-Alignments|Fielding Alignments / Shift]]
- **Statcast 跑壘**：[[metrics/Sprint-Speed|Sprint Speed]]、[[metrics/Bolt|Bolt]]、[[metrics/Home-to-First|Home to First]]、[[metrics/90-Foot-Running-Splits|90-foot Splits]]、[[metrics/Lead-Distance|Lead Distance]]、[[metrics/Baserunning-Throwing-Value|Baserunning/Throwing Value]]

### 5. 綜合價值（Overall Value）
- **核心指標與系統**：[[metrics/WAR|WAR（野手與投手 fWAR 完整算法與誤區）]]、[[comparisons/fWAR-vs-rWAR-vs-WARP|fWAR vs. rWAR vs. WARP 系統比較]]、[[entities/FanGraphs|FanGraphs]]、[[entities/Statcast|Statcast]]（資料入口：[[entities/Baseball-Savant|Baseball Savant]]；硬體：[[entities/Hawk-Eye|Hawk-Eye]]、前代 [[entities/PITCHf-x|PITCHf/x]]）
- **已補齊專題**：[[principles/Replacement-Level|Replacement Level]]、[[principles/Park-Factors|Park Factors]]、[[principles/Pythagorean-Win-Loss|Pythagorean Win-Loss]]、[[principles/Positional-Adjustment|Positional Adjustment]] 皆已獨立建檔。

---

## 二、下一步學習缺口（2026-11-13）
- **期望值指標的預測力**：xwOBA／xERA 與實際 wOBA／ERA 的跨季預測比較，以及穩定門檻（目前知識庫尚無研究來源）。
- **Bat Tracking 的穩定性與老化**：揮棒速度何時穩定、隨年齡如何衰退，可與 [[principles/Aging-Curve|老化曲線]] 對照。
- **FRV vs. Def / DRS / UZR**：Statcast 守備與 FanGraphs WAR 守備成分的換算與差異，可發展為 `comparisons/` 頁面。
