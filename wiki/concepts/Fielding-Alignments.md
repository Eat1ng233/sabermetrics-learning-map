---
title: Fielding Alignments（守備布陣與 Shift）
type: concept
tags:
  - sabermetrics
  - fielding
  - statcast
  - shift
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Fielding-Alignments]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Fielding Alignments（守備布陣與 Shift）

## 一句話定義
Statcast 依每位野手的實際站位，將每一球的**內野**與**外野**守備布陣分類，用以追蹤 Shift（極端布陣）等戰術的使用與 2023 年規則限制後的變化。

## 內野布陣四分類
| 類別 | 定義 |
|---|---|
| **Standard（標準）** | 四名內野手皆在傳統位置 |
| **Shift（布陣）** | 三名以上內野手位於二壘同側（**僅適用 2023 年前**） |
| **Shaded（偏移）** | 至少一名野手站在其負責區塊外，但未完全換邊（例：對左打游擊手偏向中間） |
| **Strategic（戰術）** | 其他戰術配置：前進守備、守線、五人內野、外野 rover 等 |

- **標準位置的定義**：非關鍵情境（1–8 局、壘上無人）下，聯盟平均野手 70%–90% 時間所在的區域。角度：−45° 三壘線、0° 正中、+45° 一壘線。
  | 守位 | vs 左打 | vs 右打 |
  |---|---|---|
  | 1B | 85–130 呎；31°–42° | 85–130 呎；23°–38° |
  | 2B | 130–160 呎；9°–31° | 130–160 呎；0°–18° |
  | SS | 130–160 呎；−18°–0° | 130–160 呎；−8°～−28° |
  | 3B | 80–130 呎；−37°～−17° | 80–130 呎；−42°～−30° |
- **趨勢數據**：
  - 標準布陣比例：2017 年 **78%** → 2022 年 **56%**。
  - 2022 年 Shift 佔全部打席 **38%**（左打 62%、右打 22%）。
  - **2023 年規則**：內野至少四人，且二壘兩側各至少兩名內野手——完整 Shift 不再允許。2023 年 Shaded 佔 22% 打席（左打 44%、右打 7%）。
  - Strategic 內野：2022 年 6% → 2023 年超過 8%。

## 外野布陣四分類
| 類別 | 定義 |
|---|---|
| **Standard** | 三名外野手在傳統位置：LF 260–320 呎（−33°～−21°）、CF 280–350 呎（−8°–7°）、RF 260–320 呎（21°–33°） |
| **3 OF to one side of 2B** | 三名外野手都在二壘同側，極罕見（2017 年響尾蛇對 DJ LeMahieu） |
| **4th Outfielder** | 內野手退到距本壘 **220 呎**以外即視為第四外野手（對 Joey Votto、Joey Gallo；2022 藍鳥常用） |
| **Strategic** | 其他非標準配置（整體偏移、深守、淺守）；2019 年近 10% 打席為高峰，2022–23 降至 5% 以下 |

## 與其他指標的關係
- Statcast 知道每位野手的實際站位，因此 [[metrics/OAA|OAA]] 可在任何布陣下計算「多遠、多少時間」，並依**實際守備區域**拆解（例：Arenado 2019 年 +17 OAA 中有 +3 來自游擊區）。
- 傳統以區塊與守位計算的守備指標（[[metrics/UZR|UZR]]、[[metrics/DRS|DRS]]）在 Shift 盛行時期的處理挑戰，可參考 [[concepts/Defensive-Metrics-Overview|守備數據核心理論]]。
- 打者面：極端拉打（[[metrics/Pull%|Pull%]]、[[metrics/Attack-Direction|Attack Direction]]）是遭遇 Shift 的主因；2023 規則變化後 [[metrics/BABIP|BABIP]] 環境可能隨之改變（延伸思考，原文未論及）。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Fielding-Alignments]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
