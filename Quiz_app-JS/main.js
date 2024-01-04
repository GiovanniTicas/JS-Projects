const startButton = document.querySelector("#start-btn")
const questionContainer = document.querySelector("#question_container")
const nextButton = document.querySelector("#next-btn")
const questionElement = document.querySelector("#question")
const answerButtons = document.querySelector("#answer-buttons")
let shuffledQuestions, currentQuestion

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestion++
  setNextQuestion()
})

function startGame() {
  console.log("test")
  startButton.classList.add("hide")
  questionContainer.classList.remove("hide")
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestion = 0
  setNextQuestion()
  //   nextButton.classList.remove("hide")
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestion])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtons.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
]
