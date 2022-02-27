var body = document.body

//check who will play first and display
const askContainer = document.getElementById('ask-player')
const tileContainer = document.getElementById('tile-container')
const xBtn = document.getElementById('x-button')
const yBtn  = document.getElementById('y-button')
function displayCurrentPlayer() {
  if (askContainer.style.display === "block") {
    askContainer.style.display = "none"
    tileContainer.style.animation = 'fromTop 2s ease'
  } else {
    askContainer.style.display = "block"
  }
}
xBtn.addEventListener('click', displayCurrentPlayer)
yBtn.addEventListener('click', displayCurrentPlayer)