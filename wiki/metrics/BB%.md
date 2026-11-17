---
title: BB%（Walk Percentage，保送率）
type: metric
tags:
  - sabermetrics
  - hitting
  - pitching
  - plate-discipline
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-19-FanGraphs-K-and-BB-Percent]]"
  - "[[sources/2010-02-19-FanGraphs-Pitching-Rate-Stats]]"
  - "[[sources/2010-02-18-FanGraphs-Plate-Discipline]]"
created: 2026-11-12
updated: 2026-11-17
status: active
---

# BB%（Walk Percentage，保送率）

## 一句話定義
**BB%** 衡量打者在所有打席（PA）中獲得四壞球保送的頻率，或投手在所有面對打席（BF）中投出保送的頻率。

## 計算公式與穩定性
$$\text{打者 BB\%} = \frac{BB}{PA}, \quad \text{投手 BB\%} = \frac{BB}{BF}$$

- **快速穩定**：打者約需 **120 PA**、投手僅需數十個面對打席即可開始反映真實控球與選球能力。
- **投手評估優於 BB/9**：以面對打席為分母，不會像 [[metrics/BB-9|BB/9]] 因單局被上壘過多而扭曲。

## 基準值與判讀區間
- **打者 BB%**（越高越好）：頂尖 `15.0%`、優秀 `12.5%`、高於平均 `10.0%`、平均 `8.0%`、低於平均 `7.0%`、欠佳 `5.5%`、極差 `4.0%`。
- **投手 BB%**（越低越好，後援約比先發高 1%）：頂尖 `4.5%`、優秀 `5.5%`、高於平均 `6.5%`、平均 `7.7%`、低於平均 `8.0%`、欠佳 `8.5%`、極差 `9.0%`。

## 本壘板紀律對應指標
- BB% 是結果，[[concepts/Plate-Discipline|本壘板紀律]]指標描述背後的取向：[[metrics/O-Swing%|O-Swing%]]（追打帶外球，平均約 30%）、[[metrics/Zone%|Zone%]]（投進好球帶的比例，平均約 45%）與 [[metrics/F-Strike%|F-Strike%]]（首球好球，平均約 59%）。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-19-FanGraphs-K-and-BB-Percent]]
- [[sources/2010-02-19-FanGraphs-Pitching-Rate-Stats]]
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
