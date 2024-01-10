const timeDisplay = document.querySelector("#time-display")
const startBtn = document.querySelector("#start-btn")
const pauseBtn = document.querySelector("#pause-btn")
const resetBtn = document.querySelector("#reset-btn")
startTime = 0
elapsedTime = 0
currentTime = 0
paused = true
let intervalID
hrs = 0
mins = 0
secs = 0

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false
    startTime = Date.now() - elapsedTime

    intervalID = setInterval(updateTime, 75)
  }
})
pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true
    elapsedTime = Date.now() - startTime
    clearInterval(intervalID)
  }
})
resetBtn.addEventListener("click", () => {
  paused = true
  startTime = 0
  elapsedTime = 0
  currentTime = 0
  paused = true
  hrs = 0
  mins = 0
  secs = 0

  timeDisplay.textContent = "00:00:00"
})

function updateTime() {
  elapsedTime = Date.now() - startTime

  secs = Math.floor((elapsedTime / 1000) % 60)
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

  secs = pad(secs)
  mins = pad(mins)
  hrs = pad(hrs)

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit
  }
}
