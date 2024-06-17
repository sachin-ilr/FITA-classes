const gameBoard = document.querySelector("#gameBoard")
const infoDisplay = document.querySelector("#info")
const startCells = ["", "", "", "", "", "", "", "", ""]
const refresh = document.querySelector("#button-container")
let go = "circle"

infoDisplay.textContent = "Circle goes first"

function refreshPage() {
    const button = document.createElement("button")
    button.className = "btn"
    button.textContent = "Play again!!"
    button.addEventListener("click", () => location.reload())
    refresh.append(button)
}

refreshPage()

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement)
    })
}

createBoard()

function addGo(e) {
    console.log("clicked", e.target)
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "It is " + go + "'s turn now"
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]]
    let circleWins = false;
    let crossWins = false;

    winningCombos.forEach(array => {
        if(array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"))) {
            circleWins = true;
            infoDisplay.textContent = "Circle Wins!!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })

    winningCombos.forEach(array => {
        if(array.every(cell => allSquares[cell].firstChild?.classList.contains("cross"))) {
            crossWins = true;
            infoDisplay.textContent = "Cross Wins!!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })

    const allFilled = Array.from(allSquares).every(square => square.firstChild);
    if (!circleWins && !crossWins && allFilled) {
        infoDisplay.textContent = "It's a Draw!!"
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
    }
   
}
