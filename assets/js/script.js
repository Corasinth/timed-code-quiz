




//Variables
var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")
var question4 = document.getElementById("question4")
var question5 = document.getElementById("question5")
var question6 = document.getElementById("question6")

// Listens for clicks on an answer and judges how to proceed based on correct/incorrect and what question we're on
document.body.addEventListener ("click", function (event) {
    if (event.target.matches("button") === true) {
        switch (event.target.id) {
            case "begin":
            console.log("begin");
            break;
            case "correct1":
            console.log ("correct!");
            break;
            case "correct2":
            console.log ("correct!");
            break;
            case "correct3":
            console.log ("correct!");
            break;
            case "correct4":
            console.log ("correct!");
            break;
            case "correct5":
            console.log ("correct!");
            break;
            case "correct6":
            console.log ("correct!");
            break;
        }
        switch (event.target.className){
            case "wrong1":
            console.log ("incorrect!");
            break;
            case "wrong2":
            console.log ("incorrect!");
            break;
            case "wrong3":
            console.log ("incorrect!");
            break;
            case "wrong4":
            console.log ("incorrect!");
            break;
            case "wrong5":
            console.log ("incorrect!");
            break;
            case "wrong6":
            console.log ("incorrect!");
            break;
        }
    }
})

