//Global Variables-----------------------------//
var questionNumber = 1;
console.log(questionNumber)
//---------------------------------------------//
//QuerySelectors-------------------------------//
//Question QuerySelectors----------------------//

var qNum = document.querySelector(".qNum")
var question = document.querySelector(".question")
var optionOne = document.querySelector("#o1")
var optionTwo = document.querySelector("#o2")
var optionThree = document.querySelector("#o3")
var optionFour = document.querySelector("#o4")

//-------------------------------------------------------------------------------------------------------//
//Score, Start Button, and Countdown---------------------------------------------------------------------//
//---------------------------------------------//
//Score----------------------------------------//

var pointsEl = document.querySelector("#points")
var points = 0;

    //resets points to 0 on page refresh//
    pointsEl.textContent = points;

//Adds points based on how much time is left, 
//the more time the more points are awarded
function scorePoints() {
    var score = secondsLeft;
    points = score + points;
    pointsEl.textContent = points;
}

//---------------------------------------------//
//Start Quiz Button----------------------------//

var startButton = document.querySelector(".startbutton")

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startButton.textContent = "Start"
    clearScTim();
    startButton.disabled = true;
    startTimer();
    showQuestion();

}

//clear score and time//
function clearScTim () {
    points = 0;
    secondsLeft = 10;
}

//---------------------------------------------//
//Countdown------------------------------------//

var secondsLeft  = 10;
var countDownEl = document.querySelector("#countDown");
var timer;

    //Resets counter to 10 on page refresh//
    countDownEl.textContent = secondsLeft;

function startTimer () {
    timer = setInterval(function() {
        secondsLeft--;
        countDownEl.textContent = secondsLeft;
        //Stops Timer once it reaches 0--------//

        if (secondsLeft === 0) {
            clearInterval(timer);
        }
        //1000 = to 1 second ------------------//s
    }, 1000);
}


//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
//Questions----------------------------------------------------------------------------------------------//
//This allows for each question to become numbered and to move onto the next question after checking which questions have been answered 

function showQuestion (){
    console.log(questionNumber)
    if(questionNumber === 1){
        questionOne();
    }else(!questionOne)
    if (questionNumber === 2) {
        questionTwo();
    }else(!questionTwo)
    if (questionNumber === 3) {
        questionThree();
    }else(!questionThree)
    if (questionNumber === 4) {
        questionFour();
    }else(!questionFour)
    if (questionNumber === 5) {
        questionFive();
    }else(!questionFive)
};

//Question #1 ------------------------------------------------------------------//

function questionOne() {
    qNum.textContent = `1`
    question.textContent = "Pick the biggest NUMBER in Javascript"
    optionOne.textContent = '"17"'
    optionTwo.textContent = 'parseInt("14")'
    optionThree.textContent = 'fifteen'
    optionFour.textContent = 13

    //Correct Answer --------------------------//
    //Option 2//

    optionTwo.addEventListener("click", correctAnswer);

    //Incorrect Answer ------------------------//

    optionOne.addEventListener("click", wrongAnswer);
    optionThree.addEventListener("click", wrongAnswer);
    optionFour.addEventListener("click", wrongAnswer);
    }

//Question #2 ------------------------------------------------------------------//

function questionTwo() {
    qNum.textContent = '2';
    question.textContent = "How long is 1000 in a setInterval function";
    optionOne.textContent = "10 Seconds";
    optionTwo.textContent = "1000 microseconds";
    optionThree.textContent = "1 minute";
    optionFour.textContent = "1 second";

    //Correct Answer --------------------------//
    //Option 4//

    optionFour.addEventListener("click", correctAnswer);

    //Incorrect Answer ------------------------//
    optionOne.addEventListener("click", wrongAnswer);
    optionTwo.addEventListener("click", wrongAnswer);
    optionThree.addEventListener("click", wrongAnswer);
}

//Question #3 ------------------------------------------------------------------//

function questionThree() {
    qNum.textContent = '3';
    question.textContent = "What does the i in a for loop stand for?";
    optionOne.textContent = "iterator";
    optionTwo.textContent = "integer";
    optionThree.textContent = "item";
    optionFour.textContent = "index";

    //Correct Answer --------------------------//
    //Option 4//

    optionOne.addEventListener("click", correctAnswer);

    //Incorrect Answer ------------------------//
    optionTwo.addEventListener("click", wrongAnswer);
    optionThree.addEventListener("click", wrongAnswer);
    optionFour.addEventListener("click", wrongAnswer);
}

//Question #4 ------------------------------------------------------------------//

function questionFour() {
    qNum.textContent = '4';
    question.textContent = "Which logical comparison evaluates for OR";
    optionOne.textContent = "or";
    optionTwo.textContent = "&&";
    optionThree.textContent = "==";
    optionFour.textContent = "||";

    //Correct Answer --------------------------//
    //Option 4//

    optionFour.addEventListener("click", correctAnswer);

    optionOne.addEventListener("click", wrongAnswer);
    optionTwo.addEventListener("click", wrongAnswer);
    optionThree.addEventListener("click", wrongAnswer);
}

//Question #5 ------------------------------------------------------------------//

function questionFive() {
    qNum.textContent = '5';
    question.textContent = "Using a console.log(This) selects what?";
    optionOne.textContent = "returns as undefined";
    optionTwo.textContent = "the variable above";
    optionThree.textContent = "Window";
    optionFour.textContent = "Document";

    //Correct Answer --------------------------//
    //Option 4//

    optionThree.addEventListener("click", function(){
        removeListeners();
        scorePoints();
        secondsLeft+=5;
        questionReset();
        clearInterval(timer);
        questionNumber = 1;
        startButton.disabled = false;
        startButton.textContent = "Play Again?";

    });

    optionOne.addEventListener("click", wrongAnswer);
    optionTwo.addEventListener("click", wrongAnswer);
    optionThree.addEventListener("click", wrongAnswer);
}

//-------------------------------------------------------------------------------------------------------//
//Questions Reset, and additional Functions for the questions--------------------------------------------//

function questionReset() {
    qNum.textContent = ""
    question.textContent = "";
    optionOne.textContent = "";
    optionTwo.textContent = "";
    optionThree.textContent = "";
    optionFour.textContent = "";

}

//Wrong Answer ---------------------------------//

function wrongAnswer() {
    secondsLeft-= 5;
} 

//Correct Answer -------------------------------//

function correctAnswer () {
    removeListeners();
    scorePoints();
    secondsLeft+=5;
    questionReset();
    questionNumber++;
    showQuestion();
}

//Removes the Event Listener from the Current function in order to keep it from bubbling and keeping the correct button
//from staying from the previous question and allowing to pass to the next question even with the wrong answer

function removeListeners () {
    optionOne.removeEventListener("click", correctAnswer);
    optionTwo.removeEventListener("click", correctAnswer);
    optionThree.removeEventListener("click", correctAnswer);
    optionFour.removeEventListener("click", correctAnswer);

    optionOne.removeEventListener("click", wrongAnswer);
    optionTwo.removeEventListener("click", wrongAnswer);
    optionThree.removeEventListener("click", wrongAnswer);
    optionFour.removeEventListener("click", wrongAnswer);
}