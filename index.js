var body = document.body

//check who will play first and display
var askContainer = document.getElementById('ask-player')
const xBtn = document.getElementById('x-button')
const yBtn  = document.getElementById('y-button')
function displayCurrentPlayer() {
  if (askContainer.style.display === "block") {
    askContainer.style.display = "none"
  } else {
    askContainer.style.display = "block"
  }
}
xBtn.addEventListener('click', displayCurrentPlayer)
yBtn.addEventListener('click', displayCurrentPlayer)