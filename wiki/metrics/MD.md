---
title: MD（Meltdowns，砸鍋放火）
type: metric
tags:
  - sabermetrics
  - pitching
  - relievers
  - wpa
sources:
  - "[[sources/2011-04-06-FanGraphs-SD-MD]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# MD（Meltdowns，砸鍋放火）

## 一句話定義
**MD** 是用來取代傳統「救援失敗（Blown Save）」的後援投手累積指標：只要後援投手單場登板導致球隊 **$\text{WPA} \le -0.06$**，即記 1 次 Meltdown。

## 設計邏輯與判讀區間
- 捕捉所有後援投手（包含非救援情境下的終結者與中繼投手）讓球隊勝率大幅滑落的糟糕登板。
- **參考區間**（越少越好）：頂尖 `2`、優秀 `4`、高於平均 `6`、平均 `8`、低於平均 `10`、欠佳 `12`、極差 `15`。
- 常與 [[metrics/SD|SD（Shutdowns）]] 並用。

## 參考來源
- [[sources/2011-04-06-FanGraphs-SD-MD]]
