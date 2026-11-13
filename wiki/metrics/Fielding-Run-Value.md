---
title: Fielding Run Value（FRV，守備得分價值）
type: metric
tags:
  - sabermetrics
  - fielding
  - statcast
  - run-value
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Fielding Run Value（FRV，守備得分價值）

## 一句話定義
**Fielding Run Value（FRV）** 是 Statcast 的「總守備價值」：把範圍、傳球、框球、阻擋、雙殺等不同量表的守備表現，全部換算成**相對於平均球員所省下的失分**。

## 計算方式與核心邏輯
各元件先以各自量表計算，再依下表換算為得分：
| 元件 | 換算率 |
|---|---|
| [[metrics/OAA|OAA]]（範圍） | 外野 1 out = **0.9 分**；內野 1 out = **0.75 分** |
| Fielder Throwing Runs（野手傳球） | 1 = 1 分 |
| Catcher Blocking（捕手擋球） | 1 block saved = **0.25 分** |
| [[metrics/Catcher-Framing|Catcher Framing]] | 1 strike saved = **0.125 分** |
| Catcher Throwing（捕手阻殺） | 1 SB prevented = **0.65 分** |
| Double Plays（雙殺） | 1 DP added = **0.4 分** |

統一為得分量表後，才能跨守位（捕手 vs 外野 vs 內野）比較。

## 基準值與判讀區間
- **0 = 聯盟平均**；正值優於平均、負值低於平均。
- **2025 前段班**：Patrick Bailey（C）**+31**（框球 +25、阻殺 +5、擋球 +1）；Pete Crow-Armstrong（CF）**+21**（OAA +19、臂力 +3）；Bobby Witt Jr.（SS）**+20**（OAA +18、雙殺 +2）。

## 演進脈絡與相關指標
- 在概念上對應 FanGraphs 的 [[metrics/UZR|UZR]]／[[metrics/DRS|DRS]] 守備得分與 [[metrics/Def|Def]]，但原文中 FRV 只與「平均球員」比較、未提及守位調整（[[principles/Positional-Adjustment|Positional Adjustment]]），因此不宜視為 Def 的直接替代（推論，非原文明述）。
- 「得分即共通貨幣」的邏輯與 [[principles/Linear-Weights|線性權重]] 一致。

## 限制與常見誤區
- 各元件換算率是固定平均值，忽略比賽情境。
- 只涵蓋 2018 年起（框球 2015–17 僅有全季層級）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
