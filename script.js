let count = document.querySelector("#count")

let allTiles = []
allTiles = document.querySelectorAll(".one-tile-js")

const myNum = Math.floor(Math.random() * 9)
console.log(myNum)

const winnerTile = allTiles[myNum]
winnerTile.classList.remove("one-tile-js")
winnerTile.classList.add("winner-indicator")

allTiles.forEach((e) => {
        if (e.classList[1] == "one-tile-js") {
            e.addEventListener("click", (e) => {
                e.preventDefault()
                e.target.classList.add("wrong-tile")      
            })
        } else if (e.classList[1] == "winner-indicator") {
            e.addEventListener("click", (e) => {
                e.preventDefault()
                count.innerText = ("FUCK YEAH!!!")
                winnerTile.classList.add("winner-highligh")
            })
        }                
});

const resetButton = document.querySelector(".reset-btn")
resetButton.addEventListener("click", (e) => {
    location.reload()
});
