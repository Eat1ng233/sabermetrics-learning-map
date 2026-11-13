---
title: WAR for Pitchers — FanGraphs 投手 WAR 計算詳解
type: source
tags:
  - sabermetrics
  - war
  - pitching
  - fip
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# WAR for Pitchers — FanGraphs 投手 WAR 計算詳解

- **作者**：Piper Slowinski（後經 Neil Weinberg 補充）
- **發表日期**：2012-03-28
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[WAR for Pitchers | Sabermetrics Library](https://library.fangraphs.com/war/calculating-war-pitchers/)
- **本地檔案**：`raw/articles/WAR for Pitchers _ Sabermetrics Library.pdf`

## 核心摘要
1. **以 `ifFIP` 為核心**：將內野高飛球（`IFFB`）視同三振納入計算，先轉至 `RA9` 尺度（`FIPR9`），再經專屬 FIP Park Factor 校正得到 `pFIPR9`。
2. **動態每勝得分（dRPW）**：因投手本人投球表現會直接改變自己上場時的得分環境，故依先發/吃局數比例加權計算專屬的 `dRPW`。
3. **先發與後援差異**：替補水準公式為 `0.03*(1-GS/G) + 0.12*(GS/G)`（純先發 `0.12`、純後援 `0.03` 勝/場）；後援投手另乘以槓桿乘數 `(1 + gmLI)/2`（反映牛棚階級連鎖效應 Chaining）。
4. **全聯盟校準**：最後乘上每年約 `-0.0007` 至 `-0.0012` 的 `WARIP * IP`，確保全聯盟投手總 WAR 精確加總為 `430`。

## 更新與建立的頁面
- [[metrics/WAR|WAR（Wins Above Replacement）]]
