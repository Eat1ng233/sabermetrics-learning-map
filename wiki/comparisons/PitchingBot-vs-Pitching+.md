---
title: PitchingBot 與 Stuff+/Location+/Pitching+ 比較
type: comparison
tags:
  - sabermetrics
  - pitching
  - pitch-modeling
  - comparison
sources:
  - "[[sources/2023-03-10-FanGraphs-PitchingBot-Primer]]"
  - "[[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# PitchingBot 與 Stuff+/Location+/Pitching+ 比較

[[entities/FanGraphs|FanGraphs]] 於 2023 年 3 月 10 日同步推出兩套以 Statcast 追蹤數據為基礎的投球品質建模系統：[[metrics/PitchingBot|PitchingBot]] 與 [[metrics/Stuff+|Stuff+]] / [[metrics/Location+|Location+]] / [[metrics/Pitching+|Pitching+]]。兩者目標相同——**剝除結果雜訊，直接評估投球過程品質**——但在尺度設計與建模路徑上各有特色。

| 比較維度 | PitchingBot | Stuff+ / Location+ / Pitching+ |
| :--- | :--- | :--- |
| **開發與維護者** | Cameron Grove | Eno Sarris、Max Bay 創立；Owen McGrattan、Matt Dennewitz 維護 |
| **評分尺度** | **20–80 球探量表**（平均 `50`，每 `10` 分為 1 個標準差）；另有 `PitchingBot ERA` | **100+ 指數量表**（平均 `100`，單球層級每 `10` 分為 1 個標準差） |
| **建模技術與架構** | **XGBoost 多層串接子模型**：依序預測出棒、擊球、界外、15 種場內球機率，再加權算出預期得分價值（xRV） | **決策樹模型**：直接以得分價值（Run Values）為訓練目標 |
| **可解釋性設計** | 透過拆解各階段預測機率（如 `xSwing%`、`xWhiff%`、`xFoul%`），可檢視投手為何拿高分 | 分為 Stuff+（物理）、Location+（位置）與 Pitching+（含左右打的獨立整合模型） |
| **物理特徵細節** | 球速、轉速、位移、出手點與延伸距離、轉軸效率/偏差、與主速球差異 | 球速、轉速、位移、出手點、Seam-Shifted Wake 軸向差、與當場主速球差異（隱含捕捉 VAA） |
| **位置模型特色** | Location 僅用通用球種（速/變/變速）、情境與進壘座標 | Location+ 依細分球種與球數調整理想位置，不含任何物理特徵 |

## 共同核心洞察
1. **Stuff 比 Location 更穩定**：兩套系統都證實「球威物理品質」的信度穩定速度遠快於「控球位置」（Stuff+ 約 80 球即具高信度，Location+ 約需 400 球），且跨季黏著度更高。
2. **季中小樣本神器**：在季初前幾週（約 250–400 球），Pitch Modeling 對期末防禦率的預測力就能超越 `ERA`、`FIP`、`xFIP`、`K-BB%` 甚至季前預測系統。
3. **共同盲點**：兩者皆無法直接讀取投手的「瞄準意圖（Command）」、難以完全量化特定投手的「動作欺敵性（Deception）」與「配球順序（Sequencing）」。

## 參考來源
- [[sources/2023-03-10-FanGraphs-PitchingBot-Primer]]
- [[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]
