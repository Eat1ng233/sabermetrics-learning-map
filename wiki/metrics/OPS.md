---
title: OPS（On-Base Plus Slugging，整體攻擊指數）
type: metric
tags:
  - sabermetrics
  - hitting
  - ops
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# OPS（On-Base Plus Slugging，整體攻擊指數）

## 一句話定義
**OPS** 是將上壘率（[[metrics/OBP|OBP]]）與長打率（[[metrics/SLG|SLG]]）直接相加的綜合打擊指標，用來同時衡量打者的「上壘能力」與「長打能力」。

## 計算公式
$$\text{OPS} = \text{OBP} + \text{SLG}$$

## 基準值與判讀區間（FanGraphs 參考值）
OPS 會隨不同年代的聯盟進攻環境波動（例如 2000 年的 `.900` 與 2015 年的 `.900` 含金量不同），以下為一般經驗區間：

| 評級 | OPS 參考值 |
| :--- | :---: |
| 頂尖（Excellent） | `1.000` |
| 優秀（Great） | `.900` |
| 高於平均（Above Average） | `.800` |
| 聯盟平均（Average） | `.710` |
| 低於平均（Below Average） | `.670` |
| 欠佳（Poor） | `.600` |
| 極差（Awful） | `.570` |

## 優勢與限制
- **入門價值**：計算極簡便且已進入主流轉播與球卡文化，是引導球迷超越 [[metrics/AVG|AVG]] 與 RBI 的良好入門指標。
- **1:1 權重缺陷**：OPS 把 1 點 OBP 與 1 點 SLG 視為等價，但實際上 **OBP 對得分的影響力約為 SLG 的 1.8 倍（約兩倍）**，因此 OPS 會略微高估純重砲打者、低估高上壘型打者。
- **環境與樣本**：未經球場與聯盟校正（跨隊/跨年代比較建議改用 [[metrics/OPS+|OPS+]] 或 [[metrics/wRC+|wRC+]]），且小樣本（如 50 PA）下波動極大。
- **進階替代**：若有進階數據可用，FanGraphs 建議直接以 [[metrics/wOBA|wOBA]] 取代 OPS。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus]]
