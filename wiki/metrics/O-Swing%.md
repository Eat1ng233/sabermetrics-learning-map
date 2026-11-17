---
title: O-Swing%（好球帶外揮棒率 / Chase Rate）
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

# O-Swing%（好球帶外揮棒率 / Chase Rate）

## 一句話定義
打者對**好球帶外**投球出棒的比例，衡量「追打壞球」的傾向（投手端則代表誘使打者追打的能力）。

## 計算公式
$$\text{O-Swing\%} = \frac{\text{好球帶外的揮棒次數}}{\text{好球帶外的投球數}}$$

## 基準值與判讀
- **聯盟平均約 `30%`**（FanGraphs 以 BIS 資料估計，逐年變動；PITCHf/x 版本相近）。原文刻意不給「好／壞」評級——本壘板紀律**沒有單一理想值**，數字主要用來辨識球員的打擊取向與風格。
- 越高代表越積極（或越容易被誘騙）追打帶外球；可用來判斷打者是否「特別積極」。
- 追打帶外球即使碰到球，若只是打成軟弱滾地球，仍不是有價值的結果。

## 相關指標
- 同屬 [[concepts/Plate-Discipline|本壘板紀律]]：[[metrics/Z-Swing%|Z-Swing%]]（帶內）、[[metrics/Swing%|Swing%]]（整體）、[[metrics/O-Contact%|O-Contact%]]（追打後能否碰到）

## 限制與常見誤區
- **兩套資料來源**：FanGraphs 同時提供 BIS（經人工標記修正）與 PITCHf/x（原始追蹤）兩版，兩者不會完全一致；好球帶定義也因來源、年份與主審而異，即使球員行為不變，數字也可能有小幅差異。
- **樣本數**：逐球計算讓樣本累積得快，但短期仍受隨機波動影響——不能因最近 30 個打席的數字就判定球員取向或實力改變（參見 [[principles/Sample-Size|樣本數與穩定性]]；目前知識庫尚未收錄各項本壘板紀律指標的穩定門檻）。
- **不含情境**：不考慮比賽情境與對手打者／投手，而這些都會影響球員行為。
- **沒有理想組合**：O-Swing% 高的球員也可能很有生產力，Contact% 很高的打者也可能很差，必須搭配其他數據（如 [[metrics/wOBA|wOBA]]、[[metrics/K%|K%]]、[[metrics/BB%|BB%]]）一起看。

## 參考來源
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
