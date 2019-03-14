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

function validar(event,text){

  var t = event.parentNode;

  
 console.log(t)
  if(quiz.checkResponse(text,t)){

  
    t.setAttribute("class", "answer-true");

    setTimeout(function(){
 
      quiz.renderQuestion()

    },2000)

  }else{

   t.setAttribute("class","answer-false")
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