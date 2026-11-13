---
title: OAA（Outs Above Average，高於平均出局數）
type: metric
tags:
  - sabermetrics
  - fielding
  - statcast
  - range
sources:
  - "[[sources/2026-11-13-MLB-Statcast-OAA]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# OAA（Outs Above Average，高於平均出局數）

## 一句話定義
**Outs Above Average（OAA）** 是以範圍為核心的守備技術指標：累積計算一名守備員**比平均守備員多（或少）製造了幾個出局**。

## 計算方式與核心邏輯
### 外野手
以 [[metrics/Catch-Probability|Catch Probability]] 為基礎，每球的得分 = 實際結果 − 預期接殺機率：
$$\text{OAA} = \sum_{\text{plays}} \left( \mathbb{1}[\text{caught}] - P(\text{catch}) \right)$$
- 例：接殺機率 75% 的球，接到 **+0.25**，漏接 **−0.75**。
- 排行榜另列比率型欄位：**Expected Catch %**（機會難度；2017 年 Trout 89% 最容易、青木宣親 77% 最難）、**Actual Catch %**、**Catch % Added**（= 實際 − 預期）。

### 內野手（2020 年起納入）
考量四項因素：
1. 到達球的距離（[[metrics/Intercept-Point|intercept point]] 概念）
2. 可用時間
3. 處理球後與跑者目標壘包的距離
4. 封殺play中打者的**平均** [[metrics/Sprint-Speed|Sprint Speed]]（新球員暫以聯盟平均 27 ft/s 代入，上榜後重算）

由於 Statcast 知道每位野手的實際站位，不論是否布陣（[[concepts/Fielding-Alignments|Fielding Alignments]]），都能精確計算「多遠、多少時間」，並可依**實際守備區域**拆解。

## 基準值與判讀區間
- **0 = 平均**。案例：2019 Victor Robles 外野 **+23**；Javier Báez 內野 **+19**（游擊區 +17、二壘區 +2）；Nolan Arenado **+17**（三壘區 +14、游擊區 +3）。
- 換算得分：外野 1 OAA ≈ 0.9 分、內野 ≈ 0.75 分（見 [[metrics/Fielding-Run-Value|FRV]]）。

## 演進脈絡與相關指標
- 以逐球追蹤取代 [[metrics/UZR|UZR]]／[[metrics/DRS|DRS]] 依影片區塊分類的難度估計（見 [[concepts/Defensive-Metrics-Overview|守備數據核心理論]]）。
- 外野可再以 [[metrics/Jump|Jump]] 拆解原因。

## 限制與常見誤區
- OAA 是**出局數**，不是得分；跨守位比較需換算為 FRV。
- 只衡量範圍，不含臂力、雙殺（另列於 FRV）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-OAA]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
