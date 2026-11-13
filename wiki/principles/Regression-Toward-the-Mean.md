---
title: 向均值回歸（Regression toward the Mean, RTM）
type: principle
tags:
  - sabermetrics
  - principles
  - methodology
sources:
  - "[[sources/2010-02-16-FanGraphs-Regression-Toward-the-Mean]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 向均值回歸（Regression toward the Mean, RTM）

## 一句話定義
**向均值回歸（RTM）**是指當我們觀察到一段偏離長期平均的短期樣本時，預期下一段樣本的表現會更接近其背後的**真實實力（True Talent）**，而非維持在極端值。

---

## 核心概念與常見混淆

### 1. 區分兩種「Regression」
| 用法 | 含義 | 方向性 |
| :--- | :--- | :--- |
| **日常用語（Regress）** | 球員老化、退化、實力倒退 | 單向變差 |
| **統計學（RTM）** | 觀測值向真實實力均值靠攏 | **雙向**（火熱會降溫，低潮會回溫） |

### 2. 核心思維公式
$$
\text{Outcomes（觀測結果）} = \text{Talent（真實實力）} + \text{Randomness（隨機性）}
$$

我們無法直接測量「真實實力」，只能透過場上發生的「觀測結果」去推論。由於棒球充滿隨機雜訊（強勁平飛球被美技接殺、軟弱滾地球剛好穿出防線），短樣本極易被隨機性扭曲；拉長樣本的目的，正是讓隨機性互相抵銷。

---

## 實戰推論範例
假設一位 28 歲打者過去五季 OBP 分別為 `.340, .360, .340, .360, .350`，可推估其真實實力約為 **`.350 OBP`**。若他在今年四月前 100 PA 只打出 `.300 OBP`（或爆氣打出 `.400 OBP`）：
- 這 100 PA 確實提供了微幅資訊（不能完全忽略），但它相較於過去五季的龐大樣本權重極低。
- 預測他接下來 500–600 PA 時，預期表現仍會大幅向 `.350` 靠攏，而不是繼續維持在 `.300`（或 `.400`）。

---

## 使用原則與例外
- **並非死板公式**：RTM 是一個思考框架。若球員確實發生**結構性改變**（例如傷病、明顯老化、投手開發出全新球種或打者大幅改變揮棒機制），則舊樣本的參考價值會下降，真實實力均值本身可能已發生位移。
- **與樣本數搭配使用**：不同指標的隨機雜訊比例不同，因此需要向均值回歸的幅度與速度也不同（詳見 [[principles/Sample-Size|樣本數與穩定性]]）。

---

## 相關頁面
- [[principles/Sample-Size|樣本數與穩定性]]
- [[principles/Projection-Systems|預測系統]]
- [[principles/Luck|運氣]]
- 來源：[[sources/2010-02-16-FanGraphs-Regression-Toward-the-Mean]]
