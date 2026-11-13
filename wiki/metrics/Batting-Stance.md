---
title: Batting Stance（打擊站姿）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Batting-Stance]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Batting Stance（打擊站姿）

## 一句話定義
**Batting Stance** 數據描述打者站在打擊區的**位置**與**站姿類型**。

## 計算方式與核心邏輯
| 成分 | 量測方式 |
|---|---|
| 打擊區深度（Depth in box） | 本壘板前緣 → 打者重心（兩髖中點）的距離 |
| 離板距離（Distance off plate） | 本壘板內緣 → 重心的水平距離 |
| 兩腳間距（Distance between feet） | 站姿寬窄 |
| 站姿角度（Stance angle） | 兩腳連線相對「正對投手」直線的角度：開放（前腳較靠外側）／封閉（前腳較靠內側）／平行（0°） |

- 量測時點：**投手出手前 1 秒**；另追蹤出手瞬間與接觸瞬間的腳步位置。

## 基準值與判讀區間（2024 極值）
- 深度：José Altuve 最靠前（本壘板前緣後 11.2 吋）、Matt Vierling 最深（37.2 吋）。
- 離板：Ozzie Albies 最近（20.9 吋，右打）、Paul Goldschmidt 最遠（34.5 吋）。
- 腳距：Steven Kwan 最窄（8.8 吋）、Ryan McMahon 最寬（45.3 吋）。
- 角度：Rafael Devers 最開放（67°）、Giancarlo Stanton 最封閉（12°）；Jarren Duran、J.D. Martinez 為平行站姿（0°）。

## 演進脈絡與相關指標
- 與 [[metrics/Intercept-Point|Intercept Point]] 同一排行榜：站得越後面，接觸點相對本壘板可能越深，但相對身體仍可能在前。
- 屬 [[concepts/Bat-Tracking|Bat Tracking]] 相關的生物力學資料（[[entities/Hawk-Eye|Hawk-Eye]] 帶來）。

## 限制與常見誤區
- 為描述性資料，本身不直接代表好壞；資料自 2023 下半季起。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Batting-Stance]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
