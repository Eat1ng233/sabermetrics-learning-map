---
title: wSB（Weighted Stolen Base Runs，加權盜壘得分）
type: metric
tags:
  - sabermetrics
  - baserunning
  - wsb
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2013-02-10-FanGraphs-wSB]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# wSB（Weighted Stolen Base Runs，加權盜壘得分）

## 一句話定義
**wSB** 衡量球員透過盜壘成功（SB）與盜壘失敗（CS），相較於聯盟平均在相同上壘機會下為球隊多貢獻（或損失）的得分數。

## 計算公式與基準
$$\text{wSB} = (SB \times \text{runSB}) + (CS \times \text{runCS}) - (\text{lgwSB} \times (1B + BB + HBP - IBB))$$

- $\text{runSB} = 0.2$；$\text{runCS} = -(2 \times \text{RunsPerOut} + 0.075)$。
- **損益平衡法則**：盜壘成功數至少需為失敗數的 **2 倍（約 67% 成功率）**才不致虧損；全職球員單季多在 `-3` 至 `+6` 分（現代極限約 `+15` 分）。
- **限制**：情境中立（不考量比數或捕手臂力），且 1950 年代中期前缺乏完整 CS 紀錄。與 [[metrics/UBR|UBR]]、[[metrics/wGDP|wGDP]] 組成 [[metrics/BsR|BsR]]。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2013-02-10-FanGraphs-wSB]]
