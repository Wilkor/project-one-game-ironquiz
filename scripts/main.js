var quiz = new Quiz();
var ranking = new Ranking();

//////quiz.shuffle()
//quiz.shuffleOption()
quiz.renderQuestion()
quiz.probability()
quiz.desafio();
setIntervalGame();



quiz.returnNewOjects(1)

var data = new Date();

var hour = data.getHours();
var minutes = data.getMinutes();
var second = data.getSeconds();



function setIntervalGame() {

  quiz.intervalId = setInterval(() => {

    quiz.setMilliseconds()
    quiz.setSeconds()

    if (quiz.second >= 20) {


      quiz.stopClick(quiz.intervalId)

      setTimeout(() => {
        window.location.href = `gameover.html?player=Payer1&pontos=${quiz.countResponseTrue}&time=${hour},${minutes},${second}`
      }, 700)

    }



  }, 10)
}


function half(context) {


  var setID = context.getAttribute("id")

  if (context.getAttribute("class") == "help-one") {

    document.getElementById(setID).style.display = "none";
    quiz.fifth()

    document.getElementById('qtd-help').innerHTML = `Você usou ${quiz.qtdHelp += 1}/3 de ajuda(s)`

  } else if (context.getAttribute("class") == "help-two") {

    document.getElementById(setID).style.display = "none";
    document.getElementById('qtd-help').innerHTML = `Você usou ${quiz.qtdHelp += 1}/3 de ajuda(s)`
    return false;

  } else if (context.getAttribute("class") == "help-three") {

    document.getElementById('qtd-help').innerHTML = `Você usou ${quiz.qtdHelp += 1}/3 de ajuda(s)`
    document.getElementById(setID).style.display = "none";
    return false;

  }



}


function disableOtherOption(idField, whocall) {


  if (!quiz.status) {

    if (idField == "li-1") {

      document.getElementById("li-2").style.pointerEvents = "none";


    } else if (idField == "li-2") {

      document.getElementById("li-1").style.pointerEvents = "none";


    }

    return false;


  }

  if (whocall == 'main') {

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

  } else {


    if (idField == "li-1") {

      document.getElementById("li-2").style.pointerEvents = "none";


    } else if (idField == "li-2") {

      document.getElementById("li-1").style.pointerEvents = "none";


    }


  }







}

function validar(event, text) {

  var t = event.parentNode;
  t.setAttribute("class", "answer-true");
  quiz.idFiel = t.getAttribute("id");
  var textOption = text.getAttribute("value")


  console.log(textOption)
  if (quiz.checkResponse(textOption, t)) {

    disableOtherOption(quiz.idFiel, 'main')

    setTimeout(() => {
      // p.setCookie(quiz.countResponseTrue,'Player 1')

    }, 1000)


    quiz.stopClick(this.intervalId)

    setTimeout(function () {

      quiz.renderQuestion()
      quiz.resetClick()

      setIntervalGame();
    }, 2000)

  } else {


    console.log(textOption)

    quiz.stopClick(quiz.intervalId)

    t.setAttribute("class", "answer-false")

    if (!quiz.status) {


      quiz.checkConditionalElse(t.getAttribute("id"))


    } else {

      quiz.checkConditionalElse()
    }


    disableOtherOption(quiz.idFiel, 'constructor')
    setTimeout(() => {
      window.location.href = `gameover.html?player=Payer1&pontos=${quiz.countResponseTrue}&time=${hour},${minutes},${second}`
    }, 1000)



  }


}
