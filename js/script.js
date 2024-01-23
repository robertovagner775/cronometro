let msec = 0;
let sec = 0;
let min = 0;
let hours = 0;
let cron;

function cronometer() {
    if((msec += 10) == 1000) {
        msec = 0
        sec++
    }
    if(sec == 60) {
        sec = 0
        min++
    } 
    if(min == 60) {
        min = 0
        hours++
    }

    document.getElementById("mseg").innerText = format(msec)
    document.getElementById("seg").innerText = format(sec)
    document.getElementById("hor").innerText = format(hours)
    document.getElementById("min").innerText = format(min)
}
 
function start() {
    stop();
    cron = setInterval(() => { cronometer(); }, 10);
}
  
function stop() {
  clearInterval(cron)
}

function format(input) {
    return input > 10 ? input : `0${input}`
}
function clearCronometer() {
    msec = 0
    sec = 0
    min = 0
    hours = 0

    document.getElementById("mseg").innerHTML = "00"
    document.getElementById("seg").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("hour").innerHTML = "00"
}