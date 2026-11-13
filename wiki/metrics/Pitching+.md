---
title: Pitching+
type: metric
tags:
  - sabermetrics
  - pitching
  - pitch-modeling
  - pitching-plus
  - statcast
sources:
  - "[[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Pitching+

## 一句話定義
**Pitching+** 是同時整合投球物理特性、進壘位置、球數與打者左右打的**整體投球過程評估模型**，以 **100 為聯盟平均**，用來移除場上結果雜訊並預測未來失分表現。

## 模型架構與特點
- **獨立第三模型**：Pitching+ **並不是** [[metrics/Stuff+|Stuff+]] 與 [[metrics/Location+|Location+]] 的單純加權平均，而是將物理特性、位置、球數與**打者左右打（捕捉左右打對戰差異 Platoon Splits）**共同輸入決策樹的獨立模型。
- **尺度與標準差**：單球層級每 10 分為 1 個標準差；整季彙總後，先發投手（SP）標準差為 `4.94`、後援投手（RP）為 `6.61`。
- **球種分佈收斂**：相較於 Stuff+，納入位置後各球種的 Pitching+ 均值與離散度較為收斂；其中**指叉球**與**變速球**因高度依賴與主速球的差異及控球難度，標準差仍是所有球種中最大。

## 預測力與穩定性表現
- **跨季黏著度**：2021–2022 年 $R^2 = 0.42$（介於 Stuff+ 的 `0.66` 與 Location+ 的 `0.39` 之間）。
- **優於傳統預測系統**：
  - 季前 Pitching+ 對季末失分率（RA/9）的預測誤差（RMSE）優於 ZiPS、Steamer、The BAT、ERA、FIP 與 xFIP。
  - 季中後援投手約投 **250 球**、先發投手約投 **400 球（約 4–5 場先發）**後，當季累積的 Pitching+ 即可擊敗季前預測系統。
- **優於 K-BB%**：無論在單季信度（Cronbach's Alpha）的攀升速度，或對季末 RA/9 的預測誤差上，Pitching+ 皆優於 `K-BB%`。
- **使用提醒**：當投手在大聯盟累積的實戰樣本越長，實際場上結果的權重就應逐步提高，與 Pitching+ 搭配解讀。

## 相關指標
- [[metrics/Stuff+|Stuff+]]
- [[metrics/Location+|Location+]]
- [[metrics/PitchingBot|PitchingBot]]
- [[comparisons/PitchingBot-vs-Pitching+|PitchingBot 與 Stuff+/Location+/Pitching+ 比較]]

## 參考來源
- [[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]
