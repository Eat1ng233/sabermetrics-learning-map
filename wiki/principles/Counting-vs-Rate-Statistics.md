---
title: 累積數據 vs. 比率數據（Counting vs. Rate Statistics）
type: principle
tags:
  - sabermetrics
  - principles
  - methodology
sources:
  - "[[sources/2010-02-25-FanGraphs-Counting-vs-Rate-Stats]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 累積數據 vs. 比率數據（Counting vs. Rate Statistics）

## 一句話定義
棒球數據分為衡量總產量的**累積數據（Counting Stats）**與衡量單位效率的**比率數據（Rate Stats）**；由於球隊勝負本質是累積性的，評估球員總價值時必須謹慎將比率效率與上場時間結合。

---

## 兩大數據類型與特例

### 1. 比率數據（Rate Stats）與標準化（Normalized Stats）
- **本質**：將產出除以機會分母（如 `H / AB = AVG`、`wOBA`、`K%`）。
- **標準化（+ / - 指標）**：透過「除以聯盟平均再乘以 100」（例如 [[metrics/wRC+|wRC+]]、[[metrics/OPS+|OPS+]]、`105` 代表高於聯盟平均 5%），解決不同年代與球場的環境差異。
- **提醒**：不同指標的離散程度不同，某指標的 `110` 未必比另一指標的 `105` 更具含金量。

### 2. 累積數據（Counting Stats）與「高於平均」基準的陷阱
為了評估球員對球隊勝場（累積指標）的總貢獻，我們常把比率轉回累積得分（如 [[metrics/wRAA|wRAA]]）。但如果只以「**聯盟平均**」作為轉換基準，會出現嚴重邏輯漏洞：
- **例子**：假設聯盟平均打擊率 `.270`。某球員在 `100 AB` 打出 `.278`（高於平均 0.8 支安打），另一人 `400 AB` 打 `.273`（高於平均 1.2 支安打）看似合理；
- **致命缺陷**：如果一位球員上大聯盟只打 **1 個打數且吞下三振**（僅低於平均 `0.27` 支安打），他的「高於平均累積值」竟然會遠高於一位打了整季 `600 AB` 卻只比聯盟平均略差的 `.260` 主力球員（`-6` 支安打）！

這證明了**以「聯盟平均」為基準的累積指標無法正確衡量上場時間的價值**——為了解決這個問題，賽伯計量學必須改用 [[principles/Replacement-Level|替補水準（Replacement Level）]] 作為零點基準。

---

## 相關頁面
- [[principles/Replacement-Level|替補水準（Replacement Level）]]
- [[metrics/wRAA|wRAA]] / [[metrics/wRC+|wRC+]] / [[metrics/WAR|WAR]]
- 來源：[[sources/2010-02-25-FanGraphs-Counting-vs-Rate-Stats]]
