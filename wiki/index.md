# 維基總目錄（Wiki Index）

> 此檔案為知識庫的**內容導向總目錄**。每次執行 `ingest`、將問答沉澱為頁面或進行 `lint` 時，皆會同步更新此目錄。查詢問題時，Agent 會優先閱讀此檔案以定位相關頁面。

## 總覽與學習地圖（Overview & Synthesis）
- [[overview|賽伯計量學學習總覽]] — 系統性整理打擊、投球、守備、跑壘與綜合評價（WAR）的學習脈絡與知識地圖。（來源數：114，更新：2026-11-13）

## 基礎原理與計量邏輯（Principles）
- [[principles/README|Principles 總覽]] — 整理 FanGraphs Sabermetrics Library 四大計量邏輯支柱（訊號與雜訊、價值量化、環境校正、時間預測）。（來源數：14，更新：2026-11-12）
- [[principles/DIPS|DIPS（守備獨立投球理論）]] — 剝離隊友守備雜訊的投手評估哲學，與 0% BABIP 假設的歷史脈絡。（來源數：1，更新：2026-11-12）
- [[principles/Regression-Toward-the-Mean|向均值回歸（RTM）]] — `Outcomes = Talent + Randomness`，區分統計回歸與真實實力退化。（來源數：1，更新：2026-11-12）
- [[principles/Replacement-Level|替補水準（Replacement Level）]] — 底薪自由球員基準（29.7% 勝率、570/430 WAR 分配與計算公式）。（來源數：1，更新：2026-11-12）
- [[principles/Sample-Size|樣本數與穩定性（Sample Size）]] — Carleton R²=.49 穩定門檻表（投打 30 項）與 Cronbach's Alpha 信度遞增曲線。（來源數：1，更新：2026-11-12）
- [[principles/Splits|分項數據與左右對戰（Splits）]] — 辨別有效機制、子樣本不足、對手品質偏差與各球種左右對戰效應。（來源數：1，更新：2026-11-12）
- [[principles/Projection-Systems|預測系統（Projection Systems）]] — 以多季數據、老化曲線與回歸估計真實實力中位數（含 ZiPS/Steamer/Marcel 等）。（來源數：1，更新：2026-11-12）
- [[principles/Linear-Weights|線性權重（Linear Weights）]] — 從 24 情境得分期望值矩陣推導 wOBA 與 FIP 權重的四步驟。（來源數：1，更新：2026-11-12）
- [[principles/Counting-vs-Rate-Statistics|累積數據 vs. 比率數據]] — 標準化比率的意義與「高於聯盟平均」累積指標扭曲上場時間的陷阱。（來源數：1，更新：2026-11-12）
- [[principles/Park-Factors|球場校正係數（Park Factors）]] — 5 年回歸加法校正（已減半顯示）與左右打／擊球型態單一係數盲點。（來源數：1，更新：2026-11-12）
- [[principles/Positional-Adjustment|守備位置調整（Positional Adjustment）]] — 每 1,458 局各守位調整分數（C +12.5 至 DH -17.5）與選擇偏差限制。（來源數：1，更新：2026-11-12）
- [[principles/Aging-Curve|老化曲線（Aging Curve）]] — 技能與出賽時間雙重衰退、30 歲後 -0.5 WAR/年經驗法則與合約估值。（來源數：1，更新：2026-11-12）
- [[principles/League-Equivalencies|聯盟換算（League Equivalencies / MLE）]] — 以季中升降追蹤建立 MiLB/NPB 至 MLB 換算與 Moneyball 選球陷阱。（來源數：1，更新：2026-11-12）
- [[principles/Pythagorean-Win-Loss|畢達哥拉斯勝率（Pythagorean Win-Loss）]] — 得失分與勝率非線性關係、常見誤解與 Runs Per Win 推導基石。（來源數：1，更新：2026-11-12）
- [[principles/Luck|運氣與低潮診斷（Luck）]] — 透過本壘板紀律、擊球型態、BABIP 與 HR/FB 診斷低潮與運氣波動。（來源數：1，更新：2026-11-12）

## 數據指標（Metrics）

