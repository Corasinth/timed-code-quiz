//=====================Variables=====================

//Identifying 'pages'
var startPage = document.getElementById("startpage")
var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")
var question4 = document.getElementById("question4")
var question5 = document.getElementById("question5")
var question6 = document.getElementById("question6")
var correct = document.getElementsByClassName("correct")
var wrong = document.getElementsByClassName("wrong")
var scoreSubmission = document.getElementById("scoresubmission")

var pageArray = [startPage, question1, question2, question3, question4, question5, question6,scoreSubmission]

//=====================Functions=====================





//=====================Event Listener=====================
// Listens for clicks on an answer and judges how to proceed based on correct/incorrect and what question we're on
document.body.addEventListener ("click", function (event) {
    if (event.target.matches("button") === true) {
       for (var i = 0; i<pageArray.length; i++) {
        var currentIndex = pageArray[i]
        if (window.getComputedStyle((currentIndex)).display === "block") {
            pageArray[i].setAttribute("style", "display:none")
            if ([i] == pageArray.length - 1) {
            pageArray[0].setAttribute("style", "display:block");
            break;
        } else {
            console.log (pageArray[i+1])
            pageArray[i+1].setAttribute("style", "display:block");
            break;
        }
        }
        }
    }
})
