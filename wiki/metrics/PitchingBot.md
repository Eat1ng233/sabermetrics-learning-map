---
title: PitchingBot 投球品質模型
type: metric
tags:
  - sabermetrics
  - pitching
  - pitch-modeling
  - pitchingbot
  - statcast
sources:
  - "[[sources/2023-03-10-FanGraphs-PitchingBot-Primer]]"
  - "[[sources/2026-11-13-MLB-Statcast-Pitch-Movement]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# PitchingBot 投球品質模型

## 一句話定義
**PitchingBot** 是由 Cameron Grove 開發、於 2023 年納入 [[entities/FanGraphs|FanGraphs]] 的機器學習投球品質模型。它**完全不參考投球後的實際打擊結果**，僅依據 Statcast 的球路物理特性、進壘位置與球數情境，預測該顆球的預期失分價值（xRV）並換算為 **20-80 球探評分**。

## 模型架構與計算邏輯
PitchingBot 採用 **XGBoost**（梯度提升決策樹），並依**速球、變化球、變速球系**分別訓練一組串接的子模型（避免單一黑箱模型分散注意力）：
1. **事件機率串接**：
   - `Swing Model`（是否出棒）
   - 若不出棒 → `No Swing Model`（預測好球 `Called Strike`、壞球 `Ball`、觸身球 `HBP`）
   - 若出棒 → `Contact Model`（預測揮空 `Swinging Strike` 或擊中球）→ `Foul Ball Model`（界外球）→ `Ball-in-Play Model`（細分 **15 種** 場內球軌跡與擊球初速區間）。
2. **輸入變數**：
   - **情境變數**：投打慣用手、打者好球帶高度、好壞球數（Count）。
   - **球威（Stuff）變數**：球速、轉速、水平與垂直位移、出手點與延伸距離（Extension）、估算轉軸效率與旋轉/位移軸偏差、與投手主速球的速差及位移差。
   - **控球位置（Location）變數**：球進壘時於本壘板的高度與水平位置。
3. **轉換為 xRV 與 20-80 量表**：
   - 將所有可能結果的預測機率乘以情境中立的得分價值，加總為單球 **Expected Run Value（xRV，各球數下平均值為 0）**。
   - 最終輸出為 **20-80 球探量表**（聯盟平均為 **50**，每增減 **10 分**代表 **1 個標準差**，如 60 為高於平均、70 為頂尖、80 為聯盟最頂級），並同步提供換算後的 **PitchingBot ERA**。

## 實戰應用與穩定性
- **Stuff Grade vs. Location Grade**：Stuff 模型僅使用物理變數且只預測揮棒後事件；Location 模型僅使用通用球種、情境與進壘位置。Stuff 的信度（Cronbach's Alpha）穩定速度遠快於 Location、xFIP、FIP 與 ERA。
- **Logan Webb 案例**：2019–2020 年 Webb 的四縫線速球表現平平，但 PitchingBot 早已給他的伸卡球極高 Stuff 評分（2020 年伸卡 65 vs 四縫線 38）；2021 年他將伸卡球比例拉高至 38% 後，PitchingBot ERA 隨即大幅進步至 3.03。

## 模型限制與盲點
- **控球意圖（Command）**：模型不知道投手原本「想投到哪裡」，因此像 Kyle Hendricks 這類精準控球大師常長期優於模型預期。
- **欺敵性與配球順序（Deception & Sequencing）**：無法完整捕捉獨特出手動作帶來的欺敵效果或跨球路配球節奏（Clayton Kershaw、Max Scherzer、Corbin Burnes 常長期跑贏模型）。
- **落點噴射角（Spray Angle）**：場內球預測不考量噴射角，無法反映投手配合守備佈陣製造滾地球的能力（如 Framber Valdez）。
- **小樣本仍需謹慎**：雖比傳統數據快穩定，但僅投幾場出賽時仍會受樣本波動影響。

## 相關頁面
- [[comparisons/PitchingBot-vs-Pitching+|PitchingBot 與 Stuff+/Location+/Pitching+ 比較]]
- [[metrics/Stuff+|Stuff+]]、[[metrics/Location+|Location+]] 與 [[metrics/Pitching+|Pitching+]]

## Statcast 對應指標
- **Statcast 物理輸入**：[[metrics/Velocity|Velocity]]、[[metrics/Extension|Extension]]、[[metrics/Spin-Rate|Spin Rate]]、[[metrics/Pitch-Movement|Pitch Movement]] 的官方定義見各頁；資料來源見 [[entities/Statcast|Statcast]]。

## 參考來源
- [[sources/2023-03-10-FanGraphs-PitchingBot-Primer]]
- [[sources/2026-11-13-MLB-Statcast-Pitch-Movement]]
