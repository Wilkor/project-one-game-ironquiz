var quiz = new Quiz();
var ranking = new Ranking();
quiz.shuffle()
quiz.shuffleOption()
quiz.renderQuestion();

setIntervalGame();

function setIntervalGame() {

  quiz.intervalId = setInterval(() => {

    quiz.setMilliseconds()
    quiz.setSeconds()

    if (quiz.second >= 15) {

    
     quiz.stopClick(quiz.intervalId)

     setTimeout(() => {

       window.location.href = "gameover.html"

     }, 700)

    }

    

   



  }, 10)
}



function disableOtherOption(idField) {

  if (idField == "li-1") {

    document.getElementById("li-2").style.pointerEvents = "none";
    document.getElementById("li-3").style.pointerEvents = "none";

  } else if (idField == "li-2") {

    document.getElementById("li-1").style.pointerEvents = "none";
    document.getElementById("li-3").style.pointerEvents = "none";

  } else if (idField == "li-3") {

    document.getElementById("li-1").style.pointerEvents = "none";
    document.getElementById("li-2").style.pointerEvents = "none";

  }

}

function validar(event, text) {

  var t = event.parentNode;
  t.setAttribute("class", "answer-true");
  quiz.idFiel = t.getAttribute("id");

  if (quiz.checkResponse(text, t)) {
    disableOtherOption(quiz.idFiel)

    setTimeout(()=>{
     // p.setCookie(quiz.countResponseTrue,'Player 1')

    },1000)


    quiz.stopClick(this.intervalId)

    setTimeout(function () {
      quiz.renderQuestion()
      quiz.resetClick()

      setIntervalGame();
    }, 2000)

  } else {

    quiz.stopClick(quiz.intervalId)
    disableOtherOption(quiz.idFiel)
    t.setAttribute("class", "answer-false")
    quiz.checkConditionalElse()
    setTimeout(() => {
      window.location.href = "gameover.html";
    }, 1000)

  }


}
