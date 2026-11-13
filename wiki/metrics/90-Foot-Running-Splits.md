---
title: 90-foot Running Splits（90 呎分段跑速）
type: metric
tags:
  - sabermetrics
  - baserunning
  - statcast
  - speed
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Running-Splits-90ft]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# 90-foot Running Splits（90 呎分段跑速）

## 一句話定義
**90-foot Running Splits** 把打者「本壘到一壘」的跑動，標準化為 **90 呎（約 30 碼衝刺）**並以**每 5 呎**為一段拆解。

## 計算方式與核心邏輯
- 只採 **topped 或 weakly hit** 球的本壘到一壘跑動（[[metrics/Sprint-Speed|Sprint Speed]] 則另含兩個壘以上的跑動）。
- 為何需要外推？[[metrics/Home-to-First|Home to First]] 自球棒觸球起算到踩壘為止，起訖點（本壘板後尖端到一壘後緣）並非恰好 90 呎，且**左打者跑的距離比右打者短**。將每次合格跑動外推為 90 呎，才能放在同一標準比較。

## 演進脈絡與相關指標
- 補足 Sprint Speed 只看「最快 1 秒」的不足，可觀察起跑與加速段（類比 [[metrics/Jump|Jump]] 的 Reaction / Burst）。
- Baseball Savant 可與 Usain Bolt 百米世界紀錄的分段比較，並能選 4 名球員進行虛擬賽跑。

## 限制與常見誤區
- 樣本僅限特定擊球類型的跑動；包含揮棒收尾，仍非純粹的起跑測驗。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Running-Splits-90ft]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
