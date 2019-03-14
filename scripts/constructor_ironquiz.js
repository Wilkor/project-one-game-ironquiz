var Quiz = function (name) {

    this.questions = questions;
    this.countResponseTrue = 0;
    this.newListQuestion = [];
    this.idField='',
    this.getNickName = function () {

        var p = new Player()

        return p.getNickName();
    }
};


const p = new Player();
const r = new Ranking()


Quiz.prototype.shuffle = function(){

    this.questions.sort(function () {
        return  .5 - Math.random() ;
      });
}

Quiz.prototype.checkConditionalElse = function(){

    var doc = document.getElementById('list-options').children  

    for (let index = 0; index < doc.length; index++) {
        const element = doc[index].children;


            if (this.checkResponse(element[index].parentNode.textContent)) {

                var t = element[index].parentNode

                    t.setAttribute("class", "answer-true")
                
                return false
        }

    }

    
}

Quiz.prototype.checkResponse = function (filter, event) {

    var result = true
    var arOp = []
    this.questions.forEach(element => {

        if (this.questions.indexOf(element) == 0) {

            element.options.forEach(items => {
                arOp.push(items)
                if (items.titleOpitons == filter) {
                    if (items.responseOptions) {
                        element.statusQuestion = false
                        this.countResponseTrue += 10;
                        database.countResponseTrue = this.countResponseTrue;
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
    var questions = ["0","A","B","C","D","E","F"];

    this.questions.forEach(element => {

        if (this.questions.indexOf(element) == 0 && element.statusQuestion == true) {

            element.options.forEach(items => {

                document.getElementById("title-question").innerText = element.title;
                countOptions++
                str += `<li class="answer-tru" id="li-${countOptions}"><input type="radio" id="${countOptions}-option" onclick="validar(this,this.value)" name="selector" value="${items.titleOpitons}" ><label for="${countOptions}-option">${items.titleOpitons}</label><div class="check"><div class="inside"></div><div class="options">${questions[countOptions]}) <div></div></li>`


            });

        }




    })

    document.getElementById('list-options').innerHTML = str;






}




