---
title: Hard%（Hard Contact Percentage，強勁擊球比例）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - quality-of-contact
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2015-05-10-FanGraphs-Quality-of-Contact]]"
  - "[[sources/2026-11-13-MLB-Statcast-Hard-Hit-Rate]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# Hard%（Hard Contact Percentage，強勁擊球比例）

## 一句話定義
**Hard%** 衡量打者擊出（或投手被擊出）的場內球中，經 BIS 依據滯空時間、落點與軌跡判定為「強勁擊球」的比例。

## 基準值與判讀區間
與 [[metrics/Soft%|Soft%]]、[[metrics/Med%|Med%]] 合計為 100%：
- **聯盟平均約 `30%`**（頂尖打者 `40%`、優秀 `38%`、高於平均 `35%`、低於平均 `28%`、欠佳 `23%`、極差 `20%`）。

## 實務應用與限制
- 用來檢驗打者或投手 [[metrics/BABIP|BABIP]] 的「運氣方向」（例如某打者短期成績低迷但 `Hard%` 高達 40%，代表可能只是運氣不佳）。
- 由於 BIS 演算法未公開且依賴影片球探標記滯空與落點，存在一定測量誤差，Statcast 擊球初速（Exit Velocity）普及後可提供更精確的衡量。

## Statcast 對應指標
> [!warning] 定義差異：FanGraphs Hard% vs. Statcast Hard-hit Rate
> 本頁 Hard% 為 BIS 演算法分類（聯盟平均約 30%）；Statcast [[metrics/Hard-Hit-Rate|Hard-hit Rate]] 則以擊球初速 ≥95 mph 為門檻（來源：[[sources/2026-11-13-MLB-Statcast-Hard-Hit-Rate]]）。兩者數值不可直接互換。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2015-05-10-FanGraphs-Quality-of-Contact]]
- [[sources/2026-11-13-MLB-Statcast-Hard-Hit-Rate]]
