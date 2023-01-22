//Global Variables-----------------------------//

var secondsLeft  = 120;

//---------------------------------------------//
//QuerySelectors-------------------------------//


var qNum = document.querySelector(".qNum")
var question = document.querySelector(".question")
var optionOne = document.querySelector("#o1")
var optionTwo = document.querySelector("#o2")
var optionThree = document.querySelector("#o3")
var optionFour = document.querySelector("#o4")


//---------------------------------------------//
//Functions------------------------------------//





//---------------------------------------------//
//Start Quiz Button----------------------------//

var startButton = document.querySelector(".startbutton")

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startButton.disabled = true;
    startTimer();
    questionOne();
}

//---------------------------------------------//
//Countdown------------------------------------//

var countDownEl = document.querySelector("#countDown");
var timer;


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

//---------------------------------------------//
//Questions------------------------------------//

var scorePoints;
var correctAnswer; 
var wrongAnswer;

function questionOne() {
    qNum.textContent = '1'
    question.textContent = "Pick the biggest number"
    optionOne.textContent = '"17"'
    optionTwo.textContent = 14
    optionThree.textContent = 'fifteen'
    optionFour.textContent = 12
    if (optionTwo.onclick) {
        secondsLeft + 20;
        questionReset();
        questionTwo();

    }

}

function questionTwo() {
    qNum.textContent = '2';
    question.textContent = "How long is 1000 in a setInterval function";
    optionOne.textContent = "10 Seconds";
    optionTwo.textContent = "1 second";
    optionThree.textContent = "1 minute";
    optionFour.textContent = "1000 microseconds";

}

//---------------------------------------------//
//Questions Reset------------------------------//

function questionReset() {
    qNum.textContent = ""
    question.textContent = "";
    optionOne.textContent = "";
    optionTwo.textContent = "";
    optionThree.textContent = "";
    optionFour.textContent = "";

}