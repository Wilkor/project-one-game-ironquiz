var Quiz = function (name) {

    this.questions = questions;
    this.countResponseTrue = 0;
    this.newListQuestion = [];
    this.idField = '',
    this.milliseconds = 0;
    this.second = 0;
    this.currentTime = 0;
    this.intervalId = 0;
    this.status = true;
    this.qtdHelp = 0;
    


    this.getNickName = function () {

        var p = new Player()

        return p.getNickName();
    }
};

const p = new Player();
const r = new Ranking()

var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var pointsGame = document.getElementById("pointsgame")
Quiz.prototype.shuffle = function () {

    this.questions.sort(function () {
        return .5 - Math.random();
    });
}


Quiz.prototype.shuffleOption = function (element) {


    // console.log(element)

    // this.questions.forEach((element)=>{

    //     element.options.sort( ()=> {
    //      // return  .5 - Math.random() ;

    //     console.log( element.options)

    //       });


    // })


}



Quiz.prototype.resetClick = function () {


    clearInterval(this.intervalId);

    this.second = 0;

    secDec.innerHTML = "0"
    secUni.innerHTML = "0"
    milDec.innerHTML = "0"
    milUni.innerHTML = "0"

};

Quiz.prototype.stopClick = function () {

    clearInterval(this.intervalId)
};


Quiz.prototype.setMilliseconds = function () {

    if (this.milliseconds < 99) {

        this.milliseconds++;

        if (this.milliseconds >= 10) {

            milDec.style.display = "none"

        }

        milUni.innerHTML = this.milliseconds;
    }

    if (this.milliseconds == 99) {
        this.milliseconds = -1;
    }



    return this.currentTime = this.milliseconds

};


Quiz.prototype.setSeconds = function () {


    if (this.milliseconds == 0) {
        this.second++;


        if (this.second >= 10) {

            var splitS = this.twoDigitsNumber(this.second)
            secDec.innerHTML = splitS[0]
            secUni.innerHTML = splitS[1]
        } else {
            secDec.innerHTML = "0"
            secUni.innerHTML = this.second;
        }

    }


    if (this.second == 59) {

        this.second = -1;
    }

    return this.currentTime = this.second

};

Quiz.prototype.twoDigitsNumber = function (number) {

    var newNumberArray = '' + number < 10 ? "0" + number : "" + number

    return newNumberArray

};


Quiz.prototype.checkConditionalElse = function (optionId) {

    var doc = document.getElementById('list-options').children

    if (optionId) {



        if (optionId == "li-1") {

            document.getElementById("li-1").setAttribute("class", "answer-false")
            document.getElementById("li-2").setAttribute("class", "answer-true")

        } else {


            document.getElementById("li-2").setAttribute("class", "answer-false")
            document.getElementById("li-1").setAttribute("class", "answer-true")
        }



    } else {


        for (let index = 0; index < doc.length - 1; index++) {
            const element = doc[index].textContent;

            var response = element

            if (this.checkResponse(response.split(" ")[1], 'check-true')) {

                var t = doc[index]

                t.setAttribute("class", "answer-true")

                return false
            }

        }

    }



}

Quiz.prototype.checkResponse = function (filter, event) {

    var result = true
    var arOp = []
    var ranking = new Ranking();

    this.questions.forEach(element => {

        if (this.questions.indexOf(element) == 0) {

            element.options.forEach(items => {
                arOp.push(items)
                if (items.titleOpitons == filter) {
                    if (items.responseOptions) {
                        element.statusQuestion = false
                        database.countResponseTrue = event != 'check-true' ? this.countResponseTrue += 10 : this.countResponseTrue;
                        pointsGame.innerHTML = database.countResponseTrue
                        this.questions.shift()
                        result = true
                    } else {

                        result = false

                    }
                }
            });
        }
    })

    return result

}

Quiz.prototype.returnNewOjects = function (filterHard) {

    console.log(filterHard)

   this.questions.forEach(element=>{

       if(element.hardNivel === filterHard){

        this.newListQuestion.push(element)
       }
   })

 console.log(this.newListQuestion)

}
Quiz.prototype.returnProbability = function (filter) {

    var resultProbability = 0;
    this.newListQuestion.filter((element) => {


        if (element.letterOpition == filter) {

            resultProbability = element.probability
        }

    })

    return resultProbability
}

Quiz.prototype.returnSortOption = function () {


    let p = Math.floor(Math.random() * this.newListQuestion.length);


    return p
}

Quiz.prototype.finishGame = function () {

    var r = new Ranking()
    var p = new Player()
    r.ranking.push(p.getNickName(), p.score())

}

