---
title: 樣本數與穩定性（Sample Size & Stabilization）
type: principle
tags:
  - sabermetrics
  - principles
  - methodology
sources:
  - "[[sources/2010-02-18-FanGraphs-Sample-Size]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 樣本數與穩定性（Sample Size & Stabilization）

## 一句話定義
**樣本數與穩定性**研究需要累積多少打席（PA）、面對打者數（BF）或場內球（BIP），才能讓隨機雜訊互相抵銷，使觀測數據可靠地反映球員真實實力。

---

## 核心統計觀念：漸進趨穩，而非瞬間穩定

1. **「穩定點（Stabilization Point）」的真正含義**：
   - Russell Carleton（Pizza Cutter）透過「分半相關法（Split-half correlation）」計算出各指標達到相關係數 $r = 0.7$（即決定係數 $R^2 = 0.49$）所需的樣本量。
   - **重要提醒**：指標不會在跨過某個 PA 後「突然穩定」，而是**隨著樣本增加逐漸變得更穩定**。100 PA 永遠比 50 PA 可靠，但邊際效益遞減（Sean Dolinar & Jonah Pemstein 的 Cronbach's Alpha 信度曲線顯示，前 200 PA 的資訊增量遠大於後 200 PA）。
2. **為何不同指標穩定速度差異極大？**
   - 牽涉變數越少的技能越快穩定（如三振率只取決於投打對決，打者 **60 PA** 即跨過門檻）。
   - 牽涉擊球品質、方向、天氣、守備能力與運氣的指標則極慢穩定（如投手 [[metrics/BABIP|BABIP]] 需 **2,000 BIP**，約相當於三個完整球季）。

---

## Carleton $R^2 = 0.49$ 穩定門檻經驗參考表

| 打擊指標（Offense） | 穩定門檻 | 投球指標（Pitching） | 穩定門檻 |
| :--- | :--- | :--- | :--- |
| [[metrics/K%\|K%（三振率）]] | **60 PA** | [[metrics/K%\|K%（三振率）]] | **70 BF** |
| [[metrics/BB%\|BB%（保送率）]] | **120 PA** | [[metrics/BB%\|BB%（保送率）]] | **170 BF** |
| HBP%（觸身球率） | 240 PA | HBP%（觸身球率） | 640 BF |
| 1B%（一壘安打率） | 290 PA | 1B%（被一壘安打率） | 670 BF |
| XBH%（長打率／依PA） | 1,610 PA | XBH%（被長打率／依BF） | 1,450 BF |
| HR%（全壘打率） | 170 PA | HR%（被全壘打率） | 1,320 BF |
| [[metrics/AVG\|AVG（打擊率）]] | 910 AB | 被打擊率（AVG） | 630 BF |
| [[metrics/OBP\|OBP（上壘率）]] | 460 PA | 被上壘率（OBP） | 540 BF |
| [[metrics/SLG\|SLG（長打率）]] | 320 AB | 被長打率（SLG） | 550 AB |
| [[metrics/ISO\|ISO（純長打率）]] | 160 AB | 被純長打率（ISO） | 630 AB |
| [[metrics/GB%\|GB%（滾地球率）]] | **80 BIP** | [[metrics/GB%\|GB%（滾地球率）]] | **70 BIP** |
| [[metrics/FB%\|FB%（飛球率）]] | **80 BIP** | [[metrics/FB%\|FB%（飛球率）]] | **70 BIP** |
| [[metrics/LD%\|LD%（平飛球率）]] | 600 BIP | [[metrics/LD%\|LD%（平飛球率）]] | 650 BIP |
| [[metrics/HR-FB\|HR/FB]] | 50 FBs | [[metrics/HR-FB\|HR/FB]] | 400 FB |
| [[metrics/BABIP\|BABIP]] | 820 BIP | [[metrics/BABIP\|BABIP]] | **2,000 BIP** |

---

## 實戰應用原則
四月前三週（約 85 PA）打出 `.380 wOBA` 並不足以證明一名原本 `.310 wOBA` 的打者已脫胎換骨；但若他的 **[[metrics/K%|K%]]** 或 **[[metrics/GB%|GB%]]** 在 85–100 PA 出現劇烈改變，這些快穩定指標比結果數據更值得追蹤。

---

## 相關頁面
- [[principles/Regression-Toward-the-Mean|向均值回歸]]
- [[principles/Splits|分項數據]]
- [[principles/Luck|運氣]]
- 來源：[[sources/2010-02-18-FanGraphs-Sample-Size]]
