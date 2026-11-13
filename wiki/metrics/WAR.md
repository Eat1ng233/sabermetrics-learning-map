---
title: WAR（Wins Above Replacement，勝場貢獻值）
type: metric
tags:
  - sabermetrics
  - war
  - value
sources:
  - "[[sources/2014-10-30-FanGraphs-Complete-List-Offense]]"
  - "[[sources/2010-02-15-FanGraphs-What-is-WAR]]"
  - "[[sources/2012-03-23-FanGraphs-WAR-Misconceptions]]"
  - "[[sources/2012-03-28-FanGraphs-WAR-for-Pitchers]]"
  - "[[sources/2012-04-02-FanGraphs-WAR-for-Position-Players]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# WAR（Wins Above Replacement，勝場貢獻值）

## 一句話定義
**WAR** 是一個綜合性評估指標，用來估算一位球員在該球季相較於「隨手可得的替補水準球員（Replacement Level Player，如小聯盟自由球員或 4A 板凳球員）」，為球隊多贏了幾場球。

- **全聯盟總量基準**：每季全大聯盟（2,430 場比賽）預設共有 **`1,000` WAR**（對應替補水準球隊勝率 `.294`，約 43 勝），其中 **570 WAR** 分配給野手、**430 WAR** 分配給投手。

---

## 一、野手 fWAR 計算架構
$$\text{WAR} = \frac{\text{Batting Runs} + \text{BsR} + \text{Fielding Runs} + \text{Positional} + \text{League} + \text{Replacement}}{\text{Runs Per Win (RPW)}}$$

1. **Batting Runs**：經球場與聯盟校正後的 [[metrics/wRAA|wRAA]]（與 [[metrics/BsR|BsR]] 合計為 [[metrics/Off|Off]]）。
2. **Fielding Runs**：2002/2003 年後非捕手採用 [[metrics/UZR|UZR]]、以前採用 [[metrics/TZ|TZ]]；捕手採用 `rSB` 與 `RPP`（與 Positional 合計為 [[metrics/Def|Def]]）。
3. **Positional Adjustment（每 162 守備場次，每場 9 局）**：
   - `C`: `+12.5`｜`SS`: `+7.5`｜`2B / 3B / CF`: `+2.5`｜`LF / RF`: `-7.5`｜`1B`: `-12.5`｜`DH`: `-17.5`
4. **League & Replacement Runs**：聯盟校正確保各聯盟高於平均總和為 0；替補得分為 `(570 * (MLB Games / 2430)) * (RPW / lgPA) * PA`。
5. **RPW（Tom Tango 簡化式）**：$\text{RPW} = 9 \times \frac{\text{MLB R}}{\text{MLB IP}} \times 1.5 + 3$（通常約 `9–10` 分/勝）。

---

## 二、投手 fWAR 計算架構
1. **`ifFIP`**：以 [[metrics/FIP|FIP]] 為基礎，但將內野高飛球（`IFFB`）視同三振計入，經 `RA9` 尺度轉換（`FIPR9`）與專屬 FIP Park Factor 校正得到 `pFIPR9`，再與所屬聯盟比較得到 `RAAP9`。
2. **動態每勝得分（`dRPW`）**：因投手本人投球會直接改變該場比賽的得分環境，故依先發/吃局數加權計算專屬 `dRPW`。
3. **替補水準與後援槓桿**：
   - 替補水準 = $0.03 \times (1 - \frac{GS}{G}) + 0.12 \times (\frac{GS}{G})$（純後援 `0.03`、純先發 `0.12`）。
   - 後援投手需乘上槓桿乘數 $\frac{1 + \text{gmLI}}{2}$（反映牛棚階級連鎖效應 Chaining）。
4. **全聯盟校準**：加上 `WARIP * IP`（約 `-0.0007` 至 `-0.0012` / 局）使全聯盟投手總 WAR 精確為 `430`。

---

## 三、判讀區間（全職野手與先發投手）
全職平均球員約 **`2 WAR`**；後援投手達 **`1+ WAR`** 即屬頂尖；史上最低 fWAR 為 2002 年 Neifi Perez（`-3.1`）。

| 層級 | 單季 WAR |
| :--- | :---: |
| 龍套/替補邊緣（Scrub） | `0 – 1` |
| 角色球員（Role Player） | `1 – 2` |
| 稱職先發（Solid Starter） | `2 – 3` |
| 優秀球員（Good Player） | `3 – 4` |
| 明星球員（All-Star） | `4 – 5` |
| 超級巨星（Superstar） | `5 – 6` |
| MVP 級（MVP） | `6+` |

---

## 四、五大常見誤區與限制
1. **整隊 WAR ≠ 球隊勝場**：須加上約 43 勝的替補基準勝場。
2. **衡量過去，非直接預測**：估算真實天賦建議看近三年以 **`5/3/1`** 加權平均。
3. **守備與捕手誤差**：守備數據有標記誤差且早期捕手未含 Framing，因此 **`6.4` 與 `6.1` WAR 應視為同級**，不可迷信小數點第一位。
4. **環境交互影響**：例如滾地球投手轉至守備極差球隊時，實質產出仍會受影響。
5. **情境中立**：不獎勵關鍵時刻表現，想看勝負關鍵請搭配 [[metrics/WPA|WPA]]；想看三大網站差異請見 [[comparisons/fWAR-vs-rWAR-vs-WARP|fWAR vs. rWAR vs. WARP]]。

## 參考來源
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense]]
- [[sources/2010-02-15-FanGraphs-What-is-WAR]]
- [[sources/2012-03-23-FanGraphs-WAR-Misconceptions]]
- [[sources/2012-03-28-FanGraphs-WAR-for-Pitchers]]
- [[sources/2012-04-02-FanGraphs-WAR-for-Position-Players]]
