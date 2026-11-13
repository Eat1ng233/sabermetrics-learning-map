---
title: PutAway%（兩好球決勝率）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - strikeout
sources:
  - "[[sources/2026-11-13-MLB-Statcast-PutAway-Percentage]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# PutAway%（兩好球決勝率）

## 一句話定義
**PutAway%** 是投手在**兩好球時**投出的球中，形成三振的比例。

## 計算方式與核心邏輯
$$\text{PutAway\%} = \frac{\text{兩好球後形成三振的投球}}{\text{兩好球後的投球}}$$
- 以球種拆解時，可看出投手用哪種球「收掉」打者、效果如何——把「決勝球」這個棒球用語數據化。

## 基準值與判讀區間
- 2018 滑球 PutAway% 前五（≥100 顆兩好球滑球，共 154 名投手）：Ryan Pressly **38.8%**、Edwin Díaz 37.3%、Jose Leclerc 35.9%、Tanner Scott 35.3%、Will Smith 34.4%。

## 演進脈絡與相關指標
- 與 [[metrics/K%|K%]]（打席層級）互補：PutAway% 聚焦於兩好球的投球層級。也可對照 [[concepts/Plate-Discipline|本壘板紀律]]中的 SwStr%。

## 限制與常見誤區
- 分母是「投球」而非「打席」，打者在兩好球後的界外球會拉低比率；分球種時樣本數容易不足。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-PutAway-Percentage]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
