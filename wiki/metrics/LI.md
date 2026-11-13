---
title: LI（Leverage Index，關鍵度指數）
type: metric
tags:
  - sabermetrics
  - leverage-index
  - win-probability
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-17-FanGraphs-LI]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# LI（Leverage Index，關鍵度指數）

## 一句話定義
由 Tom Tango 創立，**LI** 量化比賽當下每一刻的緊張與關鍵程度，衡量該打席「可能造成的勝率擺盪幅度」相對於聯盟平均擺盪的倍數。

## 計算邏輯與衍生指標
- **計算概念**：給定當下局數、比數、出局數與壘包狀態，計算所有可能打擊結果造成的[[concepts/Win-Expectancy|勝率預期（WE）]]變化量，依發生機率加權平均後，除以聯盟平均單一打席的 WE 擺盪幅度。
- **常見變體**：
  - `pLI`：球員所有出賽事件的平均 LI。
  - `phLI`：打者擔任代打（Pinch Hit）時的平均 LI。
  - `gmLI`：投手登板瞬間的平均 LI（檢視牛棚角色與高壓使用度）。
  - `inLI` / `exLI`：投手每局開始／退場瞬間的平均 LI。

## 基準值與判讀區間
- **`1.0` 為聯盟平均**（真實比賽約 60% 情境 `LI < 1.0`，約 10% 情境 `LI > 2.0`，極端最高可達約 `10`）：
  - **低關鍵（Low Leverage）**：`0 – 0.85`
  - **中關鍵（Medium Leverage）**：`0.85 – 2.0`
  - **高關鍵（High Leverage）**：`2.0+`

## 應用與限制
- 適合檢視總教練的牛棚調度與代打使用策略；但球員在高關鍵情境的分項成績（Splits）受小樣本隨機波動影響大，不具跨季預測力。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-17-FanGraphs-LI]]
