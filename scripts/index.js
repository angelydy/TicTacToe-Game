const body = document.body
const tiles = Array.from(document.querySelectorAll('.tile'))
const playerOneContainer = document.getElementById('player-one')
const playerTwoContainer = document.getElementById('player-two')
const playerOne = document.getElementById('current-player')
const playerTwo = document.getElementById('current-player-two')
const playerOneName = document.getElementById('player-one-name')
const playerTwoName = document.getElementById('player-two-name')

let currentPlayer = 'X'
let board = ['','','','','','','','','']
let activeGame = true

//check who will play first and display
const askContainer = document.getElementById('ask-player')
const tileContainer = document.getElementById('tile-container')
const xBtn = document.getElementById('x-button')
const oBtn  = document.getElementById('o-button')
function displayPlayerOne() {
  askContainer.style.display = "none"
  tileContainer.style.animation = 'fromTop 2s ease'
  playerOne.textContent = `Player X is Playing`
  currentPlayer = 'X'
  playerOneName.contentEditable = true;
  playerTwoName.contentEditable = true;
  playerOneContainer.style.border = '2px solid white'
}

function displayPlayerTwo() {
  askContainer.style.display = "none"
  tileContainer.style.animation = 'fromTop 2s ease'
  playerTwo.textContent = `Player O  is Playing`
  currentPlayer = 'O'
  playerOneName.contentEditable = true;
  playerTwoName.contentEditable = true;
  playerTwoContainer.style.border = '2px solid white'
}
xBtn.addEventListener('click', displayPlayerOne)
oBtn.addEventListener('click', displayPlayerTwo)

//loop for the tile and clicking the tiles
tiles.forEach((tile, index) => {
  tile.addEventListener('click', () => playerAction(tile,index))
})

const checkAction = (tile) => {
  if (tile.textContent === 'X' || tile.textContent === 'O') {
    return false;
  }
  return true
}

//game in action 
const playerAction = (tile, index) => {
  if (checkAction(tile) && activeGame) {
    tile.textContent = currentPlayer
    viewBoard(index)
    checkWin()
    changePlayer()
  }
}


//change current player
const changePlayer = () => {
  if (currentPlayer === 'X') {
    playerOneContainer.style.border = '2px solid white'
    playerOne.textContent = `Player X is Playing`
  } else {
    playerTwoContainer.style.border = '2px solid white'
    playerTwo.textContent = `Player O is Playing`
  }
}

