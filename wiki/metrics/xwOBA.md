---
title: xwOBA（Expected wOBA，預期加權上壘率）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - statcast
  - expected-stats
sources:
  - "[[sources/2026-11-13-MLB-Statcast-xwOBA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# xwOBA（Expected wOBA，預期加權上壘率）

## 一句話定義
**xwOBA** 把每顆擊球的「實際結果」換成「依擊球品質應有的期望結果」，再加上真實的保送、三振與觸身球，以 [[metrics/wOBA|wOBA]] 量表呈現。

## 計算方式與核心邏輯
1. 每顆擊球依 [[metrics/Exit-Velocity|EV]] 與 [[metrics/Launch-Angle|LA]]（topped／weakly hit 球自 2019 年起加入打者的季 [[metrics/Sprint-Speed|Sprint Speed]]）取得一/二/三/全壘打機率（基準為 2015 年起同類擊球）。
2. 以 wOBA 的[[principles/Linear-Weights|線性權重]]加總：
$$\text{xwOBA} = \frac{w_{uBB}\,uBB + w_{HBP}\,HBP + \sum_{\text{BBE}} \left(w_{1B}P_{1B} + w_{2B}P_{2B} + w_{3B}P_{3B} + w_{HR}P_{HR}\right)}{AB + uBB + SF + HBP}$$
   其中權重（factor）為當季情境下各事件的調整後得分期望值。
3. 保送、三振、觸身球**沿用真實數據**；同法可得投手 xwOBA against。

## 基準值與判讀區間
- 與 wOBA 同量表（聯盟平均約 .310–.320，見 [[metrics/wOBA|wOBA]]）。
- **判讀**：wOBA 明顯低於 xwOBA → 可能運氣不佳、未來有望回升；反之可能過熱。例：Marcell Ozuna 2018 wOBA **.327**、xwOBA **.359**。

## 演進脈絡與相關指標
- 是 [[metrics/wOBA|wOBA]] 的「去守備、去運氣」版本；換算為 ERA 量表即 [[metrics/xERA|xERA]]。
- 同系列：[[metrics/xBA|xBA]]、[[metrics/xSLG|xSLG]]。
- 與 [[principles/DIPS|DIPS]]、[[principles/Regression-Toward-the-Mean|向均值回歸]] 的精神一致：打者與投手能影響 EV 與 LA，但無法控制球進入場內之後的事。

## 限制與常見誤區
- **不含擊球方向、球場、守備布陣**：長期穩定的 wOBA−xwOBA 差距（如極端拉打型打者、速度型打者）可能是真實技能而非運氣。
- 描述性為主：MLB 官方對 xERA 明言「不一定具預測力」，同理 xwOBA 亦不應直接當成預測值（參見 [[principles/Projection-Systems|預測系統]]）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-xwOBA]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
