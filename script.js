/**
 * 前端互動邏輯
 * 包含：打字機特效、頁面標題動態切換、以及【新增】GAS 數據串接
 */

// 【新增】 GAS API 設定
// 請在此填入上方 Part 1 部署後的 Web App URL
const GAS_API_URL = "https://script.google.com/a/macros/dgstand.com/s/AKfycbyeDao7zNeomdusgymdIIVNmllqUBx9EMDiLM8LEcufZFuzkkeHDXt3f0WJfJCugKc2EA/exec";

// 1. 打字機特效設定
const textToType = "生產一組"; // 這裡修改標題文字
const typeSpeed = 150;        // 打字速度 (毫秒)
const element = document.getElementById('typewriter-text');
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        element.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, typeSpeed);
    }
}

// 頁面載入後開始打字
window.addEventListener('load', typeWriter);

// 2. 智慧分頁標題 (離開分頁時改變標題)
const originalTitle = document.title;
const awayTitle = "( ˘•ω•˘ ) 等你回來..."; // 離開時的標題

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = awayTitle;
    } else {
        document.title = originalTitle;
    }
});

// 【新增】 3. 從 GAS 獲取數據並更新卡片
async function fetchGasData() {
    // 如果使用者尚未填寫 URL，則不執行
    if (GAS_API_URL.includes("你的_GAS_API_DEPLOY_ID")) {
        console.warn("尚未設定 GAS_API_URL，無法獲取數據");
        return;
    }

    try {
        const response = await fetch(GAS_API_URL);
        const data = await response.json();
        
        // 更新第一個卡片 (圖表)
        const chartEl = document.getElementById('chart-preview');
        if (data.chart) {
            chartEl.innerHTML = `
                達成率: <span class="data-highlight">${data.chart.rate}</span>
                <span class="data-tag tag-success">${data.chart.status}</span>
            `;
        }

        // 更新第二個卡片 (未達成)
        const pendingEl = document.getElementById('pending-preview');
        if (data.pending) {
            pendingEl.innerHTML = `
                待處理: <span class="data-highlight">${data.pending.count}</span> 件
                ${data.pending.urgent > 0 ? `<span class="data-tag tag-urgent">急件 ${data.pending.urgent}</span>` : ''}
            `;
        }

    } catch (error) {
        console.error("Fetch GAS Data Error:", error);
        // 錯誤處理顯示
        document.getElementById('chart-preview').innerText = "數據載入失敗";
        document.getElementById('pending-preview').innerText = "數據載入失敗";
    }
}

// 頁面載入後，執行數據抓取
window.addEventListener('load', fetchGasData);
