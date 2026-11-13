---
title: Pitch Type Linear Weights — FanGraphs 球種線性權重（Pitch Values）專題
type: source
tags:
  - sabermetrics
  - pitching
  - hitting
  - linear-weights
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Pitch Type Linear Weights — FanGraphs 球種線性權重專題

- **作者**：Piper Slowinski
- **發表日期**：2012-03-01
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[Pitch Type Linear Weights | Sabermetrics Library](https://library.fangraphs.com/offense/pitch-type-linear-weights/)
- **本地檔案**：`raw/articles/Pitch Type Linear Weights _ Sabermetrics Library.pdf`

## 核心摘要
1. **定義**：又稱 Pitch Values，依據每顆球造成的「球數（Count）得分期望值變化」將得分價值歸屬至該球種（累積版如 `wFB`、`wSL`；每百球標準化版如 `wFB/C`、`wSL/C`），正值代表對該球員（打者或投手）有利，`0` 為平均。
2. **重要限制**：為**描述性（Descriptive）指標而非預測性（Predictive）指標**（跨季相關性 `< 0.25`），且各球種之間存在配球交互相依性（好滑球也會拉高直球的 Pitch Value），不可直接等同於單一球種的純物理品質（物理品質請看 [[metrics/Stuff+|Stuff+]] 或 [[metrics/PitchingBot|PitchingBot]]）。

## 更新與建立的頁面
- [[concepts/Pitch-Type-Linear-Weights|球種線性權重（Pitch Type Linear Weights）]]
