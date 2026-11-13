# 原始資料目錄（Raw Sources）

此資料夾存放所有未經修改的**原始參考資料（Source of Truth）**。

## 使用規範
- **不可變原則**：Agent 只會讀取此資料夾內的檔案，**絕對不會修改或刪除**其中的任何內容。
- **子資料夾用途**：
  - `articles/`：存放網頁文章、專欄擷取（例如使用 Obsidian Web Clipper 轉存的 Markdown）。
  - `papers/`：存放學術論文、研究報告（PDF 或純文字）。
  - `data/`：存放原始棒球統計數據集（CSV、JSON 等）。
  - `assets/`：存放文章內嵌的圖片、圖表截圖等附件。

## 如何開始
將你想學習的賽伯計量學文章、論文或筆記放入對應子資料夾後，直接對 Agent 說：
> 「請幫我 ingest `raw/articles/檔名.md`」
即可開始將知識編譯進 `wiki/`！