### 打擊與擊球型態（Hitting & Batted Ball）
- [[metrics/AVG|AVG（打擊率）]] — 衡量每個打數擊出安打的比率，含公式與忽略保送/長打的限制。（來源數：3，更新：2026-11-13）
- [[metrics/OBP|OBP（上壘率）]] — 衡量打者避免出局的比率，含公式、500 PA 穩定門檻、評級區間與 Moneyball 脈絡。（來源數：2，更新：2026-11-12）
- [[metrics/SLG|SLG（長打率）]] — 衡量每個打數的平均壘打數，含公式與線性壘打假設限制。（來源數：3，更新：2026-11-13）
- [[metrics/ISO|ISO（純長打率）]] — 計算 SLG 減 AVG，含 550 PA 穩定門檻與評級區間。（來源數：2，更新：2026-11-12）
- [[metrics/OPS|OPS（整體攻擊指數）]] — OBP + SLG，含評級區間與 1:1 權重（相對於 ~1.8x 真實權重）的數學缺陷。（來源數：2，更新：2026-11-12）
- [[metrics/OPS+|OPS+]] — 經球場與聯盟環境標準化的 OPS（100 為平均，Baseball-Reference 提供）。（來源數：1，更新：2026-11-12）
- [[metrics/BB%|BB%（保送率）]] — 打者（PA）與投手（BF）保送頻率，含評級區間與 120 PA 穩定門檻。（來源數：3，更新：2026-11-12）
- [[metrics/K%|K%（三振率）]] — 打者（PA）與投手（BF）三振頻率，含評級區間與 60 PA 極速穩定門檻。（來源數：3，更新：2026-11-12）
- [[metrics/BB-K|BB/K（保送三振比）]] — 四壞球保送與被三振次數的比值。（來源數：1，更新：2026-11-12）
- [[metrics/wOBA|wOBA（Weighted On-Base Average）]] — Tom Tango 創立，依實際得分價值加權的打擊指標，含 2013 權重公式與評級區間。（來源數：3，更新：2026-11-13）
- [[metrics/wRAA|wRAA（Weighted Runs Above Average）]] — 將 wOBA 換算為高於聯盟平均的累積得分數（10 wRAA ≈ +1 勝）。（來源數：2，更新：2026-11-12）
- [[metrics/wRC+|wRC+（Weighted Runs Created Plus）]] — 結合 wOBA 權重並經球場與聯盟環境校正的最全面打擊率值指標。（來源數：1，更新：2026-11-12）
- [[metrics/Off|Off（綜合進攻價值）]] — 結合球場校正後打擊得分與 BsR 的進攻總得分貢獻（WAR 積木）。（來源數：2，更新：2026-11-12）
- [[metrics/BABIP|BABIP（場內球打擊率）]] — 場內球形成安打比率，含打者 800 BIP 與投手 2,000 BIP 穩定門檻。（來源數：4，更新：2026-11-13）
- [[metrics/GB%|GB%（滾地球比例）]] — 場內球中滾地球比例（平均 ~44%），長打極少。（來源數：2，更新：2026-11-12）
- [[metrics/LD%|LD%（平飛球比例）]] — 場內球中平飛球比例（平均 ~21%），產值最高但需約一年半穩定。（來源數：3，更新：2026-11-13）
- [[metrics/FB%|FB%（飛球比例）]] — 場內球中飛球比例（平均 ~35%），長打火力最強。（來源數：2，更新：2026-11-12）
- [[metrics/IFFB%|IFFB%（內野高飛球比例）]] — 飛球中內野必死球比例（平均 ~11%）。（來源數：2，更新：2026-11-12）
- [[metrics/HR-FB|HR/FB（飛球全壘打率）]] — 飛球形成全壘打的比例（平均 ~9.5%），評估投手尤其關鍵。（來源數：2，更新：2026-11-12）
- [[metrics/Pull%|Pull%（拉打比例）]] — 擊向拉打側 30 度扇區比例（平均 ~40%）。（來源數：2，更新：2026-11-12）
- [[metrics/Cent%|Cent%（中間方向比例）]] — 擊向中外野側 30 度扇區比例（平均 ~35%）。（來源數：2，更新：2026-11-12）
- [[metrics/Oppo%|Oppo%（推打比例）]] — 擊向反方向 30 度扇區比例（平均 ~25%）。（來源數：2，更新：2026-11-12）
- [[metrics/Soft%|Soft%（軟弱擊球比例）]] — BIS 判定軟弱擊球比例（平均 ~20%）。（來源數：2，更新：2026-11-12）
- [[metrics/Med%|Med%（中等擊球比例）]] — BIS 判定中等擊球比例（平均 ~50%）。（來源數：2，更新：2026-11-12）
- [[metrics/Hard%|Hard%（強勁擊球比例）]] — BIS 判定強勁擊球比例（平均 ~30%），用於檢驗 BABIP 運氣方向。（來源數：3，更新：2026-11-13）

### 投球（Pitching）
- [[metrics/ERA|ERA（防禦率）]] — 每九局自責分，含官方紀錄員主觀性與無法剝離隱性守備失靈之缺陷。（來源數：2，更新：2026-11-13）
- [[metrics/ERA-|ERA-]] — 經球場與聯盟校正後的 ERA（100 為平均，越低越好）。（來源數：1，更新：2026-11-12）
- [[metrics/FIP|FIP（守備獨立防禦率）]] — 基於 DIPS 理論，只計 HR、BB、HBP、K 的投球表現指標（FanGraphs 投手 WAR 基礎）。（來源數：2，更新：2026-11-13）
- [[metrics/FIP-|FIP-]] — 經球場與聯盟校正後的 FIP（100 為平均，越低越好）。（來源數：1，更新：2026-11-12）
- [[metrics/xFIP|xFIP（預期守備獨立防禦率）]] — 以聯盟平均 HR/FB% 取代實際全壘打的迴歸版 FIP，未來預測力更高。（來源數：1，更新：2026-11-12）
- [[metrics/xFIP-|xFIP-]] — 經球場與聯盟校正後的 xFIP（100 為平均，越低越好）。（來源數：1，更新：2026-11-12）
- [[metrics/SIERA|SIERA（技巧交互防禦率）]] — 納入三振、保送與擊球型態非線性交互作用的球場校正 ERA 估計指標。（來源數：1，更新：2026-11-12）
- [[metrics/WHIP|WHIP（每局被上壘率）]] — `(BB + H) / IP`，簡單入門但以 IP 為分母且等價看待保送與全壘打。（來源數：1，更新：2026-11-12）
- [[metrics/LOB%|LOB%（殘壘率）]] — 投手將上壘者留在壘包的比例（平均 ~70–72%），偏離值易向均值回歸。（來源數：1，更新：2026-11-12）
- [[metrics/K-9|K/9（每九局三振數）]] — 每 9 局三振數，精確比較時遜於 K%。（來源數：1，更新：2026-11-12）
- [[metrics/BB-9|BB/9（每九局保送數）]] — 每 9 局保送數，精確比較時遜於 BB%。（來源數：1，更新：2026-11-12）
- [[metrics/SD|SD（Shutdowns）]] — 後援投手單場 `WPA ≥ +0.06` 的強勢關門次數（取代救援/中繼成功）。（來源數：1，更新：2026-11-12）
- [[metrics/MD|MD（Meltdowns）]] — 後援投手單場 `WPA ≤ -0.06` 的砸鍋放火次數（取代救援失敗）。（來源數：1，更新：2026-11-12）
- [[metrics/Pace|Pace（投球節奏）]] — PITCHf/x 每球平均間隔秒數（平均 ~21.5 秒），屬觀賞性指標。（來源數：3，更新：2026-11-13）
- [[metrics/PitchingBot|PitchingBot]] — XGBoost 串接子模型計算單球 xRV，並以 20-80 球探量表評估投球品質。（來源數：2，更新：2026-11-13）
- [[metrics/Stuff+|Stuff+]] — 純看物理特性（球速、轉速、位移、出手點、Seam-Shifted Wake）的球威模型，約 80 球穩定。（來源數：5，更新：2026-11-13）
- [[metrics/Location+|Location+]] — 依球數與球種校正進壘位置的控球模型，約需 400 球達穩定信度。（來源數：1，更新：2026-11-12）
- [[metrics/Pitching+|Pitching+]] — 整合物理特性、位置、球數與左右打的獨立投球過程模型。（來源數：1，更新：2026-11-12）
- [[metrics/FDP|FDP（守備相依投球指標群）]] — 量化 FIP 刻意忽略的場內球與殘壘面向（BIP-Wins + LOB-Wins）。（來源數：1，更新：2026-11-12）
- [[metrics/RA9-Wins|RA9-Wins]] — 以實際每九局失分率（RA9）為基準計算的投手勝場貢獻（FIP-Wins + FDP-Wins）。（來源數：2，更新：2026-11-12）

