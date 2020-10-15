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
    question: "What does var stand for?",
    options: ["Variable", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},
{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},
{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},{
    question: "What does DOM stand for?",
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

    // mainDiv.classList.add("hide");
    
    // questionDisplay.classList.add("hide-show");
    // triggerQuestion()
})


function triggerQuestion() {
    theAsk.textContent = questionsArray[next].question;
    answer1Btn.textContent = questionsArray[next].options[0];
    answer2Btn.textContent = questionsArray[next].options[1];
    answer3Btn.textContent = questionsArray[next].options[2];
    answer4Btn.textContent = questionsArray[next].options[3];
}

button.forEach(function (answers){
    answers.addEventListener("click", function (eventclk){
        var btneL = eventclk.target;
    }) } )
    
    //         if (btneL.textContent !== questionsArray[next].correct){
    //             secondsLeft --;
    //         } if (next < questionsArray.length -1){
    //             next++
    //             triggerQuestion()
    //         } else {
    //             clearInterval(timeInterval)
    //         }
    //     }
// $("#startQuiz").on("click", function() {

// timerDisplay()
// })


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


