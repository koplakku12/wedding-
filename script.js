// Fungsi Buka Undangan
function bukaUndangan() {
    document.getElementById('cover').style.transform = 'translateY(-100%)';
    document.getElementById('main-content').style.display = 'block';
    
    // Putar Musik
    const music = document.getElementById('bgMusic');
    music.play();
}

// Countdown Timer
const targetDate = new Date("April 26, 2026 09:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}, 1000);

// Ambil Nama Tamu dari URL (misal: ?to=Budi)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
if (namaTamu) {
    document.getElementById('guest-name').innerText = namaTamu;
}
