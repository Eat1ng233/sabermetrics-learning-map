---
title: FanGraphs — Pythagorean Win-Loss
type: source
tags:
  - sabermetrics
  - source
  - principles
  - methodology
sources:
  - "[[principles/Pythagorean-Win-Loss]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# FanGraphs — Pythagorean Win-Loss

- **作者**：Piper Slowinski（由 StatCorner 的 Graham MacAree 提供）
- **發布日期**：2010-02-26
- **原始檔案**：`raw/articles/Pythagorean Win-Loss _ Sabermetrics Library.pdf`
- **原始連結**：[Pythagorean Win-Loss | FanGraphs Sabermetrics Library](https://library.fangraphs.com/principles/expected-wins-and-losses/)

## 核心摘要
1. **公式與演進**：由 Bill James 發現得失分與勝率之間的非線性關係：$\text{Win\%} = \frac{RS^2}{RS^2 + RA^2}$；後續衍生出更精準調整指數的 `Pythaganport` 與 `Pythagenpat` 版本。
2. **兩大常見誤解**：
   - **過度解讀「畢達哥拉斯運氣」**：預期 .500 卻只拿 77 勝 85 敗的球隊，不代表它「真正實力就是 81 勝」，單靠得分與失分兩項變數無法窺見真實實力全貌（雖然偏離值確實有回歸傾向）。
   - **試圖塞入更多變數回溯預測**：畢達哥拉斯勝率的本質是陳述「得分、失分與勝率之間的數學關係」，而非用來賽後擬合戰績，不應為了提高回溯擬合度而加入牛棚 WPA 或得分分佈。
3. **真正核心價值**：它不僅能將預測系統算出的預期得失分轉為預期勝場，更是賽伯計量學推導「**勝分轉換率（Runs Per Win, RPW）**」的靈魂基石——沒有它，就無法將球員的得分貢獻換算成 [[metrics/WAR|WAR]]。

## 關聯維基頁面
- [[principles/Pythagorean-Win-Loss|畢達哥拉斯勝率（Pythagorean Win-Loss）]]
- [[metrics/WAR|WAR]] / [[principles/Replacement-Level|替補水準]]
