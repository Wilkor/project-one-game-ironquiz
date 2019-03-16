var Quiz = function (name) {

    this.questions = questions;
    this.countResponseTrue = 0;
    this.newListQuestion = [];
    this.idField = '',
    this.milliseconds = 0;
    this.second = 0;
    this.currentTime = 0;
    this.intervalId = 0;


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


Quiz.prototype.checkConditionalElse = function () {

    var doc = document.getElementById('list-options').children

    for (let index = 0; index < doc.length; index++) {
        const element = doc[index].children;

        var response = element[index].parentNode.textContent.substr(0,(element[index].parentNode.textContent.length-3))


        console.log(response)
      
        if (this.checkResponse(response)) {

            var t = element[index].parentNode

            t.setAttribute("class", "answer-true")

            return false
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
                        this.countResponseTrue += 10;
                      //  p.setCookie(this.countResponseTrue,'Player 1')
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

Quiz.prototype.returnNewOjects = function () {

    questions.filter((element) => element.statusQuestion === true)
        .map((element) => {

            newListQuestion.push({ element });

        }, [])

}
Quiz.prototype.returnNextQuestion = function () {


}

Quiz.prototype.returnSortQuestions = function () {

}

Quiz.prototype.finishGame = function () {

    var r = new Ranking()
    var p = new Player()
    r.ranking.push(p.getNickName(), p.score())

}

Quiz.prototype.renderQuestion = function () {


    var str = '';
    var countOptions = 0;
    var questions = ["0", "A", "B", "C", "D", "E", "F"];

    this.questions.forEach(element => {

        if (this.questions.indexOf(element) == 0 && element.statusQuestion == true) {


        //   var shuffleOpt=   element.options.sort(()=>{

        //        return .5 - Math.random();
        //   })

   
        //   console.log(shuffleOpt)
          element.options.forEach(items => {
                document.getElementById("title-question").innerText = element.title;
                countOptions++
                str += `<li class="answer-tru" id="li-${countOptions}"><input type="radio" id="${countOptions}-option" onclick="validar(this,this.value)" name="selector" value="${items.titleOpitons}" ><label for="${countOptions}-option">${items.titleOpitons}</label><div class="check"><div class="inside"></div><div class="options">${questions[countOptions]}) <div></div></li>`


            })

        }




    })

    document.getElementById('list-options').innerHTML = str;






}




