var Player = function (nickname){

   this.nickname = nickname;
 
   this.getNickName =  function(){
    return this.nickname
   }


   this.score = function(){
     var s = new Quiz();
      return s.countResponseTrue
   }
   

}