//

var timeEL = document.getElementById("#countdown");
var startEL = document.getElementById("#start-button");
var submitBtnEL = document.getElementById("#submit-button");
var submitScoreEL = document.getElementById("#submit-score");
var questionsEL = document.getElementById("#questions");
var optionsEL = document.getElementById("#options");
var firstScreen = document.getElementById('#first-screen')
var questionScreen = document.getElementById('#question-screen')
var optionBtn = document.querySelectorAll(".btn")
var answer1 = document.getElementById("#button1")
var answer2 = document.getElementById("#button2")
var answer3 = document.getElementById("#button3")
var answer4 = document.getElementById("#button4")
var alertUser = document.querySelector(".alert")
var inputInitial = document.getElementById("#inputInitial")

var correctAnswer;
var optionsAnswer;
var totalScore = 0;
var timeDisplay = 100;
var userInitial;
var timeRemaining; 
var questionArray = -1 // this will help retrieve values from the array
//var userScore;
var highScore;

//event listeners

startEL.addEventListener("click", startTime);
submitBtnEL.addEventListener("click", function(event){
event.stopPropagation();
finalScore();

window.location.replace("./scores.html")


})

for (var i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener("click", function userChoice(event) {
        event.stopPropagation();

        if (event.currentTarget.innerText === correctAnswer) {
            totalScore++
            alertUser.innerHTML = "Correct!";
            setTimeout(removeAlert,1000)
            showAlert(); //create this
        } else {
            totalScore--
            alertUser.innerHTML = "Please review course material!";
            setTimeout(removeAlert,3000)
            timeDisplay = timeDisplay - 20;
            showAlert();
        }
        questionArray++
        if(questionArray < 6){
            displayQuestions;
        }

    });
}




//timer
function setTime() {
    var timerIn = setInterval(function () {
        timeDisplay--;
        timeEL.innerHTML = timeDisplay;


    if(timeDisplay === 0 || questions.length === questionArray){
        clearInterval(timerIn);
        alert("Quiz Over");
        quizOver(); //need to figure this out
    }
    },1000)

}

function quizOver(){
    questionScreen.classList.add('d-none');
    submitScoreEL.classList.remove('d-none');
    document.getElementById("#user-score").textContent = "Your final score is " + totalScore + "!"
 
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




function storeScore(){

}
//we start the timer by clicking the button
function startTime(){

    // after we click the button,
    //we have to remove the first screen and put the second using the classlist.add and classlist.remove
    firstScreen.classList.add('d-none')
    questionScreen.classList.remove('d-none')
    setTime();
    displayQuestions();
}

function displayQuestions(){
    questionArray++;
    questionsEL.textContent = questions[questionArray].question;
    correctAnswer = questions[questionArray].answer;
    optionsAnswer = questions[questionArray].options;
    for(var i = 0; i < optionsAnswer.length; i++){
        optionBtn.textContent = optionsAnswer[i]
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


