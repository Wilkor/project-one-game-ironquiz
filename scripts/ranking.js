var Ranking = function (){

    this.ranking = []


}




Ranking.prototype.showPlayesGameOver = function(){


    var p = new Player()
    var responseCookie = p.getCookie()
    var responseCookie = responseCookie.split(";");


    document.getElementById("name").innerHTML = responseCookie[0]
    document.getElementById("points").innerHTML = responseCookie[1] - 10
    
    



}