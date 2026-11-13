---
title: Pace（投球節奏）
type: metric
tags:
  - sabermetrics
  - pitching
  - pace
  - pitchfx
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2015-05-25-FanGraphs-Pace]]"
  - "[[sources/2026-11-13-MLB-Statcast-Pitch-Tempo]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# Pace（投球節奏）

## 一句話定義
**Pace** 依據 PITCHf/x 時間戳記，計算投手或打者在打席內「每一球之間的平均間隔秒數」（已排除牽制與投手丘暫停）。

## 參考基準與定位
- **參考秒數**：快節奏約 `20.0` 秒、平均約 `21.5` 秒、慢節奏約 `23.5` 秒（2015 年實行投球節奏新規前呈緩步上升趨勢）。
- **定位**：與場上實際表現幾乎沒有相關性，屬觀賞性與趣味性指標（Fun Fact）。

## Statcast 對應指標
> [!warning] 定義差異：FanGraphs Pace vs. Statcast Pitch Tempo
> Statcast [[metrics/Pitch-Tempo|Pitch Tempo]] 只計「前球未揮棒、同一打者」的出手間隔**中位數**並分壘上有無人（2022 Suter 無人 12.6 秒最快），與本頁 PITCHf/x 平均間隔口徑不同（來源：[[sources/2026-11-13-MLB-Statcast-Pitch-Tempo]]）。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2015-05-25-FanGraphs-Pace]]
- [[sources/2026-11-13-MLB-Statcast-Pitch-Tempo]]
