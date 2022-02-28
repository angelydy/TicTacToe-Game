//mute button for music
const music = document.getElementById('bg-music')
const muteBtn = document.getElementById('mute')
const unmuteBtn = document.getElementById('unmute')
function mute() {
  if (music.muted !== false) {
    music.muted = false
    muteBtn.style.display = 'none'
    unmuteBtn.style.display = 'block'
  } else {
    music.muted = true
    unmuteBtn.style.display = 'none'
    muteBtn.style.display = 'block'
  }
}
muteBtn.addEventListener('click', mute)
unmuteBtn.addEventListener('click', mute)