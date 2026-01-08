/**
 * 前端互動邏輯
 * 包含：打字機特效、頁面標題動態切換、以及 GAS 數據串接
 */

// GAS API 設定
const GAS_API_URL = "https://script.google.com/a/macros/dgstand.com/s/AKfycbyeDao7zNeomdusgymdIIVNmllqUBx9EMDiLM8LEcufZFuzkkeHDXt3f0WJfJCugKc2EA/exec";

// 1. 打字機特效 (維持不變)
const textToType = "生產一組"; 
const typeSpeed = 150;        
const element = document.getElementById('typewriter-text');
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        element.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, typeSpeed);
    }
}
window.addEventListener('load', typeWriter);

// 2. 智慧分頁標題 (維持不變)
const originalTitle = document.title;
const awayTitle = "( ˘•ω•˘ ) 等你回來..."; 
document.addEventListener('visibilitychange', function() {
    document.title = document.hidden ? awayTitle : originalTitle;
});

// 3. 從 GAS 獲取數據並更新卡片
async function fetchGasData() {
    if (GAS_API_URL.includes("你的_GAS_API_DEPLOY_ID")) {
        console.warn("⚠ 尚未設定 GAS_API_URL");
        return;
    }

    try {
        const response = await fetch(GAS_API_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        // 更新卡片 1
        const chartEl = document.getElementById('chart-preview');
        if (data.chart && chartEl) {
            
            // 根據 level 設定顏色
            let tagClass = "tag-default"; // 預設灰
            const level = data.chart.level;

            if (level === 'level-100') tagClass = "tag-success";    // 100%: 綠色
            else if (level === 'level-90') tagClass = "tag-primary"; // 90%: 藍色 (需在 CSS 定義，或暫用 tag-urgent)
            else if (level === 'level-80') tagClass = "tag-warning"; // 80%: 橘色
            else if (level === 'level-70') tagClass = "tag-warning"; // 70%: 橘色
            else if (level === 'level-0') tagClass = "tag-grey";     // 未達標

            // 為了方便，若 style.css 沒定義那麼多色，我們可以簡化：
            // level-100 -> tag-success (綠)
            // level-70~99 -> tag-urgent (紅/橘) 或自定義樣式
            if (['level-90', 'level-80', 'level-70'].includes(level)) {
                tagClass = "tag-urgent"; // 暫時使用強調色
            } else if (level === 'level-0') {
                tagClass = "tag-grey"; // 需在 CSS 補一個灰色，或直接用 style
            }

            chartEl.innerHTML = `
                達成率: <span class="data-highlight">${data.chart.rate}</span>
                <span class="data-tag ${tagClass}" style="${level === 'level-0' ? 'background-color:#999;' : ''}">${data.chart.status}</span>
            `;
        }
        
    } catch (error) {
        console.error("Fetch GAS Data Error:", error);
        const errorMsg = "數據載入失敗";
        if (document.getElementById('chart-preview')) {
            document.getElementById('chart-preview').innerText = errorMsg;
        }
    }
}

window.addEventListener('load', fetchGasData);
