---
title: wRC+（Weighted Runs Created Plus）
type: metric
tags:
  - sabermetrics
  - hitting
  - park-adjusted
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# wRC+（Weighted Runs Created Plus，加權得分創造值＋）

## 一句話定義
**wRC+** 是目前衡量打擊表現**最全面的率值指標（Rate Statistic）**，它在 [[metrics/wOBA|wOBA]] 精準加權各進攻事件的基礎上，進一步針對**球場效應（Park）與聯盟環境（League）**進行校正。

## 核心邏輯與優勢
- 單純比較不同時代或不同主場的打者時，原始 [[metrics/wOBA|wOBA]] 會受到「打者天堂／投手球場」以及當季聯盟整體進攻環境的影響。
- wRC+ 透過標準化處理，讓不同聯盟（如美聯與國聯）、不同主場（如 Coors Field 與一般球場）甚至不同年份的打者可以直接放在同一基準線上比較。

## 相關指標
- **[[metrics/wOBA|wOBA]]**：wRC+ 的計算底層基礎，提供各打擊事件的真實得分權重。
- **wRC（Weighted Runs Created）**：未經球場與聯盟標準化的累積得分創造估計值。
- **wRAA（Weighted Runs Above Average）**：相對於聯盟平均的得分貢獻值。

## 待補充細節
- 具體數學公式（wRAA/PA 與聯盟平均 wRC/PA 的換算式）及尺度基準（100 為聯盟平均，每多 1 點代表高於平均 1%）待匯入 wRC+ 專文後補齊驗證。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
