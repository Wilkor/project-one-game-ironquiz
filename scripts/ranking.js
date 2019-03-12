var Ranking = function (){

    this.ranking = []

}



Ranking.prototype.showPlayes = function(){

    var p = new Player();
    this.ranking.push(p.getNickName(),p.score())

document.getElementById("body-ranking-loose").innerHTML = this.ranking

}