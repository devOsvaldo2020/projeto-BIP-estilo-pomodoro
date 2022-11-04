
const play = document.getElementById('play')
play.addEventListener("click", function () {
    setInterval(() => {
        const audio = document.querySelector('audio')
        audio.play()
    }, 300000)

})
const stop = document.getElementById('stop')
stop.addEventListener("click", function () {
    const audio = document.querySelector('audio')    
    audio.play()    
})

