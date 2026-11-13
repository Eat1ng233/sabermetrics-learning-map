---
title: Velocity（VELO，球速）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - pitch-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Velocity]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Velocity（VELO，球速）

## 一句話定義
**Velocity** 是一顆投球從出手到通過本壘之間任一點的**最高速度**（mph），也是評估投手最常用的工具之一。

## 計算方式與核心邏輯
- Statcast 可取得飛行中任意點的速度，而最高速依物理**必然出現在出手點**。

## 演進脈絡與相關指標
- **PITCHf/x 時代的差異**：Statcast 之前，各球場的投球追蹤由 [[entities/PITCHf-x|PITCHf/x]] 負責，其回報的是距本壘後尖端 **50 呎**處的速度；為接近實際出手點，部分單位改用由 50 呎資料推估的 **55 呎**速度。Statcast 改以最高速（出手點）回報，量測更精確——跨時代比較球速時需留意口徑。
- 延伸：[[metrics/Perceived-Velocity|Perceived Velocity]]（加入 [[metrics/Extension|Extension]]）；[[metrics/Pitch-Movement|Pitch Movement]] 的平均基準以 ±2 mph 分組；為 [[metrics/Stuff+|Stuff+]] 最重要的輸入之一。

## 限制與常見誤區
- 球速不等於球威：同速球的位移、轉速與出手延伸可能差異極大。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Velocity]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
