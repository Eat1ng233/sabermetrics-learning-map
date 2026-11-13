---
title: Perceived Velocity（PV，體感球速）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - pitch-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Perceived-Velocity]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Perceived Velocity（PV，體感球速）

## 一句話定義
**Perceived Velocity（PV）** 嘗試量化「這顆球在打者眼中有多快」：結合實際 [[metrics/Velocity|球速]] 與投手出手點（[[metrics/Extension|Extension]]）。

## 計算方式與核心邏輯
- 同樣 95 mph 的速球，出手點在投手板前 7 呎會比 6 呎更早抵達打者。
- 先取得 MLB 平均 Extension 作為基準：
  - 出手點**在平均之後** → PV **低於**實際球速。
  - 出手點**在平均之前** → PV **高於**實際球速。

## 基準值與判讀區間
- 例：93 mph 的速球若 PV 達 96 mph，就能解釋為何打者常揮棒落後。
- 身材高、臂展長的投手出手點較接近本壘，PV 通常較高。

## 演進脈絡與相關指標
- 是 Velocity 的延伸；與 [[metrics/Stuff+|Stuff+]] 等模型同樣將「球速 + 出手延伸」視為球威組成。

## 限制與常見誤區
- 投球不只球速：尤其是**變化球**，PV 不一定能反映成效。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Perceived-Velocity]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
