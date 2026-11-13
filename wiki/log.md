# 維基操作日誌（Wiki Log）

> 此檔案為**只增不減（Append-only）的時間序列紀錄**，記錄每一次資料匯入（`ingest`）、問答沉澱（`query`）與知識庫健檢（`lint`）。
> 建議維持 `## [YYYY-MM-DD] <類型> | <標題>` 格式，方便日後以工具檢索近期進度。

## [2026-11-12] init | 初始化賽伯計量學 LLM Wiki
- 摘要：依據 LLM Wiki 三層架構建立知識庫骨幹，完成全中文 `AGENTS.md` 綱領、`raw/` 原始資料夾、`wiki/` 維基資料夾與初始索引、學習總覽頁。
- 影響頁面：`[[overview]]`, `[[index]]`

## [2026-11-12] ingest | FanGraphs 進攻指標總表（Complete List: Offense）
- 摘要：讀取並消化 `raw/articles/Complete List (Offense) _ Sabermetrics Library.pdf`（Neil Weinberg, 2014-10-30），建立來源摘要頁、FanGraphs 實體頁、核心進攻指標頁與概念群組頁，並更新學習總覽與總目錄。
- 影響頁面：`[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]`, `[[entities/FanGraphs]]`, `[[metrics/wOBA]]`, `[[metrics/wRC+]]`, `[[metrics/BABIP]]`, `[[metrics/BsR]]`, `[[metrics/WAR]]`, `[[metrics/RE24]]`, `[[metrics/WPA]]`, `[[concepts/Batted-Ball-Profile]]`, `[[concepts/Plate-Discipline]]`, `[[overview]]`, `[[index]]`

## [2026-11-12] ingest | 批次匯入 OBP、OPS/OPS+、守備總覽與兩大 Pitch Modeling 入門文章
- 摘要：讀取並消化 `raw/articles/` 新增的 5 篇 FanGraphs Sabermetrics Library PDF（OBP、OPS and OPS+、Defense Overview、PitchingBot Primer、Stuff+/Location+/Pitching+ Primer），建立 5 篇來源摘要頁、新指標/概念頁與 Pitch Modeling 系統比較分析頁，並更新既有打擊頁、FanGraphs 實體頁、學習總覽與總目錄。
- 影響頁面：`[[sources/2010-02-16-FanGraphs-OBP]]`, `[[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus]]`, `[[sources/2015-03-12-FanGraphs-Defense-Overview]]`, `[[sources/2023-03-10-FanGraphs-PitchingBot-Primer]]`, `[[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]`, `[[metrics/OBP]]`, `[[concepts/Defensive-Metrics-Overview]]`, `[[metrics/PitchingBot]]`, `[[comparisons/PitchingBot-vs-Pitching+]]`, `[[entities/FanGraphs]]`, `[[overview]]`, `[[index]]`

## [2026-11-12] update | 確立「一指標一頁面」規範並拆分合併指標頁
- 摘要：依使用者偏好於 `AGENTS.md` 新增「一指標一頁面（One Metric Per Page）」規範，將原合併頁面拆分為 11 篇獨立指標頁（`Stuff+`、`Location+`、`Pitching+`、`OPS`、`OPS+`、`AVG`、`SLG`、`ISO`、`BB%`、`K%`、`BB-K`），移除舊合併頁並全面更新所有交叉連結與總目錄。
- 影響頁面：`[[metrics/Stuff+]]`, `[[metrics/Location+]]`, `[[metrics/Pitching+]]`, `[[metrics/OPS]]`, `[[metrics/OPS+]]`, `[[metrics/AVG]]`, `[[metrics/SLG]]`, `[[metrics/ISO]]`, `[[metrics/BB%]]`, `[[metrics/K%]]`, `[[metrics/BB-K]]`, `[[index]]`, `[[overview]]`, `[[entities/FanGraphs]]`, `[[comparisons/PitchingBot-vs-Pitching+]]`

