---
title: Swords（騙到打者的狼狽揮空）
type: metric
tags:
  - sabermetrics
  - pitching
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Swords]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Swords（騙到打者的狼狽揮空）

## 一句話定義
**Sword** 是投手把打者騙到做出「**非競爭性、令人後悔的揮棒**」——由 Rob “Pitching Ninja” Friedman 推廣的用語，Statcast 以 bat tracking 為其下定義。

## 計算方式與核心邏輯
必須**同時符合**：
1. 揮空好球（**不含界外**）。
2. 球棒越過本壘板前緣。
3. **未完成揮棒**：棒頭越過本壘板前方 5 吋的線，但沒有回到線後。
4. 揮棒速度在**第 10 百分位以下**（證明沒有真正出力）。
5. 最後追蹤影格速度 **≤ 20 mph**（排除完整揮棒）。

## 基準值與判讀區間
- 2024 年首月：約**每隊每場略多於 1 次**。

## 演進脈絡與相關指標
- 屬 [[concepts/Bat-Tracking|Bat Tracking]] 衍生指標；與揮空率（[[concepts/Plate-Discipline|SwStr%]]）、[[metrics/PutAway%|PutAway%]] 同屬「宰制打者」的面向。

## 限制與常見誤區
- 官方自承偏「輕鬆有趣」而非純分析指標；但可能反映投手的欺敵、球威、配球或其組合。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Swords]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
