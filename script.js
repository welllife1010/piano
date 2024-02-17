const keys = document.querySelectorAll(".key")

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key))
})

function playNote(key) {
  // get the audio element based on the data-note property for the key pressed
  const noteAudio = document.getElementById(key.dataset.note)
  // restart the file from the beginning then replaying it
  noteAudio.currentTime = 0
  noteAudio.play()
}
