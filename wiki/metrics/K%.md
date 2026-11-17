---
title: K%（Strikeout Percentage，三振率）
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

# K%（Strikeout Percentage，三振率）

## 一句話定義
**K%** 衡量打者在所有打席（PA）中被三振的頻率，或投手在所有面對打席（BF）中投出三振的頻率（FanGraphs 自 2011 年起統一將打者 K% 分母由 AB 改為 PA）。

## 計算公式與穩定性
$$\text{打者 K\%} = \frac{SO}{PA}, \quad \text{投手 K\%} = \frac{SO}{BF}$$

- **極速穩定**：打者僅需約 **60 PA**、投手僅需數十個面對打席即可開始穩定。
- **投手評估優於 K/9**：以面對打席為分母，不會像 [[metrics/K-9|K/9]] 因單局被上壘過多而失真。

## 基準值與判讀區間
- **打者 K%**（越低越好，惟需搭配長打與時代趨勢）：頂尖 `10.0%`、優秀 `12.5%`、高於平均 `16.0%`、平均 `20.0%`、低於平均 `22.0%`、欠佳 `25.0%`、極差 `27.5%`。
- **投手 K%**（越高越好，後援約比先發高 3%）：頂尖 `27.0%`、優秀 `24.0%`、高於平均 `22.0%`、平均 `20.0%`、低於平均 `17.0%`、欠佳 `15.0%`、極差 `13.0%`。

## 本壘板紀律對應指標
- K% 是結果，[[concepts/Plate-Discipline|本壘板紀律]]指標描述背後的取向：[[metrics/SwStr%|SwStr%]]（揮空 ÷ 總投球，平均約 9.5%）與 K% 高度相關，[[metrics/Contact%|Contact%]]、[[metrics/O-Swing%|O-Swing%]] 則說明三振來自揮空還是追打。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-19-FanGraphs-K-and-BB-Percent]]
- [[sources/2010-02-19-FanGraphs-Pitching-Rate-Stats]]
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
