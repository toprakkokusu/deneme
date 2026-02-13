document.addEventListener("DOMContentLoaded", function () {

    const openDate = new Date(2026, 1, 15, 14, 5, 0).getTime();
    const now = new Date().getTime();

    if (now < openDate) {

        // Sayfayı gizle
        document.body.innerHTML = `
            <div id="maintenance" style="
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
                    <h2 id="timer">Yükleniyor...</h2>
                </div>
            </div>
        `;

        function update() {

            const diff = openDate - new Date().getTime();

            if (diff <= 0) {
                location.reload();
                return;
            }

            const d = Math.floor(diff / 86400000);
            const h = Math.floor(diff / 3600000) % 24;
            const m = Math.floor(diff / 60000) % 60;
            const s = Math.floor(diff / 1000) % 60;

            document.getElementById("timer").innerText =
                `${d} gün ${h} saat ${m} dk ${s} sn`;
        }

        update();
        setInterval(update, 1000);
    }

});
