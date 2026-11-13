---
title: 捕手守備評估（Catcher Defense）
type: concept
tags:
  - sabermetrics
  - defense
  - catcher
  - framing
sources:
  - "[[sources/2012-03-22-FanGraphs-Catcher-Defense]]"
  - "[[sources/2026-11-13-MLB-Statcast-Catcher-Framing]]"
  - "[[sources/2026-11-13-MLB-Statcast-Pop-Time]]"
  - "[[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# 捕手守備評估（Catcher Defense）

**捕手沒有 UZR**。由於捕手的主要守備貢獻不在處理場內擊球，現代賽伯計量學必須將捕手守備拆分為五個獨立面向評估：

1. **阻殺與抑制盜壘（Stolen Base Prevention）**：
   - FanGraphs 採用 DRS 體系的 **`rSB`**，Baseball Prospectus 則有 **`SRAA`**（阻殺率高於平均）與 **`TRAA`**（嚇阻起跑率高於平均），試圖剝離投手牽制/投球動作時間與跑者速度的影響。
2. **一般守備（Regular Fielding）**：
   - 如短打處理（Bunt Runs Saved）與本壘攻防觸殺。
3. **擋球能力（Blocking）**：
   - 防止暴投（WP）與捕逸（PB）造成跑者進壘。FanGraphs 使用基於 PITCHf/x 數據的 **`RPP`（Runs on Passed Pitches）**，依來球難度衡量捕手擋球守下的分數（FanGraphs 捕手 WAR 納入 `rSB` 與 `RPP`）。
4. **偷好球（Pitch Framing）**：
   - 透過接捕技巧將好球帶邊緣的球爭取為好球。研究估計頂尖捕手每季可透過 Framing 貢獻約 **15–25 分**（相當於 1.5–2.5 勝），惟需小心剝離投手、主審與打者的交互影響（2012 年原文章撰寫時 FanGraphs WAR 尚未納入 Framing）。
5. **配球與比賽引導（Game Management）**：
   - 捕手的配球與引導投手的策略極為重要，但目前公開數據領域仍缺乏公認的量化模型，屬於「黑盒子」。

## Statcast 對應指標
- **Statcast 捕手數據（2026-11-13 補充）**：[[metrics/Catcher-Framing|Catcher Framing]]（Shadow Zone、每好球 0.125 分；2025 Patrick Bailey +25，與本頁「頂尖 15–25 分」估計一致）、[[metrics/Pop-Time|Pop Time]]（2018 盜二平均 2.01 秒）、[[metrics/Fielding-Run-Value|FRV]] 的捕手換算（擋球 0.25 分、阻殺 0.65 分）。

## 參考來源
- [[sources/2012-03-22-FanGraphs-Catcher-Defense]]
- [[sources/2026-11-13-MLB-Statcast-Catcher-Framing]]
- [[sources/2026-11-13-MLB-Statcast-Pop-Time]]
- [[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]
