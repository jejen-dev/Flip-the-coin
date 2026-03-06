// Pilih elemen DOM
const coin = document.getElementById('coin');
const shadow = document.getElementById('shadow');
const resultDisplay = document.getElementById('result');
const flipButton = document.getElementById('flipButton');

// Variabel untuk melacak status
let isFlipping = false;
let currentSide = 'heads'; // 'heads' or 'tails'

// Fungsi untuk mendapatkan hasil acak (Kepala atau Ekor)
function getRandomResult() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
}

function updateCoinDisplay(result) {
    const side = result.toLowerCase();

    coin.classList.remove('show-heads', 'show-tails');

    if (side === 'heads') {
        coin.classList.add('show-heads');
        currentSide = 'heads';
    } else {
        coin.classList.add('show-tails');
        currentSide = 'tails';
    }
}

// Fungsi untuk menangani animasi membalik koin
function flipCoin(result) {
    if (isFlipping) return;

    isFlipping = true;

    coin.classList.add('flipping');
    shadow.classList.add('dim');

    resultDisplay.textContent = result;

    setTimeout(() => {
        coin.classList.remove('flipping');
        shadow.classList.remove('dim');
        updateCoinDisplay(result);
        isFlipping = false;
    }, 600); // durasi animasi
}

// Fungsi untuk menangani lemparan koin)
function handleFlip() {
    const result = getRandomResult();
    flipCoin(result);
}

flipButton.addEventListener('click', handleFlip);
coin.addEventListener('click', handleFlip);

// Aksesibilitas keyboard)
flipButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleFlip();
    }
});

// Inisialisasi - atur sisi awal (opsional))
updateCoinDisplay('Heads');
resultDisplay.textContent = 'Heads';