### 守備（Defense）
- [[metrics/Def|Def（綜合守備價值）]] — Fielding Runs（UZR/TZ）+ 守備位置調整，可跨守位比較（WAR 積木）。（來源數：2，更新：2026-11-12）
- [[metrics/UZR|UZR（終極防區評分）]] — 含 ARM、DPR、RngR、ErrR 四組件，FanGraphs 非捕手 WAR 守備核心（建議看三年）。（來源數：3，更新：2026-11-13）
- [[metrics/DRS|DRS（守備防禦分數）]] — Fielding Bible 計算，含 rPM/rSB/rBU/rGDP/rARM/rHR，2020 年起內野改採 PART 系統分離站位。（來源數：4，更新：2026-11-13）
- [[metrics/RZR|RZR（修正防區率）]] — 防區內擊球轉化為出局數比例（平均 ~.835），UZR 簡化前身。（來源數：1，更新：2026-11-12）
- [[metrics/FSR|FSR（球迷球探守備報告）]] — Tom Tango 主導之群眾外包守備評分。（來源數：1，更新：2026-11-12）
- [[metrics/TZ|TZ（Total Zone）]] — 僅依 Retrosheet 逐球文字紀錄計算，用於 2002 年前歷史 WAR。（來源數：1，更新：2026-11-12）
- [[metrics/TZL|TZL（Total Zone with Location Data）]] — 納入 MLB Gameday 落點座標的 TZ 強化版。（來源數：1，更新：2026-11-12）
- [[metrics/Inside-Edge-Fielding|Inside Edge Fielding]] — 依六大難度區間（0% 至 90-100%）統計守備處理率。（來源數：1，更新：2026-11-12）

### 跑壘（Baserunning）
- [[metrics/BsR|BsR（跑壘高於平均得分）]] — `wSB + UBR + wGDP`，FanGraphs WAR 跑壘核心（盜壘損益約需 67% 成功率）。（來源數：4，更新：2026-11-13）
- [[metrics/UBR|UBR（終極跑壘評分）]] — 非盜壘情境（多推進壘包、避雙殺、2015 年起含 WP/PB）的跑壘得分貢獻。（來源數：2，更新：2026-11-12）
- [[metrics/wSB|wSB（加權盜壘得分）]] — 盜壘成功與失敗的線性權重得分貢獻（2:1 SB/CS 損益門檻）。（來源數：2，更新：2026-11-12）
- [[metrics/wGDP|wGDP（加權閃避雙殺得分）]] — 在雙殺機會中少擊出滾地雙殺打的得分貢獻。（來源數：2，更新：2026-11-12）
- [[metrics/Spd|Spd（速度評分）]] — Bill James 早期速度指標（平均 ~4.5），現已過時，建議改用 UBR/BsR。（來源數：3，更新：2026-11-13）

