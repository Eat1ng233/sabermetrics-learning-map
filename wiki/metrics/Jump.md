---
title: Jump（外野起步）
type: metric
tags:
  - sabermetrics
  - fielding
  - statcast
  - outfield
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Jump]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Jump（外野起步）

## 一句話定義
**Jump** 回答「這名外野手在投手出手後前 3 秒，朝正確方向跑了幾呎？」——量化反應速度與路線直接程度。

## 計算方式與核心邏輯
| 成分 | 定義 | 直觀意義 |
|---|---|---|
| **Reaction** | 前 1.5 秒內任意方向移動呎數 | 第一步 |
| **Burst** | 接下來 1.5 秒移動呎數 | 加速能力 |
| **Route** | 3 秒內實際跑動距離 vs 直線路徑 | 路線效率 |

- 三成分均以「**高於或低於大聯盟平均的呎數**」呈現；每種play依方向、是否靠牆、滯空時間各有不同基準。

## 演進脈絡與相關指標
- 是 [[metrics/Catch-Probability|Catch Probability]] 與外野 [[metrics/OAA|OAA]] 的「原因拆解」：OAA 告訴你結果，Jump 告訴你起步好在哪。
- 路線部分與 [[metrics/Distance-Covered|DCOV]]／Route Efficiency 相關。

## 限制與常見誤區
- 季排行榜**只納入接殺機率 90% 以下（較難）的play**；例行飛球往往不需要「起步」或直線路徑。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Jump]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
