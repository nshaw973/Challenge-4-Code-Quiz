//Global Variables-----------------------------//
var questionNumber = 0;
console.log(questionNumber);
//---------------------------------------------//
//QuerySelectors-------------------------------//
//Question QuerySelectors----------------------//
 
/* var qHeader =document.querySelector(".question-header") */
var qNum = document.querySelector(".qNum");
var question = document.querySelector(".question");
var optionOne = document.querySelector("#o1");
var optionTwo = document.querySelector("#o2");
var optionThree = document.querySelector("#o3");
var optionFour = document.querySelector("#o4");

//-------------------------------------------------------------------------------------------------------//
//Score, Start Button, and Countdown---------------------------------------------------------------------//
//---------------------------------------------//
//Score----------------------------------------//

var pointsEl = document.querySelector("#points");
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

var startButton = document.querySelector(".startbutton");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.textContent = "Start"
    removeScoreboard();
    clearScTim();
    //keeps button from being clicked again by user mid quiz//
    startButton.disabled = true;
    startTimer();
    showQuestion();
    addOptionsStyle();

}

//Play again Button----------------------------//
//appears after all questions answered correctly, or if the timer reaches 0//

function playAgain() {
    questionNumber = 0;
    addOptionsStyle();
    questionReset();
    clearInterval(timer);
    startButton.disabled = false;
    startButton.textContent = "Play Again?";
}

//clear score and time on play again so that the score and timer don't stack on top of each other//
function clearScTim () {
    points = 0;
    secondsLeft = 10;
    pointsEl.textContent = 0;
    countDownEl.textContent = 10;
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
            removeScoreboard();
            clearInterval(timer);
            playAgain();
        }
        //1000 = to 1 second ------------------//
    }, 1000);
}

//Page Styling---------------------------------//

var optionsStyle = document.querySelector(".option-style");


function addOptionsStyle (){
    if(questionNumber === 1) {
        enterNameBoard.classList.remove("playerName")
        optionsStyle.classList.remove("opacity-hidden")
        optionsStyle.classList.add("options");
    } else if (questionNumber === 6 || secondsLeft === 0){
        qNum.textContent = ""
        optionsStyle.classList.remove("options");
        optionsStyle.classList.add("opacity-hidden");
    }}

//-------------------------------------------------------------------------------------------------------//
//Scoreboard log-----------------------------------------------------------------------------------------//

//Enter Your Name ------------------------------------------------------------------//
//append elements to Div//

var enterNameBoard = document.querySelector(".playerScore")
var inputField = document.createElement("input");
var h1El = document.createElement("h1");
var ScoreEl = document.createElement("h2");
var timeEl = document.createElement("h2");


function enterName () {

    var playerName = document.querySelector(".playerScore");
    enterNameBoard.classList.add("playerName")
    playerName.appendChild(h1El);
    playerName.appendChild(inputField);
    playerName.appendChild(ScoreEl);
    playerName.appendChild(timeEl);

    h1El.textContent = "Enter Your Name for the Scoreboard!!!"
    inputField.setAttribute("type", "email");
    ScoreEl.classList.add("score")
    timeEl.classList.add("timeLeft")

    var userScore = document.querySelector(".score");
    var timeLeftScoreboard = document.querySelector(".timeLeft");

    //added the -5 for secondsLeft, because the final score on the scoreboard kept adding 5 for some odd reason//
    timeLeftScoreboard.textContent = "Time: " + (secondsLeft - 5);
    userScore.textContent = "Points: " + points;

    playAgain();
    enterNameBoard.classList.remove("playername");
}

//This will remove the scoreboard by removing the elements that were created previously for the html//

function removeScoreboard () {
    inputField.remove();
    h1El.remove();
    ScoreEl.remove();
    timeEl.remove();
   };



//Get final score and have it show up on end screen









//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------//
//Questions----------------------------------------------------------------------------------------------//
//This allows for each question to become numbered and to move onto the next question after checking which questions have been answered 

function showQuestion (){
    questionNumber++;
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
    if (questionNumber === 6) {
        clearInterval(timer);
        //once all questions are done, it runs to the final screen that allows replay//
        addOptionsStyle();
        playAgain();
        enterName();

    }
};

//Question #1 ------------------------------------------------------------------//

function questionOne() {
    qNum.textContent = `Question: 1`
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
    qNum.textContent = 'Question: 2';
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
    qNum.textContent = 'Question: 3';
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
    qNum.textContent = 'Question: 4';
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
    qNum.textContent = 'Question: 5';
    question.textContent = "Using a console.log(This) selects what?";
    optionOne.textContent = "returns as undefined";
    optionTwo.textContent = "the variable above";
    optionThree.textContent = "Window";
    optionFour.textContent = "Document";

    //Correct Answer --------------------------//
    //Option 4//

    optionThree.addEventListener("click", correctAnswer);

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