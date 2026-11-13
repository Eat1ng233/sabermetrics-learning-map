---
title: Win Expectancy（WE，勝率預期）
type: concept
tags:
  - sabermetrics
  - win-expectancy
  - win-probability
sources:
  - "[[sources/2010-02-17-FanGraphs-Win-Expectancy]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Win Expectancy（WE，勝率預期）

## 一句話定義
**Win Expectancy（WE）** 依據歷史近十年相似得分環境的比賽結果，估算在特定「局數、比數、出局數與壘包狀態」下，主隊或客隊最終贏得比賽的百分比機率。

## 計算與系統特性
- **基準起點**：標準 WE 走勢圖賽前預設雙方各 `50%`；FanGraphs 的 **Game Odds** 則進一步納入主場優勢、先發投手與打線實力差異。
- **核心基礎**：WE 是 [[metrics/WPA|WPA]]（單一打席前後的 WE 差值）與 [[metrics/LI|LI]]（當下可能產生的 WE 擺盪幅度）的計算基石。
- **極限**：標準 WE 僅代表「聯盟平均球員」在該情境下的長期歷史平均勝率，並不知道當下打擊區與投手丘上是哪兩位球員對決。

## 參考來源
- [[sources/2010-02-17-FanGraphs-Win-Expectancy]]
