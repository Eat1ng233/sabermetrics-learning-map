---
title: WAR for Position Players — FanGraphs 野手 WAR 計算詳解
type: source
tags:
  - sabermetrics
  - war
  - hitting
  - defense
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# WAR for Position Players — FanGraphs 野手 WAR 計算詳解

- **作者**：Piper Slowinski
- **發表日期**：2012-04-02
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[WAR for Position Players | Sabermetrics Library](https://library.fangraphs.com/war/war-position-players/)
- **本地檔案**：`raw/articles/WAR for Position Players _ Sabermetrics Library.pdf`

## 核心摘要
1. **六大組件公式**：`WAR = (Batting Runs + BsR + Fielding Runs + Positional Adjustment + League Adjustment + Replacement Runs) / RPW`。
2. **守備位置調整（每 162 守備場次，每場 9 局）**：C `+12.5`、1B `-12.5`、2B `+2.5`、3B `+2.5`、SS `+7.5`、LF `-7.5`、CF `+2.5`、RF `-7.5`、DH `-17.5`。
3. **簡化 RPW 公式**：Tom Tango 提出 `RPW = 9 * (MLB R / MLB IP) * 1.5 + 3`（約 9–10 分），與 Pythagpat 誤差僅約 `0.02`。
4. **替補水準分配**：`Replacement Level Runs = (570 * (MLB Games / 2430)) * (RPW / lgPA) * PA`，對應全聯盟野手合計 `570 WAR`。

## 更新與建立的頁面
- [[metrics/WAR|WAR（Wins Above Replacement）]]
