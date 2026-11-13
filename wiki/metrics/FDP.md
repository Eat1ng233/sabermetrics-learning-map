---
title: FDP（Fielding Dependent Pitching，守備相依投球指標群）
type: metric
tags:
  - sabermetrics
  - pitching
  - fdp
sources:
  - "[[sources/2013-06-10-FanGraphs-FDP]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# FDP（Fielding Dependent Pitching，守備相依投球指標群）

## 一句話定義
**FDP**（又稱 **FDP-Wins**）是一組用來量化「[[metrics/FIP|FIP]] 刻意忽略的其餘投球與失分面向」之指標群，代表投手實際失分勝場（[[metrics/RA9-Wins|RA9-Wins]]）與 FIP 勝場之間的差值。

## 核心關係與組件
$$\text{RA9-Wins} = \text{FIP-Wins} + \text{FDP-Wins}$$
$$\text{FDP-Wins} = \text{BIP-Wins} + \text{LOB-Wins}$$

1. **BIP-Wins**：衡量投手因對手場內球擊球率（[[metrics/BABIP|BABIP]]）高於或低於聯盟平均所多賺（或損失）的勝場（經球場與聯盟校正）。
2. **LOB-Wins**：衡量投手因殘壘率（[[metrics/LOB%|LOB%]]）高於或低於平均所增加的勝場（反映危機處理、控制跑者或得點圈投球等面向）。

## 限制與解讀
- **不只是守備**：FDP 雖名為「守備相依」，但實際上混雜了「**守備品質 + 投手控制弱擊球的真實技巧 + 隨機運氣**」，極難單純拆分。

## 參考來源
- [[sources/2013-06-10-FanGraphs-FDP]]
