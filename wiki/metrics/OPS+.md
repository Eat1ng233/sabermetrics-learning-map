---
title: OPS+（On-Base Plus Slugging Plus）
type: metric
tags:
  - sabermetrics
  - hitting
  - ops
  - park-adjusted
sources:
  - "[[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# OPS+（On-Base Plus Slugging Plus）

## 一句話定義
**OPS+** 是將 [[metrics/OPS|OPS]] 針對**球場效應（Park Effects）與聯盟進攻環境**進行標準化校正後的指標，以 **100 作為聯盟平均**，方便跨年份與跨球隊比較打者表現。

## 判讀基準與特性
- **100 為聯盟平均**：每高於或低於 100 一點，代表該打者的調整後 OPS 高於或低於聯盟平均 **1%**（例如 `OPS+ = 90` 代表低於聯盟平均 10%）。
- **跨時代與跨主場比較**：修正了 [[metrics/OPS|OPS]] 無法直接比較不同進攻年代（如類固醇時代 vs. 投手年）與極端主場（如 Coors Field）的缺點。
- **資料庫歸屬**：OPS+ 由 **Baseball-Reference** 計算並收錄；[[entities/FanGraphs|FanGraphs]] 站內不提供 OPS+，而是建議改用底層權重更精確的 [[metrics/wRC+|wRC+]]。

## 限制
- 由於底層仍建立在 OPS 的架構上，依然繼承了 OPS 對 [[metrics/OBP|OBP]] 與 [[metrics/SLG|SLG]] 採 1:1 等權重（而非 ~1.8:1）的輕微偏差。

## 參考來源
- [[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus]]
