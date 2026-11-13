---
title: Catch Probability（接殺機率）
type: metric
tags:
  - sabermetrics
  - fielding
  - statcast
  - outfield
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Catch-Probability]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Catch Probability（接殺機率）

## 一句話定義
**Catch Probability** 估計一顆飛向外野的擊球「被一般大聯盟外野手接殺的機率」，用來量化每一次接殺的難度。

## 計算方式與核心邏輯
四項 Statcast 輸入，與 Statcast 時代同類型機會的歷史接殺率比較：
1. **所需距離（Distance needed）**：從起始站位沿**最佳路徑**到落點的距離——刻意不用實際跑動距離（[[metrics/Distance-Covered|DCOV]]），避免繞遠路反而加分。
2. **機會時間（Opportunity time）**：自**投手出手**（而非擊球瞬間）起算，以獎勵依捕手站位、配球預判起跑的外野手。
3. **移動方向**：2017 年 5 月起加入；以野手為圓心分六個 60° 區，「往後跑」定義為正後方 180° 左右各 30°。
4. **是否靠牆**：2018 年起納入撞牆風險帶來的額外難度。

2019 年起以 **5% 級距**回報（21% 與 22% 無實質差異，避免假精確），最難接殺為 5%。

## 基準值與判讀區間（星級）
| 星級 | 接殺機率 |
|---|---|
| ★★★★★ | 0–25% |
| ★★★★ | 30–50% |
| ★★★ | 55–75% |
| ★★ | 80–90% |
| ★ | 95% |
> 高於 95% 的例行接殺不給星級。

**案例**：Pete Crow-Armstrong（2025）與 Matt Vierling（2023）同樣需在 3.3 秒內跑 52 呎（接殺機率皆 10%），前者靠極佳起步不需撲接即完成，後者未能接到形成安打——肉眼難以分辨的難度差異由此量化。

## 演進脈絡與相關指標
- 外野 [[metrics/OAA|OAA]] = 每顆球「實際結果 − 接殺機率」的季累積；再經換算進入 [[metrics/Fielding-Run-Value|FRV]]。
- 起步能力可另以 [[metrics/Jump|Jump]] 拆解；屬「接殺難度 × 價值」思路（見 [[concepts/Defensive-Metrics-Overview|守備數據核心理論]]），可視為 [[metrics/UZR|UZR]]／[[metrics/RZR|RZR]] 以區塊分類估難度的追蹤數據升級版。

## 限制與常見誤區
- 僅適用外野飛球；內野另有 OAA 模型。
- 機率來自「平均外野手」基準，描述的是機會難度，不是球員能力本身。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Catch-Probability]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
