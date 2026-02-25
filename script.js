const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();

    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const hourDeg = (hour % 12) / 12 * 360 + (minutes / 60) * 30;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minutes / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (seconds / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();