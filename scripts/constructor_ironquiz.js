var Quiz = function () {

    this.questions = questions;
    this.countResponseTrue = 0;
    this.newListQuestion = [];



};

Quiz.prototype.checkResponse = function (quest) {


    quest.filter((element) => {

        if (element.resposeOptions) {

            this.countResponseTrue += 10

        } else {

        //tratar quando não tiver um responseOption
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
    r.ranking.push(p.fullName(), p.score())

}


