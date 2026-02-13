// Geri sayım ve bakım modu
const openDate = new Date(2026, 1, 15, 14, 5, 0).getTime();
const now = new Date().getTime();
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

if(now < openDate && !isLocal){
    document.body.innerHTML = `
        <div id="maintenanceScreen" style="
            background:#0f172a;
            color:white;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            font-family:Arial, sans-serif;
            flex-direction:column;
            padding:20px;
        ">
            <h1>🚧 Bakımdayız</h1>
            <p>Sitemiz yakında açılıyor</p>
            <h2 id="timer"></h2>
        </div>
    `;
    const timerEl = document.getElementById("timer");
    function updateTimer(){
        const diff = openDate - new Date().getTime();
        if(diff <= 0){ location.reload(); return; }
        const d = Math.floor(diff/86400000);
        const h = Math.floor(diff/3600000)%24;
        const m = Math.floor(diff/60000)%60;
        const s = Math.floor(diff/1000)%60;
        timerEl.innerText = `${d}g ${h}s ${m}d ${s}sn`;
    }
    setInterval(updateTimer,1000);
    updateTimer();
}
