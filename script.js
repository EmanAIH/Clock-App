const hourSpan = document.getElementById("hours");
const secondSpan = document.getElementById("sec");
const minSpan = document.getElementById("min");

hourSpan.innerText = ` `;
secondSpan.innerText = ``;
minSpan.innerText = ``;

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    hourSpan.innerText =  hours.toString().padStart(2, "0");
    secondSpan.innerText = seconds.toString().padStart(2, "0");
    minSpan.innerText = minutes.toString().padStart(2, "0");

};

setInterval(getTime, 1000);

getTime();