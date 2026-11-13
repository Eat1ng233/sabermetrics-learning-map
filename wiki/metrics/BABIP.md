---
title: BABIP（Batting Average on Balls in Play）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - batted-ball
  - babip
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-15-FanGraphs-BABIP]]"
  - "[[sources/2026-11-13-MLB-Statcast-xBA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Exit-Velocity]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# BABIP（Batting Average on Balls in Play，場內球打擊率）

## 一句話定義
**BABIP** 衡量打者將球擊入場內（不含全壘打與三振）時形成安打的比率，或投手被擊入場內球形成安打的比率，聯盟平均約 **`.300`**。

## 計算公式
$$\text{BABIP} = \frac{H - HR}{AB - K - HR + SF}$$

## 三大影響因子與投打不對稱性
1. **守備（Defense）**：背後守備或對手佈陣影響極大。
2. **運氣（Luck）**：德州安打 vs. 強勁平飛球正朝野手手套飛去。
3. **天賦水準（Talent Level）**：擊球初速與[[concepts/Batted-Ball-Profile|擊球型態]]（`LD%` 最易形成安打、`GB%` 次之、`FB%` 最低）。
- **打者控制力遠高於投手**：頂尖打者可長期維持 `.350` 左右（生涯 4,000 PA 以上歷史天花板約 `.380`，最差約 `.260`）；投手則幾乎無法長期控制場內球結果（多數長期落在 `.290–.310`）。

## 穩定門檻與使用心法
- **打者約需 800 顆場內球（約兩季）**穩定：預測打者未來表現時，應回歸該打者**個人生涯均值**，而非盲目回歸 `.300`。
- **投手約需 2,000 顆場內球（約三季）**穩定：單季極端高的投手 BABIP 多半反映運氣差或守備差，未來傾向回歸聯盟平均 `.300`（也是 [[metrics/FIP|FIP]] 誕生的核心基礎）。

## Statcast 對應指標
- **Statcast 檢驗工具**：以 [[metrics/Exit-Velocity|Exit Velocity]]、[[metrics/Hard-Hit-Rate|Hard-hit Rate]] 與 [[metrics/xBA|xBA]]／[[metrics/xwOBA|xwOBA]] 判斷 BABIP 偏離是否為擊球品質支撐，或只是運氣。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-15-FanGraphs-BABIP]]
- [[sources/2026-11-13-MLB-Statcast-xBA]]
- [[sources/2026-11-13-MLB-Statcast-Exit-Velocity]]
