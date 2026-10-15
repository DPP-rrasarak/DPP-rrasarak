// Tailwind Theme Configuration (เพื่อให้อ่านธีม day/night ได้ถูกต้อง)
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dayBg: '#f6eee3',
        dayCard: '#eae0d0',
        dayText: '#5c4a3e',
        dayAccent: '#c8a882',
        nightBg: '#1e1c24',
        nightCard: '#2a2734',
        nightText: '#e2ddf0',
        nightAccent: '#8a7fb9'
      }
    }
  }
};

// --- DOM Elements ---
const themeToggleBtn = document.getElementById('themeToggle');
const openLoginBtn = document.getElementById('openLoginBtn');
const closeLoginBtn = document.getElementById('closeLoginBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

const toggleRainBtn = document.getElementById('toggleRainBtn');
const rainPlayer = document.getElementById('rainPlayer');
const toggleSongBtn = document.getElementById('toggleSongBtn');
const songPlayer = document.getElementById('songPlayer');

const congratsModal = document.getElementById('congratsModal');
const closeCongratsBtn = document.getElementById('closeCongratsBtn');

const timerDisplay = document.getElementById('timerDisplay');
const btn25 = document.getElementById('btn-25');
const btn5 = document.getElementById('btn-5');
const btn15 = document.getElementById('btn-15');
const startTimerBtn = document.getElementById('startTimerBtn');
const pauseTimerBtn = document.getElementById('pauseTimerBtn');
const resetTimerBtn = document.getElementById('resetTimerBtn');

// --- State Variables ---
let timerMinutes = 25;
let timerSeconds = 0;
let timerInterval = null;

// --- Helper Functions ---
function toggleModal(element) {
  element.classList.toggle('hidden');
}

function updateDisplay() {
  const minStr = String(timerMinutes).padStart(2, '0');
  const secStr = String(timerSeconds).padStart(2, '0');
  timerDisplay.innerText = `${minStr}:${secStr}`;
}

function setTimer(min) {
  pauseTimer();
  timerMinutes = min;
  timerSeconds = 0;
  updateDisplay();
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timerSeconds === 0) {
      if (timerMinutes === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        toggleModal(congratsModal);
        return;
      }
      timerMinutes--;
      timerSeconds = 59;
    } else {
      timerSeconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timerMinutes = 25;
  timerSeconds = 0;
  updateDisplay();
}

// --- Event Listeners ---

// Day / Night Theme Toggle
themeToggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Modals
openLoginBtn.addEventListener('click', () => toggleModal(loginModal));
closeLoginBtn.addEventListener('click', () => toggleModal(loginModal));
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  toggleModal(loginModal);
});

closeCongratsBtn.addEventListener('click', () => toggleModal(congratsModal));

// Media Accordions
toggleRainBtn.addEventListener('click', () => toggleModal(rainPlayer));
toggleSongBtn.addEventListener('click', () => toggleModal(songPlayer));

// Timer Controls
btn25.addEventListener('click', () => setTimer(25));
btn5.addEventListener('click', () => setTimer(5));
btn15.addEventListener('click', () => setTimer(15));

startTimerBtn.addEventListener('click', startTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
resetTimerBtn.addEventListener('click', resetTimer);