var Quiz = function (name) {

    this.questions = questions;
    this.countResponseTrue = 0;
    this.newListQuestion = [];
    this.getNickName = function () {

        var p = new Player()

        return p.getNickName();
    }
};


const p = new Player();
const r = new Ranking()

Quiz.prototype.checkConditionalElse = function(){

    var doc = document.getElementById('list-options').children  
    
    console.log(doc.length)
    for (let index = 0; index < doc.length; index++) {
        const element = doc[index].children;

          console.log()

            if (this.checkResponse(element[index].parentNode.textContent)) {

                var t = element[index].parentNode

                console.log(t)
                t.setAttribute("class", "answer-true")
                
                return false
            

            
        }

    }

    
}

Quiz.prototype.checkResponse = function (filter, event) {
    var result = true
    var arrayOption = []
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
                        // this.renderQuestion();
                        result = true
                    } else {

                        console.log(event)

             
                        
                        //event.setAttribute("class", "answer-false")
     

                 
                        result = false
                        //r.showPlayes()        
                        // document.getElementById("ranking").click();
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
    var questions = 0;

    this.questions.forEach(element => {

        if (this.questions.indexOf(element) == 0 && element.statusQuestion == true) {

            element.options.forEach(items => {

                document.getElementById("title-question").innerText = element.title;
                countOptions++
                //  str += '<li> <div class="form-check">';
                //  str += `<input class="form-check-input" type="radio" name="radiosOptions" id="radOp${countOptions}" value="${items.titleOpitons}">`;
                //  str += items.titleOpitons + '</li>';
                // str+= `<li><div class="button-div" onclick="" id="button-${countOptions}"><input class="checkbox-group__checkbox" type="radio" value="1" id="bananas" name="fruits">${items.titleOpitons}</div></li><br>`
                str += ` <li class="answer-tru"><input type="radio" id="${countOptions}-option" onclick="validar(this,this.value)" name="selector" value="${items.titleOpitons}" ><label for="${countOptions}-option">${items.titleOpitons}</label><div class="check"><div class="inside"></div></div></li>`


            });

        }




    })

    document.getElementById('list-options').innerHTML = str;






}




