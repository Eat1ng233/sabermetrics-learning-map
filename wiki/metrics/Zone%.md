---
title: Zone%（好球帶投球率）
type: metric
tags:
  - sabermetrics
  - pitching
  - hitting
  - plate-discipline
sources:
  - "[[sources/2010-02-18-FanGraphs-Plate-Discipline]]"
created: 2026-11-17
updated: 2026-11-17
status: active
---

# Zone%（好球帶投球率）

## 一句話定義
所有投球中落在**好球帶內**的比例；投手端代表攻擊好球帶的頻率，打者端代表他被投進好球帶的頻率。

## 計算公式
$$\text{Zone\%} = \frac{\text{好球帶內的投球數}}{\text{總投球數}}$$

## 基準值與判讀
- **聯盟平均約 `45%`**（FanGraphs 以 BIS 資料估計，逐年變動；PITCHf/x 版本相近）。原文刻意不給「好／壞」評級——本壘板紀律**沒有單一理想值**，數字主要用來辨識球員的打擊取向與風格。
- 搭配 O-Swing% 與 Z-Swing% 才能理解揮棒數據：打者看到的帶內球越少，Swing% 自然越低。
- 好球帶定義因資料來源、年份與主審而異，Zone% 對此特別敏感。

## 相關指標
- 同屬 [[concepts/Plate-Discipline|本壘板紀律]]：[[metrics/F-Strike%|F-Strike%]]、[[metrics/O-Swing%|O-Swing%]]、[[metrics/Location+|Location+]]（控球模型）、[[metrics/Catcher-Framing|Catcher Framing]]（Shadow Zone）

## 限制與常見誤區
- **兩套資料來源**：FanGraphs 同時提供 BIS（經人工標記修正）與 PITCHf/x（原始追蹤）兩版，兩者不會完全一致；好球帶定義也因來源、年份與主審而異，即使球員行為不變，數字也可能有小幅差異。
- **樣本數**：逐球計算讓樣本累積得快，但短期仍受隨機波動影響——不能因最近 30 個打席的數字就判定球員取向或實力改變（參見 [[principles/Sample-Size|樣本數與穩定性]]；目前知識庫尚未收錄各項本壘板紀律指標的穩定門檻）。
- **不含情境**：不考慮比賽情境與對手打者／投手，而這些都會影響球員行為。
- **沒有理想組合**：O-Swing% 高的球員也可能很有生產力，Contact% 很高的打者也可能很差，必須搭配其他數據（如 [[metrics/wOBA|wOBA]]、[[metrics/K%|K%]]、[[metrics/BB%|BB%]]）一起看。

## 參考來源
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
