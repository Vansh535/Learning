function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    hours = hours % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById('clock').textContent = `${hours.toString().padStart(2, '0')}
    :${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateClock, 1000);
