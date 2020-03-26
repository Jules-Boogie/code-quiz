var previousBtn = document.getElementById("previous-button")
var nextBtn = document.getElementById("clear-button")
var scoreNow = document.getElementById("scoreValue");


// event listeners

previousBtn.addEventListener("click", function(){
    goBack();
    
   // window.location.href = "main.html"
    
})


nextBtn.addEventListener("click",function(){
    goBack();

    localStorage.clear();
})

function goBack(){
    window.history.back(); // back() reloads the previous url
}

highScore = JSON.parse(localStorage.getItem("highScore")); //converts highScore into an object

highScore.sort(function(b,a){return(a-b)}) //using  the inbuilt javascript sort feature to rearrange the scores from highest to lowest.
for(var i = 0; i < highScore.length; i ++){
    var testscore = document.createElement("p")
    scoreNow.appendChild(testscore)
    testscore.innerHTML ="Good Job, " + highScore[i].initial + " your highest score is " + highScore[i].score + " out of 6!"
}