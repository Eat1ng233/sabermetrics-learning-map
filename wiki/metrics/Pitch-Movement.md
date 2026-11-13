---
title: Pitch Movement（球路位移）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - pitch-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Pitch-Movement]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Pitch Movement（球路位移）

## 一句話定義
**Pitch Movement** 以英吋表示投球的水平與垂直位移，並更重要地以「**相對同類球的平均**」來呈現。

## 計算方式與核心邏輯
- 分別回報**水平位移（horizontal break）**與**垂直下墜（vertical drop）**。
- **含重力**：不同於部分網站扣除重力的「誘發位移」，Statcast 保留重力，以貼近實際肉眼觀感。
- **與平均比較**：因重力作用需要時間，慢球不應只因「有更多時間掉」就被視為更好。比較基準為同球種、球速 **±2 mph**、Extension 與出手點 **±0.5 呎** 的大聯盟投球。
- **四縫線速球**以「上飄（rise）」排名：速球不會真的上升，而是因高轉速與純下旋**比打者預期掉得少**，較易製造揮空。

## 基準值與判讀區間
| 案例 | 總位移 | 相對平均 | 解讀 |
|---|---|---|---|
| 2021 Dylan Cease 曲球（79.9 mph、2,754 rpm） | 下墜 61.7 吋 | **+8.6 吋** | 高轉速造成銳利下墜 |
| 2021 Adam Wainwright 曲球（73.4 mph） | 下墜 66.5 吋 | +3.0 吋 | 總量大是因為慢 6 mph |
| 2022 Seth Lugo 曲球 | 下墜 60.8 吋 | +8 吋（+15%） | 250+ 曲球中最佳 |
| 2019 Gerrit Cole／Justin Verlander 四縫線 | 下墜 10.9／10.7 吋 | **+2.9 吋上飄** | 1,000+ 四縫線中最佳 |
| 2022 Matt Brash 滑球 | — | 水平 **+10.2 吋** | 總量最大者為 Lou Trivino（16.8 吋） |
- 資料回溯至 **2017**。

## 演進脈絡與相關指標
- 位移的成因：[[metrics/Spin-Rate|Spin Rate]] × [[metrics/Active-Spin|Active Spin]] × [[metrics/Velocity|Velocity]]。
- 是 [[metrics/Stuff+|Stuff+]]、[[metrics/PitchingBot|PitchingBot]] 的核心特徵（相較於「位移 vs. 平均」，這些模型進一步考量與主力速球的差異）；結果端價值見 [[concepts/Pitch-Type-Linear-Weights|球種線性權重]]。

## 限制與常見誤區
- 原文指出其他來源的位移數字常「移除重力」；含重力的 Statcast 數值不宜與這類數據直接互比。
- 位移大不等於好球：還需看與其他球種的搭配、位置控制（[[metrics/Location+|Location+]]）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Pitch-Movement]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