### Statcast 擊球品質與預期數據（Statcast Batted Ball & Expected Stats）
- [[metrics/BBE|BBE（Batted Ball Event，擊球事件）]] — 任何產生結果的擊球（出局、安打、失誤；所有界內球與造成出局的界外球）；EV/LA/Barrel 率的分母。（來源數：2，更新：2026-11-13）
- [[metrics/Exit-Velocity|Exit Velocity（EV，擊球初速）]] — 球離開球棒瞬間的速度（mph），追蹤所有 BBE；平均 EV = ΣEV / BBE，具一定預測力。（來源數：2，更新：2026-11-13）
- [[metrics/Launch-Angle|Launch Angle（LA，擊球仰角）]] — 球離棒的垂直角度；<10° 滾地、10–25° 平飛、25–50° 飛球、>50° 內野高飛；8–32° 為 Sweet Spot。（來源數：2，更新：2026-11-13）
- [[metrics/Hard-Hit-Rate|Hard-hit Rate（強勁擊球率，Statcast 版）]] — 擊球初速 ≥95 mph 的擊球比例；2018 年 95+ mph 擊球 wOBA .653 vs 弱擊球 .206。（來源數：2，更新：2026-11-13）
- [[metrics/Sweet-Spot|Sweet Spot%（LA SwSp%，甜蜜點仰角率）]] — 擊球仰角落在 8–32° 的 BBE 比例（LA SwSp%），涵蓋易成安打的平飛與長打飛球。（來源數：2，更新：2026-11-13）
- [[metrics/Barrel|Barrel（Barrel%，完美擊球）]] — 擊球初速與仰角組合歷史上至少 .500 AVG / 1.500 SLG 的最高價值擊球；EV ≥98 mph 起算。（來源數：2，更新：2026-11-13）
- [[metrics/Hit-Distance|Hit Distance（DST，擊球距離）]] — 擊球落點（地面、看台、牆或手套）與本壘的距離；平均 aDST = ΣDST / BBE。（來源數：2，更新：2026-11-13）
- [[metrics/Projected-HR-Distance|Projected Home Run Distance（HR-DIS，全壘打推估距離）]] — 以拋物線推估全壘打若無看台/牆阻擋的完整飛行距離，用於公平比較全壘打。（來源數：2，更新：2026-11-13）
- [[metrics/xBA|xBA（Expected Batting Average，預期打擊率）]] — 依 EV、LA（部分球加計 Sprint Speed）估計每顆擊球成為安打的機率，再加入真實三振得出。（來源數：2，更新：2026-11-13）
- [[metrics/xSLG|xSLG（Expected Slugging Percentage，預期長打率）]] — 以每顆擊球的一/二/三/全壘打機率代入 SLG 公式，衡量接觸品質應得的長打率。（來源數：2，更新：2026-11-13）
- [[metrics/xwOBA|xwOBA（Expected wOBA，預期加權上壘率）]] — 以擊球品質（EV、LA、部分 Sprint Speed）取代實際結果，加上真實 BB/K/HBP，以 wOBA 量表呈現。（來源數：2，更新：2026-11-13）

### Statcast 揮棒追蹤（Bat Tracking）
- [[metrics/Bat-Speed|Bat Speed（揮棒速度）]] — 擊球（或揮空交會點）瞬間球棒甜蜜點的移動速度（mph）；≥75 mph 為快速揮棒。（來源數：4，更新：2026-11-13）
- [[metrics/Fast-Swing-Rate|Fast-swing Rate（快速揮棒率）]] — 揮棒速度 ≥75 mph 的揮棒比例；2024 年初 23% 的揮棒為快速揮棒。（來源數：2，更新：2026-11-13）
- [[metrics/Squared-Up-Rate|Squared-up Rate（打正率）]] — 實際 EV 佔「依揮棒速度與球速理論最大 EV」的比例；≥80% 為 squared-up。（來源數：2，更新：2026-11-13）
- [[metrics/Blasts|Blasts（強力正中擊球）]] — Squared-up% ×100 + 揮棒速度 ≥164 的揮棒；2024 Blast 擊球 wOBA .727 vs 非 Blast .225。（來源數：2，更新：2026-11-13）
- [[metrics/Swing-Length|Swing Length（揮棒長度）]] — 棒頭自追蹤開始至擊球點在三維空間的移動總長；MLB 平均 7.3 呎，短揮棒多接觸、長揮棒多長打。（來源數：2，更新：2026-11-13）
- [[metrics/Swing-Path-Tilt|Swing Path / Tilt（揮棒路徑傾角）]] — 接觸前揮棒平面相對地面的垂直角度；MLB 平均約 32°，範圍約 20°（平）至 50°（陡）。（來源數：2，更新：2026-11-13）
- [[metrics/Attack-Angle|Attack Angle（攻擊角度）]] — 擊球瞬間球棒甜蜜點的垂直移動角度；MLB 平均約 10°，理想區間 5–20°。（來源數：2，更新：2026-11-13）
- [[metrics/Ideal-Attack-Angle|Ideal Attack Angle Rate（理想攻擊角度率）]] — 競爭性揮棒中攻擊角落在 5°–20° 的比例；2024 Bregman 69% 居前。（來源數：2，更新：2026-11-13）
- [[metrics/Attack-Direction|Attack Direction（攻擊方向）]] — 擊球瞬間甜蜜點的水平移動方向（拉打/反方向度數）；MLB 平均約 2° pull。（來源數：2，更新：2026-11-13）
- [[metrics/Intercept-Point|Intercept Point（接觸點）]] — 球棒與球的接觸位置，分別相對本壘板前緣與打者重心回報；區分「在前方擊球」與「讓球吃深」。（來源數：2，更新：2026-11-13）
- [[metrics/Batting-Stance|Batting Stance（打擊站姿）]] — 四項站位數據：打擊區深度、離本壘板距離、兩腳間距、開放/封閉角度（2023 下半季起）。（來源數：2，更新：2026-11-13）

