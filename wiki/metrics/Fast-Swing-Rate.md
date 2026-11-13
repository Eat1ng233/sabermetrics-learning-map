---
title: Fast-swing Rate（快速揮棒率）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Fast-Swing-Rate]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Fast-swing Rate（快速揮棒率）

## 一句話定義
**Fast-swing Rate** 是打者所有揮棒中，[[metrics/Bat-Speed|揮棒速度]]達到 **75 mph 以上**的比例。

## 計算方式與核心邏輯
$$\text{Fast-swing Rate} = \frac{\text{揮棒速度} \ge 75\text{ mph 的揮棒}}{\text{全部揮棒}}$$
- 為何是 75 mph？類比 [[metrics/Hard-Hit-Rate|Hard-hit]] 的 95 mph：75 mph 是單次揮棒產出開始達到聯盟平均的點，之後隨速度提升（至某程度）持續獲益。

## 基準值與判讀區間（2024 年首月）
- 全聯盟 **23%** 的揮棒為快速揮棒。
  | | AVG | SLG | wOBA | Hard-hit% | RV/100 |
  |---|---|---|---|---|---|
  | 快速揮棒 | .307 | .603 | .389 | 52% | +0.6 |
  | 非快速揮棒 | .246 | .369 | .266 | 35% | −3.2 |

## 演進脈絡與相關指標
- [[metrics/Bat-Speed|Bat Speed]] 的門檻化版本；與 [[metrics/Squared-Up-Rate|Squared-up]] 結合即 [[metrics/Blasts|Blasts]]。屬 [[concepts/Bat-Tracking|Bat Tracking]]。

## 限制與常見誤區
- 揮棒更快通常伴隨更長揮棒與更多揮空（見 [[metrics/Swing-Length|Swing Length]]），單看此率會忽略接觸能力的代價。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Fast-Swing-Rate]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
