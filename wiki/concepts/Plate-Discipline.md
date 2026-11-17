---
title: 本壘板紀律（Plate Discipline）
type: concept
tags:
  - sabermetrics
  - hitting
  - pitching
  - plate-discipline
  - pitchfx
sources:
  - "[[sources/2010-02-18-FanGraphs-Plate-Discipline]]"
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2026-11-13-MLB-Statcast-Swing-Length]]"
created: 2026-11-12
updated: 2026-11-17
status: active
---

# 本壘板紀律（Plate Discipline）

本壘板紀律指標衡量打者對不同類型投球的**出棒選擇**（是否追打壞球、是否積極攻擊好球）與**擊中能力**；從投手端看，則是誘使打者出棒、追打與揮空的能力。我們重視 [[metrics/BB%|BB%]]、[[metrics/K%|K%]]、[[metrics/wOBA|wOBA]] 等「結果」，但本壘板紀律回答的是結果背後的**取向（approach）**：這位打者特別積極嗎？這是一位擅長製造揮空的投手，還是一位難以碰到球的打者？數字的變化也常代表球員取向的實質改變。

## 九項指標與聯盟平均
| 類別 | 指標 | 定義 | 聯盟平均（BIS，約） |
|---|---|---|---|
| 出棒選擇 | [[metrics/O-Swing%\|O-Swing%]] | 帶外揮棒 ÷ 帶外投球 | 30% |
| 出棒選擇 | [[metrics/Z-Swing%\|Z-Swing%]] | 帶內揮棒 ÷ 帶內投球 | 65% |
| 出棒選擇 | [[metrics/Swing%\|Swing%]] | 揮棒 ÷ 總投球 | 46% |
| 擊中能力 | [[metrics/O-Contact%\|O-Contact%]] | 帶外碰到球 ÷ 帶外揮棒 | 66% |
| 擊中能力 | [[metrics/Z-Contact%\|Z-Contact%]] | 帶內碰到球 ÷ 帶內揮棒 | 87% |
| 擊中能力 | [[metrics/Contact%\|Contact%]] | 碰到球 ÷ 揮棒 | 80% |
| 投球環境 | [[metrics/Zone%\|Zone%]] | 帶內投球 ÷ 總投球 | 45% |
| 投球環境 | [[metrics/F-Strike%\|F-Strike%]] | 首球好球 ÷ 打席 | 59% |
| 揮空 | [[metrics/SwStr%\|SwStr%]] | 揮空 ÷ 總投球 | 9.5% |

- 平均值為 FanGraphs 依 BIS 資料的估計，**逐年變動**（PITCHf/x 版本相近）；FanGraphs 排行榜提供 2002 年起每年的聯盟平均，球員頁的「Averages」按鈕可並列當年聯盟平均。
- **指標之間的關係**：SwStr% = Swing% × (1 − Contact%)；Swing% 是 O-Swing% 與 Z-Swing% 依 Zone% 加權的結果。
- 想自己算算看：使用網站上的「本壘板紀律計算器」。

## 兩套資料來源：BIS vs. PITCHf/x
[[entities/FanGraphs|FanGraphs]] 同時提供兩版數據：
- **BIS（Baseball Info Solutions）**：經人工標記修正，球季中每晚更新但有延遲，最近幾場可能尚未納入。
- **[[entities/PITCHf-x|PITCHf/x]]**：原始追蹤資料。

兩者**不會完全一致**，且都有量測誤差。好球帶的定義也因資料來源、年份與主審而異——即使球員行為完全相同，也應預期數字有小幅差異。

## 使用方式與常見誤區
1. **搞清楚分子與分母就能用**：這些都是單純的百分比，與聯盟平均比較即可。
2. **必須搭配其他數據**：95% 的 Contact% 對 Juan Pierre 與 Victor Martinez 意義完全不同；大量追打帶外球即使碰到球，若只是打成軟弱滾地球也沒有價值。好球帶內的球也並非都一樣好打——理想上應攻擊「能打出強勁擊球」的球，而那不一定能用帶內／帶外劃分（可對照 Statcast 的 [[metrics/Squared-Up-Rate|Squared-up Rate]]、[[metrics/Hard-Hit-Rate|Hard-hit Rate]]）。
3. **小心樣本數**：逐球計算讓一季能累積大量樣本，但任何時點都受隨機波動影響。不能看最近 30 個打席出現 95% Contact% 就認定取向或實力改變；整季數據比單季 [[metrics/ISO|ISO]] 更可能反映真實趨勢，但小樣本仍不可下定論（見 [[principles/Sample-Size|樣本數與穩定性]]、[[principles/Regression-Toward-the-Mean|向均值回歸]]）。
4. **無法區分原因**：首球大量出棒可能是積極，也可能只是剛好看到好打的球，數字本身分不出來。
5. **不含情境**：比賽情境與對手打者／投手都會影響行為，但這些指標不考慮。
6. **沒有理想組合**：O-Swing% 高也可能是很有生產力的打者，Contact% 很高也可能是很差的打者；整體而言高 Contact% 對打者有利、對投手不利，但要看其他因素。
7. **SwStr% 對投手特別重要**，且**不要與 Whiff rate 混淆**。

> [!warning] 定義差異：SwStr%（每球）vs. Whiff rate（每次揮棒）
> FanGraphs 的 [[metrics/SwStr%|SwStr%]] = 揮空 ÷ 總投球數（平均約 9.5%）；Whiff rate = 揮空 ÷ 揮棒次數（= 1 − Contact%，以平均 Contact% 80% 推算約 20%）。MLB.com [[metrics/Swing-Length|Swing Length]] 頁的 Whiff%（短揮棒 19%、長揮棒 30%）屬每次揮棒的口徑（來源：[[sources/2010-02-18-FanGraphs-Plate-Discipline]]、[[sources/2026-11-13-MLB-Statcast-Swing-Length]]）。

## 其他相關欄位
- **Pace（投球節奏）**：FanGraphs 亦在本壘板紀律區塊列出 [[metrics/Pace|Pace]]（PITCHf/x 每球平均間隔），與出棒行為無直接關係。
- 投手兩好球決勝見 [[metrics/PutAway%|PutAway%]]；極端狼狽揮空見 [[metrics/Swords|Swords]]。

## Statcast 對應指標
- **揮棒端補充**：揮空傾向可由 [[concepts/Bat-Tracking|Bat Tracking]] 解釋，如 [[metrics/Swing-Length|Swing Length]]（長揮棒 Whiff 30% vs 短揮棒 19%，每次揮棒口徑）；好球帶邊緣的判決則與 [[metrics/Catcher-Framing|Catcher Framing]]（Shadow Zone）相關。

## 參考來源
- [[sources/2010-02-18-FanGraphs-Plate-Discipline]]
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2026-11-13-MLB-Statcast-Swing-Length]]
