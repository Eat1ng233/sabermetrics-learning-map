---
title: AVG（Batting Average，打擊率）
type: metric
tags:
  - sabermetrics
  - hitting
  - basic-stats
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-16-FanGraphs-OBP]]"
  - "[[sources/2026-11-13-MLB-Statcast-xBA]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# AVG（Batting Average，打擊率）

## 一句話定義
**AVG** 衡量打者在每個「打數（AB）」中擊出安打（H）的比率，是最傳統的打擊評估指標。

## 計算公式
$$\text{AVG} = \frac{H}{AB}$$

（註：打數 `AB` 不包含四壞球保送 `BB`、觸身球 `HBP`、高飛犧牲打 `SF`、犧牲觸擊 `SH` 與妨礙打擊。）

## 限制與演進脈絡
- **忽略保送與觸身球**：打者選到保送不會計入 AVG，但避免出局對得分至關重要（詳見 [[metrics/OBP|OBP]]）。例如一位打擊率 `.270` 但 OBP `.380` 的打者，往往比打擊率 `.300` 卻從不選保送的打者更有價值。
- **忽略長打差異**：一壘安打與全壘打在 AVG 中權重完全相同。
- **混雜場內球運氣**：AVG 同時受三振率、全壘打與 [[metrics/BABIP|BABIP]] 影響，現代分析通常將其拆解或改用 [[metrics/wOBA|wOBA]]、[[metrics/wRC+|wRC+]]。

## Statcast 對應指標
- **Statcast 預期版**：[[metrics/xBA|xBA]] 依擊球品質估計每顆擊球成為安打的機率，排除守備影響。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-16-FanGraphs-OBP]]
- [[sources/2026-11-13-MLB-Statcast-xBA]]
