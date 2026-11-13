---
title: Baserunning / Throwing Value（跑壘／外野傳球價值）
type: metric
tags:
  - sabermetrics
  - baserunning
  - fielding
  - statcast
  - run-value
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Baserunning-Throwing-Value]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Baserunning / Throwing Value（跑壘／外野傳球價值）

## 一句話定義
**Baserunning / Throwing Value** 評估跑者在擊球後「多推進一個壘」，以及外野手「阻止多推進」的得分價值。

## 計算方式與核心邏輯
1. 輸入：跑者速度、外野手臂力、跑者在壘道上的位置、外野手與球及各壘包的距離。
2. 對每次機會估計**成功機率**，以實際結果 − 預期機率累積成季指標（以得分表示）。
3. 同時計入「**推進／阻止**」與「**是否嘗試**」——外野手因臂力名聲讓跑者不敢跑（hold）同樣獲得加分，而不只是助殺。
4. **不含盜壘**：僅衡量擊球後對野手的額外推進。

## 基準值與判讀區間
- 單一play：Ronald Acuña Jr. 在僅 **5%** 預估成功率下觸殺試圖延長為二壘安打的 Alec Burleson → **+0.95 分**。
- 2022 外野榜首 Michael A. Taylor **+6**：觸殺 +4、壓制（hold）+6、放行推進 −5（原文分項加總與總計的差異照錄）。

## 演進脈絡與相關指標
- 跑者端對應 FanGraphs [[metrics/UBR|UBR]]（BsR 中的非盜壘跑壘）；外野端對應 [[metrics/UZR|UZR]] ARM／[[metrics/DRS|DRS]] rARM，並計入 [[metrics/Fielding-Run-Value|FRV]] 的傳球分。
- 物理輸入：[[metrics/Sprint-Speed|Sprint Speed]]、[[metrics/Arm-Strength|Arm Strength]]。

## 限制與常見誤區
- 不包含盜壘（參見 [[metrics/wSB|wSB]]）與雙殺閃避（[[metrics/wGDP|wGDP]]）。
> [!note] 原文數字
> 原文稱 Taylor「+6 runs」又說「Taylor's +5 came via…」，分項 +4 +6 −5 = +5，原始來源本身存在 +5／+6 的不一致，此處照錄待查證。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Baserunning-Throwing-Value]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
