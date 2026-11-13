---
title: Hit Distance（DST，擊球距離）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - batted-ball
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Hit-Distance]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Hit Distance（DST，擊球距離）

## 一句話定義
**Hit Distance（DST）** 是擊球「落點」與本壘板的距離——不論落在地面、看台、牆面或守備員手套。

## 計算方式與核心邏輯
$$\text{aDST} = \frac{\sum \text{Hit Distance}}{\text{BBE}}$$
- Statcast 可記錄球觸地瞬間或最終停止的位置；相對本壘的**最遠距離**最能描述一次 [[metrics/BBE|BBE]]。

## 演進脈絡與相關指標
- 比較全壘打時應使用 [[metrics/Projected-HR-Distance|Projected Home Run Distance]]，因看台與牆會截斷飛行路徑。
- 由 [[metrics/Exit-Velocity|EV]] 與 [[metrics/Launch-Angle|LA]] 決定，並受環境影響（參見 [[principles/Park-Factors|球場校正係數]]）。

## 限制與常見誤區
- 被接殺的深遠飛球與滾地球混合平均，aDST 的意義有限；需搭配擊球型態解讀。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Hit-Distance]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
