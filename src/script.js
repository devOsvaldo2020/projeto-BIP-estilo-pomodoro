"use strict"
let hh = 0;
let mm = 0;
let ss = 0;
let tempo = 1000;
let cron;


const quarenta = document.getElementById('40')
const vinte = document.getElementById('20')
const sete = document.getElementById('7')
const cinco = document.getElementById('5')

const quarentaMinuto = 2400000;
const vinteMinuto = 1200000;
const seteMinuto = 420000;
const cincoMinuto = 300000;

quarenta.addEventListener("click", function () {
    let meuInterval = setTimeout(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, quarentaMinuto);
    const pause = document.getElementById('pause')
    pause.addEventListener("click", function () {
        clearInterval(meuInterval);
    })    
    const stop = document.getElementById('stop')
    stop.addEventListener("click", function () {
        clearInterval(meuInterval);
    })    
});

vinte.addEventListener("click", function () {
    let meuInterval = setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, vinteMinuto);
    const pause = document.getElementById('pause')
    pause.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
    const stop = document.getElementById('stop')
    stop.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
});

sete.addEventListener("click", function () {
    let meuInterval = setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, seteMinuto);
    const pause = document.getElementById('pause')
    pause.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
    const stop = document.getElementById('stop')
    stop.addEventListener("click", function () {
        clearInterval(meuInterval);
    })
});

cinco.addEventListener("click", function () {
    let meuInterval = setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, cincoMinuto);
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
    document.getElementById('counter').innerText = format;
}