Quiz.prototype.renderQuestion = function () {

  


    var str = '';
    var countOptions = 0;
    var questions = ["0", "A)", "B)", "C)", "D)", "E)", "F)"];

   var filter = 0 ;

    if(this.countResponseTrue <10){

        filter = 1
    }else{

        filter = 2
    }
    
  var arrayT = []

    this.questions.forEach(element=>{
      

         if(element.hardNivel == 1){
        
            arrayT.push(element)
         }

    
    })



     arrayT.forEach(element => {

        if (arrayT.indexOf(element) == 0 && element.statusQuestion == true) {

            element.options.forEach(items => {

                this.newListQuestion.push(items)

                document.getElementById("title-question").innerText = element.title;
                countOptions++

                // str += `<li class="answer-true-${countOptions} " id="li-${countOptions}"><input type="radio" id="${countOptions}-option" onclick="validar(this,this.value)" name="selector" value="${items.titleOpitons}" ><label for="${countOptions}-option">${items.titleOpitons}</label><div class="check"><div class="inside"></div><div class="options">${questions[countOptions]}) <div></div></li>`
                str += `<li class="answer-true-${countOptions} " id="li-${countOptions}">`
                str += `<div class="options" onclick="validar(this,this)" value="${items.titleOpitons}">${questions[countOptions]} ${items.titleOpitons}`
                str += `</div>`
                str += `</li>`

            })

        }




    })

    document.getElementById('list-options').innerHTML = str;






}

Quiz.prototype.fifth = function () {


    this.status = false;

    var responseTrue = ''
    var arrayOtherOptions = []
    var countOptions = 0
    var responseOptionsLetter = ''
    var str = '';


    this.newListQuestion.filter((element) => {


        if (element.responseOptions) {
            responseTrue = element.titleOpitons
            responseOptionsLetter = element.letterOpition
        }
        if (!element.responseOptions) {
            arrayOtherOptions.push(element)
        }



    })


    arrayOtherOptions.sort(function () {
        return .5 - Math.random();
    });

    for (let index = 0; index <= 1; index++) {

        countOptions++
        str += `<li class="answer-true-${countOptions} " id="li-${countOptions}">`
        str += `<div class="options" onclick="validar(this,this)" value="${index == 1 ? responseTrue : arrayOtherOptions[0].titleOpitons}">${index == 1 ? responseOptionsLetter : arrayOtherOptions[0].letterOpition} ${index == 1 ? responseTrue : arrayOtherOptions[0].titleOpitons}`
        str += `</div>`
        str += `</li>`

    }

    document.getElementById('list-options').innerHTML = str;

    disableOtherOption(quiz.idFiel, 'constructor')


}

Quiz.prototype.probability = function () {

    let coe = document.getElementById('coe-option')
    let gabi = document.getElementById('gabriel-option')
    let romulo = document.getElementById('romulo-option')

    let coeProbality = document.getElementById('coe-option-1')
    let gabiProbality = document.getElementById('gabriel-option-2')
    let romuloProbality = document.getElementById('romulo-option-3')

    let placaOne = document.getElementById('placa-one-one')
    let placaTwo = document.getElementById('placa-two-two')
    let placaThree = document.getElementById('placa-three-three')

    let placaOneProbability = document.getElementById('placa-one-one-porcent')
    let placaTwoProbability = document.getElementById('placa-two-two-porcent')
    let placaThreeProbability = document.getElementById('placa-three-three-porcent')


    for (let index = 0; index < 2; index++) {

        var c = this.desafio(), g = this.desafio(), r = this.desafio();


        coe.innerHTML = c;
        gabi.innerHTML = g;
        romulo.innerHTML = r;
        placaOne.innerHTML = c + ") ";
        placaTwo.innerHTML = g + ") ";
        placaThree.innerHTML = r + ") ";

        coeProbality.innerHTML = (this.returnProbability(c) * 100) + "%";
        gabiProbality.innerHTML = (this.returnProbability(g) * 100) + "%";
        romuloProbality.innerHTML = (this.returnProbability(r) * 100) + "%";

        placaOneProbability.innerHTML = " " + (this.returnProbability(c) * 100) + "%";
        placaTwoProbability.innerHTML = " " + (this.returnProbability(g) * 100) + "%";
        placaThreeProbability.innerHTML = " " + (this.returnProbability(r) * 100) + "%";



    }





}


Quiz.prototype.desafio = function () {

    let list = [];
    let weight = [];

    this.newListQuestion.forEach((element) => {

        list.push(element.letterOpition)
    })

    this.newListQuestion.forEach((items) => {

        weight.push(items.probability)

    })

    return getRandomItem(list, weight);


}

var rand = function (min, max) {
    return Math.random() * (max - min) + min;
};

var getRandomItem = function (list, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });

    var random_num = rand(0, total_weight);
    var weight_sum = 0;


    for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);

        if (random_num <= weight_sum) {
            return list[i];
        }
    }


};





