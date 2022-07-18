
const suggestion = document.querySelector('#suggestion')
const suggestionLink = suggestion.href

const button = document.querySelector('button') 
let buttonText = [
    "Not really my jam..",
    "Hit me with something else!",
    "Nah, I'll try another one!",
    "Hell to the no.. One more time!",
    "Give me a song that I'm able to sing!"
]

let listofSongs;
let numberOfSongs

let currentSong = ""

fetchList().then((res) => {
    listofSongs = res;
    numberOfSongs = res.length
    randomizeSong()
}
);

async function fetchList() {
    const res = await fetch("./listOfSongs.json" )
    return await res.json()
}

function randomizeSong() {

    const length = Object.keys(listofSongs).length;   
    let randomNum = Math.floor(Math.random() * length)
    const songNames = Object.keys(listofSongs)   
    randomSong = songNames[randomNum]

    suggestion.innerHTML = randomSong
    suggestion.href = listofSongs[randomSong]    
}

let i = 0
function clickButton() {

    randomizeSong() 

    button.innerHTML = buttonText[i] 
    if (i === buttonText.length - 1) {
        i = 0 } else i ++  
}



