---
title: Pop Time（POP，捕手傳殺時間）
type: metric
tags:
  - sabermetrics
  - fielding
  - statcast
  - catcher
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Pop-Time]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Pop Time（POP，捕手傳殺時間）

## 一句話定義
**Pop Time** 衡量捕手在盜壘或牽制時，從**球打進手套**到**傳球預計抵達目標壘包中心**所經過的秒數。

## 計算方式與核心邏輯
- 起點：投球碰到捕手手套；終點：傳球預計抵達壘包中心。若傳球落點在壘包前方或後方，依球速**推算**抵達中心的時間。
- 三大組成：**步法（Footwork）** + **換手（Exchange，手套到出手）** + **[[metrics/Arm-Strength|臂力]]**。

## 基準值與判讀區間
- **2018 盜二平均：2.01 秒**。最佳（≥15 次盜二）：J.T. Realmuto **1.90**、Yan Gomes 1.93、Jorge Alfaro／Austin Hedges／Manny Piña／Gary Sánchez 1.94。

## 演進脈絡與相關指標
- 捕手臂力（前 10% 全力傳球平均）同列於 Pop Time 排行榜。
- 結果面價值計入 [[metrics/Fielding-Run-Value|FRV]] 的 Catcher Throwing（1 SB prevented = 0.65 分）；傳統的阻殺得分見 [[concepts/Catcher-Defense|捕手守備（rSB）]]。
- 對跑者端的對應因素：[[metrics/Lead-Distance|Lead Distance]]、[[metrics/Sprint-Speed|Sprint Speed]]。

## 限制與常見誤區
- 好的 Pop Time 不保證阻殺成功：跑者速度、傳球準度、**投手投球動作時間**都佔很大比重。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Pop-Time]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
