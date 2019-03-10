var Quiz = function(){


    this.questions = questions;
    this.countResponseTrue  =  0;
    this.countResponseWrong =  0;
    this.newListQuestion    = [];


    
};

Quiz.prototype.checkResponse = function (){


}



Quiz.prototype.returnNewOjects = function(){

    questions.filter((element) => element.statusQuestion === true)
    .map((element) => {

        newListQuestion.push({element});

    }, [])

}


Quiz.prototype.returnNextQuestion = function(){


}


Quiz.prototype.returnSortQuestions = function(){

}




