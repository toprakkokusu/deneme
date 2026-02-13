// Açılış zamanı: 15 Şubat 2026 - 14:05
const openDate = new Date(2026, 1, 15, 14, 5, 0).getTime();

const now = new Date().getTime();

if (now < openDate) {

    document.body.innerHTML = `
        <div style="
            background:#0f172a;
            color:white;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            font-family:Arial;
        ">
            <div>
                <h1>🚧 Bakımdayız</h1>
                <p>Sitemiz yakında açılıyor</p>
                <h2 id="timer"></h2>
            </div>
        </div>
    `;

    function update() {

        const diff = openDate - new Date().getTime();

        if (diff <= 0) {
            location.reload();
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const m = Math.floor(diff / (1000 * 60)) % 60;
        const s = Math.floor(diff / 1000) % 60;

        document.getElementById("timer").innerText =
            `${d} gün ${h} saat ${m} dk ${s} sn`;
    }

    update(); // İlk anda çalıştır
    setInterval(update, 1000);
}
