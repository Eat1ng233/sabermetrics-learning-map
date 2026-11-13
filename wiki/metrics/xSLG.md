---
title: xSLG（Expected Slugging Percentage，預期長打率）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - statcast
  - expected-stats
sources:
  - "[[sources/2026-11-13-MLB-Statcast-xSLG]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# xSLG（Expected Slugging Percentage，預期長打率）

## 一句話定義
**Expected Slugging Percentage（xSLG）** 依擊球品質估計打者「應得」的長打率。

## 計算方式與核心邏輯
1. 依 [[metrics/Exit-Velocity|EV]]、[[metrics/Launch-Angle|LA]]（topped／weakly hit 的球自 2019 起加入 [[metrics/Sprint-Speed|Sprint Speed]]），給每顆擊球**一壘、二壘、三壘、全壘打的機率**（基於 2015 年以來同類擊球）。
2. 將機率代入長打率公式：
$$\text{xSLG} = \frac{P(1B) + 2P(2B) + 3P(3B) + 4P(HR)}{AB}\ \text{（逐球加總）}$$
3. 投手亦可計算 xSLG against。

## 演進脈絡與相關指標
- 對應 [[metrics/SLG|SLG]]；與 [[metrics/xBA|xBA]] 相減可得「預期純長打率（xISO）」的概念（對應 [[metrics/ISO|ISO]]）。
- 同系列：[[metrics/xwOBA|xwOBA]]、[[metrics/xERA|xERA]]。

## 限制與常見誤區
- 沿用 SLG 的線性壘打權重（1:2:3:4），延續 SLG 高估全壘打、低估一壘安打相對價值的缺陷（見 [[metrics/SLG|SLG]]）；更精確請看 xwOBA。
- 同樣不含擊球方向與球場。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-xSLG]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
