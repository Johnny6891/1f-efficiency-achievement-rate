📊 生產一組 - 效率日誌入口 (Efficiency Log Portal)
"不只是入口，更是視覺享受。" 一個極簡、現代化且具備響應式設計的儀表板入口頁面，採用「溫暖莫蘭迪」色調與 Glassmorphism（毛玻璃）風格設計。

📖 專案簡介
這個專案旨在為團隊提供一個美觀的「效率日誌」訪問入口。它解決了傳統後台連結枯燥乏味的問題，透過高質感的 CSS3 動畫 與 毛玻璃特效，提升使用者在進入數據報表前的視覺體驗。該頁面目前被設計為導向至 Google Apps Script (GAS) 部署的 Web App，但可輕鬆擴展為多功能的導航中心。

✨ 主要功能 (Key Features)
這不僅僅是一個靜態頁面，它包含許多細膩的 UI/UX 設計細節：

🎨 溫暖莫蘭迪色系 (Warm Morandi Palette)：

使用了精心挑選的 CSS 變數（如奶茶色、乾燥玫瑰、暖灰），營造出舒適、不刺眼的辦公氛圍。

💎 極致毛玻璃特效 (Glassmorphism)：

利用 backdrop-filter: blur(12px) 與半透明邊框，創造出漂浮在背景之上的磨砂玻璃質感卡片。

具備精細的陰影處理 (box-shadow)，增加層次感。

🌊 動態沈浸體驗：

背景流動：CSS animation 讓背景漸層緩慢流動，賦予畫面生命力。

漂浮裝飾：背景中的 .blob 圓球元素增加了視覺深度。

互動回饋：卡片具備懸停 (Hover) 上浮與亮度變化效果，提供明確的互動暗示。

📱 響應式設計 (Mobile Responsive)：

針對手機端 (Max-width: 480px) 進行了字體與間距的優化，確保在任何裝置上都能完美呈現。

🛠️ 技術架構 (Tech Stack)
Core: HTML5

Styling: CSS3 (Variables, Flexbox, Animations, Backdrop Filter)

Integration Target: Google Apps Script Web App (可替換)

⚙️ 安裝與設定 (Setup & Configuration)
由於這是一個純靜態網頁專案，部署非常簡單。

1. 取得程式碼
下載 index.html 檔案至你的本地目錄。

2. 關鍵配置 (Configuration)
在部署前，請務必檢查並修改以下兩個部分：

A. 修改目標連結 (必要)
程式碼中目前的連結指向一個範例 Google Script。請搜尋 HTML 中的 <a> 標籤並替換 href：

HTML

<a href="https://script.google.com/macros/s/..." class="glass-card">
B. 自定義主題顏色 (可選)
透過 CSS 變數，你可以輕鬆更換整站的主題色系。在 <style> 區塊的 :root 中修改：

CSS

:root {
    /* 修改這裡來改變背景漸層 */
    --bg-gradient-start: #E0C9A6; /* 顏色 1 */
    --bg-gradient-mid: #D4A5A5;   /* 顏色 2 */
    --bg-gradient-end: #9E8C8C;   /* 顏色 3 */
    
    /* 修改文字顏色 */
    --text-color: #4A4A4A;
}
3. 部署方式
你可以選擇以下任一方式發布：

GitHub Pages / Netlify / Vercel: 直接上傳 index.html 即可。

Google Drive: 若作為內部工具，可直接將檔案存於 Drive 並以瀏覽器開啟（需注意路徑）。

嵌入至現有系統: 將 <style> 與 <body> 內容複製到你現有的專案中。

🚀 使用方式 (Usage)
開啟網頁。

畫面中央會顯示「效率日誌圖表」的毛玻璃卡片。

點擊卡片，即可跳轉至對應的生產效率分析報表。

🗺️ 未來規劃 (Roadmap)
[ ] 多入口支援：將單一卡片擴充為 Grid 佈局，支援多個報表連結（如：生產日誌、庫存管理、人員排班）。

[ ] 深色模式 (Dark Mode)：根據系統設定自動切換為深色玻璃風格。

[ ] 動態問候語：透過簡單的 JS 加入「早安/午安」的動態標題。

文件生成於 2026年，由 README Alchemist 製作。
