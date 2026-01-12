//datum van vandaag voor de datum picker
// const vandaag = Date.now()
const vandaag = new Date()

// console.log(vandaag)

var maand = vandaag.getMonth()

var emaand = maand + 1

if (emaand < 10) {emaand = "0" + emaand;}

// console.log(emaand)

var dagen = vandaag.getDate()

if (dagen < 10) {dagen = "0" + dagen;}

// console.log(dagen)

const datumId = document.getElementById("datumid")

if (datumId) {
datumId.value = vandaag.getFullYear() + "-" + emaand + "-" + dagen;
}


// select tijdlijn element uit html
const tijdlijn = document.querySelector(".timeline")

// haal de huidige tijd op, (automatisch is dat in seconden sinds 1970)


if (tijdlijn) {
    const hours = vandaag.getHours()
    tijdlijn.style.setProperty('--time', `${hours}.${vandaag.getMinutes()}`)
    
    // wip scroll to active:
    // const activeHourEl = document.querySelector(`.uur${hours}`)
    // console.log(activeHourEl)
    // if (activeHourEl) {
    //     setTimeout(() => {
    //         activeHourEl.scrollIntoView()
    //     , 400})
    // }
}

//play button zoeken audio zoeken
const playButton = document.querySelector('.playbtn');
const audio = document.querySelector('.audioplay');

if (playButton) {
    playButton.addEventListener('click', playIt);
}

function playIt() {
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}