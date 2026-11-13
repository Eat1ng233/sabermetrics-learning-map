---
title: Intercept Point（接觸點）
type: metric
tags:
  - sabermetrics
  - hitting
  - statcast
  - bat-tracking
sources:
  - "[[sources/2026-11-13-MLB-Statcast-Intercept-Point]]"
  - "[[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]"
created: 2026-11-13
updated: 2026-11-13
status: active
---

# Intercept Point（接觸點）

## 一句話定義
**Intercept Point（接觸點）** 顯示打者在何處擊中球（揮空時為球棒與球最接近的位置）。

## 計算方式與核心邏輯
- 同時以兩種參考點回報：
  1. **相對本壘板前緣**
  2. **相對打者重心**（兩髖中點）
- 因接觸點部分取決於打者在打擊區的站位（見 [[metrics/Batting-Stance|Batting Stance]]）：站在打擊區後方的打者可能在本壘板後方接觸，但仍在自己身體前方；反之亦然。
- 可針對全部競爭性揮棒、擊球或揮空分別計算。

## 基準值與判讀區間（2024）
| 類型 | 代表打者 | 數據 |
|---|---|---|
| 前方接觸（相對本壘板） | José Altuve | 板前 **16 吋** |
| 前方接觸（相對身體） | Justin Turner | 重心前 **38.7 吋** |
| 深接觸（相對本壘板） | Shohei Ohtani | 板前緣後 **3.7 吋** |
| 深接觸（相對身體） | Freddie Freeman | 重心前 **26.1 吋** |

- **前方接觸**：多為飛球或拉打型，「拉打長打」最多（Altuve、Arenado、Turner、Paredes）——可把球往拉打方向打高，且揮棒有更長距離加速。
- **深接觸**：多為全場型或反方向型，「全場長打」（Freeman、Ohtani、Soto、Trout）。

## 演進脈絡與相關指標
- 與 [[metrics/Attack-Direction|Attack Direction]]、[[metrics/Pull%|Pull%]]／[[metrics/Oppo%|Oppo%]] 相互印證；屬 [[concepts/Bat-Tracking|Bat Tracking]]。

## 限制與常見誤區
- 描述性指標，沒有單一「最佳」接觸點；資料自 2023 年下半季起。

## 參考來源
- [[sources/2026-11-13-MLB-Statcast-Intercept-Point]]
- [[sources/2026-11-13-MLB-Statcast-Glossary-Overview]]
