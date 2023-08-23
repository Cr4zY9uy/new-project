var updateClock = function () {

    const currentDate = new Date();

    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();

    const secondHand = document.getElementsByClassName("needle-sec")[0];
    const minuteHand = document.getElementsByClassName("needle-min")[0];
    const hourHand = document.getElementsByClassName("needle-hour")[0];

    const secondDeg = seconds * 6; // 360 degrees / 60 seconds = 6 degrees per second
    const minuteDeg = minutes * 6; // 360 degrees / 60 minutes = 6 degrees per minute
    const hourDeg = minuteDeg / 2 + hours * 30; // 360 degrees / 12 hours = 30 degrees per hour, plus additional rotation for minutes

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000); // Update every second