## [2026-11-12] ingest | 大規模批次匯入 41 篇 FanGraphs Sabermetrics Library 文章
- 摘要：讀取並編譯 `raw/articles/` 新增的 41 篇 PDF（涵蓋勝率與關鍵度 6 篇、守備 9 篇、投球 11 篇、打擊與跑壘 15 篇），依「一指標一頁面」原則建立 41 篇來源摘要頁與數十篇獨立指標/概念頁，並全面更新 `index.md`、`overview.md` 與 `Batted-Ball-Profile.md`。
- 影響頁面：全部 47 篇 `[[sources/...]]`、所有 `[[metrics/...]]`、`[[concepts/...]]`、`[[overview]]`、`[[index]]`

## [2026-11-12] ingest | 匯入 WAR 完整體系與 FDP 投球勝場拆解（6 篇）
- 摘要：讀取並編譯 `FDP`、`What is WAR?`、`WAR Misconceptions`、`WAR for Pitchers`、`WAR for Position Players` 與 `fWAR, rWAR, and WARP` 6 篇 PDF，建立 6 篇來源摘要頁、獨立指標頁 `FDP.md` 與 `RA9-Wins.md`、比較分析頁 `fWAR-vs-rWAR-vs-WARP.md`，並大幅充實 `WAR.md` 公式、守位調整與五大誤區，同步更新 `index.md` 與 `overview.md`（累計收錄 53 篇來源）。
- 影響頁面：`[[sources/2013-06-10-FanGraphs-FDP]]`, `[[sources/2010-02-15-FanGraphs-What-is-WAR]]`, `[[sources/2012-03-23-FanGraphs-WAR-Misconceptions]]`, `[[sources/2012-03-28-FanGraphs-WAR-for-Pitchers]]`, `[[sources/2012-04-02-FanGraphs-WAR-for-Position-Players]]`, `[[sources/2012-03-22-FanGraphs-fWAR-rWAR-WARP]]`, `[[metrics/WAR]]`, `[[metrics/FDP]]`, `[[metrics/RA9-Wins]]`, `[[comparisons/fWAR-vs-rWAR-vs-WARP]]`, `[[overview]]`, `[[index]]`

## [2026-11-12] ingest | 匯入 FanGraphs Principles 核心邏輯與 WAR 基礎專文（14 篇）
- 摘要：將使用者提供的 14 篇不重複 FanGraphs Principles 與 WAR 基礎方法論原文轉存為 PDF 放入 `raw/articles/`，於 `wiki/` 下新建 `principles/` 資料夾並逐篇建立獨立維基頁與 `sources/` 來源摘要，同時更新 `AGENTS.md`、`index.md` 與 `overview.md`（累計收錄 67 篇來源）。
- 影響頁面：`[[principles/README]]`, `[[principles/DIPS]]`, `[[principles/Regression-Toward-the-Mean]]`, `[[principles/Replacement-Level]]`, `[[principles/Sample-Size]]`, `[[principles/Splits]]`, `[[principles/Projection-Systems]]`, `[[principles/Linear-Weights]]`, `[[principles/Counting-vs-Rate-Statistics]]`, `[[principles/Park-Factors]]`, `[[principles/Positional-Adjustment]]`, `[[principles/Aging-Curve]]`, `[[principles/League-Equivalencies]]`, `[[principles/Pythagorean-Win-Loss]]`, `[[principles/Luck]]`, 全部 14 篇 `[[sources/...]]`, `[[overview]]`, `[[index]]`

