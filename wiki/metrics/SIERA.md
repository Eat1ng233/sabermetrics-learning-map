---
title: SIERA（Skill-Interactive ERA，技巧交互防禦率）
type: metric
tags:
  - sabermetrics
  - pitching
  - siera
  - park-adjusted
sources:
  - "[[sources/2011-07-27-FanGraphs-SIERA]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# SIERA（Skill-Interactive ERA，技巧交互防禦率）

## 一句話定義
**SIERA** 是經球場校正的複雜 ERA 估計指標，與 [[metrics/FIP|FIP]]、[[metrics/xFIP|xFIP]] 不同之處在於它**不忽略場內球（Balls in Play）**，而是透過三振、保送與擊球型態的交互作用更細膩地解釋投手為何成功。

## 核心機制與棒球洞見
1. **三振比 FIP 想的更好**：高三振率投手往往能製造更弱的擊球接觸，從而壓低 [[metrics/BABIP|BABIP]] 與全壘打率，且在雙殺情境更能刻意製造滾地球。
2. **低保送的複利優勢**：保送率極低的投手，單次保送的失分代價遠低於高保送投手。
3. **擊球型態的交互效應**：滾地球雖然較易穿過內野形成安打，但若投手滾地球率極高（如 `55%` vs `45%`），守備佈陣與內野手更容易處理並策動雙殺（尤其當他保送又多時）；而高飛球率投手的 `HR/FB%` 反而普遍較低。

## 基準值與判讀區間
與 [[metrics/ERA|ERA]] 同尺度（後援投手平均比先發低約 **`0.37`**）：頂尖 `2.90`、優秀 `3.25`、高於平均 `3.75`、平均 `3.90`、低於平均 `4.20`、欠佳 `4.50`、極差 `5.00`。

## 定位與限制
- 在所有傳統 ERA 估計指標中預測準確度最高（略優於 xFIP），但本質仍是回顧型指標而非結合多年加權與年齡曲線的正式預測系統。

## 參考來源
- [[sources/2011-07-27-FanGraphs-SIERA]]
