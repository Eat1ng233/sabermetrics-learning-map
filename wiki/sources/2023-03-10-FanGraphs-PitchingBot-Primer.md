---
title: PitchingBot Pitch Modeling Primer — FanGraphs 投球建模入門
type: source
tags:
  - sabermetrics
  - pitching
  - pitch-modeling
  - pitchingbot
  - statcast
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# PitchingBot Pitch Modeling Primer — FanGraphs 投球建模入門

- **作者**：Cameron Grove
- **發表日期**：2023-03-10
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[PitchingBot Pitch Modeling Primer | Sabermetrics Library](https://library.fangraphs.com/pitching/pitchingbot-pitch-modeling-primer/)
- **本地檔案**：`raw/articles/PitchingBot Pitch Modeling Primer _ Sabermetrics Library.pdf`

---

## 核心摘要

1. **為何需要投球品質建模（Pitch Modeling）**：Statcast 數據讓我們能往結果更上游推進——只看「投球本身的物理特性與進壘位置」，**完全不參考投出後的打擊結果**，因此比 ERA、FIP、xFIP **更快穩定**，適合小樣本評估、小聯盟潛力新秀分析與配球優化。
2. **PitchingBot 模型架構**：採用 **XGBoost** 決策樹，依球種大類（速球、變化球、變速球系）分別訓練一組串接子模型，依序預測：`Swing Model` → `No Swing Model`（Called Strike / Ball / HBP）或 `Contact Model`（Swinging Strike）→ `Foul Ball Model` → `Ball-in-Play Model`（細分 15 種擊球型態與初速區間）。
3. **xRV 與 20-80 球探量表**：將各預測事件機率乘以情境中立的得分價值，加總得到單球 **Expected Run Value（xRV，各球數下平均為 0）**；再轉換為球迷熟悉的 **20-80 球探量表**（大聯盟平均 50、每 10 分為 1 個標準差）與 **PitchingBot ERA**。
4. **Stuff 與 Location 拆解**：Stuff 模型只用物理變數（球速、轉速、位移、出手點與延伸距離、轉軸效率/偏差、與主速球差異）並僅預測揮棒事件；Location 模型只用通用球種、情境與進壘位置。Stuff 信度穩定速度遠快於 Location。
5. **實戰案例（Logan Webb）**：模型早在 2019–2020 年就評定 Webb 的伸卡球 Stuff 遠優於四縫線速球，2021 年他大幅提高伸卡球比例後隨即迎來成績爆發。
6. **模型盲點**：無法衡量投手的**控球意圖（Command）**（如 Kyle Hendricks）、**投球欺敵性（Deception）與配球順序（Sequencing）**（如 Clayton Kershaw、Max Scherzer、Corbin Burnes 長期優於模型預期），且忽略擊球**噴射角（Spray Angle）**與守備佈陣配合（如 Framber Valdez）。

---

## 更新與建立的頁面
- [[metrics/PitchingBot|PitchingBot 投球品質模型]]
- [[comparisons/PitchingBot-vs-Pitching+|PitchingBot 與 Stuff+/Location+/Pitching+ 比較]]
- [[entities/FanGraphs|FanGraphs]]
