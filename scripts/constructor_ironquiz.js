var Quiz = function (name) {

    this.questions = questions;
    this.countResponseTrue = 0;
    this.newListQuestion = [];
    this.getNickName = function(){

        var p = new Player()

        return p.getNickName();
    }
};

Quiz.prototype.checkResponse = function (filter) {

    this.questions.forEach(element => {

        if (this.questions.indexOf(element) == 0) {

            element.options.forEach(items => {

                if (items.titleOpitons == filter) {

                    if (items.responseOptions) {

                        element.statusQuestion = false
                        this.countResponseTrue += 10;

                        database.countResponseTrue = this.countResponseTrue;
                    

                        this.questions.shift()
                        this.renderQuestion()
                    } else {

                       console.log(JSON.stringify(database))

                        document.getElementById("ranking").click();
                    }
                }

            });

        }




    })




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




    this.questions.forEach(element => {

        if (this.questions.indexOf(element) == 0 && element.statusQuestion == true) {

            element.options.forEach(items => {

                document.getElementById("title-question").innerText = element.title;
                countOptions++
                str += '<li> <div class="form-check">';
                str += `<input class="form-check-input" type="radio" name="radiosOptions" id="radOp${countOptions}" value="${items.titleOpitons}">`;
                str += items.titleOpitons + '</li>';

            });

        }




    })

    document.getElementById('list-options').innerHTML = str;






}

