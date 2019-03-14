var quiz = new Quiz();
quiz.renderQuestion();



var btnCheck = document.getElementById('gameQuestion');
var btnCheckFunction = function () {

  var checkedValue = '';
  var checkBoxElements = document.getElementsByClassName('form-check-input');

  for (var i = 0; checkBoxElements[i]; ++i) {
    if (checkBoxElements[i].checked) {
      checkedValue = checkBoxElements[i].value;
      break;
    }
  }
  quiz.checkResponse(checkedValue)


};

//btnCheck.addEventListener('click', btnCheckFunction, false);

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

    setTimeout(function () {
      quiz.renderQuestion()
    }, 2000)

  } else {


    disableOtherOption(quiz.idFiel)
    t.setAttribute("class", "answer-false")
    quiz.checkConditionalElse()

  }




}
// var btnDiv = document.querySelectorAll(".button-div")

// btnDiv.forEach(function(btnDiv) {
//   btnDiv.addEventListener('click', function () {
//     quiz.checkResponse(btnDiv.textContent)
//     console.log(btnDiv);
//   });
// });