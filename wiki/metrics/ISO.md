---
title: ISO（Isolated Power，純長打率）
type: metric
tags:
  - sabermetrics
  - hitting
  - power
  - iso
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-15-FanGraphs-ISO]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# ISO（Isolated Power，純長打率）

## 一句話定義
**ISO** 衡量打者平均每個打數能擊出多少「額外壘包（Extra Bases）」，將純長打火力從一壘安打與打擊率中剝離出來。

## 計算公式
$$\text{ISO} = \text{SLG} - \text{AVG} = \frac{2B + 2\cdot 3B + 3\cdot HR}{AB}$$

## 基準值與判讀區間（聯盟平均約 `.140`）
頂尖 `.250`、優秀 `.200`、高於平均 `.170`、平均 `.140`、低於平均 `.120`、欠佳 `.100`、極差 `.080`。

## 穩定性與限制
- **穩定門檻**：約需 **550 個打席（PA）** 才具未來預測穩定性。
- **限制**：情境中立、**未經球場與聯盟校正**；且未依真實得分價值加權（如三壘安打價值並非二壘安打的 1.5 倍，評估整體價值應看 [[metrics/wOBA|wOBA]]）。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-15-FanGraphs-ISO]]
