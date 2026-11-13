---
title: Location+
type: metric
tags:
  - sabermetrics
  - pitching
  - pitch-modeling
  - location-plus
  - statcast
sources:
  - "[[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Location+

## 一句話定義
**Location+** 是依據**好壞球數（Count）與球種**校正後的控球位置評估指標，以 **100 為聯盟平均**，用來衡量投手「把球投到正確位置」的能力。

## 模型特徵與計算邏輯
- **純位置與情境輸入**：僅考量球種、好壞球數、投打慣用手與實際進壘座標，**完全不包含球速、位移或任何物理特性**。
- **情境差異**：同一球種在不同球數下有不同理想進壘點（例如變化球在 `2-0` 與 `1-2` 球數下該投往好球帶的不同區域），Location+ 能捕捉這種球數脈絡。
- **不採用「意圖」標籤**：研究顯示人工記錄的投手「瞄準意圖（Command）」並未替模型增加額外預測力，因此 Location+ 僅看實際進壘位置，隱含假設全聯盟在相同球數與球種下的配球目標大致相同。

## 尺度、標準差與樣本特性
- **基準與標準差**：各球種皆以 **100 為中心**，單球層級每 10 分為 1 個標準差；整季彙總後，先發投手（SP）標準差為 `3.34`、後援投手（RP）為 `5.87`。
- **穩定速度與跨季黏著度**：
  - 穩定速度明顯慢於 [[metrics/Stuff+|Stuff+]]，約需 **400 球**才能達到接近 0.9 的信度（Cronbach's Alpha）。
  - 跨季黏著度較低（2021–2022 年 $R^2 = 0.39$）。
- **單球重要性 vs. 預測穩定性**：在單一打席／單一投球的層級上，位置對結果的影響其實大於球威；但因球威跨季更穩定，自由球員市場通常願意為高 Stuff+ 支付更高溢價。

## 相關指標
- [[metrics/Stuff+|Stuff+]]
- [[metrics/Pitching+|Pitching+]]
- [[metrics/PitchingBot|PitchingBot]]

## 參考來源
- [[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]
