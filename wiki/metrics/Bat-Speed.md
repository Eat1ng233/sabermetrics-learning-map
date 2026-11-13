---
title: Bat Speed（揮棒速度）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
  - "[[sources/2026-11-13-MLB-Statcast-Fast-Swing-Rate]]"
  - "[[sources/2026-11-13-MLB-Statcast-Blasts]]"
  - "[[sources/2026-11-13-MLB-Statcast-Squared-Up-Rate]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Bat Speed（揮棒速度）

## 一句話定義
**Bat Speed** 是球棒甜蜜點在**擊球瞬間**（揮空時為球與球棒應交會之處）的移動速度（mph）。

## 計算方式與核心邏輯
- 屬 Statcast 的「量測值（measurement）」，由 [[entities/Hawk-Eye|Hawk-Eye]] 高速攝影機（2023 年升級為 300 fps）自 2023 年下半季起追蹤。
- MLB.com 詞彙表目前**沒有 Bat Speed 獨立細項頁**，定義取自 Statcast 總覽頁，門檻與案例取自相關細項頁。

## 基準值與判讀區間
- **75 mph** 為「快速揮棒」門檻（[[metrics/Fast-Swing-Rate|Fast-swing Rate]]）：單次揮棒產出從此處開始達到聯盟平均；2024 年首月 23% 的揮棒達標。
- 案例：Shohei Ohtani 一記全壘打 82.8 mph；Adley Rutschman 一記安打僅 67 mph（低於平均，見 [[metrics/Squared-Up-Rate|Squared-up Rate]]）。

## 演進脈絡與相關指標
- 與 [[metrics/Squared-Up-Rate|Squared-up%]] 結合為 [[metrics/Blasts|Blasts]]（Squared-up%×100 + Bat Speed ≥ 164）。
- 揮棒速度與球速共同決定理論最大 [[metrics/Exit-Velocity|Exit Velocity]]。
- 與 [[metrics/Swing-Length|Swing Length]] 相關但非一對一。屬 [[concepts/Bat-Tracking|Bat Tracking]]。

## 限制與常見誤區
- 揮得快通常伴隨揮得長、揮空多；需與接觸品質一起看。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
- [[sources/2026-11-13-MLB-Statcast-Fast-Swing-Rate]]
- [[sources/2026-11-13-MLB-Statcast-Blasts]]
- [[sources/2026-11-13-MLB-Statcast-Squared-Up-Rate]]
