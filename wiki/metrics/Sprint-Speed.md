---
title: Sprint Speed（SS，衝刺速度）
type: metric
tags:
  - sabermetrics
  - baserunning
  - statcast
  - speed
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Sprint-Speed]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Sprint Speed（SS，衝刺速度）

## 一句話定義
**Sprint Speed** 以「球員在**最快 1 秒區間**內每秒跑幾呎（ft/sec）」更精確地量化速度（2017 年推出）。

## 計算方式與核心邏輯
- **合格跑動（qualified runs）**：
  1. 非全壘打情況下跑兩個壘以上（排除長打時從二壘出發的跑動）。
  2. **topped 或 weakly hit** 球的本壘到一壘跑動（2018 年加入，以更快累積有意義的樣本）。
- 1 秒約可涵蓋 **7 個全力步伐**，因此獎勵能長時間維持極速者。
- 單次 ≥ 30 ft/sec 即為一次 [[metrics/Bolt|Bolt]]。

> [!warning] 資料矛盾：季平均採計的跑動比例
> - Sprint Speed 細項頁：取「最佳的約**三分之二**（approximately two-thirds）」合格跑動平均（來源：[[sources/2026-11-13-MLB-Statcast-Sprint-Speed]]）。
> - Statcast 總覽頁：取合格跑動的「**前半**（top half）」平均（來源：[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]）。
> 兩頁皆為 MLB.com 官方詞彙表，說法不一致，待以 Baseball Savant 方法說明查證。

## 基準值與判讀區間
- **MLB 平均約 27 ft/sec**；**30 ft/sec 以上為精英**（Bolt 門檻）。
- 2018（≥10 次合格跑動）：Byron Buxton **30.5**、Roman Quinn／Magneuris Sierra 30.2、Adam Engel／Billy Hamilton／Trea Turner 30.1。
- 2023：Elly De La Cruz、Bobby Witt Jr. 並列 **30.5**。

## 演進脈絡與相關指標
- 取代以結果反推速度的 [[metrics/Spd|Spd]]（Bill James 速度分數）——Sprint Speed 是直接物理量測。
- 被用作 [[metrics/xBA|xBA]]／[[metrics/xwOBA|xwOBA]]（弱擊球）與內野 [[metrics/OAA|OAA]]（封殺）的輸入，以及 [[metrics/Baserunning-Throwing-Value|Baserunning Value]] 的成功機率模型。
- 價值端仍需看 [[metrics/BsR|BsR]]（[[metrics/wSB|wSB]] + [[metrics/UBR|UBR]] + [[metrics/wGDP|wGDP]]）：速度快 ≠ 跑壘價值高。

## 限制與常見誤區
- 衡量的是「天賦極速」而非跑壘判斷；也不含加速與離壘（見 [[metrics/Lead-Distance|Lead Distance]]、[[metrics/90-Foot-Running-Splits|90-foot Splits]]）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Sprint-Speed]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
