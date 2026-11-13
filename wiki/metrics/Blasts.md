---
title: Blasts（強力正中擊球）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Blasts]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Blasts（強力正中擊球）

## 一句話定義
**Blast** 是「既揮得快、又打得正」的擊球：把 [[metrics/Squared-Up-Rate|Squared-up]] 效率與 [[metrics/Bat-Speed|Bat Speed]] 合而為一，是價值最高的揮棒類型。

## 計算方式與核心邏輯
$$\text{Blast} \iff \text{Squared-up\%} \times 100 + \text{Bat Speed (mph)} \ge 164$$
- 等價簡記：兩者平均 ≥ **82**。為「滑動門檻」——揮棒越快，所需的打正比例越低，反之亦然。
- 例：Ohtani 全壘打 82.8 mph、93% → 平均 88 ✅；Ohtani 飛球出局 71 mph、92% → 平均 81 ❌。
- 與 Squared-up 的差別：Squared-up 無最低揮棒速度要求，Blast 則排除「慢揮但打正」的擊球。

## 基準值與判讀區間（2024）
- **10%** 的競爭性揮棒、**27%** 的擊球為 Blast。
  | | AVG | SLG | wOBA | 平均 EV | Hard-hit% | Barrel% | RV/100 |
  |---|---|---|---|---|---|---|---|
  | Blast | .563 | 1.182 | .727 | 103.5 | 99.9% | 28% | **+34** |
  | 非 Blast | .231 | .295 | .225 | 84.1 | 17% | 0.7% | −5 |

## 演進脈絡與相關指標
- 由 [[metrics/Squared-Up-Rate|Squared-up Rate]] 與 [[metrics/Bat-Speed|Bat Speed]] 組成；屬 [[concepts/Bat-Tracking|Bat Tracking]] 指標。
- 擊球結果端的對應物為 [[metrics/Barrel|Barrel]]；兩者是「揮棒輸入」與「擊球輸出」兩個視角。

## 限制與常見誤區
- 門檻 164 為人工設定的分界；Blast 率高度依賴擊球數，短期樣本波動大（參見 [[principles/Sample-Size|Sample Size]]）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Blasts]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
