---
title: Ideal Attack Angle Rate（理想攻擊角度率）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Ideal-Attack-Angle]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Ideal Attack Angle Rate（理想攻擊角度率）

## 一句話定義
**Ideal Attack Angle Rate** 是打者所有競爭性揮棒中，[[metrics/Attack-Angle|攻擊角度]]落在理想區間 **5°–20°** 的比例。

## 計算方式與核心邏輯
$$\text{Ideal AA\%} = \frac{\text{攻擊角} \in [5°, 20°] \text{ 的競爭性揮棒}}{\text{競爭性揮棒}}$$
- 5–20° 被視為「理想」，因為此區間的接觸產生最多進攻價值——更多平飛球與飛球、更高長打率與更多長打。

## 基準值與判讀區間（2024）
- Alex Bregman **69%**、Kyle Schwarber 67%、José Ramírez 64%、Juan Soto 61%。

## 演進脈絡與相關指標
- [[metrics/Attack-Angle|Attack Angle]] 的區間化版本；結果端類比 [[metrics/Sweet-Spot|Sweet Spot%]]（擊球仰角 8–32°）。屬 [[concepts/Bat-Tracking|Bat Tracking]]。

## 限制與常見誤區
- **主要反映時機**：揮棒過程中攻擊角持續變化，揮太早或太晚經過理想區間都不利於有效接觸。
- 資料自 2023 年明星賽後起。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Ideal-Attack-Angle]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
