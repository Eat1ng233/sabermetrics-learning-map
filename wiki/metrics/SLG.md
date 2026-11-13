---
title: SLG（Slugging Percentage，長打率）
type: metric
tags:
  - sabermetrics
  - hitting
  - basic-stats
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus]]"
  - "[[sources/2026-11-13-MLB-Statcast-xSLG]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# SLG（Slugging Percentage，長打率）

## 一句話定義
**SLG** 衡量打者平均每個「打數（AB）」所能擊出的總壘打數（Total Bases），用來評估打者的長打火力。

## 計算公式
$$\text{SLG} = \frac{\text{Total Bases}}{AB} = \frac{1B + 2\cdot 2B + 3\cdot 3B + 4\cdot HR}{AB}$$

## 限制與相關指標
- **線性壘打數假設**：SLG 假設二壘安打價值是一壘安打的 2 倍、全壘打是 4 倍，但實際上各安打類型的**真實得分價值（Run Value）**並非嚴格 1:2:3:4（[[metrics/wOBA|wOBA]] 即修正了這一點）。
- **忽略保送**：SLG 不包含四壞保送與觸身球，實務上常與 [[metrics/OBP|OBP]] 搭配或相加為 [[metrics/OPS|OPS]]；若要單獨觀察排除一壘安打後的純長打能力，則使用 [[metrics/ISO|ISO]]。

## Statcast 對應指標
- **Statcast 預期版**：[[metrics/xSLG|xSLG]] 將每顆擊球的一/二/三/全壘打機率代入 SLG 公式。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus]]
- [[sources/2026-11-13-MLB-Statcast-xSLG]]