### Statcast 投球追蹤（Statcast Pitching）
- [[metrics/Velocity|Velocity（VELO，球速）]] — 投球自出手至通過本壘間的最高速度（必在出手點）；PITCHf/x 時代以距本壘 50 呎處量測。（來源數：2，更新：2026-11-13）
- [[metrics/Perceived-Velocity|Perceived Velocity（PV，體感球速）]] — 結合實際球速與出手延伸，估計打者感受到的球速；Extension 長於平均者 PV 高於實際球速。（來源數：2，更新：2026-11-13）
- [[metrics/Extension|Extension（EXT，出手延伸）]] — 投手出手點比投手板前緣更接近本壘的距離（呎）；越長越能縮短打者反應時間。（來源數：2，更新：2026-11-13）
- [[metrics/Spin-Rate|Spin Rate（SR，轉速）]] — 投球出手時的轉速（rpm）；高轉速速球「上飄」、高轉速曲球位移大，低轉速變速/指叉更具下沉。（來源數：2，更新：2026-11-13）
- [[metrics/Active-Spin|Active Spin（有效轉速比例）]] — 轉速中真正貢獻位移的比例；純上旋/下旋為 100%，子彈/橄欖球式旋轉（陀螺旋）為 0%。（來源數：2，更新：2026-11-13）
- [[metrics/Pitch-Movement|Pitch Movement（球路位移）]] — 以英吋回報水平與垂直位移（含重力），並與相近球速、延伸與出手點的同球種比較「高於平均」。（來源數：2，更新：2026-11-13）
- [[metrics/xERA|xERA（Expected ERA，預期防禦率）]] — 將 xwOBA 1:1 換算為 ERA 量表，納入接觸量與接觸品質；理念類似加入擊球品質的 FIP。（來源數：2，更新：2026-11-13）
- [[metrics/PutAway%|PutAway%（兩好球決勝率）]] — 兩好球後的投球中形成三振的比例；按球種可辨識投手的決勝球。（來源數：2，更新：2026-11-13）
- [[metrics/Swords|Swords（騙到打者的狼狽揮空）]] — 極度被騙的「未完成」揮空：揮棒過板但未收棒、揮速 ≤10 百分位；約每隊每場 1 次。（來源數：2，更新：2026-11-13）
- [[metrics/Pitch-Tempo|Pitch Tempo（投球節奏，Statcast 版）]] — 同一打者連續兩球（前球為未揮棒）出手間隔的中位數，分壘上無人/有人；非 2023 投球計時器。（來源數：2，更新：2026-11-13）

### Statcast 守備（Statcast Defense）
- [[metrics/Catch-Probability|Catch Probability（接殺機率）]] — 依所需距離、反應時間、方向與靠牆與否估計外野球被接殺的機率，並以 1–5 星評級。（來源數：2，更新：2026-11-13）
- [[metrics/OAA|OAA（Outs Above Average，高於平均出局數）]] — 以接殺/出局機率累積守備員比平均多（或少）製造的出局數；2020 起擴及內野。（來源數：2，更新：2026-11-13）
- [[metrics/Jump|Jump（外野起步）]] — 外野手投手出手後前 3 秒朝正確方向移動的呎數，拆為 Reaction／Burst／Route 三成分。（來源數：2，更新：2026-11-13）
- [[metrics/Distance-Covered|Distance Covered（DCOV，實際跑動距離）]] — 守備員自擊球到處理球之間「實際跑過的路徑長度」；最佳路徑／DCOV = Route Efficiency。（來源數：2，更新：2026-11-13）
- [[metrics/Arm-Strength|Arm Strength（ARM，傳球臂力）]] — 野手單次傳球最高球速（出手點），排行榜依守位取「全力傳球」前 1%/5%/10% 平均。（來源數：2，更新：2026-11-13）
- [[metrics/Pop-Time|Pop Time（POP，捕手傳殺時間）]] — 捕手接球入手套至傳球抵達壘包中心的時間，結合步法、換手與臂力；2018 二壘平均 2.01 秒。（來源數：2，更新：2026-11-13）
- [[metrics/Catcher-Framing|Catcher Framing（Statcast 捕手框球）]] — 捕手在 Shadow Zone 等區域爭取好球的能力，以 0.125 分/好球換算 Catcher Framing Runs（2025 模型更新）。（來源數：2，更新：2026-11-13）
- [[metrics/Fielding-Run-Value|Fielding Run Value（FRV，守備得分價值）]] — 把 OAA、傳球、捕手阻擋/框球/阻殺與雙殺統一換算為相對平均的守備得分（2018 起）。（來源數：2，更新：2026-11-13）

### Statcast 跑壘（Statcast Baserunning）
- [[metrics/Sprint-Speed|Sprint Speed（SS，衝刺速度）]] — 球員最快 1 秒區間的每秒呎數；取合格跑動最佳約 2/3 平均，MLB 平均 27 ft/s、30+ 為 Bolt。（來源數：2，更新：2026-11-13）
- [[metrics/Bolt|Bolt（極速衝刺次數）]] — Sprint Speed ≥30 ft/s 的單次跑壘；累積型指標，每季數量與盜壘數相近。（來源數：2，更新：2026-11-13）
- [[metrics/Home-to-First|Home to First（本壘到一壘時間）]] — 擊球接觸到打者踩上一壘的秒數（球探稱 dig speed）；左打因距離較近較具優勢。（來源數：2，更新：2026-11-13）
- [[metrics/90-Foot-Running-Splits|90-foot Running Splits（90 呎分段跑速）]] — 將本壘到一壘跑動外推至標準 90 呎，並以每 5 呎分段比較跑者加速與極速。（來源數：2，更新：2026-11-13）
- [[metrics/Lead-Distance|Lead Distance（LEAD，離壘距離）]] — 投手第一個動作（投球或牽制）時跑者重心與壘包的距離；盜壘中最常被忽略的因素。（來源數：2，更新：2026-11-13）
- [[metrics/Baserunning-Throwing-Value|Baserunning / Throwing Value（跑壘／外野傳球價值）]] — 以成功機率模型評估跑者多推進與外野手阻止多推進的得分價值（含因臂力而不敢跑的 hold）。（來源數：2，更新：2026-11-13）

