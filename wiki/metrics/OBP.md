---
title: OBP（On-Base Percentage，上壘率）
type: metric
tags:
  - sabermetrics
  - hitting
  - obp
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-16-FanGraphs-OBP]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# OBP（On-Base Percentage，上壘率）

## 一句話定義
**OBP** 衡量打者透過安打、保送或觸身球成功上壘（即「不製造出局數」）的比率。由於球隊每場比賽只有 27 個出局數，避免出局是打擊端最核心的貢獻。

## 計算公式
$$\text{OBP} = \frac{H + BB + HBP}{AB + BB + HBP + SF}$$

- 實務上常以打席數 `PA` 近似分母，但因不包含犧牲觸擊（`SH`）與捕手妨礙打擊（Catcher's Interference），兩者並非完全等價。

## 基準值與判讀區間（FanGraphs 經驗法則）
平均而言，OBP 約比打擊率（AVG）高出 **`.060`**（例如 `.300` 打擊率大致對應 `.360` OBP）。以下為聯盟歷史一般參考區間（實際聯盟平均逐年浮動）：

| 評級 | OBP 參考值 |
| :--- | :---: |
| 頂尖（Excellent） | `.390` |
| 優秀（Great） | `.370` |
| 高於平均（Above Average） | `.340` |
| 聯盟平均（Average） | `.320` |
| 低於平均（Below Average） | `.310` |
| 欠佳（Poor） | `.300` |
| 極差（Awful） | `.290` |

## 演進脈絡、穩定性與限制
- **《魔球》與市場效率**：2000 年代初期奧克蘭運動家隊因重視保送與 OBP 而以低薪簽下高產出球員；如今所有大聯盟球隊都已認知 OBP 的價值，該市場無效率已被填補。
- **樣本穩定性**：打者的 OBP 大約在 **500 個打席（PA）** 後，對未來表現才具備良好的預測力。
- **核心限制**：OBP 將每一次上壘視為**完全等價**——一場 4 打數 2 支一壘安打的打者 OBP 為 `.500`，但 4 打數 1 支全壘打卻只有 `.250`。因此應搭配長打率（`SLG`）或純長打率（`ISO`）使用，或直接改用依真實得分加權的 [[metrics/wOBA|wOBA]] 與 [[metrics/wRC+|wRC+]]。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-16-FanGraphs-OBP]]
