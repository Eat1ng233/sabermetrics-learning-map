---
title: ERA-/FIP-/xFIP- — FanGraphs 球場與聯盟校正投球指標專題
type: source
tags:
  - sabermetrics
  - pitching
  - park-adjusted
  - fangraphs
sources: []
created: 2026-11-12
updated: 2026-11-12
status: active
---

# ERA-/FIP-/xFIP- — FanGraphs 球場與聯盟校正投球指標專題

- **作者**：Piper Slowinski
- **發表日期**：2011-04-08
- **出處**：[[entities/FanGraphs|FanGraphs]] Sabermetrics Library
- **原始連結**：[ERA-/FIP-/xFIP- | Sabermetrics Library](https://library.fangraphs.com/pitching/era-fip-xfip/)
- **本地檔案**：`raw/articles/ERA- _ FIP- _ xFIP- _ Sabermetrics Library.pdf`

## 核心摘要
1. **定義**：針對主場球場效應（Park Factor）與所屬聯盟平均（AL/NL）校正後的 ERA、FIP 與 xFIP，為投手版的 `OPS+` / `wRC+`。
2. **公式與尺度**：$\text{ERA-} = 100 \times \frac{\text{ERA} + (\text{ERA} - \text{ERA} \times \text{PF}/100)}{\text{AL or NL ERA}}$。**`100` 為聯盟平均**，越低越好（如 `80` 代表優於聯盟平均 20%）。
3. **限制**：Park Factor 本身是估計值，個別投手受主場影響程度可能略有差異（誤差通常在 5% 以內）。

## 更新與建立的頁面
- [[metrics/ERA-|ERA-]]
- [[metrics/FIP-|FIP-]]
- [[metrics/xFIP-|xFIP-]]
