---
title: wSB — FanGraphs 加權盜壘得分專題
type: source
tags:
  - sabermetrics
  - baserunning
  - wsb
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# wSB — FanGraphs 加權盜壘得分專題

- **作者**：Matt Klaassen
- **發表日期**：2013-02-10
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[wSB | Sabermetrics Library](https://library.fangraphs.com/offense/wsb/)
- **本地檔案**：`raw/articles/wSB _ Sabermetrics Library.pdf`

## 核心摘要
1. **公式**：$\text{wSB} = (SB \times \text{runSB}) + (CS \times \text{runCS}) - (\text{lgwSB} \times (1B + BB + HBP - IBB))$，其中 `runSB = 0.2`、$\text{runCS} = -(2 \times \text{RunsPerOut} + 0.075)$（依該年得分環境變動）。
2. **損益門檻**：經驗法則為**盜壘成功數至少需為失敗數的兩倍（約 67% 以上成功率）**才能收支平衡。全職球員多落在 `-3` 至 `+6` 分，現代單季極限約 `+15` 分。
3. **限制**：情境中立、不考量球場或捕手阻殺實力；且 1950 年代中期以前缺乏完整 CS 紀錄。

## 更新與建立的頁面
- [[metrics/wSB|wSB（Weighted Stolen Base Runs）]]
