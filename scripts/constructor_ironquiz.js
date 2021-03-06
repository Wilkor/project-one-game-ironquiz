var Quiz = function (name) {

    this.nivelOne = nivelOne;
    this.nivelTwo = nivelTwo;
    this.nivelThree = nivelThree;
    this.countResponseTrue = 0;
    this.newListQuestion = [];
    this.idField = '',
        this.milliseconds = 0;
    this.second = 0;
    this.currentTime = 0;
    this.intervalId = 0;
    this.status = true;
    this.qtdHelp = 0;
    this.statusVoz = false;
    this.countVoz = 0;
    this.nivelQueston = 0;
    this.hour = 0;
    this.minutes = 0;
    this.seconds = 0;



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


    if (this.countResponseTrue < 40) {

        arrayNivel = this.nivelOne;

    } else if (this.countResponseTrue > 40 || this.countResponseTrue < 100) {

        this.nivelQueston = 2
        arrayNivel = this.nivelTwo;
        this.nivelQueston = 0

    } else if (this.countResponseTrue >= 100) {
        this.nivelQueston = 3;

        arrayNivel = this.nivelThree;
        this.nivelQueston = 0
    }


    arrayNivel.forEach((element) => {

        element.options.sort(() => {
            return .5 - Math.random();

        });


    })


}



Quiz.prototype.resetClick = function () {


    clearInterval(this.intervalId);

    this.second = 0;

   // secDec.innerHTML = "0"
    secUni.innerHTML = "0"
    // milDec.innerHTML = "0"
    //  milUni.innerHTML = "0"

};

Quiz.prototype.stopClick = function () {

    clearInterval(this.intervalId)
};


Quiz.prototype.setMilliseconds = function () {

    if (this.milliseconds < 99) {

        this.milliseconds++;

        if (this.milliseconds >= 10) {

            // milDec.style.display = "none"

        }

       //   milUni.innerHTML = this.milliseconds;
    }

    if (this.milliseconds == 99) {
        this.milliseconds = -1;
    }



    return this.currentTime = this.milliseconds

};


Quiz.prototype.setSeconds = function () {


    if (this.milliseconds == 0) {
        this.second++;

        if (this.second < 10) {

            var splitS = this.twoDigitsNumber(this.second)
            //secDec.innerHTML = splitS[0]
            secUni.innerHTML = "0"+splitS[1]
        } else {
            //secDec.innerHTML = "0"
            secUni.innerHTML = this.second;
        }

    }


    if (this.second == 59) {

        this.second = -1;
    }

    return this.currentTime = this.second

};

Quiz.prototype.twoDigitsNumber = function (number) {

    var newNumberArray = '' + number <= 10 ? "0" + number : "" + number

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


        for (let index = 0; index <= doc.length -1 ; index++) {
           
    

            var element = this.checkResponse(doc[index].textContent.split(" ")[1],'check-true');
   
        
                if(element===true){
                    doc[index].setAttribute("class","answer-true")

                }

        }

     

    }



}

Quiz.prototype.checkResponse = function (filter, event) {

    var result = ""

    var arrayNivel = [];


    if (this.countResponseTrue < 40) {

        arrayNivel = this.nivelOne;

    } else if (this.countResponseTrue > 40 || this.countResponseTrue < 100) {



        arrayNivel = this.nivelTwo;

    } else if (this.countResponseTrue >= 100) {

        arrayNivel = this.nivelThree;
    }


 arrayNivel.forEach(element => {

        if (arrayNivel.indexOf(element) == 0) {

            element.options.forEach(items => {

                if (items.titleOpitons == filter) {

                
                    if (items.responseOptions) {

                        if (event != 'check-true') {

                            database.countResponseTrue = this.countResponseTrue += 10;
                         
                        } else {

                            database.countResponseTrue = this.countResponseTrue;
                        }

                        // database.countResponseTrue = event != 'check-true' ? this.countResponseTrue += 10 : this.countResponseTrue;
                        pointsGame.innerHTML = database.countResponseTrue
                        arrayNivel.shift()
                        document.getElementById('text-speech').innerHTML = this.randonMessages(database.msgSuccess)
                        result = true
                        element.statusQuestion = false


                    } else {
                        result = false
                        document.getElementById('text-speech').innerHTML = this.randonMessages(database.msgError)
                      

                    }
                }
            });
        }
    })

    return result

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


Quiz.prototype.randonMessages = function (array) {

    let index = Math.floor(Math.random() * array.length);
    return array[index]
}


Quiz.prototype.renderQuestion = function () {



    if (this.countResponseTrue > 70) {

        document.getElementById("text-speech").innerHTML = this.randonMessages(database.msgFinish)


        setTimeout(() => {

            document.getElementById("play").click()

        }, 2000)



        window.location.href = `finish.html?player=Payer1&pontos=${this.countResponseTrue}&time=${this.hour},${this.minutes},${this.seconds}`

    }

    if (this.statusVoz == false && this.countVoz == 0) {

        document.getElementById('text-speech').innerHTML = "Parabens, você esá no nivel: " + quiz.nivelQueston;
        document.getElementById("play").click();

        quiz.countVoz++;

    }

    this.shuffleOption()

    var str = '';
    var countOptions = 0;
    var questions = ["0", "A)", "B)", "C)", "D)", "E)", "F)"];

    var filter = 0;



    if (this.countResponseTrue < 40) {

        arrayNivel = this.nivelOne;

    } else if (this.countResponseTrue > 40 || this.countResponseTrue < 100) {


        arrayNivel = this.nivelTwo;
        this.countVoz++
    } else if (this.countResponseTrue >= 100) {

        arrayNivel = this.nivelThree;
        this.countVoz++
    }




    arrayNivel.forEach(element => {

        if (arrayNivel.indexOf(element) == 0 && element.statusQuestion == true) {

            element.options.forEach(items => {

                this.newListQuestion.push(items)

                document.getElementById("title-question").innerText = element.title;
                countOptions++
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




