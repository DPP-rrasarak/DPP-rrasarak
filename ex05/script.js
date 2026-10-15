// Configure Tailwind Custom Colors via JS
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

// Day / Night Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Toggle Modal & Players
function toggleModal(id) {
  document.getElementById(id).classList.toggle('hidden');
}

function togglePlayer(id) {
  document.getElementById(id).classList.toggle('hidden');
}

// Pomodoro Timer Logic (Default 25 mins)
let timerMinutes = 25;
let timerSeconds = 0;
let timerInterval = null;

function updateDisplay() {
  const minStr = String(timerMinutes).padStart(2, '0');
  const secStr = String(timerSeconds).padStart(2, '0');
  document.getElementById('timerDisplay').innerText = `${minStr}:${secStr}`;
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
        alert('Time is up! Take a break ☕');
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
