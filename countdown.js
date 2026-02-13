document.addEventListener("DOMContentLoaded", function () {

    // Localdeyken (Live Server) bakım modu kapalı
    if (
        location.hostname === "localhost" ||
        location.hostname === "127.0.0.1"
    ) {
        return;
    }

    // Açılış tarihi: 15 Şubat 2026 - 14:05
    const openDate = new Date(2026, 1, 15, 14, 5, 0).getTime();

    const now = new Date().getTime();

    // Eğer açılış zamanı gelmediyse bakım ekranı göster
    if (now < openDate) {

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

        function updateTimer() {

            const diff = openDate - new Date().getTime();

            // Süre bittiyse sayfayı yenile
            if (diff <= 0) {
                location.reload();
                return;
            }

            const days = Math.floor(diff / 86400000);
            const hours = Math.floor(diff / 3600000) % 24;
            const minutes = Math.floor(diff / 60000) % 60;
            const seconds = Math.floor(diff / 1000) % 60;

            document.getElementById("timer").innerText =
                `${days} gün ${hours} saat ${minutes} dk ${seconds} sn`;
        }

        // İlk çalıştırma
        updateTimer();

        // Her saniye güncelle
        setInterval(updateTimer, 1000);
    }

});
