const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
var timerEl = document.getElementById("count");
var questionContainerEl = ("question-container");
var initials = document.getElementById("initials");
var hidden = document.getElementsByClassName("hide");
var question = document.getElementById("question");
var currentQuestion = 0;
var timeLeft = 60;
var answerEl = document.getElementById("answer-buttons");
var score = document.getElementById("score");
var scoreCount = 1;
var submit = document.getElementById("submit");
var lastScore = document.getElementById("last-score");
var playerName = document.getElementById("player-name");
var highScoreArray = [];
var highScore = {
  initials: initials,
  score: score
}

// When user clicks the start button the startGame functions begins. This starts the timer and reveals the first questions.
startButton.addEventListener("click", startGame);


// Starts the game by calling the timer and display question functions.
function startGame () {
  timerEquals();
  displayQuestions();
  
}


// Timer that begins when the start button is pressed. Counts down from 1min. 5 seconds are deducted when a question is answered wrong.
function timerEquals() {
  var timeInterval = setInterval(function () {
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

// Assess the answer to see if it is correct. If incorrect remove 5 seconds from timer.
function checkAnswer() {

  if (this.dataset.value !== questions[currentQuestion].correct){
    timeLeft = timeLeft - 5
    // timerEquals()
  } else {
    score.textContent = ("Score: " + (scoreCount++));
  }
  nextButton.classList.remove("hide");
  nextButton.addEventListener("click", setNextQuestion); 
}

// Displays questions and multiple choice answers. Cycles through four questions using a for loop.
function displayQuestions () {
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

// Moves on to the next question after an answer is selected using the 'next' button. If there isn't another question the quiz ends.
function setNextQuestion() {
  if (currentQuestion === questions.length - 1) {
    endGame();
  }else {
  currentQuestion++;
  displayQuestions();
   }
  }

  //  Called to end the game is the last question is answer or the time runs out.
function endGame() {
  initials.classList.remove("hide");
  lastScore.classList.remove("hide");
  playerName.classList.remove("hide");
}

// Saves and displays score (not working correctly).
function renderHighScore() {
  score.localStorage.getItem("score");
  initials.localStorage.getItem("initials");
}

lastScore.textContent = "Last Score: " + lastScore;
playerName.textContent = "Player Name: " + playerName;

submit.addEventListener("click", function(event){
  event.preventDefault();
  var lastScore = document.querySelector("#last-score").value;
  var playerName = document.querySelector("#player-name").value;

  localStorage.setItem("last-score", lastScore);
  localStorage.setItem("player-name", playerName);
  renderHighScore();
})

// List of questions, multiple choice questions and the correct answer.
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
    },

    {
      question: "What is jQuery?",
      choices: ["Another form of JavaScript", "What JavaScript used to be called", "A fast, small, and feature-rich JavaScript library", "A type of CSS"],
      correct: "A fast, small, and feature-rich JavaScript library"
    }


    
    ]

