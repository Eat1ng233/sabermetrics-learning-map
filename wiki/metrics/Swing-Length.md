---
title: Swing Length（揮棒長度）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Swing-Length]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
  - "[[sources/2010-02-18-FanGraphs-Plate-Discipline]]"
created: 2026-11-13
updated: 2026-11-17
status: active
---

# Swing Length（揮棒長度）

## 一句話定義
**Swing Length** 衡量打者揮棒「短或長」：球棒棒頭從 bat tracking 開始記錄（約擊球前 150 毫秒）到擊球點，在三維空間中移動的**總距離（呎）**。

## 計算方式與核心邏輯
- Σ 棒頭在 X/Y/Z 空間的移動距離，自追蹤起點至接觸點。

## 基準值與判讀區間
- **MLB 平均 7.3 呎**；季平均範圍約 **6 呎以下至 8.5 呎以上**（最短到最長相差 40 吋以上）。
- 例：Luis Arraez **4.4 呎**（短而快）；Giancarlo Stanton **9.7 呎**（兩倍以上）。
- 2024 年首月：
  | | AVG | SLG | wOBA | Whiff% |
  |---|---|---|---|---|
  | 短於平均 | .258 | .359 | .268 | 19% |
  | 長於平均 | .235 | .422 | .282 | 30% |
  → 短揮棒較易接觸、較少長打；長揮棒相反。

## 演進脈絡與相關指標
- 與 [[metrics/Bat-Speed|Bat Speed]] 有重疊但非完全對應：2024 首月 Oneil Cruz 與 Paul Goldschmidt 揮棒長度同為 7.7 呎，Cruz 卻快將近 5 mph。
- 揮空傾向可對照 [[concepts/Plate-Discipline|本壘板紀律]]中的 Contact%、SwStr%。屬 [[concepts/Bat-Tracking|Bat Tracking]]。

## 限制與常見誤區
- 長短無絕對好壞，是「接觸 vs. 力量」的取捨。

## 與本壘板紀律指標的關係
> [!warning] 定義差異：Whiff%（每次揮棒）vs. FanGraphs SwStr%（每球）
> 本頁的 Whiff%（短揮棒 19%、長揮棒 30%）是「揮空 ÷ 揮棒次數」；FanGraphs 的 [[metrics/SwStr%|SwStr%]] 則是「揮空 ÷ 總投球數」，聯盟平均約 9.5%（來源：[[sources/2010-02-18-FanGraphs-Plate-Discipline]]）。兩者分母不同，數值不可直接比較；更多揮棒端指標見 [[concepts/Plate-Discipline|本壘板紀律]]。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Swing-Length]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
