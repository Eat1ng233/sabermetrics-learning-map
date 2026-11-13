---
title: wGDP（Weighted Grounded into Double Play Runs）
type: metric
tags:
  - sabermetrics
  - baserunning
  - hitting
  - wgdp
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2015-03-26-FanGraphs-wGDP]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# wGDP（Weighted Grounded into Double Play Runs）

## 一句話定義
**wGDP** 衡量打者在雙殺機會（兩出局前一壘有人）中，因擊出少於（或多於）聯盟平均的滾地雙殺打，為球隊守住（或損失）的得分數。

## 邏輯與基準
- 由於 [[metrics/wOBA|wOBA]] 只計算打者自己製造的出局，wGDP 補上「讓壘上跑者也一起出局」的額外得分代價（不含平飛球雙殺，亦不校正打者左右打與球落點）。
- 影響幅度較小：頂尖 `+2.0`、優秀 `+1.5`、高於平均 `+1.0`、平均 `0`、低於平均 `-0.5`、欠佳 `-1.0`、極差 `-2.5`。納入 [[metrics/BsR|BsR]] 與 [[metrics/WAR|WAR]]。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2015-03-26-FanGraphs-wGDP]]
