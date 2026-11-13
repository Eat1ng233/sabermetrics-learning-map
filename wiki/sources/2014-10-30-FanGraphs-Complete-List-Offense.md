---
title: Complete List (Offense) — FanGraphs 進攻數據總覽
type: source
tags:
  - sabermetrics
  - hitting
  - fangraphs
  - glossary
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# Complete List (Offense) — FanGraphs 進攻數據總覽

- **作者**：Neil Weinberg
- **發表日期**：2014-10-30
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[Complete List (Offense) | Sabermetrics Library](https://library.fangraphs.com/offense/offensive-statistics-list/)
- **本地檔案**：`raw/articles/Complete List (Offense) _ Sabermetrics Library.pdf`

---

## 核心摘要

這篇文章是 [[entities/FanGraphs|FanGraphs]] 打者排行榜（Leaderboards）所有進攻統計指標的**完整索引手冊**。文章依照 FanGraphs 排行榜的分頁架構（Dashboard、Standard、Advanced、Batted Ball、Win Probability、Pitch Type、Pitch Value、Plate Discipline、Value、PITCHf/x）逐一列出各指標縮寫、全名與基本定義或公式。

### 重點整理與架構分類

1. **Dashboard（總覽）與 Standard（傳統數據）**
   - 涵蓋基礎出賽與結果統計：`G`、`AB`、`PA`、`H`（`1B`、`2B`、`3B`、`HR`）、`R`、`RBI`、`BB`、`IBB`、`SO`、`HBP`、`SF`、`SH`、`GDP`、`SB`、`CS`。
   - Dashboard 同時精選了進階分析最常用的比率與價值指標：`BB%`、`K%`、`ISO`、`BABIP`、`AVG`、`OBP`、`SLG`、`wOBA`、`wRC+`、`BsR`、`Off`、`Def`、`WAR`。
2. **Advanced（進階打擊與跑壘）**
   - 包含率值指標（`OBP`、`SLG`、`OPS`、`ISO`、`BABIP`、`BB/K`）、跑壘價值（`wSB`、`UBR`、`wGDP`）以及線性權重系列（`wOBA`、`wRAA`、`wRC`、`wRC+`）。
   - 指出 `Spd`（Speed Score）為較過時的跑壘速度評估指標。
3. **Batted Ball（擊球型態與落點分布）**
   - 依擊球軌跡分類（`LD%`、`GB%`、`FB%`、`GB/FB`、`IFFB%`、`HR/FB`）、內野與短打安打（`IFH`、`IFH%`、`BUH`、`BUH%`）、擊球方向（`Pull%`、`Cent%`、`Oppo%`）與擊球強度（`Soft%`、`Med%`、`Hard%`）。詳見 [[concepts/Batted-Ball-Profile|擊球型態與落點分布]]。
4. **Win Probability（勝率與得分期望值）**
   - 包含 `RE24`、`REW`、`WPA`（含 `+WPA`、`-WPA`）、`pLI`、`phLI`、`WPA/LI` 與 `Clutch`。詳見 [[metrics/RE24|RE24]] 與 [[metrics/WPA|WPA]]。
5. **Pitch Type / Pitch Value / Plate Discipline（球種、球種價值與本壘板紀律）**
   - 早期主要採用 Baseball Info Solutions (BIS) 數據，涵蓋各球種比例、均速、每百球得分價值（如 `wFB/C`、`wSL/C`）與揮棒/擊球紀律（`O-Swing%`、`Z-Swing%`、`Contact%`、`SwStr%` 等）。詳見 [[concepts/Plate-Discipline|本壘板紀律指標群]]。
   - 另提供 **PITCHf/x** 追蹤數據分頁，包含更細緻的球種分類、水平位移（`-X`，負值偏向右打者、正值偏向左打者）、垂直位移（`-Z`，扣除重力影響後相對於無旋轉球的位置）、球種價值與投球節奏（`Pace`）。
6. **Value（綜合價值與 WAR 拆解）**
   - 將野手貢獻拆解為 `Batting`、`Base Running`、`Fielding`、`Positional`、`Offense`、`Defense`、`League`、`Replacement`、`RAR`、`WAR` 與自由市場換算金額 `Dollars`。

---

## 延伸建立的維基頁面

- [[metrics/AVG|AVG]]、[[metrics/OBP|OBP]]、[[metrics/SLG|SLG]]、[[metrics/ISO|ISO]]、[[metrics/OPS|OPS]]、[[metrics/BB%|BB%]]、[[metrics/K%|K%]]、[[metrics/BB-K|BB/K]]
- [[metrics/wOBA|wOBA（Weighted On-Base Average）]]
- [[metrics/wRC+|wRC+（Weighted Runs Created Plus）]]
- [[metrics/BABIP|BABIP（Batting Average on Balls in Play）]]
- [[metrics/BsR|BsR（Base Running Runs Above Average）]]
- [[metrics/WAR|WAR（Wins Above Replacement）]]
- [[metrics/RE24|RE24（Run Expectancy 24 Base-Out State）]]
- [[metrics/WPA|WPA（Win Probability Added）]]
- [[concepts/Batted-Ball-Profile|擊球型態與落點分布（Batted Ball）]]
- [[concepts/Plate-Discipline|本壘板紀律（Plate Discipline）]]
- [[entities/FanGraphs|FanGraphs]]
