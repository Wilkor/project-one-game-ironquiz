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

btnCheck.addEventListener('click', btnCheckFunction, false);

