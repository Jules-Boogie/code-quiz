//

var timeEL = document.getElementById("countdown");
var startEL = document.getElementById("start-button");
var submitBtnEL = document.querySelector(".submit-button");
var submitScoreEL = document.getElementById("submit-score");
var questionsEL = document.getElementById("questions");
var optionsEL = document.getElementById("options");
var firstScreen = document.getElementById('first-screen')
var questionScreen = document.getElementById('question-screen')
var optionBtn = document.querySelectorAll(".btn")
var alertUser = document.querySelector(".alert")
var inputInitial = document.getElementById("inputInitial")

var correctAnswer;
var optionsAnswer;
var totalScore = 0;
var timeDisplay = 20;
var userInitial;
var timeRemaining;
var questionArray = -1 // this will help retrieve values from the array
//var userScore;
var highScore;

//event listeners

startEL.addEventListener("click", startTime);

submitBtnEL.addEventListener("click", function (event) {
    event.stopPropagation();
    finalScore();
    //console.log("test")

    window.location.href = "scores.html"


});


optionsEL.addEventListener("click", function (event) {
    event.stopPropagation();

    if (event.target.textContent === correctAnswer) {
        totalScore++
        alertUser.innerHTML = "Correct!";
        setTimeout(removeAlert, 1000)
        showAlert(); //create this
    } else {
        totalScore--
        alertUser.innerHTML = "Please review course material!";
        setTimeout(removeAlert, 1000)
        timeDisplay = timeDisplay - 1;
        showAlert();
    }
    displayQuestions();

})

/*
$("#options").on("click", function(){
    var temp = $(this).text();
    console.log(temp) 
    console.log(correctAnswer)
    if (temp === correctAnswer) {
        totalScore++
        $(".alert").text("Correct!");
        setTimeout(removeAlert, 1000)
        showAlert(); //create this
    } else {
        totalScore--
        $(".alert").text("Please review course material!");
        setTimeout(removeAlert, 1000)
        timeDisplay = timeDisplay - 20;
        showAlert();
    }
    displayQuestions();
    
})



$(".option1").on("click", function () {
    var temp = $(this).text();
    console.log(temp)
    console.log(correctAnswer)
    if (temp === correctAnswer) {
        totalScore++
        $(".alert").text("Correct!");
        setTimeout(removeAlert, 1000)
        showAlert();
    } else {
        totalScore--
        $(".alert").text("Please review course material!");
        setTimeout(removeAlert, 1000)
        timeDisplay = timeDisplay - 20;
        showAlert();
    }console.log(totalScore)
    displayQuestions();
})

$(".option2").on("click", function () {
    var temp = $(this).text();
    if (temp === correctAnswer) {
        totalScore++
        $(".alert").text("Correct!");
        setTimeout(removeAlert, 1000)
        showAlert(); //create this
    } else {
        totalScore--
        $(".alert").text("Please review course material!");
        setTimeout(removeAlert, 1000)
        timeDisplay = timeDisplay - 20;
        showAlert();
    }
    displayQuestions();
})


$(".option3").on("click", function () {
    var temp = $(this).text();
    if (temp === correctAnswer) {
        totalScore++
        $(".alert").text("Correct!");
        setTimeout(removeAlert, 1000)
        showAlert(); //create this
    } else {
        totalScore--
        $(".alert").text("Please review course material!");
        setTimeout(removeAlert, 1000)
        timeDisplay = timeDisplay - 20;
        showAlert();
    }
    displayQuestions();
})

$(".option4").on("click", function () {
    var temp = $(this).text();
    if (temp === correctAnswer) {
        totalScore++
        $(".alert").text("Correct!");
        setTimeout(removeAlert, 1000)
        showAlert(); //create this
    } else {
        totalScore--
        $(".alert").text("Please review course material!");
        setTimeout(removeAlert, 1000)
        timeDisplay = timeDisplay - 20;
        showAlert();
    }
    displayQuestions();
})
*/



    //timer
    function setTime() {
        var timerIn = setInterval(function () {
            timeDisplay--;
            timeEL.innerHTML = "Time remaining: " + timeDisplay;


            if (timeDisplay === 0 || questions.length === questionArray) {
                clearInterval(timerIn);
                alert("Quiz Over");
                setTimeout(quizOver, 500); //need to figure this out
            }
        }, 1000);

    }

    function quizOver() {
        questionScreen.classList.add('d-none');
        submitScoreEL.classList.remove('d-none');
        document.getElementById("user-score").textContent = "Your final score is " + totalScore + "!"

    }

    function finalScore() {
        userInitial = inputInitial.Value
        var userScore = {
            initial: userInitial,
            score: totalScore
        }
        highScore = JSON.parse(localStorage.getItem('highScore'))
        highScore.push(userScore)
        localStorage.setItem("highScore", JSON.stringify(highScore))
        // convert into string and add into array and add to local storage. 
    }


    //we start the timer by clicking the button
    function startTime() {

        // after we click the button,
        //we have to remove the first screen and put the second using the classlist.add and classlist.remove
        firstScreen.classList.add('d-none')
        questionScreen.classList.remove('d-none')
        setTime();
        displayQuestions();
    }

    function displayQuestions() {
        questionArray++;
        //optionsEL.textContent = "";
        questionsEL.textContent = questions[questionArray].question;
        correctAnswer = questions[questionArray].answer;
        //console.log(correctAnswer)
        optionsAnswer = questions[questionArray].options;
        for (var i = 0; i < optionsAnswer.length; i++) {
            //optionsEL.innerHTML = optionsAnswer[i]
            //var li = document.createElement('li')
            //li.textContent = optionsAnswer[i]
            //optionBtn.appendChild(optionsEL)
            //console.log(optionsAnswer[0])
            var option1 = document.querySelector(".option1")
            option1.innerHTML = optionsAnswer[0]

            var option2 = document.querySelector(".option2")
            option2.innerHTML = optionsAnswer[1]

            var option3 = document.querySelector(".option3")
            option3.innerHTML = optionsAnswer[2]

            var option4 = document.querySelector(".option4")
            option4.innerHTML = optionsAnswer[3]



        }




    }

    function removeAlert() {
        alertUser.style.display = "none"; //set alert user to not be displayed


    }

    function showAlert() {
        alertUser.removeAttribute('style');


    }













































/*
timer pseudocode:
1)click start button and the timer starts

2) if answer is wrong - 5 seconds get removed from the timeleft

3) when timer reaches 0, the game is over.

*/

/*
main.html

1) has the timer and the highscore links at the top right and left
link to view highscore is on the left // time is on the right
2) has the start button
3) reflects question when timer starts
4) question has buttons
5)shows a form for user to add initial
6) saves and returns initial of user and final score


highscore
view high score link
1) stores the highest score for the user.





*/

