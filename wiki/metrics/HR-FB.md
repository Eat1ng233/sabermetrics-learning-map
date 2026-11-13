---
title: HR/FB（Home Run to Fly Ball Rate，飛球全壘打率）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - hr-fb
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-19-FanGraphs-HR-FB]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# HR/FB（Home Run to Fly Ball Rate，飛球全壘打率）

## 一句話定義
**HR/FB** 衡量打者擊出（或投手被擊出）的總飛球（FB）中，最終飛出牆外形成全壘打（HR）的比例（分母統一取飛球數 `FB`）。

## 計算公式與基準
$$\text{HR/FB} = \frac{HR}{FB}$$

- **打者參考區間**（聯盟平均約 `9.5%`）：頂尖 `20.0%`、優秀 `15.0%`、高於平均 `12.5%`、平均 `9.5%`、低於平均 `7.5%`、欠佳 `5.0%`、極差 `1.0%`。

## 實務應用與限制
- **對投手比對打者更關鍵**：打者對自身長打力量有一定控制力，但投手單季被 `HR/FB%` 波動極大（多圍繞 `9–10%` 擺盪），這正是 [[metrics/xFIP|xFIP]] 以聯盟平均 `HR/FB%` 取代實際全壘打的原因。
- **受球場影響極大**：例如右打者在 Fenway Park 的 `HR/FB%` 通常高於 PETCO Park。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-19-FanGraphs-HR-FB]]
