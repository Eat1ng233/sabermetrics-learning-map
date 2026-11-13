---
title: Squared-up Rate（打正率）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Squared-Up-Rate]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Squared-up Rate（打正率）

## 一句話定義
**Squared-up Rate** 衡量打者在一次揮棒中，取得了「理論上可能的最大擊球初速」的幾成——也就是**擊球效率**。

## 計算方式與核心邏輯
$$\text{Squared-up \%} = \frac{\text{實際 EV}}{\text{依揮棒速度與球速計算的最大可能 EV}}$$
- 理論最大 EV 只在球擊中**甜蜜點（距棒頭約 4–9 吋）**時才可能達到；範圍 0%–100%。
- 單次揮棒 **≥ 80%** 即視為「squared-up swing」。
- 例：
  | | 揮棒速度 | 球速 | 最大可能 EV | 實際 EV | Squared-up |
  |---|---|---|---|---|---|
  | Trevor Larnach 全壘打 | 75.6 | 98.8 | 113.4 | 110.0 | **97%** ✅ |
  | Ronald Acuña Jr. 飛球出局（被塞） | 78.6 | 98.4 | 117.4 | 90.3 | 77% ❌ |
  | Adley Rutschman 中間安打 | 67（低於平均） | 77.2 曲球 | 98.7 | 95.8 | 97% ✅ |

## 基準值與判讀區間（2024 年首月）
- **25%** 的揮棒、**33%** 的接觸為 squared-up。
  | | AVG | SLG | wOBA | Hard-hit% | RV/100 |
  |---|---|---|---|---|---|
  | Squared-up | .371 | .656 | .438 | 60% | +11.4 |
  | 非 Squared-up | .126 | .142 | .119 | 1% | −6.7 |

## 演進脈絡與相關指標
- 與 [[metrics/Bat-Speed|Bat Speed]] 結合 → [[metrics/Blasts|Blasts]]；屬 [[concepts/Bat-Tracking|Bat Tracking]]。
- 結果端對應 [[metrics/Exit-Velocity|Exit Velocity]]。

## 限制與常見誤區
- **打正 ≠ 用力**：Rutschman 例子顯示慢揮棒配慢球也能 97% 打正，但最大 EV 本身就低；兼顧兩者請看 Blasts。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Squared-Up-Rate]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
