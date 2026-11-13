---
title: wOBA（Weighted On-Base Average）
type: metric
tags:
  - sabermetrics
  - hitting
  - linear-weights
  - woba
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-15-FanGraphs-wOBA]]"
  - "[[sources/2026-11-13-MLB-Statcast-xwOBA]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# wOBA（Weighted On-Base Average，加權上壘率）

## 一句話定義
由 Tom Tango 創立（收錄於《The Book》），**wOBA** 依據每個打擊事件（非故意保送、觸身球、一壘/二壘/三壘安打、全壘打）實際的**得分價值（Linear Weights）**進行加權，並將尺度對齊聯盟平均 [[metrics/OBP|OBP]]，是評估打擊效率最精準的基礎率值指標。

## 計算公式（以 2013 年權重為例）
$$\text{wOBA} = \frac{0.690\cdot uBB + 0.722\cdot HBP + 0.888\cdot 1B + 1.271\cdot 2B + 1.616\cdot 3B + 2.101\cdot HR}{AB + BB - IBB + SF + HBP}$$

- 各事件權重每年隨聯盟得分環境微調，確保聯盟平均 wOBA 等於聯盟平均 OBP。
- **換算為累積得分（[[metrics/wRAA|wRAA]]）**：$\text{wRAA} = \frac{\text{wOBA} - \text{lgwOBA}}{\text{wOBA Scale}} \times PA$。
- **經驗法則**：每 **600 打席**高出聯盟平均 `.020` wOBA，約等於多貢獻 **10 分**（約 **+1 勝**）。

## 基準值與判讀區間（聯盟平均約 `.320`）

| 評級 | wOBA |
| :--- | :---: |
| 頂尖（Excellent） | `.400` |
| 優秀（Great） | `.370` |
| 高於平均（Above Average） | `.340` |
| 聯盟平均（Average） | `.320` |
| 低於平均（Below Average） | `.310` |
| 欠佳（Poor） | `.300` |
| 極差（Awful） | `.290` |

## 演進脈絡與限制
- 修正了 [[metrics/AVG|AVG]] 忽略保送長打、[[metrics/OBP|OBP]] 等價看待上壘、[[metrics/SLG|SLG]] 1:2:3:4 假設與 [[metrics/OPS|OPS]] 1:1 加總（忽略 OBP 影響力約為 SLG 的 1.8 倍）的缺陷。
- 現今 FanGraphs 的 wOBA 已移除盜壘與盜壘失敗（改歸 [[metrics/wSB|wSB]] 與 [[metrics/UBR|UBR]]），純粹反映本壘板產出。
- **限制**：為情境中立且**未經球場校正**，跨球場/跨聯盟比較應改用 [[metrics/wRC+|wRC+]]。

## Statcast 對應指標
- **Statcast 預期版**：[[metrics/xwOBA|xwOBA]] 以擊球初速與仰角取代實際擊球結果、沿用 wOBA 權重與量表，用來區分技能與運氣；換算為 ERA 量表即 [[metrics/xERA|xERA]]。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-15-FanGraphs-wOBA]]
- [[sources/2026-11-13-MLB-Statcast-xwOBA]]
