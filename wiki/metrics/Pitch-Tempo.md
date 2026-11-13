---
title: Pitch Tempo（投球節奏，Statcast 版）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - pace
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Pitch-Tempo]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Pitch Tempo（投球節奏，Statcast 版）

## 一句話定義
**Pitch Tempo** 衡量投手兩球之間花多少時間：一球出手到下一球出手之間的**中位數**秒數。

## 計算方式與核心邏輯
- 只計入：前一球為**未揮棒**（好球或壞球判決）且仍對**同一打者**的下一球。
- 每位投手計算兩種：**壘上無人**、**壘上有人**。
- 分類：**≤ 15 秒 = Fast**；**> 30 秒 = Slow**。
- **與 2023 年投球計時器不同**：
  - 計時器：投手接到捕手回傳開始 → 開始投球動作結束。
  - Pitch Tempo：出手 → 下一次出手。
  - 排行榜提供「**計時器等效值**」：一般從「開始投球動作」到「接回傳球」約 **6 秒**（出手 1.5 秒 + 球飛向捕手 0.5 秒 + 回傳 4 秒），故 計時器等效值 ≈ Tempo − 6 秒。

## 基準值與判讀區間
- 2022：Brent Suter 壘上無人 **12.6 秒**（最快）；Kenley Jansen 壘上有人 **31.3 秒**（最慢）。

## 演進脈絡與相關指標
> [!warning] 定義差異：Statcast Pitch Tempo vs. FanGraphs Pace
> - **FanGraphs [[metrics/Pace|Pace]]**：以 PITCHf/x 時間戳記計算打席內每球之間的**平均**間隔（排除牽制與暫停），平均約 21.5 秒（來源：[[sources/2015-05-25-FanGraphs-Pace]]）。
> - **Statcast Pitch Tempo**：只計「前球未揮棒、同一打者」的出手間隔**中位數**，並分壘上有無人（本頁來源）。
> 兩者口徑不同，數值不可直接比較。

## 限制與常見誤區
- 主要為描述與觀賞性資料；與投球成效的關聯原文未論及。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Pitch-Tempo]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
