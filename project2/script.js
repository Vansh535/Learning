
const baseTime = new Date('2024-12-12T11:48:03+05:30');
const startTime = Date.now();

function updateClock() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    
    const elapsedMs = Date.now() - startTime;
    const currentTime = new Date(baseTime.getTime() + elapsedMs);

    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentTime.toLocaleDateString('en-US', options);
}
updateClock();
setInterval(updateClock, 1000);