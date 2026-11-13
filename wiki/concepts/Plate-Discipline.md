---
title: 本壘板紀律（Plate Discipline）
type: concept
tags:
  - sabermetrics
  - hitting
  - plate-discipline
  - pitchfx
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2026-11-13-MLB-Statcast-Swing-Length]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# 本壘板紀律（Plate Discipline）

本壘板紀律指標用來衡量打者的選球眼光（是否追打壞球、是否積極攻擊好球帶內的球）以及揮棒後的擊中球能力（Contact）。在 [[entities/FanGraphs|FanGraphs]] 上分別有來自 Baseball Info Solutions (BIS) 與 PITCHf/x 兩套數據來源的統計。

## 核心指標與計算定義

### 1. 出棒選擇（Swing Decisions）
- **O-Swing%（好球帶外揮棒率 / Chase Rate）**：對好球帶外的投球出棒的比例（$\frac{\text{Swings outside zone}}{\text{Pitches outside zone}}$）。
- **Z-Swing%（好球帶內揮棒率）**：對好球帶內的投球出棒的比例（$\frac{\text{Swings inside zone}}{\text{Pitches inside zone}}$）。
- **Swing%（總揮棒率）**：所有投球中出棒的比例（$\frac{\text{Swings}}{\text{Total pitches}}$）。

### 2. 擊球接觸能力（Contact Ability）
- **O-Contact%（好球帶外擊球率）**：揮擊好球帶外來球時成功碰到球的比例（$\frac{\text{Contact outside zone}}{\text{Swings outside zone}}$）。
- **Z-Contact%（好球帶內擊球率）**：揮擊好球帶內來球時成功碰到球的比例（$\frac{\text{Contact inside zone}}{\text{Swings inside zone}}$）。
- **Contact%（總擊球率）**：所有揮棒中成功碰到球的比例（$\frac{\text{Contact made}}{\text{Swings}}$）。

### 3. 進攻環境與揮空（Zone & Whiffs）
- **Zone%（好球率）**：投手投進好球帶內的球數佔總投球數的比例（$\frac{\text{Pitches inside zone}}{\text{Total pitches}}$）。
- **F-Strike%（首球好球率）**：打席第一球即為好球的比例（BIS 欄位）。
- **SwStr%（揮空率，Swinging Strike Percentage）**：揮棒落空次數除以總投球數（BIS 欄位，與打者 [[metrics/K%|K%]] 高度相關）。
- **Pace（投球節奏）**：依據 PITCHf/x 時間戳記計算，打者面對每一球之間的平均間隔秒數。

## Statcast 對應指標
- **Statcast 揮棒端補充**：揮空傾向可由 [[concepts/Bat-Tracking|Bat Tracking]] 解釋，如 [[metrics/Swing-Length|Swing Length]]（長揮棒 Whiff 30% vs 短揮棒 19%）；兩好球決勝見 [[metrics/PutAway%|PutAway%]]、極端揮空見 [[metrics/Swords|Swords]]。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2026-11-13-MLB-Statcast-Swing-Length]]
