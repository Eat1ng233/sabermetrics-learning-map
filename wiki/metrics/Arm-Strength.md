---
title: Arm Strength（ARM，傳球臂力）
type: metric
tags:
  - sabermetrics
  - fielding
  - statcast
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Arm-Strength]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Arm Strength（ARM，傳球臂力）

## 一句話定義
**Arm Strength** 量化野手「傳球有多強」：單次play取該傳球的最高球速（mph），而最高速度依物理必然出現在出手瞬間。

## 計算方式與核心邏輯
- **單次play**：任一傳球的最大速度（出手點）。可評估外野助殺、捕手盜壘／牽制傳球、內野橫越鑽石的傳球。
- **季排行榜（max-effort 全力傳球平均，2020 年 Hawk-Eye 起）**：
  | 守位 | 採計樣本 | 上榜門檻 |
  |---|---|---|
  | 一壘手 | 前 1% 最快傳球平均 | ≥100 次傳球 |
  | 二壘、三壘、游擊 | 前 5% | ≥75 次 |
  | 外野手 | 前 10% | ≥50 次 |
  | 捕手 | 前 10%（列於 [[metrics/Pop-Time|Pop Time]] 排行榜） | — |
- 外野手常帶助跑出手，因此傳球速度可能**高於投手**在投手丘上的球速。

## 演進脈絡與相關指標
- 為 [[metrics/Fielding-Run-Value|FRV]] 中「Fielder Throwing Runs」與 [[metrics/Baserunning-Throwing-Value|Baserunning/Throwing Value]] 的物理基礎；捕手臂力是 [[metrics/Pop-Time|Pop Time]] 三要素之一。
- 對照 FanGraphs 體系中 [[metrics/UZR|UZR]] 的 ARM 成分與 [[metrics/DRS|DRS]] 的 rARM：前者以結果（助殺、壓制進壘）計價，Statcast 臂力則是純物理量測。

## 限制與常見誤區
- **臂力 ≠ 傳球價值**：準度與軌跡同樣重要——一記 90 mph 但彈地三次的外野回傳，每次觸地都會失速。
- 各守位採計比例與門檻不同，跨守位比較需謹慎。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Arm-Strength]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
