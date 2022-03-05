let scoreX = 0
let scoreO = 0
let count = 0
let activeGame = false
let currentPlayer = 'X'
let historyBoard = [
  ['','',''],
  ['','',''],
  ['','','']
]

//check who will play first and display
const askContainer = document.getElementById('ask-player')
const xBtn = document.getElementById('x-button')
const oBtn  = document.getElementById('o-button')
const playerOneContainer = document.getElementById('player-one')
const playerTwoContainer = document.getElementById('player-two')
const playerOne = document.getElementById('current-player')
const playerTwo = document.getElementById('current-player-two')
const playerOneName = document.getElementById('player-one-name')
const playerTwoName = document.getElementById('player-two-name')

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


//clicking the tiles
const tileContainer = (document.getElementById('tile-container'))
const tiles = Array.from(document.querySelectorAll('.tile'))
tiles.forEach((tile, index) => {
  tile.addEventListener('click', () => playerAction(tile,index))
})


//check if tile have content or not
function checkAction(tile) {
  if (tile.textContent === 'X' || tile.textContent === 'O') {
    return false;
  }
  return true
}


//detailed move history
let movesArray = []
let movesArrayX = []
const movesLocation = ['top left', 'top middle', 'top right', 'middle left', 'middle', 'middle right', 'bottom left', 'bottom middle', 'bottom right']
const moveHistory = document.getElementById('moveHistory')
const moveHistoryX = document.getElementById('moveHistoryX')
function detailedHistory (index) {
  if (currentPlayer === 'O') {
    movesArray.push(`Player ${currentPlayer} marked the ${movesLocation[index]} tile <br>`)
    moveHistory.style.animation = 'fade 1.5s'
    moveHistory.style.display = 'block'
    moveHistory.innerHTML = movesArray
  } else {
    movesArrayX.push(`Player ${currentPlayer} marked the ${movesLocation[index]} tile <br>`)
    moveHistoryX.style.animation = 'fade 1.5s'
    moveHistoryX.style.display = 'block'
    moveHistoryX.innerHTML = movesArrayX
  }
}


//game in action 
function playerAction(tile, index) {
  if (checkAction(tile) && activeGame) {
    tile.textContent = currentPlayer
    board[index] = currentPlayer
    historyBoard[0][0] = board[0]
    historyBoard[0][1] = board[1]
    historyBoard[0][2] = board[2]
    historyBoard[1][0] = board[3]
    historyBoard[1][1] = board[4]
    historyBoard[1][2] = board[5]
    historyBoard[2][0] = board[6]
    historyBoard[2][1] = board[7]
    historyBoard[2][2] = board[8]
    detailedHistory(index)
    checkWin()
    changePlayer()
  }
}


//change current player
function changePlayer() {
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
const winnerContainer = document.getElementById('show-winner')
const winnerText = document.getElementById('winner-text')

function checkWin() {

  function playerOWin() {
    if(historyBoard[0][0] == "O" && historyBoard[0][1] == "O" && historyBoard[0][2] == "O"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[1][0] == "O" && historyBoard[1][1] == "O" && historyBoard[1][2] == "O" ){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[2][0] == "O" && historyBoard[2][1] == "O" && historyBoard[2][2] == "O"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][0] == "O" && historyBoard[1][0] == "O" && historyBoard [2][0] == "O"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][1] == "O" && historyBoard[1][1] == "O" && historyBoard [2][1] == "O"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][2] == "O" && historyBoard[1][2] == "O" && historyBoard [2][2] == "O"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][0] == "O" && historyBoard[1][1] == "O" && historyBoard[2][2] == "O"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][2] == "O" && historyBoard[1][1] == "O" && historyBoard[2][0] == "O"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    }
  }
  playerOWin()

  function playerXWin() {
    if(historyBoard[0][0] == "X" && historyBoard[0][1] == "X" && historyBoard[0][2] == "X"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[1][0] == "X" && historyBoard[1][1] == "X" && historyBoard[1][2] == "X" ){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[2][0] == "X" && historyBoard[2][1] == "X" && historyBoard[2][2] == "X"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][0] == "X" && historyBoard[1][0] == "X" && historyBoard [2][0] == "X"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][1] == "X" && historyBoard[1][1] == "X" && historyBoard [2][1] == "X"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][2] == "X" && historyBoard[1][2] == "X" && historyBoard [2][2] == "X"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][0] == "X" && historyBoard[1][1] == "X" && historyBoard[2][2] == "X"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    } else if(historyBoard[0][2] == "X" && historyBoard[1][1] == "X" && historyBoard[2][0] == "X"){
      showWinner(currentPlayer === 'X' ? PlayerXWon : PlayerOWon)
      activeGame = false;
      return
    }
  }
  playerXWin()

  function checkTie() {
    if (!historyBoard[0].includes('') && !historyBoard[1].includes('') 
        && !historyBoard[2].includes('')) 
      {
      showWinner(Tie)
      activeGame = false;
    }
  }
  checkTie()
}

