const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
var timerEl = document.getElementById("count");
var answerButtons = document.getElementsByClassName("button");
var questions = document.getElementById("question");
var questionContainerEl = ("question-container");
// var state = element.getAttribute("data-state");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var hidden = document.getElementsByClassName("hide");
var question = document.getElementById("question");
var currentQuestion = 0;
var timeLeft = 60;
// questions[0].questions;


// When user clicks the start button the startGame functions begins. This starts the timer and reveals the first questions.
startButton.addEventListener("click", startGame);

function timerEquals() {
  var timeInterval = setInterval(function () {
    
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = "You are out of time!";
      clearInterval(timeInterval);
    }
  }, 1000);

}
function checkAnswer() {

  console.log(this.dataset.value);
  if (this.dataset.value !== questions[currentQuestion].correct){
    timeLeft = timeLeft - 5
    timerEquals()
  }
  nextButton.classList.remove("hide");
  nextButton.addEventListener("click", setNextQuestion);
  
}

function startGame () {
  timerEquals()
  var answerEl = document.getElementById("answer-buttons");
    question.classList.remove("hide");
    question.textContent = questions[currentQuestion].question;
    answerEl.textContent ="";
    for (var i = 0; i < questions[currentQuestion].choices.length; i++){
      var buttonEl = document.createElement("button");
      buttonEl.textContent = questions[currentQuestion].choices[i];
      buttonEl.setAttribute("class", "button");
      buttonEl.setAttribute("data-value", questions[currentQuestion].choices[i]);
      buttonEl.addEventListener("click", checkAnswer);
      answerEl.appendChild(buttonEl);
    }
}


function setNextQuestion() {
   currentQuestion++
   startGame()
}

var questions = [
    {
        question: "What does HTML stand for??",
        choices:["Hypertext Map Language", "Hypertext Markup Language", "Happy Meerkats Laughing", "High Markup Language"],
        correct: "Hypertext Markup Language"
    },
    
    {
        question: "What does JS stand for?",
        choices:["Java", "JavaSource", "JoyScript", "JavaScript"],
        correct: "JavaScript"
    },
    
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheet","Cats Singing Sade","Cascading Style Sheep","Code Style Sheet"],
        correct: "Cascading Style Sheet"
    }
    
    ]

    console.log(questions);
    console.log(questions[0]);




// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
