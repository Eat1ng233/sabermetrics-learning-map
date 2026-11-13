---
title: Spin Rate（SR，轉速）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - pitch-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Spin-Rate]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Spin Rate（SR，轉速）

## 一句話定義
**Spin Rate** 衡量投球出手瞬間的轉速，單位為**每分鐘轉數（rpm）**。

## 計算方式與核心邏輯
- 轉速改變球的軌跡：同樣球速、同樣出手，轉速不同會落在不同位置。
  - **高轉速四縫線速球**：產生「上飄」錯覺——通過本壘時比同速低轉速速球高幾吋。
  - **高轉速曲球**：位移（break）較大。
  - **低轉速變速球／指叉球**：產生更多向下「翻滾（tumbling）」的效果。
- 例：「這顆球轉速 2,500 rpm」。

## 演進脈絡與相關指標
- 並非所有轉速都產生位移，見 [[metrics/Active-Spin|Active Spin]]；轉速 × 有效比例 × 球速 → [[metrics/Pitch-Movement|Pitch Movement]]。
- 是 [[metrics/Stuff+|Stuff+]]、[[metrics/PitchingBot|PitchingBot]] 的模型特徵之一。

## 限制與常見誤區
- 「轉速越高越好」只對部分球種成立；對變速球、指叉球反而是低轉速較有利。
- 原始轉速與球速高度相關，跨投手比較時可考慮以轉速/球速比觀察（原文未列，屬延伸思考）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Spin-Rate]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