//show winner container
const score = document.getElementById('score')
const PlayerOWon = 'Player O Won'
const PlayerXWon = 'Player X Won'
const Tie = 'TIE'
const resetBtn = document.getElementById('resetBtn')
const playAgainBtn = document.getElementById('playAgainBtn')
const historyBtn = document.getElementById('historyBtn')

const showWinner = (player) => {
const history = document.getElementById('history')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const score_O = document.getElementById('score-O')
const score_X = document.getElementById('score-X')

resetBtn.style.display = 'none'
playerOneContainer.style.border = 'none'
playerTwoContainer.style.border = 'none'
winnerContainer.style.display = 'flex'
score.style.display = 'block'
prev.style.display = 'none'

  switch (player) {
    case PlayerOWon:
      scoreO++
      winnerText.textContent = `Player O Wins`
      score_O.textContent = `Player O: ${scoreO}`
      score_X.textContent = `Player X: ${scoreX}`
      break;
    case PlayerXWon:
      scoreX++
      winnerText.textContent = `Player X Wins`
      score_O.textContent = `Player O: ${scoreO}`
      score_X.textContent = `Player X: ${scoreX}`
      break;
    case Tie:
      winnerText.textContent = `TIE!`
      scoreO++
      scoreX++
      score_O.textContent = `Player O: ${scoreO}`
      score_X.textContent = `Player X: ${scoreX}`
  }

  //let the user play again
const newGame = () => {
  count = 0
  winnerContainer.style.display = 'none'
  playerOneContainer.style.border = 'none'
  playerTwoContainer.style.border = 'none'
  playerOne.textContent = `Player X`
  playerTwo.textContent = `Player O`
  playerOneName.textContent = 'nickname';
  playerTwoName.textContent = 'nickname';
  askContainer.style.display = 'block'
  askContainer.style.animation = '1s fromTop'
  
  movesArray = []
  movesArrayX = []
  moveHistory.innerHTML = ''
  moveHistoryX.innerHTML = ''
  board = ['','','','','','','','','']
  historyBoard = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
  chooseFirstPlayer()

  tiles.forEach(tile => {
    tile.innerHTML = ''
  })
  score.style.display = 'block'
}
playAgainBtn.addEventListener('click', newGame)

  //show game's history
  function gameHistory() {
    scoreX = 0
    scoreO = 0
    activeGame = false
    winnerContainer.style.display = 'none'
    prev.style.display = 'inline-block'
    next.style.display = 'inline-block'
    history.style.display = 'block'
    resetBtn.style.display = 'block'

    count = 0
    tiles.forEach(tile => {
      tile.innerHTML = ''
    })

    function previous() {
      next.style.display = 'inline-block'
      if (count === 0) {
        count = board.length
      }
      count = count - 1
      tiles[count].textContent = ''

      if (count === 0) {
        prev.style.display = 'none'
      }
    }
    prev.addEventListener('click', previous)

    function nextMove() {
      prev.style.display = 'inline-block'
      count = count + 1
      tiles[count - 1].textContent = board[count - 1]

      if (count === board.length) {
        next.style.display = 'none'
      }
    }
    next.addEventListener('click', nextMove)
  }
  historyBtn.addEventListener('click', gameHistory)
}


//reset game
const askReset = document.getElementById('ask-reset')
const yesBtn = document.getElementById('yes-button')
const noBtn = document.getElementById('no-button')

function reset() {
  count = 0
  activeGame = false
  askReset.style.display = 'block'

  const cancel = () => {
    askReset.style.display = 'none'
    activeGame = true
  }
  noBtn.addEventListener('click', cancel)

  function resetGame() {
    count = 0
    movesArray = []
    movesArrayX = []
    moveHistory.innerHTML = ''
    moveHistoryX.innerHTML = ''
    prev.style.display = 'none'
    next.style.display = 'none'
    score.style.display = 'none'
    askReset.style.display = 'none'
    playerOneContainer.style.border = 'none'
    playerTwoContainer.style.border = 'none'
    playerOne.textContent = `Player X`
    playerTwo.textContent = `Player O`
    playerOneName.textContent = 'nickname';
    playerTwoName.textContent = 'nickname';
    scoreX = 0
    scoreO = 0
    board = ['','','','','','','','','']
    historyBoard = [
      ['','',''],
      ['','',''],
      ['','','']
    ]
    askContainer.style.display = 'block'
    askContainer.style.animation = '1s fromTop'
    chooseFirstPlayer()
    resetBtn.style.display = 'none'

    tiles.forEach(tile => {
      tile.innerHTML = ''
    })
  }
  yesBtn.addEventListener('click', resetGame)
}
resetBtn.addEventListener('click', reset)
let board = ['','','','','','','','','']
