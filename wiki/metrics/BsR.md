---
title: BsR（Base Running Runs Above Average）
type: metric
tags:
  - sabermetrics
  - baserunning
  - value
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2014-09-11-FanGraphs-BsR]]"
  - "[[sources/2026-11-13-MLB-Statcast-Sprint-Speed]]"
  - "[[sources/2026-11-13-MLB-Statcast-Baserunning-Throwing-Value]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# BsR（Base Running Runs Above Average，跑壘高於平均得分）

## 一句話定義
**BsR** 衡量球員在壘包上透過盜壘、額外進壘與閃避雙殺等跑壘表現，相對於聯盟平均為球隊多貢獻（或損失）的**總得分數**。

## 組成架構與基準
$$\text{BsR} = \text{[[metrics/wSB|wSB]]} + \text{[[metrics/UBR|UBR]]} + \text{[[metrics/wGDP|wGDP]]}$$

- **`0` 為聯盟平均**，約每 **9–10 分**等於 **1 勝**，為 FanGraphs [[metrics/WAR|WAR]] 與 [[metrics/Off|Off]] 的跑壘組件。
- **盜壘損益平衡點**：盜壘成功記 `+0.2` 分，但失敗成本（`runCS = 2 × RunsPerOut + 0.075`）高得多，平均須維持約 **67%（三分之二）以上**盜壘成功率才具正價值。

| 評級 | BsR |
| :--- | :---: |
| 頂尖（Excellent） | `8` |
| 優秀（Great） | `6` |
| 高於平均（Above Average） | `2` |
| 平均（Average） | `0` |
| 低於平均（Below Average） | `-2` |
| 欠佳（Poor） | `-4` |
| 極差（Awful） | `-6` |

## 歷史與使用注意
- 1950 年代前缺乏可靠的盜壘失敗（CS）紀錄；2002 年前沒有 UBR（故 2002 年以前 BsR 僅含 wSB）。
- 需超過一季以上樣本才具預測力；且 BsR **並非**團隊預期得分模型「BaseRuns」。

## Statcast 對應指標
- **Statcast 對照**：跑者速度的物理量測見 [[metrics/Sprint-Speed|Sprint Speed]]、[[metrics/Lead-Distance|Lead Distance]]；擊球後多推進的機率模型見 [[metrics/Baserunning-Throwing-Value|Baserunning/Throwing Value]]（不含盜壘）。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2014-09-11-FanGraphs-BsR]]
- [[sources/2026-11-13-MLB-Statcast-Sprint-Speed]]
- [[sources/2026-11-13-MLB-Statcast-Baserunning-Throwing-Value]]
