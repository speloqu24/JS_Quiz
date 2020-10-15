//Psuedo 

// TEST JAVA
// alert("this is working");

var ruleDiv = $("<div>");
var timerDiv = document.getElementById("timer-div");
var questionDisplay = document.querySelector("#question")
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");



// JS QUERY - Creating elements, assigning text, appending.
// "maindiv" stores the H1 text content of "Welcome" to global memory and append to DOM
$("#main-div").html("<h1>");
$("#main-div").append("Welcome to the BootCamp JS Quiz!")

ruleDiv.text("This quiz is going to test your fundamental understanding of JavaScript. You have 90 seconds to answer all of the questions correctly. If a question is answered in correctly 5 seconds will be removed from the timer, limiting your time even more. When the timer reaches 0 your score will be displayed. Goodluck!");
$("#main-div").append(ruleDiv);



// GLOBAL VARIABLES - quiz questions stored in global memory
var questions = [ {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
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
},
{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Div Object Management", "Document Object Management", "Div Object Model"],
    correct: "Document Object Model",
},
]


function questionDisplay() {
    
}


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

$("#startQuiz").on("click", function() {
timerDisplay()
})


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


