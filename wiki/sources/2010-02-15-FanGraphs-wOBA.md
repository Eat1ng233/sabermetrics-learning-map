---
title: wOBA — FanGraphs 加權上壘率專題
type: source
tags:
  - sabermetrics
  - hitting
  - woba
  - linear-weights
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# wOBA — FanGraphs 加權上壘率專題

- **作者**：Piper Slowinski
- **發表日期**：2010-02-15
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[wOBA | Sabermetrics Library](https://library.fangraphs.com/offense/woba/)
- **本地檔案**：`raw/articles/wOBA _ Sabermetrics Library.pdf`

## 核心摘要
1. **創始與理念**：由 Tom Tango 創立（收錄於《The Book》），依各打擊事件的實際得分價值給予線性權重（2013 年公式為 `(0.690×uBB + 0.722×HBP + 0.888×1B + 1.271×2B + 1.616×3B + 2.101×HR) / (AB + BB - IBB + SF + HBP)`），並將尺度對齊聯盟平均 `OBP`（約 `.320`）。
2. **換算 wRAA**：`wRAA = ((wOBA - lgwOBA) / wOBA Scale) × PA`；經驗法則為 **每 600 PA 多 20 個千分點（.020）wOBA 約等於高於平均 10 分（約 1 勝）**。
3. **重要說明**：現今 FanGraphs 的 wOBA 已移除盜壘與盜壘失敗（改歸 `wSB` / `UBR`），純粹衡量本壘板打擊產出；且為情境中立、未經球場校正（需球場校正請看 [[metrics/wRC+|wRC+]]）。

## 更新與建立的頁面
- [[metrics/wOBA|wOBA]]
