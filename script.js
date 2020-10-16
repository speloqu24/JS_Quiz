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
    question: "Q5",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "Q6?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "Q7",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "Q8",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},
]

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
    }, 1000);
}

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
    // answer4Btn.addEventListener("click", function(){
    //     next++
    //     theAsk.textContent=questionsArray[next].question;
    // });
    // answer4Btn.addEventListener("click", questionIterate);
} 

function questionIterate () {
    next++
    theAsk.textContent = questionsArray[next].question;
    // answer1Btn.textContent = questionsArray[next].question[0];
    // answer2Btn.textContent = questionsArray[next].question[1];
    // answer3Btn.textContent = questionsArray[next].question[2];
    // answer4Btn.textContent = questionsArray[next].options[3];
   
}


// Create score variables
// var score = 0; (start at 0)
// for loop to increase score by 1 (++) if correct 


// first question 

// If statement for question 
// function setTimer (){
//     var timerInterval = setInterval (function () {
//         secondsLeft --; 
//         .textContent = "Timer: " + secondsLeft }
//         // if (userGuess == true) {
//             // trigger function for next question 
            
//             // user clicks on their selection = var userGuess




// Global Variables
// var start time
// var time left

// Declare Functions 

// function runTime () {}
// function askQuestions () {}


