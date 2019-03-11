var Player = function (name){

   this.nickname = name;
 
   this.getNickName =  function(){
    return this.nickname
   }


   this.score = function(){
     var s = new Quiz();
      return s.countResponseTrue
   }
   

}