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
    hourSpan.innerText = `${hours}: `
    secondSpan.innerText = `${seconds} `
    minSpan.innerText = `${minutes}: `

}

setTimeout(getTime, 1000)
