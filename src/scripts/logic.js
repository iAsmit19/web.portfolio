let sec = document.getElementById("the-sec");
let min = document.getElementById("the-min");
let hour = document.getElementById("the-hour");
let day = document.getElementById("the-day");

let chosenDate = new Date("Sep 19, 2023 1:00").getTime();

let update = setInterval(() => {
    let currentDate = new Date().getTime();
    let timeLeft = chosenDate - currentDate;
    
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    sec.innerHTML = seconds;
    min.innerHTML = minutes;
    hour.innerHTML = hours;
    day.innerHTML = days;
}, 1);