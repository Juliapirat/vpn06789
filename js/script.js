let minElement = document.getElementById("minute");
let secElement = document.getElementById("second");

function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;

    function tick() {
        seconds--;
        minElement.innerHTML = minutes;
        secElement.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            }
        }
    }

    tick();
}

if (minElement && secElement) {
    countdown(+minElement.innerHTML);
}