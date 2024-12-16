const lockScreen = document.querySelector('.lock-screen');
const homeScreen = document.querySelector('.home-screen');
const appPages = document.querySelectorAll('.app-page');
const homeTimeDisplay = document.querySelector('.current-time');

// Remove lock screen transition on click
lockScreen.addEventListener('click', (e) => {
  if (!e.target.classList.contains('home-button')) {
    e.stopPropagation();
  }
});

    // Open app
    function openApp(url) {
      window.open(url, '_blank');
    }

    function updateHomeTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        homeTimeDisplay.textContent = `${hours}:${minutes}`;
      }
      setInterval(updateHomeTime, 1000);
      updateHomeTime();

    // Return to home screen
    function goToHome() {
      appPages.forEach(page => page.style.display = 'none');
      lockScreen.style.display = 'none';
      homeScreen.style.display = 'flex';
    }

    // Open app page with animation
    function animateAndOpenApp(icon, appId) {
      icon.classList.add('expand');
      setTimeout(() => {
        icon.classList.remove('expand');
        homeScreen.style.display = 'none';
        document.getElementById(`${appId}-page`).style.display = 'block';
      }, 300);
    }

    function openAppPage(appId) {
        homeScreen.style.display = 'none';
        document.getElementById(`${appId}-page`).style.display = 'block';
      }

// リアルタイム日付、時刻を表示するスクリプト
function updateDateTime() {
    const dateElement = document.querySelector('.lock-screen .date');
    const timeElement = document.querySelector('.lock-screen .time');
  
    const now = new Date();
  
    // Format date (e.g., 12月15日 日曜日)
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = now.toLocaleDateString('ja-JP', options);
  
    // Format time (e.g., 12:00)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
  
    // Update elements
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
  }
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to display the date and time immediately
  updateDateTime();