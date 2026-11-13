---
title: UZR（Ultimate Zone Rating，終極防區評分）
type: metric
tags:
  - sabermetrics
  - defense
  - uzr
sources:
  - "[[sources/2010-02-15-FanGraphs-UZR]]"
  - "[[sources/2026-11-13-MLB-Statcast-OAA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# UZR（Ultimate Zone Rating，終極防區評分）

## 一句話定義
**UZR** 使用 Baseball Info Solutions（BIS）數據並經球場校正，以「相對於同守位聯盟平均守下（或失去）的分數（Runs Saved）」量化非捕手野手的守備貢獻。

## 四大組成組件
1. **ARM（Outfield Arm Runs）**：外野手透過臂力阻止跑者推進或阻殺跑者而守下的分數。
2. **DPR（Double-Play Runs）**：內野手製造雙殺打的貢獻。
3. **RngR（Range Runs）**：守備範圍廣度（能否追到並處理更多場內球）。
4. **ErrR（Error Runs）**：失誤控制相對於同守位平均的得分影響。

- **UZR/150**：由於 UZR 是累積數據，為比較不同出賽數的球員，常將 UZR 標準化至每 150 場基準（`UZR/150`）。

## 基準值與判讀區間（以 Runs Saved 為單位）

| 守備能力 | UZR |
| :--- | :---: |
| 金手套水準（Gold Glove Caliber） | `+15` |
| 優秀（Great） | `+10` |
| 高於平均（Above Average） | `+5` |
| 平均（Average） | `0` |
| 低於平均（Below Average） | `-5` |
| 欠佳（Poor） | `-10` |
| 極差（Awful） | `-15` |

## 限制與比較
- **三年樣本法則**：單季甚至數月的 UZR 波動極大，**建議至少累積三年 UZR 數據**再對球員真實守備天賦下結論。
- **未含位置調整**：UZR 僅相對於同守位平均，跨守位比較需透過 [[metrics/Def|Def]] 加入位置調整。
- **數據來源限制**：BIS 早期依賴人工標記落點與球速，存在些微人為誤差，且 2010 年時未考量守備佈陣（Shifts）。

## Statcast 對應指標
- **Statcast 對照**：[[metrics/OAA|OAA]]（逐球接殺/出局機率累積）與 [[metrics/Fielding-Run-Value|FRV]]（統一得分量表）以追蹤數據估計守備難度，取代影片區塊分類。

## 參考來源
- [[sources/2010-02-15-FanGraphs-UZR]]
- [[sources/2026-11-13-MLB-Statcast-OAA]]
- [[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]
