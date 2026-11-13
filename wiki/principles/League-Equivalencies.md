---
title: 聯盟換算與大聯盟等價表現（League Equivalencies / MLE）
type: principle
tags:
  - sabermetrics
  - principles
  - methodology
sources:
  - "[[sources/2010-02-27-FanGraphs-League-Equivalencies]]"
created: 2026-11-12
updated: 2026-11-12
status: active
---

# 聯盟換算與大聯盟等價表現（League Equivalencies / MLE）

## 一句話定義
**聯盟換算（MLE, Major League Equivalency）**是將小聯盟或海外職棒（如日本職棒 NPB）的球員數據，扣除球場、得分環境與聯盟水準差異後，翻譯到同一大聯盟（MLB）尺度上的方法。

---

## 推導步驟與方法
1. **環境校正**：先扣除球場效應（[[principles/Park-Factors|Park Factors]]，雖然小聯盟球場係數較難取得）與該聯盟整體得分環境差異。
2. **實力水準校正（季中升降追蹤）**：
   - 為了排除休賽季年輕球員自身的成長，研究僅追蹤**季中在同一球季被升上或下放（Mid-season promotions/demotions）**的球員在前後聯盟的表現變化。
   - **針對基礎數據各自建立係數**：不直接對綜合指標做單一縮放，而是分別計算安打、保送、全壘打等基礎統計的轉換率，再重組成進階指標。
   - 透過層級串聯（Rookie → A → AA → AAA → MLB），即可建立完整換算路徑。

---

## 四大關鍵限制與實戰警語

1. **不同聯盟重視的技能轉換率不同**：例如日本職棒（NPB）球員轉戰 MLB 時，**長打能力（Power）的折損遠大於打擊率與上壘率**，因此評估 NPB 打者時應更信任其 AVG/OBP 而對 SLG/HR 打較大折扣。
2. **技能交互作用陷阱（Moneyball 選秀教訓）**：低階小聯盟的高保送率若缺乏真實擊球能力與長打威脅支撐，升上高階聯盟後投手會直接攻擊好球帶，導致高保送率無法轉換（奧克蘭運動家早期曾因過度迷信純選球、無長打的新秀 MLE 而吃虧）。
3. **重複層級偏差（Repeating Levels）**：同一名球員重讀同一個小聯盟層級時，數據會出現人為虛高，干擾轉換模型。
4. **MLE ≠ 未來預測**：MLE 只是「將**現在**的成績去環境化翻譯成大聯盟尺度」，並未預測該新秀未來幾年還會成長多少。

---

## 相關頁面
- [[principles/Park-Factors|球場校正係數]]
- [[principles/Projection-Systems|預測系統]]
- 來源：[[sources/2010-02-27-FanGraphs-League-Equivalencies]]
