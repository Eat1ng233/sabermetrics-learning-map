---
title: Baseball Savant
type: entity
tags:
  - sabermetrics
  - statcast
  - database
  - mlb
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Baseball Savant

## 簡介
**Baseball Savant（BaseballSavant.MLB.com）** 是 MLB.com 官方的 [[entities/Statcast|Statcast]] 資料集散地，幾乎所有 Statcast 指標的排行榜都在此發布。

## 主要功能
- **Savant Illustrator**：製作自訂圖表。
- **預製排行榜**：如 [[metrics/Barrel|Barrels]]、[[metrics/Sprint-Speed|Sprint Speed]]、[[metrics/OAA|OAA]]、[[metrics/Pop-Time|Pop Time]]、[[metrics/Arm-Strength|Arm Strength]]、[[metrics/Fielding-Run-Value|FRV]]、[[metrics/Catcher-Framing|Catcher Framing]]、[[metrics/Pitch-Movement|Pitch Movement]]、[[metrics/Pitch-Tempo|Pitch Tempo]]、[[metrics/xERA|xERA]]、Bat Tracking（[[metrics/Blasts|Blasts]]、[[metrics/Swing-Length|Swing Length]] 等）。
- **Search（自訂查詢）**：例如查詢 2023 年反方向全壘打最多的打者（Julio Rodríguez，12 支）、2015–2022 各隊內野 Shift 頻率變化、2023 年好球帶內四縫線揮空最多的投手（Spencer Strider，208 次）。
- **即時 Gamefeed** 與**互動式 3D 投球追蹤**。

## 與其他資料庫的關係
- [[entities/FanGraphs|FanGraphs]] 以結果型線性權重指標與自家模型（如 [[metrics/Stuff+|Stuff+]]）為主；Baseball Savant 則是 Statcast 原始追蹤與官方衍生指標的第一手來源。兩者互補。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
