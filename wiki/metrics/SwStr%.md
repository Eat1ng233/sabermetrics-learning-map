---
title: SwStr%（揮空率，Swinging Strike Percentage）
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

# SwStr%（揮空率，Swinging Strike Percentage）

## 一句話定義
揮棒落空次數佔**總投球數**的比例；原文特別指出它在評估**投手**時尤其重要。

## 計算公式
$$\text{SwStr\%} = \frac{\text{揮棒落空次數}}{\text{總投球數}}$$

## 基準值與判讀
- **聯盟平均約 `9.5%`**（FanGraphs 以 BIS 資料估計，逐年變動；PITCHf/x 版本相近）。原文刻意不給「好／壞」評級——本壘板紀律**沒有單一理想值**，數字主要用來辨識球員的打擊取向與風格。
- 投手越高越好（製造揮空的能力）；打者越低代表越少揮空。與 [[metrics/K%|K%]] 高度相關（見 [[sources/2014-10-30-FanGraphs-Complete-List-Offense|Complete List (Offense)]]）。
- 由「出棒頻率 × 揮空頻率」組成：$\text{SwStr\%} = \text{Swing\%} \times (1 - \text{Contact\%})$。

> [!warning] 定義差異：SwStr%（每球）vs. Whiff rate（每次揮棒）
> - **SwStr%** = 揮空 ÷ **總投球數**（本頁，來源：[[sources/2010-02-18-FanGraphs-Plate-Discipline]]），聯盟平均約 9.5%。
> - **Whiff rate／Whiff%** = 揮空 ÷ **揮棒次數**（= 1 − [[metrics/Contact%|Contact%]]），以原文平均 Contact% 80% 推算約 20%。MLB.com [[metrics/Swing-Length|Swing Length]] 頁的 Whiff%（19% vs 30%）即為每次揮棒的口徑（來源：[[sources/2026-11-13-MLB-Statcast-Swing-Length]]）。
> 兩者常被混用，比較時務必確認分母。

## 相關指標
- 同屬 [[concepts/Plate-Discipline|本壘板紀律]]：[[metrics/Contact%|Contact%]]、[[metrics/K%|K%]]、[[metrics/PutAway%|PutAway%]]、[[metrics/Swords|Swords]]、[[metrics/Stuff+|Stuff+]]

## 限制與常見誤區
- **兩套資料來源**：FanGraphs 同時提供 BIS（經人工標記修正）與 PITCHf/x（原始追蹤）兩版，兩者不會完全一致；好球帶定義也因來源、年份與主審而異，即使球員行為不變，數字也可能有小幅差異。
- **樣本數**：逐球計算讓樣本累積得快，但短期仍受隨機波動影響——不能因最近 30 個打席的數字就判定球員取向或實力改變（參見 [[principles/Sample-Size|樣本數與穩定性]]；目前知識庫尚未收錄各項本壘板紀律指標的穩定門檻）。
- **不含情境**：不考慮比賽情境與對手打者／投手，而這些都會影響球員行為。
- **沒有理想組合**：O-Swing% 高的球員也可能很有生產力，Contact% 很高的打者也可能很差，必須搭配其他數據（如 [[metrics/wOBA|wOBA]]、[[metrics/K%|K%]]、[[metrics/BB%|BB%]]）一起看。

## 參考來源
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