## [2026-11-13] ingest | 匯入 MLB.com Statcast 詞彙表（總覽 + 46 細項，共 47 篇）
- 摘要：抓取 `https://www.mlb.com/glossary/statcast` 及其列出的 46 個 Statcast 細項頁（防守 9、進攻 25、投球 11；「Throwing Value」連結與 Baserunning 同頁、Bat Speed 無獨立頁僅於總覽定義），以無頭 Chrome 將原文存為 47 份 PDF 於 `raw/articles/*_ Glossary _ MLB.com.pdf`。建立 47 篇來源摘要頁、46 篇獨立 Statcast 指標頁（含 Bat Speed）、2 篇概念頁（Bat Tracking、Fielding Alignments）與 4 篇實體頁（Statcast、Baseball Savant、Hawk-Eye、PITCHf/x）；於 19 篇既有 FanGraphs 指標/概念頁加入「Statcast 對應指標」區塊並更新 FanGraphs 實體頁；同步更新 `index.md`（新增 5 個 Statcast 指標分區，來源累計 114 篇）與 `overview.md`（以 Statcast 頁面取代「待收錄」項目並新增學習缺口）。
- 矛盾與定義差異標註：Sprint Speed 季平均採計比例（總覽「前半」vs 細項「約 2/3」）；Hard% vs Hard-hit Rate；LD%（BIS）vs Launch Angle 分類；Pace vs Pitch Tempo；Baserunning Value 原文 Taylor +5/+6 不一致。
- 影響頁面：`[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]` 及其餘 46 篇 `[[sources/2026-11-13-MLB-Statcast-...]]`、全部 46 篇新 Statcast `[[metrics/...]]`、`[[concepts/Bat-Tracking]]`, `[[concepts/Fielding-Alignments]]`, `[[entities/Statcast]]`, `[[entities/Baseball-Savant]]`, `[[entities/Hawk-Eye]]`, `[[entities/PITCHf-x]]`, `[[entities/FanGraphs]]`, `[[metrics/wOBA]]`, `[[metrics/AVG]]`, `[[metrics/SLG]]`, `[[metrics/ERA]]`, `[[metrics/FIP]]`, `[[metrics/BABIP]]`, `[[metrics/Hard%]]`, `[[metrics/LD%]]`, `[[metrics/Pace]]`, `[[metrics/Spd]]`, `[[metrics/BsR]]`, `[[metrics/UZR]]`, `[[metrics/DRS]]`, `[[metrics/Stuff+]]`, `[[metrics/PitchingBot]]`, `[[concepts/Catcher-Defense]]`, `[[concepts/Batted-Ball-Profile]]`, `[[concepts/Defensive-Metrics-Overview]]`, `[[concepts/Plate-Discipline]]`, `[[overview]]`, `[[index]]`

## [2026-11-13] update | 建立學習網站（site/）並修正 Off 公式
- 摘要：依使用者決定（卡片式學習路徑；數據指標分投球／進攻／守備／綜合價值與情境四區塊；投打通用指標主分類 + 交叉列出；跑壘歸入進攻），於 `site/` 建立由 `wiki/` 編譯的靜態網站，含打者／投手計算器與 Barrel、Blast 互動區域圖；網站風格、分類規則與工具規範寫入 `AGENTS.md` 第七節。建置時發現 `Off.md` 公式中未跳脫的 `&` 會使 LaTeX 解析失敗，已改為 `\&`。
- 影響頁面：`[[metrics/Off]]`；新增 `site/build.mjs`、`site/taxonomy.mjs`、`site/assets/`、`AGENTS.md`（第七節）

## [2026-11-13] update | 網站改版：流程圖學習地圖、復古按鈕列、80 年代像素風與 2D 擊球場景
- 摘要：依使用者回饋改版 `site/`：首頁改為 STAGE 1–4 流程圖（基本原則 → 進攻/投球/守備三條路線 → 綜合價值 → 時間與預測，另附工具）；移除頂部文字導覽列改為復古按鈕列；整體改為 PICO-8 調色盤的 80 年代早期電腦 × 街機像素風（DotGothic16／Press Start 2P／VT323 字體、粗框硬陰影、深淺色模式）；Barrel 改為側視球場像素場景（拖曳仰角、揮棒動畫、Barrel 角度扇形），Blast 改為俯視揮棒場景（球棒甜蜜點、擊球點、街機能量條），原數學座標圖移入「數據視角」摺疊區。`AGENTS.md` 第七節同步更新學習順序與風格規範。
- 影響頁面：無 wiki 內容變更；更新 `AGENTS.md`、`site/build.mjs`、`site/assets/style.css`、`site/assets/app.js`

## [2026-11-13] update | 網站加入輕量 Y2K 點綴
- 摘要：在 80 年代像素風基礎上加入 Y2K 點綴：鉻金屬 Logo 與 ✦ 星光、頁首虹彩條、早期作業系統風格的視窗標題列（STAGE、工具、計算器、互動場景、文章內文）、主要行動按鈕改為亮面果凍膠囊，並新增薰衣草／嬰兒藍／泡泡糖粉三個輔助色（僅用於裝飾）。規範寫入 `AGENTS.md` 第七節。
- 影響頁面：無 wiki 內容變更；更新 `AGENTS.md`、`site/build.mjs`、`site/assets/style.css`
