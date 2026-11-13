---
title: 守備數據核心理論（Defense Overview）
type: concept
tags:
  - sabermetrics
  - defense
  - uzr
  - drs
sources:
  - "[[sources/2015-03-12-FanGraphs-Defense-Overview]]"
  - "[[sources/2026-11-13-MLB-Statcast-OAA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Catch-Probability]]"
  - "[[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# 守備數據核心理論（Defense Overview）

每當進攻方得到一分，就代表防守方失去一分。守備是「失分預防（Run Prevention）」中不可或缺的一環，但棒球史上很長一段時間都缺乏合理的守備評估工具。

## 1. 為什麼失誤（E）與守備率（FPCT）失靈？
傳統守備率公式為 $\frac{\text{Assists} + \text{Putouts}}{\text{Assists} + \text{Putouts} + \text{Errors}}$，存在兩大根本缺陷：
1. **官方紀錄員的主觀性**：是否記為失誤由紀錄員主觀認定，不同球場標準不一。
2. **只看「碰到球後的處理」，忽略「根本追不到的球」**：若野手起步太慢、守備範圍太小，讓一顆原本該接到的球落地形成安打，紀錄上不會記為失誤；但對球隊來說，失誤與漏接造成的傷害（少一個出局數）幾乎相同。

## 2. 現代進階守備指標（UZR、DRS）的兩大支柱
進階守備指標不再糾結「是否記失誤」，而是先問**「擊進防區的球有多少轉化為出局數」**（如 RZR 的概念），再進一步引入 **UZR** 與 **DRS** 的「守下分數（Runs Saved）」框架：

$$\text{守備價值} = \text{Difficulty（接殺難度）} \times \text{Run Value（平均失分價值）}$$

- **難度（Difficulty）**：利用多年歷史數據，統計類似落點、速度與飛行軌跡的擊球，在聯盟中平均被接殺的機率。
  - 例如：某顆球聯盟平均接殺率為 40%，野手成功接殺可獲得 $+0.6$（即 $1 - 0.4$）的相對貢獻；若一顆只有 7% 機率攔下的三游深遠強襲球，成功處理將獲得極高難度加權。
- **得分價值（Run Value）**：衡量「這顆球沒攔下會讓球隊平均多失幾分」。
  - 例如：三游間的強襲滾地球即使穿出去通常也只是一壘安打；但外野防區深處的平飛球一旦漏接，往往變成二壘、三壘安打甚至得分，因此後者的單次失分價值遠高於前者。

## 3. 實務限制與解讀心法
- **測量誤差（Measurement Error）**：早期或影片追蹤系統仍須仰賴人員標記擊球方向、速度與仰角，必然存在些微標記誤差。
- **小樣本波動（Sample Size）**：每位野手單季真正面對「高難度守備機會」的次數遠少於打席數（不可能單季出現 700 次五星級美技機會）。因此單季守備數據容易受少數幾球或傷勢（如帶傷跑動變慢）影響而大幅波動——這不是公式算錯，而是棒球樣本數本身的物理限制。

## Statcast 對應指標
- **Statcast 追蹤時代（2026-11-13 補充）**：「難度 × 價值」邏輯的追蹤數據實作——[[metrics/Catch-Probability|Catch Probability]]（外野難度）→ [[metrics/OAA|OAA]]（範圍）→ [[metrics/Fielding-Run-Value|FRV]]（整合為得分）；輔以 [[metrics/Jump|Jump]]、[[metrics/Arm-Strength|Arm Strength]] 與 [[concepts/Fielding-Alignments|守備布陣]]資料。

## 參考來源
- [[sources/2015-03-12-FanGraphs-Defense-Overview]]
- [[sources/2026-11-13-MLB-Statcast-OAA]]
- [[sources/2026-11-13-MLB-Statcast-Catch-Probability]]
- [[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value]]
