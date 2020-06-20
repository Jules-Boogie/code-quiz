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





//we start the timer by clicking the button
function startTime() {
    firstScreen.classList.add('d-none')
    questionScreen.classList.remove('d-none')
    setTime();
    displayQuestions();
}


//event listeners

startEL.addEventListener("click", startTime);

submitBtnEL.addEventListener("click", function (event) {
    event.stopPropagation();
    finalScore();
    //console.log("test")

    window.location.href = "scores.html" //window.local.replace() works as well


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
        userInitial = inputInitial.value
        var userScore = {
            initial: userInitial,
            score: totalScore
        }
        highScore = JSON.parse(localStorage.getItem('highScore') || '[]');
        highScore.push(userScore)
        localStorage.setItem("highScore", JSON.stringify(highScore));
        // convert into string and add into array and add to local storage. 
    }


  
    function displayQuestions() {
        questionArray++;
        //optionsEL.textContent = "";
        questionsEL.textContent = questions[questionArray].question;
        correctAnswer = questions[questionArray].answer;
        //console.log(correctAnswer)
        optionsAnswer = questions[questionArray].options;
        for (var i = 0; i < optionsAnswer.length; i++) {
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












































