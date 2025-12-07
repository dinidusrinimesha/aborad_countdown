// Generate stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Countdown functionality
function updateCountdown() {
    const targetDate = new Date('2026-01-10T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; font-size: 2rem; color: #00f5ff;">
                🎉 The Journey Has Begun! 🎉
            </div>
        `;
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="time-unit">
            <span class="time-value">${days}</span>
            <span class="time-label">Days</span>
        </div>
        <div class="time-unit">
            <span class="time-value">${hours}</span>
            <span class="time-label">Hours</span>
        </div>
        <div class="time-unit">
            <span class="time-value">${minutes}</span>
            <span class="time-label">Minutes</span>
        </div>
        <div class="time-unit">
            <span class="time-value">${seconds}</span>
            <span class="time-label">Seconds</span>
        </div>
    `;
}

// Initialize and update every second
updateCountdown();
setInterval(updateCountdown, 1000);