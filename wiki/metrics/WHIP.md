---
title: WHIP（Walks plus Hits per Inning Pitched）
type: metric
tags:
  - sabermetrics
  - pitching
  - whip
sources:
  - "[[sources/2010-02-17-FanGraphs-WHIP]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# WHIP（Walks plus Hits per Inning Pitched，每局被上壘率）

## 一句話定義
**WHIP** 衡量投手平均每一局（IP）被擊出安打加上投出保送讓對手上壘的人數。

## 計算公式
$$\text{WHIP} = \frac{BB + H}{IP}$$

## 基準值與判讀區間
頂尖 `1.00`、優秀 `1.10`、高於平均 `1.20`、平均 `1.30`、低於平均 `1.40`、欠佳 `1.50`、極差 `1.60`。

## 優勢與限制
- **優勢**：計算極簡單、受單一失分序列運氣影響比 [[metrics/ERA|ERA]] 小（一場守備失靈較不易徹底摧毀 WHIP）。
- **兩大缺陷**：以局數 `IP`（而非面對打席 `BF`）為分母，且將「四壞保送」與「全壘打」視為等價。進階分析建議改用被上壘率（OBP Against）或被加權上壘率（wOBA Against）。

## 參考來源
- [[sources/2010-02-17-FanGraphs-WHIP]]
