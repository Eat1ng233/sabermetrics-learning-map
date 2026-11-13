---
title: 畢達哥拉斯勝率（Pythagorean Win-Loss）
type: principle
tags:
  - sabermetrics
  - principles
  - methodology
  - war
sources:
  - "[[sources/2010-02-26-FanGraphs-Pythagorean-Win-Loss]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 畢達哥拉斯勝率（Pythagorean Win-Loss）

## 一句話定義
**畢達哥拉斯勝率**是由 Bill James 發現的「球隊總得分（RS）、總失分（RA）與預期勝率之間的非線性數學關係」，也是賽伯計量學推導「**勝分轉換率（Runs Per Win）**」的靈魂基石。

---

## 公式與演進

$$
\text{Expected Win\%} = \frac{RS^2}{RS^2 + RA^2}
$$

- 後續研究透過動態調整指數（根據得分環境微調，通常在 `1.81–1.83` 附近）發展出更精準的衍生版本：**Pythaganport** 與 **Pythagenpat**。

---

## 兩大常見誤解

1. **過度簡化「畢達哥拉斯運氣」**：
   - 實戰上常把實際戰績高於預期勝率的球隊稱為「幸運」，低於預期則稱為「倒楣」（例如預期 `.500` 卻只拿 `77–85` 敗）。
   - **事實**：雖然實際勝率與畢氏勝率的落差確實有向均值回歸的傾向，但僅憑總得分與總失分兩個數字並不足以完全定義球隊真實實力（該隊「真正的實力」未必就是 81 勝）。
2. **不應為了回溯擬合而塞入其他變數**：
   - 畢達哥拉斯勝率的目的不是「賽後用盡各種資訊去完美擬合實際戰績」，而是**陳述得分、失分與勝率之間純粹的數學結構**。硬加入牛棚 [[metrics/WPA|WPA]] 或得分分佈反而會破壞這個核心關係。

---

## 真正的終極用途：Runs Per Win（RPW）
除了將預測系統算出的團隊預期得失分轉為預期勝場外，畢達哥拉斯勝率最大的價值在於**推導「多少分等於 1 勝（Runs Per Win, 大約 9–10 分）」**——沒有這層轉換關係，我們就無法將打擊、投球、守備與跑壘的得分貢獻整合為 [[metrics/WAR|WAR]]。

---

## 相關頁面
- [[metrics/WAR|WAR（Wins Above Replacement）]]
- [[principles/Replacement-Level|替補水準]]
- [[principles/Regression-Toward-the-Mean|向均值回歸]]
- 來源：[[sources/2010-02-26-FanGraphs-Pythagorean-Win-Loss]]
