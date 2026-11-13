---
title: xBA（Expected Batting Average，預期打擊率）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - statcast
  - expected-stats
sources:
  - "[[sources/2026-11-13-MLB-Statcast-xBA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# xBA（Expected Batting Average，預期打擊率）

## 一句話定義
**Expected Batting Average（xBA）** 衡量一顆擊球「成為安打的可能性」，並把季整體換算為打擊率量表。

## 計算方式與核心邏輯
1. 每顆擊球依**同類擊球**（[[metrics/Exit-Velocity|EV]] + [[metrics/Launch-Angle|LA]]；「topped／weakly hit」的球自 2019 年 1 月起再加入打者的季平均 [[metrics/Sprint-Speed|Sprint Speed]]）自 2015 年以來的安打率給予 xBA 值。
   - 例：xBA **.700** 的外野平飛球 → 同類球 10 次中 7 次成為安打。
2. 累積季內所有擊球的期望值 → 預期場內打擊率，再**加入真實三振數**，得到季 xBA。
3. 同樣方法可計算投手的 xBA against。

## 基準值與判讀區間
- 2023 合格打者：Ronald Acuña Jr. **.357**（實際 .337）、Luis Arraez .329、Freddie Freeman .323（Statcast 總覽頁）。
- 判讀：AVG 遠高於 xBA → 可能有運氣成分；反之可能被低估。

## 演進脈絡與相關指標
- 前身：**Hit Probability**（2017–18，以百分比表示），2019 起更名為 xBA。
- 對應傳統 [[metrics/AVG|AVG]]；同系列：[[metrics/xSLG|xSLG]]、[[metrics/xwOBA|xwOBA]]、[[metrics/xERA|xERA]]。
- 理念與 [[principles/DIPS|DIPS]]／[[metrics/BABIP|BABIP]] 運氣檢驗一致：打者與投手能影響 EV 與 LA，但無法控制球進場後的結果。

## 限制與常見誤區
- 僅用 EV 與 LA（少數球加速度），**不含擊球方向（噴射角）**、球場與守備布陣——拉打型打者或特定球場的偏差可能是真實的而非運氣。
- 與 AVG 一樣忽略保送與長打價值。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-xBA]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
