---
title: Extension（EXT，出手延伸）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - pitch-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Extension]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Extension（EXT，出手延伸）

## 一句話定義
**Extension** 量化投手的出手點**比投手板更靠近本壘多少呎**。

## 計算方式與核心邏輯
- 投手必須踩在投手板上（距本壘 **60 呎 6 吋**）開始投球動作，但實際出手點通常往前數呎；Extension 即此前移距離。
- 身材高、臂展長的投手通常 Extension 最長——能把球「握得更久」再放出。

## 基準值與判讀區間
- 較長的 Extension 等於縮短投打距離：可讓 **93 mph 的速球看起來像 96 mph**。

## 演進脈絡與相關指標
- [[metrics/Perceived-Velocity|Perceived Velocity]] 的核心輸入；也是 [[metrics/Stuff+|Stuff+]]、[[metrics/PitchingBot|PitchingBot]] 等投球模型的特徵之一。
- [[metrics/Pitch-Movement|Pitch Movement]] 的「平均」基準亦以相近 Extension 與出手點的球作比較。

## 限制與常見誤區
- 並非越長越好的單一指標，需與球速、位移、出手點高度等一併解讀。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Extension]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
