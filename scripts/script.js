//datum van vandaag voor de datum picker
const vandaag = new Date()

// console.log(vandaag)

let maand = vandaag.getMonth()

let emaand = maand + 1

if (emaand < 10) { emaand = "0" + emaand; }

// console.log(emaand)

let dagen = vandaag.getDate()

if (dagen < 10) { dagen = "0" + dagen; }

// console.log(dagen)

const datumId = document.getElementById("datumid")

if (datumId) {
    datumId.value = vandaag.getFullYear() + "-" + emaand + "-" + dagen;
}


// select tijdlijn element uit html
const tijdlijn = document.querySelector(".timeline")

// haal de huidige tijd op, (automatisch is dat in seconden sinds 1970)


const hours = vandaag.getHours()
let minutes = vandaag.getMinutes()

if (minutes < 10) { minutes = "0" + minutes; }

console.log(minutes)

if (tijdlijn) {
    tijdlijn.style.setProperty('--time', `${hours}.${minutes}`)

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


// stap 1: zoek de menu-button op en sla die op in een variabele
const menuBtn = document.querySelector(".btn");
const deNav = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuBtn.addEventListener("click", toggleMenu);

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {
    //alert("hoi");
    deNav.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open");
}