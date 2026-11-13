---
title: FanGraphs — Park Factors
type: source
tags:
  - sabermetrics
  - source
  - principles
  - methodology
sources:
  - "[[principles/Park-Factors]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# FanGraphs — Park Factors

- **作者**：Piper Slowinski
- **發布日期**：2010-02-27
- **原始檔案**：`raw/articles/Park Factors _ Sabermetrics Library.pdf`
- **原始連結**：[Park Factors | FanGraphs Sabermetrics Library](https://library.fangraphs.com/principles/park-factors/)

## 核心摘要
1. **影響球場效應的多重因素**：除了全壘打牆距離與高度外，海拔與空氣密度（如 Coors Field）、海洋氣流濕度（如 Petco Park）、氣溫與看台結構都會大幅改變球的飛行距離，因此「場地大 ≠ 投手球場」。
2. **FanGraphs 的實作方式**：採用 **5 年回歸（5-year regressed）** 與**加法模型（Additive Method）**，以 `100` 為聯盟平均。由於球員只有一半（81 場）在主場出賽，網站顯示的數字已先減半（例如顯示 `105` 代表該球場實際得分環境高於平均 10%，減半後對整季數據加權影響為 +5%）。
3. **單一球場係數的盲點**：同一個球場對不同打擊型態與左右打的影響極不相同（例如 Target Field 整體偏打者有利，但對左打全壘打極度不友善；PNC Park 對右打拉打全壘打不友善，但若套用在反方向開轟為主的右打者身上則會過度補償）。

## 關聯維基頁面
- [[principles/Park-Factors|球場校正係數（Park Factors）]]
- [[metrics/wRC+|wRC+]] / [[metrics/ERA-|ERA-]] / [[metrics/FIP-|FIP-]]
