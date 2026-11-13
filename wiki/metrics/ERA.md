---
title: ERA（Earned Run Average，防禦率）
type: metric
tags:
  - sabermetrics
  - pitching
  - era
sources:
  - "[[sources/2010-02-16-FanGraphs-ERA]]"
  - "[[sources/2026-11-13-MLB-Statcast-xERA]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# ERA（Earned Run Average，防禦率）

## 一句話定義
**ERA** 計算投手平均每投 9 局所失的自責分（Earned Runs），是最傳統的投手失分評估指標。

## 計算公式
$$\text{ERA} = \frac{\text{Earned Runs}}{\text{Innings Pitched}} \times 9$$

- **自責分**：官方紀錄員認定非因守備失誤所導致的失分。ERA 未針對球場或聯盟環境進行校正。

## 基準值與判讀區間（先發投手參考，後援約減 `0.50`）

| 評級 | ERA |
| :--- | :---: |
| 頂尖（Excellent） | `2.50` |
| 優秀（Great） | `3.00` |
| 高於平均（Above Average） | `3.40` |
| 平均（Average） | `3.75` |
| 低於平均（Below Average） | `4.00` |
| 欠佳（Poor） | `4.30` |
| 極差（Awful） | `4.60` |

## 兩大缺陷與替代指標
1. **官方紀錄員主觀性**：失誤與安打的判定標準不一致。
2. **無法剝離隱性守備失靈與運氣**：若外野手因腳程慢或判斷失誤沒追到飛球，不記失誤卻全部算在投手 ERA 帳上；同時 ERA 高度受 [[metrics/LOB%|LOB%]]（序列運氣）與 [[metrics/BABIP|BABIP]] 波動影響，未來預測力差。
- **建議搭配**：想知道「實際失分結果」看 `RA9`；想剝離守備與運氣看 [[metrics/FIP|FIP]]、[[metrics/xFIP|xFIP]]、[[metrics/SIERA|SIERA]]；跨球場與跨年代比較看 [[metrics/ERA-|ERA-]]。

## Statcast 對應指標
- **Statcast ERA 估計器**：[[metrics/xERA|xERA]] 為 xwOBA 的 ERA 量表換算，納入擊球品質。

## 參考來源
- [[sources/2010-02-16-FanGraphs-ERA]]
- [[sources/2026-11-13-MLB-Statcast-xERA]]
