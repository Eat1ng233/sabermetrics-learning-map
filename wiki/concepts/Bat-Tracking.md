---
title: Bat Tracking（揮棒追蹤）
type: concept
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
  - "[[sources/2026-11-13-MLB-Statcast-Attack-Angle]]"
  - "[[sources/2026-11-13-MLB-Statcast-Squared-Up-Rate]]"
  - "[[sources/2026-11-13-MLB-Statcast-Blasts]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Bat Tracking（揮棒追蹤）

## 一句話定義
**Bat Tracking** 是 [[entities/Hawk-Eye|Hawk-Eye]] 高幀率攝影機（300 fps）自 **2023 年明星賽後**提供的球棒追蹤資料，讓分析從「球被打得怎樣」前移到「打者怎麼揮」。

## 指標地圖：揮棒的三個時間點
| 階段 | 問題 | 指標 |
|---|---|---|
| **揮棒前** | 打者站在哪、怎麼站？ | [[metrics/Batting-Stance|Batting Stance]] |
| **揮棒中** | 揮多快、多長、多陡？ | [[metrics/Bat-Speed|Bat Speed]]、[[metrics/Fast-Swing-Rate|Fast-swing Rate]]（≥75 mph）、[[metrics/Swing-Length|Swing Length]]（平均 7.3 呎）、[[metrics/Swing-Path-Tilt|Swing Path / Tilt]]（平均約 32°） |
| **接觸瞬間** | 球棒往哪個方向動？在哪裡碰到球？ | [[metrics/Attack-Angle|Attack Angle]]（平均約 10°）、[[metrics/Ideal-Attack-Angle|Ideal Attack Angle Rate]]（5–20°）、[[metrics/Attack-Direction|Attack Direction]]（平均約 2° pull）、[[metrics/Intercept-Point|Intercept Point]] |
| **接觸效率** | 揮棒的潛力兌現了多少？ | [[metrics/Squared-Up-Rate|Squared-up Rate]]（≥80%）、[[metrics/Blasts|Blasts]]（Squared-up%×100 + Bat Speed ≥ 164） |
| **極端失敗** | 被騙得多慘？ | [[metrics/Swords|Swords]] |
| **接觸後**（擊球追蹤） | 球怎麼飛？ | [[metrics/Exit-Velocity|Exit Velocity]]、[[metrics/Launch-Angle|Launch Angle]]、[[metrics/Barrel|Barrel]] |

## 核心洞見
1. **「力量 × 效率」分解**：理論最大擊球初速由揮棒速度與球速決定；Squared-up 衡量兌現比例。因此 EV = 揮棒能力 × 接觸效率，Blast 正是兩者兼具的擊球（2024 年 Blast 擊球 wOBA .727 vs 非 Blast .225）。
2. **時機指標**：Attack Angle、Attack Direction 與 Ideal Attack Angle Rate 隨揮棒過程持續變化，揮早偏高/偏拉、揮晚偏低/偏反方向——它們同時反映「機制」與「時機」。
3. **取捨而非優劣**：短揮棒較易接觸、較少長打（Whiff 19% vs 30%）；揮棒平或陡、接觸點前或深，都屬描述性風格，並無絕對好壞。

## 與賽伯計量學既有框架的連結
- 擊球結果端：[[concepts/Batted-Ball-Profile|擊球型態總覽]]、[[metrics/xwOBA|xwOBA]]。
- 揮空與接觸：[[concepts/Plate-Discipline|本壘板紀律]]（Contact%、SwStr%）。
- 樣本數：bat tracking 只有 2023 下半季起的資料，各指標的穩定門檻尚待研究（參見 [[principles/Sample-Size|Sample Size]]；目前知識庫尚未收錄相關研究）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
- [[sources/2026-11-13-MLB-Statcast-Attack-Angle]]
- [[sources/2026-11-13-MLB-Statcast-Squared-Up-Rate]]
- [[sources/2026-11-13-MLB-Statcast-Blasts]]
- [[sources/2026-11-13-MLB-Statcast-Swing-Length]]
