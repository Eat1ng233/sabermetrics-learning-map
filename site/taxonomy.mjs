// 學習路徑分類表 —— 每篇 wiki/metrics/ 必須恰好有一個主分類（build.mjs 會檢查）。
// 規則見 AGENTS.md 第七節。

export const PRINCIPLE_GROUPS = [
  { title: '訊號與雜訊：分離實力與隨機性', items: ['Regression-Toward-the-Mean', 'Sample-Size', 'Luck', 'DIPS', 'Splits'] },
  { title: '價值量化：從事件到得分與勝場', items: ['Linear-Weights', 'Counting-vs-Rate-Statistics', 'Pythagorean-Win-Loss'] },
  { title: '環境與基準校正：建立公平的比較尺', items: ['Replacement-Level', 'Park-Factors', 'Positional-Adjustment', 'League-Equivalencies'] },
  { title: '時間維度與未來預測', items: ['Aging-Curve', 'Projection-Systems'] },
];

export const METRIC_BLOCKS = [
  {
    id: 'pitching', title: '投球', desc: '評估投手壓制得分的能力：從防禦率到守備獨立指標，再到 Statcast 球路物理與投球模型。',
    groups: [
      { title: '傳統與比率', items: ['ERA', 'WHIP', 'K-9', 'BB-9', 'LOB%', 'Pace'] },
      { title: 'ERA 估計器與環境校正', items: ['FIP', 'xFIP', 'SIERA', 'xERA', 'HR-FB', 'ERA-', 'FIP-', 'xFIP-'] },
      { title: '失分拆解與牛棚', items: ['FDP', 'SD', 'MD'] },
      { title: '投球品質模型', items: ['Stuff+', 'Location+', 'Pitching+', 'PitchingBot'] },
      { title: 'Statcast 投球追蹤', items: ['Velocity', 'Perceived-Velocity', 'Extension', 'Spin-Rate', 'Active-Spin', 'Pitch-Movement', 'PutAway%', 'Swords', 'Pitch-Tempo'] },
    ],
    cross: ['K%', 'BB%', 'BABIP', 'GB%', 'LD%', 'FB%', 'IFFB%', 'Soft%', 'Med%', 'Hard%', 'Exit-Velocity', 'Launch-Angle', 'Hard-Hit-Rate', 'Barrel', 'xBA', 'xSLG', 'xwOBA'],
    further: ['concepts/Pitch-Type-Linear-Weights', 'comparisons/PitchingBot-vs-Pitching+', 'principles/DIPS'],
  },
  {
    id: 'offense', title: '進攻', desc: '評估打者與跑者創造得分的能力：從打擊三圍到線性權重、擊球品質、揮棒追蹤與跑壘。',
    groups: [
      { title: '傳統打擊', items: ['AVG', 'OBP', 'SLG', 'ISO', 'OPS', 'OPS+', 'BB%', 'K%', 'BB-K'] },
      { title: '線性權重與綜合進攻', items: ['wOBA', 'wRAA', 'wRC+', 'Off'] },
      { title: '擊球型態與品質', items: ['BABIP', 'GB%', 'LD%', 'FB%', 'IFFB%', 'Pull%', 'Cent%', 'Oppo%', 'Soft%', 'Med%', 'Hard%'] },
      { title: 'Statcast 擊球與預期數據', items: ['BBE', 'Exit-Velocity', 'Launch-Angle', 'Hard-Hit-Rate', 'Sweet-Spot', 'Barrel', 'Hit-Distance', 'Projected-HR-Distance', 'xBA', 'xSLG', 'xwOBA'] },
      { title: '揮棒追蹤（Bat Tracking）', items: ['Bat-Speed', 'Fast-Swing-Rate', 'Squared-Up-Rate', 'Blasts', 'Swing-Length', 'Swing-Path-Tilt', 'Attack-Angle', 'Ideal-Attack-Angle', 'Attack-Direction', 'Intercept-Point', 'Batting-Stance'] },
      { title: '跑壘', items: ['BsR', 'wSB', 'UBR', 'wGDP', 'Spd', 'Sprint-Speed', 'Bolt', 'Home-to-First', '90-Foot-Running-Splits', 'Lead-Distance', 'Baserunning-Throwing-Value'] },
    ],
    cross: ['HR-FB'],
    further: ['concepts/Batted-Ball-Profile', 'concepts/Plate-Discipline', 'concepts/Bat-Tracking'],
  },
  {
    id: 'defense', title: '守備', desc: '評估守備員把擊球轉成出局、阻止推進與幫投手爭取好球的價值。',
    groups: [
      { title: '守備系統', items: ['Def', 'UZR', 'DRS', 'RZR', 'TZ', 'TZL', 'FSR', 'Inside-Edge-Fielding'] },
      { title: 'Statcast 守備', items: ['Catch-Probability', 'OAA', 'Jump', 'Distance-Covered', 'Arm-Strength', 'Fielding-Run-Value'] },
      { title: '捕手', items: ['Catcher-Framing', 'Pop-Time'] },
    ],
    cross: ['Baserunning-Throwing-Value'],
    further: ['concepts/Defensive-Metrics-Overview', 'concepts/Catcher-Defense', 'concepts/Fielding-Alignments'],
  },
  {
    id: 'value', title: '綜合價值與情境', desc: '跨越投打守、把貢獻換算成勝場，或描述比賽當下情境與關鍵度的指標。',
    groups: [
      { title: '綜合價值', items: ['WAR', 'RA9-Wins'] },
      { title: '得分與勝率情境', items: ['RE24', 'WPA', 'WPA-LI', 'LI', 'Clutch'] },
    ],
    cross: [],
    further: ['concepts/Win-Expectancy', 'comparisons/fWAR-vs-rWAR-vs-WARP', 'principles/Replacement-Level'],
  },
];

// 指標頁 → 互動工具
export const WIDGETS = {
  'hitter-calc': ['AVG', 'OBP', 'SLG', 'ISO', 'OPS', 'BABIP', 'BB%', 'K%', 'BB-K', 'wOBA', 'wRAA'],
  'pitcher-calc': ['ERA', 'WHIP', 'K-9', 'BB-9', 'FIP', 'xFIP', 'LOB%'],
  'barrel-chart': ['Barrel', 'Exit-Velocity', 'Launch-Angle', 'Hard-Hit-Rate', 'Sweet-Spot'],
  'blast-chart': ['Blasts', 'Squared-Up-Rate', 'Bat-Speed', 'Fast-Swing-Rate'],
};
export const WIDGET_KIND = { 'hitter-calc': 'calc', 'pitcher-calc': 'calc', 'barrel-chart': 'chart', 'blast-chart': 'chart' };
