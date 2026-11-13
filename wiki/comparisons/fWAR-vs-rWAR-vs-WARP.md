---
title: fWAR、rWAR（bWAR）與 WARP 比較
type: comparison
tags:
  - sabermetrics
  - war
  - comparison
sources:
  - "[[sources/2012-03-22-FanGraphs-fWAR-rWAR-WARP]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# fWAR、rWAR（bWAR）與 WARP 比較

[[metrics/WAR|WAR]] 是一個「概念框架」而非單一固定公式，因此三大主流數據網站各自發展出不同版本。三者核心架構相同（皆包含打擊、跑壘、守備、位置調整與替補水準），主要差異在於**底層輸入指標的選擇**。

| 比較維度 | FanGraphs (`fWAR`) | Baseball-Reference (`rWAR` / `bWAR`) | Baseball Prospectus (`WARP`) |
| :--- | :--- | :--- | :--- |
| **野手打擊** | [[metrics/wOBA|wOBA]] / [[metrics/wRAA|wRAA]] | 類似線性權重系統 | 類似線性權重系統 |
| **野手跑壘** | [[metrics/BsR|BsR]]（`wSB + UBR + wGDP`） | 自家跑壘得分指標 | 自家跑壘得分指標 |
| **野手守備（2002+）** | [[metrics/UZR|UZR]] | [[metrics/DRS|DRS]] | `FRAA`（最早納入捕手 Framing） |
| **野手守備（2002 前）** | [[metrics/TZ|Total Zone（TZ）]] | [[metrics/TZ|Total Zone（TZ）]] | — |
| **替補水準基準** | 全聯盟 1,000 WAR | 全聯盟 1,000 WAR（與 fWAR 相同） | 計算基準略有不同 |
| **投手核心基準** | **`ifFIP`**（[[metrics/FIP|FIP]] 加上 `IFFB` 視同三振）+ 後援槓桿 | **實際失分 `RA9`**（再扣除背後團隊守備影響） | **`DRA`**（Deserved Runs Average 複雜模型，含捕手 Framing 等） |

## 實務判讀心法
1. **野手差異通常來自守備**：打擊與跑壘各站差異很小，若某野手的 fWAR 與 rWAR 落差很大，幾乎都是因為 `UZR` 與 `DRS` 對他守備的評價不同。
2. **投手差異來自哲學取向**：`fWAR` 重視投手自身可控制的三振/保送/全壘打與不計守備；`rWAR` 從實際結果倒推；`WARP` 試圖在模型內控制一切環境因子。**同時參考三個網站**，能最完整地看見一位球員的輪廓。

## 參考來源
- [[sources/2012-03-22-FanGraphs-fWAR-rWAR-WARP]]
