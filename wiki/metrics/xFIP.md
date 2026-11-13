---
title: xFIP（Expected Fielding Independent Pitching）
type: metric
tags:
  - sabermetrics
  - pitching
  - xfip
  - dips
sources:
  - "[[sources/2010-02-15-FanGraphs-xFIP]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# xFIP（Expected Fielding Independent Pitching）

## 一句話定義
由 Dave Studeman 開發，**xFIP** 是將 [[metrics/FIP|FIP]] 中的「實際被全壘打數」替換為「**被飛球數 × 聯盟平均飛球全壘打率（`lgHR/FB%`，約 9–10%）**」後的迴歸版 FIP，用來消除單季全壘打率的隨機雜訊。

## 計算公式
$$\text{xFIP} = \frac{13 \times (\text{Fly Balls} \times \text{lgHR/FB\%}) + 3 \times (BB + HBP) - 2 \times K}{IP} + \text{FIP Constant}$$

（註：因需 `HR/FB%` 數據，資料僅回溯至 2002 年。）

## 基準值與判讀區間
與 [[metrics/ERA|ERA]] 同尺度：頂尖 `2.90`、優秀 `3.20`、高於平均 `3.50`、平均 `3.80`、低於平均 `4.10`、欠佳 `4.40`、極差 `4.70`。

## FIP vs. xFIP 定位差異與限制
- **FIP 看「已產生的價值」**（用於計算 [[metrics/WAR|WAR]]，因為全壘打確實是投手丟的）；**xFIP 看「底層投球能力」**（與未來 ERA 相關性極高）。
- **限制**：未經球場/聯盟校正（需看 [[metrics/xFIP-|xFIP-]]）；且少數投手確實能長期維持高於或低於平均的 `HR/FB%`（例如滾地球投手通常 `HR/FB%` 較高），此時 xFIP 可能微幅低估或高估該投手。

## 參考來源
- [[sources/2010-02-15-FanGraphs-xFIP]]
