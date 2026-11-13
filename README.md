# 賽伯計量學學習地圖（Sabermetrics Learning Map）

一座由 LLM 協助維護的賽伯計量學個人知識庫，以及由它自動編譯而成的學習網站。

- **網站**：部署於 GitHub Pages（見本 repo 的 About 連結）
- **知識庫**：`wiki/`——指標、原理、概念、實體與來源摘要（Obsidian 相容 Markdown）
- **網站原始碼**：`site/`——`npm run build` 將 `wiki/` 編譯成靜態網站；推送到 `main` 後由 GitHub Actions 自動建置與部署
- **維護規範**：`AGENTS.md`

## 本機預覽

```bash
cd site
npm install
npm run build
npm run serve   # http://localhost:4321
```

## 資料來源與版權

本專案是個人學習筆記，**並非 FanGraphs、MLB 或任何官方網站**。`wiki/` 內容為閱讀原文後的摘要與整理，主要來源：

- [FanGraphs Sabermetrics Library](https://library.fangraphs.com/)（67 篇）
- [MLB.com Statcast Glossary](https://www.mlb.com/glossary/statcast)（47 篇）

每篇來源的作者、日期與原文連結列於 `wiki/sources/`，網站上也有完整的「資料來源與版權」頁。原文的數據、公式與觀點之版權屬原作者與原出處所有。原文 PDF 只保存在作者本機，**不包含在此 repo 中**。
