---
title: Statcast Glossary Overview — MLB.com
type: source
tags:
  - sabermetrics
  - statcast
  - mlb
  - tracking
sources: []
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Statcast Glossary Overview — MLB.com

- **作者**：MLB.com（官方詞彙表，未署名）
- **發表日期**：未標示（內文最新數據至 2023 球季；擷取日 2026-11-13）
- **出處**：MLB.com Glossary › Statcast
- **原始連結**：[Statcast | Glossary | MLB.com](https://www.mlb.com/glossary/statcast)
- **本地檔案**：`raw/articles/Statcast _ Glossary _ MLB.com.pdf`
- **配套細項頁**：46 個 Statcast 詞條（防守 9、進攻 25、投球 11，另 Bat Speed 僅於本頁定義），原文 PDF 皆存於 `raw/articles/*_ Glossary _ MLB.com.pdf`。

## 核心摘要
1. **Statcast 是什麼**：涵蓋投球、擊球、球員與球棒追蹤的全大聯盟追蹤技術。2008 年各球場先安裝投球追蹤（[[entities/PITCHf-x|PITCHf/x]]）；Statcast 2014 年部分試行、**2015 年**全 30 座球場上線。
2. **硬體演進**：2015–19 年為攝影機 + 雷達混合系統；**2020 年**改用 [[entities/Hawk-Eye|Hawk-Eye]]。每座球場 12 台攝影機（5 台高幀率負責投球與球棒追蹤，2023 年由 100 fps 升至 300 fps；7 台追蹤球員與擊球），擊球追蹤率由約 89% 提升至 99%；2023 年下半季起提供 bat tracking。
3. **規模**：2023 年（開幕日至世界大賽）追蹤超過 **72.5 萬球**與 **12.5 萬顆擊球**。
4. **量測值（Measurements）vs. 指標（Metrics）**：量測值是場上原始數字（Arm Strength、Bat Speed、Extension、Exit Velocity、Launch Angle、Pitch Velocity、Pop Time、Spin Rate）；指標是量測值的組合（Barrels、Blasts、Catch Probability、xBA、xwOBA、OAA、Sprint Speed 等）。
5. **Baseball Savant**：[[entities/Baseball-Savant|BaseballSavant.MLB.com]] 是 Statcast 資料的官方集散地，提供 Illustrator 繪圖、排行榜、自訂 Search、即時 Gamefeed 與 3D 投球追蹤。例：2023 年反方向全壘打最多為 Julio Rodríguez（12 支）；好球帶內四縫線揮空最多為 Spencer Strider（208 次）。
6. **總覽頁獨有數據**：2023 年 xBA 前三 Acuña .357（實際 .337）、Arraez .329、Freeman .323；2023 年 Sprint Speed 榜首 Elly De La Cruz 與 Bobby Witt Jr. 並列 30.5 ft/s，MLB 平均 27 ft/s。

## 與既有知識庫的衝突與補充
- **Sprint Speed 採計比例不一致**：總覽頁稱取合格跑動的「前半」平均，細項頁稱取「約三分之二」——已於 [[metrics/Sprint-Speed|Sprint Speed]] 以 `[!warning] 資料矛盾` 標註。
- **Hard-hit 定義差異**：Statcast 以 95 mph 為門檻，FanGraphs [[metrics/Hard%|Hard%]] 為 BIS 分類——已於 [[metrics/Hard-Hit-Rate|Hard-hit Rate]] 標註。
- **節奏指標口徑差異**：Statcast [[metrics/Pitch-Tempo|Pitch Tempo]]（出手間隔中位數）≠ FanGraphs [[metrics/Pace|Pace]]（平均間隔）。
- **球速量測口徑**：PITCHf/x 50 呎（或推估 55 呎）vs. Statcast 出手點最高速，見 [[metrics/Velocity|Velocity]]。

## 更新與建立的頁面
- 實體：[[entities/Statcast|Statcast]]、[[entities/Baseball-Savant|Baseball Savant]]、[[entities/Hawk-Eye|Hawk-Eye]]、[[entities/PITCHf-x|PITCHf/x]]
- 概念：[[concepts/Bat-Tracking|Bat Tracking]]、[[concepts/Fielding-Alignments|Fielding Alignments]]
- 指標：全部 46 篇 Statcast 指標頁（含僅於本頁定義的 [[metrics/Bat-Speed|Bat Speed]]），清單見 [[entities/Statcast|Statcast]]。
