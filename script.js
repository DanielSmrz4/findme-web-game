// message when win
let count = document.querySelector("#count")

// attemps count
const attemps = document.querySelector(".attemps")
let startCountingFrom = 0
attemps.innerText = startCountingFrom

// array of all tiles
let allTiles = []
allTiles = document.querySelectorAll(".one-tile-js")

// selecting randomly winner tile
const myNum = Math.floor(Math.random() * 9)
console.log(myNum)
const winnerTile = allTiles[myNum]
winnerTile.classList.remove("one-tile-js")
winnerTile.classList.add("winner-indicator")

// adding click e-listener for each tile
allTiles.forEach((e) => {
        if (e.classList[1] == "one-tile-js") {
            e.addEventListener("click", (e) => {
                e.preventDefault()
                e.target.classList.add("wrong-tile")
                if (startCountingFrom < 9) {
                    startCountingFrom += 1   
                    attemps.innerText = startCountingFrom
                }
                   
            })
        } else if (e.classList[1] == "winner-indicator") {
            e.addEventListener("click", (e) => {
                e.preventDefault()
                if (startCountingFrom < 9) {
                    startCountingFrom += 1   
                    attemps.innerText = startCountingFrom
                }
                count.innerText = ("FUCK YEAH!!!")
                winnerTile.classList.add("winner-highligh")
            })
        }                
});

// reloads page - reset button functionality
const resetButton = document.querySelector(".reset-btn")
resetButton.addEventListener("click", (e) => {
    location.reload()
});
