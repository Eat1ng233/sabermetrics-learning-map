---
title: Stuff+
type: metric
tags:
  - sabermetrics
  - pitching
  - pitch-modeling
  - stuff-plus
  - statcast
sources:
  - "[[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]"
  - "[[sources/2026-11-13-MLB-Statcast-Velocity]]"
  - "[[sources/2026-11-13-MLB-Statcast-Spin-Rate]]"
  - "[[sources/2026-11-13-MLB-Statcast-Pitch-Movement]]"
  - "[[sources/2026-11-13-MLB-Statcast-Extension]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# Stuff+

## 一句話定義
**Stuff+** 是評估投球**純物理品質（「球有多噁心 / Nasty」）**的模型指標，以 **100 為聯盟平均**，完全不考量進壘位置或打擊結果。

## 模型特徵與計算邏輯
由 Eno Sarris 與 Max Bay 創立、Owen McGrattan 與 Matt Dennewitz 維護，使用決策樹模型並直接針對**得分價值（Run Values）**進行訓練：
- **輸入物理特徵**：出手點（Release Point）、球速（Velocity）、垂直與水平位移（Movement）、轉速（Spin Rate）。
- **變化球與變速球相對基準**：以投手當場使用率最高的速球為「主速球」，計算各變化球/變速球與主速球之間的**球速差與位移差**。
- **Seam-Shifted Wake**：納入「軸向差（Axis Differential）」，捕捉純旋轉預期位移與受縫線尾流效應影響後實際位移之間的差異。
- **隱含捕捉效應**：雖未直接輸入垂直進壘角度（VAA），但透過出手點與位移的交互作用隱含捕捉；同時因包含出手點，也捕捉了部分動作欺敵性。

## 尺度、標準差與樣本特性
- **單球層級**：100 為平均，每 **10 分**代表 **1 個標準差**。
- **整季個人彙總標準差**：先發投手（SP）為 `12.16`、後援投手（RP）為 `17.02`。後援轉任先發時，因體力分配導致球威下降，Stuff+ 通常會下降約 **5.5 分**。
- **球種均值差異**：滑球（平均 `110.8`）、指叉球（`109.6`）與曲球（`105.5`）在 Stuff+ 評價上普遍高於四縫線速球（`99.2`）、伸卡球（`92.5`）與變速球（`87.2`）。
- **極速穩定性與跨季黏著度**：
  - **僅需約 80 球**即達到高信度（Cronbach's Alpha），是極小樣本下最強大的單一投球指標。
  - **跨季黏著度最高**（2021–2022 年 $R^2 = 0.66$），是 [[metrics/Pitching+|Pitching+]] 跨季穩定性的主要驅動力。

## 相關指標
- [[metrics/Location+|Location+]]
- [[metrics/Pitching+|Pitching+]]
- [[metrics/PitchingBot|PitchingBot]]
- [[comparisons/PitchingBot-vs-Pitching+|PitchingBot 與 Stuff+/Location+/Pitching+ 比較]]

## Statcast 對應指標
- **Statcast 物理輸入**：模型特徵來自 Statcast 投球追蹤——[[metrics/Velocity|Velocity]]、[[metrics/Extension|Extension]]、[[metrics/Spin-Rate|Spin Rate]]、[[metrics/Active-Spin|Active Spin]]、[[metrics/Pitch-Movement|Pitch Movement]]（官方定義見各頁）。

## 參考來源
- [[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer]]
- [[sources/2026-11-13-MLB-Statcast-Velocity]]
- [[sources/2026-11-13-MLB-Statcast-Spin-Rate]]
- [[sources/2026-11-13-MLB-Statcast-Pitch-Movement]]
- [[sources/2026-11-13-MLB-Statcast-Extension]]
