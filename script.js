const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"]
const BLACK_KEYS = ["s", "d", "g", "h", "j"]

const keys = document.querySelectorAll(".key")
const whiteKeys = document.querySelectorAll(".key.white")
const blackKeys = document.querySelectorAll(".key.black")

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key))
})

document.addEventListener("keydown", (e) => {
  // holding the button
  if (e.repeat) return
  // get the key pressed
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  // get the audio element based on the data-note property for the key pressed
  const noteAudio = document.getElementById(key.dataset.note)
  // restart the file from the beginning then replaying it
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add("active")
  // fired as soon as the audio click finishes playing
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active")
  })
}
