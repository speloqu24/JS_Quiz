// TEST JAVA
// alert("this is working");

// VARIABLE DECLARATION : Storing variables in global memory
var mainDiv = document.getElementById("main-div");
var startQuiz = document.getElementById("startQuiz");
var endScreenDiv = document.getElementById("endScreen")
var timerDiv = document.getElementById("timer-div");
var theAsk = document.querySelector("#theAsk");
var scoreCount = document.getElementById("score-div");
var button = document.querySelectorAll("questions");
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");

var secondsLeft = 90;
var next = 0;
var score = 0;
var highScore = 0;

var questionsArray = [ {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "this answer is wrong", "DoCT", "Dive into modes"],
    correct: "Document Object Model",
},
{
    question: "What do we use to store global variables?",
    options: ["gl", "var", "gv", "vari"],
    correct: "var",
},
{
    question: "When does a function run in JS?",
    options: ["{}", "#", "[]", "()"],
    correct: "()",
},
{
    question: "How is JS added to HTML?",
    options: ["<scripthtml>", "<js>", "<javascript>", "<script>"],
    correct: "<script>",
},{
    question: "What are the three pieces to a for loop?",
    options: ["counter, change, index", "counter, condition, index", "change, counter, iterator ", "counter, condition, iterator"],
    correct: "counter, condition, iterator",
},{
    question: "An 'alert' pops up, and text input from the user is requested?. What is that called?",
    options: ["prompt", "confirm", "bolean", "variable"],
    correct: "prompt",
},{
    question: "What company developed JavaScript?",
    options: ["Apple", "Microsoft", "Netscape", "IBM"],
    correct: "Netscape",
},{
    question: "How can you convert a string to an integer?",
    options: ["percent", "parseInt", "parse#", "percInt"],
    correct: "parseInt",
},
]

// Hide elements
document.getElementById("questionDisplay").style.visibility='hidden';
document.getElementById("score-div").style.visibility='hidden';
document.getElementById("endScreen").style.visibility='hidden';
scoreCount.textContent = "Score: " + score++

// START QUIZ WITH TIMER FUNCTION
function timerDisplay() {
    var timeInterval = setInterval(function() {
        timerDiv.textContent = "Timer: " + secondsLeft
        secondsLeft--;
        if (secondsLeft === 0 || next === questionsArray.length) {
            clearInterval(timeInterval)
            endScreen()
        }
    }, 500);
}
// LISTENING for the onclick to start the quiz
startQuiz.addEventListener("click", function (event){
    event.preventDefault();
    document.getElementById("main-div").style.visibility='hidden';
    document.getElementById("questionDisplay").style.visibility='visible';
    timerDisplay()
    triggerQuestion();
})

// var user = userInput.value.trim()
//     localStorage.setItem("user", JSON.stringify(user);)
//     console.log(user)

// // LISTENING for the onclick to store user name in memory
startQuiz.addEventListener("click", function (event){
    event.preventDefault();
    var user = userInput.value.trim()
    userNameDisplay.textContent= "Name: " + user;
    // localStorage.setItem("user", JSON.stringify(user);)
    console.log(user)
})

// TRIGGER QUESTION FUNCTION - Displays the question and listens for an onclick
function triggerQuestion() {
    theAsk.textContent = questionsArray[next].question;
    answer1Btn.textContent = questionsArray[next].options[0];
    answer1Btn.addEventListener("click", questionIterate);
    answer2Btn.textContent = questionsArray[next].options[1];
    answer2Btn.addEventListener("click", questionIterate);
    answer3Btn.textContent = questionsArray[next].options[2];
    answer3Btn.addEventListener("click", questionIterate);
    answer4Btn.textContent = questionsArray[next].options[3];
    answer4Btn.addEventListener("click", questionIterate);
} 

// QUESTION ITERATE FUNCTION - Iterates through the question index and listens for an event.
function questionIterate (event) {
    event.preventDefault() 
    var answer = event.target.textContent
    checkAnswer(answer);
    console.log(answer);
    next++
    triggerQuestion(); 
}

// CHECK ANSWER FUNCTION - Listens for the answer event and compares it to the correct answer
// if it's correct score increase by 1 if it's wrong time decrements by 10
function checkAnswer (answer) {
    if (answer === questionsArray[next].correct) {
        scoreCount.textContent = "Score: " + score++
    } else { secondsLeft -= 10; 
    } }

// ENDSCREEN FUNCTION - Hide questions and timer while displaying endscreen and score div
    function endScreen () {
    document.getElementById("questionDisplay").style.visibility='hidden';
    document.getElementById("endScreen").style.visibility='visible';
    document.getElementById("score-div").style.visibility='visible';
    document.getElementById("timer-div").style.visibility='hidden';

    }



var userInput = document.querySelector("#first-name");
var userNameDisplay = document.querySelector("#first-name-display");
// userNameDisplay.textContent = "Name: " + userInput;
