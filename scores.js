var previousBtn = document.getElementById("#previous-button")
var nextBtn = document.getElementById("#clear-button")
var scoreNow = document.getElementById("#scoreValue");


// event listeners

previousBtn.addEventListener("click", function(){

    goback();

    
})


nextBtn.addEventListener("click",function(){
    goBack();

    localStorage.clear();
})

function goBack(){
    window.history.back(); // back() reloads the previous url
}

highScore = JSON.parse(localStorage.getItem("highScore")); //converts highScore into an object

highScore.sort(function(b,a){return(a-b)})