---
title: Attack Angle（攻擊角度）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Attack-Angle]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Attack Angle（攻擊角度）

## 一句話定義
**Attack Angle** 衡量球棒甜蜜點在**擊球瞬間**（揮空時為球棒與球路徑交會點）相對地面的垂直移動角度。

## 計算方式與核心邏輯
- 只取接觸點那一刻的角度；整個揮棒過程中攻擊角持續變化——揮棒初段為負值（球棒向下），收棒時極高。
- 在球被打正的前提下：攻擊角高 → 較可能形成飛球；攻擊角低或負值 → 較可能形成滾地球。

## 基準值與判讀區間
- **MLB 平均約 10°**；球季平均分布約 **0°–20°**。
- **理想區間 5°–20°**（見 [[metrics/Ideal-Attack-Angle|Ideal Attack Angle Rate]]）。
- 2024 高攻擊角：Max Muncy、Eugenio Suárez（18°）、Cal Raleigh（17°）、José Altuve（16°）；低攻擊角：Brice Turang（1°）、Vladimir Guerrero Jr.（3°）、Steven Kwan、Jarren Duran（4°）。

## 演進脈絡與相關指標
- 與 [[metrics/Attack-Direction|Attack Direction]]（水平方向）成對回報。
- 對比：[[metrics/Swing-Path-Tilt|Swing Path（Tilt）]] 描述「接觸前」的揮棒平面；[[metrics/Launch-Angle|Launch Angle]] 描述「接觸後」球的角度；Attack Angle 描述「接觸當下」球棒的移動方向。
- 屬 [[concepts/Bat-Tracking|Bat Tracking]] 指標群。

## 限制與常見誤區
- **時機效應**：揮太早（ahead）→ 攻擊角偏高；揮太晚（behind）→ 偏低。因此它同時反映揮棒機制與擊球時機，不宜只當作「揮棒型態」解讀。
- 資料僅自 2023 年明星賽後起。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Attack-Angle]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
