---
title: SD（Shutdowns，強勢關門）
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

# SD（Shutdowns，強勢關門）

## 一句話定義
**SD** 是用來取代傳統「救援成功（Save）」與「中繼成功（Hold）」的後援投手累積指標：只要後援投手單場登板貢獻 **$\text{WPA} \ge +0.06$**，即獲得 1 次 Shutdown。

## 設計邏輯與判讀區間
- 不受限於終結者角色或僵化的救援規則，中繼投手在七、八局高壓情境拆彈同樣能累積 SD；`+0.06` 門檻使頂尖終結者/佈局投手單季約累積 **35–40+ 次** SD，與傳統救援/中繼成功尺度接近。
- **參考區間**：頂尖 `40`、優秀 `35`、高於平均 `25`、平均 `20`、低於平均 `15`、欠佳 `10`、極差 `5`。
- **限制**：`+0.07` 與 `+0.40` WPA 皆只計 1 次 SD，且底層為 [[concepts/Win-Expectancy|WE]]（未考量對手打序強弱）。常與 [[metrics/MD|MD（Meltdowns）]] 搭配檢視（優秀後援投手的 SD/MD 比值高）。

## 參考來源
- [[sources/2011-04-06-FanGraphs-SD-MD]]
