const startButton = document.getElementById("start-button")
var timerEl = document.getElementById("count")
var questionContainerEl = document.getElementById("question-container")
startButton.addEventListener("click", startGame)


function startGame () {
    console.log("Started")
    questionContainerEl.classList.remove("hide")
}

function setNextQuestion() {

}

function questions () {
    
}