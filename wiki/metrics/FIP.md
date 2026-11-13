---
title: FIP（Fielding Independent Pitching，守備獨立防禦率）
type: metric
tags:
  - sabermetrics
  - pitching
  - fip
  - dips
sources:
  - "[[sources/2010-02-15-FanGraphs-FIP]]"
  - "[[sources/2026-11-13-MLB-Statcast-xERA]]"
created: 2026-11-12
updated: 2026-11-13
status: active
---

# FIP（Fielding Independent Pitching，守備獨立防禦率）

## 一句話定義
**FIP** 基於 Voros McCracken 的 **DIPS 理論**，只使用投手能直接控制的四種結果（三振、保送、觸身球、全壘打）來估算「若場內球結果與事件順序皆為聯盟平均時，該投手應有的防禦率」。

## 計算公式
$$\text{FIP} = \frac{13 \times HR + 3 \times (BB + HBP) - 2 \times K}{IP} + \text{FIP Constant}$$

- **FIP Constant**（約 `3.10`，逐年變動）：$\text{lgERA} - \frac{13\cdot\text{lgHR} + 3\cdot(\text{lgBB}+\text{lgHBP}) - 2\cdot\text{lgK}}{\text{lgIP}}$，確保聯盟平均 FIP 等於聯盟平均 ERA，方便直接以 [[metrics/ERA|ERA]] 尺度判讀。

## 基準值與判讀區間（2016 環境參考）
頂尖 `3.20`、優秀 `3.50`、高於平均 `3.80`、平均 `4.20`、低於平均 `4.40`、欠佳 `4.70`、極差 `5.00`。

## 應用與限制
- **FanGraphs WAR 核心**：FanGraphs 的投手 [[metrics/WAR|WAR]] 採用 FIP 計算（另提供 `RA9-WAR`）。
- **限制**：未經球場/聯盟校正（需看 [[metrics/FIP-|FIP-]]）；忽略了少數投手確實擁有控制軟弱擊球或限制盜壘的能力；小樣本下全壘打波動大（可搭配 [[metrics/xFIP|xFIP]] 與 [[metrics/SIERA|SIERA]] 觀察）。

## Statcast 對應指標
- **Statcast 對照**：[[metrics/xERA|xERA]] 理念與 FIP 類似（只評價投手可控部分），但改以 [[metrics/xwOBA|xwOBA]] 納入 Statcast 擊球初速與仰角。

## 參考來源
- [[sources/2010-02-15-FanGraphs-FIP]]
- [[sources/2026-11-13-MLB-Statcast-xERA]]
