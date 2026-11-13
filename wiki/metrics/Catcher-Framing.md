---
title: Catcher Framing（Statcast 捕手框球）
type: metric
tags:
  - sabermetrics
  - fielding
  - catcher
  - statcast
  - framing
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Catcher-Framing]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Catcher Framing（Statcast 捕手框球）

## 一句話定義
**Catcher Framing** 衡量捕手以接球技巧讓主審**更可能判好球**的能力——把邊緣壞球「偷」成好球，或不讓好球因接球不佳被判壞球。

## 計算方式與核心邏輯
- **為何重要**：單一球數影響巨大——2025 年打者在 1-0 後 OPS **.806**，在 0-1 後僅 **.607**。
- **Shadow Zone**：好球帶邊緣，自帶內一顆球寬到帶外一顆球寬；判決可能兩面倒，是框球的主戰場。現行數據已納入所有區域的接球。
- 排行榜兩大指標：
  - **Shadow Strike %**：捕手在邊緣區（所有未揮棒球）的被判好球率。
  - **Catcher Framing Runs**：多爭取的好球換算得分，**每顆好球 0.125 分**。
- **2025 模型更新**：依每球距好球帶內外的距離估計「被判好球機率」，可看到每位捕手最難爭取到的好球與最可惜丟掉的好球，並可依月份、投手慣用手、打者站位、球種篩選。另提供 Heart（帶內一球寬以上）、Chase、Waste 等區域細分，以及從投手、打者、球隊角度的框球影響。

## 基準值與判讀區間
- 2025：Patrick Bailey **+25**（使他成為全聯盟 [[metrics/Fielding-Run-Value|FRV]] 最高的守備員）；Edgar Quero **−13**。
- 2018–25 累計：Austin Hedges **+72**、Bailey +65、Yasmani Grandal +60、Jose Trevino +51、Christian Vázquez +46、Cal Raleigh +40。
- 資料涵蓋：更新後模型回溯至 **2018**；2015–17 僅有全季層級。

## 演進脈絡與相關指標
- 早期研究與 FanGraphs 的捕手守備框架見 [[concepts/Catcher-Defense|捕手守備評估]]（該頁引述頂尖捕手每季約 +15–25 分，與 Bailey 2025 年 +25 一致）。
- 在 FRV 中以 1 strike = 0.125 runs 計入；捕手其他元件：[[metrics/Pop-Time|Pop Time]]（阻殺）、擋球（1 block = 0.25 分）。

## 限制與常見誤區
- 框球價值會與投手控球、主審個人好球帶交互影響；單季樣本仍有雜訊（參見 [[principles/Sample-Size|Sample Size]]）。
- 自動好球帶（ABS）挑戰制度若擴大實施，框球價值可能改變（原文未論及，屬待追蹤議題）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Catcher-Framing]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
