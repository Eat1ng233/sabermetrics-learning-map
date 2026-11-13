---
title: Attack Direction（攻擊方向）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Attack-Direction]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Attack Direction（攻擊方向）

## 一句話定義
**Attack Direction** 衡量擊球瞬間球棒甜蜜點的**水平**移動方向，以相對「本壘→正中外野」直線的「拉打（pull）」或「反方向（oppo）」度數表示。

## 計算方式與核心邏輯
- 0° = 球棒正朝中外野移動；角度越大越偏向極端拉打或反方向。
- Pull：右打者朝左外野、左打者朝右外野；Oppo 則相反。

## 基準值與判讀區間
- **MLB 平均約 2° pull**；球季平均範圍約 **15° pull – 10° oppo**。
- 2024 極端拉打：Isaac Paredes（17° pull）、Jorge Soler、José Ramírez（10°）；極端反方向：Nathaniel Lowe（8° oppo）、Anthony Volpe、Rafael Devers（7°）；正中：Corbin Carroll、Brandon Nimmo、Dansby Swanson（0°）。

## 演進脈絡與相關指標
- 與 [[metrics/Attack-Angle|Attack Angle]] 成對回報；結果端對應 [[metrics/Pull%|Pull%]]／[[metrics/Oppo%|Oppo%]] 擊球方向分布。
- 屬 [[concepts/Bat-Tracking|Bat Tracking]] 指標群；接觸位置見 [[metrics/Intercept-Point|Intercept Point]]。

## 限制與常見誤區
- 於 intercept point 量測，**揮早或揮晚都會大幅改變數值**，反映時機多於固定型態。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Attack-Direction]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
