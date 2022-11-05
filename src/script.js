"use strict"
var hh = 0;
var mm = 0;
var ss = 0;
var tempo = 1000;
var cron;
const quarenta = document.getElementById('40')
quarenta.addEventListener("click", function () {
    var meuInterval = setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, 2400000) // 40 minutos aqui
    const pause = document.getElementById('pause')
    pause.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
    const stop = document.getElementById('stop')
    stop.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
});
const vinte = document.getElementById('20')
vinte.addEventListener("click", function () {
    var meuInterval = setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, 1500000) // 25 minutos aqui
    const pause = document.getElementById('pause')
    pause.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
    const stop = document.getElementById('stop')
    stop.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
});
const sete = document.getElementById('7')
sete.addEventListener("click", function () {
    var meuInterval = setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, 420000) // 25 minutos aqui
    const pause = document.getElementById('pause')
    pause.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
    const stop = document.getElementById('stop')
    stop.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
});
const cinco = document.getElementById('5')
cinco.addEventListener("click", function () {
    var meuInterval = setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, 300000) // 25 minutos aqui
    const pause = document.getElementById('pause')
    pause.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
    const stop = document.getElementById('stop')
    stop.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
});
function start() {
    cron = setInterval(timer, tempo);
}
function pause() {
    clearInterval(cron);
}
function stop() {
    clearInterval(cron);
    hh = 0; mm = 0; ss = 0;
    document.getElementById('counter').innerText = '00:00:00';
}
function timer() {
    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;
            if (hh == 12) {
                hh = 0;
                // ss++;
            }
        }
    }
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format
}


