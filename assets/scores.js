var previousBtn = document.getElementById("previous-button")
var nextBtn = document.getElementById("clear-button")
var scoreNow = document.getElementById("scoreValue");


// event listeners

previousBtn.addEventListener("click", function(){
    goBack();
})


nextBtn.addEventListener("click",function(){
    goBack();
    localStorage.clear();
})

function goBack(){
    window.history.back();
}

highScore = JSON.parse(localStorage.getItem("highScore")); 
highScore.sort(function(b,a){return(a-b)}) 
for(var i = 0; i < highScore.length; i ++){
    var testscore = document.createElement("p")
    scoreNow.appendChild(testscore)
    testscore.innerHTML ="Good Job, " + highScore[i].initial + " your highest score is " + highScore[i].score + " out of 6!"
}
