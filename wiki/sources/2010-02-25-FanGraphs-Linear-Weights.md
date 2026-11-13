---
title: FanGraphs — Linear Weights
type: source
tags:
  - sabermetrics
  - source
  - principles
  - methodology
sources:
  - "[[principles/Linear-Weights]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# FanGraphs — Linear Weights

- **作者**：Piper Slowinski
- **發布日期**：2010-02-25
- **原始檔案**：`raw/articles/Linear Weights _ Sabermetrics Library.pdf`
- **原始連結**：[Linear Weights | FanGraphs Sabermetrics Library](https://library.fangraphs.com/principles/linear-weights/)

## 核心摘要
1. **線性權重（Linear Weights）的目標**：利用 24 種壘包與出局數情境的**得分期望值矩陣（Run Expectancy Matrix）**，量化單一打擊事件（BB、HBP、1B、2B、3B、HR、Out）對得分期望的平均貢獻，解決傳統打擊率把所有安打等價看待的缺陷。
2. **完整推導四步驟（以 2015 wOBA 為例）**：
   - **步驟一**：計算各事件相對於平均打席的得分期望變化（如 BB +0.29、HBP +0.31、1B +0.44、2B +0.74、3B +1.01、HR +1.39、Out -0.26）。
   - **步驟二**：將出局數平移歸零（全部加上 `+0.26`），得到相對於出局的權重（BB 0.55、HBP 0.57、1B 0.70、2B 1.00、3B 1.27、HR 1.65）。
   - **步驟三**：依該權重計算聯盟平均初步值（2015 年為 `0.250`）。
   - **步驟四**：乘以 `wOBA Scale`（$\frac{0.313}{0.250} = 1.251$）對齊聯盟 OBP 量尺，即得最終 [[metrics/wOBA|wOBA]] 權重（[[metrics/FIP|FIP]] 則改為將場內球歸零）。
3. **適用限制**：屬於針對特定母體環境的「一體適用平均估計值」，在極端情境下未必完全反映真實邊際價值。

## 關聯維基頁面
- [[principles/Linear-Weights|線性權重（Linear Weights）]]
- [[metrics/RE24|RE24]] / [[metrics/wOBA|wOBA]] / [[metrics/FIP|FIP]]
