📊 Team Efficiency Portal | 生產一組效率日誌入口
一個結合溫暖莫迪蘭色系與現代毛玻璃特效（Glassmorphism）的團隊數據儀表板入口。不僅提供高質感的視覺體驗，更透過微互動設計提升使用者操作樂趣。

📖 專案簡介
本專案旨在為團隊（如「生產一組」）提供一個美觀且統一的數據存取入口。解決了 Google Apps Script Web App 連結分散、介面陽春的問題。透過此靜態頁面，成員可以快速存取後端的「效率日誌圖表」與「未達成資料檢視」，同時享受流暢的視覺回饋。

✨ 主要功能 (Features)
🎨 極致 UI/UX 設計
毛玻璃擬態 (Glassmorphism)：運用 backdrop-filter: blur(12px) 與半透明背景，打造具備層次感的卡片介面。

溫暖莫迪蘭配色：使用 CSS 變數管理「奶茶色」、「乾燥玫瑰」與「暖灰」漸層，視覺柔和不刺眼。

流體背景動畫：CSS Keyframes (gradientMove) 與漂浮的圓形色塊 (blob)，讓背景不再單調，充滿生命力。

響應式設計：針對手機端 (max-width: 480px) 自動調整字體與卡片間距。

⚡ 前端互動邏輯
打字機標題特效：頁面載入時，標題文字會以打字機效果逐字出現，吸引注意力。

智慧分頁標題 (Smart Title)：當使用者切換分頁（離開頁面）時，標題會自動變更為 ( ˘•ω•˘ ) 等你回來...，增加趣味性與召回率。

瀑布流進場：卡片元件依序延遲載入 (animation-delay)，營造流暢的視覺動線。

🛠️ 技術架構 (Tech Stack)
Core: HTML5, Vanilla JavaScript (ES6+)

Styling: CSS3 (Variables, Flexbox, Animations, Media Queries)

Integration: Google Apps Script (Web Apps) 連結整合

⚙️ 安裝與設定 (Configuration)
本專案為靜態網頁，可直接部署於 GitHub Pages、Netlify，或嵌入至 Google Sites / GAS HTML Service 中。在使用前，請務必修改以下關鍵配置：

1. 設定連結端點 (index.html)
請找到 index.html 中的 <a> 標籤，將 href 替換為您實際部署的 Google Apps Script Web App 網址。

HTML

<a href="您的_GAS_WEB_APP_URL_1" class="glass-card">
    <h2>效率日誌圖表</h2>
</a>

<a href="您的_GAS_WEB_APP_URL_2" class="glass-card">
    <h2>未達成資料檢視</h2>
</a>
2. 客製化標題文字 (script.js)
若要更改團隊名稱或標題，請修改 JS 檔案中的配置變數。

JavaScript

// script.js 第 7 行
const textToType = "您的團隊名稱"; // 例如：行銷二組 - 戰情室
3. 調整主題配色 (style.css)
若需更換品牌色系，只需修改 CSS 檔頭的 :root 變數即可全站套用。

CSS

:root {
    --bg-gradient-start: #E0C9A6; /* 修改這裡 */
    --bg-gradient-mid: #D4A5A5;   /* 修改這裡 */
    /* ... */
}
🚀 部署指南
方法 A：GitHub Pages (推薦)
將本專案上傳至 GitHub Repository。

進入 Settings -> Pages。

Source 選擇 main branch 即可取得公開網址。

方法 B：作為 GAS 首頁
若希望此頁面本身也是一個 GAS Web App：

將 index.html 內容貼入 GAS 的 index.html。

將 style.css 的內容用 <style>...</style> 包裹放入 HTML <head>。

將 script.js 的內容用 <script>...</script> 包裹放入 HTML <body> 底部。

建立 doGet 函式並回傳此 HTML。

📦 使用方式
開啟網頁，欣賞打字機開場動畫。

點擊卡片：

📊 效率日誌圖表：跳轉至數據視覺化儀表板。

📉 未達成資料檢視：跳轉至異常數據清單。

試著切換分頁：觀察瀏覽器標籤頁上的標題變化。

🗺️ 未來規劃 (Roadmap)
[ ] 深色模式 (Dark Mode)：根據系統偏好自動切換深色玻璃特效。

[ ] 動態數據預覽：透過 API (fetch) 直接在卡片上顯示簡易數據（如：今日達成率 85%）。

[ ] 使用者驗證：加入簡單的密碼鎖定功能，保護內部連結。
