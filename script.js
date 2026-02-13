let currentStep = 1;

/* ADIM GEÇİŞİ */

function nextStep(step) {

    const current = document.getElementById("step" + step);
    const next = document.getElementById("step" + (step + 1));

    current.classList.remove("active");

    setTimeout(() => {

        current.style.display = "none";
        next.style.display = "block";

        setTimeout(() => {
            next.classList.add("active");
        }, 50);

    }, 500);

}


/* OYUN BAŞLAT */

document.getElementById("startBtn").addEventListener("click", () => {

    document.getElementById("mainPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";

});


/* TAŞ KAĞIT MAKAS */

let round = 1;
const maxRound = 3;

function play(choice) {

    if (round > maxRound) return;

    let tavla = "";

    if (choice == "tas") tavla = "kagit";
    if (choice == "kagit") tavla = "tas";
    if (choice == "makas") tavla = "tas";


    let text = `
    <b>El ${round}</b><br>
    Mars: ${format(choice)}<br>
    Tavla: ${format(tavla)}<br>
    Kazanan: Tavla Şampiyonu 🏆<br><br>
    `;

    document.getElementById("result").innerHTML += text;

    round++;

    if (round > maxRound) {
        setTimeout(showFinal, 700);
    }

}


function format(v) {
    if (v == "tas") return "Taş 🪨";
    if (v == "kagit") return "Kağıt 📄";
    if (v == "makas") return "Makas ✂️";
}


/* FINAL */

function showFinal() {

    document.getElementById("gamePage").style.display = "none";
    document.getElementById("finalScreen").classList.add("show");

}
