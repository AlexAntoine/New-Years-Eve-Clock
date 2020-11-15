const _days = document.getElementById('days');
const _hours = document.getElementById('hours');
const _minutes = document.getElementById('minutes');
const _seconds = document.getElementById('seconds');

const newYears = '1 Jan 2021';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    _days.innerHTML = days;
    _hours.innerHTML = hours;
    _minutes.innerHTML = minutes;
    _seconds.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);