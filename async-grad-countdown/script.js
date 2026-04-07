// Graduation Countdown - dynamic setup
let intervalId = null;
let graduationDate = null;
const fallbackCelebrationMessages = [
    'You did it! Time to celebrate all your hard work!',
    'Caps, gown, and a bright future - congrats!',
    'Cheers to your success - the tassel was worth the hassle!',
    'Congratulations! Today is the start of something amazing.',
    'Hooray! Hats off to your accomplishment!'
];

function pad(n) { return n.toString().padStart(2, '0'); }

function initializeCountdown() {
    const app = document.getElementById('app');

    const container = document.createElement('div');
    container.className = 'countdown-container';

    const title = document.createElement('h1');
    title.textContent = 'Graduation Countdown Timer';
    container.appendChild(title);

    const display = document.createElement('p');
    display.id = 'countdown-display';
    display.textContent = 'Loading...';
    container.appendChild(display);

    const buttons = document.createElement('div');
    buttons.className = 'countdown-controls';

    const startBtn = document.createElement('button');
    startBtn.id = 'start-btn';
    startBtn.textContent = 'Start Countdown';
    startBtn.addEventListener('click', startCountdown);

    const stopBtn = document.createElement('button');
    stopBtn.id = 'stop-btn';
    stopBtn.textContent = 'Stop Countdown';
    stopBtn.addEventListener('click', stopCountdown);

    const zeroBtn = document.createElement('button');
    zeroBtn.id = 'zero-btn';
    zeroBtn.textContent = 'Set Countdown to Zero';
    zeroBtn.addEventListener('click', setCountdownToZero);

    buttons.appendChild(startBtn);
    buttons.appendChild(stopBtn);
    buttons.appendChild(zeroBtn);
    container.appendChild(buttons);
    // Lots of dom children

    const celeb = document.createElement('div');
    celeb.id = 'celebration';
    celeb.innerHTML = '<p id="celebration-message" class="celebration-message"></p>';
    container.appendChild(celeb);

    app.appendChild(container);

    // Start automatically on load
    startCountdown();
}

function showCelebrationMessage(message) {
    const el = document.getElementById('celebration-message');
    if (!el) return;
    el.textContent = message;
    el.classList.add('visible');
}

function showFallbackCelebrationMessage() {
    const randomMessage = fallbackCelebrationMessages[
        Math.floor(Math.random() * fallbackCelebrationMessages.length) // Random index
    ];
    showCelebrationMessage(randomMessage);
}

function startCountdown() {
    if (intervalId) return; // already running

    const now = new Date();
    const year = now.getFullYear();
    // Set fixed graduation date: June 1 of current year
    let grad = new Date(year, 5, 1, 0, 0, 0);
    if (grad.getTime() <= now.getTime()) {
        // if date already passed this year, use next year
        grad = new Date(year + 1, 5, 1, 0, 0, 0);
    }
    graduationDate = grad.getTime();

    function tick() {
        const now = new Date().getTime();
        const distance = graduationDate - now;

        if (distance <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            document.getElementById('countdown-display').textContent = 'Congratulations!';
            // show celebratory message
            fetchCelebrationMessagePromise()
                .then(showCelebrationMessage)
                .catch(showFallbackCelebrationMessage);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown-display').textContent =
            `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }

    tick();
    intervalId = setInterval(tick, 1000);
}

function stopCountdown() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function setCountdownToZero() {
    stopCountdown();
    document.getElementById('countdown-display').textContent = 'Congratulations!';
    fetchCelebrationMessagePromise()
        .then(showCelebrationMessage)
        .catch(showFallbackCelebrationMessage);
}


// Promise-based XHR
function fetchCelebrationMessagePromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'celebrations.json');
        xhr.onload = function () {
            // status 0 can occur when opening from file:// in some browsers
            if (xhr.status === 200 || xhr.status === 0) {
                try {
                    const arr = JSON.parse(xhr.responseText);
                    if (!Array.isArray(arr) || arr.length === 0) return resolve('Congratulations!');
                    const msg = arr[Math.floor(Math.random() * arr.length)];
                    resolve(msg);
                } catch (e) { reject(e); }
            } else reject(new Error('Status ' + xhr.status));
        };
        xhr.onerror = function () { reject(new Error('Network error')); };
        xhr.send();
    });
}

// initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCountdown);
} else {
    initializeCountdown();
}