---
title: Active Spin（有效轉速比例）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - pitch-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Active-Spin]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Active Spin（有效轉速比例）

## 一句話定義
**Active Spin** 是投球轉速中**真正對球路位移有貢獻**的比例。

## 計算方式與核心邏輯
- 並非所有轉速都會產生位移：像橄欖球或子彈那樣沿前進方向旋轉（陀螺旋，gyro spin）時，**100% 為 Inactive Spin**。
- 投手出手時手腕越像丟橄欖球般轉動，有效轉速越會轉為無效轉速。
- 純上旋（topspin）或純下旋（backspin）→ **100% Active Spin**；帶側旋時，有效位移部分向上下、部分向左右分配——都屬 Active Spin。

## 基準值與判讀區間
- 2019：Rich Hill 曲球 **100%**；四縫線速球 Justin Verlander **98.5%** 居首。

## 演進脈絡與相關指標
- 修正 [[metrics/Spin-Rate|Spin Rate]] 的盲點：同樣 2,500 rpm，有效比例不同，[[metrics/Pitch-Movement|Pitch Movement]] 便不同。
- 是 [[metrics/Stuff+|Stuff+]]、[[metrics/PitchingBot|PitchingBot]] 等物理投球模型的重要特徵來源。

## 限制與常見誤區
- 原文僅以曲球與四縫線舉例；對於刻意利用陀螺旋的球種（如部分滑球），高 Active Spin 是否較佳原文未論及（延伸思考，待其他來源驗證）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Active-Spin]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
