const body = document.body
const tiles = Array.from(document.querySelectorAll('.tile'))
const playerOneContainer = document.getElementById('player-one')
const playerTwoContainer = document.getElementById('player-two')
const playerOne = document.getElementById('current-player')
const playerTwo = document.getElementById('current-player-two')
const playerOneName = document.getElementById('player-one-name')
const playerTwoName = document.getElementById('player-two-name')
const winnerContainer = document.getElementById('show-winner')
const winnerText = document.getElementById('winner-text')
const resetBtn = document.getElementById('resetBtn')

let currentPlayer = 'X'
let board = ['','','','','','','','','']
let activeGame = false
const PlayerOWon = 'Player O Won'
const PlayerXWon = 'Player X Won'
const Tie = 'TIE'

//check who will play first and display
const askContainer = document.getElementById('ask-player')
const tileContainer = document.getElementById('tile-container')
const xBtn = document.getElementById('x-button')
const oBtn  = document.getElementById('o-button')

function chooseFirstPlayer() {
  function displayPlayerOne() {
    resetBtn.style.display = 'block'
    activeGame = true
    askContainer.style.display = "none"
    tileContainer.style.animation = 'fromTop 2s ease'
    playerOne.textContent = `Player X is Playing`
    playerTwo.textContent = `Player O`
    currentPlayer = 'X'
    playerOneName.contentEditable = true;
    playerTwoName.contentEditable = true;
    playerOneContainer.style.border = '2px solid white'
    playerTwoContainer.style.border = 'none'
  }
  xBtn.addEventListener('click', displayPlayerOne)
  
  function displayPlayerTwo() {
    activeGame = true
    resetBtn.style.display = 'block'
    askContainer.style.display = "none"
    tileContainer.style.animation = 'fromTop 2s ease'
    currentPlayer = 'O'
    playerOneName.contentEditable = true;
    playerTwoName.contentEditable = true;
    playerOneContainer.style.border = 'none'
    playerTwoContainer.style.border = '2px solid white'
  }
  oBtn.addEventListener('click', displayPlayerTwo)
}
chooseFirstPlayer()

//loop for the tile and clicking the tiles
tiles.forEach((tile, index) => {
  tile.addEventListener('click', () => playerAction(tile,index))
})

//check if tile have content or not
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

//updates the board
const viewBoard = (index) => {
  board[index] = currentPlayer
}

//change current player
const changePlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    playerTwoContainer.style.border = '2px solid white'
    playerTwo.textContent = `Player O is Playing`
    playerOne.textContent = `Player X`
    playerOneContainer.style.border = 'none'
  } else {
    currentPlayer = 'X'
    playerOneContainer.style.border = '2px solid white'
    playerOne.textContent = `Player X is Playing`
    playerTwo.textContent = `Player O`
    playerTwoContainer.style.border = 'none'
  }
}

//for checking the winner
const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function checkWin() {
  let winner = false;
  for (let i = 0; i <= 7; i++) {
    const win = winningConditions[i]
    const x = board[win[0]]
    const y = board[win[1]]
    const z = board[win[2]]
    if (x === '' || y === '' || z === '') {
      continue
    }
    if (x === y && y === z) {
      winner = true
      break
    }
  }

  if (winner) {
    showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
    activeGame = false;
    return
  }

  if (!board.includes(''))
  showWinner(Tie)
}

//show winner
const showWinner = (player) => {
  resetBtn.style.display = 'none'
  const playAgainBtn = document.getElementById('playAgainBtn')
  const historyBtn = document.getElementById('historyBtn')
  playerOneContainer.style.border = 'none'
  playerTwoContainer.style.border = 'none'
  winnerContainer.style.display = 'flex'

  switch (player) {
    case PlayerOWon:
      winnerText.textContent = `Player O Won`
      break;
    case PlayerXWon:
      winnerText.textContent = `Player X Won`
      break;
    case Tie:
      winnerText.textContent = `TIE!`
  }

  const newGame = () => {
    location.reload()
  }
  playAgainBtn.addEventListener('click', newGame)
}

//reset game
const askReset = document.getElementById('ask-reset')
const yesBtn = document.getElementById('yes-button')
const noBtn = document.getElementById('no-button')

function reset() {
  askReset.style.display = 'block'

  const cancel = () => {
    askReset.style.display = 'none'
  }
  noBtn.addEventListener('click', cancel)

  const resetGame = () => {
    askReset.style.display = 'none'
    playerOneContainer.style.border = 'none'
    playerTwoContainer.style.border = 'none'
    playerOne.textContent = `Player X`
    playerTwo.textContent = `Player O`
    playerOneName.textContent = 'nickname';
    playerTwoName.textContent = 'nickname';
    board = ['','','','','','','','','']
    activeGame = true
    askContainer.style.display = 'block'
    askContainer.style.animation = '1s fromTop'
    chooseFirstPlayer()

    tiles.forEach(tile => {
      tile.textContent = ''
    })
  }
  yesBtn.addEventListener('click', resetGame)
}
resetBtn.addEventListener('click', reset)

