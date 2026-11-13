---
title: DIPS（Defense Independent Pitching Statistics，守備獨立投球理論）
type: principle
tags:
  - sabermetrics
  - principles
  - pitching
  - methodology
sources:
  - "[[sources/2011-01-23-FanGraphs-DIPS]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# DIPS（守備獨立投球理論）

## 一句話定義
**DIPS（Defense Independent Pitching Statistics）是一種投手評估哲學**：主張在評估投手個人表現時，應盡可能剝離隊友守備與運氣的干擾，將投手真正能控制的貢獻獨立出來。

---

## 核心邏輯與歷史演進

### 1. 為什麼傳統 ERA 不夠？
傳統指標以「自責分（[[metrics/ERA|ERA]]）」評估投手，但正式紀錄員只會扣除「明確失誤（Error）」造成的失分。**壞守備往往不是失誤，而是「守備範圍太小、根本碰不到球」**。兩位實力完全相同的投手，在黃金手套內野與破洞內野背後投球，ERA 會有顯著落差。

### 2. Voros McCracken 的突破（2001）
McCracken 的研究指出，投手對「場內球是否形成安打（[[metrics/BABIP|BABIP]]）」的控制力遠比傳統認知低得多；相對地，投手對以下四種結果擁有高度且穩定的控制權：
- **三振（K）**
- **四壞保送（BB）**
- **觸身球（HBP）**
- **全壘打（HR）**（部分進階版改用飛球率搭配聯盟平均 HR/FB）

這催生了第一代 DIPS 指標群：[[metrics/FIP|FIP]]、[[metrics/xFIP|xFIP]]、[[metrics/SIERA|SIERA]] 與 tERA。

---

## 常見誤解與現代修正

> [!important] DIPS 不是「投手對 BABIP 控制力為 0%」的理論
> 由於 FIP 等第一代指標把所有場內球視為等價（等於假設投手對 BABIP 控制力為 0%），許多人誤以為「DIPS 理論聲稱投手完全無法控制場內球」。
> 事實上，**2001 年時分析界已經知道 0% 並非完全精確，只是當時缺乏足夠工具去拆解投手對擊球品質的控制——「指派 0% 責任（FIP）」遠比「指派 100% 責任（ERA）」更接近客觀真相**。

隨著 [[entities/FanGraphs|Statcast]]、擊球初速與仰角等追蹤數據普及，新一代模型（如 Baseball Prospectus 的 DRA，以及 FanGraphs 的 [[metrics/Stuff+|Stuff+]] / [[metrics/PitchingBot|PitchingBot]] 等）能更細緻地分離投手誘導弱擊球的能力與野手守備功勞，但「剝離隊友守備影響」的 DIPS 精神依然一脈相承。

---

## 相關頁面
- 衍生指標：[[metrics/FIP|FIP]]、[[metrics/xFIP|xFIP]]、[[metrics/SIERA|SIERA]]、[[metrics/FDP|FDP（守備相依投球指標群）]]
- 關聯原理：[[principles/Sample-Size|樣本數與穩定性]]、[[principles/Luck|運氣]]
- 來源：[[sources/2011-01-23-FanGraphs-DIPS]]
