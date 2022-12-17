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
questions[0].questions;


// When user clicks the start button the startGame functions begins. This starts the timer and reveals the first questions.
startButton.addEventListener("click", startGame);

function startGame () {
    console.log("Started");
    // question.classList.remove("hide");
    // question.textContent = "What does CSS stand for?"
    // A.textContent = "Cascading Style Sheet";
    // B.textContent = "Cats Singing Sade";
    // C.textContent = "Cascading Style Sheep";
    // D.textContent = "Code Style Sheet";

    var timeLeft = 60;
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

//   for (questions; )
}

nextButton.addEventListener("click", setNextQuestion);

function setNextQuestion() {
    question.textContent = "What does HTML stand for?";
    A.textContent = "Hypertext Map Language";
    B.textContent = "Hypertext Markup Language";
    C.textContent = "Happy Meerkats Laughing";
    D.textContent = "High Markup Language";
}

var questions = [
    {
        question: "What does HTML stand for??",
        A:"Hypertext Map Language",
        B: "Hypertext Markup Language",
        C: "Happy Meerkats Laughing",
        B: "High Markup Language",
        correct: "B",
    },
    
    {
        question: "What does JS stand for?",
        A:"Java",
        B: "JavaSource",
        C: "JoyScript",
        D: "JavaScript", 
    },
    
    {
        question: "What does CSS stand for?",
        A:"Cascading Style Sheet",
        B: "Cats Singing Sade",
        C: "Cascading Style Sheep",
        D: "Code Style Sheet", 
        correct: "A",
    }
    ]

// Once the first question is answered a message appears either "right" or wrong. If wrong time is deducted from the total time. The next question is displayed.


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
