var Ranking = function (){

    this.ranking = []

}



Ranking.prototype.showPlayes = function(){

document.getElementById("body-ranking-loose").innerHTML = JSON.stringify(this.ranking)

}