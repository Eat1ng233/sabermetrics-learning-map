---
title: Principles（賽伯計量學基本邏輯）資料夾總覽
type: principle
tags:
  - sabermetrics
  - principles
  - overview
sources:
  - "[[sources/2011-01-23-FanGraphs-DIPS]]"
  - "[[sources/2010-02-16-FanGraphs-Regression-Toward-the-Mean]]"
  - "[[sources/2010-02-26-FanGraphs-Replacement-Level]]"
  - "[[sources/2010-02-18-FanGraphs-Sample-Size]]"
  - "[[sources/2010-02-27-FanGraphs-Splits]]"
  - "[[sources/2010-02-25-FanGraphs-Projection-Systems]]"
  - "[[sources/2010-02-25-FanGraphs-Linear-Weights]]"
  - "[[sources/2010-02-25-FanGraphs-Counting-vs-Rate-Stats]]"
  - "[[sources/2010-02-27-FanGraphs-Park-Factors]]"
  - "[[sources/2010-02-26-FanGraphs-Positional-Adjustment]]"
  - "[[sources/2010-02-27-FanGraphs-Aging-Curve]]"
  - "[[sources/2010-02-27-FanGraphs-League-Equivalencies]]"
  - "[[sources/2010-02-26-FanGraphs-Pythagorean-Win-Loss]]"
  - "[[sources/2011-01-23-FanGraphs-Luck]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Principles（賽伯計量學基本邏輯）

本資料夾收錄 **FanGraphs Sabermetrics Library — Principles** 與 **WAR 基礎方法論**的核心原理。如果說 `wiki/metrics/` 回答的是「各個數據怎麼算」，那麼 `wiki/principles/` 回答的就是「**為什麼進階數據要這樣設計**」。

## 四大邏輯支柱

### 1. 訊號與雜訊：分離實力與隨機性
- [[principles/Regression-Toward-the-Mean|向均值回歸（Regression toward the Mean）]] — 區分真實實力與短期隨機波動的核心統計框架
- [[principles/Sample-Size|樣本數與穩定性（Sample Size）]] — 各項投打數據隨樣本累積趨穩的速度與 Carleton 經驗門檻
- [[principles/Luck|運氣與低潮診斷（Luck）]] — 透過過程指標、[[metrics/BABIP|BABIP]] 與 [[metrics/HR-FB|HR/FB]] 區分手感異常與隨機運氣
- [[principles/DIPS|DIPS（守備獨立投球理論）]] — 從投手結果中剝離隊友守備雜訊的評估哲學
- [[principles/Splits|分項數據與左右對戰（Splits）]] — 辨別有效機制分項（如 Platoon）與樣本／對手品質陷阱

### 2. 價值量化：從事件到得分與勝場
- [[principles/Linear-Weights|線性權重（Linear Weights）]] — 利用 24 情境得分期望值矩陣推導 [[metrics/wOBA|wOBA]] 與 [[metrics/FIP|FIP]] 權重
- [[principles/Counting-vs-Rate-Statistics|累積數據 vs. 比率數據]] — 為何比率轉換為累積價值時不能僅以聯盟平均為基準
- [[principles/Pythagorean-Win-Loss|畢達哥拉斯勝率（Pythagorean Win-Loss）]] — 得失分與勝率的非線性關係及勝分轉換率（RPW）基礎

### 3. 環境與基準校正：建立公平的比較尺
- [[principles/Replacement-Level|替補水準（Replacement Level）]] — [[metrics/WAR|WAR]] 的共同起跑線（底薪自由球員水準，1,000 WAR 分配框架）
- [[principles/Park-Factors|球場校正係數（Park Factors）]] — 5 年回歸加法校正與球場效應盲點
- [[principles/Positional-Adjustment|守備位置調整（Positional Adjustment）]] — 將同守位守備分數換算至跨守位統一尺度
- [[principles/League-Equivalencies|聯盟換算（League Equivalencies / MLE）]] — 將小聯盟與海外職棒（如 NPB）數據翻譯至 MLB 尺度

### 4. 時間維度與未來預測
- [[principles/Aging-Curve|老化曲線（Aging Curve）]] — 不同技能隨年齡的成長與衰退節奏及合約估值應用
- [[principles/Projection-Systems|預測系統（Projection Systems）]] — 以多季歷史、老化曲線與回歸模型估計當前真實實力中位數
