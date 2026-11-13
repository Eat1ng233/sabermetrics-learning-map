---
title: RE24 — FanGraphs 24 情境得分期望值專題
type: source
tags:
  - sabermetrics
  - re24
  - run-expectancy
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# RE24 — FanGraphs 24 情境得分期望值專題

- **作者**：Neil Weinberg
- **發表日期**：2014-07-30
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[RE24 | Sabermetrics Library](https://library.fangraphs.com/misc/re24/)
- **本地檔案**：`raw/articles/RE24 _ Sabermetrics Library.pdf`

## 核心摘要
1. **定義與公式**：追蹤每次打席或跑壘事件對 24 種壘包出局狀態得分期望值的改變：$\text{RE24} = \text{RE}_{\text{End}} - \text{RE}_{\text{Beginning}} + \text{Runs Scored}$，聯盟平均為 `0`，打者與投手正負完全鏡像（投手正值代表守下更多分）。
2. **情境相依（Context-Dependent）**：滿壘二壘安打（約 `+2.5` 分）與兩出局壘上無人二壘安打（約 `+0.2` 分）獲得不同評價，但比 `RBI` 公平，不會單純獎勵常在有人上壘時打擊的人。
3. **對後援投手的獨特價值**：能合理分配「承接壘上跑者」的失分責任（例如滿壘零出局登板全數守住可得 `+2.282` RE24，在 ERA 上卻與失三分無異）。
4. **限制**：不考量局數與比數差距、預測力不如 `wRAA` 等情境中立指標，且將所有守備結果皆記在投手帳上。

## 更新與建立的頁面
- [[metrics/RE24|RE24]]
