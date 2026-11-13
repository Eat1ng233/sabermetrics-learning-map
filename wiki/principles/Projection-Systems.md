---
title: 預測系統（Projection Systems）
type: principle
tags:
  - sabermetrics
  - principles
  - methodology
sources:
  - "[[sources/2010-02-25-FanGraphs-Projection-Systems]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 預測系統（Projection Systems）

## 一句話定義
**預測系統**是結合球員過去多季數據（依近期遞減加權）、[[principles/Aging-Curve|老化曲線]]與底層指標回歸的統計模型，用來估計球員**當前真實實力（True Talent）的預期中位數（50th Percentile）**。

---

## 核心運作邏輯

1. **為什麼不能只看「去年成績」？**
   - 單一球季（甚至前 400 PA）仍混雜大量運氣與隨機波動（例如打者打出 `.400 wOBA` 卻伴隨 `.390 BABIP`）。
   - 預測系統像氣象預報一樣，綜合考量近期表現、過往歷史（越久遠權重越低，但不會歸零）、相同類型球員的老化模式與底層過程數據，將觀測結果向真實均值回歸。
   - **案例**：2015 年季前 Steamer 綜合 Miguel Cabrera 2014 年小幅下滑、2013 年巔峰及老化曲線，預測他 2015 年將有 **`.407 wOBA`**，最終 Cabrera 實際打出 **`.413 wOBA`**。
2. **中位數（50th Percentile）的正確解讀**
   - 預測系統顯示的數字（如 `.350 wOBA`）**不是「保證會打出 .350」的預言**，而是預期分佈的中位數：該球員實際打出高於 `.350` 或低於 `.350` 的機率各佔 50%。
   - 樣本越多（如 2,000 MLB PA 相較於 200 MLB PA），預測區間的信賴度越高；但系統無法預測「突然開發新球種」或「大幅改變揮棒機制」等真實實力突變。

---

## 常見棒球預測系統一覽

| 系統名稱 | 建立者／機構 | 備註 |
| :--- | :--- | :--- |
| **ZiPS** | Dan Szymborski | 結合相似球員歷史軌跡，FanGraphs 核心系統之一 |
| **Steamer** | Jared Cross, Dash Davidson, Peter Rosenbloom | 納入近年 Statcast 與投球／擊球過程指標 |
| **Depth Charts** | FanGraphs | **ZiPS 與 Steamer 的平均**，搭配人工預估上場時間（驅動季後賽機率） |
| **Marcel** | Tom Tango | 最簡潔的公開基準模型（近三年加權 + 老化 + 回歸） |
| **PECOTA** | Nate Silver / Baseball Prospectus | 強調相似球員群與機率分佈（百分位數） |
| **KATOH** | Chris Mitchell | 專精小聯盟新秀未來 WAR 預測 |
| **Fans** | FanGraphs 社群 | 群眾外包預測 |
| **其他經典系統** | — | **Bill James**（BIS）、**Oliver**（Brian Cartwright）、**CAIRO**、**CHONE**（Sean Smith） |

---

## 相關頁面
- [[principles/Regression-Toward-the-Mean|向均值回歸]]
- [[principles/Aging-Curve|老化曲線]]
- [[principles/Sample-Size|樣本數與穩定性]]
- 來源：[[sources/2010-02-25-FanGraphs-Projection-Systems]]
