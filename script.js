// TEST JAVA
// alert("this is working");

var mainDiv = document.getElementById("main-div");
var startQuiz = document.getElementById("startQuiz");

// Timer variable
var timerDiv = document.getElementById("timer-div");

// The question-answer variables
var questionDisplay = document.querySelector("#questionDisplay");
var theAsk = document.querySelector("#theAsk");

// question index
var next = 0;

// score
var score = 0;
var scoreCount = document.getElementById("score-div");

// answer btn selection
var button = document.querySelectorAll("questions");

var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");


// GLOBAL VARIABLES - quiz questions stored in global memory 8 questions
var questionsArray = [ {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},
{
    question: "What do we use to store global variables?",
    options: ["gl", "var", "gv", "vari"],
    correct: "var",
},
{
    question: "When does a function run in JS?",
    options: ["Not until user tells it to", "As soon as you write it", "When it's called ()", "At the very end"],
    correct: "When it's called",
},
{
    question: "How is JS added to HTML?",
    options: ["<scripthtml>", "<js>", "<javascript>", "<script>"],
    correct: "<script>",
},{
    question: "Q5?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "Q6?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "Q7?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "Q8?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},
]

// HIDES ENTIRE QUESTIONDISPLAY DIV
document.getElementById("questionDisplay").style.visibility='hidden';

// HIDES SCORE BOARD TILL FIRST QUESTION
scoreCount.textContent = "Score: " + next
document.getElementById("score-div").style.visibility='hidden';


// START QUIZ WITH TIMER FUNCTION
function timerDisplay() {
    var secondsLeft = 120;
    var timeInterval = setInterval(function() {
        timerDiv.textContent = "Timer: " + secondsLeft
        secondsLeft--;
        if (secondsLeft === 0) {
            alert ("YOU'VE RAN OUT OF TIME!")
            clearInterval(timeInterval)
        }
    }, 1100);
}

// WHAT HAPPENS WITH TIME RUNS OUT? 
// Instead of an alert, clear div timerDiv.textContent="";


startQuiz.addEventListener("click", function (){
    document.getElementById("main-div").style.visibility='hidden';
    document.getElementById("questionDisplay").style.visibility='visible';
    timerDisplay()
    triggerQuestion();
})


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

function questionIterate (event) {
    next++
    triggerQuestion(); 
    document.getElementById("score-div").style.visibility='visible';
    
    event.preventDefault() // prevents any default button behavior

    var userAnswer = event.target.textContent
    checkAnswer(userAnswer);
}

function checkAnswer (userAnswer) {
    if (userAnswer = questionsArray[next].correct) {
        console.log(userAnswer);
        alert ("You got it right!")
    } else { alert ( "wrong"
    )} }

    // get current questions correct answer and compare it to the answer that's passed in. If they are the same
//     // increase the score by one
//     // if they're not the same decrease the time by -10
// }

// function userSelection (){
//     score = score + 1
// }

// function userSelection (){
//     scoreCount.textContent = "Score: " + score
//     var answers = questionsArray[""].correct
//     if (answers == questionsArray[""].options[correct]) {
//         score++
//     }
// }


// Create score variables
// var score = 0; (start at 0)
// for loop to increase score by 1 (++) if correct 




// Global Variables
// var start time
// var time left

// Declare Functions 

// function runTime () {}
// function askQuestions () {}