### 勝率、關鍵度與綜合價值（Win Probability, Leverage & Value）
- [[metrics/RE24|RE24（24 種壘包出局情境得分期望值）]] — 追蹤事件對 24 情境得分期望值的改變，評估後援承接跑者極有用。（來源數：2，更新：2026-11-12）
- [[metrics/WPA|WPA（勝利機率貢獻值）]] — 衡量單一打席對勝率預期的實際累積影響（投打對稱，說故事指標）。（來源數：2，更新：2026-11-12）
- [[metrics/LI|LI（關鍵度指數）]] — Tom Tango 創立，量化比賽當下緊張度（1.0 為平均，>2.0 為高關鍵）。（來源數：2，更新：2026-11-12）
- [[metrics/WPA-LI|WPA/LI（情境中立勝場）]] — 逐打席消除 LI 影響後的勝率貢獻（0 為平均）。（來源數：2，更新：2026-11-12）
- [[metrics/Clutch|Clutch（關鍵時刻表現分數）]] — `(WPA/pLI) - WPA/LI`，自我比較關鍵時刻表現，無未來預測力。（來源數：2，更新：2026-11-12）
- [[metrics/WAR|WAR（Wins Above Replacement）]] — 衡量球員相較於替補水準對球隊多贏場數的綜合貢獻，含野手與投手完整公式及五大誤區。（來源數：5，更新：2026-11-12）

## 核心概念與理論（Concepts）
- [[concepts/Batted-Ball-Profile|擊球型態與落點分布（Batted Ball）]] — 整合軌跡、方向、擊球強度與特殊安打之完整框架。（來源數：7，更新：2026-11-13）
- [[concepts/Plate-Discipline|本壘板紀律（Plate Discipline）]] — 彙整 BIS 與 PITCHf/x 的出棒選擇、擊球接觸率與投球節奏指標。（來源數：2，更新：2026-11-13）
- [[concepts/Defensive-Metrics-Overview|守備數據核心理論（Defense Overview）]] — 剖析失誤與守備率盲點，並說明「接殺難度 × 失分價值」邏輯。（來源數：4，更新：2026-11-13）
- [[concepts/Catcher-Defense|捕手守備評估（Catcher Defense）]] — 拆解阻殺（rSB）、擋球（RPP）、偷好球（Framing, 頂尖 +15~25 分）與配球黑盒。（來源數：4，更新：2026-11-13）
- [[concepts/Pitch-Type-Linear-Weights|球種線性權重（Pitch Values）]] — 依球數得分期望變化歸屬各球種價值（描述性而非預測性，跨季相關 <0.25）。（來源數：2，更新：2026-11-12）
- [[concepts/Win-Expectancy|Win Expectancy（WE，勝率預期）]] — 依據歷史比賽計算特定局數、比數與壘包下的贏球機率。（來源數：1，更新：2026-11-12）
- [[concepts/Bat-Tracking|Bat Tracking（揮棒追蹤）]] — Hawk-Eye 2023 下半季起的揮棒資料地圖：站姿→揮棒→接觸→效率（Squared-up、Blasts）。（來源數：5，更新：2026-11-13）
- [[concepts/Fielding-Alignments|Fielding Alignments（守備布陣與 Shift）]] — Statcast 內外野布陣四分類、標準站位定義與 2023 Shift 限制前後趨勢。（來源數：2，更新：2026-11-13）

## 人物、機構與系統（Entities）
- [[entities/FanGraphs|FanGraphs]] — 棒球進階數據資料庫與 Sabermetrics Library 簡介，含 BIS、PITCHf/x 與 Pitch Modeling 架構。（來源數：4，更新：2026-11-13）
- [[entities/Statcast|Statcast]] — MLB 官方全場追蹤系統：2015 全面上線、2020 改用 Hawk-Eye、2023 起 bat tracking，含 46 項詞彙表指標總覽。（來源數：1，更新：2026-11-13）
- [[entities/Baseball-Savant|Baseball Savant]] — MLB.com 官方 Statcast 資料集散地：排行榜、Search、Illustrator、Gamefeed。（來源數：1，更新：2026-11-13）
- [[entities/Hawk-Eye|Hawk-Eye]] — 2020 起驅動 Statcast 的 12 攝影機光學追蹤系統（300 fps 球棒追蹤、擊球追蹤率 99%）。（來源數：1，更新：2026-11-13）
- [[entities/PITCHf-x|PITCHf/x]] — 2008 年起的前代投球追蹤系統，球速以距本壘 50 呎處量測。（來源數：3，更新：2026-11-13）

## 比較分析（Comparisons）
- [[comparisons/PitchingBot-vs-Pitching+|PitchingBot 與 Stuff+/Location+/Pitching+ 比較]] — 對比 FanGraphs 兩大 Statcast 投球建模系統的量表、架構差異與共同盲點。（來源數：2，更新：2026-11-12）
- [[comparisons/fWAR-vs-rWAR-vs-WARP|fWAR、rWAR 與 WARP 比較]] — 對比 FanGraphs、Baseball-Reference 與 Baseball Prospectus 三大 WAR 系統的守備與投手哲學差異。（來源數：1，更新：2026-11-12）

