//=====================Variables=====================

//Identifying 'pages'
var startPage = document.getElementById("startpage");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var question6 = document.getElementById("question6");
var scoreSubmission = document.getElementById("scoresubmission");

var pageArray = [startPage, question1, question2, question3, question4, question5, question6,scoreSubmission];

//Corrent and incorrect answers
var correct = document.getElementsByClassName("correct");
var wrong = document.getElementsByClassName("wrong");
var numberOfCorrect= 0;

//Identifying timer fields
var seconds = document.getElementById("secondCounter");
var timeLeft = 60;
var setTime;

//Identifying highscore fields
var initialsInput = document.getElementById("initials");
var scoreList = document.getElementById("scoreList");
var scoreArray = []
var forbiddenArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "+", "/", ",", ".", ":", ";", '"', "'", "[", "]", "{", "}", "|", "\\", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
var includesForbidden = false

//=====================Functions=====================

//Gets scoreArray information from local storage, sets currrent scoreArray to stored value, and writes that to the highscore list
function highscoreHandling () {
    scoreArray = JSON.parse(localStorage.getItem("scoreArray"))
    scoreArray.sort()
    scoreList.textContent = ""
    for (var i=0;i<scoreArray.length;i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(scoreArray[i]));
        scoreList.appendChild(li)
    }
}

//Sets timer to countdown and displays results. Also writes to score and ends quiz if timer hits 0, or lower than 0.
function timer () {
    setTime = setInterval (function () {
    timeLeft -= 1;
    displayTime()
    if (timeLeft <= 0) {
        clearInterval (setTime);
        timeLeft = 0;
        displayTime();
        for (var i=0; i<document.getElementsByClassName("question").length;i++) {
            document.getElementsByClassName("question")[i].setAttribute("style", "display:none");
        }
        scoreSubmission.setAttribute("style", "display:block");
        document.getElementById("score").textContent = calculateScore(timeLeft, numberOfCorrect);
    }
}, 1000) 
}

//Shorter way to set the time display in various places
function displayTime () {
    if (timeLeft < 0) {
        timeLeft = 0;
    }
seconds.textContent = timeLeft;
}
    

//Calculates score so that a person who runs out of time but got correct answers doesn't get a score of 0
function calculateScore (timeScore, correctAnswers) {
    score = timeScore + (correctAnswers*10);
    return score;
}

//Checks to make sinitialsArray.value includes only letters
function checkForbidden () {
    for (var i=0;i<forbiddenArray.length;i++) {
        includesForbidden = Array.from(initialsInput.value).includes(forbiddenArray[i])
        if (includesForbidden === true) {
            break;
        }
    }
    return includesForbidden;
}

//=====================Event Listener=====================

// Listens for clicks on an answer and judges how to proceed based on what kind of page is displaying and which button was clicked. 
document.body.addEventListener ("click", function (event) {
    //Starts timer at quiz start
    if (event.target.id === "begin") {
        timer();
        numberOfCorrect = 0;
    }
    //Create time penalty for incorrect answer
    if (event.target.matches(".wrong") === true) {
        timeLeft -= 10
        displayTime();
    //Keeps track of correct answers for score calculator
    } else if (event.target.matches(".correct") === true) {
        numberOfCorrect += 1;
    }
    //Handles form submission, error alerts, and resetting the quiz
    if (event.target.id === "submit") {
        if (Boolean(initialsInput.value) === false) {
            window.alert ("Please enter your initials to save your score! Or, click 'Continue Without Submitting' to let your score go.")
            return;
        } else if (checkForbidden () === true ) {
            window.alert ("Please enter only letters into the initials field. Or, click 'Continue Without Submitting' to let your score go.")
            return;
        } else {
        calculateScore(timeLeft, numberOfCorrect);
        scoreArray.push (initialsInput.value + "__" + score)
        localStorage.setItem("scoreArray", JSON.stringify(scoreArray))
        highscoreHandling()
        timeLeft = 60;
        score = 0;    
        displayTime();
        }
    }
    //Handles resetting quiz without submitting form
    if (event.target.id === "submit1") {
        calculateScore(timeLeft, numberOfCorrect)
        timeLeft = 60;
        score = 0;
        displayTime();
    }   
 //Handles making the correct set of elements appear and dissapear
    if (event.target.matches("button") === true) {
       for (var i = 0; i<pageArray.length; i++) {
        var currentIndex = pageArray[i];
        if (window.getComputedStyle((currentIndex)).display === "block") {
            pageArray[i].setAttribute("style", "display:none");
            //Loops quiz back to start button
            if ([i] == pageArray.length - 1) {
            pageArray[0].setAttribute("style", "display:block");
            break;
        //Makes score page appear if your answer the last question
        } else if ([i] == pageArray.length - 2) {
            pageArray[i+1].setAttribute("style", "display:block");
            clearInterval(setTime);
            displayTime()
            document.getElementById("score").textContent = calculateScore(timeLeft, numberOfCorrect)
            break;
        } else
            pageArray[i+1].setAttribute("style", "display:block");
            break;
        }
        }
        }
    }
)

//=====================Calling Functions=====================
highscoreHandling();
displayTime()