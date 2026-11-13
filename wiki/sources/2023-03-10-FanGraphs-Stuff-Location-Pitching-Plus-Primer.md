---
title: Stuff+, Location+, and Pitching+ Primer — FanGraphs 投球進階模型入門
type: source
tags:
  - sabermetrics
  - pitching
  - pitch-modeling
  - stuff-plus
  - statcast
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Stuff+, Location+, and Pitching+ Primer — FanGraphs 投球進階模型入門

- **作者**：Owen McGrattan
- **發表日期**：2023-03-10
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[Stuff+, Location+, and Pitching+ Primer | Sabermetrics Library](https://library.fangraphs.com/pitching/stuff-location-and-pitching-primer/)
- **本地檔案**：`raw/articles/Stuff+, Location+, and Pitching+ Primer _ Sabermetrics Library.pdf`

---

## 核心摘要

1. **模型起源與團隊**：由 Eno Sarris 與 Max Bay 創立（受 Ethan Moore、Harry Pavlidis、Jeremy Greenhouse 等研究啟發），目前由 Sarris 與 Owen McGrattan 維護，Matt Dennewitz 負責工程支援。
2. **三大指標定義**：
   - **Stuff+**：純看投球物理特性（出手點、球速、垂直與水平位移、轉速、與當場主速球的速差與位移差、以及捕捉 Seam-Shifted Wake 的軸向差 `axis differential`），以得分價值（Run Values）為目標訓練決策樹模型，隱含捕捉部分垂直進壘角度與出手點欺敵性。
   - **Location+**：依球數與球種調整的位置評估，**完全不含球速或位移等物理特性**，直接以實際進壘位置衡量控球品質（不採用人工記錄的意圖標籤）。
   - **Pitching+**：**並非 Stuff+ 與 Location+ 的單純加權平均**，而是同時輸入物理特性、位置、球數與打者左右打（捕捉左右打對戰差異）的獨立第三模型。
3. **尺度與標準差**：以 **100 為平均**，在**單球層級**每 10 分為 1 個標準差；彙總至整季後，先發（SP）與後援（RP）的標準差不同（例如 Stuff+ 在 SP 為 12.16、RP 為 17.02；Location+ 在 SP 為 3.34、RP 為 5.87；Pitching+ 在 SP 為 4.94、RP 為 6.61）。後援轉先發時 Stuff+ 通常下降約 5.5 分。
4. **穩定速度與預測力**：
   - **Stuff+ 約 80 球**即具高信度，且跨季黏著度最高（2021–2022 年 $R^2 = 0.66$），遠高於 Location+（約需 400 球穩定，跨季 $R^2 = 0.39$）與 Pitching+（跨季 $R^2 = 0.42$）。
   - 季前 Pitching+ 對 RA/9 的預測 RMSE 優於 ZiPS、Steamer、The BAT、ERA、FIP 與 xFIP；季中約 **250 球（後援）或 400 球（先發，約 4–5 場先發）**即可超越季前預測系統，且信度與預測表現皆優於 `K-BB%`。

---

## 更新與建立的頁面
- [[metrics/Stuff+|Stuff+]]
- [[metrics/Location+|Location+]]
- [[metrics/Pitching+|Pitching+]]
- [[comparisons/PitchingBot-vs-Pitching+|PitchingBot 與 Stuff+/Location+/Pitching+ 比較]]
- [[entities/FanGraphs|FanGraphs]]
