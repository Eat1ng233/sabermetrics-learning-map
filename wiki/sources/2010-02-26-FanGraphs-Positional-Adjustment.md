---
title: FanGraphs — Positional Adjustment
type: source
tags:
  - sabermetrics
  - source
  - principles
  - war
  - fielding
sources:
  - "[[principles/Positional-Adjustment]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# FanGraphs — Positional Adjustment

- **作者**：Piper Slowinski
- **發布日期**：2010-02-26
- **原始檔案**：`raw/articles/Positional Adjustment _ Sabermetrics Library.pdf`
- **原始連結**：[Positional Adjustment | FanGraphs Sabermetrics Library](https://library.fangraphs.com/misc/war/positional-adjustment/)

## 核心摘要
1. **為何需要守備位置調整**：[[metrics/UZR|UZR]] 與 [[metrics/DRS|DRS]] 等守備指標是將球員與「同守位聯盟平均」比較，但平均游擊手與平均一壘手的守備難度與處理球量天差地遠。必須透過位置調整將所有守位放到同一條基準線上，才能算出跨守位可比較的 [[metrics/Def|Def]] 與 [[metrics/WAR|WAR]]。
2. **FanGraphs 整季標準數值（每 1,458 守備局 / 162 場）**：
   - `C`: **+12.5**、`SS`: **+7.5**、`2B / 3B / CF`: **+2.5**
   - `LF / RF`: **-7.5**、`1B`: **-12.5**、`DH`: **-17.5**
   - 多守位球員依各守位實際守備局數按比例加總。
3. **方法論限制**：數值源自過去轉換守位球員的歷史表現研究，存在「非隨機分配與轉換偏差」（例如左撇子不守游擊，或 DH 因未上場守備導致打擊節奏受影響可能使 `-17.5` 略嫌嚴苛），因此應視為「良好指引」而非絕對定律。

## 關聯維基頁面
- [[principles/Positional-Adjustment|守備位置調整（Positional Adjustment）]]
- [[metrics/Def|Def]] / [[metrics/UZR|UZR]] / [[metrics/DRS|DRS]] / [[metrics/WAR|WAR]]
