




//=====================Variables=====================

//Identifying 'pages'
var startPage = document.getElementById("startpage")
var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")
var question4 = document.getElementById("question4")
var question5 = document.getElementById("question5")
var question6 = document.getElementById("question6")
var scoreSubmission = document.getElementById("scoresubmission")

var pageArray = [startPage, question1, question2, question3, question4, question5, question6,scoreSubmission]

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


/* switch (event.target.id) {
            case "begin":
            console.log("begin");
            startPage.setAttribute("style", "display:none")
            question1.setAttribute("style", "display:block")
            break;
            case "correct1":
            console.log ("correct!");
            question1.setAttribute("style", "display:none")
            question2.setAttribute("style", "display:block")
            break;
            case "correct2":
            question2.setAttribute("style", "display:none")
            question3.setAttribute("style", "display:block")
            console.log ("correct!");
            break;
            case "correct3":
            question3.setAttribute("style", "display:none")
            question4.setAttribute("style", "display:block")
            console.log ("correct!");
            break;
            case "correct4":
            question4.setAttribute("style", "display:none")
            question5.setAttribute("style", "display:block")
            console.log ("correct!");
            break;
            case "correct5":
            question5.setAttribute("style", "display:none")
            question6.setAttribute("style", "display:block")
            console.log ("correct!");
            break;
            case "correct6":
            question6.setAttribute("style", "display:none")
            scoreSubmission.setAttribute("style", "display:block")
            console.log ("correct!");
            break;
            case "submit":
            scoreSubmission.setAttribute("style", "display:none")
            startPage.setAttribute("style", "display:block")
        }
        switch (event.target.className){
            case "wrong1":
            console.log ("incorrect!");
            question1.setAttribute("style", "display:none")
            question2.setAttribute("style", "display:block")
            break;
            case "wrong2":
            console.log ("incorrect!");
            question2.setAttribute("style", "display:none")
            question3.setAttribute("style", "display:block")
            break;
            case "wrong3":
            console.log ("incorrect!");
            question3.setAttribute("style", "display:none")
            question4.setAttribute("style", "display:block")
            break;
            case "wrong4":
            console.log ("incorrect!");
            question4.setAttribute("style", "display:none")
            question5.setAttribute("style", "display:block")
            break;
            case "wrong5":
            console.log ("incorrect!");
            question5.setAttribute("style", "display:none")
            question6.setAttribute("style", "display:block")
            break;
            case "wrong6":
            console.log ("incorrect!");
            question6.setAttribute("style", "display:none")
            scoreSubmission.setAttribute("style", "display:block")
            break;
        }
        */