## 來源摘要（Sources，共 114 篇）
- **基礎原理與計量邏輯（Principles）**：[[sources/2011-01-23-FanGraphs-DIPS|DIPS]] / [[sources/2010-02-16-FanGraphs-Regression-Toward-the-Mean|Regression toward the Mean]] / [[sources/2010-02-26-FanGraphs-Replacement-Level|Replacement Level]] / [[sources/2010-02-18-FanGraphs-Sample-Size|Sample Size]] / [[sources/2010-02-27-FanGraphs-Splits|Splits]] / [[sources/2010-02-25-FanGraphs-Projection-Systems|Projection Systems]] / [[sources/2010-02-25-FanGraphs-Linear-Weights|Linear Weights]] / [[sources/2010-02-25-FanGraphs-Counting-vs-Rate-Stats|Counting vs. Rate]] / [[sources/2010-02-27-FanGraphs-Park-Factors|Park Factors]] / [[sources/2010-02-26-FanGraphs-Positional-Adjustment|Positional Adjustment]] / [[sources/2010-02-27-FanGraphs-Aging-Curve|Aging Curve]] / [[sources/2010-02-27-FanGraphs-League-Equivalencies|League Equivalencies]] / [[sources/2010-02-26-FanGraphs-Pythagorean-Win-Loss|Pythagorean Win-Loss]] / [[sources/2011-01-23-FanGraphs-Luck|Luck]]
- [[sources/2014-10-30-FanGraphs-Complete-List-Offense|Complete List (Offense)]] / [[sources/2010-02-16-FanGraphs-OBP|OBP]] / [[sources/2010-02-16-FanGraphs-OPS-and-OPS-Plus|OPS and OPS+]] / [[sources/2015-03-12-FanGraphs-Defense-Overview|Defense Overview]] / [[sources/2023-03-10-FanGraphs-PitchingBot-Primer|PitchingBot Primer]] / [[sources/2023-03-10-FanGraphs-Stuff-Location-Pitching-Plus-Primer|Stuff+/Location+/Pitching+ Primer]]
- **打擊與跑壘**：[[sources/2010-02-15-FanGraphs-BABIP|BABIP]] / [[sources/2015-05-17-FanGraphs-Batted-Ball-Direction|Batted Ball Direction]] / [[sources/2014-09-11-FanGraphs-BsR|BsR]] / [[sources/2010-02-17-FanGraphs-Batted-Ball-Types|GB%, LD%, FB%]] / [[sources/2010-02-19-FanGraphs-HR-FB|HR/FB]] / [[sources/2010-02-15-FanGraphs-ISO|ISO]] / [[sources/2010-02-19-FanGraphs-K-and-BB-Percent|K% and BB%]] / [[sources/2014-08-28-FanGraphs-Off|Off]] / [[sources/2015-05-10-FanGraphs-Quality-of-Contact|Quality of Contact]] / [[sources/2010-02-16-FanGraphs-Spd|Spd]] / [[sources/2012-03-22-FanGraphs-UBR|UBR]] / [[sources/2015-03-26-FanGraphs-wGDP|wGDP]] / [[sources/2010-02-15-FanGraphs-wOBA|wOBA]] / [[sources/2010-02-16-FanGraphs-wRAA|wRAA]] / [[sources/2013-02-10-FanGraphs-wSB|wSB]]
- **投球**：[[sources/2010-02-16-FanGraphs-ERA|ERA]] / [[sources/2011-04-08-FanGraphs-ERA-FIP-xFIP-Minus|ERA-/FIP-/xFIP-]] / [[sources/2010-02-15-FanGraphs-FIP|FIP]] / [[sources/2010-02-17-FanGraphs-LOB-Percent|LOB%]] / [[sources/2015-05-25-FanGraphs-Pace|Pace]] / [[sources/2012-03-01-FanGraphs-Pitch-Type-Linear-Weights|Pitch Type Linear Weights]] / [[sources/2011-04-06-FanGraphs-SD-MD|SD/MD]] / [[sources/2011-07-27-FanGraphs-SIERA|SIERA]] / [[sources/2010-02-19-FanGraphs-Pitching-Rate-Stats|Strikeout and Walk Rates]] / [[sources/2010-02-17-FanGraphs-WHIP|WHIP]] / [[sources/2010-02-15-FanGraphs-xFIP|xFIP]]
- **守備**：[[sources/2012-03-22-FanGraphs-Catcher-Defense|Catcher Defense]] / [[sources/2010-02-15-FanGraphs-DRS|DRS]] / [[sources/2014-09-04-FanGraphs-Def|Def]] / [[sources/2020-03-17-FanGraphs-DRS-2020-Update|DRS 2020 Update]] / [[sources/2011-01-23-FanGraphs-FSR|FSR]] / [[sources/2015-05-31-FanGraphs-Inside-Edge-Fielding|Inside Edge Fielding]] / [[sources/2011-01-23-FanGraphs-RZR|RZR]] / [[sources/2011-01-24-FanGraphs-TZ-TZL|TZ/TZL]] / [[sources/2010-02-15-FanGraphs-UZR|UZR]]
- **勝率與關鍵度**：[[sources/2010-02-17-FanGraphs-Clutch|Clutch]] / [[sources/2010-02-17-FanGraphs-LI|LI]] / [[sources/2014-07-30-FanGraphs-RE24|RE24]] / [[sources/2010-02-16-FanGraphs-WPA|WPA]] / [[sources/2010-02-17-FanGraphs-WPA-LI|WPA/LI]] / [[sources/2010-02-17-FanGraphs-Win-Expectancy|Win Expectancy]]
- **綜合價值與 WAR**：[[sources/2013-06-10-FanGraphs-FDP|FDP]] / [[sources/2010-02-15-FanGraphs-What-is-WAR|What is WAR?]] / [[sources/2012-03-23-FanGraphs-WAR-Misconceptions|WAR Misconceptions]] / [[sources/2012-03-28-FanGraphs-WAR-for-Pitchers|WAR for Pitchers]] / [[sources/2012-04-02-FanGraphs-WAR-for-Position-Players|WAR for Position Players]] / [[sources/2012-03-22-FanGraphs-fWAR-rWAR-WARP|fWAR, rWAR, and WARP]]
- **MLB.com Statcast Glossary（47 篇）**：[[sources/2026-11-13-MLB-Statcast-Glossary-Overview|Statcast 總覽]] / [[sources/2026-11-13-MLB-Statcast-Arm-Strength|Arm-Strength]] / [[sources/2026-11-13-MLB-Statcast-Catch-Probability|Catch-Probability]] / [[sources/2026-11-13-MLB-Statcast-Distance-Covered|Distance-Covered]] / [[sources/2026-11-13-MLB-Statcast-Fielding-Run-Value|Fielding-Run-Value]] / [[sources/2026-11-13-MLB-Statcast-Jump|Jump]] / [[sources/2026-11-13-MLB-Statcast-OAA|OAA]] / [[sources/2026-11-13-MLB-Statcast-Pop-Time|Pop-Time]] / [[sources/2026-11-13-MLB-Statcast-Attack-Angle|Attack-Angle]] / [[sources/2026-11-13-MLB-Statcast-Attack-Direction|Attack-Direction]] / [[sources/2026-11-13-MLB-Statcast-Barrel|Barrel]] / [[sources/2026-11-13-MLB-Statcast-Baserunning-Throwing-Value|Baserunning-Throwing-Value]] / [[sources/2026-11-13-MLB-Statcast-BBE|BBE]] / [[sources/2026-11-13-MLB-Statcast-Batting-Stance|Batting-Stance]] / [[sources/2026-11-13-MLB-Statcast-Blasts|Blasts]] / [[sources/2026-11-13-MLB-Statcast-Bolt|Bolt]] / [[sources/2026-11-13-MLB-Statcast-Exit-Velocity|Exit-Velocity]] / [[sources/2026-11-13-MLB-Statcast-xBA|xBA]] / [[sources/2026-11-13-MLB-Statcast-xSLG|xSLG]] / [[sources/2026-11-13-MLB-Statcast-xwOBA|xwOBA]] / [[sources/2026-11-13-MLB-Statcast-Fast-Swing-Rate|Fast-Swing-Rate]] / [[sources/2026-11-13-MLB-Statcast-Hard-Hit-Rate|Hard-Hit-Rate]] / [[sources/2026-11-13-MLB-Statcast-Hit-Distance|Hit-Distance]] / [[sources/2026-11-13-MLB-Statcast-Home-to-First|Home-to-First]] / [[sources/2026-11-13-MLB-Statcast-Ideal-Attack-Angle|Ideal-Attack-Angle]] / [[sources/2026-11-13-MLB-Statcast-Intercept-Point|Intercept-Point]] / [[sources/2026-11-13-MLB-Statcast-Launch-Angle|Launch-Angle]] / [[sources/2026-11-13-MLB-Statcast-Lead-Distance|Lead-Distance]] / [[sources/2026-11-13-MLB-Statcast-Projected-HR-Distance|Projected-HR-Distance]] / [[sources/2026-11-13-MLB-Statcast-Sprint-Speed|Sprint-Speed]] / [[sources/2026-11-13-MLB-Statcast-Squared-Up-Rate|Squared-Up-Rate]] / [[sources/2026-11-13-MLB-Statcast-Sweet-Spot|Sweet-Spot]] / [[sources/2026-11-13-MLB-Statcast-Swing-Length|Swing-Length]] / [[sources/2026-11-13-MLB-Statcast-Swing-Path-Tilt|Swing-Path-Tilt]] / [[sources/2026-11-13-MLB-Statcast-Running-Splits-90ft|Running-Splits-90ft]] / [[sources/2026-11-13-MLB-Statcast-Active-Spin|Active-Spin]] / [[sources/2026-11-13-MLB-Statcast-xERA|xERA]] / [[sources/2026-11-13-MLB-Statcast-Extension|Extension]] / [[sources/2026-11-13-MLB-Statcast-Catcher-Framing|Catcher-Framing]] / [[sources/2026-11-13-MLB-Statcast-Perceived-Velocity|Perceived-Velocity]] / [[sources/2026-11-13-MLB-Statcast-Pitch-Movement|Pitch-Movement]] / [[sources/2026-11-13-MLB-Statcast-Pitch-Tempo|Pitch-Tempo]] / [[sources/2026-11-13-MLB-Statcast-PutAway-Percentage|PutAway-Percentage]] / [[sources/2026-11-13-MLB-Statcast-Spin-Rate|Spin-Rate]] / [[sources/2026-11-13-MLB-Statcast-Swords|Swords]] / [[sources/2026-11-13-MLB-Statcast-Velocity|Velocity]] / [[sources/2026-11-13-MLB-Statcast-Fielding-Alignments|Fielding-Alignments]]
