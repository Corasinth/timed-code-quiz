// Listens for clicks on an answer and judges how to proceed based on correct/incorrect and what question we're on
document.body.addEventListener ("click", function (event) {
    if (event.target.matches("button") === true) {
        switch (event.target.id) {
            case "correct1":
            console.log ("correct!")
            break;
            case "wrong1":
            console.log ("incorrect!");
            break;
            case "correct2":
            console.log ("correct!");
            break;
            case "wrong2":
            console.log ("incorrect!");
            break;
            case "correct3":
            console.log ("correct!");
            break;
            case "wrong3":
            console.log ("incorrect!");
            break;
            case "correct4":
            console.log ("correct!");
            break;
            case "wrong4":
            console.log ("incorrect!");
            break;
            case "correct5":
            console.log ("correct!");
            break;
            case "wrong5":
            console.log ("incorrect!");
            break;
            case "correct6":
            console.log ("correct!");
            break;
            case "wrong6":
            console.log ("incorrect!");
            break;
        }
    }
})