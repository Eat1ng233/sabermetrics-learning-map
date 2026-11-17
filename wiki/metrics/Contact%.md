---
title: Contact%（總擊中率）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - plate-discipline
sources:
  - "[[sources/2010-02-18-FanGraphs-Plate-Discipline]]"
created: 2026-11-17
updated: 2026-11-17
status: active
---

# Contact%（總擊中率）

## 一句話定義
打者所有揮棒中碰到球（含界外）的比例，用來區分「揮空型投手」與「難以碰到球的打者」。

## 計算公式
$$\text{Contact\%} = \frac{\text{揮棒且碰到球的次數}}{\text{揮棒次數}}$$

## 基準值與判讀
- **聯盟平均約 `80%`**（FanGraphs 以 BIS 資料估計，逐年變動；PITCHf/x 版本相近）。原文刻意不給「好／壞」評級——本壘板紀律**沒有單一理想值**，數字主要用來辨識球員的打擊取向與風格。
- 一般而言高 Contact% 對打者有利、對投手不利。
- **必須搭配其他數據**：同樣 95% 的 Contact%，對 Juan Pierre 與 Victor Martinez 意義完全不同（前者缺乏長打力）。
- 1 − Contact% 即為每次揮棒的揮空率（whiff rate），與 [[metrics/SwStr%|SwStr%]]（每球）不同。

## 相關指標
- 同屬 [[concepts/Plate-Discipline|本壘板紀律]]：[[metrics/O-Contact%|O-Contact%]]、[[metrics/Z-Contact%|Z-Contact%]]、[[metrics/SwStr%|SwStr%]]、[[metrics/K%|K%]]、[[metrics/Squared-Up-Rate|Squared-up Rate]]（Statcast：碰到球的「品質」）

## 限制與常見誤區
- **兩套資料來源**：FanGraphs 同時提供 BIS（經人工標記修正）與 PITCHf/x（原始追蹤）兩版，兩者不會完全一致；好球帶定義也因來源、年份與主審而異，即使球員行為不變，數字也可能有小幅差異。
- **樣本數**：逐球計算讓樣本累積得快，但短期仍受隨機波動影響——不能因最近 30 個打席的數字就判定球員取向或實力改變（參見 [[principles/Sample-Size|樣本數與穩定性]]；目前知識庫尚未收錄各項本壘板紀律指標的穩定門檻）。
- **不含情境**：不考慮比賽情境與對手打者／投手，而這些都會影響球員行為。
- **沒有理想組合**：O-Swing% 高的球員也可能很有生產力，Contact% 很高的打者也可能很差，必須搭配其他數據（如 [[metrics/wOBA|wOBA]]、[[metrics/K%|K%]]、[[metrics/BB%|BB%]]）一起看。

## 參考來源
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
