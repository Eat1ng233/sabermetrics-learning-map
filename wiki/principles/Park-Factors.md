---
title: 球場校正係數（Park Factors）
type: principle
tags:
  - sabermetrics
  - principles
  - methodology
sources:
  - "[[sources/2010-02-27-FanGraphs-Park-Factors]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 球場校正係數（Park Factors）

## 一句話定義
**球場校正係數（Park Factors）**用來量化各座大聯盟球場對得分與各類擊球結果的放大或抑制效果，使在不同主場出賽的球員能在同一基準下公平比較。

---

## 影響球場效應的多重因素（不只是全壘打牆距離）
大聯盟 30 座球場尺寸各異，但「場地大 ≠ 投手球場」：
1. **海拔與空氣密度**：丹佛高海拔稀薄空氣讓 Coors Field 成為極端打者天堂。
2. **氣候與濕度**：聖地牙哥 Petco Park 夜間的海洋氣流（Marine Layer）會抑制球飛行距離。
3. **建築結構與風向**：看台高低、風道與平均氣溫都會顯著改變擊球飛行軌跡。

---

## FanGraphs 的計算與呈現方式
- **5 年回歸（5-year regressed）與加法模型（Additive Method）**：避免單一球季樣本波動過大，並以加權加減法校正得分環境。
- **100 為基準且「已減半」**：因為球員整季只有一半（81 場）在主場比賽（另一半假設在近似平均的客場），FanGraphs 顯示的 Park Factor 已先減半：
  - 若某球場顯示 **`105`**，代表該球場實際得分環境比聯盟平均高 **10%**，減半後對該隊球員整季數據的影響為 **+5%**。
- 凡指標名稱帶有 **`+`** 或 **`-`**（如 [[metrics/wRC+|wRC+]]、[[metrics/ERA-|ERA-]]、[[metrics/FIP-|FIP-]]），皆已納入球場校正。

---

## 單一球場係數的盲點與限制
理想狀態下我們想知道「同一顆擊球初速與仰角在 30 座球場分別會變成什麼結果」，但在傳統架構下，單一總合 Park Factor 假設球場對所有打者影響均等，實務上仍有偏差：
- **左右打差異**：Target Field 與 Yankee Stadium 整體得分環境相近，但對「左打全壘打」而言，前者是沙漠、後者是綠洲（FanGraphs 亦另提供依左右打與安打類型拆分的細項係數）。
- **擊球型態差異**：PNC Park 對右打拉打全壘打不友善，但若某右打者專長反方向（推打）全壘打，套用整體係數反而會過度補償。

---

## 相關頁面
- [[metrics/wRC+|wRC+]] / [[metrics/ERA-|ERA-]] / [[metrics/FIP-|FIP-]]
- [[principles/Splits|分項數據]] / [[principles/League-Equivalencies|聯盟換算]]
- 來源：[[sources/2010-02-27-FanGraphs-Park-Factors]]
