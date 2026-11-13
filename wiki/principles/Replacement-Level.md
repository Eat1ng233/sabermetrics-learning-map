---
title: 替補水準（Replacement Level）
type: principle
tags:
  - sabermetrics
  - principles
  - war
  - methodology
sources:
  - "[[sources/2010-02-26-FanGraphs-Replacement-Level]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 替補水準（Replacement Level）

## 一句話定義
**替補水準**是指球隊不需付出任何交易籌碼、只需支付大聯盟底薪即可在自由市場或小聯盟（如 4A 球員、小聯盟自由球員）隨時取得的球員產出水準，也是計算 [[metrics/WAR|WAR]] 的共同起跑線。

---

## 為什麼不用「聯盟平均」作為基準？

1. **上場時間（Playing Time）的陷阱**：
   - 若以「聯盟平均（0 為平均）」為基準，一位打 1 個打席就交出平均水準的球員（0 分），與一位整季打 700 個打席維持平均水準的球員（0 分）帳面相同，甚至打 1 個極差打席就被下放的球員可能排在微幅低於平均的整季主力前面。
   - **現實邏輯**：如果你缺少一位主力打 590 個打席，那 590 個打席並不是憑空消失，而是必須由「替補水準球員」頂上。將基準設在最底層（Replacement Level = 0），才能正確獎勵「以高於替補水準的效率吃下大量出賽數」的主力球員。
2. **直接連結薪資決策**：
   - 球隊不能付低於底薪的薪水，且永遠找得到底薪替補球員。因此簽下一名大聯盟球員的真實邊際成本與邊際勝場，必須相對於「底薪替補球員」來衡量。

---

## 量化基準與計算公式

### 1. 勝率基準與 1,000 WAR 框架（2013 年起 FanGraphs 與 Baseball-Reference 統一）
- **全替補陣容勝率**：約 **29.7%**（每隊 162 場約贏 **47–48 勝**）。
- **可分配勝場總額**：全聯盟 30 隊共 2,430 場比賽，扣除替補基準線約 1,430 勝後，全聯盟每年共有約 **1,000 WAR** 可供分配：
  - **野手（Position Players）**：佔 **57%**（約 **570 WAR**）
  - **投手（Pitchers）**：佔 **43%**（約 **430 WAR**）

### 2. 野手替補水準得分換算公式
$$
\text{Replacement Runs} = 570 \times \text{RunsPerWin} \times \frac{\text{PA}}{\text{lgPA}}
$$
- 若某打者在 600 PA 內高於聯盟平均 `+21` 分，加上 600 PA 相對於替補水準的 `+17` 分基準差，總計高於替補水準 `+38` 分，換算約 `4.1 WAR`。

---

## 相關頁面
- [[metrics/WAR|WAR（Wins Above Replacement）]]
- [[principles/Counting-vs-Rate-Statistics|累積數據 vs. 比率數據]]
- [[principles/Positional-Adjustment|守備位置調整]]
- 來源：[[sources/2010-02-26-FanGraphs-Replacement-Level]]
