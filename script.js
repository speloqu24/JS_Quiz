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
    document.getElementById("score-div").style.visibility='visible';
    
    event.preventDefault() // prevents any default button behavior
    
    var answer = event.target.textContent
    checkAnswer(answer);
    console.log(answer);
    next++
    triggerQuestion(); 
}

function checkAnswer (answer) {
    if (answer === questionsArray[next].correct) {
        alert ("Correct!")
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


